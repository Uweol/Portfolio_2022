//menu
$('.appbarCloseBt').on('click', function(){
  $('.mobile-menu').css('left','-100%');
  $('.header-area .header-mobile-menu').css('left',0);
});
$('.appbarBt').on('click', function(){
  $('.mobile-menu').css('left',0);
  $('.header-area .header-mobile-menu').css('left','100%');
});

// 상단메뉴
let menuClick = true;
let list = $('#nav .left li')
list.find('.popdown').hide();

list.hover(function(){
    $(this).find('.popdown').show();
},function(){
    $(this).find('.popdown').hide();
})

// 상단메뉴 모바일
let menuClick1 = true;
let list_m = $('#nav .left li')
let list_s = $('.category-list .category .m_category>li')
let list_i = $('#nav .left li .m_img')
let num = 0;

list_i.hide();
list_m.find('.popdown').hide();
list_s.find('.list').hide();

list_m.hover(function(){
    $(this).find('.popdown').show();
},function(){
    $(this).find('.popdown').hide();
})

list_s.hover(function(){
    list_i.hide();
    $(this).find('.list').show();
    $(this).find('.list').css('top', -num*20)
},function(){
    $(this).find('.list').hide();
    list_i.show();
})


// 배너 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    disableOnInteraction	: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter : true,
     },
      
  });

// 이벤트 슬라이드
if (matchMedia("screen and (min-width: 640px)").matches) {
  var swiper = new Swiper("#m_event .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    loopAdditionalSlides: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else {
  var swiper = new Swiper("#m_event .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: false,
    loopAdditionalSlides: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

  //new, best
  let new_m = $('#new .new_menu');
  let new_s = $("#new .swiper")
  let m_on = new_m.find('li');
  new_s.slice(1,7).hide();
  
  m_on.click(function(e){
    e.preventDefault();
    var idx = $("#new .new_menu>li").index(this);
    m_on.removeClass('on');
    $(this).addClass('on');
    new_s.hide();
    new_s.fadeOut("fast");
    new_s.eq(idx).fadeIn("fast"); 
  })

 

  var swiper = new Swiper("#m_new .title_menu>.mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    loop: true,
    autoplay: false,
  })


  let best_m = $('#best .best_menu');
  let best_s = $("#best .swiper")
  let mb_on = best_m.find('li');
  best_s.slice(1,7).hide();
  
  mb_on.click(function(e){
    e.preventDefault();
    var idx = $("#best .best_menu>li").index(this);
    mb_on.removeClass('on');
    $(this).addClass('on');
    best_s.hide();
    best_s.fadeOut("fast");
    best_s.eq(idx).fadeIn("fast");
    Swiper(); 
  })

  // mobile new 메뉴
  let new_m_m = $('#m_new .new_menu');
  let new_m_s = $("#m_new .swiper")
  let m_m_on = new_m_m.find('li');
  new_m_s.slice(1,7).hide();
  
  m_m_on.click(function(e){
    e.preventDefault();
    var idx = $("#m_new .new_menu>li").index(this);
    m_m_on.removeClass('on');
    $(this).addClass('on');
    new_m_s.hide();
    new_m_s.fadeOut("fast");
    new_m_s.eq(idx).fadeIn("fast"); 
  })

  // mobile best 메뉴
  let best_m_m = $('#m_best .best_menu');
  let best_m_s = $("#m_best .swiper")
  let mb_m_on = best_m_m.find('li');
  best_m_s.slice(1,7).hide();
  
  mb_m_on.click(function(e){
    e.preventDefault();
    var idx = $("#m_best .best_menu>li").index(this);
    mb_m_on.removeClass('on');
    $(this).addClass('on');
    best_m_s.hide();
    best_m_s.fadeOut("fast");
    best_m_s.eq(idx).fadeIn("fast"); 
  })