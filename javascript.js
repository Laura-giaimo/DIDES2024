// Get elements from the DOM
const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');

// Add mousemove and touchmove event based on screen size
if (window.matchMedia("(max-width: 767px)").matches) {
    wrapper.addEventListener('touchmove', splitScreenY);
} else {
    wrapper.addEventListener('mousemove', splitScreenX);
}

// Split screen function for X axis movement
function splitScreenX(e) {
    // x coordinate variable
    let x;

    // check if it's a touch event
    if (e.type === 'touchmove') {
        // use the first touch point for simplicity
        const touch = e.touches[0];
        // set x coordinate to touch position on screen
        x = touch.clientX;
    } else {
        // set x coordinate to mouse position on screen
        x = e.clientX;
    }

    // Move top layer by setting its left position to the x coordinate value we set up
    topLayer.style.width = x + 'px';
}

// Split screen function for Y axis movement
function splitScreenY(e) {
    // y coordinate variable
    let y;

    // check if it's a touch event
    if (e.type === 'touchmove') {
        // use the first touch point for simplicity
        const touch = e.touches[0];
        // set y coordinate to touch position on screen
        y = touch.clientY;
    } else {
        // set y coordinate to mouse position on screen
        y = e.clientY;
    }

    // Move top layer by setting its top position to the y coordinate value we set up
    topLayer.style.height = y + 'px';
}
