const existedUserLogin = 'the_best_user';
let existedUserPassword = '12345678';

let autorizUser = prompt('Введите логин');
let autorizPaswd = prompt('Введите пароль');

if((existedUserLogin === autorizUser.trim()) && (existedUserPassword === autorizPaswd.trim())) {
    alert(`Добро пожаловать ${existedUserLogin}`)
} else {
    alert(`Логин и (или) Пароль введены неверно!`);
}