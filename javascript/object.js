const gridElementObject = document.getElementsByClassName("grid-elements")
const gridElements = Object.values(gridElementObject)



function ElementsObjectTemplate(element,value,position){
    this.element = element
    this.value = value
    this.position = position
}

const value = ["./images/1.webp","./images/2.webp","./images/3.webp","./images/4.webp","./images/5.webp","./images/6.webp"]

function preloadCardImages(imagesArray){
    imagesArray.forEach(images => {
        const newImg = new Image()
        newImg.src = images
    })
}

preloadCardImages(value)



const valueLength = value.length

const randomValuePicker = []

for(let x = 0;x<valueLength;x++){
    let randomIndexPicker = Math.floor(Math.random()*value.length) 
    randomValuePicker.push(value[randomIndexPicker])
    randomValuePicker.push(value[randomIndexPicker])
    value.splice(randomIndexPicker,1)
}

console.log(randomValuePicker)

const randomValueShuffle = randomValuePicker.sort(() => {
    return 0.5-Math.random()
})

const elementsObjectArray = randomValueShuffle.map((img,index) => {
    return new ElementsObjectTemplate(gridElements[index],img,index+=1)
})



console.log(elementsObjectArray)
console.log(randomValueShuffle)