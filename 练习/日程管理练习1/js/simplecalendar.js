var calendar = {

    init: function() {
        var d = new Date();   /*** 得到当前日期*/   /*新建一个对象d建好对象后d就有函数date()中的所有特性*/     /*   var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(); */
        var monthNumber = d.getMonth() + 1; /*** 获取当前月份并设置到标题*/  /*在javascript中now取出的month比实际的月份小1，就好像数组的第一个元素下标是0一样，在实际使用的时候需要加上1*/

        function GetMonthName(monthNumber) {
            var months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            return months[monthNumber - 1];                              /*现在months是当前月份*/
        }

        $('.month').text(GetMonthName(monthNumber));   /***将当前月份文字设置在id为month的位置*/
        $('tbody td[date-day="' + d.getDate()+ '"] span').addClass('current-day');/*** 得到当前日期并设置当前日期*/  /*给标签为 tbody下的标签为td的列表中date-day="今天日期"  添加current-day类*/
        $('tbody td span').on('click', function(e) {  /*** 在当前日期设置活动事件*/ /*向 <td> 元素添加 click 事件处理程序*/
            // if ($(this).hasClass('event')) {   /*如果点击的<td>有event类 */
                $('tbody td span').removeClass('active');  /*清除所有<td>的active类,*/
                $(this).addClass('active');      /*并在该<td>下添加active类*/
            // } else {
            //     $('tbody td span').removeClass('active');  /*否则清除所有<td>的active类*/
            // };
        });
        $('.day-event').each(function() {       /*** * 给有事件的日期添加event类*//*也就是日期下的小点*/  /*对于id为day-event的每一个对象*/
            var eventMonth = $(this).attr('date-month');                                                 /*取出data-month属性值赋给eventMonth */
            var eventDay = $(this).attr('date-day');                                                    /*取出data-day属性值赋给eventDay */
            $('tbody tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass('event');  /*所有符合的日期添加event事件*/
        });

        $('tbody td').on('click', function(e) {    /*** 得到点击的日期并显示当前日期的event*/
            $('.day-event').slideUp('fast');    /*收起所有event*/
            var monthEvent = $(this).attr('date-month');
            var dayEvent = $(this).text();
            $('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"]').slideDown('fast'); /*显示当前event*/
        });

     /*   $('.close').on('click', function(e) {   /*** 关闭event*/
     /*       $(this).parent().slideUp('fast');
        });*/

        /**
         * Save & Remove to/from personal list
         */
    /*    $('.save').click(function() {
            if (this.checked) {
                $(this).next().text('Remove from personal list');
                var eventHtml = $(this).closest('.day-event').html();
                var eventMonth = $(this).closest('.day-event').attr('date-month');
                var eventDay = $(this).closest('.day-event').attr('date-day');
                var eventNumber = $(this).closest('.day-event').attr('data-number');
                $('.person-list').append('<div class="day" date-month="' + eventMonth + '" date-day="' + eventDay + '" data-number="' + eventNumber + '" style="display:none;">' + eventHtml + '</div>');
                $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').slideDown('fast');
                $('.day').find('.close').remove();
                $('.day').find('.save').removeClass('save').addClass('remove');
                $('.day').find('.remove').next().addClass('hidden-print');
                remove();
                sortlist();
            } else {
                $(this).next().text('Save to personal list');
                var eventMonth = $(this).closest('.day-event').attr('date-month');
                var eventDay = $(this).closest('.day-event').attr('date-day');
                var eventNumber = $(this).closest('.day-event').attr('data-number');
                $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
                setTimeout(function() {
                    $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
                }, 1500);
            }
        });   */

    /*    function remove() {
            $('.remove').click(function() {
                if (this.checked) {
                    $(this).next().text('Remove from personal list');
                    var eventMonth = $(this).closest('.day').attr('date-month');
                    var eventDay = $(this).closest('.day').attr('date-day');
                    var eventNumber = $(this).closest('.day').attr('data-number');
                    $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
                    $('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('.save').attr('checked', false);
                    $('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('span').text('Save to personal list');
                    setTimeout(function() {
                        $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
                    }, 1500);
                }
            });
        }  */
    },
};

$(document).ready(function() {
    calendar.init();

});