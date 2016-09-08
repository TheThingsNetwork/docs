require('tocbot');
require('ttn-stylebook/dist/js/bootstrap');

var AnchorJS = require('anchor-js');

$(function() {
  var contentOffset = 100;

  var smoothScrollOptions = {
    selector: 'a',
    easing: 'easeInOutCubic',
    offset: contentOffset,
    speed: 300,
    updateURL: true
  };

  if ($('.layout-guide').length) {

    /**
     * TocBot Sidebar
     */

    tocbot.init({
      headingSelector: 'h1, h2',
      activeLinkClass: 'active',
      extraListClasses: 'nav',
      headingsOffset: contentOffset,
      includeHtml: true,
      smoothScrollOptions: smoothScrollOptions
    });

    $('.guide-sidebar').affix({
      offset: {
        top: contentOffset
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

    var ZeroClipboard = require('zeroclipboard');

    ZeroClipboard.config({
      swfPath: site.baseurl + '/assets/flash/ZeroClipboard.swf',
      hoverClass: 'btn-clipboard-hover'
    });

    $('.highlighter-rouge .highlight').before('<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>');

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
    
  } else {

    // so that front-page content scroll to below navbar as well
    var smoothScroll = require('tocbot/node_modules/smooth-scroll');
    smoothScroll.init(smoothScrollOptions);
  }

  /**
   * Tooltips
   */
  
  $('[data-toggle="tooltip"]').tooltip();

  /** 
   * Disabled links
   */
  $('a[disabled][href]').attr('href', 'javascript:void(0)');

  /**
   * External links (http://stackoverflow.com/a/13147238)
   */
  for(var c = document.getElementsByTagName('a'), a = 0;a < c.length;a++) {
    var b = c[a];
    b.getAttribute('href') && b.hostname !== location.hostname && (b.target = '_blank');
  }

});