function showValue(event) {
    console.log(calculate(parseInt(event.target.value), '+', 4));
}


function calculate(number1, operation, number2) {
	if (operation == '+') {
    	return number1 + number2
	} else if (operation == '-') {
    	return number1 - number2
	} else if (operation == '/') {
    	return number1 / number2
	} else if (operation == '*') {
    	return number1 * number2
	}
}
