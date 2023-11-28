/*items and sprites---------------------------------------------- */
var maps = [
    split = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,3,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4,4,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,2,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    test = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]
]

var mapList = ["Split",]

var weaponList = [
    Pistol = {
        name: "Pistol",
        mag: 15,
        originalmag: 15,
        maxmag: 150,
        originalmaxmag: 150,
        damage: 50,
        auto: false,
        color: "black",
        barrel: "hidden",
        playerSpeed: 2.5,
    },

    AK47 = {
        name: "AK47",
        mag: 30,
        originalmag: 30,
        maxmag: 300,
        originalmaxmag: 300,
        damage: 50,
        auto: true,
        color: "saddlebrown",
        barrel: "visible",
        playerSpeed: 2,
    },


]

var zombieStats = [
    weak = {
        name: "Weak",
        health: 100,
        damage: 10,
        speed: 1,
        color: "green",
    },

    miniboss = {
        name: "Juggernaut",
        health: 500,
        damage: 5,
        speed: 0.5,
        color: "darkblue",
    },

    commander = {
        name: "Commander",
        health: 0,
        damage: 0,
        speed: 0,
        color: 0,
    },

    armored = {
        name: "Armored",
        health: 200,
        damage: 5,
        speed: 0.5,
        color: "gray",
    },

    spark = {
        name: "Sparked",
        health: 50,
        damage: 0,
        speed: 2,
        color: "#c4eafc",
    },

    clown = {
        name: "Clown",
        health: 100,
        damage: 0,
        speed: 1,
        color: "lime",
    },

    thief = {
        name: "Thief",
        health: 50,
        damage: 0,
        speed: 2,
        color: "#260919",
    },
    
]

var zombieTypes = ["Weak"];

/*--------------------------------------------------------------- */
/*render----------------------------------------------------------*/
const block = document.getElementById("block");
const layout = document.getElementById("layout")

var xMargin = 0;
var yMargin = 0;
var scale = 100;
var currentMap;
var divnumber = 1;
var divList = [];

var classes = ["wall", "mystery", "jugger", "magex", "pack"]

document.getElementById("container").appendChild(layout);

function createBlocks() {
    for(let i=0; i<200; i++) {
        var object = document.createElement("div");
        object.id = "tile" + divnumber;
        divnumber++;
        layout.appendChild(object);
        divList.push(object);
        object.style.display = "none";
    }
    divnumber = 1;
}
createBlocks();
function render(map) {
    resetDivs();
    divnumber = 1;
    currentMap = map;
    layout.style.height = (currentMap.length * scale) + "px";
    layout.style.width = (currentMap[0].length * scale) + "px";
    for(let i=0; i<currentMap.length; i++) {
        xMargin = 0;
        for(let x=0; x<currentMap[i].length; x++) {
            if(currentMap[i][x] === 0) {
                xMargin = xMargin + scale;
            } else if(currentMap[i][x] === 1) {
                setDiv(0, "black")
            } else if(currentMap[i][x] === 2) {
                setDiv(1, "tan")
            } else if(currentMap[i][x] === 3) {
                setDiv(2, "maroon")
            } else if(currentMap[i][x] === 4) {
                setDiv(3, "saddlebrown")
            } else if(currentMap[i][x] === 5) {
                setDiv(4, "cyan")
            }
            
            function setDiv(number, color) {
                divList[divnumber-1].style.display = "block";
                divList[divnumber-1].classList.add(classes[number]);
                divList[divnumber-1].style.backgroundColor = color;
                divList[divnumber-1].style.marginTop = yMargin + "px";
                divList[divnumber-1].style.marginLeft = xMargin + "px";
                xMargin = xMargin + scale;
                divnumber++;
            }
        }
        yMargin = yMargin + scale;
    }
}
function resetDivs() {
    for(let i=0; i<divList.length; i++) {
        divList[divnumber-1].style.display = "none";
        divnumber++;
    }
    divnumber = 1;
}
/*---------------------------------------------------------------*/

/*zombies------------------*/
var zombie;
var zombieMarginLeft = 0;
var zombieMarginTop = 0;
var layoutClient;
var zombieClient;
var path = [];
var open;
var start;
var zombieList = [];
var zombMLList = [];
var zombMTList = [];
var speedXList = [];
var speedYList = [];
var dir;
var dirList = [];
var wallTopList = [];
var wallLeftList = [];
var wallRightList = [];
var wallBottomList = [];
var navTopList = [];
var navLeftList = [];
var navRightList = [];
var navBottomList = [];
var moveTopList = [];
var moveLeftList = [];
var moveRightList = [];
var moveBottomList = [];
var touchingList = [];
var activateList = [];
var wait2;
var wallTouchingList = [];
var tempClient;
var tempList = [];
var seperatewait;
var seperatewaitList = [];
var seperatewait;
var activate2 = false;
var stageList = [];
var randomNameList = [];
var tempI;
var distanceXList = [];
var distanceYList = [];
var bulletClient;
var waitAgain;
var k = 0;
var mouseXPos;
var mouseYPos;
var bulletCooldown = false;
var bulletTimeout;
var onlyonce = false;
var c = 0;
var speedXContainer = [];
var speedYContainer = [];
var posXContainer = [];
var posYContainer = [];
var wallClient;
var isTouching = false;
var zombieHealthList = [];
var zombieHitList = [];
var zombieSpeedList = [];
var zombieDamageList = [];
var wait2List = []
var zombieTypeList = []

var zombiePicker;
var canCommanderSpawn = true;
var canJuggerSpawn = true;
var juggerAmount = 0;

