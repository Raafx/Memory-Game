const gridElementObject = document.getElementsByClassName("grid-elements")
const gridElements = Object.values(gridElementObject)



function ElementsObjectTemplate(element,value,position){
    this.element = element
    this.value = value
    this.position = position
}

const value = ["./images/1.webp","./images/2.webp","./images/3.webp","./images/4.webp","./images/5.webp","./images/6.webp","./images/1.webp","./images/2.webp","./images/3.webp","./images/4.webp","./images/5.webp","./images/6.webp"]

function preloadCardImages(imagesArray){
    imagesArray.forEach(images => {
        const newImg = new Image()
        newImg.src = images
    })
}

preloadCardImages(value)

const valueLength = value.length

const randomValueShuffle = []

let randomIndexPicker;
for(let x = 0;x<valueLength;x++){
    randomIndexPicker = Math.floor(Math.random()*value.length)
    randomValueShuffle.push(value[randomIndexPicker])
    value.splice(randomIndexPicker,1)
}

const elementsObjectArray = randomValueShuffle.map((img,index) => {
    return new ElementsObjectTemplate(gridElements[index],img,index+=1)
})



console.log(elementsObjectArray)
console.log(randomValueShuffle)