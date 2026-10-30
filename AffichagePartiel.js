let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array3 = [];
let arrayPair = []
let arrayIndexPair =[]
let arrayEntierImpair =[]

for(let i = 0; i < array.length; i++) {
    if(array[i] > 3){
        array3.push(array[i]);
    }
}

for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
        arrayPair.push(array[i]);
    }
}

for(let i = 0; i < array.length; i= i+2) {
    arrayIndexPair.push(array[i]);
    }

for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 !=0){
        arrayEntierImpair.push(array[i]);
    }

}

console.log(array3)
console.log(arrayPair)
console.log(arrayIndexPair)
console.log(arrayEntierImpair)