function spawnZombies() {
    zombiePicker = Math.floor(Math.random() * zombieTypes.length) + 0;
    zombie = document.createElement("div");
    zombie.classList.add("zombie");
    layout.appendChild(zombie);
    zombie.style.backgroundColor = zombieStats[zombiePicker].color;
    p = Math.floor(Math.random() * 4) + 1;

    if(zombieStats[zombiePicker].name == "Commander" && canCommanderSpawn == true) {
        commanderAmount++;
        zombie.style.display = "none";
        if(commanderAmount == 3) {
            canCommanderSpawn = false;
        }
    } else if(zombieStats[zombiePicker].name == "Juggernaut" && canJuggerSpawn == true) {
        juggerAmount++;
        zombieTypes.splice(zombieTypes.indexOf("Juggernaut"), 1);
        if(juggerAmount == 1) {
            canJuggerSpawn = false;
        }
    }

    layoutClient = layout.getBoundingClientRect();

    if(currentMap == split) {
        p = Math.floor(Math.random() * 2) + 1;
        if(p == 1) { // top side
            zombieMarginLeft = Math.floor(Math.random() * ((layoutClient.width) - (layoutClient.width * 0.3))) + (layoutClient.width * 0.3); 
            zombieMarginTop = 200; 
        } else if(p == 2) { // down side
            zombieMarginLeft = Math.floor(Math.random() * ((layoutClient.width) - (layoutClient.width * 0.3))) + (layoutClient.width * 0.3); 
            zombieMarginTop = layoutClient.height - 200;
        }   
    } else {
        if(p == 1) { // top side
            zombieMarginLeft = Math.floor(Math.random() * layoutClient.left * -1) + 0; 
            zombieMarginTop = 200; 
        } else if(p == 2) { // left side
            zombieMarginLeft = 200; 
            zombieMarginTop = Math.floor(Math.random() * layoutClient.top * -1) + 0; 
        } else if(p == 3) { // right side
            zombieMarginLeft = layoutClient.width - 200; 
            zombieMarginTop = Math.floor(Math.random() * layoutClient.height) + 0; 
        } else if(p == 4) { // down side
            zombieMarginLeft = Math.floor(Math.random() * layoutClient.width) + 0;
            zombieMarginTop = layoutClient.height - 200; 
        }   
    }

    zombie.style.marginTop = zombieMarginTop + "px";
    zombie.style.marginLeft = zombieMarginLeft + "px";
    // bulletContainer.push(bullet);
    // k++;

    zombieList.push(zombie);

    zombMLList.push(zombieMarginLeft);
    zombMTList.push(zombieMarginTop);

    speedXList.push(0);
    speedYList.push(0);

    activateList.push(false);

    dirList.push(0);

    wallTopList.push(false);
    wallLeftList.push(false);
    wallRightList.push(false);
    wallBottomList.push(false);

    navTopList.push(false);
    navLeftList.push(false);
    navRightList.push(false);
    navBottomList.push(false);

    moveTopList.push(false);
    moveLeftList.push(false);
    moveRightList.push(false);
    moveBottomList.push(false);

    touchingList.push(false);

    wallTouchingList.push(false);

    seperatewaitList.push(false);

    stageList.push(0)

    distanceXList.push(undefined);
    distanceYList.push(undefined);

    tempList.push(undefined);

    zombieHealthList.push(zombieStats[zombiePicker].health);

    zombieHitList.push(false);

    zombieSpeedList.push(zombieStats[zombiePicker].speed);

    zombieDamageList.push(zombieStats[zombiePicker].damage);

    wait2List.push(undefined);

    zombieTypeList.push(zombieStats[zombiePicker].name);
}

function moveAI(i) {
    zombMTList[i] = zombMTList[i] + speedYList[i];
    zombMLList[i] = zombMLList[i] + speedXList[i];
    zombieList[i].style.marginTop = zombMTList[i] + "px";
    zombieList[i].style.marginLeft = zombMLList[i] + "px";
}

