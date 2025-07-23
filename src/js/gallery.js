import Swiper from 'swiper';
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules';

Swiper.use([EffectCoverflow]);
const swiperGalleryRefs = {
  swiper: document.querySelector('[data-swiper="gallery"]'),
  pagination: document.querySelector('[data-swiper="galleryPagination"]'),
};

const useEffect = () => (window.innerWidth >= 1200 ? 'slide' : 'coverflow');

let swiperGallery = null;

function initialGallerySwiper() {
  if (swiperGallery) swiperGallery.destroy(true, true);

  let effect = useEffect();

  swiperGallery = new Swiper(swiperGalleryRefs.swiper, {
    modules: [Pagination, Keyboard],
    effect: effect,
    keyboard: true,
    grabCursor: true,
    centeredSlides: effect === 'coverflow',
    slidesPerView: effect === 'coverflow' ? 1 : 4,
    spaceBetween: effect === 'coverflow ' ? 16 : 24,
    coverflowEffect: {
      slideShadows: false,
      scale: 0.8,
      rotate: 30,
      stretch: -16,
    },
    pagination: {
      el: swiperGalleryRefs.pagination,
      dynamicBullets: true,
    },
  });
}

initialGallerySwiper();

let lastEffect = useEffect();

window.addEventListener('resize', () => {
  const newEffect = useEffect();
  if (newEffect !== lastEffect) {
    lastEffect = newEffect;
    initialGallerySwiper();
  } else {
    // swiperGallery.update();
  }
});
