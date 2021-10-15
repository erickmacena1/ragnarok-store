const $progress = document.querySelector('#progress')

window.addEventListener('DOMContentLoaded', () => {
    progressToRedirect();
})

function redirectToUrl(url='') {
    if(url != '') {
        let redirectUrl = url
    }
    else {
        let currUrl = window.location.href
        currUrl = currUrl.split('/')
        currUrl.pop()
        currUrl[currUrl.length - 1] = 'index.html'
        let redirectUrl = currUrl.join('/')
    }

    window.location.href = redirectUrl
}

function progressToRedirect(url='') {
    const tick = 24
    const endTime = 3000
    let time = 0
    let width = 0

    let intervalID = setInterval(() => {
        if (time >= 3000) {
            clearInterval(intervalID)
            
            redirectToUrl(url)
            return
        }

        time += tick
        width += 100 / (endTime / tick)
        console.log(width)
        $progress.style.width = width + 'vw'
    }, tick)
}