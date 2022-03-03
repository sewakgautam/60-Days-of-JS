let iic = ['sujan', 'sewak', 'prashant', 'sushila'];

iic[2] = 'binda';
console.log(iic); // this print the array
console.log(iic.length); // this print the total object length of the arrey
console.log(iic.indexOf("sewak")); // this print the index of the given string
console.log(iic.join(",")); // this joint all object of array to string and seprate with ,
console.log(iic.concat(['annie','tresika'])); // this add the array at last
console.log(iic.push('nawal')); // this insert the arrey at the end and print the length of the array and this alter the origional value of the array so this is distructive method
console.log(iic); // this print the array
console.log(iic.pop()); // this delete the last object of the array and print the delete object
console.log(iic);
console.log(typeof iic[2]); // this print the type of selected object from the array