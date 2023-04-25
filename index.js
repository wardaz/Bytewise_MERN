
// Variables can be changed also they have global scope
var var1= 10;

function v() {
    console.log(var1);
}
v();


// Constants cannot be changed but if they do they have block scope
// Function 1
function con() {
    const cons1=2;
    console.log(cons1);
}
con();

// Function 2
function con2() {
    const cons1=20;
    console.log(cons1);
}
con2();

// Let can be changed and they have block scope
let l1=2;
l1=5;
console.log(l1);

// Data Types
// Numbers
const num1 = 0;
console.log(num1);

// Strings
var name= 'warda';
console.log(name);

// Objects
const person = {
    firstName: 'hafsa',
    lastName: 'zaeem',
    age: 22
}
console.log(person.firstName);
console.log(person.firstName[0]);
console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));

//Operators
// Assignment operator
console.log("Assignment operator");

let x=10;
console.log(x);

// Arithmetic operator
console.log("Arithmetic operator");

let a= 50;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(++a);
console.log(--a);

// Comparison operator
console.log("Comparison operator");

var a1= 20;
var b1= 30;

console.log(a1>b1);
console.log(a1<b1);
console.log(a1==b1); //values are equal
console.log(a1<=b1);
console.log(a1>=b1);
console.log(a1 === b1);   // values and data types are equal
console.log(a1 !== b1);  // values and data types are not equal
console.log(a1 != b1);  // values are not equal

// Logical operator
console.log("Logical operator");
var isValid = a1 > 10 && b1 < 40
console.log(isValid);

var isValid = a1 > 25 || b1 < 35
console.log(isValid);

var isValid = true;
console.log(!isValid);

// Conditional Statements
//if
const c1=2;
if (c1>0) {
    console.log("Number is positive");
}

//else
if (c1<0) {
    console.log("Number is positive");
}
else{
    console.log("Number is negative");
}

//else if
const c2=0;
if (c2<0) {
    console.log("Number is positive");
}
else if(c2>0){
    console.log("Number is negative");
}
else{
    console.log("Number is zero");
}

//Loops
// for loop
for (let i = 1; i < 6; i++) {
    console.log("This is loop "+ i);
}

// while loop
let i=2;
while (i<6) {
    console.log("This is a while loop "+ i);  
    i++;
}

// do...while loop
let i1=1;
do {
    console.log("This is a do...while loop "+ i1);
    i1++;
} while (i1<4);


// For...of loop
const arr=["Honda","BMW","Mercedes"]
for (const iterator of arr) {
    console.log("Car is "+ iterator);
}