var zombieInterval;
function zombieAI() {
    playerClient = block.getBoundingClientRect();
    layoutClient = layout.getBoundingClientRect();
    for(let i=0; i<zombieList.length; i++) {
        zombieClient = zombieList[i].getBoundingClientRect();

        function makePath(i) {
            moveTopList[i] = false;
            moveLeftList[i] = false;
            moveRightList[i] = false;
            moveBottomList[i] = false;

            distanceXList[i] = (layoutClient.left * -1 + containerClient.width / 2) - playerClient.width / 2 - zombMLList[i];
            distanceYList[i] = (layoutClient.top * -1 + containerClient.height / 2) - playerClient.height / 2 - zombMTList[i];

            if(distanceXList[i] <= 0 && distanceYList[i] <= 0) { //top left quadrant
                dirList[i] = 1;
                moveTopList[i] = true;
                moveLeftList[i] = true;
                if(distanceXList[i] * -1 > distanceYList[i] * -1) {
                    speedXList[i] = zombieSpeedList[i] * -1;
                    speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * -1);
                } else {
                    speedYList[i] = zombieSpeedList[i] * -1;
                    speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * -1);
                }
            } else if(distanceXList[i] >= 0 && distanceYList[i] <= 0) { //top right quadrant
                dirList[i] = 2;
                moveTopList[i] = true;
                moveRightList[i] = true;
                if(distanceXList[i] > distanceYList[i] * -1) {
                    speedXList[i] = zombieSpeedList[i];
                    speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * 1);
                } else {
                    speedYList[i] = zombieSpeedList[i] * -1;
                    speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * -1);
                }
            } else if(distanceXList[i] <= 0 && distanceYList[i] >= 0) { //bottom left quadrant
                dirList[i] = 3;
                moveBottomList[i] = true;
                moveLeftList[i] = true;
                if(distanceXList[i] * -1 > distanceYList[i]) {
                    speedXList[i] = zombieSpeedList[i] * -1;
                    speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * -1);
                } else {
                    speedYList[i] = zombieSpeedList[i];
                    speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * 1);
                }
            } else if(distanceXList[i] >= 0 && distanceYList[i] >= 0) { //bottom right quadrant
                dirList[i] = 4;
                moveBottomList[i] = true;
                moveRightList[i] = true;
                if(distanceXList[i] > distanceYList[i]) {
                    speedXList[i] = zombieSpeedList[i];
                    speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * 1);
                } else {
                    speedYList[i] = zombieSpeedList[i];
                    speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * 1);
                }
            }
        }

        wallTopList[i] = false;
        wallLeftList[i] = false;
        wallRightList[i] = false;
        wallBottomList[i] = false;

        for(let l=0; l<tiles.length; l++) {
            wallClient = tiles[l].getBoundingClientRect();
            playerClient = block.getBoundingClientRect();
            if(zombieClient.top + zombieClient.height == wallClient.top && zombieClient.left + zombieClient.width > wallClient.left && zombieClient.right - zombieClient.width < wallClient.right && moveBottomList[i] == true) {
                wallBottomList[i] = true;
                wallTouchingList[i] = tiles[l];
            }else if(zombieClient.left + zombieClient.width == wallClient.left && zombieClient.top + zombieClient.height > wallClient.top && zombieClient.bottom - zombieClient.height < wallClient.bottom && moveRightList[i] == true) {
                wallRightList[i] = true;
                wallTouchingList[i] = tiles[l];
            }else if(zombieClient.right - zombieClient.width == wallClient.right && zombieClient.top + zombieClient.height > wallClient.top && zombieClient.bottom - zombieClient.height < wallClient.bottom && moveLeftList[i]== true) {
                wallLeftList[i] = true;
                wallTouchingList[i] = tiles[l];
            }else if(zombieClient.bottom - zombieClient.height == wallClient.bottom && zombieClient.left + zombieClient.width > wallClient.left && zombieClient.right - zombieClient.width < wallClient.right && moveTopList[i] == true) {
                wallTopList[i] = true;
                wallTouchingList[i] = tiles[l];
            }
        }

        if(zombieClient.top + zombieClient.height >= playerClient.top && zombieClient.left + zombieClient.width >= playerClient.left && zombieClient.bottom - zombieClient.height <= playerClient.bottom && zombieClient.right - zombieClient.width <= playerClient.right) {
            if(zombieCooldown == false) {
                speedXList[i] = 0;
                speedYList[i] = 0;

                health.innerHTML = health.innerHTML - zombieDamageList[i];

                if(zombieTypeList[i] == "Sparked") {
                    up = true;
                    left = true;
                    right = true;
                    down = true;
                    stunned = true;
                    currentZombies--;
                    zombieList[i].style.display = "none";
                    zombieList[i].remove();
                    bank.innerHTML = Number(bank.innerHTML) + 5;

                    setTimeout(function() {
                        stunned = false;
                    }, 1000)
                } else if(zombieTypeList[i] == "Thief") {
                    zombieList[i].style.display = "none";
                    zombieList[i].remove();
                    currentZombies--;
                    bank.innerHTML = Number(bank.innerHTML) - 25;
                    newWeapon.mag = 0;
                    ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;

                    setTimeout(function() {
                        stunned = false;
                    }, 1000)
                } else if(zombieTypeList[i] == "Clown") {
                    zombieList[i].style.display = "none";
                    zombieList[i].remove();
                    currentZombies--;
                    bank.innerHTML = Number(bank.innerHTML) + 25;

                    setTimeout(function() {
                        stunned = false;
                    }, 1000)
                }
                zombieCooldown = true;
                setTimeout(function() {
                    zombieCooldown = false;
                }, 500)
                checkHealth();
            }
        } else {
            if(activateList[i] == false) {
                if(wallTopList[i] == true && moveTopList[i] == true) {
                    if(moveLeftList[i] == true) {
                        speedXList[i] = zombieSpeedList[i] * -1;
                    } else if(moveRightList[i] == true) {
                        speedXList[i] = zombieSpeedList[i];
                    }
                    speedYList[i] = 0;

                    navTopList[i] = true;
                    seperatewaitList[i] = true;
                    zombMTList[i] = parseInt(wallTouchingList[i].style.marginTop) + zombieClient.height;
                    navigate();

                } else if(wallLeftList[i] == true && moveLeftList[i] == true) {
                    if(moveBottomList[i] == true) {
                        speedYList[i] = zombieSpeedList[i];
                    } else if(moveTopList[i] == true) {
                        speedYList[i] = zombieSpeedList[i] * -1;
                    }
                    speedXList[i] = 0;

                    navLeftList[i] = true;
                    seperatewaitList[i] = true;
                    zombMLList[i] = parseInt(wallTouchingList[i].style.marginLeft) + zombieClient.width;
                    navigate();

                } else if(wallRightList[i] == true && moveRightList[i] == true) {  
                    if(moveBottomList[i] == true) {
                        speedYList[i] = zombieSpeedList[i];
                    } else if(moveTopList[i] == true) {
                        speedYList[i] = zombieSpeedList[i] * -1;
                    }
                    speedXList[i] = 0;

                    navRightList[i] = true;
                    seperatewaitList[i] = true;
                    zombMLList[i] = parseInt(wallTouchingList[i].style.marginLeft) - zombieClient.width;
                    navigate();

                } else if(wallBottomList[i] == true && moveBottomList[i] == true) {
                    if(moveLeftList[i] == true) {
                        speedXList[i] = zombieSpeedList[i] * -1;
                    } else if(moveRightList[i] == true) {
                        speedXList[i] = zombieSpeedList[i];
                    }
                    speedYList[i] = 0;

                    navBottomList[i] = true;
                    seperatewaitList[i] = true;
                    zombMTList[i] = parseInt(wallTouchingList[i].style.marginTop) - zombieClient.height;
                    navigate();
                } else {
                    makePath(i);
                }
            }
            moveAI(i);
        }

        function navigate() {
            if(activate2 == false) {
                activate2 = true;
                seperatewait = setInterval(function() {
                    if(seperatewaitList[i] == true) {
                        stageList[i] = 1;
                        if(navTopList[i] == true) {
                            navTop2(i);
                        } else if(navLeftList[i] == true) {
                            navLeft2(i);
                        } else if(navRightList[i] == true) {
                            navRight2(i);
                        } else if(navBottomList[i] == true) {
                            navBottom2(i);
                        }
                    }
                }, 1);
            }
            
            function navTop2(i) {
                activateList[i] = true;
                if(wallTopList[i] == false && stageList[i] == 1) {
                    navTopList[i] = false;
                    speedXList[i] = 0;
                    speedYList[i] = zombieSpeedList[i] * -1;
                    stageList[i] = 2;
                } else if(wallLeftList[i] == false || wallRightList[i] == false && stageList[i] == 2) {
                    activateList[i] = false;
                    seperatewaitList[i] = false;
                }
            }
            function navLeft2(i) {
                activateList[i] = true;
                if(wallLeftList[i] == false && stageList[i] == 1) {
                    navLeftList[i] = false;
                    speedXList[i] = zombieSpeedList[i];
                    speedYList[i] = 0;
                    stageList[i] = 2;
                } else if(wallTopList[i] == false || wallBottomList[i] == false && stageList[i] == 2) {
                    activateList[i] = false;
                    seperatewaitList[i] = false;
                }
            }
            function navRight2(i) {
                activateList[i] = true;
                if(wallRightList[i] == false && stageList[i] == 1) {
                    navRightList[i] = false;
                    speedXList[i] = zombieSpeedList[i] * -1;
                    speedYList[i] = 0;
                    stageList[i] = 2;
                } else if(wallTopList[i] == false || wallBottomList[i] == false && stageList[i] == 2) {
                    activateList[i] = false;
                    seperatewaitList[i] = false;
                }
            }
            function navBottom2(i) {
                activateList[i] = true;
                if(wallBottomList[i] == false && stageList[i] == 1) {
                    navBottomList[i] = false;
                    speedXList[i] = 0;
                    speedYList[i] = zombieSpeedList[i];
                    stageList[i] = 2;
                } else if(wallLeftList[i] == false && stageList[i] == 2 || wallRightList[i] == false && stageList[i] == 2) {
                    activateList[i] = false;
                    seperatewaitList[i] = false;
                }
            }
        }

        if(zombieClient.top <= 0 || zombieClient.left <= 0 || zombieClient.right >= layoutClient.width || zombieClient.bottom >= layoutClient.height) {
            navTopList[i] = false;
            navLeftList[i] = false;
            navRightList[i] = false;
            navBottomList[i] = false;
            makePath(i);
        }
    }
}
/*-------------------------*/

