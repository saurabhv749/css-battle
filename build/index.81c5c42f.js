var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function u(n,e){return n.indexOf(e)>-1}function o(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return u(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function s(n,e){var t=c(n),u=a(i.und(t[0])?1:t[0],.1,100),o=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(o/u),d=s/(2*Math.sqrt(o*u)),p=d<1?l*Math.sqrt(1-d*d):0,v=d<1?(d*l-f)/p:-f+l;function h(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(1*Math.cos(p*t)+v*Math.sin(p*t)):(1+v*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?h:function(){var e=r.springs[n];if(e)return e;for(var t=1/6,a=0,u=0;;)if(1===h(a+=t)){if(++u>=16)break}else u=0;var o=a*t*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=.1;function e(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function r(n){return 3*n}function a(n,a,u){return((e(a,u)*n+t(a,u))*n+r(a))*n}function u(n,a,u){return 3*e(a,u)*n*n+2*t(a,u)*n+r(a)}return function(e,t,r,o){if(0<=e&&e<=1&&0<=r&&r<=1){var i=new Float32Array(11);if(e!==t||r!==o)for(var c=0;c<11;++c)i[c]=a(c*n,e,r);return function(n){return e===t&&r===o||0===n||1===n?n:a(s(n),t,o)}}function s(t){for(var o=0,c=1;10!==c&&i[c]<=t;++c)o+=n;--c;var s=o+(t-i[c])/(i[c+1]-i[c])*n,f=u(s,e,r);return f>=.001?function(n,e,t,r){for(var o=0;o<4;++o){var i=u(e,t,r);if(0===i)return e;e-=(a(e,t,r)-n)/i}return e}(t,s,e,r):0===f?s:function(n,e,t,r,u){var o,i,c=0;do{(o=a(i=e+(t-e)/2,r,u)-n)>0?t=i:e=i}while(Math.abs(o)>1e-7&&++c<10);return i}(t,o,o+n,e,r)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(d).forEach((function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}})),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return o(p,a);case"steps":return o(f,a);default:return o(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],u=0;u<t;u++)if(u in n){var o=n[u];e.call(r,o,u,n)&&a.push(o)}return a}function y(n){return n.reduce((function(n,e){return n.concat(i.arr(e)?y(e):e)}),[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some((function(n){return n===e}))}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function O(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function k(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,t,r){return e+e+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(n):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),u=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==o)e=t=r=i;else{var f=i<.5?i*(1+o):i+o-i*o,l=2*i-f;e=s(l,f,u+1/3),t=s(l,f,u),r=s(l,f,u-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function I(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function P(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var u=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(u),u.style.position="absolute",u.style.width=100+t;var c=100/u.offsetWidth;o.removeChild(u);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(P(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function A(n,e,t,r){var a=u(e,"scale")?1:0+function(n){return u(n,"translate")||"perspective"===n?"px":u(n,"rotate")||u(n,"skew")?"deg":void 0}(e),o=E(n).get(e)||a;return t&&(t.transforms.list.set(e,o),t.transforms.last=e),r?D(n,o,r):o}function F(n,e,t,r){switch(T(n,e)){case"transform":return A(n,e,r,t);case"css":return B(n,e,t);case"attribute":return P(n,e);default:return n[e]||0}}function S(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),u=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+u+r;case"-":return a-u+r;case"*":return a*u+r}}function N(n,e){if(i.col(n))return k(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var u=t.getItem(a);a>0&&(r+=L(e,u)),e=u}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*P(n,"r")}(n);case"rect":return function(n){return 2*P(n,"width")+2*P(n,"height")}(n);case"line":return function(n){return L({x:P(n,"x1"),y:P(n,"y1")},{x:P(n,"x2"),y:P(n,"y2")})}(n);case"polyline":return j(n);case"polygon":return function(n){var e=n.points;return j(n)+L(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),u=P(r,"viewBox"),o=a.width,c=a.height,s=t.viewBox||(u?u.split(" "):[0,0,o,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),u=r(),o=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(u.x-a.x)*c;case"y":return(u.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=N(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],(function(n,e,t){return t.indexOf(n)===e}))}function X(n){var e=W(n);return e.map((function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}}))}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map((function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r})).map((function(n){return O(n,t)}))}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=O(function(n){for(var e=m(y(n.map((function(n){return Object.keys(n)}))),(function(n){return i.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),t={},r=function(r){var a=e[r];t[a]=n.map((function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e}))},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map((function(r){var a=function(n,e){var t={};for(var r in n){var a=I(n[r],e);i.arr(a)&&1===(a=a.map((function(n){return I(n,e)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),u=a.value,o=i.arr(u)?u[1]:u,c=C(o),s=F(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(u)?u[0]:f,d=C(l)||C(s),p=c||d;return i.und(o)&&(o=f),a.from=$(l,p),a.to=$(S(o,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(u),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var u="";r.list.forEach((function(n,e){u+=e+"("+n+") "})),n.style.transform=u}}};function z(n,e){X(n).forEach((function(n){for(var t in e){var r=I(e[t],n),a=n.target,u=C(r),o=F(a,t,u,n),i=S(N(r,u||C(o)),o),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}}))}function _(n,e){return m(y(n.map((function(n){return e.map((function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!i.und(n)}))}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map((function(n){return r(n)+n.duration}))):e.duration,a.delay=t?Math.min.apply(Math,n.map((function(n){return r(n)+n.delay}))):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map((function(n){return r(n)+n.duration-n.endDelay}))):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var u=K[a];u.paused?(K.splice(a,1),r--):(u.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach((function(n){return n._onDocumentVisibility()})),U()))})),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,u=0,o=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise((function(n){return s=n}));return n.finished=e,e}var l=function(t){var r=w(n,t),a=w(e,t),u=Z(a,t),o=X(t.targets),i=_(o,u),c=R(i,a),s=J;return J++,O(r,{id:s,children:[],animatables:o,animations:i,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(t);f(l);function d(){var n=l.direction;"alternate"!==n&&(l.direction="normal"!==n?"normal":"reverse"),l.reversed=!l.reversed,r.forEach((function(n){return n.reversed=l.reversed}))}function p(n){return l.reversed?l.duration-n:n}function v(){u=0,o=p(l.currentTime)*(1/en.speed)}function h(n,e){e&&e.seek(n-e.timelineOffset)}function g(n){for(var e=0,t=l.animations,r=t.length;e<r;){var u=t[e],o=u.animatable,i=u.tweens,c=i.length-1,s=i[c];c&&(s=m(i,(function(e){return n<e.end}))[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,d=isNaN(f)?1:s.easing(f),p=s.to.strings,v=s.round,h=[],g=s.to.numbers.length,y=void 0,b=0;b<g;b++){var M=void 0,x=s.to.numbers[b],w=s.from.numbers[b]||0;M=s.isPath?V(s.value,d*x,s.isPathTargetInsideSVG):w+d*(x-w),v&&(s.isColor&&b>2||(M=Math.round(M*v)/v)),h.push(M)}var O=p.length;if(O){y=p[0];for(var k=0;k<O;k++){p[k];var C=p[k+1],I=h[k];isNaN(I)||(y+=C?I+C:I+" ")}}else y=h[0];Q[u.type](o.target,u.property,y,o.transforms),u.currentValue=y,e++}}function y(n){l[n]&&!l.passThrough&&l[n](l)}function b(n){var e=l.duration,t=l.delay,v=e-l.endDelay,m=p(n);l.progress=a(m/e*100,0,100),l.reversePlayback=m<l.currentTime,r&&function(n){if(l.reversePlayback)for(var e=c;e--;)h(n,r[e]);else for(var t=0;t<c;t++)h(n,r[t])}(m),!l.began&&l.currentTime>0&&(l.began=!0,y("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,y("loopBegin")),m<=t&&0!==l.currentTime&&g(0),(m>=v&&l.currentTime!==e||!e)&&g(e),m>t&&m<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,y("changeBegin")),y("change"),g(m)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,y("changeComplete")),l.currentTime=a(m,0,e),l.began&&y("update"),n>=e&&(o=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(u=i,y("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&d()):(l.paused=!0,l.completed||(l.completed=!0,y("loopComplete"),y("complete"),!l.passThrough&&"Promise"in window&&(s(),f(l)))))}return l.reset=function(){var n=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===n,l.remaining=l.loop,r=l.children;for(var e=c=r.length;e--;)l.children[e].reset();(l.reversed&&!0!==l.loop||"alternate"===n&&1===l.loop)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=v,l.set=function(n,e){return z(n,e),l},l.tick=function(n){i=n,u||(u=i),b((i+(o-u))*en.speed)},l.seek=function(n){b(p(n))},l.pause=function(){l.paused=!0,v()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,K.push(l),v(),U())},l.reverse=function(){d(),l.completed=!l.reversed,v()},l.restart=function(){l.reset(),l.play()},l.remove=function(n){rn(W(n),l)},l.reset(),l.autoplay&&l.play(),l}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var u=r[a],o=u.animations;tn(n,o),o.length||u.children.length||r.splice(a,1)}t.length||r.length||e.pause()}en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;){rn(e,K[t])}},en.get=F,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,u=e.axis,o=e.from||0,c="first"===o,s="center"===o,f="last"===o,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(o=0),s&&(o=(i-1)/2),f&&(o=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:o%a[0],M=s?(a[1]-1)/2:Math.floor(o/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),O=Math.sqrt(x*x+w*w);"x"===u&&(O=-x),"y"===u&&(O=-w),m.push(O)}else m.push(Math.abs(o-h));y=Math.max.apply(Math,m)}r&&(m=m.map((function(n){return r(n/y)*y}))),"reverse"===t&&(m=m.map((function(n){return u?n<0?-1*n:-n:Math.abs(y-n)})))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var u=K.indexOf(t),o=t.children;function c(n){n.passThrough=!0}u>-1&&K.splice(u,1);for(var s=0;s<o.length;s++)c(o[s]);var f=O(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:S(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),o.push(d);var p=R(o,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var an=en;function un(n){an({targets:n.target.children,scale:[.9,1.1,1],rotate:[-5,5,0],elasticity:.5,duration:1200,easing:"easeInOutSine"})}document.querySelectorAll(".main").forEach((n=>n.addEventListener("mouseover",un,{capture:!0,passive:!1})));