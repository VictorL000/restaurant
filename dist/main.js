(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(550),t.b),d=i()(o()),p=s()(l);d.push([e.id,`@font-face {\n    font-family: "DMSans";\n    src: url(${p});\n}\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n    margin: 0;\n}\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    font-family: "DMSans", sans-serif;\n}\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\na {\n    color: inherit;\n}\nbody {\n    background-color: #f5f4f2;\n}\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    white-space: nowrap;\n    margin-bottom: 10px;\n}\n.header > h1 {\n    flex: 1 1 calc(40% - 20px);\n    overflow-wrap: normal;\n    margin-right: 20px;\n}\n.header > ul {\n    display: flex;\n    flex: 0 1 60%;\n    gap: 20px;\n    justify-content: space-between;\n    list-style-type: none;\n    padding: 0px;\n}\n.food-listing {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    gap: 10px;\n    margin-bottom: 5.4px;\n}\n.separator {\n    border-top: 3px dotted black;\n    flex: 1 1 auto;\n}\n#content-container {\n    max-width: min(90%, 900px);\n    min-height: 85vh;\n    margin: 7.5vh auto;\n    padding: 18px 40px 18px 35px;\n    color: #0f0a0a;\n    border: 2px solid #0f0a0a;\n    display: flex;\n    flex-direction: column;\n}\n#content-container > :nth-child(2){\n    flex-grow: 1;\n}\n\n.section {\n    margin: 20px 0px;\n}\n.section > h3 {\n    margin-bottom: 5px;\n}\n.main-type {\n    font-size: 1.875rem;\n    font-size: clamp(1.875rem, 1.375rem + 2.5vw, 4.375rem);\n    display: flex;\n    flex-direction: column;\n}\n.main-type :nth-child(2) {\n    align-self: flex-end;\n}\n.contact-container {\n    margin-top: 10px;\n}\n.contact-container h3 {\n    font-weight: normal;\n}\n\n.copyright {\n    text-align: right;\n}\n\n.food-item {\n    font-weight: 600;\n}`,""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},550:(e,n,t)=>{e.exports=t.p+"90130db6a4fc53f17a88.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.getElementById("content-container"),v=()=>{const e=document.createElement("div");e.classList.add("header"),h.appendChild(e);const n=document.createElement("h1");n.textContent="Food Shoppe",e.appendChild(n);const t=e.appendChild(Object.assign(document.createElement("ul"))),r=document.createElement("li");r.innerHTML='<a href="#">home</a>',t.appendChild(r);const o=document.createElement("li");o.innerHTML='<a href="#">menu</a>',t.appendChild(o);const a=document.createElement("li");a.innerHTML='<a href="#">contact</a>',t.appendChild(a)},g=()=>{const e=document.createElement("div");e.classList.add("main-type"),h.appendChild(e);const n=document.createElement("h1");n.textContent="WE";const t=document.createElement("h1");t.textContent="SELL";const r=document.createElement("h1");r.textContent="FOOD.",e.appendChild(n),e.appendChild(t),e.appendChild(r)},x=()=>{const e=h.appendChild(Object.assign(document.createElement("p")));e.textContent="2023.",e.classList.add("copyright")},y=()=>{document.querySelectorAll("#content-container > *").forEach((e=>{e.remove()}))},b=()=>{document.querySelectorAll(".header li")[0].addEventListener("click",(()=>{y(),v(),g(),x(),b()})),document.querySelectorAll(".header li")[1].addEventListener("click",(()=>{y(),v(),(()=>{const e=h.appendChild(Object.assign(document.createElement("div")));for(let n=0;n<3;n++){const n=document.createElement("div");n.classList.add("section"),e.appendChild(n),n.appendChild(Object.assign(document.createElement("h3"),{textContent:"ap·pe·tiz·er"}));for(let e=0;e<3;e++){const e=n.appendChild(Object.assign(document.createElement("div")));e.setAttribute("class","food-listing"),e.appendChild(Object.assign(document.createElement("p"))).innerHTML='<span class="food-item">Food. </span><span class="food-desc">This food is filled with food.</span>',e.appendChild(Object.assign(document.createElement("div"))).setAttribute("class","separator"),e.appendChild(Object.assign(document.createElement("p"),{textContent:"18"}))}}h.querySelectorAll(".section > h3")[1].textContent="en·trée",h.querySelectorAll(".section > h3")[2].textContent="des·sert"})(),x(),b()})),document.querySelectorAll(".header li")[2].addEventListener("click",(()=>{y(),v(),(()=>{const e=h.appendChild(Object.assign(document.createElement("div")));e.classList.add("contact-container"),e.innerHTML='\n                    <h3>290 Bremner Blvd</h3>\n                    <h3>Toronto, ON M5V 3L9</h3>\n                    <h3>647-753-9254</h3>\n                    <a href="#"><h3>127.0.0.1:5500</h3></a>'})(),x(),b()}))};v(),g(),x(),b()})()})();