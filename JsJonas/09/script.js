'use strict';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },

//   orderPasta: function(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderPizza: function(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(...otherIngredients);
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const[i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// const {menu = [], startedMenu: starters = []} = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

// const {fri: {open:timeToOpen, close:timeToClose}} = openingHours;
// console.log(timeToOpen, timeToClose);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Samuel';
// const letters = [...str, '', 'D.'];
// console.log(letters);

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1? '), prompt('Ingredient 2? '), prompt('Ingredient 3? ')];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorant Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// // Destructuring
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const {sat, ...weekdays} = restaurant.openingHours;

// // Functions
// const add = function(...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// Or Operator
// console.log(3 || 'Samuel'); 
// console.log('' || 'Samuel');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // And Operator
// console.log(0 && 'Samuel');
// console.log(7 && 'Samuel');

// console.log('Hello' && 23 && null && 'Samuel');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // Or assignment operator
// rest1.numGuests = rest1.numGuests || 10; 
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // And assignment operator
// rest1.owner = rest1.owner && '<anonymous>';
// rest2.owner = rest2.owner && '<anonymous>';

// rest1.owner &&= '<anonymous>';
// rest2.owner &&= '<anonymous>';


// CODING CHALLENGE
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
//     ],
//     [
//       'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 01.
// // const players1 = [game.players[0]];
// // const players2 = [game.players[1]];
// const [players1, players2] = game.players;

// // 02. 
// const [gk, ...fieldPlayers] = players1;

// // 03.
// const allPlayers = [...players1, ...players2];

// // 04.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 05.
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
// const {odds: {team1, x: draw, team2},} = game;

// // 06.
// const printGoals = function(...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(`${players.length} goals were scored`);
// }
// printGoals(...game.scored);

// // 07.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);


//console.log(restaurant.openingHours.mon.open);
//Mostra se o que vem antes do ? existe, se não existir devolve undefined
//console.log(restaurant.openingHours.mon?.open);
//console.log(resturant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'Samuel', email: 'hello@samuel.io'}];
// console.log(users[0]?.name ?? 'User array empty');


// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(restaurant.openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for(const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// };

// // CODING CHALLENGE 2
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
//       ],
//       [
//         'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//     scorers: {

//     },
//   };

//   // 01. 
//   // for(let i = 0; i < game.scored.length; i++) {
//   //   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
//   // }
//   for(const [i, player] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${player}`);
//   };

//   // 02.
//   let averageOdds = 0;
//   for(const odd of Object.values(game.odds)) {
//     averageOdds += odd;
//   };
//   averageOdds /= Object.values(game.odds).length;
//   console.log(averageOdds);

//   // 03.
//   // console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
//   // console.log(`Odd of draw: ${game.odds.x}`);
//   // console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
//   for(const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} ${odd}`);
//   };
  
//   // 04.
//   console.log(Object.entries(game.odds));
//   console.log(Object.keys(game.odds));

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza',]);
// console.log(ordersSet);

// console.log(new Set('Samuel'));

// console.log(ordersSet.size);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('samuelduenha').size);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🥳'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// // Converting object to map
// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// };
// // const answer = Number(prompt('Your answer: '));
// const answer = 3;
// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// CODING CHALLENGE 3
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64, '🔶 Yellow card');
// console.log(gameEvents);
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'First' : 'Second';
//   console.log(`[${half} Half] ${min}: ${event}`);
// };

// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E')
//     console.log('You got the middle seat! 🤐');
//   else
//     console.log('You got lucky! 🥳');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const airline = 'Tap Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'sAmUel';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing
// const priceGB = '288,97£';
// const priceUs = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUs);

// const annoucement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(annoucement.replaceAll('door', 'gate'));
// // console.log(annoucement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('This plane is part of the new Airbus family');
// };

// // Practice exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun') ) {
//     console.log("You can't enter the airplane with this items");
//   } else {
//     console.log('You are good to go!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife.');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snakes and a gun for protection');

// console.log('a+very+nice+string'.split('+'));
// console.log('Samuel Duenha'.split(' '));

// const [firstName, lastName] = 'Samuel Duenha'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for(const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   };
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('samuel duenha');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Samuel'.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const lastFour = str.slice(-4);
//   return lastFour.padStart(str.length, '*'); 
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// // Repeat
// const message2 = 'Bad waether.. All Departues Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in the line ${'✈️'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);


// Coding Challenge #4
// Mine
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function() {
//   const text = document.querySelector('textarea').value;
//   const variables = text.split('\n');
//   for(let i = 0; i < variables.length; i++) {
//     variables[i] = variables[i].toLowerCase();
//     variables[i] = variables[i].trim().split('_');
//     variables[i][1] = variables[i][1].replace(variables[i][1][0], variables[i][1][0].toUpperCase());
//     variables[i] = variables[i].join('');
//     console.log(variables[i].padEnd(20, ' ') + '✅'.repeat(i + 1));
//   }
// });

// // Him
// document.querySelector('button').addEventListener('click', function() {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:0+_Departure;fao93766109;lis2323639855;12:30';

// const getCode = str => str.slice(0, 3).toUpperCase();

// for(const flight of flights.split('+')) {
//   const [type, from, to, time] =  flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// };