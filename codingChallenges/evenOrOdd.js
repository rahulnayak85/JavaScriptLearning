// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function  evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even"
    }

    else {
        return "Odd"
    }
}

console.log(evenOrOdd(0)); // 'Even'
console.log(evenOrOdd(2)); // 'Even'
console.log(evenOrOdd(3)); // 'Odd'
console.log(evenOrOdd(-3)); // 'Odd'



const arr1 = [0,1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

let arr3 = arr1.concat(arr2.slice(1));
console.log(arr3)