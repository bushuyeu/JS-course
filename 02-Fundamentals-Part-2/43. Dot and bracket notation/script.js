// literal definition of the object 
// order does not matter unlike in arrays 

const pavel = {
    firstName: 'Pavel',
    lastName: 'Bushuyeu',
    job: 'founder',
    friends: ['Khafiz', 'Olga', 'Diana', 'Pavel']
};

console.log(pavel.firstName); // dot notation
console.log(pavel['lastName']); // brackets notation

const nameKey = 'Name';
console.log(pavel['first' + nameKey]); // any expression can go into the square brackets, unlike dot notation

const interestedIn = prompt(`what do you want to know about Pavel?`);
console.log(pavel[interestedIn]);

if (pavel[interestedIn]) {
    console.log(pavel[interestedIn]);
} else {
    console.log(`Wrong request`);
}


pavel.location = 'US';
pavel['twitter'] = 'none';

console.log(pavel);

// Pavel has 3 friends and his best friend is Pavel

console.log(`${pavel.firstName} has ${pavel.friends.length} friends and his best friend is ${pavel.friends[pavel.friends.length - 1]}`);



