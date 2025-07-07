const startButton = document.getElementById("start-button")
const compareValue = []
let index;
let count = 0;

let flipElementBind;

function startGame(){
    window.location.href = "game.html"
}
if(startButton){
    startButton.addEventListener("click",startGame)
}


function flipElementBack(){
    compareValue.splice(0,2)
    elementsObjectArray.forEach(element => {
        element.element.style.backgroundColor = "rgb(216, 201, 118)"
        
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
    
    if(count >= 2){
        if(compareValue[0].value === compareValue[1].value){
            setTimeout(() => {
                elementsObjectArray.forEach((element,index) => {
                    if(element.position === compareValue[0].position){
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
        elementsObjectArray.forEach((element) => {
            
            element.element.removeEventListener("click",element.boundFn)
            
        
        })
            
        count = 0;
        setTimeout(flipElementBack,800)
    }

    
    
}

if(gridElementObject){
    
    elementsObjectArray.forEach(element => {
        element.boundFn = flipElement.bind(null, element)
        
        element.element.addEventListener("click",element.boundFn)
        
    })
        
}


