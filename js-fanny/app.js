$(document).foundation()
//BEGINNING OF JS FOR SCROLLING-STICKY TOP BAR
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("topBarContainer");

// Get the offset position of the navbar
var sticky = topBarContainer.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    topBarContainer.classList.add("sticky-test");
  } else {
    topBarContainer.classList.remove("sticky-test");
  }
}
//END OF JS FOR SCROLLING-STICKY TOP BAR
