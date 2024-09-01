//create a function that rounds a number to the nearest multiple of another number
// roundTo(23, 10) = 20
// roundTo(23,19) = 19
// roundTo(26,10) = 30

function roundTo(num, step) {
    let  remainder = num % step;

    return num - remainder + ((num % step > step / 2) ? step : 0);

}

//     if (num % step === 0){
//         return num;
//     }

//     else {

//     return num - num % step + ((num % step > step / 2) ? step : 0);

//     }
// }
//     else {
//         if (num % step > step/2) {
//             return num - num % step + step;
//         }

//         else {
//             return num - num % step;
//         }
//     }
// }

console.log(roundTo(23,10));
console.log(roundTo(23,19));
console.log(roundTo(26,10));
console.log(roundTo(33,19));
