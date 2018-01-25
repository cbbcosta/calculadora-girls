function soma(number1, number2) {
    return number1 + number2;
}

function subt(number1, number2) {
    return number1 - number2;
}

function multiplicar(number1, number2) {
    return number1 * number2;
}

function dividir(number1, number2) {
    return number1 / number2;
}

function calcular(number1, operador, number2) {
    if (operador == '+') {
        return soma(number1, number2)
    } else if (operador == '-') {
        return subt(number1, number2)
    } else if (operador == '*') {
        return multiplicar(number1, number2)
    } else {
        return dividir(number1, number2)
    }
}

function showValue(event) {
    console.log(calcular(parseInt(event.target.value), '+', 4));
}
