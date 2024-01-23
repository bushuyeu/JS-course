// literal definition of the object 
// order does not matter unlike in arrays 

const pavel = {
    firstName: 'Pavel',
    lastName: 'Bushuyeu',
    birthYear: '1991',
    job: 'founder',
    hasDriversLicense: false,
    friends: ['Khafiz', 'Olga', 'Diana', 'Pavel'],

    // calcAge: function (birthYear) { // function value as a property of an object 
    //     return 2024 - birthYear;
    // }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()} ${this.job} and has ${pavel.hasDriversLicense ? 'a' : 'no'} drivers license.`;
        return this.summary;
    }
};

console.log(pavel.calcAge(pavel.birthYear));
console.log(pavel.getSummary());