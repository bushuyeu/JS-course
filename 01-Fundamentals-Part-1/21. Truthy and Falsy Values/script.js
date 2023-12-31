// Truthy and falsy values are values that are not true or flase but will become true of false if they will be converted to boolean type

// Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(``));
console.log(Boolean(''));

// Truthy values: everything else

console.log(Boolean({})); // object is a truthy value

const money = 100;
if (money) { // condition will be coercily converted to boolean, as value is 0, it will be false
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height;
if (height) {
    console.log(`Yay, height is defined`);
} else {
    console.log(`${height} is Undefined`);
}