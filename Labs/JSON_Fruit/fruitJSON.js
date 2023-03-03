const fruit = [
    {
        name : "Apple",
        quantity: 20,
        color: "red"
    },
    {
        name: "Orange",
        quantity: 10,
        color: "orange"
    }, 
    {
        name: "Banana",
        quantity: 15,
        color: "yellow"
    },
    {
        name: "Kiwi",
        quantity: 5,
        color: "green"
    },
    {
        name: "Blueberry",
        quantity: 5,
        color: "blue"
    },
    {
        name: "Grapes",
        quantity : 10,
        color: "purple"
    }
];

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0,0,100,100);
let y = 0;
const dy = 100
fruit.forEach(item => {
    ctx.fillStyle = item.color;
    ctx.fillRect(0,y,item.quantity*30,dy);
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.fillText(item.name + " " + item.quantity, 10, y + 50);
    y += 100;
});
