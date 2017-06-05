'use strict';

$(function () {


    //    current page variable
    var $current = `.homePage`;


    //    These are the navigation link classes. any object with these classes becomes a "link" to that page.
    $(`.homeLink`).click(function (event) {

        $($current).fadeOut('slow');
        $current = `.homePage`;
        $(`.homePage`).fadeIn('slow');
    });

    $(`.accountLink`).click(function (event) {

        $($current).fadeOut('slow');
        $current = `.accountPage`;
        $(`.accountPage`).fadeIn('slow');
    });

    $(`.profileLink`).click(function (event) {

        $($current).fadeOut('slow');
        $current = `.profilePage`;
        $(`.profilePage`).fadeIn('slow');
    });

    $(`.contactLink`).click(function (event) {

        $($current).fadeOut('slow');
        $current = `.contactPage`;
        $(`.contactPage`).fadeIn('slow');
    });

    //    End Page Class Links

    //    Toggle for the login page forms
    $('.message a').click(function () {
        $('form').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 'slow');
    });


    console.log('arg', $current);

});
