
;(function(__context){
    var module = {
        id : "980161e2dd8119467ce528f9e9ea9c3d" ,
        filename : "qapp.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    (function(e){var t={id:"681795b0d9a0040aa35c149c2d7efbea",filename:"qapp.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){"use strict";function a(e,n){t[e]=n()}function f(e){return t[e]}function M(){}function _(e){var t=[],n;for(n in e){t.push(n)}return t}function P(e,t){var n=D[e===o||e!==e?e:v.call(e)]||e&&e.nodeName||"#";if(e===u){n="Undefined"}else if(n.charAt(0)==="#"){if(e==e.document&&e.document!=e){n="Window"}else if(e.nodeType===9){n="Document"}else if(e.callee){n="Arguments"}else if(isFinite(e.length)&&e.item){n="NodeList"}else{n=v.call(e).slice(8,-1)}}if(t){return t===n}return n}function H(e){return P(e,"Object")}function B(e){return P(e,"Array")}function j(e){return P(e,"String")}function F(e){return P(e,"Function")}function I(e){if(e&&e.nodeType===1){if(e instanceof Node){return i}return y.test(v.call(e))}return s}function q(e){return P(e,"Number")}function R(e){return P(e,"Object")&&Object.getPrototypeOf(e)===p}function U(e){try{return JSON.stringify(e)==="{}"}catch(t){return FLASE}}function z(e,t,n){var r;for(r in t){if(n&&(R(t[r])||B(t[r]))){if(R(t[r])&&!R(e[r])){e[r]={}}if(B(t[r])&&!B(e[r])){e[r]=[]}z(e[r],t[r],n)}else if(t[r]!==u){e[r]=t[r]}}}function W(e){var t,n=m.call(arguments,1);if(typeof e=="boolean"){t=e;e=n.shift()}n.forEach(function(n){z(e,n,t)});return e}function X(e,t){var n;for(n in e){t.call(e,n,e[n])}}function V(e){if(!e)return s;var t=e.length;if(t===t>>>0){try{return m.call(e)}catch(n){}}return s}function $(e,t){return n.setTimeout(e,t||0)}function J(e,t){var n={},r=0;for(;r<t.length;r++){n[t[r]]=e[r]}return n}function K(e,t){var n=[],r=0;for(;r<t.length;r++){n[r]=e[t[r]]}return n}function Q(){return E++}function G(){return S++}function Y(e){return e.replace(/[-_][^-_]/g,function(e){return e.charAt(1).toUpperCase()})}function Z(e){return e.replace(/([a-z\d])([A-Z])/g,"$1-$2").replace(/\_/g,"-").toLowerCase()}function et(e){var t;for(t in e){e[t]=o}}function tt(e){return e===u||e===o}function nt(e,t){e=(e===o?"":e).toString().trim();return t?encodeURIComponent(e):e}function rt(e,t){var n=[],r,i,s;for(r in e){if(tt(e[r])){n=n.concat(r)}else if(B(e[r])){for(i=0,s=e[r].length;i<s;i++){if(!F(e[r][i])){n.push(r+"="+nt(e[r][i],t))}}}else if(!F(e[r])&&e[r]!==o&&e[r]!==u){n.push(r+"="+nt(e[r],t))}}return n.join("&")}function it(e,t){return tt(e)?e:t?decodeURIComponent(e):e}function st(e,t){var n=e.trim().split("&"),r={},i=0,s=n.length;for(;i<s;i++){if(n[i]){var o=n[i].split("="),u=o[0],a=o[1];if(!(u in r)){r[u]=it(a,t)}else{r[u]=[].concat(r[u],it(a,t))}}}return r}function ot(e){var t=s,n;return function(){if(t)return n;t=i;n=e.apply(this,arguments);e=o;return n}}function ft(){var e=function(){};W(e.prototype,at);return new e}function lt(){function f(s,f,l){if(F(r)&&!n){n=i;r(u)}if(F(s)){if(e==="resolved"){s.apply(o,t)}else if(e==="pending"){a.add("resolve",s)}}if(F(f)){if(e==="rejected"){f.apply(o,t)}else if(e==="pending"){a.add("reject",f)}}if(F(l)){a.add("notify",l)}}var e="pending",t,n=s,r,u={},a=function(){var e={resolve:[],reject:[],notify:[]};return{add:function(t,n){e[t].push(n)},remove:function(t,n){var r=e[t].indexOf(n);if(r>-1){e[t].splice(r,1)}},clear:function(t){e[t].length=0},fire:function(t,n){e[t].forEach(function(e){e.apply(o,n)})},destroy:function(){e.resolve.length=0;e.reject.length=0;e.notify.length=0}}}();u.enabled=i;u.all=function(e){f(e,e);return u};u.done=function(e){f(e);return u};u.fail=function(e){f(o,e);return u};u.progress=function(e){f(o,o,e);return u};u.unProgress=function(e){a.remove("notify",e);return u};u.then=function(e,t,n){f(e,t,n);return u};u.resolve=function(){if(e==="pending"){e="resolved";t=m.call(arguments);a.fire("resolve",t)}return u};u.reject=function(){if(e==="pending"){e="rejected";t=m.call(arguments);a.fire("reject",t)}return u};u.notify=function(){a.fire("notify",m.call(arguments));return u};u.state=function(){return e};u.startWith=function(e){r=e;return u};u.destroy=function(){u.enabled=s;u.notify("destroy");e=o;t=o;n=o;r=o;u.destroy=function(){};u=o;a.destroy();a=o};return u}function ct(e,t,n){var r=new lt,i=n?e:e.slice(0),s=[],u=-1,a=function(e){a=t&&t.length?function(e){return t[e]}:function(e){return e};return a(e)},f=function(){u++;var n=i.shift();if(n&&F(n.all)){n.all(function(t){r.notify(a(u),t,e);s[u]=t;f()})}else if(n){if(F(n)){var l=n(s[u-1],s);if(l&&F(l.all)){l.all(function(t){r.notify(a(u),t,e);s[u]=t;f()})}else{r.notify(a(u),l,e);s[u]=l;f()}}else{r.notify(a(u),n,e);s[u]=n;f()}}else{if(t&&t.length){s=J(s,t)}r.resolve.call(o,s)}};return r.startWith(f)}function ht(e,t){var n=new lt,r=e.slice(0),i=[],s=0,a=function(){if(s===r.length){if(t&&t.length){i=J(i,t)}n.resolve.call(o,i)}},f=function(){r.forEach(function(e,t){if(e&&F(e.all)){i[t]=u;e.all(function(e){i[t]=e;s++;a()})}else{i[t]=e;s++}});a()};return n.startWith(f)}function pt(e){if(g.test(r.readyState)&&r.body){$(e,0)}else{xt(r,"DOMContentLoaded",function(){e()},s)}}function dt(e){var t,n,s="div";[["li","ul"],["tr","tbody"],["td","tr"],["th","tr"],["tbody","table"],["option","select"]].some(function(t){if(e.indexOf("<"+t[0])===0){s=t[1];return i}});t=r.createElement(s);t.innerHTML=e;n=V(t.children);t=r.createDocumentFragment();n.forEach(function(e){t.appendChild(e)});return{box:t,children:n}}function vt(e,t){t=[].concat(t);t.forEach(function(t){e.appendChild(t)})}function mt(e,t,n){n=n?n.toLowerCase():"beforeend";switch(n){case"beforebegin":e.parentNode.insertBefore(t,e);break;case"afterbegin":e.insertBefore(t,e.firstChild);break;case"beforeend":e.appendChild(t);break;case"afterend":if(e.nextSibling){e.parentNode.insertBefore(t,e.nextSibling)}else{e.parentNode.appendChild(t)}break}return t}function gt(e){if(e&&e.parentNode){e.parentNode.removeChild(e)}}function yt(e,t,n){var r=n===s||n===null||n===void 0;var o=T[t];if(typeof e[o]==="boolean"){e[o]=!!n;if(!n){r=i}}if(r){return e.removeAttribute(t)}var u=b.test(e)?s:t in e.cloneNode(s);if(u){e[t]=n}else{e.setAttribute(t,n)}}function bt(e,t){if(j(t)){if(arguments.length>2){yt(e,t,arguments[2])}else{return e.getAttribute(t)}}else{X(t,function(t,n){yt(e,t,n)})}}function wt(e,t){if(e&&e.style){if(j(t)){if(arguments.length>2){var r=arguments[2];if(k.test(t)){e.style[L]=t+"("+r+")"}else{t=Y(t);if(r||r===0){e.style[t]=r}else{e.style.removeProperty(t)}}}else{var i=n.getComputedStyle(e,o),s;if(i){s=i[Y(t)]}return s}}else{var u=[],a="";X(t,function(e,t){if(k.test(e)){a+=e+"("+t+") "}else{u.push(Z(e)+":"+t)}});if(a.length){u.push(Z(L)+":"+a)}e.style.cssText+=";"+u.join(";")+";"}}}function Et(e,t){if(e&&e.style){[].concat(t).forEach(function(t){e.style.removeProperty(t);e.style.removeProperty(A+t)})}}function St(e){if(!e.target){e.target=e.srcElement||document}if(e.target.nodeType==3){e.target=e.target.parentNode}if(e.pageX===o&&e.clientX!==o){var t=r.documentElement,n=r.body;e.pageX=e.clientX+(t.scrollLeft||n&&n.scrollLeft||0)-(t.clientLeft||n&&n.clientLeft||0);e.pageY=e.clientY+(t.scrollTop||n&&n.scrollTop||0)-(t.clientTop||n&&n.clientTop||0)}return e}function xt(e,t,n,r){e.addEventListener(t,n,!!r)}function Tt(e,t,n){e.removeEventListener(t,n)}function Nt(e,t,n){var i=r.createEvent("Events");i.initEvent(t,true,true);W(i,n);e.dispatchEvent(i)}function Ct(e,t){e.className=(e.className+w+t).split(/\s+/).filter(function(e,t,n){return n.lastIndexOf(e)===t}).join(w)}function kt(e,t){t=w+t.replace(/\s+/g,w)+w;e.className=e.className.split(/\s+/).filter(function(e){return t.indexOf(w+e+w)===-1}).join(w)}function Lt(e){var t=r.createElement("style");t.type="text/css";t.innerHTML=e;r.querySelector("head").appendChild(t)}function Ot(e){var t;if(h.ios&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}}function Mt(e){var t=r.activeElement;e=e||r.body;if(t&&At(e,t)&&F(t.blur)){t.blur()}}function _t(e){function t(t){var n=e.documentElement,r=e.body;return Math.max(r["scroll"+t],n["scroll"+t],r["offset"+t],n["offset"+t],n["client"+t])}return{width:t("Width"),height:t("Height")}}function Dt(e){function t(t){return e.document.documentElement["client"+t]}return{width:t("Width"),height:t("Height")}}function Pt(e){var t=P(e),n;switch(t){case"Document":n=_t(e);break;case"Window":n=Dt(e);break;default:n={width:parseInt(wt(e,"width"),10),height:parseInt(wt(e,"height"),10)}}return n}function Ht(e){var t=e.getBoundingClientRect(),r=e.ownerDocument.body,i=e.ownerDocument.documentElement,s=Math.max(n.pageYOffset||0,i.scrollTop,r.scrollTop),o=Math.max(n.pageXOffset||0,i.scrollLeft,r.scrollLeft),u=i.clientTop||r.clientTop||0,a=i.clientLeft||r.clientLeft||0;return{left:t.left+o-a,top:t.top+s-u}}function Bt(e,t){return{left:e.left-t.left,top:e.top-t.top}}function jt(e){if(!At(e.ownerDocument.body,e)){return{top:NaN,left:NaN}}return arguments.length>1?Bt(Ht(e),Ht(arguments[1])):Ht(e)}function Ft(e){var t={};if(e){if(e.dataset){W(t,e.dataset)}else{var n=e.attributes;for(var r=0,i=n.length;r<i;r++){var s=n[r].name,o=n[r].value;if(s.indexOf("data-")===0){s=Y(s.substring(5));t[s]=o}}}}return t}function It(e,t,n){if(F(e)){return e.apply(t,V(n)||[])}}function qt(e){var t=M;e=V(e);if(e){e.some(function(e){if(F(e)){t=e;return i}})}return t}function Wt(e,t,n){function f(n,u,f){function c(){var t=n,s=Ft(t);if(r[u]&&r[u][l]){return r[u][l]({evt:f,el:t,box:e,data:s},s)}else{return i}}var l=o;if(zt(t,n)){return s}else if(!At(e,n)){return s}else{while(n&&n!==e){if(n.nodeType===1){l=n.getAttribute(a);if(l&&c()===s){break}}n=n.parentNode}}}if(!t){t=[]}t=[].concat(t);var r={},u=function(e){var t=e.target,n=e.type;f(t,n,e)},a=n||"action-type";var l={};l.add=function(t,n,i,s){if(!r[n]){r[n]={};xt(e,n,u,!!s)}var o=r[n];o[t]=i};l.remove=function(t,n){if(r[n]){delete r[n][t];if(U(r[n])){delete r[n];Tt(e,n,u)}}};l.pushExcept=function(e){t.push(e)};l.removeExcept=function(e){if(!e){t=[]}else{for(var n=0,r=t.length;n<r;n+=1){if(t[n]===e){t.splice(n,1)}}}};l.clearExcept=function(){t=[]};l.fireAction=function(t,n,i,s){var u={};if(s&&s.data){u=s.data}if(r[n]&&r[n][t]){r[n][t]({evt:i,el:o,box:e,data:u,fireFrom:"fireAction"},u)}};l.fireInject=function(t,n,i){var s=t.getAttribute(a),o=Ft(t);if(s&&r[n]&&r[n][s]){r[n][s]({evt:i,el:t,box:e,data:o,fireFrom:"fireInject"},o)}};l.fireDom=function(e,t,n){f(e,t,n||{})};l.destroy=function(){for(var t in r){for(var n in r[t]){delete r[t][n]}delete r[t];Tt(e,t,u)}};return l}function $t(e,t){var n=J(Xt.exec(e)||[],Vt);n.query=n.query?st(n.query.substring(1),t):{};n.hash=n.hash?st(n.hash.substring(1),t):{};n.getQuery=function(e){return n.query[e]};n.getHash=function(e){return n.hash[e]};n.setQuery=function(e,t){if(t===u){n.query[e]=o}else{n.query[e]=t}return n};n.setHash=function(e,t){if(t===u){n.hash[e]=o}else{n.hash[e]=t}return n};n.toUrl=function(e){var t=n.protocol+"://",r=rt(n.query,e),i=rt(n.hash,e);if(n.protocol&&n.protocol.toLowerCase()==="file"){t+="/"}return t+n.hostname+(n.port||"")+n.path+(n.name||"")+(r?"?"+r:"")+(i?"#"+i:"")};return n}function Qt(e,t,n){var r;Kt.insertBefore(e,Kt.firstChild);if(n){r=$(function(){e.onload=o;gt(e);t.reject({type:"Timeout"})},n)}e.onload=function(){if(r){clearTimeout(r)}e.onload=o;e.onerror=o;t.resolve()};e.onerror=function(){if(r){clearTimeout(r)}gt(e);e.onload=o;e.onerror=o;t.reject({type:"Error"})}}function Yt(e,t,n){var r=W({},Jt,n),i=Gt[e]&&Gt[e](t,r);if(i&&(r.onComplete||r.onFail||r.onTimeout)){i.then(r.onComplete,function(e){if(e.type==="Timeout"&&F(r.onTimeout)){r.onTimeout(e)}if(e.type==="Error"&&F(r.onFail)){r.onFail(e)}})}return i}function sn(e,t){console[e].apply(console,["["+e.toUpperCase()+"]"].concat(V(t)))}function mn(e){dn.done(e)}var e={version:"0.4.7"},t=e._packages={};var n=window,r=document,i=true,s=false,o=null,u=void 0;var l={app:"qapp-app",view:"qapp-view",widget:"qapp-widget",role:"qapp-role"};var c={type:"touch",indexView:"index",animate:i,defaultAnimate:"moveEnter",autoInit:i,hashRouter:i,hashSupport:{all:i,exist:[],except:[]},customRoot:i,appRoot:o,screen:{rotate:s,largeChange:i},gesture:{open:i,ctrl:i,longTap:i,autoBlur:i},root:{top:0,right:0,bottom:0,left:0},logLevel:1};var h=function(){var e={};var t=navigator.userAgent,r=navigator.platform,u=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=t.match(/(iPad).*OS\s([\d_]+)/),f=t.match(/(iPod)(.*OS\s([\d_]+))?/),l=t.match(/(iPhone\sOS)\s([\d_]+)/);e.ios=e.android=e.iphone=e.ipad=e.ipod=s;if(u){e.os="android";e.osVersion=u[2];e.android=i}if(a||l||f){e.os="ios";e.ios=i}if(l){e.osVersion=l[2].replace(/_/g,".");e.iphone=i;e.imobile=i}if(a){e.osVersion=a[2].replace(/_/g,".");e.ipad=i}if(f){e.osVersion=f[3]?f[3].replace(/_/g,"."):o;e.ipod=i;e.imobile=i}if(e.ios&&e.osVersion&&t.indexOf("Version/")>=0){if(e.osVersion.split(".")[0]==="10"){e.osVersion=t.toLowerCase().split("version/")[1].split(" ")[0]}}if(e.osVersion){e.osVersionN=parseInt(e.osVersion.match(/\d+\.?\d*/)[0])}e.pixelRatio=n.devicePixelRatio||1;e.retina=e.pixelRatio>=2;e.pc=r.indexOf("Mac")===0||r.indexOf("Win")===0||r.indexOf("linux")===0&&!e.android;return e}();var p=Object.prototype,d=Array.prototype,v=p.toString,m=d.slice,g=/complete|loaded|interactive/,y=/Element$/,b=/^\[object SVG\w*Element\]$/,w=" ",E=1,S=1e3;var x="autofocus,autoplay,async,allowTransparency,checked,controls,declare,disabled,defer,defaultChecked,defaultSelected,contentEditable,isMap,loop,multiple,noHref,noResize,noShade,open,readOnly,selected",T={};x.replace(/\w+/g,function(e){T[e.toLowerCase()]=e});var N=["Webkit","","Moz","O"],C=r.createElement("div"),k=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,L="",A="",O;N.every(function(e){if(C.style[e+"TransitionProperty"]!==u){if(e){A="-"+e.toLowerCase()+"-"}O=e.toLowerCase();return s}});C=o;L=A+"transform";var D={"[object HTMLDocument]":"Document","[object HTMLCollection]":"NodeList","[object StaticNodeList]":"NodeList","[object IXMLDOMNodeList]":"NodeList","[object DOMWindow]":"Window","[object global]":"Window","null":"Null",NaN:"NaN","undefined":"Undefined"};"Boolean,Number,String,Function,Array,Date,RegExp,Window,Document,Arguments,NodeList,Null,Undefined".replace(/\w+/ig,function(e){D["[object "+e+"]"]=e});var ut=function(e,t){var n,r=-1,i=e.length,s=1;while(++r<i&&s){n=e[r];s&=n.callback.apply(n.ctx,t)!==false}return!!s};var at={on:function(e,t,n){this._events=this._events||{};this._events[e]=this._events[e]||[];var r=this._events[e];r.push({callback:t,context:n,ctx:n||this});return this},once:function(e,t,n){var r=this;var i=ot(function(){r.off(e,i);t.apply(this,arguments)});i._callback=t;return this.on(e,i,n)},off:function(e,t,n){if(!this._events)return this;var r,i,s,o,a,f,l,c;if(!e&&!t&&!n){this._events=u;return this}o=e?[e]:_(this._events);for(a=0,f=o.length;a<f;a++){e=o[a];s=this._events[e];if(s){this._events[e]=r=[];if(t||n){for(l=0,c=s.length;l<c;l++){i=s[l];if(t&&t!==i.callback&&t!==i.callback._callback||n&&n!==i.context){r.push(i)}}}if(!r.length)delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this;var t=m.call(arguments,1),n=this._events[e],r=this._events.all,i=1;if(n){i&=ut(n,t)}if(r&&i){i&=ut(r,t)}return!!i}};var At=r.compareDocumentPosition?function(e,t){return!!(e.compareDocumentPosition(t)&16)}:function(e,t){return e!==t&&(e.contains?e.contains(t):i)};var Rt=function(){function T(){v=o;m=o;g=o}function N(t,n){if(n){e.forEach(function(e){t[e]=n[e]})}return t}function C(e){return V(e).filter(function(e){return e.identifier===g})[0]}function k(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}function L(e,t){var n=Math.atan2(t,e)/Math.PI*180;return n<0?n+360:n}function A(e,t){var n=[],r=Math.abs(e),i=Math.abs(t),s=Math.tan(l/180*Math.PI),o=r>i;if(r>0||i>0){n.push(o?e>0?"right":"left":t>0?"down":"up");if(o&&i/r>s){n.push(t>0?"down":"up")}else if(!o&&r/i>s){n.push(e>0?"right":"left")}}return n}function O(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return i}break;case"input":if(h.ipad&&h.osVersionN===6&&e.type==="file"||e.disabled){return i}break;case"label":case"iframe":case"video":return i}return/\bneedsclick\b/.test(e.className)}function M(e){switch(e.nodeName.toLowerCase()){case"textarea":return i;case"select":return!h.android;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return s}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}}function _(e){if(h.android&&e.nodeName.toLowerCase()==="select"){return"mousedown"}return"click"}function D(e,t){var u;if(r.activeElement&&r.activeElement!==e){r.activeElement.blur()}u=r.createEvent("MouseEvents");u.initMouseEvent(_(e),i,i,n,1,t.screenX,t.screenY,t.clientX,t.clientY,s,s,s,s,0,o);u.forwardedTouchEvent=i;if(x){e.dispatchEvent(u)}}function P(e){if(e.control!==u){return e.control}if(e.htmlFor){return r.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")}function H(e){var t=r.createEvent("HTMLEvents");t.initEvent(e,i,i);return t}function B(e,t,n,r,i){var s=H(e);s.offsetX=t;s.offsetY=n;s.degree=L(t,n);s.directions=A(t,n);if(i){s.duration=i;s.speedX=s.offsetX/i;s.speedY=s.offsetY/i}return N(s,r)}function j(e,t){var n=v.origin,r=t.clientX-n.clientX,i=t.clientY-n.clientY;if(v.status==="tapping"||v.status==="pressing"){if(k(r,i)>f){v.status="panning";w=s;E=o;v.startMoveTime=e.timeStamp;clearTimeout(v.handler);v.handler=o;I(B("pan",r,i,t))}}else if(v.status==="panning"){I(B("pan",r,i,t))}}function F(e,t){if(v.handler){clearTimeout(v.handler);v.handler=o}if(v.status==="panning"){var n=v.origin,r=t.clientX-n.clientX,i=t.clientY-n.clientY,s=e.timeStamp-v.startMoveTime;I(B("panend",r,i,t,s));if(s<p&&k(r,i)>d){I(B("flick",r,i,t,s))}}else{if(v.status==="tapping"){I(N(H("tap"),t))}else if(v.status==="pressing"){I(N(H("pressend"),t));if(a){I(N(H("tap"),t))}}}}function I(e){if(x&&m){m.dispatchEvent(e)}}function q(e){var r,u,a=e.changedTouches,f=e.timeStamp;if(f-b<t){e.preventDefault();return s}if(a.length>1){return i}r=a[0];if(r){m=e.target;g=r.identifier;v={origin:N({},r),timestamp:f,status:"tapping",handler:setTimeout(function(){v.status="pressing";I(N(H("press"),v.origin));clearTimeout(v.handler);v.handler=o},t)};if(!h.pc){if(h.ios){u=n.getSelection();if(u.rangeCount&&!u.isCollapsed){return i}if(g===y){e.preventDefault();return s}y=g}w=i;E=m}}return i}function R(e){var t=C(e.changedTouches);if(t&&v){j(e,t)}return i}function U(e){var r=C(e.changedTouches),u=e.timeStamp,a,f,l;if(r&&v){F(e,r);l=v.timestamp;T();if(w){if(u-b<t){S=i;return i}if(u-l>t){return i}S=s;b=u;a=E.nodeName.toLowerCase();if(a==="label"){f=P(E);if(f){Ot(f);if(h.android){return s}E=f}}else if(M(E)){if(u-l>100||h.ios&&n.top!==n&&a==="input"){E=o;return s}Ot(E);D(E,r);if(!h.ios||a!=="select"){E=o;e.preventDefault()}return s}if(!O(E)){e.preventDefault();D(E,r)}return s}}return i}function z(e){var t=C(e.changedTouches);if(t&&v){E=o;F(e,t);T()}return i}function W(e){if(!E){return i}if(e.forwardedTouchEvent){return i}if(!e.cancelable){return i}if(!O(E)||S){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=i}e.stopPropagation();e.preventDefault();return s}return i}function X(e){var t;if(w){E=o;w=s;return i}if(e.target.type==="submit"&&e.detail===0){return i}t=W(e);if(!t){E=o}return t}var e=["screenX","screenY","clientX","clientY","pageX","pageY"],t=200,a=s,f=10,l=15,p=300,d=100;var v,m,g,y,b=0,w,E,S=s,x=i;pt(function(){var e=r.body;if(!c.gesture||c.gesture.open!==false){if(!h.pc){if(h.android){xt(e,"moveover",W,i);xt(e,"mousedown",W,i);xt(e,"mouseup",W,i)}xt(e,"click",X,i)}xt(e,"touchstart",q,i);xt(e,"touchmove",R,i);xt(e,"touchend",U,i);xt(e,"touchcancel",z,i)}});return{allowLongTap:function(){a=i},on:function(){x=i},off:function(){x=s}}}();var Ut=function(){function f(e){var t=e.parentNode;if(t){wt(t,{"transform-style":"preserve-3d","backface-visibility":"hidden"})}}function l(e){var t=e.parentNode;Et(t,["transform-style","backface-visibility"])}var e=200,t=25,n="linear";var r,o,u,a;r=A+"transition-property";o=A+"transition-duration";a=A+"transition-delay";u=A+"transition-timing-function";return function(c,h,p,d,v){function x(e){if(e){if(e.target!==c){return}}Tt(c,g,x);S=i;$(function(){if(w){l(c)}Et(c,"transition");E.resolve()})}var m=arguments.length,g=O+"TransitionEnd",y={},b=[],w="";if(m<3){p=e}if(m<4){d=n}if(m<5){v=0}X(h,function(e,t){if(k.test(e)){w+=e+"("+t+") "}else{y[e]=t}b.push(Z(e))});if(w){y[L]=w;b.push(L)}if(p>0){y[r]=b.join(", ");y[o]=p/1e3+"s";y[a]=v/1e3+"s";y[u]=d}var E=new lt;var S=s;if(p>0){xt(c,g,x,s);$(function(){if(!S){x()}},p+v+t*2)}$(function(){if(w){f(c)}wt(c,y);E.notify("start")},t);if(p<=0){$(x)}return E}}();var zt=function(e,t){for(var n=0,r=e.length;n<r;n+=1){if(At(e[n],t)){return i}}return s};var Xt=/(\w+):\/\/\/?([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(\?[^#]*)?(#.*)?/i,Vt=["url","protocol","hostname","port","path","name","query","hash"];var Jt={charset:"UTF-8",timeout:30*1e3,onComplete:o,onTimeout:o,onFail:o};var Kt=r.getElementsByTagName("head")[0];var Gt={script:function(e,t){var n=new lt,i=t.charset,s=t.timeout,o=r.createElement("script");o.type="text/javascript";o.charset=i;return n.startWith(function(){n.notify("element",o);Qt(o,n,s);o.src=e})},style:function(e,t){var n=new lt,i=t.charset,s=t.timeout,o=r.createElement("link");o.type="text/css";o.charset=i;o.rel="stylesheet";return n.startWith(function(){Qt(o,n,s);o.href=e})},image:function(e,t){var n=new lt,r=new Image,i=t.timeout,s=o;r.onload=function(){r.onload=o;r.onerror=o;if(s){clearTimeout(s)}n.resolve(r)};r.onerror=function(){r.onload=o;r.onerror=o;if(s){clearTimeout(s)}n.reject({type:"Error"})};if(i){s=$(function(){r.onload=o;r.onerror=o;if(s){clearTimeout(s)}n.reject({type:"Timeout"})},i)}return n.startWith(function(){r.src=e})}};var Zt="onorientationchange"in n,en="resize",tn=ft(),nn=function(e){return e.width>e.height?"landscape":"portrait"};tn.get=function(){return nn(Pt(n))};pt(function(){var e=Pt(n);n.addEventListener(en,function(){var t=Pt(n);if(e.width!==t.width&&e.height!==t.height){e=t;tn.trigger("change",{type:en,width:t.width,height:t.height,orientation:nn(t)})}})});var rn=["info","debug","warn","error"];rn.forEach(function(e,t){sn[e]=function(){if(t>=c.logLevel){sn(e,arguments)}}});var on=$t(location.href).query.logLevel;if(on){c.logLevel=parseInt(on)}a("fetchNode",function(){function e(e){e.resolve()}return function(t){var n=t.options;return(new lt).startWith(function(r){if(n.html||F(n.fetch)){if(n.html){e(r)}else if(n.fetch.length){n.fetch.call(t,function(t){n.html=t||"";e(r)})}else{n.html=n.fetch.call(t)||"";e(r)}}else{n.html="";e(r)}})}});a("display",function(){return{show:function(e,t,n,r){var i=this;if(i.isShow){wt(i.root,W({width:"100%",height:"100%",zIndex:G()},n||t));i.trigger("refresh")}else{i.once("completed",function(){wt(i.root,W({width:"100%",height:"100%",zIndex:G()},t));i.trigger("beforeShow");if(c.animate&&n){Ut(i.root,n,r).done(function(){i.trigger("show")})}else{wt(i.root,n||{});i.trigger("show")}});i.renderTo(I(e)?e:c.appRoot)}return i},hide:function(){var e=this;if(e.isShow){e.trigger("beforeHide");e.trigger("hide")}return e}}});a("pluginM",function(){var t=e._plugins={},n=[];return{add:function(e,n,r){var i=[].concat(e);i.forEach(function(e){if(!t[e]){t[e]={options:n,adapter:r}}else{}})},exists:function(e){return!!t[e]},get:function(e){return t[e]},setOpt:function(e,n){if(t[e]){W(i,t[e].options,n)}},getGlobal:function(){return n},setGlobal:function(e){n=n.concat(e)}}});a("widgetM",function(){var t=e._widgets={};return{add:function(e,n,r){t[e]={eventName:r&&(j(r)?r:"tap"),adapter:n}},exists:function(e){return!!t[e]},isEvent:function(e){return!!t[e].eventName},get:function(e){return t[e]},show:function(e,n,r,i){if(t[e]){if(I(n)){return t[e].adapter(n,r,i)}else{return t[e].adapter(o,n,r)}}}}});a("module",function(){function r(e,n,r,i){return(new lt).startWith(function(s){t.get(e,function(e){if(s.enabled){if(e){var t=function(t){if(t==="destroy"){e.destroy();e=o;s.reject()}};e.parentModule=r;e.parentView=r.parentView;e.on("loadStart",function(){e.mergeParam(n);e.initialShow=!!i});e.on("completed",function(){s.resolve(e)});e.renderTo(r.container);e.on("destroy",function(){e=o});s.progress(t);s.all(function(){s.unProgress(t)})}else{s.resolve(o)}}})})}function u(e,t){var n=e.options.views;n.forEach(function(r,i){if(j(r)){n[i]=r={tag:r,name:r,param:{}}}if(r.name.indexOf(":")===-1&&t){r.name+=":"+t}e.addView(r.tag,r.name,r.param)})}function a(t){t.options.plugins.forEach(function(n){var r=typeof n==="string"?n:n.name,i=n.options||{};if(e.exists(r)){t.plugins[r]=e.get(r)(t,i,c)}})}function l(e){if(e&&e.options&&e.options.styles){wt(e.root,e.options.styles)}}function h(e,t){var r=this;r.options=W(i,{},n,e);r.param={};r.isReady=s;r.container=o;r.curTag=r.options.defaultTag||o;r.tagList=[];r.parentView=o;r.views={};r.plugins={};r.renderAll=r.options.renderAll;r.renderDefers=[];r.renderAllDefer=o;r.renderOneDefer=o;r.pushMessageTimer=o;u(r,t);a(r)}var e=f("pluginM"),t;var n={name:o,defaultTag:o,container:o,renderAll:s,ready:o,views:[],plugins:[],renderEvent:i};W(h.prototype,{renderTo:function(e){var t=this,n=t.options.renderEvent,s;t.container=e;if(t.renderAll){t.renderAllDefers=ct(t.renderDefers,t.tagList).done(function(){t.trigger("loaded")}).progress(function(e,r){if(r){if(n){r.trigger("beforeShow")}t.views[e].entity=r;if(n){r.trigger("show")}if(e!=t.curTag){wt(r.root,"display","none")}}})}else if(t.curTag){s=t.views[t.curTag];if(s){t.renderOneDefer=r(s.name,s.param,t,i).done(function(e){if(n){e.trigger("beforeShow")}s.entity=e;if(n){e.trigger("show")}t.trigger("loaded")})}}else{t.trigger("loaded")}if(!t.isReady){t.isReady=i;t.trigger("ready");It(t.options.ready,t)}},mergeParam:function(e){var n=this,r;W(i,n.param,e);if(n.curTag&&n.views[n.curTag]){r=n.views[n.curTag];t.get(r.name,r.param).invoke("mergeParam",n.param)}},addView:function(e,t,n){var i=this;e=e||t;if(i.renderAll&&!i.curTag){i.curTag=e}i.views[e]={name:t,param:n};i.tagList.push(e);if(i.renderAll){i.renderDefers.push(r(t,n,i,i.curTag===e))}},launch:function(e,t){var n=this,i=n.views[n.curTag],s=n.views[e],u,a;if(n.renderOneDefer){n.renderOneDefer.destroy();n.renderOneDefer=o}if(s){u=i&&i.entity;a=s.entity;if(n.curTag===e&&u){u.mergeParam(W({},n.param,t));u.trigger("refresh")}else{if(n.renderAll){a.mergeParam(W({},n.param,t));if(u){wt(u.root,"display","none")}Et(a.root,["visibility","display"]);l(a);a.notify("actived");if(u){u.notify("deactived")}n.curTag=e;n.trigger("launch",e,t)}else{if(u){u.trigger("beforeHide")}a=s.entity=o;n.renderOneDefer=r(s.name,W({},s.param,n.param,t),n).done(function(r){if(r){a=s.entity=r;a.mergeParam(W({},n.param,t));a.trigger("beforeShow");if(u){wt(u.root,"display","none")}Et(a.root,["visibility","display"]);l(a);if(u){u.trigger("hide")}a.trigger("show");if(u){u.destroy();i.entity=o}n.trigger("launch",e,t)}}).fail(function(){if(u){u.destroy();i.entity=o}})}n.curTag=e}}},getCurViewOpt:function(){return this.views[this.curTag]},getCurView:function(){var e=this,t=e.curTag,n=e.views;return t&&n[t]?n[t].entity:o},pushMessage:function(e,t){var n=this;if(n.curTag){if(n.views[n.curTag].entity){n.views[n.curTag].entity.trigger(e,t)}else{(n.renderOneDefer||n.renderAllDefer).done(function(){if(n.views[n.curTag].entity){n.views[n.curTag].entity.trigger(e,t)}})}}},destroy:function(){var e=this;X(e.views,function(e,t){if(t.entity&&t.entity.destroy){t.entity.destroy()}t.entity=o});e.tagList.length=0;e.renderDefers.forEach(function(e){e.destroy()});e.renderDefers.length=0;if(e.renderAllDefer){e.renderAllDefer.destroy()}if(e.renderOneDefer){e.renderOneDefer.destroy()}clearTimeout(e.pushMessageTimer);X(e.plugins,function(e,t){if(t&&F(t.destroy)){t.destroy()}});et(e);e.destroyed=i}},at);h.inject=function(e){t=e};return h});a("view",function(){function d(){return r.createElement(l.view)}function v(e){var t=e.options.init;X(t,function(t,n){e[t]=F(n)?n.bind(e):n})}function m(e){X(e.options.bindEvents,function(t,n){if(F(n)){e.on(t,n.bind(e))}})}function g(t,n){var r=t.options,s;r.subViews.forEach(function(e){r.modules.unshift({name:e.name+"-module",defaultTag:"index",container:e.container,ready:o,views:[{tag:"index",name:e.name,param:e.param}],plugins:[],renderEvent:e.renderEvent})});r.modules.forEach(function(r){t.hasModule=i;s=new e(r,n);s.parentView=t;t.modules[r.name]=s})}function y(e){var t=n.getGlobal();t.concat(e.options.plugins).forEach(function(t){var r=j(t)?t:t.name,s=t.options||e.options[Y(r)+"Options"]||{},o=n.get(r),u;if(o&&F(o.adapter)){u=F(s)?s:W(i,{},o.options,s);e.plugins[r]=o.adapter(e,u,c)}})}function b(e,t){var n={param:{}};X(Ft(e),function(e,r){if(!e.indexOf(t)){var i=e.substring(t.length).replace(/\w/i,function(e){return e.toLowerCase()});if(!i.indexOf("param")){n.param[i.substring(5).replace(/\w/i,function(e){return e.toLowerCase()})]=r}else{n[i]=r}}});return n}function w(e,t){t=(j(t)?e.root.querySelector(t):t)||e.root;V(t.querySelectorAll("["+l.widget+"]")).forEach(function(t){var n=bt(t,l.widget),r,i,a,f,c;if(u.exists(n)){i=u.get(n).eventName;f=u.get(n).adapter;a=function(){c=b(t,n);r=f(t,c,e);if(c.id){e.widgets[c.id]=r}};if(u.isEvent(n)){c=b(t,n);i=c.eventType||i;xt(t,i,a,s);e.on("destroy",function(){Tt(t,i,a)})}else{if(e.isReady){a()}else{e.on("ready",function(){a()})}}e.on("destroy",function(){if(r&&F(r.destroy)){r.destroy()}r=o;f=o;c=o;a=o})}})}function E(e){e.isReady=i;e.trigger("ready");It(e.options.ready,e);e.trigger("completed")}function S(e){return e.split("-")[0].split(":")[1]}function x(e){var t=this;t.options=W(i,{},p,e);t.name=t.options.name||"view-"+Q();t.container=o;t.isReady=s;t.isShow=s;t.locked=s;t.root=o;t.nodes=o;t.param={};t.parentModule=o;t.parentView=o;t.hasModule=s;t.modules={};t.plugins={};t.widgets={};t.extra=W({},t.options.extra);t.renderEventTimer=o;t.renderDeferred=new lt;t.moduleDeferreds=[];t.modulParallelDeferred=o;v(t);m(t);g(t,S(t.name));y(t);t.on("show",function(){t.isShow=i});t.on("hide",function(){t.isShow=s})}var e=f("module"),t=f("fetchNode"),n=f("pluginM"),u=f("widgetM"),a=f("display");var h=10;var p={init:{},html:o,fetch:o,classNames:[],attrs:{},styles:{},destroyDom:i,supportHash:i,ready:o,modules:[],subViews:[],plugins:[],bindEvents:{},extra:{}};W(x.prototype,at,{renderTo:function(e){var n=this;if(!n.locked){n.locked=i;n.container=e;if(!n.isReady){n.root=d();bt(n.root,"qapp-name",n.name);Ct(n.root,n.options.classNames.join(" "));bt(n.root,n.options.attrs);wt(n.root,n.options.styles);n.trigger("loadStart");t(n).done(function(){n.html=n.options.html;n.trigger("loadEnd");n.container.appendChild(n.root);n.renderHTML().done(function(){n.trigger("rendered");if(n.hasModule){X(n.modules,function(e,t){n.moduleDeferreds.push((new lt).startWith(function(e){t.once("loaded",function(){e.resolve()});t.renderTo(t.options.container&&n.root.querySelector(t.options.container)||n.root)}))});n.modulParallelDeferred=ht(n.moduleDeferreds).done(function(){n.trigger("loaded");n.locked=s;E(n)})}else{n.trigger("loaded");n.locked=s;E(n)}})})}else{n.trigger("rendered");n.container.appendChild(n.root);n.trigger("loaded");n.locked=s;n.trigger("completed")}}return n},renderHTML:function(e){var t=this,n=t.renderDeferred,r=function(e){if(t.renderEventTimer){clearTimeout(t.renderEventTimer);t.renderEventTimer=o}t.renderEventTimer=$(function(){if(t.root){n.resolve()}},h)};t.html=e||t.html;t.nodes=dt(t.html).children;if(t.nodes.length){xt(t.root,"DOMNodeInserted",r,s);vt(t.root,t.nodes);n.done(function(){Tt(t.root,"DOMNodeInserted",r);w(t)});t.renderEventTimer=$(function(){if(t.root){n.resolve()}},h)}else{if(t.root){w(t);n.resolve()}}return n},staticBuild:function(e){var t=this;if(e&&I(e)){t.trigger("loadStart");t.html=e.innerHTML||"";t.trigger("loadEnd");t.container=e.parentNode||e;t.root=e;bt(t.root,"qapp-name",t.name);Ct(t.root,t.options.classNames.join(" "));bt(t.root,t.options.attrs);wt(t.root,t.options.styles);t.nodes=V(e.children)||[];w(t);t.trigger("rendered");t.trigger("loaded");E(t);t.trigger("completed");t.trigger("beforeShow");t.trigger("show");t.trigger("actived")}return t},show:a.show,hide:a.hide,close:a.hide,mergeParam:function(e){var t=this;W(i,t.param,e);X(t.modules,function(e,n){n.mergeParam(t.param)});return t},getInnerView:function(e){var t=this,n,r;if(e){for(n in t.modules){r=t.modules[n].getCurViewOpt();if(r.entity&&r.name===e){return r.entity}}}return o},fn:function(e){var t=this;return function(){return F(t[e])?t[e].apply(this,V(arguments)):o}},frontOn:function(e,t){var n=this,r=n._events[e]=n._events[e]||[];r.unshift({callback:t,ctx:n});return n},dispatch:function(){var e=this,t=e.parentView,n=V(arguments);if(e.trigger.apply(e,n)&&t){if(t.isReady&&!t.locked){t.trigger.apply(t,n)}else{t.on("completed",function(){t.trigger.apply(t,n)})}}},notify:function(){var e=this,t=V(arguments),n;if(e.trigger.apply(e,t)&&e.hasModule){X(e.modules,function(e,r){n=r.getCurView();if(n){n.notify.apply(n,t)}})}},scanWidget:function(e){w(this,e)},showWidget:function(e,t,n){if(widgets[e]){if(I(t)){return widgets[e].adapter(t,n,this)}else{return widgets[e].adapter(o,t,n,this)}}},destroy:function(){var e=this;if(e.options.destroyDom){gt(e.root)}clearTimeout(e.renderEventTimer);if(e.renderDeferred){e.renderDeferred.destroy()}if(e.hasModule){e.moduleDeferreds.forEach(function(e){e.destroy()});e.moduleDeferreds.length=0;if(e.modulParallelDeferred){e.modulParallelDeferred.destroy()}}X(e.modules,function(e,t){t.destroy()});X(e.plugins,function(e,t){if(t&&F(t.destroy)){t.destroy()}});X(e.widgets,function(e,t){if(t&&F(t.destroy)){t.destroy()}});e.trigger("destroy");e.off();et(e);e.destroyed=i;return e}});return x});a("taskQ",function(){function u(r){e.trigger("running",i);ct(r,[],i).done(function(){n.forEach(function(e){if(e&&F(e.destroy)){e.destroy()}});n=o;e.trigger("running",s)}).progress(function(){t.trigger("ev")})}var t=ft(),n=o,r=500;var a={push:function(e){if(n){n.push(e)}else{n=[e];u(n)}},pushTask:function(e){a.push((new lt).startWith(function(t){try{e(t)}catch(n){}$(function(){if(t&&F(t.resolve)){t.resolve()}},r)}))},addListener:function(e){t.on("ev",e)}};return a});a("viewM",function(){function a(e){}function l(e){return e.split(":")[0]}function h(e,n,r){var i;if(u[e]&&u[e][n]){r(u[e][n])}else if(s[e]){i=u[e][n]=new t(W({name:e+":"+n},s[e]));i.on("destroy",function(){u[e][n]=o});r(i)}else{a(e)}}function p(e,n){var r=o;if(u[e]&&u[e][n]){r=u[e][n]}else if(s[e]){r=u[e][n]=new t(W({name:e+":"+n},s[e]));r.on("destroy",function(){u[e][n]=o})}else{a(e)}return r}function d(e){var t=e.split(":");return{name:t[0],index:t[1]||0}}function v(e,t){X(t,function(t,n){if(t.indexOf("on")===0&&F(n)&&t!="onComplete"){e.on(t.substring(2).replace(/\w/,function(e){return e.toLowerCase()}),n)}})}function m(e){return W.apply(o,[i,{}].concat(V(e).map(function(e){return j(e)?s[e]||{}:e})))}var t=f("view"),n=f("module"),r=f("taskQ");var s=e._viewOptionsMap={},u=e._viewMap={};var g={define:function(e){if(j(e)){s[e]=m(arguments);u[e]=[]}},undefine:function(e){if(j(e)){s[e]=o}},getOptions:function(e){return s[e]},create:function(){var e=new t(m(arguments)),n=e.name;if(n){var r=d(n);u[r.name][r.index]=e;e.on("destroy",function(){u[r.name][r.index]=o})}return e},structure:function(e,t){t=t||{};t.ani=j(t.ani)?{name:t.ani}:t.ani||{};var n=W(i,{},g.getOptions(e.split(":")[0])),r=t.ani.name||c.defaultAnimate;n.name=e;n.init=n.init||{};n.init.param=t.param||{};n.styles=W(n.styles||{},t.styles);n.classNames=(n.classNames||[]).concat(t.classNames);if(r){n.plugins=(n.plugins||[]).concat([{name:r,options:W({},g.getExtraOption(e,r),t.ani)}])}var s=g.create(n);s.param=W({},t.param);v(s,t);s.complete=function(e){if(F(t.onComplete)){t.onComplete.call(s,e)}};s.on("callback",s.complete);return s},build:function(e){var n=m(V(arguments).slice(1)),r;if(e&&I(e)){n.name=bt(e,"qapp-name");r=new t(n);r.staticBuild(e)}return r},show:function(e,t){var n=V(arguments);var i=g.structure(e,t);r.pushTask(function(e){i.once("show",function(){e.resolve()});i.once("hide",function(){$(function(){if(F(i.destroy)){i.destroy()}})});i.show.apply(i,n.slice(2))});return i},exists:function(e){return!!s[e]},get:function(e,t){var n={},r;if(j(e)){n=d(e)}if(F(t)){h(n.name,n.index,function(e){t(e)})}else{r={invoke:function(){var e=V(arguments),t=e.shift();h(n.name,n.index,function(n){It(n[t],n,e)});return r},pushMessage:function(e,t){var i=u[n.name]&&u[n.name][n.index];if(i){i.trigger(e,t)}return r}};return r}},getSync:function(e){var t={},n;if(j(e)){n=e.split(":");t={name:n[0],index:n[1]||0}}return p(t.name,t.index)},getExtraOption:function(e,t){var n,r=s[l(e)];if(r){n=r.extra&&r.extra[c.type]||r.extra||{};return n[t]}},getHashParams:function(e){var t=s[l(e)];return t?t.hashParams||[]:[]},getRealName:l};n.inject(g);return g});a("viewQ",function(){function p(){var e=a[0],t;if(e&&e.root){t=parseInt(wt(e.root,"z-index"))}return(t||G())-1}function d(){if(a.length){return a[a.length-1]}}function v(e){var t=a.length,n;for(n=t-1;n>-1;n--){if(a[n].name==e){return n}}return-1}function m(e){if(e.indexOf(":new")>-1){return e.replace(":new",":"+Q())}else{for(var t=0,n=a.length;t<n;t++){if(e==a[t].name.split(":")[0]){return false}}return e}}function g(e,t,n,r,i){t=t||"show";l(function(s){e.on(t.replace("_",""),function(){$(function(){s.resolve().done(i)})});if(F(n)){n()}else{e[t](r);if(t.indexOf("hide")>-1&&!r){s.resolve()}}})}function y(t){g(t,"_hide",function(){e.hide.call(t)})}function b(e){var t=e.hide,n=e.close,r=e._events.actived=e._events.actived||[];r.unshift({callback:function(){w.preView=w.curView;w.curView=e.name},ctx:e});e.once("hide",function(){var t=a.indexOf(e);if(t>-1){a.splice(t,1);$(function(){if(F(e.destroy)){e.destroy()}})}});e.hide=e._hide=function(n){if(n===i){t.call(e)}else{l(function(n){e.once("hide",function(){$(n.resolve)});t.call(e)})}};e.close=e._close=function(t){if(t===s){n.call(e)}else{l(function(t){e.once("hide",function(){$(t.resolve)});n.call(e)})}}}var e=f("display"),t=f("taskQ"),n=f("viewM"),r;var a=[],l=t.pushTask,h=n.getRealName;var w={curView:o,preView:o,add:function(e,t,r,i){l(function(s){e=m(e);var o=F(i)?i:M;if(e){if(n.exists(h(e))){w[r?"unshift":"push"](n.structure(e,t),o);s.resolve()}else{s.resolve().done(o)}}else{s.resolve().done(o)}})},push:function(e,t){b(e);e.once("show",function(){var t=d();$(function(){e.notify("actived");if(t){t.notify("deactived")}});a.push(e)});g(e,"show",o,s,function(){t(e)})},unshift:function(e,t){b(e);e.once("show",function(){a.unshift(e);if(a.length===1){$(function(){e.notify("actived")})}});e.on("beforeShow",function(){e.initialShow=s;wt(e.root,"z-index",p()-1)});g(e,"show",function(){e.show(i)},s,function(){t(e)})},pop:function(e,t,n){var r=d();if(e===u){e=1}if(r&&e>0){var f=function(i){var s=a.length,u=s-e,f;if(u>=0){for(f=u;f<s-1;f++){y(a[f])}}if(u>0&&e>0){r.once("hide",function(){var e=a[u-1];if(e){if(t&&t.data){e.notify("receiveData",t)}e.notify("actived")}})}g(r,"_hide",o,i,n)};l(function(t){if(e<a.length){f(i)}else if(e==a.length){if(h(a[0].name)!==c.indexView){w.add(c.indexView,{},i);l(function(e){f(s);e.resolve()})}else if(a.length>1){e=a.length-1;f(i)}}t.resolve()})}},remove:function(e,t,n){l(function(r){var i=v(e);if(i>-1){w.pop(a.length-i,t,n)}r.resolve()})},backTo:function(e,t,n,s){l(function(o){var u=v(e),f=a.length;if(u===-1){w.add(h(e),{param:n},i,function(e){r._reset(e);w.pop(f,t,s)})}else{f=a.length-u-1;w.pop(f,t,s)}o.resolve()})},refresh:function(e){var t=d();if(t){t.notify("receiveData",e)}},clear:function(e,t){l(function(n){w.pop(a.length,e,t);n.resolve()})},inject:function(e){r=e}};return w});a("history",function(){function _(e){if(e.length>2&&e.lastIndexOf(":0")==e.length-2){return e.substring(0,e.length-2)}return e}function D(e){e=k(e);var n=t.getOptions(e);if(!n||n.supportHash===s){return s}if(m.all&&m.except.indexOf(e)>-1){return s}if(!m.all&&m.exist.indexOf(e)===-1){return s}return i}function P(e){return e[e.length-1]}function H(e,t){C.trigger("change",{type:e,data:W(i,{},t)})}function B(){var e={},t=R();if(t.view&&t.view.indexOf("__")){if(p){E=S}else{if(t.query[S]){w=t.query[S];E=b+w}else{do{w=Q();E=b+w}while(d[E]);z(t,i)}}try{e=JSON.parse(d.getItem(E))||{}}catch(n){}if(e.basePath==A){x=V(e.history);T=e.index;if(x[T]!==t.view){x=[];T=0;d.removeItem(E)}}if(!x.length){x.push(t.view)}}}function j(){try{d.setItem(E,JSON.stringify({basePath:A,history:x,index:T}))}catch(e){}}function F(e,t){if(t){x[T]=e}else{T++;x=x.slice(0,T);x.push(e)}j()}function I(){var e=a.hash,t=e.indexOf("#"),n;e=t>-1?e.slice(t+1):"";n=e.indexOf("#");if(n>-1){e=e.slice(0,n)}return e}function q(e,t){var n=A+"#"+e+"#";O=e;if(g){l[(t?"replace":"push")+"State"]({path:n},r.title,n)}else{if(t){a.replace(n)}else{a.href=n}}}function R(e){e=e||I();var t=e.split("?"),n=_(t[0])||c.indexView,r=st(t[1]||"",i);return{view:n,query:r}}function U(){if(M){return M}M=v?function(){var e=R();e[S]=u;return e}():P(N);return M}function z(e,t){e=e||{};var n=e.view||c.indexView,r=e.query||{},s=U(),u;t=t||n==s.view;M=o;if(v){if(!p){r[S]=w}u=rt(r,i);q(n+(u?"?"+u:""),t);F(n,t)}else{var a={view:n,query:r};if(t){N[N.length-1]=a}else{N.push(a)}}}function X(e){var t=e?R(e):U(),n=t.view,r=x.indexOf(n),i;if(r===-1){F(n);H("forward",{info:t})}else{i=r-T;T=r;if(i<0){if(!D(t.view)){l.back()}else{H("back",{info:t,param:L.shift()})}}else if(i===0){H("refresh",{info:t})}else if(i===1){if(!D(t.view)){l.go(T<x.length-1?1:-1)}else{H("forward",{info:t})}}else{$(function(){a.reload()})}j()}}function J(){n.addEventListener(y,function(){if(O!==I()){O=I();M=o;X()}})}var t=f("viewM");var a=n.location,l=n.history,h=n.sessionStorage,p=!!h,d=p?n.sessionStorage:n.localStorage,v=i,m=o,g=!!l.pushState,y=g?"popstate":"hashchange",b="QAPP_HISTORY_",w=0,E="",S="_history",x=[],T=0,N=[],C=ft(),k=t.getRealName,L=[],A=function(){var e=a.href,t=e.indexOf("#");if(t>-1){e=e.slice(0,t)}return e}(),O,M;var K={basePath:A,start:function(e){var t;v=!!e;O=I();if(v){m=c.hashSupport;t=U();B();if(!D(t.view)){if(T>0){T--;M=o;l.back();j();$(function(){K.start(e)},100);return}else{t={view:c.indexView,query:{}};z(t,i)}}H("init",{info:U()});J()}else{t={view:c.indexView,query:R().query};N.push(t);H("init",{info:t})}},analyzeHash:R,setHashInfo:z,getHashInfo:U,refreshParam:function(e){var t=U();t.query=W(t.query,e);z(t,i)},back:function(t,n){var r=U().view,s={view:k(r),name:r,data:n};t=t||1;if(v){L.push(s);if(T>t-1){l.go(-t)}else{var u=c.indexView;if(T===0&&u===r){e.trigger("close");l.go(-1)}else{if(T>0){l.go(-T)}z({view:u},i);H("home",{info:U()})}}}else{var a=N.length-t;if(a<1){a=1}N=N.slice(0,a);M=o;H("back",{info:P(N),param:s})}},backTo:function(e,t,n){var r=v?x:N.map(function(e){return e.view}),o=v?T:r.length-1,u;for(u=o;u>-1;u--){if(!n&&k(r[u])===e||r[u]===e){if(u===o){H("refresh",{info:U(),param:t})}else{K.back(o-u,t)}return i}}return s},home:function(e){K.back(v?T:N.length-1,e)},exit:function(){e.trigger("close");if(v){l.go(-T-1)}else{l.back()}},onChange:function(e){C.on("change",e)},buildHash:function(e){var t=e.view,n=e.query,r=rt(n,i);return A+"#"+t+(r?"?"+r:"")+"#"}};return K});a("router",function(){function m(e){if(e){var t=e.complete,n;e.hide=function(e){w.back(1,e||n)};e.complete=function(r){n=r;It(t,e,[r])}}}function g(n){e.onChange(function(e){var n=e.data,r=n.info,u=n.param,a=e.type;switch(a){case"init":if(c.autoInit){t.add(r.view,{param:r.query},i,function(e){m(e);p.trigger(a,e)})}break;case"forward":$(function(){t.add(r.view,{param:r.query},s,function(e){m(e);p.trigger(a,e)})},100);break;case"refresh":t.refresh({view:o.getRealName(r.view),name:r.view,data:u});p.trigger(a);break;case"back":case"home":$(function(){t.backTo(r.view,u,r.query,function(){p.trigger(a)})},100);break}});e.start(n)}function y(){h.add("router","tap",function(t){var n=t.el,r=bt(n,"href"),o=bt(n,"target"),u=st(bt(n,"param")||"",i),f,l,c,h;if(!r.indexOf("#!")){if(r.indexOf("home")==2){w.home(u)}else{r=r.slice(2);c=r.match(a);if(c){w.back(c[2]||1,u)}}}else if(!r.indexOf("#")){r=r.slice(1);f=e.analyzeHash(r);if(o==="_blank"){w.open(f.view+":new",{param:W(f.query,u)})}else{h=f.view.split(":");l=h.length>0;if(h[1]=="0"){f.view=h[0]}if(w.backTo(f.view,u,l)===s){w.open(f.view,{param:W(f.query,u)})}}}})}function b(t){return function(){var n=V(arguments);if(n[1]&&n[1].skipFilter||v.reduce(function(e,t){return e&&t(n)!==s},i)){return It(e[t],e,n)}}}var e=f("history"),t=f("viewQ"),o=f("viewM");var u=s,a=/back(\((\d+)\))?/,h=Wt(r,[],l.role),p=ft(),d=[],v=[];var w=W(p,{start:function(t){if(!u){u=i;g(t);y();e.onChange(function(e){p.trigger("history",e)})}},open:function(n,r,o){var u=V(arguments);if(u[1]&&u[1].skipFilter||d.reduce(function(e,t){return e&&t(u)!==s},i)){r=r||{};var a=r.param||{};t.add(n,r,!!r.atBottom,function(t){if(t){m(t);e.setHashInfo({view:t.name,query:a});It(o,t,[t]);if(!r.atBottom){p.trigger("forward",t)}}else{It(o)}})}},back:b("back"),backTo:b("backTo"),home:b("home"),"goto":function(t,n,r,i){if(e.backTo(t,r,i)===s){w.open(t,n)}},exit:e.exit,refreshParam:e.refreshParam,addOpenFilter:function(e){if(F(e)){d=d.concat(e)}},removeOpenFilter:function(e){var t=d.indexOf(e);if(t>-1){d.splice(t,1)}},addBackFilter:function(e){if(F(e)){v=v.concat(e)}},removeBackFilter:function(e){var t=v.indexOf(e);if(t>-1){v.splice(t,1)}},getCurViewName:function(e){return t.curView&&(e?t.curView:o.getRealName(t.curView))},getPreViewName:function(e){return t.preView&&(e?t.preView:o.getRealName(t.preView))},_newSite:function(){n.open(e.basePath)},_reset:m});t.inject(w);return w});var un=f("viewM"),an=f("history"),fn=f("router"),ln=f("pluginM"),cn=f("widgetM");var hn={},pn=[],dn=new lt,vn=[];mn(function(){function u(){i=t.clientWidth;s=t.clientHeight;W(hn,{width:i,height:s,rootWidth:i-c.root.left-c.root.right,rootHeight:s-c.root.top-c.root.bottom});wt(r.body,"height",s+"px");wt(o,{height:hn.rootHeight+"px",width:hn.rootWidth+"px"})}function a(){var e=t.clientHeight;if(e>=s){if(e>s){u()}}}var t=r.documentElement,i=t.clientWidth,s=t.clientHeight,o=r.createElement(l.app);W(hn,{width:i,height:s,rootTop:c.root.top,rootLeft:c.root.left});wt(r.body,"height",s+"px");if(c.customRoot){hn.rootWidth=i-c.root.left-c.root.right;hn.rootHeight=s-c.root.top-c.root.bottom;wt(o,{top:hn.rootTop+"px",left:hn.rootLeft+"px",height:hn.rootHeight+"px",width:hn.rootWidth+"px"});vt(r.body,o)}else{hn.rootWidth=i;hn.rootHeight=s;o=r.body}e.root=c.appRoot=o;fn.start(!!c.hashRouter);if(c.screen){if(c.screen.largeChange){n.addEventListener("resize",a)}if(c.screen.rotate){tn.on("change",u)}}if(c.gesture){if(c.gesture.open){if(c.gesture.ctrl){e.on("running",function(e){Rt[e?"off":"on"]()})}if(c.gesture.longTap){e.gesture.allowLongTap()}if(c.gesture.autoBlur){var f=["INPUT","TEXTAREA"];xt(r.body,"touchstart",function(e){if(f.indexOf(e.target.tagName.toUpperCase())===-1){Mt()}})}}else{Rt.off()}}});e=W(e,ft());W(e,{config:function(e){var t=W(i,c,e),n=t.plugins,r=t.globalPlugins;if(B(r)){ln.setGlobal(r)}if(B(n)){n.forEach(function(e){if(e&&n.name){ln.setOpt(e.name,e.options)}})}else if(n){X(n,function(e,t){if(e){ln.setOpt(e,t)}})}return t},root:r.body,origin:hn,defineView:un.define,undefineView:un.undefine,createView:un.create,buildView:un.build,existsView:un.exists,getView:un.get,getViewSync:un.getSync,addPlugin:ln.add,configPlugin:ln.setOpt,setGlobalPlugins:ln.setGlobal,addWidget:cn.add,showWidget:cn.show,router:fn,open:fn.open,exit:fn.exit,view:un,show:un.show,showView:un.show,hash:{getInfo:an.getHashInfo,setInfo:an.setHashInfo,analyzeHash:an.analyzeHash,setParam:an.refreshParam,build:an.buildHash},sniff:h});var gn=e.util={};gn.ready=pt;e.ready=mn;e.addReadyDependencies=function(e){vn.push(e)};gn.query=function(e){return r.querySelector(e)};gn.queryAll=function(e){return r.querySelectorAll(e)};gn.is=P;gn.isObject=H;gn.isString=j;gn.isArray=B;gn.isFunction=F;gn.isNumber=q;gn.isElement=I;gn.isPlainObject=R;gn.isEmptyObject=U;gn.extend=W;gn.each=X;gn.makeArray=V;gn.delay=$;gn.associate=J;gn.mapping=K;gn.camelCase=Y;gn.dasherize=Z;gn.empty=et;gn.noop=M;gn.getUniqueID=Q;gn.getZIndex=G;gn.jsonToQuery=rt;gn.queryToJson=st;gn.parseURL=$t;gn.loader=Yt;gn.builder=dt;gn.appendNodes=vt;gn.insertElement=mt;gn.removeNode=gt;gn.attr=bt;gn.css=wt;gn.removeStyle=Et;gn.addClass=Ct;gn.removeClass=kt;gn.fixEvent=St;gn.addEvent=xt;gn.removeEvent=Tt;gn.dispatchEvent=Nt;gn.createStyle=Lt;gn.size=Pt;gn.position=jt;gn.contains=At;gn.focus=Ot;gn.blur=Mt;gn.animate=Ut;gn.dataSet=Ft;gn.delegatedEvent=Wt;gn.CustEvent=gn.custEvent=at;gn.Deferred=gn.deferred=lt;gn.queue=ct;gn.parallel=ht;gn.gesture=e.gesture=Rt;e.logger=gn.logger=sn;n.QApp=e;pt(function(){if(vn.length){ht(vn).done(function(){dn.resolve()})}else{dn.resolve()}});(function(){function f(e){Et(e,t)}function l(e){wt(e,n,"");Et(e,n)}function c(e){return~(e+"").indexOf("%")||~(e+"").indexOf("px")?e:e+"px"}function d(e,t,r){t.on("loadEnd",function(){bt(t.root,"qapp-ani",e);wt(t.root,n,"hidden")});t.on("beforeHide",function(){Mt(t.root)});t.on("destroy",function(){t.show=o;t.hide=o})}function b(e,t){var n=-1,r,i;for(r=0,i=e.length;r<i;r++){if(e[r].view===t){n=r;break}}return n}function w(e,t,n,r,i){var s=0;return ht(e.map(function(e,i){if(i<t){e.view.trigger("beforeHide");return Ut(e.view.root,r?p(e.translate,0,0):p(0,e.translate,0),n)}else{s+=e.distance;return Ut(e.view.root,r?p(s,0,0):p(0,s,0),n)}}))}var t="display",n="visibility";var a=function(){var e=navigator.userAgent.toLowerCase();if(h.ios||h.android&&e.indexOf("micromessenger")>-1){return 1}return 2}();var p=a==1?function(e,t,n){return{translate3d:e+"px, "+t+"px, "+n+"px"}}:function(e,t,n){return{translate:e+"px, "+t+"px",translateZ:n+"px"}};var v=10;var m={position:"right",distance:0,duration:200,zIndex:0};var g={},y=s;e.addPlugin("moveEnter",m,function(t,n,h){var E={position:"absolute",top:0,zIndex:n.zIndex||G()},S=h.type.indexOf&&h.type.indexOf("pad")===-1,x=n.position==="right"||n.position==="left",T=n.position==="right"||n.position==="bottom"?-1:1,N,C=s,k,L=s,A=s;if(n.panBack===u){n.panBack=h.type==="app"}if(S){n.distance=x?hn.rootWidth:hn.rootHeight}N=T*n.distance;if(!h.animate){n.duration=0}if(S){k=[];E.width="100%";E.height="100%"}else{if(!g[n.position]){g[n.position]=[]}k=g[n.position];E[x?"height":"width"]="100%"}if(n.panBack&&S&&(n.position==="right"||n.position==="left")){var O=function(e){if(~e.directions.indexOf(n.position)){return e.clientX-e.offsetX<v}return s};var M=function(e){if(A){wt(t.root,p(e.offsetX,0,0))}else if(!L){L=i;A=O(e)}};var _=function(e){if(A){A=s;if(Math.abs(e.offsetX)>Math.abs(n.distance)/2){t.hide()}else{Ut(t.root,p(0,0,0),n.duration/2).done()}}L=s};t.on("show",function(){xt(t.root,"pan",M);xt(t.root,"panend",_)});t.on("hide",function(){Tt(t.root,"pan",M);Tt(t.root,"panend",_)});t.on("rendered",function(){var e=r.createElement("div");e.className="touch-opacity";wt(e,{position:"absolute",zIndex:"9999",width:c(v),height:"100%",backgroundColor:"rgba(255, 255, 255, 0)"});wt(e,n.position==="right"?"left":"right","0");Ct(t.root,"shadow");t.root.appendChild(e)})}t.on("loaded",function(){if(!n.distance){n.distance=Pt(t.root)[x?"width":"height"]}if(S){if(a===3){if(n.position==="bottom"){E.top=c(hn.rootHeight)}else{E[n.position]=c(-n.distance)}}else{if(n.position==="bottom"){E.top=c(hn.rootHeight-n.distance)}else{E[n.position]=c(0)}W(E,x?p(-T*n.distance,0,0):p(0,-T*n.distance,0))}}else{if(n.position!=="bottom"){E[n.position]=c(-n.distance)}else{E.top=c(hn.rootHeight)}}wt(t.root,E)});d("moveEnter",t,n);t.show=function(r){Mt();if(!y){y=i;C=i;var o=b(k,t);if(~o){w(k,o,r===i||t.preventAnimate?0:n.duration,x).done(function(){k.splice(0,o).forEach(function(e){e.view.trigger("hide")});y=s;C=s;t.trigger("refresh")})}else{t.once("completed",function(){f(t.root);l(t.root);t.trigger("beforeShow");k.unshift({view:t,distance:S?0:N,translate:S?-N:0});$(function(){w(k,0,r===i||t.preventAnimate?0:n.duration,x,t.root).done(function(){y=s;C=s;Et(t.root,"transform");t.trigger("show")})})});t.renderTo(e.root)}}return t};t.hide=function(e){if((!y||S&&!C)&&t.isShow){y=i;var r=b(k,t);w(k,r+1,e===i||t.preventAnimate?0:n.duration,x).done(function(){k.splice(0,r+1).forEach(function(e){e.view.trigger("hide")});y=s})}return t};t.on("destroy",function(){E=o;k=o;t=o});return{setOption:function(e){n=W({},m,e)}}})})()})()}(t.exports,t,e);e.____MODULES["681795b0d9a0040aa35c149c2d7efbea"]=t.exports})(this);(function(e){var t={id:"e24642d9bb10d27b80ed20283fa2d1ef",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function f(e){return!(e===null||e===void 0)}function l(e,t){e=(e===null?"":e).toString().trim();return t?encodeURIComponent(e):e}function c(t,n){var r=[],i,s,o;for(i in t){if(i==="$nullName"){r=r.concat(t[i])}else if(e.isArray(t[i])){for(s=0,o=t[i].length;s<o;s++){if(!e.isFunction(t[i][s])){r.push(i+"="+l(t[i][s],n))}}}else if(!e.isFunction(t[i])&&f(t[i])){r.push(i+"="+l(t[i],n))}}return r.join("&")}function h(){var e=false;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(n){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(r){e=false}}}return e}function p(e,t){try{for(var n in t){e.setRequestHeader(n,t[n])}}catch(r){}}function d(t,n){var r=h(),i,o="",u=t.method.toLocaleLowerCase();if(t.withCredentials){r.withCredentials=true}if(t.timeout){i=e.delay(function(){try{n(null,{error:true,type:"Timeout"});r.abort()}catch(e){}},t.timeout)}r.onreadystatechange=function(){if(r.readyState==4){clearTimeout(i);var e={};if(t.dataType==="xml"){e=r.responseXML}else if(t.dataType==="text"){e=r.responseText}else{try{e=r.responseText&&typeof r.responseText==="string"?JSON.parse(r.responseText):{}}catch(s){}}if(r.status===200){n(e)}else if(r.status===0){n(e,{error:true,type:"Abort"})}else{n(e,{error:true,type:"Fail"})}}};if(u==="get"){if(t.cache===false){t.data.__rnd=(new Date).getTime()}}if(t.argsType==="query"){o=c(t.data,t.isEncode)}else if(t.argsType==="json"){o=JSON.stringify(t.data);if(t.isEncode){o=encodeURIComponent(o)}}if(!t.headers["Content-Type"]){if(t.argsType==="json"){t.headers["Content-Type"]="application/json;charset="+t.charset}else{t.headers["Content-Type"]="application/x-www-form-urlencoded;charset="+t.charset}}if(!t.headers["X-Requested-With"]){t.headers["X-Requested-With"]="XMLHttpRequest"}if(t.data&&t.hasContent&&t.contentType!==false||t.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}if(u==="get"){var a;if(o){a=t.url+(!~t.url.indexOf("?")?"?":"&")+o}else{a=t.url}r.open("get",a,true);p(r,t.headers);r.send("")}else{r.open("post",t.url,true);p(r,t.headers);r.send(o)}return r}function v(t,n){function h(){if(f){window[o]=a}else{delete window[o]}l.remove()}var r={},i=false,s=e.parseURL(t.url),o="",a,f=false,l,c;s.query=e.extend(s.query,t.data);if(t.jsonpCallback){f=true;a=window[t.jsonpCallback]}else{t.jsonpCallback="QApp_"+ +(new Date)+u++}o=t.jsonpCallback;s.query[t.jsonp]=o;if(t.cache===false){s.query.__rnd=+(new Date)+u++}r.abort=function(){i=true;var e={error:true,type:"Abort"};t.onAbort(null,e);n.reject(e)};window[o]=function(e){if(c){clearTimeout(c)}if(i){return}n.resolve(e);t.success(e);h()};c=e.delay(function(){var e={type:"Timeout"};t.onTimeout(e);n.reject(e);h()},t.timeout);l=document.createElement("script");l.async=true;l.charset=t.charset;l.src=s.toUrl();l.onerror=function(){if(c){clearTimeout(c)}var e={type:"Error"};n.reject(e);t.error(e);h()};document.head.appendChild(l);return r}function m(t,n){var i=r[t.mockKey||""],s=null;e.delay(function(){if(i){if(e.isFunction(i)){s=i(t)}else{s=i}}var r=true;o.forEach(function(e){if(e(s,null,t,n)===false){r=false}});if(r){n.resolve(s);t.success(s,null)}},t.mockTime||1e3)}var e=QApp.util,t=e.Deferred;var n={},r={},i=[],o=[],u=0;var a={url:"",bizType:false,charset:"UTF-8",timeout:30*1e3,data:{},argsType:"query",method:"get",headers:{},isEncode:false,dataType:"json",cache:false,withCredentials:false,jsonp:"callback",jsonpCallback:"",success:e.noop,error:e.noop,onTimeout:e.noop,onAbort:e.noop};var g=QApp.ajax=e.ajax=function(r){if(e.isString(r)){r={url:r}}if(r.bizType&&n[r.bizType]){r=e.extend(true,{},n[r.bizType],r)}var s=new t,u=e.extend(true,{},a,r),f={},l=true;i.forEach(function(e){if(e(u,s)===false){l=false}});if(l){if(u.mock){f.abort=function(){s.reject({error:true,type:"Abort"});u.onAbort(null,f)};m(u,s)}else if(r.dataType==="jsonp"){f=v(u,s)}else{f=d(u,function(e,t){var n=true;o.forEach(function(r){if(r(e,t,u,s)===false){n=false}});if(n){if(t){s.reject(t);if(t.type==="Timeout"){u.onTimeout(e,f)}else if(t.type==="Abort"){u.onAbort(e,f)}else{u.error(e,f)}}else{s.resolve(e);u.success(e,f)}}})}}s.trans=f;return s};QApp.ajax.setBizOptions=function(t,r){if(e.isString(t)){n[t]=r}else{e.extend(true,n,t)}};QApp.ajax.addMock=function(t,n){if(e.isString(t)){r[t]=n}else{r=t}};QApp.ajax.addReqFilter=function(e){i=i.concat(e)};QApp.ajax.removeReqFilter=function(e){var t=i.indexOf(e);if(t>-1){i.splice(t,1)}};QApp.ajax.addRespFilter=function(e){o=o.concat(e)};QApp.ajax.removeRespFilter=function(e){var t=o.indexOf(e);if(t>-1){o.splice(t,1)}};QApp.addPlugin("ajax",{bizType:"",mock:false},function(t,n){var r=[];t.ajax=function(t){var i=g(e.extend(true,{},n,t));r.push(i);i.all(function(){r.splice(r.indexOf(i),1)});return i};t.on("destroy",function(){r.forEach(function(e){e.destroy();e.trans&&e.trans.abort()});r.length=0;r=null})})})()}(t.exports,t,e);e.____MODULES["e24642d9bb10d27b80ed20283fa2d1ef"]=t.exports})(this);(function(e){var t={id:"9d98ca07b73221c493c790bbc2226633",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function s(){if(avalon.config.debug){console.log.apply(console,arguments)}}function N(){}function C(e,t){if(typeof e==="string"){e=e.match(l)||[]}var n={},r=t!==void 0?t:1;for(var i=0,s=e.length;i<s;i++){n[e[i]]=r}return n}function k(e){function n(r,i){if(t.push(r)>e){delete n[t.shift()]}return n[r]=i}var t=[];return n}function O(e,t){e=Math.floor(e)||0;return e<0?Math.max(t+e,0):Math.min(e,t)}function D(e){if(e&&typeof e==="object"){var t=e.length,n=m.call(e);if(/(Array|List|Collection|Map|Arguments)\]$/.test(n)){return true}else if(n==="[object Object]"&&+t===t&&!(t%1)&&t>=0){return true}}return false}function F(e){for(var t in e){if(!v.call(e,t))continue;var n=e[t];if(typeof F.plugins[t]==="function"){F.plugins[t](n)}else if(typeof F[t]==="object"){avalon.mix(F[t],n)}else{F[t]=n}}return this}function X(e){return(e+"").replace(W,"\\$&")}function Z(e,t,n){if(A(t)||t&&t.nodeType){return false}if(n.indexOf(e)!==-1){return false}if(Y.indexOf(e)!==-1){return false}var r=n.$special;if(e&&e.charAt(0)==="$"&&!r[e]){return false}return true}function it(t,n,r){if(Array.isArray(t)){var i=t.concat();t.length=0;var s=lt(t);s.pushArray(i);return s}if(typeof t.nodeType==="number"){return t}if(t.$id&&t.$model&&t.$events){return t}if(!Array.isArray(t.$skipArray)){t.$skipArray=[]}t.$skipArray.$special=n||{};var u={};r=r||{};var a={};var l={};var h=[];for(var p in t){(function(n,i){r[n]=i;if(!Z(n,i,t.$skipArray)){return}var s;var p=avalon.type(i);a[n]=[];if(p==="object"&&A(i.get)&&Object.keys(i).length<=2){var d=i.set;var v=i.get;s=function(e){var t=u.$events;var i=r[n];if(arguments.length){if(f){return}if(A(d)){var s=t[n];t[n]=[];d.call(u,e);t[n]=s}}else{}e=r[n]=v.call(u);if(!st(i,e)){Nt(t[n]);ot(u,n,e,i)}return e};h.push(function(){b[e]=function(){u.$model[n]=v.call(u)};s();delete b[e]})}else if(c.test(p)){s=function(e){var t=s.child;var i=r[n];if(arguments.length){if(f){return}if(!st(i,e)){t=s.child=ft(u,n,e,p);e=r[n]=t.$model;var o=at[t.$id];o&&o();ot(u,n,e,i)}}else{mt(a[n]);return t}};var m=s.child=it(i,0,r[n]);m.$events[o]=a[n]}else{s=function(e){var t=r[n];if(arguments.length){if(!st(t,e)){r[n]=e;Nt(a[n]);ot(u,n,e,t)}}else{mt(a[n]);return t}}}l[n]=s})(p,t[p])}Y.forEach(function(e){delete t[e];delete r[e]});u=nt(u,ut(l),t);for(var d in t){if(!l[d]){u[d]=t[d]}}u.$id=L();u.$model=r;u.$events=a;for(var p in J){var v=J[p];if(!w){v=v.bind(u)}u[p]=v}if(tt){Object.defineProperty(u,"hasOwnProperty",{value:function(e){return e in u.$model},writable:false,enumerable:false,configurable:true})}else{u.hasOwnProperty=function(e){return e in u.$model}}h.forEach(function(e){e()});return u}function ot(e,t,n,r){if(e.$events){J.$fire.call(e,t,n,r)}}function ft(e,t,n,r){var i=e[t];if(r==="array"){if(!Array.isArray(n)||i===n){return i}i.clear();i.pushArray(n.concat());return i}else{var s=e.$events[t];var u=i.$events.$withProxyPool;if(u){gr(u,"with");i.$events.$withProxyPool=null}var a=it(n);a.$events[o]=s;at[a.$id]=function(e){while(e=s.shift()){(function(e){avalon.nextTick(function(){if(e.type){e.rollback&&e.rollback();M[e.type](e,e.vmodels)}})})(e)}delete at[a.$id]};return a}}function lt(e){var t=[];t.$id=L();t.$model=e;t.$events={};t.$events[o]=[];t._=it({length:e.length});t._.$watch("length",function(e,n){t.$fire("length",e,n)});for(var n in J){t[n]=J[n]}avalon.mix(t,ht);return t}function pt(e,t){if(c.test(avalon.type(e))){e=e.$id?e:it(e,0,t)}return e}function vt(t){b[e]=t;avalon.openComputedCollect=true;var r=t.evaluator;if(r){try{var i=dt.test(t.type)?t:r.apply(0,t.args);t.handler(i,t.element,t)}catch(s){delete t.evaluator;var o=t.element;if(o.nodeType===3){var u=o.parentNode;if(F.commentInterpolate){u.replaceChild(n.createComment(t.value),o)}else{o.data=I+t.value+q}}}}avalon.openComputedCollect=false;delete b[e]}function mt(t){var n=b[e];if(t&&n&&avalon.Array.ensure(t,n)&&n.element){gt(n,t)}}function gt(e,t){e.$uuid=e.$uuid||L();t.$uuid=t.$uuid||L();var n={data:e,list:t,toString:function(){return e.$uuid+" "+t.$uuid}};if(!yt[n]){yt[n]=1;yt.push(n)}}function xt(){for(var e=bt,t=bt+wt;e<t;e++){var n=yt[e];if(!n){break}var r=n.data;var i=r.element;var s=i===null?1:i.nodeType===1?typeof i.sourceIndex==="number"?i.sourceIndex===0:!E.contains(i):!avalon.contains(E,i);if(s){yt.splice(e,1);delete yt[n];avalon.Array.remove(n.list,r);Tt(r);n.data=n.list=null;e--;t--}}n=yt[e];if(n){bt=t}else{bt=0}Et=new Date}function Tt(e){e.element=null;e.rollback&&e.rollback();for(var t in e){e[t]=null}}function Nt(e){clearTimeout(St);if(new Date-Et>444){St=setTimeout(xt,1)}else{St=setTimeout(xt,444)}if(e&&e.length){var t=y.call(arguments,1);for(var n=e.length,r;r=e[--n];){var i=r.element;if(i&&i.parentNode){if(r.$repeat){r.handler.apply(r,t)}else if(r.type!=="on"){var s=r.evaluator||N;r.handler(s.apply(0,r.args||[]),i,r)}}}}}function Dt(e,t,n){var r=setTimeout(function(){var i=e.innerHTML;clearTimeout(r);if(i===n){t()}else{Dt(e,t,i)}})}function Pt(e,t){var n=e.getAttribute("avalonctrl")||t.$id;e.setAttribute("avalonctrl",n);t.$events.expr=e.tagName+'[avalonctrl="'+n+'"]'}function Bt(e,t){if(e.length)t.cb(e.length);for(var n=0,r;r=e[n++];){r.vmodels=t;M[r.type](r,t);if(r.evaluator&&r.element&&r.element.nodeType===1){r.element.removeAttribute(r.name)}}e.length=0}function Rt(e,t){return e.priority-t.priority}function Ut(e,t,n){var r=e.getAttribute("ms-skip");var i=e.getAttributeNode("ms-important");var s=e.getAttributeNode("ms-controller");if(typeof r==="string"){return}else if(n=i||s){var o=avalon.vmodels[n.value];if(!o){return}var u=t.cb;t=n===i?[o]:[o].concat(t);t.cb=u;e.removeAttribute(n.name);e.classList.remove(n.name);Pt(e,o)}Vt(e,t)}function zt(e,t){var n=e.firstChild;while(n){var r=n.nextSibling;Xt(n,n.nodeType,t);n=r}}function Wt(e,t){for(var n=0,r;r=e[n++];){Xt(r,r.nodeType,t)}}function Xt(e,t,n){if(t===1){Ut(e,n)}else if(t===3&&R.test(e.data)){tn(e,n)}else if(F.commentInterpolate&&t===8&&!R.test(e.nodeValue)){tn(e,n)}}function Vt(e,t){var n=e.hasAttributes()?avalon.slice(e.attributes):[];var r=[],i={},o;for(var u=0,a;a=n[u++];){if(a.specified){if(o=a.name.match(jt)){var f=o[1];var l=o[2]||"";var c=a.value;var h=a.name;i[h]=c;if(It[f]){l=f;f="on"}else if(qt[f]){s("ms-"+f+"已经被废弃,请使用ms-attr-*代替");if(f==="enabled"){f="disabled";c="!("+c+")"}l=f;f="attr";e.removeAttribute(h);h="ms-attr-"+l;e.setAttribute(h,c);o=[h];i[h]=c}if(typeof M[f]==="function"){var p={type:f,param:l,element:e,name:o[0],value:c,priority:f in Ft?Ft[f]:f.charCodeAt(0)*10+(Number(l)||0)};if(f==="html"||f==="text"){var d=Zt(c);avalon.mix(p,d);p.filters=p.filters.replace(Kt,function(){p.type="html";p.group=1;return""})}if(h==="ms-if-loop"){p.priority+=100}if(t.length){r.push(p);if(f==="widget"){e.msData=e.msData||i}}}}}}if(i["ms-attr-checked"]&&i["ms-duplex"]){s("warning!一个元素上不能同时定义ms-attr-checked与ms-duplex")}r.sort(Rt);var v=true;for(var u=0,p;p=r[u];u++){var f=p.type;if($t.test(f)){return Bt(r.slice(0,u+1),t)}else if(v){v=!Jt.test(f)}}Bt(r,t);if(v&&!_t[e.tagName]&&z.test(e.innerHTML+e.textContent)){zt(e,t)}}function Zt(e){if(e.indexOf("|")>0){var t=e.replace(Qt,"ᄢ㍄").indexOf("|");if(t>-1){return{filters:e.slice(t),value:e.slice(0,t),expr:true}}}return{value:e,filters:"",expr:true}}function en(e){var t=[],n,r=0,i;do{i=e.indexOf(I,r);if(i===-1){break}n=e.slice(r,i);if(n){t.push({value:n,filters:"",expr:false})}r=i+I.length;i=e.indexOf(q,r);if(i===-1){break}n=e.slice(r,i);if(n){t.push(Zt(n))}r=i+q.length}while(1);n=e.slice(r);if(n){t.push({value:n,expr:false,filters:""})}return t}function tn(e,t){var r=[];if(e.nodeType===8){var i=Zt(e.nodeValue);var s=[i]}else{s=en(e.data)}if(s.length){for(var o=0,i;i=s[o++];){var u=n.createTextNode(i.value);if(i.expr){i.type="text";i.element=u;i.filters=i.filters.replace(Kt,function(){i.type="html";i.group=1;return""});r.push(i)}S.appendChild(u)}e.parentNode.replaceChild(S,e);if(r.length)Bt(r,t)}}function nn(e){return e.replace(/([a-z\d])([A-Z]+)/g,"$1-$2").toLowerCase()}function rn(e){if(e.indexOf("-")<0&&e.indexOf("_")<0){return e}return e.replace(/[-_][^-_]/g,function(e){return e.charAt(1).toUpperCase()})}function on(e){try{if(typeof e==="object")return e;e=e==="true"?true:e==="false"?false:e==="null"?null:+e+""===e?+e:sn.test(e)?JSON.parse(e):e}catch(t){}return e}function un(e){return e.window&&e.document?e:e.nodeType===9?e.defaultView:false}function pn(e,t){if(e.offsetWidth<=0){var n=getComputedStyle(e,null);if(hn.test(n["display"])){var r={node:e};for(var i in cn){r[i]=n[i];e.style[i]=cn[i]}t.push(r)}var s=e.parentNode;if(s&&s.nodeType===1){pn(s,t)}}}function dn(e){var t=e.tagName.toLowerCase();return t==="input"&&/checkbox|radio/.test(e.type)?"checked":t}function Nn(e,t,n,r){var i=[],s=" = "+n+".";for(var o=e.length,u;u=e[--o];){if(t.hasOwnProperty(u)){i.push(u+s+u);r.vars.push(u);if(r.type==="duplex"){e.get=n+"."+u}e.splice(o,1)}}return i}function Cn(e){var t=[],n={};for(var r=0;r<e.length;r++){var i=e[r];var s=i&&typeof i.$id==="string"?i.$id:i;if(!n[s]){n[s]=t.push(i)}}return t}function Hn(e,t){t=t.replace(On,"").replace(Mn,function(){return"],|"}).replace(_n,function(e,t){return"["+mn(t)}).replace(Dn,function(){return'"],["'}).replace(Pn,function(){return'",'})+"]";return"return avalon.filters.$filter("+e+", "+t+")"}function Bn(t,n,r){var i=r.type;var o=r.filters||"";var u=n.map(function(e){return String(e.$id).replace(An,"$1")})+t+i+o;var a=Tn(t).concat(),f=[],l=[],c=[],h="";n=Cn(n);r.vars=[];for(var p=0,d=n.length;p<d;p++){if(a.length){var v="vm"+e+"_"+p;l.push(v);c.push(n[p]);f.push.apply(f,Nn(a,n[p],v,r))}}if(!f.length&&i==="duplex"){return}if(i!=="duplex"&&(t.indexOf("||")>-1||t.indexOf("&&")>-1)){r.vars.forEach(function(e){var n=new RegExp("\\b"+e+"(?:\\.\\w+|\\[\\w+\\])+","ig");t=t.replace(n,function(t){var n=t.charAt(e.length);var r=/^\s*\(/.test(RegExp.rightContext);if(n==="."||n==="["||r){var i="var"+String(Math.random()).replace(/^0\./,"");if(r){var s=t.split(".");if(s.length>2){var o=s.pop();f.push(i+" = "+s.join("."));return i+"."+o}else{return t}}f.push(i+" = "+t);return i}else{return t}})})}r.args=c;var m=kn[u];if(m){r.evaluator=m;return}var h=f.join(", ");if(h){h="var "+h}if(/\S/.test(o)){if(!/text|html/.test(r.type)){throw Error("ms-"+r.type+"不支持过滤器")}t="\nvar ret"+e+" = "+t+";\r\n";t+=Hn("ret"+e,o)}else if(i==="duplex"){var g="'use strict';\nreturn function(vvv){\n	"+h+";\n	if(!arguments.length){\n		return "+t+"\n	}\n	"+(!Ln.test(t)?a.get:t)+"= vvv;\n} ";try{m=Function.apply(N,l.concat(g));r.evaluator=kn(u,m)}catch(y){s("debug: parse error,"+y.message)}return}else if(i==="on"){if(t.indexOf("(")===-1){t+=".call(this, $event)"}else{t=t.replace("(",".call(this,")}l.push("$event");t="\nreturn "+t+";";var b=t.lastIndexOf("\nreturn");var w=t.slice(0,b);var E=t.slice(b);t=w+"\n"+E}else{t="\nreturn "+t+";"}try{m=Function.apply(N,l.concat("'use strict';\n"+h+t));r.evaluator=kn(u,m)}catch(y){s("debug: parse error,"+y.message)}finally{a=textBuffer=l=null}}function jn(e,t,n,r,i){t.cb(-1);if(Array.isArray(r)){e=r.map(function(e){return e.expr?"("+e.value+")":mn(e.value)}).join(" + ")}Bn(e,t,n);if(n.evaluator&&!i){n.handler=_[n.handlerName||n.type];vt(n)}}function Vn(e,t){var r="_"+e;if(!Vn[r]){var i=n.createElement(e);E.appendChild(i);if(w){t=getComputedStyle(i,null).display}else{t=i.currentStyle.display}E.removeChild(i);Vn[r]=t}return Vn[r]}function Kn(e){return e==null?"":e}function Qn(e,t,n,r){t.param.replace(/\w+/g,function(r){var i=avalon.duplexHooks[r];if(i&&typeof i[n]==="function"){e=i[n](e,t)}});return e}function Zn(e,t,r){var i=n.createEvent("Events");i.initEvent(t,true,true);if(r){i.detail=r}e.dispatchEvent(i)}function er(){for(var e=Yn.length-1;e>=0;e--){var t=Yn[e];if(t()===false){Yn.splice(e,1)}}if(!Yn.length){clearInterval(Gn)}}function tr(e){if(avalon.contains(E,this)){sr.call(this,e);or.call(this,e)}}function or(e){var t=arguments.length?e:this.value;if(!this.disabled&&this.oldValue!==t+""){var n=this.getAttribute("data-duplex-event")||"input";Zn(this,n)}}function ur(e,t,n,r){var i=avalon.parseHTML(e.template);var s=avalon.slice(i.childNodes);t.appendChild(i);var o=e.vmodels;var u=[n].concat(o);u.cb=o.cb;var a={nodes:s,vmodels:u};r.push(a)}function ar(e,t){var n=e.element;var r=e.endRepeat;var i=[];var s=n.nextSibling;if(s!==r){do{if(s!==r){i.push(s)}else{break}}while(s=s.nextSibling)}return i[e.group*t]||r}function fr(e,t,n){var r=t*(n||1);var i=[e],s=1;var o=S;while(s<r){e=e.nextSibling;if(e){i[s++]=e}}for(var s=0;e=i[s++];){o.appendChild(e)}return o}function lr(e){if(!isFinite(e.group)){var t=e.element.parentNode.childNodes;var n=t.length-2;var r="proxySize"in e?e.proxySize:e.proxies.length;e.group=n/r}}function pr(e){var t={$host:[],$outer:{},$index:0,$first:false,$last:false,$remove:avalon.noop};t[e]={get:function(){return this.$host[this.$index]},set:function(e){this.$host.set(this.$index,e)}};var n={$last:1,$first:1,$index:1};var r=it(t,n);var i=r.$events;i[e]=i.$first=i.$last=i.$index;r.$id=L("$proxy$each");return r}function dr(e,t){var n=t.param||"el",r;for(var i=0,s=cr.length;i<s;i++){var o=cr[i];if(o&&o.hasOwnProperty(n)){r=o;cr.splice(i,1)}}if(!r){r=pr(n)}var u=t.$repeat;var a=u.length-1;r.$index=e;r.$first=e===0;r.$last=e===a;r.$host=u;r.$outer=t.$outer;r.$remove=function(){return u.removeAt(r.$index)};return r}function vr(){var e=it({$key:"",$outer:{},$host:{},$val:{get:function(){return this.$host[this.$key]},set:function(e){this.$host[this.$key]=e}}},{$val:1});e.$id=L("$proxy$with");return e}function mr(e,t){var n=hr.pop();if(!n){n=vr()}var r=t.$repeat;n.$key=e;n.$host=r;n.$outer=t.$outer;if(r.$events){n.$events.$val=r.$events[e]}else{n.$events={}}return n}function gr(e,t){var n=t==="each"?cr:hr;avalon.each(e,function(e,t){if(t.$events){for(var r in t.$events){if(Array.isArray(t.$events[r])){t.$events[r].forEach(function(e){if(typeof e==="object")Tt(e)});t.$events[r].length=0}}t.$host=t.$outer={};if(n.unshift(t)>F.maxRepeatSize){n.pop()}}});if(t==="each")e.length=0}function Cr(){if(V){V.checkDeps()}else{Nr.forEach(function(e){e(avalon)})}Cr=N}var e=Date.now();var t=Function("return this")();var n=t.document;var r=n.head;r.insertAdjacentHTML("afterBegin",'<avalon ms-skip><style id="avalonStyle">.avalonHide{ display: none!important }</style></avalon>');var i=r.firstChild;var o="$"+e;var u=t.require;var a=t.define;var f=false;var l=/[^, ]+/g;var c=/^(?:object|array)$/;var h=/^\[object SVG\w*Element\]$/;var p=/^\[object (?:Window|DOMWindow|global)\]$/;var d=Object.prototype;var v=d.hasOwnProperty;var m=d.toString;var g=Array.prototype;var y=g.slice;var b={};var w=t.dispatchEvent;var E=n.documentElement;var S=n.createDocumentFragment();var x=n.createElement("div");var T={};"Boolean Number String Function Array Date RegExp Object Error".replace(l,function(e){T["[object "+e+"]"]=e.toLowerCase()});var L=function(e){e=e||"avalon";return(e+Math.random()+Math.random()).replace(/0\./g,"")};avalon=function(e){return new avalon.init(e)};avalon.init=function(e){this[0]=this.element=e};avalon.fn=avalon.prototype=avalon.init.prototype;avalon.type=function(e){if(e==null){return String(e)}return typeof e==="object"||typeof e==="function"?T[m.call(e)]||"object":typeof e};var A=function(e){return m.call(e)=="[object Function]"};avalon.isFunction=A;avalon.isWindow=function(e){return p.test(m.call(e))};avalon.isPlainObject=function(e){return m.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===d};avalon.mix=avalon.fn.mix=function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=false;if(typeof o==="boolean"){f=o;o=arguments[1]||{};u++}if(typeof o!=="object"&&!A(o)){o={}}if(u===a){o=this;u--}for(;u<a;u++){if((e=arguments[u])!=null){for(t in e){n=o[t];r=e[t];if(o===r){continue}if(f&&r&&(avalon.isPlainObject(r)||(i=Array.isArray(r)))){if(i){i=false;s=n&&Array.isArray(n)?n:[]}else{s=n&&avalon.isPlainObject(n)?n:{}}o[t]=avalon.mix(f,s,r)}else if(r!==void 0){o[t]=r}}}}return o};avalon.mix({rword:l,subscribers:o,version:1.381,ui:{},log:s,slice:function(e,t,n){return y.call(e,t,n)},noop:N,error:function(e,t){throw new(t||Error)(e)},oneObject:C,range:function(e,t,n){n||(n=1);if(t==null){t=e||0;e=0}var r=-1,i=Math.max(0,Math.ceil((t-e)/n)),s=Array(i);while(++r<i){s[r]=e;e+=n}return s},eventHooks:{},bind:function(e,t,n,r){var i=avalon.eventHooks;var s=i[t];if(typeof s==="object"){t=s.type;if(s.deel){n=s.deel(e,n)}}e.addEventListener(t,n,!!r);return n},unbind:function(e,t,n,r){var i=avalon.eventHooks;var s=i[t];var o=n||N;if(typeof s==="object"){t=s.type}e.removeEventListener(t,o,!!r)},css:function(e,t,n){if(e instanceof avalon){e=e[0]}var r=/[_-]/.test(t)?rn(t):t;t=avalon.cssName(r)||r;if(n===void 0||typeof n==="boolean"){var i=an[r+":get"]||an["@:get"];if(t==="background"){t="backgroundColor"}var s=i(e,t);return n===true?parseFloat(s)||0:s}else if(n===""){e.style[t]=""}else{if(n==null||n!==n){return}if(isFinite(n)&&!avalon.cssNumber[r]){n+="px"}i=an[r+":set"]||an["@:set"];i(e,t,n)}},each:function(e,t){if(e){var n=0;if(D(e)){for(var r=e.length;n<r;n++){t(n,e[n])}}else{for(n in e){if(e.hasOwnProperty(n)){t(n,e[n])}}}}},getWidgetData:function(e,t){var n=avalon(e).data();var r={};for(var i in n){if(i.indexOf(t)===0){r[i.replace(t,"").replace(/\w/,function(e){return e.toLowerCase()})]=n[i]}}return r},parseJSON:JSON.parse,Array:{ensure:function(e,t){if(e.indexOf(t)===-1){return e.push(t)}},removeAt:function(e,t){return!!e.splice(t,1).length},remove:function(e,t){var n=e.indexOf(t);if(~n)return avalon.Array.removeAt(e,n);return false}}});var M=avalon.bindingHandlers={};var _=avalon.bindingExecutors={};avalon.nextTick=t.setImmediate?setImmediate.bind(t):function(e){setTimeout(e,0)};if(!E.contains){Node.prototype.contains=function(e){return!!(this.compareDocumentPosition(e)&16)}}avalon.contains=function(e,t){try{while(t=t.parentNode)if(t===e)return true;return false}catch(n){return false}};if(t.SVGElement){var P="http://www.w3.org/2000/svg";var H=n.createElementNS(P,"svg");H.innerHTML='<circle cx="50" cy="50" r="40" fill="red" />';if(!h.test(H.firstChild)){function B(e,t){if(e&&e.childNodes){var r=e.childNodes;for(var i=0,s;s=r[i++];){if(s.tagName){var o=n.createElementNS(P,s.tagName.toLowerCase());g.forEach.call(s.attributes,function(e){o.setAttribute(e.name,e.value)});B(s,o);t.appendChild(o)}}}}Object.defineProperties(SVGElement.prototype,{outerHTML:{enumerable:true,configurable:true,get:function(){return(new XMLSerializer).serializeToString(this)},set:function(e){var t=this.tagName.toLowerCase(),r=this.parentNode,i=avalon.parseHTML(e);if(t==="svg"){r.insertBefore(i,this)}else{var s=n.createDocumentFragment();B(i,s);r.insertBefore(s,this)}r.removeChild(this)}},innerHTML:{enumerable:true,configurable:true,get:function(){var e=this.outerHTML;var t=new RegExp("<"+this.nodeName+'\\b(?:(["\'])[^"]*?(\\1)|[^>])*>',"i");var n=new RegExp("</"+this.nodeName+">$","i");return e.replace(t,"").replace(n,"")},set:function(e){if(avalon.clearHTML){avalon.clearHTML(this);var t=avalon.parseHTML(e);B(t,this)}}}})}}var j=avalon.eventHooks;if(!("onmouseenter"in E)){avalon.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){j[e]={type:t,deel:function(t,n){return function(r){var i=r.relatedTarget;if(!i||i!==t&&!(t.compareDocumentPosition(i)&16)){delete r.type;r.type=e;return n.call(t,r)}}}}})}avalon.each({AnimationEvent:"animationend",WebKitAnimationEvent:"webkitAnimationEnd"},function(e,n){if(t[e]&&!j.animationend){j.animationend={type:n}}});if(n.onmousewheel===void 0){j.mousewheel={type:"wheel",deel:function(e,t){return function(n){n.wheelDeltaY=n.wheelDelta=n.deltaY>0?-120:120;n.wheelDeltaX=0;Object.defineProperty(n,"type",{value:"mousewheel"});t.call(e,n)}}}}var I,q,R,U,z,W=/[-.*+?^${}()|[\]\/\\]/g;var V;var $={loader:function(e){t.define=e&&V?V.define:a;t.require=e&&V?V:u},interpolate:function(e){I=e[0];q=e[1];if(I===q){throw new SyntaxError("openTag!==closeTag")}else if(e+""==="<!--,-->"){F.commentInterpolate=true}else{var t=I+"test"+q;x.innerHTML=t;if(x.innerHTML!==t&&x.innerHTML.indexOf("&lt;")>=0){throw new SyntaxError("此定界符不合法")}x.innerHTML=""}var n=X(I),r=X(q);R=new RegExp(n+"(.*?)"+r);U=new RegExp(n+"(.*?)"+r,"g");z=new RegExp(n+".*?"+r+"|\\sms-")}};F.debug=true;F.plugins=$;F.plugins["interpolate"](["{{","}}"]);F.paths={};F.shim={};F.maxRepeatSize=100;avalon.config=F;var J={$watch:function(e,t){if(typeof t==="function"){var n=this.$events[e];if(n){n.push(t)}else{this.$events[e]=[t]}}else{this.$events=this.$watch.backup}return this},$unwatch:function(e,t){var n=arguments.length;if(n===0){this.$watch.backup=this.$events;this.$events={}}else if(n===1){this.$events[e]=[]}else{var r=this.$events[e]||[];var i=r.length;while(~--i<0){if(r[i]===t){return r.splice(i,1)}}}return this},$fire:function(e){var t;if(/^(\w+)!(\S+)$/.test(e)){t=RegExp.$1;e=RegExp.$2}var r=this.$events;var i=y.call(arguments,1);var s=[e].concat(i);if(t==="all"){for(var o in avalon.vmodels){var u=avalon.vmodels[o];if(u!==this){u.$fire.apply(u,s)}}}else if(t==="up"||t==="down"){var a=r.expr?Q(r.expr):[];if(a.length===0)return;for(var o in avalon.vmodels){var u=avalon.vmodels[o];if(u!==this){if(u.$events.expr){var f=Q(u.$events.expr);if(f.length===0){continue}Array.prototype.forEach.call(f,function(e){Array.prototype.forEach.call(a,function(n){var r=t==="down"?n.contains(e):e.contains(n);if(r){e._avalon=u}})})}}}var l=n.getElementsByTagName("*");var c=[];Array.prototype.forEach.call(l,function(e){if(e._avalon){c.push(e._avalon);e._avalon="";e.removeAttribute("_avalon")}});if(t==="up"){c.reverse()}for(var o=0,h;h=c[o++];){if(h.$fire.apply(h,s)===false){break}}}else{var p=r[e]||[];var d=r.$all||[];for(var o=0,v;v=p[o++];){if(A(v))v.apply(this,i)}for(var o=0,v;v=d[o++];){if(A(v))v.apply(this,arguments)}}}};var K=/(\w+)\[(avalonctrl)="(\S+)"\]/;var Q=function(e){return n.querySelectorAll(e)};var G=avalon.vmodels={};avalon.define=function(e,t){var n=e.$id||e;if(!n){s("warning: vm必须指定$id")}if(G[n]){s("warning: "+n+" 已经存在于avalon.vmodels中")}if(typeof e==="object"){var r=it(e)}else{var i={$watch:N};t(i);r=it(i);f=true;t(r);f=false}r.$id=n;return G[n]=r};var Y=String("$id,$watch,$unwatch,$fire,$events,$model,$skipArray").match(l);var et=Object.defineProperty;var tt=true;try{et({},"_",{value:"x"});var nt=Object.defineProperties}catch(rt){tt=false}var st=Object.is||function(e,t){if(e===0&&t===0){return 1/e===1/t}else if(e!==e){return t!==t}else{return e===t}};var ut=w?function(e){var t={};for(var n in e){t[n]={get:e[n],set:e[n],enumerable:true,configurable:true}}return t}:function(e){return e};var at={};var ct=g.splice;var ht={_splice:ct,_fire:function(e,t,n){Nt(this.$events[o],e,t,n)},_add:function(e,t){var n=this.length;t=typeof t==="number"?t:n;var r=[];for(var i=0,s=e.length;i<s;i++){r[i]=pt(e[i],this.$model[t+i])}ct.apply(this,[t,0].concat(r));this._fire("add",t,r);if(!this._stopFireLength){return this._.length=this.length}},_del:function(e,t){var n=this._splice(e,t);if(n.length){this._fire("del",e,t);if(!this._stopFireLength){this._.length=this.length}}return n},push:function(){g.push.apply(this.$model,arguments);var e=this._add(arguments);this._fire("index",e>2?e-2:0);return e},size:function(){return this._.length},pushArray:function(e){return this.push.apply(this,e)},unshift:function(){g.unshift.apply(this.$model,arguments);this._add(arguments,0);this._fire("index",arguments.length);return this.$model.length},shift:function(){var e=this.$model.shift();this._del(0,1);this._fire("index",0);return e},pop:function(){var e=this.$model.pop();this._del(this.length-1,1);return e},splice:function(e,t){e=O(e,this.length);var n=ct.apply(this.$model,arguments),r=[],i;this._stopFireLength=true;if(n.length){r=this._del(e,n.length);i=true}if(arguments.length>2){this._add(y.call(arguments,2),e);i=true}this._stopFireLength=false;this._.length=this.length;if(i){this._fire("index",0)}return r},contains:function(e){return this.indexOf(e)!==-1},remove:function(e){return this.removeAt(this.indexOf(e))},removeAt:function(e){return e>=0?this.splice(e,1):[]},clear:function(){this.$model.length=this.length=this._.length=0;this._fire("clear",0);return this},removeAll:function(e){if(Array.isArray(e)){e.forEach(function(e){this.remove(e)},this)}else if(typeof e==="function"){for(var t=this.length-1;t>=0;t--){var n=this[t];if(e(n,t)){this.splice(t,1)}}}else{this.clear()}},ensure:function(e){if(!this.contains(e)){this.push(e)}return this},set:function(e,t){if(e>=0){var n=avalon.type(t);if(t&&t.$model){t=t.$model}var r=this[e];if(n==="object"){for(var i in t){if(r.hasOwnProperty(i)){r[i]=t[i]}}}else if(n==="array"){r.clear().push.apply(r,t)}else if(r!==t){this[e]=t;this.$model[e]=t;this._fire("set",e,t)}}return this}};"sort,reverse".replace(l,function(e){ht[e]=function(){var t=this.$model,n=t.slice(0),r=false;g[e].apply(t,arguments);for(var i=0,s=n.length;i<s;i++){var o=t[i],u=n[i];if(!st(o,u)){r=true;var a=n.indexOf(o,i);var f=this._splice(a,1)[0];var l=n.splice(a,1)[0];this._splice(i,0,f);n.splice(i,0,l);this._fire("move",a,i)}}n=void 0;if(r){this._fire("index",0)}return this}});var dt=/^(duplex|on)$/;var yt=[],bt=0,wt=200,Et=new Date,St;var Ct=new function(){avalon.mix(this,{option:n.createElement("select"),thead:n.createElement("table"),td:n.createElement("tr"),area:n.createElement("map"),tr:n.createElement("tbody"),col:n.createElement("colgroup"),legend:n.createElement("fieldset"),_default:n.createElement("div"),g:n.createElementNS("http://www.w3.org/2000/svg","svg")});this.optgroup=this.option;this.tbody=this.tfoot=this.colgroup=this.caption=this.thead;this.th=this.td};Ct.optgroup=Ct.option;Ct.tbody=Ct.tfoot=Ct.colgroup=Ct.caption=Ct.thead;Ct.th=Ct.td;String("circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use").replace(l,function(e){Ct[e]=Ct.g});var kt=/<([\w:]+)/;var Lt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;var At=C(["","text/javascript","text/ecmascript","application/ecmascript","application/javascript"]);var Ot=n.createElement("script");avalon.parseHTML=function(e){if(typeof e!=="string"){e=e+""}e=e.replace(Lt,"<$1></$2>").trim();var t=(kt.exec(e)||["",""])[1].toLowerCase(),n=Ct[t]||Ct._default,r=S.cloneNode(false),i;n.innerHTML=e;var s=n.getElementsByTagName("script");if(s.length){for(var o=0,u;u=s[o++];){if(At[u.type]){var a=Ot.cloneNode(false);g.forEach.call(u.attributes,function(e){a.setAttribute(e.name,e.value)});a.text=u.text;u.parentNode.replaceChild(a,u)}}}while(i=n.firstChild){r.appendChild(i)}return r};avalon.innerHTML=function(e,t){var n=this.parseHTML(t);this.clearHTML(e).appendChild(n)};avalon.clearHTML=function(e){e.textContent="";while(e.firstChild){e.removeChild(e.firstChild)}return e};var Mt={};avalon.scanCallback=function(e,t){t=t||"$all";var n=Mt[t]||(Mt[t]=[]);n.push(e)};avalon.scan=function(e,t,n){function f(e){s+=e;a=true;setTimeout(function(){if(s<=0&&!o){o=true;while(u=r.shift()){u()}}})}e=e||E;n=n||"$all";var r=Mt[n]||[];var i=t?[].concat(t):[];var s=0;var o=false;var u;var a=false;i.cb=f;Ut(e,i);if(!a){while(u=r.shift()){u()}}};var _t=C("area,base,basefont,br,col,command,embed,hr,img,input,link,meta,param,source,track,wbr,noscript,script,style,textarea".toUpperCase());var Ht=function(e,t,n){var r=e.getAttribute(t);if(r){for(var i=0,s;s=n[i++];){if(s.hasOwnProperty(r)&&typeof s[r]==="function"){return s[r]}}}};var jt=/ms-(\w+)-?(.*)/;var Ft={"if":10,repeat:90,data:100,widget:110,each:1400,"with":1500,duplex:2e3,on:3e3};var It=C("animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit");var qt=C("value,title,alt,checked,selected,disabled,readonly,enabled");var $t=/^if|widget|repeat$/;var Jt=/^each|with|html|include$/;var Kt=/\|\s*html\s*/,Qt=/\|\|/g,Gt=/&lt;/g,Yt=/&gt;/g;"add,remove".replace(l,function(e){avalon.fn[e+"Class"]=function(t){var n=this[0];if(t&&typeof t==="string"&&n&&n.nodeType===1){t.replace(/\S+/g,function(t){n.classList[e](t)})}return this}});avalon.fn.mix({hasClass:function(e){var t=this[0]||{};return t.nodeType===1&&t.classList.contains(e)},toggleClass:function(e,t){var n,r=0;var i=e.split(/\s+/);var s=typeof t==="boolean";while(n=i[r++]){var o=s?t:!this.hasClass(n);this[o?"addClass":"removeClass"](n)}return this},attr:function(e,t){if(arguments.length===2){this[0].setAttribute(e,t);return this}else{return this[0].getAttribute(e)}},data:function(e,t){e="data-"+nn(e||"");switch(arguments.length){case 2:this.attr(e,t);return this;case 1:var n=this.attr(e);return on(n);case 0:var r={};g.forEach.call(this[0].attributes,function(t){if(t){e=t.name;if(!e.indexOf("data-")){e=rn(e.slice(5));r[e]=on(t.value)}}});return r}},removeData:function(e){e="data-"+nn(e);this[0].removeAttribute(e);return this},css:function(e,t){if(avalon.isPlainObject(e)){for(var n in e){avalon.css(this,n,e[n])}}else{var r=avalon.css(this,e,t)}return r!==void 0?r:this},position:function(){var e,t,n=this[0],r={top:0,left:0};if(!n){return}if(this.css("position")==="fixed"){t=n.getBoundingClientRect()}else{e=this.offsetParent();t=this.offset();if(e[0].tagName!=="HTML"){r=e.offset()}r.top+=avalon.css(e[0],"borderTopWidth",true);r.left+=avalon.css(e[0],"borderLeftWidth",true)}return{top:t.top-r.top-avalon.css(n,"marginTop",true),left:t.left-r.left-avalon.css(n,"marginLeft",true)}},offsetParent:function(){var e=this[0].offsetParent||E;while(e&&e.tagName!=="HTML"&&avalon.css(e,"position")==="static"){e=e.offsetParent}return avalon(e||E)},bind:function(e,t,n){if(this[0]){return avalon.bind(this[0],e,t,n)}},unbind:function(e,t,n){if(this[0]){avalon.unbind(this[0],e,t,n)}return this},val:function(e){var t=this[0];if(t&&t.nodeType===1){var n=arguments.length===0;var r=n?":get":":set";var i=vn[dn(t)+r];if(i){var s=i(t,e)}else if(n){return(t.value||"").replace(/\r/g,"")}else{t.value=e}}return n?s:this}});if(E.dataset){avalon.fn.data=function(e,t){var n=this[0].dataset;switch(arguments.length){case 2:n[e]=t;return this;case 1:t=n[e];return on(t);case 0:var r={};for(var e in n){r[e]=on(n[e])}return r}}}var sn=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/;avalon.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){avalon.fn[e]=function(n){var r=this[0]||{},i=un(r),s=e==="scrollTop";if(!arguments.length){return i?i[t]:r[e]}else{if(i){i.scrollTo(!s?n:avalon(i).scrollLeft(),s?n:avalon(i).scrollTop())}else{r[e]=n}}}});var an=avalon.cssHooks={};var fn=["","-webkit-","-moz-","-ms-"];var ln={"float":"cssFloat"};avalon.cssNumber=C("columnCount,order,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");avalon.cssName=function(e,t,n){if(ln[e]){return ln[e]}t=t||E.style;for(var r=0,i=fn.length;r<i;r++){n=rn(fn[r]+e);if(n in t){return ln[e]=n}}return null};an["@:set"]=function(e,t,n){e.style[t]=n};an["@:get"]=function(e,t){if(!e||!e.style){throw new Error("getComputedStyle要求传入一个节点 "+e)}var n,r=getComputedStyle(e,null);if(r){n=t==="filter"?r.getPropertyValue(t):r[t];if(n===""){n=e.style[t]}}return n};an["opacity:get"]=function(e){var t=an["@:get"](e,"opacity");return t===""?"1":t};"top,left".replace(l,function(e){an[e+":get"]=function(t){var n=an["@:get"](t,e);return/px$/.test(n)?n:avalon(t).position()[e]+"px"}});var cn={position:"absolute",visibility:"hidden",display:"block"};var hn=/^(none|table(?!-c[ea]).+)/;"Width,Height".replace(l,function(e){var t=e.toLowerCase(),n="client"+e,r="scroll"+e,i="offset"+e;an[t+":get"]=function(t,n,r){var s=-4;if(typeof r==="number"){s=r}n=e==="Width"?["Left","Right"]:["Top","Bottom"];var o=t[i];if(s===2){return o+avalon.css(t,"margin"+n[0],true)+avalon.css(t,"margin"+n[1],true)}if(s<0){o=o-avalon.css(t,"border"+n[0]+"Width",true)-avalon.css(t,"border"+n[1]+"Width",true)}if(s===-4){o=o-avalon.css(t,"padding"+n[0],true)-avalon.css(t,"padding"+n[1],true)}return o};an[t+"&get"]=function(e){var n=[];pn(e,n);var r=an[t+":get"](e);for(var i=0,s;s=n[i++];){e=s.node;for(var o in s){if(typeof s[o]==="string"){e.style[o]=s[o]}}}return r};avalon.fn[t]=function(s){var o=this[0];if(arguments.length===0){if(o.setTimeout){return o["inner"+e]||o.document.documentElement[n]}if(o.nodeType===9){var u=o.documentElement;return Math.max(o.body[r],u[r],o.body[i],u[i],u[n])}return an[t+"&get"](o)}else{return this.css(t,s)}};avalon.fn["inner"+e]=function(){return an[t+":get"](this[0],void 0,-2)};avalon.fn["outer"+e]=function(e){return an[t+":get"](this[0],void 0,e===true?2:0)}});avalon.fn.offset=function(){var e=this[0],t={left:0,top:0};if(!e||!e.tagName||!e.ownerDocument){return t}var n=e.ownerDocument,r=n.documentElement,i=n.defaultView;if(!r.contains(e)){return t}if(e.getBoundingClientRect!==void 0){t=e.getBoundingClientRect()}return{top:t.top+i.pageYOffset-r.clientTop,left:t.left+i.pageXOffset-r.clientLeft}};var vn={"select:get":function(e,t){var n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&!n.disabled){t=n.value;if(s){return t}o.push(t)}}return o},"select:set":function(e,t,n){t=[].concat(t);for(var r=0,i;i=e.options[r++];){if(i.selected=t.indexOf(i.value)>=0){n=true}}if(!n){e.selectedIndex=-1}}};var mn=JSON.stringify;var gn="break,case,catch,continue,debugger,default,delete,do,else,false"+",finally,for,function,if,in,instanceof,new,null,return,switch,this"+",throw,true,try,typeof,var,void,while,with"+",abstract,boolean,byte,char,class,const,double,enum,export,extends"+",final,float,goto,implements,import,int,interface,long,native"+",package,private,protected,public,short,static,super,synchronized"+",throws,transient,volatile"+",arguments,let,yield"+",undefined";var yn=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g;var bn=/[^\w$]+/g;var wn=new RegExp(["\\b"+gn.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g");var En=/\b\d[^,]*/g;var Sn=/^,+|,+$/g;var xn=k(512);var Tn=function(e){var t=","+e.trim();if(xn[t]){return xn[t]}var n=e.replace(yn,"").replace(bn,",").replace(wn,"").replace(En,"").replace(Sn,"").split(/^$|,+/);return xn(t,Cn(n))};var kn=k(128);var Ln=/\w\[.*\]|\w\.\w/;var An=/(\$proxy\$[a-z]+)\d+$/;var On=/\)\s*$/;var Mn=/\)\s*\|/g;var _n=/\|\s*([$\w]+)/g;var Dn=/"\s*\["/g;var Pn=/"\s*\(/g;avalon.parseExprProxy=jn;var Fn="autofocus,autoplay,async,allowTransparency,checked,controls,declare,disabled,defer,defaultChecked,defaultSelected"+"contentEditable,isMap,loop,multiple,noHref,noResize,noShade,open,readOnly,selected";var In={};Fn.replace(l,function(e){In[e.toLowerCase()]=e});var qn={"accept-charset":"acceptCharset","char":"ch",charoff:"chOff","class":"className","for":"htmlFor","http-equiv":"httpEquiv"};var Rn="accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan,"+"dateTime,defaultValue,frameBorder,longDesc,maxLength,marginWidth,marginHeight,"+"rowSpan,tabIndex,useMap,vSpace,valueType,vAlign";Rn.replace(l,function(e){qn[e.toLowerCase()]=e});var Un=/<noscript.*?>(?:[\s\S]+?)<\/noscript>/img;var zn=/<noscript.*?>([\s\S]+?)<\/noscript>/im;var Wn=function(){return new(t.XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP")};var Xn=avalon.templateCache={};M.attr=function(e,t){var r=e.value.trim(),i=true;if(r.indexOf(I)>-1&&r.indexOf(q)>2){i=false;if(R.test(r)&&RegExp.rightContext===""&&RegExp.leftContext===""){i=true;r=RegExp.$1}}if(e.type==="include"){var s=e.element;e.includeRendered=Ht(s,"data-include-rendered",t);e.includeLoaded=Ht(s,"data-include-loaded",t);var o=e.includeReplaced=!!avalon(s).data("includeReplace");e.startInclude=n.createComment("ms-include");e.endInclude=n.createComment("ms-include-end");if(o){e.element=e.startInclude;s.parentNode.insertBefore(e.startInclude,s);s.parentNode.insertBefore(e.endInclude,s.nextSibling)}else{s.insertBefore(e.startInclude,s.firstChild);s.appendChild(e.endInclude)}}e.handlerName="attr";jn(r,t,e,i?0:en(e.value))};_.attr=function(e,r,i){var s=i.type,o=i.param;if(s==="css"){avalon(r).css(o,e)}else if(s==="attr"){if(In[o]){var u=In[o];if(typeof r[u]==="boolean"){return r[u]=!!e}}var a=e===false||e===null||e===void 0;if(!w&&qn[o]){o=qn[o]}if(a){return r.removeAttribute(o)}var f=h.test(r)?false:n.namespaces&&isVML(r)?true:o in r.cloneNode(false);if(f){r[o]=e}else{r.setAttribute(o,e)}}else if(s==="include"&&e){var l=i.vmodels;var c=i.includeRendered;var p=i.includeLoaded;var d=i.includeReplaced;var v=d?r.parentNode:r;l.cb(1);function m(e){if(p){e=p.apply(v,[e].concat(l))}if(c){Dt(v,function(){c.call(v)},NaN)}while(true){var t=i.startInclude.nextSibling;if(t&&t!==i.endInclude){v.removeChild(t)}else{break}}var n=avalon.parseHTML(e);var r=avalon.slice(n.childNodes);v.insertBefore(n,i.endInclude);Wt(r,l);l.cb(-1)}if(i.param==="src"){if(Xn[e]){avalon.nextTick(function(){m(Xn[e])})}else{var g=Wn();g.onreadystatechange=function(){if(g.readyState===4){var t=g.status;if(t>=200&&t<300||t===304||t===1223){m(Xn[e]=g.responseText)}}};g.open("GET",e,true);if("withCredentials"in g){g.withCredentials=true}g.setRequestHeader("X-Requested-With","XMLHttpRequest");g.send(null)}}else{var y=e&&e.nodeType===1?e:n.getElementById(e);if(y){if(y.tagName==="NOSCRIPT"&&!(y.innerHTML||y.fixIE78)){var g=Wn();g.open("GET",location,false);g.send(null);var b=n.getElementsByTagName("noscript");var S=(g.responseText||"").match(Un)||[];var x=S.length;for(var T=0;T<x;T++){var N=b[T];if(N){N.style.display="none";N.fixIE78=(S[T].match(zn)||["","&nbsp;"])[1]}}}avalon.nextTick(function(){m(y.fixIE78||y.value||y.innerText||y.innerHTML)})}}}else{if(!E.hasAttribute&&typeof e==="string"&&(s==="src"||s==="href")){e=e.replace(/&amp;/g,"&")}r[s]=e;if(t.chrome&&r.tagName==="EMBED"){var C=r.parentNode;var k=document.createComment("ms-src");C.replaceChild(k,r);C.replaceChild(r,k)}}};"title,alt,src,value,css,include,href".replace(l,function(e){M[e]=M.attr});M["class"]=function(e,t){var n=e.param,r=e.value,i;e.handlerName="class";if(!n||isFinite(n)){e.param="";var o=r.replace(U,function(e){return e.replace(/./g,"0")});var u=o.indexOf(":");if(u===-1){var a=r}else{a=r.slice(0,u);i=r.slice(u+1);Bn(i,t,e);if(!e.evaluator){s("debug: ms-class '"+(i||"").trim()+"' 不存在于VM中");return false}else{e._evaluator=e.evaluator;e._args=e.args}}var f=R.test(a);if(!f){e.immobileClass=a}jn("",t,e,f?en(a):0)}else{e.immobileClass=e.oldStyle=e.param;jn(r,t,e)}};_["class"]=function(e,t,n){var r=avalon(t),i=n.type;if(i==="class"&&n.oldStyle){r.toggleClass(n.oldStyle,!!e)}else{n.toggleClass=n._evaluator?!!n._evaluator.apply(t,n._args):true;n.newClass=n.immobileClass||e;if(n.oldClass&&n.newClass!==n.oldClass){r.removeClass(n.oldClass)}n.oldClass=n.newClass;switch(i){case"class":r.toggleClass(n.newClass,n.toggleClass);break;case"hover":case"active":if(!n.hasBindEvent){var s="mouseenter";var o="mouseleave";if(i==="active"){t.tabIndex=t.tabIndex||-1;s="mousedown";o="mouseup";var u=r.bind("mouseleave",function(){n.toggleClass&&r.removeClass(n.newClass)})}var a=r.bind(s,function(){n.toggleClass&&r.addClass(n.newClass)});var f=r.bind(o,function(){n.toggleClass&&r.removeClass(n.newClass)});n.rollback=function(){r.unbind("mouseleave",u);r.unbind(s,a);r.unbind(o,f)};n.hasBindEvent=true}break}}};"hover,active".replace(l,function(e){M[e]=M["class"]});_.data=function(e,t,n){var r="data-"+n.param;if(e&&typeof e==="object"){t[r]=e}else{t.setAttribute(r,String(e))}};_.text=function(e,t){e=e==null?"":e;if(t.nodeType===3){try{t.data=e}catch(n){}}else{t.textContent=e}};_.html=function(e,t,r){e=e==null?"":e;var i="group"in r;var s=i?t.parentNode:t;if(e.nodeType===11){var o=e}else if(e.nodeType===1||e.item){var u=e.nodeType===1?e.childNodes:e.item?e:[];o=S.cloneNode(true);while(u[0]){o.appendChild(u[0])}}else{o=avalon.parseHTML(e)}var a=n.createComment("ms-html");if(i){s.insertBefore(a,t);avalon.clearHTML(fr(t,r.group));r.element=a}else{avalon.clearHTML(s).appendChild(a)}if(i){r.group=o.childNodes.length||1}var u=avalon.slice(o.childNodes);if(u[0]){if(a.parentNode)a.parentNode.replaceChild(o,a);if(i){r.element=u[0]}}Wt(u,r.vmodels)};M["if"]=M.data=M.text=M.html=function(e,t){jn(e.value,t,e)};_["if"]=function(e,t,r){if(e){if(t.nodeType===8){t.parentNode.replaceChild(r.template,t);t=r.element=r.template}if(t.getAttribute(r.name)){t.removeAttribute(r.name);Vt(t,r.vmodels)}r.rollback=null}else{if(t.nodeType===1){var s=r.element=n.createComment("ms-if");t.parentNode.replaceChild(s,t);r.template=t;i.appendChild(t);r.rollback=function(){if(t.parentNode===i){i.removeChild(t)}}}}};avalon.parseDisplay=Vn;M.visible=function(e,t){var n=avalon(e.element);var r=n.css("display");if(r==="none"){var i=n[0].style;var s=/visibility/i.test(i.cssText);var o=n.css("visibility");i.display="";i.visibility="hidden";r=n.css("display");if(r==="none"){r=Vn(n[0].nodeName)}i.visibility=s?o:""}e.display=r;jn(e.value,t,e)};_.visible=function(e,t,n){t.style.display=e?n.display:"none"};var $n=/\(([^)]*)\)/;M.on=function(e,t){var n=e.value;var r=e.param.replace(/-\d+$/,"");if(typeof M.on[r+"Hook"]==="function"){M.on[r+"Hook"](e)}if(n.indexOf("(")>0&&n.indexOf(")")>-1){var i=(n.match($n)||["",""])[1].trim();if(i===""||i==="$event"){n=n.replace($n,"")}}jn(n,t,e)};_.on=function(e,t,n){n.type="on";e=function(e){var t=n.evaluator||N;return t.apply(this,n.args.concat(e))};var r=n.param.replace(/-\d+$/,"");if(r==="scan"){e.call(t,{type:r})}else if(typeof n.specialBind==="function"){n.specialBind(t,e)}else{var i=avalon.bind(t,r,e)}n.rollback=function(){if(typeof n.specialUnbind==="function"){n.specialUnbind()}else{avalon.unbind(t,r,i)}}};M.widget=function(e,n){var r=e.value.match(l);var i=e.element;var s=r[0];var o=r[1];if(!o||o==="$"){o=L(s)}var u=r[2]||s;n.cb(-1);var a=avalon.ui[s];if(typeof a==="function"){n=i.vmodels||n;for(var f=0,c;c=n[f++];){if(c.hasOwnProperty(u)&&typeof c[u]==="object"){var h=c[u];h=h.$model||h;break}}if(h){var p=h[s+"Id"];if(typeof p==="string"){o=p}}var d=avalon.getWidgetData(i,s);e.value=[s,o,u].join(",");e[s+"Id"]=o;e.evaluator=N;i.msData["ms-widget-id"]=o;var v=e[s+"Options"]=avalon.mix({},a.defaults,h||{},d);i.removeAttribute("ms-widget");var m=a(i,e,n)||{};if(m.$id){avalon.vmodels[o]=m;Pt(i,m);if(m.hasOwnProperty("$init")){m.$init(function(){var e=[m].concat(n);e.cb=n.cb;avalon.scan(i,e);if(typeof v.onInit==="function"){v.onInit.call(i,m,v,n)}})}if(m.hasOwnProperty("$remove")){function g(){if(!i.msRetain&&!E.contains(i)){m.$remove();try{m.widgetElement=null}catch(e){}i.msData={};delete avalon.vmodels[m.$id];return false}}if(t.chrome){i.addEventListener("DOMNodeRemovedFromDocument",function(){setTimeout(g)})}else{avalon.tick(g)}}}else{avalon.scan(i,n)}}else if(n.length){i.vmodels=n}};var Jn=M.duplex=function(e,t){var n=e.element,r;jn(e.value,t,e,0,1);e.changed=Ht(n,"data-duplex-changed",t)||N;if(e.evaluator&&e.args){var i=[];var o=C("string,number,boolean,checked");if(n.type==="radio"&&e.param===""){e.param="checked"}if(n.msData){n.msData["ms-duplex"]=e.value}e.param.replace(/\w+/g,function(t){if(/^(checkbox|radio)$/.test(n.type)&&/^(radio|checked)$/.test(t)){if(t==="radio")s("ms-duplex-radio已经更名为ms-duplex-checked");t="checked";e.isChecked=true}if(t==="bool"){t="boolean";s("ms-duplex-bool已经更名为ms-duplex-boolean")}else if(t==="text"){t="string";s("ms-duplex-text已经更名为ms-duplex-string")}if(o[t]){r=true}avalon.Array.ensure(i,t)});if(!r){i.push("string")}e.param=i.join("-");e.bound=function(t,r){if(n.addEventListener){n.addEventListener(t,r,false)}else{n.attachEvent("on"+t,r)}var i=e.rollback;e.rollback=function(){avalon.unbind(n,t,r);i&&i()}};for(var u in avalon.vmodels){var a=avalon.vmodels[u];a.$fire("avalon-ms-duplex-init",e)}var f=e.pipe||(e.pipe=Qn);f(null,e,"init");var l=n.tagName;Jn[l]&&Jn[l](n,e.evaluator.apply(null,e.args),e)}};avalon.duplexHooks={checked:{get:function(e,t){return!t.element.oldValue}},string:{get:function(e){return e},set:Kn},"boolean":{get:function(e){return e==="true"},set:Kn},number:{get:function(e){return isFinite(e)?parseFloat(e)||0:e},set:Kn}};var Gn,Yn=[];avalon.tick=function(e){if(Yn.push(e)===1){Gn=setInterval(er,60)}};var nr=N;try{var rr=document.createElement("input");var ir=rr.constructor.prototype;Object.getOwnPropertyNames(ir);var sr=Object.getOwnPropertyDescriptor(ir,"value").set;Object.defineProperty(ir,"value",{set:tr})}catch(rt){nr=avalon.tick}Jn.INPUT=function(e,n,r){function f(e){r.changed.call(this,e,r)}function c(){a=true}function h(){a=false}function p(){if(a)return;var t=e.oldValue=e.value;var i=r.pipe(t,r,"get");if(u.data("duplex-observe")!==false){n(i);f.call(e,i);if(u.data("duplex-focus")){avalon.nextTick(function(){e.focus()})}}}var i=e.type,o=r.bound,u=avalon(e),a=false;r.handler=function(){var t=r.pipe(n(),r,"set");if(t!==e.value){e.value=t}};if(r.isChecked||e.type==="radio"){p=function(){if(u.data("duplex-observe")!==false){var t=r.pipe(e.value,r,"get");n(t);f.call(e,t)}};r.handler=function(){var t=n();var i=r.isChecked?!!t:t+""===e.value;e.checked=e.oldValue=i};o("click",p)}else if(i==="checkbox"){p=function(){if(u.data("duplex-observe")!==false){var t=e.checked?"ensure":"remove";var i=n();if(!Array.isArray(i)){s("ms-duplex应用于checkbox上要对应一个数组");i=[i]}avalon.Array[t](i,r.pipe(e.value,r,"get"));f.call(e,i)}};r.handler=function(){var t=[].concat(n());e.checked=t.indexOf(r.pipe(e.value,r,"get"))>=0};o("change",p)}else{var d=e.getAttribute("data-duplex-event")||e.getAttribute("data-event")||"input";if(e.attributes["data-event"]){s("data-event指令已经废弃，请改用data-duplex-event")}d.replace(l,function(e){switch(e){case"input":o("input",p);if(!t.VBArray){o("compositionstart",c);o("compositionend",h)}break;default:o(e,p);break}})}e.oldValue=e.value;if(/text|textarea|password/.test(e.type)){nr(function(){if(E.contains(e)){or.call(e)}else if(!e.msRetain){return false}})}vt(r);f.call(e,e.value)};Jn.TEXTAREA=Jn.INPUT;Jn.SELECT=function(e,t,n){function i(){if(r.data("duplex-observe")!==false){var i=r.val();if(Array.isArray(i)){i=i.map(function(e){return n.pipe(e,n,"get")})}else{i=n.pipe(i,n,"get")}if(i+""!==e.oldValue){t(i)}n.changed.call(e,i,n)}}var r=avalon(e);n.handler=function(){var n=t();n=n&&n.$model||n;if(Array.isArray(n)){if(!e.multiple){s("ms-duplex在<select multiple=true>上要求对应一个数组")}}else{if(e.multiple){s("ms-duplex在<select multiple=false>不能对应一个数组")}}n=Array.isArray(n)?n.map(String):n+"";if(n+""!==e.oldValue){r.val(n);e.oldValue=n+""}};n.bound("change",i);Dt(e,function(){vt(n);n.changed.call(e,t(),n)},NaN)};M.repeat=function(e,t){var r=e.type;jn(e.value,t,e,0,1);e.proxies=[];var i=false;t.cb(-1);try{var s=e.$repeat=e.evaluator.apply(0,e.args||[]);var u=avalon.type(s);if(u!=="object"&&u!=="array"){i=true;avalon.log("warning:"+e.value+"对应类型不正确")}}catch(a){i=true;avalon.log("warning:"+e.value+"编译出错")}var f=e.value.split(".")||[];if(f.length>1){f.pop();var l=f[0];for(var c=0,h;h=t[c++];){if(h&&h.hasOwnProperty(l)){var p=h[l].$events||{};p[o]=p[o]||[];p[o].push(e);break}}}var d=e.element;if(i){return avalon(d).addClass("avalonHide")}avalon(d).removeClass("avalonHide");d.removeAttribute(e.name);e.sortedCallback=Ht(d,"data-with-sorted",t);e.renderedCallback=Ht(d,"data-"+r+"-rendered",t);var v=e.element=n.createComment("ms-repeat");var m=e.endRepeat=n.createComment("ms-repeat-end");S.appendChild(v);S.appendChild(m);if(r==="each"||r==="with"){e.template=d.innerHTML.trim();avalon.clearHTML(d).appendChild(S)}else{e.template=d.outerHTML.trim();d.parentNode.replaceChild(S,d);e.group=1}e.rollback=function(){var t=e.element;if(!t)return;_.repeat.call(e,"clear");var n=t.parentNode;var r=avalon.parseHTML(e.template);var i=r.firstChild;n.replaceChild(r,t);n.removeChild(e.endRepeat);i=e.element=e.type==="repeat"?i:n;e.group=i.setAttribute(e.name,e.value)};e.handler=_.repeat;e.$outer={};var g="$key",y="$val";if(Array.isArray(s)){g="$first";y="$last"}for(var c=0,b;b=t[c++];){if(b.hasOwnProperty(g)&&b.hasOwnProperty(y)){e.$outer=b;break}}var w=(s.$events||{})[o];if(w&&avalon.Array.ensure(w,e)){gt(e,w)}if(u==="object"){var E=s.$events;var x=!E?{}:E.$withProxyPool||(E.$withProxyPool={});e.handler("append",s,x)}else{e.handler("add",0,s)}};_.repeat=function(e,t,n){if(e){var r=this;var i=r.element.parentNode;var s=r.proxies;var o=S.cloneNode(false);if(e==="del"||e==="move"){var u=ar(r,t)}var a=r.group;switch(e){case"add":var f=n;var l=r.$repeat.length-1;var c=[];for(var h=0,p=f.length;h<p;h++){var d=h+t;var v=dr(d,r);s.splice(d,0,v);ur(r,o,v,c)}u=ar(r,t);i.insertBefore(o,u);for(var h=0,m;m=c[h++];){Wt(m.nodes,m.vmodels);m.nodes=m.vmodels=null}lr(r);break;case"del":var g=s.splice(t,n);var o=fr(u,a,n);avalon.clearHTML(o);gr(g,"each");break;case"index":var l=s.length-1;for(;n=s[t];t++){n.$index=t;n.$first=t===0;n.$last=t===l}break;case"clear":while(true){var y=r.element.nextSibling;if(y&&y!==r.endRepeat){i.removeChild(y)}else{break}}gr(s,"each");break;case"move":var b=s.splice(t,1)[0];if(b){s.splice(n,0,b);o=fr(u,a);u=ar(r,n);i.insertBefore(o,u)}break;case"set":var v=s[t];if(v){Nt(v.$events.$index)}break;case"append":var w=n;var E=[];var c=[];for(var x in t){if(t.hasOwnProperty(x)&&x!=="hasOwnProperty"){E.push(x)}}if(r.sortedCallback){var T=r.sortedCallback.call(i,E);if(T&&Array.isArray(T)&&T.length){E=T}}for(var h=0,x;x=E[h++];){if(x!=="hasOwnProperty"){if(!w[x]){w[x]=mr(x,r)}ur(r,o,w[x],c)}}r.proxySize=E.length;i.insertBefore(o,r.element.nextSibling);for(var h=0,m;m=c[h++];){Wt(m.nodes,m.vmodels);m.nodes=m.vmodels=null}lr(r);break}var C=r.renderedCallback||N,k=arguments;Dt(i,function(){C.apply(i,k);if(i.oldValue&&i.tagName==="SELECT"&&e==="index"){avalon(i).val(i.oldValue.split(","))}},NaN)}};"with,each".replace(l,function(e){M[e]=M.repeat});var cr=[];var hr=[];var yr=/<script[^>]*>([\S\s]*?)<\/script\s*>/gim;var br=/\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g;var wr=/<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig;var Er={a:/\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,img:/\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,form:/\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig};var Sr=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;var xr=/([^\#-~| |!])/g;var Tr=avalon.filters={uppercase:function(e){return e.toUpperCase()},lowercase:function(e){return e.toLowerCase()},truncate:function(e,t,n){t=t||30;n=n===void 0?"...":n;return e.length>t?e.slice(0,t-n.length)+n:String(e)},$filter:function(e){for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];var i=avalon.filters[r.shift()];if(typeof i==="function"){var s=[e].concat(r);e=i.apply(null,s)}}return e},camelize:rn,sanitize:function(e){return e.replace(yr,"").replace(wr,function(e,t){var n=e.toLowerCase().match(/<(\w+)\s/);if(n){var r=Er[n[1]];if(r){e=e.replace(r,function(e,t,n){var r=n.charAt(0);return t+"="+r+"javascript:void(0)"+r})}}return e.replace(br," ").replace(/\s+/g," ")})},escape:function(e){return String(e).replace(/&/g,"&amp;").replace(Sr,function(e){var t=e.charCodeAt(0);var n=e.charCodeAt(1);return"&#"+((t-55296)*1024+(n-56320)+65536)+";"}).replace(xr,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")},currency:function(e,t){t=t||"￥";return t+avalon.filters.number(e)},number:function(e,t,n,r){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var i=!isFinite(+e)?0:+e,s=!isFinite(+t)?0:Math.abs(t),o=r||",",u=n||".",a="",f=function(e,t){var n=Math.pow(10,t);return""+Math.round(e*n)/n};a=(s?f(i,s):""+Math.round(i)).split(".");if(a[0].length>3){a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,o)}if((a[1]||"").length<s){a[1]=a[1]||"";a[1]+=(new Array(s-a[1].length+1)).join("0")}return a.join(u)}};new function(){function e(e){return parseInt(e,10)}function t(e,t,n){var r="";if(e<0){r="-";e=-e}e=""+e;while(e.length<t)e="0"+e;if(n)e=e.substr(e.length-t);return r+e}function n(e,n,r,i){return function(s){var o=s["get"+e]();if(r>0||o>-r)o+=r;if(o===0&&r===-12){o=12}return t(o,n,i)}}function r(e,t){return function(n,r){var i=n["get"+e]();var s=(t?"SHORT"+e:e).toUpperCase();return r[s][i]}}function i(e){var n=-1*e.getTimezoneOffset();var r=n>=0?"+":"";r+=t(Math[n>0?"floor":"ceil"](n/60),2)+t(Math.abs(n%60),2);return r}function s(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function l(t){var n;if(n=t.match(f)){var r=new Date(0),i=0,s=0,o=n[8]?r.setUTCFullYear:r.setFullYear,u=n[8]?r.setUTCHours:r.setHours;if(n[9]){i=e(n[9]+n[10]);s=e(n[9]+n[11])}o.call(r,e(n[1]),e(n[2])-1,e(n[3]));var a=e(n[4]||0)-i;var l=e(n[5]||0)-s;var c=e(n[6]||0);var h=Math.round(parseFloat("0."+(n[7]||0))*1e3);u.call(r,a,l,c,h);return r}return t}var o={yyyy:n("FullYear",4),yy:n("FullYear",2,0,true),y:n("FullYear",1),MMMM:r("Month"),MMM:r("Month",true),MM:n("Month",2,1),M:n("Month",1,1),dd:n("Date",2),d:n("Date",1),HH:n("Hours",2),H:n("Hours",1),hh:n("Hours",2,-12),h:n("Hours",1,-12),mm:n("Minutes",2),m:n("Minutes",1),ss:n("Seconds",2),s:n("Seconds",1),sss:n("Milliseconds",3),EEEE:r("Day"),EEE:r("Day",true),a:s,Z:i};var u=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,a=/^\d+$/;var f=/^(\d{4})-?(\d+)-?(\d+)(?:T(\d+)(?::?(\d+)(?::?(\d+)(?:\.(\d+))?)?)?(Z|([+-])(\d+):?(\d+))?)?$/;var c=/^(\d+)\D(\d+)\D(\d+)/;Tr.date=function(t,n){var r=Tr.date.locate,i="",s=[],f,h;n=n||"mediumDate";n=r[n]||n;if(typeof t==="string"){if(a.test(t)){t=e(t)}else{var p=t.trim();t=p.replace(c,function(e,t,n,r){var i=r.length===4?[r,t,n]:[t,n,r];return i.join("-")});t=l(t)}t=new Date(t)}if(typeof t==="number"){t=new Date(t)}if(avalon.type(t)!=="date"){return}while(n){h=u.exec(n);if(h){s=s.concat(h.slice(1));n=s.pop()}else{s.push(n);n=null}}s.forEach(function(e){f=o[e];i+=f?f(t,r):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return i};var h={AMPMS:{0:"上午",1:"下午"},DAY:{0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"},MONTH:{0:"1月",1:"2月",2:"3月",3:"4月",4:"5月",5:"6月",6:"7月",7:"8月",8:"9月",9:"10月",10:"11月",11:"12月"},SHORTDAY:{0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"},fullDate:"y年M月d日EEEE",longDate:"y年M月d日",medium:"yyyy-M-d ah:mm:ss",mediumDate:"yyyy-M-d",mediumTime:"ah:mm:ss","short":"yy-M-d ah:mm",shortDate:"yy-M-d",shortTime:"ah:mm"};h.SHORTMONTH=h.MONTH;Tr.date.locate=h};var Nr=[];if(n.readyState==="complete"){setTimeout(Cr)}else{n.addEventListener("DOMContentLoaded",Cr);t.addEventListener("load",Cr)}avalon.ready=function(e){if(V){V("ready!",e)}else if(Cr===N){e(avalon)}else{Nr.push(e)}};avalon.config({loader:true});avalon.ready(function(){avalon.scan(n.body)})})();(function(){function o(e){return JSON.parse(JSON.stringify(e.$model))}function u(e,t){if(avalon.type(e)==="array"){t=avalon.mix(true,{},{_:t});e={_:e}}else{t=avalon.mix(true,{},t)}for(var n in e){if(typeof t[n]=="undefined"||!e.hasOwnProperty(n)||n==="hasOwnProperty")continue;switch(avalon.type(e[n])){case"object":u(e[n],t[n]);break;case"array":avalon.each(t[n],function(t,r){var i=typeof e[n][t];if(i==="object"&&e[n][t]!==null){u(e[n][t],r)}else{if(t>=e[n].size()){e[n].push(r)}else{e[n].set(t,r)}}});while(e[n].length>t[n].length){e[n].pop()}break;default:e[n]=t[n];break}}}var e=QApp.util;var t="qapp-",n=0,r="ms-controller",i="unused";var s=QApp.addWidget;avalon.ui=avalon.ui||{};QApp.addWidget=function(t,n,r){var i=r&&(e.isString(r)?r:"tap");s(t,n,r);avalon.ui["qapp-"+t]=function(r,s,o){var u,a,f,l=-1;s={args:{}};while(!o[++l].getView){}u=o[l].getView();f=e.delay(function(){e.each(r.dataset,function(e,n){if(!e.indexOf(t)){var r=e.substring(t.length).replace(/\w/i,function(e){return e.toLowerCase()});if(!r.indexOf("arg")){s.args[r.substring(3).replace(/\w/i,function(e){return e.toLowerCase()})]=n}else{s[r]=n}}});if(u){if(i){i=s.eventType||i;bindFunc=function(){a=n(r,s,u,o[0])};e.addEvent(r,i,bindFunc);u.on("destroy",function(){e.removeEvent(r,i,bindFunc)})}else{a=n(r,s,u,o[0])}if(s.id){u.widgets[s.id]=a}}});u.on("destroy",function(){if(f){clearTimeout(f)}})}};var a={};QApp.ready(function(){e.createStyle("[ms-controller] {visibility:hidden;}")});QApp.addPlugin(["avalon","engine.avalon"],{},function(s,f){var l=t+n++,c,h={},p=s.mergeParam;if(e.isFunction(f)){c=avalon.define(l,function(e){e.view_status=i;e.getView=function(){return s};f.call(s,e)})}else{e.each(f,function(t,n){if(e.isFunction(n)){h[t]=avalon.define(l+"-"+t,function(e){e.getView=function(){return s};n.call(s,e)});h[t].view_status=i}})}s.getVM=function(e){return e?h[e]:c};s.mergeParam=function(t){p.call(s,t);if(c){u(c,t)}else if(h){e.each(h,function(e,n){u(n,t)})}return s};s.on("loadStart",function(){if(e.isFunction(f)){e.attr(s.root.querySelector("["+r+"]")||s.root,r,l)}else{e.each(f,function(t,n){if(e.isFunction(n)){e.attr(me.root.querySelector("["+r+"="+t+"]"),r,l+"-"+t)}})}});s.on("rendered",function(){avalon.scan(s.root);if(s.extra.vmcache&&a[s.name]){if(c){u(c,a[s.name])}else if(h){e.each(h,function(e,t){u(t,a[s.name][e])})}s.mergeParam(s.param)}});s.on("destroy",function(){if(s.extra.vmcache){a[s.name]=o(c?c:h)}if(c){c.$unwatch();delete avalon.vmodels[c.$id]}else if(h){e.each(h,function(e,t){t.$unwatch();delete avalon.vmodels[t.$id]})}s=null;c=null;h=null;p=null});return{}})})()}(t.exports,t,e);e.____MODULES["9d98ca07b73221c493c790bbc2226633"]=t.exports})(this);(function(e){var t={id:"7c5d57f1f2a98b39b42b95fcc735e710",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function k(e){if(e.pageX==null&&e.clientX!=null){var t=document.documentElement;var n=document.body;e.pageX=e.clientX+(t.scrollLeft||n&&n.scrollLeft||0)-(t.clientLeft||n&&n.clientLeft||0);e.pageY=e.clientY+(t.scrollTop||n&&n.scrollTop||0)-(t.clientTop||n&&n.clientTop||0)}return e}function L(e){var t=y(e),n=g(e);return{left:t.left,top:t.top,right:t.left+n.width,bottom:t.top+n.height}}function A(e,t){var n=L(e);t=k(t);return t.pageX>=n.left&&t.pageX<=n.right&&t.pageY>=n.top&&t.pageY<=n.bottom}function O(e){d(e,n)}function M(e){p(e,r,"");d(e,r)}function _(e){return~(e+"").indexOf("%")||~(e+"").indexOf("px")?e:e+"px"}function H(){if(!P){P=t.createElement("div");p(P,{position:"absolute",top:0,left:0,width:_(i.width),height:_(i.height)})}return P}function j(e,t,n){t.on("loadEnd",function(){s.attr(t.root,"qapp-ani",e);s.css(t.root,r,"hidden")});t.on("beforeHide",function(){w(t.root)});t.on("destroy",function(){t.show=null;t.hide=null});t.autoHide=n.autoHide&&n.autoHide!=="false";B(t)}var e=window,t=document,n="display",r="visibility";var i=QApp.origin,s=QApp.util,o=s.extend,u=s.delay,a=s.appendNodes,f=s.addClass,l=s.addEvent,c=s.removeEvent,h=s.removeNode,p=s.css,d=s.removeStyle,v=s.contains,m=s.animate,g=s.size,y=s.position,b=s.parallel,w=s.blur,E=s.getZIndex,S=s.getUniqueID,x=s.delegatedEvent,T=s.dispatchEvent,N=s.isFunction;var C=function(){var e=QApp.sniff,t=navigator.userAgent.toLowerCase();if(e.ios||e.android&&t.indexOf("micromessenger")>-1){return 1}return 2}();var D=C==1?function(e,t,n){return{translate3d:e+"px, "+t+"px, "+n+"px"}}:function(e,t,n){return{translate:e+"px, "+t+"px",translateZ:n+"px"}};var P=null;var B=function(){function r(t){e.unshift(t)}function i(t){var n=e.indexOf(t);if(~n){e.splice(n,1)}}function o(e){e.once("show",function(){r(e)});e.once("hide",function(){i(e);e=null})}var e=[],n="";o.setNextView=function(e){n=e};s.ready(function(){t.body.addEventListener("touchstart",function(t){var n=e[0];if(n&&n.autoHide&&!(v(n.root,t.target)||A(n.root,t))&&(!n.relyElement||!v(n.relyElement,t.target))){if(n.isContainer){n.decHide()}else{n.hide()}}},false)});return o}();(function(){function l(e,t,n){p(e,o(t,{top:_(i.height-n.distance),height:_(n.distance),zIndex:n.zIndex},D(0,n.distance,0)))}var r=500;var s={autoHide:true,distance:0,duration:200,showMask:true,maskColor:"rgba(0, 0, 0, 0.4)",zIndex:0};QApp.addPlugin(["actionSheet","ui.actionSheet"],s,function(s,c,v){var y={position:"absolute",left:0,width:"100%"},b=false,S,x;if(!v.animate){c.duration=0}c.zIndex=c.zIndex||E();s.on("loaded",function(){if(!c.distance){s.root.style.height="auto";c.distance=g(s.root).height}l(s.root,y,c);f(s.root,"shadow")});s.show=function(n){if(n&&n.fromHash){n=true}w();B.setNextView(s.name);if(c.showMask){S=H();p(S,{display:"block",backgroundColor:c.maskColor,zIndex:c.zIndex});a(t.body,S)}if(!b){b=true;if(s.isShow){b=false;s.trigger("refresh")}else{x=g(e).height!==i.height?r:0;s.once("completed",function(){O(s.root);M(s.root);s.trigger("beforeShow");u(function(){m(s.root,D(0,0,0),n===true||s.preventAnimate?0:c.duration,"ease-out",x).done(function(){s.isShow=true;b=false;d(s.root,"transform");s.trigger("show")})})});s.renderTo(t.body)}}return s};s.hide=function(e){if(!b&&s.isShow){b=true;s.trigger("beforeHide");m(s.root,y,e===true||s.preventAnimate?0:c.duration/2,"ease-out").done(function(){s.isShow=false;if(S){p(S,n,"none");h(S)}b=false;s.trigger("hide")})}return s};s.refresh=function(){s.root.style.height="auto";c.distance=g(s.root).height;l(s.root,y,c)};s.on("destroy",function(){y=null;S=null;s=null});j("actionSheet",s,c);return{setOption:function(e){c=o({},c,e)}}})})();(function(){var e={autoHide:false,maskColor:"rgba(0, 0, 0, .4)",duration:200,width:0,height:0,zIndex:0};QApp.addPlugin(["ui.dialog","dialog"],e,function(e,r,s){var u=i.width,l=i.height,c=false,v;if(!s.animate){r.duration=0}r.zIndex=r.zIndex||E();e.on("loaded",function(){var t=g(e.root);if(!r.width){r.width=t.width}if(!r.height){r.height=t.height}p(e.root,o({position:"absolute",width:_(r.width),height:_(r.height),zIndex:r.zIndex,display:"none",top:_((l-r.height)/2),left:_((u-r.width)/2)},D(0,l,0)));f(e.root,"shadow")});e.show=function(n){if(n&&n.fromHash){n=true}B.setNextView(e.name);v=H();p(v,{display:"block",backgroundColor:r.maskColor,zIndex:r.zIndex});a(t.body,v);if(!c){c=true;if(e.isShow){c=false;e.trigger("refresh")}else{e.once("completed",function(){O(e.root);M(e.root);e.trigger("beforeShow");m(e.root,D(0,0,0),n===true||e.preventAnimate?0:r.duration).done(function(){e.isShow=true;c=false;d(e.root,"transform");e.trigger("show")})});e.renderTo(t.body)}}return e};e.hide=function(t){if(!c&&e.isShow){c=true;e.trigger("beforeHide");m(e.root,D(0,l,0),t===true||e.preventAnimate?0:r.duration).done(function(){e.isShow=false;if(v){p(v,n,"none");h(v)}c=false;e.trigger("hide")})}return e};e.on("destroy",function(){v=null;e=null});j("dialog",e,r);return{setOption:function(e){r=o({},r,e)}}})})();(function(){function c(e,t,n){var r=0,i=0;switch(n){case"right":r=_(s.position(e).top);i=_(s.position(e).left+s.size(e).width);break;case"left":r=_(s.position(e).top);i=_(s.position(e).left-parseInt(t.width));break;case"bottom":r=_(s.position(e).top+s.size(e).height);if(t.position==="left"){i=_(s.position(e).left)}else if(t.position==="right"){i=_(s.position(e).left+s.size(e).width-t.width)}else{i=_(s.position(e).left+s.size(e).width/2-t.width/2)}break;case"top":r=_(s.position(e).top-parseInt(t.height));if(t.position==="left"){i=_(s.position(e).left)}else if(t.position==="right"){i=_(s.position(e).left+s.size(e).width-t.width)}else{i=_(s.position(e).left+s.size(e).width/2-t.width/2)}break}return{top:r,left:i}}function d(e,t){if(t.autoDirection&&t.autoDirection!=="false"){var n=t.direction,r=y(e),s=r.left,o=r.top,u=g(e),a=u.width,f=u.height,l=i.width,c=i.height,h=t.width,p=t.height,d=s+a+h<=l,v=s-h>=0,m=o+f+p<=c,b=o-p>=0;if(n==="right"){if(!d){if(v){n="left"}else{n="bottom"}}}else if(n==="left"){if(!v){if(d){n="right"}else{n="bottom"}}}if(n==="bottom"){if(!m){n="top"}}else if(n==="top"){if(!b){n="bottom"}}return n}else{return t.direction}}var e=null,r;var a={autoHide:true,autoDirection:false,direction:"right",duration:200,width:0,height:0,position:"center",dropDown:false,bgColor:"rgba(0, 0, 0, 0.4)",group:false,item:null},f={opacity:0},l={opacity:1};QApp.ready(function(){r=x(t.body,[],"qapp-popup-group")});QApp.addPlugin(["popup","ui.popup"],a,function(i,s,v){var y=false,b=false;if(!v.animate){s.duration=0}if(s.dropDown){s.useArrow=false;s.autoDirection=false;s.direction="bottom";s.dropDuration=s.duration;s.duration=0}s.zIndex=s.zIndex||E();i.on("loaded",function(){var e=g(i.root);if(!s.width){s.width=e.width}if(!s.height){s.height=e.height}p(i.root,{display:"none",position:"absolute",width:_(s.width),height:_(s.height),zIndex:s.zIndex});p(i.root,s.dropDown?l:f)});i.show=function(n,a){i.relyElement=n;B.setNextView(i.name);if(!y){y=true;var f=d(n,s),v=c(n,s,f);if(i.isShow){O(i.root);M(i.root);p(i.root,{top:v.top,left:v.left});y=false;i.trigger("refresh")}else{i.once("completed",function(){i.trigger("beforeShow");O(i.root);M(i.root);p(i.root,{top:v.top,left:v.left});if(s.dropDown){var t=i.root.childNodes,n,r=-1;do{r++;n=t[r]}while(n.nodeType===3);p(n,o({height:_(s.height)},D(0,-s.height,0)));p(i.root,{position:"absolute",zIndex:s.zIndex,width:_(s.width),height:_(s.dropDown),backgroundColor:s.bgColor,overflow:"hidden"});if(e){h(e)}u(function(){m(n,D(0,0,0),a===true||i.preventAnimate?0:s.dropDuration,"ease-out").done(function(){i.isShow=true;y=false;i.trigger("show")})})}else{m(i.root,l,a===true||i.preventAnimate?0:s.duration).done(function(){i.isShow=true;y=false;i.trigger("show")})}});i.once("rendered",function(){if(s.group){r.add(s.group,"touchstart",function(e){if(e.el!==s.item){b=true}})}i.root.addEventListener("tap",function(e){if(i&&i.root===e.target){i.once("hide",function(){i.destroy()});i.hide();e.stopPropagation()}},true)});i.renderTo(t.body)}}return i};i.hide=function(t){i.relyElement=null;if(!y&&i.isShow){y=true;i.trigger("beforeHide");if(s.dropDown){var a=i.root.childNodes,l=t===true||i.preventAnimate?0:s.dropDuration,c,d=-1;do{d++;c=a[d]}while(c.nodeType===3);l/=2;if(s.group&&b){m(c,{opacity:0},l,"ease-in").done(function(){i.isShow=false;y=false;i.options.destroyDom=false;if(e){h(e)}e=i.root;u(function(){m(e,{opacity:0},l,"ease-in").done(function(){h(e);e=null})},100);r.remove(s.group,"touchstart");i.trigger("hide")})}else{m(c,o({opacity:0},D(0,-s.height,0)),t===true||i.preventAnimate?0:l,"ease-in").done(function(){i.isShow=false;y=false;i.trigger("hide")})}}else{m(i.root,f,t===true||i.preventAnimate?0:s.duration).done(function(){i.isShow=false;y=false;p(i.root,n,"none");i.trigger("hide")})}}return i};i.on("destroy",function(){i=null});j("popup",i,s);return{setOption:function(e){s=o({},a,e)}}})})()})()}(t.exports,t,e);e.____MODULES["7c5d57f1f2a98b39b42b95fcc735e710"]=t.exports})(this);(function(e){var t={id:"52550815c02f4b1ebb5e458316e9f7b4",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){var e=QApp.util;var t={tag:"node-type"};QApp.addPlugin("doms",t,function(t,n,r){t.doms={};t.find=function(r){return t.root?e.makeArray(t.root.querySelectorAll("["+n.tag+'="'+r+'"]')):[]};t.on("rendered",function(){e.makeArray(t.root.querySelectorAll("["+n.tag+"]")).forEach(function(r){var i=e.attr(r,n.tag)||"node";if(!t.doms[i]){t.doms[i]=r}else{if(e.isArray(t.doms[i])){t.doms[i].push(r)}else{t.doms[i]=[t.doms[i],r]}}})});t.on("destroy",function(){e.empty(t.doms);t.doms=null})})})()}(t.exports,t,e);e.____MODULES["52550815c02f4b1ebb5e458316e9f7b4"]=t.exports})(this);(function(e){var t={id:"06db39915d027f68bc965950f4815a67",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){var e=QApp.util,t=e.Deferred,n=0,r=30*1e3;var i={};var s={url:"",args:{},charset:"UTF-8",timeout:30*1e3,bizType:false,callbackName:"callback",onComplete:null,onTimeout:null,onFail:null};var o=QApp.jsonp=e.jsonp=function(o,u){o=e.isString(o)?{url:o}:o;o=e.extend({},s,o.bizType?i[o.bizType]:{},o);e.extend(o.args,u);var a=new t,f=o.timeout||r,l=e.parseURL(o.url),c,h;l.query=e.extend(l.query,o.args);l.query[o.callbackName]=l.query[o.callbackName]||"QApp_"+ +(new Date)+n++;l.query.__rnd=+(new Date)+n++;window[l.query[o.callbackName]]=function(t){if(h){clearTimeout(h)}a.resolve(t);e.removeNode(c)};h=e.delay(function(){a.reject({type:"Timeout"});e.removeNode(c)},f);c=document.createElement("script");c.async=true;c.charset=o.charset;c.src=l.toUrl();c.onerror=function(){if(h){clearTimeout(h)}var t={type:"Error"};a.reject(t);e.removeNode(c)};document.head.appendChild(c);return a};QApp.jsonp.setBizOptions=function(t,n){if(e.isString(t)){i[t]=n}else{e.extend(i,t)}};QApp.addPlugin("jsonp",s,function(t,n){var r=[];t.jsonp=function(t){var i=o(e.extend({},n,t));r.push(i);i.all(function(){r.splice(r.indexOf(i),1)});return i};t.on("destroy",function(){r.forEach(function(e){e.reject()});r.length=0;r=null})})})()}(t.exports,t,e);e.____MODULES["06db39915d027f68bc965950f4815a67"]=t.exports})(this);(function(e){var t={id:"3501632c175ff50fbe38cfb6a85d2296",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function n(){}function r(){return null}function s(e){var t=e in window&&window[e];return t?{size:function(){return t.length},key:function(){return t.key?function(e){return t.key(e)}:r}(),get:function(){return t.getItem?function(e){try{return JSON.parse(t.getItem(e))}catch(n){return null}}:r}(),set:function(){return t.setItem?function(e,n){try{return t.setItem(e,JSON.stringify(n))}catch(r){return void 0}}:n}(),remove:function(){return t.removeItem?function(e){return t.removeItem(e)}:n}(),clear:function(){return t.clear?function(){return t.clear()}:n}()}:i}function o(){return(new Date).getTime()}function c(){var t=o(),n,r,i,s;for(n=0,r=u.size();n<r;n++){i=u.key(n);s=u.get(i);if(s&&i!==e){if(s.expires>0&&s.createTime+s.expires<t){u.remove(i)}else{l[i]=s.data}}}}function v(){this._source={}}function m(e){if(!d[e]){d[e]=new v}return d[e]}var e="_baseInfo",t=7*24*60*60*1e3;var i={size:function(){return 0},get:r,set:n,remove:n,clear:n};var u=s("localStorage"),a=s("sessionStorage"),f=false,l={};var h=function(e,t,n){var r=arguments.length,i=null;if(r===1){if(f&&e in l){i=l[e]}else{i=a.get(e)||function(){var t=u.get(e);if(t){if(t.expires===0||t.createTime+t.expires>o()){return t.data}u.remove(e)}return null}();l[e]=i}return i}else if(r>1){if(t===void 0||t===null){delete l[e];return a.remove(e)||u.remove(e)}else{l[e]=t;n=n||0;if(n===-1){return a.set(e,t)}else{return u.set(e,{data:t,createTime:o(),expires:n})}}}};h.setCache=function(e){f=!!e};h.clear=function(){var t=u.get(e);a.clear();u.clear();u.set(e,t)};h.init=function(n){var r=u.get(e)||{},i=r.version,s=r.cTime,a=false;if(!i||i!==n){a=true;u.clear();i=n}if(!s||o()-s>t){a=true;c();s=o()}if(a){u.set(e,{version:i,cTime:s})}};QApp.util.storage=h;var p=QApp.util,d={};p.extend(v.prototype,{get:function(e){var t=this._source[e];if(p.isArray(t)){return t.slice(0)}else if(p.isObject(t)){return p.extend(true,{},t)}return t},set:function(e,t){if(p.isArray(t)){this._source[e]=t.slice(0)}else if(p.isObject(t)){this._source[e]=p.extend(true,{},t)}else{this._source[e]=t}this.trigger("change",e,t)},merge:function(e,t){if(this._source[e]!==void 0){t=p.extend(true,this._source[e],t)}this.set(e,t)},remove:function(e){this._source[e]=void 0;this.trigger("change",e)},clear:function(){for(var e in this._source){this.remove(e)}},onChange:function(e){this.on("change",e)},destroy:function(){this.off();this._source=null}},p.CustEvent);var g=QApp.dataSource={init:function(e){return m(e)},get:function(e,t){if(d[e]){return d[e].get(t)}},set:function(e,t,n){m(e).set(t,n)},merge:function(e,t,n){m(e).merge(t,n)},remove:function(e,t){m(e).remove(t)},clear:function(e){if(d[e]){d[e].clear()}},onChange:function(e,t){m(e).onChange(t)}};var y=[],b=QApp.hy?QApp.hy.config().hybridId:"global";var w=QApp.dataSource.init(b),E=QApp.util.storage;w.on("change",function(e,t){if(y.indexOf(e)>-1){E(e,t)}});w.addLocalKeys=function(e){y=y.concat(e);y.forEach(function(e){w.set(e,E(e))})};w.refresh=function(){y.forEach(function(e){w.set(e,E(e))})};if(QApp.hy){QApp.hy.on("actived",function(){w.refresh()})}QApp.util.globalContext=w})()}(t.exports,t,e);e.____MODULES["3501632c175ff50fbe38cfb6a85d2296"]=t.exports})(this);(function(e){var t={id:"bd2141162d398feaa2ba14dc245d2bba",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){var e=QApp.util;var t={tag:"action-type",eventType:"tap"};QApp.addPlugin("delegated",t,function(t,n,r){t.on("loaded",function(){var r=t.delegatedEvent=e.delegatedEvent(t.root,[],n.tag);if(t.options.bindActions){e.each(t.options.bindActions,function(i,s){var o=i.split(":"),u=o[0],a=o[1]||n.eventType;if(typeof s==="string")s=t[s];if(e.isFunction(s)){r.add(u,a,function(e,n){return s.call(t,e,n)})}})}t.bind=function(i,s,o){if(e.isFunction(s)){o=s;s=n.eventType}if(e.isFunction(o)){r.add(i,s,function(e,n){return o.call(t,e,n)})}};t.fireAction=r.fireAction});t.on("destroy",function(){if(t.delegatedEvent&&e.isFunction(t.delegatedEvent.destroy)){t.delegatedEvent.destroy()}t.delegatedEvent=null;t.bind=null})})})()}(t.exports,t,e);e.____MODULES["bd2141162d398feaa2ba14dc245d2bba"]=t.exports})(this);(function(e){var t={id:"8e388858412f481def4b54146d6a335f",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function n(){}function r(){return null}function s(e){var t=e in window&&window[e];return t?{size:function(){return t.length},key:function(){return t.key?function(e){return t.key(e)}:r}(),get:function(){return t.getItem?function(e){try{return JSON.parse(t.getItem(e))}catch(n){return null}}:r}(),set:function(){return t.setItem?function(e,n){try{return t.setItem(e,JSON.stringify(n))}catch(r){return void 0}}:n}(),remove:function(){return t.removeItem?function(e){return t.removeItem(e)}:n}(),clear:function(){return t.clear?function(){return t.clear()}:n}()}:i}function o(){return(new Date).getTime()}function c(){var t=o(),n,r,i,s;for(n=0,r=u.size();n<r;n++){i=u.key(n);s=u.get(i);if(s&&i!==e){if(s.expires>0&&s.createTime+s.expires<t){u.remove(i)}else{l[i]=s.data}}}}var e="_baseInfo",t=7*24*60*60*1e3;var i={size:function(){return 0},get:r,set:n,remove:n,clear:n};var u=s("localStorage"),a=s("sessionStorage"),f=false,l={};var h=function(e,t,n){var r=arguments.length,i=null;if(r===1){if(f&&e in l){i=l[e]}else{i=a.get(e)||function(){var t=u.get(e);if(t){if(t.expires===0||t.createTime+t.expires>o()){return t.data}u.remove(e)}return null}();l[e]=i}return i}else if(r>1){if(t===void 0||t===null){delete l[e];return a.remove(e)||u.remove(e)}else{l[e]=t;n=n||0;if(n===-1){return a.set(e,t)}else{return u.set(e,{data:t,createTime:o(),expires:n})}}}};h.setCache=function(e){f=!!e};h.clear=function(){var t=u.get(e);a.clear();u.clear();u.set(e,t)};h.init=function(n){var r=u.get(e)||{},i=r.version,s=r.cTime,a=false;if(!i||i!==n){a=true;u.clear();i=n}if(!s||o()-s>t){a=true;c();s=o()}if(a){u.set(e,{version:i,cTime:s})}};QApp.util.storage=h})()}(t.exports,t,e);e.____MODULES["8e388858412f481def4b54146d6a335f"]=t.exports})(this);(function(__context){var module={id:"da73d8a6f60c849ff1cbc63ff4884540",filename:"index.js",exports:{}};if(!__context.____MODULES){__context.____MODULES={}}var r=function(exports,module,global){var Zepto=function(){function M(e){return e==null?String(e):x[T.call(e)]||"object"}function _(e){return M(e)=="function"}function D(e){return e!=null&&e==e.window}function P(e){return e!=null&&e.nodeType==e.DOCUMENT_NODE}function H(e){return M(e)=="object"}function B(e){return H(e)&&!D(e)&&Object.getPrototypeOf(e)==Object.prototype}function j(e){return typeof e.length=="number"}function F(e){return o.call(e,function(e){return e!=null})}function I(e){return e.length>0?n.fn.concat.apply([],e):e}function q(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function R(e){return e in f?f[e]:f[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function U(e,t){return typeof t=="number"&&!l[q(e)]?t+"px":t}function z(e){var t,n;if(!a[e]){t=u.createElement(e);u.body.appendChild(t);n=getComputedStyle(t,"").getPropertyValue("display");t.parentNode.removeChild(t);n=="none"&&(n="block");a[e]=n}return a[e]}function W(e){return"children"in e?s.call(e.children):n.map(e.childNodes,function(e){if(e.nodeType==1)return e})}function X(n,r,i){for(t in r)if(i&&(B(r[t])||O(r[t]))){if(B(r[t])&&!B(n[t]))n[t]={};if(O(r[t])&&!O(n[t]))n[t]=[];X(n[t],r[t],i)}else if(r[t]!==e)n[t]=r[t]}function V(e,t){return t==null?n(e):n(e).filter(t)}function $(e,t,n,r){return _(t)?t.call(e,n,r):t}function J(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function K(t,n){var r=t.className,i=r&&r.baseVal!==e;if(n===e)return i?r.baseVal:r;i?r.baseVal=n:t.className=n}function Q(e){var t;try{return e?e=="true"||(e=="false"?false:e=="null"?null:!/^0/.test(e)&&!isNaN(t=Number(e))?t:/^[\[\{]/.test(e)?n.parseJSON(e):e):e}catch(r){return e}}function G(e,t){t(e);for(var n=0,r=e.childNodes.length;n<r;n++)G(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.slice,o=i.filter,u=window.document,a={},f={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},c=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/^(?:body|html)$/i,v=/([A-Z])/g,m=["val","css","html","text","data","width","height","offset"],g=["after","prepend","before","append"],y=u.createElement("table"),b=u.createElement("tr"),w={tr:u.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":u.createElement("div")},E=/complete|loaded|interactive/,S=/^[\w-]*$/,x={},T=x.toString,N={},C,k,L=u.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},O=Array.isArray||function(e){return e instanceof Array};N.matches=function(e,t){if(!t||!e||e.nodeType!==1)return false;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;if(s)(i=L).appendChild(e);r=~N.qsa(i,t).indexOf(e);s&&L.removeChild(e);return r};C=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})};k=function(e){return o.call(e,function(t,n){return e.indexOf(t)==n})};N.fragment=function(t,r,i){var o,a,f;if(h.test(t))o=n(u.createElement(RegExp.$1));if(!o){if(t.replace)t=t.replace(p,"<$1></$2>");if(r===e)r=c.test(t)&&RegExp.$1;if(!(r in w))r="*";f=w[r];f.innerHTML=""+t;o=n.each(s.call(f.childNodes),function(){f.removeChild(this)})}if(B(i)){a=n(o);n.each(i,function(e,t){if(m.indexOf(e)>-1)a[e](t);else a.attr(e,t)})}return o};N.Z=function(e,t){e=e||[];e.__proto__=n.fn;e.selector=t||"";return e};N.isZ=function(e){return e instanceof N.Z};N.init=function(t,r){var i;if(!t)return N.Z();else if(typeof t=="string"){t=t.trim();if(t[0]=="<"&&c.test(t))i=N.fragment(t,RegExp.$1,r),t=null;else if(r!==e)return n(r).find(t);else i=N.qsa(u,t)}else if(_(t))return n(u).ready(t);else if(N.isZ(t))return t;else{if(O(t))i=F(t);else if(H(t))i=[t],t=null;else if(c.test(t))i=N.fragment(t.trim(),RegExp.$1,r),t=null;else if(r!==e)return n(r).find(t);else i=N.qsa(u,t)}return N.Z(i,t)};n=function(e,t){return N.init(e,t)};n.extend=function(e){var t,n=s.call(arguments,1);if(typeof e=="boolean"){t=e;e=n.shift()}n.forEach(function(n){X(e,n,t)});return e};N.qsa=function(e,t){var n,r=t[0]=="#",i=!r&&t[0]==".",o=r||i?t.slice(1):t,u=S.test(o);return P(e)&&u&&r?(n=e.getElementById(o))?[n]:[]:e.nodeType!==1&&e.nodeType!==9?[]:s.call(u&&!r?i?e.getElementsByClassName(o):e.getElementsByTagName(t):e.querySelectorAll(t))};n.contains=function(e,t){return e!==t&&e.contains(t)};n.type=M;n.isFunction=_;n.isWindow=D;n.isArray=O;n.isPlainObject=B;n.isEmptyObject=function(e){var t;for(t in e)return false;return true};n.inArray=function(e,t,n){return i.indexOf.call(t,e,n)};n.camelCase=C;n.trim=function(e){return e==null?"":String.prototype.trim.call(e)};n.uuid=0;n.support={};n.expr={};n.map=function(e,t){var n,r=[],i,s;if(j(e))for(i=0;i<e.length;i++){n=t(e[i],i);if(n!=null)r.push(n)}else for(s in e){n=t(e[s],s);if(n!=null)r.push(n)}return I(r)};n.each=function(e,t){var n,r;if(j(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===false)return e}else{for(r in e)if(t.call(e[r],r,e[r])===false)return e}return e};n.grep=function(e,t){return o.call(e,t)};if(window.JSON)n.parseJSON=JSON.parse;n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){x["[object "+t+"]"]=t.toLowerCase()});n.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,indexOf:i.indexOf,concat:i.concat,map:function(e){return n(n.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return n(s.apply(this,arguments))},ready:function(e){if(E.test(u.readyState)&&u.body)e(n);else u.addEventListener("DOMContentLoaded",function(){e(n)},false);return this},get:function(t){return t===e?s.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null)this.parentNode.removeChild(this)})},each:function(e){i.every.call(this,function(t,n){return e.call(t,n,t)!==false});return this},filter:function(e){if(_(e))return this.not(this.not(e));return n(o.call(this,function(t){return N.matches(t,e)}))},add:function(e,t){return n(k(this.concat(n(e,t))))},is:function(e){return this.length>0&&N.matches(this[0],e)},not:function(t){var r=[];if(_(t)&&t.call!==e)this.each(function(e){if(!t.call(this,e))r.push(this)});else{var i=typeof t=="string"?this.filter(t):j(t)&&_(t.item)?s.call(t):n(t);this.forEach(function(e){if(i.indexOf(e)<0)r.push(e)})}return n(r)},has:function(e){return this.filter(function(){return H(e)?n.contains(this,e):n(this).find(e).size()})},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!H(e)?e:n(e)},last:function(){var e=this[this.length-1];return e&&!H(e)?e:n(e)},find:function(e){var t,r=this;if(!e)t=[];else if(typeof e=="object")t=n(e).filter(function(){var e=this;return i.some.call(r,function(t){return n.contains(t,e)})});else if(this.length==1)t=n(N.qsa(this[0],e));else t=this.map(function(){return N.qsa(this,e)});return t},closest:function(e,t){var r=this[0],i=false;if(typeof e=="object")i=n(e);while(r&&!(i?i.indexOf(r)>=0:N.matches(r,e)))r=r!==t&&!P(r)&&r.parentNode;return n(r)},parents:function(e){var t=[],r=this;while(r.length>0)r=n.map(r,function(e){if((e=e.parentNode)&&!P(e)&&t.indexOf(e)<0){t.push(e);return e}});return V(t,e)},parent:function(e){return V(k(this.pluck("parentNode")),e)},children:function(e){return V(this.map(function(){return W(this)}),e)},contents:function(){return this.map(function(){return s.call(this.childNodes)})},siblings:function(e){return V(this.map(function(e,t){return o.call(W(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return n.map(this,function(t){return t[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,"").getPropertyValue("display")=="none")this.style.display=z(this.nodeName)})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var t=_(e);if(this[0]&&!t)var r=n(e).get(0),i=r.parentNode||this.length>1;return this.each(function(s){n(this).wrapAll(t?e.call(this,s):i?r.cloneNode(true):r)})},wrapAll:function(e){if(this[0]){n(this[0]).before(e=n(e));var t;while((t=e.children()).length)e=t.first();n(e).append(this)}return this},wrapInner:function(e){var t=_(e);return this.each(function(r){var i=n(this),s=i.contents(),o=t?e.call(this,r):e;s.length?s.wrapAll(o):i.append(o)})},unwrap:function(){this.parent().each(function(){n(this).replaceWith(n(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(true)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var r=n(this);(t===e?r.css("display")=="none":t)?r.show():r.hide()})},prev:function(e){return n(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return n(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return 0 in arguments?this.each(function(t){var r=this.innerHTML;n(this).empty().append($(this,e,t,r))}):0 in this?this[0].innerHTML:null},text:function(e){return 0 in arguments?this.each(function(t){var n=$(this,e,t,this.textContent);this.textContent=n==null?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,r){var i;return typeof n=="string"&&!(1 in arguments)?!this.length||this[0].nodeType!==1?e:!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(e){if(this.nodeType!==1)return;if(H(n))for(t in n)J(this,t,n[t]);else J(this,n,$(this,r,e,this.getAttribute(n)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&J(this,e)})},prop:function(e,t){e=A[e]||e;return 1 in arguments?this.each(function(n){this[e]=$(this,t,n,this[e])}):this[0]&&this[0][e]},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase();var i=1 in arguments?this.attr(r,n):this.attr(r);return i!==null?Q(i):e},val:function(e){return 0 in arguments?this.each(function(t){this.value=$(this,e,t,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var r=n(this),i=$(this,e,t,r.offset()),s=r.offsetParent().offset(),o={top:i.top-s.top,left:i.left-s.left};if(r.css("position")=="static")o["position"]="relative";r.css(o)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(e,r){if(arguments.length<2){var i=this[0],s=getComputedStyle(i,"");if(!i)return;if(typeof e=="string")return i.style[C(e)]||s.getPropertyValue(e);else if(O(e)){var o={};n.each(O(e)?e:[e],function(e,t){o[t]=i.style[C(t)]||s.getPropertyValue(t)});return o}}var u="";if(M(e)=="string"){if(!r&&r!==0)this.each(function(){this.style.removeProperty(q(e))});else u=q(e)+":"+U(e,r)}else{for(t in e)if(!e[t]&&e[t]!==0)this.each(function(){this.style.removeProperty(q(t))});else u+=q(t)+":"+U(t,e[t])+";"}return this.each(function(){this.style.cssText+=";"+u})},index:function(e){return e?this.indexOf(n(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){if(!e)return false;return i.some.call(this,function(e){return this.test(K(e))},R(e))},addClass:function(e){if(!e)return this;return this.each(function(t){r=[];var i=K(this),s=$(this,e,t,i);s.split(/\s+/g).forEach(function(e){if(!n(this).hasClass(e))r.push(e)},this);r.length&&K(this,i+(i?" ":"")+r.join(" "))})},removeClass:function(t){return this.each(function(n){if(t===e)return K(this,"");r=K(this);$(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(R(e)," ")});K(this,r.trim())})},toggleClass:function(t,r){if(!t)return this;return this.each(function(i){var s=n(this),o=$(this,t,i,K(this));o.split(/\s+/g).forEach(function(t){(r===e?!s.hasClass(t):r)?s.addClass(t):s.removeClass(t)})})},scrollTop:function(t){if(!this.length)return;var n="scrollTop"in this[0];if(t===e)return n?this[0].scrollTop:this[0].pageYOffset;return this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})},scrollLeft:function(t){if(!this.length)return;var n="scrollLeft"in this[0];if(t===e)return n?this[0].scrollLeft:this[0].pageXOffset;return this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})},position:function(){if(!this.length)return;var e=this[0],t=this.offsetParent(),r=this.offset(),i=d.test(t[0].nodeName)?{top:0,left:0}:t.offset();r.top-=parseFloat(n(e).css("margin-top"))||0;r.left-=parseFloat(n(e).css("margin-left"))||0;i.top+=parseFloat(n(t[0]).css("border-top-width"))||0;i.left+=parseFloat(n(t[0]).css("border-left-width"))||0;return{top:r.top-i.top,left:r.left-i.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||u.body;while(e&&!d.test(e.nodeName)&&n(e).css("position")=="static")e=e.offsetParent;return e})}};n.fn.detach=n.fn.remove;["width","height"].forEach(function(t){var r=t.replace(/./,function(e){return e[0].toUpperCase()});n.fn[t]=function(i){var s,o=this[0];if(i===e)return D(o)?o["inner"+r]:P(o)?o.documentElement["scroll"+r]:(s=this.offset())&&s[t];else return this.each(function(e){o=n(this);o.css(t,$(this,i,e,o[t]()))})}});g.forEach(function(e,t){var r=t%2;n.fn[e]=function(){var e,i=n.map(arguments,function(t){e=M(t);return e=="object"||e=="array"||t==null?t:N.fragment(t)}),s,o=this.length>1;if(i.length<1)return this;return this.each(function(e,a){s=r?a:a.parentNode;a=t==0?a.nextSibling:t==1?a.firstChild:t==2?a:null;var f=u.documentElement.contains(s);i.forEach(function(e){if(o)e=e.cloneNode(true);else if(!s)return n(e).remove();s.insertBefore(e,a);if(f)G(e,function(e){if(e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&!e.src)window["eval"].call(window,e.innerHTML)})})})};n.fn[r?e+"To":"insert"+(t?"Before":"After")]=function(t){n(t)[e](this);return this}});N.Z.prototype=n.fn;N.uniq=k;N.deserializeValue=Q;n.zepto=N;return n}();window.Zepto=Zepto;window.$===undefined&&(window.$=Zepto);(function(e){function c(e){return e._zid||(e._zid=t++)}function h(e,t,n,r){t=p(t);if(t.ns)var i=d(t.ns);return(o[c(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||i.test(e.ns))&&(!n||c(e.fn)===c(n))&&(!r||e.sel==r)})}function p(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function d(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function v(e,t){return e.del&&!a&&e.e in f||!!t}function m(e){return l[e]||a&&f[e]||e}function g(t,r,i,s,u,a,f){var h=c(t),d=o[h]||(o[h]=[]);r.split(/\s/).forEach(function(r){if(r=="ready")return e(document).ready(i);var o=p(r);o.fn=i;o.sel=u;if(o.e in l)i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return o.fn.apply(this,arguments)};o.del=a;var c=a||i;o.proxy=function(e){e=x(e);if(e.isImmediatePropagationStopped())return;e.data=s;var r=c.apply(t,e._args==n?[e]:[e].concat(e._args));if(r===false)e.preventDefault(),e.stopPropagation();return r};o.i=d.length;d.push(o);if("addEventListener"in t)t.addEventListener(m(o.e),o.proxy,v(o,f))})}function y(e,t,n,r,i){var s=c(e);(t||"").split(/\s/).forEach(function(t){h(e,t,n,r).forEach(function(t){delete o[s][t.i];if("removeEventListener"in e)e.removeEventListener(m(t.e),t.proxy,v(t,i))})})}function x(t,r){if(r||!t.isDefaultPrevented){r||(r=t);e.each(S,function(e,n){var i=r[e];t[e]=function(){this[n]=b;return i&&i.apply(r,arguments)};t[n]=w});if(r.defaultPrevented!==n?r.defaultPrevented:"returnValue"in r?r.returnValue===false:r.getPreventDefault&&r.getPreventDefault())t.isDefaultPrevented=b}return t}function T(e){var t,r={originalEvent:e};for(t in e)if(!E.test(t)&&e[t]!==n)r[t]=e[t];return x(r,e)}var t=1,n,r=Array.prototype.slice,i=e.isFunction,s=function(e){return typeof e=="string"},o={},u={},a="onfocusin"in window,f={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents";e.event={add:g,remove:y};e.proxy=function(t,n){var o=2 in arguments&&r.call(arguments,2);if(i(t)){var u=function(){return t.apply(n,o?o.concat(r.call(arguments)):arguments)};u._zid=c(t);return u}else if(s(n)){if(o){o.unshift(t[n],t);return e.proxy.apply(null,o)}else{return e.proxy(t[n],t)}}else{throw new TypeError("expected function")}};e.fn.bind=function(e,t,n){return this.on(e,t,n)};e.fn.unbind=function(e,t){return this.off(e,t)};e.fn.one=function(e,t,n,r){return this.on(e,t,n,r,1)};var b=function(){return true},w=function(){return false},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)};e.fn.undelegate=function(e,t,n){return this.off(t,e,n)};e.fn.live=function(t,n){e(document.body).delegate(this.selector,t,n);return this};e.fn.die=function(t,n){e(document.body).undelegate(this.selector,t,n);return this};e.fn.on=function(t,o,u,a,f){var l,c,h=this;if(t&&!s(t)){e.each(t,function(e,t){h.on(e,o,u,t,f)});return h}if(!s(o)&&!i(a)&&a!==false)a=u,u=o,o=n;if(i(u)||u===false)a=u,u=n;if(a===false)a=w;return h.each(function(n,i){if(f)l=function(e){y(i,e.type,a);return a.apply(this,arguments)};if(o)c=function(t){var n,s=e(t.target).closest(o,i).get(0);if(s&&s!==i){n=e.extend(T(t),{currentTarget:s,liveFired:i});return(l||a).apply(s,[n].concat(r.call(arguments,1)))}};g(i,t,a,u,o,c||l)})};e.fn.off=function(t,r,o){var u=this;if(t&&!s(t)){e.each(t,function(e,t){u.off(e,r,t)});return u}if(!s(r)&&!i(o)&&o!==false)o=r,r=n;if(o===false)o=w;return u.each(function(){y(this,t,o,r)})};e.fn.trigger=function(t,n){t=s(t)||e.isPlainObject(t)?e.Event(t):x(t);t._args=n;return this.each(function(){if("dispatchEvent"in this)this.dispatchEvent(t);else e(this).triggerHandler(t,n)})};e.fn.triggerHandler=function(t,n){var r,i;this.each(function(o,u){r=T(s(t)?e.Event(t):t);r._args=n;r.target=u;e.each(h(u,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return false})});return i};("focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select keydown keypress keyup error").split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}});["focus","blur"].forEach(function(t){e.fn[t]=function(e){if(e)this.bind(t,e);else this.each(function(){try{this[t]()}catch(e){}});return this}});e.Event=function(e,t){if(!s(e))t=e,e=t.type;var n=document.createEvent(u[e]||"Events"),r=true;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];n.initEvent(e,r,true);return x(n)}})(Zepto);(function($){function triggerAndReturn(e,t,n){var r=$.Event(t);$(e).trigger(r,n);return!r.isDefaultPrevented()}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){if(e.global&&$.active++===0)triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){if(e.global&&!--$.active)triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===false||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===false)return false;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n,r){var i=n.context,s="success";n.success.call(i,e,s,t);if(r)r.resolveWith(i,[e,s,t]);triggerGlobal(n,i,"ajaxSuccess",[t,n,e]);ajaxComplete(s,t,n)}function ajaxError(e,t,n,r,i){var s=r.context;r.error.call(s,n,t,e);if(i)i.rejectWith(s,[n,t,e]);triggerGlobal(r,s,"ajaxError",[n,r,e||t]);ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e);triggerGlobal(n,r,"ajaxComplete",[t,n]);ajaxStop(n)}function empty(){}function mimeToDataType(e){if(e)e=e.split(";",2)[0];return e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){if(t=="")return e;return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){if(e.processData&&e.data&&$.type(e.data)!="string")e.data=$.param(e.data,e.traditional);if(e.data&&(!e.type||e.type.toUpperCase()=="GET"))e.url=appendQuery(e.url,e.data),e.data=undefined}function parseArguments(e,t,n,r){if($.isFunction(t))r=n,n=t,t=undefined;if(!$.isFunction(n))r=n,n=undefined;return{url:e,data:t,success:n,dataType:r}}function serialize(e,t,n,r){var i,s=$.isArray(t),o=$.isPlainObject(t);$.each(t,function(t,u){i=$.type(u);if(r)t=n?r:r+"["+(o||i=="object"||i=="array"?t:"")+"]";if(!r&&s)e.add(u.name,u.value);else if(i=="array"||!n&&i=="object")serialize(e,u,n,t);else e.add(t,u)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0;$.ajaxJSONP=function(e,t){if(!("type"in e))return $.ajax(e);var n=e.jsonpCallback,r=($.isFunction(n)?n():n)||"jsonp"+ ++jsonpID,i=document.createElement("script"),s=window[r],o,u=function(e){$(i).triggerHandler("error",e||"abort")},a={abort:u},f;if(t)t.promise(a);$(i).on("load error",function(n,u){clearTimeout(f);$(i).off().remove();if(n.type=="error"||!o){ajaxError(null,u||"error",a,e,t)}else{ajaxSuccess(o[0],a,e,t)}window[r]=s;if(o&&$.isFunction(s))s(o[0]);s=o=undefined});if(ajaxBeforeSend(a,e)===false){u("abort");return a}window[r]=function(){o=arguments};i.src=e.url.replace(/\?(.+)=\?/,"?$1="+r);document.head.appendChild(i);if(e.timeout>0)f=setTimeout(function(){u("timeout")},e.timeout);return a};$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:true,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:false,timeout:0,processData:true,cache:true};$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred();for(key in $.ajaxSettings)if(settings[key]===undefined)settings[key]=$.ajaxSettings[key];ajaxStart(settings);if(!settings.crossDomain)settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host;if(!settings.url)settings.url=window.location.toString();serializeData(settings);if(settings.cache===false)settings.url=appendQuery(settings.url,"_="+Date.now());var dataType=settings.dataType,hasPlaceholder=/\?.+=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder){if(!hasPlaceholder)settings.url=appendQuery(settings.url,settings.jsonp?settings.jsonp+"=?":settings.jsonp===false?"":"callback=?");return $.ajaxJSONP(settings,deferred)}var mime=settings.accepts[dataType],headers={},setHeader=function(e,t){headers[e.toLowerCase()]=[e,t]},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),nativeSetHeader=xhr.setRequestHeader,abortTimeout;if(deferred)deferred.promise(xhr);if(!settings.crossDomain)setHeader("X-Requested-With","XMLHttpRequest");setHeader("Accept",mime||"*/*");if(mime=settings.mimeType||mime){if(mime.indexOf(",")>-1)mime=mime.split(",",2)[0];xhr.overrideMimeType&&xhr.overrideMimeType(mime)}if(settings.contentType||settings.contentType!==false&&settings.data&&settings.type.toUpperCase()!="GET")setHeader("Content-Type",settings.contentType||"application/x-www-form-urlencoded");if(settings.headers)for(name in settings.headers)setHeader(name,settings.headers[name]);xhr.setRequestHeader=setHeader;xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty;clearTimeout(abortTimeout);var result,error=false;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type"));result=xhr.responseText;try{if(dataType=="script")(1,eval)(result);else if(dataType=="xml")result=xhr.responseXML;else if(dataType=="json")result=blankRE.test(result)?null:$.parseJSON(result)}catch(e){error=e}if(error)ajaxError(error,"parsererror",xhr,settings,deferred);else ajaxSuccess(result,xhr,settings,deferred)}else{ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred)}}};if(ajaxBeforeSend(xhr,settings)===false){xhr.abort();ajaxError(null,"abort",xhr,settings,deferred);return xhr}if(settings.xhrFields)for(name in settings.xhrFields)xhr[name]=settings.xhrFields[name];var async="async"in settings?settings.async:true;xhr.open(settings.type,settings.url,async,settings.username,settings.password);for(name in headers)nativeSetHeader.apply(xhr,headers[name]);if(settings.timeout>0)abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty;xhr.abort();ajaxError(null,"timeout",xhr,settings,deferred)},settings.timeout);xhr.send(settings.data?settings.data:null);return xhr};$.get=function(){return $.ajax(parseArguments.apply(null,arguments))};$.post=function(){var e=parseArguments.apply(null,arguments);e.type="POST";return $.ajax(e)};$.getJSON=function(){var e=parseArguments.apply(null,arguments);e.dataType="json";return $.ajax(e)};$.fn.load=function(e,t,n){if(!this.length)return this;var r=this,i=e.split(/\s/),s,o=parseArguments(e,t,n),u=o.success;if(i.length>1)o.url=i[0],s=i[1];o.success=function(e){r.html(s?$("<div>").html(e.replace(rscript,"")).find(s):e);u&&u.apply(r,arguments)};$.ajax(o);return this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];n.add=function(e,t){this.push(escape(e)+"="+escape(t))};serialize(n,e,t);return n.join("&").replace(/%20/g,"+")}})(Zepto);(function(e){e.fn.serializeArray=function(){var t=[],n;e([].slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");if(this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked))t.push({name:n.attr("name"),value:n.val()})});return t};e.fn.serialize=function(){var e=[];this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))});return e.join("&")};e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n);if(!n.isDefaultPrevented())this.get(0).submit()}return this}})(Zepto);(function(e){if(!("__proto__"in{})){e.extend(e.zepto,{Z:function(t,n){t=t||[];e.extend(t,e.fn);t.selector=n||"";t.__Z=true;return t},isZ:function(t){return e.type(t)==="array"&&"__Z"in t}})}try{getComputedStyle(undefined)}catch(t){var n=getComputedStyle;window.getComputedStyle=function(e){try{return n(e)}catch(t){return null}}}})(Zepto);(function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=!!e.match(/\(Macintosh\; Intel /),o=e.match(/(iPad).*OS\s([\d_]+)/),u=e.match(/(iPod)(.*OS\s([\d_]+))?/),a=!o&&e.match(/(iPhone\sOS)\s([\d_]+)/),f=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=e.match(/Windows Phone ([\d.]+)/),c=f&&e.match(/TouchPad/),h=e.match(/Kindle\/([\d.]+)/),p=e.match(/Silk\/([\d._]+)/),d=e.match(/(BlackBerry).*Version\/([\d.]+)/),v=e.match(/(BB10).*Version\/([\d.]+)/),m=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=e.match(/PlayBook/),y=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),b=e.match(/Firefox\/([\d.]+)/),w=e.match(/MSIE\s([\d.]+)/)||e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),E=!y&&e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),S=E||e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);if(n.webkit=!!r)n.version=r[1];if(i)t.android=true,t.version=i[2];if(a&&!u)t.ios=t.iphone=true,t.version=a[2].replace(/_/g,".");if(o)t.ios=t.ipad=true,t.version=o[2].replace(/_/g,".");if(u)t.ios=t.ipod=true,t.version=u[3]?u[3].replace(/_/g,"."):null;if(l)t.wp=true,t.version=l[1];if(f)t.webos=true,t.version=f[2];if(c)t.touchpad=true;if(d)t.blackberry=true,t.version=d[2];if(v)t.bb10=true,t.version=v[2];if(m)t.rimtabletos=true,t.version=m[2];if(g)n.playbook=true;if(h)t.kindle=true,t.version=h[1];if(p)n.silk=true,n.version=p[1];if(!p&&t.android&&e.match(/Kindle Fire/))n.silk=true;if(y)n.chrome=true,n.version=y[1];if(b)n.firefox=true,n.version=b[1];if(w)n.ie=true,n.version=w[1];if(S&&(s||t.ios)){n.safari=true;if(s)n.version=S[1]}if(E)n.webview=true;t.tablet=!!(o||g||i&&!e.match(/Mobile/)||b&&e.match(/Tablet/)||w&&!e.match(/Phone/)&&e.match(/Touch/));t.phone=!!(!t.tablet&&!t.ipod&&(i||a||f||d||v||y&&e.match(/Android/)||y&&e.match(/CriOS\/([\d.]+)/)||b&&e.match(/Mobile/)||w&&e.match(/Touch/)))}t.call(e,navigator.userAgent);e.__detect=t})(Zepto);(function(e){function o(s,o){var a=s[i],f=a&&t[a];if(o===undefined)return f||u(s);else{if(f){if(o in f)return f[o];var l=r(o);if(l in f)return f[l]}return n.call(e(s),o)}}function u(n,s,o){var u=n[i]||(n[i]=++e.uuid),f=t[u]||(t[u]=a(n));if(s!==undefined)f[r(s)]=o;return f}function a(t){var n={};e.each(t.attributes||s,function(t,i){if(i.name.indexOf("data-")==0)n[r(i.name.replace("data-",""))]=e.zepto.deserializeValue(i.value)});return n}var t={},n=e.fn.data,r=e.camelCase,i=e.expando="Zepto"+ +(new Date),s=[];e.fn.data=function(t,n){return n===undefined?e.isPlainObject(t)?this.each(function(n,r){e.each(t,function(e,t){u(r,e,t)})}):0 in this?o(this[0],t):undefined:this.each(function(){u(this,t,n)})};e.fn.removeData=function(n){if(typeof n=="string")n=n.split(/\s+/);return this.each(function(){var s=this[i],o=s&&t[s];if(o)e.each(n||o,function(e){delete o[n?r(this):e]})})};["remove","empty"].forEach(function(t){var n=e.fn[t];e.fn[t]=function(){var e=this.find("*");if(t==="remove")e=e.add(this);e.removeData();return n.call(this)}})})(Zepto);(function(e){function n(t){var r=[["resolve","done",e.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",e.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",e.Callbacks({memory:1})]],i="pending",s={state:function(){return i},always:function(){o.done(arguments).fail(arguments);return this},then:function(){var t=arguments;return n(function(n){e.each(r,function(r,i){var u=e.isFunction(t[r])&&t[r];o[i[1]](function(){var t=u&&u.apply(this,arguments);if(t&&e.isFunction(t.promise)){t.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{var r=this===s?n.promise():this,o=u?[t]:arguments;n[i[0]+"With"](r,o)}})});t=null}).promise()},promise:function(t){return t!=null?e.extend(t,s):s}},o={};e.each(r,function(e,t){var n=t[2],u=t[3];s[t[1]]=n.add;if(u){n.add(function(){i=u},r[e^1][2].disable,r[2][2].lock)}o[t[0]]=function(){o[t[0]+"With"](this===o?s:this,arguments);return this};o[t[0]+"With"]=n.fireWith});s.promise(o);if(t)t.call(o,o);return o}var t=Array.prototype.slice;e.when=function(r){var i=t.call(arguments),s=i.length,o=0,u=s!==1||r&&e.isFunction(r.promise)?s:0,a=u===1?r:n(),f,l,c,h=function(e,n,r){return function(i){n[e]=this;r[e]=arguments.length>1?t.call(arguments):i;if(r===f){a.notifyWith(n,r)}else if(!--u){a.resolveWith(n,r)}}};if(s>1){f=new Array(s);l=new Array(s);c=new Array(s);for(;o<s;++o){if(i[o]&&e.isFunction(i[o].promise)){i[o].promise().done(h(o,c,i)).fail(a.reject).progress(h(o,l,f))}else{--u}}}if(!u)a.resolveWith(c,i);return a.promise()};e.Deferred=n})(Zepto);(function(e){e.Callbacks=function(t){t=e.extend({},t);var n,r,i,s,o,u,a=[],f=!t.once&&[],l=function(e){n=t.memory&&e;r=true;u=s||0;s=0;o=a.length;i=true;for(;a&&u<o;++u){if(a[u].apply(e[0],e[1])===false&&t.stopOnFalse){n=false;break}}i=false;if(a){if(f)f.length&&l(f.shift());else if(n)a.length=0;else c.disable()}},c={add:function(){if(a){var r=a.length,u=function(n){e.each(n,function(e,n){if(typeof n==="function"){if(!t.unique||!c.has(n))a.push(n)}else if(n&&n.length&&typeof n!=="string")u(n)})};u(arguments);if(i)o=a.length;else if(n){s=r;l(n)}}return this},remove:function(){if(a){e.each(arguments,function(t,n){var r;while((r=e.inArray(n,a,r))>-1){a.splice(r,1);if(i){if(r<=o)--o;if(r<=u)--u}}})}return this},has:function(t){return!!(a&&(t?e.inArray(t,a)>-1:a.length))},empty:function(){o=a.length=0;return this},disable:function(){a=f=n=undefined;return this},disabled:function(){return!a},lock:function(){f=undefined;if(!n)c.disable();return this},locked:function(){return!f},fireWith:function(e,t){if(a&&(!r||f)){t=t||[];t=[e,t.slice?t.slice():t];if(i)f.push(t);else l(t)}return this},fire:function(){return c.fireWith(this,arguments)},fired:function(){return!!r}};return c}})(Zepto);(function(){var e=QApp.util;var t={eventType:"tap"};QApp.addPlugin("zepto",t,function(t,n){var r=t.options.ready;if(e.isFunction(r)){t.options.ready=function(){var e=Zepto(this.root);r.call(this,e)}}t.on("loaded",function(){if(t.options.bindActions){e.each(t.options.bindActions,function(r,i){var s=r.split(":"),o=s[0],u=s[1]||n.eventType;if(e.isFunction(i)){Zepto(t.root).delegate(o,u,function(e){return i.call(t,e)})}else{Zepto(t.root).delegate(o,u,function(n){if(e.isFunction(t[i])){return t[i].call(t,n)}})}})}})})})()}(module.exports,module,__context);__context.____MODULES["da73d8a6f60c849ff1cbc63ff4884540"]=module.exports})(this);(function(e){var t={id:"b08d751aa3ddf5c37b9a6eacdf9ef2c9",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(e,n,r){function o(e,t){this.wrapper=typeof e=="string"?n.querySelector(e):e;this.scroller=this.wrapper.children[0];this.scrollerStyle=this.scroller.style;this.options={alwaysScrollY:true,resizeScrollbars:true,mouseWheelSpeed:20,allwaysScrollY:true,snapThreshold:.334,startX:0,startY:0,scrollY:true,directionLockThreshold:5,momentum:true,bounce:true,bounceTime:600,bounceEasing:"",preventDefault:true,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:true,useTransition:true,useTransform:true};for(var r in t){this.options[r]=t[r]}this.translateZ=this.options.HWCompositing&&s.hasPerspective?" translateZ(0)":"";this.options.useTransition=s.hasTransition&&this.options.useTransition;this.options.useTransform=s.hasTransform&&this.options.useTransform;this.options.eventPassthrough=this.options.eventPassthrough===true?"vertical":this.options.eventPassthrough;this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;this.options.scrollY=this.options.eventPassthrough=="vertical"?false:this.options.scrollY;this.options.scrollX=this.options.eventPassthrough=="horizontal"?false:this.options.scrollX;this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;this.options.bounceEasing=typeof this.options.bounceEasing=="string"?s.ease[this.options.bounceEasing]||s.ease.circular:this.options.bounceEasing;this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling;if(this.options.tap===true){this.options.tap="tap"}if(this.options.shrinkScrollbars=="scale"){this.options.useTransition=false}this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1;if(this.options.probeType==3){this.options.useTransition=false}this.x=0;this.y=0;this.directionX=0;this.directionY=0;this._events={};this._init();this.refresh();this.scrollTo(this.options.startX,this.options.startY);this.enable()}function u(e,t,r){var i=n.createElement("div"),s=n.createElement("div");if(r===true){i.style.cssText="position:absolute;z-index:9999";s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"}s.className="iScrollIndicator";if(e=="h"){if(r===true){i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0";s.style.height="100%"}i.className="iScrollHorizontalScrollbar"}else{if(r===true){i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px";s.style.width="100%"}i.className="iScrollVerticalScrollbar"}i.style.cssText+=";overflow:hidden";if(!t){i.style.pointerEvents="none"}i.appendChild(s);return i}function a(t,r){this.wrapper=typeof r.el=="string"?n.querySelector(r.el):r.el;this.wrapperStyle=this.wrapper.style;this.indicator=this.wrapper.children[0];this.indicatorStyle=this.indicator.style;this.scroller=t;this.options={listenX:true,listenY:true,interactive:false,resize:true,defaultScrollbars:false,shrink:false,fade:false,speedRatioX:0,speedRatioY:0};for(var i in r){this.options[i]=r[i]}this.sizeRatioX=1;this.sizeRatioY=1;this.maxPosX=0;this.maxPosY=0;if(this.options.interactive){if(!this.options.disableTouch){s.addEvent(this.indicator,"touchstart",this);s.addEvent(e,"touchend",this)}if(!this.options.disablePointer){s.addEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this);s.addEvent(e,s.prefixPointerEvent("pointerup"),this)}if(!this.options.disableMouse){s.addEvent(this.indicator,"mousedown",this);s.addEvent(e,"mouseup",this)}}if(this.options.fade){this.wrapperStyle[s.style.transform]=this.scroller.translateZ;this.wrapperStyle[s.style.transitionDuration]=s.isBadAndroid?"0.001s":"0ms";this.wrapperStyle.opacity="0"}}var i=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)};var s=function(){function o(e){if(s===false)return false;if(s==="")return e;return s+e.charAt(0).toUpperCase()+e.substr(1)}var t={};var i=n.createElement("div").style;var s=function(){var e=["t","webkitT","MozT","msT","OT"],t,n=0,r=e.length;for(;n<r;n++){t=e[n]+"ransform";if(t in i)return e[n].substr(0,e[n].length-1)}return false}();t.getTime=Date.now||function(){return(new Date).getTime()};t.extend=function(e,t){for(var n in t){e[n]=t[n]}};t.addEvent=function(e,t,n,r){e.addEventListener(t,n,!!r)};t.removeEvent=function(e,t,n,r){e.removeEventListener(t,n,!!r)};t.prefixPointerEvent=function(t){return e.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t};t.momentum=function(e,t,n,i,s,o){var u=e-t,a=r.abs(u)/n,f,l;o=o===undefined?6e-4:o;f=e+a*a/(2*o)*(u<0?-1:1);l=a/o;if(f<i){f=s?i-s/2.5*(a/8):i;u=r.abs(f-e);l=u/a}else if(f>0){f=s?s/2.5*(a/8):0;u=r.abs(e)+f;l=u/a}return{destination:r.round(f),duration:l}};var u=o("transform");t.extend(t,{hasTransform:u!==false,hasPerspective:o("perspective")in i,hasTouch:"ontouchstart"in e,hasPointer:e.PointerEvent||e.MSPointerEvent,hasTransition:o("transition")in i});t.isBadAndroid=/Android /.test(e.navigator.appVersion)&&!/Chrome\/\d/.test(e.navigator.appVersion);t.extend(t.style={},{transform:u,transitionTimingFunction:o("transitionTimingFunction"),transitionDuration:o("transitionDuration"),transitionDelay:o("transitionDelay"),transformOrigin:o("transformOrigin")});t.hasClass=function(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)};t.addClass=function(e,n){if(t.hasClass(e,n)){return}var r=e.className.split(" ");r.push(n);e.className=r.join(" ")};t.removeClass=function(e,n){if(!t.hasClass(e,n)){return}var r=new RegExp("(^|\\s)"+n+"(\\s|$)","g");e.className=e.className.replace(r," ")};t.offset=function(e){var t=-e.offsetLeft,n=-e.offsetTop;while(e=e.offsetParent){t-=e.offsetLeft;n-=e.offsetTop}return{left:t,top:n}};t.preventDefaultException=function(e,t){for(var n in t){if(t[n].test(e[n])){return true}}return false};t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return r.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e=e-1)*e*((t+1)*e+t)+1}},bounce:{style:"",fn:function(e){if((e/=1)<1/2.75){return 7.5625*e*e}else if(e<2/2.75){return 7.5625*(e-=1.5/2.75)*e+.75}else if(e<2.5/2.75){return 7.5625*(e-=2.25/2.75)*e+.9375}else{return 7.5625*(e-=2.625/2.75)*e+.984375}}},elastic:{style:"",fn:function(e){var t=.22,n=.4;if(e===0){return 0}if(e==1){return 1}return n*r.pow(2,-10*e)*r.sin((e-t/4)*2*r.PI/t)+1}}});t.tap=function(e,t){var r=n.createEvent("Event");r.initEvent(t,true,true);r.pageX=e.pageX;r.pageY=e.pageY;e.target.dispatchEvent(r)};t.click=function(e){var t=e.target,r;if(!/(SELECT|INPUT|TEXTAREA)/i.test(t.tagName)){r=n.createEvent("MouseEvents");r.initMouseEvent("click",true,true,e.view,1,t.screenX,t.screenY,t.clientX,t.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);r._constructed=true;t.dispatchEvent(r)}};t.sniff=function(){var e={isAndroid:false,osVersionN:0};if(QApp&&QApp.sniff){var t=QApp.sniff;e.isAndroid=t.android;e.osVersionN=t.osVersionN}else{}return e}();return t}();o.prototype={version:"5.1.3",_init:function(){this._initEvents();if(this.options.scrollbars||this.options.indicators){this._initIndicators()}if(this.options.mouseWheel){this._initWheel()}if(this.options.snap){this._initSnap()}if(this.options.keyBindings){this._initKeys()}},destroy:function(){this._initEvents(true);this._execEvent("destroy")},_transitionEnd:function(e){if(e.target!=this.scroller||!this.isInTransition){return}this._transitionTime();if(!this.resetPosition(this.options.bounceTime)){this.isInTransition=false;this._execEvent("scrollEnd")}},_start:function(e){if(e.target.className.toLowerCase()=="scrolltextarea"){this.scrollT=e.target.scrollTop}if(s.eventType[e.type]!=1){if(e.button!==0){return}}if(!this.enabled||this.initiated&&s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault&&!s.isBadAndroid&&!s.preventDefaultException(e.target,this.options.preventDefaultException)){e.preventDefault()}var t=e.touches?e.touches[0]:e,n;this.initiated=s.eventType[e.type];this.moved=false;this.distX=0;this.distY=0;this.directionX=0;this.directionY=0;this.directionLocked=0;this._transitionTime();this.startTime=s.getTime();if(this.options.useTransition&&this.isInTransition){this.isInTransition=false;n=this.getComputedPosition();this._translate(r.round(n.x),r.round(n.y));this._execEvent("scrollEnd")}else if(!this.options.useTransition&&this.isAnimating){this.isAnimating=false;this._execEvent("scrollEnd")}this.startX=this.x;this.startY=this.y;this.absStartX=this.x;this.absStartY=this.y;this.pointX=t.pageX;this.pointY=t.pageY;this._execEvent("beforeScrollStart")},_move:function(e){if(e.target.className.toLowerCase()=="scrolltextarea"){if(e.target.scrollTop!=this.scrollT){return}}if(!this.enabled||s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault){e.preventDefault()}else if(s.sniff.isAndroid&&s.sniff.osVersionN<5){e.preventDefault()}var t=e.touches?e.touches[0]:e,n=t.pageX-this.pointX,i=t.pageY-this.pointY,o=s.getTime(),u,a,f,l;this.pointX=t.pageX;this.pointY=t.pageY;this.distX+=n;this.distY+=i;f=r.abs(this.distX);l=r.abs(this.distY);if(o-this.endTime>300&&f<10&&l<10){return}if(!this.directionLocked&&!this.options.freeScroll){if(f>l+this.options.directionLockThreshold){this.directionLocked="h"}else if(l>=f+this.options.directionLockThreshold){this.directionLocked="v"}else{this.directionLocked="n"}}if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical"){e.preventDefault()}else if(this.options.eventPassthrough=="horizontal"){this.initiated=false;return}i=0}else if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal"){e.preventDefault()}else if(this.options.eventPassthrough=="vertical"){this.initiated=false;return}n=0}n=this.hasHorizontalScroll?n:0;i=this.hasVerticalScroll?i:0;u=this.x+n;a=this.y+i;if(u>0||u<this.maxScrollX){u=this.options.bounce?this.x+n/3:u>0?0:this.maxScrollX}if(a>0||a<this.maxScrollY){a=this.options.bounce?this.y+i/3:a>0?0:this.maxScrollY}this.directionX=n>0?-1:n<0?1:0;this.directionY=i>0?-1:i<0?1:0;if(!this.moved){this._execEvent("scrollStart")}this.moved=true;this._translate(u,a);if(o-this.startTime>300){this.startTime=o;this.startX=this.x;this.startY=this.y;if(this.options.probeType==1){this._execEvent("scroll")}}if(this.options.probeType>1){this._execEvent("scroll")}},_end:function(e){if(!this.enabled||s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault&&!s.preventDefaultException(e.target,this.options.preventDefaultException)){e.preventDefault()}var t=e.changedTouches?e.changedTouches[0]:e,n,i,o=s.getTime()-this.startTime,u=r.round(this.x),a=r.round(this.y),f=r.abs(u-this.startX),l=r.abs(a-this.startY),c=0,h="";this.isInTransition=0;this.initiated=0;this.endTime=s.getTime();if(this.resetPosition(this.options.bounceTime)){return}this.scrollTo(u,a);if(!this.moved){if(this.options.tap){s.tap(e,this.options.tap)}if(this.options.click){s.click(e)}this._execEvent("scrollCancel");return}if(this._events.flick&&o<200&&f<100&&l<100){this._execEvent("flick");return}if(this.options.momentum&&o<300){n=this.hasHorizontalScroll?s.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:u,duration:0};i=this.hasVerticalScroll?s.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:a,duration:0};u=n.destination;a=i.destination;c=r.max(n.duration,i.duration);this.isInTransition=1}if(this.options.snap){var p=this._nearestSnap(u,a);this.currentPage=p;c=this.options.snapSpeed||r.max(r.max(r.min(r.abs(u-p.x),1e3),r.min(r.abs(a-p.y),1e3)),300);u=p.x;a=p.y;this.directionX=0;this.directionY=0;h=this.options.bounceEasing}if(u!=this.x||a!=this.y){if(u>0||u<this.maxScrollX||a>0||a<this.maxScrollY){h=s.ease.quadratic}this.scrollTo(u,a,c,h);return}this._execEvent("scrollEnd")},_resize:function(){var e=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,n=this.y;e=e||0;if(!this.hasHorizontalScroll||this.x>0){t=0}else if(this.x<this.maxScrollX){t=this.maxScrollX}if(!this.hasVerticalScroll||this.y>0){n=0}else if(this.y<this.maxScrollY){n=this.maxScrollY}if(t==this.x&&n==this.y){return false}this.scrollTo(t,n,e,this.options.bounceEasing);return true},disable:function(){this.enabled=false},enable:function(){this.enabled=true},refresh:function(){var e=this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth;this.wrapperHeight=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth;this.scrollerHeight=this.scroller.offsetHeight;if(this.options.allwaysScrollY){if(this.scrollerHeight<this.wrapperHeight){this.scrollerHeight=this.wrapperHeight+1}}this.maxScrollX=this.wrapperWidth-this.scrollerWidth;this.maxScrollY=this.wrapperHeight-this.scrollerHeight;this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0;this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0;if(!this.hasHorizontalScroll){this.maxScrollX=0;this.scrollerWidth=this.wrapperWidth}if(!this.hasVerticalScroll){this.maxScrollY=0;this.scrollerHeight=this.wrapperHeight}this.endTime=0;this.directionX=0;this.directionY=0;this.wrapperOffset=s.offset(this.wrapper);this._execEvent("refresh");this.resetPosition()},on:function(e,t){if(!this._events[e]){this._events[e]=[]}this._events[e].push(t)},off:function(e,t){if(!this._events[e]){return}var n=this._events[e].indexOf(t);if(n>-1){this._events[e].splice(n,1)}},_execEvent:function(e){if(!this._events[e]){return}var t=0,n=this._events[e].length;if(!n){return}for(;t<n;t++){this._events[e][t].apply(this,[].slice.call(arguments,1))}},scrollBy:function(e,t,n,r){e=this.x+e;t=this.y+t;n=n||0;this.scrollTo(e,t,n,r)},scrollTo:function(e,t,n,r){r=r||s.ease.circular;this.isInTransition=this.options.useTransition&&n>0;if(!n||this.options.useTransition&&r.style){this._transitionTimingFunction(r.style);this._transitionTime(n);this._translate(e,t)}else{this._animate(e,t,n,r.fn)}},scrollToElement:function(e,t,n,i,o){e=e.nodeType?e:this.scroller.querySelector(e);if(!e){return}var u=s.offset(e);u.left-=this.wrapperOffset.left;u.top-=this.wrapperOffset.top;if(n===true){n=r.round(e.offsetWidth/2-this.wrapper.offsetWidth/2)}if(i===true){i=r.round(e.offsetHeight/2-this.wrapper.offsetHeight/2)}u.left-=n||0;u.top-=i||0;u.left=u.left>0?0:u.left<this.maxScrollX?this.maxScrollX:u.left;u.top=u.top>0?0:u.top<this.maxScrollY?this.maxScrollY:u.top;t=t===undefined||t===null||t==="auto"?r.max(r.abs(this.x-u.left),r.abs(this.y-u.top)):t;this.scrollTo(u.left,u.top,t,o)},_transitionTime:function(e){e=e||0;this.scrollerStyle[s.style.transitionDuration]=e+"ms";if(!e&&s.isBadAndroid){this.scrollerStyle[s.style.transitionDuration]="0.001s"}if(this.indicators){for(var t=this.indicators.length;t--;){this.indicators[t].transitionTime(e)}}},_transitionTimingFunction:function(e){this.scrollerStyle[s.style.transitionTimingFunction]=e;if(this.indicators){for(var t=this.indicators.length;t--;){this.indicators[t].transitionTimingFunction(e)}}},_translate:function(e,t){if(this.options.useTransform){this.scrollerStyle[s.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ}else{e=r.round(e);t=r.round(t);this.scrollerStyle.left=e+"px";this.scrollerStyle.top=t+"px"}this.x=e;this.y=t;if(this.indicators){for(var n=this.indicators.length;n--;){this.indicators[n].updatePosition()}}},_initEvents:function(t){var n=t?s.removeEvent:s.addEvent,r=this.options.bindToWrapper?this.wrapper:e;n(e,"orientationchange",this);n(e,"resize",this);if(this.options.click){n(this.wrapper,"click",this,true)}if(!this.options.disableMouse){n(this.wrapper,"mousedown",this);n(r,"mousemove",this);n(r,"mousecancel",this);n(r,"mouseup",this)}if(s.hasPointer&&!this.options.disablePointer){n(this.wrapper,s.prefixPointerEvent("pointerdown"),this);n(r,s.prefixPointerEvent("pointermove"),this);n(r,s.prefixPointerEvent("pointercancel"),this);n(r,s.prefixPointerEvent("pointerup"),this)}if(s.hasTouch&&!this.options.disableTouch){n(this.wrapper,"touchstart",this);n(r,"touchmove",this);n(r,"touchcancel",this);n(r,"touchend",this)}n(this.scroller,"transitionend",this);n(this.scroller,"webkitTransitionEnd",this);n(this.scroller,"oTransitionEnd",this);n(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t=e.getComputedStyle(this.scroller,null),n,r;if(this.options.useTransform){t=t[s.style.transform].split(")")[0].split(", ");n=+(t[12]||t[4]);r=+(t[13]||t[5])}else{n=+t.left.replace(/[^-\d.]/g,"");r=+t.top.replace(/[^-\d.]/g,"")}return{x:n,y:r}},_initIndicators:function(){function o(e){for(var t=i.indicators.length;t--;){e.call(i.indicators[t])}}var e=this.options.interactiveScrollbars,t=typeof this.options.scrollbars!="string",n=[],r;var i=this;this.indicators=[];if(this.options.scrollbars){if(this.options.scrollY){r={el:u("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:true,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:false};this.wrapper.appendChild(r.el);n.push(r)}if(this.options.scrollX){r={el:u("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:true,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:false};this.wrapper.appendChild(r.el);n.push(r)}}if(this.options.indicators){n=n.concat(this.options.indicators)}for(var s=n.length;s--;){this.indicators.push(new a(this,n[s]))}if(this.options.fadeScrollbars){this.on("scrollEnd",function(){o(function(){this.fade()})});this.on("scrollCancel",function(){o(function(){this.fade()})});this.on("scrollStart",function(){o(function(){this.fade(1)})});this.on("beforeScrollStart",function(){o(function(){this.fade(1,true)})})}this.on("refresh",function(){o(function(){this.refresh()})});this.on("destroy",function(){o(function(){this.destroy()});delete this.indicators})},_initWheel:function(){s.addEvent(this.wrapper,"wheel",this);s.addEvent(this.wrapper,"mousewheel",this);s.addEvent(this.wrapper,"DOMMouseScroll",this);this.on("destroy",function(){s.removeEvent(this.wrapper,"wheel",this);s.removeEvent(this.wrapper,"mousewheel",this);s.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(!this.enabled){return}e.preventDefault();e.stopPropagation();var t,n,i,s,o=this;if(this.wheelTimeout===undefined){o._execEvent("scrollStart")}clearTimeout(this.wheelTimeout);this.wheelTimeout=setTimeout(function(){o._execEvent("scrollEnd");o.wheelTimeout=undefined},400);if("deltaX"in e){if(e.deltaMode===1){t=-e.deltaX*this.options.mouseWheelSpeed;n=-e.deltaY*this.options.mouseWheelSpeed}else{t=-e.deltaX;n=-e.deltaY}}else if("wheelDeltaX"in e){t=e.wheelDeltaX/120*this.options.mouseWheelSpeed;n=e.wheelDeltaY/120*this.options.mouseWheelSpeed}else if("wheelDelta"in e){t=n=e.wheelDelta/120*this.options.mouseWheelSpeed}else if("detail"in e){t=n=-e.detail/3*this.options.mouseWheelSpeed}else{return}t*=this.options.invertWheelDirection;n*=this.options.invertWheelDirection;if(!this.hasVerticalScroll){t=n;n=0}if(this.options.snap){i=this.currentPage.pageX;s=this.currentPage.pageY;if(t>0){i--}else if(t<0){i++}if(n>0){s--}else if(n<0){s++}this.goToPage(i,s);return}i=this.x+r.round(this.hasHorizontalScroll?t:0);s=this.y+r.round(this.hasVerticalScroll?n:0);if(i>0){i=0}else if(i<this.maxScrollX){i=this.maxScrollX}if(s>0){s=0}else if(s<this.maxScrollY){s=this.maxScrollY}this.scrollTo(i,s,0);if(this.options.probeType>1){this._execEvent("scroll")}},_initSnap:function(){this.currentPage={};if(typeof this.options.snap=="string"){this.options.snap=this.scroller.querySelectorAll(this.options.snap)}this.on("refresh",function(){var e=0,t,n=0,i,s,o,u=0,a,f=this.options.snapStepX||this.wrapperWidth,l=this.options.snapStepY||this.wrapperHeight,c;this.pages=[];if(!this.wrapperWidth||!this.wrapperHeight||!this.scrollerWidth||!this.scrollerHeight){return}if(this.options.snap===true){s=r.round(f/2);o=r.round(l/2);while(u>-this.scrollerWidth){this.pages[e]=[];t=0;a=0;while(a>-this.scrollerHeight){this.pages[e][t]={x:r.max(u,this.maxScrollX),y:r.max(a,this.maxScrollY),width:f,height:l,cx:u-s,cy:a-o};a-=l;t++}u-=f;e++}}else{c=this.options.snap;t=c.length;i=-1;for(;e<t;e++){if(e===0||c[e].offsetLeft<=c[e-1].offsetLeft){n=0;i++}if(!this.pages[n]){this.pages[n]=[]}u=r.max(-c[e].offsetLeft,this.maxScrollX);a=r.max(-c[e].offsetTop,this.maxScrollY);s=u-r.round(c[e].offsetWidth/2);o=a-r.round(c[e].offsetHeight/2);this.pages[n][i]={x:u,y:a,width:c[e].offsetWidth,height:c[e].offsetHeight,cx:s,cy:o};if(u>this.maxScrollX){n++}}}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0);if(this.options.snapThreshold%1===0){this.snapThresholdX=this.options.snapThreshold;this.snapThresholdY=this.options.snapThreshold}else{this.snapThresholdX=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold);this.snapThresholdY=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold)}});this.on("flick",function(){var e=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.x-this.startX),1e3),r.min(r.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){if(!this.pages.length){return{x:0,y:0,pageX:0,pageY:0}}var n=0,i=this.pages.length,s=0;if(r.abs(e-this.absStartX)<this.snapThresholdX&&r.abs(t-this.absStartY)<this.snapThresholdY){return this.currentPage}if(e>0){e=0}else if(e<this.maxScrollX){e=this.maxScrollX}if(t>0){t=0}else if(t<this.maxScrollY){t=this.maxScrollY}for(;n<i;n++){if(e>=this.pages[n][0].cx){e=this.pages[n][0].x;break}}i=this.pages[n].length;for(;s<i;s++){if(t>=this.pages[0][s].cy){t=this.pages[0][s].y;break}}if(n==this.currentPage.pageX){n+=this.directionX;if(n<0){n=0}else if(n>=this.pages.length){n=this.pages.length-1}e=this.pages[n][0].x}if(s==this.currentPage.pageY){s+=this.directionY;if(s<0){s=0}else if(s>=this.pages[0].length){s=this.pages[0].length-1}t=this.pages[0][s].y}return{x:e,y:t,pageX:n,pageY:s}},goToPage:function(e,t,n,i){i=i||this.options.bounceEasing;if(e>=this.pages.length){e=this.pages.length-1}else if(e<0){e=0}if(t>=this.pages[e].length){t=this.pages[e].length-1}else if(t<0){t=0}var s=this.pages[e][t].x,o=this.pages[e][t].y;n=n===undefined?this.options.snapSpeed||r.max(r.max(r.min(r.abs(s-this.x),1e3),r.min(r.abs(o-this.y),1e3)),300):n;this.currentPage={x:s,y:o,pageX:e,pageY:t};this.scrollTo(s,o,n,i)},next:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n++;if(n>=this.pages.length&&this.hasVerticalScroll){n=0;r++}this.goToPage(n,r,e,t)},prev:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n--;if(n<0&&this.hasVerticalScroll){n=0;r--}this.goToPage(n,r,e,t)},_initKeys:function(t){var n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};var r;if(typeof this.options.keyBindings=="object"){for(r in this.options.keyBindings){if(typeof this.options.keyBindings[r]=="string"){this.options.keyBindings[r]=this.options.keyBindings[r].toUpperCase().charCodeAt(0)}}}else{this.options.keyBindings={}}for(r in n){this.options.keyBindings[r]=this.options.keyBindings[r]||n[r]}s.addEvent(e,"keydown",this);this.on("destroy",function(){s.removeEvent(e,"keydown",this)})},_key:function(e){if(!this.enabled){return}var t=this.options.snap,n=t?this.currentPage.pageX:this.x,i=t?this.currentPage.pageY:this.y,o=s.getTime(),u=this.keyTime||0,a=.25,f;if(this.options.useTransition&&this.isInTransition){f=this.getComputedPosition();this._translate(r.round(f.x),r.round(f.y));this.isInTransition=false}this.keyAcceleration=o-u<200?r.min(this.keyAcceleration+a,50):0;switch(e.keyCode){case this.options.keyBindings.pageUp:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){n+=t?1:this.wrapperWidth}else{i+=t?1:this.wrapperHeight}break;case this.options.keyBindings.pageDown:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){n-=t?1:this.wrapperWidth}else{i-=t?1:this.wrapperHeight}break;case this.options.keyBindings.end:n=t?this.pages.length-1:this.maxScrollX;i=t?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:n=0;i=0;break;case this.options.keyBindings.left:n+=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:i+=t?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:n-=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:i-=t?1:5+this.keyAcceleration>>0;break;default:return}if(t){this.goToPage(n,i);return}if(n>0){n=0;this.keyAcceleration=0}else if(n<this.maxScrollX){n=this.maxScrollX;this.keyAcceleration=0}if(i>0){i=0;this.keyAcceleration=0}else if(i<this.maxScrollY){i=this.maxScrollY;this.keyAcceleration=0}this.scrollTo(n,i,0);this.keyTime=o},_animate:function(e,t,n,r){function c(){var h=s.getTime(),p,d,v;if(h>=l){o.isAnimating=false;o._translate(e,t);if(!o.resetPosition(o.options.bounceTime)){o._execEvent("scrollEnd")}return}h=(h-f)/n;v=r(h);p=(e-u)*v+u;d=(t-a)*v+a;o._translate(p,d);if(o.isAnimating){i(c)}if(o.options.probeType==3){o._execEvent("scroll")}}var o=this,u=this.x,a=this.y,f=s.getTime(),l=f+n;this.isAnimating=true;c()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":if(!e._constructed){e.preventDefault();e.stopPropagation()}break}}};a.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break}},destroy:function(){if(this.options.interactive){s.removeEvent(this.indicator,"touchstart",this);s.removeEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this);s.removeEvent(this.indicator,"mousedown",this);s.removeEvent(e,"touchmove",this);s.removeEvent(e,s.prefixPointerEvent("pointermove"),this);s.removeEvent(e,"mousemove",this);s.removeEvent(e,"touchend",this);s.removeEvent(e,s.prefixPointerEvent("pointerup"),this);s.removeEvent(e,"mouseup",this)}if(this.options.defaultScrollbars){this.wrapper.parentNode.removeChild(this.wrapper)}},_start:function(t){var n=t.touches?t.touches[0]:t;t.preventDefault();t.stopPropagation();this.transitionTime();this.initiated=true;this.moved=false;this.lastPointX=n.pageX;this.lastPointY=n.pageY;this.startTime=s.getTime();if(!this.options.disableTouch){s.addEvent(e,"touchmove",this)}if(!this.options.disablePointer){s.addEvent(e,s.prefixPointerEvent("pointermove"),this)}if(!this.options.disableMouse){s.addEvent(e,"mousemove",this)}this.scroller._execEvent("beforeScrollStart")},_move:function(e){var t=e.touches?e.touches[0]:e,n,r,i,o,u=s.getTime();if(!this.moved){this.scroller._execEvent("scrollStart")}this.moved=true;n=t.pageX-this.lastPointX;this.lastPointX=t.pageX;r=t.pageY-this.lastPointY;this.lastPointY=t.pageY;i=this.x+n;o=this.y+r;this._pos(i,o);if(this.scroller.options.probeType==1&&u-this.startTime>300){this.startTime=u;this.scroller._execEvent("scroll")}else if(this.scroller.options.probeType>1){this.scroller._execEvent("scroll")}e.preventDefault();e.stopPropagation()},_end:function(t){if(!this.initiated){return}this.initiated=false;t.preventDefault();t.stopPropagation();s.removeEvent(e,"touchmove",this);s.removeEvent(e,s.prefixPointerEvent("pointermove"),this);s.removeEvent(e,"mousemove",this);if(this.scroller.options.snap){var n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y);var i=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.scroller.x-n.x),1e3),r.min(r.abs(this.scroller.y-n.y),1e3)),300);if(this.scroller.x!=n.x||this.scroller.y!=n.y){this.scroller.directionX=0;this.scroller.directionY=0;this.scroller.currentPage=n;this.scroller.scrollTo(n.x,n.y,i,this.scroller.options.bounceEasing)}}if(this.moved){this.scroller._execEvent("scrollEnd")}},transitionTime:function(e){e=e||0;this.indicatorStyle[s.style.transitionDuration]=e+"ms";if(!e&&s.isBadAndroid){this.indicatorStyle[s.style.transitionDuration]="0.001s"}},transitionTimingFunction:function(e){this.indicatorStyle[s.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime();if(this.options.listenX&&!this.options.listenY){this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none"}else if(this.options.listenY&&!this.options.listenX){this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none"}else{this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none"}if(this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll){s.addClass(this.wrapper,"iScrollBothScrollbars");s.removeClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="8px"}else{this.wrapper.style.bottom="8px"}}}else{s.removeClass(this.wrapper,"iScrollBothScrollbars");s.addClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="2px"}else{this.wrapper.style.bottom="2px"}}}var e=this.wrapper.offsetHeight;if(this.options.listenX){this.wrapperWidth=this.wrapper.clientWidth;if(this.options.resize){this.indicatorWidth=r.max(r.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8);this.indicatorStyle.width=this.indicatorWidth+"px"}else{this.indicatorWidth=this.indicator.clientWidth}this.maxPosX=this.wrapperWidth-this.indicatorWidth;if(this.options.shrink=="clip"){this.minBoundaryX=-this.indicatorWidth+8;this.maxBoundaryX=this.wrapperWidth-8}else{this.minBoundaryX=0;this.maxBoundaryX=this.maxPosX}this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX}if(this.options.listenY){this.wrapperHeight=this.wrapper.clientHeight;if(this.options.resize){this.indicatorHeight=r.max(r.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8);this.indicatorStyle.height=this.indicatorHeight+"px"}else{this.indicatorHeight=this.indicator.clientHeight}this.maxPosY=this.wrapperHeight-this.indicatorHeight;if(this.options.shrink=="clip"){this.minBoundaryY=-this.indicatorHeight+8;this.maxBoundaryY=this.wrapperHeight-8}else{this.minBoundaryY=0;this.maxBoundaryY=this.maxPosY}this.maxPosY=this.wrapperHeight-this.indicatorHeight;this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY}this.updatePosition()},updatePosition:function(){var e=this.options.listenX&&r.round(this.sizeRatioX*this.scroller.x)||0,t=this.options.listenY&&r.round(this.sizeRatioY*this.scroller.y)||0;if(!this.options.ignoreBoundaries){if(e<this.minBoundaryX){if(this.options.shrink=="scale"){this.width=r.max(this.indicatorWidth+e,8);this.indicatorStyle.width=this.width+"px"}e=this.minBoundaryX}else if(e>this.maxBoundaryX){if(this.options.shrink=="scale"){this.width=r.max(this.indicatorWidth-(e-this.maxPosX),8);this.indicatorStyle.width=this.width+"px";e=this.maxPosX+this.indicatorWidth-this.width}else{e=this.maxBoundaryX}}else if(this.options.shrink=="scale"&&this.width!=this.indicatorWidth){this.width=this.indicatorWidth;this.indicatorStyle.width=this.width+"px"}if(t<this.minBoundaryY){if(this.options.shrink=="scale"){this.height=r.max(this.indicatorHeight+t*3,8);this.indicatorStyle.height=this.height+"px"}t=this.minBoundaryY}else if(t>this.maxBoundaryY){if(this.options.shrink=="scale"){this.height=r.max(this.indicatorHeight-(t-this.maxPosY)*3,8);this.indicatorStyle.height=this.height+"px";t=this.maxPosY+this.indicatorHeight-this.height}else{t=this.maxBoundaryY}}else if(this.options.shrink=="scale"&&this.height!=this.indicatorHeight){this.height=this.indicatorHeight;this.indicatorStyle.height=this.height+"px"}}this.x=e;this.y=t;if(this.scroller.options.useTransform){this.indicatorStyle[s.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ}else{this.indicatorStyle.left=e+"px";this.indicatorStyle.top=t+"px"}},_pos:function(e,t){if(e<0){e=0}else if(e>this.maxPosX){e=this.maxPosX}if(t<0){t=0}else if(t>this.maxPosY){t=this.maxPosY}e=this.options.listenX?r.round(e/this.sizeRatioX):this.scroller.x;t=this.options.listenY?r.round(t/this.sizeRatioY):this.scroller.y;this.scroller.scrollTo(e,t)},fade:function(e,t){if(t&&!this.visible){return}clearTimeout(this.fadeTimeout);this.fadeTimeout=null;var n=e?250:500,r=e?0:300;e=e?"1":"0";this.wrapperStyle[s.style.transitionDuration]=n+"ms";this.fadeTimeout=setTimeout(function(e){this.wrapperStyle.opacity=e;this.visible=+e}.bind(this,e),r)}};o.utils=s;if(typeof t!="undefined"&&t.exports){t.exports=o}e.IScroll=o})(window,document,Math);(function(){function o(o,u){function O(e,t){var n="translate3d("+e*c.column.width+"px, "+t*c.row.height+"px, 0)";return{transform:n,"-webkit-transform":n}}function M(t,n,r,i){var s=0,o=c.column.num-1,u=0,f=c.row.num-1,h=false,d=false,v=[],m=null;if(t>0){t=0}else if(t<a.maxScrollX){t=a.maxScrollX}s=parseInt(Math.abs(t)/c.column.width);o=s+c.column.num-1;if(l.column!==s){l.column=s;h=true}if(n>0){n=0}else if(n<a.maxScrollY+C){n=a.maxScrollY+C}u=parseInt(Math.abs(n)/c.row.height);f=u+c.row.num-1;if(l.row!==u){l.row=u;d=true}if(h||d){m=B();p.forEach(function(e){var t=false,n=e.column,r=e.row;if(n<s&&n+c.column.num<c.column.total){do{n+=c.column.num}while(n<s);if(n<c.column.total){t=true}}else if(n>o&&n-c.column.num>-1){t=true;do{n-=c.column.num}while(n>o)}if(r<u&&r+c.row.num<c.row.total){do{r+=c.row.num}while(r<u);if(r<c.row.total){t=true}}else if(r>f&&r-c.row.num>-1){t=true;do{r-=c.row.num}while(r>f)}if(t){v.push({type:"change",el:e.node,from:{column:e.column,row:e.row},to:{column:n,row:r}});c.dataFilter("remove",e.node,e.column,e.row,m);e.column=n;e.row=r;c.dataFilter("add",e.node,n,r,m)}});if(c.builderNodes){v.forEach(function(t){e.css(t.el,O(t.to.column,t.to.row))})}c.changeFilter(v,m)}}function D(e){var t=Math.abs(e),n=parseInt(t/c.column.width),r=-(t%c.column.width>c.column.width/2?n+1:n)*c.column.width;return{move:r!==e,x:r}}function P(e){var t=Math.abs(e),n=parseInt(t/c.row.height),r=-(t%c.row.height>c.row.height/2?n+1:n)*c.row.height;return{move:r!==e,y:r}}function H(){var e=D(a.x),t=P(a.y);if(e.move||t.move){if(d){d.scrollTo(e.x,0,300,IScroll.utils.ease.circular)}if(v){v.scrollTo(0,t.y,300,IScroll.utils.ease.circular)}a.scrollTo(e.x,t.y,300,IScroll.utils.ease.circular)}}function B(){return[l.column,l.row,l.column+c.column.num-1,l.row+c.row.num-1]}function j(e,t){return e>=l.column&&e<l.column+c.column.num-1&&t>=l.row&&t<l.row+c.row.num-1}function F(){var t=[],n=B();if(c.builderNodes){p.forEach(function(t){e.removeNode(t.node)})}p=[];for(k=0;k<c.column.num;k++){for(L=0;L<c.row.num;L++){if(c.builderNodes){A=e.builder(c.template).children[0];e.css(A,O(k,L));h.appendChild(A)}p.push({column:k,row:L,node:A});c.dataFilter("add",A||null,k,L,n);t.push({type:"create",el:A||null,from:{},to:{column:k,row:L}})}}c.changeFilter(t,n);f.trigger("ready")}function I(e,t,n,r){if(m){if(e<c.moreDis&&e>a.maxScrollX-c.moreDis){m=false}}else{if(e>=c.moreDis){m=true;f.trigger("more",{axis:"x",seq:"prev"})}else if(e<=a.maxScrollX-c.moreDis){m=true;f.trigger("more",{axis:"x",seq:"next"})}}if(g){if(t<c.moreDis&&t>a.maxScrollY-c.moreDis){g=false}}else{if(t>=c.moreDis){g=true;f.trigger("more",{axis:"y",seq:"prev"})}else if(t<=a.maxScrollY-c.moreDis){g=true;f.trigger("more",{axis:"y",seq:"next"})}}}var a=null,f=function(){var t=function(){};e.extend(t.prototype,e.CustEvent);return new t}(),l={column:0,row:0},c=e.extend({},s,u),h=o&&o.children[0],p=[],d=c.bindScrolls.x||null,v=c.bindScrolls.y||null,m=false,g=false,y=false,b=false,w,E,S,x,T,N,C=0,k,L,A;if(!h){throw"Dom Structure Error!"}c.scrollOpt=e.extend({},n,c.scrollOpt);if(c.scrollOpt.scrollX&&c.column){y=true;c.column.num=c.column.num||parseInt(e.size(o).width/c.column.width)+2;e.css(h,"width",Math.max(c.column.total*c.column.width,e.size(h.parentNode).width+1)+"px")}else{c.column={num:1,total:1,width:1}}if(c.scrollOpt.scrollY&&c.row){b=true;c.row.num=c.row.num||parseInt(e.size(o).height/c.row.height)+2;e.css(h,"height",Math.max(c.row.total*c.row.height,e.size(h.parentNode).height+1)+"px")}else{c.row={num:1,total:1,height:1}}a=new t(o,c.scrollOpt);if(y||b){a.on("scroll",function(){M(a.x,a.y,a.directionX,a.directionY)});a.on("scrollEnd",function(){if(d&&a.x<=0&&a.x>=a.maxScrollX){d.scrollTo(a.x,0)}if(v&&a.y<=0&&a.y>=a.maxScrollY){v.scrollTo(0,a.y)}});e.delay(F)}a.on("scroll",function(){I(a.x,a.y,a.directionX,a.directionY)});a.on("scrollEnd",function(){if(d&&a.x<=0&&a.x>=a.maxScrollX){d.scrollTo(a.x,0)}if(v&&a.y<=0&&a.y>=a.maxScrollY){v.scrollTo(0,a.y)}});if(d){a.on("scroll",function(){if(a.x<=0&&a.x>=a.maxScrollX){d.scrollTo(a.x,0)}});d.on("scroll",function(){if(d.x<=0&&d.x>=d.maxScrollX&&d.x>=a.maxScrollX){a.scrollTo(d.x,a.y);M(d.x,a.y,d.directionX,0)}})}if(v){a.on("scroll",function(){if(a.y<=0&&a.y>=a.maxScrollY){v.scrollTo(0,a.y)}});v.on("scroll",function(){if(v.y<=0&&v.y>=v.maxScrollY&&v.y>=a.maxScrollY){a.scrollTo(a.x,v.y);M(a.x,v.y,0,v.directionY)}})}if(c.topOffsetRefresh){if(c.topOffsetRefresh===true){c.topOffsetRefresh={}}e.extend(true,c.topOffsetRefresh,r);w=document.createElement("div");S="drag";e.css(w,{position:"absolute",height:c.topOffsetRefresh.distance+"px",width:"100%",top:-c.topOffsetRefresh.distance+"px"});w.innerHTML=c.topOffsetRefresh.dragContent;T=function(){if(S==="waitEnd"){S="startRefresh";w.innerHTML=c.topOffsetRefresh.loadContent;e.css(h,{marginTop:c.topOffsetRefresh.distance+"px"});a.scrollTo(a.x,a.y-c.topOffsetRefresh.distance,0);c.refresh("top")}};h.addEventListener("touchend",T,false);a.on("scroll",function(){if(S==="drag"&&a.y>c.topOffsetRefresh.distance){S="waitEnd";w.innerHTML=c.topOffsetRefresh.endContent}if(S==="waitEnd"&&a.y<=c.topOffsetRefresh.distance){S="drag";w.innerHTML=c.topOffsetRefresh.dragContent}});e.delay(function(){e.insertElement(h,w,"beforeend")},100)}if(c.bottomOffsetRefresh){if(c.bottomOffsetRefresh===true){c.bottomOffsetRefresh={}}e.extend(true,c.bottomOffsetRefresh,i);E=document.createElement("div");if(c.row.total*c.row.height<e.size(h.parentNode).height+1){x="none"}else{x="drag"}e.css(E,{position:"absolute",height:c.bottomOffsetRefresh.distance+"px",width:"100%",bottom:-c.bottomOffsetRefresh.distance+"px"});E.innerHTML="";N=function(){if(x==="waitEnd"){x="startRefresh";C=c.bottomOffsetRefresh.distance;E.innerHTML=c.bottomOffsetRefresh.loadContent;e.css(h,{height:e.size(h).height+C+"px"});e.css(E,{bottom:0});a.refresh();c.refresh("bottom")}};h.addEventListener("touchend",N,false);a.on("scroll",function(){if(x==="drag"&&a.y<a.maxScrollY-c.bottomOffsetRefresh.distance){x="waitEnd"}if(x==="waitEnd"&&a.y>=a.maxScrollY-c.bottomOffsetRefresh.distance){x="drag"}});e.delay(function(){e.insertElement(h,E,"beforeend")},100)}f.trigger("init");return e.extend(f,{scroll:a,refresh:function(){a.refresh()},scrollTo:function(){a.scrollTo.apply(a,e.makeArray(arguments))},gotoTop:function(t,n){n=parseInt(n)||300;if(t&&c.topOffsetRefresh&&S!=="startRefresh"){S="startRefresh";w.innerHTML=c.topOffsetRefresh.loadContent;e.css(h,{marginTop:c.topOffsetRefresh.distance+"px"});e.delay(function(){c.refresh("top")},n)}a.scrollTo(a.x,0,n)},setTopRefresh:function(t){if(c.topOffsetRefresh){w.innerHTML=c.topOffsetRefresh[t?"successContent":"failContent"];e.delay(function(){e.animate(h,{marginTop:"0"},50,"ease-out");e.delay(function(){S="drag";w.innerHTML=c.topOffsetRefresh.dragContent},80)},c.topOffsetRefresh.displayDelay);if(c.bottomOffsetRefresh&&t){if(c.row.total*c.row.height<e.size(h.parentNode).height+1){x="none"}else{x="drag"}E.innerHTML=""}}},setBottomRefresh:function(t,n){if(c.bottomOffsetRefresh){var r=t?"":c.bottomOffsetRefresh.failContent;x="drag";if(n){x="end";r=c.bottomOffsetRefresh.endContent}E.innerHTML=r;if(n||!t&&c.bottomOffsetRefresh.failContent){e.delay(function(){a.scrollTo(a.x,a.y+C,c.bottomOffsetRefresh.displayDelay/2)},c.bottomOffsetRefresh.displayDelay/2);e.delay(function(){e.css(h,{height:e.size(h).height-C+"px"});e.css(E,{bottom:-C+"px"});C=0;a.refresh()},c.bottomOffsetRefresh.displayDelay)}else if(!t){e.css(h,{height:e.size(h).height-C+"px"});e.css(E,{bottom:-C+"px"});C=0;a.refresh()}else{e.css(h,{height:e.size(h).height-C+"px"});e.css(E,{bottom:-C+"px"});C=0;a.refresh();e.delay(function(){a.scrollTo(a.x,a.y-c.bottomOffsetRefresh.distance*2,500)})}}},fixPosition:function(){e.delay(H)},appendNode:function(t,n,r){if(t&&h){e.css(t,O(n,r));if(!e.contains(h,t)){h.appendChild(t)}}},getShowArea:B,checkShow:function(e){return e.some(function(e){return j(e[0],e[1])})},resetNum:function(e,t){c.column.num=e;c.row.num=t;F()},resetTotal:function(t,n,r,i){c.column.total=t;c.row.total=n;if(c.scrollOpt.scrollX){e.css(h,"width",Math.max(c.column.total*c.column.width,e.size(h.parentNode).width+1)+"px")}if(c.scrollOpt.scrollY){e.css(h,"height",Math.max(c.row.total*c.row.height,e.size(h.parentNode).height+1)+"px")}if(c.bottomOffsetRefresh){if(c.row.total*c.row.height<e.size(h.parentNode).height+1){x="none"}else{x="drag"}E.innerHTML=""}e.delay(function(){a.refresh();M(a.x,a.y,r||0,i||0)})},destroy:function(){f.off();a.destroy();a=null;if(c.topOffsetRefresh){e.removeEvent(h,T)}if(c.bottomOffsetRefresh){e.removeEvent(h,N)}c=null;h=null;if(v){v.destroy()}v=null;if(d){d.destroy()}d=null;p.forEach(function(t){if(t.node){e.removeNode(t.node);t.node=null}});p.length=0;p=null}})}var e=QApp.util,t=e.iScroll=window.IScroll;var n={scrollX:false,scrollY:true,freeScroll:false,mouseWheel:false,probeType:3,preventDefault:false};var r={distance:50,displayDelay:1e3,dragContent:"drag to refresh",endContent:"stop to refresh",loadContent:"loading",successContent:"success",failContent:"failure"};var i={distance:50,displayDelay:1e3,loadContent:"loading",endContent:"end",failContent:""};var s={builderNodes:true,template:'<div class="item"></div>',moreDis:50,bindScrolls:{},scrollOpt:{},dataFilter:e.noop,changeFilter:e.noop,refresh:e.noop,topOffsetRefresh:false,bottomOffsetResfresh:false};o.iScroll=t;o.setTopRefreshOpt=function(t){e.extend(true,r,t)};o.setBottomRefreshOpt=function(t){e.extend(true,i,t)};window.NScroll=QApp.util.nScroll=o})();(function(){function s(e){return JSON.parse(JSON.stringify(e.$model))}function o(t,n){if(e.type(t)==="array"){n=e.mix(true,{},{_:n});t={_:t}}else{n=e.mix(true,{},n)}for(var r in t){if(typeof n[r]=="undefined"||!t.hasOwnProperty(r)||r==="hasOwnProperty")continue;switch(e.type(t[r])){case"object":o(t[r],n[r]);break;case"array":e.each(n[r],function(e,n){var i=typeof t[r][e];if(i==="object"&&t[r][e]!==null){o(t[r][e],n)}else{if(e>=t[r].size()){t[r].push(n)}else{t[r].set(e,n)}}});while(t[r].length>n[r].length){t[r].pop()}break;default:t[r]=n[r];break}}}function u(t,n){return((t.hasAttributes()?e.slice(t.attributes):[]).filter(function(e){return!e.name.indexOf(n)})[0]||{}).name}function a(t,n,r){var i=document.createEvent("HTMLEvents");i.initEvent(n,true,true);e.mix(i,r);t.dispatchEvent(i)}function f(e,t){r.forEach(function(n){t.on(n,function(){a(e,n.toLowerCase())})})}var e=window.avalon||QApp.avalon,t=QApp.util.nScroll;var n={showLines:10,lineHeight:0,getData:function(){}},r=["beforeScrollStart","scrollCancel","scrollStart","scroll","scrollEnd","flick","zoomStart","zoomEnd"],i=100;if(e){e.bindingHandlers.iscroll=function(r,l){var c=r.element,h=r.value.match(/[^, ]+/g),p=l[0],d=e.mix({},n,p.iscroll,c.dataset,h&&h[1]?p[h[1]]:null),v=d.id||h&&h[0]!=="$"&&h[0]||"iscroll"+setTimeout("1"),m=c.children[0],g=c.children[0]&&c.children[0].children[0],y=m&&u(m,"ms-each"),b=g&&u(g,"ms-repeat"),w,E;p.scrolls=p.scrolls||{};c.removeAttribute("ms-iscroll");if(y||b){var S,x,T,N=[],C=0;if(y){S=m.getAttribute(y);m.setAttribute(y,S+"$")}else if(b){S=g.getAttribute(b);g.setAttribute(b,S+"$")}x=S+"$";p.$watch(S,function(){var e=p[S],n=p[x],r=[],i=n.length,u;C=e.size()>=d.showLines?d.showLines:e.size();if(w){n.forEach(function(e){e.$unwatch()});for(u=0;u<C;u++){if(u>=i){if(n[u]){n.set(u,s(e[u]))}else{n.push(s(e[u]));w.appendNode(c.children[0].children[u],1,u)}n[u].$watch("$all",function(t){return function(n,r){e[t][n]=r}}(u));e[u].$watch("$all",function(e){return function(t,r){n[e][t]=r}}(u))}}for(u=C;u<i;u++){n.removeAt(C)}N=E.children;w.resetNum(1,C);w.resetTotal(1,e.size());w.scrollTo(0,0,0)}else{n.pushArray(JSON.parse(JSON.stringify(p.$model[S].slice(0,C))));E=c.children[0];N=E.children;d.lineHeight=d.lineHeight||N[0]&&N[0].offsetHeight;if(!d.lineHeight){throw"Can not know line height!"}w=p.scrolls[v]=t(c,{builderNodes:false,row:{height:d.lineHeight,num:C,total:e.size()},scrollOpt:d,topOffsetRefresh:d.topOffsetRefresh,bottomOffsetRefresh:d.bottomOffsetRefresh,refresh:function(e){if(typeof d.refresh==="function"){d.refresh.call(w,e)}else if(typeof d.refresh==="string"&&typeof p[d.refresh]==="function"){p[d.refresh].call(w,e)}else{a(c,"refresh",{type:e})}},dataFilter:function(t,r,i,u){var a=u%C;if(C){if(t==="add"){w.appendNode(N[a],i,u);o(n[a],s(e[u]));n[a].$watch("$all",function(t,n){e[u][t]=n});e[u].$watch("$all",function(e,t){n[a][e]=t})}else{e[u].$unwatch();n[a].$unwatch()}}}});w.on("more",function(t){if(t.axis==="y"&&t.seq==="next"){if(typeof d.getData==="function"){d.getData.call(w,e.length)}else if(typeof d.getData==="string"&&typeof p[d.getData]==="function"){p[d.getData].call(w,e.length)}else{a(c,"getdata",{start:e.length})}}});f(c,w.scroll)}});p[S].$watch("length",function(e){if(T){clearTimeout(T)}T=setTimeout(function(){if(w){w.resetTotal(0,p[S].size(),0,1)}},i)})}else{w=p.scrolls[v]=t(c,d);f(c,w);p.$watch("$all",function(){if(T){clearTimeout(T)}T=setTimeout(function(){if(w){w.refresh()}},i)})}p.$remove=function(){if(w){w.destroy();w=null}}}}})();(function(){var e=QApp.util,t=e.iScroll;var n=300,r="qapp-scroll",i={preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/}};QApp.addPlugin(["scroll","ui.scroll"],i,function(i,s,o){function f(){if(u){clearTimeout(u)}u=e.delay(function(){if(a){a.refresh()}},n)}var u,a;i.on("ready",function(){var n=document.createElement(r);e.appendNodes(n,i.nodes);i.root.appendChild(n);a=i.scroll=new t(i.root,s);i.root.addEventListener("DOMSubtreeModified",function(){f()},false);i.refreshScroll=f;e.delay(f)});i.on("destroy",function(){if(u){clearTimeout(u)}if(a){a.destroy()}});return{}})})();(function(){var e=QApp.util,t=e.iScroll;var n=300;var r={scrollX:false,scrollY:true,freeScroll:false,mouseWheel:false,probeType:3,preventDefault:false};QApp.addWidget("scroll",function(i,s,o){if(t){var u={},a,f=function(){if(a){clearTimeout(a)}a=e.delay(function(){if(u&&u.refresh){u.refresh()}},n)};e.css(i,"overflow","hidden");e.addEvent(i,"DOMSubtreeModified",function(){f()});e.delay(f);if(o){if(o.isShow){var l=new t(i,e.extend({},r,s));e.each(o.widgets,function(e,t){if(t===u){o.widgets[e]=l}});u=l}else{var c=o._events.show=o._events.show||[];c.unshift({callback:function(){var n=new t(i,e.extend({},r,s));e.each(o.widgets,function(e,t){if(t===u){o.widgets[e]=n}});u=n},ctx:o})}}else{var l=new t(i,e.extend({},r,s));u=l}return u}})})()}(t.exports,t,e);e.____MODULES["b08d751aa3ddf5c37b9a6eacdf9ef2c9"]=t.exports})(this);(function(e){var t={id:"4245687f6db4dcaca48653fe5fa19c0c",filename:"footballSNS-app.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){e.____MODULES["681795b0d9a0040aa35c149c2d7efbea"];e.____MODULES["e24642d9bb10d27b80ed20283fa2d1ef"];e.____MODULES["9d98ca07b73221c493c790bbc2226633"];e.____MODULES["7c5d57f1f2a98b39b42b95fcc735e710"];e.____MODULES["52550815c02f4b1ebb5e458316e9f7b4"];e.____MODULES["06db39915d027f68bc965950f4815a67"];e.____MODULES["3501632c175ff50fbe38cfb6a85d2296"];e.____MODULES["bd2141162d398feaa2ba14dc245d2bba"];e.____MODULES["8e388858412f481def4b54146d6a335f"];e.____MODULES["da73d8a6f60c849ff1cbc63ff4884540"];e.____MODULES["b08d751aa3ddf5c37b9a6eacdf9ef2c9"]}(t.exports,t,e);e.____MODULES["4245687f6db4dcaca48653fe5fa19c0c"]=t.exports})(this)

    })( module.exports , module , __context );
    __context.____MODULES[ "980161e2dd8119467ce528f9e9ea9c3d" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "5f002f3fe5a2d29288acc95bae101bb5" ,
        filename : "index.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["index"] = "<section class=\"m-index\">\n\n  <div class=\"m-index-body\">\n      \n  </div>\n  <div class=\"m-index-nav\">\n  \t<ul>\n  \t\t<li class=\"active\" id=\"home\" action-type=\"tab.switch\" data-tag=\"home\" node-type=\"home\">\n  \t\t\t<i></i>\n  \t\t\t<b>首页</b>\n  \t\t</li>\n  \t\t<li id=\"classify\" action-type=\"tab.switch\" data-tag=\"classtify\" node-type=\"classtify\">\n  \t\t\t<i></i>\n  \t\t\t<b>分类</b>\n  \t\t</li>\n  \t\t<li id=\"shoppingcart\" action-type=\"tab.switch\" data-tag=\"shoppingcart\" node-type=\"shoppingcart\">\n  \t\t\t<i></i>\n  \t\t\t<b>购物车</b>\n  \t\t</li>\n  \t\t<li id=\"user\" action-type=\"tab.switch\" data-tag=\"user\" node-type=\"user\">\n  \t\t\t<i></i>\n  \t\t\t<b>个人中心</b>\n  \t\t</li>\n  \t</ul>\n  </div>\n</section>\n";
if (typeof module !== "undefined") module.exports = window.QTMPL["index"];

    })( module.exports , module , __context );
    __context.____MODULES[ "5f002f3fe5a2d29288acc95bae101bb5" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "ae279cf81c6a4536b76eca0034a796ec" ,
        filename : "index.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var indexTpl =__context.____MODULES['5f002f3fe5a2d29288acc95bae101bb5'];
var _ = QApp.util;

var TAGS = ["home","classtify","shoppingcart","user"]
QApp.defineView('index', {
	html: indexTpl,
	plugins: ['delegated',"doms"],
	bindActions: {

	},
	modules:[{
		name:"content",
		container:".m-index-body",
		views:TAGS,
		defaultTag:"home"
	}],

	bindEvents: {
		'beforeShow': function() {
			
		}
	},
	init:{
		curTag:"home",
		switchTab:function(tag){
			if(TAGS.indexOf(tag)>-1){
				_.removeClass(this.doms[this.curTag],"active");
				_.addClass(this.doms[tag],"active");
				this.modules.content.launch(tag);
				this.curTag = tag;
			}
		}
	},
	bindActions: {
		'tab.switch': function(e, data) {
            this.switchTab(data.tag);
        }
         
	}
});


    })( module.exports , module , __context );
    __context.____MODULES[ "ae279cf81c6a4536b76eca0034a796ec" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "d81938fa9be098dc4dd469794e566dca" ,
        filename : "home.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["home"] = "<div class=\"m-home\">\n    <div class=\"m-home-header\">\n        <div class=\"backBtn\"><img style=\"height:0.20rem;\" src=\"icon/back.png\" /></div>\n        <input type=\"search\" name=\"search\" class=\"search\" placeholder=\"仅搜索商城商品\">\n        <div class=\"searchBth\"><img style=\"height:0.20rem;\" src=\"icon/searchbtn.png\" /></div>\n    </div>\n    <div class=\"m-home-body\" id=\"wrapper\">\n        <div class=\"scrollArea\">\n            <div class=\"swiper-focus\">\n              <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\"><img src=\"images/focus-pic/focus1.jpg\" /></div>\n                <div class=\"swiper-slide\"><img src=\"images/focus-pic/focus2.jpg\" /></div>\n                <div class=\"swiper-slide\"><img src=\"images/focus-pic/focus3.jpg\" /></div>\n              </div>\n              <div class=\"swiper-pagination\"></div>\n            </div>\n\n            <ul class=\"category-level1\">\n                <li>\n                    <a href=\"javascript:void(0)\"><img src=\"icon/category1/dyzb.png\"></a>\n                    <i>电影周边</i>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0);\"><img src=\"icon/category1/srlp.png\"></a>\n                    <i>生日礼品</i>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0);\"><img src=\"icon/category1/bgyp.png\"></a>\n                    <i>办公用品</i>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a>\n                    <i>家用电器</i>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0);\"><img src=\"icon/category1/jjyp.png\"></a>\n                    <i>家居用品</i>\n                </li>\n            </ul>\n            <ul class=\"goods-list\">\n                <li class=\"hots selected list\" data-count=\"0\"><a href=\"javascript:void(0);\">热销</a></li>\n                <li></li>\n                <li class=\"new list\" data-count=\"1\"><a href=\"javascript:void(0);\">最新</a></li>\n            </ul>\n            <div class=\"swiper-goods\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\"><div><a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a></div><div><a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a></div><div><a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a></div><div><a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a></div><div><a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a></div><div><a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a></div><div><a href=\"javascript:void(0);\"><img src=\"icon/category1/jydq.png\"></a></div></div>\n                    <div class=\"swiper-slide\">最新</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-home-footer\">\n\n    </div>\n</div>";
if (typeof module !== "undefined") module.exports = window.QTMPL["home"];

    })( module.exports , module , __context );
    __context.____MODULES[ "d81938fa9be098dc4dd469794e566dca" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "7a5ef8916c77e2bd757b7599341417f3" ,
        filename : "util-ajax.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var utilAjax = {
    query: function(paramObj) {
        QApp.ajax({
            url: paramObj.url,
            method: paramObj.method || 'get',
            data: paramObj.data || {}
        }).done(function(rs) {
            if (rs && rs.ret) {
                paramObj.success && paramObj.success(rs);
            } else {
                paramObj.error && paramObj.error(rs);
            }
        }).fail(function(rs) {
            //todo
        });
    },
}

module.exports = utilAjax;

    })( module.exports , module , __context );
    __context.____MODULES[ "7a5ef8916c77e2bd757b7599341417f3" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "bdf9497d0722a52606f2d42528212513" ,
        filename : "swiper.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /**
 * Swiper 3.2.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: December 7, 2015
 */
(function () {
    'use strict';
    var $;
    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            // Hash Navigation
            hashnav: false,
            // Breakpoints
            breakpoints: undefined,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // NS
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slidePrevClass: 'swiper-slide-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationHiddenClass: 'swiper-pagination-hidden',
            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            */
        
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            }
            else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        // Swiper
        var s = this;
        
        // Params
        s.params = params;
        s.originalParams = originalParams;
        
        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;
        
        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            //Get breakpoint for window width
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [], point;
            for ( point in s.params.breakpoints ) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            //Set breakpoint for window width and update parameters
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                for ( var param in breakPointsParams ) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
            }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            s.container.each(function () {
                new Swiper(this, params);
            });
            return;
        }
        
        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        
        s.classNames.push('swiper-container-' + s.params.direction);
        
        if (s.params.freeMode) {
            s.classNames.push('swiper-container-free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push('swiper-container-no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push('swiper-container-autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push('swiper-container-3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push('swiper-container-' + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
            s.params.setWrapperSize = false;
        }
        if (s.params.effect === 'fade') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        
        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        
        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        
        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.paginationClickable) {
                s.paginationContainer.addClass('swiper-pagination-clickable');
            }
        }
        
        // Is Horizontal
        function isH() {
            return s.params.direction === 'horizontal';
        }
        
        // RTL
        s.rtl = isH() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push('swiper-container-rtl');
        }
        
        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        
        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push('swiper-container-multirow');
        }
        
        // Check for Android
        if (s.device.android) {
            s.classNames.push('swiper-container-android');
        }
        
        // Add classes
        s.container.addClass(s.classNames.join(' '));
        
        // Translate
        s.translate = 0;
        
        // Progress
        s.progress = 0;
        
        // Velocity
        s.velocity = 0;
        
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
        };
        
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        if (s.params.grabCursor) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = '-webkit-grab';
            s.container[0].style.cursor = '-moz-grab';
            s.container[0].style.cursor = 'grab';
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        
        s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
        
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
            }
        };
        
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, s.params.autoplay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            // Update Height
            var newHeight = s.slides.eq(s.activeIndex)[0].offsetHeight;
            if (newHeight) s.wrapper.css('height', s.slides.eq(s.activeIndex)[0].offsetHeight + 'px');
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && isH() || height === 0 && !isH()) {
                return;
            }
        
            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
        
            // Store values
            s.width = width;
            s.height = height;
            s.size = isH() ? s.width : s.height;
        };
        
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
        
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
        
            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
        
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
        
            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css({
                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        })
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
        
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = isH() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
        
                    if (isH()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
        
        
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
        
                s.virtualSize += slideSize + spaceBetween;
        
                prevSlideSize = slideSize;
        
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
        
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (isH()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
        
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
        
            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) > Math.floor(s.snapGrid[s.snapGrid.length - 1])) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
        
            if (s.params.spaceBetween !== 0) {
                if (isH()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = isH() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
        
            // Visible Slides
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
        
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            // for (i = 0; i < s.slidesGrid.length; i++) {
                // if (- translate >= s.slidesGrid[i]) {
                    // newActiveIndex = i;
                // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
        
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
        };
        
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
        
            // Pagination
            if (s.bullets && s.bullets.length > 0) {
                s.bullets.removeClass(s.params.bulletActiveClass);
                var bulletIndex;
                if (s.params.loop) {
                    bulletIndex = Math.ceil(s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup;
                    if (bulletIndex > s.slides.length - 1 - s.loopedSlides * 2) {
                        bulletIndex = bulletIndex - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (bulletIndex > s.bullets.length - 1) bulletIndex = bulletIndex - s.bullets.length;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        bulletIndex = s.snapIndex;
                    }
                    else {
                        bulletIndex = s.activeIndex || 0;
                    }
                }
                if (s.paginationContainer.length > 1) {
                    s.bullets.each(function () {
                        if ($(this).index() === bulletIndex) $(this).addClass(s.params.bulletActiveClass);
                    });
                }
                else {
                    s.bullets.eq(bulletIndex).addClass(s.params.bulletActiveClass);
                }
            }
        
            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton) {
                    if (s.isBeginning) {
                        $(s.params.prevButton).addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable($(s.params.prevButton));
                    }
                    else {
                        $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable($(s.params.prevButton));
                    }
                }
                if (s.params.nextButton) {
                    if (s.isEnd) {
                        $(s.params.nextButton).addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable($(s.params.nextButton));
                    }
                    else {
                        $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable($(s.params.nextButton));
                    }
                }
            }
        };
        
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var bulletsHTML = '';
                var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                for (var i = 0; i < numberOfBullets; i++) {
                    if (s.params.paginationBulletRender) {
                        bulletsHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
                    }
                    else {
                        bulletsHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                    }
                }
                s.paginationContainer.html(bulletsHTML);
                s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                    s.a11y.initPagination();
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            function forceSetTranslate() {
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated, newTranslate;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            }
            else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };
        
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            //Breakpoints
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
        
            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
        
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
        
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
        };
        
        /*=========================
          Events
          ===========================*/
        
        //Define Touch Events
        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
        };
        
        
        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        
        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
        
            var moveCapture = s.params.nested ? true : false;
        
            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
                }
                if (params.simulateTouch && !s.device.ios && !s.device.android) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
        
            // Next, Prev, Index
            if (s.params.nextButton) {
                $(s.params.nextButton)[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) $(s.params.nextButton)[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton) {
                $(s.params.prevButton)[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) $(s.params.prevButton)[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                $(s.paginationContainer)[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) $(s.paginationContainer)[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
        
            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function (detach) {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        
        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
        
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                    else {
                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        
        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            // Form elements to match
            formElements = 'input, select, textarea, button',
            // Last click time
            lastClickTime = Date.now(), clickTimeout,
            //Velocities
            velocities = [],
            allowMomentumBounce;
        
        // Animating Flag
        s.animating = false;
        
        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        
        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
        
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
        
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) return;
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
        
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
            if (typeof isScrolling === 'undefined') {
                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                isScrolling = isH() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving && s.browser.ieTouch) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
        
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor) {
                    s.container[0].style.cursor = 'move';
                    s.container[0].style.cursor = '-webkit-grabbing';
                    s.container[0].style.cursor = '-moz-grabbin';
                    s.container[0].style.cursor = 'grabbing';
                }
            }
            isMoved = true;
        
            var diff = s.touches.diff = isH() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
        
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
        
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
        
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
        
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
        
            if (!s.params.followFinger) return;
        
            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = isH() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[isH() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[isH() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched) {
                s.container[0].style.cursor = 'move';
                s.container[0].style.cursor = '-webkit-grab';
                s.container[0].style.cursor = '-moz-grab';
                s.container[0].style.cursor = 'grab';
            }
        
            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
        
            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
        
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
        
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
        
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
        
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
        
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
        
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
        
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
        
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
        
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
        
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
        
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
        
                    } else {
                        s.updateProgress(newPosition);
                    }
        
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
        
            // Find current slide
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
        
            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
        
            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
        
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
        
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        
            var translate = - s.snapGrid[s.snapIndex];
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);
        
            // Normalize slideIndex
            for (var i = 0; i < s.slidesGrid.length; i++) {
                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
        
            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
        
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                // Update Height
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
        
            if (speed === 0) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
        
            }
        
            return true;
        };
        
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    }
                    else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
        
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    }
                    else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (isH()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
        
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
        
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
        
            s.translate = isH() ? x : y;
        
            // Check if we need to update progress
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            }
            else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
        
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
        
            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
        
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
        
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a){
                        return a.replace(',','.');
                    }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
        
            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = isH() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
        
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
        
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
        
            // Observe container
            initObserver(s.container[0], {childList: false});
        
            // Observe wrapper
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        
            var slides = s.wrapper.children('.' + s.params.slideClass);
        
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
        
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
        
            if (s.params.loop) {
                s.createLoop();
            }
        
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!isH()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
        
                    }
        
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (isH()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
        
                        if (!isH()) {
                            ty = tx;
                            tx = 0;
                        }
        
                        var transform = 'rotateX(' + (isH() ? 0 : -slideAngle) + 'deg) rotateY(' + (isH() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            var shadowOpacity = slide[0].progress;
                            if (shadowBefore.length) shadowBefore[0].style.opacity = -slide[0].progress;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = slide[0].progress;
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
        
                    if (s.params.cube.shadow) {
                        if (isH()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (isH() ? 0 : wrapperRotate) + 'deg) rotateY(' + (isH() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !isH()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = isH() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = isH() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
        
                        var rotateY = isH() ? rotate * offsetMultiplier : 0;
                        var rotateX = isH() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
        
                        var translateY = isH() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = isH() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
        
                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
        
                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
        
                var slide = s.slides.eq(index);
                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;
        
                img.each(function () {
                    var _img = $(this);
                    _img.addClass('swiper-lazy-loading');
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset');
                    s.loadImage(_img[0], (src || background), srcset, false, function () {
                        if (background) {
                            _img.css('background-image', 'url(' + background + ')');
                            _img.removeAttr('data-background');
                        }
                        else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
        
                        }
        
                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
                        slide.find('.swiper-lazy-preloader, .preloader').remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
        
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
        
            },
            load: function () {
                var i;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (s.params.slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (s.params.slidesPerView > 1) {
                        // Next Slides
                        for (i = s.activeIndex + s.params.slidesPerView; i < s.activeIndex + s.params.slidesPerView + s.params.slidesPerView; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = s.activeIndex - s.params.slidesPerView; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
        
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function (e) {
                var sb = s.scrollbar;
                var x = 0, y = 0;
                var translate;
                var pointerPosition = isH() ?
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[isH() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                }
                else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function (e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
        
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
        
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
        
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            enableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(s.touchEvents.start, sb.dragStart);
                $(target).on(s.touchEvents.move, sb.dragMove);
                $(target).on(s.touchEvents.end, sb.dragEnd);
            },
            disableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(s.touchEvents.start, sb.dragStart);
                $(target).off(s.touchEvents.move, sb.dragMove);
                $(target).off(s.touchEvents.end, sb.dragEnd);
            },
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = isH() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
        
                if (isH()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
        
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
        
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && isH()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (isH()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;
        
                this.interpolate = function (x2) {
                    if (!x2) return 0;
        
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
        
                    // We yingke our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
        
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
            },
            //xxx: for now i will just save one spline function to to
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ?
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values yingke to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
        
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
        
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (s.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
        
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
        
                        });
                    }
                }
                if (s.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            init: function () {
                if (!s.params.hashnav) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (!hash) return;
                var speed = 0;
                for (var i = 0, length = s.slides.length; i < length; i++) {
                    var slide = s.slides.eq(i);
                    var slideHash = slide.attr('data-hash');
                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                        var index = slide.index();
                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                    }
                }
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
            }
        };

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (isH() && kc === 39 || !isH() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (isH() && kc === 37 || !isH() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
        
                }
                if (!inView) return;
            }
            if (isH()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };
        

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        if (s.params.mousewheelControl) {
            try {
                new window.WheelEvent('wheel');
                s.mousewheel.event = 'wheel';
            } catch (e) {}
        
            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
                s.mousewheel.event = 'mousewheel';
            }
            if (!s.mousewheel.event) {
                s.mousewheel.event = 'DOMMouseScroll';
            }
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var we = s.mousewheel.event;
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
            //Opera & IE
            if (e.detail) delta = -e.detail;
            //WebKits
            else if (we === 'mousewheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (isH()) {
                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;
                        else return;
                    }
                    else {
                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                        else return;
                    }
                }
                else {
                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? - e.wheelDeltaX * rtlFactor : - e.wheelDeltaY;
                }
            }
            //Old FireFox
            else if (we === 'DOMMouseScroll') delta = -e.detail;
            //New FireFox
            else if (we === 'wheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (isH()) {
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;
                        else return;
                    }
                    else {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                        else return;
                    }
                }
                else {
                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX * rtlFactor : - e.deltaY;
                }
            }
            if (delta === 0) return;
        
            if (s.params.mousewheelInvert) delta = -delta;
        
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
        
            }
            else {
                //Freemode or scrollContainer:
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;
        
                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();
        
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
        
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
        
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
        
                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }
            if (s.params.autoplay) s.stopAutoplay();
        
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.off(s.mousewheel.event, handleMousewheel);
            return true;
        };
        
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.on(s.mousewheel.event, handleMousewheel);
            return true;
        };
        

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
        
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (isH()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
        
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            }
            else {
                pX = pX * progress * rtlFactor + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
        
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
        
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        
        };
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };

        // Accessibility tools
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
        
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
        
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
        
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
        
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
        
            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
        
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                // Setup accessibility
                if (s.params.nextButton) {
                    var nextButton = $(s.params.nextButton);
                    s.a11y.makeFocusable(nextButton);
                    s.a11y.addRole(nextButton, 'button');
                    s.a11y.addLabel(nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton) {
                    var prevButton = $(s.params.prevButton);
                    s.a11y.makeFocusable(prevButton);
                    s.a11y.addRole(prevButton, 'button');
                    s.a11y.addLabel(prevButton, s.params.prevSlideMessage);
                }
        
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        
        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
        
            // Wrapper
            s.wrapper.removeAttr('style');
        
            // Slides
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
        
            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
        
            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
        
            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        
        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Disable draggable
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };
        
        s.init();
        

    
        // Return swiper instance
        return s;
    };
    

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
    
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
    
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
    
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    

    /*===========================
    Dom7 Library
    ===========================*/
    var Dom7 = (function () {
        var Dom7 = function (arr) {
            var _this = this, i = 0;
            // Create array-like object
            for (i = 0; i < arr.length; i++) {
                _this[i] = arr[i];
            }
            _this.length = arr.length;
            // Return collection with methods
            return this;
        };
        var $ = function (selector, context) {
            var arr = [], i = 0;
            if (selector && !context) {
                if (selector instanceof Dom7) {
                    return selector;
                }
            }
            if (selector) {
                // String
                if (typeof selector === 'string') {
                    var els, tempParent, html = selector.trim();
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                        var toCreate = 'div';
                        if (html.indexOf('<li') === 0) toCreate = 'ul';
                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
                        if (html.indexOf('<option') === 0) toCreate = 'select';
                        tempParent = document.createElement(toCreate);
                        tempParent.innerHTML = selector;
                        for (i = 0; i < tempParent.childNodes.length; i++) {
                            arr.push(tempParent.childNodes[i]);
                        }
                    }
                    else {
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                            // Pure ID selector
                            els = [document.getElementById(selector.split('#')[1])];
                        }
                        else {
                            // Other selectors
                            els = (context || document).querySelectorAll(selector);
                        }
                        for (i = 0; i < els.length; i++) {
                            if (els[i]) arr.push(els[i]);
                        }
                    }
                }
                // Node/element
                else if (selector.nodeType || selector === window || selector === document) {
                    arr.push(selector);
                }
                //Array of elements or instance of Dom
                else if (selector.length > 0 && selector[0].nodeType) {
                    for (i = 0; i < selector.length; i++) {
                        arr.push(selector[i]);
                    }
                }
            }
            return new Dom7(arr);
        };
        Dom7.prototype = {
            // Classes and attriutes
            addClass: function (className) {
                if (typeof className === 'undefined') {
                    return this;
                }
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.add(classes[i]);
                    }
                }
                return this;
            },
            removeClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.remove(classes[i]);
                    }
                }
                return this;
            },
            hasClass: function (className) {
                if (!this[0]) return false;
                else return this[0].classList.contains(className);
            },
            toggleClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.toggle(classes[i]);
                    }
                }
                return this;
            },
            attr: function (attrs, value) {
                if (arguments.length === 1 && typeof attrs === 'string') {
                    // Get attr
                    if (this[0]) return this[0].getAttribute(attrs);
                    else return undefined;
                }
                else {
                    // Set attrs
                    for (var i = 0; i < this.length; i++) {
                        if (arguments.length === 2) {
                            // String
                            this[i].setAttribute(attrs, value);
                        }
                        else {
                            // Object
                            for (var attrName in attrs) {
                                this[i][attrName] = attrs[attrName];
                                this[i].setAttribute(attrName, attrs[attrName]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function (attr) {
                for (var i = 0; i < this.length; i++) {
                    this[i].removeAttribute(attr);
                }
                return this;
            },
            data: function (key, value) {
                if (typeof value === 'undefined') {
                    // Get value
                    if (this[0]) {
                        var dataKey = this[0].getAttribute('data-' + key);
                        if (dataKey) return dataKey;
                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
                        else return undefined;
                    }
                    else return undefined;
                }
                else {
                    // Set value
                    for (var i = 0; i < this.length; i++) {
                        var el = this[i];
                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                        el.dom7ElementDataStorage[key] = value;
                    }
                    return this;
                }
            },
            // Transforms
            transform : function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            },
            transition: function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            },
            //Events
            on: function (eventName, targetSelector, listener, capture) {
                function handleLiveEvent(e) {
                    var target = e.target;
                    if ($(target).is(targetSelector)) listener.call(target, e);
                    else {
                        var parents = $(target).parents();
                        for (var k = 0; k < parents.length; k++) {
                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                        }
                    }
                }
                var events = eventName.split(' ');
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof targetSelector === 'function' || targetSelector === false) {
                        // Usual events
                        if (typeof targetSelector === 'function') {
                            listener = arguments[1];
                            capture = arguments[2] || false;
                        }
                        for (j = 0; j < events.length; j++) {
                            this[i].addEventListener(events[j], listener, capture);
                        }
                    }
                    else {
                        //Live events
                        for (j = 0; j < events.length; j++) {
                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});
                            this[i].addEventListener(events[j], handleLiveEvent, capture);
                        }
                    }
                }
    
                return this;
            },
            off: function (eventName, targetSelector, listener, capture) {
                var events = eventName.split(' ');
                for (var i = 0; i < events.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof targetSelector === 'function' || targetSelector === false) {
                            // Usual events
                            if (typeof targetSelector === 'function') {
                                listener = arguments[1];
                                capture = arguments[2] || false;
                            }
                            this[j].removeEventListener(events[i], listener, capture);
                        }
                        else {
                            // Live event
                            if (this[j].dom7LiveListeners) {
                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                                    if (this[j].dom7LiveListeners[k].listener === listener) {
                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                    }
                                }
                            }
                        }
                    }
                }
                return this;
            },
            once: function (eventName, targetSelector, listener, capture) {
                var dom = this;
                if (typeof targetSelector === 'function') {
                    targetSelector = false;
                    listener = arguments[1];
                    capture = arguments[2];
                }
                function proxy(e) {
                    listener(e);
                    dom.off(eventName, targetSelector, proxy, capture);
                }
                dom.on(eventName, targetSelector, proxy, capture);
            },
            trigger: function (eventName, eventData) {
                for (var i = 0; i < this.length; i++) {
                    var evt;
                    try {
                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
                    }
                    catch (e) {
                        evt = document.createEvent('Event');
                        evt.initEvent(eventName, true, true);
                        evt.detail = eventData;
                    }
                    this[i].dispatchEvent(evt);
                }
                return this;
            },
            transitionEnd: function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            },
            // Sizing/Styles
            width: function () {
                if (this[0] === window) {
                    return window.innerWidth;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('width'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerWidth: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            },
            height: function () {
                if (this[0] === window) {
                    return window.innerHeight;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('height'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerHeight: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
                    else
                        return this[0].offsetHeight;
                }
                else return null;
            },
            offset: function () {
                if (this.length > 0) {
                    var el = this[0];
                    var box = el.getBoundingClientRect();
                    var body = document.body;
                    var clientTop  = el.clientTop  || body.clientTop  || 0;
                    var clientLeft = el.clientLeft || body.clientLeft || 0;
                    var scrollTop  = window.pageYOffset || el.scrollTop;
                    var scrollLeft = window.pageXOffset || el.scrollLeft;
                    return {
                        top: box.top  + scrollTop  - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    };
                }
                else {
                    return null;
                }
            },
            css: function (props, value) {
                var i;
                if (arguments.length === 1) {
                    if (typeof props === 'string') {
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                    }
                    else {
                        for (i = 0; i < this.length; i++) {
                            for (var prop in props) {
                                this[i].style[prop] = props[prop];
                            }
                        }
                        return this;
                    }
                }
                if (arguments.length === 2 && typeof props === 'string') {
                    for (i = 0; i < this.length; i++) {
                        this[i].style[props] = value;
                    }
                    return this;
                }
                return this;
            },
    
            //Dom manipulation
            each: function (callback) {
                for (var i = 0; i < this.length; i++) {
                    callback.call(this[i], i, this[i]);
                }
                return this;
            },
            html: function (html) {
                if (typeof html === 'undefined') {
                    return this[0] ? this[0].innerHTML : undefined;
                }
                else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].innerHTML = html;
                    }
                    return this;
                }
            },
            is: function (selector) {
                if (!this[0]) return false;
                var compareWith, i;
                if (typeof selector === 'string') {
                    var el = this[0];
                    if (el === document) return selector === document;
                    if (el === window) return selector === window;
    
                    if (el.matches) return el.matches(selector);
                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                    else {
                        compareWith = $(selector);
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                }
                else if (selector === document) return this[0] === document;
                else if (selector === window) return this[0] === window;
                else {
                    if (selector.nodeType || selector instanceof Dom7) {
                        compareWith = selector.nodeType ? [selector] : selector;
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                    return false;
                }
    
            },
            index: function () {
                if (this[0]) {
                    var child = this[0];
                    var i = 0;
                    while ((child = child.previousSibling) !== null) {
                        if (child.nodeType === 1) i++;
                    }
                    return i;
                }
                else return undefined;
            },
            eq: function (index) {
                if (typeof index === 'undefined') return this;
                var length = this.length;
                var returnIndex;
                if (index > length - 1) {
                    return new Dom7([]);
                }
                if (index < 0) {
                    returnIndex = length + index;
                    if (returnIndex < 0) return new Dom7([]);
                    else return new Dom7([this[returnIndex]]);
                }
                return new Dom7([this[index]]);
            },
            append: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].appendChild(newChild[j]);
                        }
                    }
                    else {
                        this[i].appendChild(newChild);
                    }
                }
                return this;
            },
            prepend: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                        }
                        // this[i].insertAdjacentHTML('afterbegin', newChild);
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                        }
                    }
                    else {
                        this[i].insertBefore(newChild, this[i].childNodes[0]);
                    }
                }
                return this;
            },
            insertBefore: function (selector) {
                var before = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (before.length === 1) {
                        before[0].parentNode.insertBefore(this[i], before[0]);
                    }
                    else if (before.length > 1) {
                        for (var j = 0; j < before.length; j++) {
                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                        }
                    }
                }
            },
            insertAfter: function (selector) {
                var after = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (after.length === 1) {
                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                    }
                    else if (after.length > 1) {
                        for (var j = 0; j < after.length; j++) {
                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                        }
                    }
                }
            },
            next: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            nextAll: function (selector) {
                var nextEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.nextElementSibling) {
                    var next = el.nextElementSibling;
                    if (selector) {
                        if($(next).is(selector)) nextEls.push(next);
                    }
                    else nextEls.push(next);
                    el = next;
                }
                return new Dom7(nextEls);
            },
            prev: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            prevAll: function (selector) {
                var prevEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.previousElementSibling) {
                    var prev = el.previousElementSibling;
                    if (selector) {
                        if($(prev).is(selector)) prevEls.push(prev);
                    }
                    else prevEls.push(prev);
                    el = prev;
                }
                return new Dom7(prevEls);
            },
            parent: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    }
                    else {
                        parents.push(this[i].parentNode);
                    }
                }
                return $($.unique(parents));
            },
            parents: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    var parent = this[i].parentNode;
                    while (parent) {
                        if (selector) {
                            if ($(parent).is(selector)) parents.push(parent);
                        }
                        else {
                            parents.push(parent);
                        }
                        parent = parent.parentNode;
                    }
                }
                return $($.unique(parents));
            },
            find : function (selector) {
                var foundElements = [];
                for (var i = 0; i < this.length; i++) {
                    var found = this[i].querySelectorAll(selector);
                    for (var j = 0; j < found.length; j++) {
                        foundElements.push(found[j]);
                    }
                }
                return new Dom7(foundElements);
            },
            children: function (selector) {
                var children = [];
                for (var i = 0; i < this.length; i++) {
                    var childNodes = this[i].childNodes;
    
                    for (var j = 0; j < childNodes.length; j++) {
                        if (!selector) {
                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                        }
                        else {
                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                        }
                    }
                }
                return new Dom7($.unique(children));
            },
            remove: function () {
                for (var i = 0; i < this.length; i++) {
                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                }
                return this;
            },
            add: function () {
                var dom = this;
                var i, j;
                for (i = 0; i < arguments.length; i++) {
                    var toAdd = $(arguments[i]);
                    for (j = 0; j < toAdd.length; j++) {
                        dom[dom.length] = toAdd[j];
                        dom.length++;
                    }
                }
                return dom;
            }
        };
        $.fn = Dom7.prototype;
        $.unique = function (arr) {
            var unique = [];
            for (var i = 0; i < arr.length; i++) {
                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
            }
            return unique;
        };
    
        return $;
    })();
    

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
    }

    window.Swiper = Swiper;
})();
/*===========================
Swiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
}

    })( module.exports , module , __context );
    __context.____MODULES[ "bdf9497d0722a52606f2d42528212513" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "81534f819dbb8f857997bf1900f5d6a6" ,
        filename : "iscroll-4.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /*!
 * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(window, doc){
var m = Math,
	dummyStyle = doc.createElement('div').style,
	vendor = (function () {
		var vendors = 't,webkitT,MozT,msT,OT'.split(','),
			t,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			t = vendors[i] + 'ransform';
			if ( t in dummyStyle ) {
				return vendors[i].substr(0, vendors[i].length - 1);
			}
		}

		return false;
	})(),
	cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',

	// Style properties
	transform = prefixStyle('transform'),
	transitionProperty = prefixStyle('transitionProperty'),
	transitionDuration = prefixStyle('transitionDuration'),
	transformOrigin = prefixStyle('transformOrigin'),
	transitionTimingFunction = prefixStyle('transitionTimingFunction'),
	transitionDelay = prefixStyle('transitionDelay'),

    // Browser capabilities
	isAndroid = (/android/gi).test(navigator.appVersion),
	isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
	isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = prefixStyle('perspective') in dummyStyle,
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor !== false,
    hasTransitionEnd = prefixStyle('transition') in dummyStyle,

	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
	TRNEND_EV = (function () {
		if ( vendor === false ) return false;

		var transitionEnd = {
				''			: 'transitionend',
				'webkit'	: 'webkitTransitionEnd',
				'Moz'		: 'transitionend',
				'O'			: 'otransitionend',
				'ms'		: 'MSTransitionEnd'
			};

		return transitionEnd[vendor];
	})(),

	nextFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) { return setTimeout(callback, 1); };
	})(),
	cancelFrame = (function () {
		return window.cancelRequestAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			window.oCancelRequestAnimationFrame ||
			window.msCancelRequestAnimationFrame ||
			clearTimeout;
	})(),

	// Helpers
	translateZ = has3d ? ' translateZ(0)' : '',

	// Constructor
	iScroll = function (el, options) {
		var that = this,
			i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll: true,
			vScroll: true,
			x: 0,
			y: 0,
			bounce: true,
			bounceLock: false,
			momentum: true,
			lockDirection: true,
			useTransform: true,
			useTransition: false,
			topOffset: 0,
			checkDOMChanges: false,		// Experimental
			handleClick: true,

			// Scrollbar
			hScrollbar: true,
			vScrollbar: true,
			fixedScrollbar: isAndroid,
			hideScrollbar: isIDevice,
			fadeScrollbar: isIDevice && has3d,
			scrollbarClass: '',

			// Zoom
			zoom: false,
			zoomMin: 1,
			zoomMax: 4,
			doubleTapZoom: 2,
			wheelAction: 'scroll',

			// Snap
			snap: false,
			snapThreshold: 1,

			// Events
			onRefresh: null,
			onBeforeScrollStart: function (e) { e.preventDefault(); },
			onScrollStart: null,
			onBeforeScrollMove: null,
			onScrollMove: null,
			onBeforeScrollEnd: null,
			onScrollEnd: null,
			onTouchEnd: null,
			onDestroy: null,
			onZoomStart: null,
			onZoom: null,
			onZoomEnd: null
		};

		// User defined options
		for (i in options) that.options[i] = options[i];
		
		// Set starting position
		that.x = that.options.x;
		that.y = that.options.y;

		// Normalize options
		that.options.useTransform = hasTransform && that.options.useTransform;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.zoom = that.options.useTransform && that.options.zoom;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Helpers FIX ANDROID BUG!
		// translate3d and scale doesn't work together!
		// Ignoring 3d ONLY WHEN YOU SET that.options.zoom
		if ( that.options.zoom && isAndroid ){
			translateZ = '';
		}
		
		// Set some default styles
		that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
		that.scroller.style[transitionDuration] = '0';
		that.scroller.style[transformOrigin] = '0 0';
		if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';
		
		if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;
		else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

		if (that.options.useTransition) that.options.fixedScrollbar = true;

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if (!hasTouch) {
			if (that.options.wheelAction != 'none') {
				that._bind('DOMMouseScroll');
				that._bind('mousewheel');
			}
		}

		if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
			that._checkDOMChanges();
		}, 500);
	};

// Prototype
iScroll.prototype = {
	enabled: true,
	x: 0,
	y: 0,
	steps: [],
	scale: 1,
	currPageX: 0, currPageY: 0,
	pagesX: [], pagesY: [],
	aniTime: null,
	wheelZoomCount: 0,
	
	handleEvent: function (e) {
		var that = this;
		switch(e.type) {
			case START_EV:
				if (!hasTouch && e.button !== 0) return;
				that._start(e);
				break;
			case MOVE_EV: that._move(e); break;
			case END_EV:
			case CANCEL_EV: that._end(e); break;
			case RESIZE_EV: that._resize(); break;
			case 'DOMMouseScroll': case 'mousewheel': that._wheel(e); break;
			case TRNEND_EV: that._transitionEnd(e); break;
		}
	},
	
	_checkDOMChanges: function () {
		if (this.moved || this.zoomed || this.animating ||
			(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

		this.refresh();
	},
	
	_scrollbar: function (dir) {
		var that = this,
			bar;

		if (!that[dir + 'Scrollbar']) {
			if (that[dir + 'ScrollbarWrapper']) {
				if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
				that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
				that[dir + 'ScrollbarWrapper'] = null;
				that[dir + 'ScrollbarIndicator'] = null;
			}

			return;
		}

		if (!that[dir + 'ScrollbarWrapper']) {
			// Create the scrollbar wrapper
			bar = doc.createElement('div');

			if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
			else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

			bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

			that.wrapper.appendChild(bar);
			that[dir + 'ScrollbarWrapper'] = bar;

			// Create the scrollbar indicator
			bar = doc.createElement('div');
			if (!that.options.scrollbarClass) {
				bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
			}
			bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
			if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

			that[dir + 'ScrollbarWrapper'].appendChild(bar);
			that[dir + 'ScrollbarIndicator'] = bar;
		}

		if (dir == 'h') {
			that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
			that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
			that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
			that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
			that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
		} else {
			that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
			that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
			that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
			that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
			that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
		}

		// Reset position
		that._scrollbarPos(dir, true);
	},
	
	_resize: function () {
		var that = this;
		setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
	},
	
	_pos: function (x, y) {
		if (this.zoomed) return;

		x = this.hScroll ? x : 0;
		y = this.vScroll ? y : 0;

		if (this.options.useTransform) {
			this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
		} else {
			x = m.round(x);
			y = m.round(y);
			this.scroller.style.left = x + 'px';
			this.scroller.style.top = y + 'px';
		}

		this.x = x;
		this.y = y;

		this._scrollbarPos('h');
		this._scrollbarPos('v');
	},

	_scrollbarPos: function (dir, hidden) {
		var that = this,
			pos = dir == 'h' ? that.x : that.y,
			size;

		if (!that[dir + 'Scrollbar']) return;

		pos = that[dir + 'ScrollbarProp'] * pos;

		if (pos < 0) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
			}
			pos = 0;
		} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
				pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
			} else {
				pos = that[dir + 'ScrollbarMaxScroll'];
			}
		}

		that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
		that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
		that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
	},
	
	_start: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			matrix, x, y,
			c1, c2;

		if (!that.enabled) return;

		if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

		if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

		that.moved = false;
		that.animating = false;
		that.zoomed = false;
		that.distX = 0;
		that.distY = 0;
		that.absDistX = 0;
		that.absDistY = 0;
		that.dirX = 0;
		that.dirY = 0;

		// Gesture start
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
			that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

			that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
			that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

			if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
		}

		if (that.options.momentum) {
			if (that.options.useTransform) {
				// Very lame general purpose alternative to CSSMatrix
				matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '');
				y = +getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '');
			}
			
			if (x != that.x || y != that.y) {
				if (that.options.useTransition) that._unbind(TRNEND_EV);
				else cancelFrame(that.aniTime);
				that.steps = [];
				that._pos(x, y);
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
			}
		}

		that.absStartX = that.x;	// Needed by snap threshold
		that.absStartY = that.y;

		that.startX = that.x;
		that.startY = that.y;
		that.pointX = point.pageX;
		that.pointY = point.pageY;

		that.startTime = e.timeStamp || Date.now();

		if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

		that._bind(MOVE_EV, window);
		that._bind(END_EV, window);
		that._bind(CANCEL_EV, window);
	},
	
	_move: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			deltaX = point.pageX - that.pointX,
			deltaY = point.pageY - that.pointY,
			newX = that.x + deltaX,
			newY = that.y + deltaY,
			c1, c2, scale,
			timestamp = e.timeStamp || Date.now();

		if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

		// Zoom
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
			that.touchesDist = m.sqrt(c1*c1+c2*c2);

			that.zoomed = true;

			scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

			if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
			else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

			that.lastScale = scale / this.scale;

			newX = this.originX - this.originX * that.lastScale + this.x;
			newY = this.originY - this.originY * that.lastScale + this.y;

			this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

			if (that.options.onZoom) that.options.onZoom.call(that, e);
			return;
		}

		that.pointX = point.pageX;
		that.pointY = point.pageY;

		// Slow down if outside of the boundaries
		if (newX > 0 || newX < that.maxScrollX) {
			newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
		}
		if (newY > that.minScrollY || newY < that.maxScrollY) {
			newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
		}

		that.distX += deltaX;
		that.distY += deltaY;
		that.absDistX = m.abs(that.distX);
		that.absDistY = m.abs(that.distY);

		if (that.absDistX < 6 && that.absDistY < 6) {
			return;
		}

		// Lock direction
		if (that.options.lockDirection) {
			if (that.absDistX > that.absDistY + 5) {
				newY = that.y;
				deltaY = 0;
			} else if (that.absDistY > that.absDistX + 5) {
				newX = that.x;
				deltaX = 0;
			}
		}

		that.moved = true;
		that._pos(newX, newY);
		that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if (timestamp - that.startTime > 300) {
			that.startTime = timestamp;
			that.startX = that.x;
			that.startY = that.y;
		}
		
		if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
	},
	
	_end: function (e) {
		if (hasTouch && e.touches.length !== 0) return;

		var that = this,
			point = hasTouch ? e.changedTouches[0] : e,
			target, ev,
			momentumX = { dist:0, time:0 },
			momentumY = { dist:0, time:0 },
			duration = (e.timeStamp || Date.now()) - that.startTime,
			newPosX = that.x,
			newPosY = that.y,
			distX, distY,
			newDuration,
			snap,
			scale;

		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);

		if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

		if (that.zoomed) {
			scale = that.scale * that.lastScale;
			scale = Math.max(that.options.zoomMin, scale);
			scale = Math.min(that.options.zoomMax, scale);
			that.lastScale = scale / that.scale;
			that.scale = scale;

			that.x = that.originX - that.originX * that.lastScale + that.x;
			that.y = that.originY - that.originY * that.lastScale + that.y;
			
			that.scroller.style[transitionDuration] = '200ms';
			that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;
			
			that.zoomed = false;
			that.refresh();

			if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
			return;
		}

		if (!that.moved) {
			if (hasTouch) {
				if (that.doubleTapTimer && that.options.zoom) {
					// Double tapped
					clearTimeout(that.doubleTapTimer);
					that.doubleTapTimer = null;
					if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
					that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
					if (that.options.onZoomEnd) {
						setTimeout(function() {
							that.options.onZoomEnd.call(that, e);
						}, 200); // 200 is default zoom duration
					}
				} else if (this.options.handleClick) {
					that.doubleTapTimer = setTimeout(function () {
						that.doubleTapTimer = null;

						// Find the last touched element
						target = point.target;
						while (target.nodeType != 1) target = target.parentNode;

						if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
							ev = doc.createEvent('MouseEvents');
							ev.initMouseEvent('click', true, true, e.view, 1,
								point.screenX, point.screenY, point.clientX, point.clientY,
								e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
								0, null);
							ev._fake = true;
							target.dispatchEvent(ev);
						}
					}, that.options.zoom ? 250 : 0);
				}
			}

			that._resetPos(400);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		if (duration < 300 && that.options.momentum) {
			momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
			momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

			newPosX = that.x + momentumX.dist;
			newPosY = that.y + momentumY.dist;

			if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
			if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
		}

		if (momentumX.dist || momentumY.dist) {
			newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

			// Do we need to snap?
			if (that.options.snap) {
				distX = newPosX - that.absStartX;
				distY = newPosY - that.absStartY;
				if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
				else {
					snap = that._snap(newPosX, newPosY);
					newPosX = snap.x;
					newPosY = snap.y;
					newDuration = m.max(snap.time, newDuration);
				}
			}

			that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		// Do we need to snap?
		if (that.options.snap) {
			distX = newPosX - that.absStartX;
			distY = newPosY - that.absStartY;
			if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
			else {
				snap = that._snap(that.x, that.y);
				if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
			}

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		that._resetPos(200);
		if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
	},
	
	_resetPos: function (time) {
		var that = this,
			resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
			resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		if (resetX == that.x && resetY == that.y) {
			if (that.moved) {
				that.moved = false;
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
			}

			if (that.hScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
				that.hScrollbarWrapper.style.opacity = '0';
			}
			if (that.vScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
				that.vScrollbarWrapper.style.opacity = '0';
			}

			return;
		}

		that.scrollTo(resetX, resetY, time || 0);
	},

	_wheel: function (e) {
		var that = this,
			wheelDeltaX, wheelDeltaY,
			deltaX, deltaY,
			deltaScale;

		if ('wheelDeltaX' in e) {
			wheelDeltaX = e.wheelDeltaX / 12;
			wheelDeltaY = e.wheelDeltaY / 12;
		} else if('wheelDelta' in e) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
		} else if ('detail' in e) {
			wheelDeltaX = wheelDeltaY = -e.detail * 3;
		} else {
			return;
		}
		
		if (that.options.wheelAction == 'zoom') {
			deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
			if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
			if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;
			
			if (deltaScale != that.scale) {
				if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
				that.wheelZoomCount++;
				
				that.zoom(e.pageX, e.pageY, deltaScale, 400);
				
				setTimeout(function() {
					that.wheelZoomCount--;
					if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
				}, 400);
			}
			
			return;
		}
		
		deltaX = that.x + wheelDeltaX;
		deltaY = that.y + wheelDeltaY;

		if (deltaX > 0) deltaX = 0;
		else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

		if (deltaY > that.minScrollY) deltaY = that.minScrollY;
		else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;
    
		if (that.maxScrollY < 0) {
			that.scrollTo(deltaX, deltaY, 0);
		}
	},
	
	_transitionEnd: function (e) {
		var that = this;

		if (e.target != that.scroller) return;

		that._unbind(TRNEND_EV);
		
		that._startAni();
	},


	/**
	*
	* Utilities
	*
	*/
	_startAni: function () {
		var that = this,
			startX = that.x, startY = that.y,
			startTime = Date.now(),
			step, easeOut,
			animate;

		if (that.animating) return;
		
		if (!that.steps.length) {
			that._resetPos(400);
			return;
		}
		
		step = that.steps.shift();
		
		if (step.x == startX && step.y == startY) step.time = 0;

		that.animating = true;
		that.moved = true;
		
		if (that.options.useTransition) {
			that._transitionTime(step.time);
			that._pos(step.x, step.y);
			that.animating = false;
			if (step.time) that._bind(TRNEND_EV);
			else that._resetPos(0);
			return;
		}

		animate = function () {
			var now = Date.now(),
				newX, newY;

			if (now >= startTime + step.time) {
				that._pos(step.x, step.y);
				that.animating = false;
				if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
				that._startAni();
				return;
			}

			now = (now - startTime) / step.time - 1;
			easeOut = m.sqrt(1 - now * now);
			newX = (step.x - startX) * easeOut + startX;
			newY = (step.y - startY) * easeOut + startY;
			that._pos(newX, newY);
			if (that.animating) that.aniTime = nextFrame(animate);
		};

		animate();
	},

	_transitionTime: function (time) {
		time += 'ms';
		this.scroller.style[transitionDuration] = time;
		if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
		if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
	},

	_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
		var deceleration = 0.0006,
			speed = m.abs(dist) / time,
			newDist = (speed * speed) / (2 * deceleration),
			newTime = 0, outsideDist = 0;

		// Proportinally reduce speed if we are outside of the boundaries
		if (dist > 0 && newDist > maxDistUpper) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistUpper = maxDistUpper + outsideDist;
			speed = speed * maxDistUpper / newDist;
			newDist = maxDistUpper;
		} else if (dist < 0 && newDist > maxDistLower) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistLower = maxDistLower + outsideDist;
			speed = speed * maxDistLower / newDist;
			newDist = maxDistLower;
		}

		newDist = newDist * (dist < 0 ? -1 : 1);
		newTime = speed / deceleration;

		return { dist: newDist, time: m.round(newTime) };
	},

	_offset: function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;
			
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		
		if (el != this.wrapper) {
			left *= this.scale;
			top *= this.scale;
		}

		return { left: left, top: top };
	},

	_snap: function (x, y) {
		var that = this,
			i, l,
			page, time,
			sizeX, sizeY;

		// Check page X
		page = that.pagesX.length - 1;
		for (i=0, l=that.pagesX.length; i<l; i++) {
			if (x >= that.pagesX[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
		x = that.pagesX[page];
		sizeX = m.abs(x - that.pagesX[that.currPageX]);
		sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
		that.currPageX = page;

		// Check page Y
		page = that.pagesY.length-1;
		for (i=0; i<page; i++) {
			if (y >= that.pagesY[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
		y = that.pagesY[page];
		sizeY = m.abs(y - that.pagesY[that.currPageY]);
		sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
		that.currPageY = page;

		// Snap with constant speed (proportional duration)
		time = m.round(m.max(sizeX, sizeY)) || 200;

		return { x: x, y: y, time: time };
	},

	_bind: function (type, el, bubble) {
		(el || this.scroller).addEventListener(type, this, !!bubble);
	},

	_unbind: function (type, el, bubble) {
		(el || this.scroller).removeEventListener(type, this, !!bubble);
	},


	/**
	*
	* Public methods
	*
	*/
	destroy: function () {
		var that = this;

		that.scroller.style[transform] = '';

		// Remove the scrollbars
		that.hScrollbar = false;
		that.vScrollbar = false;
		that._scrollbar('h');
		that._scrollbar('v');

		// Remove the event listeners
		that._unbind(RESIZE_EV, window);
		that._unbind(START_EV);
		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);
		
		if (!that.options.hasTouch) {
			that._unbind('DOMMouseScroll');
			that._unbind('mousewheel');
		}
		
		if (that.options.useTransition) that._unbind(TRNEND_EV);
		
		if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);
		
		if (that.options.onDestroy) that.options.onDestroy.call(that);
	},

	refresh: function () {
		var that = this,
			offset,
			i, l,
			els,
			pos = 0,
			page = 0;

		if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
		that.wrapperW = that.wrapper.clientWidth || 1;
		that.wrapperH = that.wrapper.clientHeight || 1;

		that.minScrollY = -that.options.topOffset || 0;
		that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
		that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
		that.maxScrollX = that.wrapperW - that.scrollerW;
		that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
		that.dirX = 0;
		that.dirY = 0;

		if (that.options.onRefresh) that.options.onRefresh.call(that);

		that.hScroll = that.options.hScroll && that.maxScrollX < 0;
		that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

		that.hScrollbar = that.hScroll && that.options.hScrollbar;
		that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

		offset = that._offset(that.wrapper);
		that.wrapperOffsetLeft = -offset.left;
		that.wrapperOffsetTop = -offset.top;

		// Prepare snap
		if (typeof that.options.snap == 'string') {
			that.pagesX = [];
			that.pagesY = [];
			els = that.scroller.querySelectorAll(that.options.snap);
			for (i=0, l=els.length; i<l; i++) {
				pos = that._offset(els[i]);
				pos.left += that.wrapperOffsetLeft;
				pos.top += that.wrapperOffsetTop;
				that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
				that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
			}
		} else if (that.options.snap) {
			that.pagesX = [];
			while (pos >= that.maxScrollX) {
				that.pagesX[page] = pos;
				pos = pos - that.wrapperW;
				page++;
			}
			if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

			pos = 0;
			page = 0;
			that.pagesY = [];
			while (pos >= that.maxScrollY) {
				that.pagesY[page] = pos;
				pos = pos - that.wrapperH;
				page++;
			}
			if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
		}

		// Prepare the scrollbars
		that._scrollbar('h');
		that._scrollbar('v');

		if (!that.zoomed) {
			that.scroller.style[transitionDuration] = '0';
			that._resetPos(400);
		}
	},

	scrollTo: function (x, y, time, relative) {
		var that = this,
			step = x,
			i, l;

		that.stop();

		if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];
		
		for (i=0, l=step.length; i<l; i++) {
			if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
			that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
		}

		that._startAni();
	},

	scrollToElement: function (el, time) {
		var that = this, pos;
		el = el.nodeType ? el : that.scroller.querySelector(el);
		if (!el) return;

		pos = that._offset(el);
		pos.left += that.wrapperOffsetLeft;
		pos.top += that.wrapperOffsetTop;

		pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
		pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
		time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

		that.scrollTo(pos.left, pos.top, time);
	},

	scrollToPage: function (pageX, pageY, time) {
		var that = this, x, y;
		
		time = time === undefined ? 400 : time;

		if (that.options.onScrollStart) that.options.onScrollStart.call(that);

		if (that.options.snap) {
			pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
			pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

			pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
			pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

			that.currPageX = pageX;
			that.currPageY = pageY;
			x = that.pagesX[pageX];
			y = that.pagesY[pageY];
		} else {
			x = -that.wrapperW * pageX;
			y = -that.wrapperH * pageY;
			if (x < that.maxScrollX) x = that.maxScrollX;
			if (y < that.maxScrollY) y = that.maxScrollY;
		}

		that.scrollTo(x, y, time);
	},

	disable: function () {
		this.stop();
		this._resetPos(0);
		this.enabled = false;

		// If disabled after touchstart we make sure that there are no left over events
		this._unbind(MOVE_EV, window);
		this._unbind(END_EV, window);
		this._unbind(CANCEL_EV, window);
	},
	
	enable: function () {
		this.enabled = true;
	},
	
	stop: function () {
		if (this.options.useTransition) this._unbind(TRNEND_EV);
		else cancelFrame(this.aniTime);
		this.steps = [];
		this.moved = false;
		this.animating = false;
	},
	
	zoom: function (x, y, scale, time) {
		var that = this,
			relScale = scale / that.scale;

		if (!that.options.useTransform) return;

		that.zoomed = true;
		time = time === undefined ? 200 : time;
		x = x - that.wrapperOffsetLeft - that.x;
		y = y - that.wrapperOffsetTop - that.y;
		that.x = x - x * relScale + that.x;
		that.y = y - y * relScale + that.y;

		that.scale = scale;
		that.refresh();

		that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
		that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		that.scroller.style[transitionDuration] = time + 'ms';
		that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
		that.zoomed = false;
	},
	
	isReady: function () {
		return !this.moved && !this.zoomed && !this.animating;
	}
};

function prefixStyle (style) {
	if ( vendor === '' ) return style;

	style = style.charAt(0).toUpperCase() + style.substr(1);
	return vendor + style;
}

dummyStyle = null;	// for the sake of it

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})(window, document);


    })( module.exports , module , __context );
    __context.____MODULES[ "81534f819dbb8f857997bf1900f5d6a6" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "3c489e235b573c5f18ff09a377fdcf82" ,
        filename : "home.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    
var indexTpl =__context.____MODULES['d81938fa9be098dc4dd469794e566dca'];
var utilAjax =__context.____MODULES['7a5ef8916c77e2bd757b7599341417f3'];
__context.____MODULES['bdf9497d0722a52606f2d42528212513'];
__context.____MODULES['81534f819dbb8f857997bf1900f5d6a6'];
//定义视图 （QApp框架）
QApp.defineView('home', {
	html: indexTpl,

	plugins: ['delegated', 'ajax', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];
		}
	}],

	init: {
		vm: null
	},

	bindActions: {

	},
	// 视图生命周期事件绑定
	bindEvents:{
		'beforeShow': function() {
			// var self = this;
			// self.vm = this.getVM();
			// utilAjax.query({
			// 	url: "/interface/getList.do",
			// 	success: function(rs){
			// 		self.vm.list = rs.data;
			// 	}
			// });
			// 首页焦点轮播图
			var IndexFocus = new Swiper('.swiper-focus', {
				direction: 'horizontal',
				loop: true,
				autoplay:3000,
				autoplayDisableOnInteraction : false,
				pagination : '.swiper-pagination',

			});


		},

	},
	// 视图创建完成的回调
	ready:function(){
		//首页商品展示滑动切换效果
		var goodsList = new Swiper('.swiper-goods', {
			direction: 'horizontal',
			onSlideChangeEnd: function(swiper){
				//console.log(swiper)
				console.log(swiper.activeIndex);
				var count = swiper.activeIndex;
				$(".goods-list .list").toggleClass("selected");
			}
		});
		var homeScroll = new IScroll('#wrapper',{
			scrollbars: true,

		});
		homeScroll.on("scrollEnd",function(){
			console.log(this.directionY);

		});
		$(".m-home-header .backBtn").on("tap",function(){
			console.log($(this));


		})
		$(".m-home-header .searchBth").on("tap",function(){
			console.log($(this));
		})
		$(".category-level1 li a img").on("tap",function(){
			console.log($(this).parent().parent().index());
		})
		//首页商品展示上方选项与下方滑动切换效果联动
		$(".goods-list .list").on("tap",function(){
			//$(this).addClass("selected").siblings().removeClass("selected");
			var count = $(this).attr("data-count");
			goodsList.slideTo(count);
		})
	}


	
});


    })( module.exports , module , __context );
    __context.____MODULES[ "3c489e235b573c5f18ff09a377fdcf82" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "1f191afd4d33f05ecc6345a7b92aea9f" ,
        filename : "shoppingcart.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["shoppingcart"] = "<div class=\"m-shoppingcart\">\n    <div class=\"m-shoppingcart-header\">\n        <div class=\"backBtn\"><img style=\"height:0.20rem;\" src=\"icon/back.png\" /></div>\n        <div class=\"shoppingcart-title\"><b>购物车</b></div>\n        <div class=\"compileBtn\"><b>编辑</b></div>\n    </div>\n    <div class=\"m-shoppingcart-body\" style=\"\">\n\n    </div>\n</>";
if (typeof module !== "undefined") module.exports = window.QTMPL["shoppingcart"];

    })( module.exports , module , __context );
    __context.____MODULES[ "1f191afd4d33f05ecc6345a7b92aea9f" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "7d5327abc5ffdc874320622e14181680" ,
        filename : "shoppingcart.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    
var indexTpl =__context.____MODULES['1f191afd4d33f05ecc6345a7b92aea9f'];
var utilAjax =__context.____MODULES['7a5ef8916c77e2bd757b7599341417f3'];

QApp.defineView('shoppingcart', {
		html: indexTpl,

		plugins: ['delegated', 'ajax','doms', {
			name: 'avalon',
			options: function (vm) {
				vm.list = [];
			}
		}],
		//modules:[{
		//	name:"content",
		//	container:".m-shoppingcart-body",
		//	views:[""],
		//	defaultTag:"user"
		//}],
		//init: {
		//	curTag:"user",
		//	vm: null
		//},

		bindActions: {},
		ready: function () {
			$(".m-shoppingcart .backBtn").on("tap",function(){
				//QApp.router.open("user")
			})

		},
	}

);


    })( module.exports , module , __context );
    __context.____MODULES[ "7d5327abc5ffdc874320622e14181680" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "38e021102a5032af764851c643ade68b" ,
        filename : "classtify.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["classtify"] = "<div class=\"m-classtify\">\n\t<div class=\"m-classtify-header\">\n\t\t<div class=\"backBtn\"><img style=\"height:0.20rem;\" src=\"icon/back.png\" /></div>\n\t\t<input type=\"search\" name=\"search\" class=\"search\" placeholder=\"仅搜索商城商品\">\n\t\t<div class=\"searchBth\"><img style=\"height:0.20rem;\" src=\"icon/searchbtn.png\" /></div>\n\t</div>\n</div>\n\n\n\t";
if (typeof module !== "undefined") module.exports = window.QTMPL["classtify"];

    })( module.exports , module , __context );
    __context.____MODULES[ "38e021102a5032af764851c643ade68b" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "b3a733a0765d2289773ae62890418f83" ,
        filename : "dropload.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /**
 * dropload
 * 西门(http://ons.me/526.html)
 * 0.9.0(160215)
 */

;(function($){
    'use strict';
    var win = window;
    var doc = document;
    var $win = $(win);
    var $doc = $(doc);
    $.fn.dropload = function(options){
        return new MyDropLoad(this, options);
    };
    var MyDropLoad = function(element, options){
        var me = this;
        me.$element = element;
        // 上方是否插入DOM
        me.upInsertDOM = false;
        // loading状态
        me.loading = false;
        // 是否锁定
        me.isLockUp = false;
        me.isLockDown = false;
        // 是否有数据
        me.isData = true;
        me._scrollTop = 0;
        me._threshold = 0;
        me.init(options);
    };

    // 初始化
    MyDropLoad.prototype.init = function(options){
        var me = this;
        me.opts = $.extend(true, {}, {
            scrollArea : me.$element,                                            // 滑动区域
            domUp : {                                                            // 上方DOM
                domClass   : 'dropload-up',
                domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
                domUpdate  : '<div class="dropload-update">↑释放更新</div>',
                domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
            },
            domDown : {                                                          // 下方DOM
                domClass   : 'dropload-down',
                domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
                domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
                domNoData  : '<div class="dropload-noData">暂无数据</div>'
            },
            autoLoad : true,                                                     // 自动加载
            distance : 50,                                                       // 拉动距离
            threshold : '',                                                      // 提前加载距离
            loadUpFn : '',                                                       // 上方function
            loadDownFn : ''                                                      // 下方function
        }, options);

        // 如果加载下方，事先在下方插入DOM
        if(me.opts.loadDownFn != ''){

            me.$element.append('<div class="'+me.opts.domDown.domClass+'">'+me.opts.domDown.domRefresh+'</div>');
            me.$domDown = $('.'+me.opts.domDown.domClass);
        }

        // 计算提前加载距离
        if(!!me.$domDown && me.opts.threshold === ''){
            // 默认滑到加载区2/3处时加载
            me._threshold = Math.floor(me.$domDown.height()*1/3);
        }else{
            me._threshold = me.opts.threshold;
        }

        // 判断滚动区域
        if(me.opts.scrollArea == win){
            me.$scrollArea = $win;
            // 获取文档高度
            me._scrollContentHeight = $doc.height();
            // 获取win显示区高度  —— 这里有坑
            me._scrollWindowHeight = doc.documentElement.clientHeight;
        }else{
            me.$scrollArea = me.opts.scrollArea;
            me._scrollContentHeight = me.$element[0].scrollHeight;
            me._scrollWindowHeight = me.$element.height();
        }
        fnAutoLoad(me);

        // 窗口调整
        $win.on('resize',function(){
            if(me.opts.scrollArea == win){
                // 重新获取win显示区高度
                me._scrollWindowHeight = win.innerHeight;
            }else{
                me._scrollWindowHeight = me.$element.height();
            }
        });

        // 绑定触摸
        me.$element.on('touchstart',function(e){

            if(!me.loading){
                fnTouches(e);
                fnTouchstart(e, me);
            }
        });
        me.$element.on('touchmove',function(e){

            if(!me.loading){
                fnTouches(e, me);
                fnTouchmove(e, me);
            }
        });
        me.$element.on('touchend',function(){
            if(!me.loading){
                fnTouchend(me);
            }
        });
      
        // 加载下方
        me.$scrollArea.on('scroll',function(){
            me._scrollTop = me.$scrollArea.scrollTop();

            // 滚动页面触发加载数据
            if(me.opts.loadDownFn != '' && !me.loading && !me.isLockDown && (me._scrollContentHeight - me._threshold) <= (me._scrollWindowHeight + me._scrollTop)){
                loadDown(me);
            }
        });
    };

    // touches
    function fnTouches(e){
        if(!e.touches){
            e.touches = e.originalEvent.touches;
        }
    }

    // touchstart
    function fnTouchstart(e, me){
        me._startY = e.touches[0].pageY;
        // 记住触摸时的scrolltop值
        me.touchScrollTop = me.$scrollArea.scrollTop();
        
    }

    // touchmove
    function fnTouchmove(e, me){
        me._curY = e.touches[0].pageY;
        me._moveY = me._curY - me._startY;

        if(me._moveY > 0){
            me.direction = 'down';
        }else if(me._moveY < 0){
            me.direction = 'up';
        }

        var _absMoveY = Math.abs(me._moveY);

        // 加载上方
        if(me.opts.loadUpFn != '' && me.touchScrollTop <= 0 && me.direction == 'down' && !me.isLockUp){
            e.preventDefault();

            me.$domUp = $('.'+me.opts.domUp.domClass);
            // 如果加载区没有DOM
            if(!me.upInsertDOM){
                me.$element.prepend('<div class="'+me.opts.domUp.domClass+'"></div>');
                me.upInsertDOM = true;
            }
            
            fnTransition(me.$domUp,0);

            // 下拉
            if(_absMoveY <= me.opts.distance){
                me._offsetY = _absMoveY;
                // todo：move时会不断清空、增加dom，有可能影响性能，下同
                me.$domUp.html(me.opts.domUp.domRefresh);
            // 指定距离 < 下拉距离 < 指定距离*2
            }else if(_absMoveY > me.opts.distance && _absMoveY <= me.opts.distance*2){
                me._offsetY = me.opts.distance+(_absMoveY-me.opts.distance)*0.5;
                me.$domUp.html(me.opts.domUp.domUpdate);
            // 下拉距离 > 指定距离*2
            }else{
                me._offsetY = me.opts.distance+me.opts.distance*0.5+(_absMoveY-me.opts.distance*2)*0.2;
            }

            me.$domUp.css({'height': me._offsetY});
        }
    }

    // touchend
    function fnTouchend(me){
        var _absMoveY = Math.abs(me._moveY);
        if(me.opts.loadUpFn != '' && me.touchScrollTop <= 0 && me.direction == 'down' && !me.isLockUp){
            fnTransition(me.$domUp,300);

            if(_absMoveY > me.opts.distance){
                me.$domUp.css({'height':me.$domUp.children().height()});
                me.$domUp.html(me.opts.domUp.domLoad);
                me.loading = true;
                me.opts.loadUpFn(me);
            }else{
                me.$domUp.css({'height':'0'}).on('webkitTransitionEnd mozTransitionEnd transitionend',function(){
                    me.upInsertDOM = false;
                    $(this).remove();
                });
            }
            me._moveY = 0;
        }
    }

    // 如果文档高度不大于窗口高度，数据较少，自动加载下方数据
    function fnAutoLoad(me){
        if(me.opts.autoLoad){
            if((me._scrollContentHeight - me._threshold) <= me._scrollWindowHeight){
                loadDown(me);
            }
        }
    }

    // 重新获取文档高度
    function fnRecoverContentHeight(me){
        if(me.opts.scrollArea == win){
            me._scrollContentHeight = $doc.height();
        }else{
            me._scrollContentHeight = me.$element[0].scrollHeight;
        }
    }

    // 加载下方
    function loadDown(me){
        me.direction = 'up';
        me.$domDown.html(me.opts.domDown.domLoad);
        me.loading = true;
        me.opts.loadDownFn(me);
    }

    // 锁定
    MyDropLoad.prototype.lock = function(direction){
        var me = this;
        // 如果不指定方向
        if(direction === undefined){
            // 如果操作方向向上
            if(me.direction == 'up'){
                me.isLockDown = true;
            // 如果操作方向向下
            }else if(me.direction == 'down'){
                me.isLockUp = true;
            }else{
                me.isLockUp = true;
                me.isLockDown = true;
            }
        // 如果指定锁上方
        }else if(direction == 'up'){
            me.isLockUp = true;
        // 如果指定锁下方
        }else if(direction == 'down'){
            me.isLockDown = true;
            // 为了解决DEMO5中tab效果bug，因为滑动到下面，再滑上去点tab，direction=down，所以有bug
            me.direction = 'up';
        }
    };

    // 解锁
    MyDropLoad.prototype.unlock = function(){
        var me = this;
        // 简单粗暴解锁
        me.isLockUp = false;
        me.isLockDown = false;
        // 为了解决DEMO5中tab效果bug，因为滑动到下面，再滑上去点tab，direction=down，所以有bug
        me.direction = 'up';
    };

    // 无数据
    MyDropLoad.prototype.noData = function(flag){
        var me = this;
        if(flag === undefined || flag == true){
            me.isData = false;
        }else if(flag == false){
            me.isData = true;
        }
    };

    // 重置
    MyDropLoad.prototype.resetload = function(){
        var me = this;
        if(me.direction == 'down' && me.upInsertDOM){
            me.$domUp.css({'height':'0'}).on('webkitTransitionEnd mozTransitionEnd transitionend',function(){
                me.loading = false;
                me.upInsertDOM = false;
                $(this).remove();
                fnRecoverContentHeight(me);
            });
        }else if(me.direction == 'up'){
            me.loading = false;
            // 如果有数据
            if(me.isData){
                // 加载区修改样式
                me.$domDown.html(me.opts.domDown.domRefresh);
                fnRecoverContentHeight(me);
                fnAutoLoad(me);
            }else{
                // 如果没数据
                me.$domDown.html(me.opts.domDown.domNoData);
            }
        }
    };

    // css过渡
    function fnTransition(dom,num){
        dom.css({
            '-webkit-transition':'all '+num+'ms',
            'transition':'all '+num+'ms'
        });
    }
})(window.Zepto || window.jQuery);

    })( module.exports , module , __context );
    __context.____MODULES[ "b3a733a0765d2289773ae62890418f83" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "b3e788ac130ed58eacc3628ae163e6d5" ,
        filename : "classtify.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    
var indexTpl =__context.____MODULES['38e021102a5032af764851c643ade68b'];
var utilAjax =__context.____MODULES['7a5ef8916c77e2bd757b7599341417f3'];
__context.____MODULES['b3a733a0765d2289773ae62890418f83'];
QApp.defineView('classtify', {
	html: indexTpl,

	plugins: ['delegated', 'ajax', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];
		}
	}],

	init: {
		vm: null
	},

	bindActions: {

	},
	bindEvents: {
		// 'beforeShow': function() {
		// 	// var self = this;
		// 	// self.vm = this.getVM();
		// 	// utilAjax.query({
		// 	// 	url: "/interface/getList.do",
		// 	// 	success: function(rs){
		// 	// 		self.vm.list = rs.data;
		// 	// 	}
		// 	// });
		// 	var mySwiperr = new Swiper('.swiper-area > .swiper-container', {
		// 	    direction: 'horizontal',
		// 	    loop: true,
		// 	    prevButton:'.swiper-button-prev',
		// 		nextButton:'.swiper-button-next',
		// 		autoplay:3000,
		// 		autoplayDisableOnInteraction : false,

		// 	  });
		// 	droploadfun();
		// },
		
	}
	
})
function droploadfun(){
		
	var counter = 0;
    // 每页展示4个
    var num = 4;
    var pageStart = 0,pageEnd = 0;

    // dropload
    $('.box').dropload({
         scrollArea:window,
        domUp : {
            domClass   : 'dropload-up',
            domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
            domUpdate  : '<div class="dropload-update">↑释放更新</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>刷新中...</div>'
        },
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">1暂无数据</div>'
        },
        autoLoad:true,
        loadUpFn : function(me){
        	
           utilAjax.query({
                
                url: '/interface/getList.do',
               
                success: function(data){

                    var result = '';
                    for(var i = 0; i < data.data.length; i++){
                        result +=   '<a class="item opacity">'
                                        +'<img src="'+data.data[i].imgSrc+'" alt="">'
                                        +'<h3>'+data.data[i].title+'</h3>'
                                       
                                    +'</a>';
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.lists').html(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                        // 重置索引值，重新拼接more.json数据
                        counter = 0;
                        // 解锁
                        me.unlock();
                        me.noData(false);
                    },1000);
                },
                error: function(xhr, type){
                    // alert('Ajax error!');
                    // // 即使加载出错，也得重置
                    // me.resetload();
                }
            });
        },
        loadDownFn : function(me){
        	console.log(num,counter,pageStart,pageEnd)
            $.ajax({
                type: 'GET',
                url:'/interface/getList.do',
               
                success: function(data){
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    for(var i = pageStart; i < pageEnd; i++){
                        result +=   '<a class="item opacity" >'
                                        +'<img src="'+data.data[i].imgSrc+'" alt="">'
                                        +'<h3>'+data.data[i].title+'</h3>'
                                        +'<span class="date">'+data.data[i].date+'</span>'
                                    +'</a>';
                        if((i + 1) >= data.data.length){
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            break;
                        }
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.lists').append(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                    },1000);
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
            
        },
         
        distance:50

    });

}

    })( module.exports , module , __context );
    __context.____MODULES[ "b3e788ac130ed58eacc3628ae163e6d5" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "9acd79e286ea2c62d8d168b36855fbdb" ,
        filename : "user.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["user"] = "<div class=\"m-user\">\n    <div class=\"m-user-header\">\n        <div class=\"back-btn\"><img style=\"height:0.20rem;\" src=\"icon/back.png\" /></div>\n        <div class=\"user-title\"><b>个人中心</b></div>\n        <div class=\"compile-btn\"><b>编辑</b></div>\n    </div>\n</div>";
if (typeof module !== "undefined") module.exports = window.QTMPL["user"];

    })( module.exports , module , __context );
    __context.____MODULES[ "9acd79e286ea2c62d8d168b36855fbdb" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "e7b6e64d6951bc8a227a549bc6746630" ,
        filename : "user.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    
var indexTpl =__context.____MODULES['9acd79e286ea2c62d8d168b36855fbdb'];
var utilAjax =__context.____MODULES['7a5ef8916c77e2bd757b7599341417f3'];

QApp.defineView('user', {
	html: indexTpl,

	plugins: ['delegated', 'ajax', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];
		}
	}],

	init: {
		vm: null
	},

	bindActions: {

	}

	
}); 

    })( module.exports , module , __context );
    __context.____MODULES[ "e7b6e64d6951bc8a227a549bc6746630" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "f94e7517e06e66fa025c0edeed7e250f" ,
        filename : "index.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    

__context.____MODULES['ae279cf81c6a4536b76eca0034a796ec'];
__context.____MODULES['3c489e235b573c5f18ff09a377fdcf82'];
__context.____MODULES['7d5327abc5ffdc874320622e14181680'];
__context.____MODULES['b3e788ac130ed58eacc3628ae163e6d5'];
__context.____MODULES['e7b6e64d6951bc8a227a549bc6746630'];

QApp.config({
  indexView: 'index'
});


    })( module.exports , module , __context );
    __context.____MODULES[ "f94e7517e06e66fa025c0edeed7e250f" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "19b8b16d1e27c8b586e7d74c11d05b04" ,
        filename : "yingke-app.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    // Import
__context.____MODULES['980161e2dd8119467ce528f9e9ea9c3d'];

//views
__context.____MODULES['f94e7517e06e66fa025c0edeed7e250f'];





    })( module.exports , module , __context );
    __context.____MODULES[ "19b8b16d1e27c8b586e7d74c11d05b04" ] = module.exports;
})(this);
