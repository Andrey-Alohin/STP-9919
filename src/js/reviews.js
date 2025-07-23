import Swiper from 'swiper';
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules';

Swiper.use([EffectCoverflow]);
const swiperRewiewsRefs = {
  swiper: document.querySelector('[data-swiper="reviews"]'),
  pagination: document.querySelector('[data-swiper="reviewsPagination"]'),
};

const swiperRewiews = new Swiper(swiperRewiewsRefs.swiper, {
  modules: [Pagination, Keyboard],
  effect: 'coverflow',
  keyboard: true,
  centeredSlides: true,
  slidesPerView: 1,
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
      coverflowEffect: {
        stretch: -24,
      },
    },
  },
  pagination: {
    el: swiperRewiewsRefs.pagination,
    dynamicBullets: true,
    paginationDisabledClass: true,
    progressbarFillClass: true,
  },
});
