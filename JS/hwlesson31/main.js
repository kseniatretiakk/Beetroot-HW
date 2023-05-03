// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), 
//підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const inputAge =  prompt ("Enter your age");
switch (true) {
    case (inputAge >= 0 && inputAge <= 11): 
    alert("You are a child!");
    break;
    case (inputAge > 11 && inputAge <= 17):
    alert("You are teenager!");
    break;
    case (inputAge > 17 && inputAge <= 59):
    alert("You are adult!");
    break;
    case (inputAge > 59):
    alert("You are senior!");
    break;
    default:
    alert("Invalid value");
}

// // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
// // який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const inputNumber = parseInt(prompt("Enter random number from 0 to 9"));
switch (inputNumber) {
    case 0: 
    alert("Same button )");
    break;
    case 1: 
    alert("Same button !");
    break;
    case 2: 
    alert("Same button @");
    break;
    case 3: 
    alert("Same button #");
    break;
    case 4: 
    alert("Same button $");
    break;
    case 5: 
    alert("Same button %");
    break;
    case 6: 
    alert("Same button ^");
    break;
    case 7: 
    alert("Same button &");
    break;
    case 8: 
    alert("Same button *");
    break;
    case 9: 
    alert("Same button (");
    break;
    default:
    alert("Invalid value");
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const range = prompt ("Enter any number range with coma delimiter (e.g. 3,9)");
const arr = range.split(",");
let summ = 0;
for (i= Number(arr[0]); i<=arr[1]; i++) {
 summ += i;
}
alert(summ);


// Запитай у користувача 2 числа і знайди найбільший спільний дільник. (Euclid's algorithm)

const number1 = parseInt(prompt("Enter the first number: "));
const number2 = parseInt(prompt("Enter the second number: "));
let a = number1;
let b = number2;
while (b !== 0) {
  let t = b;
  b = a % b;
  a = t;
}
const gcd = a;

alert(`The biggest common divisor of ${number1} and ${number2} is ${gcd}`);


// // Запитай у користувача число і виведи всі дільники цього числа.

const number = parseInt(prompt("Enter rundom number: "));

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

console.log(`Divisors number ${number}: `);


// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const userNumber = prompt('Enter your five-digit');
let palindrom = userNumber.split("").reverse().join("");
if (userNumber == palindrom) {
alert("Yes, your number is palindrom!");
} else {
  alert("Your enter is incorrect!");
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// // від 500 і вище - 7%.

const userDiscount = prompt("Tell us your expenses, and we can count your discount");
if (userDiscount >= 200 && userDiscount <= 300) {
  alert(`Your discount is 3%, so you need to pay ${Math.floor(userDiscount * 0.97)}`);
} else if (userDiscount > 300 && userDiscount <= 500) {
  alert(`Your discount is 5%, so you need to pay ${Math.floor(userDiscount * 0.95)}`);
} else if (userDiscount > 500) {
  alert(`Your discount is 7%, so you need to pay ${Math.floor(userDiscount * 0.93)}`);
} else {
  alert(`Sorry, you don't have any discount`);
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const numbers = [];
let positiveNumbers = 0;
let negativeNumbers = 0;
let zero = 0; 
let evenNumber = 0;
let oddNumber = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt(`Enter a number №${i}:`));
  numbers.push(num);
  if (num > 0) {
    positiveNumbers++;
  } else if (num < 0) {
    negativeNumbers++;
  } else {
    zero++;
  }
  if (num % 2 === 0) {
    evenNumber++;
  } else {
    oddNumber++;
  }
}

console.log(`Quantity of positive numbers: ${positiveNumbers}`);
console.log(`Quantity of negative numbers: ${negativeNumbers}`);
console.log(`Quantity of zeros: ${zero}`);
console.log(`Quantity of even numbers: ${evenNumber}`);
console.log(`Quantity of odd numbers: ${oddNumber}`);

















