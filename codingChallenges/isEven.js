function isEven(x) {
    let y = x < 0 ? -x: x;
    if (y === 0) {
        return true;
    }

    else if (y === 1) {
        return false;
    }

    else {
        return isEven(y - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));