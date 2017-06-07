'use strict';

$(function () {


    //    current page variable
    var $current = `.homePage`;

    //    complete navigation system for the SPA here

    $('.navigationLink').click(function (event) {
        $($current).fadeOut('fast');
        $(`.${event.target.id}Page`).fadeIn('slow');
        $current = `.${event.target.id}Page`;
    })

    console.log($current);

//    $('.slideWindow').click(function () {
//        
//        $('slideWindow').toggle(function () {
//
//            console.log('clicked slide button');
//
//        }, function () {
//            console.log('clicked slide button again');
//        });
//
//    });
});
