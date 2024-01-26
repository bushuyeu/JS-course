const pavel = [
    'pavel',
    'pasha',
    2024 - 1991,
    'founder',
    ['olya', 'valya', 'dima']
];

// looping backwards

for (let i = pavel.length - 1; i >= 0; i--) {
    console.log(pavel[i]);
}

// loop inside of the loop 

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---exercise ${exercise}----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight rep ${rep}`);
    }
}