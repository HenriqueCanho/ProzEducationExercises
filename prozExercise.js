//Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e 
//o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
//1. Soma
//2. Subtração
//3. Multiplicação
//4. Divisão

//Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

num1 = prompt('type the first value: ')
num2 = prompt('type the second value: ')
let operator = prompt('Type the operator (1 for Sum, 2 for Subtraction, 3 for Multiplication, 4 for Division): ');

// converting num1 and num2 values to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

function calculate(num1, num2, operator){
    let result;

    switch(operator) {
        case '1':
            result = num1 + num2;
            break;
        case '2':
            result = num1 - num2;
            break;
        case '3':
            result = num1 * num2;
            break;
        case '4':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero";
            }
            break;
        default:
            return "Invalid operator";
    }
        return result
}

// calling the function and showinh the result
let result = calculate(num1, num2, operator);
console.log(`The result is: ${result}`);