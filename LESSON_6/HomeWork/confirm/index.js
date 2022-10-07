// const question1 = confirm("'JavaScript появился в 1995 году?'");
// question1 === true ? alert('Верно!') : alert('Не верно! JavaScript появился в 1995 году');

// const question2 = confirm('Спецификация JavaScript называется ECMAScript?');
// question2 === true ? alert('Верно!') : alert('Спецификация JavaScript называется ECMAScript');

// const question3 = confirm('JavaScript был создан за 1 месяц?');
// question3 === true ? alert('Верно!') : alert('JavaScript был создан за 1 месяц');


if (confirm('JavaScript появился в 1995 году?') === true) {
    alert("Верно");
} else {
    alert('Не верно! JavaScript появился в 1995 году');
}

if (confirm('Спецификация JavaScript называется ECMAScript?') === true) {
    alert("Верно");
} else {
    alert('Не верно! Спецификация JavaScript называется ECMAScript');
}
if(confirm('JavaScript был создан за 1 месяц?') === true) {
    alert('Верно!')
} else {
    alert('Не верно! JavaScript был создан за 10 дней');
}