// // /*times opened--------- */
const timesOpened = document.getElementById("timesopened");
const firstOpened = document.getElementById("firstvisited");
if (localStorage.times) {
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
// // /*times opened--------- */

// // /*emoji launcher------ */
// var angleXList = [];
// var angleYList = [];
// var emojiList = document.getElementsByClassName("emoji");
// var emojis = [];
// var emojiClient;
// var moveInterval;
// var createInterval;

// function createEmoji() {
// 	var emoji = document.createElement("img");
// 	var emojiName = Math.floor(Math.random() * emojis.length) + 0
// 	emoji.src = "/pictures/floatingemojis/" + emojis[emojiName];
// 	emoji.classList.add(emojis[emojiName]);
// 	emoji.classList.add("emoji");
// 	emoji.style.position = "absolute";
// 	emoji.style.top= "-125px";
// 	emoji.style.left = "-125px";
// 	emoji.style.zIndex = "-10";
// 	emoji.style.userSelect = "none"
// 	if(Math.random() < 0.5) {
// 		angleXList.push(1);
// 		angleYList.push(Number(Math.random().toFixed(1)));
// 	} else {
// 		angleYList.push(1);
// 		angleXList.push(Number(Math.random().toFixed(1)));
// 	}
// 	if(date.getMonth() == 3 && emoji.className == "raindrop.png emoji") {
// 		angleYList.pop()
// 		angleYList.push(3)
// 		angleXList.pop()
// 		angleXList.push(0)
// 		emoji.style.left = Math.floor(Math.random() * document.body.offsetWidth) + "px";
// 	}
// 	document.body.appendChild(emoji);
// }

// document.addEventListener("DOMContentLoaded", function() {
// 	createInterval = setInterval(createEmoji, 500)
// 	moveInterval = setInterval(moveEmoji, 2)
// })

// document.addEventListener("visibilitychange", function() {
// 	if (document.visibilityState == "visible") {
// 		clearInterval(createInterval);
// 		clearInterval(moveInterval);
// 		createInterval = setInterval(createEmoji, 500)
// 		moveInterval = setInterval(moveEmoji, 2)
// 	} else {
// 		clearInterval(createInterval);
// 		clearInterval(moveInterval);
// 	}
// });

// function moveEmoji() {
// 	for(let i=0; i<emojiList.length; i++) {
// 		emojiClient = emojiList[i].getBoundingClientRect();
// 		if(parseInt(document.body.offsetWidth) <= 900) {
// 			if(parseInt(emojiList[i].style.top) > parseInt(document.body.offsetHeight) || parseInt(emojiList[i].style.left) + emojiList[i].offsetWidth > parseInt(document.body.offsetWidth)) {
// 				emojiList[i].remove();
// 				angleXList.splice(i, 1);
// 				angleYList.splice(i, 1);
// 			} else {
// 				emojiList[i].style.top = parseFloat(emojiList[i].style.top) + angleYList[i] + "px";
// 				emojiList[i].style.left = parseFloat(emojiList[i].style.left) + angleXList[i] + "px";
// 			}
// 		} else {
// 			if(parseInt(emojiList[i].style.top) > parseInt(document.body.offsetHeight) || parseInt(emojiList[i].style.left) > parseInt(document.body.offsetWidth)) {
// 				emojiList[i].remove();
// 				angleXList.splice(i, 1);
// 				angleYList.splice(i, 1);
// 			} else {
// 				emojiList[i].style.top = parseFloat(emojiList[i].style.top) + angleYList[i] + "px";
// 				emojiList[i].style.left = parseFloat(emojiList[i].style.left) + angleXList[i] + "px";
// 			}
// 		}
// 	}
// }
// /*emoji launcher------ */

// var aList = document.querySelectorAll("a");
var date = new Date();
if (date.getHours() >= 19 || date.getHours() <= 6) {
    const projects = document.getElementsByClassName("project-section");
    const languages = document.getElementsByClassName("language");
    const platforms = document.getElementsByClassName("platform");
    document.body.style.backgroundColor = "#070620";
    document.body.style.color = "white";
    document.getElementById("main-container").style.backgroundColor = "rgba(7,6,32,0.4)";
    for (let project of projects) {
        project.style.backgroundColor = "rgba(7,6,32,0.6)"
    }
    for (let language of languages) {
        language.style.backgroundColor = "rgba(7,6,32,0.6)"
    }
    for (let platform of platforms) {
        platform.style.backgroundColor = "black"
    }
    document.getElementById("season-background").style.opacity = "0.6";
    document.getElementById("about-me").style.backgroundColor = "#1b1b1b";
}
// 	for(let i = 0; i < aList.length; i++) {
// 		aList[i].style.color = "white";
// 		aList[i].style.backgroundColor = "rgba(7, 22, 48, 0.8)";
// 	}

// 	for(let i = 0; i < menulines.length; i++) {
// 		menulines[i].style.backgroundColor = "white";
// 	}

// 	document.getElementById("socials").style.backgroundColor = "rgba(7, 22, 48, 0.8)"
// 	menu.style.backgroundColor = '#222222'


// 	emojis.splice(emojis.indexOf("sun.png"), 1);
// 	console.log(emojis)
// 	emojis.push("moon.png");
// }
// if(date.getMonth() == 9) {
// 	emojis.push("pumpkin.png")
// }
// if(date.getMonth() == 10 || date.getMonth() == 8) {
// 	emojis.push("fall.png")
// }

// if(date.getMonth() >= 5 && date.getMonth() <= 7) {
// 	emojis.push("sun.png")
// }
// if(date.getMonth() == 11 || date.getMonth() == 0) {
// 	emojis.push("snowflake.png")
// }
// if(date.getMonth() == 1) {
// 	emojis.push("heart.png")
// 	emojis.push("heart2.png")
// }
// if(date.getMonth() == 1 && date.getDate() == 29) {
// 	emojis.push("leapday.png")
// }
// if(date.getMonth() == 3 && date.getDate() >= 13 && date.getDate() <= 21) {
// 	emojis.push("cherryblossom.png")
// } else if(date.getMonth() == 3) {
// 	emojis.push("raindrop.png")
// }
// if(date.getMonth() == 4) {
// 	emojis.push("flower.png")
// }
// if(date.getMonth() == 2) {
// 	emojis.push("threeleaf.png");
// 	emojis.push("threeleaf.png");
// 	emojis.push("threeleaf.png");
// 	emojis.push("fourleaf.png");

// }
// if(date.getMonth() == 0 && date.getDate() == 1) {
// 	emojis.push("newyear.png")
// }
// if(date.getMonth() == 11 && date.getDate() == 25) {
// 	emojis.push("christmas.png")
// 	emojis.push("present.png")
// }

const seasonBackground = document.getElementById("season-background");
if (date.getMonth() == 9) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/halloween.jpg)'
}
if (date.getMonth() == 8) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/autumntrees.jpg)'
}
if (date.getMonth() == 10) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/november.jpg)'
}
if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/summer.jpg)'
}
if (date.getMonth() == 11 || date.getMonth() == 0) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/winter.png)'
}
if (date.getMonth() == 1) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/february.jpg)'
}
if (date.getMonth() == 1 && date.getDate() == 29) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/leapday.jpg)'
}
if (date.getMonth() == 3) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/spring.jpg)'
}
if (date.getMonth() == 4) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/cherryblossoms.webp)'
}
if (date.getMonth() == 2) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/march.jpg)'
}
if ((date.getMonth() == 0 && date.getDate() == 1) || (date.getMonth() == 6 && date.getDate() == 4)) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/fireworks.jpg)'
}
if (date.getMonth() == 11 && date.getDate() == 25) {
    seasonBackground.style.backgroundImage = 'url(./pictures/main-site-images/christmas.jpg)'
}
// async function getLocation() {
//     if (navigator.geolocation) {
//         const getCoords = async () => {
//             const pos = await new Promise((resolve, reject) => {
//                 navigator.geolocation.getCurrentPosition(resolve, reject);
//             });

