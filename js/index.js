$(document).ready(function(){
    //nav
    $('header nav.pc-menu ul li').hover(function(){
        $(this).find('.submenu').stop().fadeIn();
    },function(){
        $(this).find('.submenu').stop().fadeOut();
    });
})

// menu-toggle-btn 햄버거메뉴
$('.menu-toggle-btn, .slide-fade').on('click',function(){
    $('.menu, .slide-fade').toggleClass('ison');
});

// 아코디언메뉴
$('.menu ul li a').click(function(e){
    e.preventDefault();
    $(this).next().slideUp(),
    $(this).next().is(':visible') || $(this).next().slideDown();
});

//bx-slide
$('.bxslider').bxSlider({
    auto: true,
    pager: true,
    speed : 3000
  });

