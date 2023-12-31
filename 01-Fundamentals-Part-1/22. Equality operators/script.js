const age = 18;

if (age === 18) console.log(`You are an adult!`);

// = — assignment 
// === strict comparison (no coercion)
console.log('18' === age); //fasle
// == loose comparison (with coercion)
console.log('18' == age); //true

const favNumber = Number(prompt(`What's your fav number?`));

console.log(favNumber);
console.log(typeof favNumber); //string

if (favNumber === 23) console.log(`23 is my fav number too!`)

// !== is the strict version of not equal operator