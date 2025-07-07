const gridElementObject = document.getElementsByClassName("grid-elements")
const gridElements = Object.values(gridElementObject)
const elementsObjectArray = []


function ElementsObjectTemplate(element,value,position){
    this.element = element
    this.value = value
    this.position = position
}

const value = ["blue","red","green","yellow","purple","cyan","blue","red","green","yellow","purple","cyan"]

const valueLength = value.length

const randomValue = []

let randomIndexPicker;
for(let x = 0;x<valueLength;x++){
    randomIndexPicker = Math.floor(Math.random()*value.length)
    randomValue.push(value.splice(randomIndexPicker,1))
}





const elementObject1 = new ElementsObjectTemplate(gridElements[0], randomValue[0][0],1)
const elementObject2 = new ElementsObjectTemplate(gridElements[1], randomValue[1][0],2)
const elementObject3 = new ElementsObjectTemplate(gridElements[2], randomValue[2][0],3)
const elementObject4 = new ElementsObjectTemplate(gridElements[3], randomValue[3][0],4)
const elementObject5 = new ElementsObjectTemplate(gridElements[4], randomValue[4][0],5)
const elementObject6 = new ElementsObjectTemplate(gridElements[5], randomValue[5][0],6)
const elementObject7 = new ElementsObjectTemplate(gridElements[6], randomValue[6][0],7)
const elementObject8 = new ElementsObjectTemplate(gridElements[7], randomValue[7][0],8)
const elementObject9 = new ElementsObjectTemplate(gridElements[8], randomValue[8][0],9)
const elementObject10 = new ElementsObjectTemplate(gridElements[9], randomValue[9][0],10)
const elementObject11 = new ElementsObjectTemplate(gridElements[10], randomValue[10][0],11)
const elementObject12 = new ElementsObjectTemplate(gridElements[11], randomValue[11][0],12)

elementsObjectArray.push(elementObject1,elementObject2,elementObject3,elementObject4,elementObject5,elementObject6,elementObject7,elementObject8,elementObject9,elementObject10,elementObject11,elementObject12)

console.log(elementsObjectArray)
console.log(randomValue)