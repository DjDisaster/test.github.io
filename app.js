const switcher = document.querySelector('.btn');


var clicks = 0
switcher.addEventListener('click', function() {
    clicks++
    switcher.textContent = "clicks: " + clicks
});