//simple program to convert an array of numbers into a phone number format
function createPhoneNumber(numbers){
    numbers.unshift("(")
    numbers.splice(4,0, ") ");
    numbers.splice(8,0, "-");
    str = ""
    for (let i = 0; i<numbers.length;i++) {
      str+= numbers[i]
    }
    return str;
    
  }