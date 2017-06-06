'use strict';

'use strict';

$(function () {

    $('.profileEnter').change(function () {
        console.log('field changed', );

        $('#nameEnterDisplayField').val($('#nameEnter').val());


    });
});
