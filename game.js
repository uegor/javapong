
//сразу после загрузки страницы срабатывает этот код
document.addEventListener("DOMContentLoaded", function() {

    W = document.activeElement.clientWidth
    H = document.activeElement.clientHeight

    var hero = document.getElementsByClassName("hero")[0]

    hero.style.left = W/2 - 25 + "px"
    hero.style.top = H/2 - 25 + "px"
    
})
