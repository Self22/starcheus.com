!function(o,t){"use strict";o.fn.fixer=function(i){return i=o.extend({},o.fn.fixer.options,i),this.each(function(){var n=o(this),s=n.parent(),e=o(t);e.bind("scroll load",function(){var o=(i.horizontal,s.offset()[i.horizontal?"left":"top"]),t=n[i.horizontal?"outerWidth":"outerHeight"](),r=s[i.horizontal?"outerWidth":"outerHeight"](),l=e[i.horizontal?"scrollLeft":"scrollTop"]();l>=o-i.gap&&r+o-i.gap>=l+t?(n.css({position:"fixed"}).css(i.horizontal?{left:i.gap}:{top:i.gap}),i.isFixed()):l<o?n.css({position:"absolute"}).css(i.horizontal?{left:0}:{top:0}):n.css({position:"absolute"}).css(i.horizontal?{left:r-t}:{top:r-t})})})},o.fn.fixer.options={gap:0,horizontal:!1,isFixed:o.noop}}(jQuery,window);
//# sourceMappingURL=jquery.fixer.js.map
