
$(document).ready(function () {
  $('.intro__slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  speed: 1800,
  variableWidth: true,
  adaptiveHeight: true,
  touchMove: false,
  infinite: false,
  });
});

$(document).ready(function () {
  $('.products__slider').slick({
    centerMode: true,
    centerPadding:'60px',
    slidesToShow: 3,
    speed: 1800,
    index: 2,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    });
  });

  $(document).ready(function () {
    $('.partners__slider').slick({
    arrows: true,
    speed: 1800,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    });
  });




