let background = new Image();
let monke = new Image();
monke.src = "./monke.png";
background.src="https://c4.wallpaperflare.com/wallpaper/232/230/447/pixel-art-landscape-sunset-16-bit-wallpaper-preview.jpg"
let frame = 0;
let frameCount = 0;
let x = 0;


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
init();

function init() {

    move();    

}
function move() {
    console.log(x, canvas.width);

    frameCount++;
    if(frameCount < 8) {
        window.requestAnimationFrame(move);
        return;
    }
    
    if( x === 200) {
        explode();
    } else if(x < 600){
    
    frameCount = 0;
    const yPos = 90;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background,0,0);
    ctx.drawImage(monke,0,yPos*frame,90,85,x+=5,300,90,85);
    frame++;
    if(frame >= 3) {
        frame = 0;
    }
    window.requestAnimationFrame(move);
    } else {
        x = -30
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
    let loop = 3;
    helper(loop);
    console.log("end")
        
    
    
    function helper() {
        frameCount++
        if(frameCount < 5) {
            req = window.requestAnimationFrame(helper);
            return;
        }
        frameCount = 0;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(background,0,0);
        if(index === 5 || index === 11) {
            index++
        }
        
        ctx.drawImage(scaredMonke,0,0,114,92,150,300,114,92);
        ctx.drawImage(explosion,0,frame[index],98,95,0,0,98,95);
        ctx.drawImage(explosion,0,frame[index],98,95,120,100,98,95);
        ctx.drawImage(explosion,0,frame[index],98,95,250,0,98,95);
        ctx.drawImage(explosion,0,frame[index],98,95,400,40,98,95);


        index++;
        if(index === 40) {
            index = 0;
            loop--;
        }
        if(loop === 0) {
            console.log("reached")
            req = window.requestAnimationFrame(helper);
            x++;
            window.cancelAnimationFrame(req);
            window.requestAnimationFrame(move);
        } else {
            req = window.requestAnimationFrame(helper);
        }

    }
}

