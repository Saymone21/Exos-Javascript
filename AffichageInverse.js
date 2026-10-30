let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
for(let i = 0; i<array.length;i++) {
    console.log(array[i]);
}
let arrayCopie = []
for(let j = array.length-1; j >=0 ;j--) {
    console.log(array[j]);
    arrayCopie.push(array[j])
}
console.log(arrayCopie)