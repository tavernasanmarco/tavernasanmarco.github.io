$(document).ready(function() {
  // Dropdowns
  $('.ui.dropdown')
    .dropdown({
      // you can use any ui transition
      transition: 'drop'
    })
  ;
  // Mobile Nav
  $('.ui.modal')
    .modal('attach events', '.collapse-menu', 'show')
  ;
  // Instagram
  if ($('#instafeed').length > 0) {
    var feed = new Instafeed({
      get: 'user',
      userId: 181468269,
      accessToken: '181468269.467ede5.834e93572e2149058be827140536bb2a',
      limit: 8,
      sortBy: 'random',
      resolution: 'low_resolution'
    });
    feed.run();
    }
  // Store Hours
  var date = new Date();

  var currentDay = date.getDay();

  $('.hours span:eq(' + currentDay +')').addClass('show-time');
});

// Scroll to anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(
      /^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +
        ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Menu Tabs
jQuery(function() {
  jQuery('.next').click(function() {
    jQuery('.menu-container').fadeOut(1000);
    jQuery('#menu' + $(this).attr('target')).fadeIn(1000);
    return false;
  });
});
$('.next').click(function() {
  $('a.active').not(this).removeClass('active');
  $(this).toggleClass("active");
});

// Hero Background Image Changer
var now = 0;
var int = self.setInterval('changeBG()', 4000);
var array = ['/images/hero-1.jpg', '/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg' ];

function changeBG() {
  //array of backgrounds
  now = (now + 1) % array.length;
  $('.hero').css({
    'background': 'url("' + array[now] + '")',
    'background-repeat': 'no-repeat',
    'width' : '100%',
    'background-size' : 'cover'
  });
}
;
