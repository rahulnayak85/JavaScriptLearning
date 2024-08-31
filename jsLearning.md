# Tools and Setup

## VS Code
- Use VS Code
- Good Extensions: Prettier, Live Server

Emmet is built-in and provides some useful functionality
- To create HTML boilerplate, press ! in an empty file 

## Browser Console

console.log is most well known
other useful console methods
console.table
console.error
console.group along with console.groupEnd
console.warn

## VS Code keyboard shortcuts

- JS single line comments are made by //
- JS multi line comments are made by /* === */
- On any line, entering Ctrl + / will comment out the whole line as a single line comment
- Alt + up arrow will move the whole line of code up (similar for down)
- Ctrl + D will highlight the next similar element that the cursor is currently on
- Ctrl + Shift + L will highlight all elements that the cursor is currently on
- Ctrl + Shift + O will search within VS Code
- Ctrl + F searches in the code file
- Ctrl + Shift + F searches within the file pane (also by clicking the search icon in the pane)
- Ctrl + B toggles the side bar


# Core JS


## Variables

- var, way to declare a variable, wont see this much anymore since JS was updated in 2015 with ES6
- let, the new way to declare a variable 
- const, the way to declare a variable whose value will not change
- variables need to be initialized before they are used, or you will get an error
- variable names cannot start with a number
- camel case is the preferred convention
- const variables must be initialized, let need not be, doing this with const will throw a syntax error //let i is valid, const i is not
- PascalCase is when first letters are both in caps
- uninitialized variables are stored as undefined
- Null is intentional and empty
- Undefined is usually unintentional

## Data Types

- Data types are two categories - Primitives and Non-Primitives (objects or reference)
- Primitives, string, number, boolean, Null, undefined, Symbol, BigInt
- TypeScript is a superset of JS which allows static typing
- Primitives are stored in stack, reference types are stored in heap


### Change string to int
- parseInt() or parseFloat() for floats
- Amount += Amount (unary operator)
- Amount = Number(Amount) //number constructor
- If you try to convert a string with letters to a number, you get a number called NaN

### Change number to string
- Amount = amount.toString()
- Amount - String(amount)

### Convert number to Boolean
- Amount = Boolean(Amount)

## String properties and methods
= properties do not use (), string.length for example



