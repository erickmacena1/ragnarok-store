const $productList = document.querySelector("#productList")

document.addEventListener('DOMContentLoaded', async () => {
    getAllProducts().then(productList => {
        console.log(productList)
        loadItemsOnScreen(productList)

        Array.from(document.querySelectorAll(".buy-btn"))
            .forEach(btn => btn.onclick = () => handleOrder(btn.parentNode));
    })

    Array.from(document.querySelectorAll(".modal-switch"))
        .forEach(modalBtn => {
            modalBtn.onclick = () => switchModal(modalBtn)
        })
})

async function getAllProducts() {
    let products

    try {
        products = await fetch('https://ragnarok-app.herokuapp.com/api/v1')

        return await products.json()

    } catch (error) {
        console.log(error)
    }

}

function loadItemsOnScreen(data = []) {
    const productList = data.map(item => {
        return `<li class="flex-row align-center p-1">
        <div>
            <img src="${item.image.url}"
                alt="" width="120px">
        </div>

        <div id=${item.id} class="p-1">
            <h4 class="fs-2 color-black-2">${item.name}</h4>
            <p class="fs-2">${item.description}</p>
            <h4 class="color-black-1 fs-3">R$ ${item.value}</h4>
            <button class="fs-2 btn buy-btn m-05 color-black-2">Comprar</button>
        </div>

    </li>`
    })

    productList.forEach(li => $productList.innerHTML += li)
}

async function handleOrder(productElem) {

    const productId = productElem.id
    console.log(productId)

    fetch(`https://ragnarok-app.herokuapp.com/api/v1/checkout/${productId}`, {
        method: "GET",
        mode: 'cors',
    })
        .then(res => res.json())
        .then(data => window.location.href = data.checkoutUrl)

}

function switchModal(modalBtnElem) {
    modalBtnElem.querySelector('.modal').classList.toggle('d-none')
}