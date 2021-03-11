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
ymaps.ready(init);
function init(){
        var myMap = new ymaps.Map("map", {
            center: [7.8907326148831505,98.29466843709695],
            zoom: 16
        });
    }

