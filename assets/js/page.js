/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(108);
	__webpack_require__(109);

	var Clipboard = __webpack_require__(110);
	var AnchorJS = __webpack_require__(118);

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
	    target: function target(trigger) {
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
	  }).on('affix-top.bs.affix', function () {
	    $(this).width('auto');
	  }).on('affix.bs.affix', function () {
	    $(this).width($(this).parent().width());
	  });
	});

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	'use strict';

	// https://github.com/ghiculescu/jekyll-table-of-contents
	(function ($) {
	  $.fn.toc = function (options) {
	    var defaults = {
	      noBackToTopLinks: false,
	      title: '<i>Jump to...</i>',
	      minimumHeaders: 3,
	      headers: 'h1, h2, h3, h4, h5, h6',
	      listType: 'ol', // values: [ol|ul]
	      showEffect: 'show', // values: [show|slideDown|fadeIn|none]
	      showSpeed: 'slow', // set to 0 to deactivate effect
	      classes: { list: '',
	        item: ''
	      }
	    },
	        settings = $.extend(defaults, options);

	    function fixedEncodeURIComponent(str) {
	      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
	        return '%' + c.charCodeAt(0).toString(16);
	      });
	    }

	    function createLink(header) {
	      var innerText = header.textContent === undefined ? header.innerText : header.textContent;
	      return "<a href='#" + fixedEncodeURIComponent(header.id) + "'>" + innerText + "</a>";
	    }

	    var headers = $(settings.headers).filter(function () {
	      // get all headers with an ID
	      var previousSiblingName = $(this).prev().attr("name");
	      if (!this.id && previousSiblingName) {
	        this.id = $(this).attr("id", previousSiblingName.replace(/\./g, "-"));
	      }
	      return this.id;
	    }),
	        output = $(this);
	    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
	      $(this).hide();
	      return;
	    }

	    if (0 === settings.showSpeed) {
	      settings.showEffect = 'none';
	    }

	    var render = {
	      show: function show() {
	        output.hide().html(html).show(settings.showSpeed);
	      },
	      slideDown: function slideDown() {
	        output.hide().html(html).slideDown(settings.showSpeed);
	      },
	      fadeIn: function fadeIn() {
	        output.hide().html(html).fadeIn(settings.showSpeed);
	      },
	      none: function none() {
	        output.html(html);
	      }
	    };

	    var get_level = function get_level(ele) {
	      return parseInt(ele.nodeName.replace("H", ""), 10);
	    };
	    var highest_level = headers.map(function (_, ele) {
	      return get_level(ele);
	    }).get().sort()[0];
	    var return_to_top = '<i class="icon-arrow-up back-to-top"> </i>';

	    var level = get_level(headers[0]),
	        this_level,
	        html = settings.title + " <" + settings.listType + " class=\"" + settings.classes.list + "\">";
	    headers.on('click', function () {
	      if (!settings.noBackToTopLinks) {
	        window.location.hash = this.id;
	      }
	    }).addClass('clickable-header').each(function (_, header) {
	      this_level = get_level(header);
	      if (!settings.noBackToTopLinks && this_level === highest_level) {
	        $(header).addClass('top-level-header').after(return_to_top);
	      }
	      if (this_level === level) // same level as before; same indenting
	        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);else if (this_level <= level) {
	        // higher level than before; end parent ol
	        for (var i = this_level; i < level; i++) {
	          html += "</li></" + settings.listType + ">";
	        }
	        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
	      } else if (this_level > level) {
	        // lower level than before; expand the previous to contain a ol
	        for (i = this_level; i > level; i--) {
	          html += "<" + settings.listType + " class=\"" + settings.classes.list + "\">" + "<li class=\"" + settings.classes.item + "\">";
	        }
	        html += createLink(header);
	      }
	      level = this_level; // update for the next one
	    });
	    html += "</" + settings.listType + ">";
	    if (!settings.noBackToTopLinks) {
	      $(document).on('click', '.back-to-top', function () {
	        $(window).scrollTop(0);
	        window.location.hash = '';
	      });
	    }

	    render[settings.showEffect]();
	  };
	})(jQuery);

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * Bootstrap v3.3.7 (http://getbootstrap.com)
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under the MIT license
	 */

	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery');
	}

	+function ($) {
	  'use strict';

	  var version = $.fn.jquery.split(' ')[0].split('.');
	  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
	    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
	  }
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.7
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap');

	    var transEndEventNames = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] };
	      }
	    }

	    return false; // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false;
	    var $el = this;
	    $(this).one('bsTransitionEnd', function () {
	      called = true;
	    });
	    var callback = function callback() {
	      if (!called) $($el).trigger($.support.transition.end);
	    };
	    setTimeout(callback, duration);
	    return this;
	  };

	  $(function () {
	    $.support.transition = transitionEnd();

	    if (!$.support.transition) return;

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function handle(e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
	      }
	    };
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.7
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]';
	  var Alert = function Alert(el) {
	    $(el).on('click', dismiss, this.close);
	  };

	  Alert.VERSION = '3.3.7';

	  Alert.TRANSITION_DURATION = 150;

	  Alert.prototype.close = function (e) {
	    var $this = $(this);
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = $(selector === '#' ? [] : selector);

	    if (e) e.preventDefault();

	    if (!$parent.length) {
	      $parent = $this.closest('.alert');
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'));

	    if (e.isDefaultPrevented()) return;

	    $parent.removeClass('in');

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove();
	    }

	    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
	  };

	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.alert');

	      if (!data) $this.data('bs.alert', data = new Alert(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.alert;

	  $.fn.alert = Plugin;
	  $.fn.alert.Constructor = Alert;

	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old;
	    return this;
	  };

	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: button.js v3.3.7
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function Button(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Button.DEFAULTS, options);
	    this.isLoading = false;
	  };

	  Button.VERSION = '3.3.7';

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  };

	  Button.prototype.setState = function (state) {
	    var d = 'disabled';
	    var $el = this.$element;
	    var val = $el.is('input') ? 'val' : 'html';
	    var data = $el.data();

	    state += 'Text';

	    if (data.resetText == null) $el.data('resetText', $el[val]());

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state]);

	      if (state == 'loadingText') {
	        this.isLoading = true;
	        $el.addClass(d).attr(d, d).prop(d, true);
	      } else if (this.isLoading) {
	        this.isLoading = false;
	        $el.removeClass(d).removeAttr(d).prop(d, false);
	      }
	    }, this), 0);
	  };

	  Button.prototype.toggle = function () {
	    var changed = true;
	    var $parent = this.$element.closest('[data-toggle="buttons"]');

	    if ($parent.length) {
	      var $input = this.$element.find('input');
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false;
	        $parent.find('.active').removeClass('active');
	        this.$element.addClass('active');
	      } else if ($input.prop('type') == 'checkbox') {
	        if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
	        this.$element.toggleClass('active');
	      }
	      $input.prop('checked', this.$element.hasClass('active'));
	      if (changed) $input.trigger('change');
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
	      this.$element.toggleClass('active');
	    }
	  };

	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.button');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.button', data = new Button(this, options));

	      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
	    });
	  }

	  var old = $.fn.button;

	  $.fn.button = Plugin;
	  $.fn.button.Constructor = Button;

	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old;
	    return this;
	  };

	  // BUTTON DATA-API
	  // ===============

	  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    var $btn = $(e.target).closest('.btn');
	    Plugin.call($btn, 'toggle');
	    if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
	      // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
	      e.preventDefault();
	      // The target component still receive the focus
	      if ($btn.is('input,button')) $btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');
	    }
	  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.7
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function Carousel(element, options) {
	    this.$element = $(element);
	    this.$indicators = this.$element.find('.carousel-indicators');
	    this.options = options;
	    this.paused = null;
	    this.sliding = null;
	    this.interval = null;
	    this.$active = null;
	    this.$items = null;

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
	  };

	  Carousel.VERSION = '3.3.7';

	  Carousel.TRANSITION_DURATION = 600;

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  };

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return;
	    switch (e.which) {
	      case 37:
	        this.prev();break;
	      case 39:
	        this.next();break;
	      default:
	        return;
	    }

	    e.preventDefault();
	  };

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false);

	    this.interval && clearInterval(this.interval);

	    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

	    return this;
	  };

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item');
	    return this.$items.index(item || this.$active);
	  };

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active);
	    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
	    if (willWrap && !this.options.wrap) return active;
	    var delta = direction == 'prev' ? -1 : 1;
	    var itemIndex = (activeIndex + delta) % this.$items.length;
	    return this.$items.eq(itemIndex);
	  };

	  Carousel.prototype.to = function (pos) {
	    var that = this;
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

	    if (pos > this.$items.length - 1 || pos < 0) return;

	    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
	      that.to(pos);
	    }); // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle();

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
	  };

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true);

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end);
	      this.cycle(true);
	    }

	    this.interval = clearInterval(this.interval);

	    return this;
	  };

	  Carousel.prototype.next = function () {
	    if (this.sliding) return;
	    return this.slide('next');
	  };

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return;
	    return this.slide('prev');
	  };

	  Carousel.prototype.slide = function (type, next) {
	    var $active = this.$element.find('.item.active');
	    var $next = next || this.getItemForDirection(type, $active);
	    var isCycling = this.interval;
	    var direction = type == 'next' ? 'left' : 'right';
	    var that = this;

	    if ($next.hasClass('active')) return this.sliding = false;

	    var relatedTarget = $next[0];
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    });
	    this.$element.trigger(slideEvent);
	    if (slideEvent.isDefaultPrevented()) return;

	    this.sliding = true;

	    isCycling && this.pause();

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active');
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
	      $nextIndicator && $nextIndicator.addClass('active');
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type);
	      $next[0].offsetWidth; // force reflow
	      $active.addClass(direction);
	      $next.addClass(direction);
	      $active.one('bsTransitionEnd', function () {
	        $next.removeClass([type, direction].join(' ')).addClass('active');
	        $active.removeClass(['active', direction].join(' '));
	        that.sliding = false;
	        setTimeout(function () {
	          that.$element.trigger(slidEvent);
	        }, 0);
	      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
	    } else {
	      $active.removeClass('active');
	      $next.addClass('active');
	      this.sliding = false;
	      this.$element.trigger(slidEvent);
	    }

	    isCycling && this.cycle();

	    return this;
	  };

	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.carousel');
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
	      var action = typeof option == 'string' ? option : options.slide;

	      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
	      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
	    });
	  }

	  var old = $.fn.carousel;

	  $.fn.carousel = Plugin;
	  $.fn.carousel.Constructor = Carousel;

	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old;
	    return this;
	  };

	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function clickHandler(e) {
	    var href;
	    var $this = $(this);
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    if (!$target.hasClass('carousel')) return;
	    var options = $.extend({}, $target.data(), $this.data());
	    var slideIndex = $this.attr('data-slide-to');
	    if (slideIndex) options.interval = false;

	    Plugin.call($target, options);

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex);
	    }

	    e.preventDefault();
	  };

	  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this);
	      Plugin.call($carousel, $carousel.data());
	    });
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.7
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	/* jshint latedef: false */

	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function Collapse(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Collapse.DEFAULTS, options);
	    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
	    this.transitioning = null;

	    if (this.options.parent) {
	      this.$parent = this.getParent();
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
	    }

	    if (this.options.toggle) this.toggle();
	  };

	  Collapse.VERSION = '3.3.7';

	  Collapse.TRANSITION_DURATION = 350;

	  Collapse.DEFAULTS = {
	    toggle: true
	  };

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width');
	    return hasWidth ? 'width' : 'height';
	  };

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return;

	    var activesData;
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse');
	      if (activesData && activesData.transitioning) return;
	    }

	    var startEvent = $.Event('show.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide');
	      activesData || actives.data('bs.collapse', null);
	    }

	    var dimension = this.dimension();

	    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

	    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
	      this.transitioning = 0;
	      this.$element.trigger('shown.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

	    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
	  };

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return;

	    var startEvent = $.Event('hide.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    var dimension = this.dimension();

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

	    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

	    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.transitioning = 0;
	      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
	  };

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']();
	  };

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
	      var $element = $(element);
	      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
	    }, this)).end();
	  };

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in');

	    $element.attr('aria-expanded', isOpen);
	    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
	  };

	  function getTargetFromTrigger($trigger) {
	    var href;
	    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

	    return $(target);
	  }

	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.collapse');
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
	      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.collapse;

	  $.fn.collapse = Plugin;
	  $.fn.collapse.Constructor = Collapse;

	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old;
	    return this;
	  };

	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this = $(this);

	    if (!$this.attr('data-target')) e.preventDefault();

	    var $target = getTargetFromTrigger($this);
	    var data = $target.data('bs.collapse');
	    var option = data ? 'toggle' : $this.data();

	    Plugin.call($target, option);
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.7
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop';
	  var toggle = '[data-toggle="dropdown"]';
	  var Dropdown = function Dropdown(element) {
	    $(element).on('click.bs.dropdown', this.toggle);
	  };

	  Dropdown.VERSION = '3.3.7';

	  function getParent($this) {
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = selector && $(selector);

	    return $parent && $parent.length ? $parent : $this.parent();
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return;
	    $(backdrop).remove();
	    $(toggle).each(function () {
	      var $this = $(this);
	      var $parent = getParent($this);
	      var relatedTarget = { relatedTarget: this };

	      if (!$parent.hasClass('open')) return;

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.attr('aria-expanded', 'false');
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
	    });
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this);

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    clearMenus();

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
	      }

	      var relatedTarget = { relatedTarget: this };
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.trigger('focus').attr('aria-expanded', 'true');

	      $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget));
	    }

	    return false;
	  };

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

	    var $this = $(this);

	    e.preventDefault();
	    e.stopPropagation();

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus');
	      return $this.trigger('click');
	    }

	    var desc = ' li:not(.disabled):visible a';
	    var $items = $parent.find('.dropdown-menu' + desc);

	    if (!$items.length) return;

	    var index = $items.index(e.target);

	    if (e.which == 38 && index > 0) index--; // up
	    if (e.which == 40 && index < $items.length - 1) index++; // down
	    if (!~index) index = 0;

	    $items.eq(index).trigger('focus');
	  };

	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.dropdown');

	      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.dropdown;

	  $.fn.dropdown = Plugin;
	  $.fn.dropdown.Constructor = Dropdown;

	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old;
	    return this;
	  };

	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
	    e.stopPropagation();
	  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.7
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function Modal(element, options) {
	    this.options = options;
	    this.$body = $(document.body);
	    this.$element = $(element);
	    this.$dialog = this.$element.find('.modal-dialog');
	    this.$backdrop = null;
	    this.isShown = null;
	    this.originalBodyPad = null;
	    this.scrollbarWidth = 0;
	    this.ignoreBackdropClick = false;

	    if (this.options.remote) {
	      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
	        this.$element.trigger('loaded.bs.modal');
	      }, this));
	    }
	  };

	  Modal.VERSION = '3.3.7';

	  Modal.TRANSITION_DURATION = 300;
	  Modal.BACKDROP_TRANSITION_DURATION = 150;

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  };

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget);
	  };

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this;
	    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

	    this.$element.trigger(e);

	    if (this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = true;

	    this.checkScrollbar();
	    this.setScrollbar();
	    this.$body.addClass('modal-open');

	    this.escape();
	    this.resize();

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
	      });
	    });

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade');

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body); // don't move modals dom position
	      }

	      that.$element.show().scrollTop(0);

	      that.adjustDialog();

	      if (transition) {
	        that.$element[0].offsetWidth; // force reflow
	      }

	      that.$element.addClass('in');

	      that.enforceFocus();

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

	      transition ? that.$dialog // wait for modal to slide in
	      .one('bsTransitionEnd', function () {
	        that.$element.trigger('focus').trigger(e);
	      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
	    });
	  };

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault();

	    e = $.Event('hide.bs.modal');

	    this.$element.trigger(e);

	    if (!this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = false;

	    this.escape();
	    this.resize();

	    $(document).off('focusin.bs.modal');

	    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

	    this.$dialog.off('mousedown.dismiss.bs.modal');

	    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
	  };

	  Modal.prototype.enforceFocus = function () {
	    $(document).off('focusin.bs.modal') // guard against infinite focus loop
	    .on('focusin.bs.modal', $.proxy(function (e) {
	      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	        this.$element.trigger('focus');
	      }
	    }, this));
	  };

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide();
	      }, this));
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal');
	    }
	  };

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
	    } else {
	      $(window).off('resize.bs.modal');
	    }
	  };

	  Modal.prototype.hideModal = function () {
	    var that = this;
	    this.$element.hide();
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open');
	      that.resetAdjustments();
	      that.resetScrollbar();
	      that.$element.trigger('hidden.bs.modal');
	    });
	  };

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove();
	    this.$backdrop = null;
	  };

	  Modal.prototype.backdrop = function (callback) {
	    var that = this;
	    var animate = this.$element.hasClass('fade') ? 'fade' : '';

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate;

	      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false;
	          return;
	        }
	        if (e.target !== e.currentTarget) return;
	        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
	      }, this));

	      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

	      this.$backdrop.addClass('in');

	      if (!callback) return;

	      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in');

	      var callbackRemove = function callbackRemove() {
	        that.removeBackdrop();
	        callback && callback();
	      };
	      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
	    } else if (callback) {
	      callback();
	    }
	  };

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog();
	  };

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

	    this.$element.css({
	      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    });
	  };

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    });
	  };

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth;
	    if (!fullWindowWidth) {
	      // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect();
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	    this.scrollbarWidth = this.measureScrollbar();
	  };

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
	    this.originalBodyPad = document.body.style.paddingRight || '';
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
	  };

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad);
	  };

	  Modal.prototype.measureScrollbar = function () {
	    // thx walsh
	    var scrollDiv = document.createElement('div');
	    scrollDiv.className = 'modal-scrollbar-measure';
	    this.$body.append(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    this.$body[0].removeChild(scrollDiv);
	    return scrollbarWidth;
	  };

	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.modal');
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data) $this.data('bs.modal', data = new Modal(this, options));
	      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
	    });
	  }

	  var old = $.fn.modal;

	  $.fn.modal = Plugin;
	  $.fn.modal.Constructor = Modal;

	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old;
	    return this;
	  };

	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this = $(this);
	    var href = $this.attr('href');
	    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

	    if ($this.is('a')) e.preventDefault();

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus');
	      });
	    });
	    Plugin.call($target, option, this);
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.7
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function Tooltip(element, options) {
	    this.type = null;
	    this.options = null;
	    this.enabled = null;
	    this.timeout = null;
	    this.hoverState = null;
	    this.$element = null;
	    this.inState = null;

	    this.init('tooltip', element, options);
	  };

	  Tooltip.VERSION = '3.3.7';

	  Tooltip.TRANSITION_DURATION = 150;

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  };

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled = true;
	    this.type = type;
	    this.$element = $(element);
	    this.options = this.getOptions(options);
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
	    this.inState = { click: false, hover: false, focus: false };

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
	    }

	    var triggers = this.options.trigger.split(' ');

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i];

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
	      } else if (trigger != 'manual') {
	        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

	        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
	      }
	    }

	    this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
	  };

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS;
	  };

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      };
	    }

	    return options;
	  };

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options = {};
	    var defaults = this.getDefaults();

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value;
	    });

	    return options;
	  };

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
	    }

	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in';
	      return;
	    }

	    clearTimeout(self.timeout);

	    self.hoverState = 'in';

	    if (!self.options.delay || !self.options.delay.show) return self.show();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show();
	    }, self.options.delay.show);
	  };

	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true;
	    }

	    return false;
	  };

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
	    }

	    if (self.isInStateTrue()) return;

	    clearTimeout(self.timeout);

	    self.hoverState = 'out';

	    if (!self.options.delay || !self.options.delay.hide) return self.hide();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide();
	    }, self.options.delay.hide);
	  };

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type);

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e);

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
	      if (e.isDefaultPrevented() || !inDom) return;
	      var that = this;

	      var $tip = this.tip();

	      var tipId = this.getUID(this.type);

	      this.setContent();
	      $tip.attr('id', tipId);
	      this.$element.attr('aria-describedby', tipId);

	      if (this.options.animation) $tip.addClass('fade');

	      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

	      var autoToken = /\s?auto?\s?/i;
	      var autoPlace = autoToken.test(placement);
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

	      $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
	      this.$element.trigger('inserted.bs.' + this.type);

	      var pos = this.getPosition();
	      var actualWidth = $tip[0].offsetWidth;
	      var actualHeight = $tip[0].offsetHeight;

	      if (autoPlace) {
	        var orgPlacement = placement;
	        var viewportDim = this.getPosition(this.$viewport);

	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

	        $tip.removeClass(orgPlacement).addClass(placement);
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

	      this.applyPlacement(calculatedOffset, placement);

	      var complete = function complete() {
	        var prevHoverState = that.hoverState;
	        that.$element.trigger('shown.bs.' + that.type);
	        that.hoverState = null;

	        if (prevHoverState == 'out') that.leave(that);
	      };

	      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
	    }
	  };

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip = this.tip();
	    var width = $tip[0].offsetWidth;
	    var height = $tip[0].offsetHeight;

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10);
	    var marginLeft = parseInt($tip.css('margin-left'), 10);

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop)) marginTop = 0;
	    if (isNaN(marginLeft)) marginLeft = 0;

	    offset.top += marginTop;
	    offset.left += marginLeft;

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function using(props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        });
	      }
	    }, offset), 0);

	    $tip.addClass('in');

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth = $tip[0].offsetWidth;
	    var actualHeight = $tip[0].offsetHeight;

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight;
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

	    if (delta.left) offset.left += delta.left;else offset.top += delta.top;

	    var isVertical = /top|bottom/.test(placement);
	    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

	    $tip.offset(offset);
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
	  };

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
	  };

	  Tooltip.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
	    $tip.removeClass('fade in top bottom left right');
	  };

	  Tooltip.prototype.hide = function (callback) {
	    var that = this;
	    var $tip = $(this.$tip);
	    var e = $.Event('hide.bs.' + this.type);

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach();
	      if (that.$element) {
	        // TODO: Check whether guarding this code with this `if` is really necessary.
	        that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
	      }
	      callback && callback();
	    }

	    this.$element.trigger(e);

	    if (e.isDefaultPrevented()) return;

	    $tip.removeClass('in');

	    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

	    this.hoverState = null;

	    return this;
	  };

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element;
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
	    }
	  };

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle();
	  };

	  Tooltip.prototype.getPosition = function ($element) {
	    $element = $element || this.$element;

	    var el = $element[0];
	    var isBody = el.tagName == 'BODY';

	    var elRect = el.getBoundingClientRect();
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
	    }
	    var isSvg = window.SVGElement && el instanceof window.SVGElement;
	    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
	    // See https://github.com/twbs/bootstrap/issues/20280
	    var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
	    var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

	    return $.extend({}, elRect, scroll, outerDims, elOffset);
	  };

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
	  };

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 };
	    if (!this.$viewport) return delta;

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
	    var viewportDimensions = this.getPosition(this.$viewport);

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
	      if (topEdgeOffset < viewportDimensions.top) {
	        // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset;
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
	        // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
	      }
	    } else {
	      var leftEdgeOffset = pos.left - viewportPadding;
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
	      if (leftEdgeOffset < viewportDimensions.left) {
	        // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset;
	      } else if (rightEdgeOffset > viewportDimensions.right) {
	        // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
	      }
	    }

	    return delta;
	  };

	  Tooltip.prototype.getTitle = function () {
	    var title;
	    var $e = this.$element;
	    var o = this.options;

	    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

	    return title;
	  };

	  Tooltip.prototype.getUID = function (prefix) {
	    do {
	      prefix += ~~(Math.random() * 1000000);
	    } while (document.getElementById(prefix));
	    return prefix;
	  };

	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template);
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
	      }
	    }
	    return this.$tip;
	  };

	  Tooltip.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
	  };

	  Tooltip.prototype.enable = function () {
	    this.enabled = true;
	  };

	  Tooltip.prototype.disable = function () {
	    this.enabled = false;
	  };

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled;
	  };

	  Tooltip.prototype.toggle = function (e) {
	    var self = this;
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type);
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
	        $(e.currentTarget).data('bs.' + this.type, self);
	      }
	    }

	    if (e) {
	      self.inState.click = !self.inState.click;
	      if (self.isInStateTrue()) self.enter(self);else self.leave(self);
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
	    }
	  };

	  Tooltip.prototype.destroy = function () {
	    var that = this;
	    clearTimeout(this.timeout);
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type);
	      if (that.$tip) {
	        that.$tip.detach();
	      }
	      that.$tip = null;
	      that.$arrow = null;
	      that.$viewport = null;
	      that.$element = null;
	    });
	  };

	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tooltip');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tooltip;

	  $.fn.tooltip = Plugin;
	  $.fn.tooltip.Constructor = Tooltip;

	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old;
	    return this;
	  };
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: popover.js v3.3.7
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function Popover(element, options) {
	    this.init('popover', element, options);
	  };

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

	  Popover.VERSION = '3.3.7';

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  });

	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

	  Popover.prototype.constructor = Popover;

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS;
	  };

	  Popover.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();
	    var content = this.getContent();

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
	    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
	    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

	    $tip.removeClass('fade top bottom left right in');

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
	  };

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent();
	  };

	  Popover.prototype.getContent = function () {
	    var $e = this.$element;
	    var o = this.options;

	    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
	  };

	  Popover.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.arrow');
	  };

	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.popover');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.popover', data = new Popover(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.popover;

	  $.fn.popover = Plugin;
	  $.fn.popover.Constructor = Popover;

	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old;
	    return this;
	  };
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.7
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body = $(document.body);
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
	    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
	    this.selector = (this.options.target || '') + ' .nav li > a';
	    this.offsets = [];
	    this.targets = [];
	    this.activeTarget = null;
	    this.scrollHeight = 0;

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
	    this.refresh();
	    this.process();
	  }

	  ScrollSpy.VERSION = '3.3.7';

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  };

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	  };

	  ScrollSpy.prototype.refresh = function () {
	    var that = this;
	    var offsetMethod = 'offset';
	    var offsetBase = 0;

	    this.offsets = [];
	    this.targets = [];
	    this.scrollHeight = this.getScrollHeight();

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position';
	      offsetBase = this.$scrollElement.scrollTop();
	    }

	    this.$body.find(this.selector).map(function () {
	      var $el = $(this);
	      var href = $el.data('target') || $el.attr('href');
	      var $href = /^#./.test(href) && $(href);

	      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
	    }).sort(function (a, b) {
	      return a[0] - b[0];
	    }).each(function () {
	      that.offsets.push(this[0]);
	      that.targets.push(this[1]);
	    });
	  };

	  ScrollSpy.prototype.process = function () {
	    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
	    var scrollHeight = this.getScrollHeight();
	    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
	    var offsets = this.offsets;
	    var targets = this.targets;
	    var activeTarget = this.activeTarget;
	    var i;

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh();
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null;
	      return this.clear();
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
	    }
	  };

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target;

	    this.clear();

	    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

	    var active = $(selector).parents('li').addClass('active');

	    if (active.parent('.dropdown-menu').length) {
	      active = active.closest('li.dropdown').addClass('active');
	    }

	    active.trigger('activate.bs.scrollspy');
	  };

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
	  };

	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.scrollspy');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.scrollspy;

	  $.fn.scrollspy = Plugin;
	  $.fn.scrollspy.Constructor = ScrollSpy;

	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old;
	    return this;
	  };

	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this);
	      Plugin.call($spy, $spy.data());
	    });
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.7
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function Tab(element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element);
	    // jscs:enable requireDollarBeforejQueryAssignment
	  };

	  Tab.VERSION = '3.3.7';

	  Tab.TRANSITION_DURATION = 150;

	  Tab.prototype.show = function () {
	    var $this = this.element;
	    var $ul = $this.closest('ul:not(.dropdown-menu)');
	    var selector = $this.data('target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return;

	    var $previous = $ul.find('.active:last a');
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    });
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    });

	    $previous.trigger(hideEvent);
	    $this.trigger(showEvent);

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

	    var $target = $(selector);

	    this.activate($this.closest('li'), $ul);
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      });
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      });
	    });
	  };

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active = container.find('> .active');
	    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

	    function next() {
	      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

	      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

	      if (transition) {
	        element[0].offsetWidth; // reflow for transition
	        element.addClass('in');
	      } else {
	        element.removeClass('fade');
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
	      }

	      callback && callback();
	    }

	    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

	    $active.removeClass('in');
	  };

	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tab');

	      if (!data) $this.data('bs.tab', data = new Tab(this));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tab;

	  $.fn.tab = Plugin;
	  $.fn.tab.Constructor = Tab;

	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old;
	    return this;
	  };

	  // TAB DATA-API
	  // ============

	  var clickHandler = function clickHandler(e) {
	    e.preventDefault();
	    Plugin.call($(this), 'show');
	  };

	  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: affix.js v3.3.7
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function Affix(element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options);

	    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

	    this.$element = $(element);
	    this.affixed = null;
	    this.unpin = null;
	    this.pinnedOffset = null;

	    this.checkPosition();
	  };

	  Affix.VERSION = '3.3.7';

	  Affix.RESET = 'affix affix-top affix-bottom';

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  };

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    var targetHeight = this.$target.height();

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
	      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
	    }

	    var initializing = this.affixed == null;
	    var colliderTop = initializing ? scrollTop : position.top;
	    var colliderHeight = initializing ? targetHeight : height;

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
	    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

	    return false;
	  };

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset;
	    this.$element.removeClass(Affix.RESET).addClass('affix');
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    return this.pinnedOffset = position.top - scrollTop;
	  };

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1);
	  };

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return;

	    var height = this.$element.height();
	    var offset = this.options.offset;
	    var offsetTop = offset.top;
	    var offsetBottom = offset.bottom;
	    var scrollHeight = Math.max($(document).height(), $(document.body).height());

	    if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) != 'object') offsetBottom = offsetTop = offset;
	    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '');

	      var affixType = 'affix' + (affix ? '-' + affix : '');
	      var e = $.Event(affixType + '.bs.affix');

	      this.$element.trigger(e);

	      if (e.isDefaultPrevented()) return;

	      this.affixed = affix;
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

	      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      });
	    }
	  };

	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.affix');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.affix', data = new Affix(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.affix;

	  $.fn.affix = Plugin;
	  $.fn.affix.Constructor = Affix;

	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old;
	    return this;
	  };

	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this);
	      var data = $spy.data();

	      data.offset = data.offset || {};

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
	      if (data.offsetTop != null) data.offset.top = data.offsetTop;

	      Plugin.call($spy, data);
	    });
	  });
	}(jQuery);

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(111), __webpack_require__(113), __webpack_require__(114)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(undefined, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';

	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

	    var _goodListener2 = _interopRequireDefault(_goodListener);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	    };

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	    }

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);

	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */
	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);

	            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }

	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */

	        _createClass(Clipboard, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
	            }
	        }, {
	            key: 'listenClick',
	            value: function listenClick(trigger) {
	                var _this2 = this;

	                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                    return _this2.onClick(e);
	                });
	            }
	        }, {
	            key: 'onClick',
	            value: function onClick(e) {
	                var trigger = e.delegateTarget || e.currentTarget;

	                if (this.clipboardAction) {
	                    this.clipboardAction = null;
	                }

	                this.clipboardAction = new _clipboardAction2.default({
	                    action: this.action(trigger),
	                    target: this.target(trigger),
	                    text: this.text(trigger),
	                    container: this.container,
	                    trigger: trigger,
	                    emitter: this
	                });
	            }
	        }, {
	            key: 'defaultAction',
	            value: function defaultAction(trigger) {
	                return getAttributeValue('action', trigger);
	            }
	        }, {
	            key: 'defaultTarget',
	            value: function defaultTarget(trigger) {
	                var selector = getAttributeValue('target', trigger);

	                if (selector) {
	                    return document.querySelector(selector);
	                }
	            }
	        }, {
	            key: 'defaultText',
	            value: function defaultText(trigger) {
	                return getAttributeValue('text', trigger);
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.listener.destroy();

	                if (this.clipboardAction) {
	                    this.clipboardAction.destroy();
	                    this.clipboardAction = null;
	                }
	            }
	        }], [{
	            key: 'isSupported',
	            value: function isSupported() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

	                var actions = typeof action === 'string' ? [action] : action;
	                var support = !!document.queryCommandSupported;

	                actions.forEach(function (action) {
	                    support = support && !!document.queryCommandSupported(action);
	                });

	                return support;
	            }
	        }]);

	        return Clipboard;
	    }(_tinyEmitter2.default);

	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;

	        if (!element.hasAttribute(attribute)) {
	            return;
	        }

	        return element.getAttribute(attribute);
	    }

	    module.exports = Clipboard;
	});

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(112)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(undefined, function (module, _select) {
	    'use strict';

	    var _select2 = _interopRequireDefault(_select);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	    };

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */
	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);

	            this.resolveOptions(options);
	            this.initSelection();
	        }

	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */

	        _createClass(ClipboardAction, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	                this.action = options.action;
	                this.container = options.container;
	                this.emitter = options.emitter;
	                this.target = options.target;
	                this.text = options.text;
	                this.trigger = options.trigger;

	                this.selectedText = '';
	            }
	        }, {
	            key: 'initSelection',
	            value: function initSelection() {
	                if (this.text) {
	                    this.selectFake();
	                } else if (this.target) {
	                    this.selectTarget();
	                }
	            }
	        }, {
	            key: 'selectFake',
	            value: function selectFake() {
	                var _this = this;

	                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

	                this.removeFake();

	                this.fakeHandlerCallback = function () {
	                    return _this.removeFake();
	                };
	                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

	                this.fakeElem = document.createElement('textarea');
	                // Prevent zooming on iOS
	                this.fakeElem.style.fontSize = '12pt';
	                // Reset box model
	                this.fakeElem.style.border = '0';
	                this.fakeElem.style.padding = '0';
	                this.fakeElem.style.margin = '0';
	                // Move element out of screen horizontally
	                this.fakeElem.style.position = 'absolute';
	                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	                // Move element to the same position vertically
	                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
	                this.fakeElem.style.top = yPosition + 'px';

	                this.fakeElem.setAttribute('readonly', '');
	                this.fakeElem.value = this.text;

	                this.container.appendChild(this.fakeElem);

	                this.selectedText = (0, _select2.default)(this.fakeElem);
	                this.copyText();
	            }
	        }, {
	            key: 'removeFake',
	            value: function removeFake() {
	                if (this.fakeHandler) {
	                    this.container.removeEventListener('click', this.fakeHandlerCallback);
	                    this.fakeHandler = null;
	                    this.fakeHandlerCallback = null;
	                }

	                if (this.fakeElem) {
	                    this.container.removeChild(this.fakeElem);
	                    this.fakeElem = null;
	                }
	            }
	        }, {
	            key: 'selectTarget',
	            value: function selectTarget() {
	                this.selectedText = (0, _select2.default)(this.target);
	                this.copyText();
	            }
	        }, {
	            key: 'copyText',
	            value: function copyText() {
	                var succeeded = void 0;

	                try {
	                    succeeded = document.execCommand(this.action);
	                } catch (err) {
	                    succeeded = false;
	                }

	                this.handleResult(succeeded);
	            }
	        }, {
	            key: 'handleResult',
	            value: function handleResult(succeeded) {
	                this.emitter.emit(succeeded ? 'success' : 'error', {
	                    action: this.action,
	                    text: this.selectedText,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            }
	        }, {
	            key: 'clearSelection',
	            value: function clearSelection() {
	                if (this.trigger) {
	                    this.trigger.focus();
	                }

	                window.getSelection().removeAllRanges();
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.removeFake();
	            }
	        }, {
	            key: 'action',
	            set: function set() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

	                this._action = action;

	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }

	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }

	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);

	        return ClipboardAction;
	    }();

	    module.exports = ClipboardAction;
	});

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	'use strict';

	function select(element) {
	    var selectedText;

	    if (element.nodeName === 'SELECT') {
	        element.focus();

	        selectedText = element.value;
	    } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        var isReadOnly = element.hasAttribute('readonly');

	        if (!isReadOnly) {
	            element.setAttribute('readonly', '');
	        }

	        element.select();
	        element.setSelectionRange(0, element.value.length);

	        if (!isReadOnly) {
	            element.removeAttribute('readonly');
	        }

	        selectedText = element.value;
	    } else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }

	        var selection = window.getSelection();
	        var range = document.createRange();

	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);

	        selectedText = selection.toString();
	    }

	    return selectedText;
	}

	module.exports = select;

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

	"use strict";

	function E() {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
	  on: function on(name, callback, ctx) {
	    var e = this.e || (this.e = {});

	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });

	    return this;
	  },

	  once: function once(name, callback, ctx) {
	    var self = this;
	    function listener() {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };

	    listener._ = callback;
	    return this.on(name, listener, ctx);
	  },

	  emit: function emit(name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;

	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }

	    return this;
	  },

	  off: function off(name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];

	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
	      }
	    }

	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

	    liveEvents.length ? e[name] = liveEvents : delete e[name];

	    return this;
	  }
	};

	module.exports = E;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(115);
	var delegate = __webpack_require__(116);

	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }

	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }

	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }

	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    } else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    } else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    } else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}

	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);

	    return {
	        destroy: function destroy() {
	            node.removeEventListener(type, callback);
	        }
	    };
	}

	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function (node) {
	        node.addEventListener(type, callback);
	    });

	    return {
	        destroy: function destroy() {
	            Array.prototype.forEach.call(nodeList, function (node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    };
	}

	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}

	module.exports = listen;

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function (value) {
	  return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
	};

	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function (value) {
	  var type = Object.prototype.toString.call(value);

	  return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
	};

	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function (value) {
	  return typeof value === 'string' || value instanceof String;
	};

	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function (value) {
	  var type = Object.prototype.toString.call(value);

	  return type === '[object Function]';
	};

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var closest = __webpack_require__(117);

	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function _delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);

	    element.addEventListener(type, listenerFn, useCapture);

	    return {
	        destroy: function destroy() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    };
	}

	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element|String|Array} [elements]
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(elements, selector, type, callback, useCapture) {
	    // Handle the regular Element usage
	    if (typeof elements.addEventListener === 'function') {
	        return _delegate.apply(null, arguments);
	    }

	    // Handle Element-less usage, it defaults to global delegation
	    if (typeof type === 'function') {
	        // Use `document` as the first parameter, then apply arguments
	        // This is a short way to .unshift `arguments` without running into deoptimizations
	        return _delegate.bind(null, document).apply(null, arguments);
	    }

	    // Handle Selector-based usage
	    if (typeof elements === 'string') {
	        elements = document.querySelectorAll(elements);
	    }

	    // Handle Array-like based usage
	    return Array.prototype.map.call(elements, function (element) {
	        return _delegate(element, selector, type, callback, useCapture);
	    });
	}

	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function (e) {
	        e.delegateTarget = closest(e.target, selector);

	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    };
	}

	module.exports = delegate;

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

	'use strict';

	var DOCUMENT_NODE_TYPE = 9;

	/**
	 * A polyfill for Element.matches()
	 */
	if (typeof Element !== 'undefined' && !Element.prototype.matches) {
	    var proto = Element.prototype;

	    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
	}

	/**
	 * Finds the closest parent that matches a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @return {Function}
	 */
	function closest(element, selector) {
	    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
	        if (typeof element.matches === 'function' && element.matches(selector)) {
	            return element;
	        }
	        element = element.parentNode;
	    }
	}

	module.exports = closest;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * AnchorJS - v3.2.2 - 2016-10-05
	 * https://github.com/bryanbraun/anchorjs
	 * Copyright (c) 2016 Bryan Braun; Licensed MIT
	 */

	/* eslint-env amd, node */

	// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
	(function (root, factory) {
	  'use strict';

	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.AnchorJS = factory();
	    root.anchors = new root.AnchorJS();
	  }
	})(undefined, function () {
	  'use strict';

	  function AnchorJS(options) {
	    this.options = options || {};
	    this.elements = [];

	    /**
	     * Assigns options to the internal options object, and provides defaults.
	     * @param {Object} opts - Options object
	     */
	    function _applyRemainingDefaultOptions(opts) {
	      opts.icon = opts.hasOwnProperty('icon') ? opts.icon : '\uE9CB'; // Accepts characters (and also URLs?), like  '#', '¶', '❡', or '§'.
	      opts.visible = opts.hasOwnProperty('visible') ? opts.visible : 'hover'; // Also accepts 'always' & 'touch'
	      opts.placement = opts.hasOwnProperty('placement') ? opts.placement : 'right'; // Also accepts 'left'
	      opts.class = opts.hasOwnProperty('class') ? opts.class : ''; // Accepts any class name.
	      // Using Math.floor here will ensure the value is Number-cast and an integer.
	      opts.truncate = opts.hasOwnProperty('truncate') ? Math.floor(opts.truncate) : 64; // Accepts any value that can be typecast to a number.
	    }

	    _applyRemainingDefaultOptions(this.options);

	    /**
	     * Checks to see if this device supports touch. Uses criteria pulled from Modernizr:
	     * https://github.com/Modernizr/Modernizr/blob/da22eb27631fc4957f67607fe6042e85c0a84656/feature-detects/touchevents.js#L40
	     * @return {Boolean} - true if the current device supports touch.
	     */
	    this.isTouchDevice = function () {
	      return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
	    };

	    /**
	     * Add anchor links to page elements.
	     * @param  {String|Array|Nodelist} selector - A CSS selector for targeting the elements you wish to add anchor links
	     *                                            to. Also accepts an array or nodeList containing the relavant elements.
	     * @return {this}                           - The AnchorJS object
	     */
	    this.add = function (selector) {
	      var elements,
	          elsWithIds,
	          idList,
	          elementID,
	          i,
	          index,
	          count,
	          tidyText,
	          newTidyText,
	          readableID,
	          anchor,
	          visibleOptionToUse,
	          indexesToDrop = [];

	      // We reapply options here because somebody may have overwritten the default options object when setting options.
	      // For example, this overwrites all options but visible:
	      //
	      // anchors.options = { visible: 'always'; }
	      _applyRemainingDefaultOptions(this.options);

	      visibleOptionToUse = this.options.visible;
	      if (visibleOptionToUse === 'touch') {
	        visibleOptionToUse = this.isTouchDevice() ? 'always' : 'hover';
	      }

	      // Provide a sensible default selector, if none is given.
	      if (!selector) {
	        selector = 'h1, h2, h3, h4, h5, h6';
	      }

	      elements = _getElements(selector);

	      if (elements.length === 0) {
	        return false;
	      }

	      _addBaselineStyles();

	      // We produce a list of existing IDs so we don't generate a duplicate.
	      elsWithIds = document.querySelectorAll('[id]');
	      idList = [].map.call(elsWithIds, function assign(el) {
	        return el.id;
	      });

	      for (i = 0; i < elements.length; i++) {
	        if (this.hasAnchorJSLink(elements[i])) {
	          indexesToDrop.push(i);
	          continue;
	        }

	        if (elements[i].hasAttribute('id')) {
	          elementID = elements[i].getAttribute('id');
	        } else {
	          tidyText = this.urlify(elements[i].textContent);

	          // Compare our generated ID to existing IDs (and increment it if needed)
	          // before we add it to the page.
	          newTidyText = tidyText;
	          count = 0;
	          do {
	            if (index !== undefined) {
	              newTidyText = tidyText + '-' + count;
	            }

	            index = idList.indexOf(newTidyText);
	            count += 1;
	          } while (index !== -1);
	          index = undefined;
	          idList.push(newTidyText);

	          elements[i].setAttribute('id', newTidyText);
	          elementID = newTidyText;
	        }

	        readableID = elementID.replace(/-/g, ' ');

	        // The following code builds the following DOM structure in a more effiecient (albeit opaque) way.
	        // '<a class="anchorjs-link ' + this.options.class + '" href="#' + elementID + '" aria-label="Anchor link for: ' + readableID + '" data-anchorjs-icon="' + this.options.icon + '"></a>';
	        anchor = document.createElement('a');
	        anchor.className = 'anchorjs-link ' + this.options.class;
	        anchor.href = '#' + elementID;
	        anchor.setAttribute('aria-label', 'Anchor link for: ' + readableID);
	        anchor.setAttribute('data-anchorjs-icon', this.options.icon);

	        if (visibleOptionToUse === 'always') {
	          anchor.style.opacity = '1';
	        }

	        if (this.options.icon === '\uE9CB') {
	          anchor.style.font = '1em/1 anchorjs-icons';

	          // We set lineHeight = 1 here because the `anchorjs-icons` font family could otherwise affect the
	          // height of the heading. This isn't the case for icons with `placement: left`, so we restore
	          // line-height: inherit in that case, ensuring they remain positioned correctly. For more info,
	          // see https://github.com/bryanbraun/anchorjs/issues/39.
	          if (this.options.placement === 'left') {
	            anchor.style.lineHeight = 'inherit';
	          }
	        }

	        if (this.options.placement === 'left') {
	          anchor.style.position = 'absolute';
	          anchor.style.marginLeft = '-1em';
	          anchor.style.paddingRight = '0.5em';
	          elements[i].insertBefore(anchor, elements[i].firstChild);
	        } else {
	          // if the option provided is `right` (or anything else).
	          anchor.style.paddingLeft = '0.375em';
	          elements[i].appendChild(anchor);
	        }
	      }

	      for (i = 0; i < indexesToDrop.length; i++) {
	        elements.splice(indexesToDrop[i] - i, 1);
	      }
	      this.elements = this.elements.concat(elements);

	      return this;
	    };

	    /**
	     * Removes all anchorjs-links from elements targed by the selector.
	     * @param  {String|Array|Nodelist} selector - A CSS selector string targeting elements with anchor links,
	     *                                       	  	OR a nodeList / array containing the DOM elements.
	     * @return {this}                           - The AnchorJS object
	     */
	    this.remove = function (selector) {
	      var index,
	          domAnchor,
	          elements = _getElements(selector);

	      for (var i = 0; i < elements.length; i++) {
	        domAnchor = elements[i].querySelector('.anchorjs-link');
	        if (domAnchor) {
	          // Drop the element from our main list, if it's in there.
	          index = this.elements.indexOf(elements[i]);
	          if (index !== -1) {
	            this.elements.splice(index, 1);
	          }
	          // Remove the anchor from the DOM.
	          elements[i].removeChild(domAnchor);
	        }
	      }
	      return this;
	    };

	    /**
	     * Removes all anchorjs links. Mostly used for tests.
	     */
	    this.removeAll = function () {
	      this.remove(this.elements);
	    };

	    /**
	     * Urlify - Refine text so it makes a good ID.
	     *
	     * To do this, we remove apostrophes, replace nonsafe characters with hyphens,
	     * remove extra hyphens, truncate, trim hyphens, and make lowercase.
	     *
	     * @param  {String} text - Any text. Usually pulled from the webpage element we are linking to.
	     * @return {String}      - hyphen-delimited text for use in IDs and URLs.
	     */
	    this.urlify = function (text) {
	      // Regex for finding the nonsafe URL characters (many need escaping): & +$,:;=?@"#{}|^~[`%!']./()*\
	      var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g,
	          urlText;

	      // The reason we include this _applyRemainingDefaultOptions is so urlify can be called independently,
	      // even after setting options. This can be useful for tests or other applications.
	      if (!this.options.truncate) {
	        _applyRemainingDefaultOptions(this.options);
	      }

	      // Note: we trim hyphens after truncating because truncating can cause dangling hyphens.
	      // Example string:                                  // " ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
	      urlText = text.trim() // "⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
	      .replace(/\'/gi, '') // "⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
	      .replace(nonsafeChars, '-') // "⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-"
	      .replace(/-{2,}/g, '-') // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-"
	      .substring(0, this.options.truncate) // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-"
	      .replace(/^-+|-+$/gm, '') // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated"
	      .toLowerCase(); // "⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated"

	      return urlText;
	    };

	    /**
	     * Determines if this element already has an AnchorJS link on it.
	     * Uses this technique: http://stackoverflow.com/a/5898748/1154642
	     * @param    {HTMLElemnt}  el - a DOM node
	     * @return   {Boolean}     true/false
	     */
	    this.hasAnchorJSLink = function (el) {
	      var hasLeftAnchor = el.firstChild && (' ' + el.firstChild.className + ' ').indexOf(' anchorjs-link ') > -1,
	          hasRightAnchor = el.lastChild && (' ' + el.lastChild.className + ' ').indexOf(' anchorjs-link ') > -1;

	      return hasLeftAnchor || hasRightAnchor || false;
	    };

	    /**
	     * Turns a selector, nodeList, or array of elements into an array of elements (so we can use array methods).
	     * It also throws errors on any other inputs. Used to handle inputs to .add and .remove.
	     * @param  {String|Array|Nodelist} input - A CSS selector string targeting elements with anchor links,
	     *                                       	 OR a nodeList / array containing the DOM elements.
	     * @return {Array} - An array containing the elements we want.
	     */
	    function _getElements(input) {
	      var elements;
	      if (typeof input === 'string' || input instanceof String) {
	        // See https://davidwalsh.name/nodelist-array for the technique transforming nodeList -> Array.
	        elements = [].slice.call(document.querySelectorAll(input));
	        // I checked the 'input instanceof NodeList' test in IE9 and modern browsers and it worked for me.
	      } else if (Array.isArray(input) || input instanceof NodeList) {
	        elements = [].slice.call(input);
	      } else {
	        throw new Error('The selector provided to AnchorJS was invalid.');
	      }
	      return elements;
	    }

	    /**
	     * _addBaselineStyles
	     * Adds baseline styles to the page, used by all AnchorJS links irregardless of configuration.
	     */
	    function _addBaselineStyles() {
	      // We don't want to add global baseline styles if they've been added before.
	      if (document.head.querySelector('style.anchorjs') !== null) {
	        return;
	      }

	      var style = document.createElement('style'),
	          linkRule = ' .anchorjs-link {' + '   opacity: 0;' + '   text-decoration: none;' + '   -webkit-font-smoothing: antialiased;' + '   -moz-osx-font-smoothing: grayscale;' + ' }',
	          hoverRule = ' *:hover > .anchorjs-link,' + ' .anchorjs-link:focus  {' + '   opacity: 1;' + ' }',
	          anchorjsLinkFontFace = ' @font-face {' + '   font-family: "anchorjs-icons";' + // Icon from icomoon; 10px wide & 10px tall; 2 empty below & 4 above
	      '   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype");' + ' }',
	          pseudoElContent = ' [data-anchorjs-icon]::after {' + '   content: attr(data-anchorjs-icon);' + ' }',
	          firstStyleEl;

	      style.className = 'anchorjs';
	      style.appendChild(document.createTextNode('')); // Necessary for Webkit.

	      // We place it in the head with the other style tags, if possible, so as to
	      // not look out of place. We insert before the others so these styles can be
	      // overridden if necessary.
	      firstStyleEl = document.head.querySelector('[rel="stylesheet"], style');
	      if (firstStyleEl === undefined) {
	        document.head.appendChild(style);
	      } else {
	        document.head.insertBefore(style, firstStyleEl);
	      }

	      style.sheet.insertRule(linkRule, style.sheet.cssRules.length);
	      style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);
	      style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);
	      style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);
	    }
	  }

	  return AnchorJS;
	});

/***/ })

/******/ });