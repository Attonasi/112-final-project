'use strict';

$(function () {
    $('#userNameEnter').change(function () {
        console.log('field changed', );

        $('#nameDisplayField').val($(this).val());


    });
});
