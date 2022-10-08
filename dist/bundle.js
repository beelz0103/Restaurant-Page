(()=>{"use strict";var n,e,t,r,o,a,i,c,s,f,l,u,p,d,m={426:(n,e,t)=>{t.d(e,{Z:()=>x});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),f=new URL(t(501),t.b),l=new URL(t(964),t.b),u=new URL(t(846),t.b),p=new URL(t(668),t.b),d=new URL(t(703),t.b),m=i()(o()),h=s()(f),g=s()(l),v=s()(u),b=s()(p),y=s()(d);m.push([n.id,"@font-face {\n  font-family: 'MyFont';\n  src: url("+h+") format('woff2'),\n  url("+g+") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'ngnl';\n  src: url("+v+") format('woff2'),\n  url("+b+") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-image: url("+y+");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  \n}\n\n#content {  \n  color: white;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-family: 'MyFont';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;  \n  font-size: 1.5rem;\n}\n\n.header {\n  font-family: 'ngnl';\n  font-size: 4rem;\n  text-align: center;\n  height: 60px;\n  padding: 10px;\n  justify-self: center; \n  background-color: black;\n  color: white;\n}\n\n.navbar {\n  display: flex;\n  font-family: 'ngnl';\n  justify-content: space-between;  \n  font-size: 2.5rem;\n  height: 50px;\n  background-color: crimson;\n  padding: 0 400px;\n  color: rgb(196, 179, 179);\n  align-items: center;\n  cursor: pointer;\n}\n\n.content { \n  margin-top: 20px;    \n  text-align: center;\n  padding: 0 200px; \n  flex: 1;\n  font-size: 1.25rem;\n}\n\n#about {\n  margin-bottom: 20px;\n  font-size: 3rem;\n}",""]);const x=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var f=0;f<n.length;f++){var l=[].concat(n[f]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],f=r.base?s[0]+r.base:s[0],l=a[f]||0,u="".concat(f," ").concat(l);a[f]=l+1;var p=t(u),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var m=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),f=0;f<a.length;f++){var l=t(a[f]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},964:(n,e,t)=>{n.exports=t.p+"caca8d3e83f3669eaa2e.woff"},501:(n,e,t)=>{n.exports=t.p+"de5886e841d11ee8e19d.woff2"},668:(n,e,t)=>{n.exports=t.p+"d8c28e0827316d6b838e.woff"},846:(n,e,t)=>{n.exports=t.p+"bbf0f2f3ded0924131f7.woff2"},703:(n,e,t)=>{n.exports=t.p+"6145ff5b90ba170fdf1f.jpg"}},h={};function g(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.m=m,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),f=g.n(s),l=g(589),u=g.n(l),p=g(426),(d={}).styleTagTransform=u(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=f(),e()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals,console.log("hi")})();