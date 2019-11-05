function changeCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let result = amount;
    if (from === 'fromVND' && to === 'toUSD') {
        result = amount / 23000;
    } else if (from === 'fromUSD' && to === 'toVND') {
        result = amount * 23000;
    }
    document.getElementById("result").innerHTML = result.toString();
}