/*moving-----------------------------------------------------------*/
var wait;
var keydown;
var layoutXPos = 0;
var layoutYPos = 0;
var stunned = false;
var canMove = false;

function move(e) {
    checkObstacle();
    if(e.key == "w" && down != true || e.key == "ArrowUp" && down != true) {
        layoutYPos += newWeapon.playerSpeed;
    }
    if(e.key == "s" && up != true || e.key == "ArrowDown" && up != true ) {
        layoutYPos -= newWeapon.playerSpeed;
    }
    if(e.key == "a" && right != true || e.key == "ArrowLeft" && right != true) {
        layoutXPos += newWeapon.playerSpeed;
    }
    if(e.key == "d" && left != true || e.key == "ArrowRight" && left != true) {
        layoutXPos -= newWeapon.playerSpeed;
    }
    if(e.key == "f" && prompt.style.visibility == "visible") {
        getItem(anothernumber);
    }

    layout.style.marginLeft = layoutXPos + "px";
    layout.style.marginTop = layoutYPos + "px";

    if(stunned == false) {
        up = left = right = down = false;
    }
}

document.addEventListener('keydown', function(event) { // holding button
    if(canMove == true) {
        if(keydown) return;
        keydown = true;
    
        move(event);
        wait = setInterval(function() {
            move(event);
        }, 1);
    
        if(event.key == "r" && newWeapon.mag < newWeapon.originalmag && newWeapon.maxmag > 0 && reloadCooldown == false) {
            reloadCooldown = true;
            document.getElementById("prompttext").innerHTML = ""
            prompt.style.visibility = "visible";
            document.getElementById("progression").style.animationName = "progress";
            document.getElementById("progression").style.visibility = "visible";
            setTimeout(function() {
                prompt.style.visibility = "hidden";
                document.getElementById("progression").style.visibility = "hidden";
                document.getElementById("progression").style.animationName = "";
                reloadCooldown = false;
                newWeapon.maxmag = newWeapon.maxmag - newWeapon.originalmag;
                newWeapon.mag = newWeapon.originalmag;
                ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
            }, 4000)
        }
    }
}, false);

