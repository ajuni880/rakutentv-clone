(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{370:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(11),c=function(){var e=Object(o.f)();return a.a.createElement("div",{className:"go-back",onClick:function(){return e.goBack()}},a.a.createElement("span",{className:"fas fa-arrow-left go-back__icon"}),a.a.createElement("span",{className:"go-back__label"},"Página de detalles"))},i=a.a.memo(c),u=r(2),l=r.n(u);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(){var e=Object(n.useRef)(),t=s(Object(n.useState)(!1),2),r=t[0],a=t[1],o=s(Object(n.useState)(5),2),c=o[0],i=o[1],u=s(Object(n.useState)(0),2),l=u[0],m=u[1],f=s(Object(n.useState)(0),2),d=f[0],p=f[1],v=s(Object(n.useState)(!1),2),y=v[0],b=v[1];Object(n.useEffect)((function(){function t(){p(e.current.currentTime)}return e.current.addEventListener("timeupdate",t),function(){return e.current.removeEventListener("timeupdate",t)}}),[]);return Object(n.useEffect)((function(){e.current.volume=c/10}),[c]),Object(n.useEffect)((function(){y&&(r?e.current.play():e.current.pause())}),[r]),{videoRef:e,onCanPlay:function(){m(e.current.duration),b(!0),a(!0)},toggleVideoState:function(){a(!r)},setVolume:i,volume:c,duration:l,setDuration:m,currentTime:d,setCurrentTime:p,play:r,canPlay:y}},d=function(e){var t=Math.floor(e/60),r=Math.floor(e%60);return"".concat(t,":").concat(r<10?"0"+r:r)},p=function(e){var t=e.currentTime,r=e.duration,o=e.onClick,c=isNaN(t/r)?0:t/r*100,i=Object(n.useMemo)((function(){return d(r)}),[r]);return a.a.createElement("div",{className:"progressbar"},a.a.createElement("div",{className:"progressbar__current-time"},d(t)),a.a.createElement("div",{className:"progressbar__bar",onClick:function(e){e.persist(),o&&o(e.nativeEvent.offsetX/e.target.offsetWidth)}},a.a.createElement("div",{className:"progressbar__bar-current",style:{width:"".concat(c,"%")}})),a.a.createElement("div",{className:"progressbar__duration"},i))};p.proppTypes={currentTime:l.a.number.isRequired,duration:l.a.number.isRequired,onClick:l.a.func};var v=a.a.memo(p),y=function(e){var t=e.value,r=e.onChange;return a.a.createElement("div",{className:"volume"},a.a.createElement("div",{className:"volume__icon"},0===t&&a.a.createElement("span",{className:"fas fa-volume-off icon"}),t>0&&t<=5&&a.a.createElement("span",{className:"fas fa-volume-down icon"}),t>=6&&a.a.createElement("span",{className:"fas fa-volume-up icon"})),a.a.createElement("input",{type:"range",className:"volume__range",min:"0",step:"1",max:"10",value:t,onChange:function(e){return r(e.target.value)}}))};y.propTypes={value:l.a.number.isRequired,onChange:l.a.func};var b=a.a.memo(y),g=function(e){var t=e.playing,r=e.onPlay,n=e.onPause;return a.a.createElement("div",{className:"videoplayer__actions-play-pause"},!t&&a.a.createElement("span",{className:"fas fa-play icon",onClick:r}),t&&a.a.createElement("span",{className:"fas fa-pause",onClick:n}))};g.propTypes={playing:l.a.bool.isRequired,onPlay:l.a.func.isRequired,onPause:l.a.func.isRequired};var E=g,h=function(e){var t=e.src,r=f(),c=r.videoRef,i=r.onCanPlay,u=r.toggleVideoState,l=r.setVolume,s=r.currentTime,m=r.setCurrentTime,d=r.duration,p=r.volume,y=r.play,g=Object(o.f)(),h=Object(n.useCallback)((function(e){return l(e)})),_=function(){return u()};return a.a.createElement("div",{className:"videoplayer__video"},a.a.createElement("video",{className:"videoplayer__video",src:t,ref:c,onClick:_,onCanPlay:i,onEnded:function(){return g.goBack()}}),a.a.createElement("div",{className:"videoplayer__actions"},a.a.createElement(v,{currentTime:s,duration:d,onClick:function(e){c.current.currentTime=e*d,m(e*d)}}),a.a.createElement("div",{className:"videoplayer__actions-bottom"},a.a.createElement(b,{value:p,onChange:h}),a.a.createElement(E,{playing:y,onPlay:_,onPause:_}),a.a.createElement("div",{className:"mix"},a.a.createElement("span",{className:"fas fa-compress icon"})))))};h.propTypes={src:l.a.string.isRequired};var _=a.a.memo(h),N=r(110);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=Object(o.g)(),t=function(e){var t=j(Object(n.useState)(),2),r=t[0],a=t[1];return Object(n.useEffect)((function(){Object(N.c)(e).then((function(e){return a(e.data)})).catch((function(e){return console.error("[playTrailer]",e)}))}),[]),{data:r}}({type:e.type,id:e.id}).data;return a.a.createElement("div",{className:"videoplayer"},a.a.createElement(i,null),a.a.createElement("div",{className:"videoplayer__inner"},t?a.a.createElement(_,{src:t.stream_infos[0].url}):"Loading..."))}}}]);