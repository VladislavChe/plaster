/* Включение главной функции jQuery */
$(document).ready(function () {
  /*Modal window Start*/
  $('.contacts-line__callback').magnificPopup();
  /*Modal window End*/

  /*Slider Start*/
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
  /*Slider End*/
});
