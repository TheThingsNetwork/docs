require('tocbot');

$(function() {

  tocbot.init({
    tocSelector: '#toc',
    contentSelector: '#content',
    headingSelector: 'h1, h2',
    headingsOffset: $("#toc").offset().top
  });
  
});