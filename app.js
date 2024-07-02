const switcher = document.querySelector('.btn');
const adImage = document.getElementById('fun');
const delay = ms => new Promise(res => setTimeout(res, ms));
var current = 0
switcher.addEventListener('click', function() {
    window.location.replace("/home/djdisaster/Documents/Website/page2.html");
});


async function toggleButtonVisibility() {
    switcher.setAttribute("hidden", "");
    await delay(250);
    switcher.removeAttribute("hidden");
    switcher.style.color = getRandomRgb()
    switcher.style.backgroundColor = getRandomRgb()
}

async function handleAdvert() {
    current += 1
    if (current >= 1000) {
        current = 400
    }
    adImage.style.width = current*2 + "px"
    adImage.style.height = current + "px"
}


function my_function() {
    console.log("test");
};

setInterval(toggleButtonVisibility, 501);
setInterval(handleAdvert, 10);



function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }