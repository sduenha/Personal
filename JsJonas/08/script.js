'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you'are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output!';
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Samuel';
calcAge(1991);

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Samuel';
let job = 'teacher';
const year = 1991;

console.log(addDeclaration(2, 3));
console.log(addExpression(2, 3));
console.log(addArrow(2, 3));

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(this);
const calcAge = function(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const samuel = {
  year: 2005,
  calcAge: function() {
    console.log(this);
  },
};
samuel.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = samuel.calcAge;
matilda.calcAge();

const f = samuel.calcAge;
f();

var name = 'Matilda';

const jonas = {
  name: 'Jonas',
  year: 1991,
  calcAge: function() {
    console.log(this),
    console.log(2037 - this.age);

    // Solution ONE
    // const self = this; //  self or that
    // const isMillenial = function() {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }
    // isMillenial();

    // Solution TWO
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.name}`);
  },
};
jonas.greet();
jonas.calcAge();

// ARGUMENTS KEYWORD
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addFuncArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Samuel',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

const jessica = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before married: ', jessica);
console.log('After married: ', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assing({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Befored married: ', jessica2);
console.log('After married: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Befored married: ', jessica2);
console.log('After married: ', jessicaCopy);