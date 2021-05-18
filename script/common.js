const next = document.querySelector('.next');
const slider = document.querySelector('.slider-track');
let move = 0;
let timer;

function timeOut() {
  timer = setTimeout(nextSlide, 3000);
}

timeOut(); // события

next.addEventListener('click', nextSlide); // Функции

function nextSlide() {
  move -= 220;

  if (move < -1306) {
    move = 220;
  } else {
    slider.style.left = move + 'px';
  }

  clearTimeout(timer);
  timeOut();
}

const next1 = document.querySelector('.next1');
const slider1 = document.querySelector('.slider-track1'); // события

next1.addEventListener('click', nextSlide1); // Функции

function nextSlide1() {
  move -= 220;

  if (move < -1306) {
    move = 220;
  } else {
    slider1.style.left = move + 'px';
  }

  clearTimeout(timer);
  timeOut();
}

const next2 = document.querySelector('.next3');
const slider2 = document.querySelector('.slider-track3'); // события

next2.addEventListener('click', nextSlide2); // Функции

function nextSlide2() {
  move -= 220;

  if (move < -1306) {
    move = 220;
  } else {
    slider2.style.left = move + 'px';
  }

  clearTimeout(timer);
  timeOut();
}

const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.header-nav');
let body = document.querySelector('body');
burger.addEventListener('click', e => {
  nav.classList.toggle('open');
  body.classList.toggle('lock');
});
$(window).on('scroll', function () {
  let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop();

  if (editPosition > 0) {
    $('.nav').css({
      top: editPosition + 'px'
    });
  } else {
    $('.nav').css({
      top: 0
    });
  }
});
$(window).on('scroll', function () {
  let btnTop = $(window).scrollTop() - 100;

  if (btnTop >= 0) {
    $('.to-top').css({
      bottom: 0
    });
  } else {
    $('.to-top').css({
      bottom: -100 + '%'
    });
  }
});
$('.to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
}); // $('.menu').click(function(){
//         $('.menu_item').toggleClass('active'); 
// })
// $('.bar').click(function(){
//     $('.bar').style="left:0"
// })
// let burger = document.querySelector('.menu '),
// body = document.querySelector('body'),
// bar = document.querySelector('.bar');
// burger.addEventListener("click",function(e){
//  if (bar.style="left:-100%") {
//     bar.style="left:0"
//  }
//  else {
//  }console.log(e);
// })
// let move = 0;
// console.log(
//   $('.next').on('click',function() {
//   move=-300;
// })
// );
// const btn = document.querySelector('.to-top');
// let timer;
// const toTop = () => {
//     let scrolled = window.pageYOffset;
//     if (scrolled > 0) {
//         scrolled -= 50;
//         scrollTo(0, scrolled);
//         timer = setTimeout(toTop, 10);
//     }
// }
// const fadeBtn = () => {
//     if (pageYOffset > 400) {
//         btn.style.transform = 'scale(1)';
//     } else {
//         btn.style.transform = 'scale(0)';
//     }
// }