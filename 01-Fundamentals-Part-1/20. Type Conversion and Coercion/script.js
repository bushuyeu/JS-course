// Coversion — manual coversion of a type;

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Pavel')); // NaN, not a number, but in reality it is not "not a number," but rather an invalid number

console.log(typeof NaN); // number 
console.log(typeof Number('Pavel')); // number 

console.log(String(23), 23);

// we cannot convert to undefined or to null 

// Coercion — implicit, done by JS behind the scenes; 

console.log(`I am ` + 23 + ` years old.`) // coercion of 23 to string by js 

console.log('23' - '10' - 3); // js will convert strings to numbers

console.log('23' * '10' - 3); // js will convert strings to numbers

console.log('23' + '10' + 3); // js will convert all to strings 23103

let n = '1' + 1; //11
n -= 1 //10
console.log(n); //10