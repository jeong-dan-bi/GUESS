//돋보기 버튼 제어
const searchEl = document.querySelector('.search-icon');
const searchInputEl = searchEl.querySelector('input');

//포커스가 들어가게
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
})

//포거스가 들어가면 .focused 추가
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//포거스가 나가면 .focused 삭제
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

//모바일 swiper_slide
new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  autoplay : true,
  slidesPerView : 1,  //한번에 보여줄 슬라이드 개수
  navigation : {
      prevEl : ".slide-mo .swiper-prev",
      nextEl : ".slide-mo .swiper-next"
  },
});

  // top버튼 스크롤 이벤트
  const toTopEl = document.querySelector('#to-top');

  window.addEventListener('scroll', 
    _.throttle(function(){
        if(window.scrollY >400){
            // 상단으로 스크롤 보이기!!
            gsap.to(toTopEl, 0.2, {
                x:0,
            });
        }else{
            
            // 상단으로 스크롤 숨기기!!
            gsap.to(toTopEl, 0.2, {
                x:100,
            });
        }
    },300)
);
toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

// 신상데님팬트 swiper slide 영역
new Swiper('#slide-pc .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView : 4,  //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    navigation : {
        prevEl : "#slide-pc .swiper-prev",
        nextEl : "#slide-pc .swiper-next"
    },
  });

//더보기 버튼
  function showMore(){
    //다보기로 보여줄 요소를 변수에 저장
    const hide = document.querySelectorAll('.hide');
    
    //배열로 변경하고 4개씩 배열을 쪼개서 보이기
    const first = Array.from(hide).slice(0, 2);
    first.forEach(item => {
        item.classList.remove('hide');
    });
    if(hide.length <= 2) {
        hideMoreBtn();
    }
}
function hideMoreBtn(){
    document.getElementById('moreBtn').classList.add('hide')
}

  
//-------Scroll
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })    
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});