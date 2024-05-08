//variaveis da apc
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReaset = document.querySelector("btnReset")
const randomNumber = math.round(Math.random() * 10)
let xAttempts = 1

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReaset.addEventListener('click', handleResetClick)

//função callback
function handleTryClick (event){
    event.preventDefault() //não faça o padrao

    const inputnumber = document.querySelector("#inputnumber")
    
    if(Number(inputnumber) == randomnumber) {
        togglescreen()
        document
        .querySelector(".screen2 h2")
        .innerText `acertou em ${xAttempts} tentativas`
    }

    inputnumber.value = ""
    xAttempts++
}

function handleResetClick(){
    togglescreen
    xAttempts = 1
}

function togglescreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}