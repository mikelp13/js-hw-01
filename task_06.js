
let total = 0;


while (true) {
  let input = prompt('Введіть число:');

  if (input === null){
    break;
  }
  input = Number(input);
  total += input;
}

console.log(`Загальна сума: ${total}`);





