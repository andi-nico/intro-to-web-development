// This file contains the JavaScript that switches between the navbar's hamburger menu and text. This is linked to all pages
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


hamburger.addEventListener('click', function () { //An eventListener is used to call the function that toggles the hamburger on and off
  hamburger.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
