const friends = ['Diana', 'Khafiz', 'Valentina', 'Olga'];
const newLength = friends.push('Alexandr');
console.log(friends);
console.log(newLength);

friends.unshift('Alexandr'); // add as a first element 

friends.push('A');
console.log(friends);
friends.pop(); // remove last 
console.log(friends);

friends.shift(); // remove first
console.log(friends);

console.log(friends.indexOf('Diana'));
console.log(friends.indexOf('Dian')); // -1 

console.log(friends.includes('Diana')); // boolean

if (friends.includes('Olga')) {
    console.log(`You have a friend called Olga`);
}

