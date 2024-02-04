(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Cn,P,Wa,Qa,ee,Io,Xa,ki,Ya,hn={},Ja=[],Hl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Vr=Array.isArray;function Mt(e,t){for(var n in t)e[n]=t[n];return e}function Za(e){var t=e.parentNode;t&&t.removeChild(e)}function br(e,t,n){var r,i,s,o={};for(s in t)s=="key"?r=t[s]:s=="ref"?i=t[s]:o[s]=t[s];if(arguments.length>2&&(o.children=arguments.length>3?Cn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)o[s]===void 0&&(o[s]=e.defaultProps[s]);return nn(e,o,r,i,null)}function nn(e,t,n,r,i){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++Wa,__i:-1,__u:0};return i==null&&P.vnode!=null&&P.vnode(s),s}function pt(e){return e.children}function we(e,t){this.props=e,this.context=t}function be(e,t){if(t==null)return e.__?be(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?be(e):null}function tu(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return tu(e)}}function Ni(e){(!e.__d&&(e.__d=!0)&&ee.push(e)&&!or.__r++||Io!==P.debounceRendering)&&((Io=P.debounceRendering)||Xa)(or)}function or(){var e,t,n,r,i,s,o,a,u;for(ee.sort(ki);e=ee.shift();)e.__d&&(t=ee.length,r=void 0,s=(i=(n=e).__v).__e,a=[],u=[],(o=n.__P)&&((r=Mt({},i)).__v=i.__v+1,P.vnode&&P.vnode(r),ms(o,r,i,n.__n,o.ownerSVGElement!==void 0,32&i.__u?[s]:null,a,s??be(i),!!(32&i.__u),u),r.__.__k[r.__i]=r,ru(a,r,u),r.__e!=s&&tu(r)),ee.length>t&&ee.sort(ki));or.__r=0}function eu(e,t,n,r,i,s,o,a,u,c,h){var l,f,d,E,T,_=r&&r.__k||Ja,A=t.length;for(n.__d=u,Kl(n,t,_),u=n.__d,l=0;l<A;l++)(d=n.__k[l])!=null&&typeof d!="boolean"&&typeof d!="function"&&(f=d.__i===-1?hn:_[d.__i]||hn,d.__i=l,ms(e,d,f,i,s,o,a,u,c,h),E=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&_s(f.ref,null,d),h.push(d.ref,d.__c||E,d)),T==null&&E!=null&&(T=E),65536&d.__u||f.__k===d.__k?u=nu(d,u,e):typeof d.type=="function"&&d.__d!==void 0?u=d.__d:E&&(u=E.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=u,n.__e=T}function Kl(e,t,n){var r,i,s,o,a,u=t.length,c=n.length,h=c,l=0;for(e.__k=[],r=0;r<u;r++)(i=e.__k[r]=(i=t[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?nn(null,i,null,null,i):Vr(i)?nn(pt,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?nn(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,a=Gl(i,n,o=r+l,h),i.__i=a,s=null,a!==-1&&(h--,(s=n[a])&&(s.__u|=131072)),s==null||s.__v===null?(a==-1&&l--,typeof i.type!="function"&&(i.__u|=65536)):a!==o&&(a===o+1?l++:a>o?h>u-o?l+=a-o:l--:l=a<o&&a==o-1?a-o:0,a!==r+l&&(i.__u|=65536))):(s=n[r])&&s.key==null&&s.__e&&(s.__e==e.__d&&(e.__d=be(s)),Oi(s,s,!1),n[r]=null,h--);if(h)for(r=0;r<c;r++)(s=n[r])!=null&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=be(s)),Oi(s,s))}function nu(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=nu(r[i],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function xi(e,t){return t=t||[],e==null||typeof e=="boolean"||(Vr(e)?e.some(function(n){xi(n,t)}):t.push(e)),t}function Gl(e,t,n,r){var i=e.key,s=e.type,o=n-1,a=n+1,u=t[n];if(u===null||u&&i==u.key&&s===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;o>=0||a<t.length;){if(o>=0){if((u=t[o])&&!(131072&u.__u)&&i==u.key&&s===u.type)return o;o--}if(a<t.length){if((u=t[a])&&!(131072&u.__u)&&i==u.key&&s===u.type)return a;a++}}return-1}function wo(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Hl.test(t)?n:n+"px"}function qn(e,t,n,r,i){var s;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||wo(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||wo(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,s?Ro:Ao,s)):e.removeEventListener(t,s?Ro:Ao,s);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ao(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(P.event?P.event(e):e)}function Ro(e){return this.l[e.type+!0](P.event?P.event(e):e)}function ms(e,t,n,r,i,s,o,a,u,c){var h,l,f,d,E,T,_,A,k,F,Z,mt,dt,wt,V,R=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),s=[a=t.__e=n.__e]),(h=P.__b)&&h(t);t:if(typeof R=="function")try{if(A=t.props,k=(h=R.contextType)&&r[h.__c],F=h?k?k.props.value:h.__:r,n.__c?_=(l=t.__c=n.__c).__=l.__E:("prototype"in R&&R.prototype.render?t.__c=l=new R(A,F):(t.__c=l=new we(A,F),l.constructor=R,l.render=Ql),k&&k.sub(l),l.props=A,l.state||(l.state={}),l.context=F,l.__n=r,f=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),R.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Mt({},l.__s)),Mt(l.__s,R.getDerivedStateFromProps(A,l.__s))),d=l.props,E=l.state,l.__v=t,f)R.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(R.getDerivedStateFromProps==null&&A!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(A,F),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(A,l.__s,F)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=A,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(U){U&&(U.__=t)}),Z=0;Z<l._sb.length;Z++)l.__h.push(l._sb[Z]);l._sb=[],l.__h.length&&o.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(A,l.__s,F),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,E,T)})}if(l.context=F,l.props=A,l.__P=e,l.__e=!1,mt=P.__r,dt=0,"prototype"in R&&R.prototype.render){for(l.state=l.__s,l.__d=!1,mt&&mt(t),h=l.render(l.props,l.state,l.context),wt=0;wt<l._sb.length;wt++)l.__h.push(l._sb[wt]);l._sb=[]}else do l.__d=!1,mt&&mt(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++dt<25);l.state=l.__s,l.getChildContext!=null&&(r=Mt(Mt({},r),l.getChildContext())),f||l.getSnapshotBeforeUpdate==null||(T=l.getSnapshotBeforeUpdate(d,E)),eu(e,Vr(V=h!=null&&h.type===pt&&h.key==null?h.props.children:h)?V:[V],t,n,r,i,s,o,a,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&o.push(l),_&&(l.__E=l.__=null)}catch(U){t.__v=null,u||s!=null?(t.__e=a,t.__u|=u?160:32,s[s.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),P.__e(U,t,n)}else s==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Wl(n.__e,t,n,r,i,s,o,u,c);(h=P.diffed)&&h(t)}function ru(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)_s(n[r],n[++r],n[++r]);P.__c&&P.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){P.__e(s,i.__v)}})}function Wl(e,t,n,r,i,s,o,a,u){var c,h,l,f,d,E,T,_=n.props,A=t.props,k=t.type;if(k==="svg"&&(i=!0),s!=null){for(c=0;c<s.length;c++)if((d=s[c])&&"setAttribute"in d==!!k&&(k?d.localName===k:d.nodeType===3)){e=d,s[c]=null;break}}if(e==null){if(k===null)return document.createTextNode(A);e=i?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,A.is&&A),s=null,a=!1}if(k===null)_===A||a&&e.data===A||(e.data=A);else{if(s=s&&Cn.call(e.childNodes),_=n.props||hn,!a&&s!=null)for(_={},c=0;c<e.attributes.length;c++)_[(d=e.attributes[c]).name]=d.value;for(c in _)d=_[c],c=="children"||(c=="dangerouslySetInnerHTML"?l=d:c==="key"||c in A||qn(e,c,null,d,i));for(c in A)d=A[c],c=="children"?f=d:c=="dangerouslySetInnerHTML"?h=d:c=="value"?E=d:c=="checked"?T=d:c==="key"||a&&typeof d!="function"||_[c]===d||qn(e,c,d,_[c],i);if(h)a||l&&(h.__html===l.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),eu(e,Vr(f)?f:[f],t,n,r,i&&k!=="foreignObject",s,o,s?s[0]:n.__k&&be(n,0),a,u),s!=null)for(c=s.length;c--;)s[c]!=null&&Za(s[c]);a||(c="value",E!==void 0&&(E!==e[c]||k==="progress"&&!E||k==="option"&&E!==_[c])&&qn(e,c,E,_[c],!1),c="checked",T!==void 0&&T!==e[c]&&qn(e,c,T,_[c],!1))}return e}function _s(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){P.__e(r,n)}}function Oi(e,t,n){var r,i;if(P.unmount&&P.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||_s(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){P.__e(s,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Oi(r[i],t,n||typeof e.type!="function");n||e.__e==null||Za(e.__e),e.__=e.__e=e.__d=void 0}function Ql(e,t,n){return this.constructor(e,n)}function Xl(e,t,n){var r,i,s,o;P.__&&P.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],o=[],ms(t,e=(!r&&n||t).__k=br(pt,null,[e]),i||hn,hn,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?Cn.call(t.childNodes):null,s,!r&&n?n:i?i.__e:t.firstChild,r,o),ru(s,e,o)}function Yl(e,t,n){var r,i,s,o,a=Mt({},e.props);for(s in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)s=="key"?r=t[s]:s=="ref"?i=t[s]:a[s]=t[s]===void 0&&o!==void 0?o[s]:t[s];return arguments.length>2&&(a.children=arguments.length>3?Cn.call(arguments,2):n),nn(e.type,a,r||e.key,i||e.ref,null)}function Jl(e,t){var n={__c:t="__cC"+Ya++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[t]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,Ni(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Cn=Ja.slice,P={__e:function(e,t,n,r){for(var i,s,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(a){e=a}throw e}},Wa=0,Qa=function(e){return e!=null&&e.constructor==null},we.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Mt({},this.state),typeof e=="function"&&(e=e(Mt({},n),this.props)),e&&Mt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ni(this))},we.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ni(this))},we.prototype.render=pt,ee=[],Xa=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ki=function(e,t){return e.__v.__b-t.__v.__b},or.__r=0,Ya=0;var Mi,gt,fi,So,Po=0,iu=[],tr=[],Co=P.__b,Vo=P.__r,bo=P.diffed,Do=P.__c,ko=P.unmount;function Zl(e,t){P.__h&&P.__h(gt,e,Po||t),Po=0;var n=gt.__H||(gt.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:tr}),n.__[e]}function su(e,t){var n=Zl(Mi++,7);return nh(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function th(){for(var e;e=iu.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(er),e.__H.__h.forEach(Li),e.__H.__h=[]}catch(t){e.__H.__h=[],P.__e(t,e.__v)}}P.__b=function(e){gt=null,Co&&Co(e)},P.__r=function(e){Vo&&Vo(e),Mi=0;var t=(gt=e.__c).__H;t&&(fi===gt?(t.__h=[],gt.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=tr,n.__N=n.i=void 0})):(t.__h.forEach(er),t.__h.forEach(Li),t.__h=[],Mi=0)),fi=gt},P.diffed=function(e){bo&&bo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(iu.push(t)!==1&&So===P.requestAnimationFrame||((So=P.requestAnimationFrame)||eh)(th)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==tr&&(n.__=n.__V),n.i=void 0,n.__V=tr})),fi=gt=null},P.__c=function(e,t){t.some(function(n){try{n.__h.forEach(er),n.__h=n.__h.filter(function(r){return!r.__||Li(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],P.__e(r,n.__v)}}),Do&&Do(e,t)},P.unmount=function(e){ko&&ko(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{er(r)}catch(i){t=i}}),n.__H=void 0,t&&P.__e(t,n.__v))};var No=typeof requestAnimationFrame=="function";function eh(e){var t,n=function(){clearTimeout(r),No&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);No&&(t=requestAnimationFrame(n))}function er(e){var t=gt,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),gt=t}function Li(e){var t=gt;e.__c=e.__(),gt=t}function nh(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}var rh={};function Xe(e,t){for(var n in t)e[n]=t[n];return e}function ih(e,t,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,s=e.match(i),o={};if(s&&s[1])for(var a=s[1].split("&"),u=0;u<a.length;u++){var c=a[u].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=Fi(e.replace(i,"")),t=Fi(t||"");for(var h=Math.max(e.length,t.length),l=0;l<h;l++)if(t[l]&&t[l].charAt(0)===":"){var f=t[l].replace(/(^:|[+*?]+$)/g,""),d=(t[l].match(/[+*?]+$/)||rh)[0]||"",E=~d.indexOf("+"),T=~d.indexOf("*"),_=e[l]||"";if(!_&&!T&&(d.indexOf("?")<0||E)){r=!1;break}if(o[f]=decodeURIComponent(_),E||T){o[f]=e.slice(l).map(decodeURIComponent).join("/");break}}else if(t[l]!==e[l]){r=!1;break}return(n.default===!0||r!==!1)&&o}function sh(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function oh(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:Fi(n.props.path).map(ah).join("")}(e),e.props}function Fi(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ah(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var uh={},ae=[],xo=[],yt=null,ou={url:gs()},ch=Jl(ou);function gs(){var e;return""+((e=yt&&yt.location?yt.location:yt&&yt.getCurrentLocation?yt.getCurrentLocation():typeof location<"u"?location:uh).pathname||"")+(e.search||"")}function lh(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=ae.length;r--;)if(ae[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),yt&&yt[r]?yt[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),au(e)}function au(e){for(var t=!1,n=0;n<ae.length;n++)ae[n].routeTo(e)&&(t=!0);return t}function hh(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return lh(t)}}function dh(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function uu(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(hh(t))return dh(e)}while(t=t.parentNode)}}var Oo=!1;function cu(e){e.history&&(yt=e.history),this.state={url:e.url||gs()}}Xe(cu.prototype=new we,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=xi(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;Oo||(Oo=!0,yt||addEventListener("popstate",function(){au(gs())}),addEventListener("click",uu)),ae.push(this),yt&&(this.u=yt.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),ae.splice(ae.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(oh).sort(sh);for(var n=0;n<e.length;n++){var r=e[n],i=ih(t,r.props.path,r.props);if(i)return[r,i]}},render:function(e,t){var n,r,i=e.onChange,s=t.url,o=this.c,a=this.g(xi(e.children),s);if(a&&(r=Yl(a[0],Xe(Xe({url:s,matches:n=a[1]},n),{key:void 0,ref:void 0}))),s!==(o&&o.url)){Xe(ou,o=this.c={url:s,previous:o&&o.url,current:r,path:r?r.props.path:null,matches:n}),o.router=this,o.active=r?[r]:[];for(var u=xo.length;u--;)xo[u]({});typeof i=="function"&&i(o)}return br(ch.Provider,{value:o},r)}});var zn=function(e){return br("a",Xe({onClick:uu},e))},Hn=function(e){return br(e.component,e)},fh=0;function v(e,t,n,r,i,s){var o,a,u={};for(a in t)a=="ref"?o=t[a]:u[a]=t[a];var c={type:e,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--fh,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)u[a]===void 0&&(u[a]=o[a]);return P.vnode&&P.vnode(c),c}function Dr({includeBack:e}){return v("nav",{children:[e?v(zn,{style:{span:2},href:"/",children:"Tilbake"}):v("span",{}),v("div",{children:[v(zn,{href:"/program",children:"Program"}),v(zn,{href:"/info",children:"Praktisk info"}),v(zn,{href:"/onskeliste",children:"Ønskeliste"})]})]})}function ph(){return v(pt,{children:[v(Dr,{includeBack:!1}),v("div",{className:"top",children:[v("img",{className:"upper-left",src:"images/ring.png",alt:"Ring"}),v("div",{className:"header",children:[v("h2",{children:"Vi gifter oss!"}),v("h1",{children:"Kaia og Martin"})]})]}),v("div",{className:"center-container",children:[v("h1",{children:"Velkommen"}),v("p",{children:"Har du forvillet deg inn på denne nettsiden er du sannsynligvis invitert og har takket ja til å komme i vårt bryllup 16.mars. Og det er vi så glad for! Vi gleder oss skikkelig til å dele dagen med de fineste menneskene vi vet om."}),v("p",{children:"På denne siden kommer vi til å poste en del praktisk informasjon om hva som skal skje på selve dagen - og alle konkurranselekene dere må starte å øve til (neida…)."}),v("h1",{children:"Vielse i Oslo Rådhus"}),v("p",{children:"Selve vielsessermonien finner sted i Oslo Rådhus i Munchrommet på dagen 16.mars klokken 13.00-13.15. En klassisk tradisjonell, offentlig og effektiv affære med andre ord. Her er det dessverre begrenset med plasser slik at det er nærmeste familie og forlovere som får være med inn. Det kan være noe kø i sikkerhetskontrollen, så det er lurt å møte opp minst 15 minutter før."}),v("p",{children:"For de av dere som ikke er nærmeste familie eller forlovere, så er det aldeles hyggelig dersom dere likevel ønsker å ta turen dit og ta oss i mot på vei ut igjen. Men det er er ingen forventning fra oss - vi ses jo til en hyggelig middag og heidundranes fest kl. 16.00!"}),v("h1",{children:"Hyggelig middag og heidundranes fest på Grefsenkollen restaurant"}),v("p",{children:"Klokken 16.00 er det start av apertiff på flotte Grefsenkollen restaurant over Oslo. Her vil vi etter hvert få servert en deilig treretters middag. Utover kvelden blir det selvfølgelig dans og spillopper!"})]}),v("div",{className:"container-text"})]})}var Mo={};/**
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
 */const lu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},mh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,h=s>>2,l=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(f=64)),r.push(n[h],n[l],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):mh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||l==null)throw new _h;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),l!==64){const E=c<<6&192|l;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class _h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(e){const t=lu(e);return hu.encodeByteArray(t,!0)},ar=function(e){return gh(e).replace(/\./g,"")},yh=function(e){try{return hu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Eh=()=>vh().__FIREBASE_DEFAULTS__,Th=()=>{if(typeof process>"u"||typeof Mo>"u")return;const e=Mo.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ih=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&yh(e[1]);return t&&JSON.parse(t)},ys=()=>{try{return Eh()||Th()||Ih()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wh=e=>{var t,n;return(n=(t=ys())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ah=e=>{const t=wh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},du=()=>{var e;return(e=ys())===null||e===void 0?void 0:e.config};/**
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
 */class Rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Sh(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ar(JSON.stringify(n)),ar(JSON.stringify(o)),""].join(".")}/**
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
 */function ur(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){var e;const t=(e=ys())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ch(){return!Ph()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fu(){try{return typeof indexedDB=="object"}catch{return!1}}function Vh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const bh="FirebaseError";class Ue extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=bh,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pu.prototype.create)}}class pu{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Dh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,a,r)}}function Dh(e,t){return e.replace(kh,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const kh=/\{\$([^}]+)}/g;function Ui(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Lo(s)&&Lo(o)){if(!Ui(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lo(e){return e!==null&&typeof e=="object"}/**
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
 */function Ut(e){return e&&e._delegate?e._delegate:e}class dn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Nh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Rh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Oh(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=te){return this.instances.has(t)}getOptions(t=te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=te){return this.component?this.component.multipleInstances?t:te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xh(e){return e===te?void 0:e}function Oh(e){return e.instantiationMode==="EAGER"}/**
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
 */class Mh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Nh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const Lh={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Fh=O.INFO,Uh={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},$h=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Uh[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mu{constructor(t){this.name=t,this._logLevel=Fh,this._logHandler=$h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const Bh=(e,t)=>t.some(n=>e instanceof n);let Fo,Uo;function jh(){return Fo||(Fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qh(){return Uo||(Uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,$i=new WeakMap,gu=new WeakMap,pi=new WeakMap,vs=new WeakMap;function zh(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(zt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_u.set(n,e)}).catch(()=>{}),vs.set(t,e),t}function Hh(e){if($i.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});$i.set(e,t)}let Bi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $i.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Kh(e){Bi=e(Bi)}function Gh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(mi(this),t,...n);return gu.set(r,t.sort?t.sort():[t]),zt(r)}:qh().includes(e)?function(...t){return e.apply(mi(this),t),zt(_u.get(this))}:function(...t){return zt(e.apply(mi(this),t))}}function Wh(e){return typeof e=="function"?Gh(e):(e instanceof IDBTransaction&&Hh(e),Bh(e,jh())?new Proxy(e,Bi):e)}function zt(e){if(e instanceof IDBRequest)return zh(e);if(pi.has(e))return pi.get(e);const t=Wh(e);return t!==e&&(pi.set(e,t),vs.set(t,e)),t}const mi=e=>vs.get(e);function Qh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=zt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zt(o.result),u.oldVersion,u.newVersion,zt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Xh=["get","getKey","getAll","getAllKeys","count"],Yh=["put","add","delete","clear"],_i=new Map;function $o(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_i.get(t))return _i.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xh.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return _i.set(t,s),s}Kh(e=>({...e,get:(t,n,r)=>$o(t,n)||e.get(t,n,r),has:(t,n)=>!!$o(t,n)||e.has(t,n)}));/**
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
 */class Jh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ji="@firebase/app",Bo="0.9.26";/**
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
 */const ce=new mu("@firebase/app"),td="@firebase/app-compat",ed="@firebase/analytics-compat",nd="@firebase/analytics",rd="@firebase/app-check-compat",id="@firebase/app-check",sd="@firebase/auth",od="@firebase/auth-compat",ad="@firebase/database",ud="@firebase/database-compat",cd="@firebase/functions",ld="@firebase/functions-compat",hd="@firebase/installations",dd="@firebase/installations-compat",fd="@firebase/messaging",pd="@firebase/messaging-compat",md="@firebase/performance",_d="@firebase/performance-compat",gd="@firebase/remote-config",yd="@firebase/remote-config-compat",vd="@firebase/storage",Ed="@firebase/storage-compat",Td="@firebase/firestore",Id="@firebase/firestore-compat",wd="firebase",Ad="10.7.2";/**
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
 */const qi="[DEFAULT]",Rd={[ji]:"fire-core",[td]:"fire-core-compat",[nd]:"fire-analytics",[ed]:"fire-analytics-compat",[id]:"fire-app-check",[rd]:"fire-app-check-compat",[sd]:"fire-auth",[od]:"fire-auth-compat",[ad]:"fire-rtdb",[ud]:"fire-rtdb-compat",[cd]:"fire-fn",[ld]:"fire-fn-compat",[hd]:"fire-iid",[dd]:"fire-iid-compat",[fd]:"fire-fcm",[pd]:"fire-fcm-compat",[md]:"fire-perf",[_d]:"fire-perf-compat",[gd]:"fire-rc",[yd]:"fire-rc-compat",[vd]:"fire-gcs",[Ed]:"fire-gcs-compat",[Td]:"fire-fst",[Id]:"fire-fst-compat","fire-js":"fire-js",[wd]:"fire-js-all"};/**
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
 */const cr=new Map,zi=new Map;function Sd(e,t){try{e.container.addComponent(t)}catch(n){ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lr(e){const t=e.name;if(zi.has(t))return ce.debug(`There were multiple attempts to register component ${t}.`),!1;zi.set(t,e);for(const n of cr.values())Sd(n,e);return!0}function Pd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Cd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new pu("app","Firebase",Cd);/**
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
 */class Vd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const bd=Ad;function yu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:qi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=du()),!n)throw Ht.create("no-options");const s=cr.get(i);if(s){if(Ui(n,s.options)&&Ui(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const o=new Mh(i);for(const u of zi.values())o.addComponent(u);const a=new Vd(n,r,o);return cr.set(i,a),a}function Dd(e=qi){const t=cr.get(e);if(!t&&e===qi&&du())return yu();if(!t)throw Ht.create("no-app",{appName:e});return t}function Ae(e,t,n){var r;let i=(r=Rd[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ce.warn(a.join(" "));return}lr(new dn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const kd="firebase-heartbeat-database",Nd=1,fn="firebase-heartbeat-store";let gi=null;function vu(){return gi||(gi=Qh(kd,Nd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ht.create("idb-open",{originalErrorMessage:e.message})})),gi}async function xd(e){try{return await(await vu()).transaction(fn).objectStore(fn).get(Eu(e))}catch(t){if(t instanceof Ue)ce.warn(t.message);else{const n=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ce.warn(n.message)}}}async function jo(e,t){try{const r=(await vu()).transaction(fn,"readwrite");await r.objectStore(fn).put(t,Eu(e)),await r.done}catch(n){if(n instanceof Ue)ce.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ce.warn(r.message)}}}function Eu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Od=1024,Md=30*24*60*60*1e3;class Ld{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ud(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Md}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qo(),{heartbeatsToSend:r,unsentEntries:i}=Fd(this._heartbeatsCache.heartbeats),s=ar(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qo(){return new Date().toISOString().substring(0,10)}function Fd(e,t=Od){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zo(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ud{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fu()?Vh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function zo(e){return ar(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function $d(e){lr(new dn("platform-logger",t=>new Jh(t),"PRIVATE")),lr(new dn("heartbeat",t=>new Ld(t),"PRIVATE")),Ae(ji,Bo,e),Ae(ji,Bo,"esm2017"),Ae("fire-js","")}$d("");var Bd="firebase",jd="10.7.2";/**
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
 */Ae(Bd,jd,"app");var qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Es=Es||{},C=qd||self;function kr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Vn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function zd(e){return Object.prototype.hasOwnProperty.call(e,yi)&&e[yi]||(e[yi]=++Hd)}var yi="closure_uid_"+(1e9*Math.random()>>>0),Hd=0;function Kd(e,t,n){return e.call.apply(e.bind,arguments)}function Gd(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ct(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=Kd:ct=Gd,ct.apply(null,arguments)}function Kn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function J(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Yt(){this.s=this.s,this.o=this.o}var Wd=0;Yt.prototype.s=!1;Yt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Wd!=0)&&zd(this)};Yt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ts(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ho(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(kr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function lt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var Qd=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};C.addEventListener("test",n,t),C.removeEventListener("test",n,t)}catch{}return e}();function pn(e){return/^[\s\xa0]*$/.test(e)}function Nr(){var e=C.navigator;return e&&(e=e.userAgent)?e:""}function St(e){return Nr().indexOf(e)!=-1}function Is(e){return Is[" "](e),e}Is[" "]=function(){};function Xd(e,t){var n=qf;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Yd=St("Opera"),De=St("Trident")||St("MSIE"),Iu=St("Edge"),Hi=Iu||De,wu=St("Gecko")&&!(Nr().toLowerCase().indexOf("webkit")!=-1&&!St("Edge"))&&!(St("Trident")||St("MSIE"))&&!St("Edge"),Jd=Nr().toLowerCase().indexOf("webkit")!=-1&&!St("Edge");function Au(){var e=C.document;return e?e.documentMode:void 0}var Ki;t:{var vi="",Ei=function(){var e=Nr();if(wu)return/rv:([^\);]+)(\)|;)/.exec(e);if(Iu)return/Edge\/([\d\.]+)/.exec(e);if(De)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Jd)return/WebKit\/(\S+)/.exec(e);if(Yd)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ei&&(vi=Ei?Ei[1]:""),De){var Ti=Au();if(Ti!=null&&Ti>parseFloat(vi)){Ki=String(Ti);break t}}Ki=vi}var Gi;if(C.document&&De){var Ko=Au();Gi=Ko||parseInt(Ki,10)||void 0}else Gi=void 0;var Zd=Gi;function mn(e,t){if(lt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wu){t:{try{Is(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:tf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&mn.$.h.call(this)}}J(mn,lt);var tf={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var bn="closure_listenable_"+(1e6*Math.random()|0),ef=0;function nf(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ef,this.fa=this.ia=!1}function xr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ws(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function rf(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ru(e){const t={};for(const n in e)t[n]=e[n];return t}const Go="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Su(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Go.length;s++)n=Go[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Or(e){this.src=e,this.g={},this.h=0}Or.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Qi(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new nf(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Wi(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Tu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(xr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Qi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var As="closure_lm_"+(1e6*Math.random()|0),Ii={};function Pu(e,t,n,r,i){if(r&&r.once)return Vu(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Pu(e,t[s],n,r,i);return null}return n=Ps(n),e&&e[bn]?e.O(t,n,Vn(r)?!!r.capture:!!r,i):Cu(e,t,n,!1,r,i)}function Cu(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Vn(i)?!!i.capture:!!i,a=Ss(e);if(a||(e[As]=a=new Or(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=sf(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Qd||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Du(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sf(){function e(n){return t.call(e.src,e.listener,n)}const t=of;return e}function Vu(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Vu(e,t[s],n,r,i);return null}return n=Ps(n),e&&e[bn]?e.P(t,n,Vn(r)?!!r.capture:!!r,i):Cu(e,t,n,!0,r,i)}function bu(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)bu(e,t[s],n,r,i);else r=Vn(r)?!!r.capture:!!r,n=Ps(n),e&&e[bn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Qi(s,n,r,i),-1<n&&(xr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ss(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Qi(t,n,r,i)),(n=-1<e?t[e]:null)&&Rs(n))}function Rs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[bn])Wi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Du(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ss(t))?(Wi(n,e),n.h==0&&(n.src=null,t[As]=null)):xr(e)}}}function Du(e){return e in Ii?Ii[e]:Ii[e]="on"+e}function of(e,t){if(e.fa)e=!0;else{t=new mn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Rs(e),e=n.call(r,t)}return e}function Ss(e){return e=e[As],e instanceof Or?e:null}var wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ps(e){return typeof e=="function"?e:(e[wi]||(e[wi]=function(t){return e.handleEvent(t)}),e[wi])}function Y(){Yt.call(this),this.i=new Or(this),this.S=this,this.J=null}J(Y,Yt);Y.prototype[bn]=!0;Y.prototype.removeEventListener=function(e,t,n,r){bu(this,e,t,n,r)};function rt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new lt(t,e);else if(t instanceof lt)t.target=t.target||e;else{var i=t;t=new lt(r,e),Su(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Gn(o,r,!0,t)&&i}if(o=t.g=e,i=Gn(o,r,!0,t)&&i,i=Gn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Gn(o,r,!1,t)&&i}Y.prototype.N=function(){if(Y.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)xr(n[r]);delete e.g[t],e.h--}}this.J=null};Y.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Y.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Gn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Wi(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Cs=C.JSON.stringify;class af{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function uf(){var e=Vs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class cf{constructor(){this.h=this.g=null}add(t,n){const r=ku.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ku=new af(()=>new lf,e=>e.reset());class lf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hf(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function df(e){C.setTimeout(()=>{throw e},0)}let _n,gn=!1,Vs=new cf,Nu=()=>{const e=C.Promise.resolve(void 0);_n=()=>{e.then(ff)}};var ff=()=>{for(var e;e=uf();){try{e.h.call(e.g)}catch(n){df(n)}var t=ku;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}gn=!1};function Mr(e,t){Y.call(this),this.h=e||1,this.g=t||C,this.j=ct(this.qb,this),this.l=Date.now()}J(Mr,Y);y=Mr.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(bs(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){Mr.$.N.call(this),bs(this),delete this.g};function Ds(e,t,n){if(typeof e=="function")n&&(e=ct(e,n));else if(e&&typeof e.handleEvent=="function")e=ct(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(e,t||0)}function xu(e){e.g=Ds(()=>{e.g=null,e.i&&(e.i=!1,xu(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class pf extends Yt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:xu(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(e){Yt.call(this),this.h=e,this.g={}}J(yn,Yt);var Wo=[];function Ou(e,t,n,r){Array.isArray(n)||(n&&(Wo[0]=n.toString()),n=Wo);for(var i=0;i<n.length;i++){var s=Pu(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Mu(e){ws(e.g,function(t,n){this.g.hasOwnProperty(n)&&Rs(t)},e),e.g={}}yn.prototype.N=function(){yn.$.N.call(this),Mu(this)};yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lr(){this.g=!0}Lr.prototype.Ea=function(){this.g=!1};function mf(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function _f(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Te(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+yf(e,n)+(r?" "+r:"")})}function gf(e,t){e.info(function(){return"TIMEOUT: "+t})}Lr.prototype.info=function(){};function yf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cs(n)}catch{return t}}var fe={},Qo=null;function Fr(){return Qo=Qo||new Y}fe.Ta="serverreachability";function Lu(e){lt.call(this,fe.Ta,e)}J(Lu,lt);function vn(e){const t=Fr();rt(t,new Lu(t))}fe.STAT_EVENT="statevent";function Fu(e,t){lt.call(this,fe.STAT_EVENT,e),this.stat=t}J(Fu,lt);function ft(e){const t=Fr();rt(t,new Fu(t,e))}fe.Ua="timingevent";function Uu(e,t){lt.call(this,fe.Ua,e),this.size=t}J(Uu,lt);function Dn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){e()},t)}var Ur={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$u={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ks(){}ks.prototype.h=null;function Xo(e){return e.h||(e.h=e.i())}function Bu(){}var kn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ns(){lt.call(this,"d")}J(Ns,lt);function xs(){lt.call(this,"c")}J(xs,lt);var Xi;function $r(){}J($r,ks);$r.prototype.g=function(){return new XMLHttpRequest};$r.prototype.i=function(){return{}};Xi=new $r;function Nn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new yn(this),this.P=vf,e=Hi?125:void 0,this.V=new Mr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}var vf=45e3,qu={},Yi={};y=Nn.prototype;y.setTimeout=function(e){this.P=e};function Ji(e,t,n){e.L=1,e.A=jr($t(t)),e.u=n,e.S=!0,zu(e,null)}function zu(e,t){e.G=Date.now(),xn(e),e.B=$t(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Ju(n.i,"t",r),e.o=0,n=e.l.J,e.h=new ju,e.g=vc(e.l,n?t:null,!e.u),0<e.O&&(e.M=new pf(ct(e.Pa,e,e.g),e.O)),Ou(e.U,e.g,"readystatechange",e.nb),t=e.I?Ru(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),vn(),mf(e.j,e.v,e.B,e.m,e.W,e.u)}y.nb=function(e){e=e.target;const t=this.M;t&&Pt(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const h=Pt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Hi||this.g&&(this.h.h||this.g.ja()||ta(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?vn(3):vn(2)),Br(this);var n=this.g.da();this.ca=n;e:if(Hu(this)){var r=ta(this.g);e="";var i=r.length,s=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),rn(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_f(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pn(a)){var c=a;break e}}c=null}if(n=c)Te(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zi(this,n);else{this.i=!1,this.s=3,ft(12),re(this),rn(this);break t}}this.S?(Ku(this,h,o),Hi&&this.i&&h==3&&(Ou(this.U,this.V,"tick",this.mb),this.V.start())):(Te(this.j,this.m,o,null),Zi(this,o)),h==4&&re(this),this.i&&!this.J&&(h==4?mc(this.l,this):(this.i=!1,xn(this)))}else $f(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),re(this),rn(this)}}}catch{}finally{}};function Hu(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Ku(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Ef(e,n),i==Yi){t==4&&(e.s=4,ft(14),r=!1),Te(e.j,e.m,null,"[Incomplete Response]");break}else if(i==qu){e.s=4,ft(15),Te(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Te(e.j,e.m,i,null),Zi(e,i);Hu(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ft(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$s(t),t.M=!0,ft(11))):(Te(e.j,e.m,n,"[Invalid Chunked Response]"),re(e),rn(e))}y.mb=function(){if(this.g){var e=Pt(this.g),t=this.g.ja();this.o<t.length&&(Br(this),Ku(this,e,t),this.i&&e!=4&&xn(this))}};function Ef(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Yi:(n=Number(t.substring(n,r)),isNaN(n)?qu:(r+=1,r+n>t.length?Yi:(t=t.slice(r,r+n),e.o=r+n,t)))}y.cancel=function(){this.J=!0,re(this)};function xn(e){e.Y=Date.now()+e.P,Gu(e,e.P)}function Gu(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Dn(ct(e.lb,e),t)}function Br(e){e.C&&(C.clearTimeout(e.C),e.C=null)}y.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(gf(this.j,this.B),this.L!=2&&(vn(),ft(17)),re(this),this.s=2,rn(this)):Gu(this,this.Y-e)};function rn(e){e.l.H==0||e.J||mc(e.l,e)}function re(e){Br(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,bs(e.V),Mu(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Zi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ts(n.i,e))){if(!e.K&&ts(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)fr(n),Kr(n);else break t;Us(n),ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Dn(ct(n.ib,n),6e3));if(1>=ec(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ie(n,11)}else if((e.K||n.g==e)&&fr(n),!pn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const E=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Os(s,s.h),s.h=null))}if(r.F){const T=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,B(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=yc(r,r.J?r.pa:null,r.Y),o.K){nc(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Br(a),xn(a)),r.g=o}else fc(r);0<n.j.length&&Gr(n)}else c[0]!="stop"&&c[0]!="close"||ie(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ie(n,7):Fs(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}vn(4)}catch{}}function Tf(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(kr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function If(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(kr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Wu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(kr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=If(e),r=Tf(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Qu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wf(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ue(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ue){this.h=e.h,hr(this,e.j),this.s=e.s,this.g=e.g,dr(this,e.m),this.l=e.l;var t=e.i,n=new En;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Yo(this,n),this.o=e.o}else e&&(t=String(e).match(Qu))?(this.h=!1,hr(this,t[1]||"",!0),this.s=Ye(t[2]||""),this.g=Ye(t[3]||"",!0),dr(this,t[4]),this.l=Ye(t[5]||"",!0),Yo(this,t[6]||"",!0),this.o=Ye(t[7]||"")):(this.h=!1,this.i=new En(null,this.h))}ue.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Je(t,Jo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Je(t,Jo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Je(n,n.charAt(0)=="/"?Sf:Rf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Je(n,Cf)),e.join("")};function $t(e){return new ue(e)}function hr(e,t,n){e.j=n?Ye(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function dr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Yo(e,t,n){t instanceof En?(e.i=t,Vf(e.i,e.h)):(n||(t=Je(t,Pf)),e.i=new En(t,e.h))}function B(e,t,n){e.i.set(t,n)}function jr(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ye(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Je(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Af),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Af(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Jo=/[#\/\?@]/g,Rf=/[#\?:]/g,Sf=/[#\?]/g,Pf=/[#\?@]/g,Cf=/#/g;function En(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&wf(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=En.prototype;y.add=function(e,t){Jt(this),this.i=null,e=$e(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Xu(e,t){Jt(e),t=$e(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Yu(e,t){return Jt(e),t=$e(e,t),e.g.has(t)}y.forEach=function(e,t){Jt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};y.ta=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};y.Z=function(e){Jt(this);let t=[];if(typeof e=="string")Yu(this,e)&&(t=t.concat(this.g.get($e(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Jt(this),this.i=null,e=$e(this,e),Yu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Ju(e,t,n){Xu(e,t),0<n.length&&(e.i=null,e.g.set($e(e,t),Ts(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function $e(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Vf(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Xu(this,r),Ju(this,i,n))},e)),e.j=t}var bf=class{constructor(e,t){this.g=e,this.map=t}};function Zu(e){this.l=e||Df,C.PerformanceNavigationTiming?(e=C.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Df=10;function tc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ec(e){return e.h?1:e.g?e.g.size:0}function ts(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Os(e,t){e.g?e.g.add(t):e.h=t}function nc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Zu.prototype.cancel=function(){if(this.i=rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function rc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ts(e.i)}var kf=class{stringify(e){return C.JSON.stringify(e,void 0)}parse(e){return C.JSON.parse(e,void 0)}};function Nf(){this.g=new kf}function xf(e,t,n){const r=n||"";try{Wu(e,function(i,s){let o=i;Vn(i)&&(o=Cs(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Of(e,t){const n=new Lr;if(C.Image){const r=new Image;r.onload=Kn(Wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Kn(Wn,n,r,"TestLoadImage: error",!1,t),r.onabort=Kn(Wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Kn(Wn,n,r,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Wn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function qr(e){this.l=e.ec||null,this.j=e.ob||!1}J(qr,ks);qr.prototype.g=function(){return new zr(this.l,this.j)};qr.prototype.i=function(e){return function(){return e}}({});function zr(e,t){Y.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ms,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(zr,Y);var Ms=0;y=zr.prototype;y.open=function(e,t){if(this.readyState!=Ms)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Tn(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||C).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=Ms};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ic(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ic(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?On(this):Tn(this),this.readyState==3&&ic(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,On(this))};y.Ya=function(e){this.g&&(this.response=e,On(this))};y.ka=function(){this.g&&On(this)};function On(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Tn(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Tn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Mf=C.JSON.parse;function H(e){Y.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sc,this.L=this.M=!1}J(H,Y);var sc="",Lf=/^https?$/i,Ff=["POST","PUT"];y=H.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xi.g(),this.C=this.u?Xo(this.u):Xo(Xi),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Zo(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=C.FormData&&e instanceof C.FormData,!(0<=Tu(Ff,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{uc(this),0<this.B&&((this.L=Uf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Ds(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Zo(this,s)}};function Uf(e){return De&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof Es<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Zo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,oc(e),Hr(e)}function oc(e){e.F||(e.F=!0,rt(e,"complete"),rt(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,rt(this,"complete"),rt(this,"abort"),Hr(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hr(this,!0)),H.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?ac(this):this.kb())};y.kb=function(){ac(this)};function ac(e){if(e.h&&typeof Es<"u"&&(!e.C[1]||Pt(e)!=4||e.da()!=2)){if(e.v&&Pt(e)==4)Ds(e.La,0,e);else if(rt(e,"readystatechange"),Pt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Qu)[1]||null;!i&&C.self&&C.self.location&&(i=C.self.location.protocol.slice(0,-1)),r=!Lf.test(i?i.toLowerCase():"")}n=r}if(n)rt(e,"complete"),rt(e,"success");else{e.m=6;try{var s=2<Pt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",oc(e)}}finally{Hr(e)}}}}function Hr(e,t){if(e.g){uc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||rt(e,"ready");try{n.onreadystatechange=r}catch{}}}function uc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(C.clearTimeout(e.A),e.A=null)}y.isActive=function(){return!!this.g};function Pt(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Mf(t)}};function ta(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case sc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function $f(e){const t={};e=(e.g&&2<=Pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(pn(e[r]))continue;var n=hf(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}rf(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cc(e){let t="";return ws(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ls(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=cc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function Ge(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function lc(e){this.Ga=0,this.j=[],this.l=new Lr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ge("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ge("baseRetryDelayMs",5e3,e),this.hb=Ge("retryDelaySeedMs",1e4,e),this.eb=Ge("forwardChannelMaxRetries",2,e),this.xa=Ge("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Zu(e&&e.concurrentRequestLimit),this.Ja=new Nf,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=lc.prototype;y.ra=8;y.H=1;function Fs(e){if(hc(e),e.H==3){var t=e.W++,n=$t(e.I);if(B(n,"SID",e.K),B(n,"RID",t),B(n,"TYPE","terminate"),Mn(e,n),t=new Nn(e,e.l,t),t.L=2,t.A=jr($t(n)),n=!1,C.navigator&&C.navigator.sendBeacon)try{n=C.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&C.Image&&(new Image().src=t.A,n=!0),n||(t.g=vc(t.l,null),t.g.ha(t.A)),t.G=Date.now(),xn(t)}gc(e)}function Kr(e){e.g&&($s(e),e.g.cancel(),e.g=null)}function hc(e){Kr(e),e.u&&(C.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&C.clearTimeout(e.m),e.m=null)}function Gr(e){if(!tc(e.i)&&!e.m){e.m=!0;var t=e.Na;_n||Nu(),gn||(_n(),gn=!0),Vs.add(t,e),e.C=0}}function Bf(e,t){return ec(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Dn(ct(e.Na,e,t),_c(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Nn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Ru(s),Su(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=dc(this,i,t),n=$t(this.I),B(n,"RID",e),B(n,"CVER",22),this.F&&B(n,"X-HTTP-Session-Id",this.F),Mn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(cc(s)))+"&"+t:this.o&&Ls(n,this.o,s)),Os(this.i,i),this.bb&&B(n,"TYPE","init"),this.P?(B(n,"$req",t),B(n,"SID","null"),i.aa=!0,Ji(i,n,null)):Ji(i,n,t),this.H=2}}else this.H==3&&(e?ea(this,e):this.j.length==0||tc(this.i)||ea(this))};function ea(e,t){var n;t?n=t.m:n=e.W++;const r=$t(e.I);B(r,"SID",e.K),B(r,"RID",n),B(r,"AID",e.V),Mn(e,r),e.o&&e.s&&Ls(r,e.o,e.s),n=new Nn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=dc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Os(e.i,n),Ji(n,r,t)}function Mn(e,t){e.na&&ws(e.na,function(n,r){B(t,r,n)}),e.h&&Wu({},function(n,r){B(t,r,n)})}function dc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ct(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const h=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{xf(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function fc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;_n||Nu(),gn||(_n(),gn=!0),Vs.add(t,e),e.A=0}}function Us(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Dn(ct(e.Ma,e),_c(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,pc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Dn(ct(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ft(10),Kr(this),pc(this))};function $s(e){e.B!=null&&(C.clearTimeout(e.B),e.B=null)}function pc(e){e.g=new Nn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);B(t,"RID","rpc"),B(t,"SID",e.K),B(t,"AID",e.V),B(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&B(t,"TO",e.qa),B(t,"TYPE","xmlhttp"),Mn(e,t),e.o&&e.s&&Ls(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=jr($t(t)),n.u=null,n.S=!0,zu(n,e)}y.ib=function(){this.v!=null&&(this.v=null,Kr(this),Us(this),ft(19))};function fr(e){e.v!=null&&(C.clearTimeout(e.v),e.v=null)}function mc(e,t){var n=null;if(e.g==t){fr(e),$s(e),e.g=null;var r=2}else if(ts(e.i,t))n=t.F,nc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Fr(),rt(r,new Uu(r,n)),Gr(e)}else fc(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Bf(e,t)||r==2&&Us(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ie(e,5);break;case 4:ie(e,10);break;case 3:ie(e,6);break;default:ie(e,2)}}}function _c(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ie(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ct(e.pb,e);n||(n=new ue("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||hr(n,"https"),jr(n)),Of(n.toString(),r)}else ft(2);e.H=0,e.h&&e.h.za(t),gc(e),hc(e)}y.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ft(2)):(this.l.info("Failed to ping google.com"),ft(1))};function gc(e){if(e.H=0,e.ma=[],e.h){const t=rc(e.i);(t.length!=0||e.j.length!=0)&&(Ho(e.ma,t),Ho(e.ma,e.j),e.i.i.length=0,Ts(e.j),e.j.length=0),e.h.ya()}}function yc(e,t,n){var r=n instanceof ue?$t(n):new ue(n);if(r.g!="")t&&(r.g=t+"."+r.g),dr(r,r.m);else{var i=C.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ue(null);r&&hr(s,r),t&&(s.g=t),i&&dr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&B(r,n,t),B(r,"VER",e.ra),Mn(e,r),r}function vc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new H(new qr({ob:n})):new H(e.va),t.Oa(e.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ec(){}y=Ec.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function pr(){if(De&&!(10<=Number(Zd)))throw Error("Environmental error: no available transport.")}pr.prototype.g=function(e,t){return new Tt(e,t)};function Tt(e,t){Y.call(this),this.g=new lc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!pn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Be(this)}J(Tt,Y);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ft(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=yc(e,null,e.Y),Gr(e)};Tt.prototype.close=function(){Fs(this.g)};Tt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Cs(e),e=n);t.j.push(new bf(t.fb++,e)),t.H==3&&Gr(t)};Tt.prototype.N=function(){this.g.h=null,delete this.j,Fs(this.g),delete this.g,Tt.$.N.call(this)};function Tc(e){Ns.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}J(Tc,Ns);function Ic(){xs.call(this),this.status=1}J(Ic,xs);function Be(e){this.g=e}J(Be,Ec);Be.prototype.Ba=function(){rt(this.g,"a")};Be.prototype.Aa=function(e){rt(this.g,new Tc(e))};Be.prototype.za=function(e){rt(this.g,new Ic)};Be.prototype.ya=function(){rt(this.g,"b")};function jf(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}J(Rt,jf);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ai(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Rt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ai(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ai(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ai(this,r),i=0;break}}this.h=i,this.i+=t};Rt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function L(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var qf={};function Bs(e){return-128<=e&&128>e?Xd(e,function(t){return new L([t|0],0>t?-1:0)}):new L([e|0],0>e?-1:0)}function Ct(e){if(isNaN(e)||!isFinite(e))return Re;if(0>e)return et(Ct(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=es;return new L(t,0)}function wc(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return et(wc(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ct(Math.pow(t,8)),r=Re,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ct(Math.pow(t,s)),r=r.R(s).add(Ct(o))):(r=r.R(n),r=r.add(Ct(o)))}return r}var es=4294967296,Re=Bs(0),ns=Bs(1),na=Bs(16777216);y=L.prototype;y.ea=function(){if(It(this))return-et(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:es+r)*t,t*=es}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Lt(this))return"0";if(It(this))return"-"+et(this).toString(e);for(var t=Ct(Math.pow(e,6)),n=this,r="";;){var i=_r(n,t).g;n=mr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Lt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Lt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function It(e){return e.h==-1}y.X=function(e){return e=mr(this,e),It(e)?-1:Lt(e)?0:1};function et(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new L(n,~e.h).add(ns)}y.abs=function(){return It(this)?et(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new L(n,n[n.length-1]&-2147483648?-1:0)};function mr(e,t){return e.add(et(t))}y.R=function(e){if(Lt(this)||Lt(e))return Re;if(It(this))return It(e)?et(this).R(et(e)):et(et(this).R(e));if(It(e))return et(this.R(et(e)));if(0>this.X(na)&&0>e.X(na))return Ct(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Qn(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Qn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new L(n,0)};function Qn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function We(e,t){this.g=e,this.h=t}function _r(e,t){if(Lt(t))throw Error("division by zero");if(Lt(e))return new We(Re,Re);if(It(e))return t=_r(et(e),t),new We(et(t.g),et(t.h));if(It(t))return t=_r(e,et(t)),new We(et(t.g),t.h);if(30<e.g.length){if(It(e)||It(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ns,r=t;0>=r.X(e);)n=ra(n),r=ra(r);var i=ge(n,1),s=ge(r,1);for(r=ge(r,2),n=ge(n,2);!Lt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ge(r,1),n=ge(n,1)}return t=mr(e,i.R(t)),new We(i,t)}for(i=Re;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ct(n),o=s.R(t);It(o)||0<o.X(e);)n-=r,s=Ct(n),o=s.R(t);Lt(s)&&(s=ns),i=i.add(s),e=mr(e,o)}return new We(i,e)}y.gb=function(e){return _r(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new L(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new L(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new L(n,this.h^e.h)};function ra(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new L(n,e.h)}function ge(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new L(i,e.h)}pr.prototype.createWebChannel=pr.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Ur.NO_ERROR=0;Ur.TIMEOUT=8;Ur.HTTP_ERROR=6;$u.COMPLETE="complete";Bu.EventType=kn;kn.OPEN="a";kn.CLOSE="b";kn.ERROR="c";kn.MESSAGE="d";Y.prototype.listen=Y.prototype.O;H.prototype.listenOnce=H.prototype.P;H.prototype.getLastError=H.prototype.Sa;H.prototype.getLastErrorCode=H.prototype.Ia;H.prototype.getStatus=H.prototype.da;H.prototype.getResponseJson=H.prototype.Wa;H.prototype.getResponseText=H.prototype.ja;H.prototype.send=H.prototype.ha;H.prototype.setWithCredentials=H.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;L.prototype.add=L.prototype.add;L.prototype.multiply=L.prototype.R;L.prototype.modulo=L.prototype.gb;L.prototype.compare=L.prototype.X;L.prototype.toNumber=L.prototype.ea;L.prototype.toString=L.prototype.toString;L.prototype.getBits=L.prototype.D;L.fromNumber=Ct;L.fromString=wc;var zf=function(){return new pr},Hf=function(){return Fr()},Ri=Ur,Kf=$u,Gf=fe,ia={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xn=Bu,Wf=H,Qf=Rt,Se=L;const sa="@firebase/firestore";/**
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
 */let je="10.7.2";/**
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
 */const le=new mu("@firebase/firestore");function Qe(){return le.logLevel}function g(e,...t){if(le.logLevel<=O.DEBUG){const n=t.map(js);le.debug(`Firestore (${je}): ${e}`,...n)}}function Dt(e,...t){if(le.logLevel<=O.ERROR){const n=t.map(js);le.error(`Firestore (${je}): ${e}`,...n)}}function ke(e,...t){if(le.logLevel<=O.WARN){const n=t.map(js);le.warn(`Firestore (${je}): ${e}`,...n)}}function js(e){if(typeof e=="string")return e;try{/**
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
 */function S(e="Unexpected state"){const t=`FIRESTORE (${je}) INTERNAL ASSERTION FAILED: `+e;throw Dt(t),new Error(t)}function $(e,t){e||S()}function D(e,t){return e}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Ue{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ac{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class Yf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jf{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new Ac(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new at(t)}}class Zf{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tp{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Zf(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ep{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class np{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new ep(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rp(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Rc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=rp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function M(e,t){return e<t?-1:e>t?1:0}function Ne(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class In{constructor(t,n,r){n===void 0?n=0:n>t.length&&S(),r===void 0?r=t.length-n:r>t.length-n&&S(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return In.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof In?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class j extends In{construct(t,n,r){return new j(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new j(n)}static emptyPath(){return new j([])}}const ip=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends In{construct(t,n,r){return new nt(t,n,r)}static isValidIdentifier(t){return ip.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(j.fromString(t))}static fromName(t){return new w(j.fromString(t).popFirst(5))}static empty(){return new w(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&j.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return j.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new j(t.slice()))}}function sp(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new Q(n+1,0):new Q(n,r));return new Wt(i,w.empty(),t)}function op(e){return new Wt(e.readTime,e.key,-1)}class Wt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Wt(b.min(),w.empty(),-1)}static max(){return new Wt(b.max(),w.empty(),-1)}}function ap(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:M(e.largestBatchId,t.largestBatchId))}/**
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
 */const up="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ln(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==up)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class qs{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Kt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new sn(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=zs(r.target.error);this.V.reject(new sn(t,i))}}static open(t,n,r,i){try{return new qs(n,t.transaction(i,r))}catch(s){throw new sn(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(g("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new hp(n)}}class se{constructor(t,n,r){this.name=t,this.version=n,this.p=r,se.S(ur())===12.2&&Dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return g("SimpleDb","Removing database:",t),ne(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!fu())return!1;if(se.C())return!0;const t=ur(),n=se.S(t),r=0<n&&n<10,i=se.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new sn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new I(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new I(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new sn(t,o))},i.onupgradeneeded=s=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=qs.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),p.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class lp{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return ne(this.k.delete())}}class sn extends I{constructor(t,n){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Fn(e){return e.name==="IndexedDbTransactionError"}class hp{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(g("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),ne(r)}add(t){return g("SimpleDb","ADD",this.store.name,t,t),ne(this.store.add(t))}get(t){return ne(this.store.get(t)).next(n=>(n===void 0&&(n=null),g("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return g("SimpleDb","DELETE",this.store.name,t),ne(this.store.delete(t))}count(){return g("SimpleDb","COUNT",this.store.name),ne(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new p((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new p((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){g("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new p((r,i)=>{n.onerror=s=>{const o=zs(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new p((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new lp(a),c=n(a.primaryKey,a.value,u);if(c instanceof p){const h=c.catch(l=>(u.done(),p.reject(l)));r.push(h)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>p.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function ne(e){return new p((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=zs(r.target.error);n(i)}})}let oa=!1;function zs(e){const t=se.S(ur());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return oa||(oa=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class Hs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Hs._e=-1;function Wr(e){return e==null}function gr(e){return e===0&&1/e==-1/0}function dp(e){return typeof e=="number"&&Number.isInteger(e)&&!gr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function aa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function pe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Sc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class q{constructor(t,n){this.comparator=t,this.root=n||tt.EMPTY}insert(t,n){return new q(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,tt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yn(this.root,t,this.comparator,!0)}}class Yn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class tt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new tt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,n,r,i,s){return this}insert(t,n,r){return new tt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ua(this.data.getIterator())}getIteratorFrom(t){return new ua(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new it(this.comparator);return n.data=t,n}}class ua{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new At([])}unionWith(t){let n=new it(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new At(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Pc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Pc("Invalid base64 string: "+s):s}}(t);return new ht(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ht(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const fp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(e){if($(!!e),typeof e=="string"){let t=0;const n=fp.exec(e);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:G(e.seconds),nanos:G(e.nanos)}}function G(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function he(e){return typeof e=="string"?ht.fromBase64String(e):ht.fromUint8Array(e)}/**
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
 */function Ks(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gs(e){const t=e.mapValue.fields.__previous_value__;return Ks(t)?Gs(t):t}function wn(e){const t=Qt(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
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
 */class pp{constructor(t,n,r,i,s,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class An{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Jn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ks(e)?4:mp(e)?9007199254740991:10:S()}function kt(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return wn(e).isEqual(wn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qt(i.timestampValue),a=Qt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return he(i.bytesValue).isEqual(he(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return G(i.geoPointValue.latitude)===G(s.geoPointValue.latitude)&&G(i.geoPointValue.longitude)===G(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return G(i.integerValue)===G(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=G(i.doubleValue),a=G(s.doubleValue);return o===a?gr(o)===gr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ne(e.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(aa(o)!==aa(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!kt(o[u],a[u])))return!1;return!0}(e,t);default:return S()}}function Rn(e,t){return(e.values||[]).find(n=>kt(n,t))!==void 0}function xe(e,t){if(e===t)return 0;const n=de(e),r=de(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=G(s.integerValue||s.doubleValue),u=G(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return ca(e.timestampValue,t.timestampValue);case 4:return ca(wn(e),wn(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(s,o){const a=he(s),u=he(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=M(a[c],u[c]);if(h!==0)return h}return M(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=M(G(s.latitude),G(o.latitude));return a!==0?a:M(G(s.longitude),G(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=xe(a[c],u[c]);if(h)return h}return M(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Jn.mapValue&&o===Jn.mapValue)return 0;if(s===Jn.mapValue)return 1;if(o===Jn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let l=0;l<u.length&&l<h.length;++l){const f=M(u[l],h[l]);if(f!==0)return f;const d=xe(a[u[l]],c[h[l]]);if(d!==0)return d}return M(u.length,h.length)}(e.mapValue,t.mapValue);default:throw S()}}function ca(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return M(e,t);const n=Qt(e),r=Qt(t),i=M(n.seconds,r.seconds);return i!==0?i:M(n.nanos,r.nanos)}function Oe(e){return rs(e)}function rs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Qt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return he(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return w.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=rs(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${rs(n.fields[o])}`;return i+"}"}(e.mapValue):S()}function is(e){return!!e&&"integerValue"in e}function Ws(e){return!!e&&"arrayValue"in e}function la(e){return!!e&&"nullValue"in e}function ha(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function nr(e){return!!e&&"mapValue"in e}function on(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return pe(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=on(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=on(e.arrayValue.values[n]);return t}return Object.assign({},e)}function mp(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!nr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=on(n)}setAll(t){let n=nt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=on(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());nr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];nr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){pe(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new vt(on(this.value))}}function Cc(e){const t=[];return pe(e.fields,(n,r)=>{const i=new nt([n]);if(nr(r)){const s=Cc(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new At(t)}/**
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
 */class yr{constructor(t,n){this.position=t,this.inclusive=n}}function da(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),n.key):r=xe(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fa(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!kt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class vr{constructor(t,n="asc"){this.field=t,this.dir=n}}function _p(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Vc{}class W extends Vc{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new yp(t,n,r):n==="array-contains"?new Tp(t,r):n==="in"?new Ip(t,r):n==="not-in"?new wp(t,r):n==="array-contains-any"?new Ap(t,r):new W(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new vp(t,r):new Ep(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xe(n,this.value)):n!==null&&de(this.value)===de(n)&&this.matchesComparison(xe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Vc{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Nt(t,n)}matches(t){return bc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function bc(e){return e.op==="and"}function Dc(e){return gp(e)&&bc(e)}function gp(e){for(const t of e.filters)if(t instanceof Nt)return!1;return!0}function ss(e){if(e instanceof W)return e.field.canonicalString()+e.op.toString()+Oe(e.value);if(Dc(e))return e.filters.map(t=>ss(t)).join(",");{const t=e.filters.map(n=>ss(n)).join(",");return`${e.op}(${t})`}}function kc(e,t){return e instanceof W?function(r,i){return i instanceof W&&r.op===i.op&&r.field.isEqual(i.field)&&kt(r.value,i.value)}(e,t):e instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kc(o,i.filters[a]),!0):!1}(e,t):void S()}function Nc(e){return e instanceof W?function(n){return`${n.field.canonicalString()} ${n.op} ${Oe(n.value)}`}(e):e instanceof Nt?function(n){return n.op.toString()+" {"+n.getFilters().map(Nc).join(" ,")+"}"}(e):"Filter"}class yp extends W{constructor(t,n,r){super(t,n,r),this.key=w.fromName(r.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class vp extends W{constructor(t,n){super(t,"in",n),this.keys=xc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ep extends W{constructor(t,n){super(t,"not-in",n),this.keys=xc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function xc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>w.fromName(r.referenceValue))}class Tp extends W{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ws(n)&&Rn(n.arrayValue,this.value)}}class Ip extends W{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rn(this.value.arrayValue,n)}}class wp extends W{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Rn(this.value.arrayValue,n)}}class Ap extends W{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ws(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Rn(this.value.arrayValue,r))}}/**
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
 */class Rp{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function pa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Rp(e,t,n,r,i,s,o)}function Qs(e){const t=D(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ss(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Oe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Oe(r)).join(",")),t.ce=n}return t.ce}function Xs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!_p(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!kc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fa(e.startAt,t.startAt)&&fa(e.endAt,t.endAt)}function os(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Qr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Sp(e,t,n,r,i,s,o,a){return new Qr(e,t,n,r,i,s,o,a)}function Ys(e){return new Qr(e)}function ma(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Pp(e){return e.collectionGroup!==null}function an(e){const t=D(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new it(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new vr(s,r))}),n.has(nt.keyField().canonicalString())||t.le.push(new vr(nt.keyField(),r))}return t.le}function Vt(e){const t=D(e);return t.he||(t.he=Cp(t,an(e))),t.he}function Cp(e,t){if(e.limitType==="F")return pa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vr(i.field,s)});const n=e.endAt?new yr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new yr(e.startAt.position,e.startAt.inclusive):null;return pa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function as(e,t,n){return new Qr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Xr(e,t){return Xs(Vt(e),Vt(t))&&e.limitType===t.limitType}function Oc(e){return`${Qs(Vt(e))}|lt:${e.limitType}`}function ye(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Nc(i)).join(", ")}]`),Wr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oe(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oe(i)).join(",")),`Target(${r})`}(Vt(e))}; limitType=${e.limitType})`}function Yr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of an(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=da(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,an(r),i)||r.endAt&&!function(o,a,u){const c=da(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,an(r),i))}(e,t)}function Vp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Mc(e){return(t,n)=>{let r=!1;for(const i of an(e)){const s=bp(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bp(e,t,n){const r=e.field.isKeyField()?w.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?xe(u,c):S()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return S()}}/**
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
 */class qe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){pe(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Sc(this.inner)}size(){return this.innerSize}}/**
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
 */const Dp=new q(w.comparator);function Bt(){return Dp}const Lc=new q(w.comparator);function Ze(...e){let t=Lc;for(const n of e)t=t.insert(n.key,n);return t}function Fc(e){let t=Lc;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function oe(){return un()}function Uc(){return un()}function un(){return new qe(e=>e.toString(),(e,t)=>e.isEqual(t))}const kp=new q(w.comparator),Np=new it(w.comparator);function N(...e){let t=Np;for(const n of e)t=t.add(n);return t}const xp=new it(M);function Op(){return xp}/**
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
 */function $c(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gr(t)?"-0":t}}function Bc(e){return{integerValue:""+e}}function Mp(e,t){return dp(t)?Bc(t):$c(e,t)}/**
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
 */class Jr{constructor(){this._=void 0}}function Lp(e,t,n){return e instanceof Er?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ks(s)&&(s=Gs(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Sn?qc(e,t):e instanceof Pn?zc(e,t):function(i,s){const o=jc(i,s),a=_a(o)+_a(i.Ie);return is(o)&&is(i.Ie)?Bc(a):$c(i.serializer,a)}(e,t)}function Fp(e,t,n){return e instanceof Sn?qc(e,t):e instanceof Pn?zc(e,t):n}function jc(e,t){return e instanceof Tr?function(r){return is(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Er extends Jr{}class Sn extends Jr{constructor(t){super(),this.elements=t}}function qc(e,t){const n=Hc(t);for(const r of e.elements)n.some(i=>kt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Pn extends Jr{constructor(t){super(),this.elements=t}}function zc(e,t){let n=Hc(t);for(const r of e.elements)n=n.filter(i=>!kt(i,r));return{arrayValue:{values:n}}}class Tr extends Jr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function _a(e){return G(e.integerValue||e.doubleValue)}function Hc(e){return Ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Up(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Sn&&i instanceof Sn||r instanceof Pn&&i instanceof Pn?Ne(r.elements,i.elements,kt):r instanceof Tr&&i instanceof Tr?kt(r.Ie,i.Ie):r instanceof Er&&i instanceof Er}(e.transform,t.transform)}class $p{constructor(t,n){this.version=t,this.transformResults=n}}class Ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Zr{}function Kc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Wc(e.key,Ft.none()):new ti(e.key,e.data,Ft.none());{const n=e.data,r=vt.empty();let i=new it(nt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new me(e.key,r,new At(i.toArray()),Ft.none())}}function Bp(e,t,n){e instanceof ti?function(i,s,o){const a=i.value.clone(),u=ya(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof me?function(i,s,o){if(!rr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ya(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Gc(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function cn(e,t,n,r){return e instanceof ti?function(s,o,a,u){if(!rr(s.precondition,o))return a;const c=s.value.clone(),h=va(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof me?function(s,o,a,u){if(!rr(s.precondition,o))return a;const c=va(s.fieldTransforms,u,o),h=o.data;return h.setAll(Gc(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(s,o,a){return rr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function jp(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=jc(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function ga(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ne(r,i,(s,o)=>Up(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ti extends Zr{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class me extends Zr{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ya(e,t,n){const r=new Map;$(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Fp(o,a,n[i]))}return r}function va(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Lp(s,o,t))}return r}class Wc extends Zr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qp extends Zr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zp{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Bp(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=cn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=cn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Uc();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Kc(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(n,r)=>ga(n,r))&&Ne(this.baseMutations,t.baseMutations,(n,r)=>ga(n,r))}}class Js{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){$(t.mutations.length===r.length);let i=function(){return kp}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Js(t,n,r,i)}}/**
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
 */class Hp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Kp{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var K,x;function Gp(e){switch(e){default:return S();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Qc(e){if(e===void 0)return Dt("GRPC error has no .code"),m.UNKNOWN;switch(e){case K.OK:return m.OK;case K.CANCELLED:return m.CANCELLED;case K.UNKNOWN:return m.UNKNOWN;case K.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case K.INTERNAL:return m.INTERNAL;case K.UNAVAILABLE:return m.UNAVAILABLE;case K.UNAUTHENTICATED:return m.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case K.NOT_FOUND:return m.NOT_FOUND;case K.ALREADY_EXISTS:return m.ALREADY_EXISTS;case K.PERMISSION_DENIED:return m.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case K.ABORTED:return m.ABORTED;case K.OUT_OF_RANGE:return m.OUT_OF_RANGE;case K.UNIMPLEMENTED:return m.UNIMPLEMENTED;case K.DATA_LOSS:return m.DATA_LOSS;default:return S()}}(x=K||(K={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Wp(){return new TextEncoder}/**
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
 */const Qp=new Se([4294967295,4294967295],0);function Ea(e){const t=Wp().encode(e),n=new Qf;return n.update(t),new Uint8Array(n.digest())}function Ta(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Se([n,r],0),new Se([i,s],0)]}class Zs{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new tn(`Invalid padding: ${n}`);if(r<0)throw new tn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new tn(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Se.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(Se.fromNumber(r)));return i.compare(Qp)===1&&(i=new Se([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Ea(t),[r,i]=Ta(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Zs(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Ea(t),[r,i]=Ta(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ei{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Un.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ei(b.min(),i,new q(M),Bt(),N())}}class Un{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Un(r,n,N(),N(),N())}}/**
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
 */class ir{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class Xc{constructor(t,n){this.targetId=t,this.fe=n}}class Yc{constructor(t,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ia{constructor(){this.ge=0,this.pe=Aa(),this.ye=ht.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=N(),n=N(),r=N();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:S()}}),new Un(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Aa()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,$(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Xp{constructor(t){this.Le=t,this.ke=new Map,this.qe=Bt(),this.Qe=wa(),this.Ke=new q(M)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(os(s))if(r===0){const o=new w(s.path);this.We(n,o,ut.newNoDocument(o,b.min()))}else $(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=he(r).toUint8Array()}catch(u){if(u instanceof Pc)return ke("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Zs(o,i,s)}catch(u){return ke(u instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&os(a.target)){const u=new w(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,ut.newNoDocument(u,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=N();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new ei(t,n,this.Ke,this.qe,r);return this.qe=Bt(),this.Qe=wa(),this.Ke=new q(M),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Ia,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new it(M),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||g("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Ia),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function wa(){return new q(w.comparator)}function Aa(){return new q(w.comparator)}const Yp={asc:"ASCENDING",desc:"DESCENDING"},Jp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zp={and:"AND",or:"OR"};class tm{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function us(e,t){return e.useProto3Json||Wr(t)?t:{value:t}}function Ir(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function em(e,t){return Ir(e,t.toTimestamp())}function bt(e){return $(!!e),b.fromTimestamp(function(n){const r=Qt(n);return new Q(r.seconds,r.nanos)}(e))}function to(e,t){return cs(e,t).canonicalString()}function cs(e,t){const n=function(i){return new j(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Zc(e){const t=j.fromString(e);return $(il(t)),t}function ls(e,t){return to(e.databaseId,t.path)}function Si(e,t){const n=Zc(t);if(n.get(1)!==e.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(el(n))}function tl(e,t){return to(e.databaseId,t)}function nm(e){const t=Zc(e);return t.length===4?j.emptyPath():el(t)}function hs(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function el(e){return $(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ra(e,t,n){return{name:ls(e,t),fields:n.value.mapValue.fields}}function rm(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?($(h===void 0||typeof h=="string"),ht.fromBase64String(h||"")):($(h===void 0||h instanceof Uint8Array),ht.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?m.UNKNOWN:Qc(c.code);return new I(h,c.message||"")}(o);n=new Yc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Si(e,r.document.name),s=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):b.min(),a=new vt({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new ir(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Si(e,r.document),s=r.readTime?bt(r.readTime):b.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ir([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Si(e,r.document),s=r.removedTargetIds||[];n=new ir([],s,i,null)}else{if(!("filter"in t))return S();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Kp(i,s),a=r.targetId;n=new Xc(a,o)}}return n}function im(e,t){let n;if(t instanceof ti)n={update:Ra(e,t.key,t.value)};else if(t instanceof Wc)n={delete:ls(e,t.key)};else if(t instanceof me)n={update:Ra(e,t.key,t.data),updateMask:fm(t.fieldMask)};else{if(!(t instanceof qp))return S();n={verify:ls(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Er)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Sn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw S()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:em(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:S()}(e,t.precondition)),n}function sm(e,t){return e&&e.length>0?($(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?bt(i.updateTime):bt(s);return o.isEqual(b.min())&&(o=bt(s)),new $p(o,i.transformResults||[])}(n,t))):[]}function om(e,t){return{documents:[tl(e,t.path)]}}function am(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tl(e,i);const s=function(c){if(c.length!==0)return rl(Nt.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(f){return{field:ve(f.field),direction:lm(f.dir)}}(h))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=us(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:i}}function um(e){let t=nm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(l){const f=nl(l);return f instanceof Nt&&Dc(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(f=>function(E){return new vr(Ee(E.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,Wr(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(l){const f=!!l.before,d=l.values||[];return new yr(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const f=!l.before,d=l.values||[];return new yr(d,f)}(n.endAt)),Sp(t,i,o,s,a,"F",u,c)}function cm(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function nl(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ee(n.unaryFilter.field);return W.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ee(n.unaryFilter.field);return W.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ee(n.unaryFilter.field);return W.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ee(n.unaryFilter.field);return W.create(o,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(n){return W.create(Ee(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Nt.create(n.compositeFilter.filters.map(r=>nl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return S()}}(n.compositeFilter.op))}(e):S()}function lm(e){return Yp[e]}function hm(e){return Jp[e]}function dm(e){return Zp[e]}function ve(e){return{fieldPath:e.canonicalString()}}function Ee(e){return nt.fromServerFormat(e.fieldPath)}function rl(e){return e instanceof W?function(n){if(n.op==="=="){if(ha(n.value))return{unaryFilter:{field:ve(n.field),op:"IS_NAN"}};if(la(n.value))return{unaryFilter:{field:ve(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ha(n.value))return{unaryFilter:{field:ve(n.field),op:"IS_NOT_NAN"}};if(la(n.value))return{unaryFilter:{field:ve(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ve(n.field),op:hm(n.op),value:n.value}}}(e):e instanceof Nt?function(n){const r=n.getFilters().map(i=>rl(i));return r.length===1?r[0]:{compositeFilter:{op:dm(n.op),filters:r}}}(e):S()}function fm(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function il(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class pm{constructor(t){this.ct=t}}function mm(e){const t=um({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?as(t,t.limit,"L"):t}/**
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
 */class _m{constructor(){this._n=new gm}addToCollectionParentIndex(t,n){return this._n.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Wt.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class gm{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new it(j.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(j.comparator)).toArray()}}/**
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
 */class Me{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Me(0)}static Bn(){return new Me(-1)}}/**
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
 */class ym{constructor(){this.changes=new qe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class vm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Em{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&cn(r.mutation,i,At.empty(),Q.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,N()).next(()=>r))}getLocalViewOfDocuments(t,n,r=N()){const i=oe();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ze();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=oe();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,N()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Bt();const o=un(),a=function(){return un()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof me)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),cn(h.mutation,c,h.mutation.getFieldMask(),Q.now())):o.set(c.key,At.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new vm(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=un();let i=new q((o,a)=>o-a),s=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||At.empty();h=a.applyToLocalView(c,h),r.set(u,h);const l=(i.get(a.batchId)||N()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Uc();h.forEach(f=>{if(!s.has(f)){const d=Kc(n.get(f),r.get(f));d!==null&&l.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Pp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):p.resolve(oe());let a=-1,u=s;return o.next(c=>p.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),s.get(h)?p.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,N())).next(h=>({batchId:a,changes:Fc(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(r=>{let i=Ze();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Ze();return this.indexManager.getCollectionParents(t,s).next(a=>p.forEach(a,u=>{const c=function(l,f){return new Qr(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(h=>{h.forEach((l,f)=>{o=o.insert(l,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ut.newInvalidDocument(h)))});let a=Ze();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&cn(h.mutation,c,At.empty(),Q.now()),Yr(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class Tm{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return p.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:mm(i.bundledQuery),readTime:bt(i.readTime)}}(n)),p.resolve()}}/**
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
 */class Im{constructor(){this.overlays=new q(w.comparator),this.hr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=oe();return p.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const i=oe(),s=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new q((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=oe(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=oe(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return p.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hp(n,r));let s=this.hr.get(n);s===void 0&&(s=N(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class eo{constructor(){this.Pr=new it(X.Ir),this.Tr=new it(X.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new X(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new X(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new w(new j([])),r=new X(n,t),i=new X(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new w(new j([])),r=new X(n,t),i=new X(n,t+1);let s=N();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new X(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class X{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return w.comparator(t.key,n.key)||M(t.pr,n.pr)}static Er(t,n){return M(t.pr,n.pr)||w.comparator(t.key,n.key)}}/**
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
 */class wm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new it(X.Ir)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zp(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new X(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new X(n,0),i=new X(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new it(M);return n.forEach(i=>{const s=new X(i,0),o=new X(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),p.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new X(new w(s),0);let a=new it(M);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){$(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return p.forEach(n.mutations,i=>{const s=new X(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new X(n,0),i=this.wr.firstAfterOrEqual(r);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Am{constructor(t){this.vr=t,this.docs=function(){return new q(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(t,n){let r=Bt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Bt();const o=n.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ap(op(h),r)<=0||(i.has(h.key)||Yr(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,n,r,i){S()}Fr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Rm(this)}getSize(t){return p.resolve(this.size)}}class Rm extends ym{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class Sm{constructor(t){this.persistence=t,this.Mr=new qe(n=>Qs(n),Xs),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Or=0,this.Nr=new eo,this.targetCount=0,this.Br=Me.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),p.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Me(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.qn(n),p.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Nr.containsKey(n))}}/**
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
 */class Pm{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Hs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Sm(this),this.indexManager=new _m,this.remoteDocumentCache=function(i){return new Am(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new pm(n),this.$r=new Tm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Im,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new wm(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){g("MemoryPersistence","Starting transaction:",t);const i=new Cm(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return p.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Cm extends cp{constructor(t){super(),this.currentSequenceNumber=t}}class no{constructor(t){this.persistence=t,this.zr=new eo,this.jr=null}static Hr(t){return new no(t)}get Jr(){if(this.jr)return this.jr;throw S()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),p.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,r=>{const i=w.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,b.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return p.or([()=>p.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class ro{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=N(),i=N();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ro(t,n.fromCache,r,i)}}/**
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
 */class Vm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class bm{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ch()?8:se.v(ur())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Vm;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(Qe()<=O.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",ye(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(Qe()<=O.DEBUG&&g("QueryEngine","Query:",ye(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Qe()<=O.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",ye(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(n))):p.resolve())}ji(t,n){if(ma(n))return p.resolve(null);let r=Vt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=as(n,null,"F"),r=Vt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=N(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(t,as(n,null,"F")):this.es(t,c,n,u)}))})))}Hi(t,n,r,i){return ma(n)||i.isEqual(b.min())?p.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?p.resolve(null):(Qe()<=O.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ye(n)),this.es(t,o,n,sp(i,-1)).next(a=>a))})}Zi(t,n){let r=new it(Mc(t));return n.forEach((i,s)=>{Yr(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return Qe()<=O.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",ye(n)),this.zi.getDocumentsMatchingQuery(t,n,Wt.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Dm{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new q(M),this.rs=new qe(s=>Qs(s),Xs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Em(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function km(e,t,n,r){return new Dm(e,t,n,r)}async function sl(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=N();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Nm(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const l=c.batch,f=l.keys();let d=p.resolve();return f.forEach(E=>{d=d.next(()=>h.getEntry(u,E)).next(T=>{const _=c.docVersions.get(E);$(_!==null),T.version.compareTo(_)<0&&(l.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),h.addEntry(T)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(u,l))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=N();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function ol(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function xm(e,t){const n=D(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((h,l)=>{const f=i.get(l);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,l).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,l)));let d=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(l)!==null?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):h.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(h.resumeToken,r)),i=i.insert(l,d),function(T,_,A){return T.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,d,h)&&a.push(n.Qr.updateTargetData(s,d))});let u=Bt(),c=N();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Om(s,o,t.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(b.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(l=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function Om(e,t,n){let r=N(),i=N();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Bt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Mm(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Lm(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,p.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new qt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function ds(e,t,n){const r=D(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fn(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Sa(e,t,n){const r=D(e);let i=b.min(),s=N();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const l=D(u),f=l.rs.get(h);return f!==void 0?p.resolve(l.ns.get(f)):l.Qr.getTargetData(c,h)}(r,o,Vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:b.min(),n?s:N())).next(a=>(Fm(r,Vp(t),a),{documents:a,hs:s})))}function Fm(e,t,n){let r=e.ss.get(t)||b.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class Pa{constructor(){this.activeTargetIds=Op()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Um{constructor(){this.no=new Pa,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Pa,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class $m{io(t){}shutdown(){}}/**
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
 */class Ca{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zn=null;function Pi(){return Zn===null?Zn=function(){return 268435456+Math.round(2147483648*Math.random())}():Zn++,"0x"+Zn.toString(16)}/**
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
 */const Bm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const ot="WebChannelConnection";class qm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Pi(),u=this.bo(n,r.toUriEncodedString());g("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,u,c,i).then(h=>(g("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ke("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+je}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=Bm[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=Pi();return new Promise((o,a)=>{const u=new Wf;u.setWithCredentials(!0),u.listenOnce(Kf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ri.NO_ERROR:const h=u.getResponseJson();g(ot,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ri.TIMEOUT:g(ot,`RPC '${t}' ${s} timed out`),a(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const l=u.getStatus();if(g(ot,`RPC '${t}' ${s} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const E=function(_){const A=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(A)>=0?A:m.UNKNOWN}(d.status);a(new I(E,d.message))}else a(new I(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new I(m.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{g(ot,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);g(ot,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Fo(t,n,r){const i=Pi(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=zf(),a=Hf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");g(ot,`Creating RPC '${t}' stream ${i}: ${h}`,u);const l=o.createWebChannel(h,u);let f=!1,d=!1;const E=new jm({lo:_=>{d?g(ot,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(f||(g(ot,`Opening RPC '${t}' stream ${i} transport.`),l.open(),f=!0),g(ot,`RPC '${t}' stream ${i} sending:`,_),l.send(_))},ho:()=>l.close()}),T=(_,A,k)=>{_.listen(A,F=>{try{k(F)}catch(Z){setTimeout(()=>{throw Z},0)}})};return T(l,Xn.EventType.OPEN,()=>{d||g(ot,`RPC '${t}' stream ${i} transport opened.`)}),T(l,Xn.EventType.CLOSE,()=>{d||(d=!0,g(ot,`RPC '${t}' stream ${i} transport closed`),E.Vo())}),T(l,Xn.EventType.ERROR,_=>{d||(d=!0,ke(ot,`RPC '${t}' stream ${i} transport errored:`,_),E.Vo(new I(m.UNAVAILABLE,"The operation could not be completed")))}),T(l,Xn.EventType.MESSAGE,_=>{var A;if(!d){const k=_.data[0];$(!!k);const F=k,Z=F.error||((A=F[0])===null||A===void 0?void 0:A.error);if(Z){g(ot,`RPC '${t}' stream ${i} received error:`,Z);const mt=Z.status;let dt=function(R){const U=K[R];if(U!==void 0)return Qc(U)}(mt),wt=Z.message;dt===void 0&&(dt=m.INTERNAL,wt="Unknown error status: "+mt+" with message "+Z.message),d=!0,E.Vo(new I(dt,wt)),l.close()}else g(ot,`RPC '${t}' stream ${i} received:`,k),E.mo(k)}}),T(a,Gf.STAT_EVENT,_=>{_.stat===ia.PROXY?g(ot,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===ia.NOPROXY&&g(ot,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function Ci(){return typeof document<"u"?document:null}/**
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
 */function ni(e){return new tm(e,!0)}/**
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
 */class al{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&g("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class ul{constructor(t,n,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new al(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new I(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zm extends ul{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=rm(this.serializer,t),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?bt(o.readTime):b.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=hs(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=os(u)?{documents:om(s,u)}:{query:am(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Jc(s,o.resumeToken);const c=us(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Ir(s,o.snapshotVersion.toTimestamp());const c=us(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=cm(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=hs(this.serializer),n.removeTarget=t,this.t_(n)}}class Hm extends ul{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if($(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=sm(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.T_(r,n)}return $(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=hs(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>im(this.serializer,r))};this.t_(n)}}/**
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
 */class Km extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,cs(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(m.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,cs(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Gm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Dt(n),this.g_=!1):g("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Wm{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{_e(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=D(u);c.v_.add(4),await $n(c),c.x_.set("Unknown"),c.v_.delete(4),await ri(c)}(this))})}),this.x_=new Gm(r,i)}}async function ri(e){if(_e(e))for(const t of e.F_)await t(!0)}async function $n(e){for(const t of e.F_)await t(!1)}function cl(e,t){const n=D(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),oo(n)?so(n):ze(n).Jo()&&io(n,t))}function ll(e,t){const n=D(e),r=ze(n);n.C_.delete(t),r.Jo()&&hl(n,t),n.C_.size===0&&(r.Jo()?r.Xo():_e(n)&&n.x_.set("Unknown"))}function io(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(b.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ze(e).c_(t)}function hl(e,t){e.O_.Oe(t),ze(e).l_(t)}function so(e){e.O_=new Xp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),ze(e).start(),e.x_.p_()}function oo(e){return _e(e)&&!ze(e).Ho()&&e.C_.size>0}function _e(e){return D(e).v_.size===0}function dl(e){e.O_=void 0}async function Qm(e){e.C_.forEach((t,n)=>{io(e,t)})}async function Xm(e,t){dl(e),oo(e)?(e.x_.S_(t),so(e)):e.x_.set("Unknown")}async function Ym(e,t,n){if(e.x_.set("Online"),t instanceof Yc&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await wr(e,r)}else if(t instanceof ir?e.O_.$e(t):t instanceof Xc?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(b.min()))try{const r=await ol(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.C_.get(c);h&&s.C_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.C_.get(u);if(!h)return;s.C_.set(u,h.withResumeToken(ht.EMPTY_BYTE_STRING,h.snapshotVersion)),hl(s,u);const l=new qt(h.target,u,c,h.sequenceNumber);io(s,l)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){g("RemoteStore","Failed to raise snapshot:",r),await wr(e,r)}}async function wr(e,t,n){if(!Fn(t))throw t;e.v_.add(1),await $n(e),e.x_.set("Offline"),n||(n=()=>ol(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await ri(e)})}function fl(e,t){return t().catch(n=>wr(e,n,t))}async function ii(e){const t=D(e),n=Xt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Jm(t);)try{const i=await Mm(t.localStore,r);if(i===null){t.D_.length===0&&n.Xo();break}r=i.batchId,Zm(t,i)}catch(i){await wr(t,i)}pl(t)&&ml(t)}function Jm(e){return _e(e)&&e.D_.length<10}function Zm(e,t){e.D_.push(t);const n=Xt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function pl(e){return _e(e)&&!Xt(e).Ho()&&e.D_.length>0}function ml(e){Xt(e).start()}async function t_(e){Xt(e).d_()}async function e_(e){const t=Xt(e);for(const n of e.D_)t.I_(n.mutations)}async function n_(e,t,n){const r=e.D_.shift(),i=Js.from(r,t,n);await fl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ii(e)}async function r_(e,t){t&&Xt(e).P_&&await async function(r,i){if(function(o){return Gp(o)&&o!==m.ABORTED}(i.code)){const s=r.D_.shift();Xt(r).Zo(),await fl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ii(r)}}(e,t),pl(e)&&ml(e)}async function Va(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=_e(n);n.v_.add(3),await $n(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await ri(n)}async function i_(e,t){const n=D(e);t?(n.v_.delete(2),await ri(n)):t||(n.v_.add(2),await $n(n),n.x_.set("Unknown"))}function ze(e){return e.N_||(e.N_=function(n,r,i){const s=D(n);return s.R_(),new zm(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Qm.bind(null,e),To:Xm.bind(null,e),u_:Ym.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),oo(e)?so(e):e.x_.set("Unknown")):(await e.N_.stop(),dl(e))})),e.N_}function Xt(e){return e.B_||(e.B_=function(n,r,i){const s=D(n);return s.R_(),new Hm(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:t_.bind(null,e),To:r_.bind(null,e),E_:e_.bind(null,e),T_:n_.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await ii(e)):(await e.B_.stop(),e.D_.length>0&&(g("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
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
 */class ao{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new ao(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uo(e,t){if(Dt("AsyncQueue",`${t}: ${e}`),Fn(e))return new I(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Pe{constructor(t){this.comparator=t?(n,r)=>t(n,r)||w.comparator(n.key,r.key):(n,r)=>w.comparator(n.key,r.key),this.keyedMap=Ze(),this.sortedSet=new q(this.comparator)}static emptySet(t){return new Pe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Pe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class ba{constructor(){this.L_=new q(w.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):S():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Le{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Le(t,n,Pe.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class s_{constructor(){this.q_=void 0,this.Q_=[]}}class o_{constructor(){this.queries=new qe(t=>Oc(t),Xr),this.onlineState="Unknown",this.K_=new Set}}async function a_(e,t){const n=D(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new s_),i)try{s.q_=await n.onListen(r)}catch(o){const a=uo(o,`Initialization of query '${ye(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&co(n)}async function u_(e,t){const n=D(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function c_(e,t){const n=D(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&co(n)}function l_(e,t,n){const r=D(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function co(e){e.K_.forEach(t=>{t.next()})}class h_{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class _l{constructor(t){this.key=t}}class gl{constructor(t){this.key=t}}class d_{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=N(),this.mutatedKeys=N(),this.ua=Mc(t),this.ca=new Pe(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new ba,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const f=i.get(h),d=Yr(this.query,l)?l:null,E=!!f&&this.mutatedKeys.has(f.key),T=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?E!==T&&(r.track({type:3,doc:d}),_=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),_=!0,(u&&this.ua(d,u)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(u||c)&&(a=!0)),_&&(d?(o=o.add(d),s=T?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((h,l)=>function(d,E){const T=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return T(d)-T(E)}(h.type,l.type)||this.ua(h.doc,l.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],u=this.aa.size===0&&this.current&&!i?1:0,c=u!==this._a;return this._a=u,o.length!==0||c?{snapshot:new Le(this.query,t.ca,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ba,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=N(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new gl(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new _l(r))}),n}Ra(t){this.oa=t.hs,this.aa=N();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Le.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class f_{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class p_{constructor(t){this.key=t,this.ma=!1}}class m_{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new qe(a=>Oc(a),Xr),this.pa=new Map,this.ya=new Set,this.wa=new q(w.comparator),this.Sa=new Map,this.ba=new eo,this.Da={},this.Ca=new Map,this.va=Me.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function __(e,t){const n=S_(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Lm(n.localStore,Vt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await g_(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&cl(n.remoteStore,o)}return i}async function g_(e,t,n,r,i){e.Ma=(l,f,d)=>async function(T,_,A,k){let F=_.view.ha(A);F.Xi&&(F=await Sa(T.localStore,_.query,!1).then(({documents:wt})=>_.view.ha(wt,F)));const Z=k&&k.targetChanges.get(_.targetId),mt=k&&k.targetMismatches.get(_.targetId)!=null,dt=_.view.applyChanges(F,T.isPrimaryClient,Z,mt);return ka(T,_.targetId,dt.da),dt.snapshot}(e,l,f,d);const s=await Sa(e.localStore,t,!0),o=new d_(t,s.hs),a=o.ha(s.documents),u=Un.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);ka(e,n,c.da);const h=new f_(t,n,o);return e.ga.set(t,h),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function y_(e,t){const n=D(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Xr(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ds(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ll(n.remoteStore,r.targetId),fs(n,r.targetId)}).catch(Ln)):(fs(n,r.targetId),await ds(n.localStore,r.targetId,!0))}async function v_(e,t,n){const r=P_(e);try{const i=await function(o,a){const u=D(o),c=Q.now(),h=a.reduce((d,E)=>d.add(E.key),N());let l,f;return u.persistence.runTransaction("Locally write mutations","readwrite",d=>{let E=Bt(),T=N();return u.os.getEntries(d,h).next(_=>{E=_,E.forEach((A,k)=>{k.isValidDocument()||(T=T.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(d,E)).next(_=>{l=_;const A=[];for(const k of a){const F=jp(k,l.get(k.key).overlayedDocument);F!=null&&A.push(new me(k.key,F,Cc(F.value.mapValue),Ft.exists(!0)))}return u.mutationQueue.addMutationBatch(d,c,A,a)}).next(_=>{f=_;const A=_.applyToLocalDocumentSet(l,T);return u.documentOverlayCache.saveOverlays(d,_.batchId,A)})}).then(()=>({batchId:f.batchId,changes:Fc(l)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Da[o.currentUser.toKey()];c||(c=new q(M)),c=c.insert(a,u),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,n),await Bn(r,i.changes),await ii(r.remoteStore)}catch(i){const s=uo(i,"Failed to persist write");n.reject(s)}}async function yl(e,t){const n=D(e);try{const r=await xm(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?$(o.ma):i.removedDocuments.size>0&&($(o.ma),o.ma=!1))}),await Bn(n,r,t)}catch(r){await Ln(r)}}function Da(e,t,n){const r=D(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=D(o);u.onlineState=a;let c=!1;u.queries.forEach((h,l)=>{for(const f of l.Q_)f.U_(a)&&(c=!0)}),c&&co(u)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function E_(e,t,n){const r=D(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new q(w.comparator);o=o.insert(s,ut.newNoDocument(s,b.min()));const a=N().add(s),u=new ei(b.min(),new Map,new q(M),o,a);await yl(r,u),r.wa=r.wa.remove(s),r.Sa.delete(t),lo(r)}else await ds(r.localStore,t,!1).then(()=>fs(r,t,n)).catch(Ln)}async function T_(e,t){const n=D(e),r=t.batch.batchId;try{const i=await Nm(n.localStore,t);El(n,r,null),vl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bn(n,i)}catch(i){await Ln(i)}}async function I_(e,t,n){const r=D(e);try{const i=await function(o,a){const u=D(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(l=>($(l!==null),h=l.keys(),u.mutationQueue.removeMutationBatch(c,l))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,t);El(r,t,n),vl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Bn(r,i)}catch(i){await Ln(i)}}function vl(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function El(e,t,n){const r=D(e);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function fs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||Tl(e,r)})}function Tl(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(ll(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),lo(e))}function ka(e,t,n){for(const r of n)r instanceof _l?(e.ba.addReference(r.key,t),w_(e,r)):r instanceof gl?(g("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Tl(e,r.key)):S()}function w_(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(g("SyncEngine","New document in limbo: "+n),e.ya.add(r),lo(e))}function lo(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new w(j.fromString(t)),r=e.va.next();e.Sa.set(r,new p_(n)),e.wa=e.wa.insert(n,r),cl(e.remoteStore,new qt(Vt(Ys(n.path)),r,"TargetPurposeLimboResolution",Hs._e))}}async function Bn(e,t,n){const r=D(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=ro.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.fa.u_(i),await async function(u,c){const h=D(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,f=>p.forEach(f.qi,d=>h.persistence.referenceDelegate.addReference(l,f.targetId,d)).next(()=>p.forEach(f.Qi,d=>h.persistence.referenceDelegate.removeReference(l,f.targetId,d)))))}catch(l){if(!Fn(l))throw l;g("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const f=l.targetId;if(!l.fromCache){const d=h.ns.get(f),E=d.snapshotVersion,T=d.withLastLimboFreeSnapshotVersion(E);h.ns=h.ns.insert(f,T)}}}(r.localStore,s))}async function A_(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const r=await sl(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new I(m.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Bn(n,r.us)}}function R_(e,t){const n=D(e),r=n.Sa.get(t);if(r&&r.ma)return N().add(r.key);{let i=N();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function S_(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=yl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=R_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=E_.bind(null,t),t.fa.u_=c_.bind(null,t.eventManager),t.fa.xa=l_.bind(null,t.eventManager),t}function P_(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=T_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=I_.bind(null,t),t}class Na{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ni(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return km(this.persistence,new bm,t.initialUser,this.serializer)}createPersistence(t){return new Pm(no.Hr,this.serializer)}createSharedClientState(t){return new Um}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class C_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Da(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A_.bind(null,this.syncEngine),await i_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new o_}()}createDatastore(t){const n=ni(t.databaseInfo.databaseId),r=function(s){return new qm(s)}(t.databaseInfo);return function(s,o,a,u){return new Km(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Wm(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Da(this.syncEngine,n,0),function(){return Ca.D()?new Ca:new $m}())}createSyncEngine(t,n){return function(i,s,o,a,u,c,h){const l=new m_(i,s,o,a,u,c);return h&&(l.Fa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=D(r);g("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await $n(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class V_{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class b_{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=Rc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{g("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(g("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=uo(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Vi(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function xa(e,t){e.asyncQueue.verifyOperationInProgress();const n=await k_(e);g("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Va(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Va(t.remoteStore,i)),e._onlineComponents=t}function D_(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function k_(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!D_(n))throw n;ke("Error using user provided cache. Falling back to memory cache: "+n),await Vi(e,new Na)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await Vi(e,new Na);return e._offlineComponents}async function Il(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await xa(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await xa(e,new C_))),e._onlineComponents}function N_(e){return Il(e).then(t=>t.syncEngine)}async function Oa(e){const t=await Il(e),n=t.eventManager;return n.onListen=__.bind(null,t.syncEngine),n.onUnlisten=y_.bind(null,t.syncEngine),n}/**
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
 */function wl(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Ma=new Map;/**
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
 */function Al(e,t,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function x_(e,t,n,r){if(t===!0&&r===!0)throw new I(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function La(e){if(!w.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fa(e){if(w.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ho(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function Ce(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ho(e);throw new I(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ua{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}x_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class si{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xf;switch(r.type){case"firstParty":return new tp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ma.get(n);r&&(g("ComponentProvider","Removing Datastore"),Ma.delete(n),r.terminate())}(this),Promise.resolve()}}function O_(e,t,n,r={}){var i;const s=(e=Ce(e,si))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=at.MOCK_USER;else{a=Sh(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(c)}e._authCredentials=new Yf(new Ac(a,u))}}/**
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
 */class oi{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new oi(this.firestore,t,this._query)}}class Et{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Et(this.firestore,t,this._key)}}class Gt extends oi{constructor(t,n,r){super(t,n,Ys(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Et(this.firestore,null,new w(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function M_(e,t,...n){if(e=Ut(e),Al("collection","path",t),e instanceof si){const r=j.fromString(t,...n);return Fa(r),new Gt(e,null,r)}{if(!(e instanceof Et||e instanceof Gt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Fa(r),new Gt(e.firestore,null,r)}}function Rl(e,t,...n){if(e=Ut(e),arguments.length===1&&(t=Rc.newId()),Al("doc","path",t),e instanceof si){const r=j.fromString(t,...n);return La(r),new Et(e,null,new w(r))}{if(!(e instanceof Et||e instanceof Gt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return La(r),new Et(e.firestore,e instanceof Gt?e.converter:null,new w(r))}}/**
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
 */class L_{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new al(this,"async_queue_retry"),this._u=()=>{const n=Ci();n&&g("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=Ci();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Kt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Fn(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=ao.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&S()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}function $a(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Ar extends si{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new L_}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pl(this),this._firestoreClient.terminate()}}function F_(e,t){const n=typeof e=="object"?e:Dd(),r=typeof e=="string"?e:t||"(default)",i=Pd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ah("firestore");s&&O_(i,...s)}return i}function Sl(e){return e._firestoreClient||Pl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Pl(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,c,h){return new pp(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,wl(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new b_(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fe(ht.fromBase64String(t))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Fe(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ai{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class fo{constructor(t){this._methodName=t}}/**
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
 */class po{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}}/**
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
 */const U_=/^__.*__$/;class Cl{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new me(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Vl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class mo{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new mo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Rr(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(Vl(this.du)&&U_.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class $_{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ni(t)}Su(t,n,r,i=!1){return new mo({du:t,methodName:n,wu:r,path:nt.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B_(e){const t=e._freezeSettings(),n=ni(e._databaseId);return new $_(e._databaseId,!!t.ignoreUndefinedProperties,n)}class ui extends fo{_toFieldTransform(t){if(t.du!==2)throw t.du===1?t.pu(`${this._methodName}() can only appear at the top level of your update data`):t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ui}}function j_(e,t,n,r){const i=e.Su(1,t,n);Dl("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();pe(r,(u,c)=>{const h=_o(t,u,n);c=Ut(c);const l=i.fu(h);if(c instanceof ui)s.push(h);else{const f=ci(c,l);f!=null&&(s.push(h),o.set(h,f))}});const a=new At(s);return new Cl(o,a,i.fieldTransforms)}function q_(e,t,n,r,i,s){const o=e.Su(1,t,n),a=[Ba(t,r,n)],u=[i];if(s.length%2!=0)throw new I(m.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Ba(t,s[f])),u.push(s[f+1]);const c=[],h=vt.empty();for(let f=a.length-1;f>=0;--f)if(!K_(c,a[f])){const d=a[f];let E=u[f];E=Ut(E);const T=o.fu(d);if(E instanceof ui)c.push(d);else{const _=ci(E,T);_!=null&&(c.push(d),h.set(d,_))}}const l=new At(c);return new Cl(h,l,o.fieldTransforms)}function ci(e,t){if(bl(e=Ut(e)))return Dl("Unsupported field value:",t,e),z_(e,t);if(e instanceof fo)return function(r,i){if(!Vl(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ci(a,i.gu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Q.fromDate(r);return{timestampValue:Ir(i.serializer,s)}}if(r instanceof Q){const s=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ir(i.serializer,s)}}if(r instanceof po)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fe)return{bytesValue:Jc(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:to(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${ho(r)}`)}(e,t)}function z_(e,t){const n={};return Sc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(e,(r,i)=>{const s=ci(i,t.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof po||e instanceof Fe||e instanceof Et||e instanceof fo)}function Dl(e,t,n){if(!bl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ho(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function Ba(e,t,n){if((t=Ut(t))instanceof ai)return t._internalPath;if(typeof t=="string")return _o(e,t);throw Rr("Field path arguments must be of type string or ",e,!1,void 0,n)}const H_=new RegExp("[~\\*/\\[\\]]");function _o(e,t,n){if(t.search(H_)>=0)throw Rr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ai(...t.split("."))._internalPath}catch{throw Rr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new I(m.INVALID_ARGUMENT,a+e+u)}function K_(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class kl{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new G_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Nl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G_ extends kl{data(){return super.data()}}function Nl(e,t){return typeof t=="string"?_o(e,t):t instanceof ai?t._internalPath:t._delegate._internalPath}/**
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
 */function W_(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Q_{convertValue(t,n="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return pe(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new po(G(t.latitude),G(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Gs(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wn(t));default:return null}}convertTimestamp(t){const n=Qt(t);return new Q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=j.fromString(t);$(il(r));const i=new An(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(n)||Dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class en{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xl extends kl{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Nl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sr extends xl{data(t={}){return super.data(t)}}class X_{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new en(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new sr(this._firestore,this._userDataWriter,r.key,r,new en(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new sr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new en(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new sr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new en(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Y_(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Y_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class Ol extends Q_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function Ml(e,t,n,...r){e=Ce(e,Et);const i=Ce(e.firestore,Ar),s=B_(i);let o;return o=typeof(t=Ut(t))=="string"||t instanceof ai?q_(s,"updateDoc",e._key,t,n,r):j_(s,"updateDoc",e._key,t),Z_(i,[o.toMutation(e._key,Ft.exists(!0))])}function J_(e,...t){var n,r,i;e=Ut(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||$a(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if($a(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(r=l.error)===null||r===void 0?void 0:r.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,c,h;if(e instanceof Et)c=Ce(e.firestore,Ar),h=Ys(e._key.path),u={next:l=>{t[o]&&t[o](tg(c,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Ce(e,oi);c=Ce(l.firestore,Ar),h=l._query;const f=new Ol(c);u={next:d=>{t[o]&&t[o](new X_(c,f,l,d))},error:t[o+1],complete:t[o+2]},W_(e._query)}return function(f,d,E,T){const _=new V_(T),A=new h_(d,_,E);return f.asyncQueue.enqueueAndForget(async()=>a_(await Oa(f),A)),()=>{_.La(),f.asyncQueue.enqueueAndForget(async()=>u_(await Oa(f),A))}}(Sl(c),h,a,u)}function Z_(e,t){return function(r,i){const s=new Kt;return r.asyncQueue.enqueueAndForget(async()=>v_(await N_(r),i,s)),s.promise}(Sl(e),t)}function tg(e,t,n){const r=n.docs.get(t._key),i=new Ol(e);return new xl(e,i,t._key,r,new en(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){je=i})(bd),lr(new dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ar(new Jf(r.getProvider("auth-internal")),new np(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ae(sa,"4.4.1",t),Ae(sa,"4.4.1","esm2017")})();function li(){throw new Error("Cycle detected")}var eg=Symbol.for("preact-signals");function go(){if(Ve>1)Ve--;else{for(var e,t=!1;ln!==void 0;){var n=ln;for(ln=void 0,ps++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Fl(n))try{n.c()}catch(i){t||(e=i,t=!0)}n=r}}if(ps=0,Ve--,t)throw e}}var z=void 0,ln=void 0,Ve=0,ps=0,Sr=0;function Ll(e){if(z!==void 0){var t=e.n;if(t===void 0||t.t!==z)return t={i:0,S:e,p:z.s,n:void 0,t:z,e:void 0,x:void 0,r:t},z.s!==void 0&&(z.s.n=t),z.s=t,e.n=t,32&z.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=z.s,t.n=void 0,z.s.n=t,z.s=t),t}}function st(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}st.prototype.brand=eg;st.prototype.h=function(){return!0};st.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};st.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};st.prototype.subscribe=function(e){var t=this;return di(function(){var n=t.value,r=32&this.f;this.f&=-33;try{e(n)}finally{this.f|=r}})};st.prototype.valueOf=function(){return this.value};st.prototype.toString=function(){return this.value+""};st.prototype.toJSON=function(){return this.value};st.prototype.peek=function(){return this.v};Object.defineProperty(st.prototype,"value",{get:function(){var e=Ll(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(z instanceof Zt&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){ps>100&&li(),this.v=e,this.i++,Sr++,Ve++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{go()}}}});function hi(e){return new st(e)}function Fl(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Ul(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function $l(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Zt(e){st.call(this,void 0),this.x=e,this.s=void 0,this.g=Sr-1,this.f=4}(Zt.prototype=new st).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Sr))return!0;if(this.g=Sr,this.f|=1,this.i>0&&!Fl(this))return this.f&=-2,!0;var e=z;try{Ul(this),z=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return z=e,$l(this),this.f&=-2,!0};Zt.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}st.prototype.S.call(this,e)};Zt.prototype.U=function(e){if(this.t!==void 0&&(st.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Zt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Zt.prototype.peek=function(){if(this.h()||li(),16&this.f)throw this.v;return this.v};Object.defineProperty(Zt.prototype,"value",{get:function(){1&this.f&&li();var e=Ll(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function ng(e){return new Zt(e)}function Bl(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Ve++;var n=z;z=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,yo(e),r}finally{z=n,go()}}}function yo(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Bl(e)}function rg(e){if(z!==this)throw new Error("Out-of-order effect");$l(this),z=e,this.f&=-2,8&this.f&&yo(this),go()}function jn(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}jn.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};jn.prototype.S=function(){1&this.f&&li(),this.f|=1,this.f&=-9,Bl(this),Ul(this),Ve++;var e=z;return z=this,rg.bind(this,e)};jn.prototype.N=function(){2&this.f||(this.f|=2,this.o=ln,ln=this)};jn.prototype.d=function(){this.f|=8,1&this.f||yo(this)};function di(e){var t=new jn(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var bi;function He(e,t){P[e]=t.bind(null,P[e]||function(){})}function Pr(e){bi&&bi(),bi=e&&e.S()}function jl(e){var t=this,n=e.data,r=sg(n);r.value=n;var i=su(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var o;!Qa(i.peek())&&((o=t.base)==null?void 0:o.nodeType)===3?t.base.data=i.peek():(t.__$f|=1,t.setState({}))},ng(function(){var o=r.value.value;return o===0?0:o===!0?"":o||""})},[]);return i.value}jl.displayName="_st";Object.defineProperties(st.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:jl},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});He("__b",function(e,t){if(typeof t.type=="string"){var n,r=t.props;for(var i in r)if(i!=="children"){var s=r[i];s instanceof st&&(n||(t.__np=n={}),n[i]=s,r[i]=s.peek())}}e(t)});He("__r",function(e,t){Pr();var n,r=t.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(i){var s;return di(function(){s=this}),s.c=function(){r.__$f|=1,r.setState({})},s}())),Pr(n),e(t)});He("__e",function(e,t,n,r){Pr(),e(t,n,r)});He("diffed",function(e,t){Pr();var n;if(typeof t.type=="string"&&(n=t.__e)){var r=t.__np,i=t.props;if(r){var s=n.U;if(s)for(var o in s){var a=s[o];a!==void 0&&!(o in r)&&(a.d(),s[o]=void 0)}else n.U=s={};for(var u in r){var c=s[u],h=r[u];c===void 0?(c=ig(n,u,h,i),s[u]=c):c.o(h,i)}}}e(t)});function ig(e,t,n,r){var i=t in e&&e.ownerSVGElement===void 0,s=hi(n);return{o:function(o,a){s.value=o,r=a},d:di(function(){var o=s.value.value;r[t]!==o&&(r[t]=o,i?e[t]=o:o?e.setAttribute(t,o):e.removeAttribute(t))})}}He("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var r=n.U;if(r){n.U=void 0;for(var i in r){var s=r[i];s&&s.d()}}}}else{var o=t.__c;if(o){var a=o.__$u;a&&(o.__$u=void 0,a.d())}}e(t)});He("__h",function(e,t,n,r){(r<3||r===9)&&(t.__$f|=2),e(t,n,r)});we.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in t)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function sg(e){return su(function(){return hi(e)},[])}const og={apiKey:"AIzaSyAzuEWqSe-iUqC0XaXCrMotgdlg7m5SNeg",authDomain:"kaiaogmartin.firebaseapp.com",projectId:"kaiaogmartin",storageBucket:"kaiaogmartin.appspot.com",messagingSenderId:"1043951426861",appId:"1:1043951426861:web:ec5e9ef47ab4fdd4e647a4"},ag=yu(og),vo=F_(ag),Eo="onskeliste";function ug(){return Math.random().toString(36).substring(2)+new Date().getTime().toString(36)}const ql=hi([]),zl="userId",To=hi(localStorage.getItem(zl)??ug());di(()=>{window.localStorage.setItem(zl,To.value)});const cg=M_(vo,Eo);J_(cg,e=>{ql.value=e.docs.map(t=>({...t.data(),id:t.id})).sort((t,n)=>t.sortKey-n.sortKey)});async function ja(e){return console.log(e),await Ml(Rl(vo,Eo,e),{reserved:!0,userId:To.value})}async function lg(e){return console.log(e),await Ml(Rl(vo,Eo,e),{reserved:!1,userId:""})}function hg(){return v(pt,{children:[v(Dr,{includeBack:!0}),v("div",{className:"center-container",children:[v("h1",{children:"Ønskeliste"}),v("p",{children:'Det absolutt viktigste for oss er at du kommer i bryllupet! Om du også har lyst til å gi oss en gave er det veldig hyggelig. Under finner du en liste over ting vi ønsker oss. Trykk på knappen der det står "Reservér", så ser andre at du skal gi denne slik at vi ikke ender opp med mange stekepanner.'}),v("p",{children:"Gjerne gå sammen flere om en gave, og det er også veldig hyggelig med brukte ting som du tror vi kan ha glede av."}),v(dg,{})]})]})}function dg(){return v(pt,{children:v("div",{className:"onskeliste",children:ql.value.map(e=>v(fg,{onske:e},e.id))})})}function fg({onske:e}){return e.link.startsWith("https")?e.reserved?e.userId&&e.userId===To.value?v(pt,{children:[v("p",{className:"name-reserved",children:e.name}),v("a",{className:"link",href:e.link,target:"_blank",children:"Nettbutikk"}),v("button",{className:"reserved-by-user",onClick:()=>lg(e.id),children:"Reservert av deg"})]}):v(pt,{children:[v("p",{className:"name-reserved",children:e.name}),v("a",{className:"link",href:e.link,target:"_blank",children:"Nettbutikk"}),v("button",{className:"reserve",disabled:!0,onClick:()=>ja(e.id),children:"Reservert"})]}):v(pt,{children:[v("a",{className:"name",children:e.name}),v("a",{className:"link",href:e.link,target:"_blank",children:"Nettbutikk"}),v("button",{className:"reserve",onClick:()=>ja(e.id),children:"Reservér"})]}):v(pt,{children:[v("p",{className:"name",children:e.name}),v("p",{className:"description",children:e.link})]})}function pg(){return v(pt,{children:[v(Dr,{includeBack:!0}),v("div",{className:"center-container",children:[v("h1",{children:"Program"}),v("p",{className:"coming",children:"Kommer"})]})]})}function mg(){return v(pt,{children:[v(Dr,{includeBack:!0}),v("div",{className:"center-container",children:[v("h1",{children:"Praktisk info"}),v("h2",{children:"Toastmaster"}),v("p",{children:["Adrian Austevoll er vår eminente toastmaster. Ta kontakt med ham på telefon ",v("a",{href:"tel:94974009",children:"949 74 009"})," dersom du har lyst til å si noen ord."]})]})]})}function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(this,arguments)}var Ie;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ie||(Ie={}));var qa=function(e){return e},za="beforeunload",_g="hashchange",gg="popstate";function yg(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var V=Ga(r.location.hash.substr(1)),R=V.pathname,U=R===void 0?"/":R,_t=V.search,xt=_t===void 0?"":_t,Ot=V.hash,Ke=Ot===void 0?"":Ot,jt=i.state||{};return[jt.idx,qa({pathname:U,search:xt,hash:Ke,state:jt.usr||null,key:jt.key||"default"})]}var o=null;function a(){if(o)d.call(o),o=null;else{var V=Ie.Pop,R=s(),U=R[0],_t=R[1];if(d.length){if(U!=null){var xt=h-U;xt&&(o={action:V,location:_t,retry:function(){dt(xt*-1)}},dt(xt))}}else F(V)}}r.addEventListener(gg,a),r.addEventListener(_g,function(){var V=s(),R=V[1];Di(R)!==Di(l)&&a()});var u=Ie.Pop,c=s(),h=c[0],l=c[1],f=Ka(),d=Ka();h==null&&(h=0,i.replaceState(Cr({},i.state,{idx:h}),""));function E(){var V=document.querySelector("base"),R="";if(V&&V.getAttribute("href")){var U=r.location.href,_t=U.indexOf("#");R=_t===-1?U:U.slice(0,_t)}return R}function T(V){return E()+"#"+(typeof V=="string"?V:Di(V))}function _(V,R){return R===void 0&&(R=null),qa(Cr({pathname:l.pathname,hash:"",search:""},typeof V=="string"?Ga(V):V,{state:R,key:vg()}))}function A(V,R){return[{usr:V.state,key:V.key,idx:R},T(V)]}function k(V,R,U){return!d.length||(d.call({action:V,location:R,retry:U}),!1)}function F(V){u=V;var R=s();h=R[0],l=R[1],f.call({action:u,location:l})}function Z(V,R){var U=Ie.Push,_t=_(V,R);function xt(){Z(V,R)}if(k(U,_t,xt)){var Ot=A(_t,h+1),Ke=Ot[0],jt=Ot[1];try{i.pushState(Ke,"",jt)}catch{r.location.assign(jt)}F(U)}}function mt(V,R){var U=Ie.Replace,_t=_(V,R);function xt(){mt(V,R)}if(k(U,_t,xt)){var Ot=A(_t,h),Ke=Ot[0],jt=Ot[1];i.replaceState(Ke,"",jt),F(U)}}function dt(V){i.go(V)}var wt={get action(){return u},get location(){return l},createHref:T,push:Z,replace:mt,go:dt,back:function(){dt(-1)},forward:function(){dt(1)},listen:function(R){return f.push(R)},block:function(R){var U=d.push(R);return d.length===1&&r.addEventListener(za,Ha),function(){U(),d.length||r.removeEventListener(za,Ha)}}};return wt}function Ha(e){e.preventDefault(),e.returnValue=""}function Ka(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function vg(){return Math.random().toString(36).substr(2,8)}function Di(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,s=e.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Ga(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Eg(){return v(pt,{children:v(cu,{history:yg(),children:[v(Hn,{path:"/",component:ph}),v(Hn,{path:"/program",component:pg}),v(Hn,{path:"/info",component:mg}),v(Hn,{path:"/onskeliste",component:hg})]})})}Xl(v(Eg,{}),document.getElementById("app"));
