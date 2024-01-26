const total = document.getElementById("total");
const tax = document.getElementById("tax");
const zipbox = document.getElementById("zipbox");
var taxstorage = 0;
var tipstorage = 0;
var subtotalstorage = 0;
var zipcode;

var tempitem;
var localCurrency = "$"

function change(input, destination, pretext) {
    if(document.getElementById(input).value >= 0 && document.getElementById(input).value != "") {
        document.getElementById(destination).innerHTML = pretext + localCurrency + document.getElementById(input).value;
        if(destination == "tip") {
            tipstorage = Number(document.getElementById(input).value)
        } else if (destination == "subtotal") {
            subtotalstorage = Number(document.getElementById(input).value)
        }   
    } else if (document.getElementById(input).value == "") {
        document.getElementById(destination).innerHTML = pretext + localCurrency + 0;  
    }

    total.innerHTML = "Total: " + localCurrency + Number(subtotalstorage + subtotalstorage * (tipstorage / 100) + subtotalstorage * (taxstorage / 100)).toFixed(2);    
}

async function getSalesTax() {
    zipcode = Number(zipbox.value);
    if(zipbox.value.length > 4) {
        try {
            await fetch("https://api.api-ninjas.com/v1/salestax?zip_code=" + zipcode, {
                method: 'GET',
                headers: { 'X-Api-Key': 'TkyIrYGNBO+wNc7GmAYt2w==OiLpDN4aV4VycmW9'},
                contentType: 'application/json',
            })
            .then(response => response.json().then(d => {
                console.log(d)
                taxstorage = d[0].total_rate * 100;
                tax.innerHTML = "Tax in Your City: " + localCurrency + taxstorage +  "%";
            }))
        }
        catch (error) {
            console.error()
        }
    } else {
        tax.innerHTML = "Tax in Your City: UNKNOWN ZIP CODE";
    }
}

async function getGroceryPrices() {
    try {
        await fetch("https://api.api-ninjas.com/v1/webscraper?url=https://cooklist.com/products/bakery/frozen-bread", {
            method: 'GET',
            headers: {'X-Api-Key': 'TkyIrYGNBO+wNc7GmAYt2w==OiLpDN4aV4VycmW9'},
            contentType: 'application/json',
        })
        .then(response => response.json().then(d => console.log(d)));
    } 
    catch (error) {
        console.error();
    }
}

getGroceryPrices()