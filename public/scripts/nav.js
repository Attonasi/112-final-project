'use strict';

$(function () {


    //    current page variable
    var $current = `.homePage`;

    $('.navigationLink').click(function (event) {
        $($current).fadeOut('fast');
        $(`.${event.target.id}Page`).fadeIn('slow');
        $current = `.${event.target.id}Page`;
        console.log(`.${event.target.id}Page`, $current, `.${event.target.id}`);
    })


    //    These are the navigation link classes. any object with these classes becomes a "link" to that page.
//    $(`.homeLink`).click(function (event) {
            //
            //        $($current).fadeOut('slow');
            //        $current = `.homePage`;
            //        $(`.homePage`).fadeIn('slow');
            //        console.log(event.target.className, $current);
            //    });
            //
            //    $(`.accountLink`).click(function (event) {
            //
            //        $($current).fadeOut('slow');
            //        $current = `.accountPage`;
            //        $(`.accountPage`).fadeIn('slow');
            //        console.log(event.target.className, $current);
            //    });
            //
            //    $(`.profileLink`).click(function (event) {
            //
            //        $($current).fadeOut('slow');
            //        $current = `.profilePage`;
            //        $(`.profilePage`).fadeIn('slow');
            //        console.log(event.target.className, $current);
            //    });
            //
            //    $(`.contactLink`).click(function (event) {
            //
            //        $($current).fadeOut('slow');
            //        $current = `.contactPage`;
            //        $(`.contactPage`).fadeIn('slow');
            //        console.log(event.target.className, $current);
            //    });
            //
            //    //    End Page Class Links
            //
            //    //    Toggle for the login page forms
            //    $('.message a').click(function () {
            //        $('form').animate({
            //            height: 'toggle',
            //            opacity: 'toggle'
            //        }, 'slow');
            //    });


    console.log($current);

});
