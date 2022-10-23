// Data

const date = new Date();
console.log('date', date);

// new Date(year, month, date, hours, minutes, second, ms)

//месяцы от 0(январь) до 11(декабрь)

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
console.log('newDate', newDate);

console.log('year', newDate.getFullYear());
console.log('month', newDate.getMonth());
console.log('date', newDate.getDate());


//День недели
//0 (воскресение) - 6 (суббота)

console.log('day', newDate.getDay());
if((newDate.getDay()) === 4) {
    console.log('Сегодня у нас четверг');
}

newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);
 
console.log('date', newDate);
