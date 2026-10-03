(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ru(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ot={},Cs=[],vi=()=>{},gd=()=>!1,el=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tl=n=>n.startsWith("onUpdate:"),fn=Object.assign,Pu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},tg=Object.prototype.hasOwnProperty,Rt=(n,e)=>tg.call(n,e),ct=Array.isArray,ls=n=>Ma(n)==="[object Map]",mr=n=>Ma(n)==="[object Set]",xh=n=>Ma(n)==="[object Date]",ft=n=>typeof n=="function",Yt=n=>typeof n=="string",Si=n=>typeof n=="symbol",Ut=n=>n!==null&&typeof n=="object",_d=n=>(Ut(n)||ft(n))&&ft(n.then)&&ft(n.catch),vd=Object.prototype.toString,Ma=n=>vd.call(n),ng=n=>Ma(n).slice(8,-1),xd=n=>Ma(n)==="[object Object]",Du=n=>Yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Yr=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},ig=/-\w/g,ei=nl(n=>n.replace(ig,e=>e.slice(1).toUpperCase())),sg=/\B([A-Z])/g,ks=nl(n=>n.replace(sg,"-$1").toLowerCase()),Sd=nl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Tl=nl(n=>n?`on${Sd(n)}`:""),pi=(n,e)=>!Object.is(n,e),So=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Md=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Lu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Sh;const il=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ur(n){if(ct(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Yt(i)?lg(i):ur(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Yt(n)||Ut(n))return n}const rg=/;(?![^(]*\))/g,ag=/:([^]+)/,og=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function lg(n){const e={};return n.replace(og,t=>t.startsWith("/*")?"":t).split(rg).forEach(t=>{if(t){const i=t.split(ag);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ln(n){let e="";if(Yt(n))e=n;else if(ct(n))for(let t=0;t<n.length;t++){const i=Ln(n[t]);i&&(e+=i+" ")}else if(Ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ug=Ru(cg);function yd(n){return!!n||n===""}function hg(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Sr(n[s],e[s],t);return i}function Mh(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let a=-1;for(let o=0;o<i.length;o++)if(!s[o]&&Sr(r,i[o],t)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function fg(n,e,t){let i=ls(n),s=ls(e);if(i||s||(i=mr(n),s=mr(e),i||s))return i&&s?Mh(n,e,t):!1;const r=Object.keys(n).length,a=Object.keys(e).length;if(r!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Sr(n[o],e[o],t))return!1}return String(n)===String(e)}function yh(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const a=i(n,e,t);return s.delete(n),r.delete(e),a}function Sr(n,e,t){if(n===e)return!0;let i=xh(n),s=xh(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=Si(n),s=Si(e),i||s?n===e:(i=ct(n),s=ct(e),i||s?i&&s?yh(n,e,t,hg):!1:(i=Ut(n),s=Ut(e),i||s?!i||!s?!1:yh(n,e,t,fg):String(n)===String(e))))}function bd(n,e){return n.findIndex(t=>Sr(t,e))}const Ed=n=>!!(n&&n.__v_isRef===!0),Ce=n=>Yt(n)?n:n==null?"":ct(n)||Ut(n)&&(n.toString===vd||!ft(n.toString))?Ed(n)?Ce(n.value):JSON.stringify(n,Td,2):String(n),Td=(n,e)=>Ed(e)?Td(n,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Al(i,r)+" =>"]=s,t),{})}:mr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Al(t))}:Si(e)?Al(e):Ut(e)&&!ct(e)&&!xd(e)?String(e):e,Al=(n,e="")=>{var t;return Si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class dg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&cn&&(cn.active?(this.parent=cn,this.index=(cn.scopes||(cn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){if(this._on>0&&--this._on===0){if(cn===this)cn=this.prevScope;else{let e=cn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pg(){return cn}let Bt;const wl=new WeakSet;class Ad{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&(cn.active?cn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wl.has(this)&&(wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bh(this),Rd(this);const e=Bt,t=ti;Bt=this,ti=!0;try{return this.fn()}finally{Pd(this),Bt=e,ti=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nu(e);this.deps=this.depsTail=void 0,bh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let wd=0,Kr,Zr;function Cd(n,e=!1){if(n.flags|=8,e){n.next=Zr,Zr=n;return}n.next=Kr,Kr=n}function Iu(){wd++}function Uu(){if(--wd>0)return;if(Zr){let e=Zr;for(Zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Kr;){let e=Kr;for(Kr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Rd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Nu(i),mg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ec(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Dd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Dd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===aa)||(n.globalVersion=aa,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ec(n))))return;n.flags|=2;const e=n.dep,t=Bt,i=ti;Bt=n,ti=!0;try{Rd(n);const s=n.fn(n._value);(e.version===0||pi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Bt=t,ti=i,Pd(n),n.flags&=-3}}function Nu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Nu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function mg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ti=!0;const Ld=[];function qi(){Ld.push(ti),ti=!1}function Yi(){const n=Ld.pop();ti=n===void 0?!0:n}function bh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Bt;Bt=void 0;try{e()}finally{Bt=t}}}let aa=0;class gg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Bt||!ti||Bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Bt)t=this.activeLink=new gg(Bt,this),Bt.deps?(t.prevDep=Bt.depsTail,Bt.depsTail.nextDep=t,Bt.depsTail=t):Bt.deps=Bt.depsTail=t,Id(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Bt.depsTail,t.nextDep=void 0,Bt.depsTail.nextDep=t,Bt.depsTail=t,Bt.deps===t&&(Bt.deps=i)}return t}trigger(e){this.version++,aa++,this.notify(e)}notify(e){Iu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Uu()}}}function Id(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Id(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Tc=new WeakMap,Ns=Symbol(""),Ac=Symbol(""),oa=Symbol("");function gn(n,e,t){if(ti&&Bt){let i=Tc.get(n);i||Tc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Fu),s.map=i,s.key=t),s.track()}}function Bi(n,e,t,i,s,r){const a=Tc.get(n);if(!a){aa++;return}const o=l=>{l&&l.trigger()};if(Iu(),e==="clear")a.forEach(o);else{const l=ct(n),c=l&&Du(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===oa||!Si(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(oa)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ns)),ls(n)&&o(a.get(Ac)));break;case"delete":l||(o(a.get(Ns)),ls(n)&&o(a.get(Ac)));break;case"set":ls(n)&&o(a.get(Ns));break}}Uu()}function Hs(n){const e=Ct(n);return e===n||(gn(e,"iterate",oa),Xn(n))?e:Mi(n)?cs(n)?e.map(t=>us($n(t))):e.map(us):e.map($n)}function sl(n){return gn(n=Ct(n),"iterate",oa),n}function hi(n,e){return Mi(n)?us(cs(n)?$n(e):e):$n(e)}const _g={__proto__:null,[Symbol.iterator](){return Cl(this,Symbol.iterator,n=>hi(this,n))},concat(...n){return Hs(this).concat(...n.map(e=>ct(e)?Hs(e):e))},entries(){return Cl(this,"entries",n=>(n[1]=hi(this,n[1]),n))},every(n,e){return Ri(this,"every",n,e,void 0,arguments)},filter(n,e){return Ri(this,"filter",n,e,t=>t.map(i=>hi(this,i)),arguments)},find(n,e){return Ri(this,"find",n,e,t=>hi(this,t),arguments)},findIndex(n,e){return Ri(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ri(this,"findLast",n,e,t=>hi(this,t),arguments)},findLastIndex(n,e){return Ri(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ri(this,"forEach",n,e,void 0,arguments)},includes(...n){return Rl(this,"includes",n)},indexOf(...n){return Rl(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return Rl(this,"lastIndexOf",n)},map(n,e){return Ri(this,"map",n,e,void 0,arguments)},pop(){return Dr(this,"pop")},push(...n){return Dr(this,"push",n)},reduce(n,...e){return Eh(this,"reduce",n,e)},reduceRight(n,...e){return Eh(this,"reduceRight",n,e)},shift(){return Dr(this,"shift")},some(n,e){return Ri(this,"some",n,e,void 0,arguments)},splice(...n){return Dr(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return Dr(this,"unshift",n)},values(){return Cl(this,"values",n=>hi(this,n))}};function Cl(n,e,t){const i=sl(n),s=i[e]();return i!==n&&!Xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const vg=Array.prototype;function Ri(n,e,t,i,s,r){const a=sl(n),o=a!==n&&!Xn(n),l=a[e];if(l!==vg[e]){const f=l.apply(n,r);return o?$n(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,hi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Eh(n,e,t,i){const s=sl(n),r=s!==n&&!Xn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=hi(n,c)),t.call(this,c,hi(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?hi(n,l):l}function Rl(n,e,t){const i=Ct(n);gn(i,"iterate",oa);const s=i[e](...t);return(s===-1||s===!1)&&zu(t[0])?(t[0]=Ct(t[0]),i[e](...t)):s}function Dr(n,e,t=[]){qi(),Iu();const i=Ct(n)[e].apply(n,t);return Uu(),Yi(),i}const xg=Ru("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Si));function Sg(n){Si(n)||(n=String(n));const e=Ct(this);return gn(e,"has",n),e.hasOwnProperty(n)}class Nd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Pg:zd:r?Bd:Od).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ct(e);if(!s){let l;if(a&&(l=_g[t]))return l;if(t==="hasOwnProperty")return Sg}const o=Reflect.get(e,t,qt(e)?e:i);if((Si(t)?Ud.has(t):xg(t))||(s||gn(e,"get",t),r))return o;if(qt(o)){const l=a&&Du(t)?o:o.value;return s&&Ut(l)?Cc(l):l}return Ut(o)?s?Cc(o):Rs(o):o}}class Fd extends Nd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=ct(e)&&Du(t);if(!this._isShallow){const c=Mi(r);if(!Xn(i)&&!Mi(i)&&(r=Ct(r),i=Ct(i)),!a&&qt(r)&&!qt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:Rt(e,t),l=Reflect.set(e,t,i,qt(e)?e:s);return e===Ct(s)&&l&&(o?pi(i,r)&&Bi(e,"set",t,i):Bi(e,"add",t,i)),l}deleteProperty(e,t){const i=Rt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Bi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Si(t)||!Ud.has(t))&&gn(e,"has",t),i}ownKeys(e){return gn(e,"iterate",ct(e)?"length":Ns),Reflect.ownKeys(e)}}class Mg extends Nd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const yg=new Fd,bg=new Mg,Eg=new Fd(!0);const wc=n=>n,Ua=n=>Reflect.getPrototypeOf(n);function Tg(n,e,t){return function(...i){const s=this.__v_raw,r=Ct(s),a=ls(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?wc:e?us:$n;return!e&&gn(r,"iterate",l?Ac:Ns),fn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Na(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ag(n,e){const t={get(s){const r=this.__v_raw,a=Ct(r),o=Ct(s);n||(pi(s,o)&&gn(a,"get",s),gn(a,"get",o));const{has:l}=Ua(a),c=e?wc:n?us:$n;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&gn(Ct(s),"iterate",Ns),s.size},has(s){const r=this.__v_raw,a=Ct(r),o=Ct(s);return n||(pi(s,o)&&gn(a,"has",s),gn(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=Ct(o),c=e?wc:n?us:$n;return!n&&gn(l,"iterate",Ns),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return fn(t,n?{add:Na("add"),set:Na("set"),delete:Na("delete"),clear:Na("clear")}:{add(s){const r=Ct(this),a=Ua(r),o=Ct(s),l=!e&&!Xn(s)&&!Mi(s)?o:s;return a.has.call(r,l)||pi(s,l)&&a.has.call(r,s)||pi(o,l)&&a.has.call(r,o)||(r.add(l),Bi(r,"add",l,l)),this},set(s,r){!e&&!Xn(r)&&!Mi(r)&&(r=Ct(r));const a=Ct(this),{has:o,get:l}=Ua(a);let c=o.call(a,s);c||(s=Ct(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?pi(r,u)&&Bi(a,"set",s,r):Bi(a,"add",s,r),this},delete(s){const r=Ct(this),{has:a,get:o}=Ua(r);let l=a.call(r,s);l||(s=Ct(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Bi(r,"delete",s,void 0),c},clear(){const s=Ct(this),r=s.size!==0,a=s.clear();return r&&Bi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Tg(s,n,e)}),t}function Ou(n,e){const t=Ag(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Rt(t,s)&&s in i?t:i,s,r)}const wg={get:Ou(!1,!1)},Cg={get:Ou(!1,!0)},Rg={get:Ou(!0,!1)};const Od=new WeakMap,Bd=new WeakMap,zd=new WeakMap,Pg=new WeakMap;function Dg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rs(n){return Mi(n)?n:Bu(n,!1,yg,wg,Od)}function Lg(n){return Bu(n,!1,Eg,Cg,Bd)}function Cc(n){return Bu(n,!0,bg,Rg,zd)}function Bu(n,e,t,i,s){if(!Ut(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Dg(ng(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function cs(n){return Mi(n)?cs(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function Xn(n){return!!(n&&n.__v_isShallow)}function zu(n){return n?!!n.__v_raw:!1}function Ct(n){const e=n&&n.__v_raw;return e?Ct(e):n}function Ig(n){return!Rt(n,"__v_skip")&&Object.isExtensible(n)&&Md(n,"__v_skip",!0),n}const $n=n=>Ut(n)?Rs(n):n,us=n=>Ut(n)?Cc(n):n;function qt(n){return n?n.__v_isRef===!0:!1}function rn(n){return Vd(n,!1)}function Fa(n){return Vd(n,!0)}function Vd(n,e){return qt(n)?n:new Ug(n,e)}class Ug{constructor(e,t){this.dep=new Fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ct(e),this._value=t?e:$n(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xn(e)||Mi(e);e=i?e:Ct(e),pi(e,t)&&(this._rawValue=e,this._value=i?e:$n(e),this.dep.trigger())}}function ut(n){return qt(n)?n.value:n}const Ng={get:(n,e,t)=>e==="__v_raw"?n:ut(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return qt(s)&&!qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function kd(n){return cs(n)?n:new Proxy(n,Ng)}class Fg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=aa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Bt!==this)return Cd(this,!0),!0}get value(){const e=this.dep.track();return Dd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Og(n,e,t=!1){let i,s;return ft(n)?i=n:(i=n.get,s=n.set),new Fg(i,s,t)}const Oa={},Do=new WeakMap;let As;function Bg(n,e=!1,t=As){if(t){let i=Do.get(t);i||Do.set(t,i=[]),i.push(n)}}function zg(n,e,t=Ot){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=M=>s?M:Xn(M)||s===!1||s===0?zi(M,1):zi(M);let u,f,h,d,_=!1,y=!1;if(qt(n)?(f=()=>n.value,_=Xn(n)):cs(n)?(f=()=>c(n),_=!0):ct(n)?(y=!0,_=n.some(M=>cs(M)||Xn(M)),f=()=>n.map(M=>{if(qt(M))return M.value;if(cs(M))return c(M);if(ft(M))return l?l(M,2):M()})):ft(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){qi();try{h()}finally{Yi()}}const M=As;As=u;try{return l?l(n,3,[d]):n(d)}finally{As=M}}:f=vi,e&&s){const M=f,w=s===!0?1/0:s;f=()=>zi(M(),w)}const m=pg(),p=()=>{u.stop(),m&&m.active&&Pu(m.effects,u)};if(r&&e){const M=e;e=(...w)=>{const R=M(...w);return p(),R}}let A=y?new Array(n.length).fill(Oa):Oa;const D=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const w=u.run();if(M||s||_||(y?w.some((R,F)=>pi(R,A[F])):pi(w,A))){h&&h();const R=As;As=u;try{const F=[w,A===Oa?void 0:y&&A[0]===Oa?[]:A,d];A=w,l?l(e,3,F):e(...F)}finally{As=R}}}else u.run()};return o&&o(D),u=new Ad(f),u.scheduler=a?()=>a(D,!1):D,d=M=>Bg(M,!1,u),h=u.onStop=()=>{const M=Do.get(u);if(M){if(l)l(M,4);else for(const w of M)w();Do.delete(u)}},e?i?D(!0):A=u.run():a?a(D.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function zi(n,e=1/0,t){if(e<=0||!Ut(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,qt(n))zi(n.value,e,t);else if(ct(n))for(let i=0;i<n.length;i++)zi(n[i],e,t);else if(mr(n)||ls(n))n.forEach(i=>{zi(i,e,t)});else if(xd(n)){for(const i in n)zi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ya(n,e,t,i){try{return i?n(...i):n()}catch(s){rl(s,e,t)}}function ii(n,e,t,i){if(ft(n)){const s=ya(n,e,t,i);return s&&_d(s)&&s.catch(r=>{rl(r,e,t)}),s}if(ct(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ii(n[r],e,t,i));return s}}function rl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ot;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){qi(),ya(r,null,10,[n,l,c]),Yi();return}}Vg(n,t,s,i,a)}function Vg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const En=[];let ci=-1;const hr=[];let as=null,nr=0;const Hd=Promise.resolve();let Lo=null;function kg(n){const e=Lo||Hd;return n?e.then(this?n.bind(this):n):e}function Hg(n){let e=ci+1,t=En.length;for(;e<t;){const i=e+t>>>1,s=En[i],r=la(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Vu(n){if(!(n.flags&1)){const e=la(n),t=En[En.length-1];!t||!(n.flags&2)&&e>=la(t)?En.push(n):En.splice(Hg(e),0,n),n.flags|=1,Gd()}}function Gd(){Lo||(Lo=Hd.then(Xd))}function Gg(n){if(!ct(n))as&&n.id===-1?as.splice(nr+1,0,n):n.flags&1||(hr.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)hr.push(n[e]);Gd()}function Th(n,e,t=ci+1){for(;t<En.length;t++){const i=En[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;En.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wd(n){if(hr.length){const e=[...new Set(hr)].sort((t,i)=>la(t)-la(i));if(hr.length=0,as){for(let t=0;t<e.length;t++)as.push(e[t]);return}for(as=e,nr=0;nr<as.length;nr++){const t=as[nr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}as=null,nr=0}}const la=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xd(n){try{for(ci=0;ci<En.length;ci++){const e=En[ci];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ya(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ci<En.length;ci++){const e=En[ci];e&&(e.flags&=-2)}ci=-1,En.length=0,Wd(),Lo=null,(En.length||hr.length)&&Xd()}}let Wn=null,$d=null;function Io(n){const e=Wn;return Wn=n,$d=n&&n.type.__scopeId||null,e}function Wg(n,e=Wn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Fh(-1);const r=Io(e),a=Fs.length;let o;try{o=n(...s)}finally{for(let l=Fs.length;l>a;l--)gp();Io(r),i._d&&Fh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ft(n,e){if(Wn===null)return n;const t=ul(Wn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=Ot]=e[s];r&&(ft(r)&&(r={mounted:r,updated:r}),r.deep&&zi(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function _s(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(qi(),ii(l,t,8,[n.el,o,n,e]),Yi())}}function Xg(n,e){if(Tn){let t=Tn.provides;const i=Tn.parent&&Tn.parent.provides;i===t&&(t=Tn.provides=Object.create(i)),t[n]=e}}function Mo(n,e,t=!1){const i=G_();if(i||fr){let s=fr?fr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ft(e)?e.call(i&&i.proxy):e}}const $g=Symbol.for("v-scx"),qg=()=>Mo($g);function Ps(n,e,t){return qd(n,e,t)}function qd(n,e,t=Ot){const{immediate:i,deep:s,flush:r,once:a}=t,o=fn({},t),l=e&&i||!e&&r!=="post";let c;if(ha){if(r==="sync"){const d=qg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=vi,d.resume=vi,d.pause=vi,d}}const u=Tn;o.call=(d,_,y)=>ii(d,u,_,y);let f=!1;r==="post"?o.scheduler=d=>{Dn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():Vu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=zg(n,e,o);return ha&&(c?c.push(h):l&&h()),h}function Yg(n,e,t){const i=this.proxy,s=Yt(n)?n.includes(".")?Yd(i,n):()=>i[n]:n.bind(i,i);let r;ft(e)?r=e:(r=e.handler,t=e);const a=ba(this),o=qd(s,r.bind(i),t);return a(),o}function Yd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Kg=Symbol("_vte"),al=n=>n.__isTeleport,Pl=Symbol("_leaveCb");function Zg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ki){e=t;break}}return e}function Kd(n){if(!Hu(n))return al(n.type)&&n.children?Zg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ft(t.default))return t.default()}}function ku(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;ku(al(t.type)&&Kd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Jg(n,e){return ft(n)?fn({name:n.name},e,{setup:n}):n}function Zd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ah(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Uo=new WeakMap;function Jr(n,e,t,i,s=!1){if(ct(n)){n.forEach((y,m)=>Jr(y,e&&(ct(e)?e[m]:e),t,i,s));return}if(Qr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Jr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ul(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ot?o.refs={}:o.refs,f=o.setupState,h=Ct(f),d=f===Ot?gd:y=>Ah(u,y)?!1:Rt(h,y),_=(y,m)=>!(m&&Ah(u,m));if(c!=null&&c!==l){if(wh(e),Yt(c))u[c]=null,d(c)&&(f[c]=null);else if(qt(c)){const y=e;_(c,y.k)&&(c.value=null),y.k&&(u[y.k]=null)}}if(ft(l))ya(l,o,12,[a,u]);else{const y=Yt(l),m=qt(l);if(y||m){const p=()=>{if(n.f){const A=y?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)ct(A)&&Pu(A,r);else if(ct(A))A.includes(r)||A.push(r);else if(y)u[l]=[r],d(l)&&(f[l]=u[l]);else{const D=[r];_(l,n.k)&&(l.value=D),n.k&&(u[n.k]=D)}}else y?(u[l]=a,d(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const A=()=>{p(),Uo.delete(n)};A.id=-1,Uo.set(n,A),Dn(A,t)}else wh(n),p()}}}function wh(n){const e=Uo.get(n);e&&(e.flags|=8,Uo.delete(n))}il().requestIdleCallback;il().cancelIdleCallback;const Qr=n=>!!n.type.__asyncLoader,Hu=n=>n.type.__isKeepAlive;function Qg(n,e){Jd(n,"a",e)}function jg(n,e){Jd(n,"da",e)}function Jd(n,e,t=Tn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ol(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Hu(s.parent.vnode)&&e_(i,e,t,s),s=s.parent}}function e_(n,e,t,i){const s=ol(e,n,i,!0);Qd(()=>{Pu(i[e],s)},t)}function ol(n,e,t=Tn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{qi();const o=ba(t),l=ii(e,t,n,a);return o(),Yi(),l});return i?s.unshift(r):s.push(r),r}}const Ji=n=>(e,t=Tn)=>{(!ha||n==="sp")&&ol(n,(...i)=>e(...i),t)},t_=Ji("bm"),yo=Ji("m"),n_=Ji("bu"),i_=Ji("u"),s_=Ji("bum"),Qd=Ji("um"),r_=Ji("sp"),a_=Ji("rtg"),o_=Ji("rtc");function l_(n,e=Tn){ol("ec",n,e)}const c_=Symbol.for("v-ndc");function vs(n,e,t,i){let s;const r=t,a=ct(n);if(a||Yt(n)){const o=a&&cs(n);let l=!1,c=!1;o&&(l=!Xn(n),c=Mi(n),n=sl(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?us($n(n[u])):$n(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(Ut(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Rc=n=>n?Sp(n)?ul(n):Rc(n.parent):null,jr=fn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rc(n.parent),$root:n=>Rc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ep(n),$forceUpdate:n=>n.f||(n.f=()=>{Vu(n.update)}),$nextTick:n=>n.n||(n.n=kg.bind(n.proxy)),$watch:n=>Yg.bind(n)}),Dl=(n,e)=>n!==Ot&&!n.__isScriptSetup&&Rt(n,e),u_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Dl(i,e))return a[e]=1,i[e];if(s!==Ot&&Rt(s,e))return a[e]=2,s[e];if(Rt(r,e))return a[e]=3,r[e];if(t!==Ot&&Rt(t,e))return a[e]=4,t[e];Pc&&(a[e]=0)}}const c=jr[e];let u,f;if(c)return e==="$attrs"&&gn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Ot&&Rt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Rt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Dl(s,e)?(s[e]=t,!0):i!==Ot&&Rt(i,e)?(i[e]=t,!0):Rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==Ot&&o[0]!=="$"&&Rt(n,o)||Dl(e,o)||Rt(r,o)||Rt(i,o)||Rt(jr,o)||Rt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ch(n){return ct(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pc=!0;function h_(n){const e=ep(n),t=n.proxy,i=n.ctx;Pc=!1,e.beforeCreate&&Rh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:D,unmounted:M,render:w,renderTracked:R,renderTriggered:F,errorCaptured:S,serverPrefetch:I,expose:k,inheritAttrs:q,components:re,directives:ce,filters:X}=e;if(c&&f_(c,i,null),a)for(const ie in a){const me=a[ie];ft(me)&&(i[ie]=me.bind(t))}if(s){const ie=s.call(t,t);Ut(ie)&&(n.data=Rs(ie))}if(Pc=!0,r)for(const ie in r){const me=r[ie],he=ft(me)?me.bind(t,t):ft(me.get)?me.get.bind(t,t):vi,ge=!ft(me)&&ft(me.set)?me.set.bind(t):vi,ve=yn({get:he,set:ge});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Ue=>ve.value=Ue})}if(o)for(const ie in o)jd(o[ie],i,t,ie);if(l){const ie=ft(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(me=>{Xg(me,ie[me])})}u&&Rh(u,n,"c");function ue(ie,me){ct(me)?me.forEach(he=>ie(he.bind(t))):me&&ie(me.bind(t))}if(ue(t_,f),ue(yo,h),ue(n_,d),ue(i_,_),ue(Qg,y),ue(jg,m),ue(l_,S),ue(o_,R),ue(a_,F),ue(s_,A),ue(Qd,M),ue(r_,I),ct(k))if(k.length){const ie=n.exposed||(n.exposed={});k.forEach(me=>{Object.defineProperty(ie,me,{get:()=>t[me],set:he=>t[me]=he,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===vi&&(n.render=w),q!=null&&(n.inheritAttrs=q),re&&(n.components=re),ce&&(n.directives=ce),I&&Zd(n)}function f_(n,e,t=vi){ct(n)&&(n=Dc(n));for(const i in n){const s=n[i];let r;Ut(s)?"default"in s?r=Mo(s.from||i,s.default,!0):r=Mo(s.from||i):r=Mo(s),qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Rh(n,e,t){ii(ct(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function jd(n,e,t,i){let s=i.includes(".")?Yd(t,i):()=>t[i];if(Yt(n)){const r=e[n];ft(r)&&Ps(s,r)}else if(ft(n))Ps(s,n.bind(t));else if(Ut(n))if(ct(n))n.forEach(r=>jd(r,e,t,i));else{const r=ft(n.handler)?n.handler.bind(t):e[n.handler];ft(r)&&Ps(s,r,n)}}function ep(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>No(l,c,a,!0)),No(l,e,a)),Ut(e)&&r.set(e,l),l}function No(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&No(n,r,t,!0),s&&s.forEach(a=>No(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=d_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const d_={data:Ph,props:Dh,emits:Dh,methods:kr,computed:kr,beforeCreate:Mn,created:Mn,beforeMount:Mn,mounted:Mn,beforeUpdate:Mn,updated:Mn,beforeDestroy:Mn,beforeUnmount:Mn,destroyed:Mn,unmounted:Mn,activated:Mn,deactivated:Mn,errorCaptured:Mn,serverPrefetch:Mn,components:kr,directives:kr,watch:m_,provide:Ph,inject:p_};function Ph(n,e){return e?n?function(){return fn(ft(n)?n.call(this,this):n,ft(e)?e.call(this,this):e)}:e:n}function p_(n,e){return kr(Dc(n),Dc(e))}function Dc(n){if(ct(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Mn(n,e){return n?[...new Set([].concat(n,e))]:e}function kr(n,e){return n?fn(Object.create(null),n,e):e}function Dh(n,e){return n?ct(n)&&ct(e)?[...new Set([...n,...e])]:fn(Object.create(null),Ch(n),Ch(e??{})):e}function m_(n,e){if(!n)return e;if(!e)return n;const t=fn(Object.create(null),n);for(const i in e)t[i]=Mn(n[i],e[i]);return t}function tp(){return{app:null,config:{isNativeTag:gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let g_=0;function __(n,e){return function(i,s=null){ft(i)||(i=fn({},i)),s!=null&&!Ut(s)&&(s=null);const r=tp(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:g_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:K_,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&ft(u.install)?(a.add(u),u.install(c,...f)):ft(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Hi(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ul(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ii(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=fr;fr=c;try{return u()}finally{fr=f}}};return c}}let fr=null;const v_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ei(e)}Modifiers`]||n[`${ks(e)}Modifiers`];function x_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ot;let s=t;const r=e.startsWith("update:"),a=r&&v_(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Yt(u)?u.trim():u)),a.number&&(s=s.map(Lu)));let o,l=i[o=Tl(e)]||i[o=Tl(ei(e))];!l&&r&&(l=i[o=Tl(ks(e))]),l&&ii(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ii(c,n,6,s)}}const S_=new WeakMap;function np(n,e,t=!1){const i=t?S_:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!ft(n)){const l=c=>{const u=np(c,e,!0);u&&(o=!0,fn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Ut(n)&&i.set(n,null),null):(ct(r)?r.forEach(l=>a[l]=null):fn(a,r),Ut(n)&&i.set(n,a),a)}function ll(n,e){return!n||!el(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Rt(n,e[0].toLowerCase()+e.slice(1))||Rt(n,ks(e))||Rt(n,e))}function Lh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:y}=n,m=Io(n);let p,A;try{if(t.shapeFlag&4){const M=s||i,w=M;p=fi(c.call(w,M,u,f,d,h,_)),A=o}else{const M=e;p=fi(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),A=e.props?o:M_(o)}}catch(M){Fs.length=0,rl(M,n,1),p=Hi(Ki)}let D=p;if(A&&y!==!1){const M=Object.keys(A),{shapeFlag:w}=D;M.length&&w&7&&(r&&M.some(tl)&&(A=y_(A,r)),D=gr(D,A,!1,!0))}if(t.dirs&&(D=gr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition){const M=al(D.type)&&Kd(D)||D;ku(M,t.transition)}return p=D,Io(m),p}const M_=n=>{let e;for(const t in n)(t==="class"||t==="style"||el(t))&&((e||(e={}))[t]=n[t]);return e},y_=(n,e)=>{const t={};for(const i in n)(!tl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function b_(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ih(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(ip(a,i,h)&&!ll(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ih(i,a,c):!0:!!a;return!1}function Ih(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(ip(e,n,r)&&!ll(t,r))return!0}return!1}function ip(n,e,t){const i=n[t],s=e[t];return t==="style"&&Ut(i)&&Ut(s)?!Sr(i,s):i!==s}function E_({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const sp={},rp=()=>Object.create(sp),ap=n=>Object.getPrototypeOf(n)===sp;function T_(n,e,t,i=!1){const s={},r=rp();n.propsDefaults=Object.create(null),op(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Lg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function A_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Ct(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ll(n.emitsOptions,h))continue;const d=e[h];if(l)if(Rt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const _=ei(h);s[_]=Lc(l,o,_,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{op(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!Rt(e,f)&&((u=ks(f))===f||!Rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Lc(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!Rt(e,f))&&(delete r[f],c=!0)}c&&Bi(n.attrs,"set","")}function op(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Yr(l))continue;const c=e[l];let u;s&&Rt(s,u=ei(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:ll(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=Ct(t),c=o||Ot;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Lc(s,l,f,c[f],n,!Rt(c,f))}}return a}function Lc(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=Rt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ft(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ba(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ks(t))&&(i=!0))}return i}const w_=new WeakMap;function lp(n,e,t=!1){const i=t?w_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!ft(n)){const u=f=>{l=!0;const[h,d]=lp(f,e,!0);fn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Ut(n)&&i.set(n,Cs),Cs;if(ct(r))for(let u=0;u<r.length;u++){const f=ei(r[u]);Uh(f)&&(a[f]=Ot)}else if(r)for(const u in r){const f=ei(u);if(Uh(f)){const h=r[u],d=a[f]=ct(h)||ft(h)?{type:h}:fn({},h),_=d.type;let y=!1,m=!0;if(ct(_))for(let p=0;p<_.length;++p){const A=_[p],D=ft(A)&&A.name;if(D==="Boolean"){y=!0;break}else D==="String"&&(m=!1)}else y=ft(_)&&_.name==="Boolean";d[0]=y,d[1]=m,(y||Rt(d,"default"))&&o.push(f)}}const c=[a,o];return Ut(n)&&i.set(n,c),c}function Uh(n){return n[0]!=="$"&&!Yr(n)}const Gu=n=>n==="_"||n==="_ctx"||n==="$stable",Wu=n=>ct(n)?n.map(fi):[fi(n)],C_=(n,e,t)=>{if(e._n)return e;const i=Wg((...s)=>Wu(e(...s)),t);return i._c=!1,i},cp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Gu(s))continue;const r=n[s];if(ft(r))e[s]=C_(s,r,i);else if(r!=null){const a=Wu(r);e[s]=()=>a}}},up=(n,e)=>{const t=Wu(e);n.slots.default=()=>t},hp=(n,e,t)=>{for(const i in e)(t||!Gu(i))&&(n[i]=e[i])},R_=(n,e,t)=>{const i=n.slots=rp();if(n.vnode.shapeFlag&32){const s=e._;s?(hp(i,e,t),t&&Md(i,"_",s,!0)):cp(e,i)}else e&&up(n,e)},P_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Ot;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:hp(s,e,t):(r=!e.$stable,cp(e,s)),a=e}else e&&(up(n,e),a={default:1});if(r)for(const o in s)!Gu(o)&&a[o]==null&&delete s[o]},Dn=N_;function D_(n){return L_(n)}function L_(n,e){const t=il();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=vi,insertStaticContent:_}=n,y=(C,B,U,$=null,G=null,H=null,ne=void 0,ae=null,J=!!B.dynamicChildren)=>{if(C===B)return;C&&!Lr(C,B)&&($=de(C),Ue(C,G,H,!0),C=null),B.patchFlag===-2&&(J=!1,B.dynamicChildren=null),B.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(B.dynamicChildren===Cs&&(B.dynamicChildren=[]),B.dynamicChildren.hasOnce=!0);const{type:j,ref:Ae,shapeFlag:P}=B;switch(j){case cl:m(C,B,U,$);break;case Ki:p(C,B,U,$);break;case Il:C==null&&A(B,U,$,ne);break;case mn:re(C,B,U,$,G,H,ne,ae,J);break;default:P&1?w(C,B,U,$,G,H,ne,ae,J):P&6?ce(C,B,U,$,G,H,ne,ae,J):(P&64||P&128)&&j.process(C,B,U,$,G,H,ne,ae,J,He)}Ae!=null&&G?Jr(Ae,C&&C.ref,H,B||C,!B):Ae==null&&C&&C.ref!=null&&Jr(C.ref,null,H,C,!0)},m=(C,B,U,$)=>{if(C==null)i(B.el=o(B.children),U,$);else{const G=B.el=C.el;B.children!==C.children&&c(G,B.children)}},p=(C,B,U,$)=>{C==null?i(B.el=l(B.children||""),U,$):B.el=C.el},A=(C,B,U,$)=>{[C.el,C.anchor]=_(C.children,B,U,$,C.el,C.anchor)},D=({el:C,anchor:B},U,$)=>{let G;for(;C&&C!==B;)G=h(C),i(C,U,$),C=G;i(B,U,$)},M=({el:C,anchor:B})=>{let U;for(;C&&C!==B;)U=h(C),s(C),C=U;s(B)},w=(C,B,U,$,G,H,ne,ae,J)=>{if(B.type==="svg"?ne="svg":B.type==="math"&&(ne="mathml"),C==null)R(B,U,$,G,H,ne,ae,J);else{const j=C.el&&C.el._isVueCE?C.el:null;try{j&&j._beginPatch(),I(C,B,G,H,ne,ae,J)}finally{j&&j._endPatch()}}},R=(C,B,U,$,G,H,ne,ae)=>{let J,j;const{props:Ae,shapeFlag:P,transition:Pe,dirs:Le}=C;if(J=C.el=a(C.type,H,Ae&&Ae.is,Ae),P&8?u(J,C.children):P&16&&S(C.children,J,null,$,G,Ll(C,H),ne,ae),Le&&_s(C,null,$,"created"),F(J,C,C.scopeId,ne,$),Ae){for(const g in Ae)g!=="value"&&!Yr(g)&&r(J,g,null,Ae[g],H,$);"value"in Ae&&r(J,"value",null,Ae.value,H),(j=Ae.onVnodeBeforeMount)&&ai(j,$,C)}Le&&_s(C,null,$,"beforeMount");const E=I_(G,Pe);E&&Pe.beforeEnter(J),i(J,B,U),((j=Ae&&Ae.onVnodeMounted)||E||Le)&&Dn(()=>{try{j&&ai(j,$,C),E&&Pe.enter(J),Le&&_s(C,null,$,"mounted")}finally{}},G)},F=(C,B,U,$,G)=>{if(U&&d(C,U),$)for(let H=0;H<$.length;H++)d(C,$[H]);if(G){let H=G.subTree;if(B===H||mp(H.type)&&(H.ssContent===B||H.ssFallback===B)){const ne=G.vnode;F(C,ne,ne.scopeId,ne.slotScopeIds,G.parent)}}},S=(C,B,U,$,G,H,ne,ae,J=0)=>{for(let j=J;j<C.length;j++){const Ae=C[j]=ae?Fi(C[j]):fi(C[j]);y(null,Ae,B,U,$,G,H,ne,ae)}},I=(C,B,U,$,G,H,ne)=>{const ae=B.el=C.el;let{patchFlag:J,dynamicChildren:j,dirs:Ae}=B;J|=C.patchFlag&16;const P=C.props||Ot,Pe=B.props||Ot;let Le;if(U&&xs(U,!1),(Le=Pe.onVnodeBeforeUpdate)&&ai(Le,U,B,C),Ae&&_s(B,C,U,"beforeUpdate"),U&&xs(U,!0),j&&(!C.dynamicChildren||C.dynamicChildren.length!==j.length)&&(J=0,ne=!1,j=null),(P.innerHTML&&Pe.innerHTML==null||P.textContent&&Pe.textContent==null)&&u(ae,""),j?k(C.dynamicChildren,j,ae,U,$,Ll(B,G),H):ne||me(C,B,ae,null,U,$,Ll(B,G),H,!1),J>0){if(J&16)q(ae,P,Pe,U,G);else if(J&2&&P.class!==Pe.class&&r(ae,"class",null,Pe.class,G),J&4&&r(ae,"style",P.style,Pe.style,G),J&8){const E=B.dynamicProps;for(let g=0;g<E.length;g++){const O=E[g],Q=P[O],se=Pe[O];(se!==Q||O==="value")&&r(ae,O,Q,se,G,U)}}J&1&&C.children!==B.children&&u(ae,B.children)}else!ne&&j==null&&q(ae,P,Pe,U,G);((Le=Pe.onVnodeUpdated)||Ae)&&Dn(()=>{Le&&ai(Le,U,B,C),Ae&&_s(B,C,U,"updated")},$)},k=(C,B,U,$,G,H,ne)=>{for(let ae=0;ae<B.length;ae++){const J=C[ae],j=B[ae],Ae=J.el&&(J.type===mn||!Lr(J,j)||J.shapeFlag&198)?f(J.el):U;y(J,j,Ae,null,$,G,H,ne,!0)}},q=(C,B,U,$,G)=>{if(B!==U){if(B!==Ot)for(const H in B)!Yr(H)&&!(H in U)&&r(C,H,B[H],null,G,$);for(const H in U){if(Yr(H))continue;const ne=U[H],ae=B[H];ne!==ae&&H!=="value"&&r(C,H,ae,ne,G,$)}"value"in U&&r(C,"value",B.value,U.value,G)}},re=(C,B,U,$,G,H,ne,ae,J)=>{const j=B.el=C?C.el:o(""),Ae=B.anchor=C?C.anchor:o("");let{patchFlag:P,dynamicChildren:Pe,slotScopeIds:Le}=B;Le&&(ae=ae?ae.concat(Le):Le),C==null?(i(j,U,$),i(Ae,U,$),S(B.children||[],U,Ae,G,H,ne,ae,J)):P>0&&P&64&&Pe&&C.dynamicChildren&&C.dynamicChildren.length===Pe.length?(k(C.dynamicChildren,Pe,U,G,H,ne,ae),(B.key!=null||G&&B===G.subTree)&&fp(C,B,!0)):me(C,B,U,Ae,G,H,ne,ae,J)},ce=(C,B,U,$,G,H,ne,ae,J)=>{B.slotScopeIds=ae,C==null?B.shapeFlag&512?G.ctx.activate(B,U,$,ne,J):X(B,U,$,G,H,ne,J):ee(C,B,J)},X=(C,B,U,$,G,H,ne)=>{const ae=C.component=H_(C,$,G);if(Hu(C)&&(ae.ctx.renderer=He),W_(ae,!1,ne),ae.asyncDep){if(G&&G.registerDep(ae,ue,ne),!C.el){const J=ae.subTree=Hi(Ki);p(null,J,B,U),C.placeholder=J.el}}else ue(ae,C,B,U,G,H,ne)},ee=(C,B,U)=>{const $=B.component=C.component;if(b_(C,B,U))if($.asyncDep&&!$.asyncResolved){B.el=C.el,ie($,B,U);return}else $.next=B,$.update();else B.el=C.el,$.vnode=B},ue=(C,B,U,$,G,H,ne)=>{const ae=()=>{if(C.isMounted){let{next:P,bu:Pe,u:Le,parent:E,vnode:g}=C;{const De=dp(C);if(De){P&&(P.el=g.el,ie(C,P,ne)),De.asyncDep.then(()=>{Dn(()=>{C.isUnmounted||j()},G)});return}}let O=P,Q;xs(C,!1),P?(P.el=g.el,ie(C,P,ne)):P=g,Pe&&So(Pe),(Q=P.props&&P.props.onVnodeBeforeUpdate)&&ai(Q,E,P,g),xs(C,!0);const se=Lh(C),we=C.subTree;C.subTree=se,y(we,se,f(we.el),de(we),C,G,H),P.el=se.el,O===null&&E_(C,se.el),Le&&Dn(Le,G),(Q=P.props&&P.props.onVnodeUpdated)&&Dn(()=>ai(Q,E,P,g),G)}else{let P;const{el:Pe,props:Le}=B,{bm:E,m:g,parent:O,root:Q,type:se}=C,we=Qr(B);xs(C,!1),E&&So(E),!we&&(P=Le&&Le.onVnodeBeforeMount)&&ai(P,O,B),xs(C,!0);{Q.ce&&Q.ce._hasShadowRoot()&&Q.ce._injectChildStyle(se,C.parent?C.parent.type:void 0);const De=C.subTree=Lh(C);y(null,De,U,$,C,G,H),B.el=De.el}if(g&&Dn(g,G),!we&&(P=Le&&Le.onVnodeMounted)){const De=B;Dn(()=>ai(P,O,De),G)}(B.shapeFlag&256||O&&Qr(O.vnode)&&O.vnode.shapeFlag&256)&&C.a&&Dn(C.a,G),C.isMounted=!0,B=U=$=null}};C.scope.on();const J=C.effect=new Ad(ae);C.scope.off();const j=C.update=J.run.bind(J),Ae=C.job=J.runIfDirty.bind(J);Ae.i=C,Ae.id=C.uid,J.scheduler=()=>Vu(Ae),xs(C,!0),j()},ie=(C,B,U)=>{B.component=C;const $=C.vnode.props;C.vnode=B,C.next=null,A_(C,B.props,$,U),P_(C,B.children,U),qi(),Th(C),Yi()},me=(C,B,U,$,G,H,ne,ae,J=!1)=>{const j=C&&C.children,Ae=C?C.shapeFlag:0,P=B.children,{patchFlag:Pe,shapeFlag:Le}=B;if(Pe>0){if(Pe&128){ge(j,P,U,$,G,H,ne,ae,J);return}else if(Pe&256){he(j,P,U,$,G,H,ne,ae,J);return}}Le&8?(Ae&16&&nt(j,G,H),P!==j&&u(U,P)):Ae&16?Le&16?ge(j,P,U,$,G,H,ne,ae,J):nt(j,G,H,!0):(Ae&8&&u(U,""),Le&16&&S(P,U,$,G,H,ne,ae,J))},he=(C,B,U,$,G,H,ne,ae,J)=>{C=C||Cs,B=B||Cs;const j=C.length,Ae=B.length,P=Math.min(j,Ae);let Pe;for(Pe=0;Pe<P;Pe++){const Le=B[Pe]=J?Fi(B[Pe]):fi(B[Pe]);y(C[Pe],Le,U,null,G,H,ne,ae,J)}j>Ae?nt(C,G,H,!0,!1,P):S(B,U,$,G,H,ne,ae,J,P)},ge=(C,B,U,$,G,H,ne,ae,J)=>{let j=0;const Ae=B.length;let P=C.length-1,Pe=Ae-1;for(;j<=P&&j<=Pe;){const Le=C[j],E=B[j]=J?Fi(B[j]):fi(B[j]);if(Lr(Le,E))y(Le,E,U,null,G,H,ne,ae,J);else break;j++}for(;j<=P&&j<=Pe;){const Le=C[P],E=B[Pe]=J?Fi(B[Pe]):fi(B[Pe]);if(Lr(Le,E))y(Le,E,U,null,G,H,ne,ae,J);else break;P--,Pe--}if(j>P){if(j<=Pe){const Le=Pe+1,E=Le<Ae?B[Le].el:$;for(;j<=Pe;)y(null,B[j]=J?Fi(B[j]):fi(B[j]),U,E,G,H,ne,ae,J),j++}}else if(j>Pe)for(;j<=P;)Ue(C[j],G,H,!0),j++;else{const Le=j,E=j,g=new Map;for(j=E;j<=Pe;j++){const Re=B[j]=J?Fi(B[j]):fi(B[j]);Re.key!=null&&g.set(Re.key,j)}let O,Q=0;const se=Pe-E+1;let we=!1,De=0;const pe=new Array(se);for(j=0;j<se;j++)pe[j]=0;for(j=Le;j<=P;j++){const Re=C[j];if(Q>=se){Ue(Re,G,H,!0);continue}let Xe;if(Re.key!=null)Xe=g.get(Re.key);else for(O=E;O<=Pe;O++)if(pe[O-E]===0&&Lr(Re,B[O])){Xe=O;break}Xe===void 0?Ue(Re,G,H,!0):(pe[Xe-E]=j+1,Xe>=De?De=Xe:we=!0,y(Re,B[Xe],U,null,G,H,ne,ae,J),Q++)}const Se=we?U_(pe):Cs;for(O=Se.length-1,j=se-1;j>=0;j--){const Re=E+j,Xe=B[Re],Ne=B[Re+1],ze=Re+1<Ae?Ne.el||pp(Ne):$;pe[j]===0?y(null,Xe,U,ze,G,H,ne,ae,J):we&&(O<0||j!==Se[O]?ve(Xe,U,ze,2):O--)}}},ve=(C,B,U,$,G=null)=>{const{el:H,type:ne,transition:ae,children:J,shapeFlag:j}=C;if(j&6){ve(C.component.subTree,B,U,$);return}if(j&128){C.suspense.move(B,U,$);return}if(j&64){ne.move(C,B,U,He);return}if(ne===mn){i(H,B,U);for(let P=0;P<J.length;P++)ve(J[P],B,U,$);i(C.anchor,B,U);return}if(ne===Il){D(C,B,U);return}if($!==2&&j&1&&ae)if($===0)ae.persisted&&!H[Pl]?i(H,B,U):(ae.beforeEnter(H),i(H,B,U),Dn(()=>ae.enter(H),G));else{const{leave:P,delayLeave:Pe,afterLeave:Le}=ae,E=()=>{C.ctx.isUnmounted?s(H):i(H,B,U)},g=()=>{const O=H._isLeaving||!!H[Pl];H._isLeaving&&H[Pl](!0),ae.persisted&&!O?E():P(H,()=>{E(),Le&&Le()})};Pe?Pe(H,E,g):g()}else i(H,B,U)},Ue=(C,B,U,$=!1,G=!1)=>{const{type:H,props:ne,ref:ae,children:J,dynamicChildren:j,shapeFlag:Ae,patchFlag:P,dirs:Pe,cacheIndex:Le,memo:E}=C;if((P===-2||j&&j.hasOnce)&&(G=!1),ae!=null&&(qi(),Jr(ae,null,U,C,!0),Yi()),Le!=null&&(!C.ctx||C.ctx===B)&&(B.renderCache[Le]=void 0),Ae&256){B.ctx.deactivate(C);return}const g=Ae&1&&Pe,O=!Qr(C);let Q;if(O&&(Q=ne&&ne.onVnodeBeforeUnmount)&&ai(Q,B,C),Ae&6)tt(C.component,U,$);else{if(Ae&128){C.suspense.unmount(U,$);return}g&&_s(C,null,B,"beforeUnmount"),Ae&64?C.type.remove(C,B,U,He,$):j&&!j.hasOnce&&(H!==mn||P>0&&P&64)?nt(j,B,U,!1,!0):(H===mn&&P&384||!G&&Ae&16)&&nt(J,B,U),$&&ye(C)}const se=E!=null&&Le==null;(O&&(Q=ne&&ne.onVnodeUnmounted)||g||se)&&Dn(()=>{Q&&ai(Q,B,C),g&&_s(C,null,B,"unmounted"),se&&(C.el=null)},U)},ye=C=>{const{type:B,el:U,anchor:$,transition:G}=C;if(B===mn){We(U,$);return}if(B===Il){M(C),G&&!G.persisted&&G.afterLeave&&G.afterLeave();return}const H=()=>{s(U),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(C.shapeFlag&1&&G&&!G.persisted){const{leave:ne,delayLeave:ae}=G,J=()=>ne(U,H);ae?ae(C.el,H,J):J()}else H()},We=(C,B)=>{let U;for(;C!==B;)U=h(C),s(C),C=U;s(B)},tt=(C,B,U)=>{const{bum:$,scope:G,job:H,subTree:ne,um:ae,m:J,a:j}=C;Nh(J),Nh(j),$&&So($),G.stop(),H?(H.flags|=8,Ue(ne,C,B,U)):C.vnode.el&&ne&&(ne.transition=C.vnode.transition,Ue(ne,C,B,U)),ae&&Dn(ae,B),Dn(()=>{C.isUnmounted=!0},B)},nt=(C,B,U,$=!1,G=!1,H=0)=>{for(let ne=H;ne<C.length;ne++)Ue(C[ne],B,U,$,G)},de=C=>{if(C.shapeFlag&6)return de(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const B=h(C.anchor||C.el),U=B&&B[Kg];return U?h(U):B};let _e=!1;const be=(C,B,U)=>{let $;C==null?B._vnode&&(Ue(B._vnode,null,null,!0),$=B._vnode.component):y(B._vnode||null,C,B,null,null,null,U),B._vnode=C,_e||(_e=!0,Th($),Wd(),_e=!1)},He={p:y,um:Ue,m:ve,r:ye,mt:X,mc:S,pc:me,pbc:k,n:de,o:n};return{render:be,hydrate:void 0,createApp:__(be)}}function Ll({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function xs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function I_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function fp(n,e,t=!1){const i=n.children,s=e.children;if(ct(i)&&ct(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Fi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&fp(a,o)),o.type===cl&&(o.patchFlag===-1&&(o=s[r]=Fi(o)),o.el=a.el),o.type===Ki&&!o.el&&(o.el=a.el)}}function U_(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function dp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dp(e)}function Nh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function pp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?pp(e.subTree):null}const mp=n=>n.__isSuspense;function N_(n,e){e&&e.pendingBranch?ct(n)?e.effects.push(...n):e.effects.push(n):Gg(n)}const mn=Symbol.for("v-fgt"),cl=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Il=Symbol.for("v-stc"),Fs=[];let On=null;function Mt(n=!1){Fs.push(On=n?null:[])}function gp(){Fs.pop(),On=Fs[Fs.length-1]||null}let ca=1;function Fh(n,e=!1){ca+=n,n<0&&On&&e&&(On.hasOnce=!0)}function _p(n){return n.dynamicChildren=ca>0?On||Cs:null,gp(),ca>0&&On&&On.push(n),n}function Et(n,e,t,i,s,r){return _p(z(n,e,t,i,s,r,!0))}function F_(n,e,t,i,s){return _p(Hi(n,e,t,i,s,!0))}function vp(n){return n?n.__v_isVNode===!0:!1}function Lr(n,e){return n.type===e.type&&n.key===e.key}const xp=({key:n})=>n??null,bo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Yt(n)||qt(n)||ft(n)?{i:Wn,r:n,k:e,f:!!t}:n:null);function z(n,e=null,t=null,i=0,s=null,r=n===mn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xp(e),ref:e&&bo(e),scopeId:$d,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wn};return o?(Fo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Yt(t)?8:16),ca>0&&!a&&On&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&On.push(l),l}const Hi=O_;function O_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===c_)&&(n=Ki),vp(n)){const o=gr(n,e,!0);return t&&Fo(o,t),ca>0&&!r&&On&&(o.shapeFlag&6?On[On.indexOf(n)]=o:On.push(o)),o.patchFlag=-2,o}if(Y_(n)&&(n=n.__vccOpts),e){e=B_(e);let{class:o,style:l}=e;o&&!Yt(o)&&(e.class=Ln(o)),Ut(l)&&(zu(l)&&!ct(l)&&(l=fn({},l)),e.style=ur(l))}const a=Yt(n)?1:mp(n)?128:al(n)?64:Ut(n)?4:ft(n)?2:0;return z(n,e,t,i,s,a,r,!0)}function B_(n){return n?zu(n)||ap(n)?fn({},n):n:null}function gr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?z_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&xp(c),ref:e&&e.ref?t&&r?ct(r)?r.concat(bo(e)):[r,bo(e)]:bo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gr(n.ssContent),ssFallback:n.ssFallback&&gr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&ku(u,l.clone(u)),u}function rt(n=" ",e=0){return Hi(cl,null,n,e)}function Qt(n="",e=!1){return e?(Mt(),F_(Ki,null,n)):Hi(Ki,null,n)}function fi(n){return n==null||typeof n=="boolean"?Hi(Ki):ct(n)?Hi(mn,null,n.slice()):vp(n)?Fi(n):Hi(cl,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gr(n)}function Fo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ct(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ap(e)?e._ctx=Wn:s===3&&Wn&&(Wn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ft(e)){if(i&65){Fo(n,{default:e});return}e={default:e,_ctx:Wn},t=32}else e=String(e),i&64?(t=16,e=[rt(e)]):t=8;n.children=e,n.shapeFlag|=t}function z_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ln([e.class,i.class]));else if(s==="style")e.style=ur([e.style,i.style]);else if(el(s)){const r=e[s],a=i[s];a&&r!==a&&!(ct(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!tl(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function ai(n,e,t,i=null){ii(n,e,7,[t,i])}const V_=tp();let k_=0;function H_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||V_,r={uid:k_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(i,s),emitsOptions:np(i,s),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=x_.bind(null,r),n.ce&&n.ce(r),r}let Tn=null;const G_=()=>Tn||Wn;let Oo,ua;{const n=il(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Oo=e("__VUE_INSTANCE_SETTERS__",t=>Tn=t),ua=e("__VUE_SSR_SETTERS__",t=>ha=t)}const ba=n=>{const e=Tn;return Oo(n),n.scope.on(),()=>{n.scope.off(),Oo(e)}},Oh=()=>{Tn&&Tn.scope.off(),Oo(null)};function Sp(n){return n.vnode.shapeFlag&4}let ha=!1;function W_(n,e=!1,t=!1){e&&ua(e);const{props:i,children:s}=n.vnode,r=Sp(n);T_(n,i,r,e),R_(n,s,t||e);const a=r?X_(n,e):void 0;return e&&ua(!1),a}function X_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,u_);const{setup:i}=t;if(i){qi();const s=n.setupContext=i.length>1?q_(n):null,r=ba(n),a=ya(i,n,0,[n.props,s]),o=_d(a);if(Yi(),r(),(o||n.sp)&&!Qr(n)&&Zd(n),o){if(a.then(Oh,Oh),e)return a.then(l=>{ua(!0);try{Bh(n,l,e)}finally{ua(!1)}}).catch(l=>{rl(l,n,0)});n.asyncDep=a}else Bh(n,a)}else Mp(n)}function Bh(n,e,t){ft(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ut(e)&&(n.setupState=kd(e)),Mp(n)}function Mp(n,e,t){const i=n.type;n.render||(n.render=i.render||vi);{const s=ba(n);qi();try{h_(n)}finally{Yi(),s()}}}const $_={get(n,e){return gn(n,"get",""),n[e]}};function q_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,$_),slots:n.slots,emit:n.emit,expose:e}}function ul(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(kd(Ig(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in jr)return jr[t](n)},has(e,t){return t in e||t in jr}})):n.proxy}function Y_(n){return ft(n)&&"__vccOpts"in n}const yn=(n,e)=>Og(n,e,ha),K_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ic;const zh=typeof window<"u"&&window.trustedTypes;if(zh)try{Ic=zh.createPolicy("vue",{createHTML:n=>n})}catch{}const yp=Ic?n=>Ic.createHTML(n):n=>n,Z_="http://www.w3.org/2000/svg",J_="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,Vh=Ni&&Ni.createElement("template"),Q_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ni.createElementNS(Z_,n):e==="mathml"?Ni.createElementNS(J_,n):t?Ni.createElement(n,{is:t}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Vh.innerHTML=yp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Vh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},j_=Symbol("_vtc");function ev(n,e,t){const i=n[j_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const kh=Symbol("_vod"),tv=Symbol("_vsh"),nv=Symbol(""),iv=/(?:^|;)\s*display\s*:/;function sv(n,e,t){const i=n.style,s=Yt(t);let r=!1;if(t&&!s){if(e)if(Yt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Hr(i,o,"")}else for(const a in e)t[a]==null&&Hr(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?av(n,a,!Yt(e)&&e?e[a]:void 0,o)||Hr(i,a,o):Hr(i,a,"")}}else if(s){if(e!==t){const a=i[nv];a&&(t+=";"+a),i.cssText=t,r=iv.test(t)}}else e&&n.removeAttribute("style");kh in n&&(n[kh]=r?i.display:"",n[tv]&&(i.display="none"))}const Ba=/\s*!important$/;function Hr(n,e,t){if(ct(t))t.forEach(i=>Hr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Ba.test(t)?n.setProperty(e,t.replace(Ba,""),"important"):n.setProperty(e,t);else{const i=rv(n,e);Ba.test(t)?n.setProperty(ks(i),t.replace(Ba,""),"important"):n[i]=t}}const Hh=["Webkit","Moz","ms"],Ul={};function rv(n,e){const t=Ul[e];if(t)return t;let i=ei(e);if(i!=="filter"&&i in n)return Ul[e]=i;i=Sd(i);for(let s=0;s<Hh.length;s++){const r=Hh[s]+i;if(r in n)return Ul[e]=r}return e}function av(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Yt(i)&&t===i}const Gh="http://www.w3.org/1999/xlink";function Wh(n,e,t,i,s,r=ug(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gh,e.slice(6,e.length)):n.setAttributeNS(Gh,e,t):t==null||r&&!yd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Si(t)?String(t):t)}function Xh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?yp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=yd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function ws(n,e,t,i){n.addEventListener(e,t,i)}function ov(n,e,t,i){n.removeEventListener(e,t,i)}const $h=Symbol("_vei");function lv(n,e,t,i,s=null){const r=n[$h]||(n[$h]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=hv(e);if(i){const c=r[e]=pv(i,s);ws(n,o,c,l)}else a&&(ov(n,o,a,l),r[e]=void 0)}}const cv=/(Once|Passive|Capture)$/,uv=/^on:?(?:Once|Passive|Capture)$/;function hv(n){let e,t;for(;(t=n.match(cv))&&!uv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ks(n.slice(2)),e]}let Nl=0;const fv=Promise.resolve(),dv=()=>Nl||(fv.then(()=>Nl=0),Nl=Date.now());function pv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(ct(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&ii(c,e,5,o)}}else ii(s,e,5,[i])};return t.value=n,t.attached=dv(),t}const qh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mv=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?ev(n,i,a):e==="style"?sv(n,t,i):el(e)?tl(e)||lv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gv(n,e,i,a))?(Xh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wh(n,e,i,a,r,e!=="value")):n._isVueCE&&(_v(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Yt(i)))?Xh(n,ei(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wh(n,e,i,a))};function gv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qh(e)&&ft(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qh(e)&&Yt(t)?!1:e in n}function _v(n,e){const t=n._def.props;if(!t)return!1;const i=ei(e);return Array.isArray(t)?t.some(s=>ei(s)===i):Object.keys(t).some(s=>ei(s)===i)}const Bo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ct(e)?t=>So(e,t):e};function vv(n){n.target.composing=!0}function Yh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ds=Symbol("_assign"),za=Symbol("_initialValue");function Fl(n,e,t){return e&&(n=n.trim()),t&&(n=Lu(n)),n}const Kt={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[za]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[za]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ds]=Bo(s);const r=i||s.props&&s.props.type==="number";ws(n,e?"change":"input",a=>{a.target.composing||n[Ds](Fl(n.value,t,r))}),(t||r)&&ws(n,"change",()=>{n.value=Fl(n.value,t,r)}),e||(ws(n,"compositionstart",vv),ws(n,"compositionend",Yh),ws(n,"change",Yh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[za];delete n[za],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Ds](Fl(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Ds]=Bo(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Lu(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Ss={deep:!0,created(n,e,t){n[Ds]=Bo(t),ws(n,"change",()=>{const i=n._modelValue,s=xv(n),r=n.checked,a=n[Ds];if(ct(i)){const o=bd(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){const c=[...i];c.splice(o,1),a(c)}}else if(mr(i)){const o=new Set(i);r?o.add(s):o.delete(s),a(o)}else a(bp(n,r))})},mounted:Kh,beforeUpdate(n,e,t){n[Ds]=Bo(t),Kh(n,e,t)}};function Kh(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(ct(e))s=bd(e,i.props.value)>-1;else if(mr(e))s=e.has(i.props.value);else{if(e===t)return;s=Sr(e,bp(n,!0))}n.checked!==s&&(n.checked=s)}function xv(n){return"_value"in n?n._value:n.value}function bp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Sv=fn({patchProp:mv},Q_);let Zh;function Mv(){return Zh||(Zh=D_(Sv))}const yv=((...n)=>{const e=Mv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ev(i);if(!s)return;const r=e._component;!ft(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,bv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function bv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ev(n){return Yt(n)?document.querySelector(n):n}const ui=Math.PI/180,Va={haStar:1,cStar:.25,rhoFStar:.38};function Tv(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function Av(n){return Math.tan(n)-n}function Jh(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function Qh(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function Gr(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function wv(n,e,t,i){const s=[];for(let r=0;r<=i;r++){const a=e+(t-e)*r/i;s.push(Gr(n,a))}return s}function zo(n,e=16){const{z:t,module:i,alpha:s}=n,r=n.thicknessDelta??0,a=i*t/2,o=a*Math.cos(s),l=a+Va.haStar*i,c=a-(Va.haStar+Va.cStar)*i,u=Math.PI*i,f=u*Math.cos(s),h=Math.PI*i/2+r,d=2*Math.PI/t,_=o>c,y=Av(s),m=Math.PI/(2*t)+y+r/(2*a),p=Jh(l,o),A=Math.atan(p),D=p-Math.atan(p),M=m-D,w=2*l*M,R=M<=0,F=2/(Math.sin(s)*Math.sin(s)),S=t<F,I=be=>({x:-be.x,y:be.y}),k=_?0:Jh(c,o),q=(be,He,Ve,C)=>{const B=[];for(let U=0;U<=C;U++){const $=He+(Ve-He)*U/C,G=Qh(Tv(o,$),m);B.push(be===1?I(G):G)}return B},re=6,ce=be=>{const He=-be,Ve=Math.PI/2+He*m,C=q(be,k,k,1);if(!_)return{j:C[0],jAngle:Math.atan2(C[0].y,C[0].x),fillet:[],flankLo:null};const B=Math.PI/2+He*(d/2),U=(o*o-c*c)/(2*c),$=Math.abs(Ve-B),G=Math.sin($),H=G<1?c*G/(1-G):1/0,ne=Math.max(0,Math.min(Va.rhoFStar*i,U*.999,H*.999)),ae=c+ne,J=Math.asin(Math.min(1,ne/ae)),j=be===1?Ve-J:Ve+J,Ae=Gr(ae,j),P=Gr(c,j),Pe=Math.sqrt(Math.max(0,ae*ae-ne*ne)),Le=Gr(Pe,Ve),E=Math.atan2(P.y-Ae.y,P.x-Ae.x);let O=Math.atan2(Le.y-Ae.y,Le.x-Ae.x)-E;for(;O>Math.PI;)O-=2*Math.PI;for(;O<-Math.PI;)O+=2*Math.PI;O=Math.abs(O)*-be;const Q=[];for(let se=0;se<=re;se++){const we=E+O*se/re;Q.push({x:Ae.x+ne*Math.cos(we),y:Ae.y+ne*Math.sin(we)})}return{j:P,jAngle:j,fillet:Q,flankLo:C[0]}},X=ce(1),ee=ce(-1),ue=q(1,k,p,e),ie=q(-1,k,p,e),me=ue[e],he=ie[e],ge=Math.atan2(me.y,me.x),ve=Math.atan2(he.y,he.x),Ue=[];Ue.push(...X.fillet),X.flankLo&&Ue.push(X.flankLo),Ue.push(...ue.slice(1));let ye=ve-ge;for(;ye>Math.PI;)ye-=2*Math.PI;for(;ye<-Math.PI;)ye+=2*Math.PI;const We=Math.max(4,Math.ceil(Math.abs(ye)/d*24));Ue.push(...wv(l,ge,ge+ye,We).slice(1));for(let be=e-1;be>=0;be--)Ue.push(ie[be]);ee.flankLo&&(Ue.push(ee.flankLo),Ue.push(ee.fillet[ee.fillet.length-1])),Ue.push(...ee.fillet.slice(0,-1).reverse());const tt=[],nt=6,de=be=>{const He=tt[tt.length-1];(!He||Math.hypot(be.x-He.x,be.y-He.y)>1e-10)&&tt.push(be)};for(let be=0;be<t;be++){const He=be*d,Ve=Ue.map(U=>Qh(U,He)),C=ee.jAngle+He,B=X.jAngle+(be+1)*d;for(const U of Ve.slice(0,-1))de(U);for(let U=1;U<=nt;U++){const $=C+(B-C)*U/nt;de(Gr(c,$))}}if(tt.length>1){const be=tt[0],He=tt[tt.length-1];Math.hypot(be.x-He.x,be.y-He.y)<1e-10&&tt.pop()}const _e=Array.from({length:t},(be,He)=>Math.PI/2+He*d);return{input:n,pitchR:a,baseR:o,addendumR:l,dedendumR:c,baseAboveRoot:_,circularPitch:u,basePitch:f,toothThickness:h,thicknessDelta:r,beta:m,taTip:p,zMinValue:F,undercut:S,alphaTip:A,tipThickness:w,pointed:R,toothProfile:Ue,outline:tt,toothCenterAngles:_e,jAngleRight:X.jAngle,jAngleLeft:ee.jAngle}}function rr(n,e,t,i){const s=Math.cos(i),r=Math.sin(i);return n.map(a=>({x:e+a.x*s-a.y*r,y:t+a.x*r+a.y*s}))}function Vo(n){const e=[];if((!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),n.thicknessDelta!==void 0){const t=Math.PI*n.module/2;(!Number.isFinite(n.thicknessDelta)||Math.abs(n.thicknessDelta)>=t)&&e.push(`齿厚偏差 |Δs| 必须 < πm/2 = ${t.toFixed(4)} mm（齿厚与槽宽均须为正）`)}return e}function Ep(n){const{g1:e,g2:t,centerDistance:i}=n,s=e.pitchR+t.pitchR,r=e.input.alpha,a=Math.min(1,Math.max(-1,s*Math.cos(r)/i)),o=Math.acos(a),l=e.baseR/Math.cos(o),c=t.baseR/Math.cos(o),u=i-s,f=Ue=>Math.tan(Ue)-Ue,h=2*i*(f(o)-f(r)),d=h*Math.cos(o),_=i-e.addendumR-t.dedendumR,y=i-t.addendumR-e.dedendumR,m=Math.abs(e.basePitch-t.basePitch),p=m<1e-6,A=[],D=i<e.addendumR+t.addendumR;D&&A.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(_<0||y<0)&&A.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?A.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):A.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||A.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const M={x:l,y:0},w=Math.sin(o),R=Math.cos(o),F=-l*w,S={x:M.x+F*w,y:M.y+F*R},I=c*w,k={x:M.x+I*w,y:M.y+I*R},q=(Ue,ye)=>{const We=M.x-Ue,tt=M.y,nt=2*(We*w+tt*R),de=We*We+tt*tt-ye*ye,_e=nt*nt-4*de;if(_e<0)return[];const be=Math.sqrt(_e);return[(-nt-be)/2,(-nt+be)/2]},re=q(0,e.addendumR),X=q(i,t.addendumR).filter(Ue=>Ue<=1e-9),ee=re.filter(Ue=>Ue>=-1e-9),ue=X.length?Math.max(...X):F,ie=ee.length?Math.min(...ee):I,me={x:M.x+ue*w,y:M.y+ue*R},he={x:M.x+ie*w,y:M.y+ie*R},ge=Math.max(0,ie-ue),ve=ge/e.basePitch;return{a0:s,a:i,alphaPrime:o,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:_,clearance21:y,basePitchMatch:p,basePitchDiff:m,addendumOverlap:D,actionLine:{p0:me,p1:he},tangentLine:{p0:S,p1:k},pitchPoint:M,pathOfContact:ge,contactRatio:ve,ok:p&&!D,warnings:A}}function Uc(n,e,t,i){const s=n.alphaPrime,r=Math.sin(s),a=Math.cos(s),o=Math.tan(s)+i/e.baseR,l=Math.tan(s)-i/t.baseR,c=o-Math.atan(o),u=l-Math.atan(l),f=Math.PI/2+e.beta-c,h=Math.PI/2+t.beta-u,d=Math.atan2(i*a,n.pitchR1+i*r),_=Math.atan2(i*a,-n.pitchR2+i*r),y=d-f,m=_-h;return{phi1:y,phi2:m,t1:o,t2:l}}function jh(n,e,t,i){const s=t.alphaPrime,r=Math.sin(s),a=Math.cos(s);let o=0;for(let h=0;h<30;h++){const d=Math.tan(s)+o/n.baseR,_=d-Math.atan(d),y=Math.PI/2+n.beta-_,p=Math.atan2(o*a,t.pitchR1+o*r)-y-i;if(o-=p/(1/n.baseR),Math.abs(p)<1e-12)break}const l=Math.tan(s)-o/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c;return Math.atan2(o*a,-t.pitchR2+o*r)-u}const Cv="modulepreload",Rv=function(n,e){return new URL(n,e).href},ef={},Pv=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=a(t.map(u=>{if(u=Rv(u,i),u in ef)return;ef[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let y=o.length-1;y>=0;y--){const m=o[y];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Cv,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((y,m)=>{_.addEventListener("load",y),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};async function Dv(n={}){var e,t=n,i=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,r=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(r){const{createRequire:x}=await Pv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var a=x(import.meta.url)}var o=import.meta.url,l="";function c(x){return t.locateFile?t.locateFile(x,l):l+x}var u,f;if(r){var h=a("fs");o.startsWith("file:")&&(l=a("path").dirname(a("url").fileURLToPath(o))+"/"),f=x=>{x=m(x)?new URL(x):x;var v=h.readFileSync(x);return v},u=async(x,v=!0)=>{x=m(x)?new URL(x):x;var L=h.readFileSync(x,v?void 0:"utf8");return L},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||s){try{l=new URL(".",o).href}catch{}s&&(f=x=>{var v=new XMLHttpRequest;return v.open("GET",x,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),u=async x=>{if(m(x))return new Promise((L,W)=>{var te=new XMLHttpRequest;te.open("GET",x,!0),te.responseType="arraybuffer",te.onload=()=>{if(te.status==200||te.status==0&&te.response){L(te.response);return}W(te.status)},te.onerror=W,te.send(null)});var v=await fetch(x,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw new Error(v.status+" : "+v.url)}}console.log.bind(console);var d=console.error.bind(console),_,y=!1,m=x=>x.startsWith("file://"),p,A,D,M,w,R,F,S,I,k,q,re,ce=!1;function X(){var x=La.buffer;D=new Int8Array(x),w=new Int16Array(x),t.HEAPU8=M=new Uint8Array(x),R=new Uint16Array(x),F=new Int32Array(x),S=new Uint32Array(x),I=new Float32Array(x),k=new Float64Array(x),q=new BigInt64Array(x),re=new BigUint64Array(x)}function ee(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ve(t.preRun.shift());de(He)}function ue(){ce=!0,Pr.E()}function ie(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)be(t.postRun.shift());de(_e)}function me(x){t.onAbort?.(x),x="Aborted("+x+")",d(x),y=!0,x+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(x);throw A?.(v),v}var he;function ge(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function ve(x){if(x==he&&_)return new Uint8Array(_);if(f)return f(x);throw"both async and sync fetching of the wasm failed"}async function Ue(x){if(!_)try{var v=await u(x);return new Uint8Array(v)}catch{}return ve(x)}async function ye(x,v){try{var L=await Ue(x),W=await WebAssembly.instantiate(L,v);return W}catch(te){d(`failed to asynchronously prepare wasm: ${te}`),me(te)}}async function We(x,v,L){if(!x&&!m(v)&&!r)try{var W=fetch(v,{credentials:"same-origin"}),te=await WebAssembly.instantiateStreaming(W,L);return te}catch(Me){d(`wasm streaming compile failed: ${Me}`),d("falling back to ArrayBuffer instantiation")}return ye(v,L)}function tt(){var x={a:qm};return x}async function nt(){function x(Me,Ee){return Pr=Me.exports,$m(Pr),X(),Pr}function v(Me){return x(Me.instance)}var L=tt();if(t.instantiateWasm)return new Promise((Me,Ee)=>{t.instantiateWasm(L,(Te,Oe)=>{Me(x(Te))})});he??=ge();var W=await We(_,he,L),te=v(W);return te}var de=x=>{for(;x.length>0;)x.shift()(t)},_e=[],be=x=>_e.push(x),He=[],Ve=x=>He.push(x);class C{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){S[this.ptr+4>>2]=v}get_type(){return S[this.ptr+4>>2]}set_destructor(v){S[this.ptr+8>>2]=v}get_destructor(){return S[this.ptr+8>>2]}set_caught(v){v=v?1:0,D[this.ptr+12]=v}get_caught(){return D[this.ptr+12]!=0}set_rethrown(v){v=v?1:0,D[this.ptr+13]=v}get_rethrown(){return D[this.ptr+13]!=0}init(v,L){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(L)}set_adjusted_ptr(v){S[this.ptr+16>>2]=v}get_adjusted_ptr(){return S[this.ptr+16>>2]}}var B=0,U=(x,v,L)=>{var W=new C(x);throw W.init(v,L),B=x,B},$=()=>me(""),G={},H=x=>{for(;x.length;){var v=x.pop(),L=x.pop();L(v)}};function ne(x){return this.fromWireType(S[x>>2])}var ae={},J={},j={},Ae=class extends Error{constructor(v){super(v),this.name="InternalError"}},P=x=>{throw new Ae(x)},Pe=(x,v,L)=>{x.forEach(Te=>j[Te]=v);function W(Te){var Oe=L(Te);Oe.length!==x.length&&P("Mismatched type converter count");for(var st=0;st<x.length;++st)se(x[st],Oe[st])}var te=new Array(v.length),Me=[],Ee=0;v.forEach((Te,Oe)=>{J.hasOwnProperty(Te)?te[Oe]=J[Te]:(Me.push(Te),ae.hasOwnProperty(Te)||(ae[Te]=[]),ae[Te].push(()=>{te[Oe]=J[Te],++Ee,Ee===Me.length&&W(te)}))}),Me.length===0&&W(te)},Le=x=>{var v=G[x];delete G[x];var L=v.rawConstructor,W=v.rawDestructor,te=v.fields,Me=te.map(Ee=>Ee.getterReturnType).concat(te.map(Ee=>Ee.setterArgumentType));Pe([x],Me,Ee=>{var Te={};return te.forEach((Oe,st)=>{var it=Oe.fieldName,wt=Ee[st],Xt=Ee[st].optional,bt=Oe.getter,$t=Oe.getterContext,ln=Ee[st+te.length],Yn=Oe.setter,Cn=Oe.setterContext;Te[it]={read:Ci=>wt.fromWireType(bt($t,Ci)),write:(Ci,Sn)=>{var Ia=[];Yn(Cn,Ci,ln.toWireType(Ia,Sn)),H(Ia)},optional:Xt}}),[{name:v.name,fromWireType:Oe=>{var st={};for(var it in Te)st[it]=Te[it].read(Oe);return W(Oe),st},toWireType:(Oe,st)=>{for(var it in Te)if(!(it in st)&&!Te[it].optional)throw new TypeError(`Missing field: "${it}"`);var wt=L();for(it in Te)Te[it].write(wt,st[it]);return Oe!==null&&Oe.push(W,wt),wt},readValueFromPointer:ne,destructorFunction:W}]})},E=x=>{for(var v="";;){var L=M[x++];if(!L)return v;v+=String.fromCharCode(L)}},g=class extends Error{constructor(v){super(v),this.name="BindingError"}},O=x=>{throw new g(x)};function Q(x,v,L={}){var W=v.name;if(x||O(`type "${W}" must have a positive integer typeid pointer`),J.hasOwnProperty(x)){if(L.ignoreDuplicateRegistrations)return;O(`Cannot register type '${W}' twice`)}if(J[x]=v,delete j[x],ae.hasOwnProperty(x)){var te=ae[x];delete ae[x],te.forEach(Me=>Me())}}function se(x,v,L={}){return Q(x,v,L)}var we=(x,v,L)=>{switch(v){case 1:return L?W=>D[W]:W=>M[W];case 2:return L?W=>w[W>>1]:W=>R[W>>1];case 4:return L?W=>F[W>>2]:W=>S[W>>2];case 8:return L?W=>q[W>>3]:W=>re[W>>3];default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},De=(x,v,L,W,te)=>{v=E(v);const Me=W===0n;let Ee=Te=>Te;if(Me){const Te=L*8;Ee=Oe=>BigInt.asUintN(Te,Oe),te=Ee(te)}se(x,{name:v,fromWireType:Ee,toWireType:(Te,Oe)=>(typeof Oe=="number"&&(Oe=BigInt(Oe)),Oe),readValueFromPointer:we(v,L,!Me),destructorFunction:null})},pe=(x,v,L,W)=>{v=E(v),se(x,{name:v,fromWireType:function(te){return!!te},toWireType:function(te,Me){return Me?L:W},readValueFromPointer:function(te){return this.fromWireType(M[te])},destructorFunction:null})},Se=x=>({count:x.count,deleteScheduled:x.deleteScheduled,preservePointerOnDelete:x.preservePointerOnDelete,ptr:x.ptr,ptrType:x.ptrType,smartPtr:x.smartPtr,smartPtrType:x.smartPtrType}),Re=x=>{function v(L){return L.$$.ptrType.registeredClass.name}O(v(x)+" instance already deleted")},Xe=!1,Ne=x=>{},ze=x=>{x.smartPtr?x.smartPtrType.rawDestructor(x.smartPtr):x.ptrType.registeredClass.rawDestructor(x.ptr)},Je=x=>{x.count.value-=1;var v=x.count.value===0;v&&ze(x)},et=x=>globalThis.FinalizationRegistry?(Xe=new FinalizationRegistry(v=>{Je(v.$$)}),et=v=>{var L=v.$$,W=!!L.smartPtr;if(W){var te={$$:L};Xe.register(v,te,v)}return v},Ne=v=>Xe.unregister(v),et(x)):(et=v=>v,x),ot=()=>{let x=V.prototype;Object.assign(x,{isAliasOf(L){if(!(this instanceof V)||!(L instanceof V))return!1;var W=this.$$.ptrType.registeredClass,te=this.$$.ptr;L.$$=L.$$;for(var Me=L.$$.ptrType.registeredClass,Ee=L.$$.ptr;W.baseClass;)te=W.upcast(te),W=W.baseClass;for(;Me.baseClass;)Ee=Me.upcast(Ee),Me=Me.baseClass;return W===Me&&te===Ee},clone(){if(this.$$.ptr||Re(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var L=et(Object.create(Object.getPrototypeOf(this),{$$:{value:Se(this.$$)}}));return L.$$.count.value+=1,L.$$.deleteScheduled=!1,L},delete(){this.$$.ptr||Re(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&O("Object already scheduled for deletion"),Ne(this),Je(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Re(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&O("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const v=Symbol.dispose;v&&(x[v]=x.delete)};function V(){}var Ie=(x,v)=>Object.defineProperty(v,"name",{value:x}),xe={},Z=(x,v,L)=>{if(x[v].overloadTable===void 0){var W=x[v];x[v]=function(...te){return x[v].overloadTable.hasOwnProperty(te.length)||O(`Function '${L}' called with an invalid number of arguments (${te.length}) - expects one of (${x[v].overloadTable})!`),x[v].overloadTable[te.length].apply(this,te)},x[v].overloadTable=[],x[v].overloadTable[W.argCount]=W}},T=(x,v,L)=>{t.hasOwnProperty(x)?((L===void 0||t[x].overloadTable!==void 0&&t[x].overloadTable[L]!==void 0)&&O(`Cannot register public name '${x}' twice`),Z(t,x,x),t[x].overloadTable.hasOwnProperty(L)&&O(`Cannot register multiple overloads of a function with the same number of arguments (${L})!`),t[x].overloadTable[L]=v):(t[x]=v,t[x].argCount=L)},N=48,Fe=57,Ge=x=>{x=x.replace(/[^a-zA-Z0-9_]/g,"$");var v=x.charCodeAt(0);return v>=N&&v<=Fe?`_${x}`:x};function mt(x,v,L,W,te,Me,Ee,Te){this.name=x,this.constructor=v,this.instancePrototype=L,this.rawDestructor=W,this.baseClass=te,this.getActualType=Me,this.upcast=Ee,this.downcast=Te,this.pureVirtualFunctions=[]}var lt=(x,v,L)=>{for(;v!==L;)v.upcast||O(`Expected null or instance of ${L.name}, got an instance of ${v.name}`),x=v.upcast(x),v=v.baseClass;return x},xn=x=>{if(x===null)return"null";var v=typeof x;return v==="object"||v==="array"||v==="function"?x.toString():""+x};function zn(x,v){if(v===null)return this.isReference&&O(`null is not a valid ${this.name}`),0;v.$$||O(`Cannot pass "${xn(v)}" as a ${this.name}`),v.$$.ptr||O(`Cannot pass deleted object as a pointer of type ${this.name}`);var L=v.$$.ptrType.registeredClass,W=lt(v.$$.ptr,L,this.registeredClass);return W}function vl(x,v){var L;if(v===null)return this.isReference&&O(`null is not a valid ${this.name}`),this.isSmartPointer?(L=this.rawConstructor(),x!==null&&x.push(this.rawDestructor,L),L):0;(!v||!v.$$)&&O(`Cannot pass "${xn(v)}" as a ${this.name}`),v.$$.ptr||O(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&O(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var W=v.$$.ptrType.registeredClass;if(L=lt(v.$$.ptr,W,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&O("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?L=v.$$.smartPtr:O(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:L=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)L=v.$$.smartPtr;else{var te=v.clone();L=this.rawShare(L,Ye.toHandle(()=>te.delete())),x!==null&&x.push(this.rawDestructor,L)}break;default:O("Unsupporting sharing policy")}return L}function xl(x,v){if(v===null)return this.isReference&&O(`null is not a valid ${this.name}`),0;v.$$||O(`Cannot pass "${xn(v)}" as a ${this.name}`),v.$$.ptr||O(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&O(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var L=v.$$.ptrType.registeredClass,W=lt(v.$$.ptr,L,this.registeredClass);return W}var Er=(x,v,L)=>{if(v===L)return x;if(L.baseClass===void 0)return null;var W=Er(x,v,L.baseClass);return W===null?null:L.downcast(W)},Tr={},Sl=(x,v)=>{for(v===void 0&&O("ptr should not be undefined");x.baseClass;)v=x.upcast(v),x=x.baseClass;return v},Aa=(x,v)=>(v=Sl(x,v),Tr[v]),ps=(x,v)=>{(!v.ptrType||!v.ptr)&&P("makeClassHandle requires ptr and ptrType");var L=!!v.smartPtrType,W=!!v.smartPtr;return L!==W&&P("Both smartPtrType and smartPtr must be specified"),v.count={value:1},et(Object.create(x,{$$:{value:v,writable:!0}}))};function Ai(x){var v=this.getPointee(x);if(!v)return this.destructor(x),null;var L=Aa(this.registeredClass,v);if(L!==void 0){if(L.$$.count.value===0)return L.$$.ptr=v,L.$$.smartPtr=x,L.clone();var W=L.clone();return this.destructor(x),W}function te(){return this.isSmartPointer?ps(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:x}):ps(this.registeredClass.instancePrototype,{ptrType:this,ptr:x})}var Me=this.registeredClass.getActualType(v),Ee=xe[Me];if(!Ee)return te.call(this);var Te;this.isConst?Te=Ee.constPointerType:Te=Ee.pointerType;var Oe=Er(v,this.registeredClass,Te.registeredClass);return Oe===null?te.call(this):this.isSmartPointer?ps(Te.registeredClass.instancePrototype,{ptrType:Te,ptr:Oe,smartPtrType:this,smartPtr:x}):ps(Te.registeredClass.instancePrototype,{ptrType:Te,ptr:Oe})}var Ar=()=>{Object.assign(ms.prototype,{getPointee(x){return this.rawGetPointee&&(x=this.rawGetPointee(x)),x},destructor(x){this.rawDestructor?.(x)},readValueFromPointer:ne,fromWireType:Ai})};function ms(x,v,L,W,te,Me,Ee,Te,Oe,st,it){this.name=x,this.registeredClass=v,this.isReference=L,this.isConst=W,this.isSmartPointer=te,this.pointeeType=Me,this.sharingPolicy=Ee,this.rawGetPointee=Te,this.rawConstructor=Oe,this.rawShare=st,this.rawDestructor=it,!te&&v.baseClass===void 0?W?(this.toWireType=zn,this.destructorFunction=null):(this.toWireType=xl,this.destructorFunction=null):this.toWireType=vl}var wr=(x,v,L)=>{t.hasOwnProperty(x)||P("Replacing nonexistent public symbol"),t[x].overloadTable!==void 0&&L!==void 0?t[x].overloadTable[L]=v:(t[x]=v,t[x].argCount=L)},gs=[],wa=x=>{var v=gs[x];return v||(gs[x]=v=dh.get(x)),v},nn=(x,v,L=!1)=>{x=E(x);function W(){var Me=wa(v);return Me}var te=W();return typeof te!="function"&&O(`unknown function pointer with signature ${x}: ${v}`),te};class Ca extends Error{}var Cr=x=>{var v=fh(x),L=E(v);return es(v),L},Qi=(x,v)=>{var L=[],W={};function te(Me){if(!W[Me]&&!J[Me]){if(j[Me]){j[Me].forEach(te);return}L.push(Me),W[Me]=!0}}throw v.forEach(te),new Ca(`${x}: `+L.map(Cr).join([", "]))},Ml=(x,v,L,W,te,Me,Ee,Te,Oe,st,it,wt,Xt)=>{it=E(it),Me=nn(te,Me),Te&&=nn(Ee,Te),st&&=nn(Oe,st),Xt=nn(wt,Xt);var bt=Ge(it);T(bt,function(){Qi(`Cannot construct ${it} due to unbound types`,[W])}),Pe([x,v,L],W?[W]:[],$t=>{$t=$t[0];var ln,Yn;W?(ln=$t.registeredClass,Yn=ln.instancePrototype):Yn=V.prototype;var Cn=Ie(it,function(...El){if(Object.getPrototypeOf(this)!==Ci)throw new g(`Use 'new' to construct ${it}`);if(Sn.constructor_body===void 0)throw new g(`${it} has no accessible constructor`);var vh=Sn.constructor_body[El.length];if(vh===void 0)throw new g(`Tried to invoke ctor of ${it} with invalid number of parameters (${El.length}) - expected (${Object.keys(Sn.constructor_body).toString()}) parameters instead!`);return vh.apply(this,El)}),Ci=Object.create(Yn,{constructor:{value:Cn}});Cn.prototype=Ci;var Sn=new mt(it,Cn,Ci,Xt,ln,Me,Te,st);Sn.baseClass&&(Sn.baseClass.__derivedClasses??=[],Sn.baseClass.__derivedClasses.push(Sn));var Ia=new ms(it,Sn,!0,!1,!1),gh=new ms(it+"*",Sn,!1,!1,!1),_h=new ms(it+" const*",Sn,!1,!0,!1);return xe[x]={pointerType:gh,constPointerType:_h},wr(bt,Cn),[Ia,gh,_h]})},Rr=(x,v)=>{for(var L=[],W=0;W<x;W++)L.push(S[v+W*4>>2]);return L};function Ra(x){for(var v=1;v<x.length;++v)if(x[v]!==null&&x[v].destructorFunction===void 0)return!0;return!1}function Pa(x,v,L,W){var te=Ra(x),Me=x.length-2,Ee=[],Te=["fn"];v&&Te.push("thisWired");for(var Oe=0;Oe<Me;++Oe)Ee.push(`arg${Oe}`),Te.push(`arg${Oe}Wired`);Ee=Ee.join(","),Te=Te.join(",");var st=`return function (${Ee}) {
`;te&&(st+=`var destructors = [];
`);var it=te?"destructors":"null",wt=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];v&&(st+=`var thisWired = toClassParamWire(${it}, this);
`);for(var Oe=0;Oe<Me;++Oe){var Xt=`toArg${Oe}Wire`;st+=`var arg${Oe}Wired = ${Xt}(${it}, arg${Oe});
`,wt.push(Xt)}if(st+=(L||W?"var rv = ":"")+`invoker(${Te});
`,te)st+=`runDestructors(destructors);
`;else for(var Oe=v?1:2;Oe<x.length;++Oe){var bt=Oe===1?"thisWired":"arg"+(Oe-2)+"Wired";x[Oe].destructorFunction!==null&&(st+=`${bt}_dtor(${bt});
`,wt.push(`${bt}_dtor`))}return L&&(st+=`var ret = fromRetWire(rv);
return ret;
`),st+=`}
`,new Function(wt,st)}function b(x,v,L,W,te,Me){var Ee=v.length;Ee<2&&O("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Te=v[1]!==null&&L!==null,Oe=Ra(v),st=!v[0].isVoid,it=v[0],wt=v[1],Xt=[x,O,W,te,H,it.fromWireType.bind(it),wt?.toWireType.bind(wt)],bt=2;bt<Ee;++bt){var $t=v[bt];Xt.push($t.toWireType.bind($t))}if(!Oe)for(var bt=Te?1:2;bt<v.length;++bt)v[bt].destructorFunction!==null&&Xt.push(v[bt].destructorFunction);var Yn=Pa(v,Te,st,Me)(...Xt);return Ie(x,Yn)}var Y=(x,v,L,W,te,Me)=>{var Ee=Rr(v,L);te=nn(W,te),Pe([],[x],Te=>{Te=Te[0];var Oe=`constructor ${Te.name}`;if(Te.registeredClass.constructor_body===void 0&&(Te.registeredClass.constructor_body=[]),Te.registeredClass.constructor_body[v-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${Te.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Te.registeredClass.constructor_body[v-1]=()=>{Qi(`Cannot construct ${Te.name} due to unbound types`,Ee)},Pe([],Ee,st=>(st.splice(1,0,null),Te.registeredClass.constructor_body[v-1]=b(Oe,st,null,te,Me),[])),[]})},fe=x=>{x=x.trim();const v=x.indexOf("(");return v===-1?x:x.slice(0,v)},le=(x,v,L,W,te,Me,Ee,Te,Oe,st)=>{var it=Rr(L,W);v=E(v),v=fe(v),Me=nn(te,Me,Oe),Pe([],[x],wt=>{wt=wt[0];var Xt=`${wt.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),Te&&wt.registeredClass.pureVirtualFunctions.push(v);function bt(){Qi(`Cannot call ${Xt} due to unbound types`,it)}var $t=wt.registeredClass.instancePrototype,ln=$t[v];return ln===void 0||ln.overloadTable===void 0&&ln.className!==wt.name&&ln.argCount===L-2?(bt.argCount=L-2,bt.className=wt.name,$t[v]=bt):(Z($t,v,Xt),$t[v].overloadTable[L-2]=bt),Pe([],it,Yn=>{var Cn=b(Xt,Yn,wt,Me,Ee,Oe);return $t[v].overloadTable===void 0?(Cn.argCount=L-2,$t[v]=Cn):$t[v].overloadTable[L-2]=Cn,[]}),[]})},oe=(x,v,L)=>(x instanceof Object||O(`${L} with invalid "this": ${x}`),x instanceof v.registeredClass.constructor||O(`${L} incompatible with "this" of type ${x.constructor.name}`),x.$$.ptr||O(`cannot call emscripten binding method ${L} on deleted object`),lt(x.$$.ptr,x.$$.ptrType.registeredClass,v.registeredClass)),$e=(x,v,L,W,te,Me,Ee,Te,Oe,st)=>{v=E(v),te=nn(W,te),Pe([],[x],it=>{it=it[0];var wt=`${it.name}.${v}`,Xt={get(){Qi(`Cannot access ${wt} due to unbound types`,[L,Ee])},enumerable:!0,configurable:!0};return Oe?Xt.set=()=>Qi(`Cannot access ${wt} due to unbound types`,[L,Ee]):Xt.set=bt=>O(wt+" is a read-only property"),Object.defineProperty(it.registeredClass.instancePrototype,v,Xt),Pe([],Oe?[L,Ee]:[L],bt=>{var $t=bt[0],ln={get(){var Cn=oe(this,it,wt+" getter");return $t.fromWireType(te(Me,Cn))},enumerable:!0};if(Oe){Oe=nn(Te,Oe);var Yn=bt[1];ln.set=function(Cn){var Ci=oe(this,it,wt+" setter"),Sn=[];Oe(st,Ci,Yn.toWireType(Sn,Cn)),H(Sn)}}return Object.defineProperty(it.registeredClass.instancePrototype,v,ln),[]}),[]})},Ke=[],ke=[0,1,,1,null,1,!0,1,!1,1],Qe=x=>{x>9&&--ke[x+1]===0&&(ke[x]=void 0,Ke.push(x))},Ye={toValue:x=>(x||O(`Cannot use deleted val. handle = ${x}`),ke[x]),toHandle:x=>{switch(x){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=Ke.pop()||ke.length;return ke[v]=x,ke[v+1]=1,v}}}},dt={name:"emscripten::val",fromWireType:x=>{var v=Ye.toValue(x);return Qe(x),v},toWireType:(x,v)=>Ye.toHandle(v),readValueFromPointer:ne,destructorFunction:null},gt=x=>se(x,dt),je=(x,v,L)=>{switch(v){case 1:return L?function(W){return this.fromWireType(D[W])}:function(W){return this.fromWireType(M[W])};case 2:return L?function(W){return this.fromWireType(w[W>>1])}:function(W){return this.fromWireType(R[W>>1])};case 4:return L?function(W){return this.fromWireType(F[W>>2])}:function(W){return this.fromWireType(S[W>>2])};default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},Tt=(x,v,L,W)=>{v=E(v);function te(){}te.values={},se(x,{name:v,constructor:te,fromWireType:function(Me){return this.constructor.values[Me]},toWireType:(Me,Ee)=>Ee.value,readValueFromPointer:je(v,L,W),destructorFunction:null}),T(v,te)},kt=(x,v)=>{var L=J[x];return L===void 0&&O(`${v} has unknown type ${Cr(x)}`),L},Nt=(x,v,L)=>{var W=kt(x,"enum");v=E(v);var te=W.constructor,Me=Object.create(W.constructor.prototype,{value:{value:L},constructor:{value:Ie(`${W.name}_${v}`,function(){})}});te.values[L]=Me,te[v]=Me},Pt=(x,v)=>{switch(v){case 4:return function(L){return this.fromWireType(I[L>>2])};case 8:return function(L){return this.fromWireType(k[L>>3])};default:throw new TypeError(`invalid float width (${v}): ${x}`)}},sn=(x,v,L)=>{v=E(v),se(x,{name:v,fromWireType:W=>W,toWireType:(W,te)=>te,readValueFromPointer:Pt(v,L),destructorFunction:null})},Ze=(x,v,L,W,te,Me,Ee,Te)=>{var Oe=Rr(v,L);x=E(x),x=fe(x),te=nn(W,te,Ee),T(x,function(){Qi(`Cannot call ${x} due to unbound types`,Oe)},v-1),Pe([],Oe,st=>{var it=[st[0],null].concat(st.slice(1));return wr(x,b(x,it,null,te,Me,Ee),v-1),[]})},on=(x,v,L,W,te)=>{v=E(v);const Me=W===0;let Ee=Oe=>Oe;if(Me){var Te=32-8*L;Ee=Oe=>Oe<<Te>>>Te,te=Ee(te)}se(x,{name:v,fromWireType:Ee,toWireType:(Oe,st)=>st,readValueFromPointer:we(v,L,W!==0),destructorFunction:null})},vt=(x,v,L)=>{var W=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],te=W[v];function Me(Ee){var Te=S[Ee>>2],Oe=S[Ee+4>>2];return new te(D.buffer,Oe,Te)}L=E(L),se(x,{name:L,fromWireType:Me,readValueFromPointer:Me},{ignoreDuplicateRegistrations:!0})},wn=(x,v,L,W)=>{if(!(W>0))return 0;for(var te=L,Me=L+W-1,Ee=0;Ee<x.length;++Ee){var Te=x.codePointAt(Ee);if(Te<=127){if(L>=Me)break;v[L++]=Te}else if(Te<=2047){if(L+1>=Me)break;v[L++]=192|Te>>6,v[L++]=128|Te&63}else if(Te<=65535){if(L+2>=Me)break;v[L++]=224|Te>>12,v[L++]=128|Te>>6&63,v[L++]=128|Te&63}else{if(L+3>=Me)break;v[L++]=240|Te>>18,v[L++]=128|Te>>12&63,v[L++]=128|Te>>6&63,v[L++]=128|Te&63,Ee++}}return v[L]=0,L-te},Vn=(x,v,L)=>wn(x,M,v,L),si=x=>{for(var v=0,L=0;L<x.length;++L){var W=x.charCodeAt(L);W<=127?v++:W<=2047?v+=2:W>=55296&&W<=57343?(v+=4,++L):v+=3}return v},wi=globalThis.TextDecoder&&new TextDecoder,At=(x,v,L,W)=>{var te=v+L;if(W)return te;for(;x[v]&&!(v>=te);)++v;return v},Ht=(x,v=0,L,W)=>{var te=At(x,v,L,W);if(te-v>16&&x.buffer&&wi)return wi.decode(x.subarray(v,te));for(var Me="";v<te;){var Ee=x[v++];if(!(Ee&128)){Me+=String.fromCharCode(Ee);continue}var Te=x[v++]&63;if((Ee&224)==192){Me+=String.fromCharCode((Ee&31)<<6|Te);continue}var Oe=x[v++]&63;if((Ee&240)==224?Ee=(Ee&15)<<12|Te<<6|Oe:Ee=(Ee&7)<<18|Te<<12|Oe<<6|x[v++]&63,Ee<65536)Me+=String.fromCharCode(Ee);else{var st=Ee-65536;Me+=String.fromCharCode(55296|st>>10,56320|st&1023)}}return Me},ri=(x,v,L)=>x?Ht(M,x,v,L):"",It=(x,v)=>{v=E(v),se(x,{name:v,fromWireType(L){var W=S[L>>2],te=L+4,Me;return Me=ri(te,W,!0),es(L),Me},toWireType(L,W){W instanceof ArrayBuffer&&(W=new Uint8Array(W));var te,Me=typeof W=="string";Me||ArrayBuffer.isView(W)&&W.BYTES_PER_ELEMENT==1||O("Cannot pass non-string to std::string"),Me?te=si(W):te=W.length;var Ee=bl(4+te+1),Te=Ee+4;return S[Ee>>2]=te,Me?Vn(W,Te,te+1):M.set(W,Te),L!==null&&L.push(es,Ee),Ee},readValueFromPointer:ne,destructorFunction(L){es(L)}})},qn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,ji=(x,v,L)=>{var W=x>>1,te=At(R,W,v/2,L);if(te-W>16&&qn)return qn.decode(R.subarray(W,te));for(var Me="",Ee=W;Ee<te;++Ee){var Te=R[Ee];Me+=String.fromCharCode(Te)}return Me},Da=(x,v,L)=>{if(L??=2147483647,L<2)return 0;L-=2;for(var W=v,te=L<x.length*2?L/2:x.length,Me=0;Me<te;++Me){var Ee=x.charCodeAt(Me);w[v>>1]=Ee,v+=2}return w[v>>1]=0,v-W},Em=x=>x.length*2,Tm=(x,v,L)=>{for(var W="",te=x>>2,Me=0;!(Me>=v/4);Me++){var Ee=S[te+Me];if(!Ee&&!L)break;W+=String.fromCodePoint(Ee)}return W},Am=(x,v,L)=>{if(L??=2147483647,L<4)return 0;for(var W=v,te=W+L-4,Me=0;Me<x.length;++Me){var Ee=x.codePointAt(Me);if(Ee>65535&&Me++,F[v>>2]=Ee,v+=4,v+4>te)break}return F[v>>2]=0,v-W},wm=x=>{for(var v=0,L=0;L<x.length;++L){var W=x.codePointAt(L);W>65535&&L++,v+=4}return v},Cm=(x,v,L)=>{L=E(L);var W,te,Me;v===2?(W=ji,te=Da,Me=Em):(W=Tm,te=Am,Me=wm),se(x,{name:L,fromWireType:Ee=>{var Te=S[Ee>>2],Oe=W(Ee+4,Te*v,!0);return es(Ee),Oe},toWireType:(Ee,Te)=>{typeof Te!="string"&&O(`Cannot pass non-string to C++ string type ${L}`);var Oe=Me(Te),st=bl(4+Oe+v);return S[st>>2]=Oe/v,te(Te,st+4,Oe+v),Ee!==null&&Ee.push(es,st),st},readValueFromPointer:ne,destructorFunction(Ee){es(Ee)}})},Rm=(x,v,L,W,te,Me)=>{G[x]={name:E(v),rawConstructor:nn(L,W),rawDestructor:nn(te,Me),fields:[]}},Pm=(x,v,L,W,te,Me,Ee,Te,Oe,st)=>{G[x].fields.push({fieldName:E(v),getterReturnType:L,getter:nn(W,te),getterContext:Me,setterArgumentType:Ee,setter:nn(Te,Oe),setterContext:st})},Dm=(x,v)=>{v=E(v),se(x,{isVoid:!0,name:v,fromWireType:()=>{},toWireType:(L,W)=>{}})},yl=[],Lm=x=>{var v=yl.length;return yl.push(x),v},Im=(x,v)=>{for(var L=new Array(x),W=0;W<x;++W)L[W]=kt(S[v+W*4>>2],`parameter ${W}`);return L},Um=(x,v,L)=>{var W=[],te=x(W,L);return W.length&&(S[v>>2]=Ye.toHandle(W)),te},Nm={},hh=x=>{var v=Nm[x];return v===void 0?E(x):v},Fm=(x,v,L)=>{var W=8,[te,...Me]=Im(x,v),Ee=te.toWireType.bind(te),Te=Me.map(bt=>bt.readValueFromPointer.bind(bt));x--;var Oe={toValue:Ye.toValue},st=Te.map((bt,$t)=>{var ln=`argFromPtr${$t}`;return Oe[ln]=bt,`${ln}(args${$t?"+"+$t*W:""})`}),it;switch(L){case 0:it="toValue(handle)";break;case 2:it="new (toValue(handle))";break;case 3:it="";break;case 1:Oe.getStringOrSymbol=hh,it="toValue(handle)[getStringOrSymbol(methodName)]";break}it+=`(${st})`,te.isVoid||(Oe.toReturnWire=Ee,Oe.emval_returnValue=Um,it=`return emval_returnValue(toReturnWire, destructorsRef, ${it})`),it=`return function (handle, methodName, destructorsRef, args) {
  ${it}
  }`;var wt=new Function(Object.keys(Oe),it)(...Object.values(Oe)),Xt=`methodCaller<(${Me.map(bt=>bt.name)}) => ${te.name}>`;return Lm(Ie(Xt,wt))},Om=(x,v)=>(x=Ye.toValue(x),v=Ye.toValue(v),Ye.toHandle(x[v])),Bm=x=>{x>9&&(ke[x+1]+=1)},zm=(x,v,L,W,te)=>yl[x](v,L,W,te),Vm=x=>Ye.toHandle(hh(x)),km=x=>{var v=Ye.toValue(x);H(v),Qe(x)},Hm=()=>2147483648,Gm=(x,v)=>Math.ceil(x/v)*v,Wm=x=>{var v=La.buffer.byteLength,L=(x-v+65535)/65536|0;try{return La.grow(L),X(),1}catch{}},Xm=x=>{var v=M.length;x>>>=0;var L=Hm();if(x>L)return!1;for(var W=1;W<=4;W*=2){var te=v*(1+.2/W);te=Math.min(te,x+100663296);var Me=Math.min(L,Gm(Math.max(x,te),65536)),Ee=Wm(Me);if(Ee)return!0}return!1};if(ot(),Ar(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(d=t.printErr),t.wasmBinary&&(_=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var fh,bl,es,La,dh;function $m(x){fh=x.F,bl=x.H,es=x.I,La=x.D,dh=x.G}var qm={h:U,x:$,v:Le,u:De,B:pe,e:Ml,g:Y,a:le,f:$e,z:gt,n:Tt,c:Nt,t:sn,b:Ze,i:on,d:vt,A:It,q:Cm,w:Rm,p:Pm,C:Dm,l:Fm,m:Qe,r:Om,o:Bm,k:zm,s:Vm,j:km,y:Xm};function Ym(){ee();function x(){t.calledRun=!0,!y&&(ue(),p?.(t),t.onRuntimeInitialized?.(),ie())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),x()},1)):x()}var Pr;Pr=await nt(),Ym();function Km(x){if(x.length%2!=0)throw"MakePath64: intArray.length must be even";const v=x.length/2,L=new BigInt64Array(v*3);for(let te=0,Me=0;te<x.length;te+=2,Me+=3){const Ee=x[te],Te=x[te+1];L[Me]=typeof Ee=="bigint"?Ee:BigInt(Ee),L[Me+1]=typeof Te=="bigint"?Te:BigInt(Te)}let W=new t.Path64;return W.assign(L),W}t.MakePath64=Km;function Zm(x){if(x.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const v=new BigInt64Array(x.length);for(let W=0;W<x.length;W++){const te=x[W];v[W]=typeof te=="bigint"?te:BigInt(te)}let L=new t.Path64;return L.assign(v),L}t.MakePathZ64=Zm;function Jm(x){if(x.length%2!=0)throw"MakePathD: intArray.length must be even";const v=x.length/2,L=new Float64Array(v*3);for(let te=0,Me=0;te<x.length;te+=2,Me+=3)L[Me]=x[te],L[Me+1]=x[te+1];let W=new t.PathD;return W.assign(L),W}t.MakePathD=Jm;function Qm(x){if(x.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const v=x instanceof Float64Array?x:Float64Array.from(x);let L=new t.PathD;return L.assign(v),L}t.MakePathZD=Qm;function ph(x){const v=x.view(),L=new BigInt64Array(v.length);for(let te=0;te<v.length;te++)L[te]=BigInt(Math.round(v[te]));let W=new t.Path64;return W.assign(L),W}t.PathDToPath64=ph;function mh(x){const v=x.view(),L=new Float64Array(v.length);for(let te=0;te<v.length;te++)L[te]=Number(v[te]);let W=new t.PathD;return W.assign(L),W}t.Path64ToPathD=mh;function jm(x){let v=new t.PathsD;for(let L=0;L<x.size();L++){const W=x.get(L);let te=mh(W);v.push_back(te),te.delete(),W.delete()}return v}t.Paths64ToPathsD=jm;function eg(x){let v=new t.Paths64;for(let L=0;L<x.size();L++){const W=x.get(L);let te=ph(W);v.push_back(te),te.delete(),W.delete()}return v}return t.PathsDToPaths64=eg,ce?e=t:e=new Promise((x,v)=>{p=x,A=v}),e}let Ol=null;function Tp(){return Ol||(Ol=Dv()),Ol}function Lv(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function ko(n,e){const t=n.PathsD,i=new t;for(const s of e)s.length>=3&&i.push_back(Lv(n,s));return i}function Iv(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const s=n.get(i);t.push({x:s.x,y:s.y})}return t}function Uv(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(Iv(n.get(i)));return e}async function Xu(n,e){const t=await Tp(),i=ko(t,n),s=ko(t,e),a=t.IntersectD(i,s,t.FillRule.NonZero,6),o=Math.abs(t.AreaPathsD(a));return{regions:Uv(a),area:o,intersects:o>1e-8}}async function Ap(n,e){const t=await Tp(),i=ko(t,n),s=ko(t,e),r=t.IntersectD(i,s,t.FillRule.NonZero,6);return Math.abs(t.AreaPathsD(r))}const Nv=1,Wr=1e-6,ea=32,Ho=512,Go=8,Wo=256;function Bl(n){const e=[];for(let t=0;t<n.count;t++)e.push(n.min+(n.max-n.min)*t/(n.count-1));return e}function Fv(n){return n.center.count*n.thickness1.count*n.thickness2.count}function wp(n){const e=Bl(n.center),t=Bl(n.thickness1),i=Bl(n.thickness2),s=[];let r=0;for(const a of e)for(const o of t)for(const l of i)s.push({index:r++,da:a,ds1:o,ds2:l});return s}function Nc(n){return Array.isArray(n)?`[${n.map(Nc).join(",")}]`:n&&typeof n=="object"?`{${Object.keys(n).sort().map(e=>`${JSON.stringify(e)}:${Nc(n[e])}`).join(",")}}`:JSON.stringify(n)}function Ov(n){const e=Nc(n);let t=2166136261,i=506832829;for(let s=0;s<e.length;s++){const r=e.charCodeAt(s);t=Math.imul(t^r,16777619)>>>0,i=Math.imul(i+r+2654435769,2246822507)>>>0}return(t.toString(36)+i.toString(36)).padStart(14,"0")}function $u(n,e,t=Date.now()){const i=Ov({gear1:n.gear1,gear2:n.gear2,baseCenterDistance:n.baseCenterDistance,useStandardCenter:n.useStandardCenter,spec:e}),s=`z₁${n.gear1.z}/z₂${n.gear2.z} · m=${n.gear1.module} · α=${(n.gear1.alpha/ui).toFixed(1)}° · a=${n.baseCenterDistance.toFixed(3)}mm`;return{schemaVersion:Nv,createdAt:t,gear1:n.gear1,gear2:n.gear2,baseCenterDistance:n.baseCenterDistance,useStandardCenter:n.useStandardCenter,unit:n.unit,spec:e,key:i,label:s}}function Cp(n,e,t,i){const s=[],r={...e},a={...t};if(s.push(...Vo(r).map(u=>`齿轮1：${u}`)),s.push(...Vo(a).map(u=>`齿轮2：${u}`)),Number.isFinite(e.module)&&Number.isFinite(t.module)&&e.module>0&&t.module>0&&(Math.abs(e.module-t.module)>1e-9&&s.push(`两轮模数不同（m₁=${e.module}, m₂=${t.module}），基节不一致，不能啮合，分析不启动`),Math.abs(e.alpha-t.alpha)>1e-9&&s.push(`两轮压力角不同（α₁=${(e.alpha/ui).toFixed(2)}°, α₂=${(t.alpha/ui).toFixed(2)}°），基节不一致，不能啮合，分析不启动`)),!(i>0)||!Number.isFinite(i))s.push("冻结基准中心距非法（必须 > 0）");else{const f=(e.module*e.z/2+t.module*t.z/2)*Math.cos(e.alpha);i<f-1e-9&&s.push(`基准中心距 ${i.toFixed(3)} mm 已小于基圆内公切线极限 ${f.toFixed(3)} mm，基准本身无实啮合角`)}const o=(u,f,h)=>{if(!Number.isFinite(u.min)||!Number.isFinite(u.max)){s.push(`${f}范围必须为有限数值`);return}u.min>u.max&&s.push(`${f}范围非法：下限 ${u.min} > 上限 ${u.max}`),(!Number.isInteger(u.count)||u.count<2||u.count>ea)&&s.push(`${f}采样点数必须为 2…${ea} 的整数`),h!==void 0&&(Math.abs(u.min)>=h||Math.abs(u.max)>=h)&&s.push(`${f}偏差超出 |Δs| < πm/2 = ${h.toFixed(4)} mm 的几何允许范围`)};o(n.center,"中心距");const l=Math.PI*e.module/2,c=Math.PI*t.module/2;if(o(n.thickness1,"齿轮1齿厚",l),o(n.thickness2,"齿轮2齿厚",c),(!Number.isInteger(n.phaseSteps)||n.phaseSteps<Go||n.phaseSteps>Wo)&&s.push(`相位采样点数必须为 ${Go}…${Wo} 的整数`),!s.some(u=>u.includes("采样点数"))){const u=Fv(n);u>Ho&&s.push(`组合总数 ${u} 超过上限 ${Ho}（请缩小范围或降低采样密度）`)}return{ok:s.length===0,errors:s}}function Rp(n,e,t,i){const{gear1:s,gear2:r}=n;let a,o;try{a=zo({...s,thicknessDelta:t}),o=zo({...r,thicknessDelta:i})}catch(h){return{ok:!1,reason:`齿廓生成失败：${h.message}`}}const l=n.baseCenterDistance+e;if(!(l>0)||!Number.isFinite(l))return{ok:!1,reason:`中心距非法：a = a₀′+${e} = ${l} mm`};if(l<a.dedendumR+o.dedendumR-1e-9)return{ok:!1,reason:`中心距 ${l.toFixed(4)} mm 小于两齿根圆半径之和 ${(a.dedendumR+o.dedendumR).toFixed(4)} mm，齿轮毛坯互相侵入，无法装配`};const u=(a.pitchR+o.pitchR)*Math.cos(a.input.alpha);if(l<u-1e-9)return{ok:!1,reason:`中心距 ${l.toFixed(4)} mm 小于基圆内公切线极限 ${u.toFixed(4)} mm（cosα′>1，啮合角无实数解）`};if(a.pointed||o.pointed)return{ok:!1,reason:`齿顶变尖：Δs1=${t.toFixed(4)} mm 时齿顶厚 s_a1=${a.tipThickness.toFixed(4)}；Δs2=${i.toFixed(4)} mm 时 s_a2=${o.tipThickness.toFixed(4)}（齿厚偏差过大）`};const f=Ep({g1:a,g2:o,centerDistance:l});return{ok:!0,geom:{g1:a,g2:o,a:l,mesh:f}}}function Bv(n){const e=Math.sin(n.alphaPrime),t=Math.cos(n.alphaPrime),i=(n.actionLine.p0.x-n.pitchPoint.x)*e+(n.actionLine.p0.y-n.pitchPoint.y)*t,s=(n.actionLine.p1.x-n.pitchPoint.x)*e+(n.actionLine.p1.y-n.pitchPoint.y)*t;return{sLo:i,sHi:s}}async function Pp(n,e,t,i,s){const r={index:e.index,da:e.da,ds1:e.ds1,ds2:e.ds2,status:"pending",maxArea:0,worstS:null,worstPhi1:null,worstPhi2:null,doneAt:null},a=Rp(n,e.da,e.ds1,e.ds2);if(!a.ok)return{result:{...r,status:"invalid",reason:a.reason,doneAt:Date.now()}};const{g1:o,g2:l,a:c,mesh:u}=a.geom,{sLo:f,sHi:h}=Bv(u),d=n.spec.phaseSteps;let _=0,y=f,m=0,p=0;try{for(let D=0;D<d;D++){const M=d===1?f:f+(h-f)*D/(d-1),{phi1:w,phi2:R}=Uc(u,o,l,M),F=[rr(o.outline,0,0,w)],S=[rr(l.outline,c,0,R)],I=await i(F,S);I>_&&(_=I,y=M,m=w,p=R)}}catch(D){return{result:{...r,status:"invalid",reason:`Clipper 布尔求交运行时失败：${D.message}`,doneAt:Date.now()}}}const A={...r,status:_>Wr?"risk":"safe",maxArea:_,worstS:_>Wr?y:null,worstPhi1:_>Wr?m:null,worstPhi2:_>Wr?p:null,doneAt:Date.now()};if(t&&A.status==="risk"){const D=[rr(o.outline,0,0,m)],M=[rr(l.outline,c,0,p)],w=await s(D,M);return{result:A,regions:w.regions}}return{result:A}}function zv(n,e){return Pp(n,e,!1,Ap,Xu)}function Vv(n,e){return Pp(n,e,!0,Ap,Xu)}function kv(n){const e={maxArea:0,worstComboIndex:-1,safe:0,risk:0,invalid:0,pending:0};for(const t of n){if(t.status==="pending"){e.pending++;continue}e[t.status]++,t.status==="risk"&&t.maxArea>e.maxArea&&(e.maxArea=t.maxArea,e.worstComboIndex=t.index)}return e}function Hv(n){return wp(n).map(e=>({...e,status:"pending",maxArea:0,worstS:null,worstPhi1:null,worstPhi2:null,doneAt:null}))}function Gv(n){return structuredClone(n)}function Wv(){return`env-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Xv(n,e,t=Wv(),i=Date.now()){const s=Cp(e,n.gear1,n.gear2,n.baseCenterDistance);if(!s.ok)return{ok:!1,errors:s.errors};const r=$u(n,e,i);return{ok:!0,job:{id:t,snapshot:r,status:"running",createdAt:i,updatedAt:i,finishedAt:null,canceledAt:null,combos:Hv(e)}}}class $v{constructor(e,t={}){this.storage=e,this.cb=t}activeId=null;queue=[];tokens=new Map;busyIds=new Set;listeners=new Set;regionsCache=new Map;subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}isActive(e){return this.activeId===e}isBusy(e){return this.busyIds.has(e)}invalidate(e){this.tokens.set(e,(this.tokens.get(e)??0)+1),this.queue=this.queue.filter(t=>t.jobId!==e)}enqueue(e,t){const i=(this.tokens.get(e)??0)+1;this.tokens.set(e,i),this.busyIds.add(e),this.queue.push({jobId:e,gen:i,opts:t}),this.pump()}pumping=!1;async pump(){if(!this.pumping){this.pumping=!0;try{for(;this.queue.length;){const e=this.queue.shift();if(e.gen!==this.tokens.get(e.jobId))continue;const t=await this.storage.get(e.jobId);if(!t||t.status==="cancelled"){this.busyIds.delete(e.jobId),this.notify();continue}this.activeId=e.jobId,await this.scan(e),this.activeId=null,this.busyIds.delete(e.jobId),this.notify()}}finally{this.pumping=!1,this.activeId=null}}}async start(e,t){const i=$u(e,t,0).key,s=await this.findBySnapshotKey(i);if(s&&s.status!=="done")return await this.resume(s.id),{ok:!0,job:await this.storage.get(s.id)};const r=Xv(e,t);if(!r.ok)return{ok:!1,errors:r.errors};const a=r.job;return await this.storage.put(a),this.notify(),this.enqueue(a.id,{}),{ok:!0,job:a}}async findBySnapshotKey(e){return[...await this.storage.getAll()].filter(i=>i.snapshot.key===e).sort((i,s)=>s.updatedAt-i.updatedAt)[0]}async resumeInterrupted(){const e=await this.storage.getAll(),t=[];for(const i of e)i.status==="running"&&i.combos.some(s=>s.status==="pending")&&(this.enqueue(i.id,{}),t.push(i));return t.length&&this.notify(),t}async resume(e){const t=await this.storage.get(e);if(!t)throw new Error("作业不存在（可能已被删除）");t.status!=="done"&&(this.busyIds.has(e)||(t.status="running",t.canceledAt=null,t.updatedAt=Date.now(),await this.storage.put(t),this.notify(),this.enqueue(e,{})))}async cancel(e){const t=await this.storage.get(e);!t||t.status!=="running"||(this.invalidate(e),t.status="cancelled",t.canceledAt=Date.now(),t.updatedAt=Date.now(),await this.storage.put(t),this.activeId,this.busyIds.delete(e),this.notify())}async remove(e){this.invalidate(e),this.busyIds.delete(e),this.regionsCache.delete(e),await this.storage.delete(e),this.notify()}async recompute(e,t){const i=await this.storage.get(e);if(!i||this.busyIds.has(e))return;const s=new Set(t);for(const r of i.combos)s.has(r.index)&&(r.status="pending",r.reason=void 0,r.maxArea=0,r.worstS=r.worstPhi1=r.worstPhi2=null,r.doneAt=null);i.updatedAt=Date.now(),await this.storage.put(i),this.notify(),this.enqueue(e,{onlyIndexes:s,keepStatus:i.status})}async scan(e){const{jobId:t,gen:i,opts:s}=e;for(;;){if(i!==this.tokens.get(t))return;const r=await this.storage.get(t);if(!r)return;const a=r.combos.find(c=>c.status==="pending"&&(s.onlyIndexes?s.onlyIndexes.has(c.index):!0));if(!a)break;const o=await zv(r.snapshot,a);if(i!==this.tokens.get(t))return;const l=await this.storage.get(t);if(!l)return;if(Object.assign(l.combos[a.index],o.result),this.cacheRegions(t,o),!s.keepStatus){const c=l.combos.some(u=>u.status==="pending");l.status=c?"running":"done",l.finishedAt=c?null:Date.now()}l.updatedAt=Date.now(),await this.storage.put(l),this.cb.onTick?.(t),this.notify(),await new Promise(c=>setTimeout(c,0))}}cacheRegions(e,t){if(!t.regions)return;let i=this.regionsCache.get(e);i||(i=new Map,this.regionsCache.set(e,i)),i.set(t.result.index,t.regions)}async getWorstPose(e,t){const i=await this.storage.get(e);if(!i)return null;const s=i.combos[t];if(!s||s.status!=="risk")return null;const r=this.regionsCache.get(e)?.get(t);if(r)return{combo:s,regions:r};const a=await Vv(i.snapshot,s);return this.cacheRegions(e,a),a.regions?{combo:a.result,regions:a.regions}:null}extrema(e){return kv(e.combos)}expectedCombos(e){return wp(e)}clone(e){return Gv(e)}}const tf=1,qv="spur-gear-lab",Yv=2,fa="cases",ar="envelopeJobs";let ka=null;function Dp(){return ka||(ka=new Promise((n,e)=>{const t=indexedDB.open(qv,Yv);t.onupgradeneeded=()=>{const i=t.result;if(i.objectStoreNames.contains(fa)||i.createObjectStore(fa,{keyPath:"id"}).createIndex("updatedAt","updatedAt"),!i.objectStoreNames.contains(ar)){const s=i.createObjectStore(ar,{keyPath:"id"});s.createIndex("snapshotKey","snapshot.key",{unique:!1}),s.createIndex("updatedAt","updatedAt")}},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),ka)}function Kv(){return Dp()}async function Ls(n,e,t){const i=await Dp();return new Promise((s,r)=>{const a=i.transaction(e,n),o=t(a.objectStore(e));o.onsuccess=()=>s(o.result),o.onerror=()=>r(o.error)})}async function nf(n){await Ls("readwrite",fa,e=>e.put({...n,updatedAt:Date.now()}))}async function Zv(n){await Ls("readwrite",fa,e=>e.delete(n))}async function Jv(){return[...await Ls("readonly",fa,e=>e.getAll())].sort((e,t)=>t.updatedAt-e.updatedAt)}function Qv(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function jv(n){return JSON.stringify(n,null,2)}function e0(n){const e=JSON.parse(n);if(!e||e.schemaVersion!==tf)throw new Error(`不支持的案例版本（需要 schemaVersion=${tf}）`);if(!e.gear1||!e.gear2)throw new Error("案例缺少齿轮参数");for(const t of[e.gear1,e.gear2])if(!(t.z>=4)||!(t.module>0)||!(t.alphaDeg>0))throw new Error("案例参数不合法（z≥4, m>0, α>0）");return e}function t0(n){const e=new Blob([jv(n)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t;const s=(n.name||"gear-case").replace(/[^\w一-龥-]+/g,"_");i.download=`${s}.json`,i.click(),URL.revokeObjectURL(t)}class n0{async get(e){return Ls("readonly",ar,t=>t.get(e))}async getAll(){return await Kv(),[...await Ls("readonly",ar,t=>t.getAll())].sort((t,i)=>i.updatedAt-t.updatedAt)}async put(e){await Ls("readwrite",ar,t=>t.put(e))}async delete(e){await Ls("readwrite",ar,t=>t.delete(e))}}let zl=null;function sf(){return zl||(zl=new n0),zl}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="186",Gi={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i0=0,rf=1,s0=2,Eo=1,r0=2,Xr=3,Os=0,In=1,mi=2,Wi=0,ta=1,af=2,of=3,lf=4,a0=5,ir=100,o0=101,l0=102,c0=103,u0=104,h0=200,f0=201,d0=202,p0=203,Lp=204,Ip=205,m0=206,g0=207,_0=208,v0=209,x0=210,S0=211,M0=212,y0=213,b0=214,Fc=0,Oc=1,Bc=2,da=3,zc=4,Vc=5,kc=6,Hc=7,Up=0,E0=1,T0=2,xi=0,Np=1,Fp=2,Op=3,Bp=4,zp=5,Vp=6,kp=7,Hp=300,Bs=301,_r=302,Vl=303,kl=304,hl=306,Gc=1e3,Vi=1001,Wc=1002,un=1003,A0=1004,Ha=1005,_n=1006,Hl=1007,Is=1008,Fn=1009,Gp=1010,Wp=1011,pa=1012,Yu=1013,yi=1014,gi=1015,bi=1016,Ku=1017,Zu=1018,ma=1020,Xp=35902,$p=35899,qp=1021,Yp=1022,jn=1023,Zi=1026,Us=1027,Kp=1028,Ju=1029,zs=1030,Qu=1031,ju=1033,To=33776,Ao=33777,wo=33778,Co=33779,Xc=35840,$c=35841,qc=35842,Yc=35843,Kc=36196,Zc=37492,Jc=37496,Qc=37488,jc=37489,Xo=37490,eu=37491,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,au=37813,ou=37814,lu=37815,cu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,mu=36492,gu=36494,_u=36495,vu=36283,xu=36284,$o=36285,Su=36286,w0=3200,Mu=0,C0=1,os="",Hn="srgb",qo="srgb-linear",Yo="linear",Dt="srgb",Gl=7680,R0=519,P0=512,D0=513,L0=514,eh=515,I0=516,U0=517,th=518,N0=519,F0=35044,cf="300 es",_i=2e3,ga=2001;function O0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B0(){const n=Ko("canvas");return n.style.display="block",n}const uf={};function hf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Zp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=Zp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function yt(...n){n=Zp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function dr(...n){const e=n.join(" ");e in uf||(uf[e]=!0,at(...n))}function z0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const V0={[Fc]:Oc,[Bc]:kc,[zc]:Hc,[da]:Vc,[Oc]:Fc,[kc]:Bc,[Hc]:zc,[Vc]:da};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,yu=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function k0(n,e){return(n%e+e)%e}function Wl(n,e,t){return(1-t)*n+t*e}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const H0={DEG2RAD:na};class Be{static{Be.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],_=r[a+2],y=r[a+3];if(f!==y||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*y;m<0&&(h=-h,d=-d,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const A=Math.acos(m),D=Math.sin(A);p=Math.sin(p*A)/D,o=Math.sin(o*A)/D,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{static{K.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ff.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new K,ff=new hs;class ht{static{ht.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],y=s[0],m=s[3],p=s[6],A=s[1],D=s[4],M=s[7],w=s[2],R=s[5],F=s[8];return r[0]=a*y+o*A+l*w,r[3]=a*m+o*D+l*R,r[6]=a*p+o*M+l*F,r[1]=c*y+u*A+f*w,r[4]=c*m+u*D+f*R,r[7]=c*p+u*M+f*F,r[2]=h*y+d*A+_*w,r[5]=h*m+d*D+_*R,r[8]=h*p+d*M+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=t*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(e,t)),this}rotate(e){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-e)),this}translate(e,t){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new ht,df=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pf=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G0(){const n={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Dt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?Yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qo]:{primaries:e,whitePoint:i,transfer:Yo,toXYZ:df,fromXYZ:pf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:df,fromXYZ:pf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),n}const xt=G0();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gs;class W0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=Ko("canvas")),Gs.width=e.width,Gs.height=e.height;const s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X0=0;class nh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let $0=0;const Yl=new K;class An extends ds{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,i=Vi,s=Vi,r=_n,a=Is,o=jn,l=Fn,c=An.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Mr(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Hp;An.DEFAULT_ANISOTROPY=1;class Gt{static{Gt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,M=(d+1)/2,w=(p+1)/2,R=(u+h)/4,F=(f+y)/4,S=(_+m)/4;return D>M&&D>w?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=R/i,r=F/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=F/r,s=S/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-y)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q0 extends ds{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new An(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new nh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends q0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jp extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y0 extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class zt{static{zt.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,_,y,m)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,_,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h+y*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h-y*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K0,e,Z0)}lookAt(e,t,i){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ts.crossVectors(i,Un),ts.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ts.crossVectors(i,Un)),ts.normalize(),Ga.crossVectors(Un,ts),s[0]=ts.x,s[4]=Ga.x,s[8]=Un.x,s[1]=ts.y,s[5]=Ga.y,s[9]=Un.y,s[2]=ts.z,s[6]=Ga.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],y=i[6],m=i[10],p=i[14],A=i[3],D=i[7],M=i[11],w=i[15],R=s[0],F=s[4],S=s[8],I=s[12],k=s[1],q=s[5],re=s[9],ce=s[13],X=s[2],ee=s[6],ue=s[10],ie=s[14],me=s[3],he=s[7],ge=s[11],ve=s[15];return r[0]=a*R+o*k+l*X+c*me,r[4]=a*F+o*q+l*ee+c*he,r[8]=a*S+o*re+l*ue+c*ge,r[12]=a*I+o*ce+l*ie+c*ve,r[1]=u*R+f*k+h*X+d*me,r[5]=u*F+f*q+h*ee+d*he,r[9]=u*S+f*re+h*ue+d*ge,r[13]=u*I+f*ce+h*ie+d*ve,r[2]=_*R+y*k+m*X+p*me,r[6]=_*F+y*q+m*ee+p*he,r[10]=_*S+y*re+m*ue+p*ge,r[14]=_*I+y*ce+m*ie+p*ve,r[3]=A*R+D*k+M*X+w*me,r[7]=A*F+D*q+M*ee+w*he,r[11]=A*S+D*re+M*ue+w*ge,r[15]=A*I+D*ce+M*ie+w*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],y=e[7],m=e[11],p=e[15],A=l*d-c*h,D=o*d-c*f,M=o*h-l*f,w=a*d-c*u,R=a*h-l*u,F=a*f-o*u;return t*(y*A-m*D+p*M)-i*(_*A-m*w+p*R)+s*(_*D-y*w+p*F)-r*(_*M-y*R+m*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],y=e[13],m=e[14],p=e[15],A=t*o-i*a,D=t*l-s*a,M=t*c-r*a,w=i*l-s*o,R=i*c-r*o,F=s*c-r*l,S=u*y-f*_,I=u*m-h*_,k=u*p-d*_,q=f*m-h*y,re=f*p-d*y,ce=h*p-d*m,X=A*ce-D*re+M*q+w*k-R*I+F*S;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/X;return e[0]=(o*ce-l*re+c*q)*ee,e[1]=(s*re-i*ce-r*q)*ee,e[2]=(y*F-m*R+p*w)*ee,e[3]=(h*R-f*F-d*w)*ee,e[4]=(l*k-a*ce-c*I)*ee,e[5]=(t*ce-s*k+r*I)*ee,e[6]=(m*M-_*F-p*D)*ee,e[7]=(u*F-h*M+d*D)*ee,e[8]=(a*re-o*k+c*S)*ee,e[9]=(i*k-t*re-r*S)*ee,e[10]=(_*R-y*M+p*A)*ee,e[11]=(f*M-u*R-d*A)*ee,e[12]=(o*I-a*q-l*S)*ee,e[13]=(t*q-i*I+s*S)*ee,e[14]=(y*D-_*w-m*A)*ee,e[15]=(u*w-f*D+h*A)*ee,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,y=a*u,m=a*f,p=o*f,A=l*c,D=l*u,M=l*f,w=i.x,R=i.y,F=i.z;return s[0]=(1-(y+p))*w,s[1]=(d+M)*w,s[2]=(_-D)*w,s[3]=0,s[4]=(d-M)*R,s[5]=(1-(h+p))*R,s[6]=(m+A)*R,s[7]=0,s[8]=(_+D)*F,s[9]=(m-A)*F,s[10]=(1-(h+y))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ws.set(s[0],s[1],s[2]).length();const o=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);const c=1/a,u=1/o,f=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,t.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=_i,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let _,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===_i)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ga)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=_i,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let _,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===_i)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===ga)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ws=new K,Kn=new zt,K0=new K(0,0,0),Z0=new K(1,1,1),ts=new K,Ga=new K,Un=new K,mf=new zt,gf=new hs;class fs{constructor(e=0,t=0,i=0,s=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J0=0;const _f=new K,Xs=new hs,Pi=new zt,Wa=new K,Ur=new K,Q0=new K,j0=new hs,vf=new K(1,0,0),xf=new K(0,1,0),Sf=new K(0,0,1),Mf={type:"added"},ex={type:"removed"},$s={type:"childadded",child:null},Kl={type:"childremoved",child:null};class hn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new K,t=new fs,i=new hs,s=new K(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new ht}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,t){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ur,Wa,this.up):Pi.lookAt(Wa,Ur,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mf),$s.child=e,this.dispatchEvent($s),$s.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mf),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,j0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}hn.DEFAULT_UP=new K(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lr extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Jl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=k0(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Jl(a,r,e+1/3),this.g=Jl(a,r,e),this.b=Jl(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Hn){function i(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const i=Qp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return xt.workingToColorSpace(pn.copy(this),e),Math.round(_t(pn.r*255,0,255))*65536+Math.round(_t(pn.g*255,0,255))*256+Math.round(_t(pn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(pn.copy(this),t);const i=pn.r,s=pn.g,r=pn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Hn){xt.workingToColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,s=pn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Xa);const i=Wl(ns.h,Xa.h,t),s=Wl(ns.s,Xa.s,t),r=Wl(ns.l,Xa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new St;St.NAMES=Qp;class nx extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new K,Di=new K,Ql=new K,Li=new K,qs=new K,Ys=new K,yf=new K,jl=new K,ec=new K,tc=new K,nc=new Gt,ic=new Gt,sc=new Gt;class Gn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zn.subVectors(e,t),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zn.subVectors(s,t),Di.subVectors(i,t),Ql.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(Di),l=Zn.dot(Ql),c=Di.dot(Di),u=Di.dot(Ql),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return nc.setScalar(0),ic.setScalar(0),sc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,i),sc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nc,r.x),a.addScaledVector(ic,r.y),a.addScaledVector(sc,r.z),a}static isFrontFacing(e,t,i,s){return Zn.subVectors(i,t),Di.subVectors(e,t),Zn.cross(Di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Zn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;qs.subVectors(s,i),Ys.subVectors(r,i),jl.subVectors(e,i);const l=qs.dot(jl),c=Ys.dot(jl);if(l<=0&&c<=0)return t.copy(i);ec.subVectors(e,s);const u=qs.dot(ec),f=Ys.dot(ec);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(qs,a);tc.subVectors(e,r);const d=qs.dot(tc),_=Ys.dot(tc);if(_>=0&&d<=_)return t.copy(r);const y=d*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ys,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return yf.subVectors(r,s),o=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(yf,o);const p=1/(m+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(qs,a).addScaledVector(Ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ea{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),qa.subVectors(this.max,Nr),Ks.subVectors(e.a,Nr),Zs.subVectors(e.b,Nr),Js.subVectors(e.c,Nr),is.subVectors(Zs,Ks),ss.subVectors(Js,Zs),Ms.subVectors(Ks,Js);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ms.z,Ms.y,is.z,0,-is.x,ss.z,0,-ss.x,Ms.z,0,-Ms.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ms.y,Ms.x,0];return!rc(t,Ks,Zs,Js,qa)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,Ks,Zs,Js,qa))?!1:(Ya.crossVectors(is,ss),t=[Ya.x,Ya.y,Ya.z],rc(t,Ks,Zs,Js,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new K,new K,new K,new K,new K,new K,new K,new K],Jn=new K,$a=new Ea,Ks=new K,Zs=new K,Js=new K,is=new K,ss=new K,Ms=new K,Nr=new K,qa=new K,Ya=new K,ys=new K;function rc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ys.fromArray(n,r);const o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zt=new K,Ka=new Be;let ix=0;class $i extends ds{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=F0,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),s=Rn(s,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class jp extends $i{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class em extends $i{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jt extends $i{constructor(e,t,i){super(new Float32Array(e),t,i)}}const sx=new Ea,Fr=new K,ac=new K;class fl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(ac)),this.expandByPoint(Fr.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rx=0;const kn=new zt,oc=new hn,Qs=new K,Nn=new Ea,Or=new Ea,an=new K;class vn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O0(e)?em:jp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Nn.min,Or.min),Nn.expandByPoint(an),an.addVectors(Nn.max,Or.max),Nn.expandByPoint(an)):(Nn.expandByPoint(Or.min),Nn.expandByPoint(Or.max))}Nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(e,c),an.add(Qs)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $i(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new K,l[S]=new K;const c=new K,u=new K,f=new K,h=new Be,d=new Be,_=new Be,y=new K,m=new K;function p(S,I,k){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,I),f.fromBufferAttribute(i,k),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,I),_.fromBufferAttribute(r,k),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const q=1/(d.x*_.y-_.x*d.y);isFinite(q)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(q),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(q),o[S].add(y),o[I].add(y),o[k].add(y),l[S].add(m),l[I].add(m),l[k].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let S=0,I=A.length;S<I;++S){const k=A[S],q=k.start,re=k.count;for(let ce=q,X=q+re;ce<X;ce+=3)p(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const D=new K,M=new K,w=new K,R=new K;function F(S){w.fromBufferAttribute(s,S),R.copy(w);const I=o[S];D.copy(I),D.sub(w.multiplyScalar(w.dot(I))).normalize(),M.crossVectors(R,I);const q=M.dot(l[S])<0?-1:1;a.setXYZW(S,D.x,D.y,D.z,q)}for(let S=0,I=A.length;S<I;++S){const k=A[S],q=k.start,re=k.count;for(let ce=q,X=q+re;ce<X;ce+=3)F(e.getX(ce+0)),F(e.getX(ce+1)),F(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new K,r=new K,a=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new $i(h,u,f)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new K,ax=new K,ox=new ht;class Oi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=lc.subVectors(i,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ox.getNormalMatrix(e),s=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let lx=0;class yr extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=ta,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lp,this.blendDst=Ip,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gl,this.stencilZFail=Gl,this.stencilZPass=Gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ui=new K,cc=new K,Za=new K,Ja=new K;class dl{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){cc.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Ja.copy(this.origin).sub(cc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=Ja.dot(this.direction),l=-Ja.dot(Za),c=Ja.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(cc).addScaledVector(Za,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=i.x-a.x,A=i.y-a.y,D=i.z-a.z,M=Math.abs(l),w=Math.abs(c),R=Math.abs(u);let F,S,I,k,q,re,ce,X,ee,ue,ie,me;if(M>=w&&M>=R?(I=l,re=f,ee=_,me=p,l>=0?(F=c,S=u,k=h,q=d,ce=y,X=m,ue=A,ie=D):(F=u,S=c,k=d,q=h,ce=m,X=y,ue=D,ie=A)):w>=R?(I=c,re=h,ee=y,me=A,c>=0?(F=u,S=l,k=d,q=f,ce=m,X=_,ue=D,ie=p):(F=l,S=u,k=f,q=d,ce=_,X=m,ue=p,ie=D)):(I=u,re=d,ee=m,me=D,u>=0?(F=l,S=c,k=f,q=h,ce=_,X=y,ue=p,ie=A):(F=c,S=l,k=h,q=f,ce=y,X=_,ue=A,ie=p)),I===0)return null;const he=F/I,ge=S/I,ve=1/I,Ue=k-he*re,ye=q-ge*re,We=ce-he*ee,tt=X-ge*ee,nt=ue-he*me,de=ie-ge*me,_e=nt*tt-de*We,be=Ue*de-ye*nt,He=We*ye-tt*Ue;if(s){if(_e<0||be<0||He<0)return null}else if((_e<0||be<0||He<0)&&(_e>0||be>0||He>0))return null;const Ve=_e+be+He;if(Ve===0)return null;const C=ve*(_e*re+be*ee+He*me);return(Ve>0?C<0:C>0)?null:this.at(C/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ia extends yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bf=new zt,bs=new dl,Qa=new fl,Ef=new K,ja=new K,eo=new K,to=new K,uc=new K,no=new K,Tf=new K,io=new K;class Bn extends hn{constructor(e=new vn,t=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(uc.fromBufferAttribute(f,e),a?no.addScaledVector(uc,u):no.addScaledVector(uc.sub(t),u))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(Qa.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Qa,Ef)===null||bs.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(bf.copy(r).invert(),bs.copy(e.ray).applyMatrix4(bf),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],A=Math.max(m.start,d.start),D=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=D;M<w;M+=3){const R=o.getX(M),F=o.getX(M+1),S=o.getX(M+2);s=so(this,p,e,i,c,u,f,R,F,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const A=o.getX(m),D=o.getX(m+1),M=o.getX(m+2);s=so(this,a,e,i,c,u,f,A,D,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],A=Math.max(m.start,d.start),D=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=D;M<w;M+=3){const R=M,F=M+1,S=M+2;s=so(this,p,e,i,c,u,f,R,F,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const A=m,D=m+1,M=m+2;s=so(this,a,e,i,c,u,f,A,D,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function cx(n,e,t,i,s,r,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Os,o),l===null)return null;io.copy(o),io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:n}}function so(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ja),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);const u=cx(n,e,t,i,ja,eo,to,Tf);if(u){const f=new K;Gn.getBarycoord(Tf,ja,eo,to,f),s&&(u.uv=Gn.getInterpolatedAttribute(s,o,l,c,f,new Be)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,o,l,c,f,new Be)),a&&(u.normal=Gn.getInterpolatedAttribute(a,o,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new K,materialIndex:0};Gn.getNormal(ja,eo,to,h.normal),u.face=h,u.barycoord=f}return u}class ux extends An{constructor(e=null,t=1,i=1,s,r,a,o,l,c=un,u=un,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Es=new fl,hx=new Be(.5,.5),ro=new K;class sh{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],y=r[9],m=r[10],p=r[11],A=r[12],D=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,d-u,p-_,w-A).normalize(),s[1].setComponents(c+a,d+u,p+_,w+A).normalize(),s[2].setComponents(c+o,d+f,p+y,w+D).normalize(),s[3].setComponents(c-o,d-f,p-y,w-D).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,w-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,w-M).normalize(),t===_i)s[5].setComponents(c+l,d+h,p+m,w+M).normalize();else if(t===ga)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=hx.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ro extends yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zo=new K,Jo=new K,Af=new zt,Br=new dl,ao=new fl,hc=new K,wf=new K;class rh extends hn{constructor(e=new vn,t=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Zo.fromBufferAttribute(t,s-1),Jo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Zo.distanceTo(Jo);e.setAttribute("lineDistance",new Jt(i,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;Af.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Af);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=u.getX(y),A=u.getX(y+1),D=oo(this,e,Br,l,p,A,y);D&&t.push(D)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(d),p=oo(this,e,Br,l,y,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=oo(this,e,Br,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=oo(this,e,Br,l,_-1,d,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function oo(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Zo.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Zo,Jo,hc,wf)>i)return;hc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hc);if(!(c<e.near||c>e.far))return{distance:c,point:wf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Cf=new K,Rf=new K;class fx extends rh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cf.fromBufferAttribute(t,s),Rf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cf.distanceTo(Rf);e.setAttribute("lineDistance",new Jt(i,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dx extends rh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tm extends An{constructor(e=[],t=Bs,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _a extends An{constructor(e,t,i=yi,s,r,a,o=un,l=un,c,u=Zi,f=1){if(u!==Zi&&u!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class px extends _a{constructor(e,t=yi,i=Bs,s,r,a=un,o=un,l,c=Zi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nm extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ta extends vn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function _(y,m,p,A,D,M,w,R,F,S,I){const k=M/F,q=w/S,re=M/2,ce=w/2,X=R/2,ee=F+1,ue=S+1;let ie=0,me=0;const he=new K;for(let ge=0;ge<ue;ge++){const ve=ge*q-ce;for(let Ue=0;Ue<ee;Ue++){const ye=Ue*k-re;he[y]=ye*A,he[m]=ve*D,he[p]=X,c.push(he.x,he.y,he.z),he[y]=0,he[m]=0,he[p]=R>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ue/F),f.push(1-ge/S),ie+=1}}for(let ge=0;ge<S;ge++)for(let ve=0;ve<F;ve++){const Ue=h+ve+ee*ge,ye=h+ve+ee*(ge+1),We=h+(ve+1)+ee*(ge+1),tt=h+(ve+1)+ee*ge;l.push(Ue,ye,tt),l.push(ye,We,tt),me+=6}o.addGroup(d,me,I),d+=me,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const lo=new K,co=new K,fc=new K,uo=new Gn;class mx extends vn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(na*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:p}=uo;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),uo.getNormal(fc),f[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){const D=(A+1)%3,M=f[A],w=f[D],R=uo[u[A]],F=uo[u[D]],S=`${M}_${w}`,I=`${w}_${M}`;I in h&&h[I]?(fc.dot(h[I].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(F.x,F.y,F.z)),h[I]=null):S in h||(h[S]={index0:c[A],index1:c[D],normal:fc.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:m}=h[_];lo.fromBufferAttribute(o,y),co.fromBufferAttribute(o,m),d.push(lo.x,lo.y,lo.z),d.push(co.x,co.y,co.z)}this.setAttribute("position",new Jt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Be:new K);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new K,s=[],r=[],a=[],o=new K,l=new zt;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new K)}r[0]=new K,a[0]=new K;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(_t(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ah extends Ti{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Be){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gx extends ah{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Pf=new K,Df=new K,dc=new oh,pc=new oh,mc=new oh;class _x extends Ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new K){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Df.subVectors(s[0],s[1]).add(s[0]),c=Df);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Pf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),dc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,y,m),pc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,y,m),mc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),pc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),mc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(dc.calc(l),pc.calc(l),mc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new K().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lf(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function vx(n,e){const t=1-n;return t*t*e}function xx(n,e){return 2*(1-n)*n*e}function Sx(n,e){return n*n*e}function sa(n,e,t,i){return vx(n,e)+xx(n,t)+Sx(n,i)}function Mx(n,e){const t=1-n;return t*t*t*e}function yx(n,e){const t=1-n;return 3*t*t*n*e}function bx(n,e){return 3*(1-n)*n*n*e}function Ex(n,e){return n*n*n*e}function ra(n,e,t,i,s){return Mx(n,e)+yx(n,t)+bx(n,i)+Ex(n,s)}class im extends Ti{constructor(e=new Be,t=new Be,i=new Be,s=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Be){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,s.x,r.x,a.x,o.x),ra(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tx extends Ti{constructor(e=new K,t=new K,i=new K,s=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new K){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,s.x,r.x,a.x,o.x),ra(e,s.y,r.y,a.y,o.y),ra(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sm extends Ti{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ax extends Ti{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rm extends Ti{constructor(e=new Be,t=new Be,i=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Be){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(sa(e,s.x,r.x,a.x),sa(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wx extends Ti{constructor(e=new K,t=new K,i=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new K){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(sa(e,s.x,r.x,a.x),sa(e,s.y,r.y,a.y),sa(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Lf(o,l.x,c.x,u.x,f.x),Lf(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Be().fromArray(s))}return this}}var bu=Object.freeze({__proto__:null,ArcCurve:gx,CatmullRomCurve3:_x,CubicBezierCurve:im,CubicBezierCurve3:Tx,EllipseCurve:ah,LineCurve:sm,LineCurve3:Ax,QuadraticBezierCurve:rm,QuadraticBezierCurve3:wx,SplineCurve:am});class Cx extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new bu[s.type]().fromJSON(s))}return this}}class If extends Cx{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new sm(this.currentPoint.clone(),new Be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new rm(this.currentPoint.clone(),new Be(e,t),new Be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new im(this.currentPoint.clone(),new Be(e,t),new Be(i,s),new Be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new am(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new ah(e,t,i,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qo extends If{constructor(e){super(e),this.uuid=Mr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new If().fromJSON(s))}return this}}function Rx(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=om(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Ux(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<s;h+=t){const d=n[h],_=n[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return va(r,a,t,o,l,c,0),a}function om(n,e,t,i,s){let r;if(s===Xx(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Uf(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Uf(a/i|0,n[a],n[a+1],r);return r&&vr(r,r.next)&&(Sa(r),r=r.next),r}function Vs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(vr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function va(n,e,t,i,s,r,a){if(!n)return;!a&&r&&zx(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Dx(n,i,s,r):Px(n)){e.push(l.i,n.i,c.i),Sa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Lx(Vs(n),e),va(n,e,t,i,s,r,2)):a===2&&Ix(n,e,t,i,s,r):va(Vs(n),e,t,i,s,r,1);break}}}function Px(n){const e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&$r(s,o,r,l,a,c,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Dx(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Wt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),y=Math.max(o,l,c),m=Math.max(u,f,h),p=Eu(d,_,e,t,i),A=Eu(y,m,e,t,i);let D=n.prevZ,M=n.nextZ;for(;D&&D.z>=p&&M&&M.z<=A;){if(D.x>=d&&D.x<=y&&D.y>=_&&D.y<=m&&D!==s&&D!==a&&$r(o,u,l,f,c,h,D.x,D.y)&&Wt(D.prev,D,D.next)>=0||(D=D.prevZ,M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&$r(o,u,l,f,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;D&&D.z>=p;){if(D.x>=d&&D.x<=y&&D.y>=_&&D.y<=m&&D!==s&&D!==a&&$r(o,u,l,f,c,h,D.x,D.y)&&Wt(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;M&&M.z<=A;){if(M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&$r(o,u,l,f,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Lx(n,e){let t=n;do{const i=t.prev,s=t.next.next;!vr(i,s)&&cm(i,t,t.next,s)&&xa(i,s)&&xa(s,i)&&(e.push(i.i,t.i,s.i),Sa(t),Sa(t.next),t=n=s),t=t.next}while(t!==n);return Vs(t)}function Ix(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hx(a,o)){let l=um(a,o);a=Vs(a,a.next),l=Vs(l,l.next),va(a,e,t,i,s,r,0),va(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Ux(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=om(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(kx(c))}s.sort(Nx);for(let r=0;r<s.length;r++)t=Fx(s[r],t);return t}function Nx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Fx(n,e){const t=Ox(n,e);if(!t)return e;const i=um(t,n);return Vs(i,i.next),Vs(t,t.next)}function Ox(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(vr(n,t))return t;do{if(vr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&lm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const f=Math.abs(s-t.y)/(i-t.x);xa(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Bx(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Bx(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function zx(n,e,t,i){let s=n;do s.z===0&&(s.z=Eu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Vx(s)}function Vx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Eu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function kx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function lm(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function $r(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&lm(n,e,t,i,s,r,a,o)}function Hx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Gx(n,e)&&(xa(n,e)&&xa(e,n)&&Wx(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||vr(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function vr(n,e){return n.x===e.x&&n.y===e.y}function cm(n,e,t,i){const s=fo(Wt(n,e,t)),r=fo(Wt(n,e,i)),a=fo(Wt(t,i,n)),o=fo(Wt(t,i,e));return!!(s!==r&&a!==o||s===0&&ho(n,t,e)||r===0&&ho(n,i,e)||a===0&&ho(t,n,i)||o===0&&ho(t,e,i))}function ho(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function fo(n){return n>0?1:n<0?-1:0}function Gx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&cm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function xa(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function Wx(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function um(n,e){const t=Tu(n.i,n.x,n.y),i=Tu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Uf(n,e,t,i){const s=Tu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xx(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class $x{static triangulate(e,t,i=2){return Rx(e,t,i)}}class ki{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ki.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Nf(e),Ff(i,e);let a=e.length;t.forEach(Nf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ff(i,t[l]);const o=$x.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Nf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ff(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class lh extends vn{constructor(e=new Qo([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:qx;let D,M=!1,w,R,F,S;if(p){D=p.getSpacedPoints(u),M=!0,h=!1;const U=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,U),R=new K,F=new K,S=new K}h||(m=0,d=0,_=0,y=0);const I=o.extractPoints(c);let k=I.shape;const q=I.holes;if(!ki.isClockWise(k)){k=k.reverse();for(let U=0,$=q.length;U<$;U++){const G=q[U];ki.isClockWise(G)&&(q[U]=G.reverse())}}function ce(U){const G=10000000000000001e-36;let H=U[0];for(let ne=1;ne<=U.length;ne++){const ae=ne%U.length,J=U[ae],j=J.x-H.x,Ae=J.y-H.y,P=j*j+Ae*Ae,Pe=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(H.x),Math.abs(H.y)),Le=G*Pe*Pe;if(P<=Le){U.splice(ae,1),ne--;continue}H=J}}ce(k),q.forEach(ce);const X=q.length,ee=k;for(let U=0;U<X;U++){const $=q[U];k=k.concat($)}function ue(U,$,G){return $||yt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector($,G)}const ie=k.length;function me(U,$,G){let H,ne,ae;const J=U.x-$.x,j=U.y-$.y,Ae=G.x-U.x,P=G.y-U.y,Pe=J*J+j*j,Le=J*P-j*Ae;if(Math.abs(Le)>Number.EPSILON){const E=Math.sqrt(Pe),g=Math.sqrt(Ae*Ae+P*P),O=$.x-j/E,Q=$.y+J/E,se=G.x-P/g,we=G.y+Ae/g,De=((se-O)*P-(we-Q)*Ae)/(J*P-j*Ae);H=O+J*De-U.x,ne=Q+j*De-U.y;const pe=H*H+ne*ne;if(pe<=2)return new Be(H,ne);ae=Math.sqrt(pe/2)}else{let E=!1;J>Number.EPSILON?Ae>Number.EPSILON&&(E=!0):J<-Number.EPSILON?Ae<-Number.EPSILON&&(E=!0):Math.sign(j)===Math.sign(P)&&(E=!0),E?(H=-j,ne=J,ae=Math.sqrt(Pe)):(H=J,ne=j,ae=Math.sqrt(Pe/2))}return new Be(H/ae,ne/ae)}const he=[];for(let U=0,$=ee.length,G=$-1,H=U+1;U<$;U++,G++,H++)G===$&&(G=0),H===$&&(H=0),he[U]=me(ee[U],ee[G],ee[H]);const ge=[];let ve,Ue=he.concat();for(let U=0,$=X;U<$;U++){const G=q[U];ve=[];for(let H=0,ne=G.length,ae=ne-1,J=H+1;H<ne;H++,ae++,J++)ae===ne&&(ae=0),J===ne&&(J=0),ve[H]=me(G[H],G[ae],G[J]);ge.push(ve),Ue=Ue.concat(ve)}let ye;if(m===0)ye=ki.triangulateShape(ee,q);else{const U=[],$=[];for(let G=0;G<m;G++){const H=G/m,ne=d*Math.cos(H*Math.PI/2),ae=_*Math.sin(H*Math.PI/2)+y;for(let J=0,j=ee.length;J<j;J++){const Ae=ue(ee[J],he[J],ae);be(Ae.x,Ae.y,-ne),H===0&&U.push(Ae)}for(let J=0,j=X;J<j;J++){const Ae=q[J];ve=ge[J];const P=[];for(let Pe=0,Le=Ae.length;Pe<Le;Pe++){const E=ue(Ae[Pe],ve[Pe],ae);be(E.x,E.y,-ne),H===0&&P.push(E)}H===0&&$.push(P)}}ye=ki.triangulateShape(U,$)}const We=ye.length,tt=_+y;for(let U=0;U<ie;U++){const $=h?ue(k[U],Ue[U],tt):k[U];M?(F.copy(w.normals[0]).multiplyScalar($.x),R.copy(w.binormals[0]).multiplyScalar($.y),S.copy(D[0]).add(F).add(R),be(S.x,S.y,S.z)):be($.x,$.y,0)}for(let U=1;U<=u;U++)for(let $=0;$<ie;$++){const G=h?ue(k[$],Ue[$],tt):k[$];M?(F.copy(w.normals[U]).multiplyScalar(G.x),R.copy(w.binormals[U]).multiplyScalar(G.y),S.copy(D[U]).add(F).add(R),be(S.x,S.y,S.z)):be(G.x,G.y,f/u*U)}for(let U=m-1;U>=0;U--){const $=U/m,G=d*Math.cos($*Math.PI/2),H=_*Math.sin($*Math.PI/2)+y;for(let ne=0,ae=ee.length;ne<ae;ne++){const J=ue(ee[ne],he[ne],H);be(J.x,J.y,f+G)}for(let ne=0,ae=q.length;ne<ae;ne++){const J=q[ne];ve=ge[ne];for(let j=0,Ae=J.length;j<Ae;j++){const P=ue(J[j],ve[j],H);M?be(P.x,P.y+D[u-1].y,D[u-1].x+G):be(P.x,P.y,f+G)}}}nt(),de();function nt(){const U=s.length/3;if(h){let $=0,G=ie*$;for(let H=0;H<We;H++){const ne=ye[H];He(ne[2]+G,ne[1]+G,ne[0]+G)}$=u+m*2,G=ie*$;for(let H=0;H<We;H++){const ne=ye[H];He(ne[0]+G,ne[1]+G,ne[2]+G)}}else{for(let $=0;$<We;$++){const G=ye[$];He(G[2],G[1],G[0])}for(let $=0;$<We;$++){const G=ye[$];He(G[0]+ie*u,G[1]+ie*u,G[2]+ie*u)}}i.addGroup(U,s.length/3-U,0)}function de(){const U=s.length/3;let $=0;_e(ee,$),$+=ee.length;for(let G=0,H=q.length;G<H;G++){const ne=q[G];_e(ne,$),$+=ne.length}i.addGroup(U,s.length/3-U,1)}function _e(U,$){let G=U.length;for(;--G>=0;){const H=G;let ne=G-1;ne<0&&(ne=U.length-1);for(let ae=0,J=u+m*2;ae<J;ae++){const j=ie*ae,Ae=ie*(ae+1),P=$+H+j,Pe=$+ne+j,Le=$+ne+Ae,E=$+H+Ae;Ve(P,Pe,Le,E)}}}function be(U,$,G){l.push(U),l.push($),l.push(G)}function He(U,$,G){C(U),C($),C(G);const H=s.length/3,ne=A.generateTopUV(i,s,H-3,H-2,H-1);B(ne[0]),B(ne[1]),B(ne[2])}function Ve(U,$,G,H){C(U),C($),C(H),C($),C(G),C(H);const ne=s.length/3,ae=A.generateSideWallUV(i,s,ne-6,ne-3,ne-2,ne-1);B(ae[0]),B(ae[1]),B(ae[3]),B(ae[1]),B(ae[2]),B(ae[3])}function C(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function B(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Yx(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new bu[s.type]().fromJSON(s)),new lh(i,e.options)}}const qx={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Be(r,a),new Be(o,l),new Be(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],d=e[s*3+1],_=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Be(a,1-l),new Be(c,1-f),new Be(h,1-_),new Be(y,1-p)]:[new Be(o,1-l),new Be(u,1-f),new Be(d,1-_),new Be(m,1-p)]}};function Yx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pl extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],y=[],m=[];for(let p=0;p<u;p++){const A=p*h-a;for(let D=0;D<c;D++){const M=D*f-r;_.push(M,-A,0),y.push(0,0,1),m.push(D/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const D=A+c*p,M=A+c*(p+1),w=A+1+c*(p+1),R=A+1+c*p;d.push(D,M,R),d.push(M,w,R)}this.setIndex(d),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ch extends vn{constructor(e=new Qo([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2));function c(u){const f=s.length/3,h=u.extractPoints(t);let d=h.shape;const _=h.holes;ki.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const A=_[m];ki.isClockWise(A)===!0&&(_[m]=A.reverse())}const y=ki.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const A=_[m];d=d.concat(A)}for(let m=0,p=d.length;m<p;m++){const A=d[m];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let m=0,p=y.length;m<p;m++){const A=y[m],D=A[0]+f,M=A[1]+f,w=A[2]+f;i.push(D,M,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Kx(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new ch(i,e.curveSegments)}}function Kx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class jo extends vn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new K,h=new K,d=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const A=[],D=p/i,M=a+D*o,w=e*Math.cos(M),R=Math.sqrt(e*e-w*w);let F=0;p===0&&a===0?F=.5/t:p===i&&l===Math.PI&&(F=-.5/t);for(let S=0;S<=t;S++){const I=S/t,k=s+I*r;f.x=-R*Math.cos(k),f.y=w,f.z=R*Math.sin(k),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(I+F,1-D),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const D=u[p][A+1],M=u[p][A],w=u[p+1][A],R=u[p+1][A+1];(p!==0||a>0)&&d.push(D,M,R),(p!==i-1||l<Math.PI)&&d.push(M,w,R)}this.setIndex(d),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Of(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Of(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function bn(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const s in i)e[s]=i[s]}return e}function Of(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Zx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Jx={clone:xr,merge:bn};var Qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qx,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class eS extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tS extends yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nS extends yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iS extends yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fm extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const gc=new zt,Bf=new K,zf=new K;class sS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ga||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const po=new K,mo=new hs,oi=new K;class dm extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(po,mo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new K,Vf=new Be,kf=new Be;class Qn extends dm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yu*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Vf,kf),t.subVectors(kf,Vf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ml extends dm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rS extends sS{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aS extends fm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new rS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class oS extends fm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const js=-90,er=1;class lS extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qn(js,er,e,t);s.layers=this.layers,this.add(s);const r=new Qn(js,er,e,t);r.layers=this.layers,this.add(r);const a=new Qn(js,er,e,t);a.layers=this.layers,this.add(a);const o=new Qn(js,er,e,t);o.layers=this.layers,this.add(o);const l=new Qn(js,er,e,t);l.layers=this.layers,this.add(l);const c=new Qn(js,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class cS extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hf=new zt;class uS{constructor(e,t,i=0,s=1/0){this.ray=new dl(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):yt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(e,t=!0,i=[]){return Au(e,this,i,t),i.sort(Gf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,i,t);return i.sort(Gf),i}}function Gf(n,e){return n.distance-e.distance}function Au(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Au(r[a],e,t,!0)}}class Wf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pm{static{pm.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}}class hS extends ds{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Xf(n,e,t,i){const s=fS(i);switch(t){case qp:return n*e;case Kp:return n*e/s.components*s.byteLength;case Ju:return n*e/s.components*s.byteLength;case zs:return n*e*2/s.components*s.byteLength;case Qu:return n*e*2/s.components*s.byteLength;case Yp:return n*e*3/s.components*s.byteLength;case jn:return n*e*4/s.components*s.byteLength;case ju:return n*e*4/s.components*s.byteLength;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:case Yc:return Math.max(n,16)*Math.max(e,8)/4;case Xc:case qc:return Math.max(n,8)*Math.max(e,8)/2;case Kc:case Zc:case Qc:case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Xo:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case au:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case du:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mu:case gu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vu:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $o:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fS(n){switch(n){case Fn:case Gp:return{byteLength:1,components:1};case pa:case Wp:case bi:return{byteLength:2,components:1};case Ku:case Zu:return{byteLength:2,components:4};case yi:case Yu:case gi:return{byteLength:4,components:1};case Xp:case $p:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mm(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],y=f[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const y=f[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
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
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SS=`#ifdef USE_AOMAP
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
#endif`,MS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
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
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wS=`#ifdef USE_IRIDESCENCE
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
#endif`,CS=`#ifdef USE_BUMPMAP
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,OS=`#define PI 3.141592653589793
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
} // validated`,BS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zS=`vec3 transformedNormal = objectNormal;
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
#endif`,VS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
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
}`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aM=`#ifdef USE_ENVMAP
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
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
#endif`,fM=`uniform sampler2D dfgLUT;
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
}`,dM=`
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
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
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EM=`#if defined( USE_POINTS_UV )
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
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
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
#endif`,DM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
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
#endif`,BM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jM=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,yy=`#define DISTANCE
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
}`,by=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Dy=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Ny=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,zy=`#define STANDARD
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
}`,Vy=`#define TOON
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
}`,ky=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 color;
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
}`,$y=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:_S,alphatest_fragment:vS,alphatest_pars_fragment:xS,aomap_fragment:SS,aomap_pars_fragment:MS,batching_pars_vertex:yS,batching_vertex:bS,begin_vertex:ES,beginnormal_vertex:TS,bsdfs:AS,iridescence_fragment:wS,bumpmap_pars_fragment:CS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:DS,clipping_planes_vertex:LS,color_fragment:IS,color_pars_fragment:US,color_pars_vertex:NS,color_vertex:FS,common:OS,cube_uv_reflection_fragment:BS,defaultnormal_vertex:zS,displacementmap_pars_vertex:VS,displacementmap_vertex:kS,emissivemap_fragment:HS,emissivemap_pars_fragment:GS,colorspace_fragment:WS,colorspace_pars_fragment:XS,envmap_fragment:$S,envmap_common_pars_fragment:qS,envmap_pars_fragment:YS,envmap_pars_vertex:KS,envmap_physical_pars_fragment:aM,envmap_vertex:ZS,fog_vertex:JS,fog_pars_vertex:QS,fog_fragment:jS,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:sM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:lM,lights_phong_fragment:cM,lights_phong_pars_fragment:uM,lights_physical_fragment:hM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:pM,lights_fragment_end:mM,lightprobes_pars_fragment:gM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:vM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:SM,map_fragment:MM,map_pars_fragment:yM,map_particle_fragment:bM,map_particle_pars_fragment:EM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:AM,morphinstance_vertex:wM,morphcolor_vertex:CM,morphnormal_vertex:RM,morphtarget_pars_vertex:PM,morphtarget_vertex:DM,normal_fragment_begin:LM,normal_fragment_maps:IM,normal_pars_fragment:UM,normal_pars_vertex:NM,normal_vertex:FM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:BM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:kM,opaque_fragment:HM,packing:GM,premultiplied_alpha_fragment:WM,project_vertex:XM,dithering_fragment:$M,dithering_pars_fragment:qM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:KM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:JM,shadowmap_vertex:QM,shadowmask_pars_fragment:jM,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:ay,tonemapping_pars_fragment:oy,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:uy,uv_pars_vertex:hy,uv_vertex:fy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:_y,cube_vert:vy,cube_frag:xy,depth_vert:Sy,depth_frag:My,distance_vert:yy,distance_frag:by,equirect_vert:Ey,equirect_frag:Ty,linedashed_vert:Ay,linedashed_frag:wy,meshbasic_vert:Cy,meshbasic_frag:Ry,meshlambert_vert:Py,meshlambert_frag:Dy,meshmatcap_vert:Ly,meshmatcap_frag:Iy,meshnormal_vert:Uy,meshnormal_frag:Ny,meshphong_vert:Fy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:zy,meshtoon_vert:Vy,meshtoon_frag:ky,points_vert:Hy,points_frag:Gy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:$y,sprite_frag:qy},qe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},di={basic:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:bn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:bn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:bn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:bn([qe.points,qe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:bn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:bn([qe.common,qe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:bn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:bn([qe.sprite,qe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:bn([qe.common,qe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:bn([qe.lights,qe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};di.physical={uniforms:bn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const go={r:0,b:0,g:0},Yy=new zt,gm=new ht;gm.set(-1,0,0,0,1,0,0,0,1);function Ky(n,e,t,i,s,r){const a=new St(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const M=A.backgroundBlurriness>0;D=e.get(D,M)}return D}function _(A){let D=!1;const M=d(A);M===null?m(a,o):M&&M.isColor&&(m(M,1),D=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,D){const M=d(D);M&&(M.isCubeTexture||M.mapping===hl)?(c===void 0&&(c=new Bn(new Ta(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:xr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(D.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gm),c.material.toneMapped=xt.getTransfer(M.colorSpace)!==Dt,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Bn(new pl(2,2),new Ei({name:"BackgroundMaterial",uniforms:xr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=xt.getTransfer(M.colorSpace)!==Dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,D){A.getRGB(go,hm(n)),t.buffers.color.setClear(go.r,go.g,go.b,D,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,D=1){a.set(A),o=D,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:_,addToRenderList:y,dispose:p}}function Zy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(q,re,ce,X,ee){let ue=!1;const ie=f(q,X,ce,re);r!==ie&&(r=ie,c(r.object)),ue=d(q,X,ce,ee),ue&&_(q,X,ce,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ue||a)&&(a=!1,M(q,re,ce,X),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(q){return n.bindVertexArray(q)}function u(q){return n.deleteVertexArray(q)}function f(q,re,ce,X){const ee=X.wireframe===!0;let ue=i[re.id];ue===void 0&&(ue={},i[re.id]=ue);const ie=q.isInstancedMesh===!0?q.id:0;let me=ue[ie];me===void 0&&(me={},ue[ie]=me);let he=me[ce.id];he===void 0&&(he={},me[ce.id]=he);let ge=he[ee];return ge===void 0&&(ge=h(l()),he[ee]=ge),ge}function h(q){const re=[],ce=[],X=[];for(let ee=0;ee<t;ee++)re[ee]=0,ce[ee]=0,X[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:ce,attributeDivisors:X,object:q,attributes:{},index:null}}function d(q,re,ce,X){const ee=r.attributes,ue=re.attributes;let ie=0;const me=ce.getAttributes();for(const he in me)if(me[he].location>=0){const ve=ee[he];let Ue=ue[he];if(Ue===void 0&&(he==="instanceMatrix"&&q.instanceMatrix&&(Ue=q.instanceMatrix),he==="instanceColor"&&q.instanceColor&&(Ue=q.instanceColor)),ve===void 0||ve.attribute!==Ue||Ue&&ve.data!==Ue.data)return!0;ie++}return r.attributesNum!==ie||r.index!==X}function _(q,re,ce,X){const ee={},ue=re.attributes;let ie=0;const me=ce.getAttributes();for(const he in me)if(me[he].location>=0){let ve=ue[he];ve===void 0&&(he==="instanceMatrix"&&q.instanceMatrix&&(ve=q.instanceMatrix),he==="instanceColor"&&q.instanceColor&&(ve=q.instanceColor));const Ue={};Ue.attribute=ve,ve&&ve.data&&(Ue.data=ve.data),ee[he]=Ue,ie++}r.attributes=ee,r.attributesNum=ie,r.index=X}function y(){const q=r.newAttributes;for(let re=0,ce=q.length;re<ce;re++)q[re]=0}function m(q){p(q,0)}function p(q,re){const ce=r.newAttributes,X=r.enabledAttributes,ee=r.attributeDivisors;ce[q]=1,X[q]===0&&(n.enableVertexAttribArray(q),X[q]=1),ee[q]!==re&&(n.vertexAttribDivisor(q,re),ee[q]=re)}function A(){const q=r.newAttributes,re=r.enabledAttributes;for(let ce=0,X=re.length;ce<X;ce++)re[ce]!==q[ce]&&(n.disableVertexAttribArray(ce),re[ce]=0)}function D(q,re,ce,X,ee,ue,ie){ie===!0?n.vertexAttribIPointer(q,re,ce,ee,ue):n.vertexAttribPointer(q,re,ce,X,ee,ue)}function M(q,re,ce,X){y();const ee=X.attributes,ue=ce.getAttributes(),ie=re.defaultAttributeValues;for(const me in ue){const he=ue[me];if(he.location>=0){let ge=ee[me];if(ge===void 0&&(me==="instanceMatrix"&&q.instanceMatrix&&(ge=q.instanceMatrix),me==="instanceColor"&&q.instanceColor&&(ge=q.instanceColor)),ge!==void 0){const ve=ge.normalized,Ue=ge.itemSize,ye=e.get(ge);if(ye===void 0)continue;const We=ye.buffer,tt=ye.type,nt=ye.bytesPerElement,de=tt===n.INT||tt===n.UNSIGNED_INT||ge.gpuType===Yu;if(ge.isInterleavedBufferAttribute){const _e=ge.data,be=_e.stride,He=ge.offset;if(_e.isInstancedInterleavedBuffer){for(let Ve=0;Ve<he.locationSize;Ve++)p(he.location+Ve,_e.meshPerAttribute);q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ve=0;Ve<he.locationSize;Ve++)m(he.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Ve=0;Ve<he.locationSize;Ve++)D(he.location+Ve,Ue/he.locationSize,tt,ve,be*nt,(He+Ue/he.locationSize*Ve)*nt,de)}else{if(ge.isInstancedBufferAttribute){for(let _e=0;_e<he.locationSize;_e++)p(he.location+_e,ge.meshPerAttribute);q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let _e=0;_e<he.locationSize;_e++)m(he.location+_e);n.bindBuffer(n.ARRAY_BUFFER,We);for(let _e=0;_e<he.locationSize;_e++)D(he.location+_e,Ue/he.locationSize,tt,ve,Ue*nt,Ue/he.locationSize*_e*nt,de)}}else if(ie!==void 0){const ve=ie[me];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(he.location,ve);break;case 3:n.vertexAttrib3fv(he.location,ve);break;case 4:n.vertexAttrib4fv(he.location,ve);break;default:n.vertexAttrib1fv(he.location,ve)}}}}A()}function w(){I();for(const q in i){const re=i[q];for(const ce in re){const X=re[ce];for(const ee in X){const ue=X[ee];for(const ie in ue)u(ue[ie].object),delete ue[ie];delete X[ee]}}delete i[q]}}function R(q){if(i[q.id]===void 0)return;const re=i[q.id];for(const ce in re){const X=re[ce];for(const ee in X){const ue=X[ee];for(const ie in ue)u(ue[ie].object),delete ue[ie];delete X[ee]}}delete i[q.id]}function F(q){for(const re in i){const ce=i[re];for(const X in ce){const ee=ce[X];if(ee[q.id]===void 0)continue;const ue=ee[q.id];for(const ie in ue)u(ue[ie].object),delete ue[ie];delete ee[q.id]}}}function S(q){for(const re in i){const ce=i[re],X=q.isInstancedMesh===!0?q.id:0,ee=ce[X];if(ee!==void 0){for(const ue in ee){const ie=ee[ue];for(const me in ie)u(ie[me].object),delete ie[me];delete ee[ue]}delete ce[X],Object.keys(ce).length===0&&delete i[re]}}}function I(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:k,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Jy(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==jn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const S=F===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Fn&&F!==gi&&!S&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(at("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:M,maxSamples:w,samples:R}}function jy(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Oi,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,D=A*4;let M=p.clippingState||null;l.value=M,M=u(_,h,D,d);for(let w=0;w!==D;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=d+y*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let D=0,M=d;D!==y;++D,M+=4)a.copy(f[D]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const cr=4,eb=6,tb=20,nb=256,zr=new ml,$f=new St;let _c=null,vc=0,xc=0,Sc=!1;const ib=new K,Ts=new K;class qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=ib}=r;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,xc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:bi,format:jn,colorSpace:qo,depthBuffer:!1},s=Yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sb(r)),this._blurMaterial=ab(r,e,t),this._ggxMaterial=rb(r,e,t)}return s}_compileMaterial(e){const t=new Bn(new vn,e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,i,s,r){const l=new Qn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor($f),f.toneMapping=xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Ta,new ia({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy($f),p=!0);for(let D=0;D<6;D++){const M=D%3;M===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):M===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));const w=this._cubeSize;tr(s,M*w,D>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Bs||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-cr?i-_+cr:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,tr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,tr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,zr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-cr?s-this._lodMax+cr:0),h=4*(this._cubeSize-u);tr(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,zr)}}function sb(n){const e=[],t=[];let i=n;const s=n-cr+1+eb;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let p=0;p<f;p++){const A=p%3*2/3-1,D=p>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(M,d*h*p);for(let w=0;w<h;w++){const R=u[w*2]*2-1,F=u[w*2+1]*2-1;p===0?Ts.set(1,F,R):p===1?Ts.set(-R,1,-F):p===2?Ts.set(-R,F,1):p===3?Ts.set(-1,F,-R):p===4?Ts.set(-R,-1,F):Ts.set(R,F,-1),Ts.toArray(y,(p*h+w)*d)}}const m=new vn;m.setAttribute("position",new $i(_,d)),m.setAttribute("outputDirection",new $i(y,d)),t.push(new Bn(m,null)),i>cr&&i--}return{lodMeshes:t,sizeLods:e}}function Yf(n,e,t){const i=new ni(n,e,t);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function rb(n,e,t){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ab(n,e,t){return new Ei({name:"SphericalGaussianBlur",defines:{SAMPLES:tb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Kf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Zf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _m extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new tm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ta(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Wi});r.uniforms.tEquirect.value=t;const a=new Bn(s,r),o=t.minFilter;return t.minFilter===Is&&(t.minFilter=_n),new lS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function ob(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Vl||d===kl)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new _m(_.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===Vl||d===kl,y=d===Bs||d===_r;if(_||y){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new qf(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const A=h.image;return _&&A&&A.height>0||y&&A&&l(A)?(i===null&&(i=new qf(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Vl?h.mapping=Bs:d===kl&&(h.mapping=_r),h}function l(h){let d=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function lb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&dr("WebGLRenderer: "+i+" extension not supported."),s}}}function cb(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let y=0;if(_===void 0)return;if(d!==null){const A=d.array;y=d.version;for(let D=0,M=A.length;D<M;D+=3){const w=A[D+0],R=A[D+1],F=A[D+2];h.push(w,R,R,F,F,w)}}else{const A=_.array;y=_.version;for(let D=0,M=A.length/3-1;D<M;D+=3){const w=D+0,R=D+1,F=D+2;h.push(w,R,R,F,F,w)}}const m=new(_.count>=65535?em:jp)(h,1);m.version=y;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ub(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function hb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fb(n,e,t){const i=new WeakMap,s=new Gt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let I=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let D=0;d===!0&&(D=1),_===!0&&(D=2),y===!0&&(D=3);let M=o.attributes.position.count*D,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*w*4*f),F=new Jp(R,M,w,f);F.type=gi,F.needsUpdate=!0;const S=D*4;for(let k=0;k<f;k++){const q=m[k],re=p[k],ce=A[k],X=M*w*4*k;for(let ee=0;ee<q.count;ee++){const ue=ee*S;d===!0&&(s.fromBufferAttribute(q,ee),R[X+ue+0]=s.x,R[X+ue+1]=s.y,R[X+ue+2]=s.z,R[X+ue+3]=0),_===!0&&(s.fromBufferAttribute(re,ee),R[X+ue+4]=s.x,R[X+ue+5]=s.y,R[X+ue+6]=s.z,R[X+ue+7]=0),y===!0&&(s.fromBufferAttribute(ce,ee),R[X+ue+8]=s.x,R[X+ue+9]=s.y,R[X+ue+10]=s.z,R[X+ue+11]=ce.itemSize===4?s.w:1)}}h={count:f,texture:F,size:new Be(M,w)},i.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function db(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const pb={[Np]:"LINEAR_TONE_MAPPING",[Fp]:"REINHARD_TONE_MAPPING",[Op]:"CINEON_TONE_MAPPING",[Bp]:"ACES_FILMIC_TONE_MAPPING",[Vp]:"AGX_TONE_MAPPING",[kp]:"NEUTRAL_TONE_MAPPING",[zp]:"CUSTOM_TONE_MAPPING"};function mb(n,e,t,i,s,r){const a=new ni(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new vn;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const u=new eS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bn(c,u),h=new ml(-1,1,1,-1,0,1);let d=null,_=null,y=!1,m,p=null,A=[],D=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let R=0;R<A.length;R++){const F=A[R];F.setSize&&F.setSize(M,w)}},this.setEffects=function(M){A=M,D=A.length>0&&A[0].isRenderPass===!0;const w=a.width,R=a.height;A.length>0&&o===null&&(o=new ni(w,R,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(w,R,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<A.length;F++){const S=A[F];S.setSize&&S.setSize(w,R)}},this.begin=function(M,w){if(y||M.toneMapping===xi&&A.length===0)return!1;if(p=w,w!==null){const R=w.width,F=w.height;(a.width!==R||a.height!==F)&&this.setSize(R,F)}return D===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=xi,!0},this.hasRenderPass=function(){return D},this.end=function(M,w){M.toneMapping=m,y=!0;let R=a,F=o;for(let S=0;S<A.length;S++){const I=A[S];I.enabled!==!1&&(I.render(M,F,R,w),I.needsSwap!==!1&&(R=F,F=F===o?l:o))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,u.defines={},xt.getTransfer(d)===Dt&&(u.defines.SRGB_TRANSFER="");const S=pb[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,M.setRenderTarget(p),M.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const vm=new An,wu=new _a(1,1),xm=new Jp,Sm=new Y0,Mm=new tm,Jf=[],Qf=[],jf=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Jf[s];if(r===void 0&&(r=new Float32Array(s),Jf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=Qf[e];t===void 0&&(t=new Int32Array(e),Qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function Sb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;td.set(i),n.uniformMatrix2fv(this.addr,!1,td),tn(t,i)}}function Mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),tn(t,i)}}function yb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;jf.set(i),n.uniformMatrix4fv(this.addr,!1,jf),tn(t,i)}}function bb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function Pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function Db(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wu.compareFunction=t.isReversedDepthBuffer()?th:eh,r=wu):r=vm,t.setTexture2D(e||r,s)}function Lb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sm,s)}function Ib(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mm,s)}function Ub(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xm,s)}function Nb(n){switch(n){case 5126:return gb;case 35664:return _b;case 35665:return vb;case 35666:return xb;case 35674:return Sb;case 35675:return Mb;case 35676:return yb;case 5124:case 35670:return bb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return Ab;case 5125:return wb;case 36294:return Cb;case 36295:return Rb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Ub}}function Fb(n,e){n.uniform1fv(this.addr,e)}function Ob(n,e){const t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function Bb(n,e){const t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function zb(n,e){const t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function Vb(n,e){const t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kb(n,e){const t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hb(n,e){const t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gb(n,e){n.uniform1iv(this.addr,e)}function Wb(n,e){n.uniform2iv(this.addr,e)}function Xb(n,e){n.uniform3iv(this.addr,e)}function $b(n,e){n.uniform4iv(this.addr,e)}function qb(n,e){n.uniform1uiv(this.addr,e)}function Yb(n,e){n.uniform2uiv(this.addr,e)}function Kb(n,e){n.uniform3uiv(this.addr,e)}function Zb(n,e){n.uniform4uiv(this.addr,e)}function Jb(n,e,t){const i=this.cache,s=e.length,r=_l(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=wu:a=vm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Qb(n,e,t){const i=this.cache,s=e.length,r=_l(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sm,r[a])}function jb(n,e,t){const i=this.cache,s=e.length,r=_l(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mm,r[a])}function eE(n,e,t){const i=this.cache,s=e.length,r=_l(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xm,r[a])}function tE(n){switch(n){case 5126:return Fb;case 35664:return Ob;case 35665:return Bb;case 35666:return zb;case 35674:return Vb;case 35675:return kb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return $b;case 5125:return qb;case 36294:return Yb;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return eE}}class nE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}}class iE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tE(t.type)}}class sE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Mc=/(\w+)(\])?(\[|\.)?/g;function nd(n,e){n.seq.push(e),n.map[e.id]=e}function rE(n,e,t){const i=n.name,s=i.length;for(Mc.lastIndex=0;;){const r=Mc.exec(i),a=Mc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nd(t,c===void 0?new nE(o,n,e):new iE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new sE(o),nd(t,f)),t=f}}}class Po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);rE(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function id(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const aE=37297;let oE=0;function lE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const sd=new ht;function cE(n){xt._getMatrix(sd,xt.workingColorSpace,n);const e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Yo:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+lE(n.getShaderSource(e),o)}else return r}function uE(n,e){const t=cE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hE={[Np]:"Linear",[Fp]:"Reinhard",[Op]:"Cineon",[Bp]:"ACESFilmic",[Vp]:"AgX",[kp]:"Neutral",[zp]:"Custom"};function fE(n,e){const t=hE[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _o=new K;function dE(){xt.getLuminanceCoefficients(_o);const n=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function mE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qr(n){return n!==""}function ad(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _E=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(n){return n.replace(_E,xE)}const vE=new Map;function xE(n,e){let t=pt[e];if(t===void 0){const i=vE.get(e);if(i!==void 0)t=pt[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cu(t)}const SE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(n){return n.replace(SE,ME)}function ME(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const yE={[Eo]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function bE(n){return yE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EE={[Bs]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE_UV"};function TE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":EE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const AE={[_r]:"ENVMAP_MODE_REFRACTION"};function wE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":AE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CE={[Up]:"ENVMAP_BLENDING_MULTIPLY",[E0]:"ENVMAP_BLENDING_MIX",[T0]:"ENVMAP_BLENDING_ADD"};function RE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":CE[n.combine]||"ENVMAP_BLENDING_NONE"}function PE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function DE(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bE(t),c=TE(t),u=wE(t),f=RE(t),h=PE(t),d=pE(t),_=mE(r),y=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(m=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?pt.tonemapping_pars_fragment:"",t.toneMapping!==xi?fE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,uE("linearToOutputTexel",t.outputColorSpace),dE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Cu(a),a=ad(a,t),a=od(a,t),o=Cu(o),o=ad(o,t),o=od(o,t),a=ld(a),o=ld(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=A+m+a,M=A+p+o,w=id(s,s.VERTEX_SHADER,D),R=id(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function F(q){if(n.debug.checkShaderErrors){const re=s.getProgramInfoLog(y)||"",ce=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(R)||"",ee=re.trim(),ue=ce.trim(),ie=X.trim();let me=!0,he=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,R);else{const ge=rd(s,w,"vertex"),ve=rd(s,R,"fragment");yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+ee+`
`+ge+`
`+ve)}else ee!==""?at("WebGLProgram: Program Info Log:",ee):(ue===""||ie==="")&&(he=!1);he&&(q.diagnostics={runnable:me,programLog:ee,vertexShader:{log:ue,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(w),s.deleteShader(R),S=new Po(s,y),I=gE(s,y)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(y,aE)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=R,this}let LE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UE(e),t.set(e,i)),i}}class UE{constructor(e){this.id=LE++,this.code=e,this.usedTimes=0}}function NE(n){return n===zs||n===Xo||n===$o}function FE(n,e,t,i,s,r){const a=new ih,o=new IE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,I,k,q,re,ce){const X=q.fog,ee=re.geometry,ue=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?q.environment:null,ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,me=e.get(S.envMap||ue,ie),he=me&&me.mapping===hl?me.image.height:null,ge=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&at("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const ve=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ue=ve!==void 0?ve.length:0;let ye=0;ee.morphAttributes.position!==void 0&&(ye=1),ee.morphAttributes.normal!==void 0&&(ye=2),ee.morphAttributes.color!==void 0&&(ye=3);let We,tt,nt,de;if(ge){const mt=di[ge];We=mt.vertexShader,tt=mt.fragmentShader}else{We=S.vertexShader,tt=S.fragmentShader;const mt=o.getVertexShaderStage(S),lt=o.getFragmentShaderStage(S);o.update(S,mt,lt),nt=mt.id,de=lt.id}const _e=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),He=re.isInstancedMesh===!0,Ve=re.isBatchedMesh===!0,C=!!S.map,B=!!S.matcap,U=!!me,$=!!S.aoMap,G=!!S.lightMap,H=!!S.bumpMap&&S.wireframe===!1,ne=!!S.normalMap,ae=!!S.displacementMap,J=!!S.emissiveMap,j=!!S.metalnessMap,Ae=!!S.roughnessMap,P=S.anisotropy>0,Pe=S.clearcoat>0,Le=S.dispersion>0,E=S.retroreflectivity>0,g=S.iridescence>0,O=S.sheen>0,Q=S.transmission>0,se=P&&!!S.anisotropyMap,we=Pe&&!!S.clearcoatMap,De=Pe&&!!S.clearcoatNormalMap,pe=Pe&&!!S.clearcoatRoughnessMap,Se=g&&!!S.iridescenceMap,Re=g&&!!S.iridescenceThicknessMap,Xe=O&&!!S.sheenColorMap,Ne=O&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Je=!!S.specularColorMap,et=!!S.specularIntensityMap,ot=Q&&!!S.transmissionMap,V=Q&&!!S.thicknessMap,Ie=!!S.gradientMap,xe=!!S.alphaMap,Z=S.alphaTest>0,T=!!S.alphaHash,N=!!S.extensions;let Fe=xi;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const Ge={shaderID:ge,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:tt,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Ve,batchingColor:Ve&&re._colorsTexture!==null,instancing:He,instancingColor:He&&re.instanceColor!==null,instancingMorph:He&&re.morphTexture!==null,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:C,matcap:B,envMap:U,envMapMode:U&&me.mapping,envMapCubeUVHeight:he,aoMap:$,lightMap:G,bumpMap:H,normalMap:ne,displacementMap:ae,emissiveMap:J,normalMapObjectSpace:ne&&S.normalMapType===C0,normalMapTangentSpace:ne&&S.normalMapType===Mu,packedNormalMap:ne&&S.normalMapType===Mu&&NE(S.normalMap.format),metalnessMap:j,roughnessMap:Ae,anisotropy:P,anisotropyMap:se,clearcoat:Pe,clearcoatMap:we,clearcoatNormalMap:De,clearcoatRoughnessMap:pe,dispersion:Le,retroreflection:E,iridescence:g,iridescenceMap:Se,iridescenceThicknessMap:Re,sheen:O,sheenColorMap:Xe,sheenRoughnessMap:Ne,specularMap:ze,specularColorMap:Je,specularIntensityMap:et,transmission:Q,transmissionMap:ot,thicknessMap:V,gradientMap:Ie,opaque:S.transparent===!1&&S.blending===ta&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Z,alphaHash:T,combine:S.combine,mapUv:C&&_(S.map.channel),aoMapUv:$&&_(S.aoMap.channel),lightMapUv:G&&_(S.lightMap.channel),bumpMapUv:H&&_(S.bumpMap.channel),normalMapUv:ne&&_(S.normalMap.channel),displacementMapUv:ae&&_(S.displacementMap.channel),emissiveMapUv:J&&_(S.emissiveMap.channel),metalnessMapUv:j&&_(S.metalnessMap.channel),roughnessMapUv:Ae&&_(S.roughnessMap.channel),anisotropyMapUv:se&&_(S.anisotropyMap.channel),clearcoatMapUv:we&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(S.sheenRoughnessMap.channel),specularMapUv:ze&&_(S.specularMap.channel),specularColorMapUv:Je&&_(S.specularColorMap.channel),specularIntensityMapUv:et&&_(S.specularIntensityMap.channel),transmissionMapUv:ot&&_(S.transmissionMap.channel),thicknessMapUv:V&&_(S.thicknessMap.channel),alphaMapUv:xe&&_(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ne||P),vertexNormals:!!ee.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!ee.attributes.uv&&(C||xe),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||ee.attributes.normal===void 0&&ne===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:re.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:ye,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:C&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Dt,decodeVideoTextureEmissive:J&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mi,flipSided:S.side===In,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:N&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&S.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function m(S){const I=[];if(S.shaderID?I.push(S.shaderID):(I.push(S.customVertexShaderID),I.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)I.push(k),I.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(p(I,S),A(I,S),I.push(n.outputColorSpace)),I.push(S.customProgramCacheKey),I.join()}function p(S,I){S.push(I.precision),S.push(I.outputColorSpace),S.push(I.envMapMode),S.push(I.envMapCubeUVHeight),S.push(I.mapUv),S.push(I.alphaMapUv),S.push(I.lightMapUv),S.push(I.aoMapUv),S.push(I.bumpMapUv),S.push(I.normalMapUv),S.push(I.displacementMapUv),S.push(I.emissiveMapUv),S.push(I.metalnessMapUv),S.push(I.roughnessMapUv),S.push(I.anisotropyMapUv),S.push(I.clearcoatMapUv),S.push(I.clearcoatNormalMapUv),S.push(I.clearcoatRoughnessMapUv),S.push(I.iridescenceMapUv),S.push(I.iridescenceThicknessMapUv),S.push(I.sheenColorMapUv),S.push(I.sheenRoughnessMapUv),S.push(I.specularMapUv),S.push(I.specularColorMapUv),S.push(I.specularIntensityMapUv),S.push(I.transmissionMapUv),S.push(I.thicknessMapUv),S.push(I.combine),S.push(I.fogExp2),S.push(I.sizeAttenuation),S.push(I.morphTargetsCount),S.push(I.morphAttributeCount),S.push(I.numSunLights),S.push(I.numDirLights),S.push(I.numPointLights),S.push(I.numSpotLights),S.push(I.numSpotLightMaps),S.push(I.numHemiLights),S.push(I.numRectAreaLights),S.push(I.numSunLightShadows),S.push(I.numDirLightShadows),S.push(I.numPointLightShadows),S.push(I.numSpotLightShadows),S.push(I.numSpotLightShadowsWithMaps),S.push(I.numLightProbes),S.push(I.shadowMapType),S.push(I.toneMapping),S.push(I.numClippingPlanes),S.push(I.numClipIntersection),S.push(I.depthPacking)}function A(S,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.retroreflection&&a.enable(24),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function D(S){const I=d[S.type];let k;if(I){const q=di[I];k=Jx.clone(q.uniforms)}else k=S.uniforms;return k}function M(S,I){let k=u.get(I);return k!==void 0?++k.usedTimes:(k=new DE(n,I,S,s),c.push(k),u.set(I,k)),k}function w(S){if(--S.usedTimes===0){const I=c.indexOf(S);c[I]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function R(S){o.remove(S)}function F(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:D,acquireProgram:M,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:F}}function OE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function BE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,y,m,p){let A=n[e];return A===void 0?(A={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[e]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=_,A.materialVariant=a(h),A.groupOrder=y,A.renderOrder=h.renderOrder,A.z=m,A.group=p),e++,A}function l(h,d,_,y,m,p,A){A.reversedDepth===!0&&(m=-m);const D=o(h,d,_,y,m,p);_.transmission>0?i.push(D):_.transparent===!0?s.push(D):t.push(D)}function c(h,d,_,y,m,p){const A=o(h,d,_,y,m,p);_.transmission>0?i.unshift(A):_.transparent===!0?s.unshift(A):t.unshift(A)}function u(h,d){t.length>1&&t.sort(h||BE),i.length>1&&i.sort(d||ud),s.length>1&&s.sort(d||ud)}function f(){for(let h=e,d=n.length;h<d;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function zE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new hd,n.set(i,[a])):s>=r.length?(a=new hd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function VE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new St};break;case"SpotLight":t={position:new K,direction:new K,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function kE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HE=0;function GE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WE(n){const e=new VE,t=kE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const s=new K,r=new zt,a=new zt;function o(c){let u=0,f=0,h=0;for(let re=0;re<9;re++)i.probe[re].set(0,0,0);let d=0,_=0,y=0,m=0,p=0,A=0,D=0,M=0,w=0,R=0,F=0,S=0,I=0,k=0;c.sort(GE);for(let re=0,ce=c.length;re<ce;re++){const X=c[re],ee=X.color,ue=X.intensity,ie=X.distance;let me=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===zs?me=X.shadow.map.texture:me=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)u+=ee.r*ue,f+=ee.g*ue,h+=ee.b*ue;else if(X.isLightProbe){for(let he=0;he<9;he++)i.probe[he].addScaledVector(X.sh.coefficients[he],ue);k++}else if(X.isSunLight){const he=e.get(X);if(he.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ge=X.shadow,ve=t.get(X);ve.shadowIntensity=ge.intensity,ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize.copy(ge.mapSize).multiply(ge.getFrameExtents()),i.sunShadow[_]=ve,i.sunShadowMap[_]=me;const Ue=ge.getViewportCount();for(let ye=0;ye<Ue;ye++)i.sunShadowMatrix[y+ye]=ge.getMatrix(ye),i.sunShadowCascade[y+ye]=ge._cascadeData[ye];y+=Ue,_++}i.sun[d]=he,d++}else if(X.isDirectionalLight){const he=e.get(X);if(he.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ge=X.shadow,ve=t.get(X);ve.shadowIntensity=ge.intensity,ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,i.directionalShadow[m]=ve,i.directionalShadowMap[m]=me,i.directionalShadowMatrix[m]=X.shadow.matrix,w++}i.directional[m]=he,m++}else if(X.isSpotLight){const he=e.get(X);he.position.setFromMatrixPosition(X.matrixWorld),he.color.copy(ee).multiplyScalar(ue),he.distance=ie,he.coneCos=Math.cos(X.angle),he.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),he.decay=X.decay,i.spot[A]=he;const ge=X.shadow;if(X.map&&(i.spotLightMap[S]=X.map,S++,ge.updateMatrices(X),X.castShadow&&I++),i.spotLightMatrix[A]=ge.matrix,X.castShadow){const ve=t.get(X);ve.shadowIntensity=ge.intensity,ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,i.spotShadow[A]=ve,i.spotShadowMap[A]=me,F++}A++}else if(X.isRectAreaLight){const he=e.get(X);he.color.copy(ee).multiplyScalar(ue),he.halfWidth.set(X.width*.5,0,0),he.halfHeight.set(0,X.height*.5,0),i.rectArea[D]=he,D++}else if(X.isPointLight){const he=e.get(X);if(he.color.copy(X.color).multiplyScalar(X.intensity),he.distance=X.distance,he.decay=X.decay,X.castShadow){const ge=X.shadow,ve=t.get(X);ve.shadowIntensity=ge.intensity,ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,ve.shadowCameraNear=ge.camera.near,ve.shadowCameraFar=ge.camera.far,i.pointShadow[p]=ve,i.pointShadowMap[p]=me,i.pointShadowMatrix[p]=X.shadow.matrix,R++}i.point[p]=he,p++}else if(X.isHemisphereLight){const he=e.get(X);he.skyColor.copy(X.color).multiplyScalar(ue),he.groundColor.copy(X.groundColor).multiplyScalar(ue),i.hemi[M]=he,M++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const q=i.hash;(q.sunLength!==d||q.directionalLength!==m||q.pointLength!==p||q.spotLength!==A||q.rectAreaLength!==D||q.hemiLength!==M||q.numSunShadows!==_||q.numDirectionalShadows!==w||q.numPointShadows!==R||q.numSpotShadows!==F||q.numSpotMaps!==S||q.numLightProbes!==k)&&(i.sun.length=d,i.directional.length=m,i.spot.length=A,i.rectArea.length=D,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+S-I,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=k,q.sunLength=d,q.directionalLength=m,q.pointLength=p,q.spotLength=A,q.rectAreaLength=D,q.hemiLength=M,q.numSunShadows=_,q.numDirectionalShadows=w,q.numPointShadows=R,q.numSpotShadows=F,q.numSpotMaps=S,q.numLightProbes=k,i.version=HE++)}function l(c,u){let f=0,h=0,d=0,_=0,y=0,m=0;const p=u.matrixWorldInverse;for(let A=0,D=c.length;A<D;A++){const M=c[A];if(M.isSunLight){const w=i.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function fd(n){const e=new WE(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function XE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new fd(n),e.set(s,[o])):r>=a.length?(o=new fd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
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
}`,YE=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],KE=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],dd=new zt,Vr=new K,yc=new K;function ZE(n,e,t){let i=new sh;const s=new Be,r=new Be,a=new Gt,o=new nS,l=new iS,c={},u=t.maxTextureSize,f={[Os]:In,[In]:Os,[mi]:mi},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:$E,fragmentShader:qE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Bn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let p=this.type;this.render=function(R,F,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===r0&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eo);const I=n.getRenderTarget(),k=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),re=n.state;re.setBlending(Wi),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ce=p!==this.type;ce&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(ee=>ee.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,ee=R.length;X<ee;X++){const ue=R[X],ie=ue.shadow;if(ie===void 0){at("WebGLShadowMap:",ue,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);const me=ie.getFrameExtents();s.multiply(me),r.copy(ie.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,ie.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,ie.mapSize.y=r.y));const he=n.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=he,ie.map===null||ce===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===Xr){if(ue.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new ni(s.x,s.y,{format:zs,type:bi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),ie.map.texture.name=ue.name+".shadowMap",ie.map.depthTexture=new _a(s.x,s.y,gi),ie.map.depthTexture.name=ue.name+".shadowMapDepth",ie.map.depthTexture.format=Zi,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=un,ie.map.depthTexture.magFilter=un}else ue.isPointLight?(ie.map=new _m(s.x),ie.map.depthTexture=new px(s.x,yi)):(ie.map=new ni(s.x,s.y),ie.map.depthTexture=new _a(s.x,s.y,yi)),ie.map.depthTexture.name=ue.name+".shadowMap",ie.map.depthTexture.format=Zi,this.type===Eo?(ie.map.depthTexture.compareFunction=he?th:eh,ie.map.depthTexture.minFilter=_n,ie.map.depthTexture.magFilter=_n):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=un,ie.map.depthTexture.magFilter=un);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==s.x||ie.map.height!==s.y)&&ie.map.setSize(s.x,s.y);const ge=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();ue.isPointLight!==!0&&ie.updateMatrices(ue,S);for(let ve=0;ve<ge;ve++){const Ue=ie.getCamera(ve);if(ue.isPointLight){const ye=ie.camera,We=ie.matrix,tt=ue.distance||ye.far;tt!==ye.far&&(ye.far=tt,ye.updateProjectionMatrix()),Vr.setFromMatrixPosition(ue.matrixWorld),ye.position.copy(Vr),yc.copy(ye.position),yc.add(YE[ve]),ye.up.copy(KE[ve]),ye.lookAt(yc),ye.updateMatrixWorld(),We.makeTranslation(-Vr.x,-Vr.y,-Vr.z),dd.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(dd,ye.coordinateSystem,ye.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)n.setRenderTarget(ie.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(ie.map),n.clear());const ye=ie.getViewport(ve);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),re.viewport(a)}i=ie.getFrustum(ve),M(F,S,Ue,ue,this.type)}ie.isPointLightShadow!==!0&&this.type===Xr&&A(ie,S),ie.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(I,k,q)};function A(R,F){const S=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new ni(s.x,s.y,{format:zs,type:bi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(F,null,S,h,y,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(F,null,S,d,y,null)}function D(R,F,S,I){let k=null;const q=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(q!==void 0)k=q;else if(k=S.isPointLight===!0?l:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const re=k.uuid,ce=F.uuid;let X=c[re];X===void 0&&(X={},c[re]=X);let ee=X[ce];ee===void 0&&(ee=k.clone(),X[ce]=ee,F.addEventListener("dispose",w)),k=ee}if(k.visible=F.visible,k.wireframe=F.wireframe,I===Xr?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:f[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,S.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const re=n.properties.get(k);re.light=S}return k}function M(R,F,S,I,k){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===Xr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const ce=e.update(R),X=R.material;if(Array.isArray(X)){const ee=ce.groups;for(let ue=0,ie=ee.length;ue<ie;ue++){const me=ee[ue],he=X[me.materialIndex];if(he&&he.visible){const ge=D(R,he,I,k);R.onBeforeShadow(n,R,F,S,ce,ge,me),n.renderBufferDirect(S,null,ce,ge,R,me),R.onAfterShadow(n,R,F,S,ce,ge,me)}}}else if(X.visible){const ee=D(R,X,I,k);R.onBeforeShadow(n,R,F,S,ce,ee,null),n.renderBufferDirect(S,null,ce,ee,R,null),R.onAfterShadow(n,R,F,S,ce,ee,null)}}const re=R.children;for(let ce=0,X=re.length;ce<X;ce++)M(re[ce],F,S,I,k)}function w(R){R.target.removeEventListener("dispose",w);for(const S in c){const I=c[S],k=R.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function JE(n,e){function t(){let V=!1;const Ie=new Gt;let xe=null;const Z=new Gt(0,0,0,0);return{setMask:function(T){xe!==T&&!V&&(n.colorMask(T,T,T,T),xe=T)},setLocked:function(T){V=T},setClear:function(T,N,Fe,Ge,mt){mt===!0&&(T*=Ge,N*=Ge,Fe*=Ge),Ie.set(T,N,Fe,Ge),Z.equals(Ie)===!1&&(n.clearColor(T,N,Fe,Ge),Z.copy(Ie))},reset:function(){V=!1,xe=null,Z.set(-1,0,0,0)}}}function i(){let V=!1,Ie=!1,xe=null,Z=null,T=null;return{setReversed:function(N){if(Ie!==N){const Fe=e.get("EXT_clip_control");N?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ie=N;const Ge=T;T=null,this.setClear(Ge)}},getReversed:function(){return Ie},setTest:function(N){N?_e(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(N){xe!==N&&!V&&(n.depthMask(N),xe=N)},setFunc:function(N){if(Ie&&(N=V0[N]),Z!==N){switch(N){case Fc:n.depthFunc(n.NEVER);break;case Oc:n.depthFunc(n.ALWAYS);break;case Bc:n.depthFunc(n.LESS);break;case da:n.depthFunc(n.LEQUAL);break;case zc:n.depthFunc(n.EQUAL);break;case Vc:n.depthFunc(n.GEQUAL);break;case kc:n.depthFunc(n.GREATER);break;case Hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=N}},setLocked:function(N){V=N},setClear:function(N){T!==N&&(T=N,Ie&&(N=1-N),n.clearDepth(N))},reset:function(){V=!1,xe=null,Z=null,T=null,Ie=!1}}}function s(){let V=!1,Ie=null,xe=null,Z=null,T=null,N=null,Fe=null,Ge=null,mt=null;return{setTest:function(lt){V||(lt?_e(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(lt){Ie!==lt&&!V&&(n.stencilMask(lt),Ie=lt)},setFunc:function(lt,xn,zn){(xe!==lt||Z!==xn||T!==zn)&&(n.stencilFunc(lt,xn,zn),xe=lt,Z=xn,T=zn)},setOp:function(lt,xn,zn){(N!==lt||Fe!==xn||Ge!==zn)&&(n.stencilOp(lt,xn,zn),N=lt,Fe=xn,Ge=zn)},setLocked:function(lt){V=lt},setClear:function(lt){mt!==lt&&(n.clearStencil(lt),mt=lt)},reset:function(){V=!1,Ie=null,xe=null,Z=null,T=null,N=null,Fe=null,Ge=null,mt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,A=null,D=null,M=null,w=null,R=null,F=null,S=new St(0,0,0),I=0,k=!1,q=null,re=null,ce=null,X=null,ee=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,me=0;const he=n.getParameter(n.VERSION);he.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(he)[1]),ie=me>=1):he.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),ie=me>=2);let ge=null,ve={};const Ue=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),We=new Gt().fromArray(Ue),tt=new Gt().fromArray(ye);function nt(V,Ie,xe,Z){const T=new Uint8Array(4),N=n.createTexture();n.bindTexture(V,N),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<xe;Fe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,T):n.texImage2D(Ie+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,T);return N}const de={};de[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),a.setFunc(da),H(!1),ne(rf),_e(n.CULL_FACE),$(Wi);function _e(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function be(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function He(V,Ie){return h[V]!==Ie?(n.bindFramebuffer(V,Ie),h[V]=Ie,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ie),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ve(V,Ie){let xe=_,Z=!1;if(V){xe=d.get(Ie),xe===void 0&&(xe=[],d.set(Ie,xe));const T=V.textures;if(xe.length!==T.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let N=0,Fe=T.length;N<Fe;N++)xe[N]=n.COLOR_ATTACHMENT0+N;xe.length=T.length,Z=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Z=!0);Z&&n.drawBuffers(xe)}function C(V){return y!==V?(n.useProgram(V),y=V,!0):!1}const B={[ir]:n.FUNC_ADD,[o0]:n.FUNC_SUBTRACT,[l0]:n.FUNC_REVERSE_SUBTRACT};B[c0]=n.MIN,B[u0]=n.MAX;const U={[h0]:n.ZERO,[f0]:n.ONE,[d0]:n.SRC_COLOR,[Lp]:n.SRC_ALPHA,[x0]:n.SRC_ALPHA_SATURATE,[_0]:n.DST_COLOR,[m0]:n.DST_ALPHA,[p0]:n.ONE_MINUS_SRC_COLOR,[Ip]:n.ONE_MINUS_SRC_ALPHA,[v0]:n.ONE_MINUS_DST_COLOR,[g0]:n.ONE_MINUS_DST_ALPHA,[S0]:n.CONSTANT_COLOR,[M0]:n.ONE_MINUS_CONSTANT_COLOR,[y0]:n.CONSTANT_ALPHA,[b0]:n.ONE_MINUS_CONSTANT_ALPHA};function $(V,Ie,xe,Z,T,N,Fe,Ge,mt,lt){if(V===Wi){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(_e(n.BLEND),m=!0),V!==a0){if(V!==p||lt!==k){if((A!==ir||w!==ir)&&(n.blendEquation(n.FUNC_ADD),A=ir,w=ir),lt)switch(V){case ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case af:n.blendFunc(n.ONE,n.ONE);break;case of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:yt("WebGLState: Invalid blending: ",V);break}else switch(V){case ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case af:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case of:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lf:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",V);break}D=null,M=null,R=null,F=null,S.set(0,0,0),I=0,p=V,k=lt}return}T=T||Ie,N=N||xe,Fe=Fe||Z,(Ie!==A||T!==w)&&(n.blendEquationSeparate(B[Ie],B[T]),A=Ie,w=T),(xe!==D||Z!==M||N!==R||Fe!==F)&&(n.blendFuncSeparate(U[xe],U[Z],U[N],U[Fe]),D=xe,M=Z,R=N,F=Fe),(Ge.equals(S)===!1||mt!==I)&&(n.blendColor(Ge.r,Ge.g,Ge.b,mt),S.copy(Ge),I=mt),p=V,k=!1}function G(V,Ie){V.side===mi?be(n.CULL_FACE):_e(n.CULL_FACE);let xe=V.side===In;Ie&&(xe=!xe),H(xe),V.blending===ta&&V.transparent===!1?$(Wi):$(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Z=V.stencilWrite;o.setTest(Z),Z&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),J(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(V){q!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),q=V)}function ne(V){V!==i0?(_e(n.CULL_FACE),V!==re&&(V===rf?n.cullFace(n.BACK):V===s0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),re=V}function ae(V){V!==ce&&(ie&&n.lineWidth(V),ce=V)}function J(V,Ie,xe){V?(_e(n.POLYGON_OFFSET_FILL),(X!==Ie||ee!==xe)&&(X=Ie,ee=xe,a.getReversed()&&(Ie=-Ie),n.polygonOffset(Ie,xe))):be(n.POLYGON_OFFSET_FILL)}function j(V){V?_e(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ae(V){V===void 0&&(V=n.TEXTURE0+ue-1),ge!==V&&(n.activeTexture(V),ge=V)}function P(V,Ie,xe){xe===void 0&&(ge===null?xe=n.TEXTURE0+ue-1:xe=ge);let Z=ve[xe];Z===void 0&&(Z={type:void 0,texture:void 0},ve[xe]=Z),(Z.type!==V||Z.texture!==Ie)&&(ge!==xe&&(n.activeTexture(xe),ge=xe),n.bindTexture(V,Ie||de[V]),Z.type=V,Z.texture=Ie)}function Pe(){const V=ve[ge];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Le(){try{n.compressedTexImage2D(...arguments)}catch(V){yt("WebGLState:",V)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(V){yt("WebGLState:",V)}}function g(){try{n.texSubImage2D(...arguments)}catch(V){yt("WebGLState:",V)}}function O(){try{n.texSubImage3D(...arguments)}catch(V){yt("WebGLState:",V)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){yt("WebGLState:",V)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(V){yt("WebGLState:",V)}}function we(){try{n.texStorage2D(...arguments)}catch(V){yt("WebGLState:",V)}}function De(){try{n.texStorage3D(...arguments)}catch(V){yt("WebGLState:",V)}}function pe(){try{n.texImage2D(...arguments)}catch(V){yt("WebGLState:",V)}}function Se(){try{n.texImage3D(...arguments)}catch(V){yt("WebGLState:",V)}}function Re(V){return f[V]!==void 0?f[V]:n.getParameter(V)}function Xe(V,Ie){f[V]!==Ie&&(n.pixelStorei(V,Ie),f[V]=Ie)}function Ne(V){We.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),We.copy(V))}function ze(V){tt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),tt.copy(V))}function Je(V,Ie){let xe=c.get(Ie);xe===void 0&&(xe=new WeakMap,c.set(Ie,xe));let Z=xe.get(V);Z===void 0&&(Z=n.getUniformBlockIndex(Ie,V.name),xe.set(V,Z))}function et(V,Ie){const Z=c.get(Ie).get(V);l.get(Ie)!==Z&&(n.uniformBlockBinding(Ie,Z,V.__bindingPointIndex),l.set(Ie,Z))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ge=null,ve={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,A=null,D=null,M=null,w=null,R=null,F=null,S=new St(0,0,0),I=0,k=!1,q=null,re=null,ce=null,X=null,ee=null,We.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:be,bindFramebuffer:He,drawBuffers:Ve,useProgram:C,setBlending:$,setMaterial:G,setFlipSided:H,setCullFace:ne,setLineWidth:ae,setPolygonOffset:J,setScissorTest:j,activeTexture:Ae,bindTexture:P,unbindTexture:Pe,compressedTexImage2D:Le,compressedTexImage3D:E,texImage2D:pe,texImage3D:Se,pixelStorei:Xe,getParameter:Re,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:we,texStorage3D:De,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:Q,compressedTexSubImage3D:se,scissor:Ne,viewport:ze,reset:ot}}function QE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,g){return _?new OffscreenCanvas(E,g):Ko("canvas")}function m(E,g,O){let Q=1;const se=Le(E);if((se.width>O||se.height>O)&&(Q=O/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const we=Math.floor(Q*se.width),De=Math.floor(Q*se.height);h===void 0&&(h=y(we,De));const pe=g?y(we,De):h;return pe.width=we,pe.height=De,pe.getContext("2d").drawImage(E,0,0,we,De),at("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+we+"x"+De+")."),pe}else return"data"in E&&at("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function p(E){return E.generateMipmaps}function A(E){n.generateMipmap(E)}function D(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,g,O,Q,se,we=!1){if(E!==null){if(n[E]!==void 0)return n[E];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let De;Q&&(De=e.get("EXT_texture_norm16"),De||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=g;if(g===n.RED&&(O===n.FLOAT&&(pe=n.R32F),O===n.HALF_FLOAT&&(pe=n.R16F),O===n.UNSIGNED_BYTE&&(pe=n.R8),O===n.UNSIGNED_SHORT&&De&&(pe=De.R16_EXT),O===n.SHORT&&De&&(pe=De.R16_SNORM_EXT)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(pe=n.R8UI),O===n.UNSIGNED_SHORT&&(pe=n.R16UI),O===n.UNSIGNED_INT&&(pe=n.R32UI),O===n.BYTE&&(pe=n.R8I),O===n.SHORT&&(pe=n.R16I),O===n.INT&&(pe=n.R32I)),g===n.RG&&(O===n.FLOAT&&(pe=n.RG32F),O===n.HALF_FLOAT&&(pe=n.RG16F),O===n.UNSIGNED_BYTE&&(pe=n.RG8),O===n.UNSIGNED_SHORT&&De&&(pe=De.RG16_EXT),O===n.SHORT&&De&&(pe=De.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(pe=n.RG8UI),O===n.UNSIGNED_SHORT&&(pe=n.RG16UI),O===n.UNSIGNED_INT&&(pe=n.RG32UI),O===n.BYTE&&(pe=n.RG8I),O===n.SHORT&&(pe=n.RG16I),O===n.INT&&(pe=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),O===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),O===n.UNSIGNED_INT&&(pe=n.RGB32UI),O===n.BYTE&&(pe=n.RGB8I),O===n.SHORT&&(pe=n.RGB16I),O===n.INT&&(pe=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),O===n.UNSIGNED_INT&&(pe=n.RGBA32UI),O===n.BYTE&&(pe=n.RGBA8I),O===n.SHORT&&(pe=n.RGBA16I),O===n.INT&&(pe=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_SHORT&&De&&(pe=De.RGB16_EXT),O===n.SHORT&&De&&(pe=De.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),g===n.RGBA){const Se=we?Yo:xt.getTransfer(se);O===n.FLOAT&&(pe=n.RGBA32F),O===n.HALF_FLOAT&&(pe=n.RGBA16F),O===n.UNSIGNED_BYTE&&(pe=Se===Dt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&De&&(pe=De.RGBA16_EXT),O===n.SHORT&&De&&(pe=De.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(E,g){let O;return E?g===null||g===yi||g===ma?O=n.DEPTH24_STENCIL8:g===gi?O=n.DEPTH32F_STENCIL8:g===pa&&(O=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yi||g===ma?O=n.DEPTH_COMPONENT24:g===gi?O=n.DEPTH_COMPONENT32F:g===pa&&(O=n.DEPTH_COMPONENT16),O}function R(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==_n?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function F(E){const g=E.target;g.removeEventListener("dispose",F),I(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function S(E){const g=E.target;g.removeEventListener("dispose",S),q(g)}function I(E){const g=i.get(E);if(g.__webglInit===void 0)return;const O=E.source,Q=d.get(O);if(Q){const se=Q[g.__cacheKey];se.usedTimes--,se.usedTimes===0&&k(E),Object.keys(Q).length===0&&d.delete(O)}i.remove(E)}function k(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const O=E.source,Q=d.get(O);delete Q[g.__cacheKey],a.memory.textures--}function q(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(g.__webglFramebuffer[Q]))for(let se=0;se<g.__webglFramebuffer[Q].length;se++)n.deleteFramebuffer(g.__webglFramebuffer[Q][se]);else n.deleteFramebuffer(g.__webglFramebuffer[Q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Q])}else{if(Array.isArray(g.__webglFramebuffer))for(let Q=0;Q<g.__webglFramebuffer.length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[Q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Q=0;Q<g.__webglColorRenderbuffer.length;Q++)g.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=E.textures;for(let Q=0,se=O.length;Q<se;Q++){const we=i.get(O[Q]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(O[Q])}i.remove(E)}let re=0;function ce(){re=0}function X(){return re}function ee(E){re=E}function ue(){const E=re;return E>=s.maxTextures&&at("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),re+=1,E}function ie(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function me(E,g){const O=i.get(E);if(E.isVideoTexture&&P(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const Q=E.image;if(Q===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{be(O,E,g);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function he(E,g){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){be(O,E,g);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function ge(E,g){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){be(O,E,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function ve(E,g){const O=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){He(O,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const Ue={[Gc]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Wc]:n.MIRRORED_REPEAT},ye={[un]:n.NEAREST,[A0]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Hl]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},We={[P0]:n.NEVER,[N0]:n.ALWAYS,[D0]:n.LESS,[eh]:n.LEQUAL,[L0]:n.EQUAL,[th]:n.GEQUAL,[I0]:n.GREATER,[U0]:n.NOTEQUAL};function tt(E,g){if(g.type===gi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===_n||g.magFilter===Hl||g.magFilter===Ha||g.magFilter===Is||g.minFilter===_n||g.minFilter===Hl||g.minFilter===Ha||g.minFilter===Is)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ue[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ue[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ue[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ye[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,We[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===un||g.minFilter!==Ha&&g.minFilter!==Is||g.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function nt(E,g){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",F));const Q=g.source;let se=d.get(Q);se===void 0&&(se={},d.set(Q,se));const we=ie(g);if(we!==E.__cacheKey){se[we]===void 0&&(se[we]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),se[we].usedTimes++;const De=se[E.__cacheKey];De!==void 0&&(se[E.__cacheKey].usedTimes--,De.usedTimes===0&&k(g)),E.__cacheKey=we,E.__webglTexture=se[we].texture}return O}function de(E,g,O){return Math.floor(Math.floor(E/O)/g)}function _e(E,g,O,Q){const we=E.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,Q,g.data);else{we.sort((Xe,Ne)=>Xe.start-Ne.start);let De=0;for(let Xe=1;Xe<we.length;Xe++){const Ne=we[De],ze=we[Xe],Je=Ne.start+Ne.count,et=de(ze.start,g.width,4),ot=de(Ne.start,g.width,4);ze.start<=Je+1&&et===ot&&de(ze.start+ze.count-1,g.width,4)===et?Ne.count=Math.max(Ne.count,ze.start+ze.count-Ne.start):(++De,we[De]=ze)}we.length=De+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),Se=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Xe=0,Ne=we.length;Xe<Ne;Xe++){const ze=we[Xe],Je=Math.floor(ze.start/4),et=Math.ceil(ze.count/4),ot=Je%g.width,V=Math.floor(Je/g.width),Ie=et,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,ot,V,Ie,xe,O,Q,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function be(E,g,O){let Q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=n.TEXTURE_3D);const se=nt(E,g),we=g.source;t.bindTexture(Q,E.__webglTexture,n.TEXTURE0+O);const De=i.get(we);if(we.version!==De.__version||se===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const xe=xt.getPrimaries(xt.workingColorSpace),Z=g.colorSpace===os?null:xt.getPrimaries(g.colorSpace),T=g.colorSpace===os||xe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,T)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Se=m(g.image,!1,s.maxTextureSize);Se=Pe(g,Se);const Re=r.convert(g.format,g.colorSpace),Xe=r.convert(g.type);let Ne=M(g.internalFormat,Re,Xe,g.normalized,g.colorSpace,g.isVideoTexture);tt(Q,g);let ze;const Je=g.mipmaps,et=g.isVideoTexture!==!0,ot=De.__version===void 0||se===!0,V=we.dataReady,Ie=R(g,Se);if(g.isDepthTexture)Ne=w(g.format===Us,g.type),ot&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ne,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Ne,Se.width,Se.height,0,Re,Xe,null));else if(g.isDataTexture)if(Je.length>0){et&&ot&&t.texStorage2D(n.TEXTURE_2D,Ie,Ne,Je[0].width,Je[0].height);for(let xe=0,Z=Je.length;xe<Z;xe++)ze=Je[xe],et?V&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ze.width,ze.height,Re,Xe,ze.data):t.texImage2D(n.TEXTURE_2D,xe,Ne,ze.width,ze.height,0,Re,Xe,ze.data);g.generateMipmaps=!1}else et?(ot&&t.texStorage2D(n.TEXTURE_2D,Ie,Ne,Se.width,Se.height),V&&_e(g,Se,Re,Xe)):t.texImage2D(n.TEXTURE_2D,0,Ne,Se.width,Se.height,0,Re,Xe,Se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){et&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Ne,Je[0].width,Je[0].height,Se.depth);for(let xe=0,Z=Je.length;xe<Z;xe++)if(ze=Je[xe],g.format!==jn)if(Re!==null)if(et){if(V)if(g.layerUpdates.size>0){const T=Xf(ze.width,ze.height,g.format,g.type);for(const N of g.layerUpdates){const Fe=ze.data.subarray(N*T/ze.data.BYTES_PER_ELEMENT,(N+1)*T/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,N,ze.width,ze.height,1,Re,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,Se.depth,Re,ze.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ne,ze.width,ze.height,Se.depth,0,ze.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,Se.depth,Re,Xe,ze.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ne,ze.width,ze.height,Se.depth,0,Re,Xe,ze.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{et&&ot&&t.texStorage2D(n.TEXTURE_2D,Ie,Ne,Je[0].width,Je[0].height);for(let xe=0,Z=Je.length;xe<Z;xe++)ze=Je[xe],g.format!==jn?Re!==null?et?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ne,ze.width,ze.height,0,ze.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?V&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ze.width,ze.height,Re,Xe,ze.data):t.texImage2D(n.TEXTURE_2D,xe,Ne,ze.width,ze.height,0,Re,Xe,ze.data)}else if(g.isDataArrayTexture)if(et){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Ne,Se.width,Se.height,Se.depth),V)if(g.layerUpdates.size>0){const xe=Xf(Se.width,Se.height,g.format,g.type);for(const Z of g.layerUpdates){const T=Se.data.subarray(Z*xe/Se.data.BYTES_PER_ELEMENT,(Z+1)*xe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,Se.width,Se.height,1,Re,Xe,T)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,Xe,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,Se.width,Se.height,Se.depth,0,Re,Xe,Se.data);else if(g.isData3DTexture)et?(ot&&t.texStorage3D(n.TEXTURE_3D,Ie,Ne,Se.width,Se.height,Se.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,Xe,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,Se.width,Se.height,Se.depth,0,Re,Xe,Se.data);else if(g.isFramebufferTexture){if(ot)if(et)t.texStorage2D(n.TEXTURE_2D,Ie,Ne,Se.width,Se.height);else{let xe=Se.width,Z=Se.height;for(let T=0;T<Ie;T++)t.texImage2D(n.TEXTURE_2D,T,Ne,xe,Z,0,Re,Xe,null),xe>>=1,Z>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),Se.parentNode!==xe){xe.appendChild(Se),f.add(g),xe.onpaint=Z=>{const T=Z.changedElements;for(const N of f)T.includes(N.image)&&(N.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Se);else{const T=n.RGBA,N=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,T,N,Fe,Se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&ot){const xe=Le(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Ne,xe.width,xe.height)}for(let xe=0,Z=Je.length;xe<Z;xe++)ze=Je[xe],et?V&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Re,Xe,ze):t.texImage2D(n.TEXTURE_2D,xe,Ne,Re,Xe,ze);g.generateMipmaps=!1}else if(et){if(ot){const xe=Le(Se);t.texStorage2D(n.TEXTURE_2D,Ie,Ne,xe.width,xe.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Xe,Se)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,Xe,Se);p(g)&&A(Q),De.__version=we.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function He(E,g,O){if(g.image.length!==6)return;const Q=nt(E,g),se=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const we=i.get(se);if(se.version!==we.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const De=xt.getPrimaries(xt.workingColorSpace),pe=g.colorSpace===os?null:xt.getPrimaries(g.colorSpace),Se=g.colorSpace===os||De===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,Xe=g.image[0]&&g.image[0].isDataTexture,Ne=[];for(let N=0;N<6;N++)!Re&&!Xe?Ne[N]=m(g.image[N],!0,s.maxCubemapSize):Ne[N]=Xe?g.image[N].image:g.image[N],Ne[N]=Pe(g,Ne[N]);const ze=Ne[0],Je=r.convert(g.format,g.colorSpace),et=r.convert(g.type),ot=M(g.internalFormat,Je,et,g.normalized,g.colorSpace),V=g.isVideoTexture!==!0,Ie=we.__version===void 0||Q===!0,xe=se.dataReady;let Z=R(g,ze);tt(n.TEXTURE_CUBE_MAP,g);let T;if(Re){V&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,ot,ze.width,ze.height);for(let N=0;N<6;N++){T=Ne[N].mipmaps;for(let Fe=0;Fe<T.length;Fe++){const Ge=T[Fe];g.format!==jn?Je!==null?V?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe,0,0,Ge.width,Ge.height,Je,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe,ot,Ge.width,Ge.height,0,Ge.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe,0,0,Ge.width,Ge.height,Je,et,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe,ot,Ge.width,Ge.height,0,Je,et,Ge.data)}}}else{if(T=g.mipmaps,V&&Ie){T.length>0&&Z++;const N=Le(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,ot,N.width,N.height)}for(let N=0;N<6;N++)if(Xe){V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ne[N].width,Ne[N].height,Je,et,Ne[N].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,ot,Ne[N].width,Ne[N].height,0,Je,et,Ne[N].data);for(let Fe=0;Fe<T.length;Fe++){const mt=T[Fe].image[N].image;V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe+1,0,0,mt.width,mt.height,Je,et,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe+1,ot,mt.width,mt.height,0,Je,et,mt.data)}}else{V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Je,et,Ne[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,ot,Je,et,Ne[N]);for(let Fe=0;Fe<T.length;Fe++){const Ge=T[Fe];V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe+1,0,0,Je,et,Ge.image[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe+1,ot,Je,et,Ge.image[N])}}}p(g)&&A(n.TEXTURE_CUBE_MAP),we.__version=se.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ve(E,g,O,Q,se,we){const De=r.convert(O.format,O.colorSpace),pe=r.convert(O.type),Se=M(O.internalFormat,De,pe,O.normalized,O.colorSpace),Re=i.get(g),Xe=i.get(O);if(Xe.__renderTarget=g,!Re.__hasExternalTextures){const Ne=Math.max(1,g.width>>we),ze=Math.max(1,g.height>>we);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,we,Se,Ne,ze,g.depth,0,De,pe,null):t.texImage2D(se,we,Se,Ne,ze,0,De,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ae(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,se,Xe.__webglTexture,0,j(g)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,se,Xe.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(E,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const Q=g.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,we=w(g.stencilBuffer,se),De=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j(g),we,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,j(g),we,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,we,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,E)}else{const Q=g.textures;for(let se=0;se<Q.length;se++){const we=Q[se],De=r.convert(we.format,we.colorSpace),pe=r.convert(we.type),Se=M(we.internalFormat,De,pe,we.normalized,we.colorSpace);Ae(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j(g),Se,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,j(g),Se,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Se,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function B(E,g,O){const Q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const se=i.get(g.depthTexture);if(se.__renderTarget=g,(!se.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q){if(se.__webglInit===void 0&&(se.__webglInit=!0,g.depthTexture.addEventListener("dispose",F)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),tt(n.TEXTURE_CUBE_MAP,g.depthTexture);const Re=r.convert(g.depthTexture.format),Xe=r.convert(g.depthTexture.type);let Ne;g.depthTexture.format===Zi?Ne=n.DEPTH_COMPONENT24:g.depthTexture.format===Us&&(Ne=n.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ne,g.width,g.height,0,Re,Xe,null)}}else me(g.depthTexture,0);const we=se.__webglTexture,De=j(g),pe=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Se=g.depthTexture.format===Us?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Zi)Ae(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,pe,we,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,Se,pe,we,0);else if(g.depthTexture.format===Us)Ae(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,pe,we,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,Se,pe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(E){const g=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const Q=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Q){const se=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),g.__depthDisposeCallback=se}g.__boundDepthTexture=Q}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let Q=0;Q<6;Q++)B(g.__webglFramebuffer[Q],E,Q);else{const Q=E.texture.mipmaps;Q&&Q.length>0?B(g.__webglFramebuffer[0],E,0):B(g.__webglFramebuffer,E,0)}else if(O){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]===void 0)g.__webglDepthbuffer[Q]=n.createRenderbuffer(),C(g.__webglDepthbuffer[Q],E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=g.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,we)}}else{const Q=E.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),C(g.__webglDepthbuffer,E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(E,g,O){const Q=i.get(E);g!==void 0&&Ve(Q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&U(E)}function G(E){const g=E.texture,O=i.get(E),Q=i.get(g);E.addEventListener("dispose",S);const se=E.textures,we=E.isWebGLCubeRenderTarget===!0,De=se.length>1;if(De||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=g.version,a.memory.textures++),we){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Se=0;Se<g.mipmaps.length;Se++)O.__webglFramebuffer[pe][Se]=n.createFramebuffer()}else O.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)O.__webglFramebuffer[pe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(De)for(let pe=0,Se=se.length;pe<Se;pe++){const Re=i.get(se[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ae(E)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Se=se[pe];O.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const Re=r.convert(Se.format,Se.colorSpace),Xe=r.convert(Se.type),Ne=M(Se.internalFormat,Re,Xe,Se.normalized,Se.colorSpace,E.isXRRenderTarget===!0),ze=j(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ne,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),C(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),tt(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Ve(O.__webglFramebuffer[pe][Se],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else Ve(O.__webglFramebuffer[pe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(g)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Se=se.length;pe<Se;pe++){const Re=se[pe],Xe=i.get(Re);let Ne=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ne=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Xe.__webglTexture),tt(Ne,Re),Ve(O.__webglFramebuffer,E,Re,n.COLOR_ATTACHMENT0+pe,Ne,0),p(Re)&&A(Ne)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Q.__webglTexture),tt(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Ve(O.__webglFramebuffer[Se],E,g,n.COLOR_ATTACHMENT0,pe,Se);else Ve(O.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,pe,0);p(g)&&A(pe),t.unbindTexture()}E.depthBuffer&&U(E)}function H(E){const g=E.textures;for(let O=0,Q=g.length;O<Q;O++){const se=g[O];if(p(se)){const we=D(E),De=i.get(se).__webglTexture;t.bindTexture(we,De),A(we),t.unbindTexture()}}}const ne=[],ae=[];function J(E){if(E.samples>0){if(Ae(E)===!1){const g=E.textures,O=E.width,Q=E.height;let se=n.COLOR_BUFFER_BIT;const we=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(E),pe=g.length>1;if(pe)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Se=E.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Xe=i.get(g[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,se,n.NEAREST),l===!0&&(ne.length=0,ae.length=0,ne.push(n.COLOR_ATTACHMENT0+Re),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ne.push(we),ae.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ae)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Xe=i.get(g[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function j(E){return Math.min(s.maxSamples,E.samples)}function Ae(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Pe(E,g){const O=E.colorSpace,Q=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==qo&&O!==os&&(xt.getTransfer(O)===Dt?(Q!==jn||se!==Fn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",O)),g}function Le(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=ue,this.resetTextureUnits=ce,this.getTextureUnits=X,this.setTextureUnits=ee,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=ge,this.setTextureCube=ve,this.rebindTextures=$,this.setupRenderTarget=G,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jE(n,e){function t(i,s=os){let r;const a=xt.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===Ku)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$p)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gp)return n.BYTE;if(i===Wp)return n.SHORT;if(i===pa)return n.UNSIGNED_SHORT;if(i===Yu)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===qp)return n.ALPHA;if(i===Yp)return n.RGB;if(i===jn)return n.RGBA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===Kp)return n.RED;if(i===Ju)return n.RED_INTEGER;if(i===zs)return n.RG;if(i===Qu)return n.RG_INTEGER;if(i===ju)return n.RGBA_INTEGER;if(i===To||i===Ao||i===wo||i===Co)if(a===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xc||i===$c||i===qc||i===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===Zc||i===Jc||i===Qc||i===jc||i===Xo||i===eu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kc||i===Zc)return a===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qc)return r.COMPRESSED_R11_EAC;if(i===jc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Xo)return r.COMPRESSED_RG11_EAC;if(i===eu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tu||i===nu||i===iu||i===su||i===ru||i===au||i===ou||i===lu||i===cu||i===uu||i===hu||i===fu||i===du||i===pu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===iu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===su)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ru)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===au)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ou)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===du)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pu)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mu||i===gu||i===_u)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mu)return a===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vu||i===xu||i===$o||i===Su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tT=`
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

}`;class nT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new nm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:eT,fragmentShader:tT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bn(new pl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iT extends ds{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const y=typeof XRWebGLBinding<"u",m=new nT,p={},A=t.getContextAttributes();let D=null,M=null;const w=[],R=[],F=new Be;let S=null,I=null;const k=new Qn;k.viewport=new Gt;const q=new Qn;q.viewport=new Gt;const re=[k,q],ce=new cS;let X=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let _e=w[de];return _e===void 0&&(_e=new Zl,w[de]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(de){let _e=w[de];return _e===void 0&&(_e=new Zl,w[de]=_e),_e.getGripSpace()},this.getHand=function(de){let _e=w[de];return _e===void 0&&(_e=new Zl,w[de]=_e),_e.getHandSpace()};function ue(de){const _e=R.indexOf(de.inputSource);if(_e===-1)return;const be=w[_e];be!==void 0&&(be.update(de.inputSource,de.frame,c||a),be.dispatchEvent({type:de.type,data:de.inputSource}))}function ie(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",me);for(let de=0;de<w.length;de++){const _e=R[de];_e!==null&&(R[de]=null,w[de].disconnect(_e))}X=null,ee=null,m.reset();for(const de in p)delete p[de];if(e.setRenderTarget(D),d=null,h=null,f=null,s=null,M=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(F.width,F.height,!1),I!==null){const de=I.camera;de.fov=I.fov,de.zoom=I.zoom,de.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){r=de,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){o=de,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(de){c=de},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(de){if(s=de,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",me),A.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(F),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,Ve=null;A.depth&&(Ve=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=A.stencil?Us:Zi,He=A.stencil?ma:yi);const C={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(C),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ni(h.textureWidth,h.textureHeight,{format:jn,type:Fn,depthTexture:new _a(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ni(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(de){for(let _e=0;_e<de.removed.length;_e++){const be=de.removed[_e],He=R.indexOf(be);He>=0&&(R[He]=null,w[He].disconnect(be))}for(let _e=0;_e<de.added.length;_e++){const be=de.added[_e];let He=R.indexOf(be);if(He===-1){for(let C=0;C<w.length;C++)if(C>=R.length){R.push(be),He=C;break}else if(R[C]===null){R[C]=be,He=C;break}if(He===-1)break}const Ve=w[He];Ve&&Ve.connect(be)}}const he=new K,ge=new K;function ve(de,_e,be){he.setFromMatrixPosition(_e.matrixWorld),ge.setFromMatrixPosition(be.matrixWorld);const He=he.distanceTo(ge),Ve=_e.projectionMatrix.elements,C=be.projectionMatrix.elements,B=Ve[14]/(Ve[10]-1),U=Ve[14]/(Ve[10]+1),$=(Ve[9]+1)/Ve[5],G=(Ve[9]-1)/Ve[5],H=(Ve[8]-1)/Ve[0],ne=(C[8]+1)/C[0],ae=B*H,J=B*ne,j=He/(-H+ne),Ae=j*-H;if(_e.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(Ae),de.translateZ(j),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),Ve[10]===-1)de.projectionMatrix.copy(_e.projectionMatrix),de.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const P=B+j,Pe=U+j,Le=ae-Ae,E=J+(He-Ae),g=$*U/Pe*P,O=G*U/Pe*P;de.projectionMatrix.makePerspective(Le,E,g,O,P,Pe),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function Ue(de,_e){_e===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(_e.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(s===null)return;let _e=de.near,be=de.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(be=m.depthFar)),ce.near=q.near=k.near=_e,ce.far=q.far=k.far=be,(X!==ce.near||ee!==ce.far)&&(s.updateRenderState({depthNear:ce.near,depthFar:ce.far}),X=ce.near,ee=ce.far),ce.layers.mask=de.layers.mask|6,k.layers.mask=ce.layers.mask&-5,q.layers.mask=ce.layers.mask&-3;const He=de.parent,Ve=ce.cameras;Ue(ce,He);for(let C=0;C<Ve.length;C++)Ue(Ve[C],He);Ve.length===2?ve(ce,k,q):ce.projectionMatrix.copy(k.projectionMatrix),I===null&&de.isPerspectiveCamera&&(I={camera:de,fov:de.fov,zoom:de.zoom}),ye(de,ce,He)};function ye(de,_e,be){be===null?de.matrix.copy(_e.matrixWorld):(de.matrix.copy(be.matrixWorld),de.matrix.invert(),de.matrix.multiply(_e.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(_e.projectionMatrix),de.projectionMatrixInverse.copy(_e.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=yu*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return ce},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(de){l=de,h!==null&&(h.fixedFoveation=de),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=de)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ce)},this.getCameraTexture=function(de){return p[de]};let We=null;function tt(de,_e){if(u=_e.getViewerPose(c||a),_=_e,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let He=!1;be.length!==ce.cameras.length&&(ce.cameras.length=0,He=!0);for(let U=0;U<be.length;U++){const $=be[U];let G=null;if(d!==null)G=d.getViewport($);else{const ne=f.getViewSubImage(h,$);G=ne.viewport,U===0&&(e.setRenderTargetTextures(M,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(M))}let H=re[U];H===void 0&&(H=new Qn,H.layers.enable(U),H.viewport=new Gt,re[U]=H),H.matrix.fromArray($.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray($.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(G.x,G.y,G.width,G.height),U===0&&(ce.matrix.copy(H.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale)),He===!0&&ce.cameras.push(H)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const U=f.getDepthInformation(be[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Ve&&Ve.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<be.length;U++){const $=be[U].camera;if($){let G=p[$];G||(G=new nm,p[$]=G);const H=f.getCameraImage($);G.sourceTexture=H}}}}for(let be=0;be<w.length;be++){const He=R[be],Ve=w[be];He!==null&&Ve!==void 0&&Ve.update(He,_e,c||a)}We&&We(de,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const nt=new mm;nt.setAnimationLoop(tt),this.setAnimationLoop=function(de){We=de},this.dispose=function(){}}}const sT=new zt,ym=new ht;ym.set(-1,0,0,0,1,0,0,0,1);function rT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,D,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,D):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),D=A.envMap,M=A.envMapRotation;D&&(m.envMap.value=D,m.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(M)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ym),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,D){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=D*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aT(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const R=w.program;i.uniformBlockBinding(M,R)}function c(M,w){let R=s[M.id];R===void 0&&(m(M),R=u(M),s[M.id]=R,M.addEventListener("dispose",A));const F=w.program;i.updateUBOMapping(M,F);const S=e.render.frame;r[M.id]!==S&&(h(M),r[M.id]=S)}function u(M){const w=f();M.__bindingPointIndex=w;const R=n.createBuffer(),F=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,F,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,R),R}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=s[M.id],R=M.uniforms,F=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,I=R.length;S<I;S++){const k=R[S];if(Array.isArray(k))for(let q=0,re=k.length;q<re;q++)d(k[q],S,q,F);else d(k,S,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,R,F){if(y(M,w,R,F)===!0){const S=M.__offset,I=M.value;if(Array.isArray(I)){let k=0;for(let q=0;q<I.length;q++){const re=I[q],ce=p(re);_(re,M.__data,k),typeof re!="number"&&typeof re!="boolean"&&!re.isMatrix3&&!ArrayBuffer.isView(re)&&(k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(I,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function _(M,w,R){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,R)}function y(M,w,R,F){const S=M.value,I=w+"_"+R;if(F[I]===void 0)return typeof S=="number"||typeof S=="boolean"?F[I]=S:ArrayBuffer.isView(S)?F[I]=S.slice():F[I]=S.clone(),!0;{const k=F[I];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return F[I]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(k.equals(S)===!1)return k.copy(S),!0}}return!1}function m(M){const w=M.uniforms;let R=0;const F=16;for(let I=0,k=w.length;I<k;I++){const q=Array.isArray(w[I])?w[I]:[w[I]];for(let re=0,ce=q.length;re<ce;re++){const X=q[re],ee=Array.isArray(X.value)?X.value:[X.value];for(let ue=0,ie=ee.length;ue<ie;ue++){const me=ee[ue],he=p(me),ge=R%F,ve=ge%he.boundary,Ue=ge+ve;R+=ve,Ue!==0&&F-Ue<he.storage&&(R+=F-Ue),X.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=he.storage}}}const S=R%F;return S>0&&(R+=F-S),M.__size=R,M.__cache={},this}function p(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):at("WebGLRenderer: Unsupported uniform value type.",M),w}function A(M){const w=M.target;w.removeEventListener("dispose",A);const R=a.indexOf(w.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function D(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:D}}const oT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function lT(){return li===null&&(li=new ux(oT,16,16,zs,bi),li.name="DFG_LUT",li.minFilter=_n,li.magFilter=_n,li.wrapS=Vi,li.wrapT=Vi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class cT{constructor(e={}){const{canvas:t=B0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Fn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=d,m=new Set([ju,Qu,Ju]),p=new Set([Fn,yi,pa,ma,Ku,Zu]),A=new Uint32Array(4),D=new Int32Array(4),M=new K;let w=null,R=null;const F=[],S=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let q=!1,re=null,ce=null,X=null,ee=null;this._outputColorSpace=Hn;let ue=0,ie=0,me=null,he=-1,ge=null;const ve=new Gt,Ue=new Gt;let ye=null;const We=new St(0);let tt=0,nt=t.width,de=t.height,_e=1,be=null,He=null;const Ve=new Gt(0,0,nt,de),C=new Gt(0,0,nt,de);let B=!1;const U=new sh;let $=!1,G=!1;const H=new zt,ne=new K,ae=new Gt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function Ae(){return me===null?_e:1}let P=i;function Pe(b,Y){return t.getContext(b,Y)}let Le,E,g,O,Q,se,we,De,pe,Se,Re,Xe,Ne,ze,Je,et,ot,V,Ie,xe,Z,T,N;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qu}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",xn,!1),P===null){const Y="webgl2";if(P=Pe(Y,b),P===null)throw Pe(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(b){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),yt("WebGLRenderer: "+b.message),b}function Fe(){Le=new lb(P),Le.init(),Z=new jE(P,Le),E=new Qy(P,Le,e,Z),g=new JE(P,Le),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),ce=P.createFramebuffer(),X=P.createFramebuffer(),ee=P.createFramebuffer(),O=new hb(P),Q=new OE,se=new QE(P,Le,g,Q,E,Z,O),we=new ob(k),De=new dS(P),T=new Zy(P,De),pe=new cb(P,De,O,T),Se=new db(P,pe,De,T,O),V=new fb(P,E,se),Je=new jy(Q),Re=new FE(k,we,Le,E,T,Je),Xe=new rT(k,Q),Ne=new zE,ze=new XE(Le),ot=new Ky(k,we,g,Se,_,l),et=new ZE(k,Se,E),N=new aT(P,O,E,g),Ie=new Jy(P,Le,O),xe=new ub(P,Le,O),O.programs=Re.programs,k.capabilities=E,k.extensions=Le,k.properties=Q,k.renderLists=Ne,k.shadowMap=et,k.state=g,k.info=O}y!==Fn&&(I=new mb(y,t.width,t.height,o,s,r));const Ge=new iT(k,P);this.xr=Ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(b){b!==void 0&&(_e=b,this.setSize(nt,de,!1))},this.getSize=function(b){return b.set(nt,de)},this.setSize=function(b,Y,fe=!0){if(Ge.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=b,de=Y,t.width=Math.floor(b*_e),t.height=Math.floor(Y*_e),fe===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(nt*_e,de*_e).floor()},this.setDrawingBufferSize=function(b,Y,fe){nt=b,de=Y,_e=fe,t.width=Math.floor(b*fe),t.height=Math.floor(Y*fe),this.setViewport(0,0,b,Y)},this.setEffects=function(b){if(y===Fn){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Y=0;Y<b.length;Y++)if(b[Y].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ve)},this.getViewport=function(b){return b.copy(Ve)},this.setViewport=function(b,Y,fe,le){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,Y,fe,le),g.viewport(ve.copy(Ve).multiplyScalar(_e).round())},this.getScissor=function(b){return b.copy(C)},this.setScissor=function(b,Y,fe,le){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,Y,fe,le),g.scissor(Ue.copy(C).multiplyScalar(_e).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(b){g.setScissorTest(B=b)},this.setOpaqueSort=function(b){be=b},this.setTransparentSort=function(b){He=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,fe=!0){let le=0;if(b){let oe=!1;if(me!==null){const $e=me.texture.format;oe=m.has($e)}if(oe){const $e=me.texture.type,Ke=p.has($e),ke=ot.getClearColor(),Qe=ot.getClearAlpha(),Ye=ke.r,dt=ke.g,gt=ke.b;Ke?(A[0]=Ye,A[1]=dt,A[2]=gt,A[3]=Qe,P.clearBufferuiv(P.COLOR,0,A)):(D[0]=Ye,D[1]=dt,D[2]=gt,D[3]=Qe,P.clearBufferiv(P.COLOR,0,D))}else le|=P.COLOR_BUFFER_BIT}Y&&(le|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(le|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&P.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),re=b},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),ot.dispose(),Ne.dispose(),ze.dispose(),Q.dispose(),we.dispose(),Se.dispose(),T.dispose(),N.dispose(),Re.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Aa),Ge.removeEventListener("sessionend",ps),Ai.stop()};function mt(b){b.preventDefault(),hf("WebGLRenderer: Context Lost."),q=!0}function lt(){hf("WebGLRenderer: Context Restored."),q=!1;const b=O.autoReset,Y=et.enabled,fe=et.autoUpdate,le=et.needsUpdate,oe=et.type;Fe(),O.autoReset=b,et.enabled=Y,et.autoUpdate=fe,et.needsUpdate=le,et.type=oe}function xn(b){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zn(b){const Y=b.target;Y.removeEventListener("dispose",zn),vl(Y)}function vl(b){xl(b),Q.remove(b)}function xl(b){const Y=Q.get(b).programs;Y!==void 0&&(Y.forEach(function(fe){Re.releaseProgram(fe)}),b.isShaderMaterial&&Re.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,fe,le,oe,$e){Y===null&&(Y=J);const Ke=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,ke=Ml(b,Y,fe,le,oe);g.setMaterial(le,Ke);let Qe=fe.index,Ye=1;if(le.wireframe===!0){if(Qe=pe.getWireframeAttribute(fe),Qe===void 0)return;Ye=2}const dt=fe.drawRange,gt=fe.attributes.position;let je=dt.start*Ye,Tt=(dt.start+dt.count)*Ye;$e!==null&&(je=Math.max(je,$e.start*Ye),Tt=Math.min(Tt,($e.start+$e.count)*Ye)),Qe!==null?(je=Math.max(je,0),Tt=Math.min(Tt,Qe.count)):gt!=null&&(je=Math.max(je,0),Tt=Math.min(Tt,gt.count));const kt=Tt-je;if(kt<0||kt===1/0)return;T.setup(oe,le,ke,fe,Qe);let Nt,Pt=Ie;if(Qe!==null&&(Nt=De.get(Qe),Pt=xe,Pt.setIndex(Nt)),oe.isMesh)le.wireframe===!0?(g.setLineWidth(le.wireframeLinewidth*Ae()),Pt.setMode(P.LINES)):Pt.setMode(P.TRIANGLES);else if(oe.isLine){let sn=le.linewidth;sn===void 0&&(sn=1),g.setLineWidth(sn*Ae()),oe.isLineSegments?Pt.setMode(P.LINES):oe.isLineLoop?Pt.setMode(P.LINE_LOOP):Pt.setMode(P.LINE_STRIP)}else oe.isPoints?Pt.setMode(P.POINTS):oe.isSprite&&Pt.setMode(P.TRIANGLES);if(oe.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))Pt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const sn=oe._multiDrawStarts,Ze=oe._multiDrawCounts,on=oe._multiDrawCount,vt=Qe?De.get(Qe).bytesPerElement:1,wn=Q.get(le).currentProgram.getUniforms();for(let Vn=0;Vn<on;Vn++)wn.setValue(P,"_gl_DrawID",Vn),Pt.render(sn[Vn]/vt,Ze[Vn])}else if(oe.isInstancedMesh)Pt.renderInstances(je,kt,oe.count);else if(fe.isInstancedBufferGeometry){const sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ze=Math.min(fe.instanceCount,sn);Pt.renderInstances(je,kt,Ze)}else Pt.render(je,kt)};function Er(b,Y,fe,le){re!==null&&b.isNodeMaterial&&re.setObject(le,b),$===!0&&Je.setState(b,fe,!1),b.transparent===!0&&b.side===mi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,nn(b,Y,le),b.side=Os,b.needsUpdate=!0,nn(b,Y,le),b.side=mi):nn(b,Y,le)}this.compile=function(b,Y,fe=null){fe===null&&(fe=b),re!==null&&re.renderStart(b,Y,fe),R=ze.get(fe),R.init(Y),S.push(R),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(R.pushLight(oe),oe.castShadow&&R.pushShadow(oe))}),b!==fe&&b.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(R.pushLight(oe),oe.castShadow&&R.pushShadow(oe))}),R.setupLights(),re!==null&&re.updateLights(R.state.lightsArray),G=this.localClippingEnabled,$=Je.init(this.clippingPlanes,G),$===!0&&Je.setGlobalState(this.clippingPlanes,Y),re!==null&&et.render(R.state.shadowsArray,fe,Y);const le=new Set;return b.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const $e=oe.material;if($e)if(Array.isArray($e))for(let Ke=0;Ke<$e.length;Ke++){const ke=$e[Ke];Er(ke,fe,Y,oe),le.add(ke)}else Er($e,fe,Y,oe),le.add($e)}),R=S.pop(),re!==null&&re.renderEnd(),le},this.compileAsync=function(b,Y,fe=null){const le=this.compile(b,Y,fe);return new Promise(oe=>{function $e(){if(le.forEach(function(Ke){const Qe=Q.get(Ke).currentProgram;(Qe===void 0||Qe.isReady())&&le.delete(Ke)}),le.size===0){oe(b);return}setTimeout($e,10)}Le.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let Tr=null;function Sl(b){Tr&&Tr(b)}function Aa(){Ai.stop()}function ps(){Ai.start()}const Ai=new mm;Ai.setAnimationLoop(Sl),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(b){Tr=b,Ge.setAnimationLoop(b),b===null?Ai.stop():Ai.start()},Ge.addEventListener("sessionstart",Aa),Ge.addEventListener("sessionend",ps),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;re!==null&&re.renderStart(b,Y);const fe=Ge.enabled===!0&&Ge.isPresenting===!0,le=I!==null&&(me===null||fe)&&I.begin(k,me);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(Y),Y=Ge.getCamera()),b.isScene===!0&&b.onBeforeRender(k,b,Y,me),R=ze.get(b,S.length),R.init(Y),R.state.textureUnits=se.getTextureUnits(),S.push(R),H.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U.setFromProjectionMatrix(H,_i,Y.reversedDepth),G=this.localClippingEnabled,$=Je.init(this.clippingPlanes,G),w=Ne.get(b,F.length),w.init(),F.push(w),Ge.enabled===!0&&Ge.isPresenting===!0){const Ke=k.xr.getDepthSensingMesh();Ke!==null&&Ar(Ke,Y,-1/0,k.sortObjects)}Ar(b,Y,0,k.sortObjects),w.finish(),re!==null&&re.updateLights(R.state.lightsArray),k.sortObjects===!0&&w.sort(be,He),j=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,j&&ot.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$===!0&&Je.beginShadows();const oe=R.state.shadowsArray;if(et.render(oe,b,Y),$===!0&&Je.endShadows(),(le&&I.hasRenderPass())===!1){const Ke=w.opaque,ke=w.transmissive;if(R.setupLights(),Y.isArrayCamera){const Qe=Y.cameras;if(ke.length>0)for(let Ye=0,dt=Qe.length;Ye<dt;Ye++){const gt=Qe[Ye];wr(Ke,ke,b,gt)}j&&ot.render(b);for(let Ye=0,dt=Qe.length;Ye<dt;Ye++){const gt=Qe[Ye];ms(w,b,gt,gt.viewport)}}else ke.length>0&&wr(Ke,ke,b,Y),j&&ot.render(b),ms(w,b,Y)}me!==null&&ie===0&&(se.updateMultisampleRenderTarget(me),se.updateRenderTargetMipmap(me)),le&&I.end(k),b.isScene===!0&&b.onAfterRender(k,b,Y),T.resetDefaultState(),he=-1,ge=null,S.pop(),S.length>0?(R=S[S.length-1],se.setTextureUnits(R.state.textureUnits),$===!0&&Je.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?w=F[F.length-1]:w=null,re!==null&&re.renderEnd()};function Ar(b,Y,fe,le){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)fe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLightProbeGrid)R.pushLightProbeGrid(b);else if(b.isLight)R.pushLight(b),b.castShadow&&R.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(U)){le&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const Ke=Se.update(b),ke=b.material;ke.visible&&w.push(b,Ke,ke,fe,ae.z,null,Y)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(U))){const Ke=Se.update(b),ke=b.material;if(le&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ae.copy(b.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),ae.copy(Ke.boundingSphere.center)),ae.applyMatrix4(b.matrixWorld).applyMatrix4(H)),Array.isArray(ke)){const Qe=Ke.groups;for(let Ye=0,dt=Qe.length;Ye<dt;Ye++){const gt=Qe[Ye],je=ke[gt.materialIndex];je&&je.visible&&w.push(b,Ke,je,fe,ae.z,gt,Y)}}else ke.visible&&w.push(b,Ke,ke,fe,ae.z,null,Y)}}const $e=b.children;for(let Ke=0,ke=$e.length;Ke<ke;Ke++)Ar($e[Ke],Y,fe,le)}function ms(b,Y,fe,le){const{opaque:oe,transmissive:$e,transparent:Ke}=b;R.setupLightsView(fe),$===!0&&Je.setGlobalState(k.clippingPlanes,fe),le&&g.viewport(ve.copy(le)),oe.length>0&&gs(oe,Y,fe),$e.length>0&&gs($e,Y,fe),Ke.length>0&&gs(Ke,Y,fe),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function wr(b,Y,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[le.id]===void 0){const je=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[le.id]=new ni(1,1,{generateMipmaps:!0,type:je?bi:Fn,minFilter:Is,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const $e=R.state.transmissionRenderTarget[le.id],Ke=le.viewport||ve;$e.setSize(Ke.z*k.transmissionResolutionScale,Ke.w*k.transmissionResolutionScale);const ke=k.getRenderTarget(),Qe=k.getActiveCubeFace(),Ye=k.getActiveMipmapLevel();k.setRenderTarget($e),k.getClearColor(We),tt=k.getClearAlpha(),tt<1&&k.setClearColor(16777215,.5),k.clear(),j&&ot.render(fe);const dt=k.toneMapping;k.toneMapping=xi;const gt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),R.setupLightsView(le),$===!0&&Je.setGlobalState(k.clippingPlanes,le),gs(b,fe,le),se.updateMultisampleRenderTarget($e),se.updateRenderTargetMipmap($e),Le.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Tt=0,kt=Y.length;Tt<kt;Tt++){const Nt=Y[Tt],{object:Pt,geometry:sn,material:Ze,group:on}=Nt;if(Ze.side===mi&&Pt.layers.test(le.layers)){const vt=Ze.side;Ze.side=In,Ze.needsUpdate=!0,wa(Pt,fe,le,sn,Ze,on),Ze.side=vt,Ze.needsUpdate=!0,je=!0}}je===!0&&(se.updateMultisampleRenderTarget($e),se.updateRenderTargetMipmap($e))}k.setRenderTarget(ke,Qe,Ye),k.setClearColor(We,tt),gt!==void 0&&(le.viewport=gt),k.toneMapping=dt}function gs(b,Y,fe){const le=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,$e=b.length;oe<$e;oe++){const Ke=b[oe],{object:ke,geometry:Qe,group:Ye}=Ke;let dt=Ke.material;dt.allowOverride===!0&&le!==null&&(dt=le),ke.layers.test(fe.layers)&&wa(ke,Y,fe,Qe,dt,Ye)}}function wa(b,Y,fe,le,oe,$e){re!==null&&oe.isNodeMaterial&&re.setObject(b,oe),b.onBeforeRender(k,Y,fe,le,oe,$e),b.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),oe.onBeforeRender(k,Y,fe,le,b,$e),oe.transparent===!0&&oe.side===mi&&oe.forceSinglePass===!1?(oe.side=In,oe.needsUpdate=!0,k.renderBufferDirect(fe,Y,le,oe,b,$e),oe.side=Os,oe.needsUpdate=!0,k.renderBufferDirect(fe,Y,le,oe,b,$e),oe.side=mi):k.renderBufferDirect(fe,Y,le,oe,b,$e),b.onAfterRender(k,Y,fe,le,oe,$e)}function nn(b,Y,fe){Y.isScene!==!0&&(Y=J);const le=Q.get(b),oe=R.state.lights,$e=R.state.shadowsArray,Ke=oe.state.version,ke=Re.getParameters(b,oe.state,$e,Y,fe,R.state.lightProbeGridArray),Qe=Re.getProgramCacheKey(ke);let Ye=le.programs;le.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Y.environment:null,le.fog=Y.fog;const dt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;le.envMap=we.get(b.envMap||le.environment,dt),le.envMapRotation=le.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",zn),Ye=new Map,le.programs=Ye);let gt=Ye.get(Qe);if(gt!==void 0){if(le.currentProgram===gt&&le.lightsStateVersion===Ke)return Cr(b,ke),gt}else ke.uniforms=Re.getUniforms(b),re!==null&&b.isNodeMaterial&&re.build(b,fe,ke),b.onBeforeCompile(ke,k),gt=Re.acquireProgram(ke,Qe),Ye.set(Qe,gt),le.uniforms=ke.uniforms;const je=le.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Je.uniform),Cr(b,ke),le.needsLights=Ra(b),le.lightsStateVersion=Ke,le.needsLights&&(je.ambientLightColor.value=oe.state.ambient,je.lightProbe.value=oe.state.probe,je.sunLights.value=oe.state.sun,je.sunLightShadows.value=oe.state.sunShadow,je.directionalLights.value=oe.state.directional,je.directionalLightShadows.value=oe.state.directionalShadow,je.spotLights.value=oe.state.spot,je.spotLightShadows.value=oe.state.spotShadow,je.rectAreaLights.value=oe.state.rectArea,je.ltc_1.value=oe.state.rectAreaLTC1,je.ltc_2.value=oe.state.rectAreaLTC2,je.pointLights.value=oe.state.point,je.pointLightShadows.value=oe.state.pointShadow,je.hemisphereLights.value=oe.state.hemi,je.sunShadowMatrix.value=oe.state.sunShadowMatrix,je.sunShadowCascade.value=oe.state.sunShadowCascade,je.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,je.spotLightMatrix.value=oe.state.spotLightMatrix,je.spotLightMap.value=oe.state.spotLightMap,je.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=R.state.lightProbeGridArray.length>0,le.currentProgram=gt,le.uniformsList=null,gt}function Ca(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Po.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Cr(b,Y){const fe=Q.get(b);fe.outputColorSpace=Y.outputColorSpace,fe.batching=Y.batching,fe.batchingColor=Y.batchingColor,fe.instancing=Y.instancing,fe.instancingColor=Y.instancingColor,fe.instancingMorph=Y.instancingMorph,fe.skinning=Y.skinning,fe.morphTargets=Y.morphTargets,fe.morphNormals=Y.morphNormals,fe.morphColors=Y.morphColors,fe.morphTargetsCount=Y.morphTargetsCount,fe.numClippingPlanes=Y.numClippingPlanes,fe.numIntersection=Y.numClipIntersection,fe.vertexAlphas=Y.vertexAlphas,fe.vertexTangents=Y.vertexTangents,fe.toneMapping=Y.toneMapping}function Qi(b,Y){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(Y.matrixWorld);for(let fe=0,le=b.length;fe<le;fe++){const oe=b[fe];if(oe.texture!==null&&oe.boundingBox.containsPoint(M))return oe}return null}function Ml(b,Y,fe,le,oe){Y.isScene!==!0&&(Y=J),se.resetTextureUnits();const $e=Y.fog,Ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Y.environment:null,ke=me===null?k.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:xt.workingColorSpace,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Ye=we.get(le.envMap||Ke,Qe),dt=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,gt=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),je=!!fe.morphAttributes.position,Tt=!!fe.morphAttributes.normal,kt=!!fe.morphAttributes.color;let Nt=xi;le.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Nt=k.toneMapping);const Pt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,sn=Pt!==void 0?Pt.length:0,Ze=Q.get(le),on=R.state.lights;if($===!0&&(G===!0||b!==ge)){const It=b===ge&&le.id===he;Je.setState(le,b,It)}let vt=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==on.state.version||Ze.outputColorSpace!==ke||oe.isBatchedMesh&&Ze.batching===!1||!oe.isBatchedMesh&&Ze.batching===!0||oe.isBatchedMesh&&Ze.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ze.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ze.instancing===!1||!oe.isInstancedMesh&&Ze.instancing===!0||oe.isSkinnedMesh&&Ze.skinning===!1||!oe.isSkinnedMesh&&Ze.skinning===!0||oe.isInstancedMesh&&Ze.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ze.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ze.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ze.instancingMorph===!1&&oe.morphTexture!==null||Ze.envMap!==Ye||le.fog===!0&&Ze.fog!==$e||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Je.numPlanes||Ze.numIntersection!==Je.numIntersection)||Ze.vertexAlphas!==dt||Ze.vertexTangents!==gt||Ze.morphTargets!==je||Ze.morphNormals!==Tt||Ze.morphColors!==kt||Ze.toneMapping!==Nt||Ze.morphTargetsCount!==sn||!!Ze.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ze.__version=le.version);let wn=Ze.currentProgram;vt===!0&&(wn=nn(le,Y,oe),re&&le.isNodeMaterial&&re.onUpdateProgram(le,wn,Ze));let Vn=!1,si=!1,wi=!1;const At=wn.getUniforms(),Ht=Ze.uniforms;if(g.useProgram(wn.program)&&(Vn=!0,si=!0,wi=!0),le.id!==he&&(he=le.id,si=!0),Ze.needsLights){const It=Qi(R.state.lightProbeGridArray,oe);Ze.lightProbeGrid!==It&&(Ze.lightProbeGrid=It,si=!0)}if(Vn||ge!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),At.setValue(P,"projectionMatrix",b.projectionMatrix),At.setValue(P,"viewMatrix",b.matrixWorldInverse);const qn=At.map.cameraPosition;qn!==void 0&&qn.setValue(P,ne.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&At.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&At.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),ge!==b&&(ge=b,si=!0,wi=!0)}if(Ze.needsLights&&(on.state.sunShadowMap.length>0&&At.setValue(P,"sunShadowMap",on.state.sunShadowMap,se),on.state.directionalShadowMap.length>0&&At.setValue(P,"directionalShadowMap",on.state.directionalShadowMap,se),on.state.spotShadowMap.length>0&&At.setValue(P,"spotShadowMap",on.state.spotShadowMap,se),on.state.pointShadowMap.length>0&&At.setValue(P,"pointShadowMap",on.state.pointShadowMap,se)),oe.isSkinnedMesh){At.setOptional(P,oe,"bindMatrix"),At.setOptional(P,oe,"bindMatrixInverse");const It=oe.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),At.setValue(P,"boneTexture",It.boneTexture,se))}oe.isBatchedMesh&&(At.setOptional(P,oe,"batchingTexture"),At.setValue(P,"batchingTexture",oe._matricesTexture,se),At.setOptional(P,oe,"batchingIdTexture"),At.setValue(P,"batchingIdTexture",oe._indirectTexture,se),At.setOptional(P,oe,"batchingColorTexture"),oe._colorsTexture!==null&&At.setValue(P,"batchingColorTexture",oe._colorsTexture,se));const ri=fe.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&V.update(oe,fe,wn),(si||Ze.receiveShadow!==oe.receiveShadow)&&(Ze.receiveShadow=oe.receiveShadow,At.setValue(P,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Y.environment!==null&&(Ht.envMapIntensity.value=Y.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=lT()),si){if(At.setValue(P,"toneMappingExposure",k.toneMappingExposure),Ze.needsLights&&Rr(Ht,wi),$e&&le.fog===!0&&Xe.refreshFogUniforms(Ht,$e),Xe.refreshMaterialUniforms(Ht,le,_e,de,R.state.transmissionRenderTarget[b.id]),Ze.needsLights&&Ze.lightProbeGrid){const It=Ze.lightProbeGrid;Ht.probesSH.value=It.texture,Ht.probesMin.value.copy(It.boundingBox.min),Ht.probesMax.value.copy(It.boundingBox.max),Ht.probesResolution.value.copy(It.resolution)}Po.upload(P,Ca(Ze),Ht,se)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Po.upload(P,Ca(Ze),Ht,se),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&At.setValue(P,"center",oe.center),At.setValue(P,"modelViewMatrix",oe.modelViewMatrix),At.setValue(P,"normalMatrix",oe.normalMatrix),At.setValue(P,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const It=le.uniformsGroups;for(let qn=0,ji=It.length;qn<ji;qn++){const Da=It[qn];N.update(Da,wn),N.bind(Da,wn)}}return wn}function Rr(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.sunLights.needsUpdate=Y,b.sunLightShadows.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function Ra(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(b,Y,fe){const le=Q.get(b);le.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Q.get(b.texture).__webglTexture=Y,Q.get(b.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const fe=Q.get(b);fe.__webglFramebuffer=Y,fe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(b,Y=0,fe=0){me=b,ue=Y,ie=fe;let le=null,oe=!1,$e=!1;if(b){const ke=Q.get(b);if(ke.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,ke.__webglFramebuffer),ve.copy(b.viewport),Ue.copy(b.scissor),ye=b.scissorTest,g.viewport(ve),g.scissor(Ue),g.setScissorTest(ye),he=-1;return}else if(ke.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(ke.__hasExternalTextures)se.rebindTextures(b,Q.get(b.texture).__webglTexture,Q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const dt=b.depthTexture;if(ke.__boundDepthTexture!==dt){if(dt!==null&&Q.has(dt)&&(b.width!==dt.image.width||b.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const Qe=b.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&($e=!0);const Ye=Q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?le=Ye[Y][fe]:le=Ye[Y],oe=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?le=Q.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?le=Ye[fe]:le=Ye,ve.copy(b.viewport),Ue.copy(b.scissor),ye=b.scissorTest}else ve.copy(Ve).multiplyScalar(_e).floor(),Ue.copy(C).multiplyScalar(_e).floor(),ye=B;if(fe!==0&&(le=ce),g.bindFramebuffer(P.FRAMEBUFFER,le)&&g.drawBuffers(b,le),g.viewport(ve),g.scissor(Ue),g.setScissorTest(ye),oe){const ke=Q.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,fe)}else if($e){const ke=Y;for(let Qe=0;Qe<b.textures.length;Qe++){const Ye=Q.get(b.textures[Qe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Qe,Ye.__webglTexture,fe,ke)}}else if(b!==null&&fe!==0){const ke=Q.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ke.__webglTexture,fe)}he=-1};function Pa(b){const Y=Q.get(b);return(Y.__readFormat!==b.format||Y.__readType!==b.type)&&(Y.__readFormat=b.format,Y.__readType=b.type,Y.__formatReadable=E.textureFormatReadable(b.format),Y.__typeReadable=E.textureTypeReadable(b.type)),Y}this.readRenderTargetPixels=function(b,Y,fe,le,oe,$e,Ke,ke=0){if(!(b&&b.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ke!==void 0&&(Qe=Qe[Ke]),Qe){g.bindFramebuffer(P.FRAMEBUFFER,Qe);try{const Ye=b.textures[ke],dt=Ye.format,gt=Ye.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke);const je=Pa(Ye);if(je.__formatReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-le&&fe>=0&&fe<=b.height-oe&&P.readPixels(Y,fe,le,oe,Z.convert(dt),Z.convert(gt),$e)}finally{const Ye=me!==null?Q.get(me).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,Y,fe,le,oe,$e,Ke,ke=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ke!==void 0&&(Qe=Qe[Ke]),Qe)if(Y>=0&&Y<=b.width-le&&fe>=0&&fe<=b.height-oe){g.bindFramebuffer(P.FRAMEBUFFER,Qe);const Ye=b.textures[ke],dt=Ye.format,gt=Ye.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke);const je=Pa(Ye);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.bufferData(P.PIXEL_PACK_BUFFER,$e.byteLength,P.STREAM_READ),P.readPixels(Y,fe,le,oe,Z.convert(dt),Z.convert(gt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const kt=me!==null?Q.get(me).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,kt);const Nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await z0(P,Nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,$e),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Tt),P.deleteSync(Nt),$e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,fe=0){const le=Math.pow(2,-fe),oe=Math.floor(b.image.width*le),$e=Math.floor(b.image.height*le),Ke=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;se.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,fe,0,0,Ke,ke,oe,$e),g.unbindTexture()},this.copyTextureToTexture=function(b,Y,fe=null,le=null,oe=0,$e=0){let Ke,ke,Qe,Ye,dt,gt,je,Tt,kt;const Nt=b.isCompressedTexture?b.mipmaps[$e]:b.image;if(fe!==null)Ke=fe.max.x-fe.min.x,ke=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,Ye=fe.min.x,dt=fe.min.y,gt=fe.isBox3?fe.min.z:0;else{const Ht=Math.pow(2,-oe);Ke=Math.floor(Nt.width*Ht),ke=Math.floor(Nt.height*Ht),b.isDataArrayTexture?Qe=Nt.depth:b.isData3DTexture?Qe=Math.floor(Nt.depth*Ht):Qe=1,Ye=0,dt=0,gt=0}le!==null?(je=le.x,Tt=le.y,kt=le.z):(je=0,Tt=0,kt=0);const Pt=Z.convert(Y.format),sn=Z.convert(Y.type);let Ze;Y.isData3DTexture?(se.setTexture3D(Y,0),Ze=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Ze=P.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Ze=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);const on=g.getParameter(P.UNPACK_ROW_LENGTH),vt=g.getParameter(P.UNPACK_IMAGE_HEIGHT),wn=g.getParameter(P.UNPACK_SKIP_PIXELS),Vn=g.getParameter(P.UNPACK_SKIP_ROWS),si=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Ye),g.pixelStorei(P.UNPACK_SKIP_ROWS,dt),g.pixelStorei(P.UNPACK_SKIP_IMAGES,gt);const wi=b.isDataArrayTexture||b.isData3DTexture,At=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const Ht=Q.get(b),ri=Q.get(Y),It=Q.get(Ht.__renderTarget),qn=Q.get(ri.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,It.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let ji=0;ji<Qe;ji++)wi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Q.get(b).__webglTexture,oe,gt+ji),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Q.get(Y).__webglTexture,$e,kt+ji)),P.blitFramebuffer(Ye,dt,Ke,ke,je,Tt,Ke,ke,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(oe!==0||b.isRenderTargetTexture||Q.has(b)){const Ht=Q.get(b),ri=Q.get(Y);g.bindFramebuffer(P.READ_FRAMEBUFFER,X),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,ee);for(let It=0;It<Qe;It++)wi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,oe,gt+It):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ht.__webglTexture,oe),At?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ri.__webglTexture,$e,kt+It):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ri.__webglTexture,$e),oe!==0?P.blitFramebuffer(Ye,dt,Ke,ke,je,Tt,Ke,ke,P.COLOR_BUFFER_BIT,P.NEAREST):At?P.copyTexSubImage3D(Ze,$e,je,Tt,kt+It,Ye,dt,Ke,ke):P.copyTexSubImage2D(Ze,$e,je,Tt,Ye,dt,Ke,ke);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else At?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ze,$e,je,Tt,kt,Ke,ke,Qe,Pt,sn,Nt.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(Ze,$e,je,Tt,kt,Ke,ke,Qe,Pt,Nt.data):P.texSubImage3D(Ze,$e,je,Tt,kt,Ke,ke,Qe,Pt,sn,Nt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,$e,je,Tt,Ke,ke,Pt,sn,Nt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,$e,je,Tt,Nt.width,Nt.height,Pt,Nt.data):P.texSubImage2D(P.TEXTURE_2D,$e,je,Tt,Ke,ke,Pt,sn,Nt);g.pixelStorei(P.UNPACK_ROW_LENGTH,on),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt),g.pixelStorei(P.UNPACK_SKIP_PIXELS,wn),g.pixelStorei(P.UNPACK_SKIP_ROWS,Vn),g.pixelStorei(P.UNPACK_SKIP_IMAGES,si),$e===0&&Y.generateMipmaps&&P.generateMipmap(Ze),g.unbindTexture()},this.initRenderTarget=function(b){Q.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){ue=0,ie=0,me=null,g.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const pd={type:"change"},uh={type:"start"},bm={type:"end"},vo=new dl,md=new Oi,uT=Math.cos(70*H0.DEG2RAD),jt=new K,Pn=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6;class hT extends hS{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new hs,this._lastTargetPosition=new K,this._quat=new hs().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wf,this._sphericalDelta=new Wf,this._scale=1,this._panOffset=new K,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new K,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dT.bind(this),this._onPointerDown=fT.bind(this),this._onPointerUp=pT.bind(this),this._onContextMenu=MT.bind(this),this._onMouseWheel=_T.bind(this),this._onKeyDown=vT.bind(this),this._onTouchStart=xT.bind(this),this._onTouchMove=ST.bind(this),this._onMouseDown=mT.bind(this),this._onMouseMove=gT.bind(this),this._interceptControlDown=yT.bind(this),this._interceptControlUp=bT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Lt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=Lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=jt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vo.origin.copy(this.object.position),vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vo.direction))<uT?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),vo.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pn/60*this.autoRotateSpeed*e:Pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function fT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function dT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function pT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bm),this.state=Lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Lt.DOLLY;break;case Gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}break;case Gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(uh)}function gT(n){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _T(n){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(n.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bm))}function vT(n){this.enabled!==!1&&this._handleKeyDown(n)}function xT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Lt.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Lt.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(uh)}function ST(n){switch(this._trackPointer(n),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Lt.NONE}}function MT(n){this.enabled!==!1&&n.preventDefault()}function yT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ET{renderer;scene;camera;controls;gear1=null;gear2=null;actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;envelopeMode=!1;raycaster=new uS;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new cT({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new nx,this.scene.background=new St(1053464);const s=t/i,r=80;this.camera=new ml(-r*s/2,r*s/2,r/2,-r/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new hT(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN};const a=new oS(16777215,.65),o=new aS(16777215,.9);o.position.set(40,60,100),this.scene.add(a,o),this.interferenceGroup=new lr,this.scene.add(this.interferenceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,s=160){const r=[];for(let l=0;l<=s;l++){const c=l/s*Math.PI*2;r.push(new K(e*Math.cos(c),e*Math.sin(c),i))}const a=new vn().setFromPoints(r),o=new Ro({color:t,transparent:!0,opacity:.8});return new dx(a,o)}buildGearMesh(e,t){const i=new lr,s=new Qo,r=e.outline;s.moveTo(r[0].x,r[0].y);for(let h=1;h<r.length;h++)s.lineTo(r[h].x,r[h].y);s.closePath();const a=e.input.faceWidth,o=new lh(s,{depth:a,bevelEnabled:!1,curveSegments:1});o.translate(0,0,-a/2),o.computeVertexNormals();const l=new tS({color:t,metalness:.35,roughness:.55}),c=new Bn(o,l);i.add(c);const u=new fx(new mx(o,12),new Ro({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,a/2+.02),base:this.makeCircleLine(e.baseR,2605194,a/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,a/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,a/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setGears(e,t,i){this.clearEnvelopeView(),this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(e,7252222),this.gear2=this.buildGearMesh(t,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.targetCenter(i/2,Math.max(e.addendumR,t.addendumR))}targetCenter(e,t){const i=(this.container.clientWidth||800)/(this.container.clientHeight||600),s=(t*2+40)/2,r=Math.max(s*2,80);this.camera.left=-r*i/2,this.camera.right=r*i/2,this.camera.top=r/2,this.camera.bottom=-r/2,this.camera.updateProjectionMatrix(),this.controls.target.set(e,0,0),this.camera.position.set(e,0,140)}setAngles(e,t){this.envelopeMode||(this.gear1&&(this.gear1.group.rotation.z=e),this.gear2&&(this.gear2.group.rotation.z=t))}setMeshOverlay(e,t){if(this.envelopeMode||(this.clearOverlay(),!e||!this.gear1||!this.gear2))return;const i=o=>t[o],s=o=>{o.geometry.computeBoundingBox();const l=o.geometry.boundingBox;return l?l.max.z-l.min.z:0},r=s(this.gear1.body),a=s(this.gear2.body);if(this.gear1.refs.pitch.visible=!!i("showPitchCircle"),this.gear2.refs.pitch.visible=!!i("showPitchCircle"),this.gear1.refs.base.visible=!!i("showBaseCircle"),this.gear2.refs.base.visible=!!i("showBaseCircle"),this.gear1.refs.addendum.visible=!!i("showAddendumCircle"),this.gear2.refs.addendum.visible=!!i("showAddendumCircle"),this.gear1.refs.dedendum.visible=!!i("showDedendumCircle"),this.gear2.refs.dedendum.visible=!!i("showDedendumCircle"),i("showActionLine")){const o=Math.max(r,a)/2+1,l=(u,f,h)=>{const d=new vn().setFromPoints([new K(u.x,u.y,o),new K(f.x,f.y,o)]);return new rh(d,new Ro({color:h,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=l(e.tangentLine.p0,e.tangentLine.p1,8950691),this.tangentLine.renderOrder=50,this.actionLine=l(e.actionLine.p0,e.actionLine.p1,3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const c=new jo(.7,16,16);this.pitchPoint=new Bn(c,new ia({color:16777215,depthTest:!1})),this.pitchPoint.position.set(e.pitchPoint.x,e.pitchPoint.y,o),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(i("showContact")){const o=e.alphaPrime,l=Math.sin(o),c=Math.cos(o),u={x:e.pitchPoint.x+t.contactS*l,y:e.pitchPoint.y+t.contactS*c},f=Math.max(r,a)/2+1.5,h=new jo(1,20,20);this.contactMarker=new Bn(h,new ia({color:16726891,depthTest:!1})),this.contactMarker.position.set(u.x,u.y,f),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}if(t.contactRegions)for(const o of t.contactRegions)this.addRegionMeshes(o)}bodyDepth(e){e.geometry.computeBoundingBox();const t=e.geometry.boundingBox;return t?t.max.z-t.min.z:0}addRegionMeshes(e){if(!this.gear1||!this.gear2)return;const t=Math.max(this.bodyDepth(this.gear1.body),this.bodyDepth(this.gear2.body))/2+2;for(const i of e){if(i.length<3)continue;const s=new Qo;s.moveTo(i[0].x,i[0].y);for(let l=1;l<i.length;l++)s.lineTo(i[l].x,i[l].y);s.closePath();const r=new ch(s),a=new ia({color:16723285,transparent:!0,opacity:.5,side:mi,depthTest:!1}),o=new Bn(r,a);o.position.z=t,o.renderOrder=999,this.interferenceGroup.add(o)}}clearRegionMeshes(){for(;this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}isEnvelopeMode(){return this.envelopeMode}setEnvelopeView(e,t,i,s,r,a,o=!0){this.envelopeMode=!0,this.clearOverlay(),this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(e,7252222),this.gear2=this.buildGearMesh(t,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.gear1.group.rotation.z=s,this.gear2.group.rotation.z=r;for(const l of["pitch","base","addendum","dedendum"])this.gear1.refs[l].visible=o&&(l==="pitch"||l==="addendum"),this.gear2.refs[l].visible=o&&(l==="pitch"||l==="addendum");this.addRegionMeshes(a),this.targetCenter(i/2,Math.max(e.addendumR,t.addendumR))}clearEnvelopeView(){!this.envelopeMode&&!this.interferenceGroup.children.length||(this.envelopeMode=!1,this.clearRegionMeshes())}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,r=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-r*i,this.camera.right=r*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Vt={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function sr(n,e){return n*Vt[e].factor}function xo(n,e){return n/Vt[e].factor}function TT(n,e){return`${sr(n,e).toFixed(Vt[e].decimals)} ${Vt[e].label}`}const AT={class:"app"},wT={class:"panel"},CT={class:"units"},RT=["onClick"],PT=["step"],DT=["step"],LT={class:"two"},IT={key:0,class:"err"},UT={key:1,class:"err"},NT={class:"row"},FT={key:0},OT=["step"],BT={class:"row"},zT=["disabled"],VT=["disabled"],kT=["disabled","min","max"],HT=["disabled"],GT={key:0,class:"report"},WT={class:"envelope"},XT={class:"axisgrid"},$T={class:"ax-head"},qT=["step"],YT=["step"],KT=["max"],ZT={class:"ax-head"},JT=["step"],QT=["step"],jT=["max"],eA={class:"ax-head"},tA=["step"],nA=["step"],iA=["max"],sA=["min","max"],rA={class:"combo-count"},aA={key:0,class:"warns"},oA=["disabled"],lA={key:1,class:"job-picker"},cA=["value"],uA=["value"],hA={key:2,class:"job-panel"},fA={key:0,class:"generation-warn"},dA={class:"snap"},pA={class:"muted"},mA={class:"progress"},gA={class:"bar"},_A={class:"good"},vA={class:"bad"},xA={class:"warn"},SA={class:"extrema"},MA={key:0},yA={class:"row"},bA=["disabled"],EA=["disabled"],TA=["disabled"],AA={class:"muted"},wA={key:1,class:"pose-box"},CA={class:"bad"},RA={key:0,class:"muted"},PA={class:"filter-row"},DA=["onClick"],LA={class:"combo-table"},IA=["title"],UA=["onClick"],NA=["onClick","disabled"],FA={key:0,class:"muted"},OA={class:"row"},BA={class:"row"},zA={class:"row"},VA={class:"row"},kA={class:"row"},HA={class:"row"},GA={class:"samples"},WA={class:"viewport"},XA={class:"readouts"},$A={key:0,class:"dim-grid"},qA={class:"mesh-report"},YA={key:0,class:"warns"},KA={class:"panel right"},ZA={class:"row"},JA={class:"row"},QA={class:"wide filebtn"},jA={class:"caselist"},ew={class:"ci"},tw={class:"ca"},nw=["onClick"],iw=["onClick"],sw={key:0,class:"empty"},rw=Jg({__name:"App",setup(n){const e=rn("mm"),t=Rs({z1:20,z2:40,m:2,alphaDeg:20,faceWidth:10,centerDistance:60,useStandardCenter:!0}),i=Fa(),s=Fa(),r=Fa(),a=Rs({g1:[],g2:[]});function o(){const Z={z:Math.round(t.z1),module:t.m,alpha:t.alphaDeg*ui,faceWidth:t.faceWidth},T={z:Math.round(t.z2),module:t.m,alpha:t.alphaDeg*ui,faceWidth:t.faceWidth};if(a.g1=Vo(Z),a.g2=Vo(T),a.g1.length||a.g2.length)return;i.value=zo(Z),s.value=zo(T);const N=t.useStandardCenter?i.value.pitchR+s.value.pitchR:t.centerDistance;r.value=Ep({g1:i.value,g2:s.value,centerDistance:N})}const l=yn({get:()=>sr(t.m,e.value),set:Z=>t.m=xo(Z,e.value)}),c=yn({get:()=>sr(t.faceWidth,e.value),set:Z=>t.faceWidth=xo(Z,e.value)}),u=yn({get:()=>sr(t.centerDistance,e.value),set:Z=>t.centerDistance=xo(Z,e.value)});Ps(e,()=>{});const f=rn(!0),h=rn(0),d=rn(.25);let _=0;const y=rn(0),m=Rs({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0,contactS:0}),p=rn(null),A=Fa([]),D=rn(!1);let M=0;async function w(Z){if(!i.value||!s.value||!r.value)return;const T=Z,N=jh(i.value,s.value,r.value,T),Fe=[rr(i.value.outline,0,0,T)],Ge=[rr(s.value.outline,r.value.a,0,N)],mt=++M;D.value=!0;try{const lt=await Xu(Fe,Ge);if(mt!==M)return;p.value=lt.area,A.value=lt.regions}finally{mt===M&&(D.value=!1)}}const R=rn();let F=null;function S(){!F||!r.value||F.setMeshOverlay(r.value,{...m,contactS:y.value,contactRegions:[A.value]})}yo(()=>{o(),F=new ET(R.value),i.value&&s.value&&r.value&&F.setGears(i.value,s.value,r.value.a);const Z=T=>{const N=Math.min(.05,(T-_)/1e3||0);if(_=T,f.value&&i.value&&s.value&&r.value){h.value+=d.value*N;const Fe=2*Math.PI/i.value.input.z;h.value=(h.value%Fe+Fe)%Fe;const Ge=(h.value-Uc(r.value,i.value,s.value,0).phi1)*i.value.baseR;y.value=I(Ge)}if(i.value&&s.value&&r.value){const Fe=jh(i.value,s.value,r.value,h.value);F.setAngles(h.value,Fe),m.contactS=y.value,S()}requestAnimationFrame(Z)};requestAnimationFrame(Z)});function I(Z){if(!r.value)return 0;const T=r.value.actionLine,N=r.value.alphaPrime,Fe=Math.sin(N),Ge=Math.cos(N),mt=(T.p0.x-r.value.pitchPoint.x)*Fe+(T.p0.y-r.value.pitchPoint.y)*Ge,lt=(T.p1.x-r.value.pitchPoint.x)*Fe+(T.p1.y-r.value.pitchPoint.y)*Ge;return Z<mt?lt-(mt-Z)%(lt-mt):Z>lt?mt+(Z-lt)%(lt-mt):Z}Ps(()=>[t.z1,t.z2,t.m,t.alphaDeg,t.faceWidth,t.useStandardCenter,t.centerDistance],()=>{o(),F&&i.value&&s.value&&r.value&&F.setGears(i.value,s.value,r.value.a),h.value=0,y.value=0,p.value=null,A.value=[],Re.value=!1,Ne.value=null}),Ps(m,S),Ps(y,()=>m.contactS=y.value);function k(){f.value=!1}function q(){f.value=!0}function re(){f.value||!i.value||!s.value||!r.value||(h.value=Uc(r.value,i.value,s.value,y.value).phi1)}const ce=rn([]),X=rn("未命名案例"),ee=rn("");async function ue(){ce.value=await Jv()}yo(ue);function ie(Z){const T=r.value?.a??t.centerDistance;return{schemaVersion:1,id:Qv(),name:X.value,createdAt:Date.now(),updatedAt:Date.now(),note:ee.value,gear1:{z:t.z1,module:t.m,alpha:t.alphaDeg*ui,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},gear2:{z:t.z2,module:t.m,alpha:t.alphaDeg*ui,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},centerDistance:t.useStandardCenter?null:T,unit:e.value,outlines:Z&&i.value&&s.value?{gear1:i.value.outline,gear2:s.value.outline}:void 0}}async function me(Z){await nf(ie(Z)),await ue()}function he(Z){t0(ie(Z))}async function ge(Z){t.z1=Z.gear1.z,t.z2=Z.gear2.z,t.m=Z.gear1.module,t.alphaDeg=Z.gear1.alphaDeg,t.faceWidth=Z.gear1.faceWidth,Z.centerDistance==null?t.useStandardCenter=!0:(t.useStandardCenter=!1,t.centerDistance=Z.centerDistance),e.value=Z.unit||"mm",X.value=Z.name,ee.value=Z.note,o(),F&&i.value&&s.value&&r.value&&F.setGears(i.value,s.value,r.value.a)}async function ve(Z){await Zv(Z),await ue()}function Ue(Z){const T=Z.target,N=T.files?.[0];if(!N)return;const Fe=new FileReader;Fe.onload=async()=>{try{const Ge=e0(String(Fe.result));await nf(Ge),await ge(Ge),await ue()}catch(Ge){alert("导入失败："+Ge.message)}},Fe.readAsText(N),T.value=""}const ye=yn(()=>!i.value||!s.value||!r.value?null:{g1:i.value,g2:s.value,mesh:r.value}),We=Rs({daMin:-.05,daMax:.05,daCount:3,ds1Min:-.02,ds1Max:.02,ds1Count:3,ds2Min:-.02,ds2Max:.02,ds2Count:3,phaseSteps:24}),tt=yn(()=>({center:{min:We.daMin,max:We.daMax,count:Math.round(We.daCount)},thickness1:{min:We.ds1Min,max:We.ds1Max,count:Math.round(We.ds1Count)},thickness2:{min:We.ds2Min,max:We.ds2Max,count:Math.round(We.ds2Count)},phaseSteps:Math.round(We.phaseSteps)}));function nt(Z,T){return yn({get:()=>sr(Z(),e.value),set:N=>T(xo(N,e.value))})}const de=nt(()=>We.daMin,Z=>We.daMin=Z),_e=nt(()=>We.daMax,Z=>We.daMax=Z),be=nt(()=>We.ds1Min,Z=>We.ds1Min=Z),He=nt(()=>We.ds1Max,Z=>We.ds1Max=Z),Ve=nt(()=>We.ds2Min,Z=>We.ds2Min=Z),C=nt(()=>We.ds2Max,Z=>We.ds2Max=Z);function B(){return!i.value||!s.value||!r.value?null:{gear1:{z:i.value.input.z,module:i.value.input.module,alpha:i.value.input.alpha,faceWidth:i.value.input.faceWidth},gear2:{z:s.value.input.z,module:s.value.input.module,alpha:s.value.input.alpha,faceWidth:s.value.input.faceWidth},baseCenterDistance:r.value.a,useStandardCenter:t.useStandardCenter,unit:e.value}}const U=yn(()=>{const Z=B();return Z?$u({...Z,unit:"mm"},tt.value,0).key:""}),$=yn(()=>{const Z=B();return Z?Cp(tt.value,Z.gear1,Z.gear2,Z.baseCenterDistance).errors:["基准齿轮参数无效"]}),G=yn(()=>We.daCount*We.ds1Count*We.ds2Count),H=new $v(sf()),ne=rn([]),ae=rn(null),J=yn(()=>ne.value.find(Z=>Z.id===ae.value)??null),j=yn(()=>J.value?H.extrema(J.value):null),Ae=yn(()=>!!J.value&&J.value.snapshot.key===U.value);async function P(Z=!0){ne.value=await sf().getAll(),Z||(ae.value=null),ae.value&&!ne.value.some(T=>T.id===ae.value)&&(ae.value=null,Je())}let Pe=!1;yo(()=>{Pe||(Pe=!0,H.subscribe(()=>void P(!0)),(async()=>(await P(!1),await H.resumeInterrupted(),await P(!0)))())});const Le=rn(!1);async function E(){const Z=B();if(!(!Z||Le.value)){Le.value=!0;try{const T=await H.start(Z,tt.value);if(!T.ok){alert(`分析未启动（未写入任何结果）：
`+T.errors.join(`
`));return}ae.value=T.job.id,Je(),await P(!0)}finally{Le.value=!1}}}async function g(){ae.value&&await H.cancel(ae.value)}async function O(){ae.value&&await H.resume(ae.value)}async function Q(){if(!ae.value||!confirm("删除该分析作业及其全部结果？"))return;const Z=ae.value;ae.value=null,Je(),await H.remove(Z)}async function se(Z){ae.value&&await H.recompute(ae.value,[Z])}async function we(){if(!J.value)return;const Z=J.value.combos.filter(T=>T.status==="risk").map(T=>T.index);Z.length&&ae.value&&await H.recompute(ae.value,Z)}function De(Z){ae.value=Z,Je()}const pe=rn("all"),Se=yn(()=>{const Z=J.value;return Z?[...pe.value==="all"?Z.combos:Z.combos.filter(N=>N.status===pe.value)].sort((N,Fe)=>Fe.maxArea-N.maxArea):[]}),Re=rn(!1),Xe=rn(!1),Ne=rn(null);async function ze(Z){if(!J.value)return;const T=J.value.combos[Z];if(!(!T||T.status!=="risk"||T.worstPhi1===null||T.worstPhi2===null)){Xe.value=!0;try{const N=await H.getWorstPose(J.value.id,Z);if(!N)return;const Fe=Rp(J.value.snapshot,N.combo.da,N.combo.ds1,N.combo.ds2);if(!Fe.ok)return;const{g1:Ge,g2:mt,a:lt}=Fe.geom;k(),F?.setEnvelopeView(Ge,mt,lt,T.worstPhi1,T.worstPhi2,N.regions),Re.value=!0,Ne.value={da:N.combo.da,ds1:N.combo.ds1,ds2:N.combo.ds2,a:lt,s:N.combo.worstS??0,area:N.combo.maxArea}}finally{Xe.value=!1}}}function Je(){if(!Re.value&&!F?.isEnvelopeMode()){Ne.value=null;return}F?.clearEnvelopeView(),Re.value=!1,Ne.value=null,F&&i.value&&s.value&&r.value&&F.setGears(i.value,s.value,r.value.a)}function et(Z){return Z?new Date(Z).toLocaleTimeString():"—"}const ot=yn(()=>{if(!r.value)return[-30,30];const Z=r.value,T=Math.sin(Z.alphaPrime),N=Math.cos(Z.alphaPrime),Fe=(Z.actionLine.p0.x-Z.pitchPoint.x)*T+(Z.actionLine.p0.y-Z.pitchPoint.y)*N,Ge=(Z.actionLine.p1.x-Z.pitchPoint.x)*T+(Z.actionLine.p1.y-Z.pitchPoint.y)*N;return[Math.floor(Fe*10)/10,Math.ceil(Ge*10)/10]});function V(Z){return TT(Z,e.value)}function Ie(Z){return sr(Z,e.value).toFixed(Vt[e.value].decimals)}function xe(Z,T,N=2,Fe=20){t.z1=Z,t.z2=T,t.m=N,t.alphaDeg=Fe,t.useStandardCenter=!0}return(Z,T)=>(Mt(),Et("div",AT,[T[105]||(T[105]=z("header",null,[z("h1",null,"直齿圆柱齿轮参数化实验室"),z("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）")],-1)),z("main",null,[z("aside",wT,[z("section",null,[T[38]||(T[38]=z("h2",null,"显示单位（不改变实际尺寸）",-1)),z("div",CT,[(Mt(!0),Et(mn,null,vs(Object.keys(ut(Vt)),N=>(Mt(),Et("button",{key:N,class:Ln({active:e.value===N}),onClick:Fe=>e.value=N},Ce(ut(Vt)[N].label),11,RT))),128))])]),z("section",null,[T[42]||(T[42]=z("h2",null,"齿轮参数",-1)),z("label",null,[T[39]||(T[39]=rt("压力角 α（度） ",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[0]||(T[0]=N=>t.alphaDeg=N),min:"1",max:"45",step:"0.5"},null,512),[[Kt,t.alphaDeg,void 0,{number:!0}]])]),z("label",null,[rt("模数 m（"+Ce(ut(Vt)[e.value].label)+"） ",1),Ft(z("input",{type:"number","onUpdate:modelValue":T[1]||(T[1]=N=>l.value=N),step:ut(Vt)[e.value].step},null,8,PT),[[Kt,l.value,void 0,{number:!0}]])]),z("label",null,[rt("齿宽 b（"+Ce(ut(Vt)[e.value].label)+"） ",1),Ft(z("input",{type:"number","onUpdate:modelValue":T[2]||(T[2]=N=>c.value=N),step:ut(Vt)[e.value].step},null,8,DT),[[Kt,c.value,void 0,{number:!0}]])]),z("div",LT,[z("label",null,[T[40]||(T[40]=rt("齿数 z₁ ",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[3]||(T[3]=N=>t.z1=N),min:"4",step:"1"},null,512),[[Kt,t.z1,void 0,{number:!0}]])]),z("label",null,[T[41]||(T[41]=rt("齿数 z₂ ",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[4]||(T[4]=N=>t.z2=N),min:"4",step:"1"},null,512),[[Kt,t.z2,void 0,{number:!0}]])])]),a.g1.length?(Mt(),Et("div",IT,Ce(a.g1.join("；")),1)):Qt("",!0),a.g2.length?(Mt(),Et("div",UT,Ce(a.g2.join("；")),1)):Qt("",!0)]),z("section",null,[T[44]||(T[44]=z("h2",null,"中心距",-1)),z("label",NT,[Ft(z("input",{type:"checkbox","onUpdate:modelValue":T[5]||(T[5]=N=>t.useStandardCenter=N)},null,512),[[Ss,t.useStandardCenter]]),T[43]||(T[43]=rt(" 使用标准中心距 a₀ = m(z₁+z₂)/2 ",-1))]),t.useStandardCenter?Qt("",!0):(Mt(),Et("label",FT,[rt("实际中心距 a（"+Ce(ut(Vt)[e.value].label)+"） ",1),Ft(z("input",{type:"number","onUpdate:modelValue":T[6]||(T[6]=N=>u.value=N),step:ut(Vt)[e.value].step},null,8,OT),[[Kt,u.value,void 0,{number:!0}]])]))]),z("section",null,[T[47]||(T[47]=z("h2",null,"运动 / 检查",-1)),z("div",BT,[z("button",{onClick:k,disabled:!f.value},"暂停",8,zT),z("button",{onClick:q,disabled:f.value},"继续",8,VT)]),z("label",null,[T[45]||(T[45]=rt("轮1 角速度（rad/s） ",-1)),Ft(z("input",{type:"range","onUpdate:modelValue":T[7]||(T[7]=N=>d.value=N),min:"0",max:"1.5",step:"0.01"},null,512),[[Kt,d.value,void 0,{number:!0}]])]),z("label",null,[T[46]||(T[46]=rt("接触点沿啮合线 s（mm，暂停可拖动） ",-1)),Ft(z("input",{type:"range",disabled:f.value,"onUpdate:modelValue":T[8]||(T[8]=N=>y.value=N),min:ot.value[0],max:ot.value[1],step:"0.05",onInput:re},null,40,kT),[[Kt,y.value,void 0,{number:!0}]])]),z("button",{class:"wide",onClick:T[9]||(T[9]=N=>w(h.value)),disabled:f.value||D.value},Ce(D.value?"Clipper 求交中…":"在当前帧做局部干涉求交（Clipper2 WASM）"),9,HT),p.value!==null?(Mt(),Et("div",GT,[rt(" 重叠面积 = "+Ce(p.value.toExponential(3))+" mm² ",1),z("b",{class:Ln(p.value>1e-6?"bad":"good")},Ce(p.value>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):Qt("",!0)]),z("section",WT,[T[73]||(T[73]=z("h2",null,[rt("公差包络分析 "),z("span",{class:"tag"},"教学近似")],-1)),T[74]||(T[74]=z("p",{class:"disclaimer"},[rt(" 在冻结的基准参数上扫描中心距偏差 Δa 与两轮齿厚偏差 Δs 的组合，逐组合在有效啮合区间内扫描相位， 复用当前渐开线齿廓与 Clipper 布尔求交判定。"),z("b",null,"仍是理想刚性、2D 端截面的教学近似"),rt("， 不含弹性、热膨胀、齿向/粗糙度误差与概率装配，"),z("b",null,"不能用于真实制造认证"),rt("。 ")],-1)),z("div",XT,[z("div",$T,[z("span",null,"Δa 中心距偏差（"+Ce(ut(Vt)[e.value].label)+"）",1)]),z("label",null,[T[48]||(T[48]=rt("下限",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[10]||(T[10]=N=>qt(de)?de.value=N:null),step:ut(Vt)[e.value].step},null,8,qT),[[Kt,ut(de),void 0,{number:!0}]])]),z("label",null,[T[49]||(T[49]=rt("上限",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[11]||(T[11]=N=>qt(_e)?_e.value=N:null),step:ut(Vt)[e.value].step},null,8,YT),[[Kt,ut(_e),void 0,{number:!0}]])]),z("label",null,[T[50]||(T[50]=rt("采样点",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[12]||(T[12]=N=>We.daCount=N),min:"2",max:ut(ea),step:"1"},null,8,KT),[[Kt,We.daCount,void 0,{number:!0}]])]),z("div",ZT,[z("span",null,"Δs₁ 轮1齿厚偏差（"+Ce(ut(Vt)[e.value].label)+"）",1)]),z("label",null,[T[51]||(T[51]=rt("下限",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[13]||(T[13]=N=>qt(be)?be.value=N:null),step:ut(Vt)[e.value].step},null,8,JT),[[Kt,ut(be),void 0,{number:!0}]])]),z("label",null,[T[52]||(T[52]=rt("上限",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[14]||(T[14]=N=>qt(He)?He.value=N:null),step:ut(Vt)[e.value].step},null,8,QT),[[Kt,ut(He),void 0,{number:!0}]])]),z("label",null,[T[53]||(T[53]=rt("采样点",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[15]||(T[15]=N=>We.ds1Count=N),min:"2",max:ut(ea),step:"1"},null,8,jT),[[Kt,We.ds1Count,void 0,{number:!0}]])]),z("div",eA,[z("span",null,"Δs₂ 轮2齿厚偏差（"+Ce(ut(Vt)[e.value].label)+"）",1)]),z("label",null,[T[54]||(T[54]=rt("下限",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[16]||(T[16]=N=>qt(Ve)?Ve.value=N:null),step:ut(Vt)[e.value].step},null,8,tA),[[Kt,ut(Ve),void 0,{number:!0}]])]),z("label",null,[T[55]||(T[55]=rt("上限",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[17]||(T[17]=N=>qt(C)?C.value=N:null),step:ut(Vt)[e.value].step},null,8,nA),[[Kt,ut(C),void 0,{number:!0}]])]),z("label",null,[T[56]||(T[56]=rt("采样点",-1)),Ft(z("input",{type:"number","onUpdate:modelValue":T[18]||(T[18]=N=>We.ds2Count=N),min:"2",max:ut(ea),step:"1"},null,8,iA),[[Kt,We.ds2Count,void 0,{number:!0}]])])]),z("label",null,[rt("每组合相位扫描点数（"+Ce(ut(Go))+"…"+Ce(ut(Wo))+"，含啮合区间两端） ",1),Ft(z("input",{type:"number","onUpdate:modelValue":T[19]||(T[19]=N=>We.phaseSteps=N),min:ut(Go),max:ut(Wo),step:"1"},null,8,sA),[[Kt,We.phaseSteps,void 0,{number:!0}]])]),z("div",rA,[T[57]||(T[57]=rt(" 组合总数 ",-1)),z("b",{class:Ln(G.value>ut(Ho)?"bad":"")},Ce(G.value),3),rt(" × "+Ce(We.phaseSteps)+" 相位 = "+Ce(G.value*We.phaseSteps)+" 次求交 （上限 "+Ce(ut(Ho))+" 组合） ",1)]),$.value.length?(Mt(),Et("ul",aA,[(Mt(!0),Et(mn,null,vs($.value,(N,Fe)=>(Mt(),Et("li",{key:Fe},"⛔ "+Ce(N),1))),128))])):Qt("",!0),z("button",{class:"wide",onClick:E,disabled:Le.value||!!$.value.length},Ce(Le.value?"创建中…":"对当前冻结基准开始分析"),9,oA),ne.value.length?(Mt(),Et("div",lA,[z("label",null,[T[59]||(T[59]=rt("分析作业（含历史快照，按更新时间排序） ",-1)),z("select",{value:ae.value??"",onChange:T[20]||(T[20]=N=>De(N.target.value))},[T[58]||(T[58]=z("option",{value:"",disabled:""},"— 选择作业 —",-1)),(Mt(!0),Et(mn,null,vs(ne.value,N=>(Mt(),Et("option",{key:N.id,value:N.id},Ce(N.snapshot.label)+" · "+Ce(N.status==="done"?"完成":N.status==="cancelled"?"已取消":"运行中")+" · "+Ce(new Date(N.updatedAt).toLocaleTimeString()),9,uA))),128))],40,cA)])])):Qt("",!0),J.value?(Mt(),Et("div",hA,[Ae.value?Qt("",!0):(Mt(),Et("div",fA,[T[60]||(T[60]=rt(" ⚠️ 此作业属于",-1)),T[61]||(T[61]=z("b",null,"旧参数快照",-1)),rt("（"+Ce(J.value.snapshot.unit)+" 单位下创建，数值以 mm 冻结）。 当前面板参数已改变，旧结果不会被覆盖，新分析将生成新一代作业。 ",1)])),z("div",dA,[z("div",null,"快照："+Ce(J.value.snapshot.label),1),z("div",null,"基准中心距 a = "+Ce(V(J.value.snapshot.baseCenterDistance))+"；Δa/Δs 均以 mm 冻结",1),z("div",pA," Δa ["+Ce(Ie(J.value.snapshot.spec.center.min))+", "+Ce(Ie(J.value.snapshot.spec.center.max))+"] · Δs₁ ["+Ce(Ie(J.value.snapshot.spec.thickness1.min))+", "+Ce(Ie(J.value.snapshot.spec.thickness1.max))+"] · Δs₂ ["+Ce(Ie(J.value.snapshot.spec.thickness2.min))+", "+Ce(Ie(J.value.snapshot.spec.thickness2.max))+"] "+Ce(ut(Vt)[e.value].label)+"（内部冻结为 mm）； "+Ce(J.value.combos.length)+" 组合 × "+Ce(J.value.snapshot.spec.phaseSteps)+" 相位 ",1)]),z("div",mA,[z("div",gA,[z("i",{class:"safe",style:ur({width:j.value.safe/J.value.combos.length*100+"%"})},null,4),z("i",{class:"risk",style:ur({width:j.value.risk/J.value.combos.length*100+"%"})},null,4),z("i",{class:"invalid",style:ur({width:j.value.invalid/J.value.combos.length*100+"%"})},null,4)]),z("div",null,[rt(" 进度 "+Ce(j.value.safe+j.value.risk+j.value.invalid)+"/"+Ce(J.value.combos.length)+" （",1),z("span",_A,"安全 "+Ce(j.value.safe),1),T[62]||(T[62]=rt(" · ",-1)),z("span",vA,"风险 "+Ce(j.value.risk),1),T[63]||(T[63]=rt(" · ",-1)),z("span",xA,"无效 "+Ce(j.value.invalid),1),rt(" · 待算 "+Ce(j.value.pending)+"） ",1)])]),z("div",SA,[T[64]||(T[64]=rt(" 已完成最大重叠面积： ",-1)),z("b",{class:Ln(j.value.maxArea>ut(Wr)?"bad":"good")},Ce(j.value.maxArea.toExponential(3))+" mm² ",3),j.value.worstComboIndex>=0?(Mt(),Et("span",MA,[z("button",{class:"mini",onClick:T[21]||(T[21]=N=>ze(j.value.worstComboIndex))},"在 3D 中定位最坏位置 (#"+Ce(j.value.worstComboIndex)+")",1)])):Qt("",!0)]),z("div",yA,[J.value.status==="running"?(Mt(),Et("button",{key:0,onClick:g,disabled:!ut(H).isActive(J.value.id)&&!ut(H).isBusy(J.value.id)},"取消",8,bA)):Qt("",!0),J.value.status==="cancelled"||j.value.pending>0?(Mt(),Et("button",{key:1,onClick:O,disabled:ut(H).isBusy(J.value.id)},"继续/恢复",8,EA)):Qt("",!0),z("button",{onClick:we,disabled:ut(H).isBusy(J.value.id)||j.value.risk===0},"重算全部风险",8,TA),z("button",{class:"del",onClick:Q},"删除作业")]),z("div",AA,"创建 "+Ce(et(J.value.createdAt))+" · 更新 "+Ce(et(J.value.updatedAt))+" · 完成 "+Ce(et(J.value.finishedAt)),1),Ne.value?(Mt(),Et("div",wA,[z("div",null,"最坏位置（已冻结到 3D 视图）：Δa="+Ce(Ie(Ne.value.da))+", Δs₁="+Ce(Ie(Ne.value.ds1))+", Δs₂="+Ce(Ie(Ne.value.ds2))+" "+Ce(ut(Vt)[e.value].label),1),z("div",null,[rt("实际中心距 a="+Ce(V(Ne.value.a))+"；啮合线参数 s="+Ce(V(Ne.value.s))+"； 重叠面积 ",1),z("b",CA,Ce(Ne.value.area.toExponential(3))+" mm²",1)]),z("button",{class:"mini",onClick:Je},"退出定位视图"),Xe.value?(Mt(),Et("span",RA,"求交中…")):Qt("",!0)])):Qt("",!0),z("div",PA,[T[65]||(T[65]=z("span",null,"结论筛选：",-1)),(Mt(),Et(mn,null,vs(["all","risk","safe","invalid"],N=>z("button",{key:N,class:Ln({active:pe.value===N}),onClick:Fe=>pe.value=N},Ce({all:"全部",risk:"风险",safe:"安全",invalid:"无效"}[N]),11,DA)),64))]),z("div",LA,[z("table",null,[z("thead",null,[z("tr",null,[T[66]||(T[66]=z("th",null,"#",-1)),z("th",null,"Δa ("+Ce(ut(Vt)[e.value].label)+")",1),T[67]||(T[67]=z("th",null,"Δs₁",-1)),T[68]||(T[68]=z("th",null,"Δs₂",-1)),T[69]||(T[69]=z("th",null,"结论",-1)),T[70]||(T[70]=z("th",null,"最大面积 mm²",-1)),T[71]||(T[71]=z("th",null,"最坏 s mm",-1)),T[72]||(T[72]=z("th",null,null,-1))])]),z("tbody",null,[(Mt(!0),Et(mn,null,vs(Se.value.slice(0,120),N=>(Mt(),Et("tr",{key:N.index,class:Ln("v-"+N.status)},[z("td",null,Ce(N.index),1),z("td",null,Ce(Ie(N.da)),1),z("td",null,Ce(Ie(N.ds1)),1),z("td",null,Ce(Ie(N.ds2)),1),z("td",null,[z("b",{class:Ln(N.status==="risk"?"bad":N.status==="safe"?"good":"warn")},Ce(N.status==="risk"?"风险":N.status==="safe"?"安全":N.status==="invalid"?"无效":"待算"),3),N.reason?(Mt(),Et("div",{key:0,class:"reason",title:N.reason},"原因："+Ce(N.reason),9,IA)):Qt("",!0)]),z("td",null,Ce(N.status==="pending"?"—":N.maxArea.toExponential(2)),1),z("td",null,Ce(N.worstS===null?"—":N.worstS.toFixed(3)),1),z("td",null,[N.status==="risk"?(Mt(),Et("button",{key:0,class:"mini",onClick:Fe=>ze(N.index)},"定位",8,UA)):Qt("",!0),z("button",{class:"mini",onClick:Fe=>se(N.index),disabled:ut(H).isBusy(J.value.id),title:"仅重算此组合"},"↻",8,NA)])],2))),128))])]),Se.value.length>120?(Mt(),Et("div",FA,"仅显示前 120 行（共 "+Ce(Se.value.length)+"），可用筛选缩小范围。",1)):Qt("",!0)])])):Qt("",!0)]),z("section",null,[T[81]||(T[81]=z("h2",null,"显示选项",-1)),z("label",OA,[Ft(z("input",{type:"checkbox","onUpdate:modelValue":T[22]||(T[22]=N=>m.showPitchCircle=N)},null,512),[[Ss,m.showPitchCircle]]),T[75]||(T[75]=rt(" 节圆/分度圆",-1))]),z("label",BA,[Ft(z("input",{type:"checkbox","onUpdate:modelValue":T[23]||(T[23]=N=>m.showBaseCircle=N)},null,512),[[Ss,m.showBaseCircle]]),T[76]||(T[76]=rt(" 基圆",-1))]),z("label",zA,[Ft(z("input",{type:"checkbox","onUpdate:modelValue":T[24]||(T[24]=N=>m.showAddendumCircle=N)},null,512),[[Ss,m.showAddendumCircle]]),T[77]||(T[77]=rt(" 齿顶圆",-1))]),z("label",VA,[Ft(z("input",{type:"checkbox","onUpdate:modelValue":T[25]||(T[25]=N=>m.showDedendumCircle=N)},null,512),[[Ss,m.showDedendumCircle]]),T[78]||(T[78]=rt(" 齿根圆",-1))]),z("label",kA,[Ft(z("input",{type:"checkbox","onUpdate:modelValue":T[26]||(T[26]=N=>m.showActionLine=N)},null,512),[[Ss,m.showActionLine]]),T[79]||(T[79]=rt(" 啮合线（理论/实际）",-1))]),z("label",HA,[Ft(z("input",{type:"checkbox","onUpdate:modelValue":T[27]||(T[27]=N=>m.showContact=N)},null,512),[[Ss,m.showContact]]),T[80]||(T[80]=rt(" 接触点",-1))])]),z("section",null,[T[82]||(T[82]=z("h2",null,"核对样本",-1)),z("div",GA,[z("button",{onClick:T[28]||(T[28]=N=>xe(20,40))},"20/40 标准"),z("button",{onClick:T[29]||(T[29]=N=>xe(17,17))},"17/17 临界"),z("button",{onClick:T[30]||(T[30]=N=>xe(16,40))},"16/40 根切"),z("button",{onClick:T[31]||(T[31]=N=>xe(12,40))},"12/40 极少齿")])])]),z("section",WA,[z("div",{ref_key:"host",ref:R,class:"canvas-host"},null,512),z("div",XA,[ye.value?(Mt(),Et("div",$A,[z("table",null,[z("thead",null,[z("tr",null,[T[83]||(T[83]=z("th",null,null,-1)),z("th",null,"齿轮 1（z₁="+Ce(t.z1)+"）",1),z("th",null,"齿轮 2（z₂="+Ce(t.z2)+"）",1)])]),z("tbody",null,[z("tr",null,[T[84]||(T[84]=z("td",null,"分度圆直径 d",-1)),z("td",null,Ce(V(ye.value.g1.pitchR*2)),1),z("td",null,Ce(V(ye.value.g2.pitchR*2)),1)]),z("tr",null,[T[85]||(T[85]=z("td",null,"基圆直径 d_b",-1)),z("td",null,Ce(V(ye.value.g1.baseR*2)),1),z("td",null,Ce(V(ye.value.g2.baseR*2)),1)]),z("tr",null,[T[86]||(T[86]=z("td",null,"齿顶圆 d_a",-1)),z("td",null,Ce(V(ye.value.g1.addendumR*2)),1),z("td",null,Ce(V(ye.value.g2.addendumR*2)),1)]),z("tr",null,[T[87]||(T[87]=z("td",null,"齿根圆 d_f",-1)),z("td",null,Ce(V(ye.value.g1.dedendumR*2)),1),z("td",null,Ce(V(ye.value.g2.dedendumR*2)),1)]),z("tr",null,[T[88]||(T[88]=z("td",null,"齿距 p = πm",-1)),z("td",null,Ce(V(ye.value.g1.circularPitch)),1),z("td",null,Ce(V(ye.value.g2.circularPitch)),1)]),z("tr",null,[T[89]||(T[89]=z("td",null,"基节 p_b",-1)),z("td",null,Ce(V(ye.value.g1.basePitch)),1),z("td",null,Ce(V(ye.value.g2.basePitch)),1)]),z("tr",null,[T[90]||(T[90]=z("td",null,"齿顶压力角 α_a",-1)),z("td",null,Ce((ye.value.g1.alphaTip/ut(ui)).toFixed(2))+"°",1),z("td",null,Ce((ye.value.g2.alphaTip/ut(ui)).toFixed(2))+"°",1)]),z("tr",null,[z("td",null,"根切风险 (z<"+Ce(ye.value.g1.zMinValue.toFixed(1))+")",1),z("td",{class:Ln(ye.value.g1.undercut?"bad":"good")},Ce(ye.value.g1.undercut?"根切 ❗":"安全"),3),z("td",{class:Ln(ye.value.g2.undercut?"bad":"good")},Ce(ye.value.g2.undercut?"根切 ❗":"安全"),3)])])]),z("div",qA,[T[100]||(T[100]=z("h3",null,"啮合检查",-1)),z("div",null,[T[91]||(T[91]=rt("标准中心距 a₀：",-1)),z("b",null,Ce(V(ye.value.mesh.a0)),1)]),z("div",null,[T[92]||(T[92]=rt("实际中心距 a：",-1)),z("b",null,Ce(V(ye.value.mesh.a)),1),rt("（Δa = "+Ce(V(ye.value.mesh.deltaA))+"）",1)]),z("div",null,[T[93]||(T[93]=rt("啮合角 α′：",-1)),z("b",null,Ce((ye.value.mesh.alphaPrime/ut(ui)).toFixed(3))+"°",1)]),z("div",null,[T[94]||(T[94]=rt("节圆半径 r₁′/r₂′：",-1)),z("b",null,Ce(V(ye.value.mesh.pitchR1))+" / "+Ce(V(ye.value.mesh.pitchR2)),1)]),z("div",null,[T[95]||(T[95]=rt("实际啮合线长度 g_α：",-1)),z("b",null,Ce(V(ye.value.mesh.pathOfContact)),1)]),z("div",null,[T[96]||(T[96]=rt("重合度 ε_α = g_α/p_b：",-1)),z("b",{class:Ln(ye.value.mesh.contactRatio<1?"bad":"good")},Ce(ye.value.mesh.contactRatio.toFixed(3)),3)]),z("div",null,[T[97]||(T[97]=rt("圆周/法向侧隙：",-1)),z("b",null,Ce(V(ye.value.mesh.backlashTangential))+" / "+Ce(V(ye.value.mesh.backlashNormal)),1)]),z("div",null,[T[98]||(T[98]=rt("顶隙 c：",-1)),z("b",null,Ce(V(ye.value.mesh.clearance12)),1)]),z("div",null,[T[99]||(T[99]=rt("基节一致：",-1)),z("b",{class:Ln(ye.value.mesh.basePitchMatch?"good":"bad")},Ce(ye.value.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),ye.value.mesh.warnings.length?(Mt(),Et("ul",YA,[(Mt(!0),Et(mn,null,vs(ye.value.mesh.warnings,(N,Fe)=>(Mt(),Et("li",{key:Fe},"⚠️ "+Ce(N),1))),128))])):Qt("",!0),T[101]||(T[101]=z("div",{class:"formula"}," 渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α； 啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。 ",-1))])])):Qt("",!0)])]),z("aside",KA,[z("section",null,[T[103]||(T[103]=z("h2",null,"案例（IndexedDB）",-1)),Ft(z("input",{"onUpdate:modelValue":T[32]||(T[32]=N=>X.value=N),placeholder:"案例名称"},null,512),[[Kt,X.value]]),Ft(z("textarea",{"onUpdate:modelValue":T[33]||(T[33]=N=>ee.value=N),placeholder:"备注（可选）",rows:"2"},null,512),[[Kt,ee.value]]),z("div",ZA,[z("button",{onClick:T[34]||(T[34]=N=>me(!0))},"保存（含轮廓）"),z("button",{onClick:T[35]||(T[35]=N=>me(!1))},"仅参数")]),z("div",JA,[z("button",{onClick:T[36]||(T[36]=N=>he(!0))},"导出 JSON+轮廓"),z("button",{onClick:T[37]||(T[37]=N=>he(!1))},"导出参数")]),z("label",QA,[T[102]||(T[102]=rt("导入 JSON ",-1)),z("input",{type:"file",accept:"application/json,.json",onChange:Ue,hidden:""},null,32)])]),z("section",null,[T[104]||(T[104]=z("h2",null,"已存案例",-1)),z("ul",jA,[(Mt(!0),Et(mn,null,vs(ce.value,N=>(Mt(),Et("li",{key:N.id},[z("div",ew,[z("b",null,Ce(N.name),1),z("span",null,Ce(N.gear1.z)+"/"+Ce(N.gear2.z)+" · m="+Ce(N.gear1.module)+" · α="+Ce(N.gear1.alphaDeg)+"°"+Ce(N.outlines?" · 含轮廓":""),1)]),z("div",tw,[z("button",{onClick:Fe=>ge(N)},"载入",8,nw),z("button",{class:"del",onClick:Fe=>ve(N.id)},"删",8,iw)])]))),128)),ce.value.length?Qt("",!0):(Mt(),Et("li",sw,"暂无案例"))])])])])]))}});yv(rw).mount("#app");
