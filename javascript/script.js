const startButton = document.getElementById("start-button")
const startGameButton = document.getElementById("start-game")
const compareValue = []
let index;
let count = 0;

const minuteElement = document.getElementById("minute")
const secondElement = document.getElementById("second")
const miliSecondElement = document.getElementById("milisecond")

let timerMinute = 0
let timerSecond = 0;
let timerMiliSecond = 0;
const timerElement = document.getElementById("timer")
console.log(timerElement)

let flipElementBind;

let Minuteinterval;     
let Secondinterval;    
let MiliSecondinterval;

const dialogResult = document.getElementById("result-dialog");

const levelChooseDialog = document.getElementById("level-choose-dialog");

const cancelButton = document.getElementById("cancel-button")




const timeResult = document.getElementById("time-result")

const  menuButton = document.getElementById("back-to-menu")
const  retryButton = document.getElementById("retry-game")


let totalMoves = 0;
let totalMisses = 0;

const misessCheck = []

const totalMovesResult = document.getElementById("moves-result")
const totalMissesResult = document.getElementById("misses-result")


function toQuizPage(){
    window.location.href = "game.html"
    
}
if(startButton){
    startButton.addEventListener("click",() => levelChooseDialog.showModal())
    cancelButton.addEventListener("click", () => levelChooseDialog.close())

}

function startGame(){
    startTimer()
    elementsObjectArray.forEach(element => {
        element.boundFn = flipElement.bind(null, element)
        
        
        element.element.addEventListener("click",element.boundFn)
        
    })
    startGameButton.removeEventListener("click",startGame)
    
}

function displayResult(){
    dialogResult.showModal()
    dialogResult.style.transform = 'scale(1.1,1.1)'

    timeResult.textContent = `${minuteElement.innerText}:${secondElement.innerText}:${miliSecondElement.innerText}`
    timeResult.style.color = 'rgb(217, 193, 86)'
    totalMovesResult.textContent = totalMoves
    totalMovesResult.style.color = 'rgb(217, 193, 86)'
            
    totalMissesResult.textContent = totalMisses
    totalMissesResult.style.color = 'rgb(217, 193, 86)'
            


    menuButton.addEventListener("click", () => {
        window.location.href = "index.html"
    })
    retryButton.addEventListener("click", () => {
        window.location.href = "game.html"
    })

    setTimeout(() => {
        dialogResult.style.transform = 'scale(1,1)'
    },200)
}

function isFinished(){
    if(elementsObjectArray.length === 0){
        let timerElement = document.getElementById("timer")
        timerElement.style.color = "rgb(217, 193, 86)"
        timerElement.style.transition = "transform 0.05s"
        timerElement.style.transform = "scale(1.3,1.3)"
        setTimeout(() => {
            timerElement.style.transition = "transform 0.1s"
            timerElement.style.transform = "scale(1.05,1.05)"
        },100)


        setTimeout(displayResult,1000)

        
        
    
        clearInterval(Minuteinterval)
        clearInterval(Secondinterval)
        clearInterval(MiliSecondinterval)
    }
}

function timerMinuteCounter(){
    timerMinute++
    displayMinuteTimer(timerMinute)
    
}
function timerSecondCounter(){
    timerSecond++
    if(timerSecond === 60){
        timerSecond = 0
    }
    
    displaySecondTimer(timerSecond)
}
function timerMiliSecondCounter(){
    isFinished()
    timerMiliSecond++
    if(timerMiliSecond === 100){
        timerMiliSecond = 0
    }
    
    displayMiliSecondTimer(timerMiliSecond)
}

function displayMinuteTimer(timer){
    if(timer < 10){
        minuteElement.innerText = `0${timer}`
    } else {
        minuteElement.innerText = `${timer}`
    }
    
}
function displaySecondTimer(timer){
    if(timer < 10){
        secondElement.innerText = `0${timer}`
    } else {
        secondElement.innerText = `${timer}`
    }
}
function displayMiliSecondTimer(timer){
    if(timer < 10){
        miliSecondElement.innerText = `0${timer}`
    } else {
        miliSecondElement.innerText = `${timer}`
    }
}


function startTimer(){
    Minuteinterval = setInterval(timerMinuteCounter,60000)
    Secondinterval = setInterval(timerSecondCounter,1000)
    MiliSecondinterval = setInterval(timerMiliSecondCounter,1)
}

if(startGameButton){
    startGameButton.addEventListener("click",startGame)
}


function flipElementBack(){
    console.log("flipElementBack jalan")

    console.log("totalMisess: "+totalMisses)
    
    
    compareValue.forEach((elementObject) => {
        
        elementObject.element.style.transform = "rotateY(360deg)"
        setTimeout(() => {
            elementObject.element.style.backgroundImage = "none"
            elementObject.element.style.backgroundColor = "rgb(217, 193, 86)"
        },100)
    })
    
    compareValue.splice(0,2)
    
    elementsObjectArray.forEach(element => {
        element.element.addEventListener("click",element.boundFn)
        
    })

    console.log("total moves: "+totalMoves)
}

function flipElement(e){
    
    index = 0;
    
    
    compareValue.push(e)
    
    count++
    
    console.log(e)
    
    e.element.style.transform = "rotateY(180deg)"
    
    setTimeout(() => {
        e.element.style.backgroundColor = "white"
        e.element.style.backgroundImage = `url(${e.value})`
    
    },100)

    

    
    
    console.log("count: "+count)
    if(count >= 2){
        

        
        if(compareValue[0].position === compareValue[1].position){
            console.log("jalaann")
            compareValue.pop()
            console.log(compareValue)
        } 
        else {
            

            setTimeout(flipElementBack,1000)
            totalMoves++
            elementsObjectArray.forEach((element) => { 
                element.element.removeEventListener("click",element.boundFn)
            })

            count = 0;

            if(compareValue[0].value === compareValue[1].value){
                setTimeout(() => {
                    console.log(`compareValueLength: ${compareValue.length}`)
                    elementsObjectArray.forEach((element,index) => {
                        if(element.position === compareValue[0].position){
                            element.element.style.transform = "scale(0.01,0.01)"
                            setTimeout(() =>
                            element.element.classList.toggle("remove")
                            ,300)
                            
                            elementsObjectArray.splice(index,1)

                        }
                    })
                    elementsObjectArray.forEach((element,index) => {
                        if(element.position === compareValue[1].position){
                            element.element.style.transform = "scale(0.01,0.01)"
                            setTimeout(() =>
                            element.element.classList.toggle("remove")
                            ,300)
                            elementsObjectArray.splice(index,1)
                        }
                    })
                    
                },800)

            } else {
                if(misessCheck.includes(compareValue[0].value) && misessCheck.includes(compareValue[1].value)){
                    totalMisses++
                }
            }
        }
        
        
    }
    console.log(`length: ${elementsObjectArray.length}`)
    if(!misessCheck.includes(e.value)){
        misessCheck.push(e.value)
    }
    console.log(misessCheck)
    
}

if(window.location.pathname === "/game.html" ){
    
        
}

console.log(elementsObjectArray)


