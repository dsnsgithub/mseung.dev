//create map
map = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
]

const container = document.getElementById("container")
for (let y in map) {
    var newBlockContainer = document.createElement("div");
    newBlockContainer.classList.add("blockcontainer");
    for (let x in map[y]) {
        var newBlock = document.createElement("div");
        newBlock.classList.add("block");
        switch (map[y][x]) {
            case 0:
                newBlock.classList.add("dark");
                break;
            case 1:
                newBlock.classList.add("light");
                break;
        }
        newBlockContainer.appendChild(newBlock)
    }
    container.appendChild(newBlockContainer)
}


//spawn and move player
const player = document.getElementById("player");
let posX = 300;
let posY = 300;
player.style.top = posY + "px";
player.style.left = posX + "px";
function move(key) {
    switch (key) {
        case "w":
            posY -= 10;
            player.style.top = posY + "px"
            break;
        case "s":
            posY += 10;
            player.style.top = posY + "px"
            break;
        case "a":
            posX -= 10;
            player.style.left = posX + "px"
            break;
        case "d":
            posX += 10;
            player.style.left = posX + "px"
            break;
    }
}

document.addEventListener("keypress", function (event) { move(event.key) })

//track mouse
var mPosX;
var mPosY;
function trackMouse(event) {
    mPosX = event.clientX;
    mPosY = event.clientY;
    let a = mPosX - posX;
    let b = mPosY-posY;
    let c = Math.atan2(b,a)
    if(c<0) {c+= 2*Math.PI};
    player.style.transform = "rotate(" + c * 180 / Math.PI + "deg)" // inverse tangent to find angle
    findRounded(c)
}

var hitDot = document.createElement("div");
hitDot.classList.add("dot");
document.body.appendChild(hitDot)
function findRounded(angle) {
    var rX = 0;
    var rY = 0;
    var yOffset = 0;
    var xOffset = 0;

    // var aTan = -1/Math.tan(angle); // aTan is NOT arctan, instead being neg. arctan
    // var dof = 0;
    // for (let i = 0; i < 512; i += 64) {
    //     if (angle>Math.PI && i <= posY && posY <= i+64) { // point up
    //         rY = i;
    //         rX = aTan * (posY-rY) + posX
    //         yOffset = -64;
    //         xOffset = -yOffset*aTan;
    //     } else if (angle<Math.PI && i <= posY && posY <= i+64) { // point down
    //         rY = i+64;
    //         rX = aTan * (posY-rY) + posX
    //         yOffset = 64;
    //         xOffset = -yOffset*aTan;
    //     } else if (mPosY - posY == 0){
    //         rX = posX;
    //         rY = posY;
    //         dof = 8;
    //     }
    // }

    var nTan = -Math.tan(angle);
    var dof = 0;
    for (let i = 0; i < 512; i += 64) {
        if (angle>Math.PI/2 && angle<3*Math.PI/2 && i <= posX && posX <= i+64) { // point left
            rX = i;
            rY = nTan * (posX-rX) + posY
            xOffset = -64;
            yOffset = -xOffset*nTan;
        } else if (angle<Math.PI/2 || angle>3*Math.PI/2 && i <= posX && posX <= i+64) { // point right
            rX = i+64;
            rY = nTan * (posX-rX) + posY
            xOffset = 64;
            yOffset = -xOffset*nTan;
            console.log(rX,rY)
        } else if (mPosY - posX == 0){
            rX = posX;
            rY = posY;
            dof = 8;
        }
    }

    function moveHitDot(dof, x, y) {
        if(dof<8) {
            var mX = x >> 6;
            var mY = y >> 6;
            if(mX > 7) {
                mX = 7;
                x = 448;
            }
            if(mY > 7) {
                mY = 7;
                y = 448;
            }
            if(mX == 0) {
                mX = 0;
                x = 64;
            }
            if(mY == 0) {
                mY = 0;
            }
            var mP = mY*8+mX;
            if(mP<64&&map[mY][mX] == 1) {dof = 8; hitDot.style.top = Number(y) + "px"; hitDot.style.left = Number(x) + "px";}
            else {x+=xOffset; y+=yOffset; dof++; moveHitDot(dof,x,y);}; 
        }
    }
    moveHitDot(dof,rX,rY)
}

document.addEventListener("mousemove", (event) => { trackMouse(event) })