(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Nt={},Dr=[],xi=()=>{},pd=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),jo=n=>n.startsWith("onUpdate:"),un=Object.assign,wu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zm=Object.prototype.hasOwnProperty,At=(n,e)=>Zm.call(n,e),at=Array.isArray,ur=n=>ya(n)==="[object Map]",ps=n=>ya(n)==="[object Set]",dh=n=>ya(n)==="[object Date]",ut=n=>typeof n=="function",Xt=n=>typeof n=="string",Mi=n=>typeof n=="symbol",It=n=>n!==null&&typeof n=="object",md=n=>(It(n)||ut(n))&&ut(n.then)&&ut(n.catch),gd=Object.prototype.toString,ya=n=>gd.call(n),Jm=n=>ya(n).slice(8,-1),_d=n=>ya(n)==="[object Object]",Au=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ks=Tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Qm=/-\w/g,ti=el(n=>n.replace(Qm,e=>e.slice(1).toUpperCase())),jm=/\B([A-Z])/g,Wr=el(n=>n.replace(jm,"-$1").toLowerCase()),vd=el(n=>n.charAt(0).toUpperCase()+n.slice(1)),bl=el(n=>n?`on${vd(n)}`:""),mi=(n,e)=>!Object.is(n,e),So=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},xd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ru=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ph;const tl=()=>ph||(ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oa(n){if(at(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Xt(i)?ig(i):oa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Xt(n)||It(n))return n}const eg=/;(?![^(]*\))/g,tg=/:([^]+)/,ng=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ig(n){const e={};return n.replace(ng,t=>t.startsWith("/*")?"":t).split(eg).forEach(t=>{if(t){const i=t.split(tg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Nn(n){let e="";if(Xt(n))e=n;else if(at(n))for(let t=0;t<n.length;t++){const i=Nn(n[t]);i&&(e+=i+" ")}else if(It(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sg=Tu(rg);function Sd(n){return!!n||n===""}function ag(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=Ms(n[r],e[r],t);return i}function mh(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let a=-1;for(let o=0;o<i.length;o++)if(!r[o]&&Ms(s,i[o],t)){a=o;break}if(a<0)return!1;r[a]=1}return!0}function og(n,e,t){let i=ur(n),r=ur(e);if(i||r||(i=ps(n),r=ps(e),i||r))return i&&r?mh(n,e,t):!1;const s=Object.keys(n).length,a=Object.keys(e).length;if(s!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ms(n[o],e[o],t))return!1}return String(n)===String(e)}function gh(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const a=i(n,e,t);return r.delete(n),s.delete(e),a}function Ms(n,e,t){if(n===e)return!0;let i=dh(n),r=dh(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Mi(n),r=Mi(e),i||r?n===e:(i=at(n),r=at(e),i||r?i&&r?gh(n,e,t,ag):!1:(i=It(n),r=It(e),i||r?!i||!r?!1:gh(n,e,t,og):String(n)===String(e))))}function Md(n,e){return n.findIndex(t=>Ms(t,e))}const yd=n=>!!(n&&n.__v_isRef===!0),Fe=n=>Xt(n)?n:n==null?"":at(n)||It(n)&&(n.toString===gd||!ut(n.toString))?yd(n)?Fe(n.value):JSON.stringify(n,bd,2):String(n),bd=(n,e)=>yd(e)?bd(n,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[El(i,s)+" =>"]=r,t),{})}:ps(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>El(t))}:Mi(e)?El(e):It(e)&&!at(e)&&!_d(e)?String(e):e,El=(n,e="")=>{var t;return Mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class lg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&sn&&(sn.active?(this.parent=sn,this.index=(sn.scopes||(sn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){++this._on===1&&(this.prevScope=sn,sn=this)}off(){if(this._on>0&&--this._on===0){if(sn===this)sn=this.prevScope;else{let e=sn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cg(){return sn}let Ft;const Tl=new WeakSet;class Ed{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&(sn.active?sn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tl.has(this)&&(Tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_h(this),Ad(this);const e=Ft,t=ni;Ft=this,ni=!0;try{return this.fn()}finally{Rd(this),Ft=e,ni=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Du(e);this.deps=this.depsTail=void 0,_h(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mc(this)&&this.run()}get dirty(){return Mc(this)}}let Td=0,Zs,Js;function wd(n,e=!1){if(n.flags|=8,e){n.next=Js,Js=n;return}n.next=Zs,Zs=n}function Cu(){Td++}function Pu(){if(--Td>0)return;if(Js){let e=Js;for(Js=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ad(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Du(i),ug(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Mc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Cd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===la)||(n.globalVersion=la,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Mc(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=ni;Ft=n,ni=!0;try{Ad(n);const r=n.fn(n._value);(e.version===0||mi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=t,ni=i,Rd(n),n.flags&=-3}}function Du(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Du(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ug(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ni=!0;const Pd=[];function Ki(){Pd.push(ni),ni=!1}function Zi(){const n=Pd.pop();ni=n===void 0?!0:n}function _h(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let la=0;class hg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!ni||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new hg(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,Dd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,la++,this.notify(e)}notify(e){Cu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Pu()}}}function Dd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Dd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yc=new WeakMap,Br=Symbol(""),bc=Symbol(""),ca=Symbol("");function dn(n,e,t){if(ni&&Ft){let i=yc.get(n);i||yc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Lu),r.map=i,r.key=t),r.track()}}function zi(n,e,t,i,r,s){const a=yc.get(n);if(!a){la++;return}const o=l=>{l&&l.trigger()};if(Cu(),e==="clear")a.forEach(o);else{const l=at(n),c=l&&Au(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ca||!Mi(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ca)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Br)),ur(n)&&o(a.get(bc)));break;case"delete":l||(o(a.get(Br)),ur(n)&&o(a.get(bc)));break;case"set":ur(n)&&o(a.get(Br));break}}Pu()}function $r(n){const e=wt(n);return e===n||(dn(e,"iterate",ca),Xn(n))?e:yi(n)?fr(n)?e.map(t=>dr($n(t))):e.map(dr):e.map($n)}function nl(n){return dn(n=wt(n),"iterate",ca),n}function hi(n,e){return yi(n)?dr(fr(n)?$n(e):e):$n(e)}const fg={__proto__:null,[Symbol.iterator](){return wl(this,Symbol.iterator,n=>hi(this,n))},concat(...n){return $r(this).concat(...n.map(e=>at(e)?$r(e):e))},entries(){return wl(this,"entries",n=>(n[1]=hi(this,n[1]),n))},every(n,e){return Pi(this,"every",n,e,void 0,arguments)},filter(n,e){return Pi(this,"filter",n,e,t=>t.map(i=>hi(this,i)),arguments)},find(n,e){return Pi(this,"find",n,e,t=>hi(this,t),arguments)},findIndex(n,e){return Pi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Pi(this,"findLast",n,e,t=>hi(this,t),arguments)},findLastIndex(n,e){return Pi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Pi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Al(this,"includes",n)},indexOf(...n){return Al(this,"indexOf",n)},join(n){return $r(this).join(n)},lastIndexOf(...n){return Al(this,"lastIndexOf",n)},map(n,e){return Pi(this,"map",n,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...n){return Ls(this,"push",n)},reduce(n,...e){return vh(this,"reduce",n,e)},reduceRight(n,...e){return vh(this,"reduceRight",n,e)},shift(){return Ls(this,"shift")},some(n,e){return Pi(this,"some",n,e,void 0,arguments)},splice(...n){return Ls(this,"splice",n)},toReversed(){return $r(this).toReversed()},toSorted(n){return $r(this).toSorted(n)},toSpliced(...n){return $r(this).toSpliced(...n)},unshift(...n){return Ls(this,"unshift",n)},values(){return wl(this,"values",n=>hi(this,n))}};function wl(n,e,t){const i=nl(n),r=i[e]();return i!==n&&!Xn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const dg=Array.prototype;function Pi(n,e,t,i,r,s){const a=nl(n),o=a!==n&&!Xn(n),l=a[e];if(l!==dg[e]){const f=l.apply(n,s);return o?$n(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,hi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function vh(n,e,t,i){const r=nl(n),s=r!==n&&!Xn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=hi(n,c)),t.call(this,c,hi(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?hi(n,l):l}function Al(n,e,t){const i=wt(n);dn(i,"iterate",ca);const r=i[e](...t);return(r===-1||r===!1)&&Nu(t[0])?(t[0]=wt(t[0]),i[e](...t)):r}function Ls(n,e,t=[]){Ki(),Cu();const i=wt(n)[e].apply(n,t);return Pu(),Zi(),i}const pg=Tu("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function mg(n){Mi(n)||(n=String(n));const e=wt(this);return dn(e,"has",n),e.hasOwnProperty(n)}class Id{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Tg:Od:s?Fd:Nd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=at(e);if(!r){let l;if(a&&(l=fg[t]))return l;if(t==="hasOwnProperty")return mg}const o=Reflect.get(e,t,mn(e)?e:i);if((Mi(t)?Ld.has(t):pg(t))||(r||dn(e,"get",t),s))return o;if(mn(o)){const l=a&&Au(t)?o:o.value;return r&&It(l)?Tc(l):l}return It(o)?r?Tc(o):hr(o):o}}class Ud extends Id{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=at(e)&&Au(t);if(!this._isShallow){const c=yi(s);if(!Xn(i)&&!yi(i)&&(s=wt(s),i=wt(i)),!a&&mn(s)&&!mn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:At(e,t),l=Reflect.set(e,t,i,mn(e)?e:r);return e===wt(r)&&l&&(o?mi(i,s)&&zi(e,"set",t,i):zi(e,"add",t,i)),l}deleteProperty(e,t){const i=At(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&zi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Mi(t)||!Ld.has(t))&&dn(e,"has",t),i}ownKeys(e){return dn(e,"iterate",at(e)?"length":Br),Reflect.ownKeys(e)}}class gg extends Id{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _g=new Ud,vg=new gg,xg=new Ud(!0);const Ec=n=>n,Na=n=>Reflect.getPrototypeOf(n);function Sg(n,e,t){return function(...i){const r=this.__v_raw,s=wt(r),a=ur(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Ec:e?dr:$n;return!e&&dn(s,"iterate",l?bc:Br),un(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Fa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Mg(n,e){const t={get(r){const s=this.__v_raw,a=wt(s),o=wt(r);n||(mi(r,o)&&dn(a,"get",r),dn(a,"get",o));const{has:l}=Na(a),c=e?Ec:n?dr:$n;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&dn(wt(r),"iterate",Br),r.size},has(r){const s=this.__v_raw,a=wt(s),o=wt(r);return n||(mi(r,o)&&dn(a,"has",r),dn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=wt(o),c=e?Ec:n?dr:$n;return!n&&dn(l,"iterate",Br),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return un(t,n?{add:Fa("add"),set:Fa("set"),delete:Fa("delete"),clear:Fa("clear")}:{add(r){const s=wt(this),a=Na(s),o=wt(r),l=!e&&!Xn(r)&&!yi(r)?o:r;return a.has.call(s,l)||mi(r,l)&&a.has.call(s,r)||mi(o,l)&&a.has.call(s,o)||(s.add(l),zi(s,"add",l,l)),this},set(r,s){!e&&!Xn(s)&&!yi(s)&&(s=wt(s));const a=wt(this),{has:o,get:l}=Na(a);let c=o.call(a,r);c||(r=wt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?mi(s,u)&&zi(a,"set",r,s):zi(a,"add",r,s),this},delete(r){const s=wt(this),{has:a,get:o}=Na(s);let l=a.call(s,r);l||(r=wt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&zi(s,"delete",r,void 0),c},clear(){const r=wt(this),s=r.size!==0,a=r.clear();return s&&zi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sg(r,n,e)}),t}function Iu(n,e){const t=Mg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(At(t,r)&&r in i?t:i,r,s)}const yg={get:Iu(!1,!1)},bg={get:Iu(!1,!0)},Eg={get:Iu(!0,!1)};const Nd=new WeakMap,Fd=new WeakMap,Od=new WeakMap,Tg=new WeakMap;function wg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hr(n){return yi(n)?n:Uu(n,!1,_g,yg,Nd)}function Ag(n){return Uu(n,!1,xg,bg,Fd)}function Tc(n){return Uu(n,!0,vg,Eg,Od)}function Uu(n,e,t,i,r){if(!It(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=wg(Jm(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function fr(n){return yi(n)?fr(n.__v_raw):!!(n&&n.__v_isReactive)}function yi(n){return!!(n&&n.__v_isReadonly)}function Xn(n){return!!(n&&n.__v_isShallow)}function Nu(n){return n?!!n.__v_raw:!1}function wt(n){const e=n&&n.__v_raw;return e?wt(e):n}function Rg(n){return!At(n,"__v_skip")&&Object.isExtensible(n)&&xd(n,"__v_skip",!0),n}const $n=n=>It(n)?hr(n):n,dr=n=>It(n)?Tc(n):n;function mn(n){return n?n.__v_isRef===!0:!1}function an(n){return Bd(n,!1)}function Is(n){return Bd(n,!0)}function Bd(n,e){return mn(n)?n:new Cg(n,e)}class Cg{constructor(e,t){this.dep=new Lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:wt(e),this._value=t?e:$n(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xn(e)||yi(e);e=i?e:wt(e),mi(e,t)&&(this._rawValue=e,this._value=i?e:$n(e),this.dep.trigger())}}function kn(n){return mn(n)?n.value:n}const Pg={get:(n,e,t)=>e==="__v_raw"?n:kn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return mn(r)&&!mn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function zd(n){return fr(n)?n:new Proxy(n,Pg)}class Dg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=la-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return wd(this,!0),!0}get value(){const e=this.dep.track();return Cd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lg(n,e,t=!1){let i,r;return ut(n)?i=n:(i=n.get,r=n.set),new Dg(i,r,t)}const Oa={},Lo=new WeakMap;let Rr;function Ig(n,e=!1,t=Rr){if(t){let i=Lo.get(t);i||Lo.set(t,i=[]),i.push(n)}}function Ug(n,e,t=Nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=M=>r?M:Xn(M)||r===!1||r===0?Vi(M,1):Vi(M);let u,f,h,d,_=!1,S=!1;if(mn(n)?(f=()=>n.value,_=Xn(n)):fr(n)?(f=()=>c(n),_=!0):at(n)?(S=!0,_=n.some(M=>fr(M)||Xn(M)),f=()=>n.map(M=>{if(mn(M))return M.value;if(fr(M))return c(M);if(ut(M))return l?l(M,2):M()})):ut(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ki();try{h()}finally{Zi()}}const M=Rr;Rr=u;try{return l?l(n,3,[d]):n(d)}finally{Rr=M}}:f=xi,e&&r){const M=f,A=r===!0?1/0:r;f=()=>Vi(M(),A)}const m=cg(),p=()=>{u.stop(),m&&m.active&&wu(m.effects,u)};if(s&&e){const M=e;e=(...A)=>{const R=M(...A);return p(),R}}let w=S?new Array(n.length).fill(Oa):Oa;const P=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const A=u.run();if(M||r||_||(S?A.some((R,F)=>mi(R,w[F])):mi(A,w))){h&&h();const R=Rr;Rr=u;try{const F=[A,w===Oa?void 0:S&&w[0]===Oa?[]:w,d];w=A,l?l(e,3,F):e(...F)}finally{Rr=R}}}else u.run()};return o&&o(P),u=new Ed(f),u.scheduler=a?()=>a(P,!1):P,d=M=>Ig(M,!1,u),h=u.onStop=()=>{const M=Lo.get(u);if(M){if(l)l(M,4);else for(const A of M)A();Lo.delete(u)}},e?i?P(!0):w=u.run():a?a(P.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Vi(n,e=1/0,t){if(e<=0||!It(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,mn(n))Vi(n.value,e,t);else if(at(n))for(let i=0;i<n.length;i++)Vi(n[i],e,t);else if(ps(n)||ur(n))n.forEach(i=>{Vi(i,e,t)});else if(_d(n)){for(const i in n)Vi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Vi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ba(n,e,t,i){try{return i?n(...i):n()}catch(r){il(r,e,t)}}function ri(n,e,t,i){if(ut(n)){const r=ba(n,e,t,i);return r&&md(r)&&r.catch(s=>{il(s,e,t)}),r}if(at(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ri(n[s],e,t,i));return r}}function il(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Ki(),ba(s,null,10,[n,l,c]),Zi();return}}Ng(n,t,r,i,a)}function Ng(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const yn=[];let ui=-1;const us=[];let lr=null,as=0;const Vd=Promise.resolve();let Io=null;function Fg(n){const e=Io||Vd;return n?e.then(this?n.bind(this):n):e}function Og(n){let e=ui+1,t=yn.length;for(;e<t;){const i=e+t>>>1,r=yn[i],s=ua(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Fu(n){if(!(n.flags&1)){const e=ua(n),t=yn[yn.length-1];!t||!(n.flags&2)&&e>=ua(t)?yn.push(n):yn.splice(Og(e),0,n),n.flags|=1,kd()}}function kd(){Io||(Io=Vd.then(Gd))}function Bg(n){if(!at(n))lr&&n.id===-1?lr.splice(as+1,0,n):n.flags&1||(us.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)us.push(n[e]);kd()}function xh(n,e,t=ui+1){for(;t<yn.length;t++){const i=yn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;yn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Hd(n){if(us.length){const e=[...new Set(us)].sort((t,i)=>ua(t)-ua(i));if(us.length=0,lr){for(let t=0;t<e.length;t++)lr.push(e[t]);return}for(lr=e,as=0;as<lr.length;as++){const t=lr[as];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}lr=null,as=0}}const ua=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Gd(n){try{for(ui=0;ui<yn.length;ui++){const e=yn[ui];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ba(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ui<yn.length;ui++){const e=yn[ui];e&&(e.flags&=-2)}ui=-1,yn.length=0,Hd(),Io=null,(yn.length||us.length)&&Gd()}}let Wn=null,Wd=null;function Uo(n){const e=Wn;return Wn=n,Wd=n&&n.type.__scopeId||null,e}function zg(n,e=Wn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ph(-1);const s=Uo(e),a=zr.length;let o;try{o=n(...r)}finally{for(let l=zr.length;l>a;l--)mp();Uo(s),i._d&&Ph(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bt(n,e){if(Wn===null)return n;const t=ll(Wn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Nt]=e[r];s&&(ut(s)&&(s={mounted:s,updated:s}),s.deep&&Vi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Sr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ki(),ri(l,t,8,[n.el,o,n,e]),Zi())}}function Vg(n,e){if(En){let t=En.provides;const i=En.parent&&En.parent.provides;i===t&&(t=En.provides=Object.create(i)),t[n]=e}}function Mo(n,e,t=!1){const i=F_();if(i||hs){let r=hs?hs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ut(e)?e.call(i&&i.proxy):e}}const kg=Symbol.for("v-scx"),Hg=()=>Mo(kg);function ki(n,e,t){return Xd(n,e,t)}function Xd(n,e,t=Nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=un({},t),l=e&&i||!e&&s!=="post";let c;if(da){if(s==="sync"){const d=Hg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=xi,d.resume=xi,d.pause=xi,d}}const u=En;o.call=(d,_,S)=>ri(d,u,_,S);let f=!1;s==="post"?o.scheduler=d=>{Pn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():Fu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ug(n,e,o);return da&&(c?c.push(h):l&&h()),h}function Gg(n,e,t){const i=this.proxy,r=Xt(n)?n.includes(".")?$d(i,n):()=>i[n]:n.bind(i,i);let s;ut(e)?s=e:(s=e.handler,t=e);const a=Ea(this),o=Xd(r,s.bind(i),t);return a(),o}function $d(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Wg=Symbol("_vte"),rl=n=>n.__isTeleport,Rl=Symbol("_leaveCb");function Xg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ji){e=t;break}}return e}function qd(n){if(!Bu(n))return rl(n.type)&&n.children?Xg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ut(t.default))return t.default()}}function Ou(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Ou(rl(t.type)&&qd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Yd(n,e){return ut(n)?un({name:n.name},e,{setup:n}):n}function Kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Sh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const No=new WeakMap;function Qs(n,e,t,i,r=!1){if(at(n)){n.forEach((S,m)=>Qs(S,e&&(at(e)?e[m]:e),t,i,r));return}if(js(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ll(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Nt?o.refs={}:o.refs,f=o.setupState,h=wt(f),d=f===Nt?pd:S=>Sh(u,S)?!1:At(h,S),_=(S,m)=>!(m&&Sh(u,m));if(c!=null&&c!==l){if(Mh(e),Xt(c))u[c]=null,d(c)&&(f[c]=null);else if(mn(c)){const S=e;_(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(ut(l))ba(l,o,12,[a,u]);else{const S=Xt(l),m=mn(l);if(S||m){const p=()=>{if(n.f){const w=S?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)at(w)&&wu(w,s);else if(at(w))w.includes(s)||w.push(s);else if(S)u[l]=[s],d(l)&&(f[l]=u[l]);else{const P=[s];_(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else S?(u[l]=a,d(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const w=()=>{p(),No.delete(n)};w.id=-1,No.set(n,w),Pn(w,t)}else Mh(n),p()}}}function Mh(n){const e=No.get(n);e&&(e.flags|=8,No.delete(n))}tl().requestIdleCallback;tl().cancelIdleCallback;const js=n=>!!n.type.__asyncLoader,Bu=n=>n.type.__isKeepAlive;function $g(n,e){Zd(n,"a",e)}function qg(n,e){Zd(n,"da",e)}function Zd(n,e,t=En){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(sl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Bu(r.parent.vnode)&&Yg(i,e,t,r),r=r.parent}}function Yg(n,e,t,i){const r=sl(e,n,i,!0);Jd(()=>{wu(i[e],r)},t)}function sl(n,e,t=En,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Ki();const o=Ea(t),l=ri(e,t,n,a);return o(),Zi(),l});return i?r.unshift(s):r.push(s),s}}const ji=n=>(e,t=En)=>{(!da||n==="sp")&&sl(n,(...i)=>e(...i),t)},Kg=ji("bm"),Fo=ji("m"),Zg=ji("bu"),Jg=ji("u"),Qg=ji("bum"),Jd=ji("um"),jg=ji("sp"),e_=ji("rtg"),t_=ji("rtc");function n_(n,e=En){sl("ec",n,e)}const i_=Symbol.for("v-ndc");function Lr(n,e,t,i){let r;const s=t,a=at(n);if(a||Xt(n)){const o=a&&fr(n);let l=!1,c=!1;o&&(l=!Xn(n),c=yi(n),n=nl(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?dr($n(n[u])):$n(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(It(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const wc=n=>n?Sp(n)?ll(n):wc(n.parent):null,ea=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wc(n.parent),$root:n=>wc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>jd(n),$forceUpdate:n=>n.f||(n.f=()=>{Fu(n.update)}),$nextTick:n=>n.n||(n.n=Fg.bind(n.proxy)),$watch:n=>Gg.bind(n)}),Cl=(n,e)=>n!==Nt&&!n.__isScriptSetup&&At(n,e),r_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Cl(i,e))return a[e]=1,i[e];if(r!==Nt&&At(r,e))return a[e]=2,r[e];if(At(s,e))return a[e]=3,s[e];if(t!==Nt&&At(t,e))return a[e]=4,t[e];Ac&&(a[e]=0)}}const c=ea[e];let u,f;if(c)return e==="$attrs"&&dn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Nt&&At(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,At(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Cl(r,e)?(r[e]=t,!0):i!==Nt&&At(i,e)?(i[e]=t,!0):At(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Nt&&o[0]!=="$"&&At(n,o)||Cl(e,o)||At(s,o)||At(i,o)||At(ea,o)||At(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:At(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yh(n){return at(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ac=!0;function s_(n){const e=jd(n),t=n.proxy,i=n.ctx;Ac=!1,e.beforeCreate&&bh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:S,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:P,unmounted:M,render:A,renderTracked:R,renderTriggered:F,errorCaptured:y,serverPrefetch:D,expose:B,inheritAttrs:G,components:te,directives:le,filters:V}=e;if(c&&a_(c,i,null),a)for(const j in a){const fe=a[j];ut(fe)&&(i[j]=fe.bind(t))}if(r){const j=r.call(t,t);It(j)&&(n.data=hr(j))}if(Ac=!0,s)for(const j in s){const fe=s[j],ae=ut(fe)?fe.bind(t,t):ut(fe.get)?fe.get.bind(t,t):xi,xe=!ut(fe)&&ut(fe.set)?fe.set.bind(t):xi,W=di({get:ae,set:xe});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>W.value,set:ge=>W.value=ge})}if(o)for(const j in o)Qd(o[j],i,t,j);if(l){const j=ut(l)?l.call(t):l;Reflect.ownKeys(j).forEach(fe=>{Vg(fe,j[fe])})}u&&bh(u,n,"c");function re(j,fe){at(fe)?fe.forEach(ae=>j(ae.bind(t))):fe&&j(fe.bind(t))}if(re(Kg,f),re(Fo,h),re(Zg,d),re(Jg,_),re($g,S),re(qg,m),re(n_,y),re(t_,R),re(e_,F),re(Qg,w),re(Jd,M),re(jg,D),at(B))if(B.length){const j=n.exposed||(n.exposed={});B.forEach(fe=>{Object.defineProperty(j,fe,{get:()=>t[fe],set:ae=>t[fe]=ae,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===xi&&(n.render=A),G!=null&&(n.inheritAttrs=G),te&&(n.components=te),le&&(n.directives=le),D&&Kd(n)}function a_(n,e,t=xi){at(n)&&(n=Rc(n));for(const i in n){const r=n[i];let s;It(r)?"default"in r?s=Mo(r.from||i,r.default,!0):s=Mo(r.from||i):s=Mo(r),mn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function bh(n,e,t){ri(at(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qd(n,e,t,i){let r=i.includes(".")?$d(t,i):()=>t[i];if(Xt(n)){const s=e[n];ut(s)&&ki(r,s)}else if(ut(n))ki(r,n.bind(t));else if(It(n))if(at(n))n.forEach(s=>Qd(s,e,t,i));else{const s=ut(n.handler)?n.handler.bind(t):e[n.handler];ut(s)&&ki(r,s,n)}}function jd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Oo(l,c,a,!0)),Oo(l,e,a)),It(e)&&s.set(e,l),l}function Oo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Oo(n,s,t,!0),r&&r.forEach(a=>Oo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=o_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const o_={data:Eh,props:Th,emits:Th,methods:Gs,computed:Gs,beforeCreate:xn,created:xn,beforeMount:xn,mounted:xn,beforeUpdate:xn,updated:xn,beforeDestroy:xn,beforeUnmount:xn,destroyed:xn,unmounted:xn,activated:xn,deactivated:xn,errorCaptured:xn,serverPrefetch:xn,components:Gs,directives:Gs,watch:c_,provide:Eh,inject:l_};function Eh(n,e){return e?n?function(){return un(ut(n)?n.call(this,this):n,ut(e)?e.call(this,this):e)}:e:n}function l_(n,e){return Gs(Rc(n),Rc(e))}function Rc(n){if(at(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function xn(n,e){return n?[...new Set([].concat(n,e))]:e}function Gs(n,e){return n?un(Object.create(null),n,e):e}function Th(n,e){return n?at(n)&&at(e)?[...new Set([...n,...e])]:un(Object.create(null),yh(n),yh(e??{})):e}function c_(n,e){if(!n)return e;if(!e)return n;const t=un(Object.create(null),n);for(const i in e)t[i]=xn(n[i],e[i]);return t}function ep(){return{app:null,config:{isNativeTag:pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u_=0;function h_(n,e){return function(i,r=null){ut(i)||(i=un({},i)),r!=null&&!It(r)&&(r=null);const s=ep(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:u_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:H_,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ut(u.install)?(a.add(u),u.install(c,...f)):ut(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Wi(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ll(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ri(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=hs;hs=c;try{return u()}finally{hs=f}}};return c}}let hs=null;const f_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ti(e)}Modifiers`]||n[`${Wr(e)}Modifiers`];function d_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Nt;let r=t;const s=e.startsWith("update:"),a=s&&f_(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Xt(u)?u.trim():u)),a.number&&(r=r.map(Ru)));let o,l=i[o=bl(e)]||i[o=bl(ti(e))];!l&&s&&(l=i[o=bl(Wr(e))]),l&&ri(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ri(c,n,6,r)}}const p_=new WeakMap;function tp(n,e,t=!1){const i=t?p_:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ut(n)){const l=c=>{const u=tp(c,e,!0);u&&(o=!0,un(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(It(n)&&i.set(n,null),null):(at(s)?s.forEach(l=>a[l]=null):un(a,s),It(n)&&i.set(n,a),a)}function al(n,e){return!n||!Qo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),At(n,e[0].toLowerCase()+e.slice(1))||At(n,Wr(e))||At(n,e))}function wh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:S}=n,m=Uo(n);let p,w;try{if(t.shapeFlag&4){const M=r||i,A=M;p=fi(c.call(A,M,u,f,d,h,_)),w=o}else{const M=e;p=fi(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),w=e.props?o:m_(o)}}catch(M){zr.length=0,il(M,n,1),p=Wi(Ji)}let P=p;if(w&&S!==!1){const M=Object.keys(w),{shapeFlag:A}=P;M.length&&A&7&&(s&&M.some(jo)&&(w=g_(w,s)),P=ms(P,w,!1,!0))}if(t.dirs&&(P=ms(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const M=rl(P.type)&&qd(P)||P;Ou(M,t.transition)}return p=P,Uo(m),p}const m_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qo(t))&&((e||(e={}))[t]=n[t]);return e},g_=(n,e)=>{const t={};for(const i in n)(!jo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function __(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ah(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(np(a,i,h)&&!al(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ah(i,a,c):!0:!!a;return!1}function Ah(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(np(e,n,s)&&!al(t,s))return!0}return!1}function np(n,e,t){const i=n[t],r=e[t];return t==="style"&&It(i)&&It(r)?!Ms(i,r):i!==r}function v_({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const ip={},rp=()=>Object.create(ip),sp=n=>Object.getPrototypeOf(n)===ip;function x_(n,e,t,i=!1){const r={},s=rp();n.propsDefaults=Object.create(null),ap(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Ag(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function S_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=wt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(al(n.emitsOptions,h))continue;const d=e[h];if(l)if(At(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=ti(h);r[_]=Cc(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{ap(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!At(e,f)&&((u=Wr(f))===f||!At(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Cc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!At(e,f))&&(delete s[f],c=!0)}c&&zi(n.attrs,"set","")}function ap(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ks(l))continue;const c=e[l];let u;r&&At(r,u=ti(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:al(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=wt(t),c=o||Nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Cc(r,l,f,c[f],n,!At(c,f))}}return a}function Cc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=At(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ut(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ea(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Wr(t))&&(i=!0))}return i}const M_=new WeakMap;function op(n,e,t=!1){const i=t?M_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ut(n)){const u=f=>{l=!0;const[h,d]=op(f,e,!0);un(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return It(n)&&i.set(n,Dr),Dr;if(at(s))for(let u=0;u<s.length;u++){const f=ti(s[u]);Rh(f)&&(a[f]=Nt)}else if(s)for(const u in s){const f=ti(u);if(Rh(f)){const h=s[u],d=a[f]=at(h)||ut(h)?{type:h}:un({},h),_=d.type;let S=!1,m=!0;if(at(_))for(let p=0;p<_.length;++p){const w=_[p],P=ut(w)&&w.name;if(P==="Boolean"){S=!0;break}else P==="String"&&(m=!1)}else S=ut(_)&&_.name==="Boolean";d[0]=S,d[1]=m,(S||At(d,"default"))&&o.push(f)}}const c=[a,o];return It(n)&&i.set(n,c),c}function Rh(n){return n[0]!=="$"&&!Ks(n)}const zu=n=>n==="_"||n==="_ctx"||n==="$stable",Vu=n=>at(n)?n.map(fi):[fi(n)],y_=(n,e,t)=>{if(e._n)return e;const i=zg((...r)=>Vu(e(...r)),t);return i._c=!1,i},lp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zu(r))continue;const s=n[r];if(ut(s))e[r]=y_(r,s,i);else if(s!=null){const a=Vu(s);e[r]=()=>a}}},cp=(n,e)=>{const t=Vu(e);n.slots.default=()=>t},up=(n,e,t)=>{for(const i in e)(t||!zu(i))&&(n[i]=e[i])},b_=(n,e,t)=>{const i=n.slots=rp();if(n.vnode.shapeFlag&32){const r=e._;r?(up(i,e,t),t&&xd(i,"_",r,!0)):lp(e,i)}else e&&cp(n,e)},E_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:up(r,e,t):(s=!e.$stable,lp(e,r)),a=e}else e&&(cp(n,e),a={default:1});if(s)for(const o in r)!zu(o)&&a[o]==null&&delete r[o]},Pn=C_;function T_(n){return w_(n)}function w_(n,e){const t=tl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=xi,insertStaticContent:_}=n,S=(b,U,I,z=null,k=null,X=null,ne=void 0,_e=null,he=!!U.dynamicChildren)=>{if(b===U)return;b&&!Us(b,U)&&(z=pe(b),ge(b,k,X,!0),b=null),U.patchFlag===-2&&(he=!1,U.dynamicChildren=null),U.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(U.dynamicChildren===Dr&&(U.dynamicChildren=[]),U.dynamicChildren.hasOnce=!0);const{type:ce,ref:Ae,shapeFlag:C}=U;switch(ce){case ol:m(b,U,I,z);break;case Ji:p(b,U,I,z);break;case Dl:b==null&&w(U,I,z,ne);break;case tn:te(b,U,I,z,k,X,ne,_e,he);break;default:C&1?A(b,U,I,z,k,X,ne,_e,he):C&6?le(b,U,I,z,k,X,ne,_e,he):(C&64||C&128)&&ce.process(b,U,I,z,k,X,ne,_e,he,me)}Ae!=null&&k?Qs(Ae,b&&b.ref,X,U||b,!U):Ae==null&&b&&b.ref!=null&&Qs(b.ref,null,X,b,!0)},m=(b,U,I,z)=>{if(b==null)i(U.el=o(U.children),I,z);else{const k=U.el=b.el;U.children!==b.children&&c(k,U.children)}},p=(b,U,I,z)=>{b==null?i(U.el=l(U.children||""),I,z):U.el=b.el},w=(b,U,I,z)=>{[b.el,b.anchor]=_(b.children,U,I,z,b.el,b.anchor)},P=({el:b,anchor:U},I,z)=>{let k;for(;b&&b!==U;)k=h(b),i(b,I,z),b=k;i(U,I,z)},M=({el:b,anchor:U})=>{let I;for(;b&&b!==U;)I=h(b),r(b),b=I;r(U)},A=(b,U,I,z,k,X,ne,_e,he)=>{if(U.type==="svg"?ne="svg":U.type==="math"&&(ne="mathml"),b==null)R(U,I,z,k,X,ne,_e,he);else{const ce=b.el&&b.el._isVueCE?b.el:null;try{ce&&ce._beginPatch(),D(b,U,k,X,ne,_e,he)}finally{ce&&ce._endPatch()}}},R=(b,U,I,z,k,X,ne,_e)=>{let he,ce;const{props:Ae,shapeFlag:C,transition:Ce,dirs:Ne}=b;if(he=b.el=a(b.type,X,Ae&&Ae.is,Ae),C&8?u(he,b.children):C&16&&y(b.children,he,null,z,k,Pl(b,X),ne,_e),Ne&&Sr(b,null,z,"created"),F(he,b,b.scopeId,ne,z),Ae){for(const g in Ae)g!=="value"&&!Ks(g)&&s(he,g,null,Ae[g],X,z);"value"in Ae&&s(he,"value",null,Ae.value,X),(ce=Ae.onVnodeBeforeMount)&&oi(ce,z,b)}Ne&&Sr(b,null,z,"beforeMount");const T=A_(k,Ce);T&&Ce.beforeEnter(he),i(he,U,I),((ce=Ae&&Ae.onVnodeMounted)||T||Ne)&&Pn(()=>{try{ce&&oi(ce,z,b),T&&Ce.enter(he),Ne&&Sr(b,null,z,"mounted")}finally{}},k)},F=(b,U,I,z,k)=>{if(I&&d(b,I),z)for(let X=0;X<z.length;X++)d(b,z[X]);if(k){let X=k.subTree;if(U===X||pp(X.type)&&(X.ssContent===U||X.ssFallback===U)){const ne=k.vnode;F(b,ne,ne.scopeId,ne.slotScopeIds,k.parent)}}},y=(b,U,I,z,k,X,ne,_e,he=0)=>{for(let ce=he;ce<b.length;ce++){const Ae=b[ce]=_e?Oi(b[ce]):fi(b[ce]);S(null,Ae,U,I,z,k,X,ne,_e)}},D=(b,U,I,z,k,X,ne)=>{const _e=U.el=b.el;let{patchFlag:he,dynamicChildren:ce,dirs:Ae}=U;he|=b.patchFlag&16;const C=b.props||Nt,Ce=U.props||Nt;let Ne;if(I&&Mr(I,!1),(Ne=Ce.onVnodeBeforeUpdate)&&oi(Ne,I,U,b),Ae&&Sr(U,b,I,"beforeUpdate"),I&&Mr(I,!0),ce&&(!b.dynamicChildren||b.dynamicChildren.length!==ce.length)&&(he=0,ne=!1,ce=null),(C.innerHTML&&Ce.innerHTML==null||C.textContent&&Ce.textContent==null)&&u(_e,""),ce?B(b.dynamicChildren,ce,_e,I,z,Pl(U,k),X):ne||fe(b,U,_e,null,I,z,Pl(U,k),X,!1),he>0){if(he&16)G(_e,C,Ce,I,k);else if(he&2&&C.class!==Ce.class&&s(_e,"class",null,Ce.class,k),he&4&&s(_e,"style",C.style,Ce.style,k),he&8){const T=U.dynamicProps;for(let g=0;g<T.length;g++){const O=T[g],J=C[O],ie=Ce[O];(ie!==J||O==="value")&&s(_e,O,J,ie,k,I)}}he&1&&b.children!==U.children&&u(_e,U.children)}else!ne&&ce==null&&G(_e,C,Ce,I,k);((Ne=Ce.onVnodeUpdated)||Ae)&&Pn(()=>{Ne&&oi(Ne,I,U,b),Ae&&Sr(U,b,I,"updated")},z)},B=(b,U,I,z,k,X,ne)=>{for(let _e=0;_e<U.length;_e++){const he=b[_e],ce=U[_e],Ae=he.el&&(he.type===tn||!Us(he,ce)||he.shapeFlag&198)?f(he.el):I;S(he,ce,Ae,null,z,k,X,ne,!0)}},G=(b,U,I,z,k)=>{if(U!==I){if(U!==Nt)for(const X in U)!Ks(X)&&!(X in I)&&s(b,X,U[X],null,k,z);for(const X in I){if(Ks(X))continue;const ne=I[X],_e=U[X];ne!==_e&&X!=="value"&&s(b,X,_e,ne,k,z)}"value"in I&&s(b,"value",U.value,I.value,k)}},te=(b,U,I,z,k,X,ne,_e,he)=>{const ce=U.el=b?b.el:o(""),Ae=U.anchor=b?b.anchor:o("");let{patchFlag:C,dynamicChildren:Ce,slotScopeIds:Ne}=U;Ne&&(_e=_e?_e.concat(Ne):Ne),b==null?(i(ce,I,z),i(Ae,I,z),y(U.children||[],I,Ae,k,X,ne,_e,he)):C>0&&C&64&&Ce&&b.dynamicChildren&&b.dynamicChildren.length===Ce.length?(B(b.dynamicChildren,Ce,I,k,X,ne,_e),(U.key!=null||k&&U===k.subTree)&&hp(b,U,!0)):fe(b,U,I,Ae,k,X,ne,_e,he)},le=(b,U,I,z,k,X,ne,_e,he)=>{U.slotScopeIds=_e,b==null?U.shapeFlag&512?k.ctx.activate(U,I,z,ne,he):V(U,I,z,k,X,ne,he):ee(b,U,he)},V=(b,U,I,z,k,X,ne)=>{const _e=b.component=N_(b,z,k);if(Bu(b)&&(_e.ctx.renderer=me),O_(_e,!1,ne),_e.asyncDep){if(k&&k.registerDep(_e,re,ne),!b.el){const he=_e.subTree=Wi(Ji);p(null,he,U,I),b.placeholder=he.el}}else re(_e,b,U,I,k,X,ne)},ee=(b,U,I)=>{const z=U.component=b.component;if(__(b,U,I))if(z.asyncDep&&!z.asyncResolved){U.el=b.el,j(z,U,I);return}else z.next=U,z.update();else U.el=b.el,z.vnode=U},re=(b,U,I,z,k,X,ne)=>{const _e=()=>{if(b.isMounted){let{next:C,bu:Ce,u:Ne,parent:T,vnode:g}=b;{const Pe=fp(b);if(Pe){C&&(C.el=g.el,j(b,C,ne)),Pe.asyncDep.then(()=>{Pn(()=>{b.isUnmounted||ce()},k)});return}}let O=C,J;Mr(b,!1),C?(C.el=g.el,j(b,C,ne)):C=g,Ce&&So(Ce),(J=C.props&&C.props.onVnodeBeforeUpdate)&&oi(J,T,C,g),Mr(b,!0);const ie=wh(b),we=b.subTree;b.subTree=ie,S(we,ie,f(we.el),pe(we),b,k,X),C.el=ie.el,O===null&&v_(b,ie.el),Ne&&Pn(Ne,k),(J=C.props&&C.props.onVnodeUpdated)&&Pn(()=>oi(J,T,C,g),k)}else{let C;const{el:Ce,props:Ne}=U,{bm:T,m:g,parent:O,root:J,type:ie}=b,we=js(U);Mr(b,!1),T&&So(T),!we&&(C=Ne&&Ne.onVnodeBeforeMount)&&oi(C,O,U),Mr(b,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(ie,b.parent?b.parent.type:void 0);const Pe=b.subTree=wh(b);S(null,Pe,I,z,b,k,X),U.el=Pe.el}if(g&&Pn(g,k),!we&&(C=Ne&&Ne.onVnodeMounted)){const Pe=U;Pn(()=>oi(C,O,Pe),k)}(U.shapeFlag&256||O&&js(O.vnode)&&O.vnode.shapeFlag&256)&&b.a&&Pn(b.a,k),b.isMounted=!0,U=I=z=null}};b.scope.on();const he=b.effect=new Ed(_e);b.scope.off();const ce=b.update=he.run.bind(he),Ae=b.job=he.runIfDirty.bind(he);Ae.i=b,Ae.id=b.uid,he.scheduler=()=>Fu(Ae),Mr(b,!0),ce()},j=(b,U,I)=>{U.component=b;const z=b.vnode.props;b.vnode=U,b.next=null,S_(b,U.props,z,I),E_(b,U.children,I),Ki(),xh(b),Zi()},fe=(b,U,I,z,k,X,ne,_e,he=!1)=>{const ce=b&&b.children,Ae=b?b.shapeFlag:0,C=U.children,{patchFlag:Ce,shapeFlag:Ne}=U;if(Ce>0){if(Ce&128){xe(ce,C,I,z,k,X,ne,_e,he);return}else if(Ce&256){ae(ce,C,I,z,k,X,ne,_e,he);return}}Ne&8?(Ae&16&&Re(ce,k,X),C!==ce&&u(I,C)):Ae&16?Ne&16?xe(ce,C,I,z,k,X,ne,_e,he):Re(ce,k,X,!0):(Ae&8&&u(I,""),Ne&16&&y(C,I,z,k,X,ne,_e,he))},ae=(b,U,I,z,k,X,ne,_e,he)=>{b=b||Dr,U=U||Dr;const ce=b.length,Ae=U.length,C=Math.min(ce,Ae);let Ce;for(Ce=0;Ce<C;Ce++){const Ne=U[Ce]=he?Oi(U[Ce]):fi(U[Ce]);S(b[Ce],Ne,I,null,k,X,ne,_e,he)}ce>Ae?Re(b,k,X,!0,!1,C):y(U,I,z,k,X,ne,_e,he,C)},xe=(b,U,I,z,k,X,ne,_e,he)=>{let ce=0;const Ae=U.length;let C=b.length-1,Ce=Ae-1;for(;ce<=C&&ce<=Ce;){const Ne=b[ce],T=U[ce]=he?Oi(U[ce]):fi(U[ce]);if(Us(Ne,T))S(Ne,T,I,null,k,X,ne,_e,he);else break;ce++}for(;ce<=C&&ce<=Ce;){const Ne=b[C],T=U[Ce]=he?Oi(U[Ce]):fi(U[Ce]);if(Us(Ne,T))S(Ne,T,I,null,k,X,ne,_e,he);else break;C--,Ce--}if(ce>C){if(ce<=Ce){const Ne=Ce+1,T=Ne<Ae?U[Ne].el:z;for(;ce<=Ce;)S(null,U[ce]=he?Oi(U[ce]):fi(U[ce]),I,T,k,X,ne,_e,he),ce++}}else if(ce>Ce)for(;ce<=C;)ge(b[ce],k,X,!0),ce++;else{const Ne=ce,T=ce,g=new Map;for(ce=T;ce<=Ce;ce++){const De=U[ce]=he?Oi(U[ce]):fi(U[ce]);De.key!=null&&g.set(De.key,ce)}let O,J=0;const ie=Ce-T+1;let we=!1,Pe=0;const ve=new Array(ie);for(ce=0;ce<ie;ce++)ve[ce]=0;for(ce=Ne;ce<=C;ce++){const De=b[ce];if(J>=ie){ge(De,k,X,!0);continue}let $e;if(De.key!=null)$e=g.get(De.key);else for(O=T;O<=Ce;O++)if(ve[O-T]===0&&Us(De,U[O])){$e=O;break}$e===void 0?ge(De,k,X,!0):(ve[$e-T]=ce+1,$e>=Pe?Pe=$e:we=!0,S(De,U[$e],I,null,k,X,ne,_e,he),J++)}const ye=we?R_(ve):Dr;for(O=ye.length-1,ce=ie-1;ce>=0;ce--){const De=T+ce,$e=U[De],Ve=U[De+1],Oe=De+1<Ae?Ve.el||dp(Ve):z;ve[ce]===0?S(null,$e,I,Oe,k,X,ne,_e,he):we&&(O<0||ce!==ye[O]?W($e,I,Oe,2):O--)}}},W=(b,U,I,z,k=null)=>{const{el:X,type:ne,transition:_e,children:he,shapeFlag:ce}=b;if(ce&6){W(b.component.subTree,U,I,z);return}if(ce&128){b.suspense.move(U,I,z);return}if(ce&64){ne.move(b,U,I,me);return}if(ne===tn){i(X,U,I);for(let C=0;C<he.length;C++)W(he[C],U,I,z);i(b.anchor,U,I);return}if(ne===Dl){P(b,U,I);return}if(z!==2&&ce&1&&_e)if(z===0)_e.persisted&&!X[Rl]?i(X,U,I):(_e.beforeEnter(X),i(X,U,I),Pn(()=>_e.enter(X),k));else{const{leave:C,delayLeave:Ce,afterLeave:Ne}=_e,T=()=>{b.ctx.isUnmounted?r(X):i(X,U,I)},g=()=>{const O=X._isLeaving||!!X[Rl];X._isLeaving&&X[Rl](!0),_e.persisted&&!O?T():C(X,()=>{T(),Ne&&Ne()})};Ce?Ce(X,T,g):g()}else i(X,U,I)},ge=(b,U,I,z=!1,k=!1)=>{const{type:X,props:ne,ref:_e,children:he,dynamicChildren:ce,shapeFlag:Ae,patchFlag:C,dirs:Ce,cacheIndex:Ne,memo:T}=b;if((C===-2||ce&&ce.hasOnce)&&(k=!1),_e!=null&&(Ki(),Qs(_e,null,I,b,!0),Zi()),Ne!=null&&(!b.ctx||b.ctx===U)&&(U.renderCache[Ne]=void 0),Ae&256){U.ctx.deactivate(b);return}const g=Ae&1&&Ce,O=!js(b);let J;if(O&&(J=ne&&ne.onVnodeBeforeUnmount)&&oi(J,U,b),Ae&6)qe(b.component,I,z);else{if(Ae&128){b.suspense.unmount(I,z);return}g&&Sr(b,null,U,"beforeUnmount"),Ae&64?b.type.remove(b,U,I,me,z):ce&&!ce.hasOnce&&(X!==tn||C>0&&C&64)?Re(ce,U,I,!1,!0):(X===tn&&C&384||!k&&Ae&16)&&Re(he,U,I),z&&Z(b)}const ie=T!=null&&Ne==null;(O&&(J=ne&&ne.onVnodeUnmounted)||g||ie)&&Pn(()=>{J&&oi(J,U,b),g&&Sr(b,null,U,"unmounted"),ie&&(b.el=null)},I)},Z=b=>{const{type:U,el:I,anchor:z,transition:k}=b;if(U===tn){He(I,z);return}if(U===Dl){M(b),k&&!k.persisted&&k.afterLeave&&k.afterLeave();return}const X=()=>{r(I),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(b.shapeFlag&1&&k&&!k.persisted){const{leave:ne,delayLeave:_e}=k,he=()=>ne(I,X);_e?_e(b.el,X,he):he()}else X()},He=(b,U)=>{let I;for(;b!==U;)I=h(b),r(b),b=I;r(U)},qe=(b,U,I)=>{const{bum:z,scope:k,job:X,subTree:ne,um:_e,m:he,a:ce}=b;Ch(he),Ch(ce),z&&So(z),k.stop(),X?(X.flags|=8,ge(ne,b,U,I)):b.vnode.el&&ne&&(ne.transition=b.vnode.transition,ge(ne,b,U,I)),_e&&Pn(_e,U),Pn(()=>{b.isUnmounted=!0},U)},Re=(b,U,I,z=!1,k=!1,X=0)=>{for(let ne=X;ne<b.length;ne++)ge(b[ne],U,I,z,k)},pe=b=>{if(b.shapeFlag&6)return pe(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const U=h(b.anchor||b.el),I=U&&U[Wg];return I?h(I):U};let ue=!1;const Ie=(b,U,I)=>{let z;b==null?U._vnode&&(ge(U._vnode,null,null,!0),z=U._vnode.component):S(U._vnode||null,b,U,null,null,null,I),U._vnode=b,ue||(ue=!0,xh(z),Hd(),ue=!1)},me={p:S,um:ge,m:W,r:Z,mt:V,mc:y,pc:fe,pbc:B,n:pe,o:n};return{render:Ie,hydrate:void 0,createApp:h_(Ie)}}function Pl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Mr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function A_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hp(n,e,t=!1){const i=n.children,r=e.children;if(at(i)&&at(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Oi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&hp(a,o)),o.type===ol&&(o.patchFlag===-1&&(o=r[s]=Oi(o)),o.el=a.el),o.type===Ji&&!o.el&&(o.el=a.el)}}function R_(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function fp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fp(e)}function Ch(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function dp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?dp(e.subTree):null}const pp=n=>n.__isSuspense;function C_(n,e){e&&e.pendingBranch?at(n)?e.effects.push(...n):e.effects.push(n):Bg(n)}const tn=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),Dl=Symbol.for("v-stc"),zr=[];let On=null;function ft(n=!1){zr.push(On=n?null:[])}function mp(){zr.pop(),On=zr[zr.length-1]||null}let ha=1;function Ph(n,e=!1){ha+=n,n<0&&On&&e&&(On.hasOnce=!0)}function gp(n){return n.dynamicChildren=ha>0?On||Dr:null,mp(),ha>0&&On&&On.push(n),n}function pt(n,e,t,i,r,s){return gp(K(n,e,t,i,r,s,!0))}function _p(n,e,t,i,r){return gp(Wi(n,e,t,i,r,!0))}function vp(n){return n?n.__v_isVNode===!0:!1}function Us(n,e){return n.type===e.type&&n.key===e.key}const xp=({key:n})=>n??null,yo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||mn(n)||ut(n)?{i:Wn,r:n,k:e,f:!!t}:n:null);function K(n,e=null,t=null,i=0,r=null,s=n===tn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xp(e),ref:e&&yo(e),scopeId:Wd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wn};return o?(Bo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),ha>0&&!a&&On&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&On.push(l),l}const Wi=P_;function P_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===i_)&&(n=Ji),vp(n)){const o=ms(n,e,!0);return t&&Bo(o,t),ha>0&&!s&&On&&(o.shapeFlag&6?On[On.indexOf(n)]=o:On.push(o)),o.patchFlag=-2,o}if(k_(n)&&(n=n.__vccOpts),e){e=D_(e);let{class:o,style:l}=e;o&&!Xt(o)&&(e.class=Nn(o)),It(l)&&(Nu(l)&&!at(l)&&(l=un({},l)),e.style=oa(l))}const a=Xt(n)?1:pp(n)?128:rl(n)?64:It(n)?4:ut(n)?2:0;return K(n,e,t,i,r,a,s,!0)}function D_(n){return n?Nu(n)||sp(n)?un({},n):n:null}function ms(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?L_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&xp(c),ref:e&&e.ref?t&&s?at(s)?s.concat(yo(e)):[s,yo(e)]:yo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ms(n.ssContent),ssFallback:n.ssFallback&&ms(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Ou(u,l.clone(u)),u}function ct(n=" ",e=0){return Wi(ol,null,n,e)}function qt(n="",e=!1){return e?(ft(),_p(Ji,null,n)):Wi(Ji,null,n)}function fi(n){return n==null||typeof n=="boolean"?Wi(Ji):at(n)?Wi(tn,null,n.slice()):vp(n)?Oi(n):Wi(ol,null,String(n))}function Oi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ms(n)}function Bo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(at(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Bo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!sp(e)?e._ctx=Wn:r===3&&Wn&&(Wn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ut(e)){if(i&65){Bo(n,{default:e});return}e={default:e,_ctx:Wn},t=32}else e=String(e),i&64?(t=16,e=[ct(e)]):t=8;n.children=e,n.shapeFlag|=t}function L_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Nn([e.class,i.class]));else if(r==="style")e.style=oa([e.style,i.style]);else if(Qo(r)){const s=e[r],a=i[r];a&&s!==a&&!(at(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!jo(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function oi(n,e,t,i=null){ri(n,e,7,[t,i])}const I_=ep();let U_=0;function N_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||I_,s={uid:U_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(i,r),emitsOptions:tp(i,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=d_.bind(null,s),n.ce&&n.ce(s),s}let En=null;const F_=()=>En||Wn;let zo,fa;{const n=tl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};zo=e("__VUE_INSTANCE_SETTERS__",t=>En=t),fa=e("__VUE_SSR_SETTERS__",t=>da=t)}const Ea=n=>{const e=En;return zo(n),n.scope.on(),()=>{n.scope.off(),zo(e)}},Dh=()=>{En&&En.scope.off(),zo(null)};function Sp(n){return n.vnode.shapeFlag&4}let da=!1;function O_(n,e=!1,t=!1){e&&fa(e);const{props:i,children:r}=n.vnode,s=Sp(n);x_(n,i,s,e),b_(n,r,t||e);const a=s?B_(n,e):void 0;return e&&fa(!1),a}function B_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,r_);const{setup:i}=t;if(i){Ki();const r=n.setupContext=i.length>1?V_(n):null,s=Ea(n),a=ba(i,n,0,[n.props,r]),o=md(a);if(Zi(),s(),(o||n.sp)&&!js(n)&&Kd(n),o){if(a.then(Dh,Dh),e)return a.then(l=>{fa(!0);try{Lh(n,l,e)}finally{fa(!1)}}).catch(l=>{il(l,n,0)});n.asyncDep=a}else Lh(n,a)}else Mp(n)}function Lh(n,e,t){ut(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:It(e)&&(n.setupState=zd(e)),Mp(n)}function Mp(n,e,t){const i=n.type;n.render||(n.render=i.render||xi);{const r=Ea(n);Ki();try{s_(n)}finally{Zi(),r()}}}const z_={get(n,e){return dn(n,"get",""),n[e]}};function V_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,z_),slots:n.slots,emit:n.emit,expose:e}}function ll(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(zd(Rg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ea)return ea[t](n)},has(e,t){return t in e||t in ea}})):n.proxy}function k_(n){return ut(n)&&"__vccOpts"in n}const di=(n,e)=>Lg(n,e,da),H_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pc;const Ih=typeof window<"u"&&window.trustedTypes;if(Ih)try{Pc=Ih.createPolicy("vue",{createHTML:n=>n})}catch{}const yp=Pc?n=>Pc.createHTML(n):n=>n,G_="http://www.w3.org/2000/svg",W_="http://www.w3.org/1998/Math/MathML",Fi=typeof document<"u"?document:null,Uh=Fi&&Fi.createElement("template"),X_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Fi.createElementNS(G_,n):e==="mathml"?Fi.createElementNS(W_,n):t?Fi.createElement(n,{is:t}):Fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fi.createTextNode(n),createComment:n=>Fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Uh.innerHTML=yp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Uh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},$_=Symbol("_vtc");function q_(n,e,t){const i=n[$_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Nh=Symbol("_vod"),Y_=Symbol("_vsh"),K_=Symbol(""),Z_=/(?:^|;)\s*display\s*:/;function J_(n,e,t){const i=n.style,r=Xt(t);let s=!1;if(t&&!r){if(e)if(Xt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ws(i,o,"")}else for(const a in e)t[a]==null&&Ws(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?j_(n,a,!Xt(e)&&e?e[a]:void 0,o)||Ws(i,a,o):Ws(i,a,"")}}else if(r){if(e!==t){const a=i[K_];a&&(t+=";"+a),i.cssText=t,s=Z_.test(t)}}else e&&n.removeAttribute("style");Nh in n&&(n[Nh]=s?i.display:"",n[Y_]&&(i.display="none"))}const Ba=/\s*!important$/;function Ws(n,e,t){if(at(t))t.forEach(i=>Ws(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Ba.test(t)?n.setProperty(e,t.replace(Ba,""),"important"):n.setProperty(e,t);else{const i=Q_(n,e);Ba.test(t)?n.setProperty(Wr(i),t.replace(Ba,""),"important"):n[i]=t}}const Fh=["Webkit","Moz","ms"],Ll={};function Q_(n,e){const t=Ll[e];if(t)return t;let i=ti(e);if(i!=="filter"&&i in n)return Ll[e]=i;i=vd(i);for(let r=0;r<Fh.length;r++){const s=Fh[r]+i;if(s in n)return Ll[e]=s}return e}function j_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Xt(i)&&t===i}const Oh="http://www.w3.org/1999/xlink";function Bh(n,e,t,i,r,s=sg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Oh,e.slice(6,e.length)):n.setAttributeNS(Oh,e,t):t==null||s&&!Sd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Mi(t)?String(t):t)}function zh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?yp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Sd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Cr(n,e,t,i){n.addEventListener(e,t,i)}function ev(n,e,t,i){n.removeEventListener(e,t,i)}const Vh=Symbol("_vei");function tv(n,e,t,i,r=null){const s=n[Vh]||(n[Vh]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=rv(e);if(i){const c=s[e]=ov(i,r);Cr(n,o,c,l)}else a&&(ev(n,o,a,l),s[e]=void 0)}}const nv=/(Once|Passive|Capture)$/,iv=/^on:?(?:Once|Passive|Capture)$/;function rv(n){let e,t;for(;(t=n.match(nv))&&!iv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Wr(n.slice(2)),e]}let Il=0;const sv=Promise.resolve(),av=()=>Il||(sv.then(()=>Il=0),Il=Date.now());function ov(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(at(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&ri(c,e,5,o)}}else ri(r,e,5,[i])};return t.value=n,t.attached=av(),t}const kh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lv=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?q_(n,i,a):e==="style"?J_(n,t,i):Qo(e)?jo(e)||tv(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cv(n,e,i,a))?(zh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bh(n,e,i,a,s,e!=="value")):n._isVueCE&&(uv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Xt(i)))?zh(n,ti(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bh(n,e,i,a))};function cv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&kh(e)&&ut(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return kh(e)&&Xt(t)?!1:e in n}function uv(n,e){const t=n._def.props;if(!t)return!1;const i=ti(e);return Array.isArray(t)?t.some(r=>ti(r)===i):Object.keys(t).some(r=>ti(r)===i)}const Vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return at(e)?t=>So(e,t):e};function hv(n){n.target.composing=!0}function Hh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ir=Symbol("_assign"),za=Symbol("_initialValue");function Ul(n,e,t){return e&&(n=n.trim()),t&&(n=Ru(n)),n}const on={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[za]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[za]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ir]=Vo(r);const s=i||r.props&&r.props.type==="number";Cr(n,e?"change":"input",a=>{a.target.composing||n[Ir](Ul(n.value,t,s))}),(t||s)&&Cr(n,"change",()=>{n.value=Ul(n.value,t,s)}),e||(Cr(n,"compositionstart",hv),Cr(n,"compositionend",Hh),Cr(n,"change",Hh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[za];delete n[za],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Ir](Ul(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Ir]=Vo(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ru(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},yr={deep:!0,created(n,e,t){n[Ir]=Vo(t),Cr(n,"change",()=>{const i=n._modelValue,r=fv(n),s=n.checked,a=n[Ir];if(at(i)){const o=Md(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(ps(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(bp(n,s))})},mounted:Gh,beforeUpdate(n,e,t){n[Ir]=Vo(t),Gh(n,e,t)}};function Gh(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(at(e))r=Md(e,i.props.value)>-1;else if(ps(e))r=e.has(i.props.value);else{if(e===t)return;r=Ms(e,bp(n,!0))}n.checked!==r&&(n.checked=r)}function fv(n){return"_value"in n?n._value:n.value}function bp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const dv=un({patchProp:lv},X_);let Wh;function pv(){return Wh||(Wh=T_(dv))}const mv=((...n)=>{const e=pv().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=_v(i);if(!r)return;const s=e._component;!ut(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,gv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function gv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function _v(n){return Xt(n)?document.querySelector(n):n}const Mn=Math.PI/180,Va={haStar:1,cStar:.25,rhoFStar:.38};function vv(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function xv(n){return Math.tan(n)-n}function Xh(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function $h(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function Xs(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function Sv(n,e,t,i){const r=[];for(let s=0;s<=i;s++){const a=e+(t-e)*s/i;r.push(Xs(n,a))}return r}function gs(n,e=16){const{z:t,module:i,alpha:r}=n,s=n.toothThicknessOffset??0,a=i*t/2,o=a*Math.cos(r),l=a+Va.haStar*i,c=a-(Va.haStar+Va.cStar)*i,u=Math.PI*i,f=u*Math.cos(r),h=Math.PI*i/2+s,d=2*Math.PI/t,_=o>c,S=xv(r),m=s/(2*a),p=Math.PI/(2*t)+S+m,w=Xh(l,o),P=Math.atan(w),M=w-Math.atan(w),A=Math.PI/(2*t)+S+m-M,R=2*l*A,F=A<=0,y=2/(Math.sin(r)*Math.sin(r)),D=t<y,B=me=>({x:-me.x,y:me.y}),G=_?0:Xh(c,o),te=(me,N,b,U)=>{const I=[];for(let z=0;z<=U;z++){const k=N+(b-N)*z/U,X=$h(vv(o,k),p);I.push(me===1?B(X):X)}return I},le=6,V=me=>{const N=-me,b=Math.PI/2+N*p,U=te(me,G,G,1);if(!_)return{j:U[0],jAngle:Math.atan2(U[0].y,U[0].x),fillet:[],flankLo:null};const I=Math.PI/2+N*(d/2),z=(o*o-c*c)/(2*c),k=Math.abs(b-I),X=Math.sin(k),ne=X<1?c*X/(1-X):1/0,_e=Math.max(0,Math.min(Va.rhoFStar*i,z*.999,ne*.999)),he=c+_e,ce=Math.asin(Math.min(1,_e/he)),Ae=me===1?b-ce:b+ce,C=Xs(he,Ae),Ce=Xs(c,Ae),Ne=Math.sqrt(Math.max(0,he*he-_e*_e)),T=Xs(Ne,b),g=Math.atan2(Ce.y-C.y,Ce.x-C.x);let J=Math.atan2(T.y-C.y,T.x-C.x)-g;for(;J>Math.PI;)J-=2*Math.PI;for(;J<-Math.PI;)J+=2*Math.PI;J=Math.abs(J)*-me;const ie=[];for(let we=0;we<=le;we++){const Pe=g+J*we/le;ie.push({x:C.x+_e*Math.cos(Pe),y:C.y+_e*Math.sin(Pe)})}return{j:Ce,jAngle:Ae,fillet:ie,flankLo:U[0]}},ee=V(1),re=V(-1),j=te(1,G,w,e),fe=te(-1,G,w,e),ae=j[e],xe=fe[e],W=Math.atan2(ae.y,ae.x),ge=Math.atan2(xe.y,xe.x),Z=[];Z.push(...ee.fillet),ee.flankLo&&Z.push(ee.flankLo),Z.push(...j.slice(1));let He=ge-W;for(;He>Math.PI;)He-=2*Math.PI;for(;He<-Math.PI;)He+=2*Math.PI;const qe=Math.max(4,Math.ceil(Math.abs(He)/d*24));Z.push(...Sv(l,W,W+He,qe).slice(1));for(let me=e-1;me>=0;me--)Z.push(fe[me]);re.flankLo&&(Z.push(re.flankLo),Z.push(re.fillet[re.fillet.length-1])),Z.push(...re.fillet.slice(0,-1).reverse());const Re=[],pe=6,ue=me=>{const N=Re[Re.length-1];(!N||Math.hypot(me.x-N.x,me.y-N.y)>1e-10)&&Re.push(me)};for(let me=0;me<t;me++){const N=me*d,b=Z.map(z=>$h(z,N)),U=re.jAngle+N,I=ee.jAngle+(me+1)*d;for(const z of b.slice(0,-1))ue(z);for(let z=1;z<=pe;z++){const k=U+(I-U)*z/pe;ue(Xs(c,k))}}if(Re.length>1){const me=Re[0],N=Re[Re.length-1];Math.hypot(me.x-N.x,me.y-N.y)<1e-10&&Re.pop()}const Ie=Array.from({length:t},(me,N)=>Math.PI/2+N*d);return{input:n,pitchR:a,baseR:o,addendumR:l,dedendumR:c,baseAboveRoot:_,circularPitch:u,basePitch:f,toothThickness:h,beta:p,taTip:w,zMinValue:y,undercut:D,alphaTip:P,tipThickness:R,pointed:F,toothProfile:Z,outline:Re,toothCenterAngles:Ie,jAngleRight:ee.jAngle,jAngleLeft:re.jAngle}}function ko(n,e,t,i){const r=Math.cos(i),s=Math.sin(i);return n.map(a=>({x:e+a.x*r-a.y*s,y:t+a.x*s+a.y*r}))}function qh(n){const e=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),e}function ku(n){const{g1:e,g2:t,centerDistance:i}=n,r=e.pitchR+t.pitchR,s=e.input.alpha,a=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),o=Math.acos(a),l=e.baseR/Math.cos(o),c=t.baseR/Math.cos(o),u=i-r,f=ge=>Math.tan(ge)-ge,h=2*i*(f(o)-f(s)),d=h*Math.cos(o),_=i-e.addendumR-t.dedendumR,S=i-t.addendumR-e.dedendumR,m=Math.abs(e.basePitch-t.basePitch),p=m<1e-6,w=[],P=i<e.addendumR+t.addendumR;P&&w.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(_<0||S<0)&&w.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?w.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):w.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||w.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const M={x:l,y:0},A=Math.sin(o),R=Math.cos(o),F=-l*A,y={x:M.x+F*A,y:M.y+F*R},D=c*A,B={x:M.x+D*A,y:M.y+D*R},G=(ge,Z)=>{const He=M.x-ge,qe=M.y,Re=2*(He*A+qe*R),pe=He*He+qe*qe-Z*Z,ue=Re*Re-4*pe;if(ue<0)return[];const Ie=Math.sqrt(ue);return[(-Re-Ie)/2,(-Re+Ie)/2]},te=G(0,e.addendumR),V=G(i,t.addendumR).filter(ge=>ge<=1e-9),ee=te.filter(ge=>ge>=-1e-9),re=V.length?Math.max(...V):F,j=ee.length?Math.min(...ee):D,fe={x:M.x+re*A,y:M.y+re*R},ae={x:M.x+j*A,y:M.y+j*R},xe=Math.max(0,j-re),W=xe/e.basePitch;return{a0:r,a:i,alphaPrime:o,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:_,clearance21:S,basePitchMatch:p,basePitchDiff:m,addendumOverlap:P,actionLine:{p0:fe,p1:ae},tangentLine:{p0:y,p1:B},pitchPoint:M,pathOfContact:xe,contactRatio:W,ok:p&&!P,warnings:w}}function Yh(n,e,t,i){const r=n.alphaPrime,s=Math.sin(r),a=Math.cos(r),o=Math.tan(r)+i/e.baseR,l=Math.tan(r)-i/t.baseR,c=o-Math.atan(o),u=l-Math.atan(l),f=Math.PI/2+e.beta-c,h=Math.PI/2+t.beta-u,d=Math.atan2(i*a,n.pitchR1+i*s),_=Math.atan2(i*a,-n.pitchR2+i*s),S=d-f,m=_-h;return{phi1:S,phi2:m,t1:o,t2:l}}function Ho(n,e,t,i){const r=t.alphaPrime,s=Math.sin(r),a=Math.cos(r);let o=0;for(let h=0;h<30;h++){const d=Math.tan(r)+o/n.baseR,_=d-Math.atan(d),S=Math.PI/2+n.beta-_,p=Math.atan2(o*a,t.pitchR1+o*s)-S-i;if(o-=p/(1/n.baseR),Math.abs(p)<1e-12)break}const l=Math.tan(r)-o/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c;return Math.atan2(o*a,-t.pitchR2+o*s)-u}const Mv="modulepreload",yv=function(n,e){return new URL(n,e).href},Kh={},bv=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=a(t.map(u=>{if(u=yv(u,i),u in Kh)return;Kh[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let S=o.length-1;S>=0;S--){const m=o[S];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Mv,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((S,m)=>{_.addEventListener("load",S),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};async function Ev(n={}){var e,t=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:x}=await bv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var a=x(import.meta.url)}var o=import.meta.url,l="";function c(x){return t.locateFile?t.locateFile(x,l):l+x}var u,f;if(s){var h=a("fs");o.startsWith("file:")&&(l=a("path").dirname(a("url").fileURLToPath(o))+"/"),f=x=>{x=m(x)?new URL(x):x;var v=h.readFileSync(x);return v},u=async(x,v=!0)=>{x=m(x)?new URL(x):x;var L=h.readFileSync(x,v?void 0:"utf8");return L},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",o).href}catch{}r&&(f=x=>{var v=new XMLHttpRequest;return v.open("GET",x,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),u=async x=>{if(m(x))return new Promise((L,H)=>{var Q=new XMLHttpRequest;Q.open("GET",x,!0),Q.responseType="arraybuffer",Q.onload=()=>{if(Q.status==200||Q.status==0&&Q.response){L(Q.response);return}H(Q.status)},Q.onerror=H,Q.send(null)});var v=await fetch(x,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw new Error(v.status+" : "+v.url)}}console.log.bind(console);var d=console.error.bind(console),_,S=!1,m=x=>x.startsWith("file://"),p,w,P,M,A,R,F,y,D,B,G,te,le=!1;function V(){var x=Ia.buffer;P=new Int8Array(x),A=new Int16Array(x),t.HEAPU8=M=new Uint8Array(x),R=new Uint16Array(x),F=new Int32Array(x),y=new Uint32Array(x),D=new Float32Array(x),B=new Float64Array(x),G=new BigInt64Array(x),te=new BigUint64Array(x)}function ee(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)N(t.preRun.shift());pe(me)}function re(){le=!0,Ds.E()}function j(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Ie(t.postRun.shift());pe(ue)}function fe(x){t.onAbort?.(x),x="Aborted("+x+")",d(x),S=!0,x+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(x);throw w?.(v),v}var ae;function xe(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function W(x){if(x==ae&&_)return new Uint8Array(_);if(f)return f(x);throw"both async and sync fetching of the wasm failed"}async function ge(x){if(!_)try{var v=await u(x);return new Uint8Array(v)}catch{}return W(x)}async function Z(x,v){try{var L=await ge(x),H=await WebAssembly.instantiate(L,v);return H}catch(Q){d(`failed to asynchronously prepare wasm: ${Q}`),fe(Q)}}async function He(x,v,L){if(!x&&!m(v)&&!s)try{var H=fetch(v,{credentials:"same-origin"}),Q=await WebAssembly.instantiateStreaming(H,L);return Q}catch(Se){d(`wasm streaming compile failed: ${Se}`),d("falling back to ArrayBuffer instantiation")}return Z(v,L)}function qe(){var x={a:Hm};return x}async function Re(){function x(Se,be){return Ds=Se.exports,km(Ds),V(),Ds}function v(Se){return x(Se.instance)}var L=qe();if(t.instantiateWasm)return new Promise((Se,be)=>{t.instantiateWasm(L,(Ee,Le)=>{Se(x(Ee))})});ae??=xe();var H=await He(_,ae,L),Q=v(H);return Q}var pe=x=>{for(;x.length>0;)x.shift()(t)},ue=[],Ie=x=>ue.push(x),me=[],N=x=>me.push(x);class b{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){y[this.ptr+4>>2]=v}get_type(){return y[this.ptr+4>>2]}set_destructor(v){y[this.ptr+8>>2]=v}get_destructor(){return y[this.ptr+8>>2]}set_caught(v){v=v?1:0,P[this.ptr+12]=v}get_caught(){return P[this.ptr+12]!=0}set_rethrown(v){v=v?1:0,P[this.ptr+13]=v}get_rethrown(){return P[this.ptr+13]!=0}init(v,L){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(L)}set_adjusted_ptr(v){y[this.ptr+16>>2]=v}get_adjusted_ptr(){return y[this.ptr+16>>2]}}var U=0,I=(x,v,L)=>{var H=new b(x);throw H.init(v,L),U=x,U},z=()=>fe(""),k={},X=x=>{for(;x.length;){var v=x.pop(),L=x.pop();L(v)}};function ne(x){return this.fromWireType(y[x>>2])}var _e={},he={},ce={},Ae=class extends Error{constructor(v){super(v),this.name="InternalError"}},C=x=>{throw new Ae(x)},Ce=(x,v,L)=>{x.forEach(Ee=>ce[Ee]=v);function H(Ee){var Le=L(Ee);Le.length!==x.length&&C("Mismatched type converter count");for(var rt=0;rt<x.length;++rt)ie(x[rt],Le[rt])}var Q=new Array(v.length),Se=[],be=0;v.forEach((Ee,Le)=>{he.hasOwnProperty(Ee)?Q[Le]=he[Ee]:(Se.push(Ee),_e.hasOwnProperty(Ee)||(_e[Ee]=[]),_e[Ee].push(()=>{Q[Le]=he[Ee],++be,be===Se.length&&H(Q)}))}),Se.length===0&&H(Q)},Ne=x=>{var v=k[x];delete k[x];var L=v.rawConstructor,H=v.rawDestructor,Q=v.fields,Se=Q.map(be=>be.getterReturnType).concat(Q.map(be=>be.setterArgumentType));Ce([x],Se,be=>{var Ee={};return Q.forEach((Le,rt)=>{var it=Le.fieldName,Tt=be[rt],Gt=be[rt].optional,yt=Le.getter,Wt=Le.getterContext,rn=be[rt+Q.length],Yn=Le.setter,An=Le.setterContext;Ee[it]={read:Ci=>Tt.fromWireType(yt(Wt,Ci)),write:(Ci,vn)=>{var Ua=[];Yn(An,Ci,rn.toWireType(Ua,vn)),X(Ua)},optional:Gt}}),[{name:v.name,fromWireType:Le=>{var rt={};for(var it in Ee)rt[it]=Ee[it].read(Le);return H(Le),rt},toWireType:(Le,rt)=>{for(var it in Ee)if(!(it in rt)&&!Ee[it].optional)throw new TypeError(`Missing field: "${it}"`);var Tt=L();for(it in Ee)Ee[it].write(Tt,rt[it]);return Le!==null&&Le.push(H,Tt),Tt},readValueFromPointer:ne,destructorFunction:H}]})},T=x=>{for(var v="";;){var L=M[x++];if(!L)return v;v+=String.fromCharCode(L)}},g=class extends Error{constructor(v){super(v),this.name="BindingError"}},O=x=>{throw new g(x)};function J(x,v,L={}){var H=v.name;if(x||O(`type "${H}" must have a positive integer typeid pointer`),he.hasOwnProperty(x)){if(L.ignoreDuplicateRegistrations)return;O(`Cannot register type '${H}' twice`)}if(he[x]=v,delete ce[x],_e.hasOwnProperty(x)){var Q=_e[x];delete _e[x],Q.forEach(Se=>Se())}}function ie(x,v,L={}){return J(x,v,L)}var we=(x,v,L)=>{switch(v){case 1:return L?H=>P[H]:H=>M[H];case 2:return L?H=>A[H>>1]:H=>R[H>>1];case 4:return L?H=>F[H>>2]:H=>y[H>>2];case 8:return L?H=>G[H>>3]:H=>te[H>>3];default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},Pe=(x,v,L,H,Q)=>{v=T(v);const Se=H===0n;let be=Ee=>Ee;if(Se){const Ee=L*8;be=Le=>BigInt.asUintN(Ee,Le),Q=be(Q)}ie(x,{name:v,fromWireType:be,toWireType:(Ee,Le)=>(typeof Le=="number"&&(Le=BigInt(Le)),Le),readValueFromPointer:we(v,L,!Se),destructorFunction:null})},ve=(x,v,L,H)=>{v=T(v),ie(x,{name:v,fromWireType:function(Q){return!!Q},toWireType:function(Q,Se){return Se?L:H},readValueFromPointer:function(Q){return this.fromWireType(M[Q])},destructorFunction:null})},ye=x=>({count:x.count,deleteScheduled:x.deleteScheduled,preservePointerOnDelete:x.preservePointerOnDelete,ptr:x.ptr,ptrType:x.ptrType,smartPtr:x.smartPtr,smartPtrType:x.smartPtrType}),De=x=>{function v(L){return L.$$.ptrType.registeredClass.name}O(v(x)+" instance already deleted")},$e=!1,Ve=x=>{},Oe=x=>{x.smartPtr?x.smartPtrType.rawDestructor(x.smartPtr):x.ptrType.registeredClass.rawDestructor(x.ptr)},et=x=>{x.count.value-=1;var v=x.count.value===0;v&&Oe(x)},nt=x=>globalThis.FinalizationRegistry?($e=new FinalizationRegistry(v=>{et(v.$$)}),nt=v=>{var L=v.$$,H=!!L.smartPtr;if(H){var Q={$$:L};$e.register(v,Q,v)}return v},Ve=v=>$e.unregister(v),nt(x)):(nt=v=>v,x),ot=()=>{let x=Y.prototype;Object.assign(x,{isAliasOf(L){if(!(this instanceof Y)||!(L instanceof Y))return!1;var H=this.$$.ptrType.registeredClass,Q=this.$$.ptr;L.$$=L.$$;for(var Se=L.$$.ptrType.registeredClass,be=L.$$.ptr;H.baseClass;)Q=H.upcast(Q),H=H.baseClass;for(;Se.baseClass;)be=Se.upcast(be),Se=Se.baseClass;return H===Se&&Q===be},clone(){if(this.$$.ptr||De(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var L=nt(Object.create(Object.getPrototypeOf(this),{$$:{value:ye(this.$$)}}));return L.$$.count.value+=1,L.$$.deleteScheduled=!1,L},delete(){this.$$.ptr||De(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&O("Object already scheduled for deletion"),Ve(this),et(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||De(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&O("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const v=Symbol.dispose;v&&(x[v]=x.delete)};function Y(){}var Be=(x,v)=>Object.defineProperty(v,"name",{value:x}),Me={},ke=(x,v,L)=>{if(x[v].overloadTable===void 0){var H=x[v];x[v]=function(...Q){return x[v].overloadTable.hasOwnProperty(Q.length)||O(`Function '${L}' called with an invalid number of arguments (${Q.length}) - expects one of (${x[v].overloadTable})!`),x[v].overloadTable[Q.length].apply(this,Q)},x[v].overloadTable=[],x[v].overloadTable[H.argCount]=H}},Ge=(x,v,L)=>{t.hasOwnProperty(x)?((L===void 0||t[x].overloadTable!==void 0&&t[x].overloadTable[L]!==void 0)&&O(`Cannot register public name '${x}' twice`),ke(t,x,x),t[x].overloadTable.hasOwnProperty(L)&&O(`Cannot register multiple overloads of a function with the same number of arguments (${L})!`),t[x].overloadTable[L]=v):(t[x]=v,t[x].argCount=L)},Te=48,tt=57,je=x=>{x=x.replace(/[^a-zA-Z0-9_]/g,"$");var v=x.charCodeAt(0);return v>=Te&&v<=tt?`_${x}`:x};function Dt(x,v,L,H,Q,Se,be,Ee){this.name=x,this.constructor=v,this.instancePrototype=L,this.rawDestructor=H,this.baseClass=Q,this.getActualType=Se,this.upcast=be,this.downcast=Ee,this.pureVirtualFunctions=[]}var _t=(x,v,L)=>{for(;v!==L;)v.upcast||O(`Expected null or instance of ${L.name}, got an instance of ${v.name}`),x=v.upcast(x),v=v.baseClass;return x},_n=x=>{if(x===null)return"null";var v=typeof x;return v==="object"||v==="array"||v==="function"?x.toString():""+x};function Bn(x,v){if(v===null)return this.isReference&&O(`null is not a valid ${this.name}`),0;v.$$||O(`Cannot pass "${_n(v)}" as a ${this.name}`),v.$$.ptr||O(`Cannot pass deleted object as a pointer of type ${this.name}`);var L=v.$$.ptrType.registeredClass,H=_t(v.$$.ptr,L,this.registeredClass);return H}function gl(x,v){var L;if(v===null)return this.isReference&&O(`null is not a valid ${this.name}`),this.isSmartPointer?(L=this.rawConstructor(),x!==null&&x.push(this.rawDestructor,L),L):0;(!v||!v.$$)&&O(`Cannot pass "${_n(v)}" as a ${this.name}`),v.$$.ptr||O(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&O(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var H=v.$$.ptrType.registeredClass;if(L=_t(v.$$.ptr,H,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&O("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?L=v.$$.smartPtr:O(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:L=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)L=v.$$.smartPtr;else{var Q=v.clone();L=this.rawShare(L,Ye.toHandle(()=>Q.delete())),x!==null&&x.push(this.rawDestructor,L)}break;default:O("Unsupporting sharing policy")}return L}function _l(x,v){if(v===null)return this.isReference&&O(`null is not a valid ${this.name}`),0;v.$$||O(`Cannot pass "${_n(v)}" as a ${this.name}`),v.$$.ptr||O(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&O(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var L=v.$$.ptrType.registeredClass,H=_t(v.$$.ptr,L,this.registeredClass);return H}var Ts=(x,v,L)=>{if(v===L)return x;if(L.baseClass===void 0)return null;var H=Ts(x,v,L.baseClass);return H===null?null:L.downcast(H)},ws={},vl=(x,v)=>{for(v===void 0&&O("ptr should not be undefined");x.baseClass;)v=x.upcast(v),x=x.baseClass;return v},Aa=(x,v)=>(v=vl(x,v),ws[v]),_r=(x,v)=>{(!v.ptrType||!v.ptr)&&C("makeClassHandle requires ptr and ptrType");var L=!!v.smartPtrType,H=!!v.smartPtr;return L!==H&&C("Both smartPtrType and smartPtr must be specified"),v.count={value:1},nt(Object.create(x,{$$:{value:v,writable:!0}}))};function Ai(x){var v=this.getPointee(x);if(!v)return this.destructor(x),null;var L=Aa(this.registeredClass,v);if(L!==void 0){if(L.$$.count.value===0)return L.$$.ptr=v,L.$$.smartPtr=x,L.clone();var H=L.clone();return this.destructor(x),H}function Q(){return this.isSmartPointer?_r(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:x}):_r(this.registeredClass.instancePrototype,{ptrType:this,ptr:x})}var Se=this.registeredClass.getActualType(v),be=Me[Se];if(!be)return Q.call(this);var Ee;this.isConst?Ee=be.constPointerType:Ee=be.pointerType;var Le=Ts(v,this.registeredClass,Ee.registeredClass);return Le===null?Q.call(this):this.isSmartPointer?_r(Ee.registeredClass.instancePrototype,{ptrType:Ee,ptr:Le,smartPtrType:this,smartPtr:x}):_r(Ee.registeredClass.instancePrototype,{ptrType:Ee,ptr:Le})}var As=()=>{Object.assign(vr.prototype,{getPointee(x){return this.rawGetPointee&&(x=this.rawGetPointee(x)),x},destructor(x){this.rawDestructor?.(x)},readValueFromPointer:ne,fromWireType:Ai})};function vr(x,v,L,H,Q,Se,be,Ee,Le,rt,it){this.name=x,this.registeredClass=v,this.isReference=L,this.isConst=H,this.isSmartPointer=Q,this.pointeeType=Se,this.sharingPolicy=be,this.rawGetPointee=Ee,this.rawConstructor=Le,this.rawShare=rt,this.rawDestructor=it,!Q&&v.baseClass===void 0?H?(this.toWireType=Bn,this.destructorFunction=null):(this.toWireType=_l,this.destructorFunction=null):this.toWireType=gl}var Rs=(x,v,L)=>{t.hasOwnProperty(x)||C("Replacing nonexistent public symbol"),t[x].overloadTable!==void 0&&L!==void 0?t[x].overloadTable[L]=v:(t[x]=v,t[x].argCount=L)},xr=[],Ra=x=>{var v=xr[x];return v||(xr[x]=v=oh.get(x)),v},Qt=(x,v,L=!1)=>{x=T(x);function H(){var Se=Ra(v);return Se}var Q=H();return typeof Q!="function"&&O(`unknown function pointer with signature ${x}: ${v}`),Q};class Ca extends Error{}var Cs=x=>{var v=ah(x),L=T(v);return nr(v),L},er=(x,v)=>{var L=[],H={};function Q(Se){if(!H[Se]&&!he[Se]){if(ce[Se]){ce[Se].forEach(Q);return}L.push(Se),H[Se]=!0}}throw v.forEach(Q),new Ca(`${x}: `+L.map(Cs).join([", "]))},xl=(x,v,L,H,Q,Se,be,Ee,Le,rt,it,Tt,Gt)=>{it=T(it),Se=Qt(Q,Se),Ee&&=Qt(be,Ee),rt&&=Qt(Le,rt),Gt=Qt(Tt,Gt);var yt=je(it);Ge(yt,function(){er(`Cannot construct ${it} due to unbound types`,[H])}),Ce([x,v,L],H?[H]:[],Wt=>{Wt=Wt[0];var rn,Yn;H?(rn=Wt.registeredClass,Yn=rn.instancePrototype):Yn=Y.prototype;var An=Be(it,function(...yl){if(Object.getPrototypeOf(this)!==Ci)throw new g(`Use 'new' to construct ${it}`);if(vn.constructor_body===void 0)throw new g(`${it} has no accessible constructor`);var fh=vn.constructor_body[yl.length];if(fh===void 0)throw new g(`Tried to invoke ctor of ${it} with invalid number of parameters (${yl.length}) - expected (${Object.keys(vn.constructor_body).toString()}) parameters instead!`);return fh.apply(this,yl)}),Ci=Object.create(Yn,{constructor:{value:An}});An.prototype=Ci;var vn=new Dt(it,An,Ci,Gt,rn,Se,Ee,rt);vn.baseClass&&(vn.baseClass.__derivedClasses??=[],vn.baseClass.__derivedClasses.push(vn));var Ua=new vr(it,vn,!0,!1,!1),uh=new vr(it+"*",vn,!1,!1,!1),hh=new vr(it+" const*",vn,!1,!0,!1);return Me[x]={pointerType:uh,constPointerType:hh},Rs(yt,An),[Ua,uh,hh]})},Ps=(x,v)=>{for(var L=[],H=0;H<x;H++)L.push(y[v+H*4>>2]);return L};function Pa(x){for(var v=1;v<x.length;++v)if(x[v]!==null&&x[v].destructorFunction===void 0)return!0;return!1}function Da(x,v,L,H){var Q=Pa(x),Se=x.length-2,be=[],Ee=["fn"];v&&Ee.push("thisWired");for(var Le=0;Le<Se;++Le)be.push(`arg${Le}`),Ee.push(`arg${Le}Wired`);be=be.join(","),Ee=Ee.join(",");var rt=`return function (${be}) {
`;Q&&(rt+=`var destructors = [];
`);var it=Q?"destructors":"null",Tt=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];v&&(rt+=`var thisWired = toClassParamWire(${it}, this);
`);for(var Le=0;Le<Se;++Le){var Gt=`toArg${Le}Wire`;rt+=`var arg${Le}Wired = ${Gt}(${it}, arg${Le});
`,Tt.push(Gt)}if(rt+=(L||H?"var rv = ":"")+`invoker(${Ee});
`,Q)rt+=`runDestructors(destructors);
`;else for(var Le=v?1:2;Le<x.length;++Le){var yt=Le===1?"thisWired":"arg"+(Le-2)+"Wired";x[Le].destructorFunction!==null&&(rt+=`${yt}_dtor(${yt});
`,Tt.push(`${yt}_dtor`))}return L&&(rt+=`var ret = fromRetWire(rv);
return ret;
`),rt+=`}
`,new Function(Tt,rt)}function E(x,v,L,H,Q,Se){var be=v.length;be<2&&O("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Ee=v[1]!==null&&L!==null,Le=Pa(v),rt=!v[0].isVoid,it=v[0],Tt=v[1],Gt=[x,O,H,Q,X,it.fromWireType.bind(it),Tt?.toWireType.bind(Tt)],yt=2;yt<be;++yt){var Wt=v[yt];Gt.push(Wt.toWireType.bind(Wt))}if(!Le)for(var yt=Ee?1:2;yt<v.length;++yt)v[yt].destructorFunction!==null&&Gt.push(v[yt].destructorFunction);var Yn=Da(v,Ee,rt,Se)(...Gt);return Be(x,Yn)}var $=(x,v,L,H,Q,Se)=>{var be=Ps(v,L);Q=Qt(H,Q),Ce([],[x],Ee=>{Ee=Ee[0];var Le=`constructor ${Ee.name}`;if(Ee.registeredClass.constructor_body===void 0&&(Ee.registeredClass.constructor_body=[]),Ee.registeredClass.constructor_body[v-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${Ee.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Ee.registeredClass.constructor_body[v-1]=()=>{er(`Cannot construct ${Ee.name} due to unbound types`,be)},Ce([],be,rt=>(rt.splice(1,0,null),Ee.registeredClass.constructor_body[v-1]=E(Le,rt,null,Q,Se),[])),[]})},de=x=>{x=x.trim();const v=x.indexOf("(");return v===-1?x:x.slice(0,v)},oe=(x,v,L,H,Q,Se,be,Ee,Le,rt)=>{var it=Ps(L,H);v=T(v),v=de(v),Se=Qt(Q,Se,Le),Ce([],[x],Tt=>{Tt=Tt[0];var Gt=`${Tt.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),Ee&&Tt.registeredClass.pureVirtualFunctions.push(v);function yt(){er(`Cannot call ${Gt} due to unbound types`,it)}var Wt=Tt.registeredClass.instancePrototype,rn=Wt[v];return rn===void 0||rn.overloadTable===void 0&&rn.className!==Tt.name&&rn.argCount===L-2?(yt.argCount=L-2,yt.className=Tt.name,Wt[v]=yt):(ke(Wt,v,Gt),Wt[v].overloadTable[L-2]=yt),Ce([],it,Yn=>{var An=E(Gt,Yn,Tt,Se,be,Le);return Wt[v].overloadTable===void 0?(An.argCount=L-2,Wt[v]=An):Wt[v].overloadTable[L-2]=An,[]}),[]})},se=(x,v,L)=>(x instanceof Object||O(`${L} with invalid "this": ${x}`),x instanceof v.registeredClass.constructor||O(`${L} incompatible with "this" of type ${x.constructor.name}`),x.$$.ptr||O(`cannot call emscripten binding method ${L} on deleted object`),_t(x.$$.ptr,x.$$.ptrType.registeredClass,v.registeredClass)),We=(x,v,L,H,Q,Se,be,Ee,Le,rt)=>{v=T(v),Q=Qt(H,Q),Ce([],[x],it=>{it=it[0];var Tt=`${it.name}.${v}`,Gt={get(){er(`Cannot access ${Tt} due to unbound types`,[L,be])},enumerable:!0,configurable:!0};return Le?Gt.set=()=>er(`Cannot access ${Tt} due to unbound types`,[L,be]):Gt.set=yt=>O(Tt+" is a read-only property"),Object.defineProperty(it.registeredClass.instancePrototype,v,Gt),Ce([],Le?[L,be]:[L],yt=>{var Wt=yt[0],rn={get(){var An=se(this,it,Tt+" getter");return Wt.fromWireType(Q(Se,An))},enumerable:!0};if(Le){Le=Qt(Ee,Le);var Yn=yt[1];rn.set=function(An){var Ci=se(this,it,Tt+" setter"),vn=[];Le(rt,Ci,Yn.toWireType(vn,An)),X(vn)}}return Object.defineProperty(it.registeredClass.instancePrototype,v,rn),[]}),[]})},Ke=[],ze=[0,1,,1,null,1,!0,1,!1,1],Je=x=>{x>9&&--ze[x+1]===0&&(ze[x]=void 0,Ke.push(x))},Ye={toValue:x=>(x||O(`Cannot use deleted val. handle = ${x}`),ze[x]),toHandle:x=>{switch(x){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=Ke.pop()||ze.length;return ze[v]=x,ze[v+1]=1,v}}}},ht={name:"emscripten::val",fromWireType:x=>{var v=Ye.toValue(x);return Je(x),v},toWireType:(x,v)=>Ye.toHandle(v),readValueFromPointer:ne,destructorFunction:null},mt=x=>ie(x,ht),Qe=(x,v,L)=>{switch(v){case 1:return L?function(H){return this.fromWireType(P[H])}:function(H){return this.fromWireType(M[H])};case 2:return L?function(H){return this.fromWireType(A[H>>1])}:function(H){return this.fromWireType(R[H>>1])};case 4:return L?function(H){return this.fromWireType(F[H>>2])}:function(H){return this.fromWireType(y[H>>2])};default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},bt=(x,v,L,H)=>{v=T(v);function Q(){}Q.values={},ie(x,{name:v,constructor:Q,fromWireType:function(Se){return this.constructor.values[Se]},toWireType:(Se,be)=>be.value,readValueFromPointer:Qe(v,L,H),destructorFunction:null}),Ge(v,Q)},zt=(x,v)=>{var L=he[x];return L===void 0&&O(`${v} has unknown type ${Cs(x)}`),L},Ut=(x,v,L)=>{var H=zt(x,"enum");v=T(v);var Q=H.constructor,Se=Object.create(H.constructor.prototype,{value:{value:L},constructor:{value:Be(`${H.name}_${v}`,function(){})}});Q.values[L]=Se,Q[v]=Se},Rt=(x,v)=>{switch(v){case 4:return function(L){return this.fromWireType(D[L>>2])};case 8:return function(L){return this.fromWireType(B[L>>3])};default:throw new TypeError(`invalid float width (${v}): ${x}`)}},jt=(x,v,L)=>{v=T(v),ie(x,{name:v,fromWireType:H=>H,toWireType:(H,Q)=>Q,readValueFromPointer:Rt(v,L),destructorFunction:null})},Ze=(x,v,L,H,Q,Se,be,Ee)=>{var Le=Ps(v,L);x=T(x),x=de(x),Q=Qt(H,Q,be),Ge(x,function(){er(`Cannot call ${x} due to unbound types`,Le)},v-1),Ce([],Le,rt=>{var it=[rt[0],null].concat(rt.slice(1));return Rs(x,E(x,it,null,Q,Se,be),v-1),[]})},nn=(x,v,L,H,Q)=>{v=T(v);const Se=H===0;let be=Le=>Le;if(Se){var Ee=32-8*L;be=Le=>Le<<Ee>>>Ee,Q=be(Q)}ie(x,{name:v,fromWireType:be,toWireType:(Le,rt)=>rt,readValueFromPointer:we(v,L,H!==0),destructorFunction:null})},vt=(x,v,L)=>{var H=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],Q=H[v];function Se(be){var Ee=y[be>>2],Le=y[be+4>>2];return new Q(P.buffer,Le,Ee)}L=T(L),ie(x,{name:L,fromWireType:Se,readValueFromPointer:Se},{ignoreDuplicateRegistrations:!0})},wn=(x,v,L,H)=>{if(!(H>0))return 0;for(var Q=L,Se=L+H-1,be=0;be<x.length;++be){var Ee=x.codePointAt(be);if(Ee<=127){if(L>=Se)break;v[L++]=Ee}else if(Ee<=2047){if(L+1>=Se)break;v[L++]=192|Ee>>6,v[L++]=128|Ee&63}else if(Ee<=65535){if(L+2>=Se)break;v[L++]=224|Ee>>12,v[L++]=128|Ee>>6&63,v[L++]=128|Ee&63}else{if(L+3>=Se)break;v[L++]=240|Ee>>18,v[L++]=128|Ee>>12&63,v[L++]=128|Ee>>6&63,v[L++]=128|Ee&63,be++}}return v[L]=0,L-Q},zn=(x,v,L)=>wn(x,M,v,L),si=x=>{for(var v=0,L=0;L<x.length;++L){var H=x.charCodeAt(L);H<=127?v++:H<=2047?v+=2:H>=55296&&H<=57343?(v+=4,++L):v+=3}return v},Ri=globalThis.TextDecoder&&new TextDecoder,Et=(x,v,L,H)=>{var Q=v+L;if(H)return Q;for(;x[v]&&!(v>=Q);)++v;return v},Vt=(x,v=0,L,H)=>{var Q=Et(x,v,L,H);if(Q-v>16&&x.buffer&&Ri)return Ri.decode(x.subarray(v,Q));for(var Se="";v<Q;){var be=x[v++];if(!(be&128)){Se+=String.fromCharCode(be);continue}var Ee=x[v++]&63;if((be&224)==192){Se+=String.fromCharCode((be&31)<<6|Ee);continue}var Le=x[v++]&63;if((be&240)==224?be=(be&15)<<12|Ee<<6|Le:be=(be&7)<<18|Ee<<12|Le<<6|x[v++]&63,be<65536)Se+=String.fromCharCode(be);else{var rt=be-65536;Se+=String.fromCharCode(55296|rt>>10,56320|rt&1023)}}return Se},ai=(x,v,L)=>x?Vt(M,x,v,L):"",Lt=(x,v)=>{v=T(v),ie(x,{name:v,fromWireType(L){var H=y[L>>2],Q=L+4,Se;return Se=ai(Q,H,!0),nr(L),Se},toWireType(L,H){H instanceof ArrayBuffer&&(H=new Uint8Array(H));var Q,Se=typeof H=="string";Se||ArrayBuffer.isView(H)&&H.BYTES_PER_ELEMENT==1||O("Cannot pass non-string to std::string"),Se?Q=si(H):Q=H.length;var be=Ml(4+Q+1),Ee=be+4;return y[be>>2]=Q,Se?zn(H,Ee,Q+1):M.set(H,Ee),L!==null&&L.push(nr,be),be},readValueFromPointer:ne,destructorFunction(L){nr(L)}})},qn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,tr=(x,v,L)=>{var H=x>>1,Q=Et(R,H,v/2,L);if(Q-H>16&&qn)return qn.decode(R.subarray(H,Q));for(var Se="",be=H;be<Q;++be){var Ee=R[be];Se+=String.fromCharCode(Ee)}return Se},La=(x,v,L)=>{if(L??=2147483647,L<2)return 0;L-=2;for(var H=v,Q=L<x.length*2?L/2:x.length,Se=0;Se<Q;++Se){var be=x.charCodeAt(Se);A[v>>1]=be,v+=2}return A[v>>1]=0,v-H},xm=x=>x.length*2,Sm=(x,v,L)=>{for(var H="",Q=x>>2,Se=0;!(Se>=v/4);Se++){var be=y[Q+Se];if(!be&&!L)break;H+=String.fromCodePoint(be)}return H},Mm=(x,v,L)=>{if(L??=2147483647,L<4)return 0;for(var H=v,Q=H+L-4,Se=0;Se<x.length;++Se){var be=x.codePointAt(Se);if(be>65535&&Se++,F[v>>2]=be,v+=4,v+4>Q)break}return F[v>>2]=0,v-H},ym=x=>{for(var v=0,L=0;L<x.length;++L){var H=x.codePointAt(L);H>65535&&L++,v+=4}return v},bm=(x,v,L)=>{L=T(L);var H,Q,Se;v===2?(H=tr,Q=La,Se=xm):(H=Sm,Q=Mm,Se=ym),ie(x,{name:L,fromWireType:be=>{var Ee=y[be>>2],Le=H(be+4,Ee*v,!0);return nr(be),Le},toWireType:(be,Ee)=>{typeof Ee!="string"&&O(`Cannot pass non-string to C++ string type ${L}`);var Le=Se(Ee),rt=Ml(4+Le+v);return y[rt>>2]=Le/v,Q(Ee,rt+4,Le+v),be!==null&&be.push(nr,rt),rt},readValueFromPointer:ne,destructorFunction(be){nr(be)}})},Em=(x,v,L,H,Q,Se)=>{k[x]={name:T(v),rawConstructor:Qt(L,H),rawDestructor:Qt(Q,Se),fields:[]}},Tm=(x,v,L,H,Q,Se,be,Ee,Le,rt)=>{k[x].fields.push({fieldName:T(v),getterReturnType:L,getter:Qt(H,Q),getterContext:Se,setterArgumentType:be,setter:Qt(Ee,Le),setterContext:rt})},wm=(x,v)=>{v=T(v),ie(x,{isVoid:!0,name:v,fromWireType:()=>{},toWireType:(L,H)=>{}})},Sl=[],Am=x=>{var v=Sl.length;return Sl.push(x),v},Rm=(x,v)=>{for(var L=new Array(x),H=0;H<x;++H)L[H]=zt(y[v+H*4>>2],`parameter ${H}`);return L},Cm=(x,v,L)=>{var H=[],Q=x(H,L);return H.length&&(y[v>>2]=Ye.toHandle(H)),Q},Pm={},sh=x=>{var v=Pm[x];return v===void 0?T(x):v},Dm=(x,v,L)=>{var H=8,[Q,...Se]=Rm(x,v),be=Q.toWireType.bind(Q),Ee=Se.map(yt=>yt.readValueFromPointer.bind(yt));x--;var Le={toValue:Ye.toValue},rt=Ee.map((yt,Wt)=>{var rn=`argFromPtr${Wt}`;return Le[rn]=yt,`${rn}(args${Wt?"+"+Wt*H:""})`}),it;switch(L){case 0:it="toValue(handle)";break;case 2:it="new (toValue(handle))";break;case 3:it="";break;case 1:Le.getStringOrSymbol=sh,it="toValue(handle)[getStringOrSymbol(methodName)]";break}it+=`(${rt})`,Q.isVoid||(Le.toReturnWire=be,Le.emval_returnValue=Cm,it=`return emval_returnValue(toReturnWire, destructorsRef, ${it})`),it=`return function (handle, methodName, destructorsRef, args) {
  ${it}
  }`;var Tt=new Function(Object.keys(Le),it)(...Object.values(Le)),Gt=`methodCaller<(${Se.map(yt=>yt.name)}) => ${Q.name}>`;return Am(Be(Gt,Tt))},Lm=(x,v)=>(x=Ye.toValue(x),v=Ye.toValue(v),Ye.toHandle(x[v])),Im=x=>{x>9&&(ze[x+1]+=1)},Um=(x,v,L,H,Q)=>Sl[x](v,L,H,Q),Nm=x=>Ye.toHandle(sh(x)),Fm=x=>{var v=Ye.toValue(x);X(v),Je(x)},Om=()=>2147483648,Bm=(x,v)=>Math.ceil(x/v)*v,zm=x=>{var v=Ia.buffer.byteLength,L=(x-v+65535)/65536|0;try{return Ia.grow(L),V(),1}catch{}},Vm=x=>{var v=M.length;x>>>=0;var L=Om();if(x>L)return!1;for(var H=1;H<=4;H*=2){var Q=v*(1+.2/H);Q=Math.min(Q,x+100663296);var Se=Math.min(L,Bm(Math.max(x,Q),65536)),be=zm(Se);if(be)return!0}return!1};if(ot(),As(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(d=t.printErr),t.wasmBinary&&(_=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var ah,Ml,nr,Ia,oh;function km(x){ah=x.F,Ml=x.H,nr=x.I,Ia=x.D,oh=x.G}var Hm={h:I,x:z,v:Ne,u:Pe,B:ve,e:xl,g:$,a:oe,f:We,z:mt,n:bt,c:Ut,t:jt,b:Ze,i:nn,d:vt,A:Lt,q:bm,w:Em,p:Tm,C:wm,l:Dm,m:Je,r:Lm,o:Im,k:Um,s:Nm,j:Fm,y:Vm};function Gm(){ee();function x(){t.calledRun=!0,!S&&(re(),p?.(t),t.onRuntimeInitialized?.(),j())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),x()},1)):x()}var Ds;Ds=await Re(),Gm();function Wm(x){if(x.length%2!=0)throw"MakePath64: intArray.length must be even";const v=x.length/2,L=new BigInt64Array(v*3);for(let Q=0,Se=0;Q<x.length;Q+=2,Se+=3){const be=x[Q],Ee=x[Q+1];L[Se]=typeof be=="bigint"?be:BigInt(be),L[Se+1]=typeof Ee=="bigint"?Ee:BigInt(Ee)}let H=new t.Path64;return H.assign(L),H}t.MakePath64=Wm;function Xm(x){if(x.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const v=new BigInt64Array(x.length);for(let H=0;H<x.length;H++){const Q=x[H];v[H]=typeof Q=="bigint"?Q:BigInt(Q)}let L=new t.Path64;return L.assign(v),L}t.MakePathZ64=Xm;function $m(x){if(x.length%2!=0)throw"MakePathD: intArray.length must be even";const v=x.length/2,L=new Float64Array(v*3);for(let Q=0,Se=0;Q<x.length;Q+=2,Se+=3)L[Se]=x[Q],L[Se+1]=x[Q+1];let H=new t.PathD;return H.assign(L),H}t.MakePathD=$m;function qm(x){if(x.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const v=x instanceof Float64Array?x:Float64Array.from(x);let L=new t.PathD;return L.assign(v),L}t.MakePathZD=qm;function lh(x){const v=x.view(),L=new BigInt64Array(v.length);for(let Q=0;Q<v.length;Q++)L[Q]=BigInt(Math.round(v[Q]));let H=new t.Path64;return H.assign(L),H}t.PathDToPath64=lh;function ch(x){const v=x.view(),L=new Float64Array(v.length);for(let Q=0;Q<v.length;Q++)L[Q]=Number(v[Q]);let H=new t.PathD;return H.assign(L),H}t.Path64ToPathD=ch;function Ym(x){let v=new t.PathsD;for(let L=0;L<x.size();L++){const H=x.get(L);let Q=ch(H);v.push_back(Q),Q.delete(),H.delete()}return v}t.Paths64ToPathsD=Ym;function Km(x){let v=new t.Paths64;for(let L=0;L<x.size();L++){const H=x.get(L);let Q=lh(H);v.push_back(Q),Q.delete(),H.delete()}return v}return t.PathsDToPaths64=Km,le?e=t:e=new Promise((x,v)=>{p=x,w=v}),e}let Nl=null;function Tv(){return Nl||(Nl=Ev()),Nl}function wv(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function Zh(n,e){const t=n.PathsD,i=new t;for(const r of e)r.length>=3&&i.push_back(wv(n,r));return i}function Av(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const r=n.get(i);t.push({x:r.x,y:r.y})}return t}function Rv(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(Av(n.get(i)));return e}async function Ep(n,e){const t=await Tv(),i=Zh(t,n),r=Zh(t,e),a=t.IntersectD(i,r,t.FillRule.NonZero,6),o=Math.abs(t.AreaPathsD(a));return{regions:Rv(a),area:o,intersects:o>1e-8}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="186",Xi={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cv=0,Jh=1,Pv=2,bo=1,Dv=2,$s=3,Vr=0,Dn=1,jn=2,$i=0,ta=1,Qh=2,jh=3,ef=4,Lv=5,os=100,Iv=101,Uv=102,Nv=103,Fv=104,Ov=200,Bv=201,zv=202,Vv=203,Tp=204,wp=205,kv=206,Hv=207,Gv=208,Wv=209,Xv=210,$v=211,qv=212,Yv=213,Kv=214,Dc=0,Lc=1,Ic=2,pa=3,Uc=4,Nc=5,Fc=6,Oc=7,Ap=0,Zv=1,Jv=2,Si=0,Rp=1,Cp=2,Pp=3,Dp=4,Lp=5,Ip=6,Up=7,Np=300,kr=301,_s=302,Fl=303,Ol=304,cl=306,Bc=1e3,Hi=1001,zc=1002,ln=1003,Qv=1004,ka=1005,pn=1006,Bl=1007,Ur=1008,Fn=1009,Fp=1010,Op=1011,ma=1012,Gu=1013,bi=1014,_i=1015,Ei=1016,Wu=1017,Xu=1018,ga=1020,Bp=35902,zp=35899,Vp=1021,kp=1022,ei=1023,Qi=1026,Nr=1027,Hp=1028,$u=1029,Hr=1030,qu=1031,Yu=1033,Eo=33776,To=33777,wo=33778,Ao=33779,Vc=35840,kc=35841,Hc=35842,Gc=35843,Wc=36196,Xc=37492,$c=37496,qc=37488,Yc=37489,Go=37490,Kc=37491,Zc=37808,Jc=37809,Qc=37810,jc=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,su=37817,au=37818,ou=37819,lu=37820,cu=37821,uu=36492,hu=36494,fu=36495,du=36283,pu=36284,Wo=36285,mu=36286,jv=3200,gu=0,e0=1,cr="",Hn="srgb",Xo="srgb-linear",$o="linear",Ct="srgb",zl=7680,t0=519,n0=512,i0=513,r0=514,Ku=515,s0=516,a0=517,Zu=518,o0=519,l0=35044,tf="300 es",vi=2e3,_a=2001;function c0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function u0(){const n=qo("canvas");return n.style.display="block",n}const nf={};function rf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Gp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=Gp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=Gp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fs(...n){const e=n.join(" ");e in nf||(nf[e]=!0,st(...n))}function h0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const f0={[Dc]:Lc,[Ic]:Fc,[Uc]:Oc,[pa]:Nc,[Lc]:Dc,[Fc]:Ic,[Oc]:Uc,[Nc]:pa};class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,_u=180/Math.PI;function ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function d0(n,e){return(n%e+e)%e}function Vl(n,e,t){return(1-t)*n+t*e}function Ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const p0={DEG2RAD:na};class Ue{static{Ue.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],_=s[a+2],S=s[a+3];if(f!==S||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*S;m<0&&(h=-h,d=-d,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),P=Math.sin(w);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+S*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+S*o;const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{static{q.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new q,sf=new pr;class lt{static{lt.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],S=r[0],m=r[3],p=r[6],w=r[1],P=r[4],M=r[7],A=r[2],R=r[5],F=r[8];return s[0]=a*S+o*w+l*A,s[3]=a*m+o*P+l*R,s[6]=a*p+o*M+l*F,s[1]=c*S+u*w+f*A,s[4]=c*m+u*P+f*R,s[7]=c*p+u*M+f*F,s[2]=h*S+d*w+_*A,s[5]=h*m+d*P+_*R,s[8]=h*p+d*M+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=d*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new lt,af=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m0(){const n={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ct&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?$o:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xo]:{primaries:e,whitePoint:i,transfer:$o,toXYZ:af,fromXYZ:of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:af,fromXYZ:of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),n}const xt=m0();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qr;class g0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=qo("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class Ju{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gl(r[a].image)):s.push(Gl(r[a]))}else s=Gl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?g0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let v0=0;const Wl=new q;class Tn extends gr{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,i=Hi,r=Hi,s=pn,a=Ur,o=ei,l=Fn,c=Tn.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ys(),this.name="",this.source=new Ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bc:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bc:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Np;Tn.DEFAULT_ANISOTROPY=1;class kt{static{kt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,M=(d+1)/2,A=(p+1)/2,R=(u+h)/4,F=(f+S)/4,y=(_+m)/4;return P>M&&P>A?P<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(P),r=R/i,s=F/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=y/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=F/s,r=y/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-S)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends gr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Tn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ju(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends x0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wp extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S0 extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ot{static{Ot.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,S,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,S=c*f;t[0]=h+S*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,y0)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ir.crossVectors(i,Ln),ir.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ir.crossVectors(i,Ln)),ir.normalize(),Ha.crossVectors(Ln,ir),r[0]=ir.x,r[4]=Ha.x,r[8]=Ln.x,r[1]=ir.y,r[5]=Ha.y,r[9]=Ln.y,r[2]=ir.z,r[6]=Ha.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],S=i[6],m=i[10],p=i[14],w=i[3],P=i[7],M=i[11],A=i[15],R=r[0],F=r[4],y=r[8],D=r[12],B=r[1],G=r[5],te=r[9],le=r[13],V=r[2],ee=r[6],re=r[10],j=r[14],fe=r[3],ae=r[7],xe=r[11],W=r[15];return s[0]=a*R+o*B+l*V+c*fe,s[4]=a*F+o*G+l*ee+c*ae,s[8]=a*y+o*te+l*re+c*xe,s[12]=a*D+o*le+l*j+c*W,s[1]=u*R+f*B+h*V+d*fe,s[5]=u*F+f*G+h*ee+d*ae,s[9]=u*y+f*te+h*re+d*xe,s[13]=u*D+f*le+h*j+d*W,s[2]=_*R+S*B+m*V+p*fe,s[6]=_*F+S*G+m*ee+p*ae,s[10]=_*y+S*te+m*re+p*xe,s[14]=_*D+S*le+m*j+p*W,s[3]=w*R+P*B+M*V+A*fe,s[7]=w*F+P*G+M*ee+A*ae,s[11]=w*y+P*te+M*re+A*xe,s[15]=w*D+P*le+M*j+A*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],S=e[7],m=e[11],p=e[15],w=l*d-c*h,P=o*d-c*f,M=o*h-l*f,A=a*d-c*u,R=a*h-l*u,F=a*f-o*u;return t*(S*w-m*P+p*M)-i*(_*w-m*A+p*R)+r*(_*P-S*A+p*F)-s*(_*M-S*R+m*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],S=e[13],m=e[14],p=e[15],w=t*o-i*a,P=t*l-r*a,M=t*c-s*a,A=i*l-r*o,R=i*c-s*o,F=r*c-s*l,y=u*S-f*_,D=u*m-h*_,B=u*p-d*_,G=f*m-h*S,te=f*p-d*S,le=h*p-d*m,V=w*le-P*te+M*G+A*B-R*D+F*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/V;return e[0]=(o*le-l*te+c*G)*ee,e[1]=(r*te-i*le-s*G)*ee,e[2]=(S*F-m*R+p*A)*ee,e[3]=(h*R-f*F-d*A)*ee,e[4]=(l*B-a*le-c*D)*ee,e[5]=(t*le-r*B+s*D)*ee,e[6]=(m*M-_*F-p*P)*ee,e[7]=(u*F-h*M+d*P)*ee,e[8]=(a*te-o*B+c*y)*ee,e[9]=(i*B-t*te-s*y)*ee,e[10]=(_*R-S*M+p*w)*ee,e[11]=(f*M-u*R-d*w)*ee,e[12]=(o*D-a*G-l*y)*ee,e[13]=(t*G-i*D+r*y)*ee,e[14]=(S*P-_*A-m*w)*ee,e[15]=(u*A-f*P+h*w)*ee,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,S=a*u,m=a*f,p=o*f,w=l*c,P=l*u,M=l*f,A=i.x,R=i.y,F=i.z;return r[0]=(1-(S+p))*A,r[1]=(d+M)*A,r[2]=(_-P)*A,r[3]=0,r[4]=(d-M)*R,r[5]=(1-(h+p))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(_+P)*F,r[9]=(m-w)*F,r[10]=(1-(h+S))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,u=1/o,f=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,t.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=vi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===vi)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===_a)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=vi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===vi)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===_a)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yr=new q,Kn=new Ot,M0=new q(0,0,0),y0=new q(1,1,1),ir=new q,Ha=new q,Ln=new q,lf=new Ot,cf=new pr;class mr{constructor(e=0,t=0,i=0,r=mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mr.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b0=0;const uf=new q,Kr=new pr,Di=new Ot,Ga=new q,Fs=new q,E0=new q,T0=new pr,hf=new q(1,0,0),ff=new q(0,1,0),df=new q(0,0,1),pf={type:"added"},w0={type:"removed"},Zr={type:"childadded",child:null},Xl={type:"childremoved",child:null};class cn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new q,t=new mr,i=new pr,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new lt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return uf.copy(e).applyQuaternion(this.quaternion),this.position.add(uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ga.copy(e):Ga.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Fs,Ga,this.up):Di.lookAt(Ga,Fs,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Di),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pf),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pf),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}cn.DEFAULT_UP=new q(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fr extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A0={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=d0(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const i=Xp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return xt.workingToColorSpace(fn.copy(this),e),Math.round(gt(fn.r*255,0,255))*65536+Math.round(gt(fn.g*255,0,255))*256+Math.round(gt(fn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(fn.copy(this),t);const i=fn.r,r=fn.g,s=fn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Hn){xt.workingToColorSpace(fn.copy(this),e);const t=fn.r,i=fn.g,r=fn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Wa);const i=Vl(rr.h,Wa.h,t),r=Vl(rr.s,Wa.s,t),s=Vl(rr.l,Wa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new St;St.NAMES=Xp;class R0 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new q,Li=new q,Yl=new q,Ii=new q,Jr=new q,Qr=new q,mf=new q,Kl=new q,Zl=new q,Jl=new q,Ql=new kt,jl=new kt,ec=new kt;class Gn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zn.subVectors(r,t),Li.subVectors(i,t),Yl.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(Li),l=Zn.dot(Yl),c=Li.dot(Li),u=Li.dot(Yl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ql.setScalar(0),jl.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ql,s.x),a.addScaledVector(jl,s.y),a.addScaledVector(ec,s.z),a}static isFrontFacing(e,t,i,r){return Zn.subVectors(i,t),Li.subVectors(e,t),Zn.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Zn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),Qr.subVectors(s,i),Kl.subVectors(e,i);const l=Jr.dot(Kl),c=Qr.dot(Kl);if(l<=0&&c<=0)return t.copy(i);Zl.subVectors(e,r);const u=Jr.dot(Zl),f=Qr.dot(Zl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Jr,a);Jl.subVectors(e,s);const d=Jr.dot(Jl),_=Qr.dot(Jl);if(_>=0&&d<=_)return t.copy(s);const S=d*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Qr,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return mf.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(mf,o);const p=1/(m+S+h);return a=S*p,o=h*p,t.copy(i).addScaledVector(Jr,a).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ta{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),$a.subVectors(this.max,Os),jr.subVectors(e.a,Os),es.subVectors(e.b,Os),ts.subVectors(e.c,Os),sr.subVectors(es,jr),ar.subVectors(ts,es),br.subVectors(jr,ts);let t=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-br.z,br.y,sr.z,0,-sr.x,ar.z,0,-ar.x,br.z,0,-br.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-br.y,br.x,0];return!tc(t,jr,es,ts,$a)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,jr,es,ts,$a))?!1:(qa.crossVectors(sr,ar),t=[qa.x,qa.y,qa.z],tc(t,jr,es,ts,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new q,new q,new q,new q,new q,new q,new q,new q],Jn=new q,Xa=new Ta,jr=new q,es=new q,ts=new q,sr=new q,ar=new q,br=new q,Os=new q,$a=new q,qa=new q,Er=new q;function tc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Er.fromArray(n,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=t.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const $t=new q,Ya=new Ue;let C0=0;class Yi extends gr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=l0,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class $p extends Yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qp extends Yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends Yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const P0=new Ta,Bs=new q,nc=new q;class ul{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):P0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(nc)),this.expandByPoint(Bs.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let D0=0;const Vn=new Ot,ic=new cn,ns=new q,In=new Ta,zs=new Ta,en=new q;class gn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?qp:$p)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(In.min,zs.min),In.expandByPoint(en),en.addVectors(In.max,zs.max),In.expandByPoint(en)):(In.expandByPoint(zs.min),In.expandByPoint(zs.max))}In.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),en.add(ns)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Yi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new q,l[y]=new q;const c=new q,u=new q,f=new q,h=new Ue,d=new Ue,_=new Ue,S=new q,m=new q;function p(y,D,B){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,B),h.fromBufferAttribute(s,y),d.fromBufferAttribute(s,D),_.fromBufferAttribute(s,B),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const G=1/(d.x*_.y-_.x*d.y);isFinite(G)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(G),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(G),o[y].add(S),o[D].add(S),o[B].add(S),l[y].add(m),l[D].add(m),l[B].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let y=0,D=w.length;y<D;++y){const B=w[y],G=B.start,te=B.count;for(let le=G,V=G+te;le<V;le+=3)p(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const P=new q,M=new q,A=new q,R=new q;function F(y){A.fromBufferAttribute(r,y),R.copy(A);const D=o[y];P.copy(D),P.sub(A.multiplyScalar(A.dot(D))).normalize(),M.crossVectors(R,D);const G=M.dot(l[y])<0?-1:1;a.setXYZW(y,P.x,P.y,P.z,G)}for(let y=0,D=w.length;y<D;++y){const B=w[y],G=B.start,te=B.count;for(let le=G,V=G+te;le<V;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Yi(h,u,f)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new q,L0=new q,I0=new lt;class Bi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rc.subVectors(i,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(rc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||I0.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let U0=0;class bs extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=ta,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tp,this.blendDst=wp,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zl,this.stencilZFail=zl,this.stencilZPass=zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Bi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new q,sc=new q,Ka=new q,Za=new q;class hl{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sc.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(sc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),o=Za.dot(this.direction),l=-Za.dot(Ka),c=Za.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sc).addScaledVector(Ka,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,w=i.y-a.y,P=i.z-a.z,M=Math.abs(l),A=Math.abs(c),R=Math.abs(u);let F,y,D,B,G,te,le,V,ee,re,j,fe;if(M>=A&&M>=R?(D=l,te=f,ee=_,fe=p,l>=0?(F=c,y=u,B=h,G=d,le=S,V=m,re=w,j=P):(F=u,y=c,B=d,G=h,le=m,V=S,re=P,j=w)):A>=R?(D=c,te=h,ee=S,fe=w,c>=0?(F=u,y=l,B=d,G=f,le=m,V=_,re=P,j=p):(F=l,y=u,B=f,G=d,le=_,V=m,re=p,j=P)):(D=u,te=d,ee=m,fe=P,u>=0?(F=l,y=c,B=f,G=h,le=_,V=S,re=p,j=w):(F=c,y=l,B=h,G=f,le=S,V=_,re=w,j=p)),D===0)return null;const ae=F/D,xe=y/D,W=1/D,ge=B-ae*te,Z=G-xe*te,He=le-ae*ee,qe=V-xe*ee,Re=re-ae*fe,pe=j-xe*fe,ue=Re*qe-pe*He,Ie=ge*pe-Z*Re,me=He*Z-qe*ge;if(r){if(ue<0||Ie<0||me<0)return null}else if((ue<0||Ie<0||me<0)&&(ue>0||Ie>0||me>0))return null;const N=ue+Ie+me;if(N===0)return null;const b=W*(ue*te+Ie*ee+me*fe);return(N>0?b<0:b>0)?null:this.at(b/N,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pr extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gf=new Ot,Tr=new hl,Ja=new ul,_f=new q,Qa=new q,ja=new q,eo=new q,ac=new q,to=new q,vf=new q,no=new q;class bn extends cn{constructor(e=new gn,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ac.fromBufferAttribute(f,e),a?to.addScaledVector(ac,u):to.addScaledVector(ac.sub(t),u))}t.add(to)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ja,_f)===null||Tr.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(gf.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(gf),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=a[m.materialIndex],w=Math.max(m.start,d.start),P=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,A=P;M<A;M+=3){const R=o.getX(M),F=o.getX(M+1),y=o.getX(M+2);r=io(this,p,e,i,c,u,f,R,F,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const w=o.getX(m),P=o.getX(m+1),M=o.getX(m+2);r=io(this,a,e,i,c,u,f,w,P,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=a[m.materialIndex],w=Math.max(m.start,d.start),P=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,A=P;M<A;M+=3){const R=M,F=M+1,y=M+2;r=io(this,p,e,i,c,u,f,R,F,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const w=m,P=m+1,M=m+2;r=io(this,a,e,i,c,u,f,w,P,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function N0(n,e,t,i,r,s,a,o){let l;if(e.side===Dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Vr,o),l===null)return null;no.copy(o),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Qa),n.getVertexPosition(l,ja),n.getVertexPosition(c,eo);const u=N0(n,e,t,i,Qa,ja,eo,vf);if(u){const f=new q;Gn.getBarycoord(vf,Qa,ja,eo,f),r&&(u.uv=Gn.getInterpolatedAttribute(r,o,l,c,f,new Ue)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,o,l,c,f,new Ue)),a&&(u.normal=Gn.getInterpolatedAttribute(a,o,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new q,materialIndex:0};Gn.getNormal(Qa,ja,eo,h.normal),u.face=h,u.barycoord=f}return u}class F0 extends Tn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=ln,u=ln,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wr=new ul,O0=new Ue(.5,.5),ro=new q;class ju{constructor(e=new Bi,t=new Bi,i=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],S=s[9],m=s[10],p=s[11],w=s[12],P=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-a,d-u,p-_,A-w).normalize(),r[1].setComponents(c+a,d+u,p+_,A+w).normalize(),r[2].setComponents(c+o,d+f,p+S,A+P).normalize(),r[3].setComponents(c-o,d-f,p-S,A-P).normalize(),i)r[4].setComponents(l,h,m,M).normalize(),r[5].setComponents(c-l,d-h,p-m,A-M).normalize();else if(r[4].setComponents(c-l,d-h,p-m,A-M).normalize(),t===vi)r[5].setComponents(c+l,d+h,p+m,A+M).normalize();else if(t===_a)r[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const t=O0.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ro extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yo=new q,Ko=new q,xf=new Ot,Vs=new hl,so=new ul,oc=new q,Sf=new q;class eh extends cn{constructor(e=new gn,t=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Yo.fromBufferAttribute(t,r-1),Ko.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Yo.distanceTo(Ko);e.setAttribute("lineDistance",new Yt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;xf.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(xf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=d,m=_-1;S<m;S+=c){const p=u.getX(S),w=u.getX(S+1),P=ao(this,e,Vs,l,p,w,S);P&&t.push(P)}if(this.isLineLoop){const S=u.getX(_-1),m=u.getX(d),p=ao(this,e,Vs,l,S,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=d,m=_-1;S<m;S+=c){const p=ao(this,e,Vs,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=ao(this,e,Vs,l,_-1,d,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ao(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Yo.fromBufferAttribute(o,r),Ko.fromBufferAttribute(o,s),t.distanceSqToSegment(Yo,Ko,oc,Sf)>i)return;oc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(oc);if(!(c<e.near||c>e.far))return{distance:c,point:Sf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Mf=new q,yf=new q;class B0 extends eh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Mf.fromBufferAttribute(t,r),yf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mf.distanceTo(yf);e.setAttribute("lineDistance",new Yt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z0 extends eh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yp extends Tn{constructor(e=[],t=kr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class va extends Tn{constructor(e,t,i=bi,r,s,a,o=ln,l=ln,c,u=Qi,f=1){if(u!==Qi&&u!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class V0 extends va{constructor(e,t=bi,i=kr,r,s,a=ln,o=ln,l,c=Qi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kp extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wa extends gn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function _(S,m,p,w,P,M,A,R,F,y,D){const B=M/F,G=A/y,te=M/2,le=A/2,V=R/2,ee=F+1,re=y+1;let j=0,fe=0;const ae=new q;for(let xe=0;xe<re;xe++){const W=xe*G-le;for(let ge=0;ge<ee;ge++){const Z=ge*B-te;ae[S]=Z*w,ae[m]=W*P,ae[p]=V,c.push(ae.x,ae.y,ae.z),ae[S]=0,ae[m]=0,ae[p]=R>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(ge/F),f.push(1-xe/y),j+=1}}for(let xe=0;xe<y;xe++)for(let W=0;W<F;W++){const ge=h+W+ee*xe,Z=h+W+ee*(xe+1),He=h+(W+1)+ee*(xe+1),qe=h+(W+1)+ee*xe;l.push(ge,Z,qe),l.push(Z,He,qe),fe+=6}o.addGroup(d,fe,D),d+=fe,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const oo=new q,lo=new q,lc=new q,co=new Gn;class k0 extends gn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(na*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:S,b:m,c:p}=co;if(S.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),co.getNormal(lc),f[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){const P=(w+1)%3,M=f[w],A=f[P],R=co[u[w]],F=co[u[P]],y=`${M}_${A}`,D=`${A}_${M}`;D in h&&h[D]?(lc.dot(h[D].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(F.x,F.y,F.z)),h[D]=null):y in h||(h[y]={index0:c[w],index1:c[P],normal:lc.clone()})}}for(const _ in h)if(h[_]){const{index0:S,index1:m}=h[_];oo.fromBufferAttribute(o,S),lo.fromBufferAttribute(o,m),d.push(oo.x,oo.y,oo.z),d.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new Yt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Ue:new q);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new q,r=[],s=[],a=[],o=new q,l=new Ot;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new q)}s[0]=new q,a[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class th extends wi{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ue){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class H0 extends th{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const bf=new q,Ef=new q,cc=new nh,uc=new nh,hc=new nh;class G0 extends wi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new q){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Ef.subVectors(r[0],r[1]).add(r[0]),c=Ef);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(bf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=bf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),cc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,S,m),uc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,S,m),hc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),uc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),hc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(cc.calc(l),uc.calc(l),hc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new q().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tf(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function W0(n,e){const t=1-n;return t*t*e}function X0(n,e){return 2*(1-n)*n*e}function $0(n,e){return n*n*e}function ia(n,e,t,i){return W0(n,e)+X0(n,t)+$0(n,i)}function q0(n,e){const t=1-n;return t*t*t*e}function Y0(n,e){const t=1-n;return 3*t*t*n*e}function K0(n,e){return 3*(1-n)*n*n*e}function Z0(n,e){return n*n*n*e}function ra(n,e,t,i,r){return q0(n,e)+Y0(n,t)+K0(n,i)+Z0(n,r)}class Zp extends wi{constructor(e=new Ue,t=new Ue,i=new Ue,r=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ue){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,r.x,s.x,a.x,o.x),ra(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J0 extends wi{constructor(e=new q,t=new q,i=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,r.x,s.x,a.x,o.x),ra(e,r.y,s.y,a.y,o.y),ra(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jp extends wi{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q0 extends wi{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qp extends wi{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ia(e,r.x,s.x,a.x),ia(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends wi{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ia(e,r.x,s.x,a.x),ia(e,r.y,s.y,a.y),ia(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jp extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Tf(o,l.x,c.x,u.x,f.x),Tf(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ue().fromArray(r))}return this}}var vu=Object.freeze({__proto__:null,ArcCurve:H0,CatmullRomCurve3:G0,CubicBezierCurve:Zp,CubicBezierCurve3:J0,EllipseCurve:th,LineCurve:Jp,LineCurve3:Q0,QuadraticBezierCurve:Qp,QuadraticBezierCurve3:j0,SplineCurve:jp});class ex extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new vu[r.type]().fromJSON(r))}return this}}class wf extends ex{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Jp(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Qp(this.currentPoint.clone(),new Ue(e,t),new Ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new Zp(this.currentPoint.clone(),new Ue(e,t),new Ue(i,r),new Ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new jp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new th(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sa extends wf{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new wf().fromJSON(r))}return this}}function tx(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=em(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=ax(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<r;h+=t){const d=n[h],_=n[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return xa(s,a,t,o,l,c,0),a}function em(n,e,t,i,r){let s;if(r===_x(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Af(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Af(a/i|0,n[a],n[a+1],s);return s&&vs(s,s.next)&&(Ma(s),s=s.next),s}function Gr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(vs(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function xa(n,e,t,i,r,s,a){if(!n)return;!a&&s&&hx(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?ix(n,i,r,s):nx(n)){e.push(l.i,n.i,c.i),Ma(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=rx(Gr(n),e),xa(n,e,t,i,r,s,2)):a===2&&sx(n,e,t,i,r,s):xa(Gr(n),e,t,i,r,s,1);break}}}function nx(n){const e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),f=Math.min(o,l,c),h=Math.max(r,s,a),d=Math.max(o,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&qs(r,o,s,l,a,c,_.x,_.y)&&Ht(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ix(n,e,t,i){const r=n.prev,s=n,a=n.next;if(Ht(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),S=Math.max(o,l,c),m=Math.max(u,f,h),p=xu(d,_,e,t,i),w=xu(S,m,e,t,i);let P=n.prevZ,M=n.nextZ;for(;P&&P.z>=p&&M&&M.z<=w;){if(P.x>=d&&P.x<=S&&P.y>=_&&P.y<=m&&P!==r&&P!==a&&qs(o,u,l,f,c,h,P.x,P.y)&&Ht(P.prev,P,P.next)>=0||(P=P.prevZ,M.x>=d&&M.x<=S&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&qs(o,u,l,f,c,h,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;P&&P.z>=p;){if(P.x>=d&&P.x<=S&&P.y>=_&&P.y<=m&&P!==r&&P!==a&&qs(o,u,l,f,c,h,P.x,P.y)&&Ht(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=S&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&qs(o,u,l,f,c,h,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function rx(n,e){let t=n;do{const i=t.prev,r=t.next.next;!vs(i,r)&&nm(i,t,t.next,r)&&Sa(i,r)&&Sa(r,i)&&(e.push(i.i,t.i,r.i),Ma(t),Ma(t.next),t=n=r),t=t.next}while(t!==n);return Gr(t)}function sx(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&px(a,o)){let l=im(a,o);a=Gr(a,a.next),l=Gr(l,l.next),xa(a,e,t,i,r,s,0),xa(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function ax(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=em(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(dx(c))}r.sort(ox);for(let s=0;s<r.length;s++)t=lx(r[s],t);return t}function ox(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function lx(n,e){const t=cx(n,e);if(!t)return e;const i=im(t,n);return Gr(i,i.next),Gr(t,t.next)}function cx(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(vs(n,t))return t;do{if(vs(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&tm(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Sa(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&ux(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function ux(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function hx(n,e,t,i){let r=n;do r.z===0&&(r.z=xu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,fx(r)}function fx(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function xu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function dx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function tm(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function qs(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&tm(n,e,t,i,r,s,a,o)}function px(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!mx(n,e)&&(Sa(n,e)&&Sa(e,n)&&gx(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||vs(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function vs(n,e){return n.x===e.x&&n.y===e.y}function nm(n,e,t,i){const r=ho(Ht(n,e,t)),s=ho(Ht(n,e,i)),a=ho(Ht(t,i,n)),o=ho(Ht(t,i,e));return!!(r!==s&&a!==o||r===0&&uo(n,t,e)||s===0&&uo(n,i,e)||a===0&&uo(t,n,i)||o===0&&uo(t,e,i))}function uo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ho(n){return n>0?1:n<0?-1:0}function mx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&nm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Sa(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function gx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function im(n,e){const t=Su(n.i,n.x,n.y),i=Su(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Af(n,e,t,i){const r=Su(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ma(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Su(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _x(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class vx{static triangulate(e,t,i=2){return tx(e,t,i)}}class Gi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Gi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Rf(e),Cf(i,e);let a=e.length;t.forEach(Rf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Cf(i,t[l]);const o=vx.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Rf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ih extends gn{constructor(e=new sa([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Yt(r,3)),this.setAttribute("uv",new Yt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:xx;let P,M=!1,A,R,F,y;if(p){P=p.getSpacedPoints(u),M=!0,h=!1;const I=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,I),R=new q,F=new q,y=new q}h||(m=0,d=0,_=0,S=0);const D=o.extractPoints(c);let B=D.shape;const G=D.holes;if(!Gi.isClockWise(B)){B=B.reverse();for(let I=0,z=G.length;I<z;I++){const k=G[I];Gi.isClockWise(k)&&(G[I]=k.reverse())}}function le(I){const k=10000000000000001e-36;let X=I[0];for(let ne=1;ne<=I.length;ne++){const _e=ne%I.length,he=I[_e],ce=he.x-X.x,Ae=he.y-X.y,C=ce*ce+Ae*Ae,Ce=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(X.x),Math.abs(X.y)),Ne=k*Ce*Ce;if(C<=Ne){I.splice(_e,1),ne--;continue}X=he}}le(B),G.forEach(le);const V=G.length,ee=B;for(let I=0;I<V;I++){const z=G[I];B=B.concat(z)}function re(I,z,k){return z||Mt("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(z,k)}const j=B.length;function fe(I,z,k){let X,ne,_e;const he=I.x-z.x,ce=I.y-z.y,Ae=k.x-I.x,C=k.y-I.y,Ce=he*he+ce*ce,Ne=he*C-ce*Ae;if(Math.abs(Ne)>Number.EPSILON){const T=Math.sqrt(Ce),g=Math.sqrt(Ae*Ae+C*C),O=z.x-ce/T,J=z.y+he/T,ie=k.x-C/g,we=k.y+Ae/g,Pe=((ie-O)*C-(we-J)*Ae)/(he*C-ce*Ae);X=O+he*Pe-I.x,ne=J+ce*Pe-I.y;const ve=X*X+ne*ne;if(ve<=2)return new Ue(X,ne);_e=Math.sqrt(ve/2)}else{let T=!1;he>Number.EPSILON?Ae>Number.EPSILON&&(T=!0):he<-Number.EPSILON?Ae<-Number.EPSILON&&(T=!0):Math.sign(ce)===Math.sign(C)&&(T=!0),T?(X=-ce,ne=he,_e=Math.sqrt(Ce)):(X=he,ne=ce,_e=Math.sqrt(Ce/2))}return new Ue(X/_e,ne/_e)}const ae=[];for(let I=0,z=ee.length,k=z-1,X=I+1;I<z;I++,k++,X++)k===z&&(k=0),X===z&&(X=0),ae[I]=fe(ee[I],ee[k],ee[X]);const xe=[];let W,ge=ae.concat();for(let I=0,z=V;I<z;I++){const k=G[I];W=[];for(let X=0,ne=k.length,_e=ne-1,he=X+1;X<ne;X++,_e++,he++)_e===ne&&(_e=0),he===ne&&(he=0),W[X]=fe(k[X],k[_e],k[he]);xe.push(W),ge=ge.concat(W)}let Z;if(m===0)Z=Gi.triangulateShape(ee,G);else{const I=[],z=[];for(let k=0;k<m;k++){const X=k/m,ne=d*Math.cos(X*Math.PI/2),_e=_*Math.sin(X*Math.PI/2)+S;for(let he=0,ce=ee.length;he<ce;he++){const Ae=re(ee[he],ae[he],_e);Ie(Ae.x,Ae.y,-ne),X===0&&I.push(Ae)}for(let he=0,ce=V;he<ce;he++){const Ae=G[he];W=xe[he];const C=[];for(let Ce=0,Ne=Ae.length;Ce<Ne;Ce++){const T=re(Ae[Ce],W[Ce],_e);Ie(T.x,T.y,-ne),X===0&&C.push(T)}X===0&&z.push(C)}}Z=Gi.triangulateShape(I,z)}const He=Z.length,qe=_+S;for(let I=0;I<j;I++){const z=h?re(B[I],ge[I],qe):B[I];M?(F.copy(A.normals[0]).multiplyScalar(z.x),R.copy(A.binormals[0]).multiplyScalar(z.y),y.copy(P[0]).add(F).add(R),Ie(y.x,y.y,y.z)):Ie(z.x,z.y,0)}for(let I=1;I<=u;I++)for(let z=0;z<j;z++){const k=h?re(B[z],ge[z],qe):B[z];M?(F.copy(A.normals[I]).multiplyScalar(k.x),R.copy(A.binormals[I]).multiplyScalar(k.y),y.copy(P[I]).add(F).add(R),Ie(y.x,y.y,y.z)):Ie(k.x,k.y,f/u*I)}for(let I=m-1;I>=0;I--){const z=I/m,k=d*Math.cos(z*Math.PI/2),X=_*Math.sin(z*Math.PI/2)+S;for(let ne=0,_e=ee.length;ne<_e;ne++){const he=re(ee[ne],ae[ne],X);Ie(he.x,he.y,f+k)}for(let ne=0,_e=G.length;ne<_e;ne++){const he=G[ne];W=xe[ne];for(let ce=0,Ae=he.length;ce<Ae;ce++){const C=re(he[ce],W[ce],X);M?Ie(C.x,C.y+P[u-1].y,P[u-1].x+k):Ie(C.x,C.y,f+k)}}}Re(),pe();function Re(){const I=r.length/3;if(h){let z=0,k=j*z;for(let X=0;X<He;X++){const ne=Z[X];me(ne[2]+k,ne[1]+k,ne[0]+k)}z=u+m*2,k=j*z;for(let X=0;X<He;X++){const ne=Z[X];me(ne[0]+k,ne[1]+k,ne[2]+k)}}else{for(let z=0;z<He;z++){const k=Z[z];me(k[2],k[1],k[0])}for(let z=0;z<He;z++){const k=Z[z];me(k[0]+j*u,k[1]+j*u,k[2]+j*u)}}i.addGroup(I,r.length/3-I,0)}function pe(){const I=r.length/3;let z=0;ue(ee,z),z+=ee.length;for(let k=0,X=G.length;k<X;k++){const ne=G[k];ue(ne,z),z+=ne.length}i.addGroup(I,r.length/3-I,1)}function ue(I,z){let k=I.length;for(;--k>=0;){const X=k;let ne=k-1;ne<0&&(ne=I.length-1);for(let _e=0,he=u+m*2;_e<he;_e++){const ce=j*_e,Ae=j*(_e+1),C=z+X+ce,Ce=z+ne+ce,Ne=z+ne+Ae,T=z+X+Ae;N(C,Ce,Ne,T)}}}function Ie(I,z,k){l.push(I),l.push(z),l.push(k)}function me(I,z,k){b(I),b(z),b(k);const X=r.length/3,ne=w.generateTopUV(i,r,X-3,X-2,X-1);U(ne[0]),U(ne[1]),U(ne[2])}function N(I,z,k,X){b(I),b(z),b(X),b(z),b(k),b(X);const ne=r.length/3,_e=w.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);U(_e[0]),U(_e[1]),U(_e[3]),U(_e[1]),U(_e[2]),U(_e[3])}function b(I){r.push(l[I*3+0]),r.push(l[I*3+1]),r.push(l[I*3+2])}function U(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Sx(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new vu[r.type]().fromJSON(r)),new ih(i,e.options)}}const xx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ue(s,a),new Ue(o,l),new Ue(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],_=e[r*3+2],S=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ue(a,1-l),new Ue(c,1-f),new Ue(h,1-_),new Ue(S,1-p)]:[new Ue(o,1-l),new Ue(u,1-f),new Ue(d,1-_),new Ue(m,1-p)]}};function Sx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fl extends gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const w=p*h-a;for(let P=0;P<c;P++){const M=P*f-s;_.push(M,-w,0),S.push(0,0,1),m.push(P/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const P=w+c*p,M=w+c*(p+1),A=w+1+c*(p+1),R=w+1+c*p;d.push(P,M,R),d.push(M,A,R)}this.setIndex(d),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(S,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zo extends gn{constructor(e=new sa([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(s,3)),this.setAttribute("uv",new Yt(a,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const _=h.holes;Gi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const w=_[m];Gi.isClockWise(w)===!0&&(_[m]=w.reverse())}const S=Gi.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const w=_[m];d=d.concat(w)}for(let m=0,p=d.length;m<p;m++){const w=d[m];r.push(w.x,w.y,0),s.push(0,0,1),a.push(w.x,w.y)}for(let m=0,p=S.length;m<p;m++){const w=S[m],P=w[0]+f,M=w[1]+f,A=w[2]+f;i.push(P,M,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Mx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new Zo(i,e.curveSegments)}}function Mx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class aa extends gn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new q,h=new q,d=[],_=[],S=[],m=[];for(let p=0;p<=i;p++){const w=[],P=p/i,M=a+P*o,A=e*Math.cos(M),R=Math.sqrt(e*e-A*A);let F=0;p===0&&a===0?F=.5/t:p===i&&l===Math.PI&&(F=-.5/t);for(let y=0;y<=t;y++){const D=y/t,B=r+D*s;f.x=-R*Math.cos(B),f.y=A,f.z=R*Math.sin(B),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(D+F,1-P),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const P=u[p][w+1],M=u[p][w],A=u[p+1][w],R=u[p+1][w+1];(p!==0||a>0)&&d.push(P,M,R),(p!==i-1||l<Math.PI)&&d.push(M,A,R)}this.setIndex(d),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(S,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Pf(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Pf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=xs(n[t]);for(const r in i)e[r]=i[r]}return e}function Pf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function yx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const bx={clone:xs,merge:Sn};var Ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ex,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new kt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ot().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wx extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ax extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rx extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cx extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sm extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fc=new Ot,Df=new q,Lf=new q;class Px{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ju,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===_a||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fo=new q,po=new pr,li=new q;class am extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fo,po,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(fo,po,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new q,If=new Ue,Uf=new Ue;class Qn extends am{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_u*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _u*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,If,Uf),t.subVectors(Uf,If)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dl extends am{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dx extends Px{constructor(){super(new dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lx extends sm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Dx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ix extends sm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const is=-90,rs=1;class Ux extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(is,rs,e,t);r.layers=this.layers,this.add(r);const s=new Qn(is,rs,e,t);s.layers=this.layers,this.add(s);const a=new Qn(is,rs,e,t);a.layers=this.layers,this.add(a);const o=new Qn(is,rs,e,t);o.layers=this.layers,this.add(o);const l=new Qn(is,rs,e,t);l.layers=this.layers,this.add(l);const c=new Qn(is,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Nx extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nf=new Ot;class Fx{constructor(e,t,i=0,r=1/0){this.ray=new hl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Qu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(e,t=!0,i=[]){return Mu(e,this,i,t),i.sort(Ff),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Mu(e[r],this,i,t);return i.sort(Ff),i}}function Ff(n,e){return n.distance-e.distance}function Mu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Mu(s[a],e,t,!0)}}class Of{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class om{static{om.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}class Ox extends gr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bf(n,e,t,i){const r=Bx(i);switch(t){case Vp:return n*e;case Hp:return n*e/r.components*r.byteLength;case $u:return n*e/r.components*r.byteLength;case Hr:return n*e*2/r.components*r.byteLength;case qu:return n*e*2/r.components*r.byteLength;case kp:return n*e*3/r.components*r.byteLength;case ei:return n*e*4/r.components*r.byteLength;case Yu:return n*e*4/r.components*r.byteLength;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case Vc:case Hc:return Math.max(n,8)*Math.max(e,8)/2;case Wc:case Xc:case qc:case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $c:case Go:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uu:case hu:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case du:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wo:case mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bx(n){switch(n){case Fn:case Fp:return{byteLength:1,components:1};case ma:case Op:case Ei:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case bi:case Gu:case _i:return{byteLength:4,components:1};case Bp:case zp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lm(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],S=f[d];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const S=f[d];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,LS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,IS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,US=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ly=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Vx,alphahash_pars_fragment:kx,alphamap_fragment:Hx,alphamap_pars_fragment:Gx,alphatest_fragment:Wx,alphatest_pars_fragment:Xx,aomap_fragment:$x,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:Kx,begin_vertex:Zx,beginnormal_vertex:Jx,bsdfs:Qx,iridescence_fragment:jx,bumpmap_pars_fragment:eS,clipping_planes_fragment:tS,clipping_planes_pars_fragment:nS,clipping_planes_pars_vertex:iS,clipping_planes_vertex:rS,color_fragment:sS,color_pars_fragment:aS,color_pars_vertex:oS,color_vertex:lS,common:cS,cube_uv_reflection_fragment:uS,defaultnormal_vertex:hS,displacementmap_pars_vertex:fS,displacementmap_vertex:dS,emissivemap_fragment:pS,emissivemap_pars_fragment:mS,colorspace_fragment:gS,colorspace_pars_fragment:_S,envmap_fragment:vS,envmap_common_pars_fragment:xS,envmap_pars_fragment:SS,envmap_pars_vertex:MS,envmap_physical_pars_fragment:LS,envmap_vertex:yS,fog_vertex:bS,fog_pars_vertex:ES,fog_fragment:TS,fog_pars_fragment:wS,gradientmap_pars_fragment:AS,lightmap_pars_fragment:RS,lights_lambert_fragment:CS,lights_lambert_pars_fragment:PS,lights_pars_begin:DS,lights_toon_fragment:IS,lights_toon_pars_fragment:US,lights_phong_fragment:NS,lights_phong_pars_fragment:FS,lights_physical_fragment:OS,lights_physical_pars_fragment:BS,lights_fragment_begin:zS,lights_fragment_maps:VS,lights_fragment_end:kS,lightprobes_pars_fragment:HS,logdepthbuf_fragment:GS,logdepthbuf_pars_fragment:WS,logdepthbuf_pars_vertex:XS,logdepthbuf_vertex:$S,map_fragment:qS,map_pars_fragment:YS,map_particle_fragment:KS,map_particle_pars_fragment:ZS,metalnessmap_fragment:JS,metalnessmap_pars_fragment:QS,morphinstance_vertex:jS,morphcolor_vertex:eM,morphnormal_vertex:tM,morphtarget_pars_vertex:nM,morphtarget_vertex:iM,normal_fragment_begin:rM,normal_fragment_maps:sM,normal_pars_fragment:aM,normal_pars_vertex:oM,normal_vertex:lM,normalmap_pars_fragment:cM,clearcoat_normal_fragment_begin:uM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:dM,opaque_fragment:pM,packing:mM,premultiplied_alpha_fragment:gM,project_vertex:_M,dithering_fragment:vM,dithering_pars_fragment:xM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:bM,shadowmap_vertex:EM,shadowmask_pars_fragment:TM,skinbase_vertex:wM,skinning_pars_vertex:AM,skinning_vertex:RM,skinnormal_vertex:CM,specularmap_fragment:PM,specularmap_pars_fragment:DM,tonemapping_fragment:LM,tonemapping_pars_fragment:IM,transmission_fragment:UM,transmission_pars_fragment:NM,uv_pars_fragment:FM,uv_pars_vertex:OM,uv_vertex:BM,worldpos_vertex:zM,background_vert:VM,background_frag:kM,backgroundCube_vert:HM,backgroundCube_frag:GM,cube_vert:WM,cube_frag:XM,depth_vert:$M,depth_frag:qM,distance_vert:YM,distance_frag:KM,equirect_vert:ZM,equirect_frag:JM,linedashed_vert:QM,linedashed_frag:jM,meshbasic_vert:ey,meshbasic_frag:ty,meshlambert_vert:ny,meshlambert_frag:iy,meshmatcap_vert:ry,meshmatcap_frag:sy,meshnormal_vert:ay,meshnormal_frag:oy,meshphong_vert:ly,meshphong_frag:cy,meshphysical_vert:uy,meshphysical_frag:hy,meshtoon_vert:fy,meshtoon_frag:dy,points_vert:py,points_frag:my,shadow_vert:gy,shadow_frag:_y,sprite_vert:vy,sprite_frag:xy},Xe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},pi={basic:{uniforms:Sn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Sn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Sn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Sn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Sn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Sn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Sn([Xe.points,Xe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Sn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Sn([Xe.common,Xe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Sn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Sn([Xe.sprite,Xe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Sn([Xe.common,Xe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Sn([Xe.lights,Xe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};pi.physical={uniforms:Sn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const mo={r:0,b:0,g:0},Sy=new Ot,cm=new lt;cm.set(-1,0,0,0,1,0,0,0,1);function My(n,e,t,i,r,s){const a=new St(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const M=w.backgroundBlurriness>0;P=e.get(P,M)}return P}function _(w){let P=!1;const M=d(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),P=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(w,P){const M=d(P);M&&(M.isCubeTexture||M.mapping===cl)?(c===void 0&&(c=new bn(new wa(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:xs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cm),c.material.toneMapped=xt.getTransfer(M.colorSpace)!==Ct,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new bn(new fl(2,2),new Ti({name:"BackgroundMaterial",uniforms:xs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=xt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,P){w.getRGB(mo,rm(n)),t.buffers.color.setClear(mo.r,mo.g,mo.b,P,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,P=1){a.set(w),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:S,dispose:p}}function yy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(G,te,le,V,ee){let re=!1;const j=f(G,V,le,te);s!==j&&(s=j,c(s.object)),re=d(G,V,le,ee),re&&_(G,V,le,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,M(G,te,le,V),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(G){return n.bindVertexArray(G)}function u(G){return n.deleteVertexArray(G)}function f(G,te,le,V){const ee=V.wireframe===!0;let re=i[te.id];re===void 0&&(re={},i[te.id]=re);const j=G.isInstancedMesh===!0?G.id:0;let fe=re[j];fe===void 0&&(fe={},re[j]=fe);let ae=fe[le.id];ae===void 0&&(ae={},fe[le.id]=ae);let xe=ae[ee];return xe===void 0&&(xe=h(l()),ae[ee]=xe),xe}function h(G){const te=[],le=[],V=[];for(let ee=0;ee<t;ee++)te[ee]=0,le[ee]=0,V[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:le,attributeDivisors:V,object:G,attributes:{},index:null}}function d(G,te,le,V){const ee=s.attributes,re=te.attributes;let j=0;const fe=le.getAttributes();for(const ae in fe)if(fe[ae].location>=0){const W=ee[ae];let ge=re[ae];if(ge===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor)),W===void 0||W.attribute!==ge||ge&&W.data!==ge.data)return!0;j++}return s.attributesNum!==j||s.index!==V}function _(G,te,le,V){const ee={},re=te.attributes;let j=0;const fe=le.getAttributes();for(const ae in fe)if(fe[ae].location>=0){let W=re[ae];W===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(W=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(W=G.instanceColor));const ge={};ge.attribute=W,W&&W.data&&(ge.data=W.data),ee[ae]=ge,j++}s.attributes=ee,s.attributesNum=j,s.index=V}function S(){const G=s.newAttributes;for(let te=0,le=G.length;te<le;te++)G[te]=0}function m(G){p(G,0)}function p(G,te){const le=s.newAttributes,V=s.enabledAttributes,ee=s.attributeDivisors;le[G]=1,V[G]===0&&(n.enableVertexAttribArray(G),V[G]=1),ee[G]!==te&&(n.vertexAttribDivisor(G,te),ee[G]=te)}function w(){const G=s.newAttributes,te=s.enabledAttributes;for(let le=0,V=te.length;le<V;le++)te[le]!==G[le]&&(n.disableVertexAttribArray(le),te[le]=0)}function P(G,te,le,V,ee,re,j){j===!0?n.vertexAttribIPointer(G,te,le,ee,re):n.vertexAttribPointer(G,te,le,V,ee,re)}function M(G,te,le,V){S();const ee=V.attributes,re=le.getAttributes(),j=te.defaultAttributeValues;for(const fe in re){const ae=re[fe];if(ae.location>=0){let xe=ee[fe];if(xe===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(xe=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(xe=G.instanceColor)),xe!==void 0){const W=xe.normalized,ge=xe.itemSize,Z=e.get(xe);if(Z===void 0)continue;const He=Z.buffer,qe=Z.type,Re=Z.bytesPerElement,pe=qe===n.INT||qe===n.UNSIGNED_INT||xe.gpuType===Gu;if(xe.isInterleavedBufferAttribute){const ue=xe.data,Ie=ue.stride,me=xe.offset;if(ue.isInstancedInterleavedBuffer){for(let N=0;N<ae.locationSize;N++)p(ae.location+N,ue.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let N=0;N<ae.locationSize;N++)m(ae.location+N);n.bindBuffer(n.ARRAY_BUFFER,He);for(let N=0;N<ae.locationSize;N++)P(ae.location+N,ge/ae.locationSize,qe,W,Ie*Re,(me+ge/ae.locationSize*N)*Re,pe)}else{if(xe.isInstancedBufferAttribute){for(let ue=0;ue<ae.locationSize;ue++)p(ae.location+ue,xe.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ue=0;ue<ae.locationSize;ue++)m(ae.location+ue);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ue=0;ue<ae.locationSize;ue++)P(ae.location+ue,ge/ae.locationSize,qe,W,ge*Re,ge/ae.locationSize*ue*Re,pe)}}else if(j!==void 0){const W=j[fe];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(ae.location,W);break;case 3:n.vertexAttrib3fv(ae.location,W);break;case 4:n.vertexAttrib4fv(ae.location,W);break;default:n.vertexAttrib1fv(ae.location,W)}}}}w()}function A(){D();for(const G in i){const te=i[G];for(const le in te){const V=te[le];for(const ee in V){const re=V[ee];for(const j in re)u(re[j].object),delete re[j];delete V[ee]}}delete i[G]}}function R(G){if(i[G.id]===void 0)return;const te=i[G.id];for(const le in te){const V=te[le];for(const ee in V){const re=V[ee];for(const j in re)u(re[j].object),delete re[j];delete V[ee]}}delete i[G.id]}function F(G){for(const te in i){const le=i[te];for(const V in le){const ee=le[V];if(ee[G.id]===void 0)continue;const re=ee[G.id];for(const j in re)u(re[j].object),delete re[j];delete ee[G.id]}}}function y(G){for(const te in i){const le=i[te],V=G.isInstancedMesh===!0?G.id:0,ee=le[V];if(ee!==void 0){for(const re in ee){const j=ee[re];for(const fe in j)u(j[fe].object),delete j[fe];delete ee[re]}delete le[V],Object.keys(le).length===0&&delete i[te]}}}function D(){B(),a=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:m,disableUnusedAttributes:w}}function by(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ey(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==ei&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const y=F===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Fn&&F!==_i&&!y&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(st("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:M,maxSamples:A,samples:R}}function Ty(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bi,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,P=w*4;let M=p.clippingState||null;l.value=M,M=u(_,h,P,d);for(let A=0;A!==P;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=d+S*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,M=d;P!==S;++P,M+=4)a.copy(f[P]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const cs=4,wy=6,Ay=20,Ry=256,ks=new dl,zf=new St;let dc=null,pc=0,mc=0,gc=!1;const Cy=new q,Ar=new q;class Vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Cy}=s;dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ei,format:ei,colorSpace:Xo,depthBuffer:!1},r=kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Py(s)),this._blurMaterial=Ly(s,e,t),this._ggxMaterial=Dy(s,e,t)}return r}_compileMaterial(e){const t=new bn(new gn,e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,i,r,s){const l=new Qn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(zf),f.toneMapping=Si,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new wa,new Pr({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(zf),p=!0);for(let P=0;P<6;P++){const M=P%3;M===0?(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[P],s.y,s.z)):M===1?(l.up.set(0,0,c[P]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[P],s.z)):(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[P]));const A=this._cubeSize;ss(r,M*A,P>2?A:0,A,A),f.setRenderTarget(r),p&&f.render(S,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===kr||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-cs?i-_+cs:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,ss(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,ks),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ss(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,ks)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-cs?r-this._lodMax+cs:0),h=4*(this._cubeSize-u);ss(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,ks)}}function Py(n){const e=[],t=[];let i=n;const r=n-cs+1+wy;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),S=new Float32Array(d*h*f);for(let p=0;p<f;p++){const w=p%3*2/3-1,P=p>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(M,d*h*p);for(let A=0;A<h;A++){const R=u[A*2]*2-1,F=u[A*2+1]*2-1;p===0?Ar.set(1,F,R):p===1?Ar.set(-R,1,-F):p===2?Ar.set(-R,F,1):p===3?Ar.set(-1,F,-R):p===4?Ar.set(-R,-1,F):Ar.set(R,F,-1),Ar.toArray(S,(p*h+A)*d)}}const m=new gn;m.setAttribute("position",new Yi(_,d)),m.setAttribute("outputDirection",new Yi(S,d)),t.push(new bn(m,null)),i>cs&&i--}return{lodMeshes:t,sizeLods:e}}function kf(n,e,t){const i=new ii(n,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dy(n,e,t){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ry,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ly(n,e,t){return new Ti({name:"SphericalGaussianBlur",defines:{SAMPLES:Ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Hf(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Gf(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class um extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wa(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:$i});s.uniforms.tEquirect.value=t;const a=new bn(r,s),o=t.minFilter;return t.minFilter===Ur&&(t.minFilter=pn),new Ux(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Iy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fl||d===Ol)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new um(_.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===Fl||d===Ol,S=d===kr||d===_s;if(_||S){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Vf(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const w=h.image;return _&&w&&w.height>0||S&&w&&l(w)?(i===null&&(i=new Vf(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Fl?h.mapping=kr:d===Ol&&(h.mapping=_s),h}function l(h){let d=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Uy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&fs("WebGLRenderer: "+i+" extension not supported."),r}}}function Ny(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(d!==null){const w=d.array;S=d.version;for(let P=0,M=w.length;P<M;P+=3){const A=w[P+0],R=w[P+1],F=w[P+2];h.push(A,R,R,F,F,A)}}else{const w=_.array;S=_.version;for(let P=0,M=w.length/3-1;P<M;P+=3){const A=P+0,R=P+1,F=P+2;h.push(A,R,R,F,F,A)}}const m=new(_.count>=65535?qp:$p)(h,1);m.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Fy(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let S=0;for(let m=0;m<d;m++)S+=h[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Oy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Mt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function By(n,e,t){const i=new WeakMap,r=new kt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let D=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let P=0;d===!0&&(P=1),_===!0&&(P=2),S===!0&&(P=3);let M=o.attributes.position.count*P,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*A*4*f),F=new Wp(R,M,A,f);F.type=_i,F.needsUpdate=!0;const y=P*4;for(let B=0;B<f;B++){const G=m[B],te=p[B],le=w[B],V=M*A*4*B;for(let ee=0;ee<G.count;ee++){const re=ee*y;d===!0&&(r.fromBufferAttribute(G,ee),R[V+re+0]=r.x,R[V+re+1]=r.y,R[V+re+2]=r.z,R[V+re+3]=0),_===!0&&(r.fromBufferAttribute(te,ee),R[V+re+4]=r.x,R[V+re+5]=r.y,R[V+re+6]=r.z,R[V+re+7]=0),S===!0&&(r.fromBufferAttribute(le,ee),R[V+re+8]=r.x,R[V+re+9]=r.y,R[V+re+10]=r.z,R[V+re+11]=le.itemSize===4?r.w:1)}}h={count:f,texture:F,size:new Ue(M,A)},i.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function zy(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Vy={[Rp]:"LINEAR_TONE_MAPPING",[Cp]:"REINHARD_TONE_MAPPING",[Pp]:"CINEON_TONE_MAPPING",[Dp]:"ACES_FILMIC_TONE_MAPPING",[Ip]:"AGX_TONE_MAPPING",[Up]:"NEUTRAL_TONE_MAPPING",[Lp]:"CUSTOM_TONE_MAPPING"};function ky(n,e,t,i,r,s){const a=new ii(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new gn;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const u=new wx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new bn(c,u),h=new dl(-1,1,1,-1,0,1);let d=null,_=null,S=!1,m,p=null,w=[],P=!1;this.setSize=function(M,A){a.setSize(M,A),o!==null&&o.setSize(M,A),l!==null&&l.setSize(M,A);for(let R=0;R<w.length;R++){const F=w[R];F.setSize&&F.setSize(M,A)}},this.setEffects=function(M){w=M,P=w.length>0&&w[0].isRenderPass===!0;const A=a.width,R=a.height;w.length>0&&o===null&&(o=new ii(A,R,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ii(A,R,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<w.length;F++){const y=w[F];y.setSize&&y.setSize(A,R)}},this.begin=function(M,A){if(S||M.toneMapping===Si&&w.length===0)return!1;if(p=A,A!==null){const R=A.width,F=A.height;(a.width!==R||a.height!==F)&&this.setSize(R,F)}return P===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Si,!0},this.hasRenderPass=function(){return P},this.end=function(M,A){M.toneMapping=m,S=!0;let R=a,F=o;for(let y=0;y<w.length;y++){const D=w[y];D.enabled!==!1&&(D.render(M,F,R,A),D.needsSwap!==!1&&(R=F,F=F===o?l:o))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,u.defines={},xt.getTransfer(d)===Ct&&(u.defines.SRGB_TRANSFER="");const y=Vy[_];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,M.setRenderTarget(p),M.render(f,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const hm=new Tn,yu=new va(1,1),fm=new Wp,dm=new S0,pm=new Yp,Wf=[],Xf=[],$f=new Float32Array(16),qf=new Float32Array(9),Yf=new Float32Array(4);function Es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wf[r];if(s===void 0&&(s=new Float32Array(r),Wf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ml(n,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function $y(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Yf.set(i),n.uniformMatrix2fv(this.addr,!1,Yf),Jt(t,i)}}function qy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;qf.set(i),n.uniformMatrix3fv(this.addr,!1,qf),Jt(t,i)}}function Yy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;$f.set(i),n.uniformMatrix4fv(this.addr,!1,$f),Jt(t,i)}}function Ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function jy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function ib(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yu.compareFunction=t.isReversedDepthBuffer()?Zu:Ku,s=yu):s=hm,t.setTexture2D(e||s,r)}function rb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dm,r)}function sb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pm,r)}function ab(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fm,r)}function ob(n){switch(n){case 5126:return Hy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return $y;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Ky;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return Qy;case 5125:return jy;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ab}}function lb(n,e){n.uniform1fv(this.addr,e)}function cb(n,e){const t=Es(e,this.size,2);n.uniform2fv(this.addr,t)}function ub(n,e){const t=Es(e,this.size,3);n.uniform3fv(this.addr,t)}function hb(n,e){const t=Es(e,this.size,4);n.uniform4fv(this.addr,t)}function fb(n,e){const t=Es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function db(n,e){const t=Es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pb(n,e){const t=Es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mb(n,e){n.uniform1iv(this.addr,e)}function gb(n,e){n.uniform2iv(this.addr,e)}function _b(n,e){n.uniform3iv(this.addr,e)}function vb(n,e){n.uniform4iv(this.addr,e)}function xb(n,e){n.uniform1uiv(this.addr,e)}function Sb(n,e){n.uniform2uiv(this.addr,e)}function Mb(n,e){n.uniform3uiv(this.addr,e)}function yb(n,e){n.uniform4uiv(this.addr,e)}function bb(n,e,t){const i=this.cache,r=e.length,s=ml(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=yu:a=hm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Eb(n,e,t){const i=this.cache,r=e.length,s=ml(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||dm,s[a])}function Tb(n,e,t){const i=this.cache,r=e.length,s=ml(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||pm,s[a])}function wb(n,e,t){const i=this.cache,r=e.length,s=ml(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fm,s[a])}function Ab(n){switch(n){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return hb;case 35674:return fb;case 35675:return db;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return Sb;case 36295:return Mb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return wb}}class Rb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ob(t.type)}}class Cb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ab(t.type)}}class Pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Kf(n,e){n.seq.push(e),n.map[e.id]=e}function Db(n,e,t){const i=n.name,r=i.length;for(_c.lastIndex=0;;){const s=_c.exec(i),a=_c.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Kf(t,c===void 0?new Rb(o,n,e):new Cb(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Pb(o),Kf(t,f)),t=f}}}class Co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Db(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Zf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Lb=37297;let Ib=0;function Ub(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Jf=new lt;function Nb(n){xt._getMatrix(Jf,xt.workingColorSpace,n);const e=`mat3( ${Jf.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case $o:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ub(n.getShaderSource(e),o)}else return s}function Fb(n,e){const t=Nb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ob={[Rp]:"Linear",[Cp]:"Reinhard",[Pp]:"Cineon",[Dp]:"ACESFilmic",[Ip]:"AgX",[Up]:"Neutral",[Lp]:"Custom"};function Bb(n,e){const t=Ob[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new q;function zb(){xt.getLuminanceCoefficients(go);const n=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function kb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ys(n){return n!==""}function jf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(n){return n.replace(Gb,Xb)}const Wb=new Map;function Xb(n,e){let t=dt[e];if(t===void 0){const i=Wb.get(e);if(i!==void 0)t=dt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bu(t)}const $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(n){return n.replace($b,qb)}function qb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Yb={[bo]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function Kb(n){return Yb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zb={[kr]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[cl]:"ENVMAP_TYPE_CUBE_UV"};function Jb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Zb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qb={[_s]:"ENVMAP_MODE_REFRACTION"};function jb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[Ap]:"ENVMAP_BLENDING_MULTIPLY",[Zv]:"ENVMAP_BLENDING_MIX",[Jv]:"ENVMAP_BLENDING_ADD"};function tE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":eE[n.combine]||"ENVMAP_BLENDING_NONE"}function nE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function iE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kb(t),c=Jb(t),u=jb(t),f=tE(t),h=nE(t),d=Vb(t),_=kb(s),S=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?dt.tonemapping_pars_fragment:"",t.toneMapping!==Si?Bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Fb("linearToOutputTexel",t.outputColorSpace),zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=bu(a),a=jf(a,t),a=ed(a,t),o=bu(o),o=jf(o,t),o=ed(o,t),a=td(a),o=td(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=w+m+a,M=w+p+o,A=Zf(r,r.VERTEX_SHADER,P),R=Zf(r,r.FRAGMENT_SHADER,M);r.attachShader(S,A),r.attachShader(S,R),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function F(G){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(S)||"",le=r.getShaderInfoLog(A)||"",V=r.getShaderInfoLog(R)||"",ee=te.trim(),re=le.trim(),j=V.trim();let fe=!0,ae=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,A,R);else{const xe=Qf(r,A,"vertex"),W=Qf(r,R,"fragment");Mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ee+`
`+xe+`
`+W)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(re===""||j==="")&&(ae=!1);ae&&(G.diagnostics={runnable:fe,programLog:ee,vertexShader:{log:re,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(A),r.deleteShader(R),y=new Co(r,S),D=Hb(r,S)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(S,Lb)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ib++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=R,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aE(e),t.set(e,i)),i}}class aE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(n){return n===Hr||n===Go||n===Wo}function lE(n,e,t,i,r,s){const a=new Qu,o=new sE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,D,B,G,te,le){const V=G.fog,ee=te.geometry,re=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?G.environment:null,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,fe=e.get(y.envMap||re,j),ae=fe&&fe.mapping===cl?fe.image.height:null,xe=d[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&st("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const W=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ge=W!==void 0?W.length:0;let Z=0;ee.morphAttributes.position!==void 0&&(Z=1),ee.morphAttributes.normal!==void 0&&(Z=2),ee.morphAttributes.color!==void 0&&(Z=3);let He,qe,Re,pe;if(xe){const Dt=pi[xe];He=Dt.vertexShader,qe=Dt.fragmentShader}else{He=y.vertexShader,qe=y.fragmentShader;const Dt=o.getVertexShaderStage(y),_t=o.getFragmentShaderStage(y);o.update(y,Dt,_t),Re=Dt.id,pe=_t.id}const ue=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),me=te.isInstancedMesh===!0,N=te.isBatchedMesh===!0,b=!!y.map,U=!!y.matcap,I=!!fe,z=!!y.aoMap,k=!!y.lightMap,X=!!y.bumpMap&&y.wireframe===!1,ne=!!y.normalMap,_e=!!y.displacementMap,he=!!y.emissiveMap,ce=!!y.metalnessMap,Ae=!!y.roughnessMap,C=y.anisotropy>0,Ce=y.clearcoat>0,Ne=y.dispersion>0,T=y.retroreflectivity>0,g=y.iridescence>0,O=y.sheen>0,J=y.transmission>0,ie=C&&!!y.anisotropyMap,we=Ce&&!!y.clearcoatMap,Pe=Ce&&!!y.clearcoatNormalMap,ve=Ce&&!!y.clearcoatRoughnessMap,ye=g&&!!y.iridescenceMap,De=g&&!!y.iridescenceThicknessMap,$e=O&&!!y.sheenColorMap,Ve=O&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,et=!!y.specularColorMap,nt=!!y.specularIntensityMap,ot=J&&!!y.transmissionMap,Y=J&&!!y.thicknessMap,Be=!!y.gradientMap,Me=!!y.alphaMap,ke=y.alphaTest>0,Ge=!!y.alphaHash,Te=!!y.extensions;let tt=Si;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(tt=n.toneMapping);const je={shaderID:xe,shaderType:y.type,shaderName:y.name,vertexShader:He,fragmentShader:qe,defines:y.defines,customVertexShaderID:Re,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:N,batchingColor:N&&te._colorsTexture!==null,instancing:me,instancingColor:me&&te.instanceColor!==null,instancingMorph:me&&te.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:b,matcap:U,envMap:I,envMapMode:I&&fe.mapping,envMapCubeUVHeight:ae,aoMap:z,lightMap:k,bumpMap:X,normalMap:ne,displacementMap:_e,emissiveMap:he,normalMapObjectSpace:ne&&y.normalMapType===e0,normalMapTangentSpace:ne&&y.normalMapType===gu,packedNormalMap:ne&&y.normalMapType===gu&&oE(y.normalMap.format),metalnessMap:ce,roughnessMap:Ae,anisotropy:C,anisotropyMap:ie,clearcoat:Ce,clearcoatMap:we,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ve,dispersion:Ne,retroreflection:T,iridescence:g,iridescenceMap:ye,iridescenceThicknessMap:De,sheen:O,sheenColorMap:$e,sheenRoughnessMap:Ve,specularMap:Oe,specularColorMap:et,specularIntensityMap:nt,transmission:J,transmissionMap:ot,thicknessMap:Y,gradientMap:Be,opaque:y.transparent===!1&&y.blending===ta&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:ke,alphaHash:Ge,combine:y.combine,mapUv:b&&_(y.map.channel),aoMapUv:z&&_(y.aoMap.channel),lightMapUv:k&&_(y.lightMap.channel),bumpMapUv:X&&_(y.bumpMap.channel),normalMapUv:ne&&_(y.normalMap.channel),displacementMapUv:_e&&_(y.displacementMap.channel),emissiveMapUv:he&&_(y.emissiveMap.channel),metalnessMapUv:ce&&_(y.metalnessMap.channel),roughnessMapUv:Ae&&_(y.roughnessMap.channel),anisotropyMapUv:ie&&_(y.anisotropyMap.channel),clearcoatMapUv:we&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(y.sheenRoughnessMap.channel),specularMapUv:Oe&&_(y.specularMap.channel),specularColorMapUv:et&&_(y.specularColorMap.channel),specularIntensityMapUv:nt&&_(y.specularIntensityMap.channel),transmissionMapUv:ot&&_(y.transmissionMap.channel),thicknessMapUv:Y&&_(y.thicknessMap.channel),alphaMapUv:Me&&_(y.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ne||C),vertexNormals:!!ee.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ee.attributes.uv&&(b||Me),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||ee.attributes.normal===void 0&&ne===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ie,skinning:te.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Z,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:b&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===Ct,decodeVideoTextureEmissive:he&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Te&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&y.extensions.multiDraw===!0||N)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(y){const D=[];if(y.shaderID?D.push(y.shaderID):(D.push(y.customVertexShaderID),D.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)D.push(B),D.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(p(D,y),w(D,y),D.push(n.outputColorSpace)),D.push(y.customProgramCacheKey),D.join()}function p(y,D){y.push(D.precision),y.push(D.outputColorSpace),y.push(D.envMapMode),y.push(D.envMapCubeUVHeight),y.push(D.mapUv),y.push(D.alphaMapUv),y.push(D.lightMapUv),y.push(D.aoMapUv),y.push(D.bumpMapUv),y.push(D.normalMapUv),y.push(D.displacementMapUv),y.push(D.emissiveMapUv),y.push(D.metalnessMapUv),y.push(D.roughnessMapUv),y.push(D.anisotropyMapUv),y.push(D.clearcoatMapUv),y.push(D.clearcoatNormalMapUv),y.push(D.clearcoatRoughnessMapUv),y.push(D.iridescenceMapUv),y.push(D.iridescenceThicknessMapUv),y.push(D.sheenColorMapUv),y.push(D.sheenRoughnessMapUv),y.push(D.specularMapUv),y.push(D.specularColorMapUv),y.push(D.specularIntensityMapUv),y.push(D.transmissionMapUv),y.push(D.thicknessMapUv),y.push(D.combine),y.push(D.fogExp2),y.push(D.sizeAttenuation),y.push(D.morphTargetsCount),y.push(D.morphAttributeCount),y.push(D.numSunLights),y.push(D.numDirLights),y.push(D.numPointLights),y.push(D.numSpotLights),y.push(D.numSpotLightMaps),y.push(D.numHemiLights),y.push(D.numRectAreaLights),y.push(D.numSunLightShadows),y.push(D.numDirLightShadows),y.push(D.numPointLightShadows),y.push(D.numSpotLightShadows),y.push(D.numSpotLightShadowsWithMaps),y.push(D.numLightProbes),y.push(D.shadowMapType),y.push(D.toneMapping),y.push(D.numClippingPlanes),y.push(D.numClipIntersection),y.push(D.depthPacking)}function w(y,D){a.disableAll(),D.instancing&&a.enable(0),D.instancingColor&&a.enable(1),D.instancingMorph&&a.enable(2),D.matcap&&a.enable(3),D.envMap&&a.enable(4),D.normalMapObjectSpace&&a.enable(5),D.normalMapTangentSpace&&a.enable(6),D.clearcoat&&a.enable(7),D.iridescence&&a.enable(8),D.alphaTest&&a.enable(9),D.vertexColors&&a.enable(10),D.vertexAlphas&&a.enable(11),D.vertexUv1s&&a.enable(12),D.vertexUv2s&&a.enable(13),D.vertexUv3s&&a.enable(14),D.vertexTangents&&a.enable(15),D.anisotropy&&a.enable(16),D.alphaHash&&a.enable(17),D.batching&&a.enable(18),D.dispersion&&a.enable(19),D.retroreflection&&a.enable(24),D.batchingColor&&a.enable(20),D.gradientMap&&a.enable(21),D.packedNormalMap&&a.enable(22),D.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reversedDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.decodeVideoTextureEmissive&&a.enable(20),D.alphaToCoverage&&a.enable(21),D.numLightProbeGrids>0&&a.enable(22),D.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function P(y){const D=d[y.type];let B;if(D){const G=pi[D];B=bx.clone(G.uniforms)}else B=y.uniforms;return B}function M(y,D){let B=u.get(D);return B!==void 0?++B.usedTimes:(B=new iE(n,D,y,r),c.push(B),u.set(D,B)),B}function A(y){if(--y.usedTimes===0){const D=c.indexOf(y);c[D]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){o.remove(y)}function F(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:P,acquireProgram:M,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:F}}function cE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function uE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function id(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,S,m,p){let w=n[e];return w===void 0?(w={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},n[e]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=_,w.materialVariant=a(h),w.groupOrder=S,w.renderOrder=h.renderOrder,w.z=m,w.group=p),e++,w}function l(h,d,_,S,m,p,w){w.reversedDepth===!0&&(m=-m);const P=o(h,d,_,S,m,p);_.transmission>0?i.push(P):_.transparent===!0?r.push(P):t.push(P)}function c(h,d,_,S,m,p){const w=o(h,d,_,S,m,p);_.transmission>0?i.unshift(w):_.transparent===!0?r.unshift(w):t.unshift(w)}function u(h,d){t.length>1&&t.sort(h||uE),i.length>1&&i.sort(d||id),r.length>1&&r.sort(d||id)}function f(){for(let h=e,d=n.length;h<d;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function hE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new rd,n.set(i,[a])):r>=s.length?(a=new rd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new St};break;case"SpotLight":t={position:new q,direction:new q,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function dE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pE=0;function mE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gE(n){const e=new fE,t=dE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Ot,a=new Ot;function o(c){let u=0,f=0,h=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let d=0,_=0,S=0,m=0,p=0,w=0,P=0,M=0,A=0,R=0,F=0,y=0,D=0,B=0;c.sort(mE);for(let te=0,le=c.length;te<le;te++){const V=c[te],ee=V.color,re=V.intensity,j=V.distance;let fe=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Hr?fe=V.shadow.map.texture:fe=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=ee.r*re,f+=ee.g*re,h+=ee.b*re;else if(V.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(V.sh.coefficients[ae],re);B++}else if(V.isSunLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const xe=V.shadow,W=t.get(V);W.shadowIntensity=xe.intensity,W.shadowBias=xe.bias,W.shadowNormalBias=xe.normalBias,W.shadowRadius=xe.radius,W.shadowMapSize.copy(xe.mapSize).multiply(xe.getFrameExtents()),i.sunShadow[_]=W,i.sunShadowMap[_]=fe;const ge=xe.getViewportCount();for(let Z=0;Z<ge;Z++)i.sunShadowMatrix[S+Z]=xe.getMatrix(Z),i.sunShadowCascade[S+Z]=xe._cascadeData[Z];S+=ge,_++}i.sun[d]=ae,d++}else if(V.isDirectionalLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const xe=V.shadow,W=t.get(V);W.shadowIntensity=xe.intensity,W.shadowBias=xe.bias,W.shadowNormalBias=xe.normalBias,W.shadowRadius=xe.radius,W.shadowMapSize=xe.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=fe,i.directionalShadowMatrix[m]=V.shadow.matrix,A++}i.directional[m]=ae,m++}else if(V.isSpotLight){const ae=e.get(V);ae.position.setFromMatrixPosition(V.matrixWorld),ae.color.copy(ee).multiplyScalar(re),ae.distance=j,ae.coneCos=Math.cos(V.angle),ae.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ae.decay=V.decay,i.spot[w]=ae;const xe=V.shadow;if(V.map&&(i.spotLightMap[y]=V.map,y++,xe.updateMatrices(V),V.castShadow&&D++),i.spotLightMatrix[w]=xe.matrix,V.castShadow){const W=t.get(V);W.shadowIntensity=xe.intensity,W.shadowBias=xe.bias,W.shadowNormalBias=xe.normalBias,W.shadowRadius=xe.radius,W.shadowMapSize=xe.mapSize,i.spotShadow[w]=W,i.spotShadowMap[w]=fe,F++}w++}else if(V.isRectAreaLight){const ae=e.get(V);ae.color.copy(ee).multiplyScalar(re),ae.halfWidth.set(V.width*.5,0,0),ae.halfHeight.set(0,V.height*.5,0),i.rectArea[P]=ae,P++}else if(V.isPointLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),ae.distance=V.distance,ae.decay=V.decay,V.castShadow){const xe=V.shadow,W=t.get(V);W.shadowIntensity=xe.intensity,W.shadowBias=xe.bias,W.shadowNormalBias=xe.normalBias,W.shadowRadius=xe.radius,W.shadowMapSize=xe.mapSize,W.shadowCameraNear=xe.camera.near,W.shadowCameraFar=xe.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=fe,i.pointShadowMatrix[p]=V.shadow.matrix,R++}i.point[p]=ae,p++}else if(V.isHemisphereLight){const ae=e.get(V);ae.skyColor.copy(V.color).multiplyScalar(re),ae.groundColor.copy(V.groundColor).multiplyScalar(re),i.hemi[M]=ae,M++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const G=i.hash;(G.sunLength!==d||G.directionalLength!==m||G.pointLength!==p||G.spotLength!==w||G.rectAreaLength!==P||G.hemiLength!==M||G.numSunShadows!==_||G.numDirectionalShadows!==A||G.numPointShadows!==R||G.numSpotShadows!==F||G.numSpotMaps!==y||G.numLightProbes!==B)&&(i.sun.length=d,i.directional.length=m,i.spot.length=w,i.rectArea.length=P,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+y-D,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,G.sunLength=d,G.directionalLength=m,G.pointLength=p,G.spotLength=w,G.rectAreaLength=P,G.hemiLength=M,G.numSunShadows=_,G.numDirectionalShadows=A,G.numPointShadows=R,G.numSpotShadows=F,G.numSpotMaps=y,G.numLightProbes=B,i.version=pE++)}function l(c,u){let f=0,h=0,d=0,_=0,S=0,m=0;const p=u.matrixWorldInverse;for(let w=0,P=c.length;w<P;w++){const M=c[w];if(M.isSunLight){const A=i.sun[f];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),h++}else if(M.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function sd(n){const e=new gE(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _E(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sd(n),e.set(r,[o])):s>=a.length?(o=new sd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SE=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],ME=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ad=new Ot,Hs=new q,vc=new q;function yE(n,e,t){let i=new ju;const r=new Ue,s=new Ue,a=new kt,o=new Rx,l=new Cx,c={},u=t.maxTextureSize,f={[Vr]:Dn,[Dn]:Vr,[jn]:jn},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:vE,fragmentShader:xE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new bn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let p=this.type;this.render=function(R,F,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Dv&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);const D=n.getRenderTarget(),B=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),te=n.state;te.setBlending($i),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const le=p!==this.type;le&&F.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(ee=>ee.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,ee=R.length;V<ee;V++){const re=R[V],j=re.shadow;if(j===void 0){st("WebGLShadowMap:",re,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const fe=j.getFrameExtents();r.multiply(fe),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,j.mapSize.y=s.y));const ae=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ae,j.map===null||le===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===$s){if(re.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ii(r.x,r.y,{format:Hr,type:Ei,minFilter:pn,magFilter:pn,generateMipmaps:!1}),j.map.texture.name=re.name+".shadowMap",j.map.depthTexture=new va(r.x,r.y,_i),j.map.depthTexture.name=re.name+".shadowMapDepth",j.map.depthTexture.format=Qi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=ln,j.map.depthTexture.magFilter=ln}else re.isPointLight?(j.map=new um(r.x),j.map.depthTexture=new V0(r.x,bi)):(j.map=new ii(r.x,r.y),j.map.depthTexture=new va(r.x,r.y,bi)),j.map.depthTexture.name=re.name+".shadowMap",j.map.depthTexture.format=Qi,this.type===bo?(j.map.depthTexture.compareFunction=ae?Zu:Ku,j.map.depthTexture.minFilter=pn,j.map.depthTexture.magFilter=pn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=ln,j.map.depthTexture.magFilter=ln);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const xe=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();re.isPointLight!==!0&&j.updateMatrices(re,y);for(let W=0;W<xe;W++){const ge=j.getCamera(W);if(re.isPointLight){const Z=j.camera,He=j.matrix,qe=re.distance||Z.far;qe!==Z.far&&(Z.far=qe,Z.updateProjectionMatrix()),Hs.setFromMatrixPosition(re.matrixWorld),Z.position.copy(Hs),vc.copy(Z.position),vc.add(SE[W]),Z.up.copy(ME[W]),Z.lookAt(vc),Z.updateMatrixWorld(),He.makeTranslation(-Hs.x,-Hs.y,-Hs.z),ad.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ad,Z.coordinateSystem,Z.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,W),n.clear();else{W===0&&(n.setRenderTarget(j.map),n.clear());const Z=j.getViewport(W);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),te.viewport(a)}i=j.getFrustum(W),M(F,y,ge,re,this.type)}j.isPointLightShadow!==!0&&this.type===$s&&w(j,y),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,B,G)};function w(R,F){const y=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new ii(r.x,r.y,{format:Hr,type:Ei}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(F,null,y,h,S,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(F,null,y,d,S,null)}function P(R,F,y,D){let B=null;const G=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)B=G;else if(B=y.isPointLight===!0?l:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const te=B.uuid,le=F.uuid;let V=c[te];V===void 0&&(V={},c[te]=V);let ee=V[le];ee===void 0&&(ee=B.clone(),V[le]=ee,F.addEventListener("dispose",A)),B=ee}if(B.visible=F.visible,B.wireframe=F.wireframe,D===$s?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:f[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,y.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const te=n.properties.get(B);te.light=y}return B}function M(R,F,y,D,B){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===$s)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);const le=e.update(R),V=R.material;if(Array.isArray(V)){const ee=le.groups;for(let re=0,j=ee.length;re<j;re++){const fe=ee[re],ae=V[fe.materialIndex];if(ae&&ae.visible){const xe=P(R,ae,D,B);R.onBeforeShadow(n,R,F,y,le,xe,fe),n.renderBufferDirect(y,null,le,xe,R,fe),R.onAfterShadow(n,R,F,y,le,xe,fe)}}}else if(V.visible){const ee=P(R,V,D,B);R.onBeforeShadow(n,R,F,y,le,ee,null),n.renderBufferDirect(y,null,le,ee,R,null),R.onAfterShadow(n,R,F,y,le,ee,null)}}const te=R.children;for(let le=0,V=te.length;le<V;le++)M(te[le],F,y,D,B)}function A(R){R.target.removeEventListener("dispose",A);for(const y in c){const D=c[y],B=R.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function bE(n,e){function t(){let Y=!1;const Be=new kt;let Me=null;const ke=new kt(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!Y&&(n.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){Y=Ge},setClear:function(Ge,Te,tt,je,Dt){Dt===!0&&(Ge*=je,Te*=je,tt*=je),Be.set(Ge,Te,tt,je),ke.equals(Be)===!1&&(n.clearColor(Ge,Te,tt,je),ke.copy(Be))},reset:function(){Y=!1,Me=null,ke.set(-1,0,0,0)}}}function i(){let Y=!1,Be=!1,Me=null,ke=null,Ge=null;return{setReversed:function(Te){if(Be!==Te){const tt=e.get("EXT_clip_control");Te?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Be=Te;const je=Ge;Ge=null,this.setClear(je)}},getReversed:function(){return Be},setTest:function(Te){Te?ue(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Te){Me!==Te&&!Y&&(n.depthMask(Te),Me=Te)},setFunc:function(Te){if(Be&&(Te=f0[Te]),ke!==Te){switch(Te){case Dc:n.depthFunc(n.NEVER);break;case Lc:n.depthFunc(n.ALWAYS);break;case Ic:n.depthFunc(n.LESS);break;case pa:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case Nc:n.depthFunc(n.GEQUAL);break;case Fc:n.depthFunc(n.GREATER);break;case Oc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ke=Te}},setLocked:function(Te){Y=Te},setClear:function(Te){Ge!==Te&&(Ge=Te,Be&&(Te=1-Te),n.clearDepth(Te))},reset:function(){Y=!1,Me=null,ke=null,Ge=null,Be=!1}}}function r(){let Y=!1,Be=null,Me=null,ke=null,Ge=null,Te=null,tt=null,je=null,Dt=null;return{setTest:function(_t){Y||(_t?ue(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(_t){Be!==_t&&!Y&&(n.stencilMask(_t),Be=_t)},setFunc:function(_t,_n,Bn){(Me!==_t||ke!==_n||Ge!==Bn)&&(n.stencilFunc(_t,_n,Bn),Me=_t,ke=_n,Ge=Bn)},setOp:function(_t,_n,Bn){(Te!==_t||tt!==_n||je!==Bn)&&(n.stencilOp(_t,_n,Bn),Te=_t,tt=_n,je=Bn)},setLocked:function(_t){Y=_t},setClear:function(_t){Dt!==_t&&(n.clearStencil(_t),Dt=_t)},reset:function(){Y=!1,Be=null,Me=null,ke=null,Ge=null,Te=null,tt=null,je=null,Dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],S=null,m=!1,p=null,w=null,P=null,M=null,A=null,R=null,F=null,y=new St(0,0,0),D=0,B=!1,G=null,te=null,le=null,V=null,ee=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,fe=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(ae)[1]),j=fe>=1):ae.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),j=fe>=2);let xe=null,W={};const ge=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),He=new kt().fromArray(ge),qe=new kt().fromArray(Z);function Re(Y,Be,Me,ke){const Ge=new Uint8Array(4),Te=n.createTexture();n.bindTexture(Y,Te),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<Me;tt++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Be,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Ge):n.texImage2D(Be+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ge);return Te}const pe={};pe[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(pa),X(!1),ne(Jh),ue(n.CULL_FACE),z($i);function ue(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function Ie(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function me(Y,Be){return h[Y]!==Be?(n.bindFramebuffer(Y,Be),h[Y]=Be,Y===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Be),Y===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Be),!0):!1}function N(Y,Be){let Me=_,ke=!1;if(Y){Me=d.get(Be),Me===void 0&&(Me=[],d.set(Be,Me));const Ge=Y.textures;if(Me.length!==Ge.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,tt=Ge.length;Te<tt;Te++)Me[Te]=n.COLOR_ATTACHMENT0+Te;Me.length=Ge.length,ke=!0}}else Me[0]!==n.BACK&&(Me[0]=n.BACK,ke=!0);ke&&n.drawBuffers(Me)}function b(Y){return S!==Y?(n.useProgram(Y),S=Y,!0):!1}const U={[os]:n.FUNC_ADD,[Iv]:n.FUNC_SUBTRACT,[Uv]:n.FUNC_REVERSE_SUBTRACT};U[Nv]=n.MIN,U[Fv]=n.MAX;const I={[Ov]:n.ZERO,[Bv]:n.ONE,[zv]:n.SRC_COLOR,[Tp]:n.SRC_ALPHA,[Xv]:n.SRC_ALPHA_SATURATE,[Gv]:n.DST_COLOR,[kv]:n.DST_ALPHA,[Vv]:n.ONE_MINUS_SRC_COLOR,[wp]:n.ONE_MINUS_SRC_ALPHA,[Wv]:n.ONE_MINUS_DST_COLOR,[Hv]:n.ONE_MINUS_DST_ALPHA,[$v]:n.CONSTANT_COLOR,[qv]:n.ONE_MINUS_CONSTANT_COLOR,[Yv]:n.CONSTANT_ALPHA,[Kv]:n.ONE_MINUS_CONSTANT_ALPHA};function z(Y,Be,Me,ke,Ge,Te,tt,je,Dt,_t){if(Y===$i){m===!0&&(Ie(n.BLEND),m=!1);return}if(m===!1&&(ue(n.BLEND),m=!0),Y!==Lv){if(Y!==p||_t!==B){if((w!==os||A!==os)&&(n.blendEquation(n.FUNC_ADD),w=os,A=os),_t)switch(Y){case ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFunc(n.ONE,n.ONE);break;case jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ef:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jh:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ef:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",Y);break}P=null,M=null,R=null,F=null,y.set(0,0,0),D=0,p=Y,B=_t}return}Ge=Ge||Be,Te=Te||Me,tt=tt||ke,(Be!==w||Ge!==A)&&(n.blendEquationSeparate(U[Be],U[Ge]),w=Be,A=Ge),(Me!==P||ke!==M||Te!==R||tt!==F)&&(n.blendFuncSeparate(I[Me],I[ke],I[Te],I[tt]),P=Me,M=ke,R=Te,F=tt),(je.equals(y)===!1||Dt!==D)&&(n.blendColor(je.r,je.g,je.b,Dt),y.copy(je),D=Dt),p=Y,B=!1}function k(Y,Be){Y.side===jn?Ie(n.CULL_FACE):ue(n.CULL_FACE);let Me=Y.side===Dn;Be&&(Me=!Me),X(Me),Y.blending===ta&&Y.transparent===!1?z($i):z(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),s.setMask(Y.colorWrite);const ke=Y.stencilWrite;o.setTest(ke),ke&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),he(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(Y){G!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),G=Y)}function ne(Y){Y!==Cv?(ue(n.CULL_FACE),Y!==te&&(Y===Jh?n.cullFace(n.BACK):Y===Pv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),te=Y}function _e(Y){Y!==le&&(j&&n.lineWidth(Y),le=Y)}function he(Y,Be,Me){Y?(ue(n.POLYGON_OFFSET_FILL),(V!==Be||ee!==Me)&&(V=Be,ee=Me,a.getReversed()&&(Be=-Be),n.polygonOffset(Be,Me))):Ie(n.POLYGON_OFFSET_FILL)}function ce(Y){Y?ue(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Ae(Y){Y===void 0&&(Y=n.TEXTURE0+re-1),xe!==Y&&(n.activeTexture(Y),xe=Y)}function C(Y,Be,Me){Me===void 0&&(xe===null?Me=n.TEXTURE0+re-1:Me=xe);let ke=W[Me];ke===void 0&&(ke={type:void 0,texture:void 0},W[Me]=ke),(ke.type!==Y||ke.texture!==Be)&&(xe!==Me&&(n.activeTexture(Me),xe=Me),n.bindTexture(Y,Be||pe[Y]),ke.type=Y,ke.texture=Be)}function Ce(){const Y=W[xe];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ne(){try{n.compressedTexImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function g(){try{n.texSubImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function O(){try{n.texSubImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function we(){try{n.texStorage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function Pe(){try{n.texStorage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function ve(){try{n.texImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function ye(){try{n.texImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function De(Y){return f[Y]!==void 0?f[Y]:n.getParameter(Y)}function $e(Y,Be){f[Y]!==Be&&(n.pixelStorei(Y,Be),f[Y]=Be)}function Ve(Y){He.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),He.copy(Y))}function Oe(Y){qe.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),qe.copy(Y))}function et(Y,Be){let Me=c.get(Be);Me===void 0&&(Me=new WeakMap,c.set(Be,Me));let ke=Me.get(Y);ke===void 0&&(ke=n.getUniformBlockIndex(Be,Y.name),Me.set(Y,ke))}function nt(Y,Be){const ke=c.get(Be).get(Y);l.get(Be)!==ke&&(n.uniformBlockBinding(Be,ke,Y.__bindingPointIndex),l.set(Be,ke))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},xe=null,W={},h={},d=new WeakMap,_=[],S=null,m=!1,p=null,w=null,P=null,M=null,A=null,R=null,F=null,y=new St(0,0,0),D=0,B=!1,G=null,te=null,le=null,V=null,ee=null,He.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Ie,bindFramebuffer:me,drawBuffers:N,useProgram:b,setBlending:z,setMaterial:k,setFlipSided:X,setCullFace:ne,setLineWidth:_e,setPolygonOffset:he,setScissorTest:ce,activeTexture:Ae,bindTexture:C,unbindTexture:Ce,compressedTexImage2D:Ne,compressedTexImage3D:T,texImage2D:ve,texImage3D:ye,pixelStorei:$e,getParameter:De,updateUBOMapping:et,uniformBlockBinding:nt,texStorage2D:we,texStorage3D:Pe,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:J,compressedTexSubImage3D:ie,scissor:Ve,viewport:Oe,reset:ot}}function EE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,g){return _?new OffscreenCanvas(T,g):qo("canvas")}function m(T,g,O){let J=1;const ie=Ne(T);if((ie.width>O||ie.height>O)&&(J=O/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const we=Math.floor(J*ie.width),Pe=Math.floor(J*ie.height);h===void 0&&(h=S(we,Pe));const ve=g?S(we,Pe):h;return ve.width=we,ve.height=Pe,ve.getContext("2d").drawImage(T,0,0,we,Pe),st("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+we+"x"+Pe+")."),ve}else return"data"in T&&st("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function p(T){return T.generateMipmaps}function w(T){n.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,g,O,J,ie,we=!1){if(T!==null){if(n[T]!==void 0)return n[T];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Pe;J&&(Pe=e.get("EXT_texture_norm16"),Pe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=g;if(g===n.RED&&(O===n.FLOAT&&(ve=n.R32F),O===n.HALF_FLOAT&&(ve=n.R16F),O===n.UNSIGNED_BYTE&&(ve=n.R8),O===n.UNSIGNED_SHORT&&Pe&&(ve=Pe.R16_EXT),O===n.SHORT&&Pe&&(ve=Pe.R16_SNORM_EXT)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(ve=n.R8UI),O===n.UNSIGNED_SHORT&&(ve=n.R16UI),O===n.UNSIGNED_INT&&(ve=n.R32UI),O===n.BYTE&&(ve=n.R8I),O===n.SHORT&&(ve=n.R16I),O===n.INT&&(ve=n.R32I)),g===n.RG&&(O===n.FLOAT&&(ve=n.RG32F),O===n.HALF_FLOAT&&(ve=n.RG16F),O===n.UNSIGNED_BYTE&&(ve=n.RG8),O===n.UNSIGNED_SHORT&&Pe&&(ve=Pe.RG16_EXT),O===n.SHORT&&Pe&&(ve=Pe.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(ve=n.RG8UI),O===n.UNSIGNED_SHORT&&(ve=n.RG16UI),O===n.UNSIGNED_INT&&(ve=n.RG32UI),O===n.BYTE&&(ve=n.RG8I),O===n.SHORT&&(ve=n.RG16I),O===n.INT&&(ve=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(ve=n.RGB8UI),O===n.UNSIGNED_SHORT&&(ve=n.RGB16UI),O===n.UNSIGNED_INT&&(ve=n.RGB32UI),O===n.BYTE&&(ve=n.RGB8I),O===n.SHORT&&(ve=n.RGB16I),O===n.INT&&(ve=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(ve=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(ve=n.RGBA16UI),O===n.UNSIGNED_INT&&(ve=n.RGBA32UI),O===n.BYTE&&(ve=n.RGBA8I),O===n.SHORT&&(ve=n.RGBA16I),O===n.INT&&(ve=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_SHORT&&Pe&&(ve=Pe.RGB16_EXT),O===n.SHORT&&Pe&&(ve=Pe.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(ve=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(ve=n.R11F_G11F_B10F)),g===n.RGBA){const ye=we?$o:xt.getTransfer(ie);O===n.FLOAT&&(ve=n.RGBA32F),O===n.HALF_FLOAT&&(ve=n.RGBA16F),O===n.UNSIGNED_BYTE&&(ve=ye===Ct?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&Pe&&(ve=Pe.RGBA16_EXT),O===n.SHORT&&Pe&&(ve=Pe.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(ve=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(ve=n.RGB5_A1)}return(ve===n.R16F||ve===n.R32F||ve===n.RG16F||ve===n.RG32F||ve===n.RGBA16F||ve===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function A(T,g){let O;return T?g===null||g===bi||g===ga?O=n.DEPTH24_STENCIL8:g===_i?O=n.DEPTH32F_STENCIL8:g===ma&&(O=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bi||g===ga?O=n.DEPTH_COMPONENT24:g===_i?O=n.DEPTH_COMPONENT32F:g===ma&&(O=n.DEPTH_COMPONENT16),O}function R(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==pn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function F(T){const g=T.target;g.removeEventListener("dispose",F),D(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function y(T){const g=T.target;g.removeEventListener("dispose",y),G(g)}function D(T){const g=i.get(T);if(g.__webglInit===void 0)return;const O=T.source,J=d.get(O);if(J){const ie=J[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(T),Object.keys(J).length===0&&d.delete(O)}i.remove(T)}function B(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const O=T.source,J=d.get(O);delete J[g.__cacheKey],a.memory.textures--}function G(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let ie=0;ie<g.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let J=0,ie=O.length;J<ie;J++){const we=i.get(O[J]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(O[J])}i.remove(T)}let te=0;function le(){te=0}function V(){return te}function ee(T){te=T}function re(){const T=te;return T>=r.maxTextures&&st("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),te+=1,T}function j(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function fe(T,g){const O=i.get(T);if(T.isVideoTexture&&C(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const J=T.image;if(J===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function ae(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ie(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function xe(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ie(O,T,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function W(T,g){const O=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){me(O,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const ge={[Bc]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},Z={[ln]:n.NEAREST,[Qv]:n.NEAREST_MIPMAP_NEAREST,[ka]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[Ur]:n.LINEAR_MIPMAP_LINEAR},He={[n0]:n.NEVER,[o0]:n.ALWAYS,[i0]:n.LESS,[Ku]:n.LEQUAL,[r0]:n.EQUAL,[Zu]:n.GEQUAL,[s0]:n.GREATER,[a0]:n.NOTEQUAL};function qe(T,g){if(g.type===_i&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===pn||g.magFilter===Bl||g.magFilter===ka||g.magFilter===Ur||g.minFilter===pn||g.minFilter===Bl||g.minFilter===ka||g.minFilter===Ur)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ge[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Z[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Z[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,He[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ln||g.minFilter!==ka&&g.minFilter!==Ur||g.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Re(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",F));const J=g.source;let ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));const we=j(g);if(we!==T.__cacheKey){ie[we]===void 0&&(ie[we]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ie[we].usedTimes++;const Pe=ie[T.__cacheKey];Pe!==void 0&&(ie[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&B(g)),T.__cacheKey=we,T.__webglTexture=ie[we].texture}return O}function pe(T,g,O){return Math.floor(Math.floor(T/O)/g)}function ue(T,g,O,J){const we=T.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,J,g.data);else{we.sort(($e,Ve)=>$e.start-Ve.start);let Pe=0;for(let $e=1;$e<we.length;$e++){const Ve=we[Pe],Oe=we[$e],et=Ve.start+Ve.count,nt=pe(Oe.start,g.width,4),ot=pe(Ve.start,g.width,4);Oe.start<=et+1&&nt===ot&&pe(Oe.start+Oe.count-1,g.width,4)===nt?Ve.count=Math.max(Ve.count,Oe.start+Oe.count-Ve.start):(++Pe,we[Pe]=Oe)}we.length=Pe+1;const ve=t.getParameter(n.UNPACK_ROW_LENGTH),ye=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let $e=0,Ve=we.length;$e<Ve;$e++){const Oe=we[$e],et=Math.floor(Oe.start/4),nt=Math.ceil(Oe.count/4),ot=et%g.width,Y=Math.floor(et/g.width),Be=nt,Me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(n.TEXTURE_2D,0,ot,Y,Be,Me,O,J,g.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ve),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Ie(T,g,O){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const ie=Re(T,g),we=g.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+O);const Pe=i.get(we);if(we.version!==Pe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Me=xt.getPrimaries(xt.workingColorSpace),ke=g.colorSpace===cr?null:xt.getPrimaries(g.colorSpace),Ge=g.colorSpace===cr||Me===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let ye=m(g.image,!1,r.maxTextureSize);ye=Ce(g,ye);const De=s.convert(g.format,g.colorSpace),$e=s.convert(g.type);let Ve=M(g.internalFormat,De,$e,g.normalized,g.colorSpace,g.isVideoTexture);qe(J,g);let Oe;const et=g.mipmaps,nt=g.isVideoTexture!==!0,ot=Pe.__version===void 0||ie===!0,Y=we.dataReady,Be=R(g,ye);if(g.isDepthTexture)Ve=A(g.format===Nr,g.type),ot&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Ve,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ye.width,ye.height,0,De,$e,null));else if(g.isDataTexture)if(et.length>0){nt&&ot&&t.texStorage2D(n.TEXTURE_2D,Be,Ve,et[0].width,et[0].height);for(let Me=0,ke=et.length;Me<ke;Me++)Oe=et[Me],nt?Y&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,De,$e,Oe.data):t.texImage2D(n.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,De,$e,Oe.data);g.generateMipmaps=!1}else nt?(ot&&t.texStorage2D(n.TEXTURE_2D,Be,Ve,ye.width,ye.height),Y&&ue(g,ye,De,$e)):t.texImage2D(n.TEXTURE_2D,0,Ve,ye.width,ye.height,0,De,$e,ye.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){nt&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Ve,et[0].width,et[0].height,ye.depth);for(let Me=0,ke=et.length;Me<ke;Me++)if(Oe=et[Me],g.format!==ei)if(De!==null)if(nt){if(Y)if(g.layerUpdates.size>0){const Ge=Bf(Oe.width,Oe.height,g.format,g.type);for(const Te of g.layerUpdates){const tt=Oe.data.subarray(Te*Ge/Oe.data.BYTES_PER_ELEMENT,(Te+1)*Ge/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,Te,Oe.width,Oe.height,1,De,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,ye.depth,De,Oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,ye.depth,De,$e,Oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,ye.depth,0,De,$e,Oe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{nt&&ot&&t.texStorage2D(n.TEXTURE_2D,Be,Ve,et[0].width,et[0].height);for(let Me=0,ke=et.length;Me<ke;Me++)Oe=et[Me],g.format!==ei?De!==null?nt?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,De,Oe.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Oe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Y&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,De,$e,Oe.data):t.texImage2D(n.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,De,$e,Oe.data)}else if(g.isDataArrayTexture)if(nt){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Ve,ye.width,ye.height,ye.depth),Y)if(g.layerUpdates.size>0){const Me=Bf(ye.width,ye.height,g.format,g.type);for(const ke of g.layerUpdates){const Ge=ye.data.subarray(ke*Me/ye.data.BYTES_PER_ELEMENT,(ke+1)*Me/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,ye.width,ye.height,1,De,$e,Ge)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,De,$e,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,De,$e,ye.data);else if(g.isData3DTexture)nt?(ot&&t.texStorage3D(n.TEXTURE_3D,Be,Ve,ye.width,ye.height,ye.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,De,$e,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,De,$e,ye.data);else if(g.isFramebufferTexture){if(ot)if(nt)t.texStorage2D(n.TEXTURE_2D,Be,Ve,ye.width,ye.height);else{let Me=ye.width,ke=ye.height;for(let Ge=0;Ge<Be;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Ve,Me,ke,0,De,$e,null),Me>>=1,ke>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const Me=n.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ye.parentNode!==Me){Me.appendChild(ye),f.add(g),Me.onpaint=ke=>{const Ge=ke.changedElements;for(const Te of f)Ge.includes(Te.image)&&(Te.needsUpdate=!0)},Me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ye);else{const Ge=n.RGBA,Te=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ge,Te,tt,ye)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(et.length>0){if(nt&&ot){const Me=Ne(et[0]);t.texStorage2D(n.TEXTURE_2D,Be,Ve,Me.width,Me.height)}for(let Me=0,ke=et.length;Me<ke;Me++)Oe=et[Me],nt?Y&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,De,$e,Oe):t.texImage2D(n.TEXTURE_2D,Me,Ve,De,$e,Oe);g.generateMipmaps=!1}else if(nt){if(ot){const Me=Ne(ye);t.texStorage2D(n.TEXTURE_2D,Be,Ve,Me.width,Me.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,$e,ye)}else t.texImage2D(n.TEXTURE_2D,0,Ve,De,$e,ye);p(g)&&w(J),Pe.__version=we.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function me(T,g,O){if(g.image.length!==6)return;const J=Re(T,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const we=i.get(ie);if(ie.version!==we.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const Pe=xt.getPrimaries(xt.workingColorSpace),ve=g.colorSpace===cr?null:xt.getPrimaries(g.colorSpace),ye=g.colorSpace===cr||Pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,$e=g.image[0]&&g.image[0].isDataTexture,Ve=[];for(let Te=0;Te<6;Te++)!De&&!$e?Ve[Te]=m(g.image[Te],!0,r.maxCubemapSize):Ve[Te]=$e?g.image[Te].image:g.image[Te],Ve[Te]=Ce(g,Ve[Te]);const Oe=Ve[0],et=s.convert(g.format,g.colorSpace),nt=s.convert(g.type),ot=M(g.internalFormat,et,nt,g.normalized,g.colorSpace),Y=g.isVideoTexture!==!0,Be=we.__version===void 0||J===!0,Me=ie.dataReady;let ke=R(g,Oe);qe(n.TEXTURE_CUBE_MAP,g);let Ge;if(De){Y&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ot,Oe.width,Oe.height);for(let Te=0;Te<6;Te++){Ge=Ve[Te].mipmaps;for(let tt=0;tt<Ge.length;tt++){const je=Ge[tt];g.format!==ei?et!==null?Y?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt,0,0,je.width,je.height,et,je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt,ot,je.width,je.height,0,je.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt,0,0,je.width,je.height,et,nt,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt,ot,je.width,je.height,0,et,nt,je.data)}}}else{if(Ge=g.mipmaps,Y&&Be){Ge.length>0&&ke++;const Te=Ne(Ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ot,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if($e){Y?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ve[Te].width,Ve[Te].height,et,nt,Ve[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ot,Ve[Te].width,Ve[Te].height,0,et,nt,Ve[Te].data);for(let tt=0;tt<Ge.length;tt++){const Dt=Ge[tt].image[Te].image;Y?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt+1,0,0,Dt.width,Dt.height,et,nt,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt+1,ot,Dt.width,Dt.height,0,et,nt,Dt.data)}}else{Y?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,et,nt,Ve[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ot,et,nt,Ve[Te]);for(let tt=0;tt<Ge.length;tt++){const je=Ge[tt];Y?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt+1,0,0,et,nt,je.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,tt+1,ot,et,nt,je.image[Te])}}}p(g)&&w(n.TEXTURE_CUBE_MAP),we.__version=ie.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function N(T,g,O,J,ie,we){const Pe=s.convert(O.format,O.colorSpace),ve=s.convert(O.type),ye=M(O.internalFormat,Pe,ve,O.normalized,O.colorSpace),De=i.get(g),$e=i.get(O);if($e.__renderTarget=g,!De.__hasExternalTextures){const Ve=Math.max(1,g.width>>we),Oe=Math.max(1,g.height>>we);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,we,ye,Ve,Oe,g.depth,0,Pe,ve,null):t.texImage2D(ie,we,ye,Ve,Oe,0,Pe,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ae(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,$e.__webglTexture,0,ce(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,$e.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function b(T,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const J=g.depthTexture,ie=J&&J.isDepthTexture?J.type:null,we=A(g.stencilBuffer,ie),Pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(g),we,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(g),we,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,we,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,T)}else{const J=g.textures;for(let ie=0;ie<J.length;ie++){const we=J[ie],Pe=s.convert(we.format,we.colorSpace),ve=s.convert(we.type),ye=M(we.internalFormat,Pe,ve,we.normalized,we.colorSpace);Ae(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(g),ye,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(g),ye,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ye,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(T,g,O){const J=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",F)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),qe(n.TEXTURE_CUBE_MAP,g.depthTexture);const De=s.convert(g.depthTexture.format),$e=s.convert(g.depthTexture.type);let Ve;g.depthTexture.format===Qi?Ve=n.DEPTH_COMPONENT24:g.depthTexture.format===Nr&&(Ve=n.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ve,g.width,g.height,0,De,$e,null)}}else fe(g.depthTexture,0);const we=ie.__webglTexture,Pe=ce(g),ve=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,ye=g.depthTexture.format===Nr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Qi)Ae(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,ve,we,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,ye,ve,we,0);else if(g.depthTexture.format===Nr)Ae(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,ve,we,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,ye,ve,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function I(T){const g=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=J}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)U(g.__webglFramebuffer[J],T,J);else{const J=T.texture.mipmaps;J&&J.length>0?U(g.__webglFramebuffer[0],T,0):U(g.__webglFramebuffer,T,0)}else if(O){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),b(g.__webglDepthbuffer[J],T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,we)}}else{const J=T.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),b(g.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(T,g,O){const J=i.get(T);g!==void 0&&N(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&I(T)}function k(T){const g=T.texture,O=i.get(T),J=i.get(g);T.addEventListener("dispose",y);const ie=T.textures,we=T.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,a.memory.textures++),we){O.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[ve]=[];for(let ye=0;ye<g.mipmaps.length;ye++)O.__webglFramebuffer[ve][ye]=n.createFramebuffer()}else O.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let ve=0;ve<g.mipmaps.length;ve++)O.__webglFramebuffer[ve]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ve=0,ye=ie.length;ve<ye;ve++){const De=i.get(ie[ve]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ae(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ve=0;ve<ie.length;ve++){const ye=ie[ve];O.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ve]);const De=s.convert(ye.format,ye.colorSpace),$e=s.convert(ye.type),Ve=M(ye.internalFormat,De,$e,ye.normalized,ye.colorSpace,T.isXRRenderTarget===!0),Oe=ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,O.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),b(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),qe(n.TEXTURE_CUBE_MAP,g);for(let ve=0;ve<6;ve++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)N(O.__webglFramebuffer[ve][ye],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ye);else N(O.__webglFramebuffer[ve],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(g)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ve=0,ye=ie.length;ve<ye;ve++){const De=ie[ve],$e=i.get(De);let Ve=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ve,$e.__webglTexture),qe(Ve,De),N(O.__webglFramebuffer,T,De,n.COLOR_ATTACHMENT0+ve,Ve,0),p(De)&&w(Ve)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,J.__webglTexture),qe(ve,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)N(O.__webglFramebuffer[ye],T,g,n.COLOR_ATTACHMENT0,ve,ye);else N(O.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,ve,0);p(g)&&w(ve),t.unbindTexture()}T.depthBuffer&&I(T)}function X(T){const g=T.textures;for(let O=0,J=g.length;O<J;O++){const ie=g[O];if(p(ie)){const we=P(T),Pe=i.get(ie).__webglTexture;t.bindTexture(we,Pe),w(we),t.unbindTexture()}}}const ne=[],_e=[];function he(T){if(T.samples>0){if(Ae(T)===!1){const g=T.textures,O=T.width,J=T.height;let ie=n.COLOR_BUFFER_BIT;const we=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(T),ve=g.length>1;if(ve)for(let De=0;De<g.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let De=0;De<g.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const $e=i.get(g[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,ie,n.NEAREST),l===!0&&(ne.length=0,_e.length=0,ne.push(n.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ne.push(we),_e.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let De=0;De<g.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const $e=i.get(g[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ce(T){return Math.min(r.maxSamples,T.samples)}function Ae(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function C(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Ce(T,g){const O=T.colorSpace,J=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Xo&&O!==cr&&(xt.getTransfer(O)===Ct?(J!==ei||ie!==Fn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",O)),g}function Ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=le,this.getTextureUnits=V,this.setTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=xe,this.setTextureCube=W,this.rebindTextures=z,this.setupRenderTarget=k,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function TE(n,e){function t(i,r=cr){let s;const a=xt.getTransfer(r);if(i===Fn)return n.UNSIGNED_BYTE;if(i===Wu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fp)return n.BYTE;if(i===Op)return n.SHORT;if(i===ma)return n.UNSIGNED_SHORT;if(i===Gu)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===Ei)return n.HALF_FLOAT;if(i===Vp)return n.ALPHA;if(i===kp)return n.RGB;if(i===ei)return n.RGBA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===Nr)return n.DEPTH_STENCIL;if(i===Hp)return n.RED;if(i===$u)return n.RED_INTEGER;if(i===Hr)return n.RG;if(i===qu)return n.RG_INTEGER;if(i===Yu)return n.RGBA_INTEGER;if(i===Eo||i===To||i===wo||i===Ao)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vc||i===kc||i===Hc||i===Gc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wc||i===Xc||i===$c||i===qc||i===Yc||i===Go||i===Kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wc||i===Xc)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$c)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qc)return s.COMPRESSED_R11_EAC;if(i===Yc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return s.COMPRESSED_RG11_EAC;if(i===Kc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zc||i===Jc||i===Qc||i===jc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===lu||i===cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===iu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ru)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===su)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===au)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ou)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uu||i===hu||i===fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uu)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===du||i===pu||i===Wo||i===mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===du)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ga?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:wE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CE extends gr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const S=typeof XRWebGLBinding<"u",m=new RE,p={},w=t.getContextAttributes();let P=null,M=null;const A=[],R=[],F=new Ue;let y=null,D=null;const B=new Qn;B.viewport=new kt;const G=new Qn;G.viewport=new kt;const te=[B,G],le=new Nx;let V=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let ue=A[pe];return ue===void 0&&(ue=new $l,A[pe]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(pe){let ue=A[pe];return ue===void 0&&(ue=new $l,A[pe]=ue),ue.getGripSpace()},this.getHand=function(pe){let ue=A[pe];return ue===void 0&&(ue=new $l,A[pe]=ue),ue.getHandSpace()};function re(pe){const ue=R.indexOf(pe.inputSource);if(ue===-1)return;const Ie=A[ue];Ie!==void 0&&(Ie.update(pe.inputSource,pe.frame,c||a),Ie.dispatchEvent({type:pe.type,data:pe.inputSource}))}function j(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",fe);for(let pe=0;pe<A.length;pe++){const ue=R[pe];ue!==null&&(R[pe]=null,A[pe].disconnect(ue))}V=null,ee=null,m.reset();for(const pe in p)delete p[pe];if(e.setRenderTarget(P),d=null,h=null,f=null,r=null,M=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(F.width,F.height,!1),D!==null){const pe=D.camera;pe.fov=D.fov,pe.zoom=D.zoom,pe.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){s=pe,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){o=pe,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(pe){c=pe},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",j),r.addEventListener("inputsourceschange",fe),w.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(F),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,me=null,N=null;w.depth&&(N=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=w.stencil?Nr:Qi,me=w.stencil?ga:bi);const b={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(b),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ii(h.textureWidth,h.textureHeight,{format:ei,type:Fn,depthTexture:new va(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Ie={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ii(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function fe(pe){for(let ue=0;ue<pe.removed.length;ue++){const Ie=pe.removed[ue],me=R.indexOf(Ie);me>=0&&(R[me]=null,A[me].disconnect(Ie))}for(let ue=0;ue<pe.added.length;ue++){const Ie=pe.added[ue];let me=R.indexOf(Ie);if(me===-1){for(let b=0;b<A.length;b++)if(b>=R.length){R.push(Ie),me=b;break}else if(R[b]===null){R[b]=Ie,me=b;break}if(me===-1)break}const N=A[me];N&&N.connect(Ie)}}const ae=new q,xe=new q;function W(pe,ue,Ie){ae.setFromMatrixPosition(ue.matrixWorld),xe.setFromMatrixPosition(Ie.matrixWorld);const me=ae.distanceTo(xe),N=ue.projectionMatrix.elements,b=Ie.projectionMatrix.elements,U=N[14]/(N[10]-1),I=N[14]/(N[10]+1),z=(N[9]+1)/N[5],k=(N[9]-1)/N[5],X=(N[8]-1)/N[0],ne=(b[8]+1)/b[0],_e=U*X,he=U*ne,ce=me/(-X+ne),Ae=ce*-X;if(ue.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(Ae),pe.translateZ(ce),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),N[10]===-1)pe.projectionMatrix.copy(ue.projectionMatrix),pe.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const C=U+ce,Ce=I+ce,Ne=_e-Ae,T=he+(me-Ae),g=z*I/Ce*C,O=k*I/Ce*C;pe.projectionMatrix.makePerspective(Ne,T,g,O,C,Ce),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function ge(pe,ue){ue===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(ue.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let ue=pe.near,Ie=pe.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),le.near=G.near=B.near=ue,le.far=G.far=B.far=Ie,(V!==le.near||ee!==le.far)&&(r.updateRenderState({depthNear:le.near,depthFar:le.far}),V=le.near,ee=le.far),le.layers.mask=pe.layers.mask|6,B.layers.mask=le.layers.mask&-5,G.layers.mask=le.layers.mask&-3;const me=pe.parent,N=le.cameras;ge(le,me);for(let b=0;b<N.length;b++)ge(N[b],me);N.length===2?W(le,B,G):le.projectionMatrix.copy(B.projectionMatrix),D===null&&pe.isPerspectiveCamera&&(D={camera:pe,fov:pe.fov,zoom:pe.zoom}),Z(pe,le,me)};function Z(pe,ue,Ie){Ie===null?pe.matrix.copy(ue.matrixWorld):(pe.matrix.copy(Ie.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(ue.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(ue.projectionMatrix),pe.projectionMatrixInverse.copy(ue.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=_u*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return le},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(pe){l=pe,h!==null&&(h.fixedFoveation=pe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=pe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(le)},this.getCameraTexture=function(pe){return p[pe]};let He=null;function qe(pe,ue){if(u=ue.getViewerPose(c||a),_=ue,u!==null){const Ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let me=!1;Ie.length!==le.cameras.length&&(le.cameras.length=0,me=!0);for(let I=0;I<Ie.length;I++){const z=Ie[I];let k=null;if(d!==null)k=d.getViewport(z);else{const ne=f.getViewSubImage(h,z);k=ne.viewport,I===0&&(e.setRenderTargetTextures(M,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(M))}let X=te[I];X===void 0&&(X=new Qn,X.layers.enable(I),X.viewport=new kt,te[I]=X),X.matrix.fromArray(z.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(z.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(k.x,k.y,k.width,k.height),I===0&&(le.matrix.copy(X.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale)),me===!0&&le.cameras.push(X)}const N=r.enabledFeatures;if(N&&N.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const I=f.getDepthInformation(Ie[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(N&&N.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<Ie.length;I++){const z=Ie[I].camera;if(z){let k=p[z];k||(k=new Kp,p[z]=k);const X=f.getCameraImage(z);k.sourceTexture=X}}}}for(let Ie=0;Ie<A.length;Ie++){const me=R[Ie],N=A[Ie];me!==null&&N!==void 0&&N.update(me,ue,c||a)}He&&He(pe,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Re=new lm;Re.setAnimationLoop(qe),this.setAnimationLoop=function(pe){He=pe},this.dispose=function(){}}}const PE=new Ot,mm=new lt;mm.set(-1,0,0,0,1,0,0,0,1);function DE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,P,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),P=w.envMap,M=w.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(PE.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const R=A.program;i.uniformBlockBinding(M,R)}function c(M,A){let R=r[M.id];R===void 0&&(m(M),R=u(M),r[M.id]=R,M.addEventListener("dispose",w));const F=A.program;i.updateUBOMapping(M,F);const y=e.render.frame;s[M.id]!==y&&(h(M),s[M.id]=y)}function u(M){const A=f();M.__bindingPointIndex=A;const R=n.createBuffer(),F=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,F,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,R),R}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const A=r[M.id],R=M.uniforms,F=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let y=0,D=R.length;y<D;y++){const B=R[y];if(Array.isArray(B))for(let G=0,te=B.length;G<te;G++)d(B[G],y,G,F);else d(B,y,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,A,R,F){if(S(M,A,R,F)===!0){const y=M.__offset,D=M.value;if(Array.isArray(D)){let B=0;for(let G=0;G<D.length;G++){const te=D[G],le=p(te);_(te,M.__data,B),typeof te!="number"&&typeof te!="boolean"&&!te.isMatrix3&&!ArrayBuffer.isView(te)&&(B+=le.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(D,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,M.__data)}}function _(M,A,R){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,R)}function S(M,A,R,F){const y=M.value,D=A+"_"+R;if(F[D]===void 0)return typeof y=="number"||typeof y=="boolean"?F[D]=y:ArrayBuffer.isView(y)?F[D]=y.slice():F[D]=y.clone(),!0;{const B=F[D];if(typeof y=="number"||typeof y=="boolean"){if(B!==y)return F[D]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(B.equals(y)===!1)return B.copy(y),!0}}return!1}function m(M){const A=M.uniforms;let R=0;const F=16;for(let D=0,B=A.length;D<B;D++){const G=Array.isArray(A[D])?A[D]:[A[D]];for(let te=0,le=G.length;te<le;te++){const V=G[te],ee=Array.isArray(V.value)?V.value:[V.value];for(let re=0,j=ee.length;re<j;re++){const fe=ee[re],ae=p(fe),xe=R%F,W=xe%ae.boundary,ge=xe+W;R+=W,ge!==0&&F-ge<ae.storage&&(R+=F-ge),V.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=ae.storage}}}const y=R%F;return y>0&&(R+=F-y),M.__size=R,M.__cache={},this}function p(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):st("WebGLRenderer: Unsupported uniform value type.",M),A}function w(M){const A=M.target;A.removeEventListener("dispose",w);const R=a.indexOf(A.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function P(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:P}}const IE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function UE(){return ci===null&&(ci=new F0(IE,16,16,Hr,Ei),ci.name="DFG_LUT",ci.minFilter=pn,ci.magFilter=pn,ci.wrapS=Hi,ci.wrapT=Hi,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class NE{constructor(e={}){const{canvas:t=u0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Fn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=d,m=new Set([Yu,qu,$u]),p=new Set([Fn,bi,ma,ga,Wu,Xu]),w=new Uint32Array(4),P=new Int32Array(4),M=new q;let A=null,R=null;const F=[],y=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let G=!1,te=null,le=null,V=null,ee=null;this._outputColorSpace=Hn;let re=0,j=0,fe=null,ae=-1,xe=null;const W=new kt,ge=new kt;let Z=null;const He=new St(0);let qe=0,Re=t.width,pe=t.height,ue=1,Ie=null,me=null;const N=new kt(0,0,Re,pe),b=new kt(0,0,Re,pe);let U=!1;const I=new ju;let z=!1,k=!1;const X=new Ot,ne=new q,_e=new kt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Ae(){return fe===null?ue:1}let C=i;function Ce(E,$){return t.getContext(E,$)}let Ne,T,g,O,J,ie,we,Pe,ve,ye,De,$e,Ve,Oe,et,nt,ot,Y,Be,Me,ke,Ge,Te;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hu}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",_n,!1),C===null){const $="webgl2";if(C=Ce($,E),C===null)throw Ce($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(E){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Mt("WebGLRenderer: "+E.message),E}function tt(){Ne=new Uy(C),Ne.init(),ke=new TE(C,Ne),T=new Ey(C,Ne,e,ke),g=new bE(C,Ne),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),le=C.createFramebuffer(),V=C.createFramebuffer(),ee=C.createFramebuffer(),O=new Oy(C),J=new cE,ie=new EE(C,Ne,g,J,T,ke,O),we=new Iy(B),Pe=new zx(C),Ge=new yy(C,Pe),ve=new Ny(C,Pe,O,Ge),ye=new zy(C,ve,Pe,Ge,O),Y=new By(C,T,ie),et=new Ty(J),De=new lE(B,we,Ne,T,Ge,et),$e=new DE(B,J),Ve=new hE,Oe=new _E(Ne),ot=new My(B,we,g,ye,_,l),nt=new yE(B,ye,T),Te=new LE(C,O,T,g),Be=new by(C,Ne,O),Me=new Fy(C,Ne,O),O.programs=De.programs,B.capabilities=T,B.extensions=Ne,B.properties=J,B.renderLists=Ve,B.shadowMap=nt,B.state=g,B.info=O}S!==Fn&&(D=new ky(S,t.width,t.height,o,r,s));const je=new CE(B,C);this.xr=je,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(E){E!==void 0&&(ue=E,this.setSize(Re,pe,!1))},this.getSize=function(E){return E.set(Re,pe)},this.setSize=function(E,$,de=!0){if(je.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=E,pe=$,t.width=Math.floor(E*ue),t.height=Math.floor($*ue),de===!0&&(t.style.width=E+"px",t.style.height=$+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,E,$)},this.getDrawingBufferSize=function(E){return E.set(Re*ue,pe*ue).floor()},this.setDrawingBufferSize=function(E,$,de){Re=E,pe=$,ue=de,t.width=Math.floor(E*de),t.height=Math.floor($*de),this.setViewport(0,0,E,$)},this.setEffects=function(E){if(S===Fn){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let $=0;$<E.length;$++)if(E[$].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,$,de,oe){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,$,de,oe),g.viewport(W.copy(N).multiplyScalar(ue).round())},this.getScissor=function(E){return E.copy(b)},this.setScissor=function(E,$,de,oe){E.isVector4?b.set(E.x,E.y,E.z,E.w):b.set(E,$,de,oe),g.scissor(ge.copy(b).multiplyScalar(ue).round())},this.getScissorTest=function(){return U},this.setScissorTest=function(E){g.setScissorTest(U=E)},this.setOpaqueSort=function(E){Ie=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(E=!0,$=!0,de=!0){let oe=0;if(E){let se=!1;if(fe!==null){const We=fe.texture.format;se=m.has(We)}if(se){const We=fe.texture.type,Ke=p.has(We),ze=ot.getClearColor(),Je=ot.getClearAlpha(),Ye=ze.r,ht=ze.g,mt=ze.b;Ke?(w[0]=Ye,w[1]=ht,w[2]=mt,w[3]=Je,C.clearBufferuiv(C.COLOR,0,w)):(P[0]=Ye,P[1]=ht,P[2]=mt,P[3]=Je,C.clearBufferiv(C.COLOR,0,P))}else oe|=C.COLOR_BUFFER_BIT}$&&(oe|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(oe|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&C.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),te=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),ot.dispose(),Ve.dispose(),Oe.dispose(),J.dispose(),we.dispose(),ye.dispose(),Ge.dispose(),Te.dispose(),De.dispose(),je.dispose(),je.removeEventListener("sessionstart",Aa),je.removeEventListener("sessionend",_r),Ai.stop()};function Dt(E){E.preventDefault(),rf("WebGLRenderer: Context Lost."),G=!0}function _t(){rf("WebGLRenderer: Context Restored."),G=!1;const E=O.autoReset,$=nt.enabled,de=nt.autoUpdate,oe=nt.needsUpdate,se=nt.type;tt(),O.autoReset=E,nt.enabled=$,nt.autoUpdate=de,nt.needsUpdate=oe,nt.type=se}function _n(E){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bn(E){const $=E.target;$.removeEventListener("dispose",Bn),gl($)}function gl(E){_l(E),J.remove(E)}function _l(E){const $=J.get(E).programs;$!==void 0&&($.forEach(function(de){De.releaseProgram(de)}),E.isShaderMaterial&&De.releaseShaderCache(E))}this.renderBufferDirect=function(E,$,de,oe,se,We){$===null&&($=he);const Ke=se.isMesh&&se.matrixWorld.determinantAffine()<0,ze=xl(E,$,de,oe,se);g.setMaterial(oe,Ke);let Je=de.index,Ye=1;if(oe.wireframe===!0){if(Je=ve.getWireframeAttribute(de),Je===void 0)return;Ye=2}const ht=de.drawRange,mt=de.attributes.position;let Qe=ht.start*Ye,bt=(ht.start+ht.count)*Ye;We!==null&&(Qe=Math.max(Qe,We.start*Ye),bt=Math.min(bt,(We.start+We.count)*Ye)),Je!==null?(Qe=Math.max(Qe,0),bt=Math.min(bt,Je.count)):mt!=null&&(Qe=Math.max(Qe,0),bt=Math.min(bt,mt.count));const zt=bt-Qe;if(zt<0||zt===1/0)return;Ge.setup(se,oe,ze,de,Je);let Ut,Rt=Be;if(Je!==null&&(Ut=Pe.get(Je),Rt=Me,Rt.setIndex(Ut)),se.isMesh)oe.wireframe===!0?(g.setLineWidth(oe.wireframeLinewidth*Ae()),Rt.setMode(C.LINES)):Rt.setMode(C.TRIANGLES);else if(se.isLine){let jt=oe.linewidth;jt===void 0&&(jt=1),g.setLineWidth(jt*Ae()),se.isLineSegments?Rt.setMode(C.LINES):se.isLineLoop?Rt.setMode(C.LINE_LOOP):Rt.setMode(C.LINE_STRIP)}else se.isPoints?Rt.setMode(C.POINTS):se.isSprite&&Rt.setMode(C.TRIANGLES);if(se.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))Rt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const jt=se._multiDrawStarts,Ze=se._multiDrawCounts,nn=se._multiDrawCount,vt=Je?Pe.get(Je).bytesPerElement:1,wn=J.get(oe).currentProgram.getUniforms();for(let zn=0;zn<nn;zn++)wn.setValue(C,"_gl_DrawID",zn),Rt.render(jt[zn]/vt,Ze[zn])}else if(se.isInstancedMesh)Rt.renderInstances(Qe,zt,se.count);else if(de.isInstancedBufferGeometry){const jt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ze=Math.min(de.instanceCount,jt);Rt.renderInstances(Qe,zt,Ze)}else Rt.render(Qe,zt)};function Ts(E,$,de,oe){te!==null&&E.isNodeMaterial&&te.setObject(oe,E),z===!0&&et.setState(E,de,!1),E.transparent===!0&&E.side===jn&&E.forceSinglePass===!1?(E.side=Dn,E.needsUpdate=!0,Qt(E,$,oe),E.side=Vr,E.needsUpdate=!0,Qt(E,$,oe),E.side=jn):Qt(E,$,oe)}this.compile=function(E,$,de=null){de===null&&(de=E),te!==null&&te.renderStart(E,$,de),R=Oe.get(de),R.init($),y.push(R),de.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(R.pushLight(se),se.castShadow&&R.pushShadow(se))}),E!==de&&E.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(R.pushLight(se),se.castShadow&&R.pushShadow(se))}),R.setupLights(),te!==null&&te.updateLights(R.state.lightsArray),k=this.localClippingEnabled,z=et.init(this.clippingPlanes,k),z===!0&&et.setGlobalState(this.clippingPlanes,$),te!==null&&nt.render(R.state.shadowsArray,de,$);const oe=new Set;return E.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const We=se.material;if(We)if(Array.isArray(We))for(let Ke=0;Ke<We.length;Ke++){const ze=We[Ke];Ts(ze,de,$,se),oe.add(ze)}else Ts(We,de,$,se),oe.add(We)}),R=y.pop(),te!==null&&te.renderEnd(),oe},this.compileAsync=function(E,$,de=null){const oe=this.compile(E,$,de);return new Promise(se=>{function We(){if(oe.forEach(function(Ke){const Je=J.get(Ke).currentProgram;(Je===void 0||Je.isReady())&&oe.delete(Ke)}),oe.size===0){se(E);return}setTimeout(We,10)}Ne.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let ws=null;function vl(E){ws&&ws(E)}function Aa(){Ai.stop()}function _r(){Ai.start()}const Ai=new lm;Ai.setAnimationLoop(vl),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(E){ws=E,je.setAnimationLoop(E),E===null?Ai.stop():Ai.start()},je.addEventListener("sessionstart",Aa),je.addEventListener("sessionend",_r),this.render=function(E,$){if($!==void 0&&$.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;te!==null&&te.renderStart(E,$);const de=je.enabled===!0&&je.isPresenting===!0,oe=D!==null&&(fe===null||de)&&D.begin(B,fe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera($),$=je.getCamera()),E.isScene===!0&&E.onBeforeRender(B,E,$,fe),R=Oe.get(E,y.length),R.init($),R.state.textureUnits=ie.getTextureUnits(),y.push(R),X.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),I.setFromProjectionMatrix(X,vi,$.reversedDepth),k=this.localClippingEnabled,z=et.init(this.clippingPlanes,k),A=Ve.get(E,F.length),A.init(),F.push(A),je.enabled===!0&&je.isPresenting===!0){const Ke=B.xr.getDepthSensingMesh();Ke!==null&&As(Ke,$,-1/0,B.sortObjects)}As(E,$,0,B.sortObjects),A.finish(),te!==null&&te.updateLights(R.state.lightsArray),B.sortObjects===!0&&A.sort(Ie,me),ce=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,ce&&ot.addToRenderList(A,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),z===!0&&et.beginShadows();const se=R.state.shadowsArray;if(nt.render(se,E,$),z===!0&&et.endShadows(),(oe&&D.hasRenderPass())===!1){const Ke=A.opaque,ze=A.transmissive;if(R.setupLights(),$.isArrayCamera){const Je=$.cameras;if(ze.length>0)for(let Ye=0,ht=Je.length;Ye<ht;Ye++){const mt=Je[Ye];Rs(Ke,ze,E,mt)}ce&&ot.render(E);for(let Ye=0,ht=Je.length;Ye<ht;Ye++){const mt=Je[Ye];vr(A,E,mt,mt.viewport)}}else ze.length>0&&Rs(Ke,ze,E,$),ce&&ot.render(E),vr(A,E,$)}fe!==null&&j===0&&(ie.updateMultisampleRenderTarget(fe),ie.updateRenderTargetMipmap(fe)),oe&&D.end(B),E.isScene===!0&&E.onAfterRender(B,E,$),Ge.resetDefaultState(),ae=-1,xe=null,y.pop(),y.length>0?(R=y[y.length-1],ie.setTextureUnits(R.state.textureUnits),z===!0&&et.setGlobalState(B.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?A=F[F.length-1]:A=null,te!==null&&te.renderEnd()};function As(E,$,de,oe){if(E.visible===!1)return;if(E.layers.test($.layers)){if(E.isGroup)de=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update($);else if(E.isLightProbeGrid)R.pushLightProbeGrid(E);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(I)){oe&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(X);const Ke=ye.update(E),ze=E.material;ze.visible&&A.push(E,Ke,ze,de,_e.z,null,$)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(I))){const Ke=ye.update(E),ze=E.material;if(oe&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_e.copy(E.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),_e.copy(Ke.boundingSphere.center)),_e.applyMatrix4(E.matrixWorld).applyMatrix4(X)),Array.isArray(ze)){const Je=Ke.groups;for(let Ye=0,ht=Je.length;Ye<ht;Ye++){const mt=Je[Ye],Qe=ze[mt.materialIndex];Qe&&Qe.visible&&A.push(E,Ke,Qe,de,_e.z,mt,$)}}else ze.visible&&A.push(E,Ke,ze,de,_e.z,null,$)}}const We=E.children;for(let Ke=0,ze=We.length;Ke<ze;Ke++)As(We[Ke],$,de,oe)}function vr(E,$,de,oe){const{opaque:se,transmissive:We,transparent:Ke}=E;R.setupLightsView(de),z===!0&&et.setGlobalState(B.clippingPlanes,de),oe&&g.viewport(W.copy(oe)),se.length>0&&xr(se,$,de),We.length>0&&xr(We,$,de),Ke.length>0&&xr(Ke,$,de),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Rs(E,$,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[oe.id]===void 0){const Qe=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[oe.id]=new ii(1,1,{generateMipmaps:!0,type:Qe?Ei:Fn,minFilter:Ur,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const We=R.state.transmissionRenderTarget[oe.id],Ke=oe.viewport||W;We.setSize(Ke.z*B.transmissionResolutionScale,Ke.w*B.transmissionResolutionScale);const ze=B.getRenderTarget(),Je=B.getActiveCubeFace(),Ye=B.getActiveMipmapLevel();B.setRenderTarget(We),B.getClearColor(He),qe=B.getClearAlpha(),qe<1&&B.setClearColor(16777215,.5),B.clear(),ce&&ot.render(de);const ht=B.toneMapping;B.toneMapping=Si;const mt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),R.setupLightsView(oe),z===!0&&et.setGlobalState(B.clippingPlanes,oe),xr(E,de,oe),ie.updateMultisampleRenderTarget(We),ie.updateRenderTargetMipmap(We),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let bt=0,zt=$.length;bt<zt;bt++){const Ut=$[bt],{object:Rt,geometry:jt,material:Ze,group:nn}=Ut;if(Ze.side===jn&&Rt.layers.test(oe.layers)){const vt=Ze.side;Ze.side=Dn,Ze.needsUpdate=!0,Ra(Rt,de,oe,jt,Ze,nn),Ze.side=vt,Ze.needsUpdate=!0,Qe=!0}}Qe===!0&&(ie.updateMultisampleRenderTarget(We),ie.updateRenderTargetMipmap(We))}B.setRenderTarget(ze,Je,Ye),B.setClearColor(He,qe),mt!==void 0&&(oe.viewport=mt),B.toneMapping=ht}function xr(E,$,de){const oe=$.isScene===!0?$.overrideMaterial:null;for(let se=0,We=E.length;se<We;se++){const Ke=E[se],{object:ze,geometry:Je,group:Ye}=Ke;let ht=Ke.material;ht.allowOverride===!0&&oe!==null&&(ht=oe),ze.layers.test(de.layers)&&Ra(ze,$,de,Je,ht,Ye)}}function Ra(E,$,de,oe,se,We){te!==null&&se.isNodeMaterial&&te.setObject(E,se),E.onBeforeRender(B,$,de,oe,se,We),E.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),se.onBeforeRender(B,$,de,oe,E,We),se.transparent===!0&&se.side===jn&&se.forceSinglePass===!1?(se.side=Dn,se.needsUpdate=!0,B.renderBufferDirect(de,$,oe,se,E,We),se.side=Vr,se.needsUpdate=!0,B.renderBufferDirect(de,$,oe,se,E,We),se.side=jn):B.renderBufferDirect(de,$,oe,se,E,We),E.onAfterRender(B,$,de,oe,se,We)}function Qt(E,$,de){$.isScene!==!0&&($=he);const oe=J.get(E),se=R.state.lights,We=R.state.shadowsArray,Ke=se.state.version,ze=De.getParameters(E,se.state,We,$,de,R.state.lightProbeGridArray),Je=De.getProgramCacheKey(ze);let Ye=oe.programs;oe.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?$.environment:null,oe.fog=$.fog;const ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;oe.envMap=we.get(E.envMap||oe.environment,ht),oe.envMapRotation=oe.environment!==null&&E.envMap===null?$.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",Bn),Ye=new Map,oe.programs=Ye);let mt=Ye.get(Je);if(mt!==void 0){if(oe.currentProgram===mt&&oe.lightsStateVersion===Ke)return Cs(E,ze),mt}else ze.uniforms=De.getUniforms(E),te!==null&&E.isNodeMaterial&&te.build(E,de,ze),E.onBeforeCompile(ze,B),mt=De.acquireProgram(ze,Je),Ye.set(Je,mt),oe.uniforms=ze.uniforms;const Qe=oe.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Qe.clippingPlanes=et.uniform),Cs(E,ze),oe.needsLights=Pa(E),oe.lightsStateVersion=Ke,oe.needsLights&&(Qe.ambientLightColor.value=se.state.ambient,Qe.lightProbe.value=se.state.probe,Qe.sunLights.value=se.state.sun,Qe.sunLightShadows.value=se.state.sunShadow,Qe.directionalLights.value=se.state.directional,Qe.directionalLightShadows.value=se.state.directionalShadow,Qe.spotLights.value=se.state.spot,Qe.spotLightShadows.value=se.state.spotShadow,Qe.rectAreaLights.value=se.state.rectArea,Qe.ltc_1.value=se.state.rectAreaLTC1,Qe.ltc_2.value=se.state.rectAreaLTC2,Qe.pointLights.value=se.state.point,Qe.pointLightShadows.value=se.state.pointShadow,Qe.hemisphereLights.value=se.state.hemi,Qe.sunShadowMatrix.value=se.state.sunShadowMatrix,Qe.sunShadowCascade.value=se.state.sunShadowCascade,Qe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Qe.spotLightMatrix.value=se.state.spotLightMatrix,Qe.spotLightMap.value=se.state.spotLightMap,Qe.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.lightProbeGrid=R.state.lightProbeGridArray.length>0,oe.currentProgram=mt,oe.uniformsList=null,mt}function Ca(E){if(E.uniformsList===null){const $=E.currentProgram.getUniforms();E.uniformsList=Co.seqWithValue($.seq,E.uniforms)}return E.uniformsList}function Cs(E,$){const de=J.get(E);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function er(E,$){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition($.matrixWorld);for(let de=0,oe=E.length;de<oe;de++){const se=E[de];if(se.texture!==null&&se.boundingBox.containsPoint(M))return se}return null}function xl(E,$,de,oe,se){$.isScene!==!0&&($=he),ie.resetTextureUnits();const We=$.fog,Ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?$.environment:null,ze=fe===null?B.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:xt.workingColorSpace,Je=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Ye=we.get(oe.envMap||Ke,Je),ht=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,mt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Qe=!!de.morphAttributes.position,bt=!!de.morphAttributes.normal,zt=!!de.morphAttributes.color;let Ut=Si;oe.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ut=B.toneMapping);const Rt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,jt=Rt!==void 0?Rt.length:0,Ze=J.get(oe),nn=R.state.lights;if(z===!0&&(k===!0||E!==xe)){const Lt=E===xe&&oe.id===ae;et.setState(oe,E,Lt)}let vt=!1;oe.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==nn.state.version||Ze.outputColorSpace!==ze||se.isBatchedMesh&&Ze.batching===!1||!se.isBatchedMesh&&Ze.batching===!0||se.isBatchedMesh&&Ze.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Ze.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Ze.instancing===!1||!se.isInstancedMesh&&Ze.instancing===!0||se.isSkinnedMesh&&Ze.skinning===!1||!se.isSkinnedMesh&&Ze.skinning===!0||se.isInstancedMesh&&Ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ze.instancingMorph===!1&&se.morphTexture!==null||Ze.envMap!==Ye||oe.fog===!0&&Ze.fog!==We||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==et.numPlanes||Ze.numIntersection!==et.numIntersection)||Ze.vertexAlphas!==ht||Ze.vertexTangents!==mt||Ze.morphTargets!==Qe||Ze.morphNormals!==bt||Ze.morphColors!==zt||Ze.toneMapping!==Ut||Ze.morphTargetsCount!==jt||!!Ze.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ze.__version=oe.version);let wn=Ze.currentProgram;vt===!0&&(wn=Qt(oe,$,se),te&&oe.isNodeMaterial&&te.onUpdateProgram(oe,wn,Ze));let zn=!1,si=!1,Ri=!1;const Et=wn.getUniforms(),Vt=Ze.uniforms;if(g.useProgram(wn.program)&&(zn=!0,si=!0,Ri=!0),oe.id!==ae&&(ae=oe.id,si=!0),Ze.needsLights){const Lt=er(R.state.lightProbeGridArray,se);Ze.lightProbeGrid!==Lt&&(Ze.lightProbeGrid=Lt,si=!0)}if(zn||xe!==E){g.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(C,"projectionMatrix",E.projectionMatrix),Et.setValue(C,"viewMatrix",E.matrixWorldInverse);const qn=Et.map.cameraPosition;qn!==void 0&&qn.setValue(C,ne.setFromMatrixPosition(E.matrixWorld)),T.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Et.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),xe!==E&&(xe=E,si=!0,Ri=!0)}if(Ze.needsLights&&(nn.state.sunShadowMap.length>0&&Et.setValue(C,"sunShadowMap",nn.state.sunShadowMap,ie),nn.state.directionalShadowMap.length>0&&Et.setValue(C,"directionalShadowMap",nn.state.directionalShadowMap,ie),nn.state.spotShadowMap.length>0&&Et.setValue(C,"spotShadowMap",nn.state.spotShadowMap,ie),nn.state.pointShadowMap.length>0&&Et.setValue(C,"pointShadowMap",nn.state.pointShadowMap,ie)),se.isSkinnedMesh){Et.setOptional(C,se,"bindMatrix"),Et.setOptional(C,se,"bindMatrixInverse");const Lt=se.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Et.setValue(C,"boneTexture",Lt.boneTexture,ie))}se.isBatchedMesh&&(Et.setOptional(C,se,"batchingTexture"),Et.setValue(C,"batchingTexture",se._matricesTexture,ie),Et.setOptional(C,se,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",se._indirectTexture,ie),Et.setOptional(C,se,"batchingColorTexture"),se._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",se._colorsTexture,ie));const ai=de.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Y.update(se,de,wn),(si||Ze.receiveShadow!==se.receiveShadow)&&(Ze.receiveShadow=se.receiveShadow,Et.setValue(C,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&$.environment!==null&&(Vt.envMapIntensity.value=$.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=UE()),si){if(Et.setValue(C,"toneMappingExposure",B.toneMappingExposure),Ze.needsLights&&Ps(Vt,Ri),We&&oe.fog===!0&&$e.refreshFogUniforms(Vt,We),$e.refreshMaterialUniforms(Vt,oe,ue,pe,R.state.transmissionRenderTarget[E.id]),Ze.needsLights&&Ze.lightProbeGrid){const Lt=Ze.lightProbeGrid;Vt.probesSH.value=Lt.texture,Vt.probesMin.value.copy(Lt.boundingBox.min),Vt.probesMax.value.copy(Lt.boundingBox.max),Vt.probesResolution.value.copy(Lt.resolution)}Co.upload(C,Ca(Ze),Vt,ie)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Co.upload(C,Ca(Ze),Vt,ie),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Et.setValue(C,"center",se.center),Et.setValue(C,"modelViewMatrix",se.modelViewMatrix),Et.setValue(C,"normalMatrix",se.normalMatrix),Et.setValue(C,"modelMatrix",se.matrixWorld),oe.uniformsGroups!==void 0){const Lt=oe.uniformsGroups;for(let qn=0,tr=Lt.length;qn<tr;qn++){const La=Lt[qn];Te.update(La,wn),Te.bind(La,wn)}}return wn}function Ps(E,$){E.ambientLightColor.needsUpdate=$,E.lightProbe.needsUpdate=$,E.sunLights.needsUpdate=$,E.sunLightShadows.needsUpdate=$,E.directionalLights.needsUpdate=$,E.directionalLightShadows.needsUpdate=$,E.pointLights.needsUpdate=$,E.pointLightShadows.needsUpdate=$,E.spotLights.needsUpdate=$,E.spotLightShadows.needsUpdate=$,E.rectAreaLights.needsUpdate=$,E.hemisphereLights.needsUpdate=$}function Pa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(E,$,de){const oe=J.get(E);oe.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),J.get(E.texture).__webglTexture=$,J.get(E.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,$){const de=J.get(E);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(E,$=0,de=0){fe=E,re=$,j=de;let oe=null,se=!1,We=!1;if(E){const ze=J.get(E);if(ze.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(C.FRAMEBUFFER,ze.__webglFramebuffer),W.copy(E.viewport),ge.copy(E.scissor),Z=E.scissorTest,g.viewport(W),g.scissor(ge),g.setScissorTest(Z),ae=-1;return}else if(ze.__webglFramebuffer===void 0)ie.setupRenderTarget(E);else if(ze.__hasExternalTextures)ie.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ht=E.depthTexture;if(ze.__boundDepthTexture!==ht){if(ht!==null&&J.has(ht)&&(E.width!==ht.image.width||E.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(E)}}const Je=E.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(We=!0);const Ye=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?oe=Ye[$][de]:oe=Ye[$],se=!0):E.samples>0&&ie.useMultisampledRTT(E)===!1?oe=J.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?oe=Ye[de]:oe=Ye,W.copy(E.viewport),ge.copy(E.scissor),Z=E.scissorTest}else W.copy(N).multiplyScalar(ue).floor(),ge.copy(b).multiplyScalar(ue).floor(),Z=U;if(de!==0&&(oe=le),g.bindFramebuffer(C.FRAMEBUFFER,oe)&&g.drawBuffers(E,oe),g.viewport(W),g.scissor(ge),g.setScissorTest(Z),se){const ze=J.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,de)}else if(We){const ze=$;for(let Je=0;Je<E.textures.length;Je++){const Ye=J.get(E.textures[Je]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Je,Ye.__webglTexture,de,ze)}}else if(E!==null&&de!==0){const ze=J.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ze.__webglTexture,de)}ae=-1};function Da(E){const $=J.get(E);return($.__readFormat!==E.format||$.__readType!==E.type)&&($.__readFormat=E.format,$.__readType=E.type,$.__formatReadable=T.textureFormatReadable(E.format),$.__typeReadable=T.textureTypeReadable(E.type)),$}this.readRenderTargetPixels=function(E,$,de,oe,se,We,Ke,ze=0){if(!(E&&E.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ke!==void 0&&(Je=Je[Ke]),Je){g.bindFramebuffer(C.FRAMEBUFFER,Je);try{const Ye=E.textures[ze],ht=Ye.format,mt=Ye.type;E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ze);const Qe=Da(Ye);if(Qe.__formatReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=E.width-oe&&de>=0&&de<=E.height-se&&C.readPixels($,de,oe,se,ke.convert(ht),ke.convert(mt),We)}finally{const Ye=fe!==null?J.get(fe).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(E,$,de,oe,se,We,Ke,ze=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ke!==void 0&&(Je=Je[Ke]),Je)if($>=0&&$<=E.width-oe&&de>=0&&de<=E.height-se){g.bindFramebuffer(C.FRAMEBUFFER,Je);const Ye=E.textures[ze],ht=Ye.format,mt=Ye.type;E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ze);const Qe=Da(Ye);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,bt),C.bufferData(C.PIXEL_PACK_BUFFER,We.byteLength,C.STREAM_READ),C.readPixels($,de,oe,se,ke.convert(ht),ke.convert(mt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const zt=fe!==null?J.get(fe).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,zt);const Ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await h0(C,Ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,We),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(bt),C.deleteSync(Ut),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,$=null,de=0){const oe=Math.pow(2,-de),se=Math.floor(E.image.width*oe),We=Math.floor(E.image.height*oe),Ke=$!==null?$.x:0,ze=$!==null?$.y:0;ie.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,de,0,0,Ke,ze,se,We),g.unbindTexture()},this.copyTextureToTexture=function(E,$,de=null,oe=null,se=0,We=0){let Ke,ze,Je,Ye,ht,mt,Qe,bt,zt;const Ut=E.isCompressedTexture?E.mipmaps[We]:E.image;if(de!==null)Ke=de.max.x-de.min.x,ze=de.max.y-de.min.y,Je=de.isBox3?de.max.z-de.min.z:1,Ye=de.min.x,ht=de.min.y,mt=de.isBox3?de.min.z:0;else{const Vt=Math.pow(2,-se);Ke=Math.floor(Ut.width*Vt),ze=Math.floor(Ut.height*Vt),E.isDataArrayTexture?Je=Ut.depth:E.isData3DTexture?Je=Math.floor(Ut.depth*Vt):Je=1,Ye=0,ht=0,mt=0}oe!==null?(Qe=oe.x,bt=oe.y,zt=oe.z):(Qe=0,bt=0,zt=0);const Rt=ke.convert($.format),jt=ke.convert($.type);let Ze;$.isData3DTexture?(ie.setTexture3D($,0),Ze=C.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ie.setTexture2DArray($,0),Ze=C.TEXTURE_2D_ARRAY):(ie.setTexture2D($,0),Ze=C.TEXTURE_2D),g.activeTexture(C.TEXTURE0),g.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(C.UNPACK_ALIGNMENT,$.unpackAlignment);const nn=g.getParameter(C.UNPACK_ROW_LENGTH),vt=g.getParameter(C.UNPACK_IMAGE_HEIGHT),wn=g.getParameter(C.UNPACK_SKIP_PIXELS),zn=g.getParameter(C.UNPACK_SKIP_ROWS),si=g.getParameter(C.UNPACK_SKIP_IMAGES);g.pixelStorei(C.UNPACK_ROW_LENGTH,Ut.width),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ut.height),g.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),g.pixelStorei(C.UNPACK_SKIP_ROWS,ht),g.pixelStorei(C.UNPACK_SKIP_IMAGES,mt);const Ri=E.isDataArrayTexture||E.isData3DTexture,Et=$.isDataArrayTexture||$.isData3DTexture;if(E.isDepthTexture){const Vt=J.get(E),ai=J.get($),Lt=J.get(Vt.__renderTarget),qn=J.get(ai.__renderTarget);g.bindFramebuffer(C.READ_FRAMEBUFFER,Lt.__webglFramebuffer),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let tr=0;tr<Je;tr++)Ri&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,J.get(E).__webglTexture,se,mt+tr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,J.get($).__webglTexture,We,zt+tr)),C.blitFramebuffer(Ye,ht,Ke,ze,Qe,bt,Ke,ze,C.DEPTH_BUFFER_BIT,C.NEAREST);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(se!==0||E.isRenderTargetTexture||J.has(E)){const Vt=J.get(E),ai=J.get($);g.bindFramebuffer(C.READ_FRAMEBUFFER,V),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,ee);for(let Lt=0;Lt<Je;Lt++)Ri?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Vt.__webglTexture,se,mt+Lt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Vt.__webglTexture,se),Et?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ai.__webglTexture,We,zt+Lt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ai.__webglTexture,We),se!==0?C.blitFramebuffer(Ye,ht,Ke,ze,Qe,bt,Ke,ze,C.COLOR_BUFFER_BIT,C.NEAREST):Et?C.copyTexSubImage3D(Ze,We,Qe,bt,zt+Lt,Ye,ht,Ke,ze):C.copyTexSubImage2D(Ze,We,Qe,bt,Ye,ht,Ke,ze);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Et?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Ze,We,Qe,bt,zt,Ke,ze,Je,Rt,jt,Ut.data):$.isCompressedArrayTexture?C.compressedTexSubImage3D(Ze,We,Qe,bt,zt,Ke,ze,Je,Rt,Ut.data):C.texSubImage3D(Ze,We,Qe,bt,zt,Ke,ze,Je,Rt,jt,Ut):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,We,Qe,bt,Ke,ze,Rt,jt,Ut.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,We,Qe,bt,Ut.width,Ut.height,Rt,Ut.data):C.texSubImage2D(C.TEXTURE_2D,We,Qe,bt,Ke,ze,Rt,jt,Ut);g.pixelStorei(C.UNPACK_ROW_LENGTH,nn),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt),g.pixelStorei(C.UNPACK_SKIP_PIXELS,wn),g.pixelStorei(C.UNPACK_SKIP_ROWS,zn),g.pixelStorei(C.UNPACK_SKIP_IMAGES,si),We===0&&$.generateMipmaps&&C.generateMipmap(Ze),g.unbindTexture()},this.initRenderTarget=function(E){J.get(E).__webglFramebuffer===void 0&&ie.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ie.setTextureCube(E,0):E.isData3DTexture?ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ie.setTexture2DArray(E,0):ie.setTexture2D(E,0),g.unbindTexture()},this.resetState=function(){re=0,j=0,fe=null,g.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const od={type:"change"},rh={type:"start"},gm={type:"end"},_o=new hl,ld=new Bi,FE=Math.cos(70*p0.DEG2RAD),Kt=new q,Cn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xc=1e-6;class OE extends Ox{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new pr,this._lastTargetPosition=new q,this._quat=new pr().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Of,this._sphericalDelta=new Of,this._scale=1,this._panOffset=new q,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new q,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zE.bind(this),this._onPointerDown=BE.bind(this),this._onPointerUp=VE.bind(this),this._onContextMenu=qE.bind(this),this._onMouseWheel=GE.bind(this),this._onKeyDown=WE.bind(this),this._onTouchStart=XE.bind(this),this._onTouchMove=$E.bind(this),this._onMouseDown=kE.bind(this),this._onMouseMove=HE.bind(this),this._interceptControlDown=YE.bind(this),this._interceptControlUp=KE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(od),this.update(),this.state=Pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),r<-Math.PI?r+=Cn:r>Math.PI&&(r-=Cn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Kt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<FE?this.object.lookAt(this.target):(ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(ld,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xc||this._lastTargetPosition.distanceToSquared(this.target)>xc?(this.dispatchEvent(od),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Kt.copy(r).sub(this.target);let s=Kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function BE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function VE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gm),this.state=Pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Pt.DOLLY;break;case Xi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}break;case Xi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(rh)}function HE(n){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function GE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(n.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gm))}function WE(n){this.enabled!==!1&&this._handleKeyDown(n)}function XE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Pt.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Pt.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(rh)}function $E(n){switch(this._trackPointer(n),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Pt.NONE}}function qE(n){this.enabled!==!1&&n.preventDefault()}function YE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ZE{renderer;scene;camera;controls;gear1=null;gear2=null;actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;toleranceGroup;toleranceWorstMarker=null;toleranceMode=!1;raycaster=new Fx;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new NE({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new R0,this.scene.background=new St(1053464);const r=t/i,s=80;this.camera=new dl(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new OE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN};const a=new Ix(16777215,.65),o=new Lx(16777215,.9);o.position.set(40,60,100),this.scene.add(a,o),this.interferenceGroup=new Fr,this.scene.add(this.interferenceGroup),this.toleranceGroup=new Fr,this.scene.add(this.toleranceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new q(e*Math.cos(c),e*Math.sin(c),i))}const a=new gn().setFromPoints(s),o=new Ro({color:t,transparent:!0,opacity:.8});return new z0(a,o)}buildGearMesh(e,t){const i=new Fr,r=new sa,s=e.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const a=e.input.faceWidth,o=new ih(r,{depth:a,bevelEnabled:!1,curveSegments:1});o.translate(0,0,-a/2),o.computeVertexNormals();const l=new Ax({color:t,metalness:.35,roughness:.55}),c=new bn(o,l);i.add(c);const u=new B0(new k0(o,12),new Ro({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,a/2+.02),base:this.makeCircleLine(e.baseR,2605194,a/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,a/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,a/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setGears(e,t,i){this.toleranceMode&&(this.toleranceMode=!1,this.clearTolerancePreview()),this.clearOverlay(),this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(e,7252222),this.gear2=this.buildGearMesh(t,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.targetCenter(i/2,Math.max(e.addendumR,t.addendumR))}targetCenter(e,t){const i=(this.container.clientWidth||800)/(this.container.clientHeight||600),r=(t*2+40)/2,s=Math.max(r*2,80);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.controls.target.set(e,0,0),this.camera.position.set(e,0,140)}setAngles(e,t){this.toleranceMode||(this.gear1&&(this.gear1.group.rotation.z=e),this.gear2&&(this.gear2.group.rotation.z=t))}setMeshOverlay(e,t){if(this.toleranceMode||(this.clearOverlay(),!e||!this.gear1||!this.gear2))return;const i=o=>t[o],r=o=>{o.geometry.computeBoundingBox();const l=o.geometry.boundingBox;return l?l.max.z-l.min.z:0},s=r(this.gear1.body),a=r(this.gear2.body);if(this.gear1.refs.pitch.visible=!!i("showPitchCircle"),this.gear2.refs.pitch.visible=!!i("showPitchCircle"),this.gear1.refs.base.visible=!!i("showBaseCircle"),this.gear2.refs.base.visible=!!i("showBaseCircle"),this.gear1.refs.addendum.visible=!!i("showAddendumCircle"),this.gear2.refs.addendum.visible=!!i("showAddendumCircle"),this.gear1.refs.dedendum.visible=!!i("showDedendumCircle"),this.gear2.refs.dedendum.visible=!!i("showDedendumCircle"),i("showActionLine")){const o=Math.max(s,a)/2+1,l=(u,f,h)=>{const d=new gn().setFromPoints([new q(u.x,u.y,o),new q(f.x,f.y,o)]);return new eh(d,new Ro({color:h,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=l(e.tangentLine.p0,e.tangentLine.p1,8950691),this.tangentLine.renderOrder=50,this.actionLine=l(e.actionLine.p0,e.actionLine.p1,3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const c=new aa(.7,16,16);this.pitchPoint=new bn(c,new Pr({color:16777215,depthTest:!1})),this.pitchPoint.position.set(e.pitchPoint.x,e.pitchPoint.y,o),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(i("showContact")){const o=e.alphaPrime,l=Math.sin(o),c=Math.cos(o),u={x:e.pitchPoint.x+t.contactS*l,y:e.pitchPoint.y+t.contactS*c},f=Math.max(s,a)/2+1.5,h=new aa(1,20,20);this.contactMarker=new bn(h,new Pr({color:16726891,depthTest:!1})),this.contactMarker.position.set(u.x,u.y,f),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}if(t.contactRegions)for(const o of t.contactRegions)for(const l of o){if(l.length<3)continue;const c=new sa;c.moveTo(l[0].x,l[0].y);for(let d=1;d<l.length;d++)c.lineTo(l[d].x,l[d].y);c.closePath();const u=new Zo(c),f=new Pr({color:16723285,transparent:!0,opacity:.5,side:jn,depthTest:!1}),h=new bn(u,f);h.position.z=Math.max(s,a)/2+2,h.renderOrder=999,this.interferenceGroup.add(h)}}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}setTolerancePreview(e){this.clearTolerancePreview(),this.toleranceMode=!0,this.clearOverlay(),this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(e.g1,8280002),this.gear2=this.buildGearMesh(e.g2,2533018),this.scene.add(this.gear1.group,this.gear2.group),this.gear1.group.position.x=0,this.gear2.group.position.x=e.a,this.gear1.group.rotation.z=e.phi1,this.gear2.group.rotation.z=e.phi2,this.targetCenter(e.a/2,Math.max(e.g1.addendumR,e.g2.addendumR));const t=s=>(s.geometry.computeBoundingBox(),s.geometry.boundingBox?s.geometry.boundingBox.max.z-s.geometry.boundingBox.min.z:0),i=Math.max(t(this.gear1.body),t(this.gear2.body))/2+2.2;for(const s of e.regions){if(s.length<3)continue;const a=new sa;a.moveTo(s[0].x,s[0].y);for(let u=1;u<s.length;u++)a.lineTo(s[u].x,s[u].y);a.closePath();const o=new Zo(a),l=new Pr({color:16723285,transparent:!0,opacity:.55,side:jn,depthTest:!1}),c=new bn(o,l);c.position.z=i,c.renderOrder=999,this.toleranceGroup.add(c)}const r={x:0,y:0,n:0};for(const s of e.regions)for(const a of s)r.x+=a.x,r.y+=a.y,r.n++;r.n&&(this.toleranceWorstMarker=new bn(new aa(1.1,20,20),new Pr({color:16766474,depthTest:!1})),this.toleranceWorstMarker.position.set(r.x/r.n,r.y/r.n,i+.5),this.toleranceWorstMarker.renderOrder=1e3,this.toleranceGroup.add(this.toleranceWorstMarker))}clearTolerancePreview(){for(;this.toleranceGroup.children.length;)this.toleranceGroup.children.pop().geometry?.dispose();this.toleranceWorstMarker=null}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Un={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function Po(n,e){return n*Un[e].factor}function Or(n,e){return n/Un[e].factor}function Do(n,e){return`${Po(n,e).toFixed(Un[e].decimals)} ${Un[e].label}`}function Jo(n){return`b1|${[n.z1,n.z2,n.module,n.alphaDeg,n.faceWidth,n.centerDistance].map(i=>{const r=typeof i=="number"?i:Number(i);return Object.is(r,-0)?"0":r.toString()}).join(",")}`}function Sc(n,e){return n.fingerprint===Jo(e)}const cd=400;function _m(n,e){const t=[],i=S=>typeof S=="number"&&Number.isFinite(S),r=(S,m)=>{if(!i(m.min)||!i(m.max)){t.push(`${S}范围必须是有限数值`);return}m.min>m.max&&t.push(`${S}范围下限不能大于上限`),(!Number.isInteger(m.steps)||m.steps<1)&&t.push(`${S}采样点数必须是 ≥1 的整数`),Number.isInteger(m.steps)&&m.steps>101&&t.push(`${S}采样点数过大（≤101）`)};r("中心距偏差 Δa",e.center),r("齿厚偏差 Δs",e.thickness),(!Number.isInteger(e.phaseSteps)||e.phaseSteps<2||e.phaseSteps>721)&&t.push("相位扫描点数必须是 2~721 的整数"),e.center.steps*e.thickness.steps<1&&t.push("至少需要 1 个组合");const s=Number.isInteger(e.center.steps)?e.center.steps:0,a=Number.isInteger(e.thickness.steps)?e.thickness.steps:0;if(s>=2&&a>=2&&s*a>cd&&t.push(`组合数 ${s}×${a}=${s*a} 超过上限 ${cd}，请缩小范围或降低采样密度`),(!i(n.module)||n.module<=0)&&t.push("基准模数必须 > 0"),(!i(n.alphaDeg)||n.alphaDeg<=0||n.alphaDeg>=90)&&t.push("基准压力角必须在 (0°,90°) 内"),(!Number.isInteger(n.z1)||n.z1<4)&&t.push("基准齿数 z₁ 必须为 ≥4 的整数"),(!Number.isInteger(n.z2)||n.z2<4)&&t.push("基准齿数 z₂ 必须为 ≥4 的整数"),(!i(n.faceWidth)||n.faceWidth<=0)&&t.push("基准齿宽必须 > 0"),(!i(n.centerDistance)||n.centerDistance<=0)&&t.push("基准中心距必须 > 0"),t.length)return t;const o=Math.PI*n.module*Math.cos(n.alphaDeg*Mn);Math.abs(o-o)>1e-9&&t.push("两轮基节不等（模数/压力角不兼容），不能分析");const u=n.module*(n.z1+n.z2)/2*Math.cos(n.alphaDeg*Mn);n.centerDistance+e.center.min<=0?t.push("中心距范围包含 ≤ 0 的非物理组合"):n.centerDistance+e.center.min<=u&&t.push(`中心距范围低于基圆内公切线极限 a₀·cosα ≈ ${u.toFixed(3)} mm，相位方程无解，请提高下限`);const f=hd(n.z1,n.module,n.alphaDeg*Mn),h=hd(n.z2,n.module,n.alphaDeg*Mn),d=Math.max(f.min,h.min),_=Math.min(f.max,h.max);return e.thickness.min<d&&t.push(`齿厚偏差下限低于几何可行域（≈ ${d.toFixed(3)} mm）`),e.thickness.max>_&&t.push(`齿厚偏差上限高于几何可行域（≈ ${_.toFixed(3)} mm，齿顶变尖/齿面交叉）`),t}function ud(n,e,t){if(t===1)return[n];const i=[];for(let r=0;r<t;r++)i.push(n+(e-n)*r/(t-1));return i}function hd(n,e,t){const i=e*n/2,r=i*Math.cos(t),s=i+e,a=Math.sqrt(Math.max(0,(s/r)**2-1)),o=a-Math.atan(a),l=Math.tan(t)-t,c=2*i*(Math.PI/(2*n)-l)*.998;return{min:2*i*(o-Math.PI/(2*n)-l)*.998,max:c}}const JE=1e-6;async function QE(n,e,t,i,r){const s=n.centerDistance+e,a=r.intersect??Ep,o=A=>({verdict:"invalid",a:s,ds:t,phasesScanned:0,maxArea:0,worstPhi1:null,worstK:null,worstRegions:[],reason:A});if(!Number.isFinite(s)||s<=0)return o("center-nonpositive");const l=n.module*(n.z1+n.z2)/2;if(s<=l*Math.cos(n.alphaDeg*Mn))return o("center-below-tangent-limit");let c=i.get(t);if(!c){const A={module:n.module,alpha:n.alphaDeg*Mn,faceWidth:n.faceWidth,toothThicknessOffset:t},R=gs({...A,z:n.z1}),F=gs({...A,z:n.z2});c={g1:R,g2:F},i.set(t,c)}const{g1:u,g2:f}=c;if(u.pointed||f.pointed)return o("thickness-tip-pointed");if(u.beta>=Math.PI/u.input.z||f.beta>=Math.PI/f.input.z||u.beta<=0||f.beta<=0)return o("thickness-too-large");if(!u.outline.length||!f.outline.length||u.outline.some(A=>!isFinite(A.x)))return o("geometry-degenerate");let h;try{h=ku({g1:u,g2:f,centerDistance:s})}catch{return o("geometry-degenerate")}if(!h.addendumOverlap)return{verdict:"safe",a:s,ds:t,phasesScanned:0,maxArea:0,worstPhi1:null,worstK:null,worstRegions:[],reason:null};const d=2*Math.PI/u.input.z,_=Math.max(2,r.phaseSteps);let S=0,m=0,p=0,w=[],P=0;for(let A=0;A<_;A++){const R=d*A/_;let F;try{F=Ho(u,f,h,R)}catch{return o("geometry-degenerate")}if(!Number.isFinite(F))return o("geometry-degenerate");const y=[ko(u.outline,0,0,R)],D=[ko(f.outline,s,0,F)];let B,G=[];try{const te=await a(y,D);B=te.area,G=te.regions}catch{return o("boolean-failure")}P++,B>S&&(S=B,m=A,p=R,w=G)}const M=S>JE;return{verdict:M?"risk":"safe",a:s,ds:t,phasesScanned:P,maxArea:S,worstPhi1:M?p:null,worstK:M?m:null,worstRegions:M&&r.keepRegions!==!1?jE(w):[],reason:null}}function jE(n,e=240){return n.map(t=>{if(t.length<=e)return t;const i=[],r=t.length/e;for(let s=0;s<e;s++)i.push(t[Math.floor(s*r)]);return i})}async function eT(n,e){const t=e.ds,i=gs({z:n.z1,module:n.module,alpha:n.alphaDeg*Mn,faceWidth:n.faceWidth,toothThicknessOffset:t}),r=gs({z:n.z2,module:n.module,alpha:n.alphaDeg*Mn,faceWidth:n.faceWidth,toothThicknessOffset:t}),s=ku({g1:i,g2:r,centerDistance:e.a}),a=e.worstPhi1??0,o=Ho(i,r,s,a);return{g1:i,g2:r,mesh:s,phi1:a,phi2:o}}const fd=1,tT="spur-gear-lab",nT=2,Eu="cases",Ss="tolerance-jobs";let vo=null;function iT(){return vo||(vo=new Promise((n,e)=>{const t=indexedDB.open(tT,nT);t.onupgradeneeded=()=>{const i=t.result;if(i.objectStoreNames.contains(Eu)||i.createObjectStore(Eu,{keyPath:"id"}).createIndex("updatedAt","updatedAt"),!i.objectStoreNames.contains(Ss)){const r=i.createObjectStore(Ss,{keyPath:"id"});r.createIndex("updatedAt","updatedAt"),r.createIndex("fingerprint","fingerprint",{unique:!1})}},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),vo)}function Xr(n,e,t=Eu){return iT().then(i=>new Promise((r,s)=>{const a=i.transaction(t,n),o=e(a.objectStore(t));o.onsuccess=()=>r(o.result),o.onerror=()=>s(o.error)}))}async function dd(n){await Xr("readwrite",e=>e.put({...n,updatedAt:Date.now()}))}async function rT(n){await Xr("readwrite",e=>e.delete(n))}async function sT(){return[...await Xr("readonly",e=>e.getAll())].sort((e,t)=>t.updatedAt-e.updatedAt)}function aT(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function oT(n){return JSON.stringify(n,null,2)}function lT(n){const e=JSON.parse(n);if(!e||e.schemaVersion!==fd)throw new Error(`不支持的案例版本（需要 schemaVersion=${fd}）`);if(!e.gear1||!e.gear2)throw new Error("案例缺少齿轮参数");for(const t of[e.gear1,e.gear2])if(!(t.z>=4)||!(t.module>0)||!(t.alphaDeg>0))throw new Error("案例参数不合法（z≥4, m>0, α>0）");return e}function cT(n){const e=new Blob([oT(n)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t;const r=(n.name||"gear-case").replace(/[^\w一-龥-]+/g,"_");i.download=`${r}.json`,i.click(),URL.revokeObjectURL(t)}const uT=1;function hT(){return{put:n=>xo.putJob(n),get:n=>xo.getJob(n),list:()=>xo.listJobs(),delete:n=>xo.deleteJob(n)}}async function fT(n){await Xr("readwrite",e=>e.put({...n,updatedAt:Date.now()}),Ss)}async function dT(n){return Xr("readonly",e=>e.get(n),Ss)}async function pT(){return[...await Xr("readonly",e=>e.getAll(),Ss)].sort((e,t)=>t.updatedAt-e.updatedAt)}async function mT(n){await Xr("readwrite",e=>e.delete(n),Ss)}const xo={putJob:fT,getJob:dT,listJobs:pT,deleteJob:mT};function gT(){return`tol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function _T(n,e,t){const i=_m(n,e);if(i.length)throw new vT(i);const r=ud(e.center.min,e.center.max,e.center.steps),s=ud(e.thickness.min,e.thickness.max,e.thickness.steps),a=r.length,o=s.length,l=Date.now();return{id:gT(),schemaVersion:uT,createdAt:l,updatedAt:l,baseline:{...n},displayUnit:t,setup:structuredClone(e),fingerprint:Jo(n),status:"running",results:new Array(a*o).fill(null),ni:a,nj:o,axisCenter:r,axisThickness:s,counts:{safe:0,risk:0,invalid:0},extremes:xT(),cancelError:null}}class vT extends Error{constructor(e){super(e.join("；")),this.errors=e,this.name="JobValidationError"}}function xT(){return{maxArea:0,worst:null}}function vm(n,e){return{i:Math.floor(n/e),j:n%e}}function ST(n,e){return n.i*e+n.j}function MT(n,e,t){const i=n.results[e];i&&n.counts[i.verdict]--,n.results[e]=t,n.counts[t.verdict]++,yT(n)}function yT(n){let e=0,t=null;for(let i=0;i<n.results.length;i++){const r=n.results[i];r&&r.verdict==="risk"&&r.maxArea>e&&(e=r.maxArea,t=vm(i,n.nj))}n.extremes={maxArea:e,worst:t}}class gi{constructor(e,t,i){this.job=e,this.store=t,this.onProgress=i}cancelled=!1;running=!1;static active=new Map;static isActive(e){return this.active.has(e)}static async start(e,t,i){if(this.active.has(e.id))throw new Error("该作业已在运行中");const r=new gi(e,t,i);return this.active.set(e.id,r),e.status="running",e.cancelError=null,await t.put(e),await Promise.resolve(),r.runRemaining(),r}static attachForRecompute(e,t,i){if(this.active.has(e.id))throw new Error("该作业仍在运行中，不能局部重算");const r=new gi(e,t,i);return this.active.set(e.id,r),r}async recompute(e){if(this.running)throw new Error("作业运行中，请先取消再局部重算");const t=e.map(i=>ST(i,this.job.nj)).filter((i,r,s)=>i>=0&&i<this.job.results.length&&s.indexOf(i)===r);if(!t.length){gi.active.delete(this.job.id);return}this.cancelled=!1,this.running=!0;try{await this.process(t),await this.store.put(this.job)}finally{this.running=!1,gi.active.delete(this.job.id),this.onProgress?.({job:this.job,last:{i:-1,j:-1}})}}cancel(){this.cancelled=!0}get isRunning(){return this.running}async runRemaining(){this.running=!0;try{const e=[];for(let t=0;t<this.job.results.length;t++)this.job.results[t]||e.push(t);e.length&&await this.process(e),this.cancelled?(this.job.status="cancelled",this.job.cancelError="已取消（已完成样本保留，可继续恢复）"):this.job.status="done",await this.store.put(this.job)}finally{this.running=!1,gi.active.delete(this.job.id),this.onProgress?.({job:this.job,last:{i:-1,j:-1}})}}async process(e){const t=new Map;for(const i of e){if(this.cancelled)return;const{i:r,j:s}=vm(i,this.job.nj),a=this.job.axisCenter[r],o=this.job.axisThickness[s],l=await QE(this.job.baseline,a,o,t,{phaseSteps:this.job.setup.phaseSteps});if(this.cancelled)return;MT(this.job,i,l),await this.store.put(this.job),this.onProgress?.({job:this.job,last:{i:r,j:s}})}}}const bT={class:"tol-panel"},ET={class:"grid-form"},TT={class:"span2"},wT={class:"row meta"},AT={key:0,class:"errlist"},RT={key:1,class:"err"},CT=["disabled"],PT={class:"job-head"},DT={key:0,class:"stale-badge"},LT={class:"job-sub"},IT={key:0,class:"job-sub warn"},UT={class:"progress"},NT={class:"bar"},FT={class:"counts"},OT={class:"good"},BT={class:"bad"},zT={class:"invalid-c"},VT={key:0,class:"worst"},kT=["onClick"],HT={class:"heat-scroll"},GT={class:"rowlabel"},WT=["title","onClick"],XT={class:"axis-note"},$T={key:1,class:"sel-detail"},qT={key:0},YT={key:1,class:"invalid-c"},KT={key:1},ZT={class:"row"},JT=["onClick"],QT=["onClick"],jT=["disabled","onClick"],ew=["onClick"],tw={key:2,class:"cancel-note"},nw=Yd({__name:"TolerancePanel",props:{baseline:{},unit:{},previewActive:{type:Boolean}},emits:["preview"],setup(n,{emit:e}){const t=n,i=e,r=hT(),s=hr({daMin:-.2,daMax:.2,daSteps:5,dsMin:-.1,dsMax:.1,dsSteps:5,phaseSteps:25}),a=an([]),o=an("");function l(){const W={...t.baseline},ge={center:{min:Or(s.daMin,t.unit),max:Or(s.daMax,t.unit),steps:s.daSteps},thickness:{min:Or(s.dsMin,t.unit),max:Or(s.dsMax,t.unit),steps:s.dsSteps},phaseSteps:s.phaseSteps};return{baseline:W,setup:ge}}ki(()=>[s,t.unit,t.baseline],()=>{const{baseline:W,setup:ge}=l();a.value=_m(W,ge),o.value=""},{deep:!0,immediate:!0});const c=di(()=>Number.isInteger(s.daSteps)&&Number.isInteger(s.dsSteps)?s.daSteps*s.dsSteps:0),u=di(()=>Un[t.unit].label),f=an([]),h=an(null),d=new Map,_=hr({}),S=an(null),m=an(!1);async function p(){f.value=await r.list()}function w(W){return W.counts.safe+W.counts.risk+W.counts.invalid}function P(W){return _[W.id]??{done:w(W),total:W.results.length}}function M(W){return d.has(W.id)}function A(W,ge){d.set(W.id,ge),h.value=W.id,_[W.id]={done:w(W),total:W.results.length}}function R(W){const ge=f.value.findIndex(Z=>Z.id===W.id);ge>=0?f.value[ge]=W:f.value.unshift(W)}async function F(){o.value="";const{baseline:W,setup:ge}=l();let Z;try{Z=_T(W,ge,t.unit)}catch(qe){o.value=qe.errors?.join("；")??qe.message;return}S.value=null,i("preview",null);const He=await gi.start(Z,r,xe());A(Z,He),await p()}function y(W){d.get(W.id)?.cancel()}async function D(W){if(!Sc(W,t.baseline))return;i("preview",null);const ge=await gi.start(W,r,xe());A(W,ge),await p()}async function B(W){if(!(!S.value||S.value.id!==W.id||m.value)&&Sc(W,t.baseline)){o.value="";try{m.value=!0;let ge=d.get(W.id);ge||(ge=gi.attachForRecompute(W,r,({job:qe})=>R(qe)),d.set(W.id,ge));const{i:Z,j:He}=S.value;await ge.recompute([{i:Z,j:He}]),R(W)}catch(ge){o.value=ge.message}finally{d.delete(W.id),m.value=!1}}}async function G(W){d.get(W.id)?.cancel(),d.delete(W.id),await r.delete(W.id),S.value?.id===W.id&&(S.value=null,i("preview",null)),await p()}async function te(W,ge,Z){S.value={id:W.id,i:ge,j:Z};const He=f.value.find(pe=>pe.id===W.id)??W,qe=He.results[ge*He.nj+Z];if(!qe)return;const Re=await eT(He.baseline,qe);i("preview",{g1:Re.g1,g2:Re.g2,a:qe.a,phi1:Re.phi1,phi2:Re.phi2,regions:qe.worstRegions})}function le(){S.value=null,i("preview",null)}function V(W,ge,Z){return W.results[ge*W.nj+Z]??null}function ee(W){return W?`cell ${W.verdict}`:"cell pending"}function re(W,ge,Z){const He=V(W,ge,Z),qe=`Δa=${Do(W.axisCenter[ge],"mm")}，Δs=${Do(W.axisThickness[Z],"mm")}`;return He?He.verdict==="invalid"?`${qe}：无效（${He.reason}）`:He.verdict==="risk"?`${qe}：风险，最坏重叠 ${He.maxArea.toExponential(3)} mm²，相位序号 ${He.worstK}`:`${qe}：安全（扫描 ${He.phasesScanned} 相位）`:`${qe}：未完成`}const j={"thickness-tip-pointed":"齿厚使齿顶变尖","thickness-too-large":"齿厚超过齿距，齿面交叉","thickness-too-small":"齿厚过负，齿体退化","center-below-tangent-limit":"中心距低于基圆内公切线极限","center-nonpositive":"中心距 ≤ 0","geometry-degenerate":"几何构造退化","boolean-failure":"布尔求交失败（可重算）"},fe=di(()=>Jo(t.baseline)),ae=W=>Do(W,"mm");function xe(){return({job:W,last:ge})=>{_[W.id]={done:w(W),total:W.results.length},R(W),ge.i<0&&(d.delete(W.id),h.value===W.id&&(h.value=null))}}return Fo(async()=>{await p();for(const W of f.value)if(W.status==="running"&&Sc(W,t.baseline)){const ge=await gi.start(W,r,xe());A(W,ge)}}),ki(()=>Jo(t.baseline),()=>{S.value=null}),(W,ge)=>(ft(),pt("section",bT,[ge[11]||(ge[11]=K("h2",null,"公差包络分析（教学近似）",-1)),ge[12]||(ge[12]=K("p",{class:"disclaimer"},[ct(" 在冻结基准上对 "),K("b",null,"中心距偏差 Δa"),ct(" 与 "),K("b",null,"齿厚偏差 Δs"),ct(" 做网格采样，逐组合扫描一个 齿距周期的相位，用与单帧检查相同的 Clipper 布尔求交判定安全/风险/无效。 结果仅用于课堂理解装配公差的影响，"),K("b",null,"不是真实制造认证"),ct("，不考虑弹性、热变形与齿廓修形。 ")],-1)),K("div",ET,[K("label",null,[ct("Δa 下限（"+Fe(u.value)+"） ",1),Bt(K("input",{type:"number","onUpdate:modelValue":ge[0]||(ge[0]=Z=>s.daMin=Z),step:"any"},null,512),[[on,s.daMin,void 0,{number:!0}]])]),K("label",null,[ct("Δa 上限（"+Fe(u.value)+"） ",1),Bt(K("input",{type:"number","onUpdate:modelValue":ge[1]||(ge[1]=Z=>s.daMax=Z),step:"any"},null,512),[[on,s.daMax,void 0,{number:!0}]])]),K("label",null,[ge[7]||(ge[7]=ct("Δa 采样点 ",-1)),Bt(K("input",{type:"number","onUpdate:modelValue":ge[2]||(ge[2]=Z=>s.daSteps=Z),min:"1",max:"101",step:"1"},null,512),[[on,s.daSteps,void 0,{number:!0}]])]),K("label",null,[ct("Δs 下限（"+Fe(u.value)+"） ",1),Bt(K("input",{type:"number","onUpdate:modelValue":ge[3]||(ge[3]=Z=>s.dsMin=Z),step:"any"},null,512),[[on,s.dsMin,void 0,{number:!0}]])]),K("label",null,[ct("Δs 上限（"+Fe(u.value)+"） ",1),Bt(K("input",{type:"number","onUpdate:modelValue":ge[4]||(ge[4]=Z=>s.dsMax=Z),step:"any"},null,512),[[on,s.dsMax,void 0,{number:!0}]])]),K("label",null,[ge[8]||(ge[8]=ct("Δs 采样点 ",-1)),Bt(K("input",{type:"number","onUpdate:modelValue":ge[5]||(ge[5]=Z=>s.dsSteps=Z),min:"1",max:"101",step:"1"},null,512),[[on,s.dsSteps,void 0,{number:!0}]])]),K("label",TT,[ge[9]||(ge[9]=ct("每齿距周期相位扫描点数 ",-1)),Bt(K("input",{type:"number","onUpdate:modelValue":ge[6]||(ge[6]=Z=>s.phaseSteps=Z),min:"2",max:"721",step:"1"},null,512),[[on,s.phaseSteps,void 0,{number:!0}]])])]),K("div",wT," 组合数 "+Fe(c.value)+"（Δa×Δs）；内部一律 mm，当前显示单位 "+Fe(u.value)+" 只影响表单换算。 ",1),a.value.length?(ft(),pt("ul",AT,[(ft(!0),pt(tn,null,Lr(a.value,(Z,He)=>(ft(),pt("li",{key:He},"⛔ "+Fe(Z),1))),128))])):qt("",!0),o.value?(ft(),pt("div",RT,Fe(o.value),1)):qt("",!0),K("button",{class:"wide",disabled:!!a.value.length||!!h.value,onClick:F},Fe(h.value?"有作业运行中…":a.value.length?"范围非法或齿轮不兼容，不能启动":"开始公差包络分析"),9,CT),(ft(!0),pt(tn,null,Lr(f.value,Z=>(ft(),pt("div",{key:Z.id,class:Nn(["job",{stale:Z.fingerprint!==fe.value,active:M(Z)}])},[K("div",PT,[K("b",null,Fe(Z.ni)+"×"+Fe(Z.nj)+" 网格",1),K("span",{class:Nn(["status",Z.status])},Fe(M(Z)?"运行中…":Z.status==="done"?"已完成":"已取消 · 可恢复"),3),Z.fingerprint!==fe.value?(ft(),pt("span",DT,"旧快照")):qt("",!0)]),K("div",LT," 基准 z "+Fe(Z.baseline.z1)+"/"+Fe(Z.baseline.z2)+" · m="+Fe(Z.baseline.module)+" mm · α="+Fe(Z.baseline.alphaDeg)+"° · a="+Fe(ae(Z.baseline.centerDistance)),1),Z.fingerprint!==fe.value?(ft(),pt("div",IT," ⚠ 当前基准已改变：此结果归属旧快照，只能查看定位，不能继续/重算，也不会覆盖当前面板。 ")):qt("",!0),K("div",UT,[K("div",NT,[K("div",{class:"fill",style:oa({width:(P(Z).done/P(Z).total*100).toFixed(1)+"%"})},null,4)]),K("span",null,Fe(P(Z).done)+"/"+Fe(P(Z).total),1)]),K("div",FT,[K("span",OT,"安全 "+Fe(Z.counts.safe),1),K("span",BT,"风险 "+Fe(Z.counts.risk),1),K("span",zT,"无效 "+Fe(Z.counts.invalid),1),Z.extremes.worst?(ft(),pt("span",VT,[ct(" 最坏面积 "+Fe(Z.extremes.maxArea.toExponential(2))+" mm² ",1),K("button",{class:"link",onClick:He=>te(Z,Z.extremes.worst.i,Z.extremes.worst.j)},"定位",8,kT)])):qt("",!0)]),K("div",HT,[K("div",{class:"heatmap",style:oa({gridTemplateColumns:"auto repeat("+Z.ni+", 1fr)"})},[(ft(!0),pt(tn,null,Lr(Z.nj,He=>(ft(),pt(tn,{key:"row"+He},[K("div",GT,Fe(ae(Z.axisThickness[Z.nj-He])),1),(ft(!0),pt(tn,null,Lr(Z.ni,qe=>(ft(),pt("button",{key:qe+"-"+He,class:Nn([ee(V(Z,qe-1,Z.nj-He)),S.value&&S.value.id===Z.id&&S.value.i===qe-1&&S.value.j===Z.nj-He?"sel":""]),title:re(Z,qe-1,Z.nj-He),onClick:Re=>te(Z,qe-1,Z.nj-He)},null,10,WT))),128))],64))),128))],4)]),K("div",XT," 行=Δs（上大下小），列=Δa "+Fe(ae(Z.axisCenter[0]))+" → "+Fe(ae(Z.axisCenter[Z.ni-1]))+"； 点击色块定位该组合的最坏位置 ",1),S.value&&S.value.id===Z.id?(ft(),pt("div",$T,[V(Z,S.value.i,S.value.j)?(ft(),pt(tn,{key:0},[K("div",null,[ge[10]||(ge[10]=ct("结论： ",-1)),K("b",{class:Nn(V(Z,S.value.i,S.value.j).verdict==="safe"?"good":V(Z,S.value.i,S.value.j).verdict==="risk"?"bad":"invalid-c")},Fe({safe:"安全 ✅",risk:"风险 ❗",invalid:"无效 ⛔"}[V(Z,S.value.i,S.value.j).verdict]),3)]),K("div",null," 实际中心距 a="+Fe(ae(V(Z,S.value.i,S.value.j).a))+"， Δs="+Fe(ae(V(Z,S.value.i,S.value.j).ds))+"， 扫描相位 "+Fe(V(Z,S.value.i,S.value.j).phasesScanned)+" 个 ",1),V(Z,S.value.i,S.value.j).verdict==="risk"?(ft(),pt("div",qT," 最坏重叠面积 "+Fe(V(Z,S.value.i,S.value.j).maxArea.toExponential(3))+" mm²； 最坏相位 φ₁="+Fe((V(Z,S.value.i,S.value.j).worstPhi1??0).toFixed(4))+" rad （周期内第 "+Fe(V(Z,S.value.i,S.value.j).worstK)+" 点） ",1)):qt("",!0),V(Z,S.value.i,S.value.j).verdict==="invalid"?(ft(),pt("div",YT," 原因："+Fe(j[V(Z,S.value.i,S.value.j).reason??"geometry-degenerate"]),1)):qt("",!0)],64)):(ft(),pt("div",KT,'该样本尚未计算（可先"继续"完成分析）。'))])):qt("",!0),K("div",ZT,[M(Z)?(ft(),pt("button",{key:0,onClick:He=>y(Z)},"取消",8,JT)):Z.status!=="done"&&Z.fingerprint===fe.value?(ft(),pt("button",{key:1,onClick:He=>D(Z)},"继续（只算未完成）",8,QT)):qt("",!0),S.value&&S.value.id===Z.id&&!M(Z)&&Z.fingerprint===fe.value?(ft(),pt("button",{key:2,disabled:m.value,onClick:He=>B(Z)},"局部重算此样本",8,jT)):qt("",!0),K("button",{class:"del",onClick:He=>G(Z)},"删除",8,ew)]),Z.cancelError?(ft(),pt("div",tw,Fe(Z.cancelError),1)):qt("",!0)],2))),128)),n.previewActive?(ft(),pt("button",{key:2,class:"wide exit-preview",onClick:le},"返回当前基准几何")):qt("",!0)]))}}),iw={class:"app"},rw={class:"panel"},sw={class:"units"},aw=["onClick"],ow=["step"],lw=["step"],cw={class:"two"},uw={key:0,class:"err"},hw={key:1,class:"err"},fw={class:"row"},dw={key:0},pw=["step"],mw={class:"row"},gw=["disabled"],_w=["disabled"],vw=["disabled","min","max"],xw=["disabled"],Sw={key:0,class:"report"},Mw={class:"row"},yw={class:"row"},bw={class:"row"},Ew={class:"row"},Tw={class:"row"},ww={class:"row"},Aw={class:"samples"},Rw={class:"viewport"},Cw={key:0,class:"tol-banner"},Pw={class:"readouts"},Dw={key:0,class:"dim-grid"},Lw={class:"mesh-report"},Iw={key:0,class:"warns"},Uw={class:"panel right"},Nw={key:1,class:"tol-disabled"},Fw={class:"row"},Ow={class:"row"},Bw={class:"wide filebtn"},zw={class:"caselist"},Vw={class:"ci"},kw={class:"ca"},Hw=["onClick"],Gw=["onClick"],Ww={key:0,class:"empty"},Xw=Yd({__name:"App",setup(n){const e=an("mm"),t=hr({z1:20,z2:40,m:2,alphaDeg:20,faceWidth:10,centerDistance:60,useStandardCenter:!0}),i=Is(),r=Is(),s=Is(),a=hr({g1:[],g2:[]});function o(){const me={z:Math.round(t.z1),module:t.m,alpha:t.alphaDeg*Mn,faceWidth:t.faceWidth},N={z:Math.round(t.z2),module:t.m,alpha:t.alphaDeg*Mn,faceWidth:t.faceWidth};if(a.g1=qh(me),a.g2=qh(N),a.g1.length||a.g2.length)return;i.value=gs(me),r.value=gs(N);const b=t.useStandardCenter?i.value.pitchR+r.value.pitchR:t.centerDistance;s.value=ku({g1:i.value,g2:r.value,centerDistance:b})}const l=di(()=>!i.value||!r.value||!s.value||a.g1.length||a.g2.length?null:{z1:Math.round(t.z1),z2:Math.round(t.z2),module:t.m,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth,centerDistance:s.value.a}),c=di({get:()=>Po(t.m,e.value),set:me=>t.m=Or(me,e.value)}),u=di({get:()=>Po(t.faceWidth,e.value),set:me=>t.faceWidth=Or(me,e.value)}),f=di({get:()=>Po(t.centerDistance,e.value),set:me=>t.centerDistance=Or(me,e.value)});ki(e,()=>{});const h=an(!0),d=an(0),_=an(.25);let S=0;const m=an(0),p=hr({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0,contactS:0}),w=an(null),P=Is([]),M=an(!1);let A=0;async function R(me){if(!i.value||!r.value||!s.value)return;const N=me,b=Ho(i.value,r.value,s.value,N),U=[ko(i.value.outline,0,0,N)],I=[ko(r.value.outline,s.value.a,0,b)],z=++A;M.value=!0;try{const k=await Ep(U,I);if(z!==A)return;w.value=k.area,P.value=k.regions}finally{z===A&&(M.value=!1)}}const F=Is(null),y=an();let D=null;function B(){!D||!s.value||D.setMeshOverlay(s.value,{...p,contactS:m.value,contactRegions:[P.value]})}Fo(()=>{o(),D=new ZE(y.value),i.value&&r.value&&s.value&&D.setGears(i.value,r.value,s.value.a);const me=N=>{const b=Math.min(.05,(N-S)/1e3||0);if(S=N,h.value&&i.value&&r.value&&s.value&&!F.value){d.value+=_.value*b;const U=2*Math.PI/i.value.input.z;d.value=(d.value%U+U)%U;const I=(d.value-Yh(s.value,i.value,r.value,0).phi1)*i.value.baseR;m.value=G(I)}if(i.value&&r.value&&s.value){const U=Ho(i.value,r.value,s.value,d.value);D.setAngles(d.value,U),p.contactS=m.value,B()}requestAnimationFrame(me)};requestAnimationFrame(me)});function G(me){if(!s.value)return 0;const N=s.value.actionLine,b=s.value.alphaPrime,U=Math.sin(b),I=Math.cos(b),z=(N.p0.x-s.value.pitchPoint.x)*U+(N.p0.y-s.value.pitchPoint.y)*I,k=(N.p1.x-s.value.pitchPoint.x)*U+(N.p1.y-s.value.pitchPoint.y)*I;return me<z?k-(z-me)%(k-z):me>k?z+(me-k)%(k-z):me}ki(()=>[t.z1,t.z2,t.m,t.alphaDeg,t.faceWidth,t.useStandardCenter,t.centerDistance],()=>{o(),D&&i.value&&r.value&&s.value&&D.setGears(i.value,r.value,s.value.a),d.value=0,m.value=0,w.value=null,P.value=[],F.value&&(F.value=null)});function te(me){F.value=me,D&&(me?D.setTolerancePreview(me):(w.value=null,P.value=[],i.value&&r.value&&s.value&&D.setGears(i.value,r.value,s.value.a)))}ki(p,B),ki(m,()=>p.contactS=m.value);function le(){h.value=!1}function V(){h.value=!0}function ee(){h.value||!i.value||!r.value||!s.value||(d.value=Yh(s.value,i.value,r.value,m.value).phi1)}const re=an([]),j=an("未命名案例"),fe=an("");async function ae(){re.value=await sT()}Fo(ae);function xe(me){const N=s.value?.a??t.centerDistance;return{schemaVersion:1,id:aT(),name:j.value,createdAt:Date.now(),updatedAt:Date.now(),note:fe.value,gear1:{z:t.z1,module:t.m,alpha:t.alphaDeg*Mn,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},gear2:{z:t.z2,module:t.m,alpha:t.alphaDeg*Mn,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},centerDistance:t.useStandardCenter?null:N,unit:e.value,outlines:me&&i.value&&r.value?{gear1:i.value.outline,gear2:r.value.outline}:void 0}}async function W(me){await dd(xe(me)),await ae()}function ge(me){cT(xe(me))}async function Z(me){t.z1=me.gear1.z,t.z2=me.gear2.z,t.m=me.gear1.module,t.alphaDeg=me.gear1.alphaDeg,t.faceWidth=me.gear1.faceWidth,me.centerDistance==null?t.useStandardCenter=!0:(t.useStandardCenter=!1,t.centerDistance=me.centerDistance),e.value=me.unit||"mm",j.value=me.name,fe.value=me.note,o(),D&&i.value&&r.value&&s.value&&D.setGears(i.value,r.value,s.value.a)}async function He(me){await rT(me),await ae()}function qe(me){const N=me.target,b=N.files?.[0];if(!b)return;const U=new FileReader;U.onload=async()=>{try{const I=lT(String(U.result));await dd(I),await Z(I),await ae()}catch(I){alert("导入失败："+I.message)}},U.readAsText(b),N.value=""}const Re=di(()=>!i.value||!r.value||!s.value?null:{g1:i.value,g2:r.value,mesh:s.value}),pe=di(()=>{if(!s.value)return[-30,30];const me=s.value,N=Math.sin(me.alphaPrime),b=Math.cos(me.alphaPrime),U=(me.actionLine.p0.x-me.pitchPoint.x)*N+(me.actionLine.p0.y-me.pitchPoint.y)*b,I=(me.actionLine.p1.x-me.pitchPoint.x)*N+(me.actionLine.p1.y-me.pitchPoint.y)*b;return[Math.floor(U*10)/10,Math.ceil(I*10)/10]});function ue(me){return Do(me,e.value)}function Ie(me,N,b=2,U=20){t.z1=me,t.z2=N,t.m=b,t.alphaDeg=U,t.useStandardCenter=!0}return(me,N)=>(ft(),pt("div",iw,[N[67]||(N[67]=K("header",null,[K("h1",null,"直齿圆柱齿轮参数化实验室"),K("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）")],-1)),K("main",null,[K("aside",rw,[K("section",null,[N[26]||(N[26]=K("h2",null,"显示单位（不改变实际尺寸）",-1)),K("div",sw,[(ft(!0),pt(tn,null,Lr(Object.keys(kn(Un)),b=>(ft(),pt("button",{key:b,class:Nn({active:e.value===b}),onClick:U=>e.value=b},Fe(kn(Un)[b].label),11,aw))),128))])]),K("section",null,[N[30]||(N[30]=K("h2",null,"齿轮参数",-1)),K("label",null,[N[27]||(N[27]=ct("压力角 α（度） ",-1)),Bt(K("input",{type:"number","onUpdate:modelValue":N[0]||(N[0]=b=>t.alphaDeg=b),min:"1",max:"45",step:"0.5"},null,512),[[on,t.alphaDeg,void 0,{number:!0}]])]),K("label",null,[ct("模数 m（"+Fe(kn(Un)[e.value].label)+"） ",1),Bt(K("input",{type:"number","onUpdate:modelValue":N[1]||(N[1]=b=>c.value=b),step:kn(Un)[e.value].step},null,8,ow),[[on,c.value,void 0,{number:!0}]])]),K("label",null,[ct("齿宽 b（"+Fe(kn(Un)[e.value].label)+"） ",1),Bt(K("input",{type:"number","onUpdate:modelValue":N[2]||(N[2]=b=>u.value=b),step:kn(Un)[e.value].step},null,8,lw),[[on,u.value,void 0,{number:!0}]])]),K("div",cw,[K("label",null,[N[28]||(N[28]=ct("齿数 z₁ ",-1)),Bt(K("input",{type:"number","onUpdate:modelValue":N[3]||(N[3]=b=>t.z1=b),min:"4",step:"1"},null,512),[[on,t.z1,void 0,{number:!0}]])]),K("label",null,[N[29]||(N[29]=ct("齿数 z₂ ",-1)),Bt(K("input",{type:"number","onUpdate:modelValue":N[4]||(N[4]=b=>t.z2=b),min:"4",step:"1"},null,512),[[on,t.z2,void 0,{number:!0}]])])]),a.g1.length?(ft(),pt("div",uw,Fe(a.g1.join("；")),1)):qt("",!0),a.g2.length?(ft(),pt("div",hw,Fe(a.g2.join("；")),1)):qt("",!0)]),K("section",null,[N[32]||(N[32]=K("h2",null,"中心距",-1)),K("label",fw,[Bt(K("input",{type:"checkbox","onUpdate:modelValue":N[5]||(N[5]=b=>t.useStandardCenter=b)},null,512),[[yr,t.useStandardCenter]]),N[31]||(N[31]=ct(" 使用标准中心距 a₀ = m(z₁+z₂)/2 ",-1))]),t.useStandardCenter?qt("",!0):(ft(),pt("label",dw,[ct("实际中心距 a（"+Fe(kn(Un)[e.value].label)+"） ",1),Bt(K("input",{type:"number","onUpdate:modelValue":N[6]||(N[6]=b=>f.value=b),step:kn(Un)[e.value].step},null,8,pw),[[on,f.value,void 0,{number:!0}]])]))]),K("section",null,[N[35]||(N[35]=K("h2",null,"运动 / 检查",-1)),K("div",mw,[K("button",{onClick:le,disabled:!h.value},"暂停",8,gw),K("button",{onClick:V,disabled:h.value},"继续",8,_w)]),K("label",null,[N[33]||(N[33]=ct("轮1 角速度（rad/s） ",-1)),Bt(K("input",{type:"range","onUpdate:modelValue":N[7]||(N[7]=b=>_.value=b),min:"0",max:"1.5",step:"0.01"},null,512),[[on,_.value,void 0,{number:!0}]])]),K("label",null,[N[34]||(N[34]=ct("接触点沿啮合线 s（mm，暂停可拖动） ",-1)),Bt(K("input",{type:"range",disabled:h.value,"onUpdate:modelValue":N[8]||(N[8]=b=>m.value=b),min:pe.value[0],max:pe.value[1],step:"0.05",onInput:ee},null,40,vw),[[on,m.value,void 0,{number:!0}]])]),K("button",{class:"wide",onClick:N[9]||(N[9]=b=>R(d.value)),disabled:h.value||M.value},Fe(M.value?"Clipper 求交中…":"在当前帧做局部干涉求交（Clipper2 WASM）"),9,xw),w.value!==null?(ft(),pt("div",Sw,[ct(" 重叠面积 = "+Fe(w.value.toExponential(3))+" mm² ",1),K("b",{class:Nn(w.value>1e-6?"bad":"good")},Fe(w.value>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):qt("",!0)]),K("section",null,[N[42]||(N[42]=K("h2",null,"显示选项",-1)),K("label",Mw,[Bt(K("input",{type:"checkbox","onUpdate:modelValue":N[10]||(N[10]=b=>p.showPitchCircle=b)},null,512),[[yr,p.showPitchCircle]]),N[36]||(N[36]=ct(" 节圆/分度圆",-1))]),K("label",yw,[Bt(K("input",{type:"checkbox","onUpdate:modelValue":N[11]||(N[11]=b=>p.showBaseCircle=b)},null,512),[[yr,p.showBaseCircle]]),N[37]||(N[37]=ct(" 基圆",-1))]),K("label",bw,[Bt(K("input",{type:"checkbox","onUpdate:modelValue":N[12]||(N[12]=b=>p.showAddendumCircle=b)},null,512),[[yr,p.showAddendumCircle]]),N[38]||(N[38]=ct(" 齿顶圆",-1))]),K("label",Ew,[Bt(K("input",{type:"checkbox","onUpdate:modelValue":N[13]||(N[13]=b=>p.showDedendumCircle=b)},null,512),[[yr,p.showDedendumCircle]]),N[39]||(N[39]=ct(" 齿根圆",-1))]),K("label",Tw,[Bt(K("input",{type:"checkbox","onUpdate:modelValue":N[14]||(N[14]=b=>p.showActionLine=b)},null,512),[[yr,p.showActionLine]]),N[40]||(N[40]=ct(" 啮合线（理论/实际）",-1))]),K("label",ww,[Bt(K("input",{type:"checkbox","onUpdate:modelValue":N[15]||(N[15]=b=>p.showContact=b)},null,512),[[yr,p.showContact]]),N[41]||(N[41]=ct(" 接触点",-1))])]),K("section",null,[N[43]||(N[43]=K("h2",null,"核对样本",-1)),K("div",Aw,[K("button",{onClick:N[16]||(N[16]=b=>Ie(20,40))},"20/40 标准"),K("button",{onClick:N[17]||(N[17]=b=>Ie(17,17))},"17/17 临界"),K("button",{onClick:N[18]||(N[18]=b=>Ie(16,40))},"16/40 根切"),K("button",{onClick:N[19]||(N[19]=b=>Ie(12,40))},"12/40 极少齿")])])]),K("section",Rw,[K("div",{ref_key:"host",ref:y,class:"canvas-host"},null,512),F.value?(ft(),pt("div",Cw,[...N[44]||(N[44]=[ct(" 公差包络预览：显示的是",-1),K("b",null,"作业快照冻结的基准与最坏相位",-1),ct("（红色＝重叠区，黄点＝最坏位置）， 不是当前参数面板的齿轮。教学近似，非制造认证。 ",-1)])])):qt("",!0),K("div",Pw,[Re.value?(ft(),pt("div",Dw,[K("table",null,[K("thead",null,[K("tr",null,[N[45]||(N[45]=K("th",null,null,-1)),K("th",null,"齿轮 1（z₁="+Fe(t.z1)+"）",1),K("th",null,"齿轮 2（z₂="+Fe(t.z2)+"）",1)])]),K("tbody",null,[K("tr",null,[N[46]||(N[46]=K("td",null,"分度圆直径 d",-1)),K("td",null,Fe(ue(Re.value.g1.pitchR*2)),1),K("td",null,Fe(ue(Re.value.g2.pitchR*2)),1)]),K("tr",null,[N[47]||(N[47]=K("td",null,"基圆直径 d_b",-1)),K("td",null,Fe(ue(Re.value.g1.baseR*2)),1),K("td",null,Fe(ue(Re.value.g2.baseR*2)),1)]),K("tr",null,[N[48]||(N[48]=K("td",null,"齿顶圆 d_a",-1)),K("td",null,Fe(ue(Re.value.g1.addendumR*2)),1),K("td",null,Fe(ue(Re.value.g2.addendumR*2)),1)]),K("tr",null,[N[49]||(N[49]=K("td",null,"齿根圆 d_f",-1)),K("td",null,Fe(ue(Re.value.g1.dedendumR*2)),1),K("td",null,Fe(ue(Re.value.g2.dedendumR*2)),1)]),K("tr",null,[N[50]||(N[50]=K("td",null,"齿距 p = πm",-1)),K("td",null,Fe(ue(Re.value.g1.circularPitch)),1),K("td",null,Fe(ue(Re.value.g2.circularPitch)),1)]),K("tr",null,[N[51]||(N[51]=K("td",null,"基节 p_b",-1)),K("td",null,Fe(ue(Re.value.g1.basePitch)),1),K("td",null,Fe(ue(Re.value.g2.basePitch)),1)]),K("tr",null,[N[52]||(N[52]=K("td",null,"齿顶压力角 α_a",-1)),K("td",null,Fe((Re.value.g1.alphaTip/kn(Mn)).toFixed(2))+"°",1),K("td",null,Fe((Re.value.g2.alphaTip/kn(Mn)).toFixed(2))+"°",1)]),K("tr",null,[K("td",null,"根切风险 (z<"+Fe(Re.value.g1.zMinValue.toFixed(1))+")",1),K("td",{class:Nn(Re.value.g1.undercut?"bad":"good")},Fe(Re.value.g1.undercut?"根切 ❗":"安全"),3),K("td",{class:Nn(Re.value.g2.undercut?"bad":"good")},Fe(Re.value.g2.undercut?"根切 ❗":"安全"),3)])])]),K("div",Lw,[N[62]||(N[62]=K("h3",null,"啮合检查",-1)),K("div",null,[N[53]||(N[53]=ct("标准中心距 a₀：",-1)),K("b",null,Fe(ue(Re.value.mesh.a0)),1)]),K("div",null,[N[54]||(N[54]=ct("实际中心距 a：",-1)),K("b",null,Fe(ue(Re.value.mesh.a)),1),ct("（Δa = "+Fe(ue(Re.value.mesh.deltaA))+"）",1)]),K("div",null,[N[55]||(N[55]=ct("啮合角 α′：",-1)),K("b",null,Fe((Re.value.mesh.alphaPrime/kn(Mn)).toFixed(3))+"°",1)]),K("div",null,[N[56]||(N[56]=ct("节圆半径 r₁′/r₂′：",-1)),K("b",null,Fe(ue(Re.value.mesh.pitchR1))+" / "+Fe(ue(Re.value.mesh.pitchR2)),1)]),K("div",null,[N[57]||(N[57]=ct("实际啮合线长度 g_α：",-1)),K("b",null,Fe(ue(Re.value.mesh.pathOfContact)),1)]),K("div",null,[N[58]||(N[58]=ct("重合度 ε_α = g_α/p_b：",-1)),K("b",{class:Nn(Re.value.mesh.contactRatio<1?"bad":"good")},Fe(Re.value.mesh.contactRatio.toFixed(3)),3)]),K("div",null,[N[59]||(N[59]=ct("圆周/法向侧隙：",-1)),K("b",null,Fe(ue(Re.value.mesh.backlashTangential))+" / "+Fe(ue(Re.value.mesh.backlashNormal)),1)]),K("div",null,[N[60]||(N[60]=ct("顶隙 c：",-1)),K("b",null,Fe(ue(Re.value.mesh.clearance12)),1)]),K("div",null,[N[61]||(N[61]=ct("基节一致：",-1)),K("b",{class:Nn(Re.value.mesh.basePitchMatch?"good":"bad")},Fe(Re.value.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),Re.value.mesh.warnings.length?(ft(),pt("ul",Iw,[(ft(!0),pt(tn,null,Lr(Re.value.mesh.warnings,(b,U)=>(ft(),pt("li",{key:U},"⚠️ "+Fe(b),1))),128))])):qt("",!0),N[63]||(N[63]=K("div",{class:"formula"}," 渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α； 啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。 ",-1))])])):qt("",!0)])]),K("aside",Uw,[l.value?(ft(),_p(nw,{key:0,baseline:l.value,unit:e.value,"preview-active":!!F.value,onPreview:te},null,8,["baseline","unit","preview-active"])):(ft(),pt("div",Nw,"基准齿轮参数非法时不能进行公差包络分析。")),K("section",null,[N[65]||(N[65]=K("h2",null,"案例（IndexedDB）",-1)),Bt(K("input",{"onUpdate:modelValue":N[20]||(N[20]=b=>j.value=b),placeholder:"案例名称"},null,512),[[on,j.value]]),Bt(K("textarea",{"onUpdate:modelValue":N[21]||(N[21]=b=>fe.value=b),placeholder:"备注（可选）",rows:"2"},null,512),[[on,fe.value]]),K("div",Fw,[K("button",{onClick:N[22]||(N[22]=b=>W(!0))},"保存（含轮廓）"),K("button",{onClick:N[23]||(N[23]=b=>W(!1))},"仅参数")]),K("div",Ow,[K("button",{onClick:N[24]||(N[24]=b=>ge(!0))},"导出 JSON+轮廓"),K("button",{onClick:N[25]||(N[25]=b=>ge(!1))},"导出参数")]),K("label",Bw,[N[64]||(N[64]=ct("导入 JSON ",-1)),K("input",{type:"file",accept:"application/json,.json",onChange:qe,hidden:""},null,32)])]),K("section",null,[N[66]||(N[66]=K("h2",null,"已存案例",-1)),K("ul",zw,[(ft(!0),pt(tn,null,Lr(re.value,b=>(ft(),pt("li",{key:b.id},[K("div",Vw,[K("b",null,Fe(b.name),1),K("span",null,Fe(b.gear1.z)+"/"+Fe(b.gear2.z)+" · m="+Fe(b.gear1.module)+" · α="+Fe(b.gear1.alphaDeg)+"°"+Fe(b.outlines?" · 含轮廓":""),1)]),K("div",kw,[K("button",{onClick:U=>Z(b)},"载入",8,Hw),K("button",{class:"del",onClick:U=>He(b.id)},"删",8,Gw)])]))),128)),re.value.length?qt("",!0):(ft(),pt("li",Ww,"暂无案例"))])])])])]))}});mv(Xw).mount("#app");
