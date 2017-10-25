var $navbar = $('#mainbody');

$navbar.waypoint(function (direction) {
    if (direction == 'down') {
        $('.navbar').addClass("navbar-pad animated-2x fadeInDown");
    }
    else {
        $('.navbar').removeClass("navbar-pad animated-2x fadeInDown");
    }
})

//$('#whowe').waypoint(function (direction) {
//    if (direction == 'down') {
//        $('.navbar').css('background', "#CCCC14").addClass('animated fadeIn');
//    }
//    else {
//        $('.navbar').css('background', "#256ca0");
//    }

//})