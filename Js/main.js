const respo = {
    1145: {
        items: 3
    },
    600: {
        items: 2
    },
    320: {
        items: 1
    }
}

$(document).ready(function(){

    AOS.init();

    // Owl-carousal For Product
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: respo
    });
});