document.addEventListener('keyup', function() { // unholding button
    keydown = false;
    clearInterval(wait);
}, false);
/*------------------------------------------------------------------*/

/*collision-------------------------------------------------------- */
const prompt = document.getElementById("prompt");

let obstacleClient;
let playerClient;
var up, left, right, down;
var tiles;
var isUsing;
var numberUsing = 0;
var anothernumber;
var zombieCooldown = false;

function checkObstacle() {
    if(waveStarted == true) {
        for(let i=0; i<tiles.length; i++) {
            obstacleClient = tiles[i].getBoundingClientRect();
            playerClient = block.getBoundingClientRect();
    
            if(tiles[i] !== 0) {
                if(playerClient.top + parseInt(block.offsetHeight) == obstacleClient.top && playerClient.left + parseInt(block.offsetWidth) > obstacleClient.left && playerClient.right - parseInt(block.offsetWidth) < obstacleClient.right) {
                    up = true;
                    checkType(i);
                }
                if(playerClient.left + parseInt(block.offsetWidth) == obstacleClient.left && playerClient.top + parseInt(block.offsetHeight) > obstacleClient.top && playerClient.bottom - parseInt(block.offsetHeight) < obstacleClient.bottom) {
                    left = true;
                    checkType(i);
                }
                if(playerClient.right - parseInt(block.offsetWidth) == obstacleClient.right && playerClient.top + parseInt(block.offsetHeight) > obstacleClient.top && playerClient.bottom - parseInt(block.offsetHeight) < obstacleClient.bottom) {
                    right = true;
                    checkType(i);
                }
                if(playerClient.bottom - parseInt(block.offsetHeight) == obstacleClient.bottom && playerClient.left + parseInt(block.offsetWidth) > obstacleClient.left && playerClient.right - parseInt(block.offsetWidth) < obstacleClient.right) {
                    down = true;
                    checkType(i);
                }
            }
        }
    
    
        if(numberUsing == 0 && reloadCooldown == false) {
            prompt.style.visibility = "hidden";
        } else {
            prompt.style.visibility = "visible";
        }
        numberUsing = 0;
    }
}

function checkType(i) {
    if(tiles[i].className == "mystery") {
        isUsing = "mystery";
        document.getElementById("prompttext").innerHTML = "Roll a Random Weapon! - 750";
        numberUsing++;
    } else if(tiles[i].className == "jugger") {
        isUsing = "jugger";
        document.getElementById("prompttext").innerHTML = "Gain +100% Max HP - 4000";
        numberUsing++;
    } else if(tiles[i].className == "magex") {
        isUsing = "magex";
        document.getElementById("prompttext").innerHTML = "Buy Extra Magazines - 5000";
        numberUsing++;
    } else if(tiles[i].className == "pack") {
        isUsing = "pack";
        document.getElementById("prompttext").innerHTML = "Make Your Weapon Stronger - 7000";
        numberUsing++;
    }

    anothernumber = i;
}
/*----------------------------------------------------------------- */

/*numerical system------------------------------------------------- */
const bank = document.getElementById("money");
bank.innerHTML = 7000;

const health = document.getElementById("health");
var maxhealth = 100;
health.innerHTML = maxhealth;

const ammo = document.getElementById("ammo");
ammo.innerHTML = Pistol.mag + "/" + Pistol.maxmag;

function checkHealth() {
    if(health.innerHTML <= 0) {
        clearInterval(checkRoundsDone);
        clearInterval(zombieInterval)
        if(wave > 1) {
            document.getElementById("waveresult").innerHTML = "Only survived " + wave + " rounds? Your boss will hear about this.";
        } else {
            document.getElementById("waveresult").innerHTML = "Only survived " + wave + " round? Your boss will hear about this.";
        }
        document.getElementById("gameover").style.visibility = "visible";
    }
}
/*----------------------------------------------------------------- */

/*weapon mechanics------------------------------------------------- */
const result = document.getElementById("result");
const weapon = document.getElementById("weapon");
const mainpart = document.getElementById("mainpart");
const barrel = document.getElementById("barrel");

result.innerHTML = Pistol.name;
var newWeapon = Pistol;
mainpart.style.backgroundColor = newWeapon.color;
barrel.style.visibility = newWeapon.barrel;

var isUsed = false;
var newMaxAmmo;
var newAmmo;
var containerClient = document.getElementById("container").getBoundingClientRect();
var isBought;
var autofire;
var reloadCooldown = false;
var currentZombies = 0;
var isGolem = false;

var cooldown;

var bulletContainer = [];

function getItem(i) {
    if(isUsed == false) {
        if(tiles[i].className == "mystery") {
            if(bank.innerHTML >= 750) {
                bank.innerHTML = bank.innerHTML - 750;
                newWeapon = weaponList[Math.floor(Math.random() * weaponList.length) + 0];
                ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
                result.innerHTML = newWeapon.name;
                mainpart.style.backgroundColor = newWeapon.color;
                barrel.style.visibility = newWeapon.barrel;
                
                isBought = true;
            }
        } else if(tiles[i].className == "jugger") {
            if(bank.innerHTML >= 4000) {
                maxhealth = maxhealth * 2;
                health.innerHTML = maxhealth;

                bank.innerHTML = bank.innerHTML - 4000;
                isBought = true;
            }
        } else if(tiles[i].className == "magex") {
            if(bank.innerHTML >= 5000) {
                newWeapon.originalmaxmag = newWeapon.originalmaxmag * 2;
                newWeapon.maxmag = newWeapon.originalmaxmag;
                ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;

                bank.innerHTML = bank.innerHTML - 5000;
                isBought = true;
            }
        } else if(tiles[i].className == "pack") {
            if(bank.innerHTML >= 7000) {
                newWeapon.damage = newWeapon.damage * 2;
                bank.innerHTML = bank.innerHTML - 7000;
                isBought = true;
            }
        }

        if(isBought == true) {
            isUsed = true;
            document.getElementById("flash").style.backgroundColor = "lightgreen";
            isBought = false;
        } else {
            document.getElementById("flash").style.backgroundColor = "lightcoral";
        }
        setTimeout(function() {isUsed = false; document.getElementById("flash").style.backgroundColor = "transparent"}, 2000)
    }
}

