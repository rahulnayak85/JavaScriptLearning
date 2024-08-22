// Trolls are attacking your comment section! 
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. 
// Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.

function disemvowel(str) {
    const vowels = ['a','e','i','o','u'];
    let newArr = [];    
    for (let i = 0; i<str.length; i++) {
        if (vowels.indexOf(str[i]) < 0) {
            newArr.push(str[i]);
        }
    }
    return newArr.join('');
}

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'