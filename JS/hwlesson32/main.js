
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function showAmountOfArguments () {
  console.log(arguments.length);
}

showAmountOfArguments(4,5,5,67,54,4,3,4,);




// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function playWithNumbers(q, w) {
  if (q < w) {
    return -1;
  }
  else if (q > w) {
      return 1;
  }
  else {
    return 0;
  }
}
console.log(playWithNumbers(10, 9));


// Напиши функцію, яка обчислює факторіал переданого їй числа.

const t = parseInt(prompt("Enter inalienable number "));
function factorial(t) {
  let result = 1;
  for (let i = 1; i <= t; i++) {
  result *= i;
  }
  return result;
} 
console.log(`The factorial of ${t} is:  ${factorial(t)}`);


// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
const number1 = prompt("Enter three random numbers from 0 to 9 with comma delimiter (e.g. 3,9,8)");
const arr = number1.split(",");
function convert() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > 9) {
      throw Error("Numbers must be from 0 to 9");
    }
  }
  const res = +(arr[0] + arr[1] + arr[2]);
  return res;
}

console.log(convert());


// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcPerimetr(a,b) {
  if (arguments.length === 1) {
    return a*a;
  } else if (a <= 0 || b <= 0) {
    return 'Not correct parameter';
  } else {
    return a*b;
  }
}
console.log( `Perimetr is ${calcPerimetr(7,1)}`);


// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function checkPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log(checkPerfectNumber(24));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.


// const randomNumbers = prompt('Enter two numbers with spase delimiter');
// const twoNumbers = randomNumbers.split(" ");

// function minMax() {
//   let min = +(twoNumbers[0]);
//   let max = +(twoNumbers[1]);
//   if (min > max) {
//     [min, max] = [max, min];
//   }
//   return [min, max]
// }
//  const sorted = minMax();
//  console.log(sorted);

//  function createRange () {
//   const start = sorted[0];
//   const end = sorted[1];
//   const newRange = [];
//   for (let i = start; i <= end; i++) {
//     newRange.push(i);
//   }
//   return newRange;
//  }

//  const secondResult = createRange();
//  console.log(secondResult);

//  function checkPerfectNumber() {
//     let sum = 0;
//     for (let i = 1; i < secondResult.length; i++) {
//       if (secondResult[i] % i === 0) {
//         sum += i;
//       }
//     }
//     return sum === secondResult[i];
//   }

// checkPerfectNumber();















