'use strict';

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {

//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   };
//   console.log(booking);
//   bookings.push(booking);

// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const samuel = {
//   name: 'Samuel Duenha',
//   passaport: 24739479284,
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if(passenger.passaport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passaport!');
//   };
// };

// checkIn(flight, samuel);
// console.log(flight);
// console.log(samuel);

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(samuel);
// checkIn(flight, samuel);

// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function() {
//   console.log('👏');
// }
// document.body.addEventListener('click', high5);

// ['Samuel', 'Martha', 'Adam'].forEach(high5);

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Samuel');
// greeterHey('Steven');

// greet('Hello')('Samuel');

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jonas');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//   },
// };

// lufthansa.book(239, 'Samuel Duenha');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Não funciona pq o 'this' não sabe para quem apontar
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply Method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind Method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const boookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Samuel Duenha');
// bookEW23('Martha Cooper');

// // Bind Method with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {

//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(.10, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));


// const addTaxRate = function(rate) {
//   return function(value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// Coding Challenge #1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const number = prompt('What is your favourite programming language? \n0: JavaScript \n1: Python \n2: Rust \n3: C++ \n(Write option number)');

//     switch (number) {
//       case '0':
//         registerAnswer(number);
//         break;

//       case '1':
//         registerAnswer(number);
//         break;

//       case '2':
//         registerAnswer(number);
//         break;

//       case '3':
//         registerAnswer(number);
//         break;

//       default:
//         console.log('Invalid Number!!!!');
//         break;
//     };

//     return(poll.displayResults('string'));
//   },

//   displayResults(type) {
//     if(type === 'array') {
//       console.log(poll.answers);
//     } else if(type === 'string') {
//       console.log(`Poll results are ${poll.answers[0]}, ${poll.answers[1]}, ${poll.answers[2]}, ${poll.answers[3]}`);
//     };
//   },
// };

// const registerAnswer = function(number) {
//   poll.answers[number] = poll.answers[number] + 1;
// };
    
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer);

// His
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 2, 3]}, 'string');
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string')
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]})

// IIFE
// (function() {
//   console.log('This will never run again');
// })();

// (() => console.log('This will also never run again'))();

// const secureBooking = function() {
//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function() {
//   const a = 23;
//   f = function() {
//     console.log(a * 2);
//   };
// };

// const h = function() {
//   const b = 777;
//   f = function() {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} secounds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// CODING CHALLENGE #2
// (function() {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   const body = document.querySelector('body');
//   body.addEventListener('click', function(){
//     header.style.color = 'blue';
//   });
// })();