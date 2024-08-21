// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc. 
// Given a year, return the century it is in.

function century(year){
    if (year % 100 === 0){
        return year / 100;
    }
    else {return Math.floor(year/100) + 1;}
}

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(89)); // 1

