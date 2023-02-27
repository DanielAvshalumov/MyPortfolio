let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
// draws the sky and grass
ctx.fillStyle = "lightblue"
ctx.fillRect(0,0,1000,500);
ctx.fillStyle = "green";
ctx.fillRect(0,400,1000,100);
// writes the caption
ctx.fillStyle = "darkorange";
ctx.font = "30px Arial";
ctx.fillText("It's Always Sunny in Philadelphia",canvas.width/2-100,canvas.height/2-200);
// calls methods that draws what the name entails
drawSun();
drawHouse();
drawFence();
drawClouds();

function drawClouds() {
    for(let i = 0; i < canvas.width; i += 200) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.ellipse(i, 150, 50, 30, Math.PI * 0.1, 0, Math.PI*2);
        ctx.fill();
        ctx.ellipse(i-20, 150, 50, 30, Math.PI * 0.15, 0, Math.PI*.5, true);
        ctx.fill();
    }
}

function drawSun(){
    ctx.beginPath();
    ctx.arc(70,70,35,0,2*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}

function drawHouse() {
    // draws the frame of the house
    ctx.beginPath();
    ctx.moveTo(700,450);
    ctx.lineTo(700,250);
    ctx.lineTo(1000,100);
    ctx.lineTo(1000,450);
    ctx.lineTo(700,450);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.moveTo(700,250);
    ctx.lineTo(1000,250);
    ctx.strokeStyle = "black";
    //draws the door 
    ctx.moveTo(750,450);
    ctx.lineTo(750,350);
    ctx.lineTo(800,350);
    ctx.lineTo(800,450);
    ctx.lineTo(750,450);
    ctx.moveTo(790,400);
    ctx.arc(790,400,2,0,2*Math.PI);
    ctx.stroke();
    // draws the name of the house
    // draws the B
    ctx.lineWidth = 2;
    ctx.moveTo(900,300);
    ctx.arc(900,300,10,0,0.5*Math.PI);
    ctx.moveTo(900,310);
    ctx.arc(900,310,10,0,0.5*Math.PI,false);
    ctx.moveTo(900,300)
    ctx.lineTo(900,320);
    // draws the A
    ctx.moveTo(920,320);
    ctx.lineTo(910,340);
    ctx.moveTo(920,320);
    ctx.lineTo(930,340);
    ctx.moveTo(915,330);
    ctx.lineTo(925,330);
    // draws the R
    ctx.moveTo(940,350);
    ctx.arc(940,350,8,0.5*Math.PI,1.5*Math.PI,true);
    ctx.lineTo(940,370);
    ctx.moveTo(940,356);
    ctx.lineTo(949,370);
    ctx.stroke();
}

function drawFence() {
    for(let i = 0; i < 700; i += 70) {
        ctx.fillStyle = "#BCA880"
        ctx.fillRect(i,350,20,100);
        ctx.fillRect(i,390,70,20);
    }
}