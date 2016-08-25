require('tocbot');
require('bootstrap-sass');
var ZeroClipboard = require('zeroclipboard');

var AnchorJS = require('anchor-js');

$(function() {

  /**
   * TocBot Sidebar
   */

  tocbot.init({
    headingSelector: 'h1, h2',
    activeLinkClass: 'active',
    extraListClasses: 'nav',
    headingsOffset: $('.navbar').outerHeight(),
    includeHtml: true,
    smoothScrollOptions: {
      easing: 'easeInOutCubic',
      offset: $('#content').offset().top,
      speed: 300,
      updateURL: true
    }
  });

  $('.guides-sidebar').affix({
    offset: {
      top: function() {
        return ($('#content > .container').offset().top);
      },
      bottom: function() {
        return (this.bottom = $('.footer').outerHeight(true));
      }
    }
  });

  /**
   * Anchor-JS
   */

  var anchors = new AnchorJS();
  anchors.add('.js-toc-content h1, .js-toc-content h2');

  // enable smooth scroll, including the offset set through tocbot
  $('.anchorjs-link').attr('data-scroll', 'data-scroll');

  /**
   * ZeroClipboard
   */

  ZeroClipboard.config({
    swfPath: site.baseurl + '/assets/flash/ZeroClipboard.swf',
    hoverClass: 'btn-clipboard-hover'
  });

  $('.highlight').each(function() {
    var copyBtn = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>';
    $(this).before(copyBtn);
  });

  var client = new ZeroClipboard($('.btn-clipboard'));

  var bridge = $('#global-zeroclipboard-html-bridge');

  client.on('ready', function(event) {

    bridge.data('placement', 'top').attr('title', 'Copy to clipboard').tooltip();

    client.on('copy', function(event) {
      var code = $(event.target).parent().nextAll('.highlight').first().text();
      event.clipboardData.setData('text/plain', code);
    });

    client.on('aftercopy', function(event) {
      bridge.attr('title', 'Copied!').tooltip('fixTitle').tooltip('show').attr('title', 'Copy to clipboard').tooltip('fixTitle');
    });
  });

  client.on('error', function(event) {
    $('.zero-clipboard').remove();
    ZeroClipboard.destroy();
  });

});