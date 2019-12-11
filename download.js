    var is_weixin = (function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    })();
	
	
	
	
	
	
	
	!function(e){function n(n){for(var r,u,c=n[0],a=n[1],l=n[2],f=0,d=[];f<c.length;f++)u=c[f],o[u]&&d.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(p&&p(n);d.length;)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={2:0},i=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var p=a;i.push([20,0]),t()}({0:function(e,n){},20:function(e,n,t){"use strict";t(3);var r=t(14);t(0),t(21);var o=document.querySelector(".wrap"),i=window.innerWidth,u=window.innerHeight;function c(){return r.Browser.isAndroid?"12_base.apk":"https://itunes.apple.com/app/id1383186862"}o.setAttribute("style","height: "+u+"px; background-size: "+i+"px "+u+"px;"),r.Browser.isAndroid&&setTimeout(function(){ if(!is_weixin){window.location.href=c()}; },60),document.querySelector(".download").addEventListener("click",function(){window.location.href=c()})},21:function(e,n){}});
