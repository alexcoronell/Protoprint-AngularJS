//************************ SLIDE / INFOPROMOCIONES *************/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

/************************* Iniciamos smoothScroll (Scroll Suave) ****************/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});

/************************* Ocultar sombra de menu ****************/
$(window).scroll(function() {

    var div = $('#menu-desktop-sombra');
    var barraMenu = $('#menu-desktop');
    var buttonMenu = $('#boton-menu-desktop');
    var menuEspecial = $('#menu-desktop-special');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        div.addClass("ocultarsombra");
        barraMenu.addClass("menudesktop-scroll");
        buttonMenu.addClass("menu-scroll-boton");
        menuEspecial.addClass("reubicarmenu");
    } else {
        div.removeClass("ocultarsombra");
        barraMenu.removeClass("menudesktop-scroll");
        buttonMenu.removeClass("menu-scroll-boton");
        menuEspecial.removeClass("reubicarmenu");
    }
});

/************************* Menu Scroll ****************/