let ray;
let particle;
let walls = [];


let sceneW = 1920;
let sceneH = 1080;
const da = 1/sceneW;

function setup() {
    if(document.fullscreenElement) {
        createCanvas(screen.width,screen.height);
        document.querySelector("main").style.height = screen.height + "px";
        sceneW = screen.width;
        sceneH = screen.height;
    } else {
        createCanvas(window.innerWidth,window.innerHeight);
        document.querySelector("main").style.height = window.innerHeight + "px";
        sceneW = window.innerWidth;
        sceneH = window.innerHeight;
    }
    pixelDensity(1);
    for(let i = 0; i < 5; i++) {
        let x1=random(sceneW);
        let y1=random(sceneH);
        let x2=random(sceneW);
        let y2=random(sceneH);
        walls[i] = new Boundary(x1,y1,x2,y2);
    }
    walls.push(new Boundary(0,0,sceneW,0));
    walls.push(new Boundary(sceneW,0,sceneW,sceneH));
    walls.push(new Boundary(sceneW,sceneH,0,sceneH));
    walls.push(new Boundary(0,sceneH,0,0));

    particle = new Particle(45);
}
function draw() {
    if(document.fullscreenElement) {
        console.log('hello')
        document.querySelector("main").style.height = screen.height + "px";
    } else {
        document.querySelector("main").style.height = window.innerHeight + "px";
    }
    if(keyIsDown(LEFT_ARROW)) {
        particle.rotate(-0.03);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        particle.rotate(0.03);
    }
    if (keyIsDown(UP_ARROW)) {
        particle.move(2);
    }
    if (keyIsDown(DOWN_ARROW)) {
        particle.move(-2);
    }
    background(18, 20, 34);
    const scene = particle.look(walls);
    for(let i in scene) {
        if(scene[i] < 5) {
            if (keyIsDown(UP_ARROW)) {
                particle.move(-2);
            }
            if (keyIsDown(DOWN_ARROW)) {
                particle.move(2);
            }
            break;
        }
    }
    const w = sceneW / scene.length;
    push();
    for(let i=0; i<scene.length; i++) {
        noStroke();
        const d = scene[i]/sceneW;
        let b;
        if(0.2/d + 2 > 5) {
            b = 5;
        } else {
            b = 0.2/d + 2;
        }
        const h = 30/d;
        colorMode(HSB);
        fill(0,0,0);
        rect((i+0.5)*w, sceneH + h/2,w+1,sceneH);
        colorMode(HSB);
        fill(143, 96, b);
        rectMode(CENTER);
        rect((i+0.5)*w, sceneH/2,w+1,h);
    }
    pop();
}