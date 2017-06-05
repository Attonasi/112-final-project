'use strict';

$(function () {



    var $current = `.homePage`;

    $('.row.mobileHamburgerNav').click(function () {
        $('#navMenu').fadeToggle();

    });

    $(`.homeLink`).click(function (event) {
        console.log($current, event.target);
        $($current).fadeOut('slow');
        $current = `.homePage`;
        $(`.homePage`).fadeIn('slow');
    })

    $(`.accountLink`).click(function (event) {
        console.log($current, event.target);
        $($current).fadeOut('slow');
        $current = `.accountPage`;
        $(`.accountPage`).fadeIn('slow');
    })

    $(`.profileLink`).click(function (event) {
        console.log($current, event.target);
        $($current).fadeOut('slow');
        $current = `.profilePage`;
        $(`.profilePage`).fadeIn('slow');
    })

    $(`.contactLink`).click(function (event) {
        console.log($current, event.target);
        $($current).fadeOut('slow');
        $current = `.contactPage`;
        $(`.contactPage`).fadeIn('slow');
    })


    console.log('arg', $current);

});
