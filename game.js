let x,y,hero

//сразу после загрузки страницы срабатывает этот код
document.addEventListener("DOMContentLoaded", function() {

    W = document.activeElement.clientWidth
    H = document.activeElement.clientHeight

    hero = document.getElementsByClassName("hero")[0]

    x = W/2 - 25 
    y = H/2 - 25
})

function move(){
    x += 1
    y += 1
    hero.style.left = x + "px"
    hero.style.top = y + "px"
}

setInterval(move,1)