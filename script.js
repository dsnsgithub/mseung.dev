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

/*times opened--------- */
const timesOpened = document.getElementById("timesopened");
const firstOpened = document.getElementById("firstvisited");
if(localStorage.times) {
    localStorage.times = Number(localStorage.times) + 1;
	timesOpened.innerHTML = localStorage.times;
    firstOpened.innerHTML = localStorage.first;
} else {
    localStorage.times = 1;
	var currentTime = new Date();
    localStorage.first = "First visited on " + (Number(currentTime.getMonth()) + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear();
	timesOpened.innerHTML = localStorage.times;
    firstOpened.innerHTML = localStorage.first;
}
/*times opened--------- */

/*emoji launcher------ */
var angleXList = [];
var angleYList = [];
var emojiList = document.getElementsByClassName("emoji");
var emojis = ["sun.png"];
var emojiClient;
var moveInterval;
var createInterval;

function createEmoji() {
	var emoji = document.createElement("img");
	emoji.src = "/pictures/floatingemojis/" + emojis[Math.floor(Math.random() * emojis.length) + 0];
	emoji.style.position = "absolute";
	emoji.style.top= "-125px";
	emoji.style.left = "-125px";
	emoji.style.zIndex = "-1"
	emoji.classList.add("emoji");
	if(Math.random() < 0.5) {
		angleXList.push(1);
		angleYList.push(Number(Math.random().toFixed(1)));
	} else {
		angleYList.push(1);
		angleXList.push(Number(Math.random().toFixed(1)));
	}
	document.body.appendChild(emoji);
}

document.addEventListener("DOMContentLoaded", function() {
	createInterval = setInterval(createEmoji, 500)
	moveInterval = setInterval(moveEmoji, 2)
})

document.addEventListener("visibilitychange", function() {
	if (document.visibilityState == "visible") {
		clearInterval(createInterval);
		clearInterval(moveInterval);
		createInterval = setInterval(createEmoji, 500)
		moveInterval = setInterval(moveEmoji, 2)
	} else {
		clearInterval(createInterval);
		clearInterval(moveInterval);
	}
});

function moveEmoji() {
	for(let i=0; i<emojiList.length; i++) {
		emojiClient = emojiList[i].getBoundingClientRect();
		if(parseInt(document.body.offsetWidth) <= 900) {
			if(parseInt(emojiList[i].style.top) > parseInt(document.body.offsetHeight) + document.getElementById("right").offsetHeight || parseInt(emojiList[i].style.left) + emojiList[i].offsetHeight > parseInt(document.body.offsetWidth)) {
				emojiList[i].remove();
				angleXList.splice(i, 1);
				angleYList.splice(i, 1);
			} else {
				emojiList[i].style.top = parseFloat(emojiList[i].style.top) + angleYList[i] + "px";
				emojiList[i].style.left = parseFloat(emojiList[i].style.left) + angleXList[i] + "px";
			}
		} else {
			if(parseInt(emojiList[i].style.top) > parseInt(document.body.offsetHeight) || parseInt(emojiList[i].style.left) > parseInt(document.body.offsetWidth)) {
				emojiList[i].remove();
				angleXList.splice(i, 1);
				angleYList.splice(i, 1);
			} else {
				emojiList[i].style.top = parseFloat(emojiList[i].style.top) + angleYList[i] + "px";
				emojiList[i].style.left = parseFloat(emojiList[i].style.left) + angleXList[i] + "px";
			}
		}
	}
}
/*emoji launcher------ */

var aList = document.querySelectorAll("a");
var twosections = document.getElementById("twosections").querySelectorAll("div");
var about = document.getElementById("about").querySelectorAll("div");
var date = new Date();
if (date.getHours() >= 19 || date.getHours() <= 6) {
	document.body.style.backgroundColor = "#070620";
	document.body.style.color = "white";

	for(let i = 0; i < aList.length; i++) {
		aList[i].style.border = "2px solid white";
		aList[i].style.color = "white";
	}

	for(let i = 0; i < twosections.length; i++) {
		twosections[i].style.backgroundColor = "#188a84";
	}

	for(let i = 0; i < about.length; i++) {
		about[i].style.backgroundColor = "#42a362";
	}
	emojis.splice(emojis.indexOf("sun.png"), 1);
	emojis.push("moon.png");
}
if(date.getMonth() == 9) {
	emojis.push("pumpkin.png")
}
if(date.getMonth() == 10) {
	emojis.push("fall.png")
}
if(date.getMonth() == 11 || date.getMonth() == 0) {
	emojis.push("snowflake.png")
}
if(date.getMonth() == 1) {
	emojis.push("heart.png")
	emojis.push("heart2.png")
}
if(date.getMonth() >= 2 && date.getMonth() <= 4) {
	emojis.push("flower.png")
}
if(date.getMonth() == 0 && date.getDate() == 1) {
	emojis.push("newyear.png")
}
if(date.getMonth() == 11 && date.getDate() >= 25) {
	emojis.push("christmas.png")
	emojis.push("present.png")
}