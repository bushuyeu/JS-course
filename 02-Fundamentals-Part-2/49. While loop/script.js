
// for problems without the counter

let rep = 1;

while (rep <= 10) {
    console.log(`lifting weights rep ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; // otherwise infinite loop (unless it's 6 from the very beginning) as value will always be set to this specific value 
    if (dice === 6) console.log(`loop is about to end, you rolled 6`)
}


