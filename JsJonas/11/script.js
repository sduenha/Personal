'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false) {

  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i){

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
      
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div><!--movements__type-->

        <div class="movements__date">
          3 days ago
        </div><!--movements__date-->

        <div class="movements__value">
          ${mov} €
        </div><!--movements__value>
        
      </div><!--movements__row-->

    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = function(account) {
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = account.movements.filter(mov => mov > 0).map(deposit => deposit * account.interestRate / 100).filter((int) => int >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

const createUsernames = function (accounts) {
  accounts.forEach(function(accounts){
    accounts.username = accounts.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};
createUsernames(accounts);

const updateUI = function(currentAccount) {
  displayMovements(currentAccount.movements);

  calcDisplayBalance(currentAccount);

  calcDisplaySummary(currentAccount);
}

// Events handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    updateUI(currentAccount);
  };
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  };
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 10 / 100)){
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  };

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  };

  inputCloseUsername.blur();
  inputClosePin.blur();
  inputCloseUsername.value = inputClosePin.value = '';

});

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// // Slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.slice(2);

// // Splice
// arr.splice(-1);
// console.log(arr);
// arr.splilce(1, 2);
// console.log(arr);

// // Reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); 

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('Samuel'.at(0));
// console.log('Samuel'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()){
//   if(movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   };
// };

// console.log('---- FOREACH ----')
// movements.forEach(function(movement, index, array) {
//   if(movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }; 
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // Map
// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });


// Coding Challenge #1
// const checkDogs = function(dogsJulia, dogsKate) {
//   const dogsJuliaNew = dogsJulia.slice(1, dogsJulia.length - 2);
//   const dogsAges = dogsJuliaNew.concat(dogsKate);

//   dogsAges.forEach(function(age, key){
//     console.log(`Dog number ${key + 1} is ${age < 3 ? `still a puppy 🐶` : `an adult, and is ${age} years old`}`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSDArrow);

// const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(...movementsDescriptions);

// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// // const depositsFor = [];
// // for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// // console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log(movements);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => acc < mov ? acc = mov : acc = acc);
// console.log(max);

// // Min value
// const min = movements.reduce((acc, mov) => acc > mov ? acc = mov : acc = acc);
// console.log(min);

// Coding Challenge #2
// const calcAverageHumanAge = function(ages) {
//   const humanAge = ages.map(ages => ages <= 2 ? ages * 2 : 16 + ages * 4);
//   const filteredHumanAge = humanAge.filter(humanAge => humanAge >= 18);
//   console.log(filteredHumanAge);
//   const averageHumanAge = filteredHumanAge.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return averageHumanAge;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);

// Coding Challenge #3
// const calcAverageHumanAge = ages => ages.map(ages => ages <= 2 ? ages * 2 : 16 + ages * 4).filter(humanAge => humanAge >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// // Includes: Equality
// console.log(movements);
// console.log(movements.includes(-130));

// // Some: Condition
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);


// // Every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);
// console.log(movements.sort());

// movements.sort((a, b) => a - b);
// console.log(movements);

// movements.sorte((a, b) => b - a);
// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);

// x.fill(1);
// x.fill(1, 3);
// console.log(x);

// arr.fill(23, 4, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function() {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value')).map(el => Number(el.textContent.replace('€', '')));

//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// // 1.
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // 2.
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 1000).reduce((sum) => sum + 1, 0);
// const numDeposits1000_ = accounts.flatMap(acc => acc.movements).reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);
// console.log(numDeposits1000_);

// // 3.
// const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
//   // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//   sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//   return sums;
// }, {deposits: 0, withdrawals: 0});
// console.log(deposits, withdrawals);

// // 4.
// const convertTitleCase = function(title) {

//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title.toLowerCase().split(' ').map(word => expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Coding Challenge # 4
const dogs = [
  {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
  {weight: 8, curFood: 200, owners: ['Matilda']},
  {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
  {weight: 32, curFood: 340, owners: ['Michael']},
];

// Minha solução
// 1.
// const name = 'Sarah';
// const food = dogs.map(obj => obj.recommendedFood = Math.round(obj.weight ** 0.75 * 28));
// console.log(food);

// // 2.
// dogs.map((obj, i, arr) => obj.owners.forEach(obj => obj === name ? console.log(`${obj}'s dog is eating too ${arr[i].curFood > arr[i].recommendedFood ? 'much' : 'little'}`) : obj));

// // 3.
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];
// dogs.map(obj => obj.recommendedFood > obj.curFood ? ownersEatTooLittle.push(obj.owners) : ownersEatTooMuch.push(obj.owners));
// console.log(`${ownersEatTooMuch.flat().join(' and ')}'s dogs eat too much`);
// console.log(`${ownersEatTooLittle.flat().join(' and ')}'s dogs eat too little`);

// // 4.
// dogs.find(obj => console.log(obj.curFood === obj.recommendedFood));
// dogs.find(obj => console.log(obj.curFood > (obj.recommendedFood * 0.9) && obj.curFood < (obj.recommendedFood * 1.1)));
// const dogsEatingOk = dogs.filter(obj => obj.curFood > (obj.recommendedFood * 0.9) && obj.curFood < (obj.recommendedFood * 1.1));
// console.log(dogsEatingOk);

// // Solução dele

// // 1.
// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 2.
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.curFood ? 'much' : 'little'}`);

// // 3.
// const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too little!`);

// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.
// // console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));
// const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// // 7.
// console.log(dogs.filter(checkEatingOkay));

// // 8.
// const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);