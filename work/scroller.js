//get the pages element
const pages = document.querySelector('.pages');

//set mouse boolean
let mouseDown = false;

//set mouse coordinate variables
let mouseStartX;
let mouseStartY;
let mouseEndX;
let mouseEndY;

const scrollThreshold = 80;

function startDragging(e) {
  mouseDown = true;
  mouseStartX = e.pageX - pages.offsetLeft;
  mouseStartY = e.pageY - pages.offsetTop;
};
function stopDragging(e) {
  if (!mouseDown) return;
  mouseDown = false;
  mouseEndX = e.pageX - pages.offsetLeft;
  mouseEndY = e.pageY - pages.offsetTop;

  const diffX = mouseEndX - mouseStartX;
  const diffY = mouseEndY - mouseStartY;

  //only swipe if mostly swiping left or right
  if (Math.abs(diffX) > Math.abs(diffY)) {
    //only swipe if swiping a decent amount
    console.log(diffX);
    if (diffX > scrollThreshold) {
      pages.scrollLeft = pages.scrollLeft - pages.clientWidth;
    } else if (diffX < -scrollThreshold) {
      pages.scrollLeft = pages.scrollLeft + pages.clientWidth;
    }
  } 
};

//add the event listeners for mouse
pages.addEventListener('mousedown', startDragging, false);
pages.addEventListener('mouseup', stopDragging, false);
pages.addEventListener('mouseleave', stopDragging, false);

//now we do the same for touches

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const setupSwipeListeners = (element) => {
  element.addEventListener('touchstart', handleTouchStart, false);
  element.addEventListener('touchend', handleTouchEnd, false)
};

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  touchEndY = event.changedTouches[0].clientY;

  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  //only swipe if mostly swiping left or right
  if (Math.abs(diffX) > Math.abs(diffY)) {
    //only swipe if swiping a decent amount
    if (diffX > scrollThreshold) {
      pages.scrollLeft = pages.scrollLeft - pages.clientWidth;
    } else if (diffX < -scrollThreshold) {
      pages.scrollLeft = pages.scrollLeft + pages.clientWidth;
    }
  } 
}

setupSwipeListeners(document.querySelector('.pages'))