var rotateAngle = 0;
const adImage = document.getElementById('whatTheFuck');

function rotate() {
    adImage.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    rotateAngle = rotateAngle + 1;
}

setInterval(rotate, 10);
