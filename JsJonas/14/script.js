'use strict';

// const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const samuel = new Person('Samuel', 2005);
// console.log(samuel);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(samuel instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function() {
//   console.log(2037 - this.birthYear);
// };

// samuel.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(samuel.__proto__);
// console.log(samuel.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(samuel));

// Person.prototype.species = 'Home Sapiens';
// console.log(samuel.species, matilda.species, jack.species);

// console.log(samuel.hasOwnProperty('firstName'));
// console.log(samuel.hasOwnProperty('species'));

// console.log(samuel.__proto__);
// console.log(samuel.__proto__.__proto__);
// console.log(samuel.__proto__.__proto__.__proto__);

// const arr = [3, 6, 6, 4, 5, 6, 9, 3, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// // Coding Challenge #1

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.break = function() {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.break();
// bmw.break();
// bmw.accelerate();

// mercedes.break();
// mercedes.break();
// mercedes.accelerate();

// class expression
// const PersonCl = class {
  
// };

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   };

//   calcAge() {
//     let year = new Date;
//     year = year.getFullYear();
//     console.log(year - this.birthYear);
//   };

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   };

//   get age() {
//     let year = (new Date).getFullYear();
//     return year - this.birthYear;
//   };

//   set fullName(name) {
//     console.log(name);
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   };

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//    console.log('Hey there');
//   };
// };

// const jessica = new PersonCl('Jessica Davis', 1996);
// jessica.calcAge();
// console.log(jessica.age);

// const account = {
//   owner: 'Samuel',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(moviment) {
//     this.movements.push(moviment);
//   },
// };

// console.log(account.latest);
// account.latest = 50;

// const PersonProto = {
//   calcAge() {
//     console.log((new Date).getFullYear() - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// Coding Challenge #2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   };

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going ${this.speed} km/h`);
//   };

//   break() {
//     this.speed -= 5;
//     console.log(`${this.make} is going ${this.speed} km/h`);
//   };
  
//   get speedUS() {
//     return this.speed / 1.6;
//   };

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   };
// };

// const bmw = new CarCl('BMW', 120);
// const mercedes = new CarCl('Mercedes', 95);
// const ford = new CarCl('Ford', 80);

// const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
//   console.log(((new Date).getFullYear()) - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
 
// Student.prototype.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2006, 'Computer Science');
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// Coding Challenge #3
// const CarCl = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// CarCl.prototype.break = function() {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// CarCl.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`${this.make} is going ${this.speed} km/h`);
// }

// const CarEv = function(make, speed, charge) {
//   CarCl.call(this, make, speed);
//   this.charge = charge;
// };

// CarEv.prototype = Object.create(CarCl.prototype);
// CarEv.prototype.constructor = CarEv;

// CarEv.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.make} is now with ${this.charge}% of the battery`);
// };

// CarEv.prototype.accelerate = function() {
//   this.speed += 20;
//   this.charge --;
//   console.log(`${this.make} going ate ${this.speed} km/h, with a charge of ${this.charge}%`);
// }

// const tesla = new CarEv('Tesla', 120, 23);
// tesla.break();
// tesla.break();
// tesla.accelerate();
// tesla.chargeBattery(100);

// class StudentCl extends PersonCl{
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     const age = ((new Date).getFullYear()) - this.birthYear;
//     console.log(`I'm ${age} years old, but as a student I feel more like ${age + 10}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function() {
//   console.log(`My name is ${this.firstName} and I'm ${2037 - this.birthYear} years old`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if(this._approveLoan(val)){
//       this.deposit(val);
//       console.log('Loan approved');
//       return this;
//     };
//   }
// }

// const acc1 = new Account('Samuel', 'BRL', 1111);

// acc1.deposit(250);
// acc1.withdraw(140);

// console.log(acc1.getMovements());
// console.log(acc1);

// console.log(acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000).getMovements());

//Coding Challenge #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  };

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  };

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
    return this;
  };
  
  get speedUS() {
    return this.speed / 1.6;
  };

  set speedUs(speed) {
    this.speed = speed * 1.6;
  };
};

class EVCl extends CarCl {
  #charge;
  
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge --;
    console.log(`${this.make} going at ${140} km/h, with a charge of ${this.#charge}`);
    return this;
  }
};

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().accelerate().breake().chargeBattery(50).accelerate();
console.log(rivian.speedUs);