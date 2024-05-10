import { CountUp } from 'countup.js';
import AOS from './libs/aos';
import aosConfig from './modules/aosConfig';
import swipers from './modules/swiper';
import isElementInViewport from './helpers/isElementInViewport';
import animateSvgOnScroll from './helpers/animateSvgOnScroll';

const animateOffersCircles = (w_top, w_height) => {
  const whitePaths = document.querySelectorAll('[data-circle-path-white]');
  const yellowPaths = document.querySelectorAll('[data-circle-path-yellow]');
  const greenPaths = document.querySelectorAll('[data-circle-path-green]');

  whitePaths.forEach((path, index) => {
    animateSvgOnScroll(path, 100 * index, w_top, w_height);
  });

  yellowPaths.forEach((path, index) => {
    animateSvgOnScroll(path, 100 * index, w_top, w_height);
  });

  greenPaths.forEach((path, index) => {
    animateSvgOnScroll(path, 100 * index, w_top, w_height);
  });
}

const animateLoadingLines = (w_top, w_height) => {
  const grayPaths = document.querySelectorAll('[data-loading-path-gray]');
  const greenPaths = document.querySelectorAll('[data-loading-path-green]');

  grayPaths.forEach((path, index) => {
    animateSvgOnScroll(path, 200 * index, w_top, w_height);
  });

  greenPaths.forEach((path, index) => {
    animateSvgOnScroll(path, 200 * index, w_top, w_height);
  });
}

addEventListener('load', async () => {
  // AOS
  AOS.init(aosConfig);

  // Navigation
  const burger = document.querySelector('[data-burger-btn]');
  const menu = document.querySelector('[data-menu]');
  const scrollLinks = document.querySelectorAll('[data-scroll-to]');

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

  // Counter
  const percents = document.querySelectorAll('[data-offers-percent]');
  percents.forEach(percentBlock => {
    const percent = parseInt(percentBlock.textContent);
    const duration =  7.5 * percent / 100
    const numAnim = new CountUp(percentBlock, percent, {duration, useEasing: false, enableScrollSpy: true, scrollSpyOnce: true});
    numAnim.start()
  })

  // Animation on scroll
  let w_top = window.scrollY || window.pageYOffset;
  let w_height = window.innerHeight;

  animateOffersCircles(w_top, w_height)
  animateLoadingLines(w_top, w_height)
});

addEventListener('scroll', () => {
  // Highlight title
  const titles = document.querySelectorAll('[data-howWorkItem-title]');

  titles.forEach((title) => {
    if (isElementInViewport(title)) {
      title.classList.add('green-gradient');
    } else {
      title.classList.remove('green-gradient');
    }
  });

  // Animation on scroll
  let w_top = window.scrollY || window.pageYOffset;
  let w_height = window.innerHeight;

  animateOffersCircles(w_top, w_height)
  animateLoadingLines(w_top, w_height)
});
