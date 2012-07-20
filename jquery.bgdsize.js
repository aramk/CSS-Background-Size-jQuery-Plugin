/*
 * CSS Background-Size jQuery Plugin v.1.0
 *
 * By Aram Kocharyan, 2012
 * http://ak.net84.net/
 */

(function($) {

	$.bgdSize = function(el, options) {
		var base = this;

		base.defaults = {
			mode : '', // blank will do nothing, use 'cover' or 'contain'
			repeatCount : 0,
			repeatMax : 10,
			repeatFreq : 100
		};

		base.$el = $(el);
		base.el = el;

		base.init = function() {
			if (typeof options == 'string') {
				base.options = $.extend(base.defaults, {
					mode : options
				});
			} else {
				base.options = $.extend(base.defaults, options);
			}
			base.repeat();
		};

		base.repeat = function() {
			base.options.repeatCount++;
			if (base.options.repeatCount > base.options.repeatMax) {
				return;
			}
			base.scale();
			if (base.done == false) {
				base.done = true;
				setTimeout(function() {
					base.repeat();
				}, base.options.repeatFreq);
			}
		};

		base.scale = function() {
			var mode;
			if (base.options.mode == 'cover') {
				mode = Math.max;
			} else if (base.options.mode == 'contain') {
				mode = Math.min;
			} else {
				return;
			}

			var parent = base.$el.parent();
			if (!parent) {
				return;
			}
			parent.css('overflow', 'hidden');
			var width = base.$el.width();
			var height = base.$el.height();
			if (width == 0 || height == 0) {
				base.done = false;
				return;
			}
			var parentWidth = parent.width();
			var parentHeight = parent.height();

			var widthRatio = parentWidth / width;
			var heightRatio = parentHeight / height;

			var ratio = mode(widthRatio, heightRatio);

			var newWidth = ratio * width;
			var newHeight = ratio * height;
			base.$el.width(newWidth);
			base.$el.height(newHeight);

			base.$el.css('margin-left', (parentWidth - newWidth) / 2);
			base.$el.css('margin-top', (parentHeight - newHeight) / 2);
		};

		base.init();
	};

	$.fn.bgdSize = function(options) {
		return this.each(function() {
			(new $.bgdSize(this, options));
		});
	};

})(jQuery);

