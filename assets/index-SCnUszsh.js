(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var yn,A,va,Ea,Wt,Ws,Ta,hi,wa,nn={},Ia=[],Qc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,pr=Array.isArray;function kt(e,t){for(var n in t)e[n]=t[n];return e}function Aa(e){var t=e.parentNode;t&&t.removeChild(e)}function gr(e,t,n){var r,i,s,o={};for(s in t)s=="key"?r=t[s]:s=="ref"?i=t[s]:o[s]=t[s];if(arguments.length>2&&(o.children=arguments.length>3?yn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)o[s]===void 0&&(o[s]=e.defaultProps[s]);return Qe(e,o,r,i,null)}function Qe(e,t,n,r,i){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++va,__i:-1,__u:0};return i==null&&A.vnode!=null&&A.vnode(s),s}function Ot(e){return e.children}function ge(e,t){this.props=e,this.context=t}function Ie(e,t){if(t==null)return e.__?Ie(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ie(e):null}function Ra(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ra(e)}}function li(e){(!e.__d&&(e.__d=!0)&&Wt.push(e)&&!Wn.__r++||Ws!==A.debounceRendering)&&((Ws=A.debounceRendering)||Ta)(Wn)}function Wn(){var e,t,n,r,i,s,o,a,u;for(Wt.sort(hi);e=Wt.shift();)e.__d&&(t=Wt.length,r=void 0,s=(i=(n=e).__v).__e,a=[],u=[],(o=n.__P)&&((r=kt({},i)).__v=i.__v+1,A.vnode&&A.vnode(r),Wi(o,r,i,n.__n,o.ownerSVGElement!==void 0,32&i.__u?[s]:null,a,s??Ie(i),!!(32&i.__u),u),r.__.__k[r.__i]=r,Pa(a,r,u),r.__e!=s&&Ra(r)),Wt.length>t&&Wt.sort(hi));Wn.__r=0}function Sa(e,t,n,r,i,s,o,a,u,c,h){var l,f,d,E,S,y=r&&r.__k||Ia,V=t.length;for(n.__d=u,Wc(n,t,y),u=n.__d,l=0;l<V;l++)(d=n.__k[l])!=null&&typeof d!="boolean"&&typeof d!="function"&&(f=d.__i===-1?nn:y[d.__i]||nn,d.__i=l,Wi(e,d,f,i,s,o,a,u,c,h),E=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&Xi(f.ref,null,d),h.push(d.ref,d.__c||E,d)),S==null&&E!=null&&(S=E),65536&d.__u||f.__k===d.__k?u=Ca(d,u,e):typeof d.type=="function"&&d.__d!==void 0?u=d.__d:E&&(u=E.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=u,n.__e=S}function Wc(e,t,n){var r,i,s,o,a,u=t.length,c=n.length,h=c,l=0;for(e.__k=[],r=0;r<u;r++)(i=e.__k[r]=(i=t[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?Qe(null,i,null,null,i):pr(i)?Qe(Ot,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?Qe(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,a=Xc(i,n,o=r+l,h),i.__i=a,s=null,a!==-1&&(h--,(s=n[a])&&(s.__u|=131072)),s==null||s.__v===null?(a==-1&&l--,typeof i.type!="function"&&(i.__u|=65536)):a!==o&&(a===o+1?l++:a>o?h>u-o?l+=a-o:l--:l=a<o&&a==o-1?a-o:0,a!==r+l&&(i.__u|=65536))):(s=n[r])&&s.key==null&&s.__e&&(s.__e==e.__d&&(e.__d=Ie(s)),fi(s,s,!1),n[r]=null,h--);if(h)for(r=0;r<c;r++)(s=n[r])!=null&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=Ie(s)),fi(s,s))}function Ca(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Ca(r[i],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function di(e,t){return t=t||[],e==null||typeof e=="boolean"||(pr(e)?e.some(function(n){di(n,t)}):t.push(e)),t}function Xc(e,t,n,r){var i=e.key,s=e.type,o=n-1,a=n+1,u=t[n];if(u===null||u&&i==u.key&&s===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;o>=0||a<t.length;){if(o>=0){if((u=t[o])&&!(131072&u.__u)&&i==u.key&&s===u.type)return o;o--}if(a<t.length){if((u=t[a])&&!(131072&u.__u)&&i==u.key&&s===u.type)return a;a++}}return-1}function Xs(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Qc.test(t)?n:n+"px"}function kn(e,t,n,r,i){var s;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Xs(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Xs(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,s?Js:Ys,s)):e.removeEventListener(t,s?Js:Ys,s);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ys(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(A.event?A.event(e):e)}function Js(e){return this.l[e.type+!0](A.event?A.event(e):e)}function Wi(e,t,n,r,i,s,o,a,u,c){var h,l,f,d,E,S,y,V,x,$,J,pt,ht,Et,C,I=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),s=[a=t.__e=n.__e]),(h=A.__b)&&h(t);t:if(typeof I=="function")try{if(V=t.props,x=(h=I.contextType)&&r[h.__c],$=h?x?x.props.value:h.__:r,n.__c?y=(l=t.__c=n.__c).__=l.__E:("prototype"in I&&I.prototype.render?t.__c=l=new I(V,$):(t.__c=l=new ge(V,$),l.constructor=I,l.render=Jc),x&&x.sub(l),l.props=V,l.state||(l.state={}),l.context=$,l.__n=r,f=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),I.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=kt({},l.__s)),kt(l.__s,I.getDerivedStateFromProps(V,l.__s))),d=l.props,E=l.state,l.__v=t,f)I.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(I.getDerivedStateFromProps==null&&V!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(V,$),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(V,l.__s,$)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=V,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(F){F&&(F.__=t)}),J=0;J<l._sb.length;J++)l.__h.push(l._sb[J]);l._sb=[],l.__h.length&&o.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(V,l.__s,$),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,E,S)})}if(l.context=$,l.props=V,l.__P=e,l.__e=!1,pt=A.__r,ht=0,"prototype"in I&&I.prototype.render){for(l.state=l.__s,l.__d=!1,pt&&pt(t),h=l.render(l.props,l.state,l.context),Et=0;Et<l._sb.length;Et++)l.__h.push(l._sb[Et]);l._sb=[]}else do l.__d=!1,pt&&pt(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ht<25);l.state=l.__s,l.getChildContext!=null&&(r=kt(kt({},r),l.getChildContext())),f||l.getSnapshotBeforeUpdate==null||(S=l.getSnapshotBeforeUpdate(d,E)),Sa(e,pr(C=h!=null&&h.type===Ot&&h.key==null?h.props.children:h)?C:[C],t,n,r,i,s,o,a,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&o.push(l),y&&(l.__E=l.__=null)}catch(F){t.__v=null,u||s!=null?(t.__e=a,t.__u|=u?160:32,s[s.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),A.__e(F,t,n)}else s==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Yc(n.__e,t,n,r,i,s,o,u,c);(h=A.diffed)&&h(t)}function Pa(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Xi(n[r],n[++r],n[++r]);A.__c&&A.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){A.__e(s,i.__v)}})}function Yc(e,t,n,r,i,s,o,a,u){var c,h,l,f,d,E,S,y=n.props,V=t.props,x=t.type;if(x==="svg"&&(i=!0),s!=null){for(c=0;c<s.length;c++)if((d=s[c])&&"setAttribute"in d==!!x&&(x?d.localName===x:d.nodeType===3)){e=d,s[c]=null;break}}if(e==null){if(x===null)return document.createTextNode(V);e=i?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,V.is&&V),s=null,a=!1}if(x===null)y===V||a&&e.data===V||(e.data=V);else{if(s=s&&yn.call(e.childNodes),y=n.props||nn,!a&&s!=null)for(y={},c=0;c<e.attributes.length;c++)y[(d=e.attributes[c]).name]=d.value;for(c in y)d=y[c],c=="children"||(c=="dangerouslySetInnerHTML"?l=d:c==="key"||c in V||kn(e,c,null,d,i));for(c in V)d=V[c],c=="children"?f=d:c=="dangerouslySetInnerHTML"?h=d:c=="value"?E=d:c=="checked"?S=d:c==="key"||a&&typeof d!="function"||y[c]===d||kn(e,c,d,y[c],i);if(h)a||l&&(h.__html===l.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),Sa(e,pr(f)?f:[f],t,n,r,i&&x!=="foreignObject",s,o,s?s[0]:n.__k&&Ie(n,0),a,u),s!=null)for(c=s.length;c--;)s[c]!=null&&Aa(s[c]);a||(c="value",E!==void 0&&(E!==e[c]||x==="progress"&&!E||x==="option"&&E!==y[c])&&kn(e,c,E,y[c],!1),c="checked",S!==void 0&&S!==e[c]&&kn(e,c,S,y[c],!1))}return e}function Xi(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){A.__e(r,n)}}function fi(e,t,n){var r,i;if(A.unmount&&A.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Xi(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){A.__e(s,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&fi(r[i],t,n||typeof e.type!="function");n||e.__e==null||Aa(e.__e),e.__=e.__e=e.__d=void 0}function Jc(e,t,n){return this.constructor(e,n)}function Zc(e,t,n){var r,i,s,o;A.__&&A.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],o=[],Wi(t,e=(!r&&n||t).__k=gr(Ot,null,[e]),i||nn,nn,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?yn.call(t.childNodes):null,s,!r&&n?n:i?i.__e:t.firstChild,r,o),Pa(s,e,o)}function th(e,t,n){var r,i,s,o,a=kt({},e.props);for(s in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)s=="key"?r=t[s]:s=="ref"?i=t[s]:a[s]=t[s]===void 0&&o!==void 0?o[s]:t[s];return arguments.length>2&&(a.children=arguments.length>3?yn.call(arguments,2):n),Qe(e.type,a,r||e.key,i||e.ref,null)}function eh(e,t){var n={__c:t="__cC"+wa++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[t]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,li(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}yn=Ia.slice,A={__e:function(e,t,n,r){for(var i,s,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(a){e=a}throw e}},va=0,Ea=function(e){return e!=null&&e.constructor==null},ge.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=kt({},this.state),typeof e=="function"&&(e=e(kt({},n),this.props)),e&&kt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),li(this))},ge.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),li(this))},ge.prototype.render=Ot,Wt=[],Ta=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hi=function(e,t){return e.__v.__b-t.__v.__b},Wn.__r=0,wa=0;var pi,mt,zr,Zs,to=0,Va=[],zn=[],eo=A.__b,no=A.__r,ro=A.diffed,io=A.__c,so=A.unmount;function nh(e,t){A.__h&&A.__h(mt,e,to||t),to=0;var n=mt.__H||(mt.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:zn}),n.__[e]}function Da(e,t){var n=nh(pi++,7);return sh(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function rh(){for(var e;e=Va.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Hn),e.__H.__h.forEach(gi),e.__H.__h=[]}catch(t){e.__H.__h=[],A.__e(t,e.__v)}}A.__b=function(e){mt=null,eo&&eo(e)},A.__r=function(e){no&&no(e),pi=0;var t=(mt=e.__c).__H;t&&(zr===mt?(t.__h=[],mt.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=zn,n.__N=n.i=void 0})):(t.__h.forEach(Hn),t.__h.forEach(gi),t.__h=[],pi=0)),zr=mt},A.diffed=function(e){ro&&ro(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Va.push(t)!==1&&Zs===A.requestAnimationFrame||((Zs=A.requestAnimationFrame)||ih)(rh)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==zn&&(n.__=n.__V),n.i=void 0,n.__V=zn})),zr=mt=null},A.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Hn),n.__h=n.__h.filter(function(r){return!r.__||gi(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],A.__e(r,n.__v)}}),io&&io(e,t)},A.unmount=function(e){so&&so(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Hn(r)}catch(i){t=i}}),n.__H=void 0,t&&A.__e(t,n.__v))};var oo=typeof requestAnimationFrame=="function";function ih(e){var t,n=function(){clearTimeout(r),oo&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);oo&&(t=requestAnimationFrame(n))}function Hn(e){var t=mt,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),mt=t}function gi(e){var t=mt;e.__c=e.__(),mt=t}function sh(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}var oh={};function qe(e,t){for(var n in t)e[n]=t[n];return e}function ah(e,t,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,s=e.match(i),o={};if(s&&s[1])for(var a=s[1].split("&"),u=0;u<a.length;u++){var c=a[u].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=mi(e.replace(i,"")),t=mi(t||"");for(var h=Math.max(e.length,t.length),l=0;l<h;l++)if(t[l]&&t[l].charAt(0)===":"){var f=t[l].replace(/(^:|[+*?]+$)/g,""),d=(t[l].match(/[+*?]+$/)||oh)[0]||"",E=~d.indexOf("+"),S=~d.indexOf("*"),y=e[l]||"";if(!y&&!S&&(d.indexOf("?")<0||E)){r=!1;break}if(o[f]=decodeURIComponent(y),E||S){o[f]=e.slice(l).map(decodeURIComponent).join("/");break}}else if(t[l]!==e[l]){r=!1;break}return(n.default===!0||r!==!1)&&o}function uh(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function ch(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:mi(n.props.path).map(hh).join("")}(e),e.props}function mi(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function hh(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var lh={},ee=[],ao=[],_t=null,ba={url:Yi()},dh=eh(ba);function Yi(){var e;return""+((e=_t&&_t.location?_t.location:_t&&_t.getCurrentLocation?_t.getCurrentLocation():typeof location<"u"?location:lh).pathname||"")+(e.search||"")}function fh(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=ee.length;r--;)if(ee[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),_t&&_t[r]?_t[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),ka(e)}function ka(e){for(var t=!1,n=0;n<ee.length;n++)ee[n].routeTo(e)&&(t=!0);return t}function ph(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return fh(t)}}function gh(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function Na(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(ph(t))return gh(e)}while(t=t.parentNode)}}var uo=!1;function xa(e){e.history&&(_t=e.history),this.state={url:e.url||Yi()}}qe(xa.prototype=new ge,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=di(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;uo||(uo=!0,_t||addEventListener("popstate",function(){ka(Yi())}),addEventListener("click",Na)),ee.push(this),_t&&(this.u=_t.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),ee.splice(ee.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(ch).sort(uh);for(var n=0;n<e.length;n++){var r=e[n],i=ah(t,r.props.path,r.props);if(i)return[r,i]}},render:function(e,t){var n,r,i=e.onChange,s=t.url,o=this.c,a=this.g(di(e.children),s);if(a&&(r=th(a[0],qe(qe({url:s,matches:n=a[1]},n),{key:void 0,ref:void 0}))),s!==(o&&o.url)){qe(ba,o=this.c={url:s,previous:o&&o.url,current:r,path:r?r.props.path:null,matches:n}),o.router=this,o.active=r?[r]:[];for(var u=ao.length;u--;)ao[u]({});typeof i=="function"&&i(o)}return gr(dh.Provider,{value:o},r)}});var Nn=function(e){return gr("a",qe({onClick:Na},e))},xn=function(e){return gr(e.component,e)},mh=0;function T(e,t,n,r,i,s){var o,a,u={};for(a in t)a=="ref"?o=t[a]:u[a]=t[a];var c={type:e,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--mh,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)u[a]===void 0&&(u[a]=o[a]);return A.vnode&&A.vnode(c),c}function mr({includeBack:e}){return T("nav",{children:[e?T(Nn,{style:{span:2},href:"/",children:"Tilbake"}):T("span",{}),T("div",{children:[T(Nn,{href:"/program",children:"Program"}),T(Nn,{href:"/info",children:"Praktisk info"}),T(Nn,{href:"/onskeliste",children:"Ønskeliste"})]})]})}function _h(){return T(Ot,{children:[T(mr,{includeBack:!1}),T("div",{className:"top",children:[T("img",{className:"upper-left",src:"images/ring.png",alt:"Ring"}),T("div",{className:"header",children:[T("h2",{children:"Vi gifter oss!"}),T("h1",{children:"Kaia og Martin"})]})]}),T("div",{className:"center-container",children:[T("h1",{children:"Velkommen"}),T("p",{children:"Har du forvillet deg inn på denne nettsiden er du sannsynligvis invitert og har takket ja til å komme i vårt bryllup 16.mars. Og det er vi så glad for! Vi gleder oss skikkelig til å dele dagen med de fineste menneskene vi vet om."}),T("p",{children:"På denne siden kommer vi til å poste endel praktisk informasjon om hva som skal skje på selve dagen - og alle konkurranselekene dere må starte å øve til (neida…)."}),T("h1",{children:"Vielse på Oslo Rådhus"}),T("p",{children:"Selve vielsessermonien finner sted på Oslo Rådhus i Munchrommet på dagen 16.mars klokken 13.00-13.15. En klassisk tradisjonell, offentlig og effektiv affære med andre ord. Her er det dessverre begrenset med plasser slik at det er nærmeste familie og forlovere som får være med inn. Det kan være noe kø i sikkerhetskontrollen, så det er lurt å møte opp minst 15 minutter før."}),T("p",{children:"For de av dere som ikke er nærmeste familie eller forlovere, så er det aldeles hyggelig dersom dere likevel ønsker å ta turen dit og ta oss i mot på vei ut igjen. Men det er er ingen forventning fra oss - vi ses jo til en hyggelig middag og heidundranes fest kl. 16.00!"}),T("h1",{children:"Hyggelig middag og heidundranes fest på Grefsenkollen restaurant"}),T("p",{children:"Klokken 16.00 er det start av apertiff på flotte Grefsenkollen restaurant over Oslo. Her vil vi etter hvert få servert en deilig treretters middag. Utover kvelden blir det selvfølgelig dans og spillopper!"})]}),T("div",{className:"container-text"})]})}var co={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},yh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,h=s>>2,l=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(f=64)),r.push(n[h],n[l],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||l==null)throw new vh;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),l!==64){const E=c<<6&192|l;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eh=function(e){const t=Oa(e);return Ma.encodeByteArray(t,!0)},Xn=function(e){return Eh(e).replace(/\./g,"")},Th=function(e){try{return Ma.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=()=>wh().__FIREBASE_DEFAULTS__,Ah=()=>{if(typeof process>"u"||typeof co>"u")return;const e=co.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Rh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Th(e[1]);return t&&JSON.parse(t)},Ji=()=>{try{return Ih()||Ah()||Rh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Sh=e=>{var t,n;return(n=(t=Ji())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ch=e=>{const t=Sh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},La=()=>{var e;return(e=Ji())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Xn(JSON.stringify(n)),Xn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){var e;const t=(e=Ji())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bh(){return!Dh()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fa(){try{return typeof indexedDB=="object"}catch{return!1}}function kh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="FirebaseError";class be extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Nh,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?xh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new be(i,a,r)}}function xh(e,t){return e.replace(Oh,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Oh=/\{\$([^}]+)}/g;function _i(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(ho(s)&&ho(o)){if(!_i(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ho(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(e){return e&&e._delegate?e._delegate:e}class rn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ph;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uh(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fh(e){return e===Qt?void 0:e}function Uh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Lh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const Bh={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},jh=k.INFO,qh={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},zh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=qh[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $a{constructor(t){this.name=t,this._logLevel=jh,this._logHandler=zh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const Hh=(e,t)=>t.some(n=>e instanceof n);let lo,fo;function Kh(){return lo||(lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gh(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ba=new WeakMap,yi=new WeakMap,ja=new WeakMap,Hr=new WeakMap,Zi=new WeakMap;function Qh(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ut(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ba.set(n,e)}).catch(()=>{}),Zi.set(t,e),t}function Wh(e){if(yi.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});yi.set(e,t)}let vi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ja.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xh(e){vi=e(vi)}function Yh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Kr(this),t,...n);return ja.set(r,t.sort?t.sort():[t]),Ut(r)}:Gh().includes(e)?function(...t){return e.apply(Kr(this),t),Ut(Ba.get(this))}:function(...t){return Ut(e.apply(Kr(this),t))}}function Jh(e){return typeof e=="function"?Yh(e):(e instanceof IDBTransaction&&Wh(e),Hh(e,Kh())?new Proxy(e,vi):e)}function Ut(e){if(e instanceof IDBRequest)return Qh(e);if(Hr.has(e))return Hr.get(e);const t=Jh(e);return t!==e&&(Hr.set(e,t),Zi.set(t,e)),t}const Kr=e=>Zi.get(e);function Zh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ut(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ut(o.result),u.oldVersion,u.newVersion,Ut(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const tl=["get","getKey","getAll","getAllKeys","count"],el=["put","add","delete","clear"],Gr=new Map;function po(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gr.get(t))return Gr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=el.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tl.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Gr.set(t,s),s}Xh(e=>({...e,get:(t,n,r)=>po(t,n)||e.get(t,n,r),has:(t,n)=>!!po(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ei="@firebase/app",go="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new $a("@firebase/app"),il="@firebase/app-compat",sl="@firebase/analytics-compat",ol="@firebase/analytics",al="@firebase/app-check-compat",ul="@firebase/app-check",cl="@firebase/auth",hl="@firebase/auth-compat",ll="@firebase/database",dl="@firebase/database-compat",fl="@firebase/functions",pl="@firebase/functions-compat",gl="@firebase/installations",ml="@firebase/installations-compat",_l="@firebase/messaging",yl="@firebase/messaging-compat",vl="@firebase/performance",El="@firebase/performance-compat",Tl="@firebase/remote-config",wl="@firebase/remote-config-compat",Il="@firebase/storage",Al="@firebase/storage-compat",Rl="@firebase/firestore",Sl="@firebase/firestore-compat",Cl="firebase",Pl="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]",Vl={[Ei]:"fire-core",[il]:"fire-core-compat",[ol]:"fire-analytics",[sl]:"fire-analytics-compat",[ul]:"fire-app-check",[al]:"fire-app-check-compat",[cl]:"fire-auth",[hl]:"fire-auth-compat",[ll]:"fire-rtdb",[dl]:"fire-rtdb-compat",[fl]:"fire-fn",[pl]:"fire-fn-compat",[gl]:"fire-iid",[ml]:"fire-iid-compat",[_l]:"fire-fcm",[yl]:"fire-fcm-compat",[vl]:"fire-perf",[El]:"fire-perf-compat",[Tl]:"fire-rc",[wl]:"fire-rc-compat",[Il]:"fire-gcs",[Al]:"fire-gcs-compat",[Rl]:"fire-fst",[Sl]:"fire-fst-compat","fire-js":"fire-js",[Cl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map,wi=new Map;function Dl(e,t){try{e.container.addComponent(t)}catch(n){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zn(e){const t=e.name;if(wi.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;wi.set(t,e);for(const n of Jn.values())Dl(n,e);return!0}function bl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new Ua("app","Firebase",kl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=Pl;function qa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ti,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=La()),!n)throw $t.create("no-options");const s=Jn.get(i);if(s){if(_i(n,s.options)&&_i(r,s.config))return s;throw $t.create("duplicate-app",{appName:i})}const o=new $h(i);for(const u of wi.values())o.addComponent(u);const a=new Nl(n,r,o);return Jn.set(i,a),a}function Ol(e=Ti){const t=Jn.get(e);if(!t&&e===Ti&&La())return qa();if(!t)throw $t.create("no-app",{appName:e});return t}function me(e,t,n){var r;let i=(r=Vl[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ie.warn(a.join(" "));return}Zn(new rn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="firebase-heartbeat-database",Ll=1,sn="firebase-heartbeat-store";let Qr=null;function za(){return Qr||(Qr=Zh(Ml,Ll,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(sn)}catch(n){console.warn(n)}}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),Qr}async function Fl(e){try{return await(await za()).transaction(sn).objectStore(sn).get(Ha(e))}catch(t){if(t instanceof be)ie.warn(t.message);else{const n=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ie.warn(n.message)}}}async function mo(e,t){try{const r=(await za()).transaction(sn,"readwrite");await r.objectStore(sn).put(t,Ha(e)),await r.done}catch(n){if(n instanceof be)ie.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ie.warn(r.message)}}}function Ha(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=1024,$l=30*24*60*60*1e3;class Bl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ql(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_o();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$l}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_o(),{heartbeatsToSend:r,unsentEntries:i}=jl(this._heartbeatsCache.heartbeats),s=Xn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _o(){return new Date().toISOString().substring(0,10)}function jl(e,t=Ul){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yo(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ql{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fa()?kh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yo(e){return Xn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(e){Zn(new rn("platform-logger",t=>new nl(t),"PRIVATE")),Zn(new rn("heartbeat",t=>new Bl(t),"PRIVATE")),me(Ei,go,e),me(Ei,go,"esm2017"),me("fire-js","")}zl("");var Hl="firebase",Kl="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me(Hl,Kl,"app");var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ts=ts||{},R=Gl||self;function _r(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function vn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ql(e){return Object.prototype.hasOwnProperty.call(e,Wr)&&e[Wr]||(e[Wr]=++Wl)}var Wr="closure_uid_"+(1e9*Math.random()>>>0),Wl=0;function Xl(e,t,n){return e.call.apply(e.bind,arguments)}function Yl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function at(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=Xl:at=Yl,at.apply(null,arguments)}function On(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Y(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ht(){this.s=this.s,this.o=this.o}var Jl=0;Ht.prototype.s=!1;Ht.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Jl!=0)&&Ql(this)};Ht.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ka=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function es(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function vo(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_r(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ut(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var Zl=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};R.addEventListener("test",n,t),R.removeEventListener("test",n,t)}catch{}return e}();function on(e){return/^[\s\xa0]*$/.test(e)}function yr(){var e=R.navigator;return e&&(e=e.userAgent)?e:""}function wt(e){return yr().indexOf(e)!=-1}function ns(e){return ns[" "](e),e}ns[" "]=function(){};function td(e,t){var n=Kd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var ed=wt("Opera"),Ae=wt("Trident")||wt("MSIE"),Ga=wt("Edge"),Ii=Ga||Ae,Qa=wt("Gecko")&&!(yr().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge"))&&!(wt("Trident")||wt("MSIE"))&&!wt("Edge"),nd=yr().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge");function Wa(){var e=R.document;return e?e.documentMode:void 0}var Ai;t:{var Xr="",Yr=function(){var e=yr();if(Qa)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ga)return/Edge\/([\d\.]+)/.exec(e);if(Ae)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(nd)return/WebKit\/(\S+)/.exec(e);if(ed)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Yr&&(Xr=Yr?Yr[1]:""),Ae){var Jr=Wa();if(Jr!=null&&Jr>parseFloat(Xr)){Ai=String(Jr);break t}}Ai=Xr}var Ri;if(R.document&&Ae){var Eo=Wa();Ri=Eo||parseInt(Ai,10)||void 0}else Ri=void 0;var rd=Ri;function an(e,t){if(ut.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Qa){t:{try{ns(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:id[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&an.$.h.call(this)}}Y(an,ut);var id={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),sd=0;function od(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++sd,this.fa=this.ia=!1}function vr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function rs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ad(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Xa(e){const t={};for(const n in e)t[n]=e[n];return t}const To="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ya(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<To.length;s++)n=To[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Er(e){this.src=e,this.g={},this.h=0}Er.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ci(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new od(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Si(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Ka(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ci(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var is="closure_lm_"+(1e6*Math.random()|0),Zr={};function Ja(e,t,n,r,i){if(r&&r.once)return tu(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ja(e,t[s],n,r,i);return null}return n=as(n),e&&e[En]?e.O(t,n,vn(r)?!!r.capture:!!r,i):Za(e,t,n,!1,r,i)}function Za(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=vn(i)?!!i.capture:!!i,a=os(e);if(a||(e[is]=a=new Er(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ud(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Zl||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(nu(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ud(){function e(n){return t.call(e.src,e.listener,n)}const t=cd;return e}function tu(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)tu(e,t[s],n,r,i);return null}return n=as(n),e&&e[En]?e.P(t,n,vn(r)?!!r.capture:!!r,i):Za(e,t,n,!0,r,i)}function eu(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)eu(e,t[s],n,r,i);else r=vn(r)?!!r.capture:!!r,n=as(n),e&&e[En]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ci(s,n,r,i),-1<n&&(vr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=os(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ci(t,n,r,i)),(n=-1<e?t[e]:null)&&ss(n))}function ss(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[En])Si(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(nu(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=os(t))?(Si(n,e),n.h==0&&(n.src=null,t[is]=null)):vr(e)}}}function nu(e){return e in Zr?Zr[e]:Zr[e]="on"+e}function cd(e,t){if(e.fa)e=!0;else{t=new an(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ss(e),e=n.call(r,t)}return e}function os(e){return e=e[is],e instanceof Er?e:null}var ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function as(e){return typeof e=="function"?e:(e[ti]||(e[ti]=function(t){return e.handleEvent(t)}),e[ti])}function X(){Ht.call(this),this.i=new Er(this),this.S=this,this.J=null}Y(X,Ht);X.prototype[En]=!0;X.prototype.removeEventListener=function(e,t,n,r){eu(this,e,t,n,r)};function et(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ut(t,e);else if(t instanceof ut)t.target=t.target||e;else{var i=t;t=new ut(r,e),Ya(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Mn(o,r,!0,t)&&i}if(o=t.g=e,i=Mn(o,r,!0,t)&&i,i=Mn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Mn(o,r,!1,t)&&i}X.prototype.N=function(){if(X.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)vr(n[r]);delete e.g[t],e.h--}}this.J=null};X.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};X.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Mn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Si(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var us=R.JSON.stringify;class hd{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ld(){var e=cs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class dd{constructor(){this.h=this.g=null}add(t,n){const r=ru.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ru=new hd(()=>new fd,e=>e.reset());class fd{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pd(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function gd(e){R.setTimeout(()=>{throw e},0)}let un,cn=!1,cs=new dd,iu=()=>{const e=R.Promise.resolve(void 0);un=()=>{e.then(md)}};var md=()=>{for(var e;e=ld();){try{e.h.call(e.g)}catch(n){gd(n)}var t=ru;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}cn=!1};function Tr(e,t){X.call(this),this.h=e||1,this.g=t||R,this.j=at(this.qb,this),this.l=Date.now()}Y(Tr,X);m=Tr.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(hs(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Tr.$.N.call(this),hs(this),delete this.g};function ls(e,t,n){if(typeof e=="function")n&&(e=at(e,n));else if(e&&typeof e.handleEvent=="function")e=at(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(e,t||0)}function su(e){e.g=ls(()=>{e.g=null,e.i&&(e.i=!1,su(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class _d extends Ht{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hn(e){Ht.call(this),this.h=e,this.g={}}Y(hn,Ht);var wo=[];function ou(e,t,n,r){Array.isArray(n)||(n&&(wo[0]=n.toString()),n=wo);for(var i=0;i<n.length;i++){var s=Ja(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function au(e){rs(e.g,function(t,n){this.g.hasOwnProperty(n)&&ss(t)},e),e.g={}}hn.prototype.N=function(){hn.$.N.call(this),au(this)};hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wr(){this.g=!0}wr.prototype.Ea=function(){this.g=!1};function yd(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function vd(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function fe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Td(e,n)+(r?" "+r:"")})}function Ed(e,t){e.info(function(){return"TIMEOUT: "+t})}wr.prototype.info=function(){};function Td(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return us(n)}catch{return t}}var ue={},Io=null;function Ir(){return Io=Io||new X}ue.Ta="serverreachability";function uu(e){ut.call(this,ue.Ta,e)}Y(uu,ut);function ln(e){const t=Ir();et(t,new uu(t))}ue.STAT_EVENT="statevent";function cu(e,t){ut.call(this,ue.STAT_EVENT,e),this.stat=t}Y(cu,ut);function dt(e){const t=Ir();et(t,new cu(t,e))}ue.Ua="timingevent";function hu(e,t){ut.call(this,ue.Ua,e),this.size=t}Y(hu,ut);function Tn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){e()},t)}var Ar={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ds(){}ds.prototype.h=null;function Ao(e){return e.h||(e.h=e.i())}function du(){}var wn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fs(){ut.call(this,"d")}Y(fs,ut);function ps(){ut.call(this,"c")}Y(ps,ut);var Pi;function Rr(){}Y(Rr,ds);Rr.prototype.g=function(){return new XMLHttpRequest};Rr.prototype.i=function(){return{}};Pi=new Rr;function In(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new hn(this),this.P=wd,e=Ii?125:void 0,this.V=new Tr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fu}function fu(){this.i=null,this.g="",this.h=!1}var wd=45e3,pu={},Vi={};m=In.prototype;m.setTimeout=function(e){this.P=e};function Di(e,t,n){e.L=1,e.A=Cr(xt(t)),e.u=n,e.S=!0,gu(e,null)}function gu(e,t){e.G=Date.now(),An(e),e.B=xt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Iu(n.i,"t",r),e.o=0,n=e.l.J,e.h=new fu,e.g=zu(e.l,n?t:null,!e.u),0<e.O&&(e.M=new _d(at(e.Pa,e,e.g),e.O)),ou(e.U,e.g,"readystatechange",e.nb),t=e.I?Xa(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ln(),yd(e.j,e.v,e.B,e.m,e.W,e.u)}m.nb=function(e){e=e.target;const t=this.M;t&&At(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const h=At(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Ii||this.g&&(this.h.h||this.g.ja()||Po(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?ln(3):ln(2)),Sr(this);var n=this.g.da();this.ca=n;e:if(mu(this)){var r=Po(this.g);e="";var i=r.length,s=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),We(this);var o="";break e}this.h.i=new R.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vd(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!on(a)){var c=a;break e}}c=null}if(n=c)fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bi(this,n);else{this.i=!1,this.s=3,dt(12),Yt(this),We(this);break t}}this.S?(_u(this,h,o),Ii&&this.i&&h==3&&(ou(this.U,this.V,"tick",this.mb),this.V.start())):(fe(this.j,this.m,o,null),bi(this,o)),h==4&&Yt(this),this.i&&!this.J&&(h==4?$u(this.l,this):(this.i=!1,An(this)))}else qd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Yt(this),We(this)}}}catch{}finally{}};function mu(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function _u(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Id(e,n),i==Vi){t==4&&(e.s=4,dt(14),r=!1),fe(e.j,e.m,null,"[Incomplete Response]");break}else if(i==pu){e.s=4,dt(15),fe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else fe(e.j,e.m,i,null),bi(e,i);mu(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,dt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Es(t),t.M=!0,dt(11))):(fe(e.j,e.m,n,"[Invalid Chunked Response]"),Yt(e),We(e))}m.mb=function(){if(this.g){var e=At(this.g),t=this.g.ja();this.o<t.length&&(Sr(this),_u(this,e,t),this.i&&e!=4&&An(this))}};function Id(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Vi:(n=Number(t.substring(n,r)),isNaN(n)?pu:(r+=1,r+n>t.length?Vi:(t=t.slice(r,r+n),e.o=r+n,t)))}m.cancel=function(){this.J=!0,Yt(this)};function An(e){e.Y=Date.now()+e.P,yu(e,e.P)}function yu(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Tn(at(e.lb,e),t)}function Sr(e){e.C&&(R.clearTimeout(e.C),e.C=null)}m.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Ed(this.j,this.B),this.L!=2&&(ln(),dt(17)),Yt(this),this.s=2,We(this)):yu(this,this.Y-e)};function We(e){e.l.H==0||e.J||$u(e.l,e)}function Yt(e){Sr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,hs(e.V),au(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function bi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ki(n.i,e))){if(!e.K&&ki(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)nr(n),br(n);else break t;vs(n),dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Tn(at(n.ib,n),6e3));if(1>=Su(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jt(n,11)}else if((e.K||n.g==e)&&nr(n),!on(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const E=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(gs(s,s.h),s.h=null))}if(r.F){const S=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,U(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=qu(r,r.J?r.pa:null,r.Y),o.K){Cu(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Sr(a),An(a)),r.g=o}else Fu(r);0<n.j.length&&kr(n)}else c[0]!="stop"&&c[0]!="close"||Jt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jt(n,7):ys(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ln(4)}catch{}}function Ad(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(_r(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Rd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(_r(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function vu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(_r(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Rd(e),r=Ad(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ne(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ne){this.h=e.h,tr(this,e.j),this.s=e.s,this.g=e.g,er(this,e.m),this.l=e.l;var t=e.i,n=new dn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ro(this,n),this.o=e.o}else e&&(t=String(e).match(Eu))?(this.h=!1,tr(this,t[1]||"",!0),this.s=ze(t[2]||""),this.g=ze(t[3]||"",!0),er(this,t[4]),this.l=ze(t[5]||"",!0),Ro(this,t[6]||"",!0),this.o=ze(t[7]||"")):(this.h=!1,this.i=new dn(null,this.h))}ne.prototype.toString=function(){var e=[],t=this.j;t&&e.push(He(t,So,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(He(t,So,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(He(n,n.charAt(0)=="/"?Vd:Pd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",He(n,bd)),e.join("")};function xt(e){return new ne(e)}function tr(e,t,n){e.j=n?ze(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function er(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ro(e,t,n){t instanceof dn?(e.i=t,kd(e.i,e.h)):(n||(t=He(t,Dd)),e.i=new dn(t,e.h))}function U(e,t,n){e.i.set(t,n)}function Cr(e){return U(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ze(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function He(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Cd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Cd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var So=/[#\/\?@]/g,Pd=/[#\?:]/g,Vd=/[#\?]/g,Dd=/[#\?@]/g,bd=/#/g;function dn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Sd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=dn.prototype;m.add=function(e,t){Kt(this),this.i=null,e=ke(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Tu(e,t){Kt(e),t=ke(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function wu(e,t){return Kt(e),t=ke(e,t),e.g.has(t)}m.forEach=function(e,t){Kt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};m.ta=function(){Kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};m.Z=function(e){Kt(this);let t=[];if(typeof e=="string")wu(this,e)&&(t=t.concat(this.g.get(ke(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Kt(this),this.i=null,e=ke(this,e),wu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Iu(e,t,n){Tu(e,t),0<n.length&&(e.i=null,e.g.set(ke(e,t),es(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ke(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kd(e,t){t&&!e.j&&(Kt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Tu(this,r),Iu(this,i,n))},e)),e.j=t}var Nd=class{constructor(e,t){this.g=e,this.map=t}};function Au(e){this.l=e||xd,R.PerformanceNavigationTiming?(e=R.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xd=10;function Ru(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Su(e){return e.h?1:e.g?e.g.size:0}function ki(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function gs(e,t){e.g?e.g.add(t):e.h=t}function Cu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Au.prototype.cancel=function(){if(this.i=Pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Pu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return es(e.i)}var Od=class{stringify(e){return R.JSON.stringify(e,void 0)}parse(e){return R.JSON.parse(e,void 0)}};function Md(){this.g=new Od}function Ld(e,t,n){const r=n||"";try{vu(e,function(i,s){let o=i;vn(i)&&(o=us(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Fd(e,t){const n=new wr;if(R.Image){const r=new Image;r.onload=On(Ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=On(Ln,n,r,"TestLoadImage: error",!1,t),r.onabort=On(Ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=On(Ln,n,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ln(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Pr(e){this.l=e.ec||null,this.j=e.ob||!1}Y(Pr,ds);Pr.prototype.g=function(){return new Vr(this.l,this.j)};Pr.prototype.i=function(e){return function(){return e}}({});function Vr(e,t){X.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ms,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(Vr,X);var ms=0;m=Vr.prototype;m.open=function(e,t){if(this.readyState!=ms)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fn(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||R).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=ms};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Vu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rn(this):fn(this),this.readyState==3&&Vu(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,Rn(this))};m.Ya=function(e){this.g&&(this.response=e,Rn(this))};m.ka=function(){this.g&&Rn(this)};function Rn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fn(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function fn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ud=R.JSON.parse;function q(e){X.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Du,this.L=this.M=!1}Y(q,X);var Du="",$d=/^https?$/i,Bd=["POST","PUT"];m=q.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pi.g(),this.C=this.u?Ao(this.u):Ao(Pi),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Co(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=R.FormData&&e instanceof R.FormData,!(0<=Ka(Bd,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Nu(this),0<this.B&&((this.L=jd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=ls(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Co(this,s)}};function jd(e){return Ae&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof ts<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Co(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,bu(e),Dr(e)}function bu(e){e.F||(e.F=!0,et(e,"complete"),et(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,et(this,"complete"),et(this,"abort"),Dr(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dr(this,!0)),q.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?ku(this):this.kb())};m.kb=function(){ku(this)};function ku(e){if(e.h&&typeof ts<"u"&&(!e.C[1]||At(e)!=4||e.da()!=2)){if(e.v&&At(e)==4)ls(e.La,0,e);else if(et(e,"readystatechange"),At(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Eu)[1]||null;!i&&R.self&&R.self.location&&(i=R.self.location.protocol.slice(0,-1)),r=!$d.test(i?i.toLowerCase():"")}n=r}if(n)et(e,"complete"),et(e,"success");else{e.m=6;try{var s=2<At(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",bu(e)}}finally{Dr(e)}}}}function Dr(e,t){if(e.g){Nu(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||et(e,"ready");try{n.onreadystatechange=r}catch{}}}function Nu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(R.clearTimeout(e.A),e.A=null)}m.isActive=function(){return!!this.g};function At(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ud(t)}};function Po(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Du:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function qd(e){const t={};e=(e.g&&2<=At(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(on(e[r]))continue;var n=pd(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ad(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xu(e){let t="";return rs(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function _s(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=xu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):U(e,t,n))}function $e(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ou(e){this.Ga=0,this.j=[],this.l=new wr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$e("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$e("baseRetryDelayMs",5e3,e),this.hb=$e("retryDelaySeedMs",1e4,e),this.eb=$e("forwardChannelMaxRetries",2,e),this.xa=$e("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Au(e&&e.concurrentRequestLimit),this.Ja=new Md,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=Ou.prototype;m.ra=8;m.H=1;function ys(e){if(Mu(e),e.H==3){var t=e.W++,n=xt(e.I);if(U(n,"SID",e.K),U(n,"RID",t),U(n,"TYPE","terminate"),Sn(e,n),t=new In(e,e.l,t),t.L=2,t.A=Cr(xt(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&R.Image&&(new Image().src=t.A,n=!0),n||(t.g=zu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),An(t)}ju(e)}function br(e){e.g&&(Es(e),e.g.cancel(),e.g=null)}function Mu(e){br(e),e.u&&(R.clearTimeout(e.u),e.u=null),nr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&R.clearTimeout(e.m),e.m=null)}function kr(e){if(!Ru(e.i)&&!e.m){e.m=!0;var t=e.Na;un||iu(),cn||(un(),cn=!0),cs.add(t,e),e.C=0}}function zd(e,t){return Su(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Tn(at(e.Na,e,t),Bu(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new In(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Xa(s),Ya(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Lu(this,i,t),n=xt(this.I),U(n,"RID",e),U(n,"CVER",22),this.F&&U(n,"X-HTTP-Session-Id",this.F),Sn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(xu(s)))+"&"+t:this.o&&_s(n,this.o,s)),gs(this.i,i),this.bb&&U(n,"TYPE","init"),this.P?(U(n,"$req",t),U(n,"SID","null"),i.aa=!0,Di(i,n,null)):Di(i,n,t),this.H=2}}else this.H==3&&(e?Vo(this,e):this.j.length==0||Ru(this.i)||Vo(this))};function Vo(e,t){var n;t?n=t.m:n=e.W++;const r=xt(e.I);U(r,"SID",e.K),U(r,"RID",n),U(r,"AID",e.V),Sn(e,r),e.o&&e.s&&_s(r,e.o,e.s),n=new In(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Lu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),gs(e.i,n),Di(n,r,t)}function Sn(e,t){e.na&&rs(e.na,function(n,r){U(t,r,n)}),e.h&&vu({},function(n,r){U(t,r,n)})}function Lu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?at(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const h=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{Ld(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Fu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;un||iu(),cn||(un(),cn=!0),cs.add(t,e),e.A=0}}function vs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Tn(at(e.Ma,e),Bu(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,Uu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Tn(at(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),br(this),Uu(this))};function Es(e){e.B!=null&&(R.clearTimeout(e.B),e.B=null)}function Uu(e){e.g=new In(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=xt(e.wa);U(t,"RID","rpc"),U(t,"SID",e.K),U(t,"AID",e.V),U(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&U(t,"TO",e.qa),U(t,"TYPE","xmlhttp"),Sn(e,t),e.o&&e.s&&_s(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Cr(xt(t)),n.u=null,n.S=!0,gu(n,e)}m.ib=function(){this.v!=null&&(this.v=null,br(this),vs(this),dt(19))};function nr(e){e.v!=null&&(R.clearTimeout(e.v),e.v=null)}function $u(e,t){var n=null;if(e.g==t){nr(e),Es(e),e.g=null;var r=2}else if(ki(e.i,t))n=t.F,Cu(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Ir(),et(r,new hu(r,n)),kr(e)}else Fu(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&zd(e,t)||r==2&&vs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Jt(e,5);break;case 4:Jt(e,10);break;case 3:Jt(e,6);break;default:Jt(e,2)}}}function Bu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Jt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=at(e.pb,e);n||(n=new ne("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||tr(n,"https"),Cr(n)),Fd(n.toString(),r)}else dt(2);e.H=0,e.h&&e.h.za(t),ju(e),Mu(e)}m.pb=function(e){e?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function ju(e){if(e.H=0,e.ma=[],e.h){const t=Pu(e.i);(t.length!=0||e.j.length!=0)&&(vo(e.ma,t),vo(e.ma,e.j),e.i.i.length=0,es(e.j),e.j.length=0),e.h.ya()}}function qu(e,t,n){var r=n instanceof ne?xt(n):new ne(n);if(r.g!="")t&&(r.g=t+"."+r.g),er(r,r.m);else{var i=R.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ne(null);r&&tr(s,r),t&&(s.g=t),i&&er(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&U(r,n,t),U(r,"VER",e.ra),Sn(e,r),r}function zu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new q(new Pr({ob:n})):new q(e.va),t.Oa(e.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hu(){}m=Hu.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function rr(){if(Ae&&!(10<=Number(rd)))throw Error("Environmental error: no available transport.")}rr.prototype.g=function(e,t){return new yt(e,t)};function yt(e,t){X.call(this),this.g=new Ou(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!on(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!on(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ne(this)}Y(yt,X);yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;dt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=qu(e,null,e.Y),kr(e)};yt.prototype.close=function(){ys(this.g)};yt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=us(e),e=n);t.j.push(new Nd(t.fb++,e)),t.H==3&&kr(t)};yt.prototype.N=function(){this.g.h=null,delete this.j,ys(this.g),delete this.g,yt.$.N.call(this)};function Ku(e){fs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Y(Ku,fs);function Gu(){ps.call(this),this.status=1}Y(Gu,ps);function Ne(e){this.g=e}Y(Ne,Hu);Ne.prototype.Ba=function(){et(this.g,"a")};Ne.prototype.Aa=function(e){et(this.g,new Ku(e))};Ne.prototype.za=function(e){et(this.g,new Gu)};Ne.prototype.ya=function(){et(this.g,"b")};function Hd(){this.blockSize=-1}function Tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Y(Tt,Hd);Tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ei(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Tt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ei(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ei(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ei(this,r),i=0;break}}this.h=i,this.i+=t};Tt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function L(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Kd={};function Ts(e){return-128<=e&&128>e?td(e,function(t){return new L([t|0],0>t?-1:0)}):new L([e|0],0>e?-1:0)}function Rt(e){if(isNaN(e)||!isFinite(e))return _e;if(0>e)return tt(Rt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ni;return new L(t,0)}function Qu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return tt(Qu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rt(Math.pow(t,8)),r=_e,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Rt(Math.pow(t,s)),r=r.R(s).add(Rt(o))):(r=r.R(n),r=r.add(Rt(o)))}return r}var Ni=4294967296,_e=Ts(0),xi=Ts(1),Do=Ts(16777216);m=L.prototype;m.ea=function(){if(vt(this))return-tt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ni+r)*t,t*=Ni}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Nt(this))return"0";if(vt(this))return"-"+tt(this).toString(e);for(var t=Rt(Math.pow(e,6)),n=this,r="";;){var i=sr(n,t).g;n=ir(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Nt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Nt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function vt(e){return e.h==-1}m.X=function(e){return e=ir(this,e),vt(e)?-1:Nt(e)?0:1};function tt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new L(n,~e.h).add(xi)}m.abs=function(){return vt(this)?tt(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new L(n,n[n.length-1]&-2147483648?-1:0)};function ir(e,t){return e.add(tt(t))}m.R=function(e){if(Nt(this)||Nt(e))return _e;if(vt(this))return vt(e)?tt(this).R(tt(e)):tt(tt(this).R(e));if(vt(e))return tt(this.R(tt(e)));if(0>this.X(Do)&&0>e.X(Do))return Rt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Fn(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Fn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new L(n,0)};function Fn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Be(e,t){this.g=e,this.h=t}function sr(e,t){if(Nt(t))throw Error("division by zero");if(Nt(e))return new Be(_e,_e);if(vt(e))return t=sr(tt(e),t),new Be(tt(t.g),tt(t.h));if(vt(t))return t=sr(e,tt(t)),new Be(tt(t.g),t.h);if(30<e.g.length){if(vt(e)||vt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=xi,r=t;0>=r.X(e);)n=bo(n),r=bo(r);var i=ce(n,1),s=ce(r,1);for(r=ce(r,2),n=ce(n,2);!Nt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ce(r,1),n=ce(n,1)}return t=ir(e,i.R(t)),new Be(i,t)}for(i=_e;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rt(n),o=s.R(t);vt(o)||0<o.X(e);)n-=r,s=Rt(n),o=s.R(t);Nt(s)&&(s=xi),i=i.add(s),e=ir(e,o)}return new Be(i,e)}m.gb=function(e){return sr(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new L(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new L(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new L(n,this.h^e.h)};function bo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new L(n,e.h)}function ce(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new L(i,e.h)}rr.prototype.createWebChannel=rr.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Ar.NO_ERROR=0;Ar.TIMEOUT=8;Ar.HTTP_ERROR=6;lu.COMPLETE="complete";du.EventType=wn;wn.OPEN="a";wn.CLOSE="b";wn.ERROR="c";wn.MESSAGE="d";X.prototype.listen=X.prototype.O;q.prototype.listenOnce=q.prototype.P;q.prototype.getLastError=q.prototype.Sa;q.prototype.getLastErrorCode=q.prototype.Ia;q.prototype.getStatus=q.prototype.da;q.prototype.getResponseJson=q.prototype.Wa;q.prototype.getResponseText=q.prototype.ja;q.prototype.send=q.prototype.ha;q.prototype.setWithCredentials=q.prototype.Oa;Tt.prototype.digest=Tt.prototype.l;Tt.prototype.reset=Tt.prototype.reset;Tt.prototype.update=Tt.prototype.j;L.prototype.add=L.prototype.add;L.prototype.multiply=L.prototype.R;L.prototype.modulo=L.prototype.gb;L.prototype.compare=L.prototype.X;L.prototype.toNumber=L.prototype.ea;L.prototype.toString=L.prototype.toString;L.prototype.getBits=L.prototype.D;L.fromNumber=Rt;L.fromString=Qu;var Gd=function(){return new rr},Qd=function(){return Ir()},ni=Ar,Wd=lu,Xd=ue,ko={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Un=du,Yd=q,Jd=Tt,ye=L;const No="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xe="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new $a("@firebase/firestore");function je(){return se.logLevel}function _(e,...t){if(se.logLevel<=k.DEBUG){const n=t.map(ws);se.debug(`Firestore (${xe}): ${e}`,...n)}}function Ct(e,...t){if(se.logLevel<=k.ERROR){const n=t.map(ws);se.error(`Firestore (${xe}): ${e}`,...n)}}function Re(e,...t){if(se.logLevel<=k.WARN){const n=t.map(ws);se.warn(`Firestore (${xe}): ${e}`,...n)}}function ws(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e="Unexpected state"){const t=`FIRESTORE (${xe}) INTERNAL ASSERTION FAILED: `+e;throw Ct(t),new Error(t)}function G(e,t){e||D()}function O(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends be{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class tf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ef{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new Wu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new st(t)}}class nf{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rf{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new nf(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class of{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(G(typeof n.token=="string"),this.R=n.token,new sf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=af(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function M(e,t){return e<t?-1:e>t?1:0}function Se(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ft.fromMillis(Date.now())}static fromDate(t){return ft.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?M(this.nanoseconds,t.nanoseconds):M(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new ft(0,0))}static max(){return new P(new ft(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,n,r){n===void 0?n=0:n>t.length&&D(),r===void 0?r=t.length-n:r>t.length-n&&D(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return pn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof pn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class j extends pn{construct(t,n,r){return new j(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new v(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new j(n)}static emptyPath(){return new j([])}}const cf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends pn{construct(t,n,r){return new lt(t,n,r)}static isValidIdentifier(t){return cf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new v(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new v(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new v(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(j.fromString(t))}static fromName(t){return new w(j.fromString(t).popFirst(5))}static empty(){return new w(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&j.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return j.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new j(t.slice()))}}function hf(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new ft(n+1,0):new ft(n,r));return new jt(i,w.empty(),t)}function lf(e){return new jt(e.readTime,e.key,-1)}class jt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new jt(P.min(),w.empty(),-1)}static max(){return new jt(P.max(),w.empty(),-1)}}function df(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:M(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==ff)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(i=>i?p.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new p((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new p((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Bt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Xe(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Rs(r.target.error);this.V.reject(new Xe(t,i))}}static open(t,n,r,i){try{return new As(n,t.transaction(i,r))}catch(s){throw new Xe(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new mf(n)}}class Zt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Zt.S(Yn())===12.2&&Ct("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Xt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Fa())return!1;if(Zt.C())return!0;const t=Yn(),n=Zt.S(t),r=0<n&&n<10,i=Zt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Xe(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new v(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new v(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Xe(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=As.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),p.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class gf{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Xt(this.k.delete())}}class Xe extends v{constructor(t,n){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Cn(e){return e.name==="IndexedDbTransactionError"}class mf{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(_("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Xt(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Xt(this.store.add(t))}get(t){return Xt(this.store.get(t)).next(n=>(n===void 0&&(n=null),_("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Xt(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Xt(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new p((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new p((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new p((r,i)=>{n.onerror=s=>{const o=Rs(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new p((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new gf(a),c=n(a.primaryKey,a.value,u);if(c instanceof p){const h=c.catch(l=>(u.done(),p.reject(l)));r.push(h)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>p.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Xt(e){return new p((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=Rs(r.target.error);n(i)}})}let xo=!1;function Rs(e){const t=Zt.S(Yn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new v("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xo||(xo=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Ss._e=-1;function Nr(e){return e==null}function Oi(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _f(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,n){this.comparator=t,this.root=n||Z.EMPTY}insert(t,n){return new z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(t){return new z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $n(this.root,t,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $n(this.root,t,this.comparator,!0)}}class $n{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Z{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Z.RED,this.left=i??Z.EMPTY,this.right=s??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Z(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Z.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const t=this.left.check();if(t!==this.right.check())throw D();return t+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Z(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(t){return new Mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new nt(this.comparator);return n.data=t,n}}class Mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Lt([])}unionWith(t){let n=new nt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Lt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Xu("Invalid base64 string: "+s):s}}(t);return new ct(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ct(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const yf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(e){if(G(!!e),typeof e=="string"){let t=0;const n=yf.exec(e);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:K(e.seconds),nanos:K(e.nanos)}}function K(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function oe(e){return typeof e=="string"?ct.fromBase64String(e):ct.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ps(e){const t=e.mapValue.fields.__previous_value__;return Cs(t)?Ps(t):t}function gn(e){const t=qt(e.mapValue.fields.__local_write_time__.timestampValue);return new ft(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,n,r,i,s,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class mn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cs(e)?4:Ef(e)?9007199254740991:10:D()}function Pt(e,t){if(e===t)return!0;const n=ae(e);if(n!==ae(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return gn(e).isEqual(gn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qt(i.timestampValue),a=qt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return oe(i.bytesValue).isEqual(oe(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return K(i.geoPointValue.latitude)===K(s.geoPointValue.latitude)&&K(i.geoPointValue.longitude)===K(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return K(i.integerValue)===K(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=K(i.doubleValue),a=K(s.doubleValue);return o===a?Oi(o)===Oi(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Se(e.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Oo(o)!==Oo(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Pt(o[u],a[u])))return!1;return!0}(e,t);default:return D()}}function _n(e,t){return(e.values||[]).find(n=>Pt(n,t))!==void 0}function Ce(e,t){if(e===t)return 0;const n=ae(e),r=ae(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=K(s.integerValue||s.doubleValue),u=K(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Lo(e.timestampValue,t.timestampValue);case 4:return Lo(gn(e),gn(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(s,o){const a=oe(s),u=oe(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=M(a[c],u[c]);if(h!==0)return h}return M(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=M(K(s.latitude),K(o.latitude));return a!==0?a:M(K(s.longitude),K(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=Ce(a[c],u[c]);if(h)return h}return M(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Bn.mapValue&&o===Bn.mapValue)return 0;if(s===Bn.mapValue)return 1;if(o===Bn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let l=0;l<u.length&&l<h.length;++l){const f=M(u[l],h[l]);if(f!==0)return f;const d=Ce(a[u[l]],c[h[l]]);if(d!==0)return d}return M(u.length,h.length)}(e.mapValue,t.mapValue);default:throw D()}}function Lo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return M(e,t);const n=qt(e),r=qt(t),i=M(n.seconds,r.seconds);return i!==0?i:M(n.nanos,r.nanos)}function Pe(e){return Mi(e)}function Mi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=qt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return oe(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return w.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mi(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mi(n.fields[o])}`;return i+"}"}(e.mapValue):D()}function Li(e){return!!e&&"integerValue"in e}function Vs(e){return!!e&&"arrayValue"in e}function Fo(e){return!!e&&"nullValue"in e}function Uo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ri(e){return!!e&&"mapValue"in e}function Ye(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ye(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ye(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ef(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ri(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ye(n)}setAll(t){let n=lt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ye(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());ri(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];ri(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){xr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new It(Ye(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ot(t,0,P.min(),P.min(),P.min(),It.empty(),0)}static newFoundDocument(t,n,r,i){return new ot(t,1,n,P.min(),r,i,0)}static newNoDocument(t,n){return new ot(t,2,n,P.min(),P.min(),It.empty(),0)}static newUnknownDocument(t,n){return new ot(t,3,n,P.min(),P.min(),It.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,n){this.position=t,this.inclusive=n}}function $o(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),n.key):r=Ce(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Pt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,n="asc"){this.field=t,this.dir=n}}function Tf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{}class Q extends Yu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new If(t,n,r):n==="array-contains"?new Sf(t,r):n==="in"?new Cf(t,r):n==="not-in"?new Pf(t,r):n==="array-contains-any"?new Vf(t,r):new Q(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Af(t,r):new Rf(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ce(n,this.value)):n!==null&&ae(this.value)===ae(n)&&this.matchesComparison(Ce(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Yu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Vt(t,n)}matches(t){return Ju(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ju(e){return e.op==="and"}function Zu(e){return wf(e)&&Ju(e)}function wf(e){for(const t of e.filters)if(t instanceof Vt)return!1;return!0}function Fi(e){if(e instanceof Q)return e.field.canonicalString()+e.op.toString()+Pe(e.value);if(Zu(e))return e.filters.map(t=>Fi(t)).join(",");{const t=e.filters.map(n=>Fi(n)).join(",");return`${e.op}(${t})`}}function tc(e,t){return e instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(e,t):e instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tc(o,i.filters[a]),!0):!1}(e,t):void D()}function ec(e){return e instanceof Q?function(n){return`${n.field.canonicalString()} ${n.op} ${Pe(n.value)}`}(e):e instanceof Vt?function(n){return n.op.toString()+" {"+n.getFilters().map(ec).join(" ,")+"}"}(e):"Filter"}class If extends Q{constructor(t,n,r){super(t,n,r),this.key=w.fromName(r.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Af extends Q{constructor(t,n){super(t,"in",n),this.keys=nc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Rf extends Q{constructor(t,n){super(t,"not-in",n),this.keys=nc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function nc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>w.fromName(r.referenceValue))}class Sf extends Q{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Vs(n)&&_n(n.arrayValue,this.value)}}class Cf extends Q{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&_n(this.value.arrayValue,n)}}class Pf extends Q{constructor(t,n){super(t,"not-in",n)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!_n(this.value.arrayValue,n)}}class Vf extends Q{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Vs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_n(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function jo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Df(e,t,n,r,i,s,o)}function Ds(e){const t=O(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Fi(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Pe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Pe(r)).join(",")),t.ce=n}return t.ce}function bs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Tf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!tc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Bo(e.startAt,t.startAt)&&Bo(e.endAt,t.endAt)}function Ui(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function bf(e,t,n,r,i,s,o,a){return new Or(e,t,n,r,i,s,o,a)}function rc(e){return new Or(e)}function qo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function kf(e){return e.collectionGroup!==null}function Je(e){const t=O(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new ar(s,r))}),n.has(lt.keyField().canonicalString())||t.le.push(new ar(lt.keyField(),r))}return t.le}function St(e){const t=O(e);return t.he||(t.he=Nf(t,Je(e))),t.he}function Nf(e,t){if(e.limitType==="F")return jo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ar(i.field,s)});const n=e.endAt?new or(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new or(e.startAt.position,e.startAt.inclusive):null;return jo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function $i(e,t,n){return new Or(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Mr(e,t){return bs(St(e),St(t))&&e.limitType===t.limitType}function ic(e){return`${Ds(St(e))}|lt:${e.limitType}`}function he(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ec(i)).join(", ")}]`),Nr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Pe(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Pe(i)).join(",")),`Target(${r})`}(St(e))}; limitType=${e.limitType})`}function Lr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Je(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=$o(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Je(r),i)||r.endAt&&!function(o,a,u){const c=$o(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Je(r),i))}(e,t)}function xf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function sc(e){return(t,n)=>{let r=!1;for(const i of Je(e)){const s=Of(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Of(e,t,n){const r=e.field.isKeyField()?w.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ce(u,c):D()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return D()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){xr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return _f(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new z(w.comparator);function zt(){return Mf}const oc=new z(w.comparator);function Ke(...e){let t=oc;for(const n of e)t=t.insert(n.key,n);return t}function Lf(e){let t=oc;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function te(){return Ze()}function ac(){return Ze()}function Ze(){return new Oe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ff=new nt(w.comparator);function N(...e){let t=Ff;for(const n of e)t=t.add(n);return t}const Uf=new nt(M);function $f(){return Uf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oi(t)?"-0":t}}function jf(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this._=void 0}}function qf(e,t,n){return e instanceof Bi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cs(s)&&(s=Ps(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof ur?uc(e,t):e instanceof cr?cc(e,t):function(i,s){const o=Hf(i,s),a=zo(o)+zo(i.Ie);return Li(o)&&Li(i.Ie)?jf(a):Bf(i.serializer,a)}(e,t)}function zf(e,t,n){return e instanceof ur?uc(e,t):e instanceof cr?cc(e,t):n}function Hf(e,t){return e instanceof ji?function(r){return Li(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Bi extends Fr{}class ur extends Fr{constructor(t){super(),this.elements=t}}function uc(e,t){const n=hc(t);for(const r of e.elements)n.some(i=>Pt(i,r))||n.push(r);return{arrayValue:{values:n}}}class cr extends Fr{constructor(t){super(),this.elements=t}}function cc(e,t){let n=hc(t);for(const r of e.elements)n=n.filter(i=>!Pt(i,r));return{arrayValue:{values:n}}}class ji extends Fr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function zo(e){return K(e.integerValue||e.doubleValue)}function hc(e){return Vs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Kf(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof ur&&i instanceof ur||r instanceof cr&&i instanceof cr?Se(r.elements,i.elements,Pt):r instanceof ji&&i instanceof ji?Pt(r.Ie,i.Ie):r instanceof Bi&&i instanceof Bi}(e.transform,t.transform)}class re{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new re}static exists(t){return new re(void 0,t)}static updateTime(t){return new re(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Kn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ks{}function lc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Qf(e.key,re.none()):new Ns(e.key,e.data,re.none());{const n=e.data,r=It.empty();let i=new nt(lt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(e.key,r,new Lt(i.toArray()),re.none())}}function Gf(e,t,n){e instanceof Ns?function(i,s,o){const a=i.value.clone(),u=Ko(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ur?function(i,s,o){if(!Kn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ko(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dc(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function tn(e,t,n,r){return e instanceof Ns?function(s,o,a,u){if(!Kn(s.precondition,o))return a;const c=s.value.clone(),h=Go(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ur?function(s,o,a,u){if(!Kn(s.precondition,o))return a;const c=Go(s.fieldTransforms,u,o),h=o.data;return h.setAll(dc(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(s,o,a){return Kn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Ho(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Se(r,i,(s,o)=>Kf(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ns extends ks{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends ks{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ko(e,t,n){const r=new Map;G(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,zf(o,a,n[i]))}return r}function Go(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qf(s,o,t))}return r}class Qf extends ks{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Gf(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=tn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=tn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ac();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=lc(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,(n,r)=>Ho(n,r))&&Se(this.baseMutations,t.baseMutations,(n,r)=>Ho(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H,b;function fc(e){if(e===void 0)return Ct("GRPC error has no .code"),g.UNKNOWN;switch(e){case H.OK:return g.OK;case H.CANCELLED:return g.CANCELLED;case H.UNKNOWN:return g.UNKNOWN;case H.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case H.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case H.INTERNAL:return g.INTERNAL;case H.UNAVAILABLE:return g.UNAVAILABLE;case H.UNAUTHENTICATED:return g.UNAUTHENTICATED;case H.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case H.NOT_FOUND:return g.NOT_FOUND;case H.ALREADY_EXISTS:return g.ALREADY_EXISTS;case H.PERMISSION_DENIED:return g.PERMISSION_DENIED;case H.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case H.ABORTED:return g.ABORTED;case H.OUT_OF_RANGE:return g.OUT_OF_RANGE;case H.UNIMPLEMENTED:return g.UNIMPLEMENTED;case H.DATA_LOSS:return g.DATA_LOSS;default:return D()}}(b=H||(H={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new ye([4294967295,4294967295],0);function Qo(e){const t=Jf().encode(e),n=new Jd;return n.update(t),new Uint8Array(n.digest())}function Wo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ye([n,r],0),new ye([i,s],0)]}class xs{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ge(`Invalid padding: ${n}`);if(r<0)throw new Ge(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ge(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ge(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ye.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(ye.fromNumber(r)));return i.compare(Zf)===1&&(i=new ye([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Qo(t),[r,i]=Wo(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new xs(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Qo(t),[r,i]=Wo(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ge extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new $r(P.min(),i,new z(M),zt(),N())}}class Pn{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Pn(r,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class pc{constructor(t,n){this.targetId=t,this.fe=n}}class gc{constructor(t,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xo{constructor(){this.ge=0,this.pe=Jo(),this.ye=ct.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=N(),n=N(),r=N();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:D()}}),new Pn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Jo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,G(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class tp{constructor(t){this.Le=t,this.ke=new Map,this.qe=zt(),this.Qe=Yo(),this.Ke=new z(M)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:D()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Ui(s))if(r===0){const o=new w(s.path);this.We(n,o,ot.newNoDocument(o,P.min()))}else G(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=oe(r).toUint8Array()}catch(u){if(u instanceof Xu)return Re("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new xs(o,i,s)}catch(u){return Re(u instanceof Ge?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ui(a.target)){const u=new w(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,ot.newNoDocument(u,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=N();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new $r(t,n,this.Ke,this.qe,r);return this.qe=zt(),this.Qe=Yo(),this.Ke=new z(M),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Xo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new nt(M),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Xo),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Yo(){return new z(w.comparator)}function Jo(){return new z(w.comparator)}const ep={asc:"ASCENDING",desc:"DESCENDING"},np={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rp={and:"AND",or:"OR"};class ip{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function qi(e,t){return e.useProto3Json||Nr(t)?t:{value:t}}function sp(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function op(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ve(e){return G(!!e),P.fromTimestamp(function(n){const r=qt(n);return new ft(r.seconds,r.nanos)}(e))}function ap(e,t){return zi(e,t).canonicalString()}function zi(e,t){const n=function(i){return new j(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function mc(e){const t=j.fromString(e);return G(Tc(t)),t}function ii(e,t){const n=mc(t);if(n.get(1)!==e.databaseId.projectId)throw new v(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(yc(n))}function _c(e,t){return ap(e.databaseId,t)}function up(e){const t=mc(e);return t.length===4?j.emptyPath():yc(t)}function Zo(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yc(e){return G(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function cp(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:D()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(G(h===void 0||typeof h=="string"),ct.fromBase64String(h||"")):(G(h===void 0||h instanceof Uint8Array),ct.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?g.UNKNOWN:fc(c.code);return new v(h,c.message||"")}(o);n=new gc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ii(e,r.document.name),s=ve(r.document.updateTime),o=r.document.createTime?ve(r.document.createTime):P.min(),a=new It({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Gn(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ii(e,r.document),s=r.readTime?ve(r.readTime):P.min(),o=ot.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Gn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ii(e,r.document),s=r.removedTargetIds||[];n=new Gn([],s,i,null)}else{if(!("filter"in t))return D();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Yf(i,s),a=r.targetId;n=new pc(a,o)}}return n}function hp(e,t){return{documents:[_c(e,t.path)]}}function lp(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_c(e,i);const s=function(c){if(c.length!==0)return Ec(Vt.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(f){return{field:le(f.field),direction:pp(f.dir)}}(h))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=qi(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:i}}function dp(e){let t=up(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){G(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(l){const f=vc(l);return f instanceof Vt&&Zu(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(f=>function(E){return new ar(de(E.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,Nr(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(l){const f=!!l.before,d=l.values||[];return new or(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const f=!l.before,d=l.values||[];return new or(d,f)}(n.endAt)),bf(t,i,o,s,a,"F",u,c)}function fp(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return D()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function vc(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=de(n.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=de(n.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=de(n.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=de(n.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(e):e.fieldFilter!==void 0?function(n){return Q.create(de(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Vt.create(n.compositeFilter.filters.map(r=>vc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return D()}}(n.compositeFilter.op))}(e):D()}function pp(e){return ep[e]}function gp(e){return np[e]}function mp(e){return rp[e]}function le(e){return{fieldPath:e.canonicalString()}}function de(e){return lt.fromServerFormat(e.fieldPath)}function Ec(e){return e instanceof Q?function(n){if(n.op==="=="){if(Uo(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NAN"}};if(Fo(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uo(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NOT_NAN"}};if(Fo(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:le(n.field),op:gp(n.op),value:n.value}}}(e):e instanceof Vt?function(n){const r=n.getFilters().map(i=>Ec(i));return r.length===1?r[0]:{compositeFilter:{op:mp(n.op),filters:r}}}(e):D()}function Tc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,n,r,i,s=P.min(),o=P.min(),a=ct.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ft(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t){this.ct=t}}function yp(e){const t=dp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?$i(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this._n=new Ep}addToCollectionParentIndex(t,n){return this._n.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(jt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(jt.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class Ep{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new nt(j.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new nt(j.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ve(0)}static Bn(){return new Ve(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.changes=new Oe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ot.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&tn(r.mutation,i,Lt.empty(),ft.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,N()).next(()=>r))}getLocalViewOfDocuments(t,n,r=N()){const i=te();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ke();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=te();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,N()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=zt();const o=Ze(),a=function(){return Ze()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ur)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),tn(h.mutation,c,h.mutation.getFieldMask(),ft.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new wp(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ze();let i=new z((o,a)=>o-a),s=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Lt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const l=(i.get(a.batchId)||N()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=ac();h.forEach(f=>{if(!s.has(f)){const d=lc(n.get(f),r.get(f));d!==null&&l.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):kf(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):p.resolve(te());let a=-1,u=s;return o.next(c=>p.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),s.get(h)?p.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,N())).next(h=>({batchId:a,changes:Lf(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(r=>{let i=Ke();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Ke();return this.indexManager.getCollectionParents(t,s).next(a=>p.forEach(a,u=>{const c=function(l,f){return new Or(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(h=>{h.forEach((l,f)=>{o=o.insert(l,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ot.newInvalidDocument(h)))});let a=Ke();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&tn(h.mutation,c,Lt.empty(),ft.now()),Lr(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return p.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ve(i.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:yp(i.bundledQuery),readTime:ve(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.overlays=new z(w.comparator),this.hr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=te();return p.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const i=te(),s=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new z((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=te(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=te(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return p.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xf(n,r));let s=this.hr.get(n);s===void 0&&(s=N(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.Pr=new nt(W.Ir),this.Tr=new nt(W.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new W(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new W(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new w(new j([])),r=new W(n,t),i=new W(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new w(new j([])),r=new W(n,t),i=new W(n,t+1);let s=N();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new W(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class W{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return w.comparator(t.key,n.key)||M(t.pr,n.pr)}static Er(t,n){return M(t.pr,n.pr)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new nt(W.Ir)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wf(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new W(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new W(n,0),i=new W(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new nt(M);return n.forEach(i=>{const s=new W(i,0),o=new W(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),p.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new W(new w(s),0);let a=new nt(M);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){G(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return p.forEach(n.mutations,i=>{const s=new W(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new W(n,0),i=this.wr.firstAfterOrEqual(r);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t){this.vr=t,this.docs=function(){return new z(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(t,n){let r=zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=zt();const o=n.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||df(lf(h),r)<=0||(i.has(h.key)||Lr(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,n,r,i){D()}Fr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Pp(this)}getSize(t){return p.resolve(this.size)}}class Pp extends Tp{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t){this.persistence=t,this.Mr=new Oe(n=>Ds(n),bs),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Os,this.targetCount=0,this.Br=Ve.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),p.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Ve(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.qn(n),p.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Ss(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Vp(this),this.indexManager=new vp,this.remoteDocumentCache=function(i){return new Cp(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new _p(n),this.$r=new Ap(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Rp,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Sp(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const i=new bp(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return p.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class bp extends pf{constructor(t){super(),this.currentSequenceNumber=t}}class Ms{constructor(t){this.persistence=t,this.zr=new Os,this.jr=null}static Hr(t){return new Ms(t)}get Jr(){if(this.jr)return this.jr;throw D()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),p.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,r=>{const i=w.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,P.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return p.or([()=>p.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=N(),i=N();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ls(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return bh()?8:Zt.v(Yn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kp;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(je()<=k.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",he(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(je()<=k.DEBUG&&_("QueryEngine","Query:",he(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(je()<=k.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",he(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(n))):p.resolve())}ji(t,n){if(qo(n))return p.resolve(null);let r=St(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$i(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=N(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(t,$i(n,null,"F")):this.es(t,c,n,u)}))})))}Hi(t,n,r,i){return qo(n)||i.isEqual(P.min())?p.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?p.resolve(null):(je()<=k.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),he(n)),this.es(t,o,n,hf(i,-1)).next(a=>a))})}Zi(t,n){let r=new nt(sc(t));return n.forEach((i,s)=>{Lr(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return je()<=k.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",he(n)),this.zi.getDocumentsMatchingQuery(t,n,jt.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new z(M),this.rs=new Oe(s=>Ds(s),bs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ip(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Op(e,t,n,r){return new xp(e,t,n,r)}async function wc(e,t){const n=O(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=N();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ic(e){const t=O(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Mp(e,t){const n=O(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((h,l)=>{const f=i.get(l);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,l).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,l)));let d=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(l)!==null?d=d.withResumeToken(ct.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):h.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(h.resumeToken,r)),i=i.insert(l,d),function(S,y,V){return S.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(f,d,h)&&a.push(n.Qr.updateTargetData(s,d))});let u=zt(),c=N();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Lp(s,o,t.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(P.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(l=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function Lp(e,t,n){let r=N(),i=N();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=zt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(P.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Fp(e,t){const n=O(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,p.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ft(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Hi(e,t,n){const r=O(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function ta(e,t,n){const r=O(e);let i=P.min(),s=N();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const l=O(u),f=l.rs.get(h);return f!==void 0?p.resolve(l.ns.get(f)):l.Qr.getTargetData(c,h)}(r,o,St(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:P.min(),n?s:N())).next(a=>(Up(r,xf(t),a),{documents:a,hs:s})))}function Up(e,t,n){let r=e.ss.get(t)||P.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class ea{constructor(){this.activeTargetIds=$f()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $p{constructor(){this.no=new ea,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ea,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn=null;function si(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class zp extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=si(),u=this.bo(n,r.toUriEncodedString());_("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,u,c,i).then(h=>(_("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Re("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=jp[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=si();return new Promise((o,a)=>{const u=new Yd;u.setWithCredentials(!0),u.listenOnce(Wd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ni.NO_ERROR:const h=u.getResponseJson();_(it,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case ni.TIMEOUT:_(it,`RPC '${t}' ${s} timed out`),a(new v(g.DEADLINE_EXCEEDED,"Request time out"));break;case ni.HTTP_ERROR:const l=u.getStatus();if(_(it,`RPC '${t}' ${s} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const E=function(y){const V=y.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(V)>=0?V:g.UNKNOWN}(d.status);a(new v(E,d.message))}else a(new v(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new v(g.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{_(it,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);_(it,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Fo(t,n,r){const i=si(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Gd(),a=Qd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");_(it,`Creating RPC '${t}' stream ${i}: ${h}`,u);const l=o.createWebChannel(h,u);let f=!1,d=!1;const E=new qp({lo:y=>{d?_(it,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(f||(_(it,`Opening RPC '${t}' stream ${i} transport.`),l.open(),f=!0),_(it,`RPC '${t}' stream ${i} sending:`,y),l.send(y))},ho:()=>l.close()}),S=(y,V,x)=>{y.listen(V,$=>{try{x($)}catch(J){setTimeout(()=>{throw J},0)}})};return S(l,Un.EventType.OPEN,()=>{d||_(it,`RPC '${t}' stream ${i} transport opened.`)}),S(l,Un.EventType.CLOSE,()=>{d||(d=!0,_(it,`RPC '${t}' stream ${i} transport closed`),E.Vo())}),S(l,Un.EventType.ERROR,y=>{d||(d=!0,Re(it,`RPC '${t}' stream ${i} transport errored:`,y),E.Vo(new v(g.UNAVAILABLE,"The operation could not be completed")))}),S(l,Un.EventType.MESSAGE,y=>{var V;if(!d){const x=y.data[0];G(!!x);const $=x,J=$.error||((V=$[0])===null||V===void 0?void 0:V.error);if(J){_(it,`RPC '${t}' stream ${i} received error:`,J);const pt=J.status;let ht=function(I){const F=H[I];if(F!==void 0)return fc(F)}(pt),Et=J.message;ht===void 0&&(ht=g.INTERNAL,Et="Unknown error status: "+pt+" with message "+J.message),d=!0,E.Vo(new v(ht,Et)),l.close()}else _(it,`RPC '${t}' stream ${i} received:`,x),E.mo(x)}}),S(a,Xd.STAT_EVENT,y=>{y.stat===ko.PROXY?_(it,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===ko.NOPROXY&&_(it,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function oi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e){return new ip(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,n,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Rc(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Ct(n.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new v(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kp extends Hp{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=cp(this.serializer,t),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?ve(o.readTime):P.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Zo(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Ui(u)?{documents:hp(s,u)}:{query:lp(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=op(s,o.resumeToken);const c=qi(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=sp(s,o.snapshotVersion.toTimestamp());const c=qi(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=fp(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Zo(this.serializer),n.removeTarget=t,this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new v(g.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,zi(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new v(g.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,zi(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new v(g.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Qp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ct(n),this.g_=!1):_("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Dn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=O(u);c.v_.add(4),await Vn(c),c.x_.set("Unknown"),c.v_.delete(4),await Br(c)}(this))})}),this.x_=new Qp(r,i)}}async function Br(e){if(Dn(e))for(const t of e.F_)await t(!0)}async function Vn(e){for(const t of e.F_)await t(!1)}function Sc(e,t){const n=O(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),$s(n)?Us(n):Me(n).Jo()&&Fs(n,t))}function Cc(e,t){const n=O(e),r=Me(n);n.C_.delete(t),r.Jo()&&Pc(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Dn(n)&&n.x_.set("Unknown"))}function Fs(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Me(e).c_(t)}function Pc(e,t){e.O_.Oe(t),Me(e).l_(t)}function Us(e){e.O_=new tp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Me(e).start(),e.x_.p_()}function $s(e){return Dn(e)&&!Me(e).Ho()&&e.C_.size>0}function Dn(e){return O(e).v_.size===0}function Vc(e){e.O_=void 0}async function Xp(e){e.C_.forEach((t,n)=>{Fs(e,t)})}async function Yp(e,t){Vc(e),$s(e)?(e.x_.S_(t),Us(e)):e.x_.set("Unknown")}async function Jp(e,t,n){if(e.x_.set("Online"),t instanceof gc&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ra(e,r)}else if(t instanceof Gn?e.O_.$e(t):t instanceof pc?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(P.min()))try{const r=await Ic(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.C_.get(c);h&&s.C_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.C_.get(u);if(!h)return;s.C_.set(u,h.withResumeToken(ct.EMPTY_BYTE_STRING,h.snapshotVersion)),Pc(s,u);const l=new Ft(h.target,u,c,h.sequenceNumber);Fs(s,l)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await ra(e,r)}}async function ra(e,t,n){if(!Cn(t))throw t;e.v_.add(1),await Vn(e),e.x_.set("Offline"),n||(n=()=>Ic(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Br(e)})}async function ia(e,t){const n=O(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Dn(n);n.v_.add(3),await Vn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Br(n)}async function Zp(e,t){const n=O(e);t?(n.v_.delete(2),await Br(n)):t||(n.v_.add(2),await Vn(n),n.x_.set("Unknown"))}function Me(e){return e.N_||(e.N_=function(n,r,i){const s=O(n);return s.R_(),new Kp(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Xp.bind(null,e),To:Yp.bind(null,e),u_:Jp.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),$s(e)?Us(e):e.x_.set("Unknown")):(await e.N_.stop(),Vc(e))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Bs(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dc(e,t){if(Ct("AsyncQueue",`${t}: ${e}`),Cn(e))return new v(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.comparator=t?(n,r)=>t(n,r)||w.comparator(n.key,r.key):(n,r)=>w.comparator(n.key,r.key),this.keyedMap=Ke(),this.sortedSet=new z(this.comparator)}static emptySet(t){return new Ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ee)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ee;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.L_=new z(w.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):D():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class De{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new De(t,n,Ee.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Mr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.q_=void 0,this.Q_=[]}}class eg{constructor(){this.queries=new Oe(t=>ic(t),Mr),this.onlineState="Unknown",this.K_=new Set}}async function ng(e,t){const n=O(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new tg),i)try{s.q_=await n.onListen(r)}catch(o){const a=Dc(o,`Initialization of query '${he(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&js(n)}async function rg(e,t){const n=O(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ig(e,t){const n=O(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&js(n)}function sg(e,t,n){const r=O(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function js(e){e.K_.forEach(t=>{t.next()})}class og{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new De(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=De.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.key=t}}class kc{constructor(t){this.key=t}}class ag{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=N(),this.mutatedKeys=N(),this.ua=sc(t),this.ca=new Ee(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new sa,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const f=i.get(h),d=Lr(this.query,l)?l:null,E=!!f&&this.mutatedKeys.has(f.key),S=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?E!==S&&(r.track({type:3,doc:d}),y=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),y=!0,(u&&this.ua(d,u)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(u||c)&&(a=!0)),y&&(d?(o=o.add(d),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((h,l)=>function(d,E){const S=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return S(d)-S(E)}(h.type,l.type)||this.ua(h.doc,l.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],u=this.aa.size===0&&this.current&&!i?1:0,c=u!==this._a;return this._a=u,o.length!==0||c?{snapshot:new De(this.query,t.ca,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new sa,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=N(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new kc(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new bc(r))}),n}Ra(t){this.oa=t.hs,this.aa=N();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return De.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class ug{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class cg{constructor(t){this.key=t,this.ma=!1}}class hg{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Oe(a=>ic(a),Mr),this.pa=new Map,this.ya=new Set,this.wa=new z(w.comparator),this.Sa=new Map,this.ba=new Os,this.Da={},this.Ca=new Map,this.va=Ve.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function lg(e,t){const n=yg(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Fp(n.localStore,St(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await dg(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Sc(n.remoteStore,o)}return i}async function dg(e,t,n,r,i){e.Ma=(l,f,d)=>async function(S,y,V,x){let $=y.view.ha(V);$.Xi&&($=await ta(S.localStore,y.query,!1).then(({documents:Et})=>y.view.ha(Et,$)));const J=x&&x.targetChanges.get(y.targetId),pt=x&&x.targetMismatches.get(y.targetId)!=null,ht=y.view.applyChanges($,S.isPrimaryClient,J,pt);return aa(S,y.targetId,ht.da),ht.snapshot}(e,l,f,d);const s=await ta(e.localStore,t,!0),o=new ag(t,s.hs),a=o.ha(s.documents),u=Pn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);aa(e,n,c.da);const h=new ug(t,n,o);return e.ga.set(t,h),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function fg(e,t){const n=O(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Mr(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Cc(n.remoteStore,r.targetId),Ki(n,r.targetId)}).catch(Is)):(Ki(n,r.targetId),await Hi(n.localStore,r.targetId,!0))}async function Nc(e,t){const n=O(e);try{const r=await Mp(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?G(o.ma):i.removedDocuments.size>0&&(G(o.ma),o.ma=!1))}),await Oc(n,r,t)}catch(r){await Is(r)}}function oa(e,t,n){const r=O(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=O(o);u.onlineState=a;let c=!1;u.queries.forEach((h,l)=>{for(const f of l.Q_)f.U_(a)&&(c=!0)}),c&&js(u)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pg(e,t,n){const r=O(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new z(w.comparator);o=o.insert(s,ot.newNoDocument(s,P.min()));const a=N().add(s),u=new $r(P.min(),new Map,new z(M),o,a);await Nc(r,u),r.wa=r.wa.remove(s),r.Sa.delete(t),qs(r)}else await Hi(r.localStore,t,!1).then(()=>Ki(r,t,n)).catch(Is)}function Ki(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||xc(e,r)})}function xc(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(Cc(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),qs(e))}function aa(e,t,n){for(const r of n)r instanceof bc?(e.ba.addReference(r.key,t),gg(e,r)):r instanceof kc?(_("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||xc(e,r.key)):D()}function gg(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(_("SyncEngine","New document in limbo: "+n),e.ya.add(r),qs(e))}function qs(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new w(j.fromString(t)),r=e.va.next();e.Sa.set(r,new cg(n)),e.wa=e.wa.insert(n,r),Sc(e.remoteStore,new Ft(St(rc(n.path)),r,"TargetPurposeLimboResolution",Ss._e))}}async function Oc(e,t,n){const r=O(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Ls.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.fa.u_(i),await async function(u,c){const h=O(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,f=>p.forEach(f.qi,d=>h.persistence.referenceDelegate.addReference(l,f.targetId,d)).next(()=>p.forEach(f.Qi,d=>h.persistence.referenceDelegate.removeReference(l,f.targetId,d)))))}catch(l){if(!Cn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const f=l.targetId;if(!l.fromCache){const d=h.ns.get(f),E=d.snapshotVersion,S=d.withLastLimboFreeSnapshotVersion(E);h.ns=h.ns.insert(f,S)}}}(r.localStore,s))}async function mg(e,t){const n=O(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await wc(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new v(g.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Oc(n,r.us)}}function _g(e,t){const n=O(e),r=n.Sa.get(t);if(r&&r.ma)return N().add(r.key);{let i=N();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function yg(e){const t=O(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Nc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_g.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pg.bind(null,t),t.fa.u_=ig.bind(null,t.eventManager),t.fa.xa=sg.bind(null,t.eventManager),t}class ua{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ac(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Op(this.persistence,new Np,t.initialUser,this.serializer)}createPersistence(t){return new Dp(Ms.Hr,this.serializer)}createSharedClientState(t){return new $p}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mg.bind(null,this.syncEngine),await Zp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new eg}()}createDatastore(t){const n=Ac(t.databaseInfo.databaseId),r=function(s){return new zp(s)}(t.databaseInfo);return function(s,o,a,u){return new Gp(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Wp(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>oa(this.syncEngine,n,0),function(){return na.D()?new na:new Bp}())}createSyncEngine(t,n){return function(i,s,o,a,u,c,h){const l=new hg(i,s,o,a,u,c);return h&&(l.Fa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=O(r);_("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Vn(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Ct("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Dc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ai(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ca(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ig(e);_("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>ia(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>ia(t.remoteStore,i)),e._onlineComponents=t}function wg(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Ig(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await ai(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!wg(n))throw n;Re("Error using user provided cache. Falling back to memory cache: "+n),await ai(e,new ua)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await ai(e,new ua);return e._offlineComponents}async function Ag(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await ca(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await ca(e,new vg))),e._onlineComponents}async function Rg(e){const t=await Ag(e),n=t.eventManager;return n.onListen=lg.bind(null,t.syncEngine),n.onUnlisten=fg.bind(null,t.syncEngine),n}function Sg(e,t,n={}){const r=new Bt;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Eg({next:f=>{o.enqueueAndForget(()=>rg(s,l)),f.fromCache&&u.source==="server"?c.reject(new v(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),l=new og(a,h,{includeMetadataChanges:!0,Z_:!0});return ng(s,l)}(await Rg(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(e,t,n){if(!n)throw new v(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Pg(e,t,n,r){if(t===!0&&r===!0)throw new v(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function la(e){if(w.isDocumentKey(e))throw new v(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vg(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":D()}function Gi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vg(e);throw new v(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new v(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new v(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new v(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new v(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zs{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new da({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new da(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zd;switch(r.type){case"firstParty":return new rf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new v(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ha.get(n);r&&(_("ComponentProvider","Removing Datastore"),ha.delete(n),r.terminate())}(this),Promise.resolve()}}function Dg(e,t,n,r={}){var i;const s=(e=Gi(e,zs))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=st.MOCK_USER;else{a=Vh(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new v(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new st(c)}e._authCredentials=new tf(new Wu(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new jr(this.firestore,t,this._query)}}class Le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}}class Te extends jr{constructor(t,n,r){super(t,n,rc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new w(t))}withConverter(t){return new Te(this.firestore,t,this._path)}}function bg(e,t,...n){if(e=Mh(e),Cg("collection","path",t),e instanceof zs){const r=j.fromString(t,...n);return la(r),new Te(e,null,r)}{if(!(e instanceof Le||e instanceof Te))throw new v(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return la(r),new Te(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Rc(this,"async_queue_retry"),this._u=()=>{const n=oi();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=oi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=oi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Bt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Cn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ct("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=Bs.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&D()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class Lc extends zs{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new kg}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fc(this),this._firestoreClient.terminate()}}function Ng(e,t){const n=typeof e=="object"?e:Ol(),r=typeof e=="string"?e:t||"(default)",i=bl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ch("firestore");s&&Dg(i,...s)}return i}function xg(e){return e._firestoreClient||Fc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fc(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,c,h){return new vf(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Mc(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Tg(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hr(ct.fromBase64String(t))}catch(n){throw new v(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new hr(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}}const Mg=new RegExp("[~\\*/\\[\\]]");function Lg(e,t,n){if(t.search(Mg)>=0)throw fa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Uc(...t.split("."))._internalPath}catch{throw fa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function fa(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new v(g.INVALID_ARGUMENT,a+e+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Bc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fg extends $c{data(){return super.data()}}function Bc(e,t){return typeof t=="string"?Lg(e,t):t instanceof Uc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $g{convertValue(t,n="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw D()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return xr(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Og(K(t.latitude),K(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ps(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gn(t));default:return null}}convertTimestamp(t){const n=qt(t);return new ft(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=j.fromString(t);G(Tc(r));const i=new mn(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(n)||Ct(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bg extends $c{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Bc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Qn extends Bg{data(t={}){return super.data(t)}}class jg{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new qn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Qn(this._firestore,this._userDataWriter,r.key,r,new qn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Qn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Qn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:qg(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}class zg extends $g{constructor(t){super(),this.firestore=t}convertBytes(t){return new hr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function Hg(e){e=Gi(e,jr);const t=Gi(e.firestore,Lc),n=xg(t),r=new zg(t);return Ug(e._query),Sg(n,e._query).then(i=>new jg(t,r,e,i))}(function(t,n=!0){(function(i){xe=i})(xl),Zn(new rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Lc(new ef(r.getProvider("auth-internal")),new of(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new v(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),me(No,"4.4.1",t),me(No,"4.4.1","esm2017")})();function qr(){throw new Error("Cycle detected")}var Kg=Symbol.for("preact-signals");function Hs(){if(we>1)we--;else{for(var e,t=!1;en!==void 0;){var n=en;for(en=void 0,Qi++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&qc(n))try{n.c()}catch(i){t||(e=i,t=!0)}n=r}}if(Qi=0,we--,t)throw e}}var B=void 0,en=void 0,we=0,Qi=0,lr=0;function jc(e){if(B!==void 0){var t=e.n;if(t===void 0||t.t!==B)return t={i:0,S:e,p:B.s,n:void 0,t:B,e:void 0,x:void 0,r:t},B.s!==void 0&&(B.s.n=t),B.s=t,e.n=t,32&B.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=B.s,t.n=void 0,B.s.n=t,B.s=t),t}}function rt(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}rt.prototype.brand=Kg;rt.prototype.h=function(){return!0};rt.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};rt.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};rt.prototype.subscribe=function(e){var t=this;return Qs(function(){var n=t.value,r=32&this.f;this.f&=-33;try{e(n)}finally{this.f|=r}})};rt.prototype.valueOf=function(){return this.value};rt.prototype.toString=function(){return this.value+""};rt.prototype.toJSON=function(){return this.value};rt.prototype.peek=function(){return this.v};Object.defineProperty(rt.prototype,"value",{get:function(){var e=jc(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(B instanceof Gt&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){Qi>100&&qr(),this.v=e,this.i++,lr++,we++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Hs()}}}});function Ks(e){return new rt(e)}function qc(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function zc(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Hc(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Gt(e){rt.call(this,void 0),this.x=e,this.s=void 0,this.g=lr-1,this.f=4}(Gt.prototype=new rt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===lr))return!0;if(this.g=lr,this.f|=1,this.i>0&&!qc(this))return this.f&=-2,!0;var e=B;try{zc(this),B=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return B=e,Hc(this),this.f&=-2,!0};Gt.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}rt.prototype.S.call(this,e)};Gt.prototype.U=function(e){if(this.t!==void 0&&(rt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Gt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Gt.prototype.peek=function(){if(this.h()||qr(),16&this.f)throw this.v;return this.v};Object.defineProperty(Gt.prototype,"value",{get:function(){1&this.f&&qr();var e=jc(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Gg(e){return new Gt(e)}function Kc(e){var t=e.u;if(e.u=void 0,typeof t=="function"){we++;var n=B;B=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,Gs(e),r}finally{B=n,Hs()}}}function Gs(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Kc(e)}function Qg(e){if(B!==this)throw new Error("Out-of-order effect");Hc(this),B=e,this.f&=-2,8&this.f&&Gs(this),Hs()}function bn(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}bn.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};bn.prototype.S=function(){1&this.f&&qr(),this.f|=1,this.f&=-9,Kc(this),zc(this),we++;var e=B;return B=this,Qg.bind(this,e)};bn.prototype.N=function(){2&this.f||(this.f|=2,this.o=en,en=this)};bn.prototype.d=function(){this.f|=8,1&this.f||Gs(this)};function Qs(e){var t=new bn(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var ui;function Fe(e,t){A[e]=t.bind(null,A[e]||function(){})}function dr(e){ui&&ui(),ui=e&&e.S()}function Gc(e){var t=this,n=e.data,r=Xg(n);r.value=n;var i=Da(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var o;!Ea(i.peek())&&((o=t.base)==null?void 0:o.nodeType)===3?t.base.data=i.peek():(t.__$f|=1,t.setState({}))},Gg(function(){var o=r.value.value;return o===0?0:o===!0?"":o||""})},[]);return i.value}Gc.displayName="_st";Object.defineProperties(rt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Gc},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Fe("__b",function(e,t){if(typeof t.type=="string"){var n,r=t.props;for(var i in r)if(i!=="children"){var s=r[i];s instanceof rt&&(n||(t.__np=n={}),n[i]=s,r[i]=s.peek())}}e(t)});Fe("__r",function(e,t){dr();var n,r=t.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(i){var s;return Qs(function(){s=this}),s.c=function(){r.__$f|=1,r.setState({})},s}())),dr(n),e(t)});Fe("__e",function(e,t,n,r){dr(),e(t,n,r)});Fe("diffed",function(e,t){dr();var n;if(typeof t.type=="string"&&(n=t.__e)){var r=t.__np,i=t.props;if(r){var s=n.U;if(s)for(var o in s){var a=s[o];a!==void 0&&!(o in r)&&(a.d(),s[o]=void 0)}else n.U=s={};for(var u in r){var c=s[u],h=r[u];c===void 0?(c=Wg(n,u,h,i),s[u]=c):c.o(h,i)}}}e(t)});function Wg(e,t,n,r){var i=t in e&&e.ownerSVGElement===void 0,s=Ks(n);return{o:function(o,a){s.value=o,r=a},d:Qs(function(){var o=s.value.value;r[t]!==o&&(r[t]=o,i?e[t]=o:o?e.setAttribute(t,o):e.removeAttribute(t))})}}Fe("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var r=n.U;if(r){n.U=void 0;for(var i in r){var s=r[i];s&&s.d()}}}}else{var o=t.__c;if(o){var a=o.__$u;a&&(o.__$u=void 0,a.d())}}e(t)});Fe("__h",function(e,t,n,r){(r<3||r===9)&&(t.__$f|=2),e(t,n,r)});ge.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in t)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function Xg(e){return Da(function(){return Ks(e)},[])}const Yg={apiKey:"AIzaSyAzuEWqSe-iUqC0XaXCrMotgdlg7m5SNeg",authDomain:"kaiaogmartin.firebaseapp.com",projectId:"kaiaogmartin",storageBucket:"kaiaogmartin.appspot.com",messagingSenderId:"1043951426861",appId:"1:1043951426861:web:ec5e9ef47ab4fdd4e647a4"},Jg=qa(Yg),Zg=Ng(Jg),tm=Ks([]),em=bg(Zg,"onskeliste");async function nm(){const e=await Hg(em);tm.value=e.docs.map(t=>t.data())}nm();new URLSearchParams(window.location.search).has("admin");function rm(){return T(Ot,{children:[T(mr,{includeBack:!0}),T("div",{className:"center-container",children:[T("h1",{children:"Ønskeliste"}),T("p",{className:"coming",children:"Kommer"})]})]})}function im(){return T(Ot,{children:[T(mr,{includeBack:!0}),T("div",{className:"center-container",children:[T("h1",{children:"Program"}),T("p",{className:"coming",children:"Kommer"})]})]})}function sm(){return T(Ot,{children:[T(mr,{includeBack:!0}),T("div",{className:"center-container",children:[T("h1",{children:"Praktisk info"}),T("h2",{children:"Toastmaster"}),T("p",{children:["Adrian Austevoll er vår eminente toastmaster. Ta kontakt med ham på telefon ",T("a",{href:"tel:94974009",children:"949 74 009"})," dersom du har lyst til å si noen ord."]})]})]})}function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fr.apply(this,arguments)}var pe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pe||(pe={}));var pa=function(e){return e},ga="beforeunload",om="hashchange",am="popstate";function um(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var C=ya(r.location.hash.substr(1)),I=C.pathname,F=I===void 0?"/":I,gt=C.search,Dt=gt===void 0?"":gt,bt=C.hash,Ue=bt===void 0?"":bt,Mt=i.state||{};return[Mt.idx,pa({pathname:F,search:Dt,hash:Ue,state:Mt.usr||null,key:Mt.key||"default"})]}var o=null;function a(){if(o)d.call(o),o=null;else{var C=pe.Pop,I=s(),F=I[0],gt=I[1];if(d.length){if(F!=null){var Dt=h-F;Dt&&(o={action:C,location:gt,retry:function(){ht(Dt*-1)}},ht(Dt))}}else $(C)}}r.addEventListener(am,a),r.addEventListener(om,function(){var C=s(),I=C[1];ci(I)!==ci(l)&&a()});var u=pe.Pop,c=s(),h=c[0],l=c[1],f=_a(),d=_a();h==null&&(h=0,i.replaceState(fr({},i.state,{idx:h}),""));function E(){var C=document.querySelector("base"),I="";if(C&&C.getAttribute("href")){var F=r.location.href,gt=F.indexOf("#");I=gt===-1?F:F.slice(0,gt)}return I}function S(C){return E()+"#"+(typeof C=="string"?C:ci(C))}function y(C,I){return I===void 0&&(I=null),pa(fr({pathname:l.pathname,hash:"",search:""},typeof C=="string"?ya(C):C,{state:I,key:cm()}))}function V(C,I){return[{usr:C.state,key:C.key,idx:I},S(C)]}function x(C,I,F){return!d.length||(d.call({action:C,location:I,retry:F}),!1)}function $(C){u=C;var I=s();h=I[0],l=I[1],f.call({action:u,location:l})}function J(C,I){var F=pe.Push,gt=y(C,I);function Dt(){J(C,I)}if(x(F,gt,Dt)){var bt=V(gt,h+1),Ue=bt[0],Mt=bt[1];try{i.pushState(Ue,"",Mt)}catch{r.location.assign(Mt)}$(F)}}function pt(C,I){var F=pe.Replace,gt=y(C,I);function Dt(){pt(C,I)}if(x(F,gt,Dt)){var bt=V(gt,h),Ue=bt[0],Mt=bt[1];i.replaceState(Ue,"",Mt),$(F)}}function ht(C){i.go(C)}var Et={get action(){return u},get location(){return l},createHref:S,push:J,replace:pt,go:ht,back:function(){ht(-1)},forward:function(){ht(1)},listen:function(I){return f.push(I)},block:function(I){var F=d.push(I);return d.length===1&&r.addEventListener(ga,ma),function(){F(),d.length||r.removeEventListener(ga,ma)}}};return Et}function ma(e){e.preventDefault(),e.returnValue=""}function _a(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function cm(){return Math.random().toString(36).substr(2,8)}function ci(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,s=e.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ya(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hm(){return T(Ot,{children:T(xa,{history:um(),children:[T(xn,{path:"/",component:_h}),T(xn,{path:"/program",component:im}),T(xn,{path:"/info",component:sm}),T(xn,{path:"/onskeliste",component:rm})]})})}Zc(T(hm,{}),document.getElementById("app"));
