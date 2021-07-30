// String, Number
const name = 'John';
const age = 30;
//  Concactentation
console.log('My name is' + name + ' and I am' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`)

const s = 'Hello World';
// gets the length of the string
console.log(s.length);
// returning 'Hello World' in caps
console.log(s.toUpperCase());
// this gives just 'Hello'
console.log(s.substring(0,5));
// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears']
// pushes the mango to the array without knowing that its there
fruits.push('mango');
// takes the last one off
fruits.pop()
// check to see if something is an array
console.log(Array.isArray('hello'));
console.log(fruits);

// object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'boston',
        state: 'MA'
    }
}

console.log(person);

console.log(person.address.city);

// directly add properties
person.email = 'johndoe@gmail.com';

console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
]

console.log(todos[1].text);

// For loops
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// While Loops - set the variable outside of the loop
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${name}`);
    i++;
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter

todos.forEach(function(todo) {
console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
    });

    console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

// || means or so if at least one part of it is true it will run
const x = 6;
const y = 11;
if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
} 

// && means and they both have to be true
// const x = 6;
// const y = 11;
// if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// } 

var z = 8;
// ternary operator "?" means then ":" means else
var color = z > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

// functions
function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(5,4);

// constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lasName = lastName;
    this.dob = dob;
}

// creating a class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
var person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1);


