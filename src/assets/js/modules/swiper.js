import Swiper from 'swiper';
var mySwiper = new Swiper ('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})