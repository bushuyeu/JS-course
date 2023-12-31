let age = 30;
age = 31; // mutating age var 

const birthYear = 1991;
birthYear = 1990; // throws an error
const = job; // is not legal

// use const by default and let if you are really sure that the var should change in the future

var job = 'Programmer'; // should be avoided, legacy 
job = 'teacher'; // but functions similarly to let 

// vars might not be even declaired! 
lastName = 'Bushuyeu';
console.log(lastName);
// but it's not a good idea, as JS will declare it in the global scope