//             return {
//                 lon: pos.coords.longitude,
//                 lat: pos.coords.latitude,
//             };
//         };

//         return await getCoords()
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }

// async function fetchLocation(lat, lon) {
//     const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=c95438ae35d06a4034d5edf752024f48&units=imperial');
//     return await res.json();
// }

// const pictureFrame = document.getElementById("pictureframe");
// const loading = document.getElementById("loading")
// const weatherdesc = document.getElementById("weatherdesc");
// weatherdesc.innerHTML = "Weather Description: "
// async function changeSkyColor(data) {
//     var postQuery = [];
//     if (Math.random() <= 0.5) {
//         postQuery.push("%20aesthetic")
//     }
//     if (Math.random() <= 0.5) {
//         postQuery.push("%20nature")
//     }
//     if (Math.random() <= 0.5) {
//         postQuery.push("%20wallpaper")
//     }
//     postQuery = postQuery.join("")
//     const date = new Date();
//     const seconds = date.getTime() / 1000;
//     var timeQuery = '';
//     var weatherQuery = '';
//     if (seconds >= data.sys.sunrise && seconds <= data.sys.sunrise + 600) {
//         timeQuery = 'sunrise'
//     } else if (seconds >= data.sys.sunset && seconds <= data.sys.sunset + 600) {
//         timeQuery = 'sunset'
//     } else if (seconds >= data.sys.sunrise + 600 && seconds <= data.sys.sunset) {
//         timeQuery = 'sunny day'
//     } else if (seconds <= data.sys.sunrise || seconds >= data.sys.sunset + 600) {
//         timeQuery = 'dark night';
//     }
//     weatherQuery = data.weather[0].description;
//     weatherdesc.innerHTML = "Weather Description: " + timeQuery + ", " + weatherQuery;
//     weatherQuery = weatherQuery.split(' ').join('%20')
//     timeQuery = timeQuery.split(' ').join('%20');
//     const res = await fetch('https://cors.dsns.dev/server.mseung.dev/?query=' + timeQuery + "%20" + weatherQuery + postQuery);

