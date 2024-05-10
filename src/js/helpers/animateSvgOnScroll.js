const animateSvgOnScroll = (svg, delay, w_top, w_height) => {
  const svgRect = svg.getBoundingClientRect();
  const svgHeight = svgRect.top + window.scrollY;
  const svgOuterHeight = svgRect.height;

  if (w_top + w_height > svgHeight && w_top < svgHeight + svgOuterHeight) {
    setTimeout(() => {
      svg.classList.add('animate');
    }, [delay]);
  }
};

export default animateSvgOnScroll;
