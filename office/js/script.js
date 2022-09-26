// 슬라이드이미지
$('.tit .btn').click(function(){
    $('.cont_nav').slideToggle();
    $(this).toggleClass('on');
});

var imgs=$('.slide_img> ul> li');
var playbtn=$('.gb_icon1');
var pausebtn=$('.gb_icon2');
var prevbtn=$('.gb_icon3');
var nextbtn=$('.gb_icon4');
var current=0;
var setIntervalId=null;

timer();
function timer(){  
    setIntervalId= setInterval(function(){
        var prev=imgs.eq(current);
        move(prev, 0, '-100%');
        current++;

        if(current==5){
        current=0;
        }
        var next=imgs.eq(current);
        move(next, '100%', 0);
        return false;

    },2000)
}
function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end},500)
}

var swiper = new Swiper(".book_slide>.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

var swiper = new Swiper(".banner_slide>.mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});