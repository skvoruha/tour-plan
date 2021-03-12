var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
   keyboard: {
    // enabled: true,
    ArrowLeft: true,
    ArrowRight: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
var reviewsSlider = new Swiper('.reviews-slider', {
   loop: true,

  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});
ymaps.ready(init);
function init(){
        var myMap = new ymaps.Map("map", {
            center: [7.8907326148831505,98.29466843709695],
            zoom: 16
        });
    }

