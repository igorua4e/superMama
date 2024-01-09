'use strict';

$(document).ready(function () {
   $('.why__slider').slick({
      slidesToShow: 3,
      centerMode: true,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               centerPadding: '10px',
            }
         }
      ]

   });
});

$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body_menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});



const readMore = document.querySelector('.theme__hidden');

document.addEventListener("click", open);

function open(event) {
   if (event.target.closest('.readmore')) {
      readMore.classList.toggle('_visib');
   }
   if (!event.target.closest('.readmore, .theme__hidden')) {
      readMore.classList.remove('_visib');
   }
}

const readMore2 = document.querySelector('.bonus__body-item-text-hidden-theme');

document.addEventListener("click", open2);

function open2(event) {
   if (event.target.closest('.bonus-readmore-theme')) {
      readMore2.classList.toggle('_visib2');
   }
   if (!event.target.closest('.bonus-readmore-theme, .bonus__body-item-text-hidden-theme')) {
      readMore2.classList.remove('_visib2');
   }
}

const readMore3 = document.querySelector('.bonus__body-item-text-hidden-life');

document.addEventListener("click", open3);

function open3(event) {
   if (event.target.closest('.bonus-readmore-life')) {
      readMore3.classList.toggle('_visib3');
   }
   if (!event.target.closest('.bonus-readmore-life, .bonus__body-item-text-hidden-life')) {
      readMore3.classList.remove('_visib3');
   }
}


const headers = document.querySelectorAll('.quest__body-item-title');
const readMore4 = document.querySelectorAll('.quest__body-item-title-button');
const textopen = document.querySelectorAll('.quest__body-item-title-text');
const changeText = document.querySelectorAll('.quest__readmore');

headers.forEach(function (item) {
   item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('opened');
   })
})


