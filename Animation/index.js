
let img = new Image();
img.src = "./chrono.png";
img.onload = () => {
    init();
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

function init() {
    window.requestAnimationFrame(move);
}
let frame = 0;
let frameCount = 0;
function move() {
    frameCount++;
    if(frameCount < 9) {
        window.requestAnimationFrame(move);
        return;
    }
    frameCount = 0;
    const yPos = 39;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img,0,yPos*frame,85,39,0,0,85,39);
    frame++;
    if(frame >= 5) {
        frame = 0;
    }
    window.requestAnimationFrame(move);
}
