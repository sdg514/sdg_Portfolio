// header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.position = "fixed";
    header.style.backgroundColor = "rgba(26, 26, 26, .9)";
  } else {
    header.style.position = "absolute";
    header.style.backgroundColor = "transparent";
  }
});

// header 모바일 햄버거 메뉴
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelectorAll('.nav-mobile ul li a');

// 햄버거 버튼 클릭 → 메뉴 열기
navToggle.addEventListener('click', () => {
  navMobile.classList.add('open');
});

// X 버튼 클릭 → 메뉴 닫기
navClose.addEventListener('click', () => {
  navMobile.classList.remove('open');
});

// li > a 클릭 → 메뉴 닫기
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
  });
});


// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    fadeEffect: { crossFade: true },
    effect: "fade",
    loop: true,
    allowTouchMove: false,
    speed: 1000,
    slidersPerView: 1,
    noSwiping: false,

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
});

// AOS
AOS.init(); 


// 위로 가기 버튼 스크롤시 나타나기
const topBtn = document.getElementById("onTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 900) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

  // console.log(scrollY);
});

// 맨위로 가기 버튼 클릭시 위로
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});