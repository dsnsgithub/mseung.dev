var sections = document.getElementsByClassName("section");
for (let i = 0; i < sections.length; i++) {
    sections[i].style.opacity = "0";
}

var revealInterval;

const introAudio = document.getElementById("introAudio");
const questionPage = document.getElementById("questionPage");
const board = document.getElementById("board");
function intro() {
    var revealNumber = 0;
    var randomReveal = 0;
    var newSections = [...sections];
    revealInterval = setInterval(function () {
        if (newSections.length == 0) {
            clearInterval(revealInterval);
            for (let i = 0; i < sections.length; i++) {
                sections[i].style.cursor = "pointer"
                sections[i].addEventListener("click", function() {
                    questionPage.style.display = "flex";
                    board.style.display = "none";

                })
            }
        }
            randomReveal = Math.floor(Math.random() * newSections.length) + 0;
            newSections[randomReveal].style.opacity = "1";
            newSections.splice(randomReveal, 1)
    }, 90)
}

var introPlayed = false;
document.addEventListener('click', function() {
    intro()
    introAudio.volume = 1;
    if(!introPlayed) {
        introAudio.play();
        introPlayed = true;
    }
})