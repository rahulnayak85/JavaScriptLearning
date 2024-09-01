function countBs(str) {
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            counter++; }
    }
    return counter;
}

console.log(countBs('BOB'));