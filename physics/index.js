const box = document.getElementById("box");
let boxValues = box.getBoundingClientRect();

let boxMoves = false;
document.addEventListener('mousedown', function(event) {
    if(boxValues.left <= event.clientX && event.clientX <= boxValues.right && boxValues.top <= event.clientY && event.clientY <= boxValues.bottom) {
        boxMoves = true;
    }
    clearInterval(boxGravity);
});

document.addEventListener('mousemove', function(event) {
    if( boxMoves ) {
        box.style.top = event.clientY - 25 + "px";
        box.style.left = event.clientX - 25 + "px";  
        boxValues = box.getBoundingClientRect(); //update box values
    }
})
document.addEventListener('mouseup', function() {    
    boxMoves = false;
    boxGravity = setInterval(gravity, 1)
    velocity = 6;
});


let velocity = 6;
let maxVelocity = 9;
let boxGravity;
function gravity() {
    if(boxValues.bottom >= window.innerHeight) {
        clearInterval(boxGravity);
        velocity = 6;
        box.style.top = window.innerHeight - 50 + "px";
    } else {
        box.style.top = boxValues.top + velocity + "px";
        if(velocity < maxVelocity) {
            velocity+=0.1;   
        }
        boxValues = box.getBoundingClientRect();
    }
}

boxGravity = setInterval(gravity, 10)