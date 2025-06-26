// const cards = document.getElementsByClassName("item");
// const rows = document.getElementsByClassName("row");
// const birthdaypeople = document.getElementById("birthdaypeople");
// const people = document.getElementById("people");


// var oldDates = [];
// var newDates = [];
// var evenNewerDates = [];
// var newNames = [];
// var date = new Date();
// var enableSection = false;
// var onlyonceagainagainagain = false;
// var hasbeenSorted = false;
// var cardString;

// function checkTime() {
//     if (date.getHours() >= 19 || date.getHours() <= 6) {
//         document.body.style.backgroundColor = "#070620";
//         document.body.style.color = "white";
//         document.getElementById("container").style.backgroundColor = "#160f3a";
//         colors = ["maroon", "darkorange", "goldenrod", "darkgreen", "darkblue", "purple"];
//         onlyonceagainagain();
//     }
// }

// function onlyonceagainagain() {
//     if (onlyonceagainagainagain == false) {
//         onlyonceagainagainagain = true;
//         for (let i = 0; i < names.length; i++) {
//             cards[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length) + 0];
//         }
//     }
// }

// for (let i = 0; i < names.length; i++) {
//     oldDates.push(dates[i]);
//     cards[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length) + 0];
//     cards[i].innerHTML = names[i] + "<br>";
//     cards[i].innerHTML = cards[i].innerHTML + dates[i].charAt(0) + dates[i].charAt(1) + "/" + dates[i].charAt(2) + dates[i].charAt(3);
// }


// var olderVar;
// var onlyonce = false;

// function sort() {
//     newNames = [];
//     newDates = [];
//     olderVar = undefined;

//     dates = dates.sort((a,b)=>a - b);
//     for (let i = 0; i < dates.length; i++) {
//         if ((date.getMonth() + 1 >= Number(dates[0].charAt(0) + dates[0].charAt(1)) && date.getDate() > Number(dates[0].charAt(2) + dates[0].charAt(3))) || date.getMonth() + 1 > Number(dates[0].charAt(0) + dates[0].charAt(1))) {
//             dates.push(dates.shift());
//         }
//     }

//     for (let i = 0; i < names.length; i++) {
//         newDates.push(dates[i])
//         evenNewerDates.push(dates[i]);
//     }


//     var temp = evenNewerDates.length
//     for (let i = 0; i < temp; i++) {
//         onlyonceplz();
//         onlyonce = true;
//         olderVar = oldDates.indexOf(evenNewerDates[0]);
//         evenNewerDates.splice(0, 1);
//         if (oldDates.indexOf(evenNewerDates[0]) != olderVar) {
//             newNames.push(names[oldDates.indexOf(evenNewerDates[0])]);
//         } else if (oldDates.indexOf(evenNewerDates[0]) == olderVar) {
//             newNames.push(names[oldDates.indexOf(evenNewerDates[0]) + 1]);
//         }
//     }

//     function onlyonceplz() {
//         if (onlyonce == false) {
//             if (oldDates.indexOf(evenNewerDates[0]) != olderVar) {
//                 newNames.push(names[oldDates.indexOf(evenNewerDates[0])]);
//             } else if (oldDates.indexOf(evenNewerDates[0]) == olderVar) {
//                 newNames.push(names[oldDates.indexOf(evenNewerDates[0]) + 1]);
//             }
//         }
//     }
// }
// sort();

// for (let i = 0; i < names.length; i++) {
//     cards[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length) + 0];
//     cards[i].innerHTML = newNames[i] + "<br>";
//     cards[i].innerHTML = cards[i].innerHTML + newDates[i].charAt(0) + newDates[i].charAt(1) + "/" + newDates[i].charAt(2) + newDates[i].charAt(3);
// }

// var enableBirthdays = false;
// var birthdaynumber = 0;
// var cardnumber = 0;
// var row;
// var card;
// var birthdaylist = []

let interval;

const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// onlyonce = false;
// function check() {
//     for (let i = 0; i < names.length; i++) {
//         if (Number(dates[i].charAt(0).toString() + (dates[i].charAt(1).toString())) === Number(date.getMonth()) + 1) {
//             if (Number(dates[i].charAt(2).toString() + (dates[i].charAt(3).toString())) === Number(date.getDate())) {
//                 birthdaypeople.style.display = "flex";
//                 people.appendChild(cards[i]);
//                 birthdaylist.push(cards[i]);
//                 enableBirthdays = true;
//                 birthdaynumber++;
//             } else {
//                 if (birthdaylist.includes(cards[i])) {
//                     for(let u=0; u<birthdaylist.length; u++) {
//                         document.getElementById("row" + rows.length).append(birthdaylist.shift());
//                         birthdaylist.splice(0, 1);
//                         birthdaynumber--;
//                     }
//                 }
//             }
//         } else {
//             if (birthdaylist.includes(cards[i])) {
//                 for(let u=0; u<birthdaylist.length; u++) {
//                     document.getElementById("row" + rows.length).append(birthdaylist.shift());
//                     birthdaylist.splice(0, 1);
//                     birthdaynumber--;
//                 }
//             }
//         }
//         if (birthdaynumber == 0) {
//             enableBirthdays = false;
//             birthdaypeople.style.display = "none";
//         }
//     }
//     if (enableBirthdays == true) {
//         for (let x = 1; x < rows.length; x++) {
//             cardnumber = cardnumber + birthdaynumber;
//             row = document.getElementById("row" + x);
//             while (row.childElementCount < 4 && cardnumber<cards.length) {
//                 card = cards[cardnumber]
//                 row.append(card);
//                 cardnumber++;
//             }

