$(function () {
  let link = $('.m-menu-link');
  let menu = $('.m-menu');
  let close = $('.close-menu');
  link.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
  close.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.menu-background').fadeIn();
    $('.menu-link').css('color', '#1f2c30');
    $('.menu').css('color', '#1f2c30');
    $('#fa-bars').css('color', '#1f2c30');
  } else {

    $('#fa-bars').css('color', 'white');
    $('.menu-background').fadeOut();
    $('.menu-link').css('color', 'white');
    $('.menu').css('color', 'white');
  }

  if (y > 600) {
    $('.arrow-up').fadeIn();
  } else {
    $('.arrow-up').fadeOut();
  }
});
