// && (и)
// || (или)
// ! (не)

// let userNickname = null;
// const defaultNickname = '';
// const nickname = userNickname || defaultNickname || 'noname';
// console.log('nickname', nickname);

// const finalNickname = userNickname && 'Пользователь существует';
// console.log('nickname', finalNickname); 

// // ! (НЕ)

// const hasAccess = true;
// if(!hasAccess) {
//     console.log("Доступ закрыт", hasAccess);
// } else {
//     console.log('Доступ открыт', hasAccess);
// }

// const answer = prompt("Сколько вам лет");
// if(!answer) {
//     alert("Введите ваше полное количество лет");
// } else {
//     alert(`Вам ${answer} лет`);
// }

// Оператор объединения с null ??

//для || false -> false, 0, '', NaN. undefined, null
console.log(0 || 'Hello World');

//null, undefined
console.log(0 ?? 'Hello World');
