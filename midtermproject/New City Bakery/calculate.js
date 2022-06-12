function CakeChoice(choice) {

    let updateElement = document.getElementById("CakeDimensions");
    if (choice === sheet) {
        updateElement.innerHTML = `<br>
        <label>Cake size (cm)</label><br>
        <input type="number" id="SheetLength" min="30" max="60" required>
        <label class="form-label required">cm Length (min:30, max:60)</label><br>
        <input type="number" id="SheetWidth" min="30" max="45" required>
        <label class="form-label required">cm Width (min:30, max:45)</label>
        `
    } else {
        updateElement.innerHTML = `<br>
        <label>Cake size (cm)</label><br>
        <input type="number" id="RoundRadius" min="15" max="30" required>
        <label class="form-label required">cm Radius (min:15, max:30)</label>
        `
    }
}

function OrderCalculate(event) {
    event.preventDefault();
    let firstname = document.getElementById('first').value;
    let lastname = document.getElementById('last').value;
    let address = document.getElementById('address').value;
    let postalcode = document.getElementById('postalcode').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    const sheetBasePrice = 18;
    const rounbdBasePrice = 15;
    let layer = 0;
    let layerPrice = 0;
    let cakeArea = 0;
    let cakeExtra = 0;
    let cakePrice = 0;
    let CakeDimensions;
    
    
    
    if(document.getElementById('layer1').checked){
        layer = '1 layer', layerPrice = 1;
    }else if (document.getElementById('layer2').checked){
        layer = '2 layers', layerPrice = 1.5;
    }else if (document.getElementById('layer3').checked){
        layer = '3 layers', layerPrice = 2;
    }

    if (document.getElementById('sheet').checked){
    let sheetWid = document.getElementById('SheetWidth').value;
    let sheetlen = document.getElementById('SheetLength').value;
    CakeDimensions ="Sheet cake "+ sheetlen + "cm x " + sheetWid + "cm" + " with "+layer;
    cakeArea = (sheetWid * sheetlen).toFixed(0);
    cakeExtra = (cakeArea - 900) * 0.02;
    cakePrice = ((sheetBasePrice + cakeExtra) * layerPrice).toFixed(2);
    }else if (document.getElementById('round').checked){
    let roundRadius = document.getElementById('RoundRadius').value;
    CakeDimensions = "Round cake " + roundRadius +"cm" + " with "+ layer;
    cakeArea = (roundRadius * roundRadius * Math.PI).toFixed(0);
    cakeExtra = (cakeArea - 707) * 0.02;
    cakePrice = ((rounbdBasePrice + cakeExtra) * layerPrice).toFixed(2);
    }

    let additionalPrice = 0;
    let additionalOrder = "";
    if(document.getElementById('Additional-CreamCheese').checked == true){
        additionalPrice += 5;
        additionalOrder += 'Cream Cheese icing&nbsp;&nbsp; $5<br>'
    }else {
        additionalPrice = additionalPrice;
        additionalOrder = additionalOrder;
    }
    if(document.getElementById('Additional-FruitAndAlmond').checked == true){
        additionalPrice += 7;
        additionalOrder += 'Fruit and Almond topping &nbsp;$7<br>'
    }else{
        additionalPrice = additionalPrice;
        additionalOrder = additionalOrder;
    }
    if(document.getElementById('Additional-FruitJam').checked == true){
        additionalPrice += 4;
        additionalOrder += 'Fruit jam filling between layers &nbsp;$4<br>'
    }else {
        additionalPrice = additionalPrice;
        additionalOrder = additionalOrder;
    }
    
    
    let total = (parseFloat(cakePrice)+parseFloat(additionalPrice)).toFixed(2);
    
    

    document.getElementById('invoice').innerHTML = 
        '<p>Name: '+ firstname+lastname + '</p>' +
        '<p>Address: '+ address + '</p>' +
        '<p>Postal code: '+ postalcode + '</p>' +
        '<p>Phone Number: '+ phone + '</p>' +
        '<p>Email: '+ email + '</p>' +
        '<p><h3>Your order:</h3></p>'+
        '<p>'+CakeDimensions+'&nbsp;&nbsp;$'+cakePrice+'</p>'+
        '<p>'+additionalOrder+'</p>'+
        '<p>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$'+total+'</p>';
        
}



