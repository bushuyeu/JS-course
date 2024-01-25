const pavel = [
    'pavel', 'pasha', 2024 - 1991, 'founder', ['olya', 'valya', 'dima']
];

const types = [];
const typesPush = [];
const ages = [];

for (let i = 0; i < pavel.length; i++) {
    console.log(pavel[i], typeof pavel[i]);

    types[i] = typeof pavel[i]; // save types of the array to another array

    typesPush.push(typeof pavel[i]);
}

console.log(types, typesPush);

const years = [1991, 2007, 1969, 2020]

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}

console.log(ages);

// continue — break existing iteration and go to the next one


for (let i = 0; i < pavel.length; i++) {
    if (typeof pavel[i] !== 'string') continue;

    console.log(pavel[i]);
}

// break — break the whole loop 

// break on number 

for (let i = 0; i < pavel.length; i++) {
    if (typeof pavel[i] === 'number') break;

    console.log(`${pavel[i]} did not break`);
}