import Swiper from 'swiper';
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([EffectCoverflow]);
const swiperRewiews = document.querySelector('[data-swiper="gallery"]');
const swiperGalleryPagination = document.querySelector(
  '[data-swiper="galleryPagination"]'
);

const swiper = new Swiper(swiperRewiews, {
  modules: [Pagination, Keyboard],
  // effect: 'coverflow',
  loop: true,
  keyboard: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 2,
  grabCursor: true,
  // coverflowEffect: {
  //   slideShadows: false,
  //   scale: 0.8,
  //   rotate: 40,
  //   stretch: -16,
  // },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 24,
      // effect: 'coverflow',
    },
  },
  pagination: {
    el: swiperGalleryPagination,
    dynamicBullets: true,
    dynamicMainBullets: true,
  },
});
