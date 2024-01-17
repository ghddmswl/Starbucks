// ==> 검색창
// searcEl을 클릭했을 때 검색 입력 상자 searchInputEl로 포커스를 이동시키는 기능을 구현

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchInputEl);

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

// focus
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// blur
// 검색입력상자에서 포커스가 해제될 때 플레이스홀더 텍스트를 지움
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 뱃지
const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500) {
        gsap.to(badgeEl, 0.5, {
            opacity : 0
        });
    }else {
        gsap.to(badgeEl, 0.5, {
            opacity : 1
        });
    }
}, 300));