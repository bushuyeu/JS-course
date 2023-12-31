/* Write your code below. Good luck! 🙂 */

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables

const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 1.95;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

const markHigherBMI = bmiMark > bmiJohn;

// Test data:

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
