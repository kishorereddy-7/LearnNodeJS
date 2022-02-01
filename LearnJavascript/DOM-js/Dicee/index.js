var dicee1 = document.querySelector(".img1")
var dicee2 = document.querySelector(".img2")

function Dicee1() {
    var randomNumber1 = Math.floor(Math.random()*6)+1
    var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"
    return dicee1.setAttribute('src', randomDiceImage1)
}

function Dicee2() {
    var randomNumber2 = Math.floor(Math.random()*6)+1
    var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"
    return dicee2.setAttribute('src', randomDiceImage2)
}

function Winner() {
    first = dicee1.getAttribute("src")
    second = dicee2.getAttribute("src")
    if (first > second) {
        document.querySelector("h1").textContent = "Player1 is the Winner"
    }
    else if (second > first) {
        document.querySelector("h1").textContent = "Player2 is the Winner"
    }
    else {
        document.querySelector("h1").textContent = "Draw"
    }
}

