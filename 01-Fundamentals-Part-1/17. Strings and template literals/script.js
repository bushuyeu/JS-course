const firstName = 'Pavel';
const currYear = 2023;
const birthYear = 1991;
const agePavel = currYear - birthYear;

const pavel = "I'm " + firstName + ', a ' + agePavel + ' old real human being and a real hero.';

const pavelNew = `I'm ${firstName}, a ${agePavel} old real human being and a real hero.`

//template literal

console.log(pavel);
console.log(pavelNew);

const pavelMultLines = `I'm ${firstName}, ${agePavel} years old\na real human being\nand a real hero.`
console.log(pavelMultLines);