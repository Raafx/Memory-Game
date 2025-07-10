const startButton = document.getElementById("start-button")
const startGameButton = document.getElementById("start-game")
const compareValue = []
let index;
let count = 0;

let timerMinute = 0
let timerSecond = 0;
let timerMiliSecond = 0;
const timerElement = document.getElementById("timer")
console.log(timerElement)

let flipElementBind;

let Minuteinterval;     
let Secondinterval;    
let MiliSecondinterval;



function toQuizPage(){
    window.location.href = "game.html"
}
if(startButton){
    startButton.addEventListener("click",toQuizPage)
}

function startGame(){
    startTimer()
    elementsObjectArray.forEach(element => {
        element.boundFn = flipElement.bind(null, element)
        
        
        element.element.addEventListener("click",element.boundFn)
        
    })
    startGameButton.removeEventListener("click",startGame)
    
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
        document.getElementById("minute").innerText = `0${timer}`
    } else {
        document.getElementById("minute").innerText = `${timer}`
    }
    
}
function displaySecondTimer(timer){
    if(timer < 10){
        document.getElementById("second").innerText = `0${timer}`
    } else {
        document.getElementById("second").innerText = `${timer}`
    }
}
function displayMiliSecondTimer(timer){
    if(timer < 10){
        document.getElementById("milisecond").innerText = `0${timer}`
    } else {
        document.getElementById("milisecond").innerText = `${timer}`
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
}

function flipElement(e){
    
    index = 0;
    
    
    compareValue.push(e)
    console.log(compareValue)
    count++
    
    console.log(e)
    
    e.element.style.transform = "rotateY(180deg)"
    
    setTimeout(() => {
        e.element.style.backgroundColor = "white"
        e.element.style.backgroundImage = `url(${e.value})`
    
    },100)
    
    console.log(count)
    if(count >= 2){
        if(compareValue[0].position === compareValue[1].position){
            setTimeout(e.boundFnBack,500)
        } 
        else {
            if(compareValue[0].value === compareValue[1].value){
                setTimeout(() => {
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
                    compareValue.splice(0,2)
                },800)

            }
        }
        
        elementsObjectArray.forEach((element) => { 
            element.element.removeEventListener("click",element.boundFn)
        })
        
        count = 0;
        
        setTimeout(flipElementBack,800)
    }
    console.log(`length: ${elementsObjectArray.length}`)
}

if(window.location.pathname === "/game.html" ){
    
        
}

console.log(elementsObjectArray)


