let password = prompt("Введите пароль");

if(password.length >= 3 && password.length <= 20) {
    alert(true);
} else { alert(false); }
