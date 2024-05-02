import AOS from './libs/aos';
import aosConfig from './modules/aosConfig';
import swipers from './modules/swiper';

addEventListener('load', async () => {
  // AOS
  AOS.init(aosConfig);

  // Navigation
  const burger = document.querySelector('[data-burger-btn]');
  const menu = document.querySelector('[data-menu]');
  const scrollLinks = document.querySelectorAll('[data-scroll-to]');
  const body = document.body;

  const goTo = (sectionId) => {
    const top = document.getElementById(sectionId)?.offsetTop - 120;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  };

  const setMenuState = (activate) => {
    const action = activate ? 'add' : 'remove';

    burger?.classList[action]('active');
    menu?.classList[action]('active');
  };

  burger.addEventListener('click', ({ currentTarget }) => {
    const isActiveMenu = currentTarget.classList.contains('active');

    if (isActiveMenu) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
  });

  scrollLinks.forEach((link) => {
    link.addEventListener('click', ({ currentTarget }) => {
      const sectionId = currentTarget.getAttribute('data-scroll-to').replace('#', '');
      setMenuState(false);
      goTo(sectionId);
    });
  });

  // Swipers
  swipers.advantagesSwiper();

});
