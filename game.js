let x,y,hero, player1, player2

let xspeed = 0, yspeed = 0

let player1_speed = 0, player2_speed = 0
let player1_y, player2_y

//сразу после загрузки страницы срабатывает этот код
addEventListener("DOMContentLoaded", function() {

    W = document.activeElement.clientWidth
    H = document.activeElement.clientHeight
    hero = document.getElementsByClassName("hero")[0]
    player1 = document.getElementsByClassName("player1")[0]
    player2 = document.getElementsByClassName("player2")[0]
    
    player1_y = H/2 - 125
    player1.style.top = player1_y

    player2_y = H/2 - 125;
    player2.style.left = W-50
    player2.style.top = player2_y

    x = W/2 - 25 
    y = H/2 - 25

    addEventListener("keydown", change_speed)
    setInterval(move,1)
})

function change_speed(e){
    switch(e.code){
        case "KeyW": player1_speed = -1; break;
        case "KeyS": player1_speed = 1; break;
        case "ArrowUp": player2_speed = -1; break;
        case "ArrowDown": player2_speed = 1; break;
    }
}

function move(){
    x += xspeed
    y += yspeed
    hero.style.left = x 
    hero.style.top = y

    player1_y += player1_speed
    player1.style.top = player1_y

    player2_y += player2_speed
    player2.style.top = player2_y
}