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
let explosionDuration = 200;
let flag = true;
function move() {
    frameCount++;
    if(frameCount < 8) {
        window.requestAnimationFrame(move);
        return;
    }
    frameCount = 0;
    const yPos = 90;
    if(x > 150 && explosionDuration > 0) {
        explode();
        explosionDuration-=5;
        console.log(x);
    } else if(explosionDuration === 0 && x > 150){
        x = 151;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(background,0,0);
        ctx.drawImage(monke,0,yPos*frame,90,85,x,300,90,85);

    } else {
        
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(background,0,0);
        ctx.drawImage(monke,0,yPos*frame,90,85,x+=5,300,90,85);
        frame++;
    if(frame >= 3) {
        frame = 0;
    }
    window.requestAnimationFrame(move);
    }
    
}

async function explode() {
    let explosion = new Image();
    let scaredMonke = new Image();
    scaredMonke.src = "./scared-monke.png";
    explosion.src = "./explosion.png";
    const jsonFetch = await fetch("./explosion.json").then(res => res.json());
    let data = jsonFetch.frames;
    let req;
    let frameCount = 0;
    let frame = data.map(item => item.frame.y);
    let index = 0;
    helper();
        
        
    
    
    function helper() {
        frameCount++
        if(frameCount < 25) {
             req = window.requestAnimationFrame(helper);
            return;
        }
        frameCount = 0;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(background,0,0);
        if(index === 5) {
            index++
            req = window.requestAnimationFrame(helper);
        }
        
        ctx.drawImage(scaredMonke,0,0,114,92,150,300,114,92);
        ctx.drawImage(explosion,0,frame[index],98,95,0,0,98,95);
        ctx.drawImage(explosion,0,frame[index],98,95,120,100,98,95);
        ctx.drawImage(explosion,0,frame[index],98,95,250,0,98,95);
        ctx.drawImage(explosion,0,frame[index],98,95,400,40,98,95);


        index++;
        if(index === 40) {
            index = 0;
        }
        if(explosionDuration === 0) {
            flag = false;
            window.cancelAnimationFrame(req);
        } else {
            req = window.requestAnimationFrame(helper);
        }

    }
}

