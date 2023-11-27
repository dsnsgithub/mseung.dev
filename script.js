let isToggled = false;

var x = 0;
var letterInterval;

const text = document.getElementById("name");
const words = "mseung";

function startup() {
	letterInterval = setInterval(addletter, 150);
	function addletter() {
		text.innerHTML = text.innerHTML + words.charAt(x); /*Adds letter to textbox*/
		x++;
		if (x >= words.length) {
			/*if done with the sentence*/
			clearInterval(letterInterval); /*stop making x go up*/
		}
	}
}

startup();

// var aList = document.querySelectorAll("a");
// var date = new Date();

// if (date.getHours() >= 19 || date.getHours() <= 6) {
// 	document.body.style.backgroundColor = "#070620";
// 	document.body.style.color = "white";

// 	for (let i = 0; i < aList.length; i++) {
// 		aList[i].style.border = "2px solid white";
// 		aList[i].style.color = "white";
// 	}

// 	document.getElementById("sun").style.display = "none";
// }

/*times opened--------- */
const timesOpened = document.getElementById("timesopened");
const firstOpened = document.getElementById("firstvisited");
if(localStorage.times) {
    localStorage.times = Number(localStorage.times) + 1;
    timesOpened.innerHTML = localStorage.times;
    firstOpened.innerHTML = localStorage.first;
} else {
    localStorage.times = 0;
	var currentTime = new Date();
    localStorage.first = "First visited on " + (Number(currentTime.getMonth()) + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear();
}
/*times opened--------- */

/*emoji launcher------ */
var angleXList = [];
var angleYList = [];
var emojis = ["christmas.png"];

function createEmoji() {
	var emoji = document.createElement("div");
	emoji.style.backgroundImage = "url('/pictures/" + emojis[Math.floor(Math.random() * emojis.length) + 0] + "')";
	if(Math.random() < 0.5) {
		angleXList.push(1);
		angleYList.push(Math.random());
	} else {
		angleYList.push(1);
		angleXList.push(Math.random());
	}
	console.log(angleXList[0])
	console.log(angleYList[0])
	document.body.appendChild()
}

createEmoji();
function moveEmoji() {

}
/*emoji launcher------ */