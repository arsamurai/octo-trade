const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  const elementCenterY = rect.top + rect.height / 2;
  const viewportCenterY = viewportHeight / 2;

  return Math.abs(elementCenterY - viewportCenterY) < 90;
};

export default isElementInViewport;
