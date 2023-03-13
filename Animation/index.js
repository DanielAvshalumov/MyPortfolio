let background = new Image();
let monke = new Image();
monke.src = "./monke.png";
background.src="https://c4.wallpaperflare.com/wallpaper/232/230/447/pixel-art-landscape-sunset-16-bit-wallpaper-preview.jpg"
monke.onload = () => {
    init();
}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

function init() {
    move();
}
let frame = 0;
let frameCount = 0;
let x = 0;
function move() {
    frameCount++;
    if(frameCount < 8) {
        window.requestAnimationFrame(move);
        return;
    }
    frameCount = 0;
    const yPos = 90;
    if(x === 150) {
        animateBubble(x);
    } else {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background,0,0);
    ctx.drawImage(monke,0,yPos*frame,90,85,x+=5,300,90,85);
    }
    frame++;
    if(frame >= 3) {
        frame = 0;
    }
    window.requestAnimationFrame(move);
}
function animateBubble(xPos) {
    let idleMonke = new Image();
    idleMonke.src = "./monke-idle.png";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background,0,0);
    ctx.drawImage(idleMonke,0,0,75,77,xPos,300,75,77);
    let xFrameCount = 0;
    let xFrame = 0;
    let explosion = new Image();
    explosion.src = "./explosion.png";
    explosions();
    function explosions() {
        ctx.drawImage(explosion,0,0,98,96,0,0,98,95);
    }
}
