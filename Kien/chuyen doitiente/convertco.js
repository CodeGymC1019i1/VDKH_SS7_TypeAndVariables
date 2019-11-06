function changeCurrency() {
    let result = 0;
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    if (from === 'fromVND') {
        if (to === 'toUSD') {
            result = amount/23000;
        }
        else if(to === 'toVND'){
            result = amount;
        }
    }
    else if(from === 'fromUSD'){
        if(to === 'toVND'){
            result = amount;
        }
        else{
            result = amount * 23000;
        }