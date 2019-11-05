function insertValueOfDisplay(x) {
    eval('display').value += x;
}

function calc() {
    let display = document.getElementById('display');
    display.value = eval(display.value).toFixed(3);
}