function convertUnit() {
    let result = 0;
    let length = document.getElementById("length").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    result = (length*toUnit)/fromUnit;
    document.getElementById("result").innerHTML = result.toString();
}