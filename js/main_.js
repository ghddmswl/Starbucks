// 요소 값이 변하면 안되니까, const로 저장한다. 
// document 안의 search 클래스
const searchEl = document.querySelector('.search'); 
// searchEl 태그 안의 input 태그 
const searchInputEl = searchEl.querySelector('input');

console.log(searchEl);

console.log(searchInputEl);

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

// focus 이벤트 시작
searchInputEl.addEventListener('focus', function() {
    // 자바스크립트에서 클래스를 추가하고 싶을 때는 classList의 add를 이용하자. 
    searchEl.classList.add('focused');
    // 속성값을 변경하고 싶을 때는 setAttribute를 이용한다.  
    searchInputEl.setAttribute('placeholder','통합검색');
});

// 이벤트가 끝났을 때, (포커스 빠졌을 때,)
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// 뱃지가 일정 높이를 넘어가면 사라지도록 해보자. 
const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll',_.throttle(function(){
    // console.log('scrolling~');
    // console.log(window.scrollY);
    
    if(window.scrollY > 500) {
        // console.log(window.scrollY);
        // 뱃지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.5, {
            opacity: 0,
            display: 'none' 
        });

    } else {
        // 뱃지 나타내기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, 0.5, {
            opacity: 1,
            display: 'block' 
        });
    }

}, 300)); // 0.3초 동안 이 기능을 지속하겠다. 

const fadeEls = document.querySelectorAll('.section1 .fade-in');
// console.log(fadeEls);

fadeEls.forEach(function(fadeEl, idx){
    // object 객체 형식
    gsap.to(fadeEl, 1, {
        delay: (idx+1) * .7,
        opacity: 1
    });
});


new Swiper('.inner_left .swiper', {
    direction: 'vertical', // 세로로 스와이프
    autoplay: true, // 자동으로 넘어가게 하는 속성
    loop: true, // 반복하도록 하는 속성
    speed: 100 // 스와이프 되는 속도


});

new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드를 가운데로 위치시킨다. 
    autoplay: true,
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 페이지네이션을 클릭했을 때 이동 가능하게 한다. 
    },
    navigation: {
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'

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
        // 클릭 시 보여주도록 open 클래스 추가
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    } else { // false
        // 클릭 시 숨겨지도록 open 클래스 삭제
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});