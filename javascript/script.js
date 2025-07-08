const startButton = document.getElementById("start-button")
const startGameButton = document.getElementById("start-game")
const compareValue = []
let index;
let count = 0;

let flipElementBind;



function toQuizPage(){
    window.location.href = "game.html"
}
if(startButton){
    startButton.addEventListener("click",toQuizPage)
}

function startGame(){
    console.log("game start")
    elementsObjectArray.forEach(element => {
        element.boundFn = flipElement.bind(null, element)
        
        element.element.addEventListener("click",element.boundFn)
        
    })
    startGameButton.removeEventListener("click",startGame)
}

if(startGameButton){
    startGameButton.addEventListener("click",startGame)
}


function flipElementBack(){
    console.log("flipElementBack jalan")
    compareValue.splice(0,2)
    elementsObjectArray.forEach(element => {
        element.element.style.backgroundColor = "rgb(217, 193, 86)"
        
        element.element.addEventListener("click",element.boundFn)
        
    })
}

function flipElement(e){
    
    index = 0;
    
    
    compareValue.push(e)
    console.log(compareValue)
    count++
    
    console.log(e)
    
    e.element.style.backgroundColor = e.value;
    console.log(count)
    if(count >= 2){
        if(compareValue[0].position === compareValue[1].position){
            setTimeout(flipElementBack,500)
        } else {
            if(compareValue[0].value === compareValue[1].value){
                setTimeout(() => {
                    elementsObjectArray.forEach((element,index) => {
                        if(element.position === compareValue[0].position){
                            console.log("Jalan")
                            element.element.classList.toggle("remove")
                            elementsObjectArray.splice(index,1)

                        }
                    })
                    elementsObjectArray.forEach((element,index) => {
                        if(element.position === compareValue[1].position){
                            element.element.classList.toggle("remove")
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

    
    
}

if(window.location.pathname === "/game.html" ){
    
        
}




