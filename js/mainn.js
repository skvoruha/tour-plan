const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
   keyboard: {
    // enabled: true,
    ArrowLeft: true,
    ArrowRight: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});

