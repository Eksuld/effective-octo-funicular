const coffee = ['Latte', 'Cappuccino', 'Americano'];

let orderCoffee = prompt('Поиск кофе по названию');
orderCoffee = orderCoffee.trim();
orderCoffee = orderCoffee[0].toLocaleUpperCase() + orderCoffee.slice(1).toLocaleLowerCase();

if(coffee.includes(orderCoffee)) {
    alert(`Держите ваш любимый кофе ${orderCoffee}. Он ${(coffee.indexOf(orderCoffee) + 1)}-й по популярности в нашей кофейне `);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
};