function followMouse(event) {
    weapon.style.transform = "rotate(" + Math.atan2(event.clientY - containerClient.height / 2, event.clientX - containerClient.width / 2) * 180 / Math.PI + "deg)";
    weapon.style.transformOrigin = "0% 50%"
}

function shoot() {
    if(bulletCooldown != true && newWeapon.mag > 0 && reloadCooldown == false && waveStarted == true) {
            newWeapon.mag = newWeapon.mag - 1;
            ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
            var bullet = document.createElement("div");
            bullet.classList.add("bullet")
            document.getElementById("container").appendChild(bullet);
            bulletContainer.push(bullet);
            bullet.id = "bullet" + k;
            k++;
        
            bulletClient = bullet.getBoundingClientRect();
        
            distanceX = mouseXPos - containerClient.width / 2;
            distanceY = mouseYPos - containerClient.height / 2;
            
            if(distanceX <= 0 && distanceY <= 0) { //top left quadrant
                if(distanceX * -1 > distanceY * -1) {
                    speedX = -85;
                    speedY = (distanceY / distanceX) * -85
                } else {
                    speedY = -85;
                    speedX = (distanceX / distanceY) * -85
                }
            } else if(distanceX >= 0 && distanceY <= 0) { //top right quadrant
                if(distanceX > distanceY * -1) {
                    speedX = 85;
                    speedY = (distanceY / distanceX) * 85;
                } else {
                    speedY = -85;
                    speedX = (distanceX / distanceY) * -85;
                }
            } else if(distanceX <= 0 && distanceY >= 0) { //bottom left quadrant
                if(distanceX * -1 > distanceY) {
                    speedX = -85;
                    speedY = (distanceY / distanceX) * -85;
                } else {
                    speedY = 85;
                    speedX = (distanceX / distanceY) * 85;
                }
            } else if(distanceX >= 0 && distanceY >= 0) { //bottom right quadrant
                if(distanceX > distanceY) {
                    speedX = 85;
                    speedY = (distanceY / distanceX) * 85;
                } else {
                    speedY = 85;
                    speedX = (distanceX / distanceY) * 85;
                }
            }
        
            speedXContainer.push(speedX);
            speedYContainer.push(speedY);
            posXContainer.push(0);
            posYContainer.push(0);
        
            speedX = 0;
            speedY = 0;
        
            if(onlyonce == false) {
                onlyonce = true;
                waitAgain = setInterval(moveBullet, 10);
            }
        
            bulletCooldown = true;
            bulletTimeout = setTimeout(function() {bulletCooldown = false}, 200)
    }
}

function removeBullet(i) {
    speedXContainer.splice(i, 1);
    speedYContainer.splice(i, 1);
    posXContainer.splice(i, 1);
    posYContainer.splice(i, 1);
    if(bulletContainer.length > 0) {
        bulletContainer[i].remove()
    }
    bulletContainer.splice(i, 1)
}

function moveBullet() {
    if(waveStarted == true) {
        for(let l=0; l<bulletContainer.length; l++) {
            bulletClient = bulletContainer[l].getBoundingClientRect();
    
            for(let i=0; i<tiles.length; i++) {
                wallClient = tiles[i].getBoundingClientRect();
                
                if(bulletClient.top >= wallClient.top && bulletClient.left >= wallClient.left && bulletClient.right <= wallClient.right && bulletClient.bottom <= wallClient.bottom) {
                    isTouching = true;
                }
            }
    
            for(let i=0; i<zombieList.length; i++) {
                zombieClient = zombieList[i].getBoundingClientRect();
                if(bulletClient.top >= zombieClient.top && bulletClient.left >= zombieClient.left && bulletClient.right <= zombieClient.right && bulletClient.bottom <= zombieClient.bottom) {
                    isTouching = true;
    
                    zombieHealthList[i] = zombieHealthList[i] - newWeapon.damage;
    
                    if(zombieHealthList[i] <= 0) {
                        zombieList[i].style.display = "none";
                        zombieList[i].remove();
                        i--;
                        currentZombies--;
                        bank.innerHTML = Number(bank.innerHTML) + 25;
                        if(zombieTypeList[i] == "Clown") {
                            spawnZombies();
                            spawnZombies();
                        }
                    }
                }
            }
    
            if(isTouching == true || bulletClient.top < containerClient.top || bulletClient.top > containerClient.bottom || bulletClient.left < containerClient.left || bulletClient.left > containerClient.right) {
                removeBullet(l);
            } else {
                posXContainer[l] = posXContainer[l] + speedXContainer[l];
                bulletContainer[l].style.marginLeft = posXContainer[l] + "px";
        
                posYContainer[l] = posYContainer[l] + speedYContainer[l];
                bulletContainer[l].style.marginTop = posYContainer[l] + "px"
            }
            isTouching = false;
        } 
    }
}

document.addEventListener("click", shoot);

document.addEventListener("mousedown", function(event) {
    if(newWeapon.auto == true) {
        autofire = setInterval(function() {
            shoot();
        }, 100);
    } 
})

