// jQuery function 

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.nav').addClass("sticky");
        } else {
            $('.nav').removeClass("sticky");
        }
        // scroll up btn 
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");

        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // slide-up script 
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // toogle menu /navabar script 
    $('.nav__toggler').click(function() {
        $('.navbar__menu').toggleClass("active");
        // for closing menu button x
        $('.nav__toggler i').toggleClass("active");
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: ["Web-Developer", "Blogger", "Designer", "Freelancer", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // typing animation script 
    var typed = new Typed(".typing-2", {
        strings: ["Web-Developer", "Blogger", "Designer", "Freelancer", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        nav: false,
        rtl: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                // nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                // nav: true,
                loop: true
            }
        }

    });

});