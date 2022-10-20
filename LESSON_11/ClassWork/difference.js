// // getTime

// const date1 = new Date(2005, 4, 20);
// const date2 = new Date(2006, 4, 10);

// //количество мс с Jan 1, 1970 - отсчет идет отсюда
// console.log('date1', date1.getTime());
// console.log('date2', date2.getTime());

// const difference = date2.getTime() - date1.getTime();
// console.log('difference', difference / 1000 / 60);


const startTime = Date.now();

for(let i = 0; i < 1000000000; i++) {
    //do something
}

const endTime = Date.now();

console.log('startTime', startTime);
console.log('endTime', endTime);

const difference = endTime - startTime;
console.log('difference', difference);