document.addEventListener("mousemove", function(event) {
    mouseXPos = event.clientX;
    mouseYPos = event.clientY;
})

document.addEventListener("mouseup", function() {
    clearInterval(autofire);
})

document.addEventListener("mousemove", followMouse);

/*----------------------------------------------------------------- */

/*start round------------------------------------------------- */
var wave = 0;
var round = 1;
var expectedRounds = 1;
var zombieAmount = 5;
var nextZombieType = 1;
var waveStarted = false;
var activate3 = false;
var activate4 = false;
var checkRoundsDone;
var allZombies = layout.getElementsByClassName("zombie")
var templength;


function startDialogue() {
    document.getElementById("flash").style.animationName = "switchmap";
    setTimeout(function() {
        if(waveStarted == true) {
            templength = allZombies.length;
            for(let i=0; i<templength; i++) {
                console.log(allZombies.length)
                console.log(allZombies[0])
                allZombies[0].remove();
            }
            for(let i=0; i<zombieList.length; i++) {
                zombieList.shift();
                zombMLList.shift();
                zombMTList.shift();
                activateList.shift();
                dirList.shift();
                wallTopList.shift();
                wallLeftList.shift();
                wallRightList.shift();
                wallBottomList.shift();
                navTopList.shift();
                navLeftList.shift();
                navRightList.shift();
                navBottomList.shift();
                moveTopList.shift();
                moveLeftList.shift();
                moveRightList.shift();
                moveBottomList.shift();
                touchingList.shift();
                wallTouchingList.shift();
                seperatewaitList.shift();
                stageList.shift();
                distanceXList.shift();
                distanceYList.shift();
                tempList.shift();
                zombieHealthList.shift();
                zombieHitList.shift();
                zombieSpeedList.shift();
                zombieDamageList.shift();
                zombieTypeList.shift();
            }

            commanderAmount = 0;
            divnumber = 1;
            xMargin = 0;
            yMargin = 0;
        }
        // render(maps[Math.floor(Math.random() * maps.length) + 0]);
        render(maps[0])
        storynumber++;
        linenumber = 0;
        oneletter();
        clearInterval(checkRoundsDone);
    }, 1500)
    setTimeout(function() {
        start()
    }, 14000)
    setTimeout(function() {
        checkRoundsDone = setInterval(function() {
            if(waveStarted == true && currentZombies == commanderAmount && activate3 == false && round >= expectedRounds && activate4 == false) {
                activate3 = true;
                health.innerHTML = Number(health.innerHTML) + 30;
                clearInterval(zombieInterval);
                canMove = false;
                startDialogue();
            } else if(waveStarted == true && currentZombies == commanderAmount && activate4 == false && round < expectedRounds && expectedRounds > 1) {
                activate4 = true;
                round++;
                currentZombies = 0;
                setTimeout(function() {
                    allZombies = layout.getElementsByClassName("zombie");
                    commanderAmount = 0;
                    for(let i=0; i<allZombies.length; i++) {
                        allZombies[i].remove();
                    }
                    for(let i=0; i<zombieList.length; i++) {
                        zombieList.shift();
                        zombMLList.shift();
                        zombMTList.shift();
                        activateList.shift();
                        dirList.shift();
                        wallTopList.shift();
                        wallLeftList.shift();
                        wallRightList.shift();
                        wallBottomList.shift();
                        navTopList.shift();
                        navLeftList.shift();
                        navRightList.shift();
                        navBottomList.shift();
                        moveTopList.shift();
                        moveLeftList.shift();
                        moveRightList.shift();
                        moveBottomList.shift();
                        touchingList.shift();
                        wallTouchingList.shift();
                        seperatewaitList.shift();
                        stageList.shift();
                        distanceXList.shift();
                        distanceYList.shift();
                        tempList.shift();
                        zombieHealthList.shift();
                        zombieHitList.shift();
                        zombieTypeList.shift();
                        zombieSpeedList.shift();
                        zombieDamageList.shift();
                    }
        
                    for(let i=0; i<zombieAmount; i++) {
                        spawnZombies();
                        currentZombies++;
                    }
                    activate4 = false;
                }, 2000)
            }
        }, 100)
        document.getElementById("flash").style.animationName = "";
        document.getElementById("flash").innerHTML = "";
        clearInterval(textInterval);
        launchInterval = setInterval(function() {
            if(commanderAmount > 0) {
                setMissile();
            } else {
                time = 3;
            }
        }, 5000)
    }, 15000)
}

function start() {
    canMove = true;
    clearInterval(launchInterval);
    clearInterval(missileInterval)
    canCommanderSpawn = true;
    canJuggerSpawn = true;
    currentZombies = 0;
    clearInterval(wait)
    zombieInterval = setInterval(zombieAI, 5)
    clearInterval(autofire)
    /*dont want to remove bullet */

    layoutXPos = 0;
    layoutYPos = 0;
    layout.style.marginLeft = layoutXPos + "px";
    layout.style.marginTop = layoutYPos + "px";    

    wave++;
    round = 1;
    // if(wave % 5 == 0) {
        if(nextZombieType < zombieStats.length-1) {
            zombieTypes.push(zombieStats[nextZombieType].name);
            nextZombieType++;
        }
    // }
    if(wave % 2 == 0) {
        expectedRounds += 1;
    }
    for(let i=0; i<zombieAmount; i++) {
        spawnZombies();
        currentZombies++;
    }

    waveStarted = true;
    activate3 = false;
    /*make sure this is at the bottom of everything */
    tiles = layout.querySelectorAll(".wall,.mystery,.magex,.jugger,.pack");
}
startDialogue();

