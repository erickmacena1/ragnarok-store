const $productList = document.querySelector("#productList")

document.addEventListener('DOMContentLoaded', () => {
    loadItemsOnScreen(data)
    Array.from(document.querySelectorAll(".buy-btn"))
        .forEach(btn => btn.onclick = handleOrder)
})
console.log("Dados:")
console.log(data)

function loadItemsOnScreen(data = []) {
    const productList = data.map(item => {
        return `<li class="flex-row align-center p-1">
        <div>
            <img src="${item.image}"
                alt="" width="120px">
        </div>

        <div id=${item.id} class="p-1">
            <h4 class="fs-2">${item.name}</h4>
            <p class="fs-2">${item.description}</p>
            <h4 class="color-black-2 fs-3">R$ ${item.value}</h4>
            <button class="fs-2 buy-btn m-05">Comprar</button>
        </div>

    </li>`
    })

    productList.forEach(li => $productList.innerHTML += li)
}

function handleOrder(e) {

    console.log("BUY ORDER")
    console.log(e.target.parentNode.id)

    // var stripe = Stripe('pk_test_51JV0dAHIXjsNwm1Ce0ztCpoqq6wltPkOV2TeamoJNVFoQqXI4CIFYtnGymz8UfnYlQQfL2vxVoKJxzPKD53ZbRBK00Gqz50bUf')

    // var orderBtn = document.getElementById('order-btn')

    // orderBtn.addEventListener('click', () => {

    //     stripe.redirectToCheckout({

    //         sessionId: '<%= sessionId %>'

    //     })

    // })
}