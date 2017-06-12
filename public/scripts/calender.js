'use strict';

$(function () {

    var calender = {};

    calender.monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    calender.daysInMonths = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    calender.daysOfWeekAbreviated = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    calender.daysOfWeekFull = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    calender.writeCalenderWeek = function (date) {
        var $dateTest = date.substr(8, 2);
        var selectedDay = new Date(date);
        var testDay = selectedDay.getDate();
        var testDay2 = selectedDay.getDay();
        var selectedMonth = parseInt($('#calenderMonth').val().substr(5, 2)) - 1;

        $('.instructorCalender').html('');

        $('.instructorCalender').append(`<tr class="daysRow"></tr>`);

        for (var i = 0; i < 7; i++) {
            $('.daysRow').append(`<th>${calender.daysOfWeekAbreviated[i]}</th>`)
        }

        if ($dateTest == testDay + 1) {
            var firstDayOfWeek = $dateTest - testDay2;
            $('.instructorCalender').append(`<tr class="weekNumberRow"></tr>`);

            for (var i = 0; i < 7; i++) {

                if (firstDayOfWeek <= 0) {
                    $('.weekNumberRow').append(`<td>${firstDayOfWeek+calender.daysInMonths[selectedMonth-1]}</td>`);

                }
                if (0 < firstDayOfWeek && firstDayOfWeek <= calender.daysInMonths[selectedMonth]) {
                    $('.weekNumberRow').append(`<td>${firstDayOfWeek}</td>`);

                }
                if (firstDayOfWeek > calender.daysInMonths[selectedMonth]) {
                    $('.weekNumberRow').append(`<td>${firstDayOfWeek-calender.daysInMonths[selectedMonth]}</td>`);

                }
                firstDayOfWeek += 1;
            }
        }
    }

    document.getElementById('calenderMonth').valueAsDate = new Date();
    calender.writeCalenderWeek($('#calenderMonth').val());

    $('#calenderMonth').change(function () {
        calender.writeCalenderWeek($('#calenderMonth').val());
    });
});
