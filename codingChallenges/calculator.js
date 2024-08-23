function calculator(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
            break;
        default:
            return 'Thats an error';
    }
}

console.log(calculator(1,2,'+'));
console.log(calculator(1,2,','));
console.log(calculator(40,4,'/'));