
let cost = 0;
let country = prompt('Введіть свою країну:').toLowerCase();


switch (country) {
  case "китай":
    cost = 100;
    break;

  case "чилі":
    cost = 250;
    break;

  case "австралія":
    cost = 170;
    break;

  case "індія":
    cost = 170;
    break;

  case "ямайка":
    cost = 170;
    break;

  default:
    alert('У вашій країні доставка недоступна');
}

alert(`Доставка в ${country} буде коштувати ${cost} кредитів`);


