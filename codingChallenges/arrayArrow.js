const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {min, max};

}

console.log(minMax([1,2,3,4,5]));
