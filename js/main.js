/************************* Menu Scroll ****************/
window.onscroll = function() {
    // Obtenemos la posicion del scroll en pantalla
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    var menuSombra = document.getElementById('menu-desktop-sombra');
    var barraMenu = document.getElementById('menu-desktop');
    var buttonMenu = document.getElementById('boton-menu-desktop');
    var menuEspecial = document.getElementById('menu-desktop-special');

    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    if (scroll >= 100) {
        menuSombra.classList.add('ocultarsombra');
        barraMenu.classList.add('menudesktop-scroll');
        buttonMenu.classList.add('menu-scroll-boton');
        menuEspecial.classList.add('reubicarmenu');
    } else {
        menuSombra.classList.remove('ocultarsombra');
        barraMenu.classList.remove('menudesktop-scroll');
        buttonMenu.classList.remove('menu-scroll-boton');
        menuEspecial.classList.remove('reubicarmenu');
    }
}

//************************ SLIDE / INFOPROMOCIONES *************/
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

/************************* Iniciamos smoothScroll (Scroll Suave) ****************/
// $(document).ready() {
//     smoothScroll.init({
//         speed: 1000, // Integer. How fast to complete the scroll in milliseconds
//         offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

//     });
// }




/*************************  ****************/

// function desplazaTop() {
//     window.scrollTo(0, 0);
// }