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

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
// який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

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


// Запитай у користувача число і виведи всі дільники цього числа.

const number = parseInt(prompt("Enter rundom number: "));

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

console.log(`Divisors number ${number}: `);



















