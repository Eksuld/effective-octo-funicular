const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

let updatePrices = prices.map(item => item + 0.5);

coffees.forEach((coffeeName, index) => {
    alert(`Кофе ${coffeeName} сейчас стоит ${updatePrices[index]} евро`)
});