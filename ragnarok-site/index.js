const $productList = document.querySelector("#productList")

document.addEventListener('DOMContentLoaded', () => {
    loadItemsOnScreen(data)
})
console.log("Dados:")
console.log(data)

function loadItemsOnScreen(data = []) {
    const productList = data.map(item => {
        return `<li class="flex-row p-1">
        <div>
            <img src="${item.image}"
                alt="" width="120px">
        </div>

        <div class="p-1">
            <h4 class="fs-2">${item.name}</h4>
            <p class="fs-2">${item.description}</p>
            <h4 class="color-black-2 fs-3">R$ ${item.value}</h4>
        </div>
    </li>`
    })

    productList.forEach(li => $productList.innerHTML += li)
}

function handleBuy() {
    var stripe = Stripe('pk_test_51JV0dAHIXjsNwm1Ce0ztCpoqq6wltPkOV2TeamoJNVFoQqXI4CIFYtnGymz8UfnYlQQfL2vxVoKJxzPKD53ZbRBK00Gqz50bUf')

    var orderBtn = document.getElementById('order-btn')

    orderBtn.addEventListener('click', () => {

        stripe.redirectToCheckout({

            sessionId: '<%= sessionId %>'

        })

    })
}