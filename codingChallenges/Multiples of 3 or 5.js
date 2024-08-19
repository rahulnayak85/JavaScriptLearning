// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23. 
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number) {
    let sum = 0
    for (let i = 1; i < number; i++) {
        if (number <= 0) {
            return 0;
        }
        else if (i % 15 === 0) {
            sum += i;

        }
        else if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
        else {continue;}
        
    }
    return sum;

}

console.log(solution(0)); //0
console.log(solution(-15)); //0
console.log(solution(10)); //23
console.log(solution(20)); //78
console.log(solution(200)); //9168
