window.onload = function () {
    let date = new Date();
    let currentDate = "Current Date: " + date;
    document.getElementById('date').innerHTML = currentDate;
}

function calculate(){
let from = document.getElementById('exchange').value;
let to = document.getElementById('convert').value;
let amount = document.getElementById('amount').value;;
let result;
let rate;

if(from == "1" && to == "1"){
    document.getElementById('result').innerHTML = "Same Currency Please Check Again!";
}else if (from == "1" && to == "2"){
    
    result = 1.11 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " USD" + " ("+rate+")";
}else if (from == "1" && to == "3"){
    
    result = 1.40 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " CDN" + " ("+rate+")";
}else if (from == "1" && to == "4"){
   
    result = 0.000026 * amount;
    rate = (result/amount).toFixed(6)+":1"
    document.getElementById('result').innerHTML = result.toFixed(6) + " BTC" + " ("+rate+")";
}else if (from == "1" && to == "5"){
    
    result = 0.00038 * amount;
    rate = (result/amount).toFixed(5)+":1"
    document.getElementById('result').innerHTML = result.toFixed(5) + " ETH" + " ("+rate+")";
}
else if (from == "2" && to == "1"){
    
    result = 0.90 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " EURO" + " ("+rate+")";
}else if(from == "2" && to == "2"){
    document.getElementById('result').innerHTML = "Same Currency Please Check Again!";
}
else if (from == "2" && to == "3"){
   
    result = 1.26 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " CDN" + " ("+rate+")";
}else if (from == "2" && to == "4"){
    
    result = 0.000026 * amount;
    rate = (result/amount).toFixed(6)+":1"
    document.getElementById('result').innerHTML = result.toFixed(6) + " BTC" + " ("+rate+")";
}else if (from == "2" && to == "5"){
    
    result = 0.00034 * amount;
    rate = (result/amount).toFixed(5)+":1"
    document.getElementById('result').innerHTML = result.toFixed(5) + " ETH" + " ("+rate+")";
}
else if (from == "3" && to == "1"){
    
    result = 0.71 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " EURO" + " ("+rate+")";
}else if (from == "3" && to == "2"){
    
    result = 0.79 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " USD" + " ("+rate+")";
}else if(from == "3" && to == "3"){
    document.getElementById('result').innerHTML = "Same Currency Please Check Again!";
}
else if (from == "3" && to == "4"){
   
    result = 0.000018 * amount;
    rate = (result/amount).toFixed(6)+":1"
    document.getElementById('result').innerHTML = result.toFixed(6) + " BTC" + " ("+rate+")";
}else if (from == "3" && to == "5"){
    
    result = 0.00027 * amount;
    rate = (result/amount).toFixed(5)+":1"
    document.getElementById('result').innerHTML = result.toFixed(5) + " ETH" + " ("+rate+")";
}
else if (from == "4" && to == "1"){
   
    result = 39123.58 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " EURO" + " ("+rate+")";
}else if (from == "4" && to == "2"){
    
    result = 43444.10 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " USD" + " ("+rate+")";
}else if (from == "4" && to == "3"){
    
    result = 54859.25 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " CDN" + " ("+rate+")";
}else if(from == "4" && to == "4"){
    document.getElementById('result').innerHTML = "Same Currency Please Check Again!";
}
else if (from == "4" && to == "5"){
   
    result = 14.92 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " ETH" + " ("+rate+")";
}
else if (from == "5" && to == "1"){
   
    result = 2618.41 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " EURO" + " ("+rate+")";
}else if (from == "5" && to == "2"){
    
    result = 2907.57 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " USD" + " ("+rate+")";
}else if (from == "5" && to == "3"){
    
    result = 3678.98 * amount;
    rate = (result/amount).toFixed(2)+":1"
    document.getElementById('result').innerHTML = result.toFixed(2) + " CDN" + " ("+rate+")";
}else if (from == "5" && to == "4"){
   
    result = 0.067 * amount;
    rate = (result/amount).toFixed(3)+":1"
    document.getElementById('result').innerHTML = result.toFixed(3) + " BTC" + " ("+rate+")";
}else if(from == "5" && to == "5"){
    document.getElementById('result').innerHTML = "Same Currency Please Check Again!";
}
else{
    document.getElementById('result').innerHTML = "";
}
 return false;

}




