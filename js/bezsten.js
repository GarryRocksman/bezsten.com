function openMenu() {
  $('.m-menu').addClass('m-menu__active');
}

function closeMenu() {
  $('.m-menu').removeClass('m-menu__active');
}


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


$(document).ready(function(){
  $(".menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
  $(".m-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
});
