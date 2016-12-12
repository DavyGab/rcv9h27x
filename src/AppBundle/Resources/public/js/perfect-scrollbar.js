"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0},c=function(){var a=0;return function(){var b=a;return a+=1,".perfect-scrollbar-"+b}}();a.fn.perfectScrollbar=function(d,e){return this.each(function(){var f=a.extend(!0,{},b),g=a(this);if("object"==typeof d?a.extend(!0,f,d):e=d,"update"===e)return g.data("perfect-scrollbar-update")&&g.data("perfect-scrollbar-update")(),g;if("destroy"===e)return g.data("perfect-scrollbar-destroy")&&g.data("perfect-scrollbar-destroy")(),g;if(g.data("perfect-scrollbar"))return g.data("perfect-scrollbar");g.addClass("ps-container");var l,m,n,o,p,q,r,s,u,v,h=a("<div class='ps-scrollbar-x-rail'></div>").appendTo(g),i=a("<div class='ps-scrollbar-y-rail'></div>").appendTo(g),j=a("<div class='ps-scrollbar-x'></div>").appendTo(h),k=a("<div class='ps-scrollbar-y'></div>").appendTo(i),t=parseInt(h.css("bottom"),10),w=parseInt(i.css("right"),10),x=c(),y=function(a,b){var c=a+b,d=o-u;v=c<0?0:c>d?d:c;var e=parseInt(v*(q-o)/(o-u),10);g.scrollTop(e),h.css({bottom:t-e})},z=function(a,b){var c=a+b,d=n-r;s=c<0?0:c>d?d:c;var e=parseInt(s*(p-n)/(n-r),10);g.scrollLeft(e),i.css({right:w-e})},A=function(a){return f.minScrollbarLength&&(a=Math.max(a,f.minScrollbarLength)),a},B=function(){h.css({left:g.scrollLeft(),bottom:t-g.scrollTop(),width:n,display:l?"inherit":"none"}),i.css({top:g.scrollTop(),right:w-g.scrollLeft(),height:o,display:m?"inherit":"none"}),j.css({left:s,width:r}),k.css({top:v,height:u})},C=function(){n=g.width(),o=g.height(),p=g.prop("scrollWidth"),q=g.prop("scrollHeight"),!f.suppressScrollX&&n+f.scrollXMarginOffset<p?(l=!0,r=A(parseInt(n*n/p,10)),s=parseInt(g.scrollLeft()*(n-r)/(p-n),10)):(l=!1,r=0,s=0,g.scrollLeft(0)),!f.suppressScrollY&&o+f.scrollYMarginOffset<q?(m=!0,u=A(parseInt(o*o/q,10)),v=parseInt(g.scrollTop()*(o-u)/(q-o),10)):(m=!1,u=0,v=0,g.scrollTop(0)),v>=o-u&&(v=o-u),s>=n-r&&(s=n-r),B()},D=function(){var b,c;j.bind("mousedown"+x,function(a){c=a.pageX,b=j.position().left,h.addClass("in-scrolling"),a.stopPropagation(),a.preventDefault()}),a(document).bind("mousemove"+x,function(a){h.hasClass("in-scrolling")&&(z(b,a.pageX-c),a.stopPropagation(),a.preventDefault())}),a(document).bind("mouseup"+x,function(a){h.hasClass("in-scrolling")&&h.removeClass("in-scrolling")}),b=c=null},E=function(){var b,c;k.bind("mousedown"+x,function(a){c=a.pageY,b=k.position().top,i.addClass("in-scrolling"),a.stopPropagation(),a.preventDefault()}),a(document).bind("mousemove"+x,function(a){i.hasClass("in-scrolling")&&(y(b,a.pageY-c),a.stopPropagation(),a.preventDefault())}),a(document).bind("mouseup"+x,function(a){i.hasClass("in-scrolling")&&i.removeClass("in-scrolling")}),b=c=null},F=function(a,b){var c=g.scrollTop();if(0===a){if(!m)return!1;if(0===c&&b>0||c>=q-o&&b<0)return!f.wheelPropagation}var d=g.scrollLeft();if(0===b){if(!l)return!1;if(0===d&&a<0||d>=p-n&&a>0)return!f.wheelPropagation}return!0},G=function(){var a=!1;g.bind("mousewheel"+x,function(b,c,d,e){f.useBothWheelAxes?m&&!l?e?g.scrollTop(g.scrollTop()-e*f.wheelSpeed):g.scrollTop(g.scrollTop()+d*f.wheelSpeed):l&&!m&&(d?g.scrollLeft(g.scrollLeft()+d*f.wheelSpeed):g.scrollLeft(g.scrollLeft()-e*f.wheelSpeed)):(g.scrollTop(g.scrollTop()-e*f.wheelSpeed),g.scrollLeft(g.scrollLeft()+d*f.wheelSpeed)),C(),a=F(d,e),a&&b.preventDefault()}),g.bind("MozMousePixelScroll"+x,function(b){a&&b.preventDefault()})},H=function(){var b=!1;g.bind("mouseenter"+x,function(a){b=!0}),g.bind("mouseleave"+x,function(a){b=!1});var c=!1;a(document).bind("keydown"+x,function(a){if(b){var d=0,e=0;switch(a.which){case 37:d=-3;break;case 38:e=3;break;case 39:d=3;break;case 40:e=-3;break;case 33:e=9;break;case 32:case 34:e=-9;break;case 35:e=-o;break;case 36:e=o;break;default:return}g.scrollTop(g.scrollTop()-e*f.wheelSpeed),g.scrollLeft(g.scrollLeft()+d*f.wheelSpeed),c=F(d,e),c&&a.preventDefault()}})},I=function(){var a=function(a){a.stopPropagation()};k.bind("click"+x,a),i.bind("click"+x,function(a){var b=parseInt(u/2,10),c=a.pageY-i.offset().top-b,d=o-u,e=c/d;e<0?e=0:e>1&&(e=1),g.scrollTop((q-o)*e)}),j.bind("click"+x,a),h.bind("click"+x,function(a){var b=parseInt(r/2,10),c=a.pageX-h.offset().left-b,d=n-r,e=c/d;e<0?e=0:e>1&&(e=1),g.scrollLeft((p-n)*e)})},J=function(){var b=function(a,b){g.scrollTop(g.scrollTop()-b),g.scrollLeft(g.scrollLeft()-a),C()},c={},d=0,e={},f=null,h=!1;a(window).bind("touchstart"+x,function(a){h=!0}),a(window).bind("touchend"+x,function(a){h=!1}),g.bind("touchstart"+x,function(a){var b=a.originalEvent.targetTouches[0];c.pageX=b.pageX,c.pageY=b.pageY,d=(new Date).getTime(),null!==f&&clearInterval(f),a.stopPropagation()}),g.bind("touchmove"+x,function(a){if(!h&&1===a.originalEvent.targetTouches.length){var f=a.originalEvent.targetTouches[0],g={};g.pageX=f.pageX,g.pageY=f.pageY;var i=g.pageX-c.pageX,j=g.pageY-c.pageY;b(i,j),c=g;var k=(new Date).getTime();e.x=i/(k-d),e.y=j/(k-d),d=k,a.preventDefault()}}),g.bind("touchend"+x,function(a){clearInterval(f),f=setInterval(function(){return Math.abs(e.x)<.01&&Math.abs(e.y)<.01?void clearInterval(f):(b(30*e.x,30*e.y),e.x*=.8,void(e.y*=.8))},10)})},K=function(){g.bind("scroll"+x,function(a){C()})},L=function(){g.unbind(x),a(window).unbind(x),a(document).unbind(x),g.data("perfect-scrollbar",null),g.data("perfect-scrollbar-update",null),g.data("perfect-scrollbar-destroy",null),j.remove(),k.remove(),h.remove(),i.remove(),j=k=n=o=p=q=r=s=t=u=v=w=null},M=function(b){g.addClass("ie").addClass("ie"+b);var c=function(){var b=function(){a(this).addClass("hover")},c=function(){a(this).removeClass("hover")};g.bind("mouseenter"+x,b).bind("mouseleave"+x,c),h.bind("mouseenter"+x,b).bind("mouseleave"+x,c),i.bind("mouseenter"+x,b).bind("mouseleave"+x,c),j.bind("mouseenter"+x,b).bind("mouseleave"+x,c),k.bind("mouseenter"+x,b).bind("mouseleave"+x,c)},d=function(){B=function(){j.css({left:s+g.scrollLeft(),bottom:t,width:r}),k.css({top:v+g.scrollTop(),right:w,height:u}),j.hide().show(),k.hide().show()}};6===b&&(c(),d())},N="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,O=function(){var a=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);a&&"msie"===a[1]&&M(parseInt(a[2],10)),C(),K(),D(),E(),I(),N&&J(),g.mousewheel&&G(),f.useKeyboard&&H(),g.data("perfect-scrollbar",g),g.data("perfect-scrollbar-update",C),g.data("perfect-scrollbar-destroy",L)};return O(),g})}});