console.log(data)

function loadItemsOnScreen(data=[]) {
    data.map(item => {
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
}