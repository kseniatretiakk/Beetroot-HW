// const number1 = 7;
// const number2 = 9;
// const number3 = 10;
// const sum = (number1 + number2 + number3) / 3;
// console.log(`Середнє арифметичне ${sum}`);


// const usersList = [
//     {
//       name: 'Sierra',
//       surname: 'Quigley',
//       age: 14,
//       email: 'Alfreda12@yahoo.com',
//       isOpenToWork: false
//     },
//     {
//       name: 'Barton',
//       surname: 'Corkery',
//       age: 100,
//       email: 'Dewitt.Kohler71@gmail.com',
//       isOpenToWork: true
//     },
//     {
//       name: 'Demetrius',
//       surname: 'Mohr',
//       age: 90,
//       email: 'Maureen55@hotmail.com',
//       isOpenToWork: false
//     },
//     {
//       name: 'Abby',
//       surname: 'Metz',
//       age: 26,
//       email: 'Zelda93@yahoo.com',
//       isOpenToWork: false
//     },
//     {
//       name: 'Connie',
//       surname: 'Legros',
//       age: 86,
//       email: 'Gerardo91@yahoo.com',
//       isOpenToWork: true
//     }
//   ];
//   usersList.forEach(item => {
//     console.log(item);
//   });

//   console.table(usersList);

//   const user = usersList[usersList.length -1];
//   console.log(`Data about user ${user.name}, ${user.age}`);

//   const person = {
//     name: 'Connie',
//     surname: 'Legros',
//     age: 86,
//     email: 'Gerardo91@yahoo.com',
//     isOpenToWork: true
//   };

//   const firstName = person.name;
//   const secondName = person.name;
//   const age = person.age;
//   const email = person.email;
//   const openToWork = person.isOpenToWork;

//   console.log(`${firstName} ${secondName} ${age} ${email} ${openToWork}`);

//   console.log(firstName === person.name);

//   const { name, surname, age, email, isOpenToWork } = person;
//   console.log(age);


//   const car = { color: "red" };
//   console.log(car.color);

//   const cat = { color: "red" };
//   console.log(car.color);

//   const dog = { color: "red" };
//   console.log(car.color);


//   const usersAges =  { Destany: 41, Ashleigh: 3, Ollie: 31, Felton: 40, Alana: 36 };
//   for(const item in usersAges) {
//     console.table(`object key: ${item}
//     object value: ${usersAges[item]}`);
//   };

const someString = "Hello World";
for(const item of someString) {
console.log(item);
};

const numberList = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for(let number of numberList) {
    sum = sum + number;
};
console.log(sum);


const fruit = "apple"
fruit !== "banana"
 ? console.log("Is regular")
 : console.log("It's a magic");

 const email = "someEmail.gmail.com";
 const adminEmail = "admin@gmail.com";
 adminEmail === "someEmail.gmail.com"
 ? console.warn(`Hello admin ${adminEmail}`)
 : console.log("Hello user");


const mark = +prompt("Enter the mark from 1 to 5");
if(mark === 1) {
    console.log("Invalid grade");
} else if (mark === 2) {
    console.log("Failed");
} else if (mark === 3) {
    console.log("Funsatisfactory");
}  else if (mark === 4) {
    console.log("Good");
} else if (mark === 5) {
    console.log("Excellent");
} else {
    console.log("Error");
};




function enterData() { 
  const userData = prompt("Enter your name and surname ")
  console.log(`Hi, ${userData}`);
}

enterData();







  



  


