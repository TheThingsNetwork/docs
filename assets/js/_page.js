require('./_toc.js');
require('stylebook/dist/js/bootstrap');

var Clipboard = require('clipboard');
var AnchorJS = require('anchor-js');

$(function () {

  /**
   * TOC
   */

  $('.page-toc').toc({
    title: '',
    listType: 'ul',
    headers: '.page-content h2, .page-content h3, .page-content h4',
    minimumHeaders: 1
  });

  /**
   * ClipboardJS
   */

  $('.highlighter-rouge .highlight').before('<span class="btn-clipboard">Copy</span>');

  var clipboard = new Clipboard('.btn-clipboard', {
    target: function (trigger) {
      return trigger.nextElementSibling;
    }
  });

  clipboard.on('success', function (e) {
    $(e.trigger).attr('title', 'Copied!').tooltip('show').on('shown.bs.tooltip', function () {
      setTimeout(function () {
        $(e.trigger).removeAttr('title').tooltip('destroy');
      }, 500);
    });
    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    $(e.trigger).attr('title', 'Press Ctrl/⌘ + C to copy!').tooltip('show').on('shown.bs.tooltip', function () {
      setTimeout(function () {
        $(e.trigger).removeAttr('title').tooltip('destroy');
      }, 500);
    });
  });

  /**
   * Lightbox
   */

  $('#lightbox .modal-dialog').click(function () {
    $('#lightbox').modal('hide');
  });

  $('.page-content :not(a) img').click(function () {
    var src = this.getAttribute('src');
    if (window.innerWidth >= 768) {
      $('#lightbox a').attr('href', src);
      $('#lightbox img').attr('src', src);
      $('#lightbox').modal('show');
    } else {
      window.open(src);
    }
  });

  /**
   * Anchors
   */
  var anchors = new AnchorJS();
  anchors.add('.page-content h2, .page-content h3, .page-content h4');

  /**
   * Affix
   */

  $('.page-affix').affix({
    offset: {
      top: $('.page-side-nav').parent().offset().top - 30,
      bottom: 30
    }
  }).on('affix-top.bs.affix', function() {
    $(this).width('auto');
  }).on('affix.bs.affix', function() {
    $(this).width($(this).parent().width());
  });

});