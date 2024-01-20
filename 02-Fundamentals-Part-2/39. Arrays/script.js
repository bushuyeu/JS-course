
// literal sintax for the array
const friends = ['michael', 'peter', 'steven'];

// array function
const years = new Array(1991, 1990, 1999, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // last element of the array

// array mutation 
friends[2] = 'Masha'; // only primitive values are immutable, array is not a primitive value
console.log(friends);

// but we cannot mutate the entire array 

const firstName = 'Pavel';
const pavel = [firstName, `Bushuyeu`, 2024 - 1991, friends];

const calcAge = function (birthYaer) {
    return 2024 - birthYaer;
}

const ages = [calcAge(years[0]), calcAge(years[1])];
console.log(ages);