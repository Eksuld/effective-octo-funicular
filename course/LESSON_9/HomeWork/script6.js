let numbers = [10, 4, 100, -5, 54, 2]

let numFor = 0;
let numForOf = 0;
let numForEach = 0;
let numReduce = 0;

////1
for(let i = 0; i < numbers.length; i++) {
    numFor +=  numbers[i] ** 3;
}
console.log(numFor);

////2
for(let num of numbers) {
    numForOf += num ** 3;
}
console.log(numForOf);

numbers.forEach(el => {
    numForEach += el ** 3;
})
console.log(numForEach);

numReduce = numbers.reduce((acc, item) => {return acc + item ** 3;}, 0);
console.log(numReduce);

