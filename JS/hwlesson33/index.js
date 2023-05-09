// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const distance = 900;
const automobile = {
  brand: 'Mercedes',
  model: 'AMG GT',
  production: 2022,
  averageSpeed: 60,
  engine: 4,
  'capacity of tank': '80',
  'fuel consumption': 12.3,
  drivers: ['Maks', 'Ksenia', 'Kate', 'John'],

  getTime() {
  let time = distance / this.averageSpeed;
  time += Math.trunc(time / 4);
  console.log(`You need to spend ${time} hour(s).`);

  return time;
  },

  getFuel() {
    const fuel = distance * (this.engine / 100);
    console.log(`You need at least ${fuel} liters of fuel.`);  
  },
}

automobile.getTime();
automobile.getFuel();
console.table(Object.entries(automobile));
automobile.drivers[4] = 'Kail';
console.log(automobile.drivers);
console.log(automobile.drivers.includes('Maks'));


// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
  hour: 14,
  minute: 56,
  second: 0,

  getTime() {
    console.log(`${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`);
  },
  
  addSeconds(seconds = 0) {
    this.second += seconds;
    if (this.second >= 60) {
      const addMinutes = Math.floor(this.second / 60);
      this.second %= 60;
      this.minute += addMinutes;
    }
  },

  addMinutes(minutes = 0) {
    this.minute += minutes;
    if (this.minute >= 60) {
      const addHours = Math.floor(this.minute / 60);
      this.minute %= 60;
      this.hour += addHours;
    }
  },

  addHours(hours = 0) {
    this.hour += hours;
    if (this.hour >= 24) {
      this.hour %= 24;
    }
  }

}

time.getTime();
time.addSeconds(7);
time.addMinutes();
time.addHours(2);
time.getTime();











