(function() {
// Zawijane MENU
function scrollMenu() {
    
    var top = document.querySelector('.header__maxw');
    var ypos = window.pageYOffset;
    var width = window.innerWidth;
    
    if (width > 1024) {
        
        if(ypos > 150) {
            top.style.height = '100px';
        }
        else {
            top.style.height = '150px';
            top.style.background = 'none';
        }
        
    } else {
        top.style.height = '80px';
    }
    
}
window.addEventListener('scroll', scrollMenu, false);

//-------------------------------------------------------------------------------------------
// toggle Menu
var hamburger = document.querySelector('.hamburger__icon');
var slideMenu = document.querySelector('.header__slider--menu');

hamburger.addEventListener('click', function() {
    
    hamburger.classList.toggle('open');
    
}, false);

hamburger.addEventListener('click', function() {
    
    slideMenu.classList.toggle('open');
    
}, false);

//-----------------------------------------------------------------------------------------------
// Back to top button
var backTop = document.querySelector('.footer__back-link');
    
function animateScroll() {

    if (document.body.scrollTop > 100) {
        window.scrollBy(0, -25);
        setTimeout(animateScroll, 1);
    }
}

backTop.addEventListener('click', function(e) {

    e.stopPropagation();
    animateScroll();

}, false);
})();