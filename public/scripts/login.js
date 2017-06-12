'use strict';

$(function () {

    $('.message a').click(function () {
        $('form').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 'slow');
    });

    $('#loginButton').click(function () {
        event.preventDefault();

        var userLoginName = $('#nameEnter').val();
        var userPasswordAttempt = $('#userPasswordAttempt').val();


//        var loginNameStringinfied = JSON.stringify(userLoginName);
//        localStorage.setItem('currentUser', loginNameStringinfied);

        console.log(userLoginName, userPasswordAttempt);
    });

    $('#createAccountButton').click(function () {
        event.preventDefault();

        var $newEmailAddress1 = $('#newEmailAddress1').val();
        var $newEmailAddress2 = $('#newEmailAddress2').val();
        var $newPassWord1 = $('#newPassWord1').val();
        var $newPassWord2 = $('#newPassWord2').val();

        console.log($newEmailAddress1, $newEmailAddress2, $newPassWord1, $newPassWord2);
    });

})
