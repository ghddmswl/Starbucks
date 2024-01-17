// ==> 검색창
// searchEl를 클릭했을 때 검색 입력 상자 searchInputEl로 포커스를 이동시키는 기능을 구현
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchInputEl);

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

// focus
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); // setAttribute : 지정된 요소의 속성 값을 설정
});

// blur
// 검색입력상자에서 포커스가 해제될 때 플레이스홀더 텍스트를 지움
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 뱃지
const badgeEl = document.querySelector('.badges');
const topEl = document.querySelector('#to_top');
// conssole.log(topEl);

window.addEventListener('scroll',_.throttle(function(){
    // console.log('scroll!!');
    console.log(window.scrollY); // 위치값 구하는 콘솔로그
    if(window.scrollY > 500) {
        // 배지 숨기기
        // 1. 기본설정 : badgeEl.style.display = 'none';
        // 2. gsap 오픈소스로 : gsap.to(요소, 지속시간, 옵션);
        // 3. transition
        gsap.to(badgeEl, 0.5, {
            opacity : 0,
            display:'none'
        });
        // TOP 보이기
        gsap.to(topEl, 0.2, {
            x: 0 // y: 세로
        });

    } else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, 0.5, {
            opacity : 1,
            display:'block'
        });
        // TOP 숨기기
        gsap.to(topEl, 0.2, {
            x: 100,
            
        });
    }
}, 300)); // 300 0.3초마다 기능

topEl.addEventListener('click', function(){
    //gsap로 top 버튼
    gsap.to(window, 0.7, {
        scrollTo: 0
    });
});

// 1. querySelectiorAll 배열을 만들고
const fadeEls = document.querySelectorAll('.section1 .fade-in');
//console.log(fadeEls);
// 2. forEach로 배열을 꺼내와 반복하여 실행
fadeEls.forEach(function(fadeEl,index){
    // 매개변수 : 변수 fadeEl / 가지고 올 index 번호
    // if(index == 0) { 인덱스가 0일 때 몇 초} 순
    gsap.to(fadeEl, 1, {
        delay:(index+1) * .7, // 0.7 - 1.4 - 2.1 - 2.8 ...
        opacity: 1
    });
});

// https://swiperjs.com/swiper-api#parameters
new Swiper('.inner_left .swiper', { 
    direction : 'vertical', // 수직
    autoplay : true, // 자동으로 이동
    loop : true, // 연속
    speed : 100 
});

// 객체생성
new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    autoplay: true,
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true, // 페이지 번호 선택 활성화
    },
    navigation: {
        prevEl : '.promotion .swiper-button-prev',
        nextEl : '.promotion .swiper-button-next'
    }
});

// 객체생성, 하단배너
new Swiper('.section9 .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    // pagination: {
    //     el: '.section9 .swiper-pagination', // 페이지 번호 요소 선택자
    //     clickable: true, // 페이지 번호 선택 활성화
    // },
    navigation: {
        prevEl : '.section9 .swiper-button-prev',
        nextEl : '.section9 .swiper-button-next'
    }
});

// 프로모션 창 토글 변수 
const promotionToggleEl = document.querySelector('.toggle-promotion');
// 프로모션 부분 변수
const promotionEl = document.querySelector('.promotion');
// 토글버튼으로 promotion 창이 열려있는지 닫혀있는지 확인. 
let isHidePromotion = false;

promotionToggleEl.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    console.log('isHidePromotion ' + isHidePromotion);

    if(isHidePromotion) { // true
        // show
        // 클릭 시 보여주도록 open 클래스 추가
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    } else { // false
        // hide
        // 클릭 시 숨겨지도록 open 클래스 삭제
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});

// scrollmagic cdn : 스크롤처리 오픈소스
// https://cdnjs.com/libraries/ScrollMagic
const spyEls = document.querySelectorAll('div.scroll-spy'); 
// 여러개의 spy요소들
spyEls.forEach(function(spyEl){
    // 객체생성
    // 스크롤할 때 scene 만나면 자동으로 감지, 클래스를 추가한다.
    new ScrollMagic.Scene({
        triggerElements:spyEl, // 내가 감지해야할 요소 지정
        triggerHook : .8 // 감지해야할 요소 hook 걸리면 0.8초동안 확인해서 걸리면 집어옴
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // 애니메이션 실행하기위한 옵션.
});

