(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Vn,P,Qa,Xa,ee,wo,Ya,Ni,Ja,dn={},Za=[],Kl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,br=Array.isArray;function Mt(e,t){for(var n in t)e[n]=t[n];return e}function tu(e){var t=e.parentNode;t&&t.removeChild(e)}function kr(e,t,n){var r,i,s,o={};for(s in t)s=="key"?r=t[s]:s=="ref"?i=t[s]:o[s]=t[s];if(arguments.length>2&&(o.children=arguments.length>3?Vn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)o[s]===void 0&&(o[s]=e.defaultProps[s]);return rn(e,o,r,i,null)}function rn(e,t,n,r,i){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++Qa,__i:-1,__u:0};return i==null&&P.vnode!=null&&P.vnode(s),s}function ft(e){return e.children}function Ae(e,t){this.props=e,this.context=t}function ke(e,t){if(t==null)return e.__?ke(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ke(e):null}function eu(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return eu(e)}}function xi(e){(!e.__d&&(e.__d=!0)&&ee.push(e)&&!ar.__r++||wo!==P.debounceRendering)&&((wo=P.debounceRendering)||Ya)(ar)}function ar(){var e,t,n,r,i,s,o,a,u;for(ee.sort(Ni);e=ee.shift();)e.__d&&(t=ee.length,r=void 0,s=(i=(n=e).__v).__e,a=[],u=[],(o=n.__P)&&((r=Mt({},i)).__v=i.__v+1,P.vnode&&P.vnode(r),gs(o,r,i,n.__n,o.ownerSVGElement!==void 0,32&i.__u?[s]:null,a,s??ke(i),!!(32&i.__u),u),r.__.__k[r.__i]=r,iu(a,r,u),r.__e!=s&&eu(r)),ee.length>t&&ee.sort(Ni));ar.__r=0}function nu(e,t,n,r,i,s,o,a,u,c,h){var l,f,d,E,T,_=r&&r.__k||Za,A=t.length;for(n.__d=u,Gl(n,t,_),u=n.__d,l=0;l<A;l++)(d=n.__k[l])!=null&&typeof d!="boolean"&&typeof d!="function"&&(f=d.__i===-1?dn:_[d.__i]||dn,d.__i=l,gs(e,d,f,i,s,o,a,u,c,h),E=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&_s(f.ref,null,d),h.push(d.ref,d.__c||E,d)),T==null&&E!=null&&(T=E),65536&d.__u||f.__k===d.__k?u=ru(d,u,e):typeof d.type=="function"&&d.__d!==void 0?u=d.__d:E&&(u=E.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=u,n.__e=T}function Gl(e,t,n){var r,i,s,o,a,u=t.length,c=n.length,h=c,l=0;for(e.__k=[],r=0;r<u;r++)(i=e.__k[r]=(i=t[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?rn(null,i,null,null,i):br(i)?rn(ft,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?rn(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,a=Wl(i,n,o=r+l,h),i.__i=a,s=null,a!==-1&&(h--,(s=n[a])&&(s.__u|=131072)),s==null||s.__v===null?(a==-1&&l--,typeof i.type!="function"&&(i.__u|=65536)):a!==o&&(a===o+1?l++:a>o?h>u-o?l+=a-o:l--:l=a<o&&a==o-1?a-o:0,a!==r+l&&(i.__u|=65536))):(s=n[r])&&s.key==null&&s.__e&&(s.__e==e.__d&&(e.__d=ke(s)),Mi(s,s,!1),n[r]=null,h--);if(h)for(r=0;r<c;r++)(s=n[r])!=null&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=ke(s)),Mi(s,s))}function ru(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=ru(r[i],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Oi(e,t){return t=t||[],e==null||typeof e=="boolean"||(br(e)?e.some(function(n){Oi(n,t)}):t.push(e)),t}function Wl(e,t,n,r){var i=e.key,s=e.type,o=n-1,a=n+1,u=t[n];if(u===null||u&&i==u.key&&s===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;o>=0||a<t.length;){if(o>=0){if((u=t[o])&&!(131072&u.__u)&&i==u.key&&s===u.type)return o;o--}if(a<t.length){if((u=t[a])&&!(131072&u.__u)&&i==u.key&&s===u.type)return a;a++}}return-1}function Ao(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Kl.test(t)?n:n+"px"}function zn(e,t,n,r,i){var s;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ao(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ao(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,s?So:Ro,s)):e.removeEventListener(t,s?So:Ro,s);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ro(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(P.event?P.event(e):e)}function So(e){return this.l[e.type+!0](P.event?P.event(e):e)}function gs(e,t,n,r,i,s,o,a,u,c){var h,l,f,d,E,T,_,A,D,F,Z,mt,dt,wt,V,R=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),s=[a=t.__e=n.__e]),(h=P.__b)&&h(t);t:if(typeof R=="function")try{if(A=t.props,D=(h=R.contextType)&&r[h.__c],F=h?D?D.props.value:h.__:r,n.__c?_=(l=t.__c=n.__c).__=l.__E:("prototype"in R&&R.prototype.render?t.__c=l=new R(A,F):(t.__c=l=new Ae(A,F),l.constructor=R,l.render=Xl),D&&D.sub(l),l.props=A,l.state||(l.state={}),l.context=F,l.__n=r,f=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),R.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Mt({},l.__s)),Mt(l.__s,R.getDerivedStateFromProps(A,l.__s))),d=l.props,E=l.state,l.__v=t,f)R.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(R.getDerivedStateFromProps==null&&A!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(A,F),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(A,l.__s,F)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=A,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(U){U&&(U.__=t)}),Z=0;Z<l._sb.length;Z++)l.__h.push(l._sb[Z]);l._sb=[],l.__h.length&&o.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(A,l.__s,F),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,E,T)})}if(l.context=F,l.props=A,l.__P=e,l.__e=!1,mt=P.__r,dt=0,"prototype"in R&&R.prototype.render){for(l.state=l.__s,l.__d=!1,mt&&mt(t),h=l.render(l.props,l.state,l.context),wt=0;wt<l._sb.length;wt++)l.__h.push(l._sb[wt]);l._sb=[]}else do l.__d=!1,mt&&mt(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++dt<25);l.state=l.__s,l.getChildContext!=null&&(r=Mt(Mt({},r),l.getChildContext())),f||l.getSnapshotBeforeUpdate==null||(T=l.getSnapshotBeforeUpdate(d,E)),nu(e,br(V=h!=null&&h.type===ft&&h.key==null?h.props.children:h)?V:[V],t,n,r,i,s,o,a,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&o.push(l),_&&(l.__E=l.__=null)}catch(U){t.__v=null,u||s!=null?(t.__e=a,t.__u|=u?160:32,s[s.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),P.__e(U,t,n)}else s==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ql(n.__e,t,n,r,i,s,o,u,c);(h=P.diffed)&&h(t)}function iu(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)_s(n[r],n[++r],n[++r]);P.__c&&P.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){P.__e(s,i.__v)}})}function Ql(e,t,n,r,i,s,o,a,u){var c,h,l,f,d,E,T,_=n.props,A=t.props,D=t.type;if(D==="svg"&&(i=!0),s!=null){for(c=0;c<s.length;c++)if((d=s[c])&&"setAttribute"in d==!!D&&(D?d.localName===D:d.nodeType===3)){e=d,s[c]=null;break}}if(e==null){if(D===null)return document.createTextNode(A);e=i?document.createElementNS("http://www.w3.org/2000/svg",D):document.createElement(D,A.is&&A),s=null,a=!1}if(D===null)_===A||a&&e.data===A||(e.data=A);else{if(s=s&&Vn.call(e.childNodes),_=n.props||dn,!a&&s!=null)for(_={},c=0;c<e.attributes.length;c++)_[(d=e.attributes[c]).name]=d.value;for(c in _)d=_[c],c=="children"||(c=="dangerouslySetInnerHTML"?l=d:c==="key"||c in A||zn(e,c,null,d,i));for(c in A)d=A[c],c=="children"?f=d:c=="dangerouslySetInnerHTML"?h=d:c=="value"?E=d:c=="checked"?T=d:c==="key"||a&&typeof d!="function"||_[c]===d||zn(e,c,d,_[c],i);if(h)a||l&&(h.__html===l.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),nu(e,br(f)?f:[f],t,n,r,i&&D!=="foreignObject",s,o,s?s[0]:n.__k&&ke(n,0),a,u),s!=null)for(c=s.length;c--;)s[c]!=null&&tu(s[c]);a||(c="value",E!==void 0&&(E!==e[c]||D==="progress"&&!E||D==="option"&&E!==_[c])&&zn(e,c,E,_[c],!1),c="checked",T!==void 0&&T!==e[c]&&zn(e,c,T,_[c],!1))}return e}function _s(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){P.__e(r,n)}}function Mi(e,t,n){var r,i;if(P.unmount&&P.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||_s(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){P.__e(s,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Mi(r[i],t,n||typeof e.type!="function");n||e.__e==null||tu(e.__e),e.__=e.__e=e.__d=void 0}function Xl(e,t,n){return this.constructor(e,n)}function Yl(e,t,n){var r,i,s,o;P.__&&P.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],o=[],gs(t,e=(!r&&n||t).__k=kr(ft,null,[e]),i||dn,dn,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?Vn.call(t.childNodes):null,s,!r&&n?n:i?i.__e:t.firstChild,r,o),iu(s,e,o)}function Jl(e,t,n){var r,i,s,o,a=Mt({},e.props);for(s in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)s=="key"?r=t[s]:s=="ref"?i=t[s]:a[s]=t[s]===void 0&&o!==void 0?o[s]:t[s];return arguments.length>2&&(a.children=arguments.length>3?Vn.call(arguments,2):n),rn(e.type,a,r||e.key,i||e.ref,null)}function Zl(e,t){var n={__c:t="__cC"+Ja++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[t]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,xi(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Vn=Za.slice,P={__e:function(e,t,n,r){for(var i,s,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(a){e=a}throw e}},Qa=0,Xa=function(e){return e!=null&&e.constructor==null},Ae.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Mt({},this.state),typeof e=="function"&&(e=e(Mt({},n),this.props)),e&&Mt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),xi(this))},Ae.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),xi(this))},Ae.prototype.render=ft,ee=[],Ya=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ni=function(e,t){return e.__v.__b-t.__v.__b},ar.__r=0,Ja=0;var Li,_t,pi,Po,Co=0,su=[],er=[],Vo=P.__b,bo=P.__r,ko=P.diffed,Do=P.__c,No=P.unmount;function th(e,t){P.__h&&P.__h(_t,e,Co||t),Co=0;var n=_t.__H||(_t.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:er}),n.__[e]}function ou(e,t){var n=th(Li++,7);return rh(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function eh(){for(var e;e=su.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(nr),e.__H.__h.forEach(Fi),e.__H.__h=[]}catch(t){e.__H.__h=[],P.__e(t,e.__v)}}P.__b=function(e){_t=null,Vo&&Vo(e)},P.__r=function(e){bo&&bo(e),Li=0;var t=(_t=e.__c).__H;t&&(pi===_t?(t.__h=[],_t.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=er,n.__N=n.i=void 0})):(t.__h.forEach(nr),t.__h.forEach(Fi),t.__h=[],Li=0)),pi=_t},P.diffed=function(e){ko&&ko(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(su.push(t)!==1&&Po===P.requestAnimationFrame||((Po=P.requestAnimationFrame)||nh)(eh)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==er&&(n.__=n.__V),n.i=void 0,n.__V=er})),pi=_t=null},P.__c=function(e,t){t.some(function(n){try{n.__h.forEach(nr),n.__h=n.__h.filter(function(r){return!r.__||Fi(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],P.__e(r,n.__v)}}),Do&&Do(e,t)},P.unmount=function(e){No&&No(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{nr(r)}catch(i){t=i}}),n.__H=void 0,t&&P.__e(t,n.__v))};var xo=typeof requestAnimationFrame=="function";function nh(e){var t,n=function(){clearTimeout(r),xo&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);xo&&(t=requestAnimationFrame(n))}function nr(e){var t=_t,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),_t=t}function Fi(e){var t=_t;e.__c=e.__(),_t=t}function rh(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}var ih={};function Ye(e,t){for(var n in t)e[n]=t[n];return e}function sh(e,t,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,s=e.match(i),o={};if(s&&s[1])for(var a=s[1].split("&"),u=0;u<a.length;u++){var c=a[u].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=Ui(e.replace(i,"")),t=Ui(t||"");for(var h=Math.max(e.length,t.length),l=0;l<h;l++)if(t[l]&&t[l].charAt(0)===":"){var f=t[l].replace(/(^:|[+*?]+$)/g,""),d=(t[l].match(/[+*?]+$/)||ih)[0]||"",E=~d.indexOf("+"),T=~d.indexOf("*"),_=e[l]||"";if(!_&&!T&&(d.indexOf("?")<0||E)){r=!1;break}if(o[f]=decodeURIComponent(_),E||T){o[f]=e.slice(l).map(decodeURIComponent).join("/");break}}else if(t[l]!==e[l]){r=!1;break}return(n.default===!0||r!==!1)&&o}function oh(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function ah(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:Ui(n.props.path).map(uh).join("")}(e),e.props}function Ui(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function uh(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var ch={},ae=[],Oo=[],yt=null,au={url:ys()},lh=Zl(au);function ys(){var e;return""+((e=yt&&yt.location?yt.location:yt&&yt.getCurrentLocation?yt.getCurrentLocation():typeof location<"u"?location:ch).pathname||"")+(e.search||"")}function hh(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=ae.length;r--;)if(ae[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),yt&&yt[r]?yt[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),uu(e)}function uu(e){for(var t=!1,n=0;n<ae.length;n++)ae[n].routeTo(e)&&(t=!0);return t}function dh(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return hh(t)}}function fh(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function cu(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(dh(t))return fh(e)}while(t=t.parentNode)}}var Mo=!1;function lu(e){e.history&&(yt=e.history),this.state={url:e.url||ys()}}Ye(lu.prototype=new Ae,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=Oi(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;Mo||(Mo=!0,yt||addEventListener("popstate",function(){uu(ys())}),addEventListener("click",cu)),ae.push(this),yt&&(this.u=yt.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),ae.splice(ae.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(ah).sort(oh);for(var n=0;n<e.length;n++){var r=e[n],i=sh(t,r.props.path,r.props);if(i)return[r,i]}},render:function(e,t){var n,r,i=e.onChange,s=t.url,o=this.c,a=this.g(Oi(e.children),s);if(a&&(r=Jl(a[0],Ye(Ye({url:s,matches:n=a[1]},n),{key:void 0,ref:void 0}))),s!==(o&&o.url)){Ye(au,o=this.c={url:s,previous:o&&o.url,current:r,path:r?r.props.path:null,matches:n}),o.router=this,o.active=r?[r]:[];for(var u=Oo.length;u--;)Oo[u]({});typeof i=="function"&&i(o)}return kr(lh.Provider,{value:o},r)}});var Hn=function(e){return kr("a",Ye({onClick:cu},e))},Kn=function(e){return kr(e.component,e)},ph=0;function g(e,t,n,r,i,s){var o,a,u={};for(a in t)a=="ref"?o=t[a]:u[a]=t[a];var c={type:e,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ph,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)u[a]===void 0&&(u[a]=o[a]);return P.vnode&&P.vnode(c),c}function Dr({includeBack:e}){return g("nav",{children:[e?g(Hn,{style:{span:2},href:"/",children:"Tilbake"}):g("span",{}),g("div",{children:[g(Hn,{href:"/program",children:"Program"}),g(Hn,{href:"/info",children:"Praktisk info"}),g(Hn,{href:"/onskeliste",children:"Ønskeliste"})]})]})}function mh(){return g(ft,{children:[g(Dr,{includeBack:!1}),g("div",{className:"top",children:[g("img",{className:"upper-left",src:"images/ring.png",alt:"Ring"}),g("div",{className:"header",children:[g("h2",{children:"Vi gifter oss!"}),g("h1",{children:"Kaia og Martin"})]})]}),g("div",{className:"center-container",children:[g("h1",{children:"Velkommen"}),g("p",{children:"Har du forvillet deg inn på denne nettsiden er du sannsynligvis invitert og har takket ja til å komme i vårt bryllup 16.mars. Og det er vi så glad for! Vi gleder oss skikkelig til å dele dagen med de fineste menneskene vi vet om."}),g("p",{children:"På denne siden kommer vi til å poste en del praktisk informasjon om hva som skal skje på selve dagen - og alle konkurranselekene dere må starte å øve til (neida…)."}),g("h1",{children:"Vielse i Oslo Rådhus"}),g("p",{children:"Selve vielsessermonien finner sted i Oslo Rådhus i Munchrommet på dagen 16.mars klokken 13.00-13.15. En klassisk tradisjonell, offentlig og effektiv affære med andre ord. Her er det dessverre begrenset med plasser slik at det er nærmeste familie og forlovere som får være med inn. Det kan være noe kø i sikkerhetskontrollen, så det er lurt å møte opp minst 15 minutter før."}),g("p",{children:"For de av dere som ikke er nærmeste familie eller forlovere, så er det aldeles hyggelig dersom dere likevel ønsker å ta turen dit og ta oss i mot på vei ut igjen. Men det er er ingen forventning fra oss - vi ses jo til en hyggelig middag og heidundranes fest kl. 16.00!"}),g("h1",{children:"Hyggelig middag og heidundranes fest på Grefsenkollen restaurant"}),g("p",{children:"Klokken 16.00 er det start av apertiff på flotte Grefsenkollen restaurant over Oslo. Her vil vi etter hvert få servert en deilig treretters middag. Utover kvelden blir det selvfølgelig dans og spillopper!"})]}),g("div",{className:"container-text"})]})}var Lo={};/**
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
 */const hu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,h=s>>2,l=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(f=64)),r.push(n[h],n[l],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||l==null)throw new _h;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),l!==64){const E=c<<6&192|l;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class _h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yh=function(e){const t=hu(e);return du.encodeByteArray(t,!0)},ur=function(e){return yh(e).replace(/\./g,"")},vh=function(e){try{return du.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Eh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Th=()=>Eh().__FIREBASE_DEFAULTS__,Ih=()=>{if(typeof process>"u"||typeof Lo>"u")return;const e=Lo.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vh(e[1]);return t&&JSON.parse(t)},vs=()=>{try{return Th()||Ih()||wh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ah=e=>{var t,n;return(n=(t=vs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Rh=e=>{const t=Ah(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},fu=()=>{var e;return(e=vs())===null||e===void 0?void 0:e.config};/**
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
 */class Sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ph(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ur(JSON.stringify(n)),ur(JSON.stringify(o)),""].join(".")}/**
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
 */function cr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ch(){var e;const t=(e=vs())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vh(){return!Ch()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pu(){try{return typeof indexedDB=="object"}catch{return!1}}function bh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const kh="FirebaseError";class $e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=kh,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mu.prototype.create)}}class mu{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Dh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $e(i,a,r)}}function Dh(e,t){return e.replace(Nh,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nh=/\{\$([^}]+)}/g;function $i(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Fo(s)&&Fo(o)){if(!$i(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fo(e){return e!==null&&typeof e=="object"}/**
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
 */function Ut(e){return e&&e._delegate?e._delegate:e}class fn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const te="[DEFAULT]";/**
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
 */class xh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mh(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=te){return this.instances.has(t)}getOptions(t=te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Oh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=te){return this.component?this.component.multipleInstances?t:te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oh(e){return e===te?void 0:e}function Mh(e){return e.instantiationMode==="EAGER"}/**
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
 */class Lh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const Fh={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Uh=O.INFO,$h={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Bh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=$h[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gu{constructor(t){this.name=t,this._logLevel=Uh,this._logHandler=Bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const jh=(e,t)=>t.some(n=>e instanceof n);let Uo,$o;function qh(){return Uo||(Uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zh(){return $o||($o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,Bi=new WeakMap,yu=new WeakMap,mi=new WeakMap,Es=new WeakMap;function Hh(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(zt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_u.set(n,e)}).catch(()=>{}),Es.set(t,e),t}function Kh(e){if(Bi.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Bi.set(e,t)}let ji={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gh(e){ji=e(ji)}function Wh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(gi(this),t,...n);return yu.set(r,t.sort?t.sort():[t]),zt(r)}:zh().includes(e)?function(...t){return e.apply(gi(this),t),zt(_u.get(this))}:function(...t){return zt(e.apply(gi(this),t))}}function Qh(e){return typeof e=="function"?Wh(e):(e instanceof IDBTransaction&&Kh(e),jh(e,qh())?new Proxy(e,ji):e)}function zt(e){if(e instanceof IDBRequest)return Hh(e);if(mi.has(e))return mi.get(e);const t=Qh(e);return t!==e&&(mi.set(e,t),Es.set(t,e)),t}const gi=e=>Es.get(e);function Xh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=zt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zt(o.result),u.oldVersion,u.newVersion,zt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Yh=["get","getKey","getAll","getAllKeys","count"],Jh=["put","add","delete","clear"],_i=new Map;function Bo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_i.get(t))return _i.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Jh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yh.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return _i.set(t,s),s}Gh(e=>({...e,get:(t,n,r)=>Bo(t,n)||e.get(t,n,r),has:(t,n)=>!!Bo(t,n)||e.has(t,n)}));/**
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
 */class Zh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(td(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function td(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qi="@firebase/app",jo="0.9.26";/**
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
 */const ce=new gu("@firebase/app"),ed="@firebase/app-compat",nd="@firebase/analytics-compat",rd="@firebase/analytics",id="@firebase/app-check-compat",sd="@firebase/app-check",od="@firebase/auth",ad="@firebase/auth-compat",ud="@firebase/database",cd="@firebase/database-compat",ld="@firebase/functions",hd="@firebase/functions-compat",dd="@firebase/installations",fd="@firebase/installations-compat",pd="@firebase/messaging",md="@firebase/messaging-compat",gd="@firebase/performance",_d="@firebase/performance-compat",yd="@firebase/remote-config",vd="@firebase/remote-config-compat",Ed="@firebase/storage",Td="@firebase/storage-compat",Id="@firebase/firestore",wd="@firebase/firestore-compat",Ad="firebase",Rd="10.7.2";/**
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
 */const zi="[DEFAULT]",Sd={[qi]:"fire-core",[ed]:"fire-core-compat",[rd]:"fire-analytics",[nd]:"fire-analytics-compat",[sd]:"fire-app-check",[id]:"fire-app-check-compat",[od]:"fire-auth",[ad]:"fire-auth-compat",[ud]:"fire-rtdb",[cd]:"fire-rtdb-compat",[ld]:"fire-fn",[hd]:"fire-fn-compat",[dd]:"fire-iid",[fd]:"fire-iid-compat",[pd]:"fire-fcm",[md]:"fire-fcm-compat",[gd]:"fire-perf",[_d]:"fire-perf-compat",[yd]:"fire-rc",[vd]:"fire-rc-compat",[Ed]:"fire-gcs",[Td]:"fire-gcs-compat",[Id]:"fire-fst",[wd]:"fire-fst-compat","fire-js":"fire-js",[Ad]:"fire-js-all"};/**
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
 */const lr=new Map,Hi=new Map;function Pd(e,t){try{e.container.addComponent(t)}catch(n){ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function hr(e){const t=e.name;if(Hi.has(t))return ce.debug(`There were multiple attempts to register component ${t}.`),!1;Hi.set(t,e);for(const n of lr.values())Pd(n,e);return!0}function Cd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Vd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new mu("app","Firebase",Vd);/**
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
 */class bd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const kd=Rd;function vu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=fu()),!n)throw Ht.create("no-options");const s=lr.get(i);if(s){if($i(n,s.options)&&$i(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const o=new Lh(i);for(const u of Hi.values())o.addComponent(u);const a=new bd(n,r,o);return lr.set(i,a),a}function Dd(e=zi){const t=lr.get(e);if(!t&&e===zi&&fu())return vu();if(!t)throw Ht.create("no-app",{appName:e});return t}function Re(e,t,n){var r;let i=(r=Sd[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ce.warn(a.join(" "));return}hr(new fn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Nd="firebase-heartbeat-database",xd=1,pn="firebase-heartbeat-store";let yi=null;function Eu(){return yi||(yi=Xh(Nd,xd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(pn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ht.create("idb-open",{originalErrorMessage:e.message})})),yi}async function Od(e){try{return await(await Eu()).transaction(pn).objectStore(pn).get(Tu(e))}catch(t){if(t instanceof $e)ce.warn(t.message);else{const n=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ce.warn(n.message)}}}async function qo(e,t){try{const r=(await Eu()).transaction(pn,"readwrite");await r.objectStore(pn).put(t,Tu(e)),await r.done}catch(n){if(n instanceof $e)ce.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ce.warn(r.message)}}}function Tu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Md=1024,Ld=30*24*60*60*1e3;class Fd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $d(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ld}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zo(),{heartbeatsToSend:r,unsentEntries:i}=Ud(this._heartbeatsCache.heartbeats),s=ur(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zo(){return new Date().toISOString().substring(0,10)}function Ud(e,t=Md){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ho(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ho(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $d{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pu()?bh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Od(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ho(e){return ur(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Bd(e){hr(new fn("platform-logger",t=>new Zh(t),"PRIVATE")),hr(new fn("heartbeat",t=>new Fd(t),"PRIVATE")),Re(qi,jo,e),Re(qi,jo,"esm2017"),Re("fire-js","")}Bd("");var jd="firebase",qd="10.7.2";/**
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
 */Re(jd,qd,"app");var zd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Ts=Ts||{},C=zd||self;function Nr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function bn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Hd(e){return Object.prototype.hasOwnProperty.call(e,vi)&&e[vi]||(e[vi]=++Kd)}var vi="closure_uid_"+(1e9*Math.random()>>>0),Kd=0;function Gd(e,t,n){return e.call.apply(e.bind,arguments)}function Wd(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ct(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=Gd:ct=Wd,ct.apply(null,arguments)}function Gn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function J(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Yt(){this.s=this.s,this.o=this.o}var Qd=0;Yt.prototype.s=!1;Yt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Qd!=0)&&Hd(this)};Yt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Iu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Is(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ko(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Nr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function lt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var Xd=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};C.addEventListener("test",n,t),C.removeEventListener("test",n,t)}catch{}return e}();function mn(e){return/^[\s\xa0]*$/.test(e)}function xr(){var e=C.navigator;return e&&(e=e.userAgent)?e:""}function St(e){return xr().indexOf(e)!=-1}function ws(e){return ws[" "](e),e}ws[" "]=function(){};function Yd(e,t){var n=zf;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Jd=St("Opera"),De=St("Trident")||St("MSIE"),wu=St("Edge"),Ki=wu||De,Au=St("Gecko")&&!(xr().toLowerCase().indexOf("webkit")!=-1&&!St("Edge"))&&!(St("Trident")||St("MSIE"))&&!St("Edge"),Zd=xr().toLowerCase().indexOf("webkit")!=-1&&!St("Edge");function Ru(){var e=C.document;return e?e.documentMode:void 0}var Gi;t:{var Ei="",Ti=function(){var e=xr();if(Au)return/rv:([^\);]+)(\)|;)/.exec(e);if(wu)return/Edge\/([\d\.]+)/.exec(e);if(De)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Zd)return/WebKit\/(\S+)/.exec(e);if(Jd)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ti&&(Ei=Ti?Ti[1]:""),De){var Ii=Ru();if(Ii!=null&&Ii>parseFloat(Ei)){Gi=String(Ii);break t}}Gi=Ei}var Wi;if(C.document&&De){var Go=Ru();Wi=Go||parseInt(Gi,10)||void 0}else Wi=void 0;var tf=Wi;function gn(e,t){if(lt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Au){t:{try{ws(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ef[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&gn.$.h.call(this)}}J(gn,lt);var ef={2:"touch",3:"pen",4:"mouse"};gn.prototype.h=function(){gn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),nf=0;function rf(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++nf,this.fa=this.ia=!1}function Or(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function As(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function sf(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Su(e){const t={};for(const n in e)t[n]=e[n];return t}const Wo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pu(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Wo.length;s++)n=Wo[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Mr(e){this.src=e,this.g={},this.h=0}Mr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Xi(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new rf(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Qi(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Iu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Or(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Xi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Rs="closure_lm_"+(1e6*Math.random()|0),wi={};function Cu(e,t,n,r,i){if(r&&r.once)return bu(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Cu(e,t[s],n,r,i);return null}return n=Cs(n),e&&e[kn]?e.O(t,n,bn(r)?!!r.capture:!!r,i):Vu(e,t,n,!1,r,i)}function Vu(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=bn(i)?!!i.capture:!!i,a=Ps(e);if(a||(e[Rs]=a=new Mr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=of(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Xd||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Du(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function of(){function e(n){return t.call(e.src,e.listener,n)}const t=af;return e}function bu(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)bu(e,t[s],n,r,i);return null}return n=Cs(n),e&&e[kn]?e.P(t,n,bn(r)?!!r.capture:!!r,i):Vu(e,t,n,!0,r,i)}function ku(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ku(e,t[s],n,r,i);else r=bn(r)?!!r.capture:!!r,n=Cs(n),e&&e[kn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Xi(s,n,r,i),-1<n&&(Or(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ps(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Xi(t,n,r,i)),(n=-1<e?t[e]:null)&&Ss(n))}function Ss(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[kn])Qi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Du(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ps(t))?(Qi(n,e),n.h==0&&(n.src=null,t[Rs]=null)):Or(e)}}}function Du(e){return e in wi?wi[e]:wi[e]="on"+e}function af(e,t){if(e.fa)e=!0;else{t=new gn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ss(e),e=n.call(r,t)}return e}function Ps(e){return e=e[Rs],e instanceof Mr?e:null}var Ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cs(e){return typeof e=="function"?e:(e[Ai]||(e[Ai]=function(t){return e.handleEvent(t)}),e[Ai])}function Y(){Yt.call(this),this.i=new Mr(this),this.S=this,this.J=null}J(Y,Yt);Y.prototype[kn]=!0;Y.prototype.removeEventListener=function(e,t,n,r){ku(this,e,t,n,r)};function rt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new lt(t,e);else if(t instanceof lt)t.target=t.target||e;else{var i=t;t=new lt(r,e),Pu(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Wn(o,r,!0,t)&&i}if(o=t.g=e,i=Wn(o,r,!0,t)&&i,i=Wn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Wn(o,r,!1,t)&&i}Y.prototype.N=function(){if(Y.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Or(n[r]);delete e.g[t],e.h--}}this.J=null};Y.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Y.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Wn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Qi(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vs=C.JSON.stringify;class uf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function cf(){var e=bs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class lf{constructor(){this.h=this.g=null}add(t,n){const r=Nu.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Nu=new uf(()=>new hf,e=>e.reset());class hf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function df(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ff(e){C.setTimeout(()=>{throw e},0)}let _n,yn=!1,bs=new lf,xu=()=>{const e=C.Promise.resolve(void 0);_n=()=>{e.then(pf)}};var pf=()=>{for(var e;e=cf();){try{e.h.call(e.g)}catch(n){ff(n)}var t=Nu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}yn=!1};function Lr(e,t){Y.call(this),this.h=e||1,this.g=t||C,this.j=ct(this.qb,this),this.l=Date.now()}J(Lr,Y);v=Lr.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(ks(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ks(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}v.N=function(){Lr.$.N.call(this),ks(this),delete this.g};function Ds(e,t,n){if(typeof e=="function")n&&(e=ct(e,n));else if(e&&typeof e.handleEvent=="function")e=ct(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(e,t||0)}function Ou(e){e.g=Ds(()=>{e.g=null,e.i&&(e.i=!1,Ou(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class mf extends Yt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ou(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vn(e){Yt.call(this),this.h=e,this.g={}}J(vn,Yt);var Qo=[];function Mu(e,t,n,r){Array.isArray(n)||(n&&(Qo[0]=n.toString()),n=Qo);for(var i=0;i<n.length;i++){var s=Cu(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Lu(e){As(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ss(t)},e),e.g={}}vn.prototype.N=function(){vn.$.N.call(this),Lu(this)};vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fr(){this.g=!0}Fr.prototype.Ea=function(){this.g=!1};function gf(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function _f(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Ie(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+vf(e,n)+(r?" "+r:"")})}function yf(e,t){e.info(function(){return"TIMEOUT: "+t})}Fr.prototype.info=function(){};function vf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vs(n)}catch{return t}}var fe={},Xo=null;function Ur(){return Xo=Xo||new Y}fe.Ta="serverreachability";function Fu(e){lt.call(this,fe.Ta,e)}J(Fu,lt);function En(e){const t=Ur();rt(t,new Fu(t))}fe.STAT_EVENT="statevent";function Uu(e,t){lt.call(this,fe.STAT_EVENT,e),this.stat=t}J(Uu,lt);function pt(e){const t=Ur();rt(t,new Uu(t,e))}fe.Ua="timingevent";function $u(e,t){lt.call(this,fe.Ua,e),this.size=t}J($u,lt);function Dn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){e()},t)}var $r={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Bu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ns(){}Ns.prototype.h=null;function Yo(e){return e.h||(e.h=e.i())}function ju(){}var Nn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xs(){lt.call(this,"d")}J(xs,lt);function Os(){lt.call(this,"c")}J(Os,lt);var Yi;function Br(){}J(Br,Ns);Br.prototype.g=function(){return new XMLHttpRequest};Br.prototype.i=function(){return{}};Yi=new Br;function xn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new vn(this),this.P=Ef,e=Ki?125:void 0,this.V=new Lr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var Ef=45e3,zu={},Ji={};v=xn.prototype;v.setTimeout=function(e){this.P=e};function Zi(e,t,n){e.L=1,e.A=qr($t(t)),e.u=n,e.S=!0,Hu(e,null)}function Hu(e,t){e.G=Date.now(),On(e),e.B=$t(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Zu(n.i,"t",r),e.o=0,n=e.l.J,e.h=new qu,e.g=Ec(e.l,n?t:null,!e.u),0<e.O&&(e.M=new mf(ct(e.Pa,e,e.g),e.O)),Mu(e.U,e.g,"readystatechange",e.nb),t=e.I?Su(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),En(),gf(e.j,e.v,e.B,e.m,e.W,e.u)}v.nb=function(e){e=e.target;const t=this.M;t&&Pt(e)==3?t.l():this.Pa(e)};v.Pa=function(e){try{if(e==this.g)t:{const h=Pt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Ki||this.g&&(this.h.h||this.g.ja()||ea(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?En(3):En(2)),jr(this);var n=this.g.da();this.ca=n;e:if(Ku(this)){var r=ea(this.g);e="";var i=r.length,s=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),sn(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_f(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mn(a)){var c=a;break e}}c=null}if(n=c)Ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,n);else{this.i=!1,this.s=3,pt(12),re(this),sn(this);break t}}this.S?(Gu(this,h,o),Ki&&this.i&&h==3&&(Mu(this.U,this.V,"tick",this.mb),this.V.start())):(Ie(this.j,this.m,o,null),ts(this,o)),h==4&&re(this),this.i&&!this.J&&(h==4?gc(this.l,this):(this.i=!1,On(this)))}else Bf(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),re(this),sn(this)}}}catch{}finally{}};function Ku(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Gu(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Tf(e,n),i==Ji){t==4&&(e.s=4,pt(14),r=!1),Ie(e.j,e.m,null,"[Incomplete Response]");break}else if(i==zu){e.s=4,pt(15),Ie(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ie(e.j,e.m,i,null),ts(e,i);Ku(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,pt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bs(t),t.M=!0,pt(11))):(Ie(e.j,e.m,n,"[Invalid Chunked Response]"),re(e),sn(e))}v.mb=function(){if(this.g){var e=Pt(this.g),t=this.g.ja();this.o<t.length&&(jr(this),Gu(this,e,t),this.i&&e!=4&&On(this))}};function Tf(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Ji:(n=Number(t.substring(n,r)),isNaN(n)?zu:(r+=1,r+n>t.length?Ji:(t=t.slice(r,r+n),e.o=r+n,t)))}v.cancel=function(){this.J=!0,re(this)};function On(e){e.Y=Date.now()+e.P,Wu(e,e.P)}function Wu(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Dn(ct(e.lb,e),t)}function jr(e){e.C&&(C.clearTimeout(e.C),e.C=null)}v.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(yf(this.j,this.B),this.L!=2&&(En(),pt(17)),re(this),this.s=2,sn(this)):Wu(this,this.Y-e)};function sn(e){e.l.H==0||e.J||gc(e.l,e)}function re(e){jr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ks(e.V),Lu(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ts(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||es(n.i,e))){if(!e.K&&es(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)pr(n),Gr(n);else break t;$s(n),pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Dn(ct(n.ib,n),6e3));if(1>=nc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ie(n,11)}else if((e.K||n.g==e)&&pr(n),!mn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const E=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ms(s,s.h),s.h=null))}if(r.F){const T=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,B(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=vc(r,r.J?r.pa:null,r.Y),o.K){rc(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(jr(a),On(a)),r.g=o}else pc(r);0<n.j.length&&Wr(n)}else c[0]!="stop"&&c[0]!="close"||ie(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ie(n,7):Us(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}En(4)}catch{}}function If(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Nr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function wf(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Nr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Qu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Nr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=wf(e),r=If(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Af(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ue(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ue){this.h=e.h,dr(this,e.j),this.s=e.s,this.g=e.g,fr(this,e.m),this.l=e.l;var t=e.i,n=new Tn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Jo(this,n),this.o=e.o}else e&&(t=String(e).match(Xu))?(this.h=!1,dr(this,t[1]||"",!0),this.s=Je(t[2]||""),this.g=Je(t[3]||"",!0),fr(this,t[4]),this.l=Je(t[5]||"",!0),Jo(this,t[6]||"",!0),this.o=Je(t[7]||"")):(this.h=!1,this.i=new Tn(null,this.h))}ue.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ze(t,Zo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ze(t,Zo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ze(n,n.charAt(0)=="/"?Pf:Sf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ze(n,Vf)),e.join("")};function $t(e){return new ue(e)}function dr(e,t,n){e.j=n?Je(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function fr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Jo(e,t,n){t instanceof Tn?(e.i=t,bf(e.i,e.h)):(n||(t=Ze(t,Cf)),e.i=new Tn(t,e.h))}function B(e,t,n){e.i.set(t,n)}function qr(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Je(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ze(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Rf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Rf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Zo=/[#\/\?@]/g,Sf=/[#\?:]/g,Pf=/[#\?]/g,Cf=/[#\?@]/g,Vf=/#/g;function Tn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&Af(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=Tn.prototype;v.add=function(e,t){Jt(this),this.i=null,e=Be(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Yu(e,t){Jt(e),t=Be(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ju(e,t){return Jt(e),t=Be(e,t),e.g.has(t)}v.forEach=function(e,t){Jt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};v.ta=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};v.Z=function(e){Jt(this);let t=[];if(typeof e=="string")Ju(this,e)&&(t=t.concat(this.g.get(Be(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};v.set=function(e,t){return Jt(this),this.i=null,e=Be(this,e),Ju(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};v.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Zu(e,t,n){Yu(e,t),0<n.length&&(e.i=null,e.g.set(Be(e,t),Is(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bf(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Yu(this,r),Zu(this,i,n))},e)),e.j=t}var kf=class{constructor(e,t){this.g=e,this.map=t}};function tc(e){this.l=e||Df,C.PerformanceNavigationTiming?(e=C.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Df=10;function ec(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function nc(e){return e.h?1:e.g?e.g.size:0}function es(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ms(e,t){e.g?e.g.add(t):e.h=t}function rc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}tc.prototype.cancel=function(){if(this.i=ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ic(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Is(e.i)}var Nf=class{stringify(e){return C.JSON.stringify(e,void 0)}parse(e){return C.JSON.parse(e,void 0)}};function xf(){this.g=new Nf}function Of(e,t,n){const r=n||"";try{Qu(e,function(i,s){let o=i;bn(i)&&(o=Vs(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Mf(e,t){const n=new Fr;if(C.Image){const r=new Image;r.onload=Gn(Qn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Gn(Qn,n,r,"TestLoadImage: error",!1,t),r.onabort=Gn(Qn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Gn(Qn,n,r,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Qn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function zr(e){this.l=e.ec||null,this.j=e.ob||!1}J(zr,Ns);zr.prototype.g=function(){return new Hr(this.l,this.j)};zr.prototype.i=function(e){return function(){return e}}({});function Hr(e,t){Y.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ls,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(Hr,Y);var Ls=0;v=Hr.prototype;v.open=function(e,t){if(this.readyState!=Ls)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,In(this)};v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||C).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=Ls};v.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function sc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}v.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Mn(this):In(this),this.readyState==3&&sc(this)}};v.Za=function(e){this.g&&(this.response=this.responseText=e,Mn(this))};v.Ya=function(e){this.g&&(this.response=e,Mn(this))};v.ka=function(){this.g&&Mn(this)};function Mn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,In(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)};v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function In(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Lf=C.JSON.parse;function H(e){Y.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oc,this.L=this.M=!1}J(H,Y);var oc="",Ff=/^https?$/i,Uf=["POST","PUT"];v=H.prototype;v.Oa=function(e){this.M=e};v.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yi.g(),this.C=this.u?Yo(this.u):Yo(Yi),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ta(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=C.FormData&&e instanceof C.FormData,!(0<=Iu(Uf,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cc(this),0<this.B&&((this.L=$f(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Ds(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ta(this,s)}};function $f(e){return De&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.ua=function(){typeof Ts<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function ta(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ac(e),Kr(e)}function ac(e){e.F||(e.F=!0,rt(e,"complete"),rt(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,rt(this,"complete"),rt(this,"abort"),Kr(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kr(this,!0)),H.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?uc(this):this.kb())};v.kb=function(){uc(this)};function uc(e){if(e.h&&typeof Ts<"u"&&(!e.C[1]||Pt(e)!=4||e.da()!=2)){if(e.v&&Pt(e)==4)Ds(e.La,0,e);else if(rt(e,"readystatechange"),Pt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Xu)[1]||null;!i&&C.self&&C.self.location&&(i=C.self.location.protocol.slice(0,-1)),r=!Ff.test(i?i.toLowerCase():"")}n=r}if(n)rt(e,"complete"),rt(e,"success");else{e.m=6;try{var s=2<Pt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",ac(e)}}finally{Kr(e)}}}}function Kr(e,t){if(e.g){cc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||rt(e,"ready");try{n.onreadystatechange=r}catch{}}}function cc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(C.clearTimeout(e.A),e.A=null)}v.isActive=function(){return!!this.g};function Pt(e){return e.g?e.g.readyState:0}v.da=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Lf(t)}};function ea(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case oc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Bf(e){const t={};e=(e.g&&2<=Pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(mn(e[r]))continue;var n=df(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}sf(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lc(e){let t="";return As(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Fs(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=lc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function We(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function hc(e){this.Ga=0,this.j=[],this.l=new Fr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=We("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=We("baseRetryDelayMs",5e3,e),this.hb=We("retryDelaySeedMs",1e4,e),this.eb=We("forwardChannelMaxRetries",2,e),this.xa=We("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tc(e&&e.concurrentRequestLimit),this.Ja=new xf,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=hc.prototype;v.ra=8;v.H=1;function Us(e){if(dc(e),e.H==3){var t=e.W++,n=$t(e.I);if(B(n,"SID",e.K),B(n,"RID",t),B(n,"TYPE","terminate"),Ln(e,n),t=new xn(e,e.l,t),t.L=2,t.A=qr($t(n)),n=!1,C.navigator&&C.navigator.sendBeacon)try{n=C.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&C.Image&&(new Image().src=t.A,n=!0),n||(t.g=Ec(t.l,null),t.g.ha(t.A)),t.G=Date.now(),On(t)}yc(e)}function Gr(e){e.g&&(Bs(e),e.g.cancel(),e.g=null)}function dc(e){Gr(e),e.u&&(C.clearTimeout(e.u),e.u=null),pr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&C.clearTimeout(e.m),e.m=null)}function Wr(e){if(!ec(e.i)&&!e.m){e.m=!0;var t=e.Na;_n||xu(),yn||(_n(),yn=!0),bs.add(t,e),e.C=0}}function jf(e,t){return nc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Dn(ct(e.Na,e,t),_c(e,e.C)),e.C++,!0)}v.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new xn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Su(s),Pu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=fc(this,i,t),n=$t(this.I),B(n,"RID",e),B(n,"CVER",22),this.F&&B(n,"X-HTTP-Session-Id",this.F),Ln(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(lc(s)))+"&"+t:this.o&&Fs(n,this.o,s)),Ms(this.i,i),this.bb&&B(n,"TYPE","init"),this.P?(B(n,"$req",t),B(n,"SID","null"),i.aa=!0,Zi(i,n,null)):Zi(i,n,t),this.H=2}}else this.H==3&&(e?na(this,e):this.j.length==0||ec(this.i)||na(this))};function na(e,t){var n;t?n=t.m:n=e.W++;const r=$t(e.I);B(r,"SID",e.K),B(r,"RID",n),B(r,"AID",e.V),Ln(e,r),e.o&&e.s&&Fs(r,e.o,e.s),n=new xn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=fc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ms(e.i,n),Zi(n,r,t)}function Ln(e,t){e.na&&As(e.na,function(n,r){B(t,r,n)}),e.h&&Qu({},function(n,r){B(t,r,n)})}function fc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ct(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const h=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{Of(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function pc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;_n||xu(),yn||(_n(),yn=!0),bs.add(t,e),e.A=0}}function $s(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Dn(ct(e.Ma,e),_c(e,e.A)),e.A++,!0)}v.Ma=function(){if(this.u=null,mc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Dn(ct(this.jb,this),e)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),Gr(this),mc(this))};function Bs(e){e.B!=null&&(C.clearTimeout(e.B),e.B=null)}function mc(e){e.g=new xn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);B(t,"RID","rpc"),B(t,"SID",e.K),B(t,"AID",e.V),B(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&B(t,"TO",e.qa),B(t,"TYPE","xmlhttp"),Ln(e,t),e.o&&e.s&&Fs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=qr($t(t)),n.u=null,n.S=!0,Hu(n,e)}v.ib=function(){this.v!=null&&(this.v=null,Gr(this),$s(this),pt(19))};function pr(e){e.v!=null&&(C.clearTimeout(e.v),e.v=null)}function gc(e,t){var n=null;if(e.g==t){pr(e),Bs(e),e.g=null;var r=2}else if(es(e.i,t))n=t.F,rc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Ur(),rt(r,new $u(r,n)),Wr(e)}else pc(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&jf(e,t)||r==2&&$s(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ie(e,5);break;case 4:ie(e,10);break;case 3:ie(e,6);break;default:ie(e,2)}}}function _c(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ie(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ct(e.pb,e);n||(n=new ue("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||dr(n,"https"),qr(n)),Mf(n.toString(),r)}else pt(2);e.H=0,e.h&&e.h.za(t),yc(e),dc(e)}v.pb=function(e){e?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function yc(e){if(e.H=0,e.ma=[],e.h){const t=ic(e.i);(t.length!=0||e.j.length!=0)&&(Ko(e.ma,t),Ko(e.ma,e.j),e.i.i.length=0,Is(e.j),e.j.length=0),e.h.ya()}}function vc(e,t,n){var r=n instanceof ue?$t(n):new ue(n);if(r.g!="")t&&(r.g=t+"."+r.g),fr(r,r.m);else{var i=C.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ue(null);r&&dr(s,r),t&&(s.g=t),i&&fr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&B(r,n,t),B(r,"VER",e.ra),Ln(e,r),r}function Ec(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new H(new zr({ob:n})):new H(e.va),t.Oa(e.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Tc(){}v=Tc.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function mr(){if(De&&!(10<=Number(tf)))throw Error("Environmental error: no available transport.")}mr.prototype.g=function(e,t){return new Tt(e,t)};function Tt(e,t){Y.call(this),this.g=new hc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!mn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!mn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new je(this)}J(Tt,Y);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;pt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=vc(e,null,e.Y),Wr(e)};Tt.prototype.close=function(){Us(this.g)};Tt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Vs(e),e=n);t.j.push(new kf(t.fb++,e)),t.H==3&&Wr(t)};Tt.prototype.N=function(){this.g.h=null,delete this.j,Us(this.g),delete this.g,Tt.$.N.call(this)};function Ic(e){xs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}J(Ic,xs);function wc(){Os.call(this),this.status=1}J(wc,Os);function je(e){this.g=e}J(je,Tc);je.prototype.Ba=function(){rt(this.g,"a")};je.prototype.Aa=function(e){rt(this.g,new Ic(e))};je.prototype.za=function(e){rt(this.g,new wc)};je.prototype.ya=function(){rt(this.g,"b")};function qf(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}J(Rt,qf);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ri(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Rt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ri(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ri(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ri(this,r),i=0;break}}this.h=i,this.i+=t};Rt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function L(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var zf={};function js(e){return-128<=e&&128>e?Yd(e,function(t){return new L([t|0],0>t?-1:0)}):new L([e|0],0>e?-1:0)}function Ct(e){if(isNaN(e)||!isFinite(e))return Se;if(0>e)return et(Ct(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ns;return new L(t,0)}function Ac(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return et(Ac(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ct(Math.pow(t,8)),r=Se,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ct(Math.pow(t,s)),r=r.R(s).add(Ct(o))):(r=r.R(n),r=r.add(Ct(o)))}return r}var ns=4294967296,Se=js(0),rs=js(1),ra=js(16777216);v=L.prototype;v.ea=function(){if(It(this))return-et(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ns+r)*t,t*=ns}return e};v.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Lt(this))return"0";if(It(this))return"-"+et(this).toString(e);for(var t=Ct(Math.pow(e,6)),n=this,r="";;){var i=_r(n,t).g;n=gr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Lt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Lt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function It(e){return e.h==-1}v.X=function(e){return e=gr(this,e),It(e)?-1:Lt(e)?0:1};function et(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new L(n,~e.h).add(rs)}v.abs=function(){return It(this)?et(this):this};v.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new L(n,n[n.length-1]&-2147483648?-1:0)};function gr(e,t){return e.add(et(t))}v.R=function(e){if(Lt(this)||Lt(e))return Se;if(It(this))return It(e)?et(this).R(et(e)):et(et(this).R(e));if(It(e))return et(this.R(et(e)));if(0>this.X(ra)&&0>e.X(ra))return Ct(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Xn(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Xn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Xn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Xn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new L(n,0)};function Xn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Qe(e,t){this.g=e,this.h=t}function _r(e,t){if(Lt(t))throw Error("division by zero");if(Lt(e))return new Qe(Se,Se);if(It(e))return t=_r(et(e),t),new Qe(et(t.g),et(t.h));if(It(t))return t=_r(e,et(t)),new Qe(et(t.g),t.h);if(30<e.g.length){if(It(e)||It(t))throw Error("slowDivide_ only works with positive integers.");for(var n=rs,r=t;0>=r.X(e);)n=ia(n),r=ia(r);var i=_e(n,1),s=_e(r,1);for(r=_e(r,2),n=_e(n,2);!Lt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=_e(r,1),n=_e(n,1)}return t=gr(e,i.R(t)),new Qe(i,t)}for(i=Se;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ct(n),o=s.R(t);It(o)||0<o.X(e);)n-=r,s=Ct(n),o=s.R(t);Lt(s)&&(s=rs),i=i.add(s),e=gr(e,o)}return new Qe(i,e)}v.gb=function(e){return _r(this,e).h};v.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new L(n,this.h&e.h)};v.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new L(n,this.h|e.h)};v.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new L(n,this.h^e.h)};function ia(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new L(n,e.h)}function _e(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new L(i,e.h)}mr.prototype.createWebChannel=mr.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;$r.NO_ERROR=0;$r.TIMEOUT=8;$r.HTTP_ERROR=6;Bu.COMPLETE="complete";ju.EventType=Nn;Nn.OPEN="a";Nn.CLOSE="b";Nn.ERROR="c";Nn.MESSAGE="d";Y.prototype.listen=Y.prototype.O;H.prototype.listenOnce=H.prototype.P;H.prototype.getLastError=H.prototype.Sa;H.prototype.getLastErrorCode=H.prototype.Ia;H.prototype.getStatus=H.prototype.da;H.prototype.getResponseJson=H.prototype.Wa;H.prototype.getResponseText=H.prototype.ja;H.prototype.send=H.prototype.ha;H.prototype.setWithCredentials=H.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;L.prototype.add=L.prototype.add;L.prototype.multiply=L.prototype.R;L.prototype.modulo=L.prototype.gb;L.prototype.compare=L.prototype.X;L.prototype.toNumber=L.prototype.ea;L.prototype.toString=L.prototype.toString;L.prototype.getBits=L.prototype.D;L.fromNumber=Ct;L.fromString=Ac;var Hf=function(){return new mr},Kf=function(){return Ur()},Si=$r,Gf=Bu,Wf=fe,sa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Yn=ju,Qf=H,Xf=Rt,Pe=L;const oa="@firebase/firestore";/**
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
 */class at{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let qe="10.7.2";/**
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
 */const le=new gu("@firebase/firestore");function Xe(){return le.logLevel}function y(e,...t){if(le.logLevel<=O.DEBUG){const n=t.map(qs);le.debug(`Firestore (${qe}): ${e}`,...n)}}function kt(e,...t){if(le.logLevel<=O.ERROR){const n=t.map(qs);le.error(`Firestore (${qe}): ${e}`,...n)}}function Ne(e,...t){if(le.logLevel<=O.WARN){const n=t.map(qs);le.warn(`Firestore (${qe}): ${e}`,...n)}}function qs(e){if(typeof e=="string")return e;try{/**
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
 */function S(e="Unexpected state"){const t=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: `+e;throw kt(t),new Error(t)}function $(e,t){e||S()}function k(e,t){return e}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends $e{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Rc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class Jf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zf{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new Rc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new at(t)}}class tp{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ep{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new tp(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class np{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rp{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new np(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ip(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Sc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ip(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function M(e,t){return e<t?-1:e>t?1:0}function xe(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?M(this.nanoseconds,t.nanoseconds):M(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new Q(0,0))}static max(){return new b(new Q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wn{constructor(t,n,r){n===void 0?n=0:n>t.length&&S(),r===void 0?r=t.length-n:r>t.length-n&&S(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return wn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof wn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class j extends wn{construct(t,n,r){return new j(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new j(n)}static emptyPath(){return new j([])}}const sp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends wn{construct(t,n,r){return new nt(t,n,r)}static isValidIdentifier(t){return sp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(j.fromString(t))}static fromName(t){return new w(j.fromString(t).popFirst(5))}static empty(){return new w(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&j.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return j.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new j(t.slice()))}}function op(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new Q(n+1,0):new Q(n,r));return new Wt(i,w.empty(),t)}function ap(e){return new Wt(e.readTime,e.key,-1)}class Wt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Wt(b.min(),w.empty(),-1)}static max(){return new Wt(b.max(),w.empty(),-1)}}function up(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:M(e.largestBatchId,t.largestBatchId))}/**
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
 */const cp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Fn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==cp)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(i=>i?p.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new p((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new p((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class zs{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Kt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new on(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Hs(r.target.error);this.V.reject(new on(t,i))}}static open(t,n,r,i){try{return new zs(n,t.transaction(i,r))}catch(s){throw new on(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(y("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new dp(n)}}class se{constructor(t,n,r){this.name=t,this.version=n,this.p=r,se.S(cr())===12.2&&kt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return y("SimpleDb","Removing database:",t),ne(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!pu())return!1;if(se.C())return!0;const t=cr(),n=se.S(t),r=0<n&&n<10,i=se.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new on(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new I(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new I(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new on(t,o))},i.onupgradeneeded=s=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=zs.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),p.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hp{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return ne(this.k.delete())}}class on extends I{constructor(t,n){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Un(e){return e.name==="IndexedDbTransactionError"}class dp{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(y("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),ne(r)}add(t){return y("SimpleDb","ADD",this.store.name,t,t),ne(this.store.add(t))}get(t){return ne(this.store.get(t)).next(n=>(n===void 0&&(n=null),y("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return y("SimpleDb","DELETE",this.store.name,t),ne(this.store.delete(t))}count(){return y("SimpleDb","COUNT",this.store.name),ne(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new p((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new p((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){y("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new p((r,i)=>{n.onerror=s=>{const o=Hs(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new p((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new hp(a),c=n(a.primaryKey,a.value,u);if(c instanceof p){const h=c.catch(l=>(u.done(),p.reject(l)));r.push(h)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>p.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function ne(e){return new p((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=Hs(r.target.error);n(i)}})}let aa=!1;function Hs(e){const t=se.S(cr());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return aa||(aa=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class Ks{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Ks._e=-1;function Qr(e){return e==null}function yr(e){return e===0&&1/e==-1/0}function fp(e){return typeof e=="number"&&Number.isInteger(e)&&!yr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function ua(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function pe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Pc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class q{constructor(t,n){this.comparator=t,this.root=n||tt.EMPTY}insert(t,n){return new q(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,tt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jn(this.root,t,this.comparator,!0)}}class Jn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class tt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new tt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,n,r,i,s){return this}insert(t,n,r){return new tt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ca(this.data.getIterator())}getIteratorFrom(t){return new ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new it(this.comparator);return n.data=t,n}}class ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new At([])}unionWith(t){let n=new it(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new At(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return xe(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Cc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Cc("Invalid base64 string: "+s):s}}(t);return new ht(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ht(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const pp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(e){if($(!!e),typeof e=="string"){let t=0;const n=pp.exec(e);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:G(e.seconds),nanos:G(e.nanos)}}function G(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function he(e){return typeof e=="string"?ht.fromBase64String(e):ht.fromUint8Array(e)}/**
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
 */function Gs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ws(e){const t=e.mapValue.fields.__previous_value__;return Gs(t)?Ws(t):t}function An(e){const t=Qt(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
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
 */class mp{constructor(t,n,r,i,s,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Rn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Rn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Gs(e)?4:gp(e)?9007199254740991:10:S()}function Dt(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return An(e).isEqual(An(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qt(i.timestampValue),a=Qt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return he(i.bytesValue).isEqual(he(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return G(i.geoPointValue.latitude)===G(s.geoPointValue.latitude)&&G(i.geoPointValue.longitude)===G(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return G(i.integerValue)===G(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=G(i.doubleValue),a=G(s.doubleValue);return o===a?yr(o)===yr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return xe(e.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ua(o)!==ua(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Dt(o[u],a[u])))return!1;return!0}(e,t);default:return S()}}function Sn(e,t){return(e.values||[]).find(n=>Dt(n,t))!==void 0}function Oe(e,t){if(e===t)return 0;const n=de(e),r=de(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=G(s.integerValue||s.doubleValue),u=G(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return la(e.timestampValue,t.timestampValue);case 4:return la(An(e),An(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(s,o){const a=he(s),u=he(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=M(a[c],u[c]);if(h!==0)return h}return M(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=M(G(s.latitude),G(o.latitude));return a!==0?a:M(G(s.longitude),G(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=Oe(a[c],u[c]);if(h)return h}return M(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Zn.mapValue&&o===Zn.mapValue)return 0;if(s===Zn.mapValue)return 1;if(o===Zn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let l=0;l<u.length&&l<h.length;++l){const f=M(u[l],h[l]);if(f!==0)return f;const d=Oe(a[u[l]],c[h[l]]);if(d!==0)return d}return M(u.length,h.length)}(e.mapValue,t.mapValue);default:throw S()}}function la(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return M(e,t);const n=Qt(e),r=Qt(t),i=M(n.seconds,r.seconds);return i!==0?i:M(n.nanos,r.nanos)}function Me(e){return is(e)}function is(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Qt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return he(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return w.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=is(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${is(n.fields[o])}`;return i+"}"}(e.mapValue):S()}function ss(e){return!!e&&"integerValue"in e}function Qs(e){return!!e&&"arrayValue"in e}function ha(e){return!!e&&"nullValue"in e}function da(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rr(e){return!!e&&"mapValue"in e}function an(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return pe(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=an(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=an(e.arrayValue.values[n]);return t}return Object.assign({},e)}function gp(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!rr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=an(n)}setAll(t){let n=nt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=an(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];rr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){pe(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new vt(an(this.value))}}function Vc(e){const t=[];return pe(e.fields,(n,r)=>{const i=new nt([n]);if(rr(r)){const s=Vc(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new At(t)}/**
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
 */class ut{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ut(t,0,b.min(),b.min(),b.min(),vt.empty(),0)}static newFoundDocument(t,n,r,i){return new ut(t,1,n,b.min(),r,i,0)}static newNoDocument(t,n){return new ut(t,2,n,b.min(),b.min(),vt.empty(),0)}static newUnknownDocument(t,n){return new ut(t,3,n,b.min(),b.min(),vt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vr{constructor(t,n){this.position=t,this.inclusive=n}}function fa(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),n.key):r=Oe(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pa(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Dt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Er{constructor(t,n="asc"){this.field=t,this.dir=n}}function _p(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class bc{}class W extends bc{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new vp(t,n,r):n==="array-contains"?new Ip(t,r):n==="in"?new wp(t,r):n==="not-in"?new Ap(t,r):n==="array-contains-any"?new Rp(t,r):new W(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Ep(t,r):new Tp(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Oe(n,this.value)):n!==null&&de(this.value)===de(n)&&this.matchesComparison(Oe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends bc{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Nt(t,n)}matches(t){return kc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function kc(e){return e.op==="and"}function Dc(e){return yp(e)&&kc(e)}function yp(e){for(const t of e.filters)if(t instanceof Nt)return!1;return!0}function os(e){if(e instanceof W)return e.field.canonicalString()+e.op.toString()+Me(e.value);if(Dc(e))return e.filters.map(t=>os(t)).join(",");{const t=e.filters.map(n=>os(n)).join(",");return`${e.op}(${t})`}}function Nc(e,t){return e instanceof W?function(r,i){return i instanceof W&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)}(e,t):e instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Nc(o,i.filters[a]),!0):!1}(e,t):void S()}function xc(e){return e instanceof W?function(n){return`${n.field.canonicalString()} ${n.op} ${Me(n.value)}`}(e):e instanceof Nt?function(n){return n.op.toString()+" {"+n.getFilters().map(xc).join(" ,")+"}"}(e):"Filter"}class vp extends W{constructor(t,n,r){super(t,n,r),this.key=w.fromName(r.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Ep extends W{constructor(t,n){super(t,"in",n),this.keys=Oc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Tp extends W{constructor(t,n){super(t,"not-in",n),this.keys=Oc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Oc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>w.fromName(r.referenceValue))}class Ip extends W{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Qs(n)&&Sn(n.arrayValue,this.value)}}class wp extends W{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Sn(this.value.arrayValue,n)}}class Ap extends W{constructor(t,n){super(t,"not-in",n)}matches(t){if(Sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Sn(this.value.arrayValue,n)}}class Rp extends W{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Qs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sn(this.value.arrayValue,r))}}/**
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
 */class Sp{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function ma(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Sp(e,t,n,r,i,s,o)}function Xs(e){const t=k(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>os(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Me(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Me(r)).join(",")),t.ce=n}return t.ce}function Ys(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!_p(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Nc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!pa(e.startAt,t.startAt)&&pa(e.endAt,t.endAt)}function as(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Xr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Pp(e,t,n,r,i,s,o,a){return new Xr(e,t,n,r,i,s,o,a)}function Js(e){return new Xr(e)}function ga(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Cp(e){return e.collectionGroup!==null}function un(e){const t=k(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new it(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new Er(s,r))}),n.has(nt.keyField().canonicalString())||t.le.push(new Er(nt.keyField(),r))}return t.le}function Vt(e){const t=k(e);return t.he||(t.he=Vp(t,un(e))),t.he}function Vp(e,t){if(e.limitType==="F")return ma(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Er(i.field,s)});const n=e.endAt?new vr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new vr(e.startAt.position,e.startAt.inclusive):null;return ma(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function us(e,t,n){return new Xr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Yr(e,t){return Ys(Vt(e),Vt(t))&&e.limitType===t.limitType}function Mc(e){return`${Xs(Vt(e))}|lt:${e.limitType}`}function ve(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xc(i)).join(", ")}]`),Qr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Me(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Me(i)).join(",")),`Target(${r})`}(Vt(e))}; limitType=${e.limitType})`}function Jr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of un(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=fa(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,un(r),i)||r.endAt&&!function(o,a,u){const c=fa(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,un(r),i))}(e,t)}function bp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Lc(e){return(t,n)=>{let r=!1;for(const i of un(e)){const s=kp(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kp(e,t,n){const r=e.field.isKeyField()?w.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Oe(u,c):S()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return S()}}/**
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
 */class ze{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){pe(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Pc(this.inner)}size(){return this.innerSize}}/**
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
 */const Dp=new q(w.comparator);function Bt(){return Dp}const Fc=new q(w.comparator);function tn(...e){let t=Fc;for(const n of e)t=t.insert(n.key,n);return t}function Uc(e){let t=Fc;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function oe(){return cn()}function $c(){return cn()}function cn(){return new ze(e=>e.toString(),(e,t)=>e.isEqual(t))}const Np=new q(w.comparator),xp=new it(w.comparator);function N(...e){let t=xp;for(const n of e)t=t.add(n);return t}const Op=new it(M);function Mp(){return Op}/**
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
 */function Bc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(t)?"-0":t}}function jc(e){return{integerValue:""+e}}function Lp(e,t){return fp(t)?jc(t):Bc(e,t)}/**
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
 */class Zr{constructor(){this._=void 0}}function Fp(e,t,n){return e instanceof Tr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gs(s)&&(s=Ws(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Pn?zc(e,t):e instanceof Cn?Hc(e,t):function(i,s){const o=qc(i,s),a=_a(o)+_a(i.Ie);return ss(o)&&ss(i.Ie)?jc(a):Bc(i.serializer,a)}(e,t)}function Up(e,t,n){return e instanceof Pn?zc(e,t):e instanceof Cn?Hc(e,t):n}function qc(e,t){return e instanceof Ir?function(r){return ss(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Tr extends Zr{}class Pn extends Zr{constructor(t){super(),this.elements=t}}function zc(e,t){const n=Kc(t);for(const r of e.elements)n.some(i=>Dt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Cn extends Zr{constructor(t){super(),this.elements=t}}function Hc(e,t){let n=Kc(t);for(const r of e.elements)n=n.filter(i=>!Dt(i,r));return{arrayValue:{values:n}}}class Ir extends Zr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function _a(e){return G(e.integerValue||e.doubleValue)}function Kc(e){return Qs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function $p(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Pn&&i instanceof Pn||r instanceof Cn&&i instanceof Cn?xe(r.elements,i.elements,Dt):r instanceof Ir&&i instanceof Ir?Dt(r.Ie,i.Ie):r instanceof Tr&&i instanceof Tr}(e.transform,t.transform)}class Bp{constructor(t,n){this.version=t,this.transformResults=n}}class Ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ir(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ti{}function Gc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Qc(e.key,Ft.none()):new ei(e.key,e.data,Ft.none());{const n=e.data,r=vt.empty();let i=new it(nt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new me(e.key,r,new At(i.toArray()),Ft.none())}}function jp(e,t,n){e instanceof ei?function(i,s,o){const a=i.value.clone(),u=va(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof me?function(i,s,o){if(!ir(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=va(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Wc(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ln(e,t,n,r){return e instanceof ei?function(s,o,a,u){if(!ir(s.precondition,o))return a;const c=s.value.clone(),h=Ea(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof me?function(s,o,a,u){if(!ir(s.precondition,o))return a;const c=Ea(s.fieldTransforms,u,o),h=o.data;return h.setAll(Wc(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(s,o,a){return ir(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function qp(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=qc(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function ya(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xe(r,i,(s,o)=>$p(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ei extends ti{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class me extends ti{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Wc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function va(e,t,n){const r=new Map;$(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Up(o,a,n[i]))}return r}function Ea(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Fp(s,o,t))}return r}class Qc extends ti{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zp extends ti{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hp{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&jp(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ln(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ln(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=$c();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Gc(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&xe(this.mutations,t.mutations,(n,r)=>ya(n,r))&&xe(this.baseMutations,t.baseMutations,(n,r)=>ya(n,r))}}class Zs{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){$(t.mutations.length===r.length);let i=function(){return Np}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zs(t,n,r,i)}}/**
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
 */class Kp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Gp{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var K,x;function Wp(e){switch(e){default:return S();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Xc(e){if(e===void 0)return kt("GRPC error has no .code"),m.UNKNOWN;switch(e){case K.OK:return m.OK;case K.CANCELLED:return m.CANCELLED;case K.UNKNOWN:return m.UNKNOWN;case K.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case K.INTERNAL:return m.INTERNAL;case K.UNAVAILABLE:return m.UNAVAILABLE;case K.UNAUTHENTICATED:return m.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case K.NOT_FOUND:return m.NOT_FOUND;case K.ALREADY_EXISTS:return m.ALREADY_EXISTS;case K.PERMISSION_DENIED:return m.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case K.ABORTED:return m.ABORTED;case K.OUT_OF_RANGE:return m.OUT_OF_RANGE;case K.UNIMPLEMENTED:return m.UNIMPLEMENTED;case K.DATA_LOSS:return m.DATA_LOSS;default:return S()}}(x=K||(K={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Qp(){return new TextEncoder}/**
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
 */const Xp=new Pe([4294967295,4294967295],0);function Ta(e){const t=Qp().encode(e),n=new Xf;return n.update(t),new Uint8Array(n.digest())}function Ia(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Pe([n,r],0),new Pe([i,s],0)]}class to{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new en(`Invalid padding: ${n}`);if(r<0)throw new en(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new en(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new en(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Pe.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(Pe.fromNumber(r)));return i.compare(Xp)===1&&(i=new Pe([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Ta(t),[r,i]=Ia(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new to(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Ta(t),[r,i]=Ia(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class en extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ni{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,$n.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ni(b.min(),i,new q(M),Bt(),N())}}class $n{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new $n(r,n,N(),N(),N())}}/**
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
 */class sr{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class Yc{constructor(t,n){this.targetId=t,this.fe=n}}class Jc{constructor(t,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wa{constructor(){this.ge=0,this.pe=Ra(),this.ye=ht.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=N(),n=N(),r=N();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:S()}}),new $n(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Ra()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,$(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Yp{constructor(t){this.Le=t,this.ke=new Map,this.qe=Bt(),this.Qe=Aa(),this.Ke=new q(M)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(as(s))if(r===0){const o=new w(s.path);this.We(n,o,ut.newNoDocument(o,b.min()))}else $(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=he(r).toUint8Array()}catch(u){if(u instanceof Cc)return Ne("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new to(o,i,s)}catch(u){return Ne(u instanceof en?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&as(a.target)){const u=new w(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,ut.newNoDocument(u,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=N();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new ni(t,n,this.Ke,this.qe,r);return this.qe=Bt(),this.Qe=Aa(),this.Ke=new q(M),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new wa,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new it(M),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new wa),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Aa(){return new q(w.comparator)}function Ra(){return new q(w.comparator)}const Jp={asc:"ASCENDING",desc:"DESCENDING"},Zp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tm={and:"AND",or:"OR"};class em{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function cs(e,t){return e.useProto3Json||Qr(t)?t:{value:t}}function wr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nm(e,t){return wr(e,t.toTimestamp())}function bt(e){return $(!!e),b.fromTimestamp(function(n){const r=Qt(n);return new Q(r.seconds,r.nanos)}(e))}function eo(e,t){return ls(e,t).canonicalString()}function ls(e,t){const n=function(i){return new j(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function tl(e){const t=j.fromString(e);return $(sl(t)),t}function hs(e,t){return eo(e.databaseId,t.path)}function Pi(e,t){const n=tl(t);if(n.get(1)!==e.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(nl(n))}function el(e,t){return eo(e.databaseId,t)}function rm(e){const t=tl(e);return t.length===4?j.emptyPath():nl(t)}function ds(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nl(e){return $(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Sa(e,t,n){return{name:hs(e,t),fields:n.value.mapValue.fields}}function im(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?($(h===void 0||typeof h=="string"),ht.fromBase64String(h||"")):($(h===void 0||h instanceof Uint8Array),ht.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?m.UNKNOWN:Xc(c.code);return new I(h,c.message||"")}(o);n=new Jc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pi(e,r.document.name),s=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):b.min(),a=new vt({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new sr(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Pi(e,r.document),s=r.readTime?bt(r.readTime):b.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Pi(e,r.document),s=r.removedTargetIds||[];n=new sr([],s,i,null)}else{if(!("filter"in t))return S();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Gp(i,s),a=r.targetId;n=new Yc(a,o)}}return n}function sm(e,t){let n;if(t instanceof ei)n={update:Sa(e,t.key,t.value)};else if(t instanceof Qc)n={delete:hs(e,t.key)};else if(t instanceof me)n={update:Sa(e,t.key,t.data),updateMask:pm(t.fieldMask)};else{if(!(t instanceof zp))return S();n={verify:hs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ir)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw S()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:S()}(e,t.precondition)),n}function om(e,t){return e&&e.length>0?($(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?bt(i.updateTime):bt(s);return o.isEqual(b.min())&&(o=bt(s)),new Bp(o,i.transformResults||[])}(n,t))):[]}function am(e,t){return{documents:[el(e,t.path)]}}function um(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=el(e,i);const s=function(c){if(c.length!==0)return il(Nt.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(f){return{field:Ee(f.field),direction:hm(f.dir)}}(h))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=cs(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:i}}function cm(e){let t=rm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(l){const f=rl(l);return f instanceof Nt&&Dc(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(f=>function(E){return new Er(Te(E.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,Qr(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(l){const f=!!l.before,d=l.values||[];return new vr(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const f=!l.before,d=l.values||[];return new vr(d,f)}(n.endAt)),Pp(t,i,o,s,a,"F",u,c)}function lm(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function rl(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Te(n.unaryFilter.field);return W.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Te(n.unaryFilter.field);return W.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Te(n.unaryFilter.field);return W.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Te(n.unaryFilter.field);return W.create(o,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(n){return W.create(Te(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Nt.create(n.compositeFilter.filters.map(r=>rl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return S()}}(n.compositeFilter.op))}(e):S()}function hm(e){return Jp[e]}function dm(e){return Zp[e]}function fm(e){return tm[e]}function Ee(e){return{fieldPath:e.canonicalString()}}function Te(e){return nt.fromServerFormat(e.fieldPath)}function il(e){return e instanceof W?function(n){if(n.op==="=="){if(da(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NAN"}};if(ha(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(da(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NOT_NAN"}};if(ha(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(n.field),op:dm(n.op),value:n.value}}}(e):e instanceof Nt?function(n){const r=n.getFilters().map(i=>il(i));return r.length===1?r[0]:{compositeFilter:{op:fm(n.op),filters:r}}}(e):S()}function pm(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function sl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class qt{constructor(t,n,r,i,s=b.min(),o=b.min(),a=ht.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class mm{constructor(t){this.ct=t}}function gm(e){const t=cm({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?us(t,t.limit,"L"):t}/**
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
 */class _m{constructor(){this._n=new ym}addToCollectionParentIndex(t,n){return this._n.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Wt.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class ym{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new it(j.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(j.comparator)).toArray()}}/**
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
 */class Le{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Le(0)}static Bn(){return new Le(-1)}}/**
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
 */class vm{constructor(){this.changes=new ze(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Em{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Tm{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&ln(r.mutation,i,At.empty(),Q.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,N()).next(()=>r))}getLocalViewOfDocuments(t,n,r=N()){const i=oe();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=tn();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=oe();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,N()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Bt();const o=cn(),a=function(){return cn()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof me)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ln(h.mutation,c,h.mutation.getFieldMask(),Q.now())):o.set(c.key,At.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new Em(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=cn();let i=new q((o,a)=>o-a),s=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||At.empty();h=a.applyToLocalView(c,h),r.set(u,h);const l=(i.get(a.batchId)||N()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=$c();h.forEach(f=>{if(!s.has(f)){const d=Gc(n.get(f),r.get(f));d!==null&&l.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Cp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):p.resolve(oe());let a=-1,u=s;return o.next(c=>p.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),s.get(h)?p.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,N())).next(h=>({batchId:a,changes:Uc(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(r=>{let i=tn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=tn();return this.indexManager.getCollectionParents(t,s).next(a=>p.forEach(a,u=>{const c=function(l,f){return new Xr(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(h=>{h.forEach((l,f)=>{o=o.insert(l,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ut.newInvalidDocument(h)))});let a=tn();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ln(h.mutation,c,At.empty(),Q.now()),Jr(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class Im{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return p.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:gm(i.bundledQuery),readTime:bt(i.readTime)}}(n)),p.resolve()}}/**
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
 */class wm{constructor(){this.overlays=new q(w.comparator),this.hr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=oe();return p.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const i=oe(),s=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new q((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=oe(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=oe(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return p.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Kp(n,r));let s=this.hr.get(n);s===void 0&&(s=N(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class no{constructor(){this.Pr=new it(X.Ir),this.Tr=new it(X.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new X(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new X(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new w(new j([])),r=new X(n,t),i=new X(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new w(new j([])),r=new X(n,t),i=new X(n,t+1);let s=N();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new X(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class X{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return w.comparator(t.key,n.key)||M(t.pr,n.pr)}static Er(t,n){return M(t.pr,n.pr)||w.comparator(t.key,n.key)}}/**
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
 */class Am{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new it(X.Ir)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hp(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new X(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new X(n,0),i=new X(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new it(M);return n.forEach(i=>{const s=new X(i,0),o=new X(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),p.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new X(new w(s),0);let a=new it(M);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){$(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return p.forEach(n.mutations,i=>{const s=new X(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new X(n,0),i=this.wr.firstAfterOrEqual(r);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Rm{constructor(t){this.vr=t,this.docs=function(){return new q(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(t,n){let r=Bt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Bt();const o=n.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||up(ap(h),r)<=0||(i.has(h.key)||Jr(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,n,r,i){S()}Fr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Sm(this)}getSize(t){return p.resolve(this.size)}}class Sm extends vm{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class Pm{constructor(t){this.persistence=t,this.Mr=new ze(n=>Xs(n),Ys),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Or=0,this.Nr=new no,this.targetCount=0,this.Br=Le.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),p.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Le(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.qn(n),p.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Nr.containsKey(n))}}/**
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
 */class Cm{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Ks(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Pm(this),this.indexManager=new _m,this.remoteDocumentCache=function(i){return new Rm(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new mm(n),this.$r=new Im(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new wm,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Am(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const i=new Vm(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return p.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Vm extends lp{constructor(t){super(),this.currentSequenceNumber=t}}class ro{constructor(t){this.persistence=t,this.zr=new no,this.jr=null}static Hr(t){return new ro(t)}get Jr(){if(this.jr)return this.jr;throw S()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),p.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,r=>{const i=w.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,b.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return p.or([()=>p.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class io{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=N(),i=N();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new io(t,n.fromCache,r,i)}}/**
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
 */class bm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class km{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Vh()?8:se.v(cr())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new bm;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(Xe()<=O.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",ve(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(Xe()<=O.DEBUG&&y("QueryEngine","Query:",ve(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Xe()<=O.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",ve(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(n))):p.resolve())}ji(t,n){if(ga(n))return p.resolve(null);let r=Vt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=us(n,null,"F"),r=Vt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=N(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(t,us(n,null,"F")):this.es(t,c,n,u)}))})))}Hi(t,n,r,i){return ga(n)||i.isEqual(b.min())?p.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?p.resolve(null):(Xe()<=O.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ve(n)),this.es(t,o,n,op(i,-1)).next(a=>a))})}Zi(t,n){let r=new it(Lc(t));return n.forEach((i,s)=>{Jr(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return Xe()<=O.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ve(n)),this.zi.getDocumentsMatchingQuery(t,n,Wt.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Dm{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new q(M),this.rs=new ze(s=>Xs(s),Ys),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tm(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Nm(e,t,n,r){return new Dm(e,t,n,r)}async function ol(e,t){const n=k(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=N();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function xm(e,t){const n=k(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const l=c.batch,f=l.keys();let d=p.resolve();return f.forEach(E=>{d=d.next(()=>h.getEntry(u,E)).next(T=>{const _=c.docVersions.get(E);$(_!==null),T.version.compareTo(_)<0&&(l.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),h.addEntry(T)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(u,l))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=N();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function al(e){const t=k(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Om(e,t){const n=k(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((h,l)=>{const f=i.get(l);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,l).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,l)));let d=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(l)!==null?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):h.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(h.resumeToken,r)),i=i.insert(l,d),function(T,_,A){return T.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,d,h)&&a.push(n.Qr.updateTargetData(s,d))});let u=Bt(),c=N();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Mm(s,o,t.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(b.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(l=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function Mm(e,t,n){let r=N(),i=N();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Bt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Lm(e,t){const n=k(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Fm(e,t){const n=k(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,p.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new qt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function fs(e,t,n){const r=k(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Un(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Pa(e,t,n){const r=k(e);let i=b.min(),s=N();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const l=k(u),f=l.rs.get(h);return f!==void 0?p.resolve(l.ns.get(f)):l.Qr.getTargetData(c,h)}(r,o,Vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:b.min(),n?s:N())).next(a=>(Um(r,bp(t),a),{documents:a,hs:s})))}function Um(e,t,n){let r=e.ss.get(t)||b.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class Ca{constructor(){this.activeTargetIds=Mp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $m{constructor(){this.no=new Ca,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ca,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Bm{io(t){}shutdown(){}}/**
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
 */class Va{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tr=null;function Ci(){return tr===null?tr=function(){return 268435456+Math.round(2147483648*Math.random())}():tr++,"0x"+tr.toString(16)}/**
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
 */const jm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const ot="WebChannelConnection";class zm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Ci(),u=this.bo(n,r.toUriEncodedString());y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,u,c,i).then(h=>(y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ne("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=jm[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=Ci();return new Promise((o,a)=>{const u=new Qf;u.setWithCredentials(!0),u.listenOnce(Gf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Si.NO_ERROR:const h=u.getResponseJson();y(ot,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Si.TIMEOUT:y(ot,`RPC '${t}' ${s} timed out`),a(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case Si.HTTP_ERROR:const l=u.getStatus();if(y(ot,`RPC '${t}' ${s} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const E=function(_){const A=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(A)>=0?A:m.UNKNOWN}(d.status);a(new I(E,d.message))}else a(new I(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new I(m.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{y(ot,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);y(ot,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Fo(t,n,r){const i=Ci(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Hf(),a=Kf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");y(ot,`Creating RPC '${t}' stream ${i}: ${h}`,u);const l=o.createWebChannel(h,u);let f=!1,d=!1;const E=new qm({lo:_=>{d?y(ot,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(f||(y(ot,`Opening RPC '${t}' stream ${i} transport.`),l.open(),f=!0),y(ot,`RPC '${t}' stream ${i} sending:`,_),l.send(_))},ho:()=>l.close()}),T=(_,A,D)=>{_.listen(A,F=>{try{D(F)}catch(Z){setTimeout(()=>{throw Z},0)}})};return T(l,Yn.EventType.OPEN,()=>{d||y(ot,`RPC '${t}' stream ${i} transport opened.`)}),T(l,Yn.EventType.CLOSE,()=>{d||(d=!0,y(ot,`RPC '${t}' stream ${i} transport closed`),E.Vo())}),T(l,Yn.EventType.ERROR,_=>{d||(d=!0,Ne(ot,`RPC '${t}' stream ${i} transport errored:`,_),E.Vo(new I(m.UNAVAILABLE,"The operation could not be completed")))}),T(l,Yn.EventType.MESSAGE,_=>{var A;if(!d){const D=_.data[0];$(!!D);const F=D,Z=F.error||((A=F[0])===null||A===void 0?void 0:A.error);if(Z){y(ot,`RPC '${t}' stream ${i} received error:`,Z);const mt=Z.status;let dt=function(R){const U=K[R];if(U!==void 0)return Xc(U)}(mt),wt=Z.message;dt===void 0&&(dt=m.INTERNAL,wt="Unknown error status: "+mt+" with message "+Z.message),d=!0,E.Vo(new I(dt,wt)),l.close()}else y(ot,`RPC '${t}' stream ${i} received:`,D),E.mo(D)}}),T(a,Wf.STAT_EVENT,_=>{_.stat===sa.PROXY?y(ot,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===sa.NOPROXY&&y(ot,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function Vi(){return typeof document<"u"?document:null}/**
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
 */function ri(e){return new em(e,!0)}/**
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
 */class ul{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class cl{constructor(t,n,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new ul(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(kt(n.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new I(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hm extends cl{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=im(this.serializer,t),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?bt(o.readTime):b.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=ds(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=as(u)?{documents:am(s,u)}:{query:um(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Zc(s,o.resumeToken);const c=cs(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=wr(s,o.snapshotVersion.toTimestamp());const c=cs(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=lm(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=ds(this.serializer),n.removeTarget=t,this.t_(n)}}class Km extends cl{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if($(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=om(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.T_(r,n)}return $(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=ds(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>sm(this.serializer,r))};this.t_(n)}}/**
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
 */class Gm extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,ls(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(m.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,ls(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Wm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(kt(n),this.g_=!1):y("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Qm{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{ge(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=k(u);c.v_.add(4),await Bn(c),c.x_.set("Unknown"),c.v_.delete(4),await ii(c)}(this))})}),this.x_=new Wm(r,i)}}async function ii(e){if(ge(e))for(const t of e.F_)await t(!0)}async function Bn(e){for(const t of e.F_)await t(!1)}function ll(e,t){const n=k(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),ao(n)?oo(n):He(n).Jo()&&so(n,t))}function hl(e,t){const n=k(e),r=He(n);n.C_.delete(t),r.Jo()&&dl(n,t),n.C_.size===0&&(r.Jo()?r.Xo():ge(n)&&n.x_.set("Unknown"))}function so(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(b.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}He(e).c_(t)}function dl(e,t){e.O_.Oe(t),He(e).l_(t)}function oo(e){e.O_=new Yp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),He(e).start(),e.x_.p_()}function ao(e){return ge(e)&&!He(e).Ho()&&e.C_.size>0}function ge(e){return k(e).v_.size===0}function fl(e){e.O_=void 0}async function Xm(e){e.C_.forEach((t,n)=>{so(e,t)})}async function Ym(e,t){fl(e),ao(e)?(e.x_.S_(t),oo(e)):e.x_.set("Unknown")}async function Jm(e,t,n){if(e.x_.set("Online"),t instanceof Jc&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ar(e,r)}else if(t instanceof sr?e.O_.$e(t):t instanceof Yc?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(b.min()))try{const r=await al(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.C_.get(c);h&&s.C_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.C_.get(u);if(!h)return;s.C_.set(u,h.withResumeToken(ht.EMPTY_BYTE_STRING,h.snapshotVersion)),dl(s,u);const l=new qt(h.target,u,c,h.sequenceNumber);so(s,l)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await Ar(e,r)}}async function Ar(e,t,n){if(!Un(t))throw t;e.v_.add(1),await Bn(e),e.x_.set("Offline"),n||(n=()=>al(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await ii(e)})}function pl(e,t){return t().catch(n=>Ar(e,n,t))}async function si(e){const t=k(e),n=Xt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Zm(t);)try{const i=await Lm(t.localStore,r);if(i===null){t.D_.length===0&&n.Xo();break}r=i.batchId,tg(t,i)}catch(i){await Ar(t,i)}ml(t)&&gl(t)}function Zm(e){return ge(e)&&e.D_.length<10}function tg(e,t){e.D_.push(t);const n=Xt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function ml(e){return ge(e)&&!Xt(e).Ho()&&e.D_.length>0}function gl(e){Xt(e).start()}async function eg(e){Xt(e).d_()}async function ng(e){const t=Xt(e);for(const n of e.D_)t.I_(n.mutations)}async function rg(e,t,n){const r=e.D_.shift(),i=Zs.from(r,t,n);await pl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await si(e)}async function ig(e,t){t&&Xt(e).P_&&await async function(r,i){if(function(o){return Wp(o)&&o!==m.ABORTED}(i.code)){const s=r.D_.shift();Xt(r).Zo(),await pl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await si(r)}}(e,t),ml(e)&&gl(e)}async function ba(e,t){const n=k(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=ge(n);n.v_.add(3),await Bn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await ii(n)}async function sg(e,t){const n=k(e);t?(n.v_.delete(2),await ii(n)):t||(n.v_.add(2),await Bn(n),n.x_.set("Unknown"))}function He(e){return e.N_||(e.N_=function(n,r,i){const s=k(n);return s.R_(),new Hm(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Xm.bind(null,e),To:Ym.bind(null,e),u_:Jm.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),ao(e)?oo(e):e.x_.set("Unknown")):(await e.N_.stop(),fl(e))})),e.N_}function Xt(e){return e.B_||(e.B_=function(n,r,i){const s=k(n);return s.R_(),new Km(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:eg.bind(null,e),To:ig.bind(null,e),E_:ng.bind(null,e),T_:rg.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await si(e)):(await e.B_.stop(),e.D_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
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
 */class uo{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new uo(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function co(e,t){if(kt("AsyncQueue",`${t}: ${e}`),Un(e))return new I(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Ce{constructor(t){this.comparator=t?(n,r)=>t(n,r)||w.comparator(n.key,r.key):(n,r)=>w.comparator(n.key,r.key),this.keyedMap=tn(),this.sortedSet=new q(this.comparator)}static emptySet(t){return new Ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class ka{constructor(){this.L_=new q(w.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):S():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Fe{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fe(t,n,Ce.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class og{constructor(){this.q_=void 0,this.Q_=[]}}class ag{constructor(){this.queries=new ze(t=>Mc(t),Yr),this.onlineState="Unknown",this.K_=new Set}}async function ug(e,t){const n=k(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new og),i)try{s.q_=await n.onListen(r)}catch(o){const a=co(o,`Initialization of query '${ve(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&lo(n)}async function cg(e,t){const n=k(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lg(e,t){const n=k(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&lo(n)}function hg(e,t,n){const r=k(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function lo(e){e.K_.forEach(t=>{t.next()})}class dg{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class _l{constructor(t){this.key=t}}class yl{constructor(t){this.key=t}}class fg{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=N(),this.mutatedKeys=N(),this.ua=Lc(t),this.ca=new Ce(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new ka,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const f=i.get(h),d=Jr(this.query,l)?l:null,E=!!f&&this.mutatedKeys.has(f.key),T=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?E!==T&&(r.track({type:3,doc:d}),_=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),_=!0,(u&&this.ua(d,u)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(u||c)&&(a=!0)),_&&(d?(o=o.add(d),s=T?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((h,l)=>function(d,E){const T=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return T(d)-T(E)}(h.type,l.type)||this.ua(h.doc,l.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],u=this.aa.size===0&&this.current&&!i?1:0,c=u!==this._a;return this._a=u,o.length!==0||c?{snapshot:new Fe(this.query,t.ca,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ka,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=N(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new yl(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new _l(r))}),n}Ra(t){this.oa=t.hs,this.aa=N();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Fe.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class pg{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class mg{constructor(t){this.key=t,this.ma=!1}}class gg{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ze(a=>Mc(a),Yr),this.pa=new Map,this.ya=new Set,this.wa=new q(w.comparator),this.Sa=new Map,this.ba=new no,this.Da={},this.Ca=new Map,this.va=Le.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function _g(e,t){const n=Pg(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Fm(n.localStore,Vt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await yg(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&ll(n.remoteStore,o)}return i}async function yg(e,t,n,r,i){e.Ma=(l,f,d)=>async function(T,_,A,D){let F=_.view.ha(A);F.Xi&&(F=await Pa(T.localStore,_.query,!1).then(({documents:wt})=>_.view.ha(wt,F)));const Z=D&&D.targetChanges.get(_.targetId),mt=D&&D.targetMismatches.get(_.targetId)!=null,dt=_.view.applyChanges(F,T.isPrimaryClient,Z,mt);return Na(T,_.targetId,dt.da),dt.snapshot}(e,l,f,d);const s=await Pa(e.localStore,t,!0),o=new fg(t,s.hs),a=o.ha(s.documents),u=$n.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Na(e,n,c.da);const h=new pg(t,n,o);return e.ga.set(t,h),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function vg(e,t){const n=k(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Yr(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hl(n.remoteStore,r.targetId),ps(n,r.targetId)}).catch(Fn)):(ps(n,r.targetId),await fs(n.localStore,r.targetId,!0))}async function Eg(e,t,n){const r=Cg(e);try{const i=await function(o,a){const u=k(o),c=Q.now(),h=a.reduce((d,E)=>d.add(E.key),N());let l,f;return u.persistence.runTransaction("Locally write mutations","readwrite",d=>{let E=Bt(),T=N();return u.os.getEntries(d,h).next(_=>{E=_,E.forEach((A,D)=>{D.isValidDocument()||(T=T.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(d,E)).next(_=>{l=_;const A=[];for(const D of a){const F=qp(D,l.get(D.key).overlayedDocument);F!=null&&A.push(new me(D.key,F,Vc(F.value.mapValue),Ft.exists(!0)))}return u.mutationQueue.addMutationBatch(d,c,A,a)}).next(_=>{f=_;const A=_.applyToLocalDocumentSet(l,T);return u.documentOverlayCache.saveOverlays(d,_.batchId,A)})}).then(()=>({batchId:f.batchId,changes:Uc(l)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Da[o.currentUser.toKey()];c||(c=new q(M)),c=c.insert(a,u),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,n),await jn(r,i.changes),await si(r.remoteStore)}catch(i){const s=co(i,"Failed to persist write");n.reject(s)}}async function vl(e,t){const n=k(e);try{const r=await Om(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?$(o.ma):i.removedDocuments.size>0&&($(o.ma),o.ma=!1))}),await jn(n,r,t)}catch(r){await Fn(r)}}function Da(e,t,n){const r=k(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=k(o);u.onlineState=a;let c=!1;u.queries.forEach((h,l)=>{for(const f of l.Q_)f.U_(a)&&(c=!0)}),c&&lo(u)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Tg(e,t,n){const r=k(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new q(w.comparator);o=o.insert(s,ut.newNoDocument(s,b.min()));const a=N().add(s),u=new ni(b.min(),new Map,new q(M),o,a);await vl(r,u),r.wa=r.wa.remove(s),r.Sa.delete(t),ho(r)}else await fs(r.localStore,t,!1).then(()=>ps(r,t,n)).catch(Fn)}async function Ig(e,t){const n=k(e),r=t.batch.batchId;try{const i=await xm(n.localStore,t);Tl(n,r,null),El(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jn(n,i)}catch(i){await Fn(i)}}async function wg(e,t,n){const r=k(e);try{const i=await function(o,a){const u=k(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(l=>($(l!==null),h=l.keys(),u.mutationQueue.removeMutationBatch(c,l))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,t);Tl(r,t,n),El(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await jn(r,i)}catch(i){await Fn(i)}}function El(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function Tl(e,t,n){const r=k(e);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function ps(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||Il(e,r)})}function Il(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(hl(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),ho(e))}function Na(e,t,n){for(const r of n)r instanceof _l?(e.ba.addReference(r.key,t),Ag(e,r)):r instanceof yl?(y("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Il(e,r.key)):S()}function Ag(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(y("SyncEngine","New document in limbo: "+n),e.ya.add(r),ho(e))}function ho(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new w(j.fromString(t)),r=e.va.next();e.Sa.set(r,new mg(n)),e.wa=e.wa.insert(n,r),ll(e.remoteStore,new qt(Vt(Js(n.path)),r,"TargetPurposeLimboResolution",Ks._e))}}async function jn(e,t,n){const r=k(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=io.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.fa.u_(i),await async function(u,c){const h=k(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,f=>p.forEach(f.qi,d=>h.persistence.referenceDelegate.addReference(l,f.targetId,d)).next(()=>p.forEach(f.Qi,d=>h.persistence.referenceDelegate.removeReference(l,f.targetId,d)))))}catch(l){if(!Un(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const f=l.targetId;if(!l.fromCache){const d=h.ns.get(f),E=d.snapshotVersion,T=d.withLastLimboFreeSnapshotVersion(E);h.ns=h.ns.insert(f,T)}}}(r.localStore,s))}async function Rg(e,t){const n=k(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await ol(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new I(m.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await jn(n,r.us)}}function Sg(e,t){const n=k(e),r=n.Sa.get(t);if(r&&r.ma)return N().add(r.key);{let i=N();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Pg(e){const t=k(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=vl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Tg.bind(null,t),t.fa.u_=lg.bind(null,t.eventManager),t.fa.xa=hg.bind(null,t.eventManager),t}function Cg(e){const t=k(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ig.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wg.bind(null,t),t}class xa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ri(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Nm(this.persistence,new km,t.initialUser,this.serializer)}createPersistence(t){return new Cm(ro.Hr,this.serializer)}createSharedClientState(t){return new $m}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Da(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rg.bind(null,this.syncEngine),await sg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ag}()}createDatastore(t){const n=ri(t.databaseInfo.databaseId),r=function(s){return new zm(s)}(t.databaseInfo);return function(s,o,a,u){return new Gm(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Qm(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Da(this.syncEngine,n,0),function(){return Va.D()?new Va:new Bm}())}createSyncEngine(t,n){return function(i,s,o,a,u,c,h){const l=new gg(i,s,o,a,u,c);return h&&(l.Fa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=k(r);y("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Bn(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class bg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):kt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class kg{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=Sc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=co(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function bi(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ol(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Oa(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ng(e);y("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>ba(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>ba(t.remoteStore,i)),e._onlineComponents=t}function Dg(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Ng(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await bi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Dg(n))throw n;Ne("Error using user provided cache. Falling back to memory cache: "+n),await bi(e,new xa)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await bi(e,new xa);return e._offlineComponents}async function wl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Oa(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Oa(e,new Vg))),e._onlineComponents}function xg(e){return wl(e).then(t=>t.syncEngine)}async function Ma(e){const t=await wl(e),n=t.eventManager;return n.onListen=_g.bind(null,t.syncEngine),n.onUnlisten=vg.bind(null,t.syncEngine),n}/**
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
 */function Al(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const La=new Map;/**
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
 */function Rl(e,t,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Og(e,t,n,r){if(t===!0&&r===!0)throw new I(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fa(e){if(!w.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ua(e){if(w.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function fo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function Ve(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fo(e);throw new I(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class $a{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Og("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Al((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oi{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $a({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $a(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yf;switch(r.type){case"firstParty":return new ep(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=La.get(n);r&&(y("ComponentProvider","Removing Datastore"),La.delete(n),r.terminate())}(this),Promise.resolve()}}function Mg(e,t,n,r={}){var i;const s=(e=Ve(e,oi))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ne("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=at.MOCK_USER;else{a=Ph(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(c)}e._authCredentials=new Jf(new Rc(a,u))}}/**
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
 */class ai{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ai(this.firestore,t,this._query)}}class Et{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Et(this.firestore,t,this._key)}}class Gt extends ai{constructor(t,n,r){super(t,n,Js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Et(this.firestore,null,new w(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function Lg(e,t,...n){if(e=Ut(e),Rl("collection","path",t),e instanceof oi){const r=j.fromString(t,...n);return Ua(r),new Gt(e,null,r)}{if(!(e instanceof Et||e instanceof Gt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Ua(r),new Gt(e.firestore,null,r)}}function Sl(e,t,...n){if(e=Ut(e),arguments.length===1&&(t=Sc.newId()),Rl("doc","path",t),e instanceof oi){const r=j.fromString(t,...n);return Fa(r),new Et(e,null,new w(r))}{if(!(e instanceof Et||e instanceof Gt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Fa(r),new Et(e.firestore,e instanceof Gt?e.converter:null,new w(r))}}/**
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
 */class Fg{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new ul(this,"async_queue_retry"),this._u=()=>{const n=Vi();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Vi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=Vi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Kt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Un(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw kt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=uo.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&S()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}function Ba(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Rr extends oi{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Fg}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function Ug(e,t){const n=typeof e=="object"?e:Dd(),r=typeof e=="string"?e:t||"(default)",i=Cd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Rh("firestore");s&&Mg(i,...s)}return i}function Pl(e){return e._firestoreClient||Cl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Cl(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,c,h){return new mp(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Al(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new kg(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(ht.fromBase64String(t))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ue(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ui{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class po{constructor(t){this._methodName=t}}/**
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
 */class mo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}}/**
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
 */const $g=/^__.*__$/;class Vl{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new me(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function bl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class go{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new go(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Sr(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(bl(this.du)&&$g.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Bg{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ri(t)}Su(t,n,r,i=!1){return new go({du:t,methodName:n,wu:r,path:nt.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jg(e){const t=e._freezeSettings(),n=ri(e._databaseId);return new Bg(e._databaseId,!!t.ignoreUndefinedProperties,n)}class ci extends po{_toFieldTransform(t){if(t.du!==2)throw t.du===1?t.pu(`${this._methodName}() can only appear at the top level of your update data`):t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ci}}function qg(e,t,n,r){const i=e.Su(1,t,n);Dl("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();pe(r,(u,c)=>{const h=_o(t,u,n);c=Ut(c);const l=i.fu(h);if(c instanceof ci)s.push(h);else{const f=li(c,l);f!=null&&(s.push(h),o.set(h,f))}});const a=new At(s);return new Vl(o,a,i.fieldTransforms)}function zg(e,t,n,r,i,s){const o=e.Su(1,t,n),a=[ja(t,r,n)],u=[i];if(s.length%2!=0)throw new I(m.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(ja(t,s[f])),u.push(s[f+1]);const c=[],h=vt.empty();for(let f=a.length-1;f>=0;--f)if(!Gg(c,a[f])){const d=a[f];let E=u[f];E=Ut(E);const T=o.fu(d);if(E instanceof ci)c.push(d);else{const _=li(E,T);_!=null&&(c.push(d),h.set(d,_))}}const l=new At(c);return new Vl(h,l,o.fieldTransforms)}function li(e,t){if(kl(e=Ut(e)))return Dl("Unsupported field value:",t,e),Hg(e,t);if(e instanceof po)return function(r,i){if(!bl(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=li(a,i.gu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Q.fromDate(r);return{timestampValue:wr(i.serializer,s)}}if(r instanceof Q){const s=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wr(i.serializer,s)}}if(r instanceof mo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ue)return{bytesValue:Zc(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:eo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${fo(r)}`)}(e,t)}function Hg(e,t){const n={};return Pc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(e,(r,i)=>{const s=li(i,t.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function kl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof mo||e instanceof Ue||e instanceof Et||e instanceof po)}function Dl(e,t,n){if(!kl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fo(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function ja(e,t,n){if((t=Ut(t))instanceof ui)return t._internalPath;if(typeof t=="string")return _o(e,t);throw Sr("Field path arguments must be of type string or ",e,!1,void 0,n)}const Kg=new RegExp("[~\\*/\\[\\]]");function _o(e,t,n){if(t.search(Kg)>=0)throw Sr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ui(...t.split("."))._internalPath}catch{throw Sr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Sr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new I(m.INVALID_ARGUMENT,a+e+u)}function Gg(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Nl{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(xl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wg extends Nl{data(){return super.data()}}function xl(e,t){return typeof t=="string"?_o(e,t):t instanceof ui?t._internalPath:t._delegate._internalPath}/**
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
 */function Qg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xg{convertValue(t,n="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return pe(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new mo(G(t.latitude),G(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ws(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(An(t));default:return null}}convertTimestamp(t){const n=Qt(t);return new Q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=j.fromString(t);$(sl(r));const i=new Rn(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(n)||kt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class nn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ol extends Nl{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(xl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class or extends Ol{data(t={}){return super.data(t)}}class Yg{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new or(this._firestore,this._userDataWriter,r.key,r,new nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new or(i._firestore,i._userDataWriter,a.doc.key,a.doc,new nn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new or(i._firestore,i._userDataWriter,a.doc.key,a.doc,new nn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Jg(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Jg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class Ml extends Xg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function Ll(e,t,n,...r){e=Ve(e,Et);const i=Ve(e.firestore,Rr),s=jg(i);let o;return o=typeof(t=Ut(t))=="string"||t instanceof ui?zg(s,"updateDoc",e._key,t,n,r):qg(s,"updateDoc",e._key,t),t_(i,[o.toMutation(e._key,Ft.exists(!0))])}function Zg(e,...t){var n,r,i;e=Ut(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ba(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ba(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(r=l.error)===null||r===void 0?void 0:r.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,c,h;if(e instanceof Et)c=Ve(e.firestore,Rr),h=Js(e._key.path),u={next:l=>{t[o]&&t[o](e_(c,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Ve(e,ai);c=Ve(l.firestore,Rr),h=l._query;const f=new Ml(c);u={next:d=>{t[o]&&t[o](new Yg(c,f,l,d))},error:t[o+1],complete:t[o+2]},Qg(e._query)}return function(f,d,E,T){const _=new bg(T),A=new dg(d,_,E);return f.asyncQueue.enqueueAndForget(async()=>ug(await Ma(f),A)),()=>{_.La(),f.asyncQueue.enqueueAndForget(async()=>cg(await Ma(f),A))}}(Pl(c),h,a,u)}function t_(e,t){return function(r,i){const s=new Kt;return r.asyncQueue.enqueueAndForget(async()=>Eg(await xg(r),i,s)),s.promise}(Pl(e),t)}function e_(e,t,n){const r=n.docs.get(t._key),i=new Ml(e);return new Ol(e,i,t._key,r,new nn(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){qe=i})(kd),hr(new fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Rr(new Zf(r.getProvider("auth-internal")),new rp(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Re(oa,"4.4.1",t),Re(oa,"4.4.1","esm2017")})();function hi(){throw new Error("Cycle detected")}var n_=Symbol.for("preact-signals");function yo(){if(be>1)be--;else{for(var e,t=!1;hn!==void 0;){var n=hn;for(hn=void 0,ms++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Ul(n))try{n.c()}catch(i){t||(e=i,t=!0)}n=r}}if(ms=0,be--,t)throw e}}var z=void 0,hn=void 0,be=0,ms=0,Pr=0;function Fl(e){if(z!==void 0){var t=e.n;if(t===void 0||t.t!==z)return t={i:0,S:e,p:z.s,n:void 0,t:z,e:void 0,x:void 0,r:t},z.s!==void 0&&(z.s.n=t),z.s=t,e.n=t,32&z.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=z.s,t.n=void 0,z.s.n=t,z.s=t),t}}function st(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}st.prototype.brand=n_;st.prototype.h=function(){return!0};st.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};st.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};st.prototype.subscribe=function(e){var t=this;return fi(function(){var n=t.value,r=32&this.f;this.f&=-33;try{e(n)}finally{this.f|=r}})};st.prototype.valueOf=function(){return this.value};st.prototype.toString=function(){return this.value+""};st.prototype.toJSON=function(){return this.value};st.prototype.peek=function(){return this.v};Object.defineProperty(st.prototype,"value",{get:function(){var e=Fl(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(z instanceof Zt&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){ms>100&&hi(),this.v=e,this.i++,Pr++,be++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{yo()}}}});function di(e){return new st(e)}function Ul(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function $l(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Bl(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Zt(e){st.call(this,void 0),this.x=e,this.s=void 0,this.g=Pr-1,this.f=4}(Zt.prototype=new st).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Pr))return!0;if(this.g=Pr,this.f|=1,this.i>0&&!Ul(this))return this.f&=-2,!0;var e=z;try{$l(this),z=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return z=e,Bl(this),this.f&=-2,!0};Zt.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}st.prototype.S.call(this,e)};Zt.prototype.U=function(e){if(this.t!==void 0&&(st.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Zt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Zt.prototype.peek=function(){if(this.h()||hi(),16&this.f)throw this.v;return this.v};Object.defineProperty(Zt.prototype,"value",{get:function(){1&this.f&&hi();var e=Fl(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function r_(e){return new Zt(e)}function jl(e){var t=e.u;if(e.u=void 0,typeof t=="function"){be++;var n=z;z=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,vo(e),r}finally{z=n,yo()}}}function vo(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,jl(e)}function i_(e){if(z!==this)throw new Error("Out-of-order effect");Bl(this),z=e,this.f&=-2,8&this.f&&vo(this),yo()}function qn(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}qn.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};qn.prototype.S=function(){1&this.f&&hi(),this.f|=1,this.f&=-9,jl(this),$l(this),be++;var e=z;return z=this,i_.bind(this,e)};qn.prototype.N=function(){2&this.f||(this.f|=2,this.o=hn,hn=this)};qn.prototype.d=function(){this.f|=8,1&this.f||vo(this)};function fi(e){var t=new qn(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var ki;function Ke(e,t){P[e]=t.bind(null,P[e]||function(){})}function Cr(e){ki&&ki(),ki=e&&e.S()}function ql(e){var t=this,n=e.data,r=o_(n);r.value=n;var i=ou(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var o;!Xa(i.peek())&&((o=t.base)==null?void 0:o.nodeType)===3?t.base.data=i.peek():(t.__$f|=1,t.setState({}))},r_(function(){var o=r.value.value;return o===0?0:o===!0?"":o||""})},[]);return i.value}ql.displayName="_st";Object.defineProperties(st.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ql},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Ke("__b",function(e,t){if(typeof t.type=="string"){var n,r=t.props;for(var i in r)if(i!=="children"){var s=r[i];s instanceof st&&(n||(t.__np=n={}),n[i]=s,r[i]=s.peek())}}e(t)});Ke("__r",function(e,t){Cr();var n,r=t.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(i){var s;return fi(function(){s=this}),s.c=function(){r.__$f|=1,r.setState({})},s}())),Cr(n),e(t)});Ke("__e",function(e,t,n,r){Cr(),e(t,n,r)});Ke("diffed",function(e,t){Cr();var n;if(typeof t.type=="string"&&(n=t.__e)){var r=t.__np,i=t.props;if(r){var s=n.U;if(s)for(var o in s){var a=s[o];a!==void 0&&!(o in r)&&(a.d(),s[o]=void 0)}else n.U=s={};for(var u in r){var c=s[u],h=r[u];c===void 0?(c=s_(n,u,h,i),s[u]=c):c.o(h,i)}}}e(t)});function s_(e,t,n,r){var i=t in e&&e.ownerSVGElement===void 0,s=di(n);return{o:function(o,a){s.value=o,r=a},d:fi(function(){var o=s.value.value;r[t]!==o&&(r[t]=o,i?e[t]=o:o?e.setAttribute(t,o):e.removeAttribute(t))})}}Ke("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var r=n.U;if(r){n.U=void 0;for(var i in r){var s=r[i];s&&s.d()}}}}else{var o=t.__c;if(o){var a=o.__$u;a&&(o.__$u=void 0,a.d())}}e(t)});Ke("__h",function(e,t,n,r){(r<3||r===9)&&(t.__$f|=2),e(t,n,r)});Ae.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in t)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function o_(e){return ou(function(){return di(e)},[])}const a_={apiKey:"AIzaSyAzuEWqSe-iUqC0XaXCrMotgdlg7m5SNeg",authDomain:"kaiaogmartin.firebaseapp.com",projectId:"kaiaogmartin",storageBucket:"kaiaogmartin.appspot.com",messagingSenderId:"1043951426861",appId:"1:1043951426861:web:ec5e9ef47ab4fdd4e647a4"},u_=vu(a_),Eo=Ug(u_),To="onskeliste";function c_(){return Math.random().toString(36).substring(2)+new Date().getTime().toString(36)}const zl=di([]),Hl="userId",Io=di(localStorage.getItem(Hl)??c_());fi(()=>{window.localStorage.setItem(Hl,Io.value)});const l_=Lg(Eo,To);Zg(l_,e=>{zl.value=e.docs.map(t=>({...t.data(),id:t.id})).sort((t,n)=>t.sortKey-n.sortKey)});async function qa(e){return console.log(e),await Ll(Sl(Eo,To,e),{reserved:!0,userId:Io.value})}async function h_(e){return console.log(e),await Ll(Sl(Eo,To,e),{reserved:!1,userId:""})}function d_(){return g(ft,{children:[g(Dr,{includeBack:!0}),g("div",{className:"center-container",children:[g("h1",{children:"Ønskeliste"}),g("p",{children:'Det absolutt viktigste for oss er at du kommer i bryllupet! Om du også har lyst til å gi oss en gave er det veldig hyggelig. Under finner du en liste over ting vi ønsker oss. Trykk på knappen der det står "Reservér", så ser andre at du skal gi denne slik at vi ikke ender opp med mange stekepanner.'}),g("p",{children:"Gjerne gå sammen flere om en gave, og det er også veldig hyggelig med brukte ting som du tror vi kan ha glede av."}),g(f_,{})]})]})}function f_(){return g(ft,{children:g("div",{className:"onskeliste",children:zl.value.map(e=>g(p_,{onske:e},e.id))})})}function p_({onske:e}){return e.link.startsWith("https")?e.reserved?e.userId&&e.userId===Io.value?g(ft,{children:[g("p",{className:"name-reserved",children:e.name}),g("a",{className:"link",href:e.link,target:"_blank",children:"Nettbutikk"}),g("button",{className:"reserved-by-user",onClick:()=>h_(e.id),children:"Reservert av deg"})]}):g(ft,{children:[g("p",{className:"name-reserved",children:e.name}),g("a",{className:"link",href:e.link,target:"_blank",children:"Nettbutikk"}),g("button",{className:"reserve",disabled:!0,onClick:()=>qa(e.id),children:"Reservert"})]}):g(ft,{children:[g("a",{className:"name",children:e.name}),g("a",{className:"link",href:e.link,target:"_blank",children:"Nettbutikk"}),g("button",{className:"reserve",onClick:()=>qa(e.id),children:"Reservér"})]}):g(ft,{children:[g("p",{className:"name",children:e.name}),g("p",{className:"description",children:e.link})]})}function m_(){return g(ft,{children:[g(Dr,{includeBack:!0}),g("div",{className:"center-container",children:[g("h1",{children:"Program"}),g("div",{className:"program-list",children:[g(ye,{time:"13:00",what:"Vielse i Oslo Rådhus"}),g(ye,{time:"16:00",what:"Aperitif på Gresenkollen restaurant"}),g(ye,{time:"17:00",what:"Middag med taler og ablegøyer"}),g(ye,{time:"21:00",what:"Leker, dans, kaffe og kaker"}),g(ye,{time:"00:30",what:"Nattmat"}),g(ye,{time:"02:00",what:"Hjemreise"})]})]})]})}function ye({time:e,what:t}){return g(ft,{children:[g("p",{className:"time",children:e}),g("p",{className:"what",children:t})]})}function g_(){return g(ft,{children:[g(Dr,{includeBack:!0}),g("div",{className:"center-container",children:[g("h1",{children:"Praktisk info"}),g("h2",{children:"Toastmaster"}),g("p",{children:["Adrian Austevoll er vår eminente toastmaster. Ta kontakt med ham på telefon ",g("a",{href:"tel:94974009",children:"949 74 009"})," dersom du har lyst til å si noen ord."]}),g("h2",{children:"Transport og parkering"}),g("h3",{children:"Vielse i Oslo Rådhus"}),g("p",{children:["Trikk, tog, t-bane eller buss til Nationaltheatret. Dersom du kjører bil, finner du en"," ",g("a",{href:"https://no.parkopedia.com/parking/carpark/vika_p_hus/0250/oslo/?arriving=202402041600&leaving=202402041800",children:"oversikt over parkeringshus i Oslo her."})," "]}),g("p",{children:"Det er generelt få offentlige parkeringsplasser i rundt Rådhuset. Vika P-hus eller Oslo Konserthus P-hus er nærmest."}),g("h3",{children:"Grefsenkollen Resturant"}),g("p",{children:["Buss ",g("i",{children:"56B Grefsenkollen"})," tar deg fra Nydalen eller Storo hele veien opp til Grefsenkollen Resturant."]}),g("p",{children:"Dersom du kjører bil er det mange kommunale parkeringsplasser tilgjengelig rett utenfor restauranten. Det er gratis å stå parkert her. Det er også en stor parkeringsplass 200 meter ned i bakken. Her er det også gratis å stå."}),g("h2",{children:"Hva i all verden betyr kleskoden Mørk dress eller bunad?"}),g("p",{children:"Mørk dress for menn er en formell kleskode som gjerne innebærer en mørkeblå, sort eller mørkegrå dressjakke og bukse, kombinert med en hvit eller lys skjorte og et slips eller en sløyfe. For kvinner innebærer mørk dress ofte en formell kjole eller drakt, gjerne i knelengde eller lengre. Bunad er også veldig lov. Men, husk at det viktigste er at DU føler deg fin!"}),g("h2",{children:"Leker"}),g("p",{children:"Vil du gjennomføre en lek istedenfor tale? Gøy! Kontakt toastmaster Adrian."})]}),g("h2",{children:"Allergier"}),g("p",{children:"Dersom du er allergisk eller er pesceterianer, vegetarianer, veganer eller lignende er det viktig at du gir oss beskjed på forhånd så vi kan melde fra videre til Grefsenkollen."})]})}function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}var we;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(we||(we={}));var za=function(e){return e},Ha="beforeunload",__="hashchange",y_="popstate";function v_(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var V=Wa(r.location.hash.substr(1)),R=V.pathname,U=R===void 0?"/":R,gt=V.search,xt=gt===void 0?"":gt,Ot=V.hash,Ge=Ot===void 0?"":Ot,jt=i.state||{};return[jt.idx,za({pathname:U,search:xt,hash:Ge,state:jt.usr||null,key:jt.key||"default"})]}var o=null;function a(){if(o)d.call(o),o=null;else{var V=we.Pop,R=s(),U=R[0],gt=R[1];if(d.length){if(U!=null){var xt=h-U;xt&&(o={action:V,location:gt,retry:function(){dt(xt*-1)}},dt(xt))}}else F(V)}}r.addEventListener(y_,a),r.addEventListener(__,function(){var V=s(),R=V[1];Di(R)!==Di(l)&&a()});var u=we.Pop,c=s(),h=c[0],l=c[1],f=Ga(),d=Ga();h==null&&(h=0,i.replaceState(Vr({},i.state,{idx:h}),""));function E(){var V=document.querySelector("base"),R="";if(V&&V.getAttribute("href")){var U=r.location.href,gt=U.indexOf("#");R=gt===-1?U:U.slice(0,gt)}return R}function T(V){return E()+"#"+(typeof V=="string"?V:Di(V))}function _(V,R){return R===void 0&&(R=null),za(Vr({pathname:l.pathname,hash:"",search:""},typeof V=="string"?Wa(V):V,{state:R,key:E_()}))}function A(V,R){return[{usr:V.state,key:V.key,idx:R},T(V)]}function D(V,R,U){return!d.length||(d.call({action:V,location:R,retry:U}),!1)}function F(V){u=V;var R=s();h=R[0],l=R[1],f.call({action:u,location:l})}function Z(V,R){var U=we.Push,gt=_(V,R);function xt(){Z(V,R)}if(D(U,gt,xt)){var Ot=A(gt,h+1),Ge=Ot[0],jt=Ot[1];try{i.pushState(Ge,"",jt)}catch{r.location.assign(jt)}F(U)}}function mt(V,R){var U=we.Replace,gt=_(V,R);function xt(){mt(V,R)}if(D(U,gt,xt)){var Ot=A(gt,h),Ge=Ot[0],jt=Ot[1];i.replaceState(Ge,"",jt),F(U)}}function dt(V){i.go(V)}var wt={get action(){return u},get location(){return l},createHref:T,push:Z,replace:mt,go:dt,back:function(){dt(-1)},forward:function(){dt(1)},listen:function(R){return f.push(R)},block:function(R){var U=d.push(R);return d.length===1&&r.addEventListener(Ha,Ka),function(){U(),d.length||r.removeEventListener(Ha,Ka)}}};return wt}function Ka(e){e.preventDefault(),e.returnValue=""}function Ga(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function E_(){return Math.random().toString(36).substr(2,8)}function Di(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,s=e.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Wa(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function T_(){return g(ft,{children:g(lu,{history:v_(),children:[g(Kn,{path:"/",component:mh}),g(Kn,{path:"/program",component:m_}),g(Kn,{path:"/info",component:g_}),g(Kn,{path:"/onskeliste",component:d_})]})})}Yl(g(T_,{}),document.getElementById("app"));
