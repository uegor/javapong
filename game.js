let x,y,hero, player1, player2

//Math.random() дает от 0 до 1
//round округляет до целого
//xspeed - направление слево вправо, должно быть строго
let xspeed = Math.round(Math.random())
if (xspeed==0) xspeed = -1

//направление вверх-вниз если будет близко к -1 или 1, то мяч будет улетать
//для этого делим
let yspeed = Math.random()/2

let player1_speed = 0, player2_speed = 0
let player1_y, player2_y

let count1, count2

//сразу после загрузки страницы срабатывает этот код
addEventListener("DOMContentLoaded", function() {

    W = document.activeElement.clientWidth
    H = document.activeElement.clientHeight
    hero = document.getElementsByClassName("hero")[0]
    player1 = document.getElementsByClassName("player1")[0]
    player2 = document.getElementsByClassName("player2")[0]

    count1 = document.getElementsByClassName("count1")[0]
    count2 = document.getElementsByClassName("count2")[0]
    
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

function loose(n){
    xspeed *= -1
    x = W/2
    y = H/2
    if (n==1) count1.innerHTML = parseInt(count1.innerHTML) + 1
    if (n==2) count2.innerHTML = parseInt(count1.innerHTML) + 1
}

function move(){
    x += xspeed
    y += yspeed

    //x и у это координаты левого верхнего угла мячика
    if (x<0) loose(1)
    if (x>W) loose(2)
    if (y<0 || y>H-50) yspeed *= -1

    hero.style.left = x 
    hero.style.top = y

    player1_y += player1_speed
    player1.style.top = player1_y

    player2_y += player2_speed
    player2.style.top = player2_y
}