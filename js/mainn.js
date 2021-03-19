$(window).scroll(function(){
  $('.newsletter').bgscroll({
    direction: 'top', // направление bottom или top
    bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
    debug: false, // Режим отладки
    min:0, // минимальное положение (в %) на которое может смещаться фон
    max:100 // максимальное положение (в %) на которое может смещаться фон
  });
 })
var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
   keyboard: {
    // enabled: true,
    ArrowLeft: true,
    ArrowRight: true
  },
  autoplay: {
   delay: 3000,
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
            // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
           7.8907326148831505,98.29466843709695
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });
        myMap.geoObjects
      .add(myGeoObject)
      .add(new ymaps.Placemark([7.8907326148831505, 98.29466843709695], {
            balloonContent: '<strong>Double Tree by Hilton Phuket Banthai Resort</strong><br> Гостиница',
            iconCaption: 'Hilton Phuket'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))

    }
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function(){
console.log('Клик по кнопке меню')
document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible')
});

