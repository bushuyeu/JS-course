function calAge1(birthYear) { // birthyear here is a parameter
    return 2037 - birthYear;
}
// function diclaration 
const age1 = calAge1(1991); // 1991 is an argument of a parameter birthyear 

console.log(age1);

//function expression
//function is stored in a value; it doesn't have a type
const calAge2 = function (birthYear) {  // here function is without a name, an anonymous funtion
    return 2037 - birthYear;
}

const age2 = calAge2(1991);

console.log(age1, age2);

// f declarion can be called before they are defined (however, normally it's not a good idea), expressions cannot 

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsToRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsToRetirement(1991, 'Jonas'));
console.log(yearsToRetirement(1980, 'bob'));

// arrow functions don't have 'this' 