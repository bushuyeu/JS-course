// in JS each value is either an object or a primitive value

//Object
let me = {
    firstName: 'Jonas'
};

//Primitive
let firstName = 'Jonas';
let age = 30;

//Primitive data types:
//1. Number: always floating point numbers for both int and decimals
let tMinsk = 33;
let tMSQ = 33.0;

//2. String: sequence of chars
let myName = 'Pasha';

//3. Boolean: logical type that can only be TRUE or FALSE
let fullName = true;
console.log(typeof fullName);
console.log(typeof true);

//4. Undefined: value taken by a var that is not yet defined ('empty value')
let children;
console.log(children); // returns undefined (value)
console.log(typeof children); // returns undefined (type)

// 5. Null: also means 'empty value'
console.log(typeof null);
// known issue, it will return Object
// 6. Symbol (es2015): value that is unique and cannot be changed

// 7. BigInt (ES2020): larger ints than Number type can hold

// JS has dynamic typing: we do not have to manually define the data type of the value stored in a var. Data types are assigned automatically. 
// Hence it's the value that has a type, not a var. 
// var can change types
fullName = firstName; //value is assigned without "let"
console.log(typeof fullName);
// JS is executed from top to bottom 

