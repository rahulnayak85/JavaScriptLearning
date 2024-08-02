let rows = []
inverted = true;
const count = 9;

let character = "*"

function pyramid(rowNumber, rowCount) {
		return " ".repeat(count - rowNumber) + character.repeat(2*rowNumber - 1) + " ".repeat(rowCount - rowNumber)
	}

for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(pyramid(i, count));
	}
	else {
		rows.push(pyramid(i, count))
	}
}	

pyramid(count);
let result = ""
for (const row of rows) {
	result = result + "\n" + row; 
}
console.log(result);