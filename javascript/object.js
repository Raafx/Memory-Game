const gridElementObject = document.getElementsByClassName("grid-element")
// const gridElements = Object.values(gridElementObject)

const levelChooseDialog = document.getElementById("level-choose-dialog");

const elementsObjectArray = []


function ElementsObjectTemplate(element,value,position){
    this.element = element
    this.value = value
    this.position = position
}

const value = ["./images/1.webp","./images/2.webp","./images/3.webp","./images/4.webp","./images/5.webp","./images/6.webp","./images/7.webp","./images/8.webp","./images/9.webp","./images/10.webp","./images/11.webp","./images/12.webp","./images/13.webp","./images/14.webp","./images/15.webp"]

function preloadCardImages(imagesArray){
    imagesArray.forEach(images => {
        const newImg = new Image()
        newImg.src = images
    })
}

preloadCardImages(value)


function createGrid(gridNumbers){
    const gridElementsContainer = document.getElementsByClassName("grid-container")[0]
    console.log(gridElementsContainer)
    console.log(gridNumbers)
    
    const gridAray = []
    for(let i = 0;i<gridNumbers;i++){
        const card = document.createElement("div")
        card.className = "grid-element"
        
        gridElementsContainer.appendChild(card)
        gridAray.push(card)
    }

    if(gridNumbers == 12 || gridNumbers == 16){
        gridElementsContainer.style.gridTemplateColumns = "auto auto auto auto"
        gridAray.forEach((element) => {
            element.style.padding = "40px"
        })
    } else if(gridNumbers == 24 || gridNumbers == 30){
        gridElementsContainer.style.gridTemplateColumns = "auto auto auto auto auto auto"
        gridElementsContainer.style.gap = "5px"
        gridAray.forEach((element) => {
            element.style.padding = "35px"
        })
    }

    gridElementsContainer.style.transform = "scale(1,1)"

    return gridAray

    
    

}

const valueLength = document.getElementsByClassName("level-button")





function getLevel(btn){
    
    
    const randomValuePicker = []
    console.log(btn.value)
    for(let x = 0;x<btn.value;x+=2){
        let randomIndexPicker = Math.floor(Math.random()*value.length) 
        randomValuePicker.push(value[randomIndexPicker])
        randomValuePicker.push(value[randomIndexPicker])
        value.splice(randomIndexPicker,1)
    }
    console.log(randomValuePicker)
    const randomValueShuffle = randomValuePicker.sort(() => {
        return 0.5-Math.random()
    })
    const gridElements = createGrid(btn.value)
    levelChooseDialog.style.transition = "all 0.3s"
    levelChooseDialog.style.transform = "scale(0.1,0.1)"
    setTimeout(() => levelChooseDialog.close(),200)

    
    randomValueShuffle.forEach((img,index) => {
        elementsObjectArray.push(new ElementsObjectTemplate(gridElements[index],img,index+=1))
    })

    console.log(elementsObjectArray)
    
    

    

    
}

for(let btn of valueLength){
    btn.addEventListener("click",() => getLevel(btn))
}


