import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swipers = {
  advantagesSwiper: () =>
    new Swiper('.advanges__swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Pagination],
      pagination: {
        el: '.advantages__swiper-pagination.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        400: {
          slidesPerView: 1.2
        },
        600: {
          slidesPerView: 1.3
        }
      }
    })
};

export default swipers;
