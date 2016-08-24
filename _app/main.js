require('tocbot');
require('bootstrap-sass');

$(function() {

  tocbot.init({
    headingSelector: 'h1, h2',
    activeLinkClass: 'active',
    extraListClasses: 'nav',
    headingsOffset: $('.navbar').outerHeight(),
    smoothScrollOptions: {
      easing: 'easeInOutCubic',
      offset: $('#content').offset().top,
      speed: 300,
      updateURL: true
    }
  });

  $('.guides-sidebar').affix({
    offset: {
      top: function () {
        return (this.top = $('#content').offset().top);
      },
      bottom: function () {
        return (this.bottom = $('.footer').outerHeight(true));
      }
    }
  });
  
});