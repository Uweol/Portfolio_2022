let wheelDelta = 0; //휠이벤트 발생시 반환값 확인 변수
let browser = 0; //파이어폭스 브라우저 판별 변수 Bom

// 7개 섹션을 클래스 요소를 배열처리
// 마우스휠 아래(-120) 한 번 값 위로는 (120)
// 파이어폭스 휠(30)
// 파이어폭스 브라우저 판별 => window.navigator.userAgent
// 크롬, 익스플로러, 사파리, 오페라 등 Browser[Event-mousewheel]
// 파이어폭스 Browser [Event-DOMMouseScroll]
// 이전(prev()), 다음(next())

$('.section').each(function(index){
	$(this).on('mousewheel DOMMouseScroll', function(e){
		e.preventDefault();
		browser = window.navigator.userAgent.toLowerCase().indexOf('firefox')//브라우저 검색창에 있는 문자들을 lowercase로 변경 후, firefox가 있는지 확인
		if(browser>=0){//파이어폭스이면 (순번을 나타내줌), 파이어폭스가 없으면 (-1)
			wheelDelta = -e.detail * 40;
		}else{
			wheelDelta = e.originalEvent.wheelDelta
		}
		console.log(wheelDelta)

		if (wheelDelta < 0){
			if(index < $('.section').length -1){
				$('html, body').stop().animate({scrollTop: $(this).next().offset().top},300)
			}
		}else{
			if(index > 0){
				$('html, body').stop().animate({scrollTop: $(this).prev().offset().top},300)
			}
		}
	})

});

var icons = document.querySelectorAll('.right>.box>img');

icons.forEach(function(item){
    item.animate([
      {transform: 'scale(0.9)'}, {transform: 'scale(1)'}
   ],
   {
      duration: 1000,
      iterations: Infinity,
      direction: 'alternate'
    })
})

var icons = document.querySelectorAll('.f_left>.box>img');

icons.forEach(function(item){
    item.animate([
      {transform: 'scale(0.9)'}, {transform: 'scale(1)'}
   ],
   {
      duration: 1000,
      iterations: Infinity,
      direction: 'alternate'
    })
})

//모바일 이미지 자동 스크롤

const slides = document.querySelector('.publish_slide'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.publish_slide>li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.arrow-left'); //이전 버튼
const next = document.querySelector('.arrow-right'); //다음 버튼
const slideWidth = 1400; //한개의 슬라이드 넓이
const slideMargin = 0; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 1500 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});

// profile 그래프
$('.progress-bar').each(function(){
  let progressWrap = $(this), // progress bar 3개를 각각 가져옴
  progressBar = progressWrap.find('.bar'),
  progressText = progressWrap.find('.num'),
  progressNum = progressText.attr('data-num');

  progressBar.animate({width: progressNum + "%"}, 2000);
  // progressBar.text(70)
  //움직이려고 하는 넓이 / 전체넓이 * 100

  setInterval(textAni, 1000/10);

  $(this).each(function textAni(){
      let currentWidth = progressBar.width() / progressWrap.width() * 100;
      progressText.text(Math.ceil(currentWidth) + '%')
  });

   function textAni(){
       let currentWidth = progressBar.width() / progressWrap.width() * 100;
       progressText.text(Math.ceil(currentWidth) + '%')
   }
})