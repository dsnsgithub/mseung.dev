var x = 0;
var l = 1;
var letterInterval;

const text = document.getElementById("name");
const words1 = "mseung";
const words2 = "Max Seung";

function startup() {
	letterInterval = setInterval(function() {
		addletter(words1)
	}, 150);
	function addletter(words) {
		text.innerHTML = text.innerHTML + words.charAt(x); /*Adds letter to textbox*/
		x++;
		if (x >= words.length) {
			/*if done with the sentence*/
			clearInterval(letterInterval); /*stop making x go up*/
			setTimeout(function() {letterInterval = setInterval(removeletter, 150)}, 5000)
		}
	}

	function removeletter() {
		text.innerHTML = text.innerHTML.slice(0, -1)
		x--;
		if (x <= 0) {
			/*if done with the sentence*/
			clearInterval(letterInterval); /*stop making x go up*/
			l++;
			if(l % 2 == 0) {
				setTimeout(function() {
					letterInterval = setInterval(function() {
						addletter(words2)
					}, 150)
				}, 200)
			} else {
				setTimeout(function() {
					letterInterval = setInterval(function() {
						addletter(words1)
					}, 150)
				}, 200)
			}
		}
	}
}

startup();

const menubutton = document.getElementById('menubutton');
const menu = document.getElementById('menu');
const maincontainer = document.getElementById('maincontainer');
const menustuff = document.getElementById('menustuff');
const menulines = document.getElementsByClassName('menuline');

var isOpened = false;
var canBeOpened = true;
var currentSection = "main";

function slide() {
    if(canBeOpened) {
        if(isOpened) {
            menustuff.style.animationName = "fromleft";
            menustuff.style.animationDirection = "reverse";
            document.getElementById(currentSection + "container").style.animationName = "blur";
            document.getElementById(currentSection + "container").style.animationDirection = "reverse";
			for(let i=0;i<menulines.length; i++) {
				menulines[i].style.animationName = "moveback" + (i+1);
			}
            setTimeout(function() {
                menu.style.animationName = "slidein";
                menu.style.animationDirection = "reverse";
                setTimeout(function() {
                    menu.style.display = "none";
                    menustuff.style.display = "none";
                    isOpened = false;
                }, 750)
            }, 500)
			setTimeout(function() {
				document.getElementById(currentSection + "container").style.filter = "none";
            }, 1100)
        } else {
            menu.style.animationName = "slidein";
            menu.style.display = "flex";
            document.getElementById(currentSection + "container").style.animationName = "blur";

			for(let i=0;i<menulines.length; i++) {
				menulines[i].style.animationName = "move" + (i+1)
			}
            setTimeout(function() {
                menustuff.style.animationName = "fromleft";
                menustuff.style.display = "flex";
				menustuff.style.left = "0%"
            }, 500)
			setTimeout(function() {
				document.getElementById(currentSection + "container").style.filter = "blur(200px)";
            }, 1100)
        }

        canBeOpened = false;
        isOpened = true;

        setTimeout(function() {
            document.getElementById(currentSection + "container").style.animationName = "";
            document.getElementById(currentSection + "container").style.animationDirection = "";
            menustuff.style.animationName = "";
            menustuff.style.animationDirection = "";
            canBeOpened = true;
            menu.style.animationName = "";
            menu.style.animationDirection = "";
        }, 1250)
    }
}

function changeContent(section) {
	document.getElementById(currentSection + "container").style.display = "none";
	document.getElementById(section + "container").style.display = "flex";
	document.getElementById(section + "container").style.filter = "blur(100px)";
	currentSection = section;
	slide();	
}
// /*times opened--------- */
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
// /*times opened--------- */

// /*emoji launcher------ */
var angleXList = [];
var angleYList = [];
var emojiList = document.getElementsByClassName("emoji");
var emojis = ["sun.png"];
var emojiClient;
var moveInterval;
var createInterval;

function createEmoji() {
	var emoji = document.createElement("img");
	var emojiName = Math.floor(Math.random() * emojis.length) + 0
	emoji.src = "/pictures/floatingemojis/" + emojis[emojiName];
	emoji.classList.add(emojis[emojiName]);
	emoji.classList.add("emoji");
	emoji.style.position = "absolute";
	emoji.style.top= "-125px";
	emoji.style.left = "-125px";
	emoji.style.zIndex = "-10";
	emoji.style.userSelect = "none"
	if(Math.random() < 0.5) {
		angleXList.push(1);
		angleYList.push(Number(Math.random().toFixed(1)));
	} else {
		angleYList.push(1);
		angleXList.push(Number(Math.random().toFixed(1)));
	}
	if(date.getMonth() == 3 && emoji.className == "raindrop.png emoji") {
		angleYList.pop()
		angleYList.push(3)
		angleXList.pop()
		angleXList.push(0)
		emoji.style.left = Math.floor(Math.random() * document.body.offsetWidth) + "px";
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
			if(parseInt(emojiList[i].style.top) > parseInt(document.body.offsetHeight) || parseInt(emojiList[i].style.left) + emojiList[i].offsetWidth > parseInt(document.body.offsetWidth)) {
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
var date = new Date();
if (date.getHours() >= 19 || date.getHours() <= 6) {
	document.body.style.backgroundColor = "#070620";
	document.body.style.color = "white";

	for(let i = 0; i < aList.length; i++) {
		aList[i].style.color = "white";
		aList[i].style.backgroundColor = "rgba(7, 22, 48, 0.8)";
	}

	for(let i = 0; i < menulines.length; i++) {
		menulines[i].style.backgroundColor = "white";
	}

	document.getElementById("socials").style.backgroundColor = "rgba(7, 22, 48, 0.8)"
	menu.style.backgroundColor = '#222222'

	
	emojis.splice(emojis.indexOf("sun.png"), 1);
	console.log(emojis)
	emojis.push("moon.png");
}
if(date.getMonth() == 9) {
	emojis.push("pumpkin.png")
}
if(date.getMonth() == 10 || date.getMonth() == 8) {
	emojis.push("fall.png")
}

if(date.getMonth() >= 5 && date.getMonth() <= 7) {
	emojis.push("sun.png")
}
if(date.getMonth() == 11 || date.getMonth() == 0) {
	emojis.push("snowflake.png")
}
if(date.getMonth() == 1) {
	emojis.push("heart.png")
	emojis.push("heart2.png")
}
if(date.getMonth() == 1 && date.getDate() == 29) {
	emojis.push("leapday.png")
}
if(date.getMonth() == 3 && date.getDate() >= 13 && date.getDate() <= 21) {
	emojis.push("cherryblossom.png")
} else if(date.getMonth() == 3) {
	emojis.push("raindrop.png")
}
if(date.getMonth() == 4) {
	emojis.push("flower.png")
}
if(date.getMonth() == 2) {
	emojis.push("threeleaf.png");
	emojis.push("threeleaf.png");
	emojis.push("threeleaf.png");
	emojis.push("fourleaf.png");

}
if(date.getMonth() == 0 && date.getDate() == 1) {
	emojis.push("newyear.png")
}
if(date.getMonth() == 11 && date.getDate() == 25) {
	emojis.push("christmas.png")
	emojis.push("present.png")
}