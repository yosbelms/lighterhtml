/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e,t){"use strict";var n=function(){var t=!1,n=function(o){if(!("raw"in o)||o.propertyIsEnumerable("raw")||!Object.isFrozen(o.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var a={};n=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return a[t]||(a[t]=e)}}else t=!0;return r(o)};return r;function r(e){return t?e:n(e)}}();var r=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),o=Array.isArray,a=r.prototype.nodeType,i=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),a=o("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;a.innerHTML="<table>"+e+"</table>",i=a.querySelectorAll(u)}else a.innerHTML=e,i=a.childNodes;return r(n,i),n};return function(e,a){return("svg"===a?function(e){var n=o(t),a=o("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,a.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),u={};try{u.Map=Map}catch(e){u.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var a=r(o);return a&&(t.splice(e,1),n.splice(e,1)),a},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,a){return n[r(o)?e:t.push(o)-1]=a,this}};function r(n){return-1<(e=t.indexOf(n))}}}var l=u.Map,c=function(e,t,n,r,o,a){if(o-r<2)t.insertBefore(e(n[r],1),a);else{for(var i=t.ownerDocument.createDocumentFragment();r<o;)i.appendChild(e(n[r++],1));t.insertBefore(i,a)}},s=function(e,t){return e==t},f=function(e){return e},h=function(e,t,n,r,o,a,i){var u=a-o;if(u<1)return-1;for(;n-t>=u;){for(var l=t,c=o;l<n&&c<a&&i(e[l],r[c]);)l++,c++;if(c===a)return t;t=l+1}return-1},p=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},d=function(e,t,n,r,o){if(o-r<2)t.removeChild(e(n[r],-1));else{var a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},v=function(e,t,n){for(var r=1,o=t;r<o;){var a=(r+o)/2>>>0;n<e[a]?o=a:r=a+1}return r},g=function(e,t,n,r,o,a,i,u,s,f,h,p,g){!function(e,t,n,r,o,a,i,u,s){for(var f=new l,h=e.length,p=i,v=0;v<h;)switch(e[v++]){case 0:o++,p++;break;case 1:f.set(r[o],1),c(t,n,r,o++,o,p<u?t(a[p],1):s);break;case-1:p++}for(v=0;v<h;)switch(e[v++]){case 0:i++;break;case-1:f.has(a[i])?i++:d(t,n,a,i++,i)}}(function(e,t,n,r,o,a,i){var u,l,c,s,f,h,p,d=n+a,v=[];e:for(u=0;u<=d;u++){if(u>50)return null;for(p=u-1,f=u?v[u-1]:[0,0],h=v[u]=[],l=-u;l<=u;l+=2){for(c=(s=l===-u||l!==u&&f[p+l-1]<f[p+l+1]?f[p+l+1]:f[p+l-1]+1)-l;s<a&&c<n&&i(r[o+s],e[t+c]);)s++,c++;if(s===a&&c===n)break e;h[u+l]=s}}var g=Array(u/2+d/2),m=g.length-1;for(u=v.length-1;u>=0;u--){for(;s>0&&c>0&&i(r[o+s-1],e[t+c-1]);)g[m--]=0,s--,c--;if(!u)break;p=u-1,f=u?v[u-1]:[0,0],(l=s-c)==-u||l!==u&&f[p+l-1]<f[p+l+1]?(c--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,a,i,u,f,p)||function(e,t,n,r,o,a,i,u){var c=0,s=r<u?r:u,f=Array(s++),h=Array(s);h[0]=-1;for(var p=1;p<s;p++)h[p]=i;for(var d=new l,g=a;g<i;g++)d.set(o[g],g);for(var m=t;m<n;m++){var y=d.get(e[m]);null!=y&&-1<(c=v(h,s,y))&&(h[c]=y,f[c]={newi:m,oldi:y,prev:f[c-1]})}for(c=--s,--i;h[c]>i;)--c;s=u+r-c;var w=Array(s),b=f[c];for(--n;b;){for(var N=b,x=N.newi,C=N.oldi;n>x;)w[--s]=1,--n;for(;i>C;)w[--s]=-1,--i;w[--s]=0,--n,--i,b=b.prev}for(;n>=t;)w[--s]=1,--n;for(;i>=a;)w[--s]=-1,--i;return w}(n,r,o,a,i,u,s,f),e,t,n,r,i,u,h,g)},m=function(e,t,n,r){r||(r={});for(var o=r.compare||s,a=r.node||f,i=null==r.before?null:a(r.before,0),u=t.length,l=u,v=0,m=n.length,y=0;v<l&&y<m&&o(t[v],n[y]);)v++,y++;for(;v<l&&y<m&&o(t[l-1],n[m-1]);)l--,m--;var w=v===l,b=y===m;if(w&&b)return n;if(w&&y<m)return c(a,e,n,y,m,p(a,t,v,u,i)),n;if(b&&v<l)return d(a,e,t,v,l),n;var N=l-v,x=m-y,C=-1;if(N<x){if(-1<(C=h(n,y,m,t,v,l,o)))return c(a,e,n,y,C,a(t[v],0)),c(a,e,n,C+N,m,p(a,t,l,u,i)),n}else if(x<N&&-1<(C=h(t,v,l,n,y,m,o)))return d(a,e,t,v,C),d(a,e,t,C+x,l),n;return N<2||x<2?(c(a,e,n,y,m,a(t[v],0)),d(a,e,t,v,l),n):N===x&&function(e,t,n,r,o,a){for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t}(n,m,t,v,l,o)?(c(a,e,n,y,m,p(a,t,l,u,i)),n):(g(a,e,n,y,m,x,t,v,l,N,u,o,i),n)},y={};try{y.WeakMap=WeakMap}catch(e){y.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var w,b=y.WeakMap,N=function(e,t,n,r,o){var a="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(a?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],a=o.length,i=0;n&&i<a;i++)r.appendChild(e(o[i],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),x="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},C="-"+Math.random().toFixed(6)+"%";"content"in(w=e.createElement("template"))&&(w.innerHTML='<p tabindex="'+C+'"></p>',w.content.childNodes[0].getAttribute("tabindex")==C)||(C="_dt: "+C.slice(1,-1)+";");var k="\x3c!--"+C+"--\x3e",E=8,A=1,T=3,M=/^(?:style|textarea)$/i,_=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var j=" \\f\\n\\r\\t",S="[ "+j+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",D="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",L="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",$=new RegExp(D+S+L+"+)([ "+j+"]*/?>)","g"),O=new RegExp(D+S+L+"*)([ "+j+"]*/>)","g"),F=new RegExp("("+S+"\\s*=\\s*)(['\"]?)"+k+"\\2","gi");function R(e,t,n,r){return"<"+t+n.replace(F,H)+r}function H(e,t,n){return t+(n||'"')+C+(n||'"')}function W(e,t,n){return _.test(t)?e:"<"+t+n+"></"+t+">"}function z(e,t,n,r){return{name:r,node:t,path:n,type:e}}function B(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function V(t,n,r,o){for(var a=new l,i=t.attributes,u=[],c=u.slice.call(i,0),s=c.length,f=0;f<s;){var h=c[f++];if(h.value===C){var p=h.name;if(!a.has(p)){var d=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),v=i[d]||i[d.toLowerCase()];a.set(p,v),n.push(z("attr",v,o,d))}u.push(h)}}for(s=u.length,f=0;f<s;){var g=u[f++];/^id$/i.test(g.name)?t.removeAttribute(g.name):t.removeAttributeNode(g)}var m=t.nodeName;if(/^script$/i.test(m)){var y=e.createElement(m);for(s=i.length,f=0;f<s;)y.setAttributeNode(i[f++].cloneNode(!0));y.textContent=t.textContent,t.parentNode.replaceChild(y,t)}}var Z=new b,G=new b;function P(e,t){var n=function(e){return e.join(k).replace(O,W).replace($,R)}(t),r=e.transform;r&&(n=r(n));var o=i(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===x.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,u=0;u<i;){var l=a[u];switch(l.nodeType){case A:var c=o.concat(u);V(l,n,r,c),e(l,n,r,c);break;case E:l.textContent===C&&(r.shift(),n.push(M.test(t.nodeName)?z("text",t,o):z("any",l,o.concat(u))));break;case T:M.test(t.nodeName)&&x.call(l.textContent)===k&&(r.shift(),n.push(z("text",t,o)))}u++}}(o,a,t.slice(0),[]);var u={content:o,updates:function(n){for(var r=[],o=a.length,i=0;i<o;){var u=a[i++],l=B(n,u.path);switch(u.type){case"any":r.push(e.any(l,[]));break;case"attr":r.push(e.attribute(l,u.name,u.node));break;case"text":r.push(e.text(l)),l.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return Z.set(t,u),u}function q(t){return function(n){var r=G.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=Z.get(n)||P(t,n),o=N.call(e,r.content,!0),a={content:o,template:n,updates:r.updates(o)};return G.set(t,a),a}(t,n)),r.updates.apply(null,arguments),r.content}}var I=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(u){var l,c,s,f;switch(typeof u){case"object":if(u){if("object"===a){if(!o&&i!==u)for(c in i)c in u||(r[c]="")}else o?r.value="":r.cssText="";for(c in l=o?{}:r,u)s="number"!=typeof(f=u[c])||e.test(c)?f:f+"px",!o&&/^--/.test(c)?l.setProperty(c,s):l[c]=s;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=l):i=u;break}default:i!=u&&(a="string",i=u,o?r.value=u||"":r.cssText=u||"")}}}}(),J=function(e,t){return e.nodeType===a?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},K=/^(?:form|list)$/i,Q=[].slice;function U(e){return this.type=e,q(this)}U.prototype={attribute:function(e,t,n){var r="ownerSVGElement"in e;switch(!0){case"style"===t:return I(e,n,r);case/^on/.test(t):return function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t);case/^(?:data|props)$/.test(t)||!r&&t in e&&!K.test(t):return function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(e[t]=r,null==r&&e.removeAttribute(t)))}}(e,t);default:return function(e,t){var n,r=!1;return function(o){n!==o&&(n=o,t.value!==o&&(null==o?(r&&(r=!1,e.removeAttributeNode(t)),t.value=o):(t.value=o,r||(r=!0,e.setAttributeNode(t)))))}}(e,n.cloneNode(!0))}},any:function(e,t){var n,r={node:J,before:e},a="ownerSVGElement"in e?"svg":"html",u=!1;return function l(c){switch(typeof c){case"string":case"number":case"boolean":u?n!==c&&(n=c,t[0].textContent=c):(u=!0,n=c,t=m(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,c)],r));break;case"function":l(c(e));break;case"object":case"undefined":if(null==c){u=!1,t=m(e.parentNode,t,[],r);break}default:if(u=!1,n=c,o(c))if(0===c.length)t.length&&(t=m(e.parentNode,t,[],r));else switch(typeof c[0]){case"string":case"number":case"boolean":l({text:c});break;case"object":o(c[0])&&(c=c.concat.apply([],c));default:t=m(e.parentNode,t,c,r)}else!function(e){return"ELEMENT_NODE"in e}(c)?"text"in c?l(String(c.text)):"any"in c?l(c.any):"html"in c?t=m(e.parentNode,t,Q.call(i([].concat(c.html).join(""),a).childNodes),r):"length"in c&&l(Q.call(c)):t=m(e.parentNode,t,11===c.nodeType?Q.call(c.childNodes):[c],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Q.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var X=new WeakMap,Y=0,ee=null;var te=ie("html"),ne=ie("svg");function re(e){return e.nodeType===a?e.valueOf(!0):e}function oe(e,t){return function(){var n=e(null);return null===n.current&&(n.current=function(){for(var e=[],n=0,r=arguments.length;n<r;n++)e[n]=arguments[n];var o=se(this,function(){return t.apply(null,e)});o&&(this.content=o);return this.content}.bind(n)),n.current.apply(null,arguments)}}function ae(e,t){var n=ee,o=n.i,a=n.length,i=n.stack;if(ee.i++,o<a){var u=i[o],l=u.tagger,c=u.wire;return l.apply(null,ce(t,1)),c}var s=new U(e),f={tagger:s,wire:null};return ee.length=i.push(f),f.wire=function(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new r(t):e}(s.apply(null,ce(t,1))),f.wire}function ie(e){return function(){var t=function(e){for(var t=arguments.length,r=[n(e)],o=1;o<t;)r.push(arguments[o++]);return r}.apply(null,arguments);return ee?{nodeType:0,valueOf:valueOf,$:e,_:t}:new U(e).apply(null,t)}}function ue(e){ee.template&&(ee.length=0,ee.stack.splice(0)),ee.template=e}function le(e){return ae(e.$,e._)}function ce(e,t){for(var n=0,r=e.length;n<r;n++){var a=e[n];a&&(0===a.nodeType?e[n]=le(a):o(a)&&(e[n]=ce(a,0)))}return e}function se(e,t){var n,r,o=ee;(ee=X.get(e)||(n=e,r={i:0,length:0,stack:[],template:null},X.set(n,r),r)).i=0;var a=t(),i=null;if(a.nodeType===Y){var u=a._[0],l=le(a),c=ee.i;c<ee.length&&(ee.length=c,ee.stack.splice(c)),ee.template!==u&&(ue(u),i=re(l))}else ue(null),i=re(a);return ee=o,i}return t.hook=function(e){return{html:oe(e,te),svg:oe(e,ne)}},t.render=function(e,t){var n=se(e,t);return null!==n&&function(e,t){e.textContent="",e.appendChild(t)}(e,n),e},t.html=te,t.svg=ne,t}(document,{});
