 //Button Hamburger
$('.hamburger').click(function(){
		$('.ham-icon').toggleClass('open');
        $('.slide-menu').toggleClass('open');
	});
$('nav a').click(function(){
		$('.ham-icon').toggleClass('open');
        $('.slide-menu').toggleClass('open');
	});

//var licznik = true;
//var ham = document.querySelector('.hamburger');
//ham.addEventListener('click', function() {
//    var slideMenu = document.querySelector('.slide-menu');
//    var hamIco = document.querySelector('.ham-icon');
//    if (licznik){
//        slideMenu.classList.add('open');
//        hamIco.classList.add('open');
//        licznik = false;
//    } else {
//        licznik = true;
//        slideMenu.classList.remove('open');
//        hamIco.classList.remove('open');
//    }
//});

// Zawijane MENU
function scrollMenu() {
    var top = document.getElementsByClassName('menu')[0];
    var ypos = window.pageYOffset;
    var width = window.innerWidth;
    if (width > 1024) {
        if(ypos > 150) {
            top.style.height = '100px';
            top.style.background = 'rgba(37, 59, 110, .9)';
        }
        else {
            top.style.height = '150px';
            top.style.background = 'none';
        }
    } else {
        top.style.height = '100px';
        top.style.background = 'rgba(37, 59, 110, .9)';
    }
    }
window.addEventListener('scroll', scrollMenu, false);

//// Zmiana aktywnych linkow
var sections = $('.navi')
, nav = $('nav')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    
  sections.each(function() {
    var top = $(this).offset().top - nav_height - 100;
        bottom = top + $(this).outerHeight();
      
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
// przeiwjarka Comandeera
$( '.scrollTo' ).on( 'click', function(e) {
    e.preventDefault();
    var href = $( this ).attr( 'href' );
    $( 'html, body' ).animate( { 
        scrollTop: $( href ).offset().top - 100 + 'px'
    }, 500, function() {
        // Dodajemy hash do adresu
        location.hash = href;
    } ); 
} );
(function() {
// Formularz
var form = document.forms.contact;
form.noValidate = true;

var userName = form.name;
var validName = document.querySelector('.invalid-name');

var userEmail = form.email;
var validEmail = document.querySelector('.invalid-email');

var userMsg = form.message;
var validMsg = document.querySelector('.invalid-msg');

function nameCheck() {
    
    if (userName.value.length < 3) {
        userName.classList.add('error');
        validName.classList.remove('hide');
        return false;
    } else {
        userName.classList.remove('error');
        validName.classList.add('hide');
        return true;
    }
}
function emailCheck() {
    
    if(!userEmail.value.match(/\S+@\S+\.\S+/)){
        userEmail.classList.add('error');
        validEmail.classList.remove('hide');
        return false;
    } else if( userEmail.value.indexOf(' ')!=-1 || userEmail.value.indexOf('..')!=-1){
        userEmail.classList.add('error');
        validEmail.classList.remove('hide');
        return false;
    } else {
        userEmail.classList.remove('error');
        validEmail.classList.add('hide');
        return true;
    }
}
function msgCheck() {
    
    if (userMsg.value.length < 10) {
        userMsg.classList.add('error');
        validMsg.classList.remove('hide');
        return false;
    } else {
        userMsg.classList.remove('error');
        validMsg.classList.add('hide');
        return true;
    }
}

form.addEventListener('submit', function(e){
    if (nameCheck() === true && emailCheck() === true && msgCheck() === true) {
        form.submit();
    } else {
        e.preventDefault();
        nameCheck();
        emailCheck();
        msgCheck();
    }
}, false);
userName.addEventListener('blur', nameCheck, false);
userEmail.addEventListener('blur', emailCheck, false);
userMsg.addEventListener('blur', msgCheck, false);
})();
