require('tocbot');
require('stylebook/dist/js/bootstrap');

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
     * Anchor-JS
     */

    var anchors = new AnchorJS();
    anchors.add('.js-toc-content h1, .js-toc-content h2, .js-toc-content h3, .js-toc-content h4');

    /**
     * TocBot Sidebar
     */

    tocbot.init({
      headingSelector: 'h1, h2',
      activeLinkClass: 'active',
      extraListClasses: 'nav',
      headingsOffset: contentOffset,
      smoothScrollOptions: smoothScrollOptions
    });

    $('.guide-sidebar').affix({
      offset: {
        top: contentOffset
      }
    });

    // enable smooth scroll, including the offset set through tocbot
    $('.anchorjs-link').attr('data-scroll', 'data-scroll');

    /**
     * ClipboardJS
     */

    $('.highlighter-rouge .highlight').before('<span class="btn-clipboard">Copy</span>');

    var Clipboard = require('clipboard');

    var clipboard = new Clipboard('.btn-clipboard', {
      target: function(trigger) {
        return trigger.nextElementSibling;
      }
    });

    clipboard.on('success', function(e) {
      $(e.trigger).attr('title', 'Copied!').tooltip('show').on('shown.bs.tooltip', function() {
        setTimeout(function() {
          $(e.trigger).removeAttr('title').tooltip('destroy');
        }, 500);
      });
      e.clearSelection();
    });

    clipboard.on('error', function(e) {
      $(e.trigger).attr('title', 'Press Ctrl/⌘ + C to copy!').tooltip('show').on('shown.bs.tooltip', function() {
        setTimeout(function() {
          $(e.trigger).removeAttr('title').tooltip('destroy');
        }, 500);
      });
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
  for (var c = document.getElementsByTagName('a'), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute('href') && b.hostname !== location.hostname && (b.target = '_blank');
  }

});