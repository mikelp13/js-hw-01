
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введіть пароль');

if (ADMIN_PASSWORD === message) {
  message = 'Ласкаво просимо!';

} else if (message === null) {
    message = 'Скасовано користувачем!';
} else {
    message = 'Доступ заборонений, невірний пароль!';
}

 console.log(message);