// 3. Create a function which returns a random number in the given range of values both inclusive

function getRandom(x, y) {
    return Math.round(Math.random() * (Math.abs(x - y))) + Math.min(x,y);
}

console.log(getRandom(5,12));