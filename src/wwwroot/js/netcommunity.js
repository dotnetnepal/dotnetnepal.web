$(document).ready(function () {
    //skrollr
    var s = skrollr.init();

    //timer

    var $timer = $('.timer');
    $timer.countdown('2017/12/30', function (event) {
        $(this).html(
            event.strftime(
                ''
                + '<span>%w</span> w '
                + '<span>%d</span> d '
                + '<span>%H</span> h '
                + '<span>%M</span> m '
                + '<span>%S</span> s'
            )
        );
    })
})
