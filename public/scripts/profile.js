'use strict';

$(function () {

    $('.profileEnter').change(function (event) {
        $(`#${event.target.id}DisplayField`).val($(`#${event.target.id}`).val());
    });

    $('#urlEnter').click(function () {
        var $newPic = $('#profileEnter').val();
        $(`#pictureEnterDisplayField`).attr('src', $newPic);
    });


    $('#bargleCollinsProfile').val('Collin Smith');
    $('#titleCollinsProfie').val('Training Instructor');
    $('#phoneCollinsProfile').val('(425)736-5063');
    $('#emailCollinsProfile').val('attonasi@hotmai.com');

    $('#goalsCollinsProfile').val('I have been active and competing in athletics for over 30 years. I have had several jobs, started several businesses, joined the Army, and am the father of two daughters. I know how hard it is to find time to stay in shape.<br> I have been able to develop training methods that allow me to maintain a high level of fitness with very limited time. I can show you how to do this too.');
});
