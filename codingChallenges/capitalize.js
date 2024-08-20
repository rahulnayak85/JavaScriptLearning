const myString = 'developer';
console.log(myString);
let myNewString = myString[0].toUpperCase() + myString.slice(1,);
console.log(myNewString);
console.log(Math.floor(4.65656854));
console.log(Math.pow(2,3));

const x = Math.floor((Math.random() * 100 + 1));
const y = Math.floor((Math.random() * 50 + 1));

const sumOutput = x + y;
const diffOutput = x - y;
const prodOutput = x * y;
const quotientOutput = x / y;
const remainderOutput = x % y;

console.log(`X is ${x} and Y is ${y}`);
console.log(`The sum of x and y is ${sumOutput}. The difference of x and y is ${diffOutput}` );
console.log(`The product of x and y is ${prodOutput}. The quotient of x and y is ${quotientOutput}`);
console.log(`The remainder of x and y is ${remainderOutput}`);


