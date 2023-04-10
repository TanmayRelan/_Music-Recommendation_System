(self.webpackChunkjupyterlab_plotly=self.webpackChunkjupyterlab_plotly||[]).push([[423],{423:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MIME_TYPE:()=>i,RenderedPlotly:()=>s,default:()=>a,rendererFactory:()=>r});var o=n(706),l=(n(549),function(e,t,n,o){return new(n||(n=Promise))((function(l,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function r(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}a((o=o.apply(e,t||[])).next())}))});const i="application/vnd.plotly.v1+json";class s extends o.Widget{constructor(e){super(),this.addClass("jp-RenderedPlotly"),this._mimeType=e.mimeType,this._img_el=document.createElement("img"),this._img_el.className="plot-img",this.node.appendChild(this._img_el),this._img_el.addEventListener("mouseenter",(e=>{this.createGraph(this._model)}))}renderModel(e){if(this.hasGraphElement())return Promise.resolve();this._model=e;const t=e.data["image/png"];return null!=t?(this.updateImage(t),Promise.resolve()):this.createGraph(e)}hasGraphElement(){return null!==this.node.querySelector(".plot-container")}updateImage(e){this.hideGraph(),this._img_el.src="data:image/png;base64,"+e,this.showImage()}hideGraph(){let e=this.node.querySelector(".plot-container");null!=e&&(e.style.display="none")}showGraph(){let e=this.node.querySelector(".plot-container");null!=e&&(e.style.display="block")}hideImage(){let e=this.node.querySelector(".plot-img");null!=e&&(e.style.display="none")}showImage(){let e=this.node.querySelector(".plot-img");null!=e&&(e.style.display="block")}createGraph(e){const{data:t,layout:o,frames:i,config:r}=e.data[this._mimeType];return(()=>l(this,void 0,void 0,(function*(){return null===s.Plotly&&(s.Plotly=yield n.e(478).then(n.t.bind(n,478,23)),s._resolveLoadingPlotly()),s.loadingPlotly})))().then((()=>s.Plotly.react(this.node,t,o,r))).then((t=>{this.showGraph(),this.hideImage(),this.update(),i&&s.Plotly.addFrames(this.node,i),this.node.offsetWidth>0&&this.node.offsetHeight>0&&s.Plotly.toImage(t,{format:"png",width:this.node.offsetWidth,height:this.node.offsetHeight}).then((t=>{const n=t.split(",")[1];e.data["image/png"]!==n&&e.setData({data:Object.assign(Object.assign({},e.data),{"image/png":n})})})),this.node.on("plotly_webglcontextlost",(()=>{const t=e.data["image/png"];if(null!=t)return this.updateImage(t),Promise.resolve()}))}))}onAfterShow(e){this.update()}onResize(e){this.update()}onUpdateRequest(e){s.Plotly&&this.isVisible&&this.hasGraphElement()&&s.Plotly.redraw(this.node).then((()=>{s.Plotly.Plots.resize(this.node)}))}}s.Plotly=null,s.loadingPlotly=new Promise((e=>{s._resolveLoadingPlotly=e}));const r={safe:!0,mimeTypes:[i],createRenderer:e=>new s(e)},a=[{id:"@jupyterlab/plotly-extension:factory",rendererFactory:r,rank:0,dataType:"json",fileTypes:[{name:"plotly",mimeTypes:[i],extensions:[".plotly",".plotly.json"],iconClass:"jp-MaterialIcon jp-PlotlyIcon"}],documentWidgetFactoryOptions:{name:"Plotly",primaryFileType:"plotly",fileTypes:["plotly","json"],defaultFor:["plotly"]}}]},760:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(645),l=n.n(o),i=n(667),s=n.n(i),r=n(745),a=n.n(r),c=l()((function(e){return e[1]})),d=s()(a());c.push([e.id,"/**\n  Copyright (c) Jupyter Development Team.\n  Distributed under the terms of the Modified BSD License.\n*/\n\n/* Add CSS variables to :root */\n:root {\n  --jp-icon-plotly: url("+d+");\n}\n\n/* Base styles */\n.jp-RenderedPlotly {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n/* Document styles */\n.jp-MimeDocument .jp-RenderedPlotly {\n  overflow: hidden;\n}\n\n/* Output styles */\n.jp-OutputArea .jp-RenderedPlotly {\n  min-height: 360px;\n}\n\n/* Document icon */\n.jp-PlotlyIcon {\n  background-image: var(--jp-icon-plotly);\n}",""]);const u=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var l={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(l[s]=!0)}for(var r=0;r<e.length;r++){var a=[].concat(e[r]);o&&l[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},549:(e,t,n)=>{var o=n(379),l=n(760);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.id,l,""]]);o(l,{insert:"head",singleton:!1}),e.exports=l.locals||{}},379:(e,t,n)=>{"use strict";var o,l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function r(e,t){for(var n={},o=[],l=0;l<e.length;l++){var r=e[l],a=t.base?r[0]+t.base:r[0],c=n[a]||0,d="".concat(a," ").concat(c);n[a]=c+1;var u=s(d),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(i[u].references++,i[u].updater(h)):i.push({identifier:d,updater:y(h,t),references:1}),o.push(d)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=l(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,o){var l=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,l);else{var i=document.createTextNode(l),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function h(e,t,n){var o=n.css,l=n.media,i=n.sourceMap;if(l?e.setAttribute("media",l):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function y(e,t){var n,o,l;if(t.singleton){var i=f++;n=p||(p=a(t)),o=u.bind(null,n,i,!1),l=u.bind(null,n,i,!0)}else n=a(t),o=h.bind(null,n,t),l=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else l()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=r(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var l=s(n[o]);i[l].references--}for(var a=r(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},745:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 132 132'%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %23119dff; %7D .cls-2 %7B fill: %2325fefd; %7D .cls-3 %7B fill: %23fff; %7D %3C/style%3E %3C/defs%3E %3Ctitle%3Eplotly-logomark%3C/title%3E %3Cg id='symbol'%3E %3Crect class='cls-1' width='132' height='132' rx='6' ry='6'/%3E %3Ccircle class='cls-2' cx='78' cy='54' r='6'/%3E %3Ccircle class='cls-2' cx='102' cy='30' r='6'/%3E %3Ccircle class='cls-2' cx='78' cy='30' r='6'/%3E %3Ccircle class='cls-2' cx='54' cy='30' r='6'/%3E %3Ccircle class='cls-2' cx='30' cy='30' r='6'/%3E %3Ccircle class='cls-2' cx='30' cy='54' r='6'/%3E %3Cpath class='cls-3' d='M30,72a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V78A6,6,0,0,0,30,72Z'/%3E %3Cpath class='cls-3' d='M78,72a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V78A6,6,0,0,0,78,72Z'/%3E %3Cpath class='cls-3' d='M54,48a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V54A6,6,0,0,0,54,48Z'/%3E %3Cpath class='cls-3' d='M102,48a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V54A6,6,0,0,0,102,48Z'/%3E %3C/g%3E %3C/svg%3E"}}]);