//         }
//         //activate confetti

//         sort();
//         for (let i = 0; i < names.length; i++) {
//             cards[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length) + 0];
//             cards[i].innerHTML = newNames[i] + "<br>";
//             cards[i].innerHTML = cards[i].innerHTML + newDates[i].charAt(0) + newDates[i].charAt(1) + "/" + newDates[i].charAt(2) + newDates[i].charAt(3);
//         }
//     }
// }

// var oldVar;
// var onlyonceagain = false;

// setInterval(function() {
//     oldVar = date.getDate();
//     date = new Date();
//     currentDate.innerHTML = date;
//     checkTime();
//     if (onlyonceagain == false) {
//         onlyonceagain = true;
//         check();
//     }
//     if (oldVar != date.getDate()) {
//         check();
//     }
// }, 100)
const currentDate = document.getElementById("currentDate");
const lightColors = ["lightcoral", "lightsalmon", "lightyellow", "lightgreen", "lightblue", "pink"]
const darkColors = ["maroon", "#BE5504", "#BA8E23", "darkgreen", "darkblue", "purple"];
const mainContainer = document.getElementById("main-container");
const birthdaysElem = document.getElementById("birthdaysElem");
const birthdayContainer = document.getElementById("birthday-container");
let birthdayList = [];

let date;

let dayOrNight;
function updateDate() {
    date = new Date();
    currentDate.innerHTML = date;
    if (date.getHours() >= 19 || date.getHours() <= 6) {
        dayOrNight = "night";
        document.body.style.backgroundColor = "#070620";
        document.body.style.color = "white";
    } else {
        dayOrNight = "day";
    }
}
let data;
async function waitForFetch() {
    try {
        const req = await fetch("./index.json", { method: "GET" }).then(res => res.json()).then(d => d);
        data = req;
    } finally {
        updateDate();
        sort();
    }
}
waitForFetch();
var dayInterval = setInterval(function () {
    let pastDate = date;
    updateDate();
    if (pastDate.getDate() != date.getDate()) {
        sort();
    }
}, 100);

function sort() {
    console.log(data)
    mainContainer.innerHTML = "";
    const entries = Object.entries(data);

    entries.sort((a, b) => { return Number(a[1].date) - Number(b[1].date) });

    const currentDateText = Number(String(date.getMonth() + 1) + String(date.getDate()))
    const pastBirthdays = [];
    birthdayList = [];
    for (let i = 0; i < entries.length; i++) {
        if (Number(entries[i][1].date) < currentDateText) {
            pastBirthdays.push(entries[i]);
            entries.shift()
            i--;
        } else if (Number(entries[i][1].date) == currentDateText) {
            birthdayList.push(entries[i]);
            entries.shift();
            i--;
        }
    }
    entries.push(...pastBirthdays)
    entries.map((person) => {
        const card = document.createElement("div");
        card.className = "block";
        if (person[1].date.charAt(0) == "0") {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        } else {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(0) + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        }

        if (dayOrNight == "day") {
            card.style.backgroundColor = lightColors[Math.floor(Math.random() * lightColors.length) + 0];
        } else {
            card.style.backgroundColor = darkColors[Math.floor(Math.random() * darkColors.length) + 0];
        }
        mainContainer.appendChild(card);
    })
    handleBirthdays();
}

function handleBirthdays() {
    birthdaysElem.innerHTML = "";
    if (birthdayList.length == 0) {
        birthdayContainer.style.display = "none";
        mainContainer.style.marginTop = "10px";
        return;
    } else {
        birthdaysElem.style.display = "flex";
        birthdayContainer.style.display = "flex";
        mainContainer.style.marginTop = "100vh";

        interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 },
                })
            );
        }, 250)
    }
    birthdayList.map((person) => {
        const card = document.createElement("div");
        card.className = "block";
        if (person[1].date.charAt(0) == "0") {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        } else {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(0) + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        }

        if (dayOrNight == "day") {
            card.style.backgroundColor = lightColors[Math.floor(Math.random() * lightColors.length) + 0];
        } else {
            card.style.backgroundColor = darkColors[Math.floor(Math.random() * darkColors.length) + 0];
        }
        birthdaysElem.appendChild(card)
        console.log('sdf')
    })
}