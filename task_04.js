

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let numberOfDroids = prompt("Скільки дроїдів хочете купити?");


totalPrice = pricePerDroid * numberOfDroids;

if (numberOfDroids === null) {
  console.log("Скасовано користувачем!");

} else if (totalPrice >= credits) {

  console.log("Недостатньо коштів на рахунку!");

} else {
  credits -= totalPrice;
  console.log(
    `Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${credits} кредитів.`
  );
}