//     /** @type {String[]} */
//     const imgURLS = await res.json();
//     return imgURLS
// }


// async function chooseRandomImage(imgURLS) {
//     const cutURLS = imgURLS.slice(1, imgURLS.length - 1)
//     const randomNumber = Math.floor(Math.random() * cutURLS.length)
//     const imageURL = cutURLS[randomNumber]
//     pictureFrame.style.backgroundImage = `url(${imageURL})`
//     loading.style.display = "none"
// }

// async function run() {
//     const coords = await getLocation()
//     const data = await fetchLocation(coords["lat"], coords["lon"])
//     const imgURLs = await changeSkyColor(data);
//     setInterval(async () => {
//         await chooseRandomImage(imgURLs)
//     }, 5000)
// }

// run()

// offset
const topics = document.getElementsByClassName("topic");
function mainProjectsOffset() {
    if (document.body.offsetWidth <= 970) {
        const firstMainProject = document.getElementById('about-me').getBoundingClientRect();
        const lastMainProject = document.getElementById('main-projects-container').children[document.getElementById('main-projects-container').children.length - 1].getBoundingClientRect()
        const bodyDimensions = seasonBackground.getBoundingClientRect();
        const topOffset = (bodyDimensions.height - firstMainProject.height) / 2
        const bottomOffset = (bodyDimensions.height - lastMainProject.height) / 2
        document.getElementById('main-projects-container').style.paddingBottom = bottomOffset + "px";
        for (let topic of topics) {
            topic.style.marginTop = topOffset + 'px'
        }
        document.getElementById('times').style.left = (bodyDimensions.width - document.getElementById('main-container').offsetWidth) / 2 + 'px';
        document.getElementById('times').style.top = bodyDimensions.height - parseInt(document.getElementById('times').offsetHeight) + 'px';
    } else {
        const firstMainProject = document.getElementById('main-projects-container').children[0].getBoundingClientRect();
        const lastMainProject = document.getElementById('main-projects-container').children[document.getElementById('main-projects-container').children.length - 1].getBoundingClientRect()
        const bodyDimensions = seasonBackground.getBoundingClientRect();
        const topOffset = (bodyDimensions.height - firstMainProject.height) / 2
        const bottomOffset = (bodyDimensions.height - lastMainProject.height) / 2
        document.getElementById('main-projects-container').style.paddingBottom = bottomOffset + "px";
        for (let topic of topics) {
            topic.style.marginTop = topOffset + 'px'
        }
        document.getElementById('times').style.left = (bodyDimensions.width - document.getElementById('main-container').offsetWidth) / 2 + 'px';
        document.getElementById('times').style.top = bodyDimensions.height - parseInt(document.getElementById('times').offsetHeight) + 'px';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        mainProjectsOffset()
        window.addEventListener('resize', function () { mainProjectsOffset() })
    }, 100)
});
