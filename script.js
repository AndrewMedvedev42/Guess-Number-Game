'use strict';
// HAHAHAHAHA
let messDoc = document.getElementById("message")
let unKnownNumber = document.getElementById("unKnownNum")
let scoreNumber = document.getElementById("score")
let inputField = document.getElementById("input")
let checkButton = document.getElementById("button")
let BodyStruct = document.getElementById("body")
let againBtn = document.getElementById("again")
let highScore = document.getElementById("highscore")
let randomNum = Math.trunc( Math.random()*50)
console.log(randomNum)
let currentScore = Number(scoreNumber.textContent)

function randomGenerator(){
    randomNum = Math.trunc( Math.random()*20)
    return randomNum
};
// ----------------------------------------------------
function scoreMinus (number){
            currentScore  -= 1
            return currentScore
};

// ----------------------------------------------------

function whenPress(){
    if (!inputField.value){
        console.log("No Number")
    } else {
        if(inputField.value > randomNum){
            messDoc.textContent = "Too big."
            BodyStruct.style.backgroundColor = "#660000"

            scoreNumber.textContent = scoreMinus()
        } else if(inputField.value < randomNum){
            messDoc.textContent = "Too small."
            BodyStruct.style.backgroundColor = "#660000"

            scoreNumber.textContent = scoreMinus()
        } else{
            unKnownNumber.textContent = randomNum
            messDoc.textContent = "Congratulations"
            BodyStruct.style.backgroundColor = "#00b300"
            highScore.textContent = Number(highScore.textContent) + (scoreMinus() + 1)

        }
    }
    
}

function gameRefresher(){
    inputField.value = null
    messDoc.textContent = "Start guessing..."
    unKnownNumber.textContent = "?"
    BodyStruct.style.backgroundColor = "#222"
    randomGenerator()
    console.log(randomNum)

}

checkButton.addEventListener("click", whenPress)
againBtn.addEventListener("click", gameRefresher)

// return 