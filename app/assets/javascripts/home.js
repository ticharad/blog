//Sliders

$(document).ready(function(){
  $('.bxslider_horizontal').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    startSlide:1,
    infiniteLoop: false,
    hideControlOnEnd: true,
    pager: false
  });
});

$(document).ready(function(){
  $('.bxslider_vertical').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    startSlide:1,
    mode: 'vertical',
    infiniteLoop: false,
    hideControlOnEnd: true,
    pager: false
  });
});

//Adding classes to slider controls for identifying horizontal from vertical
$(document).ready(function(){
  $('.bx-wrapper').find('.bxslider_vertical').offsetParent().offsetParent().find('.bx-controls-direction').children().addClass('bxslider_vertical_controls')

  $('.bx-wrapper').find('.bxslider_horizontal').parent().parent().children('.bx-controls').find('a').addClass('bxslider_horizontal_controls')
});
