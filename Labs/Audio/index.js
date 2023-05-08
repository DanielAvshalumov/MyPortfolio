const trapAudio = document.getElementById("trap");
const drumAudio = document.getElementById("drum");
const shortGuitar = document.getElementById("short");
const longGuitar = document.getElementById("long");
const stringAudio = document.getElementById("string");

const handleTrap = document.getElementById("trapHandler");
const handleDrum = document.getElementById("drumHandler");
const handleShort = document.getElementById("shortHandler");
const handleLong = document.getElementById("longHandler");
const handleString = document.getElementById("stringHandler");


console.log(longGuitar);
handleTrap.onclick = () => {
    trapAudio.play();
}
handleDrum.onclick = () => {
    drumAudio.play();
}

handleShort.onclick = () => {
    shortGuitar.play();
}

handleLong.onclick = () => {
    longGuitar.play()
}

handleString.onclick = () => {
    stringAudio.play();
}