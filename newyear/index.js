const dateElement = document.getElementById("date");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const container = document.getElementById("container");

var minutes = 0;
var hours = 0;
var seconds;
var date;
setInterval(function() {
    date = new Date()

    if(date.getHours() >= 19 || date.getHours() <= 6) {
        document.body.style.backgroundColor = "#070620";
        document.body.style.color = "white";
        container.style.backgroundColor = "#3672b6"
    }

    dateElement.innerHTML = date + " - Programmed by Max S";
    seconds = (24*60*60) - (date.getHours()*60*60) - (date.getMinutes()*60) - date.getSeconds();
    if(date.getDate() == 1 && date.getMonth() == 0) {
        hoursElement.innerHTML = "";
        minutesElement.innerHTML = "Happy New Year " + date.getFullYear() + "!";
        secondsElement.innerHTML = "";
    } else {
        if(seconds > 60) {
            minutes = Math.floor(seconds / 60);
            seconds = seconds - (Math.floor(seconds / 60) * 60);
        }
        if(minutes > 60) {
            hours = Math.floor(minutes / 60);
            minutes = minutes - (Math.floor(minutes / 60) * 60);
        }
        hoursElement.innerHTML = hours + " hours";
        minutesElement.innerHTML = minutes + " minutes";
        secondsElement.innerHTML = seconds + " seconds";
    }
},1);