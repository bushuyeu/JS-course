const age = 17;
const ageRequired = 18;
const oldEnough = age >= ageRequired;
const yearsLeft = ageRequired - age;

if (oldEnough) {
    console.log(`Sarah can start driving`);
} else if (yearsLeft > 1) {
    console.log(`Sarah needs to wait ${yearsLeft} years.`);
} else {
    console.log(`Sarah needs to wait ${yearsLeft} more year.`);
}

const birthYear = 1991;
let century;

if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);