const library = 
    [   
        {title: "Book1", author:"Author1", status: {own: true, reading: false, read: false}},
        {title: "Book2", author:"Author2", status: {own: true, reading: false, read: false}},
        {title: "Book1", author:"Author3", status: {own: true, reading: false, read: false}}
    ];



// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// console.log(library);

// const { title: firstBook } = library[0];

// console.log(firstBook);
// console.log(library);

// const libraryJSON = JSON.stringify(library)

// console.log(libraryJSON);

//Get a random number from an array, create a function

function getRandom(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

numbers = [1,11,45,55,66,2454,94,534]

console.log(getRandom(numbers));