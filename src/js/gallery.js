import Swiper from 'swiper';
import {
  EffectCoverflow,
  EffectCards,
  Keyboard,
  Pagination,
  EffectCreative,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([EffectCoverflow, EffectCards, EffectCreative]);
const swiperRewiews = document.querySelector('[data-swiper="gallery"]');
const swiperGalleryPagination = document.querySelector(
  '[data-swiper="galleryPagination"]'
);

const swiperGallery = new Swiper(swiperRewiews, {
  modules: [Pagination, Keyboard],
  effect: 'coverflow',
  keyboard: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 0,
  grabCursor: true,
  spaceBetween: 16,
  cardsEffect: {
    slideShadows: false,
  },
  coverflowEffect: {
    slideShadows: false,
    scale: 0.8,
    rotate: 30,
    stretch: -16,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: swiperGalleryPagination,
    dynamicBullets: true,
  },
});
