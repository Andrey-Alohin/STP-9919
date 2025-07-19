import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([EffectCoverflow]);
const swiperRewiews = document.querySelector('[data-swiper="reviews"]');
const swiperPagination = document.querySelector(
  '[data-swiper="reviewsPagination"]'
);
console.log('worked', swiperRewiews);

const swiper = new Swiper(swiperRewiews, {
  modules: [Pagination],
  spaceBetween: '16px',
  loop: true,
  initialSlide: 2,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      // width: 1200,
      centeredSlides: true,
    },
  },
  pagination: {
    el: swiperPagination,
    dynamicBullets: true,
    paginationDisabledClass: true,
    progressbarFillClass: true,
  },
});
// document.addEventListener('DOMContentLoaded', () => {
//   const swiperRewiews = document.querySelector('[data-swiper="reviews"]');

//   if (swiperRewiews) {
//     new Swiper(swiperRewiews, {
//       pagination: {
//         el: '[data-swiper="reviewsPagination"]',
//       },
//     });
//   }
// });
