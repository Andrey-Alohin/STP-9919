import Swiper from 'swiper';
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([EffectCoverflow]);
const swiperRewiews = document.querySelector('[data-swiper="reviews"]');
const swiperPagination = document.querySelector(
  '[data-swiper="reviewsPagination"]'
);

const swiper = new Swiper(swiperRewiews, {
  modules: [Pagination, Keyboard],
  effect: 'coverflow',
  keyboard: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 2,
  grabCursor: true,
  coverflowEffect: {
    slideShadows: false,
    scale: 0.8,
    rotate: 40,
    stretch: -16,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      // freeMode: true,
      coverflowEffect: {
        stretch: -24,
      },
    },
  },
  pagination: {
    el: swiperPagination,
    dynamicBullets: true,
    paginationDisabledClass: true,
    progressbarFillClass: true,
  },
});
