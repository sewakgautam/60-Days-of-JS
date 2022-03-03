// strings
const firstName = 'sewak';
const lastName = 'Gautam';

console.log(firstName, lastName);
// string Concatenation
const fullName = `${firstName} ${lastName}`;
const fullName2 = firstName + ' ' + lastName
console.log(fullName);
console.log(fullName2)
// getting Characters
console.log(fullName[4]);
// string lengths
console.log(firstName.length);
// string methods;
console.log(firstName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(lastName.indexOf('s'));
console.log(lastName.lastIndexOf('a'));

// more string methods

const slises = firstName.slice(0, 3); // this takes 2 arguments where to start and where to end
console.log(slises);

// replace

const fname = lastName.replace('a', 'w');
console.log(fname);
