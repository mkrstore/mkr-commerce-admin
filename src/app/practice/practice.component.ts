import { Component } from '@angular/core';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss',
})
export class PracticeComponent {
  age: number = 20;
  age2s: string = '334';

  greet(params: string) {
    return params;
  }

  greet2 = (params) => {
    return params;
  };
}

let name: string = 'vivek';
const key: string = 'sfsf';

function greet(name: string): string {
  return 'Hello' + name;
}

const greet1 = (name: string): string => {
  return 'hello' + name;
};

let users: { name: string; age: number }[] = [
  { name: 'vivek', age: 26 },
  { name: 'vivek', age: 26 },
  { name: 'vivek', age: 26 },
];

const greet2 = (name: string): string => 'hello' + name;

let address: undefined = undefined;
// primitive types (7)
// string
// number
// boolean
// null
// any
// undefined
// unknown

//void - used for functions that return nothing
// never - also used for functions that never reurns

// non primitive types (5)
// array,
// object,
// tuple
// enum
// union

let array: string[] = ['kk', 'fdsfs', 'fsdfsd'];

let obj: { name: string; age: number } = { name: 'vivek', age: 26 };

let oddnumberstill5: [number, number, string] = [1, 3, '5'];

enum directions {
  Up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT',
  $vhdv = 'SOMETHING WITH$',
  v = 'V',
}

let id: string | number = 23;

id = 'wdwd';

let nams = 'vivek';

nams = 'ui';

const pi = 3.14;
// pi = 3.15; -  not allowed

function greeting(firstname: string, lastname?: string): string {
  if (lastname) {
    return `hello ${firstname} ${lastname}`;
  }
  return `hello ${firstname}`;
}

function add(n1: number, n2: number = 0): number {
  return n1 + n2;
}

add(1);

const adding = (numbers: number[]): number => {
  let sum: number = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += element;
  }
  return sum;
};

class Person {
  public name: string;
  private age: number;
  protected city: string;
  readonly id: number = 12;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

let person = new Person('vivek', 23, 'banglore');

class House {
  constructor(
    public number: number,
    private street: string,
    city: string,
    state?: string
  ) {}

  ringbell() {
    return 'tring tring!!';
  }
}

let house = new House(123, 'some street', 'bangalore');
house.number;
// house.street;
// house.city;

abstract class Animal {
  constructor(name: string) {}

  abstract makesound(): void;
}

class Dog extends Animal {
  constructor(name: string, breed: string) {
    super(name);
  }

  override makesound(): void {
    console.log('bow bow');
  }

  omeotherMethod() {}
}

class Cat extends Animal {
  override makesound(): void {
    console.log('meow ');
  }
  constructor(name: string, color: string) {
    super(name);
  }
}

interface User {
  name: string;
  age: number;
  hasSubsc: boolean;
}

class UserService implements User {
  name: string;
  age: number;
  hasSubsc: boolean;
  fruits: string[] = [];

  constructor(name: string, age: number, hasSubsc: boolean) {
    this.name = name;
    this.age = age;
    this.hasSubsc = hasSubsc;
  }

  addfruitAtLast(fruit: string) {
    //add at end
    this.fruits.push(fruit);
    this.fruits.length;
    this.fruits[0];
  }

  removefruitAtLast(fruit: string) {
    //remove at end
    this.fruits.pop();
  }

  addfromfirst(fruit: string) {
    this.fruits.unshift(fruit);
  }

  removeFromFirst(fruit: string) {
    this.fruits.shift();
  }

  isExist(fruit: string) {
    this.fruits.includes(fruit);
  }
}

//15. Array Methods — map, filter, find, sort:

let users2: UserService[] = [
  new UserService('vivek', 26, false),
  new UserService('sravan', 25, true),
  new UserService('vijay', 25, false),
  new UserService('hemanth', 27, true),
];

// map — transform each item, returns new array
let usernames: string[] = users2.map((user) => user.name);
// ['Vivek', 'Ravi', 'Suresh', 'Anil']

// filter — keep items matching condition
let subscribedUsers = users2.filter((user) => user.hasSubsc);

// find — first item matching condition
let vivekUser: UserService | null =
  users2.find((u) => u.name === 'vivek') ?? null;

// sort — sort array
let sortedByAge = users2.sort((a, b) => a.age - b.age);

// some — any item matches condition
let hasminor = users2.some((user) => user.age < 18);

// every — all items match condition
let areAllmajors = users2.every((user) => user.age >= 18);

let totalAgeOfUsers = users2.reduce(
  (sum: number, user) => (sum += user.age),
  0
);

//ternary operator
let status = totalAgeOfUsers > 200 ? true : false;

// loops
for (let i = 0; i < users2.length; i++) {}

// for of
for (let user of users2) {
}

// For in — loop through object keys
for (let key in users2[0]) {
}

users2[0].fruits.forEach((fruit, index) => {
  console.log(`fruit: ${fruit} at index: ${index}`);
});

users2[0].fruits;

let count = 0;
while (count < 5) {
  count++;
}

let userMap = new Map<string, number>();

userMap.set('vivek', 26);
userMap.set('hemanth', 27);

userMap.get('hemanth'); // 27

userMap.has('sravan');

userMap.delete('sravan');

userMap.size;

userMap.forEach((value, key) => {
  console.log(`key : ${key}, value: ${value}`);
});

console.log(age);
var age = 34;
var age = 44;

console.log(directions.down);
