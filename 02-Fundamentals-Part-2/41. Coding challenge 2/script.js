// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

const bills = [125, 555, 44];

const tips = [];
let tip = 0;
const totalValue = [];



const calcTip = (billValue) => {

    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } else {
        tip = billValue * 0.2;
    }

    tips.push(tip);
    totalValue.push(tip + billValue);

    console.log(tip);
    console.log(totalValue);

    return tip;
};

console.log(calcTip(100));

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.



// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));

