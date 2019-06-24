

function openMenu() {
  $('.m-menu').addClass('m-menu__active');
}

function closeMenu() {
  $('.m-menu').removeClass('m-menu__active');
}

function englishLanguage() {
$('#en-contacts').css('display','flex');
$('#en-podcast').css('display','flex');
$('#en-missioners').css('display','flex');
$('#en-services').css('display','flex');
$('#en-webelieve').css('display','flex');
$('#en-mission').css('display','flex');
$('#en-main').css('display','flex');
$('#en-menu').css('display','flex');

$('#ru-contacts').css('display','none');
$('#ru-podcast').css('display','none');
$('#ru-missioners').css('display','none');
$('#ru-services').css('display','none');
$('#ru-webelieve').css('display','none');
$('#ru-mission').css('display','none');
$('#ru-main').css('display','none');
$('#ru-menu').css('display','none');
}


function russianLanguage() {
$('#ru-contacts').css('display','flex');
$('#ru-podcast').css('display','flex');
$('#ru-missioners').css('display','flex');
$('#ru-services').css('display','flex');
$('#ru-webelieve').css('display','flex');
$('#ru-mission').css('display','flex');
$('#ru-main').css('display','flex');
$('#ru-menu').css('display','flex');

$('#en-contacts').css('display','none');
$('#en-podcast').css('display','none');
$('#en-missioners').css('display','none');
$('#en-services').css('display','none');
$('#en-webelieve').css('display','none');
$('#en-mission').css('display','none');
$('#en-main').css('display','none');
$('#en-menu').css('display','none');
}




$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.menu-background').fadeIn();
    $('.menu-link').css('color', '#1f2c30');
    $('.menu').css('color', '#1f2c30');
    $('.languages').css('color', '#1f2c30');
    $('.languages').css('border', '#1f2c30 solid 1px');
    $('#fa-bars').css('color', '#1f2c30');
  } else {

    $('#fa-bars').css('color', 'white');
    $('.menu-background').fadeOut();
    $('.menu-link').css('color', 'white');
    $('.menu').css('color', 'white');
    $('.languages').css('color', 'white');
    $('.languages').css('border', 'white solid 1px');
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
