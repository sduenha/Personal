// // Dia 1
// /*
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// let firstName = "Samuel";
// console.log(firstName);
// */

// // Dia 2

// let javaScriptIsFun = true; 
// console.log(typeof javaScriptIsFun);
// console.log(typeof 2023);
// console.log(typeof 'Samuel');

// javaScriptIsFun = 'Yes';
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(typeof year);

// year = 2023;
// console.log(typeof year);

// let currentYear = 2037;
// const userAge = currentYear - 2005;

// let firstName = 'Samuel';
// const lastName = 'Duenha';
// console.log(firstName + ' ' + lastName);

// // Desafio #1
// let markMass = 78;
// let markHeight = 1.69;
// let markBMI = markMass / markHeight ** 2;

// let johnMass = 92
// let johnHeight = 1.95
// let johnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// markMass = 95;
// markHeight = 1.88;
// markBMI = markMass / markHeight ** 2;

// johnMass = 85;
// johnHeight = 1.76;
// johnBMI = johnMass / johnHeight ** 2;

// markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);


// // Dia 3
// firstName = 'Samuel';
// const job = 'Student';
// let birthYear = 2005;
// currentYear = 2037;

// const samuel = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
// console.log(samuel);

// const samuelNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
// console.log(samuelNew);

// console.log(`String
// with
// multiple
// lines`);

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('You can drive!');
// } else{
//   const yearsLeft = 18 - age;
//   console.log(`You will be able to drive in ${yearsLeft} year(s)`);
// }

// birthYear = 1991;
// let century;
// if(birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // Desafio #2
// if(johnBMI > markBMI) {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// } else {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// }

// // type conversion
// const inputYear = '1991';
// const inputNumber = 90;
// console.log(Number(inputYear) + 20);
// console.log(String(inputNumber));

// // type coercion
// console.log(`I am ${17} years old!`);

// let money = 0;
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You should get a job`);
// }

// let height;
// if(height) {
//   console.log(`YAY! Height is defined`);
// } else {
//   console.log(`Height is ${typeof height}`);
// }


// // Dia 4
// const age = 18;
// if(age === 18) console.log(`You just became a adult. You should always use the triple '='`);
// if(age == 18) console.log(`You just became a adult`);

// const favouriteNumber = Number(prompt("What is your favourite number?"));
// console.log(favouriteNumber);
// const amazingNumber = 10;
// const coolNumber = 6;

// if (favouriteNumber === amazingNumber) {
//   console.log(`Cool! ${amazingNumber} is an amazing number!`);
// } else if (favouriteNumber === coolNumber) {
//   console.log(`${coolNumber} is also a cool number`);
// } else {
//   console.log(`Your favourite number is not ${amazingNumber} or ${coolNumber}`);
// }

// if (favouriteNumber !== amazingNumber) {
//   console.log(`Why not ${amazingNumber}?`);
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`You are able to drive`);
// } else {
//   console.log(`You shouldn't drive`);
// }

// const isTired = true;
// console.log(`hasDriversLicense && hasGoodVision && isTired`);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`You are able to drive`);
// } else {
//   console.log(`You shouldn't drive`);
// }

// Desafio #3
// const averageDolphins = (130 + 00 + 00) / 3;
// const averageKoalas = (102 + 99 + 00) / 3;

// if (averageDolphins > averageKoalas && averageDolphins != averageKoalas) {
//   if (averageDolphins >= 100) {
//     console.log(`The winner is...
//     DOLPHINS!`);
//   }else {
//     console.log(`No one won`);
//   }
// } else if (averageKoalas > averageDolphins && averageKoalas != averageDolphins) {
//   if (averageKoalas >= 100) {
//     console.log(`The winner is...
//     KOALAS!`);
//   }else {
//     console.log(`No one won`);
//   }
// } else if (averageKoalas === averageDolphins && averageKoalas >= 100 && averageDolphins >= 100){
//   console.log(`WE HAVE A DRAWWWW!`);
// } else {
//   console.log(`No one won!`);
// }


// Dia 5
// const day = 'monday';

// switch(day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday': // day === 'tuesday'
//     console.log('Plan other thing');
//     console.log('Go to lunch');
//     break;
//   case 'wednesday': // day === 'wednesday'
//   case 'thursday': // day === 'thursday'
//     console.log('É quinta e quarta');
//     break;
//   case 'friday': // day === 'friday'
//     console.log('É sexta');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy your weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }


// Dia 6
// const age = 23; 
// age >= 18 ? console.log('You can drive'):
// console.log('You can not drive');

// Desafio 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;


console.log(`Your bill was $${bill}, the tip is ${tip}, now the bill is $${bill + tip}`);