// Strick Mode
'use strict';

// 32
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log('You can drive :D');

// const interface = 'Audio';


// 33
// function logger() {
//   console.log(`My name is Samuel`);
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// 34
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear
// }
// console.log(calcAge2);
// const age2 = calcAge2(1991);

// console.log(age1, age2);


// 35
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3); 

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Samuel'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// 36
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));


// 37
// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   }else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Samuel'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


// Coding Challenge #1
// const score1Dolphins = 85;
// const score2Dolphins = 54;
// const score3Dolphins = 41;

// const score1Koalas = 23;
// const score2Koalas = 34;
// const score3Koalas = 27;


// const calculateAverage = (number1, number2, number3) => {
//   const average = (number1 + number2 + number3) / 3;
//   return average;
// }

// const avgDolphins = calculateAverage(score1Dolphins, score2Dolphins, score3Dolphins);
// const avgKoalas = calculateAverage(score1Koalas, score2Koalas, score3Koalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return 'Dolphins';
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return 'Koalas';
//   } else {
//     return 'Nobody';
//   }
// }

// const winner = checkWinner(avgDolphins, avgKoalas);

// switch(winner) {
//   case 'Dolphins':
//     console.log(`The winner is ${winner}, with a score of ${avgDolphins} vs ${avgKoalas}`);
//     break;

//   case 'Koalas':
//     console.log(`The winner is ${winner}, with a score of ${avgKoalas} vs ${avgDolphins}`);
//     break;

//   case 'Nobody':
//     console.log(`${winner} won`);
//     break;

//   default:
//     console.log(`Error`);

// }


// 39
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const birthYears = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(birthYears[0]);
// const age2 = calcAge(birthYears[1]);
// const age3 = calcAge(birthYears[birthYears.length - 1]);

// const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];


// 40
// const friends = ['Michael', 'Steven', 'Peter'];

// // Adicionar
// let newLength = friends.push('Jay');
// newLength = friends.unshift('John');

// // Retirar
// let popped = friends.pop();
// popped = friends.shift();

// if (friends.includes('Peter')) {
//   console.log('You have a friend called Peter!');
// }


// Coding Challenge #2
// My resolution
// const tips = [];
// const totalPrice = [];
// const bills = [125, 555, 44];

// const calcTip = function(bill) {
//   let tip;
  
//   if (bill >= 50 && bill <= 300) {
//     tip = 15 / 100;
//   } else {
//     tip = 20 / 100;
//   }
  
//   tip *= bill;

//  const total = bill + tip;
  
//   tips.push(tip);
//   totalPrice.push(bill + total);
  
  
//   return total;
// }

// console.log(calcTip(bills[0]));

// His resolution
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// for (let i = 0; i < total.length; i++) {
//   console.log(`${total[i]}`);
// }

// 42
// const samuelArray = ['Samuel', 'Duenha', 2037 - 2005, 'Student', ['Michael', 'Peter', 'Steven']];

// const samuel = {
//   firstName: 'Samuel',
//   lastName: 'Duenha',
//   age: 2037 - 2005,
//   job: 'Student',
//   friends: ['Michael', 'Peter', 'Steven']
// };


// 43
// const samuel = {
//   firstName: 'Samuel',
//   lastName: 'Duenha',
//   age: 2037 - 2005,
//   job: 'Student',
//   friends: ['Micheal', 'Peter', 'Steven']
// };

// console.log(samuel.lastName);
// console.log(samuel['lastName']);

// const nameKey = 'Name';
// console.log(samuel['first' + nameKey]);
// console.log(samuel['last' + nameKey]);

// const interestedIn = prompt(
//   `What do you want to know about Samuel?
//   Choose between fisrtName, lastName, age, job and friends`);

  
// if(samuel[interestedIn]) {    
//   console.log(samuel[interestedIn]);
// } else {
//   console.log('This value is not defined! Try again!')
//   console.log(`What do you want to know about Samuel?
//   Choose between fisrtName, lastName, age, job and friends`)
// }

// samuel.location = 'Brasil';
// samuel['twitter'] = '@algumacoisa';

// Challenge
// console.log(`${samuel.firstName} has ${samuel.friends.length} friends, and his best friends is called ${samuel.friends[0]}`);


// 44
// const samuel = {
//   firstName: 'Samuel',
//   lastName: 'Duenha',
//   birthYear: 2005,
//   job: 'Student',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: false,

//   // calcAge: function() {
//   //   return 2023 - this.birthYear;
//   // }

//   calcAge: function() {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function() {
//     this.sumary = `${this.firstName} ${this.lastName}, has ${this.calcAge()} years old and is a ${this.job}. He has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     return this.sumary;
//   }
// };

// console.log(samuel.calcAge());
// console.log(samuel.age);

// console.log(samuel.getSummary());


// Coding Challenge #3
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }

// console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${john.bmi > mark.bmi ? 'heigher' : 'lower'} than ${mark.fullName}'s (${mark.calcBMI()})!`);


// 46
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }


// 47
// const samuelArray = [
//   'Samuel',
//   'Duenha',
//   2023 - 2005,
//   'Student',
//   ['Michael', 'Peter', 'Steven']
// ];

// const typesArray = [];

// for (let i = 0; i < samuelArray.length; i++){ 
//   console.log(samuelArray[i], typeof samuelArray[i]);

//   typesArray[i] = typeof samuelArray[i];
//   typesArray.push(typeof samuelArray[i]);
// }

// console.log(typesArray);

// const years = [1991, 2007, 1969, 2020];
// const age = [];
// const currentYear = 2023;

// for (let i = 0; i < years.length; i++) {
//   age[i] = currentYear - years[i];
//   console.log(age[i]);
// }

/// Continue and Break
// for (let i = 0; i < samuelArray.length; i++) {
//   if(typeof samuelArray[i] !== 'string') continue;

//   console.log(samuelArray[i], typeof samuelArray[i]);
// }

// for (let i = 0; i < samuelArray.length; i++) {
//   if(typeof samuelArray[i] === 'number') break;

//   console.log(samuelArray[i], typeof samuelArray[i])
// }


// 48
// const samuel = [
//   'Samuel',
//   'Duenha',
//   2023 - 2005,
//   'Student',
//   ['Michael', 'Peter', 'Steven'],
// ];

// for(let i = samuel.length - 1; i >= 0; i--) {
//   console.log(samuel[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----- Starting exercice ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }


// 49
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6) {
//   dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(`You rolled a ${dice}`);
// }


// Coding Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// for(let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// console.log(totals);

// const calcAverage = function(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const average = sum / arr.length;
//   return average;
// }

// console.log(calcAverage(totals));