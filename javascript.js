// Get elements from the DOM
const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');

// Add mousemove and touchmove event
wrapper.addEventListener('mousemove', splitScreen);
wrapper.addEventListener('touchmove', splitScreen);

// Split screen function
function splitScreen(e) {
    // x coordinate variable
    let x;

    // check if it's a touch event
    if (e.type === 'touchmove') {

        // use the first touch point for simplicity
        const touch = e.touches[0];

        // set x coordinate to touch position on screen
        x = touch.clientX;

        // And if it's a mouse event
    } else {
        // set x coordinate to mouse position on screen
        x = e.clientX;
    }

    // Move top layer by setting its left position to the x coordinate value we set up
    topLayer.style.width = x + 'px';
}

// Swipe left and right
// Nachdem die Seite vollständig geladen wurde
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('overlay').classList.add('hide');
        setTimeout(function() {
            document.getElementById('overlay').remove();
        }, 500);
    }, 1500); // 1.5Sekunden
});

