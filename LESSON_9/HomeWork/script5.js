let clientsEstimations = [];

function askClientToGiveEstimation() {
    let estimation = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    if(Number(estimation) && estimation > 0 && estimation <= 10) {
        return clientsEstimations.push(estimation);
    }
}

for(let i = 0; i < 5; i++) {
    askClientToGiveEstimation()
}

let goodEstimations = clientsEstimations.filter(item => item > 5);
let notGoodEstimations = clientsEstimations.filter(item => item <= 5);

alert(`Всего положительных оценок: ${goodEstimations}`);
alert(`Всего отрицательных оценок: ${notGoodEstimations}`);