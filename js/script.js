/********************									*********************\
					change left navbar hover li in scroll
\********************									*********************/
$(window).bind('scroll', function() {
	var bg_height = $('header').height();
	if ($(window).scrollTop() > bg_height) {
	$('header #bg_nav').addClass('hide_top_nav');
	$('.left_nav').addClass('show_left_nav');
	}
	else {
	$('header #bg_nav').removeClass('hide_top_nav');
	$('.left_nav').removeClass('show_left_nav');
	}
	var cv_height = $('.cv').height() + bg_height;
	if ($(window).scrollTop() > bg_height && $(window).scrollTop() < cv_height) {
	$('.left_nav nav ul li:nth-child(2)').addClass('bg_li');
	$('.left_nav nav ul li:nth-child(2) a:first-child').addClass('hover-first');
    $('.left_nav nav ul li:nth-child(2) a:last-child').addClass('hover-last');
	}
	else {
	$('.left_nav nav ul li:nth-child(2)').removeClass('bg_li');
	$('.left_nav nav ul li:nth-child(2) a:first-child').removeClass('hover-first');
    $('.left_nav nav ul li:nth-child(2) a:last-child').removeClass('hover-last');
	}
	var frontBack_height = $('.front_back').height() + cv_height;
	if ($(window).scrollTop() > cv_height && $(window).scrollTop() < frontBack_height) {
	$('.left_nav nav ul li:nth-child(3)').addClass('bg_li');
	$('.left_nav nav ul li:nth-child(3) a:first-child').addClass('hover-first');
    $('.left_nav nav ul li:nth-child(3) a:last-child').addClass('hover-last');
	}
	else {
	$('.left_nav nav ul li:nth-child(3)').removeClass('bg_li');
	$('.left_nav nav ul li:nth-child(3) a:first-child').removeClass('hover-first');
    $('.left_nav nav ul li:nth-child(3) a:last-child').removeClass('hover-last');
	}
	var design_height = $('.design').height() + frontBack_height;
	if ($(window).scrollTop() > frontBack_height && $(window).scrollTop() < design_height) {
	$('.left_nav nav ul li:nth-child(4)').addClass('bg_li');
	$('.left_nav nav ul li:nth-child(4) a:first-child').addClass('hover-first');
    $('.left_nav nav ul li:nth-child(4) a:last-child').addClass('hover-last');
	}
	else {
	$('.left_nav nav ul li:nth-child(4)').removeClass('bg_li');
	$('.left_nav nav ul li:nth-child(4) a:first-child').removeClass('hover-first');
    $('.left_nav nav ul li:nth-child(4) a:last-child').removeClass('hover-last');
	}
	var contact_height = $('.contact').height() + design_height;
	if ($(window).scrollTop() > design_height && $(window).scrollTop() < contact_height) {
	$('.left_nav nav ul li:nth-child(5)').addClass('bg_li');
	$('.left_nav nav ul li:nth-child(5) a:first-child').addClass('hover-first');
    $('.left_nav nav ul li:nth-child(5) a:last-child').addClass('hover-last');
	}
	else {
	$('.left_nav nav ul li:nth-child(5)').removeClass('bg_li');
	$('.left_nav nav ul li:nth-child(5) a:first-child').removeClass('hover-first');
    $('.left_nav nav ul li:nth-child(5) a:last-child').removeClass('hover-last');
	}
});
/********************									*********************\
							left navbar li hover
\********************									*********************/
$('.left_nav ul li').hover(function () {
    $("a:first-child", this).addClass('hover-first');
    $("a:last-child", this).addClass('hover-last');
}, function () {
    $("a:first-child", this).removeClass('hover-first');
    $("a:last-child", this).removeClass('hover-last');
});
/********************									*********************\
						slow scroll on click navbar
\********************									*********************/
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});
/********************									*********************\
						   cv frmationo hover
\********************									*********************/
$('section .cv_left .formation').hover(function () {
    $("section .cv_left .formation h1 , section .cv_left .formation .cv_para").addClass('hover_f');
    $("section .cv_left .formation .circle").addClass('hover_circle');
}, function () {
    $("section .cv_left .formation h1 , section .cv_left .formation .cv_para").removeClass('hover_f');
    $("section .cv_left .formation .circle").removeClass('hover_circle');
});
/********************									*********************\
						   cv competences hover
\********************									*********************/
$('section .cv_left .competences').hover(function () {
    $("section .cv_left .competences h1 , section .cv_left .competences .cv_para").addClass('hover_f');
    $("section .cv_left .competences .circle").addClass('hover_circle');
}, function () {
    $("section .cv_left .competences h1 , section .cv_left .competences .cv_para").removeClass('hover_f');
    $("section .cv_left .competences .circle").removeClass('hover_circle');
});
/********************									*********************\
						   cv loisirs hover
\********************									*********************/
$('section .cv_left .loisirs').hover(function () {
    $("section .cv_left .loisirs h1 , section .cv_left .loisirs .cv_para").addClass('hover_f');
    $("section .cv_left .loisirs .circle").addClass('hover_circle');
}, function () {
    $("section .cv_left .loisirs h1 , section .cv_left .loisirs .cv_para").removeClass('hover_f');
    $("section .cv_left .loisirs .circle").removeClass('hover_circle');
});
/********************									*********************\
						   cv experiences hover
\********************									*********************/
$('section .cv_right .experiences').hover(function () {
    $("section .cv_right .experiences h1 , section .cv_right .experiences .cv_para").addClass('hover_e');
    $("section .cv_right .experiences .circle").addClass('hover_circle');
}, function () {
    $("section .cv_right .experiences h1 , section .cv_right .experiences .cv_para").removeClass('hover_e');
    $("section .cv_right .experiences .circle").removeClass('hover_circle');
});
/********************									*********************\
						   cv objectifs hover
\********************									*********************/
$('section .cv_right .objectifs').hover(function () {
    $("section .cv_right .objectifs h1 , section .cv_right .objectifs .cv_para").addClass('hover_e');
    $("section .cv_right .objectifs .circle").addClass('hover_circle');
}, function () {
    $("section .cv_right .objectifs h1 , section .cv_right .objectifs .cv_para").removeClass('hover_e');
    $("section .cv_right .objectifs .circle").removeClass('hover_circle');
});
/********************									*********************\
						   cv langues hover
\********************									*********************/
$('section .cv_right .langues').hover(function () {
    $("section .cv_right .langues h1 , section .cv_right .langues .cv_para").addClass('hover_e');
    $("section .cv_right .langues .circle").addClass('hover_circle');
}, function () {
    $("section .cv_right .langues h1 , section .cv_right .langues .cv_para").removeClass('hover_e');
    $("section .cv_right .langues .circle").removeClass('hover_circle');
});