
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const num1 = 0.1;
const num2 = 0.2;
const sum = num1 + num2;
console.log(+sum.toFixed(2));


// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let str = "1";
const num = 2;
console.log(Number(str) + num);


// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const driveCapacity = prompt ('Enter your drive capacity in GB');
const amountOfVideoOnDrive = Math.floor((driveCapacity * 1024) / 820);
alert(`You can download ${amountOfVideoOnDrive} videos`);


/* Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/

const money = prompt('Enter your badget');
const priseOfOneBarOfChocolate = prompt('Enter the price of one bar of chocolate');
const howManyCanBuy = (money / priseOfOneBarOfChocolate);
const change = Math.floor(money % priseOfOneBarOfChocolate);
alert(`You can buy ${howManyCanBuy} bar(s) and your change is ${change}.`);


/* написати функцію яка приймає масив обʼєктів 
пробігаєьбся по ньому і додає прикметники, 
які описують зовнішнисть відповідно до стані*/

const people = [ { name: 'Ania', sex: 'female' }, { name: 'Kate', sex: 'female' }, { name: 'Olexiy', sex: 'male' } ];

function objectivesForUsers(arr) {
 for (let i = 0; i < arr.length; i++) {
    if (arr[i].sex === 'female') {
     arr[i].name += ' gorgeous'
    } else {
        arr[i].name += ' handsome'
    }   
 }
 return arr;
}
console.log(objectivesForUsers(people));






