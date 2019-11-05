// var number1 = parseFloat(document.getElementById('number_1').value);
// alert(dât)
// var number2 = parseFloat(document.getElementById('number_2').value);
function calculator(cal) {
    let number1 = parseFloat(document.getElementById('number_1').value);
    let number2 = parseFloat(document.getElementById('number_2').value);
    let result = 0;

    switch (cal) {
        case "add":
            result = number1 + number2;
            document.getElementById('result').innerHTML = result.toFixed(3);
            break;
        case "sub":
            result = number1 - number2;
            document.getElementById('result').innerHTML = result.toFixed(3);
            break;
        case "mul":
            result = number1 * number2;
            document.getElementById('result').innerHTML = result.toFixed(3);
            break;
        case "div":
            result = number1 / number2;
            document.getElementById('result').innerHTML = result.toFixed(3);
            break;
        default:
            document.getElementById('result').innerHTML = result.toFixed(3);
            break;
    }
}