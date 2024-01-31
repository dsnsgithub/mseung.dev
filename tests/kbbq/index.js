const total = document.getElementById("total");
const tax = document.getElementById("tax");
const zipbox = document.getElementById("zipbox");
const foodbox = document.getElementById("foodbox");
const productcontainer = document.getElementById("productcontainer");
var term;
var taxstorage = 0;
var tipstorage = 0;
var subtotalstorage = 0;
var zipcode;
var nodes = [];

var tempitem;
var localCurrency = "$"
var database;

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
        await fetch("./db.json", {
            method: "GET",
            contentType: 'application/json',
        })
        .then(data => data.json())
        .then(k => database = k);
    } 
    finally {
        term = foodbox.value.toLowerCase();
        productcontainer.innerHTML = ""
        nodes = [];
        if(term != "") {
            for(let item in database) {
                for(let subitem in database[item]) {
                    for(let product in database[item][subitem]) {
                        if(product.includes(term)) {
                            nodes.push(product)
                        }
                    }
                }
            }
        }

        var order = 0;
        nodes.sort(function(a, b){return a.length-b.length})

        for(let node in nodes) {
            var productCard = document.createElement("div");
            var submitButton = document.createElement("button");
            var productName = document.createElement("p");
            var productDescription = document.createElement("p");
            var productPrice = document.createElement("p");
            productCard.innerHTML = nodes[node];
            productcontainer.appendChild(productCard)

        }
    }
}