/*dialogue------------------------------- */
var textInterval;
var textnumber = 0;
var linenumber = 0;
var storynumber = -1;
var linelength = 0;
var templine;
var text = "";
var waitText = false;

var storylines = [ /*------* is location, # is new type of zombie, % is weapon-------*/
    scene1 = [
        '"News Flash: A helicopter just passed over *. Get ready for an explosion in the skyline!"',
        "Wow, rude. Anyways, there will be different vending machines with supplies at each of your invasion spots.",
        "I will keep refueling all of them for you, except the thing you need the most, your weapons.",
    ],

    scene2 = [
        "The spy said that their empire will be sending more braindead zombies across the front.",
        "By the way, did you even use any of the vending machines?",
        "No? Well, I guess it was too short to do anything."
    ]
]
var randomtextLines = [
    "(You say nothing during the entire ride. Ear damage is definitely getting to you.)",
    "I may or may not have switched up the weapons you are going to get later.",
    "You are lucky I am even picking you up. I heal you every time.",
    "The government hasn't explained to us how the pack-a-punch machine upgrades weapons.",
    "Have you ever noticed that *... Actually, nevermind.",
    "Nice %, I have been using that one for 20 years.",
    "You are on thin ice, buddy.",
    "Remember to get more ammo packs by the brown machine. I'm not doing it.",
    "The spy said he would be replacing your weapons. SIKE!",
]
var newZombieLines = [
    "The spy has more information. # zombies just joined their arsenal of slaves.",
    "Great. Different zombies. # this time."
]

function setText() {
    text = ""
    textnumber = 0;
    if(wave == 0 || wave == 1) {
        for(let i=0; i<storylines[storynumber][linenumber].length; i++) {
            if(storylines[storynumber][linenumber].charAt(textnumber) == "*") {
                text = text + mapList[maps.indexOf(currentMap)];
            } else {
                text = text + storylines[storynumber][linenumber].charAt(textnumber);
            }
            textnumber++;
        }
        
    } else if((wave+1) % 5 == 0 && nextZombieType < zombieStats.length-1) {
        templine = newZombieLines[Math.floor(Math.random() * newZombieLines.length) + 0];
        for(let i=0; i<templine.length; i++) {
            if(templine.charAt(textnumber) == "#") {
                text = text + zombieStats[nextZombieType].name;
            } else {
                text = text + templine.charAt(textnumber);
            }
            textnumber++;
        }
    } else {
        templine = randomtextLines[Math.floor(Math.random() * randomtextLines.length) + 0];
        for(let i=0; i<templine.length; i++) {
            if(templine.charAt(textnumber) == "*") {
                text = text + mapList[maps.indexOf(currentMap)];
            } else if(templine.charAt(textnumber) == "%") {
                text = text + newWeapon.name;
            } else {
                text = text + templine.charAt(textnumber);
            }
            textnumber++;
        }
    }
    textnumber = 0;
}

function oneletter() {
    setText();
    textInterval = setInterval(addletter, 30); /*waits 30 milliseconds*/
    textnumber = 0;
    function addletter() {
        if(waitText == false) {
            document.getElementById("flash").innerHTML = document.getElementById("flash").innerHTML + text.charAt(textnumber);
            textnumber++;
        }

        if(wave == 0 || wave == 1) {
            if(textnumber >= text.length && waitText == false && linenumber < storylines[storynumber].length - 1) {
                waitText = true;
                textnumber = 0;
                setTimeout(function() {
                    linenumber++;
                    document.getElementById("flash").innerHTML = "";
                    setText();
                    waitText = false;
                }, 1000)
            }
        } else {
            if(textnumber >= text.length) {
                textnumber == 0;
            }
        }
    }
}

/*missiles */
const missile = document.getElementById("missile");
var missileInterval;
var missileClient = missile.getBoundingClientRect();
var commanderAmount = 0;
var time = 3;
var launchInterval;
missile.style.display = "none";
var creplacementLeft;
var creplacementTop;

function setMissile() {
    time = 3;
    missile.style.marginLeft = ((layoutClient.left * -1 + containerClient.width / 2) - playerClient.width / 2) - playerClient.width + "px";
    missile.style.marginTop = ((layoutClient.top * -1 + containerClient.height / 2) - playerClient.height / 2) - playerClient.height + "px";
    missile.style.display = "flex";
    missileInterval = setInterval(countdown, 1000);
    missile.innerHTML = time;
}

function countdown() {
    time--;
    missile.innerHTML = time;
    if(time < 1) {
        creplacementLeft = (layoutClient.left * -1 + containerClient.width / 2) - playerClient.width;
        creplacementTop = (layoutClient.top * -1 + containerClient.height / 2) - playerClient.height;
        playerClient = block.getBoundingClientRect();
        layoutClient = layout.getBoundingClientRect();
        missileClient = missile.getBoundingClientRect();
        if(creplacementTop + playerClient.height >= (parseInt(missile.style.marginTop) - playerClient.height / 2) && creplacementTop <= (parseInt(missile.style.marginTop) + missileClient.height) - playerClient.height / 2) {
            if(creplacementLeft + playerClient.width >= (parseInt(missile.style.marginLeft) - playerClient.width / 2) && creplacementLeft <= (parseInt(missile.style.marginLeft) + missileClient.width) - playerClient.width / 2) {
                health.innerHTML = health.innerHTML - (10 * commanderAmount);
                checkHealth();
            }
        }
        missile.style.display = "none";
        clearInterval(missileInterval)
    }
}