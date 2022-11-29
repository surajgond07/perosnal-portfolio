// jQuery function 

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.nav').addClass("sticky");
        } else {
            $('.nav').removeClass("sticky");
        }
    })

    // toogle menu /nvabar script 
    $('.nav__toggler').click(function() {
        $('.navbar__menu').toggleClass("active");
        // for closing menu button x
        $('.nav__toggler i').toggleClass("active");
    })
});