var hamburger = document.querySelector('.hamburger');
var hamburgerIcon = document.querySelector('.hamburger__icon');
var wrapper = document.querySelector('.wrapper');
var menuBox = document.querySelector('.header');
var slideMenu = document.querySelector('.menu-list');

hamburger.addEventListener('click', function() {
	hamburgerIcon.classList.toggle('open');
	wrapper.classList.toggle('menu-active');
  menuBox.classList.toggle('menu-active');
	slideMenu.classList.toggle('menu-active');
}, false);