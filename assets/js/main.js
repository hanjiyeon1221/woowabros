/* swiper */
// 메인 비주얼 슬라이드
const MainVisual = new Swiper('.sc-visual .swiper', {
    loop: true,
    pagination: {
        el: '.pagination',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// work card 슬라이드
const workCard = new Swiper('.sc-workcard .swiper', {
    pagination: {
        el: '.pagination',
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
    freeMode: true,
});

//카드 hover시 슬라이드 정지
let cards = document.querySelectorAll('.sc-workcard .card');
cards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        workCard.autoplay.stop();
    });
    card.addEventListener('mouseout', function () {
        workCard.autoplay.start();
    });
});
/* ---//swiper */

/* header */
//gnb hover
const gnbItems = document.querySelectorAll('.gnb-item');
const header = document.querySelector('.header');
const H = '--height'; //css변수
gnbItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        //item-box 유무확인
        if (this.querySelector('.item-box')) {
            header.style.setProperty(H, '64px'); //css변수 세팅
        }
    });
    item.addEventListener('mouseleave', function () {
        header.style.setProperty(H, '0');
    });
});

// 모바일 gnb
const gnbOpen = document.querySelector('.btn-header-open');
const gnbClose = document.querySelector('.btn-header-close');
const gnbM = document.querySelector('.h-main');
gnbOpen.addEventListener('click', function () {
    gnbM.classList.add('open');
    document.querySelector('body').classList.add('hidden');
});
gnbClose.addEventListener('click', function () {
    gnbM.classList.remove('open');
    document.querySelector('body').classList.remove('hidden');
});

const subnavBtn = document.querySelectorAll('.gnb-item .item-box > button');
subnavBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        parent = this.parentNode.parentNode;
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            parent.classList.add('active');
        }
    });
});

/* //header */

/* contents */
// 패밀리사이트
const selectBtn = document.querySelector('.footer-family .btn-select');
const footSelect = document.querySelector('.footer-family .select');
const SelectDrop = document.querySelector('.footer-family .btn-select .dropdown');
let ctn = 0;
selectBtn.addEventListener('click', function () {
    ctn++;
    if (ctn % 2 == 1) {
        footSelect.classList.add('active');
        SelectDrop.classList.add('active');
    } else {
        footSelect.classList.remove('active');
        SelectDrop.classList.remove('active');
    }
});

// 서비스 비디오
const videoBtn = document.querySelector('.sc-service .video-control');
const video = document.querySelector('.sc-service video');
videoBtn.addEventListener('click', function () {
    if (this.classList.contains('stop')) {
        this.classList.remove('stop');
        video.play();
        video.currentTime = 0; //비디오 재생위치
    } else {
        this.classList.add('stop');
        video.pause();
    }
});
/* ---//contents */
