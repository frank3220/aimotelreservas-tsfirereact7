(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var zf={exports:{}},Tl={},Bf={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function _S(){if(Ry)return Pe;Ry=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(b){return b===null||typeof b!="object"?null:(b=w&&b[w]||b["@@iterator"],typeof b=="function"?b:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,W={};function B(b,$,ye){this.props=b,this.context=$,this.refs=W,this.updater=ye||O}B.prototype.isReactComponent={},B.prototype.setState=function(b,$){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,$,"setState")},B.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function se(){}se.prototype=B.prototype;function he(b,$,ye){this.props=b,this.context=$,this.refs=W,this.updater=ye||O}var de=he.prototype=new se;de.constructor=he,z(de,B.prototype),de.isPureReactComponent=!0;var me=Array.isArray,ze=Object.prototype.hasOwnProperty,Re={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function C(b,$,ye){var Te,ke={},Ae=null,We=null;if($!=null)for(Te in $.ref!==void 0&&(We=$.ref),$.key!==void 0&&(Ae=""+$.key),$)ze.call($,Te)&&!P.hasOwnProperty(Te)&&(ke[Te]=$[Te]);var Fe=arguments.length-2;if(Fe===1)ke.children=ye;else if(1<Fe){for(var Ye=Array(Fe),tn=0;tn<Fe;tn++)Ye[tn]=arguments[tn+2];ke.children=Ye}if(b&&b.defaultProps)for(Te in Fe=b.defaultProps,Fe)ke[Te]===void 0&&(ke[Te]=Fe[Te]);return{$$typeof:n,type:b,key:Ae,ref:We,props:ke,_owner:Re.current}}function A(b,$){return{$$typeof:n,type:b.type,key:$,ref:b.ref,props:b.props,_owner:b._owner}}function D(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function N(b){var $={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ye){return $[ye]})}var L=/\/+/g;function R(b,$){return typeof b=="object"&&b!==null&&b.key!=null?N(""+b.key):$.toString(36)}function Ge(b,$,ye,Te,ke){var Ae=typeof b;(Ae==="undefined"||Ae==="boolean")&&(b=null);var We=!1;if(b===null)We=!0;else switch(Ae){case"string":case"number":We=!0;break;case"object":switch(b.$$typeof){case n:case e:We=!0}}if(We)return We=b,ke=ke(We),b=Te===""?"."+R(We,0):Te,me(ke)?(ye="",b!=null&&(ye=b.replace(L,"$&/")+"/"),Ge(ke,$,ye,"",function(tn){return tn})):ke!=null&&(D(ke)&&(ke=A(ke,ye+(!ke.key||We&&We.key===ke.key?"":(""+ke.key).replace(L,"$&/")+"/")+b)),$.push(ke)),1;if(We=0,Te=Te===""?".":Te+":",me(b))for(var Fe=0;Fe<b.length;Fe++){Ae=b[Fe];var Ye=Te+R(Ae,Fe);We+=Ge(Ae,$,ye,Ye,ke)}else if(Ye=T(b),typeof Ye=="function")for(b=Ye.call(b),Fe=0;!(Ae=b.next()).done;)Ae=Ae.value,Ye=Te+R(Ae,Fe++),We+=Ge(Ae,$,ye,Ye,ke);else if(Ae==="object")throw $=String(b),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return We}function yt(b,$,ye){if(b==null)return b;var Te=[],ke=0;return Ge(b,Te,"","",function(Ae){return $.call(ye,Ae,ke++)}),Te}function Ct(b){if(b._status===-1){var $=b._result;$=$(),$.then(function(ye){(b._status===0||b._status===-1)&&(b._status=1,b._result=ye)},function(ye){(b._status===0||b._status===-1)&&(b._status=2,b._result=ye)}),b._status===-1&&(b._status=0,b._result=$)}if(b._status===1)return b._result.default;throw b._result}var we={current:null},Y={transition:null},le={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Y,ReactCurrentOwner:Re};function te(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:yt,forEach:function(b,$,ye){yt(b,function(){$.apply(this,arguments)},ye)},count:function(b){var $=0;return yt(b,function(){$++}),$},toArray:function(b){return yt(b,function($){return $})||[]},only:function(b){if(!D(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Pe.Component=B,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=he,Pe.StrictMode=r,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Pe.act=te,Pe.cloneElement=function(b,$,ye){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Te=z({},b.props),ke=b.key,Ae=b.ref,We=b._owner;if($!=null){if($.ref!==void 0&&(Ae=$.ref,We=Re.current),$.key!==void 0&&(ke=""+$.key),b.type&&b.type.defaultProps)var Fe=b.type.defaultProps;for(Ye in $)ze.call($,Ye)&&!P.hasOwnProperty(Ye)&&(Te[Ye]=$[Ye]===void 0&&Fe!==void 0?Fe[Ye]:$[Ye])}var Ye=arguments.length-2;if(Ye===1)Te.children=ye;else if(1<Ye){Fe=Array(Ye);for(var tn=0;tn<Ye;tn++)Fe[tn]=arguments[tn+2];Te.children=Fe}return{$$typeof:n,type:b.type,key:ke,ref:Ae,props:Te,_owner:We}},Pe.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:a,_context:b},b.Consumer=b},Pe.createElement=C,Pe.createFactory=function(b){var $=C.bind(null,b);return $.type=b,$},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(b){return{$$typeof:d,render:b}},Pe.isValidElement=D,Pe.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:Ct}},Pe.memo=function(b,$){return{$$typeof:_,type:b,compare:$===void 0?null:$}},Pe.startTransition=function(b){var $=Y.transition;Y.transition={};try{b()}finally{Y.transition=$}},Pe.unstable_act=te,Pe.useCallback=function(b,$){return we.current.useCallback(b,$)},Pe.useContext=function(b){return we.current.useContext(b)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(b){return we.current.useDeferredValue(b)},Pe.useEffect=function(b,$){return we.current.useEffect(b,$)},Pe.useId=function(){return we.current.useId()},Pe.useImperativeHandle=function(b,$,ye){return we.current.useImperativeHandle(b,$,ye)},Pe.useInsertionEffect=function(b,$){return we.current.useInsertionEffect(b,$)},Pe.useLayoutEffect=function(b,$){return we.current.useLayoutEffect(b,$)},Pe.useMemo=function(b,$){return we.current.useMemo(b,$)},Pe.useReducer=function(b,$,ye){return we.current.useReducer(b,$,ye)},Pe.useRef=function(b){return we.current.useRef(b)},Pe.useState=function(b){return we.current.useState(b)},Pe.useSyncExternalStore=function(b,$,ye){return we.current.useSyncExternalStore(b,$,ye)},Pe.useTransition=function(){return we.current.useTransition()},Pe.version="18.3.1",Pe}var Ay;function nm(){return Ay||(Ay=1,Bf.exports=_S()),Bf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function yS(){if(ky)return Tl;ky=1;var n=nm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,_){var v,w={},T=null,O=null;_!==void 0&&(T=""+_),p.key!==void 0&&(T=""+p.key),p.ref!==void 0&&(O=p.ref);for(v in p)r.call(p,v)&&!a.hasOwnProperty(v)&&(w[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)w[v]===void 0&&(w[v]=p[v]);return{$$typeof:e,type:d,key:T,ref:O,props:w,_owner:o.current}}return Tl.Fragment=t,Tl.jsx=u,Tl.jsxs=u,Tl}var Py;function vS(){return Py||(Py=1,zf.exports=yS()),zf.exports}var H=vS(),Mc={},Hf={exports:{}},fn={},$f={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function ES(){return Ny||(Ny=1,(function(n){function e(Y,le){var te=Y.length;Y.push(le);e:for(;0<te;){var b=te-1>>>1,$=Y[b];if(0<o($,le))Y[b]=le,Y[te]=$,te=b;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var le=Y[0],te=Y.pop();if(te!==le){Y[0]=te;e:for(var b=0,$=Y.length,ye=$>>>1;b<ye;){var Te=2*(b+1)-1,ke=Y[Te],Ae=Te+1,We=Y[Ae];if(0>o(ke,te))Ae<$&&0>o(We,ke)?(Y[b]=We,Y[Ae]=te,b=Ae):(Y[b]=ke,Y[Te]=te,b=Te);else if(Ae<$&&0>o(We,te))Y[b]=We,Y[Ae]=te,b=Ae;else break e}}return le}function o(Y,le){var te=Y.sortIndex-le.sortIndex;return te!==0?te:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],_=[],v=1,w=null,T=3,O=!1,z=!1,W=!1,B=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(Y){for(var le=t(_);le!==null;){if(le.callback===null)r(_);else if(le.startTime<=Y)r(_),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(_)}}function me(Y){if(W=!1,de(Y),!z)if(t(p)!==null)z=!0,Ct(ze);else{var le=t(_);le!==null&&we(me,le.startTime-Y)}}function ze(Y,le){z=!1,W&&(W=!1,se(C),C=-1),O=!0;var te=T;try{for(de(le),w=t(p);w!==null&&(!(w.expirationTime>le)||Y&&!N());){var b=w.callback;if(typeof b=="function"){w.callback=null,T=w.priorityLevel;var $=b(w.expirationTime<=le);le=n.unstable_now(),typeof $=="function"?w.callback=$:w===t(p)&&r(p),de(le)}else r(p);w=t(p)}if(w!==null)var ye=!0;else{var Te=t(_);Te!==null&&we(me,Te.startTime-le),ye=!1}return ye}finally{w=null,T=te,O=!1}}var Re=!1,P=null,C=-1,A=5,D=-1;function N(){return!(n.unstable_now()-D<A)}function L(){if(P!==null){var Y=n.unstable_now();D=Y;var le=!0;try{le=P(!0,Y)}finally{le?R():(Re=!1,P=null)}}else Re=!1}var R;if(typeof he=="function")R=function(){he(L)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,yt=Ge.port2;Ge.port1.onmessage=L,R=function(){yt.postMessage(null)}}else R=function(){B(L,0)};function Ct(Y){P=Y,Re||(Re=!0,R())}function we(Y,le){C=B(function(){Y(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){z||O||(z=!0,Ct(ze))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(Y){switch(T){case 1:case 2:case 3:var le=3;break;default:le=T}var te=T;T=le;try{return Y()}finally{T=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var te=T;T=Y;try{return le()}finally{T=te}},n.unstable_scheduleCallback=function(Y,le,te){var b=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?b+te:b):te=b,Y){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Y={id:v++,callback:le,priorityLevel:Y,startTime:te,expirationTime:$,sortIndex:-1},te>b?(Y.sortIndex=te,e(_,Y),t(p)===null&&Y===t(_)&&(W?(se(C),C=-1):W=!0,we(me,te-b))):(Y.sortIndex=$,e(p,Y),z||O||(z=!0,Ct(ze))),Y},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(Y){var le=T;return function(){var te=T;T=le;try{return Y.apply(this,arguments)}finally{T=te}}}})(Wf)),Wf}var xy;function wS(){return xy||(xy=1,$f.exports=ES()),$f.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function TS(){if(Dy)return fn;Dy=1;var n=nm(),e=wS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return p.call(w,i)?!0:p.call(v,i)?!1:_.test(i)?w[i]=!0:(v[i]=!0,!1)}function O(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function z(i,s,l,h){if(s===null||typeof s>"u"||O(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function W(i,s,l,h,f,m,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=m,this.removeEmptyString=E}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new W(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];B[s]=new W(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new W(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new W(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new W(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new W(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new W(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new W(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new W(i,5,!1,i.toLowerCase(),null,!1,!1)});var se=/[\-:]([a-z])/g;function he(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(se,he);B[s]=new W(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(se,he);B[s]=new W(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(se,he);B[s]=new W(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new W(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new W(i,1,!1,i.toLowerCase(),null,!0,!0)});function de(i,s,l,h){var f=B.hasOwnProperty(s)?B[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(z(s,l,f,h)&&(l=null),h||f===null?T(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):f.mustUseProperty?i[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?i.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var me=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Re=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=Y&&i[Y]||i["@@iterator"],typeof i=="function"?i:null)}var te=Object.assign,b;function $(i){if(b===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+i}var ye=!1;function Te(i,s){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var h=U}Reflect.construct(i,[],s)}else{try{s.call()}catch(U){h=U}i.call(s.prototype)}else{try{throw Error()}catch(U){h=U}i()}}catch(U){if(U&&h&&typeof U.stack=="string"){for(var f=U.stack.split(`
`),m=h.stack.split(`
`),E=f.length-1,S=m.length-1;1<=E&&0<=S&&f[E]!==m[S];)S--;for(;1<=E&&0<=S;E--,S--)if(f[E]!==m[S]){if(E!==1||S!==1)do if(E--,S--,0>S||f[E]!==m[S]){var k=`
`+f[E].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=E&&0<=S);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?$(i):""}function ke(i){switch(i.tag){case 5:return $(i.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return i=Te(i.type,!1),i;case 11:return i=Te(i.type.render,!1),i;case 1:return i=Te(i.type,!0),i;default:return""}}function Ae(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case P:return"Fragment";case Re:return"Portal";case A:return"Profiler";case C:return"StrictMode";case R:return"Suspense";case Ge:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case N:return(i.displayName||"Context")+".Consumer";case D:return(i._context.displayName||"Context")+".Provider";case L:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case yt:return s=i.displayName||null,s!==null?s:Ae(i.type)||"Memo";case Ct:s=i._payload,i=i._init;try{return Ae(i(s))}catch{}}return null}function We(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ye(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tn(i){var s=Ye(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){h=""+E,m.call(this,E)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Zs(i){i._valueTracker||(i._valueTracker=tn(i))}function ka(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Ye(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function li(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function eo(i,s){var l=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function wu(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Fe(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function to(i,s){s=s.checked,s!=null&&de(i,"checked",s,!1)}function cs(i,s){to(i,s);var l=Fe(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?vt(i,s.type,l):s.hasOwnProperty("defaultValue")&&vt(i,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Pa(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function vt(i,s,l){(s!=="number"||li(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var ft=Array.isArray;function Fn(i,s,l,h){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Fe(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,h&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Na(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function xa(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(ft(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Fe(l)}}function Tu(i,s){var l=Fe(s.value),h=Fe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function ui(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function Da(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?Da(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ci,Iu=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,f)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ci.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function hs(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Su=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(i){Su.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),hi[s]=hi[i]})});function di(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||hi.hasOwnProperty(i)&&hi[i]?(""+s).trim():s+"px"}function ro(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=di(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,f):i[l]=f}}var ba=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Un(i,s){if(s){if(ba[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function io(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function so(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var xr=null,Dr=null,ut=null;function Oa(i){if(i=al(i)){if(typeof xr!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Xu(s),xr(i.stateNode,i.type,s))}}function pi(i){Dr?ut?ut.push(i):ut=[i]:Dr=i}function mi(){if(Dr){var i=Dr,s=ut;if(ut=Dr=null,Oa(i),s)for(i=0;i<s.length;i++)Oa(s[i])}}function Cu(i,s){return i(s)}function Ru(){}var er=!1;function Au(i,s,l){if(er)return i(s,l);er=!0;try{return Cu(i,s,l)}finally{er=!1,(Dr!==null||ut!==null)&&(Ru(),mi())}}function ds(i,s){var l=i.stateNode;if(l===null)return null;var h=Xu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var gi=!1;if(d)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){gi=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{gi=!1}function ku(i,s,l,h,f,m,E,S,k){var U=Array.prototype.slice.call(arguments,3);try{s.apply(l,U)}catch(K){this.onError(K)}}var br=!1,tr=null,oo=!1,Rn=null,Pu={onError:function(i){br=!0,tr=i}};function Nu(i,s,l,h,f,m,E,S,k){br=!1,tr=null,ku.apply(Pu,arguments)}function La(i,s,l,h,f,m,E,S,k){if(Nu.apply(this,arguments),br){if(br){var U=tr;br=!1,tr=null}else throw Error(t(198));oo||(oo=!0,Rn=U)}}function jn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Ma(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function xu(i){if(jn(i)!==i)throw Error(t(188))}function Du(i){var s=i.alternate;if(!s){if(s=jn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var f=l.return;if(f===null)break;var m=f.alternate;if(m===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===l)return xu(f),i;if(m===h)return xu(f),s;m=m.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=m;else{for(var E=!1,S=f.child;S;){if(S===l){E=!0,l=f,h=m;break}if(S===h){E=!0,h=f,l=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===l){E=!0,l=m,h=f;break}if(S===h){E=!0,h=m,l=f;break}S=S.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function bu(i){return i=Du(i),i!==null?fs(i):null}function fs(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=fs(i);if(s!==null)return s;i=i.sibling}return null}var Va=e.unstable_scheduleCallback,ao=e.unstable_cancelCallback,ps=e.unstable_shouldYield,Or=e.unstable_requestPaint,tt=e.unstable_now,_d=e.unstable_getCurrentPriorityLevel,lo=e.unstable_ImmediatePriority,Fa=e.unstable_UserBlockingPriority,ms=e.unstable_NormalPriority,Ua=e.unstable_LowPriority,uo=e.unstable_IdlePriority,gs=null,mn=null;function Ou(i){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(gs,i,void 0,(i.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:_s,nr=Math.log,An=Math.LN2;function _s(i){return i>>>=0,i===0?32:31-(nr(i)/An|0)|0}var rr=64,yi=4194304;function $e(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Lr(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,f=i.suspendedLanes,m=i.pingedLanes,E=l&268435455;if(E!==0){var S=E&~f;S!==0?h=$e(S):(m&=E,m!==0&&(h=$e(m)))}else E=l&~f,E!==0?h=$e(E):m!==0&&(h=$e(m));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,m=s&-s,f>=m||f===16&&(m&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-gn(s),f=1<<l,h|=i[l],s&=~f;return h}function ys(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vs(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes;0<m;){var E=31-gn(m),S=1<<E,k=f[E];k===-1?((S&l)===0||(S&h)!==0)&&(f[E]=ys(S,s)):k<=s&&(i.expiredLanes|=S),m&=~S}}function ja(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function za(){var i=rr;return rr<<=1,(rr&4194240)===0&&(rr=64),i}function Ba(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Es(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-gn(s),i[s]=l}function yd(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var f=31-gn(l),m=1<<f;s[f]=0,h[f]=-1,i[f]=-1,l&=~m}}function Ha(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-gn(l),f=1<<h;f&s|i[h]&s&&(i[h]|=s),l&=~f}}var Oe=0;function ir(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var $a,co,Wa,qa,Ga,sr=!1,ho=[],or=null,ar=null,Vt=null,ws=new Map,Mr=new Map,_n=[],Lu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vi(i,s){switch(i){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":ws.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(s.pointerId)}}function zn(i,s,l,h,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:m,targetContainers:[f]},s!==null&&(s=al(s),s!==null&&co(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function Mu(i,s,l,h,f){switch(s){case"focusin":return or=zn(or,i,s,l,h,f),!0;case"dragenter":return ar=zn(ar,i,s,l,h,f),!0;case"mouseover":return Vt=zn(Vt,i,s,l,h,f),!0;case"pointerover":var m=f.pointerId;return ws.set(m,zn(ws.get(m)||null,i,s,l,h,f)),!0;case"gotpointercapture":return m=f.pointerId,Mr.set(m,zn(Mr.get(m)||null,i,s,l,h,f)),!0}return!1}function fo(i){var s=Cs(i.target);if(s!==null){var l=jn(s);if(l!==null){if(s=l.tag,s===13){if(s=Ma(l),s!==null){i.blockedOn=s,Ga(i.priority,function(){Wa(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Xe(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=po(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);fi=h,l.target.dispatchEvent(h),fi=null}else return s=al(l),s!==null&&co(s),i.blockedOn=l,!1;s.shift()}return!0}function Vu(i,s,l){Xe(i)&&l.delete(s)}function vd(){sr=!1,or!==null&&Xe(or)&&(or=null),ar!==null&&Xe(ar)&&(ar=null),Vt!==null&&Xe(Vt)&&(Vt=null),ws.forEach(Vu),Mr.forEach(Vu)}function Ei(i,s){i.blockedOn===s&&(i.blockedOn=null,sr||(sr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vd)))}function wi(i){function s(f){return Ei(f,i)}if(0<ho.length){Ei(ho[0],i);for(var l=1;l<ho.length;l++){var h=ho[l];h.blockedOn===i&&(h.blockedOn=null)}}for(or!==null&&Ei(or,i),ar!==null&&Ei(ar,i),Vt!==null&&Ei(Vt,i),ws.forEach(s),Mr.forEach(s),l=0;l<_n.length;l++)h=_n[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<_n.length&&(l=_n[0],l.blockedOn===null);)fo(l),l.blockedOn===null&&_n.shift()}var Vr=me.ReactCurrentBatchConfig,Fr=!0;function lr(i,s,l,h){var f=Oe,m=Vr.transition;Vr.transition=null;try{Oe=1,Ka(i,s,l,h)}finally{Oe=f,Vr.transition=m}}function Fu(i,s,l,h){var f=Oe,m=Vr.transition;Vr.transition=null;try{Oe=4,Ka(i,s,l,h)}finally{Oe=f,Vr.transition=m}}function Ka(i,s,l,h){if(Fr){var f=po(i,s,l,h);if(f===null)Nd(i,s,h,ur,l),vi(i,h);else if(Mu(f,i,s,l,h))h.stopPropagation();else if(vi(i,h),s&4&&-1<Lu.indexOf(i)){for(;f!==null;){var m=al(f);if(m!==null&&$a(m),m=po(i,s,l,h),m===null&&Nd(i,s,h,ur,l),m===f)break;f=m}f!==null&&h.stopPropagation()}else Nd(i,s,h,null,l)}}var ur=null;function po(i,s,l,h){if(ur=null,i=so(h),i=Cs(i),i!==null)if(s=jn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Ma(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ur=i,null}function mo(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case lo:return 1;case Fa:return 4;case ms:case Ua:return 16;case uo:return 536870912;default:return 16}default:return 16}}var yn=null,go=null,Ur=null;function Uu(){if(Ur)return Ur;var i,s=go,l=s.length,h,f="value"in yn?yn.value:yn.textContent,m=f.length;for(i=0;i<l&&s[i]===f[i];i++);var E=l-i;for(h=1;h<=E&&s[l-h]===f[m-h];h++);return Ur=f.slice(i,1<h?1-h:void 0)}function Ts(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cr(){return!0}function Qa(){return!1}function Wt(i){function s(l,h,f,m,E){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(l=i[S],this[S]=l?l(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?cr:Qa,this.isPropagationStopped=Qa,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),s}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=Wt(hr),Ti=te({},hr,{view:0,detail:0}),_o=Wt(Ti),yo,vo,vn,Ss=te({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==vn&&(vn&&i.type==="mousemove"?(yo=i.screenX-vn.screenX,vo=i.screenY-vn.screenY):vo=yo=0,vn=i),yo)},movementY:function(i){return"movementY"in i?i.movementY:vo}}),Ya=Wt(Ss),ju=te({},Ss,{dataTransfer:0}),zu=Wt(ju),Eo=te({},Ti,{relatedTarget:0}),Ft=Wt(Eo),Bu=te({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hu=Wt(Bu),Ii=te({},hr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),c=Wt(Ii),g=te({},hr,{data:0}),y=Wt(g),I={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=j[i])?!!s[i]:!1}function Ie(){return Z}var pt=te({},Ti,{key:function(i){if(i.key){var s=I[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ts(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?V[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(i){return i.type==="keypress"?Ts(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ts(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),qe=Wt(pt),Et=te({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),En=Wt(Et),jr=te({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),dr=Wt(jr),fr=te({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wo=Wt(fr),Xa=te({},Ss,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Wt(Xa),d0=[9,13,27,32],Ed=d&&"CompositionEvent"in window,Ja=null;d&&"documentMode"in document&&(Ja=document.documentMode);var f0=d&&"TextEvent"in window&&!Ja,yg=d&&(!Ed||Ja&&8<Ja&&11>=Ja),vg=" ",Eg=!1;function wg(i,s){switch(i){case"keyup":return d0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var To=!1;function p0(i,s){switch(i){case"compositionend":return Tg(s);case"keypress":return s.which!==32?null:(Eg=!0,vg);case"textInput":return i=s.data,i===vg&&Eg?null:i;default:return null}}function m0(i,s){if(To)return i==="compositionend"||!Ed&&wg(i,s)?(i=Uu(),Ur=go=yn=null,To=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return yg&&s.locale!=="ko"?null:s.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!g0[i.type]:s==="textarea"}function Sg(i,s,l,h){pi(h),s=Ku(s,"onChange"),0<s.length&&(l=new Is("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var Za=null,el=null;function _0(i){Bg(i,0)}function $u(i){var s=Ao(i);if(ka(s))return i}function y0(i,s){if(i==="change")return s}var Cg=!1;if(d){var wd;if(d){var Td="oninput"in document;if(!Td){var Rg=document.createElement("div");Rg.setAttribute("oninput","return;"),Td=typeof Rg.oninput=="function"}wd=Td}else wd=!1;Cg=wd&&(!document.documentMode||9<document.documentMode)}function Ag(){Za&&(Za.detachEvent("onpropertychange",kg),el=Za=null)}function kg(i){if(i.propertyName==="value"&&$u(el)){var s=[];Sg(s,el,i,so(i)),Au(_0,s)}}function v0(i,s,l){i==="focusin"?(Ag(),Za=s,el=l,Za.attachEvent("onpropertychange",kg)):i==="focusout"&&Ag()}function E0(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return $u(el)}function w0(i,s){if(i==="click")return $u(s)}function T0(i,s){if(i==="input"||i==="change")return $u(s)}function I0(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Bn=typeof Object.is=="function"?Object.is:I0;function tl(i,s){if(Bn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!Bn(i[f],s[f]))return!1}return!0}function Pg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ng(i,s){var l=Pg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Pg(l)}}function xg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?xg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Dg(){for(var i=window,s=li();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=li(i.document)}return s}function Id(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function S0(i){var s=Dg(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&xg(l.ownerDocument.documentElement,l)){if(h!==null&&Id(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var f=l.textContent.length,m=Math.min(h.start,f);h=h.end===void 0?m:Math.min(h.end,f),!i.extend&&m>h&&(f=h,h=m,m=f),f=Ng(l,m);var E=Ng(l,h);f&&E&&(i.rangeCount!==1||i.anchorNode!==f.node||i.anchorOffset!==f.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),i.removeAllRanges(),m>h?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var C0=d&&"documentMode"in document&&11>=document.documentMode,Io=null,Sd=null,nl=null,Cd=!1;function bg(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cd||Io==null||Io!==li(h)||(h=Io,"selectionStart"in h&&Id(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),nl&&tl(nl,h)||(nl=h,h=Ku(Sd,"onSelect"),0<h.length&&(s=new Is("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=Io)))}function Wu(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var So={animationend:Wu("Animation","AnimationEnd"),animationiteration:Wu("Animation","AnimationIteration"),animationstart:Wu("Animation","AnimationStart"),transitionend:Wu("Transition","TransitionEnd")},Rd={},Og={};d&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function qu(i){if(Rd[i])return Rd[i];if(!So[i])return i;var s=So[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Og)return Rd[i]=s[l];return i}var Lg=qu("animationend"),Mg=qu("animationiteration"),Vg=qu("animationstart"),Fg=qu("transitionend"),Ug=new Map,jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(i,s){Ug.set(i,s),a(s,[i])}for(var Ad=0;Ad<jg.length;Ad++){var kd=jg[Ad],R0=kd.toLowerCase(),A0=kd[0].toUpperCase()+kd.slice(1);Si(R0,"on"+A0)}Si(Lg,"onAnimationEnd"),Si(Mg,"onAnimationIteration"),Si(Vg,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Fg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));function zg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,La(h,s,void 0,i),i.currentTarget=null}function Bg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],f=h.event;h=h.listeners;e:{var m=void 0;if(s)for(var E=h.length-1;0<=E;E--){var S=h[E],k=S.instance,U=S.currentTarget;if(S=S.listener,k!==m&&f.isPropagationStopped())break e;zg(f,S,U),m=k}else for(E=0;E<h.length;E++){if(S=h[E],k=S.instance,U=S.currentTarget,S=S.listener,k!==m&&f.isPropagationStopped())break e;zg(f,S,U),m=k}}}if(oo)throw i=Rn,oo=!1,Rn=null,i}function nt(i,s){var l=s[Md];l===void 0&&(l=s[Md]=new Set);var h=i+"__bubble";l.has(h)||(Hg(s,i,2,!1),l.add(h))}function Pd(i,s,l){var h=0;s&&(h|=4),Hg(l,i,h,s)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function il(i){if(!i[Gu]){i[Gu]=!0,r.forEach(function(l){l!=="selectionchange"&&(k0.has(l)||Pd(l,!1,i),Pd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Gu]||(s[Gu]=!0,Pd("selectionchange",!1,s))}}function Hg(i,s,l,h){switch(mo(s)){case 1:var f=lr;break;case 4:f=Fu;break;default:f=Ka}l=f.bind(null,s,l,i),f=void 0,!gi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function Nd(i,s,l,h,f){var m=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var S=h.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(E===4)for(E=h.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;E=E.return}for(;S!==null;){if(E=Cs(S),E===null)return;if(k=E.tag,k===5||k===6){h=m=E;continue e}S=S.parentNode}}h=h.return}Au(function(){var U=m,K=so(l),Q=[];e:{var G=Ug.get(i);if(G!==void 0){var ne=Is,oe=i;switch(i){case"keypress":if(Ts(l)===0)break e;case"keydown":case"keyup":ne=qe;break;case"focusin":oe="focus",ne=Ft;break;case"focusout":oe="blur",ne=Ft;break;case"beforeblur":case"afterblur":ne=Ft;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=zu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=dr;break;case Lg:case Mg:case Vg:ne=Hu;break;case Fg:ne=wo;break;case"scroll":ne=_o;break;case"wheel":ne=h0;break;case"copy":case"cut":case"paste":ne=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=En}var ae=(s&4)!==0,mt=!ae&&i==="scroll",M=ae?G!==null?G+"Capture":null:G;ae=[];for(var x=U,F;x!==null;){F=x;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,M!==null&&(X=ds(x,M),X!=null&&ae.push(sl(x,X,F)))),mt)break;x=x.return}0<ae.length&&(G=new ne(G,oe,null,l,K),Q.push({event:G,listeners:ae}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",ne=i==="mouseout"||i==="pointerout",G&&l!==fi&&(oe=l.relatedTarget||l.fromElement)&&(Cs(oe)||oe[zr]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(oe=l.relatedTarget||l.toElement,ne=U,oe=oe?Cs(oe):null,oe!==null&&(mt=jn(oe),oe!==mt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=U),ne!==oe)){if(ae=Ya,X="onMouseLeave",M="onMouseEnter",x="mouse",(i==="pointerout"||i==="pointerover")&&(ae=En,X="onPointerLeave",M="onPointerEnter",x="pointer"),mt=ne==null?G:Ao(ne),F=oe==null?G:Ao(oe),G=new ae(X,x+"leave",ne,l,K),G.target=mt,G.relatedTarget=F,X=null,Cs(K)===U&&(ae=new ae(M,x+"enter",oe,l,K),ae.target=F,ae.relatedTarget=mt,X=ae),mt=X,ne&&oe)t:{for(ae=ne,M=oe,x=0,F=ae;F;F=Co(F))x++;for(F=0,X=M;X;X=Co(X))F++;for(;0<x-F;)ae=Co(ae),x--;for(;0<F-x;)M=Co(M),F--;for(;x--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Co(ae),M=Co(M)}ae=null}else ae=null;ne!==null&&$g(Q,G,ne,ae,!1),oe!==null&&mt!==null&&$g(Q,mt,oe,ae,!0)}}e:{if(G=U?Ao(U):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var ue=y0;else if(Ig(G))if(Cg)ue=T0;else{ue=E0;var fe=v0}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ue=w0);if(ue&&(ue=ue(i,U))){Sg(Q,ue,l,K);break e}fe&&fe(i,G,U),i==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&vt(G,"number",G.value)}switch(fe=U?Ao(U):window,i){case"focusin":(Ig(fe)||fe.contentEditable==="true")&&(Io=fe,Sd=U,nl=null);break;case"focusout":nl=Sd=Io=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,bg(Q,l,K);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":bg(Q,l,K)}var pe;if(Ed)e:{switch(i){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else To?wg(i,l)&&(ve="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ve="onCompositionStart");ve&&(yg&&l.locale!=="ko"&&(To||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&To&&(pe=Uu()):(yn=K,go="value"in yn?yn.value:yn.textContent,To=!0)),fe=Ku(U,ve),0<fe.length&&(ve=new y(ve,i,null,l,K),Q.push({event:ve,listeners:fe}),pe?ve.data=pe:(pe=Tg(l),pe!==null&&(ve.data=pe)))),(pe=f0?p0(i,l):m0(i,l))&&(U=Ku(U,"onBeforeInput"),0<U.length&&(K=new y("onBeforeInput","beforeinput",null,l,K),Q.push({event:K,listeners:U}),K.data=pe))}Bg(Q,s)})}function sl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Ku(i,s){for(var l=s+"Capture",h=[];i!==null;){var f=i,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=ds(i,l),m!=null&&h.unshift(sl(i,m,f)),m=ds(i,s),m!=null&&h.push(sl(i,m,f))),i=i.return}return h}function Co(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function $g(i,s,l,h,f){for(var m=s._reactName,E=[];l!==null&&l!==h;){var S=l,k=S.alternate,U=S.stateNode;if(k!==null&&k===h)break;S.tag===5&&U!==null&&(S=U,f?(k=ds(l,m),k!=null&&E.unshift(sl(l,k,S))):f||(k=ds(l,m),k!=null&&E.push(sl(l,k,S)))),l=l.return}E.length!==0&&i.push({event:s,listeners:E})}var P0=/\r\n?/g,N0=/\u0000|\uFFFD/g;function Wg(i){return(typeof i=="string"?i:""+i).replace(P0,`
`).replace(N0,"")}function Qu(i,s,l){if(s=Wg(s),Wg(i)!==s&&l)throw Error(t(425))}function Yu(){}var xd=null,Dd=null;function bd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(i){return qg.resolve(null).then(i).catch(b0)}:Od;function b0(i){setTimeout(function(){throw i})}function Ld(i,s){var l=s,h=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){i.removeChild(f),wi(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);wi(s)}function Ci(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Gg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),pr="__reactFiber$"+Ro,ol="__reactProps$"+Ro,zr="__reactContainer$"+Ro,Md="__reactEvents$"+Ro,O0="__reactListeners$"+Ro,L0="__reactHandles$"+Ro;function Cs(i){var s=i[pr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[zr]||l[pr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Gg(i);i!==null;){if(l=i[pr])return l;i=Gg(i)}return s}i=l,l=i.parentNode}return null}function al(i){return i=i[pr]||i[zr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ao(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Xu(i){return i[ol]||null}var Vd=[],ko=-1;function Ri(i){return{current:i}}function rt(i){0>ko||(i.current=Vd[ko],Vd[ko]=null,ko--)}function Je(i,s){ko++,Vd[ko]=i.current,i.current=s}var Ai={},qt=Ri(Ai),ln=Ri(!1),Rs=Ai;function Po(i,s){var l=i.type.contextTypes;if(!l)return Ai;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in l)f[m]=s[m];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=f),f}function un(i){return i=i.childContextTypes,i!=null}function Ju(){rt(ln),rt(qt)}function Kg(i,s,l){if(qt.current!==Ai)throw Error(t(168));Je(qt,s),Je(ln,l)}function Qg(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,We(i)||"Unknown",f));return te({},l,h)}function Zu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ai,Rs=qt.current,Je(qt,i),Je(ln,ln.current),!0}function Yg(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Qg(i,s,Rs),h.__reactInternalMemoizedMergedChildContext=i,rt(ln),rt(qt),Je(qt,i)):rt(ln),Je(ln,l)}var Br=null,ec=!1,Fd=!1;function Xg(i){Br===null?Br=[i]:Br.push(i)}function M0(i){ec=!0,Xg(i)}function ki(){if(!Fd&&Br!==null){Fd=!0;var i=0,s=Oe;try{var l=Br;for(Oe=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Br=null,ec=!1}catch(f){throw Br!==null&&(Br=Br.slice(i+1)),Va(lo,ki),f}finally{Oe=s,Fd=!1}}return null}var No=[],xo=0,tc=null,nc=0,kn=[],Pn=0,As=null,Hr=1,$r="";function ks(i,s){No[xo++]=nc,No[xo++]=tc,tc=i,nc=s}function Jg(i,s,l){kn[Pn++]=Hr,kn[Pn++]=$r,kn[Pn++]=As,As=i;var h=Hr;i=$r;var f=32-gn(h)-1;h&=~(1<<f),l+=1;var m=32-gn(s)+f;if(30<m){var E=f-f%5;m=(h&(1<<E)-1).toString(32),h>>=E,f-=E,Hr=1<<32-gn(s)+f|l<<f|h,$r=m+i}else Hr=1<<m|l<<f|h,$r=i}function Ud(i){i.return!==null&&(ks(i,1),Jg(i,1,0))}function jd(i){for(;i===tc;)tc=No[--xo],No[xo]=null,nc=No[--xo],No[xo]=null;for(;i===As;)As=kn[--Pn],kn[Pn]=null,$r=kn[--Pn],kn[Pn]=null,Hr=kn[--Pn],kn[Pn]=null}var wn=null,Tn=null,it=!1,Hn=null;function Zg(i,s){var l=bn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function e_(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,wn=i,Tn=Ci(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,wn=i,Tn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=As!==null?{id:Hr,overflow:$r}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=bn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,wn=i,Tn=null,!0):!1;default:return!1}}function zd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Bd(i){if(it){var s=Tn;if(s){var l=s;if(!e_(i,s)){if(zd(i))throw Error(t(418));s=Ci(l.nextSibling);var h=wn;s&&e_(i,s)?Zg(h,l):(i.flags=i.flags&-4097|2,it=!1,wn=i)}}else{if(zd(i))throw Error(t(418));i.flags=i.flags&-4097|2,it=!1,wn=i}}}function t_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;wn=i}function rc(i){if(i!==wn)return!1;if(!it)return t_(i),it=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!bd(i.type,i.memoizedProps)),s&&(s=Tn)){if(zd(i))throw n_(),Error(t(418));for(;s;)Zg(i,s),s=Ci(s.nextSibling)}if(t_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Tn=Ci(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Tn=null}}else Tn=wn?Ci(i.stateNode.nextSibling):null;return!0}function n_(){for(var i=Tn;i;)i=Ci(i.nextSibling)}function Do(){Tn=wn=null,it=!1}function Hd(i){Hn===null?Hn=[i]:Hn.push(i)}var V0=me.ReactCurrentBatchConfig;function ll(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var f=h,m=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(E){var S=f.refs;E===null?delete S[m]:S[m]=E},s._stringRef=m,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function ic(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function r_(i){var s=i._init;return s(i._payload)}function i_(i){function s(M,x){if(i){var F=M.deletions;F===null?(M.deletions=[x],M.flags|=16):F.push(x)}}function l(M,x){if(!i)return null;for(;x!==null;)s(M,x),x=x.sibling;return null}function h(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function f(M,x){return M=Mi(M,x),M.index=0,M.sibling=null,M}function m(M,x,F){return M.index=F,i?(F=M.alternate,F!==null?(F=F.index,F<x?(M.flags|=2,x):F):(M.flags|=2,x)):(M.flags|=1048576,x)}function E(M){return i&&M.alternate===null&&(M.flags|=2),M}function S(M,x,F,X){return x===null||x.tag!==6?(x=Lf(F,M.mode,X),x.return=M,x):(x=f(x,F),x.return=M,x)}function k(M,x,F,X){var ue=F.type;return ue===P?K(M,x,F.props.children,X,F.key):x!==null&&(x.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Ct&&r_(ue)===x.type)?(X=f(x,F.props),X.ref=ll(M,x,F),X.return=M,X):(X=kc(F.type,F.key,F.props,null,M.mode,X),X.ref=ll(M,x,F),X.return=M,X)}function U(M,x,F,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=Mf(F,M.mode,X),x.return=M,x):(x=f(x,F.children||[]),x.return=M,x)}function K(M,x,F,X,ue){return x===null||x.tag!==7?(x=Ms(F,M.mode,X,ue),x.return=M,x):(x=f(x,F),x.return=M,x)}function Q(M,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Lf(""+x,M.mode,F),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ze:return F=kc(x.type,x.key,x.props,null,M.mode,F),F.ref=ll(M,null,x),F.return=M,F;case Re:return x=Mf(x,M.mode,F),x.return=M,x;case Ct:var X=x._init;return Q(M,X(x._payload),F)}if(ft(x)||le(x))return x=Ms(x,M.mode,F,null),x.return=M,x;ic(M,x)}return null}function G(M,x,F,X){var ue=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:S(M,x,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:return F.key===ue?k(M,x,F,X):null;case Re:return F.key===ue?U(M,x,F,X):null;case Ct:return ue=F._init,G(M,x,ue(F._payload),X)}if(ft(F)||le(F))return ue!==null?null:K(M,x,F,X,null);ic(M,F)}return null}function ne(M,x,F,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(F)||null,S(x,M,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ze:return M=M.get(X.key===null?F:X.key)||null,k(x,M,X,ue);case Re:return M=M.get(X.key===null?F:X.key)||null,U(x,M,X,ue);case Ct:var fe=X._init;return ne(M,x,F,fe(X._payload),ue)}if(ft(X)||le(X))return M=M.get(F)||null,K(x,M,X,ue,null);ic(x,X)}return null}function oe(M,x,F,X){for(var ue=null,fe=null,pe=x,ve=x=0,Ot=null;pe!==null&&ve<F.length;ve++){pe.index>ve?(Ot=pe,pe=null):Ot=pe.sibling;var Be=G(M,pe,F[ve],X);if(Be===null){pe===null&&(pe=Ot);break}i&&pe&&Be.alternate===null&&s(M,pe),x=m(Be,x,ve),fe===null?ue=Be:fe.sibling=Be,fe=Be,pe=Ot}if(ve===F.length)return l(M,pe),it&&ks(M,ve),ue;if(pe===null){for(;ve<F.length;ve++)pe=Q(M,F[ve],X),pe!==null&&(x=m(pe,x,ve),fe===null?ue=pe:fe.sibling=pe,fe=pe);return it&&ks(M,ve),ue}for(pe=h(M,pe);ve<F.length;ve++)Ot=ne(pe,M,ve,F[ve],X),Ot!==null&&(i&&Ot.alternate!==null&&pe.delete(Ot.key===null?ve:Ot.key),x=m(Ot,x,ve),fe===null?ue=Ot:fe.sibling=Ot,fe=Ot);return i&&pe.forEach(function(Vi){return s(M,Vi)}),it&&ks(M,ve),ue}function ae(M,x,F,X){var ue=le(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var fe=ue=null,pe=x,ve=x=0,Ot=null,Be=F.next();pe!==null&&!Be.done;ve++,Be=F.next()){pe.index>ve?(Ot=pe,pe=null):Ot=pe.sibling;var Vi=G(M,pe,Be.value,X);if(Vi===null){pe===null&&(pe=Ot);break}i&&pe&&Vi.alternate===null&&s(M,pe),x=m(Vi,x,ve),fe===null?ue=Vi:fe.sibling=Vi,fe=Vi,pe=Ot}if(Be.done)return l(M,pe),it&&ks(M,ve),ue;if(pe===null){for(;!Be.done;ve++,Be=F.next())Be=Q(M,Be.value,X),Be!==null&&(x=m(Be,x,ve),fe===null?ue=Be:fe.sibling=Be,fe=Be);return it&&ks(M,ve),ue}for(pe=h(M,pe);!Be.done;ve++,Be=F.next())Be=ne(pe,M,ve,Be.value,X),Be!==null&&(i&&Be.alternate!==null&&pe.delete(Be.key===null?ve:Be.key),x=m(Be,x,ve),fe===null?ue=Be:fe.sibling=Be,fe=Be);return i&&pe.forEach(function(gS){return s(M,gS)}),it&&ks(M,ve),ue}function mt(M,x,F,X){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:e:{for(var ue=F.key,fe=x;fe!==null;){if(fe.key===ue){if(ue=F.type,ue===P){if(fe.tag===7){l(M,fe.sibling),x=f(fe,F.props.children),x.return=M,M=x;break e}}else if(fe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Ct&&r_(ue)===fe.type){l(M,fe.sibling),x=f(fe,F.props),x.ref=ll(M,fe,F),x.return=M,M=x;break e}l(M,fe);break}else s(M,fe);fe=fe.sibling}F.type===P?(x=Ms(F.props.children,M.mode,X,F.key),x.return=M,M=x):(X=kc(F.type,F.key,F.props,null,M.mode,X),X.ref=ll(M,x,F),X.return=M,M=X)}return E(M);case Re:e:{for(fe=F.key;x!==null;){if(x.key===fe)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){l(M,x.sibling),x=f(x,F.children||[]),x.return=M,M=x;break e}else{l(M,x);break}else s(M,x);x=x.sibling}x=Mf(F,M.mode,X),x.return=M,M=x}return E(M);case Ct:return fe=F._init,mt(M,x,fe(F._payload),X)}if(ft(F))return oe(M,x,F,X);if(le(F))return ae(M,x,F,X);ic(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,x!==null&&x.tag===6?(l(M,x.sibling),x=f(x,F),x.return=M,M=x):(l(M,x),x=Lf(F,M.mode,X),x.return=M,M=x),E(M)):l(M,x)}return mt}var bo=i_(!0),s_=i_(!1),sc=Ri(null),oc=null,Oo=null,$d=null;function Wd(){$d=Oo=oc=null}function qd(i){var s=sc.current;rt(sc),i._currentValue=s}function Gd(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Lo(i,s){oc=i,$d=Oo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(cn=!0),i.firstContext=null)}function Nn(i){var s=i._currentValue;if($d!==i)if(i={context:i,memoizedValue:s,next:null},Oo===null){if(oc===null)throw Error(t(308));Oo=i,oc.dependencies={lanes:0,firstContext:i}}else Oo=Oo.next=i;return s}var Ps=null;function Kd(i){Ps===null?Ps=[i]:Ps.push(i)}function o_(i,s,l,h){var f=s.interleaved;return f===null?(l.next=l,Kd(s)):(l.next=f.next,f.next=l),s.interleaved=l,Wr(i,h)}function Wr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Pi=!1;function Qd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function qr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ni(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Wr(i,l)}return f=h.interleaved,f===null?(s.next=s,Kd(h)):(s.next=f.next,f.next=s),h.interleaved=s,Wr(i,l)}function ac(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Ha(i,l)}}function l_(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,m=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};m===null?f=m=E:m=m.next=E,l=l.next}while(l!==null);m===null?f=m=s:m=m.next=s}else f=m=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function lc(i,s,l,h){var f=i.updateQueue;Pi=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var k=S,U=k.next;k.next=null,E===null?m=U:E.next=U,E=k;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=U:S.next=U,K.lastBaseUpdate=k))}if(m!==null){var Q=f.baseState;E=0,K=U=k=null,S=m;do{var G=S.lane,ne=S.eventTime;if((h&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var oe=i,ae=S;switch(G=s,ne=l,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Q=oe.call(ne,Q,G);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,G=typeof oe=="function"?oe.call(ne,Q,G):oe,G==null)break e;Q=te({},Q,G);break e;case 2:Pi=!0}}S.callback!==null&&S.lane!==0&&(i.flags|=64,G=f.effects,G===null?f.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(U=K=ne,k=Q):K=K.next=ne,E|=G;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;G=S,S=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);if(K===null&&(k=Q),f.baseState=k,f.firstBaseUpdate=U,f.lastBaseUpdate=K,s=f.shared.interleaved,s!==null){f=s;do E|=f.lane,f=f.next;while(f!==s)}else m===null&&(f.shared.lanes=0);Ds|=E,i.lanes=E,i.memoizedState=Q}}function u_(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var ul={},mr=Ri(ul),cl=Ri(ul),hl=Ri(ul);function Ns(i){if(i===ul)throw Error(t(174));return i}function Yd(i,s){switch(Je(hl,s),Je(cl,i),Je(mr,ul),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:no(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=no(s,i)}rt(mr),Je(mr,s)}function Mo(){rt(mr),rt(cl),rt(hl)}function c_(i){Ns(hl.current);var s=Ns(mr.current),l=no(s,i.type);s!==l&&(Je(cl,i),Je(mr,l))}function Xd(i){cl.current===i&&(rt(mr),rt(cl))}var st=Ri(0);function uc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jd=[];function Zd(){for(var i=0;i<Jd.length;i++)Jd[i]._workInProgressVersionPrimary=null;Jd.length=0}var cc=me.ReactCurrentDispatcher,ef=me.ReactCurrentBatchConfig,xs=0,ot=null,Rt=null,Dt=null,hc=!1,dl=!1,fl=0,F0=0;function Gt(){throw Error(t(321))}function tf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Bn(i[l],s[l]))return!1;return!0}function nf(i,s,l,h,f,m){if(xs=m,ot=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,cc.current=i===null||i.memoizedState===null?B0:H0,i=l(h,f),dl){m=0;do{if(dl=!1,fl=0,25<=m)throw Error(t(301));m+=1,Dt=Rt=null,s.updateQueue=null,cc.current=$0,i=l(h,f)}while(dl)}if(cc.current=pc,s=Rt!==null&&Rt.next!==null,xs=0,Dt=Rt=ot=null,hc=!1,s)throw Error(t(300));return i}function rf(){var i=fl!==0;return fl=0,i}function gr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ot.memoizedState=Dt=i:Dt=Dt.next=i,Dt}function xn(){if(Rt===null){var i=ot.alternate;i=i!==null?i.memoizedState:null}else i=Rt.next;var s=Dt===null?ot.memoizedState:Dt.next;if(s!==null)Dt=s,Rt=i;else{if(i===null)throw Error(t(310));Rt=i,i={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Dt===null?ot.memoizedState=Dt=i:Dt=Dt.next=i}return Dt}function pl(i,s){return typeof s=="function"?s(i):s}function sf(i){var s=xn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Rt,f=h.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}h.baseQueue=f=m,l.pending=null}if(f!==null){m=f.next,h=h.baseState;var S=E=null,k=null,U=m;do{var K=U.lane;if((xs&K)===K)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),h=U.hasEagerState?U.eagerState:i(h,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(S=k=Q,E=h):k=k.next=Q,ot.lanes|=K,Ds|=K}U=U.next}while(U!==null&&U!==m);k===null?E=h:k.next=S,Bn(h,s.memoizedState)||(cn=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=k,l.lastRenderedState=h}if(i=l.interleaved,i!==null){f=i;do m=f.lane,ot.lanes|=m,Ds|=m,f=f.next;while(f!==i)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function of(i){var s=xn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,f=l.pending,m=s.memoizedState;if(f!==null){l.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Bn(m,s.memoizedState)||(cn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),l.lastRenderedState=m}return[m,h]}function h_(){}function d_(i,s){var l=ot,h=xn(),f=s(),m=!Bn(h.memoizedState,f);if(m&&(h.memoizedState=f,cn=!0),h=h.queue,af(m_.bind(null,l,h,i),[i]),h.getSnapshot!==s||m||Dt!==null&&Dt.memoizedState.tag&1){if(l.flags|=2048,ml(9,p_.bind(null,l,h,f,s),void 0,null),bt===null)throw Error(t(349));(xs&30)!==0||f_(l,s,f)}return f}function f_(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function p_(i,s,l,h){s.value=l,s.getSnapshot=h,g_(s)&&__(i)}function m_(i,s,l){return l(function(){g_(s)&&__(i)})}function g_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Bn(i,l)}catch{return!0}}function __(i){var s=Wr(i,1);s!==null&&Gn(s,i,1,-1)}function y_(i){var s=gr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:i},s.queue=i,i=i.dispatch=z0.bind(null,ot,i),[s.memoizedState,i]}function ml(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function v_(){return xn().memoizedState}function dc(i,s,l,h){var f=gr();ot.flags|=i,f.memoizedState=ml(1|s,l,void 0,h===void 0?null:h)}function fc(i,s,l,h){var f=xn();h=h===void 0?null:h;var m=void 0;if(Rt!==null){var E=Rt.memoizedState;if(m=E.destroy,h!==null&&tf(h,E.deps)){f.memoizedState=ml(s,l,m,h);return}}ot.flags|=i,f.memoizedState=ml(1|s,l,m,h)}function E_(i,s){return dc(8390656,8,i,s)}function af(i,s){return fc(2048,8,i,s)}function w_(i,s){return fc(4,2,i,s)}function T_(i,s){return fc(4,4,i,s)}function I_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function S_(i,s,l){return l=l!=null?l.concat([i]):null,fc(4,4,I_.bind(null,s,i),l)}function lf(){}function C_(i,s){var l=xn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&tf(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function R_(i,s){var l=xn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&tf(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function A_(i,s,l){return(xs&21)===0?(i.baseState&&(i.baseState=!1,cn=!0),i.memoizedState=l):(Bn(l,s)||(l=za(),ot.lanes|=l,Ds|=l,i.baseState=!0),s)}function U0(i,s){var l=Oe;Oe=l!==0&&4>l?l:4,i(!0);var h=ef.transition;ef.transition={};try{i(!1),s()}finally{Oe=l,ef.transition=h}}function k_(){return xn().memoizedState}function j0(i,s,l){var h=Oi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},P_(i))N_(s,l);else if(l=o_(i,s,l,h),l!==null){var f=rn();Gn(l,i,h,f),x_(l,s,h)}}function z0(i,s,l){var h=Oi(i),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(P_(i))N_(s,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var E=s.lastRenderedState,S=m(E,l);if(f.hasEagerState=!0,f.eagerState=S,Bn(S,E)){var k=s.interleaved;k===null?(f.next=f,Kd(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}l=o_(i,s,f,h),l!==null&&(f=rn(),Gn(l,i,h,f),x_(l,s,h))}}function P_(i){var s=i.alternate;return i===ot||s!==null&&s===ot}function N_(i,s){dl=hc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function x_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Ha(i,l)}}var pc={readContext:Nn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},B0={readContext:Nn,useCallback:function(i,s){return gr().memoizedState=[i,s===void 0?null:s],i},useContext:Nn,useEffect:E_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,dc(4194308,4,I_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return dc(4194308,4,i,s)},useInsertionEffect:function(i,s){return dc(4,2,i,s)},useMemo:function(i,s){var l=gr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=gr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=j0.bind(null,ot,i),[h.memoizedState,i]},useRef:function(i){var s=gr();return i={current:i},s.memoizedState=i},useState:y_,useDebugValue:lf,useDeferredValue:function(i){return gr().memoizedState=i},useTransition:function(){var i=y_(!1),s=i[0];return i=U0.bind(null,i[1]),gr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=ot,f=gr();if(it){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),bt===null)throw Error(t(349));(xs&30)!==0||f_(h,s,l)}f.memoizedState=l;var m={value:l,getSnapshot:s};return f.queue=m,E_(m_.bind(null,h,m,i),[i]),h.flags|=2048,ml(9,p_.bind(null,h,m,l,s),void 0,null),l},useId:function(){var i=gr(),s=bt.identifierPrefix;if(it){var l=$r,h=Hr;l=(h&~(1<<32-gn(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=fl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=F0++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},H0={readContext:Nn,useCallback:C_,useContext:Nn,useEffect:af,useImperativeHandle:S_,useInsertionEffect:w_,useLayoutEffect:T_,useMemo:R_,useReducer:sf,useRef:v_,useState:function(){return sf(pl)},useDebugValue:lf,useDeferredValue:function(i){var s=xn();return A_(s,Rt.memoizedState,i)},useTransition:function(){var i=sf(pl)[0],s=xn().memoizedState;return[i,s]},useMutableSource:h_,useSyncExternalStore:d_,useId:k_,unstable_isNewReconciler:!1},$0={readContext:Nn,useCallback:C_,useContext:Nn,useEffect:af,useImperativeHandle:S_,useInsertionEffect:w_,useLayoutEffect:T_,useMemo:R_,useReducer:of,useRef:v_,useState:function(){return of(pl)},useDebugValue:lf,useDeferredValue:function(i){var s=xn();return Rt===null?s.memoizedState=i:A_(s,Rt.memoizedState,i)},useTransition:function(){var i=of(pl)[0],s=xn().memoizedState;return[i,s]},useMutableSource:h_,useSyncExternalStore:d_,useId:k_,unstable_isNewReconciler:!1};function $n(i,s){if(i&&i.defaultProps){s=te({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function uf(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:te({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var mc={isMounted:function(i){return(i=i._reactInternals)?jn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=rn(),f=Oi(i),m=qr(h,f);m.payload=s,l!=null&&(m.callback=l),s=Ni(i,m,f),s!==null&&(Gn(s,i,f,h),ac(s,i,f))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=rn(),f=Oi(i),m=qr(h,f);m.tag=1,m.payload=s,l!=null&&(m.callback=l),s=Ni(i,m,f),s!==null&&(Gn(s,i,f,h),ac(s,i,f))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=rn(),h=Oi(i),f=qr(l,h);f.tag=2,s!=null&&(f.callback=s),s=Ni(i,f,h),s!==null&&(Gn(s,i,h,l),ac(s,i,h))}};function D_(i,s,l,h,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,m,E):s.prototype&&s.prototype.isPureReactComponent?!tl(l,h)||!tl(f,m):!0}function b_(i,s,l){var h=!1,f=Ai,m=s.contextType;return typeof m=="object"&&m!==null?m=Nn(m):(f=un(s)?Rs:qt.current,h=s.contextTypes,m=(h=h!=null)?Po(i,f):Ai),s=new s(l,m),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=mc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=f,i.__reactInternalMemoizedMaskedChildContext=m),s}function O_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&mc.enqueueReplaceState(s,s.state,null)}function cf(i,s,l,h){var f=i.stateNode;f.props=l,f.state=i.memoizedState,f.refs={},Qd(i);var m=s.contextType;typeof m=="object"&&m!==null?f.context=Nn(m):(m=un(s)?Rs:qt.current,f.context=Po(i,m)),f.state=i.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(uf(i,s,m,l),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&mc.enqueueReplaceState(f,f.state,null),lc(i,l,f,h),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308)}function Vo(i,s){try{var l="",h=s;do l+=ke(h),h=h.return;while(h);var f=l}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:i,source:s,stack:f,digest:null}}function hf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function df(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function L_(i,s,l){l=qr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Tc||(Tc=!0,Af=h),df(i,s)},l}function M_(i,s,l){l=qr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){df(i,s)}}var m=i.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(l.callback=function(){df(i,s),typeof h!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function V_(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new W0;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),i=sS.bind(null,i,s,l),s.then(i,i))}function F_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function U_(i,s,l,h,f){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=qr(-1,1),s.tag=2,Ni(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=f,i)}var q0=me.ReactCurrentOwner,cn=!1;function nn(i,s,l,h){s.child=i===null?s_(s,null,l,h):bo(s,i.child,l,h)}function j_(i,s,l,h,f){l=l.render;var m=s.ref;return Lo(s,f),h=nf(i,s,l,h,m,f),l=rf(),i!==null&&!cn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,Gr(i,s,f)):(it&&l&&Ud(s),s.flags|=1,nn(i,s,h,f),s.child)}function z_(i,s,l,h,f){if(i===null){var m=l.type;return typeof m=="function"&&!Of(m)&&m.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=m,B_(i,s,m,h,f)):(i=kc(l.type,null,h,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(m=i.child,(i.lanes&f)===0){var E=m.memoizedProps;if(l=l.compare,l=l!==null?l:tl,l(E,h)&&i.ref===s.ref)return Gr(i,s,f)}return s.flags|=1,i=Mi(m,h),i.ref=s.ref,i.return=s,s.child=i}function B_(i,s,l,h,f){if(i!==null){var m=i.memoizedProps;if(tl(m,h)&&i.ref===s.ref)if(cn=!1,s.pendingProps=h=m,(i.lanes&f)!==0)(i.flags&131072)!==0&&(cn=!0);else return s.lanes=i.lanes,Gr(i,s,f)}return ff(i,s,l,h,f)}function H_(i,s,l){var h=s.pendingProps,f=h.children,m=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(Uo,In),In|=l;else{if((l&1073741824)===0)return i=m!==null?m.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Je(Uo,In),In|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=m!==null?m.baseLanes:l,Je(Uo,In),In|=h}else m!==null?(h=m.baseLanes|l,s.memoizedState=null):h=l,Je(Uo,In),In|=h;return nn(i,s,f,l),s.child}function $_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function ff(i,s,l,h,f){var m=un(l)?Rs:qt.current;return m=Po(s,m),Lo(s,f),l=nf(i,s,l,h,m,f),h=rf(),i!==null&&!cn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,Gr(i,s,f)):(it&&h&&Ud(s),s.flags|=1,nn(i,s,l,f),s.child)}function W_(i,s,l,h,f){if(un(l)){var m=!0;Zu(s)}else m=!1;if(Lo(s,f),s.stateNode===null)_c(i,s),b_(s,l,h),cf(s,l,h,f),h=!0;else if(i===null){var E=s.stateNode,S=s.memoizedProps;E.props=S;var k=E.context,U=l.contextType;typeof U=="object"&&U!==null?U=Nn(U):(U=un(l)?Rs:qt.current,U=Po(s,U));var K=l.getDerivedStateFromProps,Q=typeof K=="function"||typeof E.getSnapshotBeforeUpdate=="function";Q||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==h||k!==U)&&O_(s,E,h,U),Pi=!1;var G=s.memoizedState;E.state=G,lc(s,h,E,f),k=s.memoizedState,S!==h||G!==k||ln.current||Pi?(typeof K=="function"&&(uf(s,l,K,h),k=s.memoizedState),(S=Pi||D_(s,l,S,h,G,k,U))?(Q||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),E.props=h,E.state=k,E.context=U,h=S):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,a_(i,s),S=s.memoizedProps,U=s.type===s.elementType?S:$n(s.type,S),E.props=U,Q=s.pendingProps,G=E.context,k=l.contextType,typeof k=="object"&&k!==null?k=Nn(k):(k=un(l)?Rs:qt.current,k=Po(s,k));var ne=l.getDerivedStateFromProps;(K=typeof ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==Q||G!==k)&&O_(s,E,h,k),Pi=!1,G=s.memoizedState,E.state=G,lc(s,h,E,f);var oe=s.memoizedState;S!==Q||G!==oe||ln.current||Pi?(typeof ne=="function"&&(uf(s,l,ne,h),oe=s.memoizedState),(U=Pi||D_(s,l,U,h,G,oe,k)||!1)?(K||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,oe,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,oe,k)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=oe),E.props=h,E.state=oe,E.context=k,h=U):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),h=!1)}return pf(i,s,l,h,m,f)}function pf(i,s,l,h,f,m){$_(i,s);var E=(s.flags&128)!==0;if(!h&&!E)return f&&Yg(s,l,!1),Gr(i,s,m);h=s.stateNode,q0.current=s;var S=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&E?(s.child=bo(s,i.child,null,m),s.child=bo(s,null,S,m)):nn(i,s,S,m),s.memoizedState=h.state,f&&Yg(s,l,!0),s.child}function q_(i){var s=i.stateNode;s.pendingContext?Kg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Kg(i,s.context,!1),Yd(i,s.containerInfo)}function G_(i,s,l,h,f){return Do(),Hd(f),s.flags|=256,nn(i,s,l,h),s.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(i){return{baseLanes:i,cachePool:null,transitions:null}}function K_(i,s,l){var h=s.pendingProps,f=st.current,m=!1,E=(s.flags&128)!==0,S;if((S=E)||(S=i!==null&&i.memoizedState===null?!1:(f&2)!==0),S?(m=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(f|=1),Je(st,f&1),i===null)return Bd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,i=h.fallback,m?(h=s.mode,m=s.child,E={mode:"hidden",children:E},(h&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Pc(E,h,0,null),i=Ms(i,h,l,null),m.return=s,i.return=s,m.sibling=i,s.child=m,s.child.memoizedState=gf(l),s.memoizedState=mf,i):_f(s,E));if(f=i.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return G0(i,s,E,h,S,f,l);if(m){m=h.fallback,E=s.mode,f=i.child,S=f.sibling;var k={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Mi(f,k),h.subtreeFlags=f.subtreeFlags&14680064),S!==null?m=Mi(S,m):(m=Ms(m,E,l,null),m.flags|=2),m.return=s,h.return=s,h.sibling=m,s.child=h,h=m,m=s.child,E=i.child.memoizedState,E=E===null?gf(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=i.childLanes&~l,s.memoizedState=mf,h}return m=i.child,i=m.sibling,h=Mi(m,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function _f(i,s){return s=Pc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function gc(i,s,l,h){return h!==null&&Hd(h),bo(s,i.child,null,l),i=_f(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function G0(i,s,l,h,f,m,E){if(l)return s.flags&256?(s.flags&=-257,h=hf(Error(t(422))),gc(i,s,E,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(m=h.fallback,f=s.mode,h=Pc({mode:"visible",children:h.children},f,0,null),m=Ms(m,f,E,null),m.flags|=2,h.return=s,m.return=s,h.sibling=m,s.child=h,(s.mode&1)!==0&&bo(s,i.child,null,E),s.child.memoizedState=gf(E),s.memoizedState=mf,m);if((s.mode&1)===0)return gc(i,s,E,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var S=h.dgst;return h=S,m=Error(t(419)),h=hf(m,h,void 0),gc(i,s,E,h)}if(S=(E&i.childLanes)!==0,cn||S){if(h=bt,h!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Wr(i,f),Gn(h,i,f,-1))}return bf(),h=hf(Error(t(421))),gc(i,s,E,h)}return f.data==="$?"?(s.flags|=128,s.child=i.child,s=oS.bind(null,i),f._reactRetry=s,null):(i=m.treeContext,Tn=Ci(f.nextSibling),wn=s,it=!0,Hn=null,i!==null&&(kn[Pn++]=Hr,kn[Pn++]=$r,kn[Pn++]=As,Hr=i.id,$r=i.overflow,As=s),s=_f(s,h.children),s.flags|=4096,s)}function Q_(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),Gd(i.return,s,l)}function yf(i,s,l,h,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=h,m.tail=l,m.tailMode=f)}function Y_(i,s,l){var h=s.pendingProps,f=h.revealOrder,m=h.tail;if(nn(i,s,h.children,l),h=st.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Q_(i,l,s);else if(i.tag===19)Q_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Je(st,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&uc(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),yf(s,!1,f,l,m);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&uc(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}yf(s,!0,l,null,m);break;case"together":yf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function _c(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Gr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ds|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Mi(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Mi(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function K0(i,s,l){switch(s.tag){case 3:q_(s),Do();break;case 5:c_(s);break;case 1:un(s.type)&&Zu(s);break;case 4:Yd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Je(sc,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Je(st,st.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?K_(i,s,l):(Je(st,st.current&1),i=Gr(i,s,l),i!==null?i.sibling:null);Je(st,st.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return Y_(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Je(st,st.current),h)break;return null;case 22:case 23:return s.lanes=0,H_(i,s,l)}return Gr(i,s,l)}var X_,vf,J_,Z_;X_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},vf=function(){},J_=function(i,s,l,h){var f=i.memoizedProps;if(f!==h){i=s.stateNode,Ns(mr.current);var m=null;switch(l){case"input":f=eo(i,f),h=eo(i,h),m=[];break;case"select":f=te({},f,{value:void 0}),h=te({},h,{value:void 0}),m=[];break;case"textarea":f=Na(i,f),h=Na(i,h),m=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Yu)}Un(l,h);var E;l=null;for(U in f)if(!h.hasOwnProperty(U)&&f.hasOwnProperty(U)&&f[U]!=null)if(U==="style"){var S=f[U];for(E in S)S.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in h){var k=h[U];if(S=f!=null?f[U]:void 0,h.hasOwnProperty(U)&&k!==S&&(k!=null||S!=null))if(U==="style")if(S){for(E in S)!S.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in k)k.hasOwnProperty(E)&&S[E]!==k[E]&&(l||(l={}),l[E]=k[E])}else l||(m||(m=[]),m.push(U,l)),l=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(m=m||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&nt("scroll",i),m||S===k||(m=[])):(m=m||[]).push(U,k))}l&&(m=m||[]).push("style",l);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},Z_=function(i,s,l,h){l!==h&&(s.flags|=4)};function gl(i,s){if(!it)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Kt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function Q0(i,s,l){var h=s.pendingProps;switch(jd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(s),null;case 1:return un(s.type)&&Ju(),Kt(s),null;case 3:return h=s.stateNode,Mo(),rt(ln),rt(qt),Zd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(rc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Hn!==null&&(Nf(Hn),Hn=null))),vf(i,s),Kt(s),null;case 5:Xd(s);var f=Ns(hl.current);if(l=s.type,i!==null&&s.stateNode!=null)J_(i,s,l,h,f),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Kt(s),null}if(i=Ns(mr.current),rc(s)){h=s.stateNode,l=s.type;var m=s.memoizedProps;switch(h[pr]=s,h[ol]=m,i=(s.mode&1)!==0,l){case"dialog":nt("cancel",h),nt("close",h);break;case"iframe":case"object":case"embed":nt("load",h);break;case"video":case"audio":for(f=0;f<rl.length;f++)nt(rl[f],h);break;case"source":nt("error",h);break;case"img":case"image":case"link":nt("error",h),nt("load",h);break;case"details":nt("toggle",h);break;case"input":wu(h,m),nt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!m.multiple},nt("invalid",h);break;case"textarea":xa(h,m),nt("invalid",h)}Un(l,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var S=m[E];E==="children"?typeof S=="string"?h.textContent!==S&&(m.suppressHydrationWarning!==!0&&Qu(h.textContent,S,i),f=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Qu(h.textContent,S,i),f=["children",""+S]):o.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&nt("scroll",h)}switch(l){case"input":Zs(h),Pa(h,m,!0);break;case"textarea":Zs(h),ui(h);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(h.onclick=Yu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Da(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[pr]=s,i[ol]=h,X_(i,s,!1,!1),s.stateNode=i;e:{switch(E=io(l,h),l){case"dialog":nt("cancel",i),nt("close",i),f=h;break;case"iframe":case"object":case"embed":nt("load",i),f=h;break;case"video":case"audio":for(f=0;f<rl.length;f++)nt(rl[f],i);f=h;break;case"source":nt("error",i),f=h;break;case"img":case"image":case"link":nt("error",i),nt("load",i),f=h;break;case"details":nt("toggle",i),f=h;break;case"input":wu(i,h),f=eo(i,h),nt("invalid",i);break;case"option":f=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},f=te({},h,{value:void 0}),nt("invalid",i);break;case"textarea":xa(i,h),f=Na(i,h),nt("invalid",i);break;default:f=h}Un(l,f),S=f;for(m in S)if(S.hasOwnProperty(m)){var k=S[m];m==="style"?ro(i,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Iu(i,k)):m==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&hs(i,k):typeof k=="number"&&hs(i,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&nt("scroll",i):k!=null&&de(i,m,k,E))}switch(l){case"input":Zs(i),Pa(i,h,!1);break;case"textarea":Zs(i),ui(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Fe(h.value));break;case"select":i.multiple=!!h.multiple,m=h.value,m!=null?Fn(i,!!h.multiple,m,!1):h.defaultValue!=null&&Fn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(i.onclick=Yu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Kt(s),null;case 6:if(i&&s.stateNode!=null)Z_(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=Ns(hl.current),Ns(mr.current),rc(s)){if(h=s.stateNode,l=s.memoizedProps,h[pr]=s,(m=h.nodeValue!==l)&&(i=wn,i!==null))switch(i.tag){case 3:Qu(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Qu(h.nodeValue,l,(i.mode&1)!==0)}m&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[pr]=s,s.stateNode=h}return Kt(s),null;case 13:if(rt(st),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(it&&Tn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)n_(),Do(),s.flags|=98560,m=!1;else if(m=rc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[pr]=s}else Do(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Kt(s),m=!1}else Hn!==null&&(Nf(Hn),Hn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(st.current&1)!==0?At===0&&(At=3):bf())),s.updateQueue!==null&&(s.flags|=4),Kt(s),null);case 4:return Mo(),vf(i,s),i===null&&il(s.stateNode.containerInfo),Kt(s),null;case 10:return qd(s.type._context),Kt(s),null;case 17:return un(s.type)&&Ju(),Kt(s),null;case 19:if(rt(st),m=s.memoizedState,m===null)return Kt(s),null;if(h=(s.flags&128)!==0,E=m.rendering,E===null)if(h)gl(m,!1);else{if(At!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=uc(i),E!==null){for(s.flags|=128,gl(m,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)m=l,i=h,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=i,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,i=E.dependencies,m.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Je(st,st.current&1|2),s.child}i=i.sibling}m.tail!==null&&tt()>jo&&(s.flags|=128,h=!0,gl(m,!1),s.lanes=4194304)}else{if(!h)if(i=uc(E),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),gl(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!it)return Kt(s),null}else 2*tt()-m.renderingStartTime>jo&&l!==1073741824&&(s.flags|=128,h=!0,gl(m,!1),s.lanes=4194304);m.isBackwards?(E.sibling=s.child,s.child=E):(l=m.last,l!==null?l.sibling=E:s.child=E,m.last=E)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=tt(),s.sibling=null,l=st.current,Je(st,h?l&1|2:l&1),s):(Kt(s),null);case 22:case 23:return Df(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(In&1073741824)!==0&&(Kt(s),s.subtreeFlags&6&&(s.flags|=8192)):Kt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Y0(i,s){switch(jd(s),s.tag){case 1:return un(s.type)&&Ju(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Mo(),rt(ln),rt(qt),Zd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Xd(s),null;case 13:if(rt(st),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Do()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return rt(st),null;case 4:return Mo(),null;case 10:return qd(s.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var yc=!1,Qt=!1,X0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Fo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ct(i,s,h)}else l.current=null}function Ef(i,s,l){try{l()}catch(h){ct(i,s,h)}}var ey=!1;function J0(i,s){if(xd=Fr,i=Dg(),Id(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,m=h.focusNode;h=h.focusOffset;try{l.nodeType,m.nodeType}catch{l=null;break e}var E=0,S=-1,k=-1,U=0,K=0,Q=i,G=null;t:for(;;){for(var ne;Q!==l||f!==0&&Q.nodeType!==3||(S=E+f),Q!==m||h!==0&&Q.nodeType!==3||(k=E+h),Q.nodeType===3&&(E+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)G=Q,Q=ne;for(;;){if(Q===i)break t;if(G===l&&++U===f&&(S=E),G===m&&++K===h&&(k=E),(ne=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=ne}l=S===-1||k===-1?null:{start:S,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Dd={focusedElem:i,selectionRange:l},Fr=!1,ie=s;ie!==null;)if(s=ie,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ie=i;else for(;ie!==null;){s=ie;try{var oe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,mt=oe.memoizedState,M=s.stateNode,x=M.getSnapshotBeforeUpdate(s.elementType===s.type?ae:$n(s.type,ae),mt);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){ct(s,s.return,X)}if(i=s.sibling,i!==null){i.return=s.return,ie=i;break}ie=s.return}return oe=ey,ey=!1,oe}function _l(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&i)===i){var m=f.destroy;f.destroy=void 0,m!==void 0&&Ef(s,l,m)}f=f.next}while(f!==h)}}function vc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function wf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function ty(i){var s=i.alternate;s!==null&&(i.alternate=null,ty(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[pr],delete s[ol],delete s[Md],delete s[O0],delete s[L0])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function ny(i){return i.tag===5||i.tag===3||i.tag===4}function ry(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ny(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Tf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Yu));else if(h!==4&&(i=i.child,i!==null))for(Tf(i,s,l),i=i.sibling;i!==null;)Tf(i,s,l),i=i.sibling}function If(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(If(i,s,l),i=i.sibling;i!==null;)If(i,s,l),i=i.sibling}var Ut=null,Wn=!1;function xi(i,s,l){for(l=l.child;l!==null;)iy(i,s,l),l=l.sibling}function iy(i,s,l){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(gs,l)}catch{}switch(l.tag){case 5:Qt||Fo(l,s);case 6:var h=Ut,f=Wn;Ut=null,xi(i,s,l),Ut=h,Wn=f,Ut!==null&&(Wn?(i=Ut,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ut.removeChild(l.stateNode));break;case 18:Ut!==null&&(Wn?(i=Ut,l=l.stateNode,i.nodeType===8?Ld(i.parentNode,l):i.nodeType===1&&Ld(i,l),wi(i)):Ld(Ut,l.stateNode));break;case 4:h=Ut,f=Wn,Ut=l.stateNode.containerInfo,Wn=!0,xi(i,s,l),Ut=h,Wn=f;break;case 0:case 11:case 14:case 15:if(!Qt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Ef(l,s,E),f=f.next}while(f!==h)}xi(i,s,l);break;case 1:if(!Qt&&(Fo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(S){ct(l,s,S)}xi(i,s,l);break;case 21:xi(i,s,l);break;case 22:l.mode&1?(Qt=(h=Qt)||l.memoizedState!==null,xi(i,s,l),Qt=h):xi(i,s,l);break;default:xi(i,s,l)}}function sy(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new X0),s.forEach(function(h){var f=aS.bind(null,i,h);l.has(h)||(l.add(h),h.then(f,f))})}}function qn(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var m=i,E=s,S=E;e:for(;S!==null;){switch(S.tag){case 5:Ut=S.stateNode,Wn=!1;break e;case 3:Ut=S.stateNode.containerInfo,Wn=!0;break e;case 4:Ut=S.stateNode.containerInfo,Wn=!0;break e}S=S.return}if(Ut===null)throw Error(t(160));iy(m,E,f),Ut=null,Wn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(U){ct(f,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)oy(s,i),s=s.sibling}function oy(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(qn(s,i),_r(i),h&4){try{_l(3,i,i.return),vc(3,i)}catch(ae){ct(i,i.return,ae)}try{_l(5,i,i.return)}catch(ae){ct(i,i.return,ae)}}break;case 1:qn(s,i),_r(i),h&512&&l!==null&&Fo(l,l.return);break;case 5:if(qn(s,i),_r(i),h&512&&l!==null&&Fo(l,l.return),i.flags&32){var f=i.stateNode;try{hs(f,"")}catch(ae){ct(i,i.return,ae)}}if(h&4&&(f=i.stateNode,f!=null)){var m=i.memoizedProps,E=l!==null?l.memoizedProps:m,S=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&to(f,m),io(S,E);var U=io(S,m);for(E=0;E<k.length;E+=2){var K=k[E],Q=k[E+1];K==="style"?ro(f,Q):K==="dangerouslySetInnerHTML"?Iu(f,Q):K==="children"?hs(f,Q):de(f,K,Q,U)}switch(S){case"input":cs(f,m);break;case"textarea":Tu(f,m);break;case"select":var G=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?Fn(f,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?Fn(f,!!m.multiple,m.defaultValue,!0):Fn(f,!!m.multiple,m.multiple?[]:"",!1))}f[ol]=m}catch(ae){ct(i,i.return,ae)}}break;case 6:if(qn(s,i),_r(i),h&4){if(i.stateNode===null)throw Error(t(162));f=i.stateNode,m=i.memoizedProps;try{f.nodeValue=m}catch(ae){ct(i,i.return,ae)}}break;case 3:if(qn(s,i),_r(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{wi(s.containerInfo)}catch(ae){ct(i,i.return,ae)}break;case 4:qn(s,i),_r(i);break;case 13:qn(s,i),_r(i),f=i.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Rf=tt())),h&4&&sy(i);break;case 22:if(K=l!==null&&l.memoizedState!==null,i.mode&1?(Qt=(U=Qt)||K,qn(s,i),Qt=U):qn(s,i),_r(i),h&8192){if(U=i.memoizedState!==null,(i.stateNode.isHidden=U)&&!K&&(i.mode&1)!==0)for(ie=i,K=i.child;K!==null;){for(Q=ie=K;ie!==null;){switch(G=ie,ne=G.child,G.tag){case 0:case 11:case 14:case 15:_l(4,G,G.return);break;case 1:Fo(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){h=G,l=G.return;try{s=h,oe.props=s.memoizedProps,oe.state=s.memoizedState,oe.componentWillUnmount()}catch(ae){ct(h,l,ae)}}break;case 5:Fo(G,G.return);break;case 22:if(G.memoizedState!==null){uy(Q);continue}}ne!==null?(ne.return=G,ie=ne):uy(Q)}K=K.sibling}e:for(K=null,Q=i;;){if(Q.tag===5){if(K===null){K=Q;try{f=Q.stateNode,U?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Q.stateNode,k=Q.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=di("display",E))}catch(ae){ct(i,i.return,ae)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(ae){ct(i,i.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===i)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===i)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===i)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:qn(s,i),_r(i),h&4&&sy(i);break;case 21:break;default:qn(s,i),_r(i)}}function _r(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(ny(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(hs(f,""),h.flags&=-33);var m=ry(i);If(i,m,f);break;case 3:case 4:var E=h.stateNode.containerInfo,S=ry(i);Tf(i,S,E);break;default:throw Error(t(161))}}catch(k){ct(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function Z0(i,s,l){ie=i,ay(i)}function ay(i,s,l){for(var h=(i.mode&1)!==0;ie!==null;){var f=ie,m=f.child;if(f.tag===22&&h){var E=f.memoizedState!==null||yc;if(!E){var S=f.alternate,k=S!==null&&S.memoizedState!==null||Qt;S=yc;var U=Qt;if(yc=E,(Qt=k)&&!U)for(ie=f;ie!==null;)E=ie,k=E.child,E.tag===22&&E.memoizedState!==null?cy(f):k!==null?(k.return=E,ie=k):cy(f);for(;m!==null;)ie=m,ay(m),m=m.sibling;ie=f,yc=S,Qt=U}ly(i)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,ie=m):ly(i)}}function ly(i){for(;ie!==null;){var s=ie;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Qt||vc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Qt)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:$n(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&u_(s,m,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}u_(s,E,l)}break;case 5:var S=s.stateNode;if(l===null&&s.flags&4){l=S;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&wi(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Qt||s.flags&512&&wf(s)}catch(G){ct(s,s.return,G)}}if(s===i){ie=null;break}if(l=s.sibling,l!==null){l.return=s.return,ie=l;break}ie=s.return}}function uy(i){for(;ie!==null;){var s=ie;if(s===i){ie=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ie=l;break}ie=s.return}}function cy(i){for(;ie!==null;){var s=ie;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{vc(4,s)}catch(k){ct(s,l,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){ct(s,f,k)}}var m=s.return;try{wf(s)}catch(k){ct(s,m,k)}break;case 5:var E=s.return;try{wf(s)}catch(k){ct(s,E,k)}}}catch(k){ct(s,s.return,k)}if(s===i){ie=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ie=S;break}ie=s.return}}var eS=Math.ceil,Ec=me.ReactCurrentDispatcher,Sf=me.ReactCurrentOwner,Dn=me.ReactCurrentBatchConfig,Ue=0,bt=null,wt=null,jt=0,In=0,Uo=Ri(0),At=0,yl=null,Ds=0,wc=0,Cf=0,vl=null,hn=null,Rf=0,jo=1/0,Kr=null,Tc=!1,Af=null,Di=null,Ic=!1,bi=null,Sc=0,El=0,kf=null,Cc=-1,Rc=0;function rn(){return(Ue&6)!==0?tt():Cc!==-1?Cc:Cc=tt()}function Oi(i){return(i.mode&1)===0?1:(Ue&2)!==0&&jt!==0?jt&-jt:V0.transition!==null?(Rc===0&&(Rc=za()),Rc):(i=Oe,i!==0||(i=window.event,i=i===void 0?16:mo(i.type)),i)}function Gn(i,s,l,h){if(50<El)throw El=0,kf=null,Error(t(185));Es(i,l,h),((Ue&2)===0||i!==bt)&&(i===bt&&((Ue&2)===0&&(wc|=l),At===4&&Li(i,jt)),dn(i,h),l===1&&Ue===0&&(s.mode&1)===0&&(jo=tt()+500,ec&&ki()))}function dn(i,s){var l=i.callbackNode;vs(i,s);var h=Lr(i,i===bt?jt:0);if(h===0)l!==null&&ao(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&ao(l),s===1)i.tag===0?M0(dy.bind(null,i)):Xg(dy.bind(null,i)),D0(function(){(Ue&6)===0&&ki()}),l=null;else{switch(ir(h)){case 1:l=lo;break;case 4:l=Fa;break;case 16:l=ms;break;case 536870912:l=uo;break;default:l=ms}l=Ey(l,hy.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function hy(i,s){if(Cc=-1,Rc=0,(Ue&6)!==0)throw Error(t(327));var l=i.callbackNode;if(zo()&&i.callbackNode!==l)return null;var h=Lr(i,i===bt?jt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=Ac(i,h);else{s=h;var f=Ue;Ue|=2;var m=py();(bt!==i||jt!==s)&&(Kr=null,jo=tt()+500,Os(i,s));do try{rS();break}catch(S){fy(i,S)}while(!0);Wd(),Ec.current=m,Ue=f,wt!==null?s=0:(bt=null,jt=0,s=At)}if(s!==0){if(s===2&&(f=ja(i),f!==0&&(h=f,s=Pf(i,f))),s===1)throw l=yl,Os(i,0),Li(i,h),dn(i,tt()),l;if(s===6)Li(i,h);else{if(f=i.current.alternate,(h&30)===0&&!tS(f)&&(s=Ac(i,h),s===2&&(m=ja(i),m!==0&&(h=m,s=Pf(i,m))),s===1))throw l=yl,Os(i,0),Li(i,h),dn(i,tt()),l;switch(i.finishedWork=f,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ls(i,hn,Kr);break;case 3:if(Li(i,h),(h&130023424)===h&&(s=Rf+500-tt(),10<s)){if(Lr(i,0)!==0)break;if(f=i.suspendedLanes,(f&h)!==h){rn(),i.pingedLanes|=i.suspendedLanes&f;break}i.timeoutHandle=Od(Ls.bind(null,i,hn,Kr),s);break}Ls(i,hn,Kr);break;case 4:if(Li(i,h),(h&4194240)===h)break;for(s=i.eventTimes,f=-1;0<h;){var E=31-gn(h);m=1<<E,E=s[E],E>f&&(f=E),h&=~m}if(h=f,h=tt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*eS(h/1960))-h,10<h){i.timeoutHandle=Od(Ls.bind(null,i,hn,Kr),h);break}Ls(i,hn,Kr);break;case 5:Ls(i,hn,Kr);break;default:throw Error(t(329))}}}return dn(i,tt()),i.callbackNode===l?hy.bind(null,i):null}function Pf(i,s){var l=vl;return i.current.memoizedState.isDehydrated&&(Os(i,s).flags|=256),i=Ac(i,s),i!==2&&(s=hn,hn=l,s!==null&&Nf(s)),i}function Nf(i){hn===null?hn=i:hn.push.apply(hn,i)}function tS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],m=f.getSnapshot;f=f.value;try{if(!Bn(m(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Li(i,s){for(s&=~Cf,s&=~wc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-gn(s),h=1<<l;i[l]=-1,s&=~h}}function dy(i){if((Ue&6)!==0)throw Error(t(327));zo();var s=Lr(i,0);if((s&1)===0)return dn(i,tt()),null;var l=Ac(i,s);if(i.tag!==0&&l===2){var h=ja(i);h!==0&&(s=h,l=Pf(i,h))}if(l===1)throw l=yl,Os(i,0),Li(i,s),dn(i,tt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ls(i,hn,Kr),dn(i,tt()),null}function xf(i,s){var l=Ue;Ue|=1;try{return i(s)}finally{Ue=l,Ue===0&&(jo=tt()+500,ec&&ki())}}function bs(i){bi!==null&&bi.tag===0&&(Ue&6)===0&&zo();var s=Ue;Ue|=1;var l=Dn.transition,h=Oe;try{if(Dn.transition=null,Oe=1,i)return i()}finally{Oe=h,Dn.transition=l,Ue=s,(Ue&6)===0&&ki()}}function Df(){In=Uo.current,rt(Uo)}function Os(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,x0(l)),wt!==null)for(l=wt.return;l!==null;){var h=l;switch(jd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ju();break;case 3:Mo(),rt(ln),rt(qt),Zd();break;case 5:Xd(h);break;case 4:Mo();break;case 13:rt(st);break;case 19:rt(st);break;case 10:qd(h.type._context);break;case 22:case 23:Df()}l=l.return}if(bt=i,wt=i=Mi(i.current,null),jt=In=s,At=0,yl=null,Cf=wc=Ds=0,hn=vl=null,Ps!==null){for(s=0;s<Ps.length;s++)if(l=Ps[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,m=l.pending;if(m!==null){var E=m.next;m.next=f,h.next=E}l.pending=h}Ps=null}return i}function fy(i,s){do{var l=wt;try{if(Wd(),cc.current=pc,hc){for(var h=ot.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}hc=!1}if(xs=0,Dt=Rt=ot=null,dl=!1,fl=0,Sf.current=null,l===null||l.return===null){At=1,yl=s,wt=null;break}e:{var m=i,E=l.return,S=l,k=s;if(s=jt,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,K=S,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=F_(E);if(ne!==null){ne.flags&=-257,U_(ne,E,S,m,s),ne.mode&1&&V_(m,U,s),s=ne,k=U;var oe=s.updateQueue;if(oe===null){var ae=new Set;ae.add(k),s.updateQueue=ae}else oe.add(k);break e}else{if((s&1)===0){V_(m,U,s),bf();break e}k=Error(t(426))}}else if(it&&S.mode&1){var mt=F_(E);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),U_(mt,E,S,m,s),Hd(Vo(k,S));break e}}m=k=Vo(k,S),At!==4&&(At=2),vl===null?vl=[m]:vl.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var M=L_(m,k,s);l_(m,M);break e;case 1:S=k;var x=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Di===null||!Di.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=M_(m,S,s);l_(m,X);break e}}m=m.return}while(m!==null)}gy(l)}catch(ue){s=ue,wt===l&&l!==null&&(wt=l=l.return);continue}break}while(!0)}function py(){var i=Ec.current;return Ec.current=pc,i===null?pc:i}function bf(){(At===0||At===3||At===2)&&(At=4),bt===null||(Ds&268435455)===0&&(wc&268435455)===0||Li(bt,jt)}function Ac(i,s){var l=Ue;Ue|=2;var h=py();(bt!==i||jt!==s)&&(Kr=null,Os(i,s));do try{nS();break}catch(f){fy(i,f)}while(!0);if(Wd(),Ue=l,Ec.current=h,wt!==null)throw Error(t(261));return bt=null,jt=0,At}function nS(){for(;wt!==null;)my(wt)}function rS(){for(;wt!==null&&!ps();)my(wt)}function my(i){var s=vy(i.alternate,i,In);i.memoizedProps=i.pendingProps,s===null?gy(i):wt=s,Sf.current=null}function gy(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=Q0(l,s,In),l!==null){wt=l;return}}else{if(l=Y0(l,s),l!==null){l.flags&=32767,wt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{At=6,wt=null;return}}if(s=s.sibling,s!==null){wt=s;return}wt=s=i}while(s!==null);At===0&&(At=5)}function Ls(i,s,l){var h=Oe,f=Dn.transition;try{Dn.transition=null,Oe=1,iS(i,s,l,h)}finally{Dn.transition=f,Oe=h}return null}function iS(i,s,l,h){do zo();while(bi!==null);if((Ue&6)!==0)throw Error(t(327));l=i.finishedWork;var f=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var m=l.lanes|l.childLanes;if(yd(i,m),i===bt&&(wt=bt=null,jt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ic||(Ic=!0,Ey(ms,function(){return zo(),null})),m=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||m){m=Dn.transition,Dn.transition=null;var E=Oe;Oe=1;var S=Ue;Ue|=4,Sf.current=null,J0(i,l),oy(l,i),S0(Dd),Fr=!!xd,Dd=xd=null,i.current=l,Z0(l),Or(),Ue=S,Oe=E,Dn.transition=m}else i.current=l;if(Ic&&(Ic=!1,bi=i,Sc=f),m=i.pendingLanes,m===0&&(Di=null),Ou(l.stateNode),dn(i,tt()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(Tc)throw Tc=!1,i=Af,Af=null,i;return(Sc&1)!==0&&i.tag!==0&&zo(),m=i.pendingLanes,(m&1)!==0?i===kf?El++:(El=0,kf=i):El=0,ki(),null}function zo(){if(bi!==null){var i=ir(Sc),s=Dn.transition,l=Oe;try{if(Dn.transition=null,Oe=16>i?16:i,bi===null)var h=!1;else{if(i=bi,bi=null,Sc=0,(Ue&6)!==0)throw Error(t(331));var f=Ue;for(Ue|=4,ie=i.current;ie!==null;){var m=ie,E=m.child;if((ie.flags&16)!==0){var S=m.deletions;if(S!==null){for(var k=0;k<S.length;k++){var U=S[k];for(ie=U;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:_l(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var G=K.sibling,ne=K.return;if(ty(K),K===U){ie=null;break}if(G!==null){G.return=ne,ie=G;break}ie=ne}}}var oe=m.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var mt=ae.sibling;ae.sibling=null,ae=mt}while(ae!==null)}}ie=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,ie=E;else e:for(;ie!==null;){if(m=ie,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:_l(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ie=M;break e}ie=m.return}}var x=i.current;for(ie=x;ie!==null;){E=ie;var F=E.child;if((E.subtreeFlags&2064)!==0&&F!==null)F.return=E,ie=F;else e:for(E=x;ie!==null;){if(S=ie,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:vc(9,S)}}catch(ue){ct(S,S.return,ue)}if(S===E){ie=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,ie=X;break e}ie=S.return}}if(Ue=f,ki(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(gs,i)}catch{}h=!0}return h}finally{Oe=l,Dn.transition=s}}return!1}function _y(i,s,l){s=Vo(l,s),s=L_(i,s,1),i=Ni(i,s,1),s=rn(),i!==null&&(Es(i,1,s),dn(i,s))}function ct(i,s,l){if(i.tag===3)_y(i,i,l);else for(;s!==null;){if(s.tag===3){_y(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Di===null||!Di.has(h))){i=Vo(l,i),i=M_(s,i,1),s=Ni(s,i,1),i=rn(),s!==null&&(Es(s,1,i),dn(s,i));break}}s=s.return}}function sS(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=rn(),i.pingedLanes|=i.suspendedLanes&l,bt===i&&(jt&l)===l&&(At===4||At===3&&(jt&130023424)===jt&&500>tt()-Rf?Os(i,0):Cf|=l),dn(i,s)}function yy(i,s){s===0&&((i.mode&1)===0?s=1:(s=yi,yi<<=1,(yi&130023424)===0&&(yi=4194304)));var l=rn();i=Wr(i,s),i!==null&&(Es(i,s,l),dn(i,l))}function oS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),yy(i,l)}function aS(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),yy(i,l)}var vy;vy=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||ln.current)cn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return cn=!1,K0(i,s,l);cn=(i.flags&131072)!==0}else cn=!1,it&&(s.flags&1048576)!==0&&Jg(s,nc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;_c(i,s),i=s.pendingProps;var f=Po(s,qt.current);Lo(s,l),f=nf(null,s,h,i,f,l);var m=rf();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,un(h)?(m=!0,Zu(s)):m=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qd(s),f.updater=mc,s.stateNode=f,f._reactInternals=s,cf(s,h,i,l),s=pf(null,s,h,!0,m,l)):(s.tag=0,it&&m&&Ud(s),nn(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(_c(i,s),i=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=uS(h),i=$n(h,i),f){case 0:s=ff(null,s,h,i,l);break e;case 1:s=W_(null,s,h,i,l);break e;case 11:s=j_(null,s,h,i,l);break e;case 14:s=z_(null,s,h,$n(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),ff(i,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),W_(i,s,h,f,l);case 3:e:{if(q_(s),i===null)throw Error(t(387));h=s.pendingProps,m=s.memoizedState,f=m.element,a_(i,s),lc(s,h,null,l);var E=s.memoizedState;if(h=E.element,m.isDehydrated)if(m={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){f=Vo(Error(t(423)),s),s=G_(i,s,h,l,f);break e}else if(h!==f){f=Vo(Error(t(424)),s),s=G_(i,s,h,l,f);break e}else for(Tn=Ci(s.stateNode.containerInfo.firstChild),wn=s,it=!0,Hn=null,l=s_(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Do(),h===f){s=Gr(i,s,l);break e}nn(i,s,h,l)}s=s.child}return s;case 5:return c_(s),i===null&&Bd(s),h=s.type,f=s.pendingProps,m=i!==null?i.memoizedProps:null,E=f.children,bd(h,f)?E=null:m!==null&&bd(h,m)&&(s.flags|=32),$_(i,s),nn(i,s,E,l),s.child;case 6:return i===null&&Bd(s),null;case 13:return K_(i,s,l);case 4:return Yd(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=bo(s,null,h,l):nn(i,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),j_(i,s,h,f,l);case 7:return nn(i,s,s.pendingProps,l),s.child;case 8:return nn(i,s,s.pendingProps.children,l),s.child;case 12:return nn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,m=s.memoizedProps,E=f.value,Je(sc,h._currentValue),h._currentValue=E,m!==null)if(Bn(m.value,E)){if(m.children===f.children&&!ln.current){s=Gr(i,s,l);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){E=m.child;for(var k=S.firstContext;k!==null;){if(k.context===h){if(m.tag===1){k=qr(-1,l&-l),k.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?k.next=k:(k.next=K.next,K.next=k),U.pending=k}}m.lanes|=l,k=m.alternate,k!==null&&(k.lanes|=l),Gd(m.return,l,s),S.lanes|=l;break}k=k.next}}else if(m.tag===10)E=m.type===s.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=l,S=E.alternate,S!==null&&(S.lanes|=l),Gd(E,l,s),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===s){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}nn(i,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Lo(s,l),f=Nn(f),h=h(f),s.flags|=1,nn(i,s,h,l),s.child;case 14:return h=s.type,f=$n(h,s.pendingProps),f=$n(h.type,f),z_(i,s,h,f,l);case 15:return B_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),_c(i,s),s.tag=1,un(h)?(i=!0,Zu(s)):i=!1,Lo(s,l),b_(s,h,f),cf(s,h,f,l),pf(null,s,h,!0,i,l);case 19:return Y_(i,s,l);case 22:return H_(i,s,l)}throw Error(t(156,s.tag))};function Ey(i,s){return Va(i,s)}function lS(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(i,s,l,h){return new lS(i,s,l,h)}function Of(i){return i=i.prototype,!(!i||!i.isReactComponent)}function uS(i){if(typeof i=="function")return Of(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===yt)return 14}return 2}function Mi(i,s){var l=i.alternate;return l===null?(l=bn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function kc(i,s,l,h,f,m){var E=2;if(h=i,typeof i=="function")Of(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case P:return Ms(l.children,f,m,s);case C:E=8,f|=8;break;case A:return i=bn(12,l,s,f|2),i.elementType=A,i.lanes=m,i;case R:return i=bn(13,l,s,f),i.elementType=R,i.lanes=m,i;case Ge:return i=bn(19,l,s,f),i.elementType=Ge,i.lanes=m,i;case we:return Pc(l,f,m,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case D:E=10;break e;case N:E=9;break e;case L:E=11;break e;case yt:E=14;break e;case Ct:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=bn(E,l,s,f),s.elementType=i,s.type=h,s.lanes=m,s}function Ms(i,s,l,h){return i=bn(7,i,h,s),i.lanes=l,i}function Pc(i,s,l,h){return i=bn(22,i,h,s),i.elementType=we,i.lanes=l,i.stateNode={isHidden:!1},i}function Lf(i,s,l){return i=bn(6,i,null,s),i.lanes=l,i}function Mf(i,s,l){return s=bn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function cS(i,s,l,h,f){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Vf(i,s,l,h,f,m,E,S,k){return i=new cS(i,s,l,S,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=bn(3,null,null,s),i.current=m,m.stateNode=i,m.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qd(m),i}function hS(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function wy(i){if(!i)return Ai;i=i._reactInternals;e:{if(jn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(un(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(un(l))return Qg(i,l,s)}return s}function Ty(i,s,l,h,f,m,E,S,k){return i=Vf(l,h,!0,i,f,m,E,S,k),i.context=wy(null),l=i.current,h=rn(),f=Oi(l),m=qr(h,f),m.callback=s??null,Ni(l,m,f),i.current.lanes=f,Es(i,f,h),dn(i,h),i}function Nc(i,s,l,h){var f=s.current,m=rn(),E=Oi(f);return l=wy(l),s.context===null?s.context=l:s.pendingContext=l,s=qr(m,E),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Ni(f,s,E),i!==null&&(Gn(i,f,E,m),ac(i,f,E)),E}function xc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Iy(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Ff(i,s){Iy(i,s),(i=i.alternate)&&Iy(i,s)}function dS(){return null}var Sy=typeof reportError=="function"?reportError:function(i){console.error(i)};function Uf(i){this._internalRoot=i}Dc.prototype.render=Uf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Nc(i,s,null,null)},Dc.prototype.unmount=Uf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;bs(function(){Nc(null,i,null,null)}),s[zr]=null}};function Dc(i){this._internalRoot=i}Dc.prototype.unstable_scheduleHydration=function(i){if(i){var s=qa();i={blockedOn:null,target:i,priority:s};for(var l=0;l<_n.length&&s!==0&&s<_n[l].priority;l++);_n.splice(l,0,i),l===0&&fo(i)}};function jf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function bc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Cy(){}function fS(i,s,l,h,f){if(f){if(typeof h=="function"){var m=h;h=function(){var U=xc(E);m.call(U)}}var E=Ty(s,h,i,0,null,!1,!1,"",Cy);return i._reactRootContainer=E,i[zr]=E.current,il(i.nodeType===8?i.parentNode:i),bs(),E}for(;f=i.lastChild;)i.removeChild(f);if(typeof h=="function"){var S=h;h=function(){var U=xc(k);S.call(U)}}var k=Vf(i,0,!1,null,null,!1,!1,"",Cy);return i._reactRootContainer=k,i[zr]=k.current,il(i.nodeType===8?i.parentNode:i),bs(function(){Nc(s,k,l,h)}),k}function Oc(i,s,l,h,f){var m=l._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var S=f;f=function(){var k=xc(E);S.call(k)}}Nc(s,E,i,f)}else E=fS(l,s,i,f,h);return xc(E)}$a=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=$e(s.pendingLanes);l!==0&&(Ha(s,l|1),dn(s,tt()),(Ue&6)===0&&(jo=tt()+500,ki()))}break;case 13:bs(function(){var h=Wr(i,1);if(h!==null){var f=rn();Gn(h,i,1,f)}}),Ff(i,1)}},co=function(i){if(i.tag===13){var s=Wr(i,134217728);if(s!==null){var l=rn();Gn(s,i,134217728,l)}Ff(i,134217728)}},Wa=function(i){if(i.tag===13){var s=Oi(i),l=Wr(i,s);if(l!==null){var h=rn();Gn(l,i,s,h)}Ff(i,s)}},qa=function(){return Oe},Ga=function(i,s){var l=Oe;try{return Oe=i,s()}finally{Oe=l}},xr=function(i,s,l){switch(s){case"input":if(cs(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var f=Xu(h);if(!f)throw Error(t(90));ka(h),cs(h,f)}}}break;case"textarea":Tu(i,l);break;case"select":s=l.value,s!=null&&Fn(i,!!l.multiple,s,!1)}},Cu=xf,Ru=bs;var pS={usingClientEntryPoint:!1,Events:[al,Ao,Xu,pi,mi,xf]},wl={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:wl.bundleType,version:wl.version,rendererPackageName:wl.rendererPackageName,rendererConfig:wl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=bu(i),i===null?null:i.stateNode},findFiberByHostInstance:wl.findFiberByHostInstance||dS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{gs=Lc.inject(mS),mn=Lc}catch{}}return fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS,fn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(s))throw Error(t(200));return hS(i,s,null,l)},fn.createRoot=function(i,s){if(!jf(i))throw Error(t(299));var l=!1,h="",f=Sy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Vf(i,1,!1,null,null,l,!1,h,f),i[zr]=s.current,il(i.nodeType===8?i.parentNode:i),new Uf(s)},fn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=bu(s),i=i===null?null:i.stateNode,i},fn.flushSync=function(i){return bs(i)},fn.hydrate=function(i,s,l){if(!bc(s))throw Error(t(200));return Oc(null,i,s,!0,l)},fn.hydrateRoot=function(i,s,l){if(!jf(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,m="",E=Sy;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=Ty(s,null,i,1,l??null,f,!1,m,E),i[zr]=s.current,il(i),h)for(i=0;i<h.length;i++)l=h[i],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new Dc(s)},fn.render=function(i,s,l){if(!bc(s))throw Error(t(200));return Oc(null,i,s,!1,l)},fn.unmountComponentAtNode=function(i){if(!bc(i))throw Error(t(40));return i._reactRootContainer?(bs(function(){Oc(null,null,i,!1,function(){i._reactRootContainer=null,i[zr]=null})}),!0):!1},fn.unstable_batchedUpdates=xf,fn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!bc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Oc(i,s,l,!1,h)},fn.version="18.3.1-next-f1338f8080-20240426",fn}var by;function IS(){if(by)return Hf.exports;by=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Hf.exports=TS(),Hf.exports}var Oy;function SS(){if(Oy)return Mc;Oy=1;var n=IS();return Mc.createRoot=n.createRoot,Mc.hydrateRoot=n.hydrateRoot,Mc}var CS=SS(),Ke=nm();const RS=()=>{};var Ly={};/**
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
 */const WE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const J=function(n,e){if(!n)throw va(e)},va=function(n){return new Error("Firebase Database ("+WE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const qE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},AS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,p=o+2<n.length,_=p?n[o+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|_>>6,O=_&63;p||(O=64,u||(T=64)),r.push(t[v],t[w],t[T],t[O])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):AS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||_==null||w==null)throw new kS;const T=a<<2|d>>4;if(r.push(T),_!==64){const O=d<<4&240|_>>2;if(r.push(O),w!==64){const z=_<<6&192|w;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GE=function(n){const e=qE(n);return rm.encodeByteArray(e,!0)},sh=function(n){return GE(n).replace(/\./g,"")},oh=function(n){try{return rm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function PS(n){return KE(void 0,n)}function KE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!NS(t)||(n[t]=KE(n[t],e[t]));return n}function NS(n){return n!=="__proto__"}/**
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
 */function xS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DS=()=>xS().__FIREBASE_DEFAULTS__,bS=()=>{if(typeof process>"u"||typeof Ly>"u")return;const n=Ly.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},OS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oh(n[1]);return e&&JSON.parse(e)},Vh=()=>{try{return RS()||DS()||bS()||OS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},QE=n=>{var e,t;return(t=(e=Vh())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},im=n=>{const e=QE(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},YE=()=>{var n;return(n=Vh())==null?void 0:n.config},XE=n=>{var e;return(e=Vh())==null?void 0:e[`_${n}`]};/**
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
 */class iu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[sh(JSON.stringify(t)),sh(JSON.stringify(u)),""].join(".")}const xl={};function LS(){const n={prod:[],emulator:[]};for(const e of Object.keys(xl))xl[e]?n.emulator.push(e):n.prod.push(e);return n}function MS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let My=!1;function Uh(n,e){if(typeof window>"u"||typeof document>"u"||!oi(window.location.host)||xl[n]===e||xl[n]||My)return;xl[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=LS().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,O){T.setAttribute("width","24"),T.setAttribute("id",O),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function _(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{My=!0,u()},T}function v(T,O){T.setAttribute("id",O),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=MS(r),O=t("text"),z=document.getElementById(O)||document.createElement("span"),W=t("learnmore"),B=document.getElementById(W)||document.createElement("a"),se=t("preprendIcon"),he=document.getElementById(se)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const de=T.element;d(de),v(B,W);const me=_();p(he,se),de.append(he,z,B,me),document.body.appendChild(de)}a?(z.innerText="Preview backend disconnected.",he.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(he.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function om(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function VS(){var e;const n=(e=Vh())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function US(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function JE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jS(){const n=Zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zS(){return WE.NODE_ADMIN===!0}function BS(){return!VS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HS(){try{return typeof indexedDB=="object"}catch{return!1}}function $S(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const WS="FirebaseError";class kr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=WS,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,su.prototype.create)}}class su{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?qS(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new kr(o,d,r)}}function qS(n,e){return n.replace(GS,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const GS=/\{\$([^}]+)}/g;/**
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
 */function Hl(n){return JSON.parse(n)}function Pt(n){return JSON.stringify(n)}/**
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
 */const ZE=function(n){let e={},t={},r={},o="";try{const a=n.split(".");e=Hl(oh(a[0])||""),t=Hl(oh(a[1])||""),o=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:o}},KS=function(n){const e=ZE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},QS=function(n){const e=ZE(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Pr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function sa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function pp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ah(n,e,t){const r={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=e.call(t,n[o],o,n));return r}function Ji(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Vy(a)&&Vy(u)){if(!Ji(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Vy(n){return n!==null&&typeof n=="object"}/**
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
 */function Ea(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class YS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const T=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(T<<1|T>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],p=this.chain_[4],_,v;for(let w=0;w<80;w++){w<40?w<20?(_=d^a&(u^d),v=1518500249):(_=a^u^d,v=1859775393):w<60?(_=a&u|d&(a|u),v=2400959708):(_=a^u^d,v=3395469782);const T=(o<<5|o>>>27)+_+p+v+r[w]&4294967295;p=d,d=u,u=(a<<30|a>>>2)&4294967295,a=o,o=T}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let o=0;const a=this.buf_;let u=this.inbuf_;for(;o<t;){if(u===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}else for(;o<t;)if(a[u]=e[o],++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[o]>>a&255,++r;return e}}function XS(n,e){const t=new JS(n,e);return t.subscribe.bind(t)}class JS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=qf),o.error===void 0&&(o.error=qf),o.complete===void 0&&(o.complete=qf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qf(){}function jh(n,e){return`${n} failed: ${e} argument `}/**
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
 */const eC=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>=55296&&o<=56319){const a=o-55296;r++,J(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;o=65536+(a<<10)+u}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},zh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function en(n){return n&&n._delegate?n._delegate:n}class ti{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vs="[DEFAULT]";/**
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
 */class tC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new iu;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rC(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nC(n){return n===Vs?void 0:n}function rC(n){return n.instantiationMode==="EAGER"}/**
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
 */class iC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const sC={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},oC=De.INFO,aC={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},lC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=aC[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bh{constructor(e){this.name=e,this._logLevel=oC,this._logHandler=lC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const uC=(n,e)=>e.some(t=>n instanceof t);let Fy,Uy;function cC(){return Fy||(Fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hC(){return Uy||(Uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,mp=new WeakMap,tw=new WeakMap,Gf=new WeakMap,am=new WeakMap;function dC(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Wi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&ew.set(t,n)}).catch(()=>{}),am.set(e,n),e}function fC(n){if(mp.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});mp.set(n,e)}let gp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pC(n){gp=n(gp)}function mC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Kf(this),e,...t);return tw.set(r,e.sort?e.sort():[e]),Wi(r)}:hC().includes(n)?function(...e){return n.apply(Kf(this),e),Wi(ew.get(this))}:function(...e){return Wi(n.apply(Kf(this),e))}}function gC(n){return typeof n=="function"?mC(n):(n instanceof IDBTransaction&&fC(n),uC(n,cC())?new Proxy(n,gp):n)}function Wi(n){if(n instanceof IDBRequest)return dC(n);if(Gf.has(n))return Gf.get(n);const e=gC(n);return e!==n&&(Gf.set(n,e),am.set(e,n)),e}const Kf=n=>am.get(n);function _C(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Wi(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Wi(u.result),p.oldVersion,p.newVersion,Wi(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const yC=["get","getKey","getAll","getAllKeys","count"],vC=["put","add","delete","clear"],Qf=new Map;function jy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qf.get(e))return Qf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=vC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||yC.includes(t)))return;const a=async function(u,...d){const p=this.transaction(u,o?"readwrite":"readonly");let _=p.store;return r&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&p.done]))[0]};return Qf.set(e,a),a}pC(n=>({...n,get:(e,t,r)=>jy(e,t)||n.get(e,t,r),has:(e,t)=>!!jy(e,t)||n.has(e,t)}));/**
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
 */class EC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _p="@firebase/app",zy="0.14.5";/**
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
 */const ni=new Bh("@firebase/app"),TC="@firebase/app-compat",IC="@firebase/analytics-compat",SC="@firebase/analytics",CC="@firebase/app-check-compat",RC="@firebase/app-check",AC="@firebase/auth",kC="@firebase/auth-compat",PC="@firebase/database",NC="@firebase/data-connect",xC="@firebase/database-compat",DC="@firebase/functions",bC="@firebase/functions-compat",OC="@firebase/installations",LC="@firebase/installations-compat",MC="@firebase/messaging",VC="@firebase/messaging-compat",FC="@firebase/performance",UC="@firebase/performance-compat",jC="@firebase/remote-config",zC="@firebase/remote-config-compat",BC="@firebase/storage",HC="@firebase/storage-compat",$C="@firebase/firestore",WC="@firebase/ai",qC="@firebase/firestore-compat",GC="firebase",KC="12.5.0";/**
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
 */const yp="[DEFAULT]",QC={[_p]:"fire-core",[TC]:"fire-core-compat",[SC]:"fire-analytics",[IC]:"fire-analytics-compat",[RC]:"fire-app-check",[CC]:"fire-app-check-compat",[AC]:"fire-auth",[kC]:"fire-auth-compat",[PC]:"fire-rtdb",[NC]:"fire-data-connect",[xC]:"fire-rtdb-compat",[DC]:"fire-fn",[bC]:"fire-fn-compat",[OC]:"fire-iid",[LC]:"fire-iid-compat",[MC]:"fire-fcm",[VC]:"fire-fcm-compat",[FC]:"fire-perf",[UC]:"fire-perf-compat",[jC]:"fire-rc",[zC]:"fire-rc-compat",[BC]:"fire-gcs",[HC]:"fire-gcs-compat",[$C]:"fire-fst",[qC]:"fire-fst-compat",[WC]:"fire-vertex","fire-js":"fire-js",[GC]:"fire-js-all"};/**
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
 */const lh=new Map,YC=new Map,vp=new Map;function By(n,e){try{n.container.addComponent(e)}catch(t){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zi(n){const e=n.name;if(vp.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;vp.set(e,n);for(const t of lh.values())By(t,n);for(const t of YC.values())By(t,n);return!0}function ou(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Cn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const XC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qi=new su("app","Firebase",XC);/**
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
 */class JC{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
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
 */const us=KC;function nw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:yp,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw qi.create("bad-app-name",{appName:String(o)});if(t||(t=YE()),!t)throw qi.create("no-options");const a=lh.get(o);if(a){if(Ji(t,a.options)&&Ji(r,a.config))return a;throw qi.create("duplicate-app",{appName:o})}const u=new iC(o);for(const p of vp.values())u.addComponent(p);const d=new JC(t,r,u);return lh.set(o,d),d}function Hh(n=yp){const e=lh.get(n);if(!e&&n===yp&&YE())return nw();if(!e)throw qi.create("no-app",{appName:n});return e}function Mn(n,e,t){let r=QC[n]??n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(u.join(" "));return}Zi(new ti(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ZC="firebase-heartbeat-database",eR=1,$l="firebase-heartbeat-store";let Yf=null;function rw(){return Yf||(Yf=_C(ZC,eR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($l)}catch(t){console.warn(t)}}}}).catch(n=>{throw qi.create("idb-open",{originalErrorMessage:n.message})})),Yf}async function tR(n){try{const t=(await rw()).transaction($l),r=await t.objectStore($l).get(iw(n));return await t.done,r}catch(e){if(e instanceof kr)ni.warn(e.message);else{const t=qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ni.warn(t.message)}}}async function Hy(n,e){try{const r=(await rw()).transaction($l,"readwrite");await r.objectStore($l).put(e,iw(n)),await r.done}catch(t){if(t instanceof kr)ni.warn(t.message);else{const r=qi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ni.warn(r.message)}}}function iw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nR=1024,rR=30;class iR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=$y();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>rR){const u=aR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ni.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$y(),{heartbeatsToSend:r,unsentEntries:o}=sR(this._heartbeatsCache.heartbeats),a=sh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ni.warn(t),""}}}function $y(){return new Date().toISOString().substring(0,10)}function sR(n,e=nR){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),Wy(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Wy(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class oR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HS()?$S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wy(n){return sh(JSON.stringify({version:2,heartbeats:n})).length}function aR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function lR(n){Zi(new ti("platform-logger",e=>new EC(e),"PRIVATE")),Zi(new ti("heartbeat",e=>new iR(e),"PRIVATE")),Mn(_p,zy,n),Mn(_p,zy,"esm2020"),Mn("fire-js","")}lR("");function sw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uR=sw,ow=new su("auth","Firebase",sw());/**
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
 */const uh=new Bh("@firebase/auth");function cR(n,...e){uh.logLevel<=De.WARN&&uh.warn(`Auth (${us}): ${n}`,...e)}function Kc(n,...e){uh.logLevel<=De.ERROR&&uh.error(`Auth (${us}): ${n}`,...e)}/**
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
 */function Sr(n,...e){throw um(n,...e)}function Jn(n,...e){return um(n,...e)}function lm(n,e,t){const r={...uR(),[e]:t};return new su("auth","Firebase",r).create(e,{appName:n.name})}function Bs(n){return lm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hR(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sr(n,"argument-error"),lm(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function um(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ow.create(n,...e)}function Ee(n,e,...t){if(!n)throw um(e,...t)}function Yr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kc(e),new Error(e)}function ri(n,e){n||Yr(e)}/**
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
 */function Ep(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function dR(){return qy()==="http:"||qy()==="https:"}function qy(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function fR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dR()||US()||"connection"in navigator)?navigator.onLine:!0}function pR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class au{constructor(e,t){this.shortDelay=e,this.longDelay=t,ri(t>e,"Short delay should be less than long delay!"),this.isMobile=om()||JE()}get(){return fR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cm(n,e){ri(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class aw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_R=new au(3e4,6e4);function hm(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function wa(n,e,t,r,o={}){return lw(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Ea({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:p,...a};return FS()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&oi(n.emulatorConfig.host)&&(_.credentials="include"),aw.fetch()(await uw(n,n.config.apiHost,t,d),_)})}async function lw(n,e,t){n._canInitEmulator=!1;const r={...mR,...e};try{const o=new vR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Vc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[p,_]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vc(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Vc(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Vc(n,"user-disabled",u);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw lm(n,v,_);Sr(n,v)}}catch(o){if(o instanceof kr)throw o;Sr(n,"network-request-failed",{message:String(o)})}}async function yR(n,e,t,r,o={}){const a=await wa(n,e,t,r,o);return"mfaPendingCredential"in a&&Sr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function uw(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?cm(n.config,o):`${n.config.apiScheme}://${o}`;return gR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class vR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),_R.get())})}}function Vc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Jn(n,e,r);return o.customData._tokenResponse=t,o}/**
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
 */async function ER(n,e){return wa(n,"POST","/v1/accounts:delete",e)}async function ch(n,e){return wa(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Dl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wR(n,e=!1){const t=en(n),r=await t.getIdToken(e),o=dm(r);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Dl(Xf(o.auth_time)),issuedAtTime:Dl(Xf(o.iat)),expirationTime:Dl(Xf(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Xf(n){return Number(n)*1e3}function dm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=oh(t);return o?JSON.parse(o):(Kc("Failed to decode base64 JWT payload"),null)}catch(o){return Kc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Gy(n){const e=dm(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wl(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kr&&TR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function TR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class IR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dl(this.lastLoginAt),this.creationTime=Dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hh(n){var w;const e=n.auth,t=await n.getIdToken(),r=await Wl(n,ch(e,{idToken:t}));Ee(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const a=(w=o.providerUserInfo)!=null&&w.length?cw(o.providerUserInfo):[],u=CR(n.providerData,a),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),_=d?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new wp(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function SR(n){const e=en(n);await hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CR(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function cw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function RR(n,e){const t=await lw(n,{},async()=>{const r=Ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await uw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:r};return n.emulatorConfig&&oi(n.emulatorConfig.host)&&(p.credentials="include"),aw.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AR(n,e){return wa(n,"POST","/v2/accounts:revokeToken",hm(n,e))}/**
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
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Gy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await RR(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new Qo;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Ee(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return Yr("not implemented")}}/**
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
 */function Fi(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qn{constructor({uid:e,auth:t,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new IR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new wp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Wl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wR(this,e)}reload(){return SR(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(Bs(this.auth));const e=await this.getIdToken();return await Wl(this,ER(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,o=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,_=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:w,emailVerified:T,isAnonymous:O,providerData:z,stsTokenManager:W}=t;Ee(w&&W,e,"internal-error");const B=Qo.fromJSON(this.name,W);Ee(typeof w=="string",e,"internal-error"),Fi(r,e.name),Fi(o,e.name),Ee(typeof T=="boolean",e,"internal-error"),Ee(typeof O=="boolean",e,"internal-error"),Fi(a,e.name),Fi(u,e.name),Fi(d,e.name),Fi(p,e.name),Fi(_,e.name),Fi(v,e.name);const se=new Qn({uid:w,auth:e,email:o,emailVerified:T,displayName:r,isAnonymous:O,photoURL:u,phoneNumber:a,tenantId:d,stsTokenManager:B,createdAt:_,lastLoginAt:v});return z&&Array.isArray(z)&&(se.providerData=z.map(he=>({...he}))),p&&(se._redirectEventId=p),se}static async _fromIdTokenResponse(e,t,r=!1){const o=new Qo;o.updateFromServerResponse(t);const a=new Qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await hh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?cw(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new Qo;d.updateFromIdToken(r);const p=new Qn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new wp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,_),p}}/**
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
 */const Ky=new Map;function Xr(n){ri(n instanceof Function,"Expected a class definition");let e=Ky.get(n);return e?(ri(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ky.set(n,e),e)}/**
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
 */class hw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hw.type="NONE";const Qy=hw;/**
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
 */function Qc(n,e,t){return`firebase:${n}:${e}:${t}`}class Yo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Qc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Qc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ch(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yo(Xr(Qy),e,r);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=o[0]||Xr(Qy);const u=Qc(r,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const v=await _._get(u);if(v){let w;if(typeof v=="string"){const T=await ch(e,{idToken:v}).catch(()=>{});if(!T)break;w=await Qn._fromGetAccountInfoResponse(e,T,v)}else w=Qn._fromJSON(e,v);_!==a&&(d=w),a=_;break}}catch{}const p=o.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Yo(a,e,r):(a=p[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new Yo(a,e,r))}}/**
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
 */function Yy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_w(e))return"Blackberry";if(yw(e))return"Webos";if(fw(e))return"Safari";if((e.includes("chrome/")||pw(e))&&!e.includes("edge/"))return"Chrome";if(gw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dw(n=Zt()){return/firefox\//i.test(n)}function fw(n=Zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pw(n=Zt()){return/crios\//i.test(n)}function mw(n=Zt()){return/iemobile/i.test(n)}function gw(n=Zt()){return/android/i.test(n)}function _w(n=Zt()){return/blackberry/i.test(n)}function yw(n=Zt()){return/webos/i.test(n)}function fm(n=Zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kR(n=Zt()){var e;return fm(n)&&!!((e=window.navigator)!=null&&e.standalone)}function PR(){return jS()&&document.documentMode===10}function vw(n=Zt()){return fm(n)||gw(n)||yw(n)||_w(n)||/windows phone/i.test(n)||mw(n)}/**
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
 */function Ew(n,e=[]){let t;switch(n){case"Browser":t=Yy(Zt());break;case"Worker":t=`${Yy(Zt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${us}/${r}`}/**
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
 */class NR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const p=e(a);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xR(n,e={}){return wa(n,"GET","/v2/passwordPolicy",hm(n,e))}/**
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
 */const DR=6;class bR{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??DR,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class OR{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new NR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ow,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ch(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(Cn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,d=r==null?void 0:r._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(r=p.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(Bs(this));const t=e?en(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(Bs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(Bs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xR(this),t=new bR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new su("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await AR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[Xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,o);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&cR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $h(n){return en(n)}class Xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=XS(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LR(n){pm=n}function MR(n){return pm.loadJS(n)}function VR(){return pm.gapiScript}function FR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function UR(n,e){const t=ou(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Ji(a,e??{}))return o;Sr(o,"already-initialized")}return t.initialize({options:e})}function jR(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zR(n,e,t){const r=$h(n);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=ww(e),{host:u,port:d}=BR(e),p=d===null?"":`:${d}`,_={url:`${a}//${u}${p}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(Ji(_,r.config.emulator)&&Ji(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,oi(u)?(Fh(`${a}//${u}${p}`),Uh("Auth",!0)):HR()}function ww(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function BR(n){const e=ww(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:Jy(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Jy(u)}}}function Jy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function HR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Tw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yr("not implemented")}_getIdTokenResponse(e){return Yr("not implemented")}_linkToIdToken(e,t){return Yr("not implemented")}_getReauthenticationResolver(e){return Yr("not implemented")}}/**
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
 */async function Xo(n,e){return yR(n,"POST","/v1/accounts:signInWithIdp",hm(n,e))}/**
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
 */const $R="http://localhost";class Ws extends Tw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...a}=t;if(!r||!o)return null;const u=new Ws(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Xo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xo(e,t)}buildRequest(){const e={requestUri:$R,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ea(t)}return e}}/**
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
 */class mm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lu extends mm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ui extends lu{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ui.credential(e.oauthAccessToken)}catch{return null}}}Ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ui.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ws._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qr.credential(t,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class ji extends lu{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.GITHUB_SIGN_IN_METHOD="github.com";ji.PROVIDER_ID="github.com";/**
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
 */class zi extends lu{constructor(){super("twitter.com")}static credential(e,t){return Ws._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zi.credential(t,r)}catch{return null}}}zi.TWITTER_SIGN_IN_METHOD="twitter.com";zi.PROVIDER_ID="twitter.com";/**
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
 */class oa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Qn._fromIdTokenResponse(e,r,o),u=Zy(r);return new oa({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=Zy(r);return new oa({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function Zy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class dh extends kr{constructor(e,t,r,o){super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new dh(e,t,r,o)}}function Iw(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(n,a,e,r):a})}async function WR(n,e,t=!1){const r=await Wl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return oa._forOperation(n,"link",r)}/**
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
 */async function qR(n,e,t=!1){const{auth:r}=n;if(Cn(r.app))return Promise.reject(Bs(r));const o="reauthenticate";try{const a=await Wl(n,Iw(r,o,e,n),t);Ee(a.idToken,r,"internal-error");const u=dm(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),oa._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Sr(r,"user-mismatch"),a}}/**
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
 */async function GR(n,e,t=!1){if(Cn(n.app))return Promise.reject(Bs(n));const r="signIn",o=await Iw(n,r,e),a=await oa._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}function KR(n,e,t,r){return en(n).onIdTokenChanged(e,t,r)}function QR(n,e,t){return en(n).beforeAuthStateChanged(e,t)}function YR(n,e,t,r){return en(n).onAuthStateChanged(e,t,r)}function XR(n){return en(n).signOut()}const fh="__sak";/**
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
 */class Sw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fh,"1"),this.storage.removeItem(fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const JR=1e3,ZR=10;class Cw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);PR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ZR):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},JR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cw.type="LOCAL";const e1=Cw;/**
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
 */class Rw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rw.type="SESSION";const Aw=Rw;/**
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
 */function t1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,a)),p=await t1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wh.receivers=[];/**
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
 */function gm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class n1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,p)=>{const _=gm("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(w){const T=w;if(T.data.eventId===_)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Tr(){return window}function r1(n){Tr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(){return typeof Tr().WorkerGlobalScope<"u"&&typeof Tr().importScripts=="function"}async function i1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function o1(){return kw()?self:null}/**
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
 */const Pw="firebaseLocalStorageDb",a1=1,ph="firebaseLocalStorage",Nw="fbase_key";class uu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qh(n,e){return n.transaction([ph],e?"readwrite":"readonly").objectStore(ph)}function l1(){const n=indexedDB.deleteDatabase(Pw);return new uu(n).toPromise()}function Tp(){const n=indexedDB.open(Pw,a1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ph,{keyPath:Nw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ph)?e(r):(r.close(),await l1(),e(await Tp()))})})}async function ev(n,e,t){const r=qh(n,!0).put({[Nw]:e,value:t});return new uu(r).toPromise()}async function u1(n,e){const t=qh(n,!1).get(e),r=await new uu(t).toPromise();return r===void 0?null:r.value}function tv(n,e){const t=qh(n,!0).delete(e);return new uu(t).toPromise()}const c1=800,h1=3;class xw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>h1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wh._getInstance(o1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await i1(),!this.activeServiceWorker)return;this.sender=new n1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||s1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tp();return await ev(e,fh,"1"),await tv(e,fh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ev(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>u1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=qh(o,!1).getAll();return new uu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xw.type="LOCAL";const d1=xw;new au(3e4,6e4);/**
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
 */function Dw(n,e){return e?Xr(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _m extends Tw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function f1(n){return GR(n.auth,new _m(n),n.bypassAuthState)}function p1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),qR(t,new _m(n),n.bypassAuthState)}async function m1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),WR(t,new _m(n),n.bypassAuthState)}/**
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
 */class bw{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f1;case"linkViaPopup":case"linkViaRedirect":return m1;case"reauthViaPopup":case"reauthViaRedirect":return p1;default:Sr(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const g1=new au(2e3,1e4);async function _1(n,e,t){if(Cn(n.app))return Promise.reject(Jn(n,"operation-not-supported-in-this-environment"));const r=$h(n);hR(n,e,mm);const o=Dw(r,t);return new Us(r,"signInViaPopup",e,o).executeNotNull()}class Us extends bw{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,g1.get())};e()}}Us.currentPopupAction=null;/**
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
 */const y1="pendingRedirect",Yc=new Map;class v1 extends bw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const r=await E1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E1(n,e){const t=I1(e),r=T1(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function w1(n,e){Yc.set(n._key(),e)}function T1(n){return Xr(n._redirectPersistence)}function I1(n){return Qc(y1,n.config.apiKey,n.name)}async function S1(n,e,t=!1){if(Cn(n.app))return Promise.reject(Bs(n));const r=$h(n),o=Dw(r,e),u=await new v1(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const C1=600*1e3;class R1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ow(e)){const o=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=C1&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ow({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ow(n);default:return!1}}/**
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
 */async function k1(n,e={}){return wa(n,"GET","/v1/projects",e)}/**
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
 */const P1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N1=/^https?/;async function x1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await k1(n);for(const t of e)try{if(D1(t))return}catch{}Sr(n,"unauthorized-domain")}function D1(n){const e=Ep(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!N1.test(t))return!1;if(P1.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new au(3e4,6e4);function rv(){const n=Tr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function O1(n){return new Promise((e,t)=>{var o,a,u;function r(){rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rv(),t(Jn(n,"network-request-failed"))},timeout:b1.get()})}if((a=(o=Tr().gapi)==null?void 0:o.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((u=Tr().gapi)!=null&&u.load)r();else{const d=FR("iframefcb");return Tr()[d]=()=>{gapi.load?r():t(Jn(n,"network-request-failed"))},MR(`${VR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Xc=null,e})}let Xc=null;function L1(n){return Xc=Xc||O1(n),Xc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=new au(5e3,15e3),V1="__/auth/iframe",F1="emulator/auth/iframe",U1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z1(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cm(e,F1):`https://${n.config.authDomain}/${V1}`,r={apiKey:e.apiKey,appName:n.name,v:us},o=j1.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ea(r).slice(1)}`}async function B1(n){const e=await L1(n),t=Tr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:z1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U1,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Jn(n,"network-request-failed"),d=Tr().setTimeout(()=>{a(u)},M1.get());function p(){Tr().clearTimeout(d),o(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$1=500,W1=600,q1="_blank",G1="http://localhost";class iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K1(n,e,t,r=$1,o=W1){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p={...H1,width:r.toString(),height:o.toString(),top:a,left:u},_=Zt().toLowerCase();t&&(d=pw(_)?q1:t),dw(_)&&(e=e||G1,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[O,z])=>`${T}${O}=${z},`,"");if(kR(_)&&d!=="_self")return Q1(e||"",d),new iv(null);const w=window.open(e||"",d,v);Ee(w,n,"popup-blocked");try{w.focus()}catch{}return new iv(w)}function Q1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Y1="__/auth/handler",X1="emulator/auth/handler",J1=encodeURIComponent("fac");async function sv(n,e,t,r,o,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:us,eventId:o};if(e instanceof mm){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",pp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof lu){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),_=p?`#${J1}=${encodeURIComponent(p)}`:"";return`${Z1(n)}?${Ea(d).slice(1)}${_}`}function Z1({config:n}){return n.emulator?cm(n,X1):`https://${n.authDomain}/${Y1}`}/**
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
 */const Jf="webStorageSupport";class eA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=S1,this._overrideRedirectResult=w1}async _openPopup(e,t,r,o){var u;ri((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await sv(e,t,r,Ep(),o);return K1(e,a,gm())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await sv(e,t,r,Ep(),o);return r1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(ri(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await B1(e),r=new R1(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jf,{type:Jf},o=>{var u;const a=(u=o==null?void 0:o[0])==null?void 0:u[Jf];a!==void 0&&t(!!a),Sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=x1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vw()||fw()||fm()}}const tA=eA;var ov="@firebase/auth",av="1.11.1";/**
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
 */class nA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iA(n){Zi(new ti("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ew(n)},_=new OR(r,o,a,p);return jR(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zi(new ti("auth-internal",e=>{const t=$h(e.getProvider("auth").getImmediate());return(r=>new nA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(ov,av,rA(n)),Mn(ov,av,"esm2020")}/**
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
 */const sA=300,oA=XE("authIdTokenMaxAge")||sA;let lv=null;const aA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>oA)return;const o=t==null?void 0:t.token;lv!==o&&(lv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lA(n=Hh()){const e=ou(n,"auth");if(e.isInitialized())return e.getImmediate();const t=UR(n,{popupRedirectResolver:tA,persistence:[d1,e1,Aw]}),r=XE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=aA(a.toString());QR(t,u,()=>u(t.currentUser)),KR(t,d=>u(d))}}const o=QE("auth");return o&&zR(t,`http://${o}`),t}function uA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}LR({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Jn("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",uA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iA("Browser");var uv={};const cv="@firebase/database",hv="1.1.0";/**
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
 */let Lw="";function cA(n){Lw=n}/**
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
 */class hA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class dA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Mw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hA(e)}}catch{}return new dA},js=Mw("localStorage"),fA=Mw("sessionStorage");/**
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
 */const Jo=new Bh("@firebase/database"),pA=(function(){let n=1;return function(){return n++}})(),Vw=function(n){const e=eC(n),t=new YS;t.update(e);const r=t.digest();return rm.encodeByteArray(r)},cu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=cu.apply(null,r):typeof r=="object"?e+=Pt(r):e+=r,e+=" "}return e};let bl=null,dv=!0;const mA=function(n,e){J(!0,"Can't turn on custom loggers persistently."),Jo.logLevel=De.VERBOSE,bl=Jo.log.bind(Jo)},Bt=function(...n){if(dv===!0&&(dv=!1,bl===null&&fA.get("logging_enabled")===!0&&mA()),bl){const e=cu.apply(null,n);bl(e)}},hu=function(n){return function(...e){Bt(n,...e)}},Ip=function(...n){const e="FIREBASE INTERNAL ERROR: "+cu(...n);Jo.error(e)},ii=function(...n){const e=`FIREBASE FATAL ERROR: ${cu(...n)}`;throw Jo.error(e),new Error(e)},an=function(...n){const e="FIREBASE WARNING: "+cu(...n);Jo.warn(e)},gA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ym=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_A=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},aa="[MIN_NAME]",qs="[MAX_NAME]",Ys=function(n,e){if(n===e)return 0;if(n===aa||e===qs)return-1;if(e===aa||n===qs)return 1;{const t=fv(n),r=fv(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},yA=function(n,e){return n===e?0:n<e?-1:1},Il=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Pt(e))},vm=function(n){if(typeof n!="object"||n===null)return Pt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Pt(e[r]),t+=":",t+=vm(n[e[r]]);return t+="}",t},Fw=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let o=0;o<t;o+=e)o+e>t?r.push(n.substring(o,t)):r.push(n.substring(o,o+e));return r};function Ht(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Uw=function(n){J(!ym(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let o,a,u,d,p;n===0?(a=0,u=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const _=[];for(p=t;p;p-=1)_.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)_.push(a%2?1:0),a=Math.floor(a/2);_.push(o?1:0),_.reverse();const v=_.join("");let w="";for(p=0;p<64;p+=8){let T=parseInt(v.substr(p,8),2).toString(16);T.length===1&&(T="0"+T),w=w+T}return w.toLowerCase()},vA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const TA=new RegExp("^-?(0*)\\d{1,10}$"),IA=-2147483648,SA=2147483647,fv=function(n){if(TA.test(n)){const e=Number(n);if(e>=IA&&e<=SA)return e}return null},Ta=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw an("Exception was thrown by user callback.",t),e},Math.floor(0))}},CA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ol=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class RA{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Cn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class AA{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(e)}}class Jc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jc.OWNER="owner";/**
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
 */const Em="5",jw="v",zw="s",Bw="r",Hw="f",$w=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ww="ls",qw="p",Sp="ac",Gw="websocket",Kw="long_polling";/**
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
 */class Qw{constructor(e,t,r,o,a=!1,u="",d=!1,p=!1,_=null){this.secure=t,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function kA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Yw(n,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let r;if(e===Gw)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Kw)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kA(n)&&(t.ns=n.namespace);const o=[];return Ht(t,(a,u)=>{o.push(a+"="+u)}),r+o.join("&")}/**
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
 */class PA{constructor(){this.counters_={}}incrementCounter(e,t=1){Pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return PS(this.counters_)}}/**
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
 */const Zf={},ep={};function wm(n){const e=n.toString();return Zf[e]||(Zf[e]=new PA),Zf[e]}function NA(n,e){const t=n.toString();return ep[t]||(ep[t]=e()),ep[t]}/**
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
 */class xA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&Ta(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const pv="start",DA="close",bA="pLPCommand",OA="pRTLPCB",Xw="id",Jw="pw",Zw="ser",LA="cb",MA="seg",VA="ts",FA="d",UA="dframe",eT=1870,tT=30,jA=eT-tT,zA=25e3,BA=3e4;class Go{constructor(e,t,r,o,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hu(e),this.stats_=wm(t),this.urlFn=p=>(this.appCheckToken&&(p[Sp]=this.appCheckToken),Yw(t,Kw,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BA)),_A(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tm((...a)=>{const[u,d,p,_,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===pv)this.id=d,this.password=p;else if(u===DA)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[pv]="t",r[Zw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[jw]=Em,this.transportSessionId&&(r[zw]=this.transportSessionId),this.lastSessionId&&(r[Ww]=this.lastSessionId),this.applicationId&&(r[qw]=this.applicationId),this.appCheckToken&&(r[Sp]=this.appCheckToken),typeof location<"u"&&location.hostname&&$w.test(location.hostname)&&(r[Bw]=Hw);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Go.forceAllow_=!0}static forceDisallow(){Go.forceDisallow_=!0}static isAvailable(){return Go.forceAllow_?!0:!Go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vA()&&!EA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=GE(t),o=Fw(r,jA);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[UA]="t",r[Xw]=e,r[Jw]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Tm{constructor(e,t,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pA(),window[bA+this.uniqueCallbackIdentifier]=e,window[OA+this.uniqueCallbackIdentifier]=t,this.myIFrame=Tm.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Bt("frame writing exception"),d.stack&&Bt(d.stack),Bt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xw]=this.myID,e[Jw]=this.myPW,e[Zw]=this.currentSerial;let t=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tT+r.length<=eT;){const u=this.pendingSegs.shift();r=r+"&"+MA+o+"="+u.seg+"&"+VA+o+"="+u.ts+"&"+FA+o+"="+u.d,o++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(r,Math.floor(zA)),a=()=>{clearTimeout(o),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const HA=16384,$A=45e3;let mh=null;typeof MozWebSocket<"u"?mh=MozWebSocket:typeof WebSocket<"u"&&(mh=WebSocket);class Kn{constructor(e,t,r,o,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hu(this.connId),this.stats_=wm(t),this.connURL=Kn.connectionURL_(t,u,d,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,o,a){const u={};return u[jw]=Em,typeof location<"u"&&location.hostname&&$w.test(location.hostname)&&(u[Bw]=Hw),t&&(u[zw]=t),r&&(u[Ww]=r),o&&(u[Sp]=o),a&&(u[qw]=a),Yw(e,Gw,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,js.set("previous_websocket_failure",!0);try{let r;zS(),this.mySock=new mh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&mh!==null&&!Kn.forceDisallow_}static previouslyFailed(){return js.isInMemoryStorage||js.get("previous_websocket_failure")===!0}markConnectionHealthy(){js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Hl(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Fw(t,HA);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($A))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
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
 */class ql{static get ALL_TRANSPORTS(){return[Go,Kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Kn&&Kn.isAvailable();let r=t&&!Kn.previouslyFailed();if(e.webSocketOnly&&(t||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kn];else{const o=this.transports_=[];for(const a of ql.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);ql.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ql.globalTransportInitialized_=!1;/**
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
 */const WA=6e4,qA=5e3,GA=10*1024,KA=100*1024,tp="t",mv="d",QA="s",gv="r",YA="e",_v="o",yv="a",vv="n",Ev="p",XA="h";class JA{constructor(e,t,r,o,a,u,d,p,_,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=p,this.onKill_=_,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hu("c:"+this.id+":"),this.transportManager_=new ql(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Ol(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tp in e){const t=e[tp];t===yv?this.upgradeIfSecondaryHealthy_():t===gv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_v&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Il("t",e),r=Il("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ev,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Il("t",e),r=Il("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Il(tp,e);if(mv in e){const r=e[mv];if(t===XA){const o={...r};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===vv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===QA?this.onConnectionShutdown_(r):t===gv?this.onReset_(r):t===YA?Ip("Server Error: "+r):t===_v?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ip("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Em!==r&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Ol(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ol(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ev,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class nT{put(e,t,r,o){}merge(e,t,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class rT{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const o=this.getInitialEvent(e);o&&t.apply(r,o)}off(e,t,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!r||r===o[a].context)){o.splice(a,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class gh extends rT{static getInstance(){return new gh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!om()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const wv=32,Tv=768;class Qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function He(){return new Qe("")}function Ne(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function es(n){return n.pieces_.length-n.pieceNum_}function et(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Qe(n.pieces_,e)}function Im(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ZA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Gl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function iT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Qe(e,0)}function ht(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Qe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&t.push(r[o])}return new Qe(t,0)}function be(n){return n.pieceNum_>=n.pieces_.length}function on(n,e){const t=Ne(n),r=Ne(e);if(t===null)return e;if(t===r)return on(et(n),et(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ek(n,e){const t=Gl(n,0),r=Gl(e,0);for(let o=0;o<t.length&&o<r.length;o++){const a=Ys(t[o],r[o]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function Sm(n,e){if(es(n)!==es(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function On(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(es(n)>es(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class tk{constructor(e,t){this.errorPrefix_=t,this.parts_=Gl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=zh(this.parts_[r]);sT(this)}}function nk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=zh(e),sT(n)}function rk(n){const e=n.parts_.pop();n.byteLength_-=zh(e),n.parts_.length>0&&(n.byteLength_-=1)}function sT(n){if(n.byteLength_>Tv)throw new Error(n.errorPrefix_+"has a key path longer than "+Tv+" bytes ("+n.byteLength_+").");if(n.parts_.length>wv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wv+") or object contains a cycle "+Fs(n))}function Fs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Cm extends rT{static getInstance(){return new Cm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Sl=1e3,ik=300*1e3,Iv=30*1e3,sk=1.3,ok=3e4,ak="server_kill",Sv=3;class ei extends nT{constructor(e,t,r,o,a,u,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=ei.nextPersistentConnectionId_++,this.log_=hu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sl,this.maxReconnectDelay_=ik,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_(Pt(a)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const t=new iu,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,o){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+r+" for "+o);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const p=d.d,_=d.s;ei.warnOnListenWarnings_(p,t),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",d),_!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(_,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Pr(e,"w")){const r=sa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||QS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Iv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=KS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,o=>{const a=o.s,u=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,t)}sendUnlisten_(e,t,r,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";o&&(a.q=r,a.t=o),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,o){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,t,r,o){this.putInternal("p",e,t,r,o)}merge(e,t,r,o){this.putInternal("m",e,t,r,o)}putInternal(e,t,r,o,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ip("Unrecognized action received from server: "+Pt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ok&&(this.reconnectDelay_=Sl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+ei.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const p=function(){d?d.close():(u=!0,r())},_=function(w){J(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:p,sendRequest:_};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,T]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?Bt("getToken() completed but was canceled"):(Bt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=T&&T.token,d=new JA(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,O=>{an(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(ak)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&an(w),p())}}}interrupt(e){Bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pp(this.interruptReasons_)&&(this.reconnectDelay_=Sl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>vm(a)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const r=new Qe(e).toString();let o;if(this.listens.has(r)){const a=this.listens.get(r);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,t){Bt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sv&&(this.reconnectDelay_=Iv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Bt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Lw.replace(/\./g,"-")]=1,om()?e["framework.cordova"]=1:JE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gh.getInstance().currentlyOnline();return pp(this.interruptReasons_)&&e}}ei.nextPersistentConnectionId_=0;ei.nextConnectionId_=0;/**
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
 */class xe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new xe(e,t)}}/**
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
 */class Gh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new xe(aa,e),o=new xe(aa,t);return this.compare(r,o)!==0}minPost(){return xe.MIN}}/**
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
 */let Fc;class oT extends Gh{static get __EMPTY_NODE(){return Fc}static set __EMPTY_NODE(e){Fc=e}compare(e,t){return Ys(e.name,t.name)}isDefinedOn(e){throw va("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return xe.MIN}maxPost(){return new xe(qs,Fc)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new xe(e,Fc)}toString(){return".key"}}const Zo=new oT;/**
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
 */let Uc=class{constructor(e,t,r,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Sn=class Al{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Al.RED,this.left=o??wr.EMPTY_NODE,this.right=a??wr.EMPTY_NODE}copy(e,t,r,o,a){return new Al(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return wr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,o;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return wr.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Al.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Al.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Sn.RED=!0;Sn.BLACK=!1;class lk{copy(e,t,r,o,a){return this}insert(e,t,r){return new Sn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let wr=class Zc{constructor(e,t=Zc.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Zc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Sn.BLACK,null,null))}remove(e){return new Zc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Sn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,o=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Uc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Uc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Uc(this.root_,null,this.comparator_,!0,e)}};wr.EMPTY_NODE=new lk;/**
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
 */function uk(n,e){return Ys(n.name,e.name)}function Rm(n,e){return Ys(n,e)}/**
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
 */let Cp;function ck(n){Cp=n}const aT=function(n){return typeof n=="number"?"number:"+Uw(n):"string:"+n},lT=function(n){if(n.isLeafNode()){const e=n.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pr(e,".sv"),"Priority must be a string or number.")}else J(n===Cp||n.isEmpty(),"priority of unexpected type.");J(n===Cp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cv;class Lt{static set __childrenNodeConstructor(e){Cv=e}static get __childrenNodeConstructor(){return Cv}constructor(e,t=Lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return be(e)?this:Ne(e)===".priority"?this.priorityNode_:Lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ne(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(J(r!==".priority"||es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(et(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+aT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Uw(this.value_):e+=this.value_,this.lazyHash_=Vw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Lt.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,o=Lt.VALUE_TYPE_ORDER.indexOf(t),a=Lt.VALUE_TYPE_ORDER.indexOf(r);return J(o>=0,"Unknown leaf type: "+t),J(a>=0,"Unknown leaf type: "+r),o===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let uT,cT;function hk(n){uT=n}function dk(n){cT=n}class fk extends Gh{compare(e,t){const r=e.node.getPriority(),o=t.node.getPriority(),a=r.compareTo(o);return a===0?Ys(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return xe.MIN}maxPost(){return new xe(qs,new Lt("[PRIORITY-POST]",cT))}makePost(e,t){const r=uT(e);return new xe(t,new Lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const dt=new fk;/**
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
 */const pk=Math.log(2);class mk{constructor(e){const t=a=>parseInt(Math.log(a)/pk,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _h=function(n,e,t,r){n.sort(e);const o=function(p,_){const v=_-p;let w,T;if(v===0)return null;if(v===1)return w=n[p],T=t?t(w):w,new Sn(T,w.node,Sn.BLACK,null,null);{const O=parseInt(v/2,10)+p,z=o(p,O),W=o(O+1,_);return w=n[O],T=t?t(w):w,new Sn(T,w.node,Sn.BLACK,z,W)}},a=function(p){let _=null,v=null,w=n.length;const T=function(z,W){const B=w-z,se=w;w-=z;const he=o(B+1,se),de=n[B],me=t?t(de):de;O(new Sn(me,de.node,W,null,he))},O=function(z){_?(_.left=z,_=z):(v=z,_=z)};for(let z=0;z<p.count;++z){const W=p.nextBitIsOne(),B=Math.pow(2,p.count-(z+1));W?T(B,Sn.BLACK):(T(B,Sn.BLACK),T(B,Sn.RED))}return v},u=new mk(n.length),d=a(u);return new wr(r||e,d)};/**
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
 */let np;const Bo={};class Jr{static get Default(){return J(Bo&&dt,"ChildrenNode.ts has not been loaded"),np=np||new Jr({".priority":Bo},{".priority":dt}),np}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=sa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wr?t:null}hasIndex(e){return Pr(this.indexSet_,e.toString())}addIndex(e,t){J(e!==Zo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const a=t.getIterator(xe.Wrap);let u=a.getNext();for(;u;)o=o||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;o?d=_h(r,e.getCompare()):d=Bo;const p=e.toString(),_={...this.indexSet_};_[p]=e;const v={...this.indexes_};return v[p]=d,new Jr(v,_)}addToIndexes(e,t){const r=ah(this.indexes_,(o,a)=>{const u=sa(this.indexSet_,a);if(J(u,"Missing index implementation for "+a),o===Bo)if(u.isDefinedOn(e.node)){const d=[],p=t.getIterator(xe.Wrap);let _=p.getNext();for(;_;)_.name!==e.name&&d.push(_),_=p.getNext();return d.push(e),_h(d,u.getCompare())}else return Bo;else{const d=t.get(e.name);let p=o;return d&&(p=p.remove(new xe(e.name,d))),p.insert(e,e.node)}});return new Jr(r,this.indexSet_)}removeFromIndexes(e,t){const r=ah(this.indexes_,o=>{if(o===Bo)return o;{const a=t.get(e.name);return a?o.remove(new xe(e.name,a)):o}});return new Jr(r,this.indexSet_)}}/**
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
 */let Cl;class ge{static get EMPTY_NODE(){return Cl||(Cl=new ge(new wr(Rm),null,Jr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&lT(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cl}updatePriority(e){return this.children_.isEmpty()?this:new ge(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Cl:t}}getChild(e){const t=Ne(e);return t===null?this:this.getImmediateChild(t).getChild(et(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new xe(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=o.isEmpty()?Cl:this.priorityNode_;return new ge(o,u,a)}}updateChild(e,t){const r=Ne(e);if(r===null)return t;{J(Ne(e)!==".priority"||es(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(et(e),t);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,o=0,a=!0;if(this.forEachChild(dt,(u,d)=>{t[u]=d.val(e),r++,a&&ge.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):a=!1}),!e&&a&&o<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+aT(this.getPriority().val())+":"),this.forEachChild(dt,(t,r)=>{const o=r.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":Vw(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const o=this.resolveIndex_(r);if(o){const a=o.getPredecessorKey(new xe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new xe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new xe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,xe.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,xe.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===du?-1:0}withIndex(e){if(e===Zo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ge(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(dt),o=t.getIterator(dt);let a=r.getNext(),u=o.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=o.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Zo?null:this.indexMap_.get(e.toString())}}ge.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gk extends ge{constructor(){super(new wr(Rm),ge.EMPTY_NODE,Jr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ge.EMPTY_NODE}isEmpty(){return!1}}const du=new gk;Object.defineProperties(xe,{MIN:{value:new xe(aa,ge.EMPTY_NODE)},MAX:{value:new xe(qs,du)}});oT.__EMPTY_NODE=ge.EMPTY_NODE;Lt.__childrenNodeConstructor=ge;ck(du);dk(du);/**
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
 */const _k=!0;function kt(n,e=null){if(n===null)return ge.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Lt(t,kt(e))}if(!(n instanceof Array)&&_k){const t=[];let r=!1;if(Ht(n,(u,d)=>{if(u.substring(0,1)!=="."){const p=kt(d);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),t.push(new xe(u,p)))}}),t.length===0)return ge.EMPTY_NODE;const a=_h(t,uk,u=>u.name,Rm);if(r){const u=_h(t,dt.getCompare());return new ge(a,kt(e),new Jr({".priority":u},{".priority":dt}))}else return new ge(a,kt(e),Jr.Default)}else{let t=ge.EMPTY_NODE;return Ht(n,(r,o)=>{if(Pr(n,r)&&r.substring(0,1)!=="."){const a=kt(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(kt(e))}}hk(kt);/**
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
 */class yk extends Gh{constructor(e){super(),this.indexPath_=e,J(!be(e)&&Ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),o=this.extractChild(t.node),a=r.compareTo(o);return a===0?Ys(e.name,t.name):a}makePost(e,t){const r=kt(e),o=ge.EMPTY_NODE.updateChild(this.indexPath_,r);return new xe(t,o)}maxPost(){const e=ge.EMPTY_NODE.updateChild(this.indexPath_,du);return new xe(qs,e)}toString(){return Gl(this.indexPath_,0).join("/")}}/**
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
 */class vk extends Gh{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ys(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return xe.MIN}maxPost(){return xe.MAX}makePost(e,t){const r=kt(e);return new xe(t,r)}toString(){return".value"}}const Ek=new vk;/**
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
 */function hT(n){return{type:"value",snapshotNode:n}}function la(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Kl(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ql(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function wk(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Am{constructor(e){this.index_=e}updateChild(e,t,r,o,a,u){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(o).equals(r.getChild(o))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Kl(t,d)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(la(t,r)):u.trackChildChange(Ql(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(dt,(o,a)=>{t.hasChild(o)||r.trackChildChange(Kl(o,a))}),t.isLeafNode()||t.forEachChild(dt,(o,a)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(a)||r.trackChildChange(Ql(o,a,u))}else r.trackChildChange(la(o,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ge.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Yl{constructor(e){this.indexedFilter_=new Am(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yl.getStartPost_(e),this.endPost_=Yl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,o,a,u){return this.matches(new xe(t,r))||(r=ge.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,o,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ge.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(ge.EMPTY_NODE);const a=this;return t.forEachChild(dt,(u,d)=>{a.matches(new xe(u,d))||(o=o.updateImmediateChild(u,ge.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Tk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Yl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,o,a,u){return this.rangedFilter_.matches(new xe(t,r))||(r=ge.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,o,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let o;if(t.isLeafNode()||t.isEmpty())o=ge.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=ge.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(ge.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:o=o.updateImmediateChild(d.name,ge.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,o,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(T,O)=>w(O,T)}else u=this.index_.getCompare();const d=e;J(d.numChildren()===this.limit_,"");const p=new xe(t,r),_=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const w=d.getImmediateChild(t);let T=o.getChildAfterChild(this.index_,_,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=o.getChildAfterChild(this.index_,T,this.reverse_);const O=T==null?1:u(T,p);if(v&&!r.isEmpty()&&O>=0)return a!=null&&a.trackChildChange(Ql(t,r,w)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Kl(t,w));const W=d.updateImmediateChild(t,ge.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(la(T.name,T.node)),W.updateImmediateChild(T.name,T.node)):W}}else return r.isEmpty()?e:v&&u(_,p)>=0?(a!=null&&(a.trackChildChange(Kl(_.name,_.node)),a.trackChildChange(la(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(_.name,ge.EMPTY_NODE)):e}}/**
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
 */class km{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:aa}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===dt}copy(){const e=new km;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ik(n){return n.loadsAllData()?new Am(n.getIndex()):n.hasLimit()?new Tk(n):new Yl(n)}function Rv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===dt?t="$priority":n.index_===Ek?t="$value":n.index_===Zo?t="$key":(J(n.index_ instanceof yk,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Pt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Pt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Pt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Pt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Pt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Av(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==dt&&(e.i=n.index_.toString()),e}/**
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
 */class yh extends nT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=hu("p:rest:"),this.listens_={}}listen(e,t,r,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=yh.getListenId_(e,r),d={};this.listens_[u]=d;const p=Rv(e._queryParams);this.restRequest_(a+".json",p,(_,v)=>{let w=v;if(_===404&&(w=null,_=null),_===null&&this.onDataUpdate_(a,w,!1,r),sa(this.listens_,u)===d){let T;_?_===401?T="permission_denied":T="rest_error:"+_:T="ok",o(T,null)}})}unlisten(e,t){const r=yh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Rv(e._queryParams),r=e._path.toString(),o=new iu;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ea(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Hl(d.responseText)}catch{an("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,p)}else d.status!==401&&d.status!==404&&an("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
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
 */class Sk{constructor(){this.rootNode_=ge.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function vh(){return{value:null,children:new Map}}function dT(n,e,t){if(be(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ne(e);n.children.has(r)||n.children.set(r,vh());const o=n.children.get(r);e=et(e),dT(o,e,t)}}function Rp(n,e,t){n.value!==null?t(e,n.value):Ck(n,(r,o)=>{const a=new Qe(e.toString()+"/"+r);Rp(o,a,t)})}function Ck(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class Rk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ht(this.last_,(r,o)=>{t[r]=t[r]-o}),this.last_=e,t}}/**
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
 */const kv=10*1e3,Ak=30*1e3,kk=300*1e3;class Pk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Rk(e);const r=kv+(Ak-kv)*Math.random();Ol(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Ht(e,(o,a)=>{a>0&&Pr(this.statsToReport_,o)&&(t[o]=a,r=!0)}),r&&this.server_.reportStats(t),Ol(this.reportStats_.bind(this),Math.floor(Math.random()*2*kk))}}/**
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
 */var Yn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));function Pm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Eh{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Yn.ACK_USER_WRITE,this.source=Pm()}operationForChild(e){if(be(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Qe(e));return new Eh(He(),t,this.revert)}}else return J(Ne(this.path)===e,"operationForChild called for unrelated child."),new Eh(et(this.path),this.affectedTree,this.revert)}}/**
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
 */class Xl{constructor(e,t){this.source=e,this.path=t,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return be(this.path)?new Xl(this.source,He()):new Xl(this.source,et(this.path))}}/**
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
 */class Gs{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Yn.OVERWRITE}operationForChild(e){return be(this.path)?new Gs(this.source,He(),this.snap.getImmediateChild(e)):new Gs(this.source,et(this.path),this.snap)}}/**
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
 */class ua{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Yn.MERGE}operationForChild(e){if(be(this.path)){const t=this.children.subtree(new Qe(e));return t.isEmpty()?null:t.value?new Gs(this.source,He(),t.value):new ua(this.source,He(),t)}else return J(Ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ua(this.source,et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ts{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(be(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ne(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Nk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xk(n,e,t,r){const o=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(wk(u.childName,u.snapshotNode))}),Rl(n,o,"child_removed",e,r,t),Rl(n,o,"child_added",e,r,t),Rl(n,o,"child_moved",a,r,t),Rl(n,o,"child_changed",e,r,t),Rl(n,o,"value",e,r,t),o}function Rl(n,e,t,r,o,a){const u=r.filter(d=>d.type===t);u.sort((d,p)=>bk(n,d,p)),u.forEach(d=>{const p=Dk(n,d,a);o.forEach(_=>{_.respondsTo(d.type)&&e.push(_.createEvent(p,n.query_))})})}function Dk(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function bk(n,e,t){if(e.childName==null||t.childName==null)throw va("Should only compare child_ events.");const r=new xe(e.childName,e.snapshotNode),o=new xe(t.childName,t.snapshotNode);return n.index_.compare(r,o)}/**
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
 */function Kh(n,e){return{eventCache:n,serverCache:e}}function Ll(n,e,t,r){return Kh(new ts(e,t,r),n.serverCache)}function fT(n,e,t,r){return Kh(n.eventCache,new ts(e,t,r))}function wh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ks(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let rp;const Ok=()=>(rp||(rp=new wr(yA)),rp);class Ze{static fromObject(e){let t=new Ze(null);return Ht(e,(r,o)=>{t=t.set(new Qe(r),o)}),t}constructor(e,t=Ok()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:He(),value:this.value};if(be(e))return null;{const r=Ne(e),o=this.children.get(r);if(o!==null){const a=o.findRootMostMatchingPathAndValue(et(e),t);return a!=null?{path:ht(new Qe(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(be(e))return this;{const t=Ne(e),r=this.children.get(t);return r!==null?r.subtree(et(e)):new Ze(null)}}set(e,t){if(be(e))return new Ze(t,this.children);{const r=Ne(e),a=(this.children.get(r)||new Ze(null)).set(et(e),t),u=this.children.insert(r,a);return new Ze(this.value,u)}}remove(e){if(be(e))return this.children.isEmpty()?new Ze(null):new Ze(null,this.children);{const t=Ne(e),r=this.children.get(t);if(r){const o=r.remove(et(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new Ze(null):new Ze(this.value,a)}else return this}}get(e){if(be(e))return this.value;{const t=Ne(e),r=this.children.get(t);return r?r.get(et(e)):null}}setTree(e,t){if(be(e))return t;{const r=Ne(e),a=(this.children.get(r)||new Ze(null)).setTree(et(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new Ze(this.value,u)}}fold(e){return this.fold_(He(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((o,a)=>{r[o]=a.fold_(ht(e,o),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,He(),t)}findOnPath_(e,t,r){const o=this.value?r(t,this.value):!1;if(o)return o;if(be(e))return null;{const a=Ne(e),u=this.children.get(a);return u?u.findOnPath_(et(e),ht(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,He(),t)}foreachOnPath_(e,t,r){if(be(e))return this;{this.value&&r(t,this.value);const o=Ne(e),a=this.children.get(o);return a?a.foreachOnPath_(et(e),ht(t,o),r):new Ze(null)}}foreach(e){this.foreach_(He(),e)}foreach_(e,t){this.children.inorderTraversal((r,o)=>{o.foreach_(ht(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new Ze(null))}}function Ml(n,e,t){if(be(e))return new Zn(new Ze(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let a=r.value;const u=on(o,e);return a=a.updateChild(u,t),new Zn(n.writeTree_.set(o,a))}else{const o=new Ze(t),a=n.writeTree_.setTree(e,o);return new Zn(a)}}}function Ap(n,e,t){let r=n;return Ht(t,(o,a)=>{r=Ml(r,ht(e,o),a)}),r}function Pv(n,e){if(be(e))return Zn.empty();{const t=n.writeTree_.setTree(e,new Ze(null));return new Zn(t)}}function kp(n,e){return Xs(n,e)!=null}function Xs(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(on(t.path,e)):null}function Nv(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(dt,(r,o)=>{e.push(new xe(r,o))}):n.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new xe(r,o.value))}),e}function Gi(n,e){if(be(e))return n;{const t=Xs(n,e);return t!=null?new Zn(new Ze(t)):new Zn(n.writeTree_.subtree(e))}}function Pp(n){return n.writeTree_.isEmpty()}function ca(n,e){return pT(He(),n.writeTree_,e)}function pT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(J(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=pT(ht(n,o),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(ht(n,".priority"),r)),t}}/**
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
 */function Qh(n,e){return yT(e,n)}function Lk(n,e,t,r,o){J(r>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:o}),o&&(n.visibleWrites=Ml(n.visibleWrites,e,t)),n.lastWriteId=r}function Mk(n,e,t,r){J(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Ap(n.visibleWrites,e,t),n.lastWriteId=r}function Vk(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Fk(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let o=r.visible,a=!1,u=n.allWrites.length-1;for(;o&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&Uk(d,r.path)?o=!1:On(r.path,d.path)&&(a=!0)),u--}if(o){if(a)return jk(n),!0;if(r.snap)n.visibleWrites=Pv(n.visibleWrites,r.path);else{const d=r.children;Ht(d,p=>{n.visibleWrites=Pv(n.visibleWrites,ht(r.path,p))})}return!0}else return!1}function Uk(n,e){if(n.snap)return On(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&On(ht(n.path,t),e))return!0;return!1}function jk(n){n.visibleWrites=mT(n.allWrites,zk,He()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function zk(n){return n.visible}function mT(n,e,t){let r=Zn.empty();for(let o=0;o<n.length;++o){const a=n[o];if(e(a)){const u=a.path;let d;if(a.snap)On(t,u)?(d=on(t,u),r=Ml(r,d,a.snap)):On(u,t)&&(d=on(u,t),r=Ml(r,He(),a.snap.getChild(d)));else if(a.children){if(On(t,u))d=on(t,u),r=Ap(r,d,a.children);else if(On(u,t))if(d=on(u,t),be(d))r=Ap(r,He(),a.children);else{const p=sa(a.children,Ne(d));if(p){const _=p.getChild(et(d));r=Ml(r,He(),_)}}}else throw va("WriteRecord should have .snap or .children")}}return r}function gT(n,e,t,r,o){if(!r&&!o){const a=Xs(n.visibleWrites,e);if(a!=null)return a;{const u=Gi(n.visibleWrites,e);if(Pp(u))return t;if(t==null&&!kp(u,He()))return null;{const d=t||ge.EMPTY_NODE;return ca(u,d)}}}else{const a=Gi(n.visibleWrites,e);if(!o&&Pp(a))return t;if(!o&&t==null&&!kp(a,He()))return null;{const u=function(_){return(_.visible||o)&&(!r||!~r.indexOf(_.writeId))&&(On(_.path,e)||On(e,_.path))},d=mT(n.allWrites,u,e),p=t||ge.EMPTY_NODE;return ca(d,p)}}}function Bk(n,e,t){let r=ge.EMPTY_NODE;const o=Xs(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(dt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Gi(n.visibleWrites,e);return t.forEachChild(dt,(u,d)=>{const p=ca(Gi(a,new Qe(u)),d);r=r.updateImmediateChild(u,p)}),Nv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Gi(n.visibleWrites,e);return Nv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function Hk(n,e,t,r,o){J(r||o,"Either existingEventSnap or existingServerSnap must exist");const a=ht(e,t);if(kp(n.visibleWrites,a))return null;{const u=Gi(n.visibleWrites,a);return Pp(u)?o.getChild(t):ca(u,o.getChild(t))}}function $k(n,e,t,r){const o=ht(e,t),a=Xs(n.visibleWrites,o);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Gi(n.visibleWrites,o);return ca(u,r.getNode().getImmediateChild(t))}else return null}function Wk(n,e){return Xs(n.visibleWrites,e)}function qk(n,e,t,r,o,a,u){let d;const p=Gi(n.visibleWrites,e),_=Xs(p,He());if(_!=null)d=_;else if(t!=null)d=ca(p,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],w=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let O=T.getNext();for(;O&&v.length<o;)w(O,r)!==0&&v.push(O),O=T.getNext();return v}else return[]}function Gk(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function Th(n,e,t,r){return gT(n.writeTree,n.treePath,e,t,r)}function Dm(n,e){return Bk(n.writeTree,n.treePath,e)}function xv(n,e,t,r){return Hk(n.writeTree,n.treePath,e,t,r)}function Ih(n,e){return Wk(n.writeTree,ht(n.treePath,e))}function Kk(n,e,t,r,o,a){return qk(n.writeTree,n.treePath,e,t,r,o,a)}function bm(n,e,t){return $k(n.writeTree,n.treePath,e,t)}function _T(n,e){return yT(ht(n.treePath,e),n.writeTree)}function yT(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Qk{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Ql(r,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Kl(r,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,la(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Ql(r,e.snapshotNode,o.oldSnap));else throw va("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Yk{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const vT=new Yk;class Om{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ts(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bm(this.writes_,e,r)}}getChildAfterChild(e,t,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ks(this.viewCache_),a=Kk(this.writes_,o,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function Xk(n){return{filter:n}}function Jk(n,e){J(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Zk(n,e,t,r,o){const a=new Qk;let u,d;if(t.type===Yn.OVERWRITE){const _=t;_.source.fromUser?u=Np(n,e,_.path,_.snap,r,o,a):(J(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered()&&!be(_.path),u=Sh(n,e,_.path,_.snap,r,o,d,a))}else if(t.type===Yn.MERGE){const _=t;_.source.fromUser?u=tP(n,e,_.path,_.children,r,o,a):(J(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered(),u=xp(n,e,_.path,_.children,r,o,d,a))}else if(t.type===Yn.ACK_USER_WRITE){const _=t;_.revert?u=iP(n,e,_.path,r,o,a):u=nP(n,e,_.path,_.affectedTree,r,o,a)}else if(t.type===Yn.LISTEN_COMPLETE)u=rP(n,e,t.path,r,a);else throw va("Unknown operation type: "+t.type);const p=a.getChanges();return eP(e,u,p),{viewCache:u,changes:p}}function eP(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=wh(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(hT(wh(e)))}}function ET(n,e,t,r,o,a){const u=e.eventCache;if(Ih(r,t)!=null)return e;{let d,p;if(be(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=Ks(e),v=_ instanceof ge?_:ge.EMPTY_NODE,w=Dm(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const _=Th(r,Ks(e));d=n.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const _=Ne(t);if(_===".priority"){J(es(t)===1,"Can't have a priority with additional path components");const v=u.getNode();p=e.serverCache.getNode();const w=xv(r,t,v,p);w!=null?d=n.filter.updatePriority(v,w):d=u.getNode()}else{const v=et(t);let w;if(u.isCompleteForChild(_)){p=e.serverCache.getNode();const T=xv(r,t,u.getNode(),p);T!=null?w=u.getNode().getImmediateChild(_).updateChild(v,T):w=u.getNode().getImmediateChild(_)}else w=bm(r,_,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),_,w,v,o,a):d=u.getNode()}}return Ll(e,d,u.isFullyInitialized()||be(t),n.filter.filtersNodes())}}function Sh(n,e,t,r,o,a,u,d){const p=e.serverCache;let _;const v=u?n.filter:n.filter.getIndexedFilter();if(be(t))_=v.updateFullNode(p.getNode(),r,null);else if(v.filtersNodes()&&!p.isFiltered()){const O=p.getNode().updateChild(t,r);_=v.updateFullNode(p.getNode(),O,null)}else{const O=Ne(t);if(!p.isCompleteForPath(t)&&es(t)>1)return e;const z=et(t),B=p.getNode().getImmediateChild(O).updateChild(z,r);O===".priority"?_=v.updatePriority(p.getNode(),B):_=v.updateChild(p.getNode(),O,B,z,vT,null)}const w=fT(e,_,p.isFullyInitialized()||be(t),v.filtersNodes()),T=new Om(o,w,a);return ET(n,w,t,o,T,d)}function Np(n,e,t,r,o,a,u){const d=e.eventCache;let p,_;const v=new Om(o,e,a);if(be(t))_=n.filter.updateFullNode(e.eventCache.getNode(),r,u),p=Ll(e,_,!0,n.filter.filtersNodes());else{const w=Ne(t);if(w===".priority")_=n.filter.updatePriority(e.eventCache.getNode(),r),p=Ll(e,_,d.isFullyInitialized(),d.isFiltered());else{const T=et(t),O=d.getNode().getImmediateChild(w);let z;if(be(T))z=r;else{const W=v.getCompleteChild(w);W!=null?Im(T)===".priority"&&W.getChild(iT(T)).isEmpty()?z=W:z=W.updateChild(T,r):z=ge.EMPTY_NODE}if(O.equals(z))p=e;else{const W=n.filter.updateChild(d.getNode(),w,z,T,v,u);p=Ll(e,W,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Dv(n,e){return n.eventCache.isCompleteForChild(e)}function tP(n,e,t,r,o,a,u){let d=e;return r.foreach((p,_)=>{const v=ht(t,p);Dv(e,Ne(v))&&(d=Np(n,d,v,_,o,a,u))}),r.foreach((p,_)=>{const v=ht(t,p);Dv(e,Ne(v))||(d=Np(n,d,v,_,o,a,u))}),d}function bv(n,e,t){return t.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function xp(n,e,t,r,o,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,_;be(t)?_=r:_=new Ze(null).setTree(t,r);const v=e.serverCache.getNode();return _.children.inorderTraversal((w,T)=>{if(v.hasChild(w)){const O=e.serverCache.getNode().getImmediateChild(w),z=bv(n,O,T);p=Sh(n,p,new Qe(w),z,o,a,u,d)}}),_.children.inorderTraversal((w,T)=>{const O=!e.serverCache.isCompleteForChild(w)&&T.value===null;if(!v.hasChild(w)&&!O){const z=e.serverCache.getNode().getImmediateChild(w),W=bv(n,z,T);p=Sh(n,p,new Qe(w),W,o,a,u,d)}}),p}function nP(n,e,t,r,o,a,u){if(Ih(o,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(r.value!=null){if(be(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Sh(n,e,t,p.getNode().getChild(t),o,a,d,u);if(be(t)){let _=new Ze(null);return p.getNode().forEachChild(Zo,(v,w)=>{_=_.set(new Qe(v),w)}),xp(n,e,t,_,o,a,d,u)}else return e}else{let _=new Ze(null);return r.foreach((v,w)=>{const T=ht(t,v);p.isCompleteForPath(T)&&(_=_.set(v,p.getNode().getChild(T)))}),xp(n,e,t,_,o,a,d,u)}}function rP(n,e,t,r,o){const a=e.serverCache,u=fT(e,a.getNode(),a.isFullyInitialized()||be(t),a.isFiltered());return ET(n,u,t,r,vT,o)}function iP(n,e,t,r,o,a){let u;if(Ih(r,t)!=null)return e;{const d=new Om(r,e,o),p=e.eventCache.getNode();let _;if(be(t)||Ne(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Th(r,Ks(e));else{const w=e.serverCache.getNode();J(w instanceof ge,"serverChildren would be complete if leaf node"),v=Dm(r,w)}v=v,_=n.filter.updateFullNode(p,v,a)}else{const v=Ne(t);let w=bm(r,v,e.serverCache);w==null&&e.serverCache.isCompleteForChild(v)&&(w=p.getImmediateChild(v)),w!=null?_=n.filter.updateChild(p,v,w,et(t),d,a):e.eventCache.getNode().hasChild(v)?_=n.filter.updateChild(p,v,ge.EMPTY_NODE,et(t),d,a):_=p,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Th(r,Ks(e)),u.isLeafNode()&&(_=n.filter.updateFullNode(_,u,a)))}return u=e.serverCache.isFullyInitialized()||Ih(r,He())!=null,Ll(e,_,u,n.filter.filtersNodes())}}/**
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
 */class sP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new Am(r.getIndex()),a=Ik(r);this.processor_=Xk(a);const u=t.serverCache,d=t.eventCache,p=o.updateFullNode(ge.EMPTY_NODE,u.getNode(),null),_=a.updateFullNode(ge.EMPTY_NODE,d.getNode(),null),v=new ts(p,u.isFullyInitialized(),o.filtersNodes()),w=new ts(_,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=Kh(w,v),this.eventGenerator_=new Nk(this.query_)}get query(){return this.query_}}function oP(n){return n.viewCache_.serverCache.getNode()}function aP(n){return wh(n.viewCache_)}function lP(n,e){const t=Ks(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!be(e)&&!t.getImmediateChild(Ne(e)).isEmpty())?t.getChild(e):null}function Ov(n){return n.eventRegistrations_.length===0}function uP(n,e){n.eventRegistrations_.push(e)}function Lv(n,e,t){const r=[];if(t){J(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,o);u&&r.push(u)})}if(e){let o=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return r}function Mv(n,e,t,r){e.type===Yn.MERGE&&e.source.queryId!==null&&(J(Ks(n.viewCache_),"We should always have a full cache before handling merges"),J(wh(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,a=Zk(n.processor_,o,e,t,r);return Jk(n.processor_,a.viewCache),J(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,wT(n,a.changes,a.viewCache.eventCache.getNode(),null)}function cP(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(dt,(a,u)=>{r.push(la(a,u))}),t.isFullyInitialized()&&r.push(hT(t.getNode())),wT(n,r,t.getNode(),e)}function wT(n,e,t,r){const o=r?[r]:n.eventRegistrations_;return xk(n.eventGenerator_,e,t,o)}/**
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
 */let Ch;class TT{constructor(){this.views=new Map}}function hP(n){J(!Ch,"__referenceConstructor has already been defined"),Ch=n}function dP(){return J(Ch,"Reference.ts has not been loaded"),Ch}function fP(n){return n.views.size===0}function Lm(n,e,t,r){const o=e.source.queryId;if(o!==null){const a=n.views.get(o);return J(a!=null,"SyncTree gave us an op for an invalid query."),Mv(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(Mv(u,e,t,r));return a}}function IT(n,e,t,r,o){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Th(t,o?r:null),p=!1;d?p=!0:r instanceof ge?(d=Dm(t,r),p=!1):(d=ge.EMPTY_NODE,p=!1);const _=Kh(new ts(d,p,!1),new ts(r,o,!1));return new sP(e,_)}return u}function pP(n,e,t,r,o,a){const u=IT(n,e,r,o,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),uP(u,t),cP(u,t)}function mP(n,e,t,r){const o=e._queryIdentifier,a=[];let u=[];const d=ns(n);if(o==="default")for(const[p,_]of n.views.entries())u=u.concat(Lv(_,t,r)),Ov(_)&&(n.views.delete(p),_.query._queryParams.loadsAllData()||a.push(_.query));else{const p=n.views.get(o);p&&(u=u.concat(Lv(p,t,r)),Ov(p)&&(n.views.delete(o),p.query._queryParams.loadsAllData()||a.push(p.query)))}return d&&!ns(n)&&a.push(new(dP())(e._repo,e._path)),{removed:a,events:u}}function ST(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ki(n,e){let t=null;for(const r of n.views.values())t=t||lP(r,e);return t}function CT(n,e){if(e._queryParams.loadsAllData())return Yh(n);{const r=e._queryIdentifier;return n.views.get(r)}}function RT(n,e){return CT(n,e)!=null}function ns(n){return Yh(n)!=null}function Yh(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Rh;function gP(n){J(!Rh,"__referenceConstructor has already been defined"),Rh=n}function _P(){return J(Rh,"Reference.ts has not been loaded"),Rh}let yP=1;class Vv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ze(null),this.pendingWriteTree_=Gk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function AT(n,e,t,r,o){return Lk(n.pendingWriteTree_,e,t,r,o),o?Ia(n,new Gs(Pm(),e,t)):[]}function vP(n,e,t,r){Mk(n.pendingWriteTree_,e,t,r);const o=Ze.fromObject(t);return Ia(n,new ua(Pm(),e,o))}function Bi(n,e,t=!1){const r=Vk(n.pendingWriteTree_,e);if(Fk(n.pendingWriteTree_,e)){let a=new Ze(null);return r.snap!=null?a=a.set(He(),!0):Ht(r.children,u=>{a=a.set(new Qe(u),!0)}),Ia(n,new Eh(r.path,a,t))}else return[]}function fu(n,e,t){return Ia(n,new Gs(Nm(),e,t))}function EP(n,e,t){const r=Ze.fromObject(t);return Ia(n,new ua(Nm(),e,r))}function wP(n,e){return Ia(n,new Xl(Nm(),e))}function TP(n,e,t){const r=Vm(n,t);if(r){const o=Fm(r),a=o.path,u=o.queryId,d=on(a,e),p=new Xl(xm(u),d);return Um(n,a,p)}else return[]}function Ah(n,e,t,r,o=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||RT(u,e))){const p=mP(u,e,t,r);fP(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const _=p.removed;if(d=p.events,!o){const v=_.findIndex(T=>T._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(T,O)=>ns(O));if(v&&!w){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const O=CP(T);for(let z=0;z<O.length;++z){const W=O[z],B=W.query,se=xT(n,W);n.listenProvider_.startListening(Vl(B),Jl(n,B),se.hashFn,se.onComplete)}}}!w&&_.length>0&&!r&&(v?n.listenProvider_.stopListening(Vl(e),null):_.forEach(T=>{const O=n.queryToTagMap.get(Xh(T));n.listenProvider_.stopListening(Vl(T),O)}))}RP(n,_)}return d}function kT(n,e,t,r){const o=Vm(n,r);if(o!=null){const a=Fm(o),u=a.path,d=a.queryId,p=on(u,e),_=new Gs(xm(d),p,t);return Um(n,u,_)}else return[]}function IP(n,e,t,r){const o=Vm(n,r);if(o){const a=Fm(o),u=a.path,d=a.queryId,p=on(u,e),_=Ze.fromObject(t),v=new ua(xm(d),p,_);return Um(n,u,v)}else return[]}function Dp(n,e,t,r=!1){const o=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(o,(T,O)=>{const z=on(T,o);a=a||Ki(O,z),u=u||ns(O)});let d=n.syncPointTree_.get(o);d?(u=u||ns(d),a=a||Ki(d,He())):(d=new TT,n.syncPointTree_=n.syncPointTree_.set(o,d));let p;a!=null?p=!0:(p=!1,a=ge.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((O,z)=>{const W=Ki(z,He());W&&(a=a.updateImmediateChild(O,W))}));const _=RT(d,e);if(!_&&!e._queryParams.loadsAllData()){const T=Xh(e);J(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const O=AP();n.queryToTagMap.set(T,O),n.tagToQueryMap.set(O,T)}const v=Qh(n.pendingWriteTree_,o);let w=pP(d,e,t,v,a,p);if(!_&&!u&&!r){const T=CT(d,e);w=w.concat(kP(n,e,T))}return w}function Mm(n,e,t){const o=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const p=on(u,e),_=Ki(d,p);if(_)return _});return gT(o,e,a,t,!0)}function SP(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(_,v)=>{const w=on(_,t);r=r||Ki(v,w)});let o=n.syncPointTree_.get(t);o?r=r||Ki(o,He()):(o=new TT,n.syncPointTree_=n.syncPointTree_.set(t,o));const a=r!=null,u=a?new ts(r,!0,!1):null,d=Qh(n.pendingWriteTree_,e._path),p=IT(o,e,d,a?u.getNode():ge.EMPTY_NODE,a);return aP(p)}function Ia(n,e){return PT(e,n.syncPointTree_,null,Qh(n.pendingWriteTree_,He()))}function PT(n,e,t,r){if(be(n.path))return NT(n,e,t,r);{const o=e.get(He());t==null&&o!=null&&(t=Ki(o,He()));let a=[];const u=Ne(n.path),d=n.operationForChild(u),p=e.children.get(u);if(p&&d){const _=t?t.getImmediateChild(u):null,v=_T(r,u);a=a.concat(PT(d,p,_,v))}return o&&(a=a.concat(Lm(o,n,r,t))),a}}function NT(n,e,t,r){const o=e.get(He());t==null&&o!=null&&(t=Ki(o,He()));let a=[];return e.children.inorderTraversal((u,d)=>{const p=t?t.getImmediateChild(u):null,_=_T(r,u),v=n.operationForChild(u);v&&(a=a.concat(NT(v,d,p,_)))}),o&&(a=a.concat(Lm(o,n,r,t))),a}function xT(n,e){const t=e.query,r=Jl(n,t);return{hashFn:()=>(oP(e)||ge.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?TP(n,t._path,r):wP(n,t._path);{const a=wA(o,t);return Ah(n,t,null,a)}}}}function Jl(n,e){const t=Xh(e);return n.queryToTagMap.get(t)}function Xh(n){return n._path.toString()+"$"+n._queryIdentifier}function Vm(n,e){return n.tagToQueryMap.get(e)}function Fm(n){const e=n.indexOf("$");return J(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Qe(n.substr(0,e))}}function Um(n,e,t){const r=n.syncPointTree_.get(e);J(r,"Missing sync point for query tag that we're tracking");const o=Qh(n.pendingWriteTree_,e);return Lm(r,t,o,null)}function CP(n){return n.fold((e,t,r)=>{if(t&&ns(t))return[Yh(t)];{let o=[];return t&&(o=ST(t)),Ht(r,(a,u)=>{o=o.concat(u)}),o}})}function Vl(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_P())(n._repo,n._path):n}function RP(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const o=Xh(r),a=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(a)}}}function AP(){return yP++}function kP(n,e,t){const r=e._path,o=Jl(n,e),a=xT(n,t),u=n.listenProvider_.startListening(Vl(e),o,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(o)J(!ns(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((_,v,w)=>{if(!be(_)&&v&&ns(v))return[Yh(v).query];{let T=[];return v&&(T=T.concat(ST(v).map(O=>O.query))),Ht(w,(O,z)=>{T=T.concat(z)}),T}});for(let _=0;_<p.length;++_){const v=p[_];n.listenProvider_.stopListening(Vl(v),Jl(n,v))}}return u}/**
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
 */class jm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new jm(t)}node(){return this.node_}}class zm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ht(this.path_,e);return new zm(this.syncTree_,t)}node(){return Mm(this.syncTree_,this.path_)}}const PP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fv=function(n,e,t){if(!n||typeof n!="object")return n;if(J(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return NP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return xP(n[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},NP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+n)}},xP=function(n,e,t){n.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&J(!1,"Unexpected increment value: "+r);const o=e.node();if(J(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const u=o.getValue();return typeof u!="number"?r:u+r},DT=function(n,e,t,r){return Bm(e,new zm(t,n),r)},bT=function(n,e,t){return Bm(n,new jm(e),t)};function Bm(n,e,t){const r=n.getPriority().val(),o=Fv(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=Fv(u.getValue(),e,t);return d!==u.getValue()||o!==u.getPriority().val()?new Lt(d,kt(o)):n}else{const u=n;return a=u,o!==u.getPriority().val()&&(a=a.updatePriority(new Lt(o))),u.forEachChild(dt,(d,p)=>{const _=Bm(p,e.getImmediateChild(d),t);_!==p&&(a=a.updateImmediateChild(d,_))}),a}}/**
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
 */class Hm{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function $m(n,e){let t=e instanceof Qe?e:new Qe(e),r=n,o=Ne(t);for(;o!==null;){const a=sa(r.node.children,o)||{children:{},childCount:0};r=new Hm(o,r,a),t=et(t),o=Ne(t)}return r}function Sa(n){return n.node.value}function OT(n,e){n.node.value=e,bp(n)}function LT(n){return n.node.childCount>0}function DP(n){return Sa(n)===void 0&&!LT(n)}function Jh(n,e){Ht(n.node.children,(t,r)=>{e(new Hm(t,n,r))})}function MT(n,e,t,r){t&&e(n),Jh(n,o=>{MT(o,e,!0)})}function bP(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function pu(n){return new Qe(n.parent===null?n.name:pu(n.parent)+"/"+n.name)}function bp(n){n.parent!==null&&OP(n.parent,n.name,n)}function OP(n,e,t){const r=DP(t),o=Pr(n.node.children,e);r&&o?(delete n.node.children[e],n.node.childCount--,bp(n)):!r&&!o&&(n.node.children[e]=t.node,n.node.childCount++,bp(n))}/**
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
 */const LP=/[\[\].#$\/\u0000-\u001F\u007F]/,MP=/[\[\].#$\u0000-\u001F\u007F]/,ip=10*1024*1024,Wm=function(n){return typeof n=="string"&&n.length!==0&&!LP.test(n)},VT=function(n){return typeof n=="string"&&n.length!==0&&!MP.test(n)},VP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),VT(n)},FP=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ym(n)||n&&typeof n=="object"&&Pr(n,".sv")},UP=function(n,e,t,r){Zh(jh(n,"value"),e,t)},Zh=function(n,e,t){const r=t instanceof Qe?new tk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Fs(r));if(typeof e=="function")throw new Error(n+"contains a function "+Fs(r)+" with contents = "+e.toString());if(ym(e))throw new Error(n+"contains "+e.toString()+" "+Fs(r));if(typeof e=="string"&&e.length>ip/3&&zh(e)>ip)throw new Error(n+"contains a string greater than "+ip+" utf8 bytes "+Fs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(Ht(e,(u,d)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!Wm(u)))throw new Error(n+" contains an invalid key ("+u+") "+Fs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nk(r,u),Zh(n,d,r),rk(r)}),o&&a)throw new Error(n+' contains ".value" child '+Fs(r)+" in addition to actual children.")}},jP=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Gl(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!Wm(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ek);let o=null;for(t=0;t<e.length;t++){if(r=e[t],o!==null&&On(o,r))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},zP=function(n,e,t,r){const o=jh(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const a=[];Ht(e,(u,d)=>{const p=new Qe(u);if(Zh(o,d,ht(t,p)),Im(p)===".priority"&&!FP(d))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),jP(o,a)},FT=function(n,e,t,r){if(!VT(t))throw new Error(jh(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},BP=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),FT(n,e,t)},HP=function(n,e){if(Ne(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},$P=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VP(t))throw new Error(jh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class WP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ed(n,e){let t=null;for(let r=0;r<e.length;r++){const o=e[r],a=o.getPath();t!==null&&!Sm(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&n.eventLists_.push(t)}function UT(n,e,t){ed(n,t),jT(n,r=>Sm(r,e))}function Vn(n,e,t){ed(n,t),jT(n,r=>On(r,e)||On(e,r))}function jT(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const o=n.eventLists_[r];if(o){const a=o.path;e(a)?(qP(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();bl&&Bt("event: "+t.toString()),Ta(r)}}}/**
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
 */const GP="repo_interrupt",KP=25;class QP{constructor(e,t,r,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vh(),this.transactionQueueTree_=new Hm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YP(n,e,t){if(n.stats_=wm(n.repoInfo_),n.forceRestClient_||CA())n.server_=new yh(n.repoInfo_,(r,o,a,u)=>{Uv(n,r,o,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>jv(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ei(n.repoInfo_,e,(r,o,a,u)=>{Uv(n,r,o,a,u)},r=>{jv(n,r)},r=>{JP(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=NA(n.repoInfo_,()=>new Pk(n.stats_,n.server_)),n.infoData_=new Sk,n.infoSyncTree_=new Vv({startListening:(r,o,a,u)=>{let d=[];const p=n.infoData_.getNode(r._path);return p.isEmpty()||(d=fu(n.infoSyncTree_,r._path,p),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),qm(n,"connected",!1),n.serverSyncTree_=new Vv({startListening:(r,o,a,u)=>(n.server_.listen(r,a,o,(d,p)=>{const _=u(d,p);Vn(n.eventQueue_,r._path,_)}),[]),stopListening:(r,o)=>{n.server_.unlisten(r,o)}})}function XP(n){const t=n.infoData_.getNode(new Qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function td(n){return PP({timestamp:XP(n)})}function Uv(n,e,t,r,o){n.dataUpdateCount++;const a=new Qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(o)if(r){const p=ah(t,_=>kt(_));u=IP(n.serverSyncTree_,a,p,o)}else{const p=kt(t);u=kT(n.serverSyncTree_,a,p,o)}else if(r){const p=ah(t,_=>kt(_));u=EP(n.serverSyncTree_,a,p)}else{const p=kt(t);u=fu(n.serverSyncTree_,a,p)}let d=a;u.length>0&&(d=ha(n,a)),Vn(n.eventQueue_,d,u)}function jv(n,e){qm(n,"connected",e),e===!1&&nN(n)}function JP(n,e){Ht(e,(t,r)=>{qm(n,t,r)})}function qm(n,e,t){const r=new Qe("/.info/"+e),o=kt(t);n.infoData_.updateSnapshot(r,o);const a=fu(n.infoSyncTree_,r,o);Vn(n.eventQueue_,r,a)}function Gm(n){return n.nextWriteId_++}function ZP(n,e,t){const r=SP(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(o=>{const a=kt(o).withIndex(e._queryParams.getIndex());Dp(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=fu(n.serverSyncTree_,e._path,a);else{const d=Jl(n.serverSyncTree_,e);u=kT(n.serverSyncTree_,e._path,a,d)}return Vn(n.eventQueue_,e._path,u),Ah(n.serverSyncTree_,e,t,null,!0),a},o=>(mu(n,"get for query "+Pt(e)+" failed: "+o),Promise.reject(new Error(o))))}function eN(n,e,t,r,o){mu(n,"set",{path:e.toString(),value:t,priority:r});const a=td(n),u=kt(t,r),d=Mm(n.serverSyncTree_,e),p=bT(u,d,a),_=Gm(n),v=AT(n.serverSyncTree_,e,p,_,!0);ed(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(T,O)=>{const z=T==="ok";z||an("set at "+e+" failed: "+T);const W=Bi(n.serverSyncTree_,_,!z);Vn(n.eventQueue_,e,W),Op(n,o,T,O)});const w=Qm(n,e);ha(n,w),Vn(n.eventQueue_,w,[])}function tN(n,e,t,r){mu(n,"update",{path:e.toString(),value:t});let o=!0;const a=td(n),u={};if(Ht(t,(d,p)=>{o=!1,u[d]=DT(ht(e,d),kt(p),n.serverSyncTree_,a)}),o)Bt("update() called with empty data.  Don't do anything."),Op(n,r,"ok",void 0);else{const d=Gm(n),p=vP(n.serverSyncTree_,e,u,d);ed(n.eventQueue_,p),n.server_.merge(e.toString(),t,(_,v)=>{const w=_==="ok";w||an("update at "+e+" failed: "+_);const T=Bi(n.serverSyncTree_,d,!w),O=T.length>0?ha(n,e):e;Vn(n.eventQueue_,O,T),Op(n,r,_,v)}),Ht(t,_=>{const v=Qm(n,ht(e,_));ha(n,v)}),Vn(n.eventQueue_,e,[])}}function nN(n){mu(n,"onDisconnectEvents");const e=td(n),t=vh();Rp(n.onDisconnect_,He(),(o,a)=>{const u=DT(o,a,n.serverSyncTree_,e);dT(t,o,u)});let r=[];Rp(t,He(),(o,a)=>{r=r.concat(fu(n.serverSyncTree_,o,a));const u=Qm(n,o);ha(n,u)}),n.onDisconnect_=vh(),Vn(n.eventQueue_,He(),r)}function rN(n,e,t){let r;Ne(e._path)===".info"?r=Dp(n.infoSyncTree_,e,t):r=Dp(n.serverSyncTree_,e,t),UT(n.eventQueue_,e._path,r)}function iN(n,e,t){let r;Ne(e._path)===".info"?r=Ah(n.infoSyncTree_,e,t):r=Ah(n.serverSyncTree_,e,t),UT(n.eventQueue_,e._path,r)}function sN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(GP)}function mu(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Bt(t,...e)}function Op(n,e,t,r){e&&Ta(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let a=o;r&&(a+=": "+r);const u=new Error(a);u.code=o,e(u)}})}function zT(n,e,t){return Mm(n.serverSyncTree_,e,t)||ge.EMPTY_NODE}function Km(n,e=n.transactionQueueTree_){if(e||nd(n,e),Sa(e)){const t=HT(n,e);J(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&oN(n,pu(e),t)}else LT(e)&&Jh(e,t=>{Km(n,t)})}function oN(n,e,t){const r=t.map(_=>_.currentWriteId),o=zT(n,e,r);let a=o;const u=o.hash();for(let _=0;_<t.length;_++){const v=t[_];J(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const w=on(e,v.path);a=a.updateChild(w,v.currentOutputSnapshotRaw)}const d=a.val(!0),p=e;n.server_.put(p.toString(),d,_=>{mu(n,"transaction put response",{path:p.toString(),status:_});let v=[];if(_==="ok"){const w=[];for(let T=0;T<t.length;T++)t[T].status=2,v=v.concat(Bi(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&w.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();nd(n,$m(n.transactionQueueTree_,e)),Km(n,n.transactionQueueTree_),Vn(n.eventQueue_,e,v);for(let T=0;T<w.length;T++)Ta(w[T])}else{if(_==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{an("transaction at "+p.toString()+" failed: "+_);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=_}ha(n,e)}},u)}function ha(n,e){const t=BT(n,e),r=pu(t),o=HT(n,t);return aN(n,o,r),r}function aN(n,e,t){if(e.length===0)return;const r=[];let o=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],_=on(t,p.path);let v=!1,w;if(J(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,w=p.abortReason,o=o.concat(Bi(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=KP)v=!0,w="maxretry",o=o.concat(Bi(n.serverSyncTree_,p.currentWriteId,!0));else{const T=zT(n,p.path,u);p.currentInputSnapshot=T;const O=e[d].update(T.val());if(O!==void 0){Zh("transaction failed: Data returned ",O,p.path);let z=kt(O);typeof O=="object"&&O!=null&&Pr(O,".priority")||(z=z.updatePriority(T.getPriority()));const B=p.currentWriteId,se=td(n),he=bT(z,T,se);p.currentOutputSnapshotRaw=z,p.currentOutputSnapshotResolved=he,p.currentWriteId=Gm(n),u.splice(u.indexOf(B),1),o=o.concat(AT(n.serverSyncTree_,p.path,he,p.currentWriteId,p.applyLocally)),o=o.concat(Bi(n.serverSyncTree_,B,!0))}else v=!0,w="nodata",o=o.concat(Bi(n.serverSyncTree_,p.currentWriteId,!0))}Vn(n.eventQueue_,t,o),o=[],v&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}nd(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Ta(r[d]);Km(n,n.transactionQueueTree_)}function BT(n,e){let t,r=n.transactionQueueTree_;for(t=Ne(e);t!==null&&Sa(r)===void 0;)r=$m(r,t),e=et(e),t=Ne(e);return r}function HT(n,e){const t=[];return $T(n,e,t),t.sort((r,o)=>r.order-o.order),t}function $T(n,e,t){const r=Sa(e);if(r)for(let o=0;o<r.length;o++)t.push(r[o]);Jh(e,o=>{$T(n,o,t)})}function nd(n,e){const t=Sa(e);if(t){let r=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[r]=t[o],r++);t.length=r,OT(e,t.length>0?t:void 0)}Jh(e,r=>{nd(n,r)})}function Qm(n,e){const t=pu(BT(n,e)),r=$m(n.transactionQueueTree_,e);return bP(r,o=>{sp(n,o)}),sp(n,r),MT(r,o=>{sp(n,o)}),t}function sp(n,e){const t=Sa(e);if(t){const r=[];let o=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(J(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(J(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),o=o.concat(Bi(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?OT(e,void 0):t.length=a+1,Vn(n.eventQueue_,pu(e),o);for(let u=0;u<r.length;u++)Ta(r[u])}}/**
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
 */function lN(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let o=t[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function uN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):an(`Invalid query segment '${t}' in query '${n}'`)}return e}const zv=function(n,e){const t=cN(n),r=t.namespace;t.domain==="firebase.com"&&ii(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ii("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||gA();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qw(t.host,t.secure,r,o,e,"",r!==t.subdomain),path:new Qe(t.pathString)}},cN=function(n){let e="",t="",r="",o="",a="",u=!0,d="https",p=443;if(typeof n=="string"){let _=n.indexOf("//");_>=0&&(d=n.substring(0,_-1),n=n.substring(_+2));let v=n.indexOf("/");v===-1&&(v=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(v,w)),v<w&&(o=lN(n.substring(v,w)));const T=uN(n.substring(Math.min(n.length,w)));_=e.indexOf(":"),_>=0?(u=d==="https"||d==="wss",p=parseInt(e.substring(_+1),10)):_=e.length;const O=e.slice(0,_);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const z=e.indexOf(".");r=e.substring(0,z).toLowerCase(),t=e.substring(z+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:p,domain:t,subdomain:r,secure:u,scheme:d,pathString:o,namespace:a}};/**
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
 */class hN{constructor(e,t,r,o){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pt(this.snapshot.exportVal())}}class dN{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class WT{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ym{constructor(e,t,r,o){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=o}get key(){return be(this._path)?null:Im(this._path)}get ref(){return new ai(this._repo,this._path)}get _queryIdentifier(){const e=Av(this._queryParams),t=vm(e);return t==="{}"?"default":t}get _queryObject(){return Av(this._queryParams)}isEqual(e){if(e=en(e),!(e instanceof Ym))return!1;const t=this._repo===e._repo,r=Sm(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZA(this._path)}}class ai extends Ym{constructor(e,t){super(e,t,new km,!1)}get parent(){const e=iT(this._path);return e===null?null:new ai(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zl{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Qe(e),r=Lp(this.ref,e);return new Zl(this._node.getChild(t),r,dt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>e(new Zl(o,Lp(this.ref,r),dt)))}hasChild(e){const t=new Qe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zr(n,e){return n=en(n),n._checkNotDeleted("ref"),e!==void 0?Lp(n._root,e):n._root}function Lp(n,e){return n=en(n),Ne(n._path)===null?BP("child","path",e):FT("child","path",e),new ai(n._repo,ht(n._path,e))}function fN(n,e){n=en(n),HP("set",n._path),UP("set",e,n._path);const t=new iu;return eN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Bv(n,e){zP("update",e,n._path);const t=new iu;return tN(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Fl(n){n=en(n);const e=new WT(()=>{}),t=new rd(e);return ZP(n._repo,n,t).then(r=>new Zl(r,new ai(n._repo,n._path),n._queryParams.getIndex()))}class rd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new hN("value",this,new Zl(e.snapshotNode,new ai(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new dN(this,e,t):null}matches(e){return e instanceof rd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pN(n,e,t,r,o){const a=new WT(t,void 0),u=new rd(a);return rN(n._repo,n,u),()=>iN(n._repo,n,u)}function qT(n,e,t,r){return pN(n,"value",e)}hP(ai);gP(ai);/**
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
 */const mN="FIREBASE_DATABASE_EMULATOR_HOST",Mp={};let gN=!1;function _N(n,e,t,r){const o=e.lastIndexOf(":"),a=e.substring(0,o),u=oi(a);n.repoInfo_=new Qw(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function yN(n,e,t,r,o){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ii("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=zv(a,o),d=u.repoInfo,p;typeof process<"u"&&uv&&(p=uv[mN]),p?(a=`http://${p}?ns=${d.namespace}`,u=zv(a,o),d=u.repoInfo):u.repoInfo.secure;const _=new AA(n.name,n.options,e);$P("Invalid Firebase Database URL",u),be(u.path)||ii("Database URL must point to the root of a Firebase Database (not including a child path).");const v=EN(d,n,_,new RA(n,t));return new wN(v,n)}function vN(n,e){const t=Mp[e];(!t||t[n.key]!==n)&&ii(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sN(n),delete t[n.key]}function EN(n,e,t,r){let o=Mp[e.name];o||(o={},Mp[e.name]=o);let a=o[n.toURLString()];return a&&ii("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new QP(n,gN,t,r),o[n.toURLString()]=a,a}class wN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ai(this._repo,He())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ii("Cannot call "+e+" on a deleted database.")}}function Ko(n=Hh(),e){const t=ou(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=im("database");r&&TN(t,...r)}return t}function TN(n,e,t,r={}){n=en(n),n._checkNotDeleted("useEmulator");const o=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(o===n._repoInternal.repoInfo_.host&&Ji(r,a.repoInfo_.emulatorOptions))return;ii("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ii('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Jc(Jc.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:sm(r.mockUserToken,n.app.options.projectId);u=new Jc(d)}oi(e)&&(Fh(e),Uh("Database",!0)),_N(a,o,r,u)}/**
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
 */function IN(n){cA(us),Zi(new ti("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return yN(r,o,a,t)},"PUBLIC").setMultipleInstances(!0)),Mn(cv,hv,n),Mn(cv,hv,"esm2020")}ei.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ei.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};IN();var SN="firebase",CN="12.5.0";/**
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
 */Mn(SN,CN,"app");var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qi,GT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,C){function A(){}A.prototype=C.prototype,P.F=C.prototype,P.prototype=new A,P.prototype.constructor=P,P.D=function(D,N,L){for(var R=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)R[Ge-2]=arguments[Ge];return C.prototype[N].apply(D,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,C,A){A||(A=0);const D=Array(16);if(typeof C=="string")for(var N=0;N<16;++N)D[N]=C.charCodeAt(A++)|C.charCodeAt(A++)<<8|C.charCodeAt(A++)<<16|C.charCodeAt(A++)<<24;else for(N=0;N<16;++N)D[N]=C[A++]|C[A++]<<8|C[A++]<<16|C[A++]<<24;C=P.g[0],A=P.g[1],N=P.g[2];let L=P.g[3],R;R=C+(L^A&(N^L))+D[0]+3614090360&4294967295,C=A+(R<<7&4294967295|R>>>25),R=L+(N^C&(A^N))+D[1]+3905402710&4294967295,L=C+(R<<12&4294967295|R>>>20),R=N+(A^L&(C^A))+D[2]+606105819&4294967295,N=L+(R<<17&4294967295|R>>>15),R=A+(C^N&(L^C))+D[3]+3250441966&4294967295,A=N+(R<<22&4294967295|R>>>10),R=C+(L^A&(N^L))+D[4]+4118548399&4294967295,C=A+(R<<7&4294967295|R>>>25),R=L+(N^C&(A^N))+D[5]+1200080426&4294967295,L=C+(R<<12&4294967295|R>>>20),R=N+(A^L&(C^A))+D[6]+2821735955&4294967295,N=L+(R<<17&4294967295|R>>>15),R=A+(C^N&(L^C))+D[7]+4249261313&4294967295,A=N+(R<<22&4294967295|R>>>10),R=C+(L^A&(N^L))+D[8]+1770035416&4294967295,C=A+(R<<7&4294967295|R>>>25),R=L+(N^C&(A^N))+D[9]+2336552879&4294967295,L=C+(R<<12&4294967295|R>>>20),R=N+(A^L&(C^A))+D[10]+4294925233&4294967295,N=L+(R<<17&4294967295|R>>>15),R=A+(C^N&(L^C))+D[11]+2304563134&4294967295,A=N+(R<<22&4294967295|R>>>10),R=C+(L^A&(N^L))+D[12]+1804603682&4294967295,C=A+(R<<7&4294967295|R>>>25),R=L+(N^C&(A^N))+D[13]+4254626195&4294967295,L=C+(R<<12&4294967295|R>>>20),R=N+(A^L&(C^A))+D[14]+2792965006&4294967295,N=L+(R<<17&4294967295|R>>>15),R=A+(C^N&(L^C))+D[15]+1236535329&4294967295,A=N+(R<<22&4294967295|R>>>10),R=C+(N^L&(A^N))+D[1]+4129170786&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^N&(C^A))+D[6]+3225465664&4294967295,L=C+(R<<9&4294967295|R>>>23),R=N+(C^A&(L^C))+D[11]+643717713&4294967295,N=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(N^L))+D[0]+3921069994&4294967295,A=N+(R<<20&4294967295|R>>>12),R=C+(N^L&(A^N))+D[5]+3593408605&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^N&(C^A))+D[10]+38016083&4294967295,L=C+(R<<9&4294967295|R>>>23),R=N+(C^A&(L^C))+D[15]+3634488961&4294967295,N=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(N^L))+D[4]+3889429448&4294967295,A=N+(R<<20&4294967295|R>>>12),R=C+(N^L&(A^N))+D[9]+568446438&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^N&(C^A))+D[14]+3275163606&4294967295,L=C+(R<<9&4294967295|R>>>23),R=N+(C^A&(L^C))+D[3]+4107603335&4294967295,N=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(N^L))+D[8]+1163531501&4294967295,A=N+(R<<20&4294967295|R>>>12),R=C+(N^L&(A^N))+D[13]+2850285829&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^N&(C^A))+D[2]+4243563512&4294967295,L=C+(R<<9&4294967295|R>>>23),R=N+(C^A&(L^C))+D[7]+1735328473&4294967295,N=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(N^L))+D[12]+2368359562&4294967295,A=N+(R<<20&4294967295|R>>>12),R=C+(A^N^L)+D[5]+4294588738&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^N)+D[8]+2272392833&4294967295,L=C+(R<<11&4294967295|R>>>21),R=N+(L^C^A)+D[11]+1839030562&4294967295,N=L+(R<<16&4294967295|R>>>16),R=A+(N^L^C)+D[14]+4259657740&4294967295,A=N+(R<<23&4294967295|R>>>9),R=C+(A^N^L)+D[1]+2763975236&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^N)+D[4]+1272893353&4294967295,L=C+(R<<11&4294967295|R>>>21),R=N+(L^C^A)+D[7]+4139469664&4294967295,N=L+(R<<16&4294967295|R>>>16),R=A+(N^L^C)+D[10]+3200236656&4294967295,A=N+(R<<23&4294967295|R>>>9),R=C+(A^N^L)+D[13]+681279174&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^N)+D[0]+3936430074&4294967295,L=C+(R<<11&4294967295|R>>>21),R=N+(L^C^A)+D[3]+3572445317&4294967295,N=L+(R<<16&4294967295|R>>>16),R=A+(N^L^C)+D[6]+76029189&4294967295,A=N+(R<<23&4294967295|R>>>9),R=C+(A^N^L)+D[9]+3654602809&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^N)+D[12]+3873151461&4294967295,L=C+(R<<11&4294967295|R>>>21),R=N+(L^C^A)+D[15]+530742520&4294967295,N=L+(R<<16&4294967295|R>>>16),R=A+(N^L^C)+D[2]+3299628645&4294967295,A=N+(R<<23&4294967295|R>>>9),R=C+(N^(A|~L))+D[0]+4096336452&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~N))+D[7]+1126891415&4294967295,L=C+(R<<10&4294967295|R>>>22),R=N+(C^(L|~A))+D[14]+2878612391&4294967295,N=L+(R<<15&4294967295|R>>>17),R=A+(L^(N|~C))+D[5]+4237533241&4294967295,A=N+(R<<21&4294967295|R>>>11),R=C+(N^(A|~L))+D[12]+1700485571&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~N))+D[3]+2399980690&4294967295,L=C+(R<<10&4294967295|R>>>22),R=N+(C^(L|~A))+D[10]+4293915773&4294967295,N=L+(R<<15&4294967295|R>>>17),R=A+(L^(N|~C))+D[1]+2240044497&4294967295,A=N+(R<<21&4294967295|R>>>11),R=C+(N^(A|~L))+D[8]+1873313359&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~N))+D[15]+4264355552&4294967295,L=C+(R<<10&4294967295|R>>>22),R=N+(C^(L|~A))+D[6]+2734768916&4294967295,N=L+(R<<15&4294967295|R>>>17),R=A+(L^(N|~C))+D[13]+1309151649&4294967295,A=N+(R<<21&4294967295|R>>>11),R=C+(N^(A|~L))+D[4]+4149444226&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~N))+D[11]+3174756917&4294967295,L=C+(R<<10&4294967295|R>>>22),R=N+(C^(L|~A))+D[2]+718787259&4294967295,N=L+(R<<15&4294967295|R>>>17),R=A+(L^(N|~C))+D[9]+3951481745&4294967295,P.g[0]=P.g[0]+C&4294967295,P.g[1]=P.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+L&4294967295}r.prototype.v=function(P,C){C===void 0&&(C=P.length);const A=C-this.blockSize,D=this.C;let N=this.h,L=0;for(;L<C;){if(N==0)for(;L<=A;)o(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<C;)if(D[N++]=P.charCodeAt(L++),N==this.blockSize){o(this,D),N=0;break}}else for(;L<C;)if(D[N++]=P[L++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=C},r.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var C=1;C<P.length-8;++C)P[C]=0;C=this.o*8;for(var A=P.length-8;A<P.length;++A)P[A]=C&255,C/=256;for(this.v(P),P=Array(16),C=0,A=0;A<4;++A)for(let D=0;D<32;D+=8)P[C++]=this.g[A]>>>D&255;return P};function a(P,C){var A=d;return Object.prototype.hasOwnProperty.call(A,P)?A[P]:A[P]=C(P)}function u(P,C){this.h=C;const A=[];let D=!0;for(let N=P.length-1;N>=0;N--){const L=P[N]|0;D&&L==C||(A[N]=L,D=!1)}this.g=A}var d={};function p(P){return-128<=P&&P<128?a(P,function(C){return new u([C|0],C<0?-1:0)}):new u([P|0],P<0?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return w;if(P<0)return B(_(-P));const C=[];let A=1;for(let D=0;P>=A;D++)C[D]=P/A|0,A*=4294967296;return new u(C,0)}function v(P,C){if(P.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(P.charAt(0)=="-")return B(v(P.substring(1),C));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=_(Math.pow(C,8));let D=w;for(let L=0;L<P.length;L+=8){var N=Math.min(8,P.length-L);const R=parseInt(P.substring(L,L+N),C);N<8?(N=_(Math.pow(C,N)),D=D.j(N).add(_(R))):(D=D.j(A),D=D.add(_(R)))}return D}var w=p(0),T=p(1),O=p(16777216);n=u.prototype,n.m=function(){if(W(this))return-B(this).m();let P=0,C=1;for(let A=0;A<this.g.length;A++){const D=this.i(A);P+=(D>=0?D:4294967296+D)*C,C*=4294967296}return P},n.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(z(this))return"0";if(W(this))return"-"+B(this).toString(P);const C=_(Math.pow(P,6));var A=this;let D="";for(;;){const N=me(A,C).g;A=se(A,N.j(C));let L=((A.g.length>0?A.g[0]:A.h)>>>0).toString(P);if(A=N,z(A))return L+D;for(;L.length<6;)L="0"+L;D=L+D}},n.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function z(P){if(P.h!=0)return!1;for(let C=0;C<P.g.length;C++)if(P.g[C]!=0)return!1;return!0}function W(P){return P.h==-1}n.l=function(P){return P=se(this,P),W(P)?-1:z(P)?0:1};function B(P){const C=P.g.length,A=[];for(let D=0;D<C;D++)A[D]=~P.g[D];return new u(A,~P.h).add(T)}n.abs=function(){return W(this)?B(this):this},n.add=function(P){const C=Math.max(this.g.length,P.g.length),A=[];let D=0;for(let N=0;N<=C;N++){let L=D+(this.i(N)&65535)+(P.i(N)&65535),R=(L>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);D=R>>>16,L&=65535,R&=65535,A[N]=R<<16|L}return new u(A,A[A.length-1]&-2147483648?-1:0)};function se(P,C){return P.add(B(C))}n.j=function(P){if(z(this)||z(P))return w;if(W(this))return W(P)?B(this).j(B(P)):B(B(this).j(P));if(W(P))return B(this.j(B(P)));if(this.l(O)<0&&P.l(O)<0)return _(this.m()*P.m());const C=this.g.length+P.g.length,A=[];for(var D=0;D<2*C;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<P.g.length;N++){const L=this.i(D)>>>16,R=this.i(D)&65535,Ge=P.i(N)>>>16,yt=P.i(N)&65535;A[2*D+2*N]+=R*yt,he(A,2*D+2*N),A[2*D+2*N+1]+=L*yt,he(A,2*D+2*N+1),A[2*D+2*N+1]+=R*Ge,he(A,2*D+2*N+1),A[2*D+2*N+2]+=L*Ge,he(A,2*D+2*N+2)}for(P=0;P<C;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=C;P<2*C;P++)A[P]=0;return new u(A,0)};function he(P,C){for(;(P[C]&65535)!=P[C];)P[C+1]+=P[C]>>>16,P[C]&=65535,C++}function de(P,C){this.g=P,this.h=C}function me(P,C){if(z(C))throw Error("division by zero");if(z(P))return new de(w,w);if(W(P))return C=me(B(P),C),new de(B(C.g),B(C.h));if(W(C))return C=me(P,B(C)),new de(B(C.g),C.h);if(P.g.length>30){if(W(P)||W(C))throw Error("slowDivide_ only works with positive integers.");for(var A=T,D=C;D.l(P)<=0;)A=ze(A),D=ze(D);var N=Re(A,1),L=Re(D,1);for(D=Re(D,2),A=Re(A,2);!z(D);){var R=L.add(D);R.l(P)<=0&&(N=N.add(A),L=R),D=Re(D,1),A=Re(A,1)}return C=se(P,N.j(C)),new de(N,C)}for(N=w;P.l(C)>=0;){for(A=Math.max(1,Math.floor(P.m()/C.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),L=_(A),R=L.j(C);W(R)||R.l(P)>0;)A-=D,L=_(A),R=L.j(C);z(L)&&(L=T),N=N.add(L),P=se(P,R)}return new de(N,P)}n.B=function(P){return me(this,P).h},n.and=function(P){const C=Math.max(this.g.length,P.g.length),A=[];for(let D=0;D<C;D++)A[D]=this.i(D)&P.i(D);return new u(A,this.h&P.h)},n.or=function(P){const C=Math.max(this.g.length,P.g.length),A=[];for(let D=0;D<C;D++)A[D]=this.i(D)|P.i(D);return new u(A,this.h|P.h)},n.xor=function(P){const C=Math.max(this.g.length,P.g.length),A=[];for(let D=0;D<C;D++)A[D]=this.i(D)^P.i(D);return new u(A,this.h^P.h)};function ze(P){const C=P.g.length+1,A=[];for(let D=0;D<C;D++)A[D]=P.i(D)<<1|P.i(D-1)>>>31;return new u(A,P.h)}function Re(P,C){const A=C>>5;C%=32;const D=P.g.length-A,N=[];for(let L=0;L<D;L++)N[L]=C>0?P.i(L+A)>>>C|P.i(L+A+1)<<32-C:P.i(L+A);return new u(N,P.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,GT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=v,Qi=u}).apply(typeof Hv<"u"?Hv:typeof self<"u"?self:typeof window<"u"?window:{});var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KT,kl,QT,eh,Vp,YT,XT,JT;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof jc=="object"&&jc];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,g){if(g)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var V=c[I];if(!(V in y))break e;y=y[V]}c=c[c.length-1],I=y[c],g=g(I),g!=I&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var y=[],I;for(I in g)Object.prototype.hasOwnProperty.call(g,I)&&y.push([I,g[I]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function d(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,y){return c.call.apply(c.bind,arguments)}function _(c,g,y){return _=p,_.apply(null,arguments)}function v(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function w(c,g){function y(){}y.prototype=g.prototype,c.Z=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Ob=function(I,V,j){for(var Z=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)Z[Ie-2]=arguments[Ie];return g.prototype[V].apply(I,Z)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function O(c){const g=c.length;if(g>0){const y=Array(g);for(let I=0;I<g;I++)y[I]=c[I];return y}return[]}function z(c,g){for(let I=1;I<arguments.length;I++){const V=arguments[I];var y=typeof V;if(y=y!="object"?y:V?Array.isArray(V)?"array":y:"null",y=="array"||y=="object"&&typeof V.length=="number"){y=c.length||0;const j=V.length||0;c.length=y+j;for(let Z=0;Z<j;Z++)c[y+Z]=V[Z]}else c.push(V)}}class W{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function B(c){u.setTimeout(()=>{throw c},0)}function se(){var c=P;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class he{constructor(){this.h=this.g=null}add(g,y){const I=de.get();I.set(g,y),this.h?this.h.next=I:this.g=I,this.h=I}}var de=new W(()=>new me,c=>c.reset());class me{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,Re=!1,P=new he,C=()=>{const c=Promise.resolve(void 0);ze=()=>{c.then(A)}};function A(){for(var c;c=se();){try{c.h.call(c.g)}catch(y){B(y)}var g=de;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}Re=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};u.addEventListener("test",y,g),u.removeEventListener("test",y,g)}catch{}return c})();function R(c){return/^[\s\xa0]*$/.test(c)}function Ge(c,g){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}w(Ge,N),Ge.prototype.init=function(c,g){const y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var yt="closure_listenable_"+(Math.random()*1e6|0),Ct=0;function we(c,g,y,I,V){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!I,this.ha=V,this.key=++Ct,this.da=this.fa=!1}function Y(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function le(c,g,y){for(const I in c)g.call(y,c[I],I,c)}function te(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function b(c){const g={};for(const y in c)g[y]=c[y];return g}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ye(c,g){let y,I;for(let V=1;V<arguments.length;V++){I=arguments[V];for(y in I)c[y]=I[y];for(let j=0;j<$.length;j++)y=$[j],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,g,y,I,V){const j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);const Z=Ae(c,g,I,V);return Z>-1?(g=c[Z],y||(g.fa=!1)):(g=new we(g,this.src,j,!!I,V),g.fa=y,c.push(g)),g};function ke(c,g){const y=g.type;if(y in c.g){var I=c.g[y],V=Array.prototype.indexOf.call(I,g,void 0),j;(j=V>=0)&&Array.prototype.splice.call(I,V,1),j&&(Y(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Ae(c,g,y,I){for(let V=0;V<c.length;++V){const j=c[V];if(!j.da&&j.listener==g&&j.capture==!!y&&j.ha==I)return V}return-1}var We="closure_lm_"+(Math.random()*1e6|0),Fe={};function Ye(c,g,y,I,V){if(Array.isArray(g)){for(let j=0;j<g.length;j++)Ye(c,g[j],y,I,V);return null}return y=Pa(y),c&&c[yt]?c.J(g,y,d(I)?!!I.capture:!1,V):tn(c,g,y,!1,I,V)}function tn(c,g,y,I,V,j){if(!g)throw Error("Invalid event type");const Z=d(V)?!!V.capture:!!V;let Ie=to(c);if(Ie||(c[We]=Ie=new Te(c)),y=Ie.add(g,y,I,Z,j),y.proxy)return y;if(I=Zs(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)L||(V=Z),V===void 0&&(V=!1),c.addEventListener(g.toString(),I,V);else if(c.attachEvent)c.attachEvent(eo(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Zs(){function c(y){return g.call(c.src,c.listener,y)}const g=wu;return c}function ka(c,g,y,I,V){if(Array.isArray(g))for(var j=0;j<g.length;j++)ka(c,g[j],y,I,V);else I=d(I)?!!I.capture:!!I,y=Pa(y),c&&c[yt]?(c=c.i,j=String(g).toString(),j in c.g&&(g=c.g[j],y=Ae(g,y,I,V),y>-1&&(Y(g[y]),Array.prototype.splice.call(g,y,1),g.length==0&&(delete c.g[j],c.h--)))):c&&(c=to(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ae(g,y,I,V)),(y=c>-1?g[c]:null)&&li(y))}function li(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[yt])ke(g.i,c);else{var y=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(y,I,c.capture):g.detachEvent?g.detachEvent(eo(y),I):g.addListener&&g.removeListener&&g.removeListener(I),(y=to(g))?(ke(y,c),y.h==0&&(y.src=null,g[We]=null)):Y(c)}}}function eo(c){return c in Fe?Fe[c]:Fe[c]="on"+c}function wu(c,g){if(c.da)c=!0;else{g=new Ge(g,this);const y=c.listener,I=c.ha||c.src;c.fa&&li(c),c=y.call(I,g)}return c}function to(c){return c=c[We],c instanceof Te?c:null}var cs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pa(c){return typeof c=="function"?c:(c[cs]||(c[cs]=function(g){return c.handleEvent(g)}),c[cs])}function vt(){D.call(this),this.i=new Te(this),this.M=this,this.G=null}w(vt,D),vt.prototype[yt]=!0,vt.prototype.removeEventListener=function(c,g,y,I){ka(this,c,g,y,I)};function ft(c,g){var y,I=c.G;if(I)for(y=[];I;I=I.G)y.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new N(g,c);else if(g instanceof N)g.target=g.target||c;else{var V=g;g=new N(I,c),ye(g,V)}V=!0;let j,Z;if(y)for(Z=y.length-1;Z>=0;Z--)j=g.g=y[Z],V=Fn(j,I,!0,g)&&V;if(j=g.g=c,V=Fn(j,I,!0,g)&&V,V=Fn(j,I,!1,g)&&V,y)for(Z=0;Z<y.length;Z++)j=g.g=y[Z],V=Fn(j,I,!1,g)&&V}vt.prototype.N=function(){if(vt.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const y=c.g[g];for(let I=0;I<y.length;I++)Y(y[I]);delete c.g[g],c.h--}}this.G=null},vt.prototype.J=function(c,g,y,I){return this.i.add(String(c),g,!1,y,I)},vt.prototype.K=function(c,g,y,I){return this.i.add(String(c),g,!0,y,I)};function Fn(c,g,y,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let V=!0;for(let j=0;j<g.length;++j){const Z=g[j];if(Z&&!Z.da&&Z.capture==y){const Ie=Z.listener,pt=Z.ha||Z.src;Z.fa&&ke(c.i,Z),V=Ie.call(pt,I)!==!1&&V}}return V&&!I.defaultPrevented}function Na(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:u.setTimeout(c,g||0)}function xa(c){c.g=Na(()=>{c.g=null,c.i&&(c.i=!1,xa(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Tu extends D{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:xa(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(c){D.call(this),this.h=c,this.g={}}w(ui,D);var Da=[];function no(c){le(c.g,function(g,y){this.g.hasOwnProperty(y)&&li(g)},c),c.g={}}ui.prototype.N=function(){ui.Z.N.call(this),no(this)},ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ci=u.JSON.stringify,Iu=u.JSON.parse,hs=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function hi(){}function Su(){}var di={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ro(){N.call(this,"d")}w(ro,N);function ba(){N.call(this,"c")}w(ba,N);var Un={},io=null;function fi(){return io=io||new vt}Un.Ia="serverreachability";function so(c){N.call(this,Un.Ia,c)}w(so,N);function xr(c){const g=fi();ft(g,new so(g))}Un.STAT_EVENT="statevent";function Dr(c,g){N.call(this,Un.STAT_EVENT,c),this.stat=g}w(Dr,N);function ut(c){const g=fi();ft(g,new Dr(g,c))}Un.Ja="timingevent";function Oa(c,g){N.call(this,Un.Ja,c),this.size=g}w(Oa,N);function pi(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},g)}function mi(){this.g=!0}mi.prototype.ua=function(){this.g=!1};function Cu(c,g,y,I,V,j){c.info(function(){if(c.g)if(j){var Z="",Ie=j.split("&");for(let qe=0;qe<Ie.length;qe++){var pt=Ie[qe].split("=");if(pt.length>1){const Et=pt[0];pt=pt[1];const En=Et.split("_");Z=En.length>=2&&En[1]=="type"?Z+(Et+"="+pt+"&"):Z+(Et+"=redacted&")}}}else Z=null;else Z=j;return"XMLHTTP REQ ("+I+") [attempt "+V+"]: "+g+`
`+y+`
`+Z})}function Ru(c,g,y,I,V,j,Z){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+V+"]: "+g+`
`+y+`
`+j+" "+Z})}function er(c,g,y,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ds(c,y)+(I?" "+I:"")})}function Au(c,g){c.info(function(){return"TIMEOUT: "+g})}mi.prototype.info=function(){};function ds(c,g){if(!c.g)return g;if(!g)return null;try{const j=JSON.parse(g);if(j){for(c=0;c<j.length;c++)if(Array.isArray(j[c])){var y=j[c];if(!(y.length<2)){var I=y[1];if(Array.isArray(I)&&!(I.length<1)){var V=I[0];if(V!="noop"&&V!="stop"&&V!="close")for(let Z=1;Z<I.length;Z++)I[Z]=""}}}}return ci(j)}catch{return g}}var gi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_i={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ku;function br(){}w(br,hi),br.prototype.g=function(){return new XMLHttpRequest},ku=new br;function tr(c){return encodeURIComponent(String(c))}function oo(c){var g=1;c=c.split(":");const y=[];for(;g>0&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function Rn(c,g,y,I){this.j=c,this.i=g,this.l=y,this.S=I||1,this.V=new ui(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pu}function Pu(){this.i=null,this.g="",this.h=!1}var Nu={},La={};function jn(c,g,y){c.M=1,c.A=Lr(An(g)),c.u=y,c.R=!0,Ma(c,null)}function Ma(c,g){c.F=Date.now(),fs(c),c.B=An(c.A);var y=c.B,I=c.S;Array.isArray(I)||(I=[String(I)]),qa(y.i,"t",I),c.C=0,y=c.j.L,c.h=new Pu,c.g=ju(c.j,y?g:null,!c.u),c.P>0&&(c.O=new Tu(_(c.Y,c,c.g),c.P)),g=c.V,y=c.g,I=c.ba;var V="readystatechange";Array.isArray(V)||(V&&(Da[0]=V.toString()),V=Da);for(let j=0;j<V.length;j++){const Z=Ye(y,V[j],I||g.handleEvent,!1,g.h||g);if(!Z)break;g.g[Z.key]=Z}g=c.J?b(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),xr(),Cu(c.i,c.v,c.B,c.l,c.S,c.u)}Rn.prototype.ba=function(c){c=c.target;const g=this.O;g&&lr(c)==3?g.j():this.Y(c)},Rn.prototype.Y=function(c){try{if(c==this.g)e:{const Ie=lr(this.g),pt=this.g.ya(),qe=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||Fu(this.g)))){this.K||Ie!=4||pt==7||(pt==8||qe<=0?xr(3):xr(2)),ao(this);var g=this.g.ca();this.X=g;var y=xu(this);if(this.o=g==200,Ru(this.i,this.v,this.B,this.l,this.S,Ie,g),this.o){if(this.U&&!this.L){t:{if(this.g){var I,V=this.g;if((I=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(I)){var j=I;break t}}j=null}if(c=j)er(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,tt(this,c);else{this.o=!1,this.m=3,ut(12),Or(this),ps(this);break e}}if(this.R){c=!0;let Et;for(;!this.K&&this.C<y.length;)if(Et=bu(this,y),Et==La){Ie==4&&(this.m=4,ut(14),c=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Nu){this.m=4,ut(15),er(this.i,this.l,y,"[Invalid Chunk]"),c=!1;break}else er(this.i,this.l,Et,null),tt(this,Et);if(Du(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,ut(16),c=!1),this.o=this.o&&c,!c)er(this.i,this.l,y,"[Invalid Chunked Response]"),Or(this),ps(this);else if(y.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Is(Z),Z.P=!0,ut(11))}}else er(this.i,this.l,y,null),tt(this,y);Ie==4&&Or(this),this.o&&!this.K&&(Ie==4?yo(this.j,this):(this.o=!1,fs(this)))}else Ka(this.g),g==400&&y.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),Or(this),ps(this)}}}catch{}finally{}};function xu(c){if(!Du(c))return c.g.la();const g=Fu(c.g);if(g==="")return"";let y="";const I=g.length,V=lr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Or(c),ps(c),"";c.h.i=new u.TextDecoder}for(let j=0;j<I;j++)c.h.h=!0,y+=c.h.i.decode(g[j],{stream:!(V&&j==I-1)});return g.length=0,c.h.g+=y,c.C=0,c.h.g}function Du(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function bu(c,g){var y=c.C,I=g.indexOf(`
`,y);return I==-1?La:(y=Number(g.substring(y,I)),isNaN(y)?Nu:(I+=1,I+y>g.length?La:(g=g.slice(I,I+y),c.C=I+y,g)))}Rn.prototype.cancel=function(){this.K=!0,Or(this)};function fs(c){c.T=Date.now()+c.H,Va(c,c.H)}function Va(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=pi(_(c.aa,c),g)}function ao(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Rn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Au(this.i,this.B),this.M!=2&&(xr(),ut(17)),Or(this),this.m=2,ps(this)):Va(this,this.T-c)};function ps(c){c.j.I==0||c.K||yo(c.j,c)}function Or(c){ao(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,no(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function tt(c,g){try{var y=c.j;if(y.I!=0&&(y.g==c||Ua(y.h,c))){if(!c.L&&Ua(y.h,c)&&y.I==3){try{var I=y.Ba.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var V=I;if(V[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<c.F)_o(y),yn(y);else break e;hr(y),ut(18)}}else y.xa=V[1],0<y.xa-y.K&&V[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=pi(_(y.Va,y),6e3));ms(y.h)<=1&&y.ta&&(y.ta=void 0)}else vn(y,11)}else if((c.L||y.g==c)&&_o(y),!R(g))for(V=y.Ba.g.parse(g),g=0;g<V.length;g++){let qe=V[g];const Et=qe[0];if(!(Et<=y.K))if(y.K=Et,qe=qe[1],y.I==2)if(qe[0]=="c"){y.M=qe[1],y.ba=qe[2];const En=qe[3];En!=null&&(y.ka=En,y.j.info("VER="+y.ka));const jr=qe[4];jr!=null&&(y.za=jr,y.j.info("SVER="+y.za));const dr=qe[5];dr!=null&&typeof dr=="number"&&dr>0&&(I=1.5*dr,y.O=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const fr=c.g;if(fr){const wo=fr.g?fr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wo){var j=I.h;j.g||wo.indexOf("spdy")==-1&&wo.indexOf("quic")==-1&&wo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(uo(j,j.h),j.h=null))}if(I.G){const Xa=fr.g?fr.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(I.wa=Xa,$e(I.J,I.G,Xa))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-c.F,y.j.info("Handshake RTT: "+y.T+"ms")),I=y;var Z=c;if(I.na=Ya(I,I.L?I.ba:null,I.W),Z.L){gs(I.h,Z);var Ie=Z,pt=I.O;pt&&(Ie.H=pt),Ie.D&&(ao(Ie),fs(Ie)),I.g=Z}else Wt(I);y.i.length>0&&Ur(y)}else qe[0]!="stop"&&qe[0]!="close"||vn(y,7);else y.I==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?vn(y,7):mo(y):qe[0]!="noop"&&y.l&&y.l.qa(qe),y.A=0)}}xr(4)}catch{}}var _d=class{constructor(c,g){this.g=c,this.map=g}};function lo(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ms(c){return c.h?1:c.g?c.g.size:0}function Ua(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function uo(c,g){c.g?c.g.add(g):c.h=g}function gs(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}lo.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function mn(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.G);return g}return O(c.i)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gn(c,g){if(c){c=c.split("&");for(let y=0;y<c.length;y++){const I=c[y].indexOf("=");let V,j=null;I>=0?(V=c[y].substring(0,I),j=c[y].substring(I+1)):V=c[y],g(V,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function nr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof nr?(this.l=c.l,_s(this,c.j),this.o=c.o,this.g=c.g,rr(this,c.u),this.h=c.h,yi(this,Ga(c.i)),this.m=c.m):c&&(g=String(c).match(Ou))?(this.l=!1,_s(this,g[1]||"",!0),this.o=ys(g[2]||""),this.g=ys(g[3]||"",!0),rr(this,g[4]),this.h=ys(g[5]||"",!0),yi(this,g[6]||"",!0),this.m=ys(g[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}nr.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(vs(g,za,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(vs(g,za,!0),"@"),c.push(tr(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&c.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(vs(y,y.charAt(0)=="/"?Es:Ba,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",vs(y,Ha)),c.join("")},nr.prototype.resolve=function(c){const g=An(this);let y=!!c.j;y?_s(g,c.j):y=!!c.o,y?g.o=c.o:y=!!c.g,y?g.g=c.g:y=c.u!=null;var I=c.h;if(y)rr(g,c.u);else if(y=!!c.h){if(I.charAt(0)!="/")if(this.g&&!this.h)I="/"+I;else{var V=g.h.lastIndexOf("/");V!=-1&&(I=g.h.slice(0,V+1)+I)}if(V=I,V==".."||V==".")I="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){I=V.lastIndexOf("/",0)==0,V=V.split("/");const j=[];for(let Z=0;Z<V.length;){const Ie=V[Z++];Ie=="."?I&&Z==V.length&&j.push(""):Ie==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),I&&Z==V.length&&j.push("")):(j.push(Ie),I=!0)}I=j.join("/")}else I=V}return y?g.h=I:y=c.i.toString()!=="",y?yi(g,Ga(c.i)):y=!!c.m,y&&(g.m=c.m),g};function An(c){return new nr(c)}function _s(c,g,y){c.j=y?ys(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function rr(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function yi(c,g,y){g instanceof Oe?(c.i=g,ho(c.i,c.l)):(y||(g=vs(g,yd)),c.i=new Oe(g,c.l))}function $e(c,g,y){c.i.set(g,y)}function Lr(c){return $e(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ys(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function vs(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,ja),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ja(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var za=/[#\/\?@]/g,Ba=/[#\?:]/g,Es=/[#\?]/g,yd=/[#\?@]/g,Ha=/#/g;function Oe(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function ir(c){c.g||(c.g=new Map,c.h=0,c.i&&gn(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=Oe.prototype,n.add=function(c,g){ir(this),this.i=null,c=sr(this,c);let y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function $a(c,g){ir(c),g=sr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function co(c,g){return ir(c),g=sr(c,g),c.g.has(g)}n.forEach=function(c,g){ir(this),this.g.forEach(function(y,I){y.forEach(function(V){c.call(g,V,I,this)},this)},this)};function Wa(c,g){ir(c);let y=[];if(typeof g=="string")co(c,g)&&(y=y.concat(c.g.get(sr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)y=y.concat(c[g]);return y}n.set=function(c,g){return ir(this),this.i=null,c=sr(this,c),co(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=Wa(this,c),c.length>0?String(c[0]):g):g};function qa(c,g,y){$a(c,g),y.length>0&&(c.i=null,c.g.set(sr(c,g),O(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let I=0;I<g.length;I++){var y=g[I];const V=tr(y);y=Wa(this,y);for(let j=0;j<y.length;j++){let Z=V;y[j]!==""&&(Z+="="+tr(y[j])),c.push(Z)}}return this.i=c.join("&")};function Ga(c){const g=new Oe;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function sr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function ho(c,g){g&&!c.j&&(ir(c),c.i=null,c.g.forEach(function(y,I){const V=I.toLowerCase();I!=V&&($a(this,I),qa(this,V,y))},c)),c.j=g}function or(c,g){const y=new mi;if(u.Image){const I=new Image;I.onload=v(Vt,y,"TestLoadImage: loaded",!0,g,I),I.onerror=v(Vt,y,"TestLoadImage: error",!1,g,I),I.onabort=v(Vt,y,"TestLoadImage: abort",!1,g,I),I.ontimeout=v(Vt,y,"TestLoadImage: timeout",!1,g,I),u.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function ar(c,g){const y=new mi,I=new AbortController,V=setTimeout(()=>{I.abort(),Vt(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(j=>{clearTimeout(V),j.ok?Vt(y,"TestPingServer: ok",!0,g):Vt(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(V),Vt(y,"TestPingServer: error",!1,g)})}function Vt(c,g,y,I,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),I(y)}catch{}}function ws(){this.g=new hs}function Mr(c){this.i=c.Sb||null,this.h=c.ab||!1}w(Mr,hi),Mr.prototype.g=function(){return new _n(this.i,this.h)};function _n(c,g){vt.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(_n,vt),n=_n.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,zn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||u).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Lu(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Lu(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?vi(this):zn(this),this.readyState==3&&Lu(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,vi(this))},n.Na=function(c){this.g&&(this.response=c,vi(this))},n.ga=function(){this.g&&vi(this)};function vi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,zn(c)}n.setRequestHeader=function(c,g){this.A.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mu(c){let g="";return le(c,function(y,I){g+=I,g+=":",g+=y,g+=`\r
`}),g}function fo(c,g,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=Mu(y),typeof c=="string"?y!=null&&tr(y):$e(c,g,y))}function Xe(c){vt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Xe,vt);var Vu=/^https?$/i,vd=["POST","PUT"];n=Xe.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,g,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ku.g(),this.g.onreadystatechange=T(_(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){Ei(this,j);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var V in I)y.set(V,I[V]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const j of I.keys())y.set(j,I.get(j));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),V=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(vd,g,void 0)>=0)||I||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(j){Ei(this,j)}};function Ei(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,wi(c),Fr(c)}function wi(c){c.A||(c.A=!0,ft(c,"complete"),ft(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ft(this,"complete"),ft(this,"abort"),Fr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fr(this,!0)),Xe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vr(this):this.Xa())},n.Xa=function(){Vr(this)};function Vr(c){if(c.h&&typeof a<"u"){if(c.v&&lr(c)==4)setTimeout(c.Ca.bind(c),0);else if(ft(c,"readystatechange"),lr(c)==4){c.h=!1;try{const j=c.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var I;if(I=j===0){let Z=String(c.D).match(Ou)[1]||null;!Z&&u.self&&u.self.location&&(Z=u.self.location.protocol.slice(0,-1)),I=!Vu.test(Z?Z.toLowerCase():"")}y=I}if(y)ft(c,"complete"),ft(c,"success");else{c.o=6;try{var V=lr(c)>2?c.g.statusText:""}catch{V=""}c.l=V+" ["+c.ca()+"]",wi(c)}}finally{Fr(c)}}}}function Fr(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const y=c.g;c.g=null,g||ft(c,"ready");try{y.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function lr(c){return c.g?c.g.readyState:0}n.ca=function(){try{return lr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Iu(g)}};function Fu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ka(c){const g={};c=(c.g&&lr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(R(c[I]))continue;var y=oo(c[I]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=g[V]||[];g[V]=j,j.push(y)}te(g,function(I){return I.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function po(c){this.za=0,this.i=[],this.j=new mi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ur("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ur("baseRetryDelayMs",5e3,c),this.Za=ur("retryDelaySeedMs",1e4,c),this.Ta=ur("forwardChannelMaxRetries",2,c),this.va=ur("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new lo(c&&c.concurrentRequestLimit),this.Ba=new ws,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=po.prototype,n.ka=8,n.I=1,n.connect=function(c,g,y,I){ut(0),this.W=c,this.H=g||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.J=Ya(this,null,this.W),Ur(this)};function mo(c){if(go(c),c.I==3){var g=c.V++,y=An(c.J);if($e(y,"SID",c.M),$e(y,"RID",g),$e(y,"TYPE","terminate"),cr(c,y),g=new Rn(c,c.j,g),g.M=2,g.A=Lr(An(y)),y=!1,u.navigator&&u.navigator.sendBeacon)try{y=u.navigator.sendBeacon(g.A.toString(),"")}catch{}!y&&u.Image&&(new Image().src=g.A,y=!0),y||(g.g=ju(g.j,null),g.g.ea(g.A)),g.F=Date.now(),fs(g)}Ss(c)}function yn(c){c.g&&(Is(c),c.g.cancel(),c.g=null)}function go(c){yn(c),c.v&&(u.clearTimeout(c.v),c.v=null),_o(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Ur(c){if(!Fa(c.h)&&!c.m){c.m=!0;var g=c.Ea;ze||C(),Re||(ze(),Re=!0),P.add(g,c),c.D=0}}function Uu(c,g){return ms(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=pi(_(c.Ea,c,g),vo(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const V=new Rn(this,this.j,c);let j=this.o;if(this.U&&(j?(j=b(j),ye(j,this.U)):j=this.U),this.u!==null||this.R||(V.J=j,j=null),this.S)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,g>4096){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Qa(this,V,g),y=An(this.J),$e(y,"RID",c),$e(y,"CVER",22),this.G&&$e(y,"X-HTTP-Session-Id",this.G),cr(this,y),j&&(this.R?g="headers="+tr(Mu(j))+"&"+g:this.u&&fo(y,this.u,j)),uo(this.h,V),this.Ra&&$e(y,"TYPE","init"),this.S?($e(y,"$req",g),$e(y,"SID","null"),V.U=!0,jn(V,y,null)):jn(V,y,g),this.I=2}}else this.I==3&&(c?Ts(this,c):this.i.length==0||Fa(this.h)||Ts(this))};function Ts(c,g){var y;g?y=g.l:y=c.V++;const I=An(c.J);$e(I,"SID",c.M),$e(I,"RID",y),$e(I,"AID",c.K),cr(c,I),c.u&&c.o&&fo(I,c.u,c.o),y=new Rn(c,c.j,y,c.D+1),c.u===null&&(y.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Qa(c,y,1e3),y.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),uo(c.h,y),jn(y,I,g)}function cr(c,g){c.H&&le(c.H,function(y,I){$e(g,I,y)}),c.l&&le({},function(y,I){$e(g,I,y)})}function Qa(c,g,y){y=Math.min(c.i.length,y);const I=c.l?_(c.l.Ka,c.l,c):null;e:{var V=c.i;let Ie=-1;for(;;){const pt=["count="+y];Ie==-1?y>0?(Ie=V[0].g,pt.push("ofs="+Ie)):Ie=0:pt.push("ofs="+Ie);let qe=!0;for(let Et=0;Et<y;Et++){var j=V[Et].g;const En=V[Et].map;if(j-=Ie,j<0)Ie=Math.max(0,V[Et].g-100),qe=!1;else try{j="req"+j+"_"||"";try{var Z=En instanceof Map?En:Object.entries(En);for(const[jr,dr]of Z){let fr=dr;d(dr)&&(fr=ci(dr)),pt.push(j+jr+"="+encodeURIComponent(fr))}}catch(jr){throw pt.push(j+"type="+encodeURIComponent("_badmap")),jr}}catch{I&&I(En)}}if(qe){Z=pt.join("&");break e}}Z=void 0}return c=c.i.splice(0,y),g.G=c,Z}function Wt(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;ze||C(),Re||(ze(),Re=!0),P.add(g,c),c.A=0}}function hr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=pi(_(c.Da,c),vo(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Ti(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=pi(_(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),yn(this),Ti(this))};function Is(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function Ti(c){c.g=new Rn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=An(c.na);$e(g,"RID","rpc"),$e(g,"SID",c.M),$e(g,"AID",c.K),$e(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&$e(g,"TO",c.ia),$e(g,"TYPE","xmlhttp"),cr(c,g),c.u&&c.o&&fo(g,c.u,c.o),c.O&&(c.g.H=c.O);var y=c.g;c=c.ba,y.M=1,y.A=Lr(An(g)),y.u=null,y.R=!0,Ma(y,c)}n.Va=function(){this.C!=null&&(this.C=null,yn(this),hr(this),ut(19))};function _o(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function yo(c,g){var y=null;if(c.g==g){_o(c),Is(c),c.g=null;var I=2}else if(Ua(c.h,g))y=g.G,gs(c.h,g),I=1;else return;if(c.I!=0){if(g.o)if(I==1){y=g.u?g.u.length:0,g=Date.now()-g.F;var V=c.D;I=fi(),ft(I,new Oa(I,y)),Ur(c)}else Wt(c);else if(V=g.m,V==3||V==0&&g.X>0||!(I==1&&Uu(c,g)||I==2&&hr(c)))switch(y&&y.length>0&&(g=c.h,g.i=g.i.concat(y)),V){case 1:vn(c,5);break;case 4:vn(c,10);break;case 3:vn(c,6);break;default:vn(c,2)}}}function vo(c,g){let y=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(y*=2),y*g}function vn(c,g){if(c.j.info("Error code "+g),g==2){var y=_(c.bb,c),I=c.Ua;const V=!I;I=new nr(I||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||_s(I,"https"),Lr(I),V?or(I.toString(),y):ar(I.toString(),y)}else ut(2);c.I=0,c.l&&c.l.pa(g),Ss(c),go(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Ss(c){if(c.I=0,c.ja=[],c.l){const g=mn(c.h);(g.length!=0||c.i.length!=0)&&(z(c.ja,g),z(c.ja,c.i),c.h.i.length=0,O(c.i),c.i.length=0),c.l.oa()}}function Ya(c,g,y){var I=y instanceof nr?An(y):new nr(y);if(I.g!="")g&&(I.g=g+"."+I.g),rr(I,I.u);else{var V=u.location;I=V.protocol,g=g?g+"."+V.hostname:V.hostname,V=+V.port;const j=new nr(null);I&&_s(j,I),g&&(j.g=g),V&&rr(j,V),y&&(j.h=y),I=j}return y=c.G,g=c.wa,y&&g&&$e(I,y,g),$e(I,"VER",c.ka),cr(c,I),I}function ju(c,g,y){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new Xe(new Mr({ab:y})):new Xe(c.ma),g.Fa(c.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zu(){}n=zu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Eo(){}Eo.prototype.g=function(c,g){return new Ft(c,g)};function Ft(c,g){vt.call(this),this.g=new po(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!R(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!R(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Ii(this)}w(Ft,vt),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){mo(this.g)},Ft.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.v&&(y={},y.__data__=ci(c),c=y);g.i.push(new _d(g.Ya++,c)),g.I==3&&Ur(g)},Ft.prototype.N=function(){this.g.l=null,delete this.j,mo(this.g),delete this.g,Ft.Z.N.call(this)};function Bu(c){ro.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}w(Bu,ro);function Hu(){ba.call(this),this.status=1}w(Hu,ba);function Ii(c){this.g=c}w(Ii,zu),Ii.prototype.ra=function(){ft(this.g,"a")},Ii.prototype.qa=function(c){ft(this.g,new Bu(c))},Ii.prototype.pa=function(c){ft(this.g,new Hu)},Ii.prototype.oa=function(){ft(this.g,"b")},Eo.prototype.createWebChannel=Eo.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,JT=function(){return new Eo},XT=function(){return fi()},YT=Un,Vp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},gi.NO_ERROR=0,gi.TIMEOUT=8,gi.HTTP_ERROR=6,eh=gi,_i.COMPLETE="complete",QT=_i,Su.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",vt.prototype.listen=vt.prototype.J,kl=Su,Xe.prototype.listenOnce=Xe.prototype.K,Xe.prototype.getLastError=Xe.prototype.Ha,Xe.prototype.getLastErrorCode=Xe.prototype.ya,Xe.prototype.getStatus=Xe.prototype.ca,Xe.prototype.getResponseJson=Xe.prototype.La,Xe.prototype.getResponseText=Xe.prototype.la,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Fa,KT=Xe}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});const $v="@firebase/firestore",Wv="4.9.2";/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let Ca="12.3.0";/**
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
 */const Qs=new Bh("@firebase/firestore");function Ho(){return Qs.logLevel}function re(n,...e){if(Qs.logLevel<=De.DEBUG){const t=e.map(Xm);Qs.debug(`Firestore (${Ca}): ${n}`,...t)}}function si(n,...e){if(Qs.logLevel<=De.ERROR){const t=e.map(Xm);Qs.error(`Firestore (${Ca}): ${n}`,...t)}}function da(n,...e){if(Qs.logLevel<=De.WARN){const t=e.map(Xm);Qs.warn(`Firestore (${Ca}): ${n}`,...t)}}function Xm(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ZT(n,r,t)}function ZT(n,e,t){let r=`FIRESTORE (${Ca}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw si(r),new Error(r)}function lt(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||ZT(e,o,r)}function Ve(n,e){return n}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class eI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xt.UNAUTHENTICATED)))}shutdown(){}}class AN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class kN{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){lt(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new Hs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Hs,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Hs)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string",31837,{l:r}),new eI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class PN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class NN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new PN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){lt(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(lt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function DN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class tI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=DN(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Le(n,e){return n<e?-1:n>e?1:0}function Fp(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const o=n.charAt(r),a=e.charAt(r);if(o!==a)return op(o)===op(a)?Le(o,a):op(o)?1:-1}return Le(n.length,e.length)}const bN=55296,ON=57343;function op(n){const e=n.charCodeAt(0);return e>=bN&&e<=ON}function fa(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}/**
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
 */const Gv="__name__";class yr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=yr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Le(e.length,t.length)}static compareSegments(e,t){const r=yr.isNumericId(e),o=yr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?yr.extractNumericId(e).compare(yr.extractNumericId(t)):Fp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qi.fromString(e.substring(4,e.length-2))}}class at extends yr{construct(e,t,r){return new at(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(ee.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new at(t)}static emptyPath(){return new at([])}}const LN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends yr{construct(e,t,r){return new sn(e,t,r)}static isValidIdentifier(e){return LN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gv}static keyField(){return new sn([Gv])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new ce(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ce(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new ce(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(at.fromString(e))}static fromName(e){return new _e(at.fromString(e).popFirst(5))}static empty(){return new _e(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return at.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new at(e.slice()))}}function MN(n,e,t,r){if(e===!0&&r===!0)throw new ce(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kv(n){if(_e.isDocumentKey(n))throw new ce(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function VN(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function FN(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function Up(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=FN(n);throw new ce(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){const t={typeString:n};return e&&(t.value=e),t}function gu(n,e){if(!VN(n))throw new ce(ee.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ce(ee.INVALID_ARGUMENT,t);return!0}/**
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
 */const Qv=-62135596800,Yv=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yv);return new It(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qv)throw new ce(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yv}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:It._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gu(e,It._jsonSchema))return new It(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}It._jsonSchemaVersion="firestore/timestamp/1.0",It._jsonSchema={type:St("string",It._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new It(0,0))}static max(){return new Se(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const eu=-1;function UN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(r===1e9?new It(t+1,0):new It(t,r));return new rs(o,_e.empty(),e)}function jN(n){return new rs(n.readTime,n.key,eu)}class rs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rs(Se.min(),_e.empty(),eu)}static max(){return new rs(Se.max(),_e.empty(),eu)}}function zN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
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
 */const BN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function id(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==BN)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,r)=>{t(e)}))}static reject(e){return new q(((t,r)=>{r(e)}))}static waitFor(e){return new q(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(p=>r(p)))})),u=!0,a===o&&t()}))}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next((o=>o?q.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new q(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let p=0;p<a;p++){const _=p;t(e[_]).next((v=>{u[_]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new q(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}function $N(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ra(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sd.ce=-1;/**
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
 */const WN=-1;function od(n){return n==null}function jp(n){return n===0&&1/n==-1/0}/**
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
 */const nI="";function qN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xv(e)),e=GN(n.get(t),e);return Xv(e)}function GN(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case nI:t+="";break;default:t+=a}}return t}function Xv(n){return n+nI+""}/**
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
 */function Jv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _u(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function KN(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class _t{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zc(this.root,e,this.comparator,!1)}getReverseIterator(){return new zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zc(this.root,e,this.comparator,!0)}}class zc{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??zt.RED,this.left=o??zt.EMPTY,this.right=a??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new zt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return zt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zv(this.data.getIterator())}getIteratorFrom(e){return new Zv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class Zv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hi{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new Hi([])}unionWith(e){let t=new xt(sn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Hi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class rI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new rI("Invalid base64 string: "+a):a}})(e);return new $t(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new $t(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const QN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(n){if(lt(!!n,39018),typeof n=="string"){let e=0;const t=QN.exec(n);if(lt(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:gt(n.seconds),nanos:gt(n.nanos)}}function gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ss(n){return typeof n=="string"?$t.fromBase64String(n):$t.fromUint8Array(n)}/**
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
 */const iI="server_timestamp",sI="__type__",oI="__previous_value__",aI="__local_write_time__";function Jm(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[sI])==null?void 0:r.stringValue)===iI}function ad(n){const e=n.mapValue.fields[oI];return Jm(e)?ad(e):e}function tu(n){const e=is(n.mapValue.fields[aI].timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class YN{constructor(e,t,r,o,a,u,d,p,_,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=_,this.isUsingEmulator=v}}const kh="(default)";class nu{constructor(e,t){this.projectId=e,this.database=t||kh}static empty(){return new nu("","")}get isDefaultDatabase(){return this.database===kh}isEqual(e){return e instanceof nu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const XN="__type__",JN="__max__",Bc={mapValue:{}},ZN="__vector__",zp="value";function os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jm(n)?4:tx(n)?9007199254740991:ex(n)?10:11:Ce(28295,{value:n})}function Cr(n,e){if(n===e)return!0;const t=os(n);if(t!==os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return tu(n).isEqual(tu(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=is(o.timestampValue),d=is(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return ss(o.bytesValue).isEqual(ss(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return gt(o.geoPointValue.latitude)===gt(a.geoPointValue.latitude)&&gt(o.geoPointValue.longitude)===gt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return gt(o.integerValue)===gt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=gt(o.doubleValue),d=gt(a.doubleValue);return u===d?jp(u)===jp(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return fa(n.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Jv(u)!==Jv(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!Cr(u[p],d[p])))return!1;return!0})(n,e);default:return Ce(52216,{left:n})}}function ru(n,e){return(n.values||[]).find((t=>Cr(t,e)))!==void 0}function pa(n,e){if(n===e)return 0;const t=os(n),r=os(e);if(t!==r)return Le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=gt(a.integerValue||a.doubleValue),p=gt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return eE(n.timestampValue,e.timestampValue);case 4:return eE(tu(n),tu(e));case 5:return Fp(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=ss(a),p=ss(u);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),p=u.split("/");for(let _=0;_<d.length&&_<p.length;_++){const v=Le(d[_],p[_]);if(v!==0)return v}return Le(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Le(gt(a.latitude),gt(u.latitude));return d!==0?d:Le(gt(a.longitude),gt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return tE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var T,O,z,W;const d=a.fields||{},p=u.fields||{},_=(T=d[zp])==null?void 0:T.arrayValue,v=(O=p[zp])==null?void 0:O.arrayValue,w=Le(((z=_==null?void 0:_.values)==null?void 0:z.length)||0,((W=v==null?void 0:v.values)==null?void 0:W.length)||0);return w!==0?w:tE(_,v)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Bc.mapValue&&u===Bc.mapValue)return 0;if(a===Bc.mapValue)return 1;if(u===Bc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),_=u.fields||{},v=Object.keys(_);p.sort(),v.sort();for(let w=0;w<p.length&&w<v.length;++w){const T=Fp(p[w],v[w]);if(T!==0)return T;const O=pa(d[p[w]],_[v[w]]);if(O!==0)return O}return Le(p.length,v.length)})(n.mapValue,e.mapValue);default:throw Ce(23264,{he:t})}}function eE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=is(n),r=is(e),o=Le(t.seconds,r.seconds);return o!==0?o:Le(t.nanos,r.nanos)}function tE(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=pa(t[o],r[o]);if(a)return a}return Le(t.length,r.length)}function ma(n){return Bp(n)}function Bp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=is(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ss(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=Bp(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${Bp(t.fields[u])}`;return o+"}"})(n.mapValue):Ce(61005,{value:n})}function th(n){switch(os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ad(n);return e?16+th(e):16;case 5:return 2*n.stringValue.length;case 6:return ss(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+th(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return _u(r.fields,((a,u)=>{o+=a.length+th(u)})),o})(n.mapValue);default:throw Ce(13486,{value:n})}}function Hp(n){return!!n&&"integerValue"in n}function Zm(n){return!!n&&"arrayValue"in n}function nE(n){return!!n&&"nullValue"in n}function rE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ap(n){return!!n&&"mapValue"in n}function ex(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[XN])==null?void 0:r.stringValue)===ZN}function Ul(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _u(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ul(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ul(n.arrayValue.values[t]);return e}return{...n}}function tx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===JN}/**
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
 */class vr{constructor(e){this.value=e}static empty(){return new vr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ap(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ul(t)}setAll(e){let t=sn.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=Ul(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());ap(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];ap(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){_u(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new vr(Ul(this.value))}}/**
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
 */class Jt{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Jt(e,0,Se.min(),Se.min(),Se.min(),vr.empty(),0)}static newFoundDocument(e,t,r,o){return new Jt(e,1,t,Se.min(),r,o,0)}static newNoDocument(e,t){return new Jt(e,2,t,Se.min(),Se.min(),vr.empty(),0)}static newUnknownDocument(e,t){return new Jt(e,3,t,Se.min(),Se.min(),vr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ph{constructor(e,t){this.position=e,this.inclusive=t}}function iE(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=pa(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function sE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Cr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nh{constructor(e,t="asc"){this.field=e,this.dir=t}}function nx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lI{}class Nt extends lI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ix(e,t,r):t==="array-contains"?new ax(e,r):t==="in"?new lx(e,r):t==="not-in"?new ux(e,r):t==="array-contains-any"?new cx(e,r):new Nt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new sx(e,r):new ox(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pa(t,this.value)):t!==null&&os(this.value)===os(t)&&this.matchesComparison(pa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rr extends lI{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Rr(e,t)}matches(e){return uI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uI(n){return n.op==="and"}function cI(n){return rx(n)&&uI(n)}function rx(n){for(const e of n.filters)if(e instanceof Rr)return!1;return!0}function $p(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+ma(n.value);if(cI(n))return n.filters.map((e=>$p(e))).join(",");{const e=n.filters.map((t=>$p(t))).join(",");return`${n.op}(${e})`}}function hI(n,e){return n instanceof Nt?(function(r,o){return o instanceof Nt&&r.op===o.op&&r.field.isEqual(o.field)&&Cr(r.value,o.value)})(n,e):n instanceof Rr?(function(r,o){return o instanceof Rr&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&hI(u,o.filters[d])),!0):!1})(n,e):void Ce(19439)}function dI(n){return n instanceof Nt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ma(t.value)}`})(n):n instanceof Rr?(function(t){return t.op.toString()+" {"+t.getFilters().map(dI).join(" ,")+"}"})(n):"Filter"}class ix extends Nt{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class sx extends Nt{constructor(e,t){super(e,"in",t),this.keys=fI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ox extends Nt{constructor(e,t){super(e,"not-in",t),this.keys=fI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function fI(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class ax extends Nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zm(t)&&ru(t.arrayValue,this.value)}}class lx extends Nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ru(this.value.arrayValue,t)}}class ux extends Nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ru(this.value.arrayValue,t)}}class cx extends Nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zm(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ru(this.value.arrayValue,r)))}}/**
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
 */class hx{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Te=null}}function oE(n,e=null,t=[],r=[],o=null,a=null,u=null){return new hx(n,e,t,r,o,a,u)}function eg(n){const e=Ve(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>$p(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),od(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ma(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ma(r))).join(",")),e.Te=t}return e.Te}function tg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sE(n.startAt,e.startAt)&&sE(n.endAt,e.endAt)}function Wp(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ld{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dx(n,e,t,r,o,a,u,d){return new ld(n,e,t,r,o,a,u,d)}function pI(n){return new ld(n)}function aE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fx(n){return n.collectionGroup!==null}function jl(n){const e=Ve(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new xt(sn.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((_=>{_.isInequality()&&(d=d.add(_.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Nh(a,r))})),t.has(sn.keyField().canonicalString())||e.Ie.push(new Nh(sn.keyField(),r))}return e.Ie}function Ir(n){const e=Ve(n);return e.Ee||(e.Ee=px(e,jl(n))),e.Ee}function px(n,e){if(n.limitType==="F")return oE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Nh(o.field,a)}));const t=n.endAt?new Ph(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ph(n.startAt.position,n.startAt.inclusive):null;return oE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qp(n,e,t){return new ld(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ud(n,e){return tg(Ir(n),Ir(e))&&n.limitType===e.limitType}function mI(n){return`${eg(Ir(n))}|lt:${n.limitType}`}function $o(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>dI(o))).join(", ")}]`),od(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>ma(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>ma(o))).join(",")),`Target(${r})`})(Ir(n))}; limitType=${n.limitType})`}function cd(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of jl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,p){const _=iE(u,d,p);return u.inclusive?_<=0:_<0})(r.startAt,jl(r),o)||r.endAt&&!(function(u,d,p){const _=iE(u,d,p);return u.inclusive?_>=0:_>0})(r.endAt,jl(r),o))})(n,e)}function mx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gI(n){return(e,t)=>{let r=!1;for(const o of jl(n)){const a=gx(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function gx(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,u,d){const p=u.data.field(a),_=d.data.field(a);return p!==null&&_!==null?pa(p,_):Ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ce(19790,{direction:n.dir})}}/**
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
 */class Js{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_u(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return KN(this.inner)}size(){return this.innerSize}}/**
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
 */const _x=new _t(_e.comparator);function as(){return _x}const _I=new _t(_e.comparator);function Pl(...n){let e=_I;for(const t of n)e=e.insert(t.key,t);return e}function yx(n){let e=_I;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function zs(){return zl()}function yI(){return zl()}function zl(){return new Js((n=>n.toString()),((n,e)=>n.isEqual(e)))}const vx=new xt(_e.comparator);function je(...n){let e=vx;for(const t of n)e=e.add(t);return e}const Ex=new xt(Le);function wx(){return Ex}/**
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
 */function Tx(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jp(e)?"-0":e}}function Ix(n){return{integerValue:""+n}}/**
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
 */class hd{constructor(){this._=void 0}}function Sx(n,e,t){return n instanceof Gp?(function(o,a){const u={fields:{[sI]:{stringValue:iI},[aI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Jm(a)&&(a=ad(a)),a&&(u.fields[oI]=a),{mapValue:u}})(t,e):n instanceof xh?vI(n,e):n instanceof Dh?EI(n,e):(function(o,a){const u=Rx(o,a),d=lE(u)+lE(o.Ae);return Hp(u)&&Hp(o.Ae)?Ix(d):Tx(o.serializer,d)})(n,e)}function Cx(n,e,t){return n instanceof xh?vI(n,e):n instanceof Dh?EI(n,e):t}function Rx(n,e){return n instanceof Kp?(function(r){return Hp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Gp extends hd{}class xh extends hd{constructor(e){super(),this.elements=e}}function vI(n,e){const t=wI(e);for(const r of n.elements)t.some((o=>Cr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Dh extends hd{constructor(e){super(),this.elements=e}}function EI(n,e){let t=wI(e);for(const r of n.elements)t=t.filter((o=>!Cr(o,r)));return{arrayValue:{values:t}}}class Kp extends hd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function lE(n){return gt(n.integerValue||n.doubleValue)}function wI(n){return Zm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ax(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof xh&&o instanceof xh||r instanceof Dh&&o instanceof Dh?fa(r.elements,o.elements,Cr):r instanceof Kp&&o instanceof Kp?Cr(r.Ae,o.Ae):r instanceof Gp&&o instanceof Gp})(n.transform,e.transform)}class $s{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $s}static exists(e){return new $s(void 0,e)}static updateTime(e){return new $s(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ng{}function TI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Px(n.key,$s.none()):new rg(n.key,n.data,$s.none());{const t=n.data,r=vr.empty();let o=new xt(sn.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new dd(n.key,r,new Hi(o.toArray()),$s.none())}}function kx(n,e,t){n instanceof rg?(function(o,a,u){const d=o.value.clone(),p=cE(o.fieldTransforms,a,u.transformResults);d.setAll(p),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof dd?(function(o,a,u){if(!nh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=cE(o.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(II(o)),p.setAll(d),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Bl(n,e,t,r){return n instanceof rg?(function(a,u,d,p){if(!nh(a.precondition,u))return d;const _=a.value.clone(),v=hE(a.fieldTransforms,p,u);return _.setAll(v),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null})(n,e,t,r):n instanceof dd?(function(a,u,d,p){if(!nh(a.precondition,u))return d;const _=hE(a.fieldTransforms,p,u),v=u.data;return v.setAll(II(a)),v.setAll(_),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return nh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function uE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&fa(r,o,((a,u)=>Ax(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class rg extends ng{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class dd extends ng{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function II(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function cE(n,e,t){const r=new Map;lt(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,Cx(u,d,t[o]))}return r}function hE(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,Sx(a,u,e))}return r}class Px extends ng{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nx{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&kx(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Bl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Bl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=yI();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const p=TI(u,d);p!==null&&r.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(Se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),je())}isEqual(e){return this.batchId===e.batchId&&fa(this.mutations,e.mutations,((t,r)=>uE(t,r)))&&fa(this.baseMutations,e.baseMutations,((t,r)=>uE(t,r)))}}/**
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
 */class xx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Dx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Tt,Me;function SI(n){if(n===void 0)return si("GRPC error has no .code"),ee.UNKNOWN;switch(n){case Tt.OK:return ee.OK;case Tt.CANCELLED:return ee.CANCELLED;case Tt.UNKNOWN:return ee.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return ee.INTERNAL;case Tt.UNAVAILABLE:return ee.UNAVAILABLE;case Tt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case Tt.NOT_FOUND:return ee.NOT_FOUND;case Tt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case Tt.ABORTED:return ee.ABORTED;case Tt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case Tt.DATA_LOSS:return ee.DATA_LOSS;default:return Ce(39323,{code:n})}}(Me=Tt||(Tt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bx(){return new TextEncoder}/**
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
 */const Ox=new Qi([4294967295,4294967295],0);function dE(n){const e=bx().encode(n),t=new GT;return t.update(e),new Uint8Array(t.digest())}function fE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Qi([t,r],0),new Qi([o,a],0)]}class ig{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Nl(`Invalid padding: ${t}`);if(r<0)throw new Nl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Nl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Qi.fromNumber(this.ge)}ye(e,t,r){let o=e.add(t.multiply(Qi.fromNumber(r)));return o.compare(Ox)===1&&(o=new Qi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=dE(e),[r,o]=fE(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new ig(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=dE(e),[r,o]=fE(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Nl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fd{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,yu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new fd(Se.min(),o,new _t(Le),as(),je())}}class yu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yu(r,t,je(),je(),je())}}/**
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
 */class rh{constructor(e,t,r,o){this.be=e,this.removedTargetIds=t,this.key=r,this.De=o}}class CI{constructor(e,t){this.targetId=e,this.Ce=t}}class RI{constructor(e,t,r=$t.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class pE{constructor(){this.ve=0,this.Fe=mE(),this.Me=$t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),t=je(),r=je();return this.Fe.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:Ce(38017,{changeType:a})}})),new yu(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=mE()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Lx{constructor(e){this.Ge=e,this.ze=new Map,this.je=as(),this.Je=Hc(),this.He=Hc(),this.Ye=new _t(Le)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,r=e.Ce.count,o=this.ot(t);if(o){const a=o.target;if(Wp(a))if(r===0){const u=new _e(a.path);this.et(t,u,Jt.newNoDocument(u,Se.min()))}else lt(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const d=this.ut(e),p=d?this.ct(d,e,u):1;if(p!==0){this.it(t);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=ss(r).toUint8Array()}catch(p){if(p instanceof rI)return da("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new ig(u,o,a)}catch(p){return da(p instanceof Nl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.et(t,a,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const d=this.ot(u);if(d){if(a.current&&Wp(d.target)){const p=new _e(d.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,Jt.newNoDocument(p,e))}a.Be&&(t.set(u,a.ke()),a.qe())}}));let r=je();this.He.forEach(((a,u)=>{let d=!0;u.forEachWhile((p=>{const _=this.ot(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const o=new fd(e,t,this.Ye,this.je,r);return this.je=as(),this.Je=Hc(),this.He=Hc(),this.Ye=new _t(Le),o}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new pE,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new xt(Le),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new xt(Le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pE),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Hc(){return new _t(_e.comparator)}function mE(){return new _t(_e.comparator)}const Mx={asc:"ASCENDING",desc:"DESCENDING"},Vx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fx={and:"AND",or:"OR"};class Ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qp(n,e){return n.useProto3Json||od(e)?e:{value:e}}function jx(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zx(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ea(n){return lt(!!n,49232),Se.fromTimestamp((function(t){const r=is(t);return new It(r.seconds,r.nanos)})(n))}function Bx(n,e){return Yp(n,e).canonicalString()}function Yp(n,e){const t=(function(o){return new at(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function AI(n){const e=at.fromString(n);return lt(DI(e),10190,{key:e.toString()}),e}function lp(n,e){const t=AI(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(PI(t))}function kI(n,e){return Bx(n.databaseId,e)}function Hx(n){const e=AI(n);return e.length===4?at.emptyPath():PI(e)}function gE(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function PI(n){return lt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function $x(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ce(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(_,v){return _.useProto3Json?(lt(v===void 0||typeof v=="string",58123),$t.fromBase64String(v||"")):(lt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),$t.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(_){const v=_.code===void 0?ee.UNKNOWN:SI(_.code);return new ce(v,_.message||"")})(u);t=new RI(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=lp(n,r.document.name),a=ea(r.document.updateTime),u=r.document.createTime?ea(r.document.createTime):Se.min(),d=new vr({mapValue:{fields:r.document.fields}}),p=Jt.newFoundDocument(o,a,u,d),_=r.targetIds||[],v=r.removedTargetIds||[];t=new rh(_,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=lp(n,r.document),a=r.readTime?ea(r.readTime):Se.min(),u=Jt.newNoDocument(o,a),d=r.removedTargetIds||[];t=new rh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=lp(n,r.document),a=r.removedTargetIds||[];t=new rh([],a,o,null)}else{if(!("filter"in e))return Ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new Dx(o,a),d=r.targetId;t=new CI(d,u)}}return t}function Wx(n,e){return{documents:[kI(n,e.path)]}}function qx(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=kI(n,o);const a=(function(_){if(_.length!==0)return xI(Rr.create(_,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(_){if(_.length!==0)return _.map((v=>(function(T){return{field:Wo(T.field),direction:Qx(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Qp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function Gx(n){let e=Hx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){lt(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=NI(w);return T instanceof Rr&&cI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(z){return new Nh(qo(z.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,od(T)?null:T})(t.limit));let p=null;t.startAt&&(p=(function(w){const T=!!w.before,O=w.values||[];return new Ph(O,T)})(t.startAt));let _=null;return t.endAt&&(_=(function(w){const T=!w.before,O=w.values||[];return new Ph(O,T)})(t.endAt)),dx(e,o,u,a,d,"F",p,_)}function Kx(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function NI(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qo(t.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=qo(t.unaryFilter.field);return Nt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=qo(t.unaryFilter.field);return Nt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=qo(t.unaryFilter.field);return Nt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Nt.create(qo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Rr.create(t.compositeFilter.filters.map((r=>NI(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}})(t.compositeFilter.op))})(n):Ce(30097,{filter:n})}function Qx(n){return Mx[n]}function Yx(n){return Vx[n]}function Xx(n){return Fx[n]}function Wo(n){return{fieldPath:n.canonicalString()}}function qo(n){return sn.fromServerFormat(n.fieldPath)}function xI(n){return n instanceof Nt?(function(t){if(t.op==="=="){if(rE(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NAN"}};if(nE(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rE(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NOT_NAN"}};if(nE(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wo(t.field),op:Yx(t.op),value:t.value}}})(n):n instanceof Rr?(function(t){const r=t.getFilters().map((o=>xI(o)));return r.length===1?r[0]:{compositeFilter:{op:Xx(t.op),filters:r}}})(n):Ce(54877,{filter:n})}function DI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $i{constructor(e,t,r,o,a=Se.min(),u=Se.min(),d=$t.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new $i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Jx{constructor(e){this.yt=e}}function Zx(n){const e=Gx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qp(e,e.limit,"L"):e}/**
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
 */class eD{constructor(){this.Cn=new tD}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(rs.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class tD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new xt(at.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new xt(at.comparator)).toArray()}}/**
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
 */const _E={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bI=41943040;class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(bI,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
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
 */class ga{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ga(0)}static cr(){return new ga(-1)}}/**
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
 */const yE="LruGarbageCollector",nD=1048576;function vE([n,e],[t,r]){const o=Le(n,t);return o===0?Le(e,r):o}class rD{constructor(e){this.Ir=e,this.buffer=new xt(vE),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(yE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ra(t)?re(yE,"Ignoring IndexedDB error during garbage collection: ",t):await id(t)}await this.Vr(3e5)}))}}class sD{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(sd.ce);const r=new rD(t);return this.mr.forEachTarget(e,(o=>r.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>r.Ar(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(_E)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_E):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,o,a,u,d,p,_;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,u=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(_=Date.now(),Ho()<=De.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(_-p)+`ms
Total Duration: ${_-v}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function oD(n,e){return new sD(n,e)}/**
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
 */class aD{constructor(){this.changes=new Js((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class uD{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Bl(r.mutation,o,Hi.empty(),It.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,je()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=je()){const o=zs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=Pl();return a.forEach(((d,p)=>{u=u.insert(d,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=zs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,je())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=as();const u=zl(),d=(function(){return zl()})();return t.forEach(((p,_)=>{const v=r.get(_.key);o.has(_.key)&&(v===void 0||v.mutation instanceof dd)?a=a.insert(_.key,_):v!==void 0?(u.set(_.key,v.mutation.getFieldMask()),Bl(v.mutation,_,v.mutation.getFieldMask(),It.now())):u.set(_.key,Hi.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((_,v)=>u.set(_,v))),t.forEach(((_,v)=>d.set(_,new lD(v,u.get(_)??null)))),d)))}recalculateAndSaveOverlays(e,t){const r=zl();let o=new _t(((u,d)=>u-d)),a=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((p=>{const _=t.get(p);if(_===null)return;let v=r.get(p)||Hi.empty();v=d.applyToLocalView(_,v),r.set(p,v);const w=(o.get(d.batchId)||je()).add(p);o=o.insert(d.batchId,w)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),_=p.key,v=p.value,w=yI();v.forEach((T=>{if(!a.has(T)){const O=TI(t.get(T),r.get(T));O!==null&&w.set(T,O),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,_,w))}return q.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fx(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):q.resolve(zs());let d=eu,p=a;return u.next((_=>q.forEach(_,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?q.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{p=p.insert(v,T)}))))).next((()=>this.populateOverlays(e,_,a))).next((()=>this.computeViews(e,p,_,je()))).next((v=>({batchId:d,changes:yx(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((r=>{let o=Pl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=Pl();return this.indexManager.getCollectionParents(e,a).next((d=>q.forEach(d,(p=>{const _=(function(w,T){return new ld(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,_,r,o).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((p,_)=>{const v=_.getKey();u.get(v)===null&&(u=u.insert(v,Jt.newInvalidDocument(v)))}));let d=Pl();return u.forEach(((p,_)=>{const v=a.get(p);v!==void 0&&Bl(v.mutation,_,Hi.empty(),It.now()),cd(t,_)&&(d=d.insert(p,_))})),d}))}}/**
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
 */class cD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ea(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:Zx(o.bundledQuery),readTime:ea(o.readTime)}})(t)),q.resolve()}}/**
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
 */class hD{constructor(){this.overlays=new _t(_e.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zs();return q.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.St(e,t,a)})),q.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.qr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const o=zs(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,_=p.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===a&&p.largestBatchId>r&&o.set(p.getKey(),p)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new _t(((_,v)=>_-v));const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>r){let v=a.get(_.largestBatchId);v===null&&(v=zs(),a=a.insert(_.largestBatchId,v)),v.set(_.getKey(),_)}}const d=zs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((_,v)=>d.set(_,v))),!(d.size()>=o)););return q.resolve(d)}St(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.qr.get(o.largestBatchId).delete(r.key);this.qr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new xx(t,r));let a=this.qr.get(t);a===void 0&&(a=je(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(){this.sessionToken=$t.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class sg{constructor(){this.Qr=new xt(Mt.$r),this.Ur=new xt(Mt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Mt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Mt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new _e(new at([])),r=new Mt(t,e),o=new Mt(t,e+1),a=[];return this.Ur.forEachInRange([r,o],(u=>{this.Gr(u),a.push(u.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new at([])),r=new Mt(t,e),o=new Mt(t,e+1);let a=je();return this.Ur.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Mt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Mt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||Le(e.Yr,t.Yr)}static Kr(e,t){return Le(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
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
 */class fD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new xt(Mt.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Nx(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Zr=this.Zr.add(new Mt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return q.resolve(u)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.ei(r),a=o<0?0:o;return q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?WN:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Mt(t,0),o=new Mt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,o],(u=>{const d=this.Xr(u.Yr);a.push(d)})),q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xt(Le);return t.forEach((o=>{const a=new Mt(o,0),u=new Mt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],(d=>{r=r.add(d.Yr)}))})),q.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new Mt(new _e(a),0);let d=new xt(Le);return this.Zr.forEachWhile((p=>{const _=p.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(d=d.add(p.Yr)),!0)}),u),q.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((r=>{const o=this.Xr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){lt(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return q.forEach(t.mutations,(o=>{const a=new Mt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Mt(t,0),o=this.Zr.firstAfterOrEqual(r);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pD{constructor(e){this.ri=e,this.docs=(function(){return new _t(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(t))}getEntries(e,t){let r=as();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():Jt.newInvalidDocument(o))})),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=as();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:_,value:{document:v}}=p.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||zN(jN(v),r)<=0||(o.has(v.key)||cd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return q.resolve(a)}getAllFromCollectionGroup(e,t,r,o){Ce(9500)}ii(e,t){return q.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new mD(this)}getSize(e){return q.resolve(this.size)}}class mD extends aD{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(r)})),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class gD{constructor(e){this.persistence=e,this.si=new Js((t=>eg(t)),tg),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.oi=0,this._i=new sg,this.targetCount=0,this.ai=ga.ur()}forEachTarget(e,t){return this.si.forEach(((r,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ga(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.si.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),q.waitFor(a).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
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
 */class OI{constructor(e,t){this.ui={},this.overlays={},this.ci=new sd(0),this.li=!1,this.li=!0,this.hi=new dD,this.referenceDelegate=e(this),this.Pi=new gD(this),this.indexManager=new eD,this.remoteDocumentCache=(function(o){return new pD(o)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Jx(t),this.Ii=new cD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new fD(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const o=new _D(this.ci.next());return this.referenceDelegate.Ei(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ai(e,t){return q.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class _D extends HN{constructor(e){super(),this.currentSequenceNumber=e}}class og{constructor(e){this.persistence=e,this.Ri=new sg,this.Vi=null}static mi(e){return new og(e)}get fi(){if(this.Vi)return this.Vi;throw Ce(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(r=>{const o=_e.fromPath(r);return this.gi(e,o).next((a=>{a||t.removeEntry(o,Se.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class bh{constructor(e,t){this.persistence=e,this.pi=new Js((r=>qN(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=oD(this,t)}static mi(e,t){return new bh(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return q.forEach(this.pi,((r,o)=>this.br(e,r,o).next((a=>a?q.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ii(e,(u=>this.br(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Se.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=th(e.data.value)),t}br(e,t,r){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ag{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=o}static As(e,t){let r=je(),o=je();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new ag(e,t.fromCache,r,o)}}/**
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
 */class yD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return BS()?8:$N(Zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ys(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ws(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new yD;return this.Ss(e,t,u).next((d=>{if(a.result=d,this.Vs)return this.bs(e,t,u,d.size)}))})).next((()=>a.result))}bs(e,t,r,o){return r.documentReadCount<this.fs?(Ho()<=De.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",$o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(Ho()<=De.DEBUG&&re("QueryEngine","Query:",$o(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.gs*o?(Ho()<=De.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",$o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ir(t))):q.resolve())}ys(e,t){if(aE(t))return q.resolve(null);let r=Ir(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=qp(t,null,"F"),r=Ir(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=je(...a);return this.ps.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((p=>{const _=this.Ds(t,d);return this.Cs(t,_,u,p.readTime)?this.ys(e,qp(t,null,"F")):this.vs(e,_,t,p)}))))})))))}ws(e,t,r,o){return aE(t)||o.isEqual(Se.min())?q.resolve(null):this.ps.getDocuments(e,r).next((a=>{const u=this.Ds(t,a);return this.Cs(t,u,r,o)?q.resolve(null):(Ho()<=De.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),$o(t)),this.vs(e,u,t,UN(o,eu)).next((d=>d)))}))}Ds(e,t){let r=new xt(gI(e));return t.forEach(((o,a)=>{cd(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Ss(e,t,r){return Ho()<=De.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",$o(t)),this.ps.getDocumentsMatchingQuery(e,t,rs.min(),r)}vs(e,t,r,o){return this.ps.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const lg="LocalStore",ED=3e8;class wD{constructor(e,t,r,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new _t(Le),this.xs=new Js((a=>eg(a)),tg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function TD(n,e,t,r){return new wD(n,e,t,r)}async function LI(n,e){const t=Ve(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let p=je();for(const _ of o){u.push(_.batchId);for(const v of _.mutations)p=p.add(v.key)}for(const _ of a){d.push(_.batchId);for(const v of _.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(r,p).next((_=>({Ls:_,removedBatchIds:u,addedBatchIds:d})))}))}))}function MI(n){const e=Ve(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function ID(n,e){const t=Ve(n),r=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach(((v,w)=>{const T=o.get(w);if(!T)return;d.push(t.Pi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.Pi.addMatchingKeys(a,v.addedDocuments,w))));let O=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?O=O.withResumeToken($t.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,r)),o=o.insert(w,O),(function(W,B,se){return W.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=ED?!0:se.addedDocuments.size+se.modifiedDocuments.size+se.removedDocuments.size>0})(T,O,v)&&d.push(t.Pi.updateTargetData(a,O))}));let p=as(),_=je();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(SD(a,u,e.documentUpdates).next((v=>{p=v.ks,_=v.qs}))),!r.isEqual(Se.min())){const v=t.Pi.getLastRemoteSnapshotVersion(a).next((w=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return q.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,_))).next((()=>p))})).then((a=>(t.Ms=o,a)))}function SD(n,e,t){let r=je(),o=je();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=as();return t.forEach(((d,p)=>{const _=a.get(d);p.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(lg,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",p.version)})),{ks:u,qs:o}}))}function CD(n,e){const t=Ve(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.Pi.getTargetData(r,e).next((a=>a?(o=a,q.resolve(o)):t.Pi.allocateTargetId(r).next((u=>(o=new $i(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Ms.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Xp(n,e,t){const r=Ve(n),o=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Ra(u))throw u;re(lg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ms=r.Ms.remove(e),r.xs.delete(o.target)}function EE(n,e,t){const r=Ve(n);let o=Se.min(),a=je();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,_,v){const w=Ve(p),T=w.xs.get(v);return T!==void 0?q.resolve(w.Ms.get(T)):w.Pi.getTargetData(_,v)})(r,u,Ir(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,d.targetId).next((p=>{a=p}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,e,t?o:Se.min(),t?a:je()))).next((d=>(RD(r,mx(e),d),{documents:d,Qs:a})))))}function RD(n,e,t){let r=n.Os.get(e)||Se.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class wE{constructor(){this.activeTargetIds=wx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AD{constructor(){this.Mo=new wE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kD{Oo(e){}shutdown(){}}/**
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
 */const TE="ConnectivityMonitor";class IE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(TE,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(TE,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $c=null;function Jp(){return $c===null?$c=(function(){return 268435456+Math.round(2147483648*Math.random())})():$c++,"0x"+$c.toString(16)}/**
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
 */const up="RestConnection",PD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ND{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${o}`,this.Wo=this.databaseId.database===kh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Go(e,t,r,o,a){const u=Jp(),d=this.zo(e,t.toUriEncodedString());re(up,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,a);const{host:_}=new URL(d),v=oi(_);return this.Jo(e,d,p,r,v).then((w=>(re(up,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw da(up,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Ho(e,t,r,o,a,u){return this.Go(e,t,r,o,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ca})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}zo(e,t){const r=PD[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class xD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Yt="WebChannelConnection";class DD extends ND{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,o,a){const u=Jp();return new Promise(((d,p)=>{const _=new KT;_.setWithCredentials(!0),_.listenOnce(QT.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case eh.NO_ERROR:const w=_.getResponseJson();re(Yt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case eh.TIMEOUT:re(Yt,`RPC '${e}' ${u} timed out`),p(new ce(ee.DEADLINE_EXCEEDED,"Request time out"));break;case eh.HTTP_ERROR:const T=_.getStatus();if(re(Yt,`RPC '${e}' ${u} failed with status:`,T,"response text:",_.getResponseText()),T>0){let O=_.getResponseJson();Array.isArray(O)&&(O=O[0]);const z=O==null?void 0:O.error;if(z&&z.status&&z.message){const W=(function(se){const he=se.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(he)>=0?he:ee.UNKNOWN})(z.status);p(new ce(W,z.message))}else p(new ce(ee.UNKNOWN,"Server responded with status "+_.getStatus()))}else p(new ce(ee.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{l_:e,streamId:u,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Yt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);re(Yt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",v,r,15)}))}T_(e,t,r){const o=Jp(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=JT(),d=XT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const v=a.join("");re(Yt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const w=u.createWebChannel(v,p);this.I_(w);let T=!1,O=!1;const z=new xD({Yo:B=>{O?re(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(T||(re(Yt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),re(Yt,`RPC '${e}' stream ${o} sending:`,B),w.send(B))},Zo:()=>w.close()}),W=(B,se,he)=>{B.listen(se,(de=>{try{he(de)}catch(me){setTimeout((()=>{throw me}),0)}}))};return W(w,kl.EventType.OPEN,(()=>{O||(re(Yt,`RPC '${e}' stream ${o} transport opened.`),z.o_())})),W(w,kl.EventType.CLOSE,(()=>{O||(O=!0,re(Yt,`RPC '${e}' stream ${o} transport closed`),z.a_(),this.E_(w))})),W(w,kl.EventType.ERROR,(B=>{O||(O=!0,da(Yt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),z.a_(new ce(ee.UNAVAILABLE,"The operation could not be completed")))})),W(w,kl.EventType.MESSAGE,(B=>{var se;if(!O){const he=B.data[0];lt(!!he,16349);const de=he,me=(de==null?void 0:de.error)||((se=de[0])==null?void 0:se.error);if(me){re(Yt,`RPC '${e}' stream ${o} received error:`,me);const ze=me.status;let Re=(function(A){const D=Tt[A];if(D!==void 0)return SI(D)})(ze),P=me.message;Re===void 0&&(Re=ee.INTERNAL,P="Unknown error status: "+ze+" with message "+me.message),O=!0,z.a_(new ce(Re,P)),w.close()}else re(Yt,`RPC '${e}' stream ${o} received:`,he),z.u_(he)}})),W(d,YT.STAT_EVENT,(B=>{B.stat===Vp.PROXY?re(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Vp.NOPROXY&&re(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.__()}),0),z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function cp(){return typeof document<"u"?document:null}/**
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
 */function VI(n){return new Ux(n,!0)}/**
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
 */class FI{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=o,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const SE="PersistentStream";class bD{constructor(e,t,r,o,a,u,d,p){this.Mi=e,this.S_=r,this.b_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new FI(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(si(t.toString()),si("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===t&&this.G_(r,o)}),(r=>{e((()=>{const o=new ce(ee.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(SE,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(SE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class OD extends bD{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=$x(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Se.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Se.min():u.readTime?ea(u.readTime):Se.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=gE(this.serializer),t.addTarget=(function(a,u){let d;const p=u.target;if(d=Wp(p)?{documents:Wx(a,p)}:{query:qx(a,p).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=zx(a,u.resumeToken);const _=Qp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(Se.min())>0){d.readTime=jx(a,u.snapshotVersion.toTimestamp());const _=Qp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}return d})(this.serializer,e);const r=Kx(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=gE(this.serializer),t.removeTarget=e,this.q_(t)}}/**
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
 */class LD{}class MD extends LD{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ce(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Go(e,Yp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ce(ee.UNKNOWN,a.toString())}))}Ho(e,t,r,o,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Ho(e,Yp(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(ee.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class VD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(si(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const _a="RemoteStore";class FD{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{Eu(this)&&(re(_a,"Restarting streams for network reachability change."),await(async function(p){const _=Ve(p);_.Ea.add(4),await vu(_),_.Ra.set("Unknown"),_.Ea.delete(4),await pd(_)})(this))}))})),this.Ra=new VD(r,o)}}async function pd(n){if(Eu(n))for(const e of n.da)await e(!0)}async function vu(n){for(const e of n.da)await e(!1)}function UI(n,e){const t=Ve(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),dg(t)?hg(t):Aa(t).O_()&&cg(t,e))}function ug(n,e){const t=Ve(n),r=Aa(t);t.Ia.delete(e),r.O_()&&jI(t,e),t.Ia.size===0&&(r.O_()?r.L_():Eu(t)&&t.Ra.set("Unknown"))}function cg(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Aa(n).Y_(e)}function jI(n,e){n.Va.Ue(e),Aa(n).Z_(e)}function hg(n){n.Va=new Lx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Aa(n).start(),n.Ra.ua()}function dg(n){return Eu(n)&&!Aa(n).x_()&&n.Ia.size>0}function Eu(n){return Ve(n).Ea.size===0}function zI(n){n.Va=void 0}async function UD(n){n.Ra.set("Online")}async function jD(n){n.Ia.forEach(((e,t)=>{cg(n,e)}))}async function zD(n,e){zI(n),dg(n)?(n.Ra.ha(e),hg(n)):n.Ra.set("Unknown")}async function BD(n,e,t){if(n.Ra.set("Online"),e instanceof RI&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ia.delete(d),o.Va.removeTarget(d))})(n,e)}catch(r){re(_a,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await CE(n,r)}else if(e instanceof rh?n.Va.Ze(e):e instanceof CI?n.Va.st(e):n.Va.tt(e),!t.isEqual(Se.min()))try{const r=await MI(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Va.Tt(u);return d.targetChanges.forEach(((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.Ia.get(_);v&&a.Ia.set(_,v.withResumeToken(p.resumeToken,u))}})),d.targetMismatches.forEach(((p,_)=>{const v=a.Ia.get(p);if(!v)return;a.Ia.set(p,v.withResumeToken($t.EMPTY_BYTE_STRING,v.snapshotVersion)),jI(a,p);const w=new $i(v.target,p,_,v.sequenceNumber);cg(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){re(_a,"Failed to raise snapshot:",r),await CE(n,r)}}async function CE(n,e,t){if(!Ra(e))throw e;n.Ea.add(1),await vu(n),n.Ra.set("Offline"),t||(t=()=>MI(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(_a,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await pd(n)}))}async function RE(n,e){const t=Ve(n);t.asyncQueue.verifyOperationInProgress(),re(_a,"RemoteStore received new credentials");const r=Eu(t);t.Ea.add(3),await vu(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await pd(t)}async function HD(n,e){const t=Ve(n);e?(t.Ea.delete(2),await pd(t)):e||(t.Ea.add(2),await vu(t),t.Ra.set("Unknown"))}function Aa(n){return n.ma||(n.ma=(function(t,r,o){const a=Ve(t);return a.sa(),new OD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Xo:UD.bind(null,n),t_:jD.bind(null,n),r_:zD.bind(null,n),H_:BD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),dg(n)?hg(n):n.Ra.set("Unknown")):(await n.ma.stop(),zI(n))}))),n.ma}/**
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
 */class fg{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new fg(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function BI(n,e){if(si("AsyncQueue",`${e}: ${n}`),Ra(n))return new ce(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ta{static emptySet(e){return new ta(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=Pl(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ta)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ta;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class AE{constructor(){this.ga=new _t(_e.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ya{constructor(e,t,r,o,a,u,d,p,_){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new ya(e,t,ta.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ud(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class $D{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class WD{constructor(){this.queries=kE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const o=Ve(t),a=o.queries;o.queries=kE(),a.forEach(((u,d)=>{for(const p of d.Sa)p.onError(r)}))})(this,new ce(ee.ABORTED,"Firestore shutting down"))}}function kE(){return new Js((n=>mI(n)),ud)}async function qD(n,e){const t=Ve(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.ba()&&e.Da()&&(r=2):(a=new $D,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(o,!0);break;case 1:a.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=BI(u,`Initialization of query '${$o(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&pg(t)}async function GD(n,e){const t=Ve(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.Sa.indexOf(e);u>=0&&(a.Sa.splice(u,1),a.Sa.length===0?o=e.Da()?0:1:!a.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function KD(n,e){const t=Ve(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.Sa)d.Fa(o)&&(r=!0);u.wa=o}}r&&pg(t)}function QD(n,e,t){const r=Ve(n),o=r.queries.get(e);if(o)for(const a of o.Sa)a.onError(t);r.queries.delete(e)}function pg(n){n.Ca.forEach((e=>{e.next()}))}var Zp,PE;(PE=Zp||(Zp={})).Ma="default",PE.Cache="cache";class YD{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new ya(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ya.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zp.Cache}}/**
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
 */class HI{constructor(e){this.key=e}}class $I{constructor(e){this.key=e}}class XD{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=je(),this.mutatedKeys=je(),this.eu=gI(e),this.tu=new ta(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new AE,o=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,w)=>{const T=o.get(v),O=cd(this.query,w)?w:null,z=!!T&&this.mutatedKeys.has(T.key),W=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let B=!1;T&&O?T.data.isEqual(O.data)?z!==W&&(r.track({type:3,doc:O}),B=!0):this.su(T,O)||(r.track({type:2,doc:O}),B=!0,(p&&this.eu(O,p)>0||_&&this.eu(O,_)<0)&&(d=!0)):!T&&O?(r.track({type:0,doc:O}),B=!0):T&&!O&&(r.track({type:1,doc:T}),B=!0,(p||_)&&(d=!0)),B&&(O?(u=u.add(O),a=W?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{tu:u,iu:r,Cs:d,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((v,w)=>(function(O,z){const W=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{Rt:B})}};return W(O)-W(z)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(r),o=o??!1;const d=t&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,_=p!==this.Za;return this.Za=p,u.length!==0||_?{snapshot:new ya(this.query,e.tu,a,u,e.mutatedKeys,p===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new AE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=je(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new $I(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new HI(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=je();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ya.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const mg="SyncEngine";class JD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ZD{constructor(e){this.key=e,this.hu=!1}}class eb{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Js((d=>mI(d)),ud),this.Iu=new Map,this.Eu=new Set,this.du=new _t(_e.comparator),this.Au=new Map,this.Ru=new sg,this.Vu={},this.mu=new Map,this.fu=ga.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tb(n,e,t=!0){const r=QI(n);let o;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.lu()):o=await WI(r,e,t,!0),o}async function nb(n,e){const t=QI(n);await WI(t,e,!0,!1)}async function WI(n,e,t,r){const o=await CD(n.localStore,Ir(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await rb(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&UI(n.remoteStore,o),d}async function rb(n,e,t,r,o){n.pu=(w,T,O)=>(async function(W,B,se,he){let de=B.view.ru(se);de.Cs&&(de=await EE(W.localStore,B.query,!1).then((({documents:P})=>B.view.ru(P,de))));const me=he&&he.targetChanges.get(B.targetId),ze=he&&he.targetMismatches.get(B.targetId)!=null,Re=B.view.applyChanges(de,W.isPrimaryClient,me,ze);return xE(W,B.targetId,Re.au),Re.snapshot})(n,w,T,O);const a=await EE(n.localStore,e,!0),u=new XD(e,a.Qs),d=u.ru(a.documents),p=yu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,p);xE(n,t,_.au);const v=new JD(e,t,u);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),_.snapshot}async function ib(n,e,t){const r=Ve(n),o=r.Tu.get(e),a=r.Iu.get(o.targetId);if(a.length>1)return r.Iu.set(o.targetId,a.filter((u=>!ud(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Xp(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&ug(r.remoteStore,o.targetId),em(r,o.targetId)})).catch(id)):(em(r,o.targetId),await Xp(r.localStore,o.targetId,!0))}async function sb(n,e){const t=Ve(n),r=t.Tu.get(e),o=t.Iu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ug(t.remoteStore,r.targetId))}async function qI(n,e){const t=Ve(n);try{const r=await ID(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Au.get(a);u&&(lt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.hu=!0:o.modifiedDocuments.size>0?lt(u.hu,14607):o.removedDocuments.size>0&&(lt(u.hu,42227),u.hu=!1))})),await KI(t,r,e)}catch(r){await id(r)}}function NE(n,e,t){const r=Ve(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Tu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const p=Ve(u);p.onlineState=d;let _=!1;p.queries.forEach(((v,w)=>{for(const T of w.Sa)T.va(d)&&(_=!0)})),_&&pg(p)})(r.eventManager,e),o.length&&r.Pu.H_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ob(n,e,t){const r=Ve(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Au.get(e),a=o&&o.key;if(a){let u=new _t(_e.comparator);u=u.insert(a,Jt.newNoDocument(a,Se.min()));const d=je().add(a),p=new fd(Se.min(),new Map,new _t(Le),u,d);await qI(r,p),r.du=r.du.remove(a),r.Au.delete(e),gg(r)}else await Xp(r.localStore,e,!1).then((()=>em(r,e,t))).catch(id)}function em(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||GI(n,r)}))}function GI(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ug(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),gg(n))}function xE(n,e,t){for(const r of t)r instanceof HI?(n.Ru.addReference(r.key,e),ab(n,r)):r instanceof $I?(re(mg,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||GI(n,r.key)):Ce(19791,{wu:r})}function ab(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(mg,"New document in limbo: "+t),n.Eu.add(r),gg(n))}function gg(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new _e(at.fromString(e)),r=n.fu.next();n.Au.set(r,new ZD(t)),n.du=n.du.insert(t,r),UI(n.remoteStore,new $i(Ir(pI(t.path)),r,"TargetPurposeLimboResolution",sd.ce))}}async function KI(n,e,t){const r=Ve(n),o=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((d,p)=>{u.push(r.pu(p,e,t).then((_=>{var v;if((_||t)&&r.isPrimaryClient){const w=_?!_.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:v.current;r.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(_){o.push(_);const w=ag.As(p.targetId,_);a.push(w)}})))})),await Promise.all(u),r.Pu.H_(o),await(async function(p,_){const v=Ve(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>q.forEach(_,(T=>q.forEach(T.Es,(O=>v.persistence.referenceDelegate.addReference(w,T.targetId,O))).next((()=>q.forEach(T.ds,(O=>v.persistence.referenceDelegate.removeReference(w,T.targetId,O)))))))))}catch(w){if(!Ra(w))throw w;re(lg,"Failed to update sequence numbers: "+w)}for(const w of _){const T=w.targetId;if(!w.fromCache){const O=v.Ms.get(T),z=O.snapshotVersion,W=O.withLastLimboFreeSnapshotVersion(z);v.Ms=v.Ms.insert(T,W)}}})(r.localStore,a))}async function lb(n,e){const t=Ve(n);if(!t.currentUser.isEqual(e)){re(mg,"User change. New user:",e.toKey());const r=await LI(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((d=>{d.forEach((p=>{p.reject(new ce(ee.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await KI(t,r.Ls)}}function ub(n,e){const t=Ve(n),r=t.Au.get(e);if(r&&r.hu)return je().add(r.key);{let o=je();const a=t.Iu.get(e);if(!a)return o;for(const u of a){const d=t.Tu.get(u);o=o.unionWith(d.view.nu)}return o}}function QI(n){const e=Ve(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ub.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ob.bind(null,e),e.Pu.H_=KD.bind(null,e.eventManager),e.Pu.yu=QD.bind(null,e.eventManager),e}class Oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=VI(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return TD(this.persistence,new vD,e.initialUser,this.serializer)}Cu(e){return new OI(og.mi,this.serializer)}Du(e){return new AD}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oh.provider={build:()=>new Oh};class cb extends Oh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){lt(this.persistence.referenceDelegate instanceof bh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new iD(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new OI((r=>bh.mi(r,t)),this.serializer)}}class tm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>NE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lb.bind(null,this.syncEngine),await HD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new WD})()}createDatastore(e){const t=VI(e.databaseInfo.databaseId),r=(function(a){return new DD(a)})(e.databaseInfo);return(function(a,u,d,p){return new MD(a,u,d,p)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new FD(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>NE(this.syncEngine,t,0)),(function(){return IE.v()?new IE:new kD})())}createSyncEngine(e,t){return(function(o,a,u,d,p,_,v){const w=new eb(o,a,u,d,p,_);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Ve(o);re(_a,"RemoteStore shutting down."),a.Ea.add(5),await vu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}tm.provider={build:()=>new tm};/**
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
 */class hb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):si("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ls="FirestoreClient";class db{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=tI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{re(ls,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(re(ls,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=BI(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function hp(n,e){n.asyncQueue.verifyOperationInProgress(),re(ls,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await LI(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function DE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fb(n);re(ls,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>RE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>RE(e.remoteStore,o))),n._onlineComponents=e}async function fb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(ls,"Using user provided OfflineComponentProvider");try{await hp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;da("Error using user provided cache. Falling back to memory cache: "+t),await hp(n,new Oh)}}else re(ls,"Using default OfflineComponentProvider"),await hp(n,new cb(void 0));return n._offlineComponents}async function pb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(ls,"Using user provided OnlineComponentProvider"),await DE(n,n._uninitializedComponentsProvider._online)):(re(ls,"Using default OnlineComponentProvider"),await DE(n,new tm))),n._onlineComponents}async function mb(n){const e=await pb(n),t=e.eventManager;return t.onListen=tb.bind(null,e.syncEngine),t.onUnlisten=ib.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sb.bind(null,e.syncEngine),t}function gb(n,e,t={}){const r=new Hs;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,p,_){const v=new hb({next:T=>{v.Nu(),u.enqueueAndForget((()=>GD(a,w))),T.fromCache&&p.source==="server"?_.reject(new ce(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(T)},error:T=>_.reject(T)}),w=new YD(d,v,{includeMetadataChanges:!0,qa:!0});return qD(a,w)})(await mb(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function YI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bE=new Map;/**
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
 */const XI="firestore.googleapis.com",OE=!0;class LE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ce(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=XI,this.ssl=OE}else this.host=e.host,this.ssl=e.ssl??OE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nD)throw new ce(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YI(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _g{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new RN;switch(r.type){case"firstParty":return new NN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=bE.get(t);r&&(re("ComponentProvider","Removing Datastore"),bE.delete(t),r.terminate())})(this),Promise.resolve()}}function _b(n,e,t,r={}){var _;n=Up(n,_g);const o=oi(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&(Fh(`https://${d}`),Uh("Firestore",!0)),a.host!==XI&&a.host!==d&&da("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...a,host:d,ssl:o,emulatorOptions:r};if(!Ji(p,u)&&(n._setSettings(p),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=Xt.MOCK_USER;else{v=sm(r.mockUserToken,(_=n._app)==null?void 0:_.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ce(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Xt(T)}n._authCredentials=new AN(new eI(v,w))}}/**
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
 */class md{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new md(this.firestore,e,this._query)}}class Ln{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new na(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ln(this.firestore,e,this._key)}toJSON(){return{type:Ln._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(gu(t,Ln._jsonSchema))return new Ln(e,r||null,new _e(at.fromString(t.referencePath)))}}Ln._jsonSchemaVersion="firestore/documentReference/1.0",Ln._jsonSchema={type:St("string",Ln._jsonSchemaVersion),referencePath:St("string")};class na extends md{constructor(e,t,r){super(e,t,pI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ln(this.firestore,null,new _e(e))}withConverter(e){return new na(this.firestore,e,this._path)}}function yb(n,e,...t){if(n=en(n),n instanceof _g){const r=at.fromString(e,...t);return Kv(r),new na(n,null,r)}{if(!(n instanceof Ln||n instanceof na))throw new ce(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(e,...t));return Kv(r),new na(n.firestore,null,r)}}/**
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
 */const ME="AsyncQueue";class VE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new FI(this,"async_queue_retry"),this._c=()=>{const r=cp();r&&re(ME,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=cp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=cp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Hs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ra(e))throw e;re(ME,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,si("INTERNAL UNHANDLED ERROR: ",FE(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=fg.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(o),o}uc(){this.nc&&Ce(47125,{Pc:FE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function FE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class JI extends _g{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new VE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new VE(e),this._firestoreClient=void 0,await e}}}function vb(n,e){const t=typeof n=="object"?n:Hh(),r=typeof n=="string"?n:kh,o=ou(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=im("firestore");a&&_b(o,...a)}return o}function Eb(n){if(n._terminated)throw new ce(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wb(n),n._firestoreClient}function wb(n){var r,o,a;const e=n._freezeSettings(),t=(function(d,p,_,v){return new YN(d,p,_,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,YI(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new db(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er($t.fromBase64String(e))}catch(t){throw new ce(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Er($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gu(e,Er._jsonSchema))return Er.fromBase64String(e.bytes)}}Er._jsonSchemaVersion="firestore/bytes/1.0",Er._jsonSchema={type:St("string",Er._jsonSchemaVersion),bytes:St("string")};/**
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
 */class ZI{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yi._jsonSchemaVersion}}static fromJSON(e){if(gu(e,Yi._jsonSchema))return new Yi(e.latitude,e.longitude)}}Yi._jsonSchemaVersion="firestore/geoPoint/1.0",Yi._jsonSchema={type:St("string",Yi._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gu(e,Xi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xi(e.vectorValues);throw new ce(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xi._jsonSchemaVersion="firestore/vectorValue/1.0",Xi._jsonSchema={type:St("string",Xi._jsonSchemaVersion),vectorValues:St("object")};const Tb=new RegExp("[~\\*/\\[\\]]");function Ib(n,e,t){if(e.search(Tb)>=0)throw UE(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ZI(...e.split("."))._internalPath}catch{throw UE(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function UE(n,e,t,r,o){let a=`Function ${e}() called with invalid data`;a+=". ";let u="";return new ce(ee.INVALID_ARGUMENT,a+n+u)}/**
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
 */class e0{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(t0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sb extends e0{data(){return super.data()}}function t0(n,e){return typeof e=="string"?Ib(n,e):e instanceof ZI?e._internalPath:e._delegate._internalPath}/**
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
 */function Cb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rb{convertValue(e,t="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _u(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var r,o,a;const t=(a=(o=(r=e.fields)==null?void 0:r[zp].arrayValue)==null?void 0:o.values)==null?void 0:a.map((u=>gt(u.doubleValue)));return new Xi(t)}convertGeoPoint(e){return new Yi(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ad(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(tu(e));default:return null}}convertTimestamp(e){const t=is(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=at.fromString(e);lt(DI(r),9688,{name:e});const o=new nu(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return o.isEqual(t)||si(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class Wc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ra extends e0{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(t0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ra._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ra._jsonSchemaVersion="firestore/documentSnapshot/1.0",ra._jsonSchema={type:St("string",ra._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class ih extends ra{data(e={}){return super.data(e)}}class ia{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Wc(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ih(this._firestore,this._userDataWriter,r.key,r,new Wc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const p=new ih(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wc(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const p=new ih(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wc(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,v=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:Ab(d.type),doc:p,oldIndex:_,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ia._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ab(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}ia._jsonSchemaVersion="firestore/querySnapshot/1.0",ia._jsonSchema={type:St("string",ia._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class kb extends Rb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ln(this.firestore,null,t)}}function Pb(n){n=Up(n,md);const e=Up(n.firestore,JI),t=Eb(e),r=new kb(e);return Cb(n._query),gb(t,n._query).then((o=>new ia(e,r,n,o)))}(function(e,t=!0){(function(o){Ca=o})(us),Zi(new ti("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new JI(new kN(r.getProvider("auth-internal")),new xN(u,r.getProvider("app-check-internal")),(function(_,v){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ce(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nu(_.options.projectId,v)})(u,o),u);return a={useFetchStreams:t,...a},d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Mn($v,Wv,e),Mn($v,Wv,"esm2020")})();/**
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
 */const n0="firebasestorage.googleapis.com",Nb="storageBucket",xb=120*1e3,Db=600*1e3;/**
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
 */class Nr extends kr{constructor(e,t,r=0){super(dp(e),`Firebase Storage: ${t} (${dp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ar;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ar||(Ar={}));function dp(n){return"storage/"+n}function bb(){const n="An unknown error occurred, please check the error payload for server response.";return new Nr(Ar.UNKNOWN,n)}function Ob(){return new Nr(Ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lb(){return new Nr(Ar.CANCELED,"User canceled the upload/download.")}function Mb(n){return new Nr(Ar.INVALID_URL,"Invalid URL '"+n+"'.")}function Vb(n){return new Nr(Ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jE(n){return new Nr(Ar.INVALID_ARGUMENT,n)}function r0(){return new Nr(Ar.APP_DELETED,"The Firebase app was deleted.")}function Fb(n){return new Nr(Ar.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Xn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Xn.makeFromUrl(e,t)}catch{return new Xn(e,"")}if(r.path==="")return r;throw Vb(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(me){me.path.charAt(me.path.length-1)==="/"&&(me.path_=me.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),p={bucket:1,path:3};function _(me){me.path_=decodeURIComponent(me.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",O=new RegExp(`^https?://${w}/${v}/b/${o}/o${T}`,"i"),z={bucket:1,path:3},W=t===n0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",se=new RegExp(`^https?://${W}/${o}/${B}`,"i"),de=[{regex:d,indices:p,postModify:a},{regex:O,indices:z,postModify:_},{regex:se,indices:{bucket:1,path:2},postModify:_}];for(let me=0;me<de.length;me++){const ze=de[me],Re=ze.regex.exec(e);if(Re){const P=Re[ze.indices.bucket];let C=Re[ze.indices.path];C||(C=""),r=new Xn(P,C),ze.postModify(r);break}}if(r==null)throw Mb(e);return r}}class Ub{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jb(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function p(){return d===2}let _=!1;function v(...B){_||(_=!0,e.apply(null,B))}function w(B){o=setTimeout(()=>{o=null,n(O,p())},B)}function T(){a&&clearTimeout(a)}function O(B,...se){if(_){T();return}if(B){T(),v.call(null,B,...se);return}if(p()||u){T(),v.call(null,B,...se);return}r<64&&(r*=2);let de;d===1?(d=2,de=0):de=(r+Math.random())*1e3,w(de)}let z=!1;function W(B){z||(z=!0,T(),!_&&(o!==null?(B||(d=2),clearTimeout(o),w(0)):B||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,W(!0)},t),W}function zb(n){n(!1)}/**
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
 */function Bb(n){return n!==void 0}function zE(n,e,t,r){if(r<e)throw jE(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw jE(`Invalid value for '${n}'. Expected ${t} or less.`)}function Hb(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var Lh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Lh||(Lh={}));/**
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
 */function $b(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
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
 */class Wb{constructor(e,t,r,o,a,u,d,p,_,v,w,T=!0,O=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=p,this.timeout_=_,this.progressCallback_=v,this.connectionFactory_=w,this.retry=T,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((z,W)=>{this.resolve_=z,this.reject_=W,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new qc(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const p=d.loaded,_=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,_)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Lh.NO_ERROR,p=a.getStatus();if(!d||$b(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Lh.ABORT;r(!1,new qc(!1,null,v));return}const _=this.successCodes_.indexOf(p)!==-1;r(!0,new qc(_,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());Bb(p)?a(p):a()}catch(p){u(p)}else if(d!==null){const p=bb();p.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,p)):u(p)}else if(o.canceled){const p=this.appDelete_?r0():Lb();u(p)}else{const p=Ob();u(p)}};this.canceled_?t(!1,new qc(!1,null,!0)):this.backoffId_=jb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qc{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function qb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Gb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Kb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Qb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Yb(n,e,t,r,o,a,u=!0,d=!1){const p=Hb(n.urlParams),_=n.url+p,v=Object.assign({},n.headers);return Kb(v,e),qb(v,t),Gb(v,a),Qb(v,r),new Wb(_,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
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
 */function Xb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Jb(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Mh{constructor(e,t){this._service=e,t instanceof Xn?this._location=t:this._location=Xn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mh(e,t)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jb(this._location.path)}get storage(){return this._service}get parent(){const e=Xb(this._location.path);if(e===null)return null;const t=new Xn(this._location.bucket,e);return new Mh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Fb(e)}}function BE(n,e){const t=e==null?void 0:e[Nb];return t==null?null:Xn.makeFromBucketSpec(t,n)}function Zb(n,e,t,r={}){n.host=`${e}:${t}`;const o=oi(e);o&&(Fh(`https://${n.host}/b`),Uh("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:sm(a,n.app.options.projectId))}class eO{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=n0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xb,this._maxUploadRetryTime=Db,this._requests=new Set,o!=null?this._bucket=Xn.makeFromBucketSpec(o,this._host):this._bucket=BE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=BE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mh(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new Ub(r0());{const u=Yb(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const HE="@firebase/storage",$E="0.14.0";/**
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
 */const i0="storage";function tO(n=Hh(),e){n=en(n);const r=ou(n,i0).getImmediate({identifier:e}),o=im("storage");return o&&nO(r,...o),r}function nO(n,e,t,r={}){Zb(n,e,t,r)}function rO(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new eO(t,r,o,e,us)}function iO(){Zi(new ti(i0,rO,"PUBLIC").setMultipleInstances(!0)),Mn(HE,$E,""),Mn(HE,$E,"esm2020")}iO();const sO={apiKey:"AIzaSyCLF_BclwdmavNPMk0gJtR2M22fhvNRK-s",authDomain:"aireservas-admin.firebaseapp.com",databaseURL:"https://aireservas-admin-default-rtdb.firebaseio.com",projectId:"aireservas-admin",storageBucket:"aireservas-admin.firebasestorage.app",messagingSenderId:"900812322152",appId:"1:900812322152:web:e8d8fe6c763c252c82d2dd",measurementId:"G-DL6SBEEE2X"},gd=nw(sO),fp=lA(gd),oO=vb(gd),Gc=Ko(gd);tO(gd);const aO=({rooms:n,onReserve:e})=>{const[t,r]=Ke.useState(!1),[o,a]=Ke.useState(""),[u,d]=Ke.useState(!1),[p,_]=Ke.useState("main"),v={greeting:["¡Hola! Soy MEGA, tu asistente. Te ayudo a reservar, pagar, conocer promociones o resolver cualquier duda, de manera rápida y segura. ¿En qué puedo ayudarte hoy para hacer tu experiencia inolvidable?","¡Qué rico verte por acá! Soy MEGA y estoy aquí para ayudarte con todo lo que necesites. ¿Buscas una habitación especial?","¡Bienvenido a IAMOTELES! Soy MEGA, tu guía personal. Te ayudo a encontrar la habitación perfecta para tu momento especial."],rooms:{prompt:"¡Claro! Tenemos varias opciones para que tu momento sea inolvidable. ¿Qué tipo de habitación buscas?",luxury:"Te recomiendo la Habitación 11 con jacuzzi, barra de pole dance y 3 espacios diferentes por $40.000, ¡perfecta para una experiencia única!",budget:"Para algo más económico, tengo habitaciones desde $20.000 por hora con todas las comodidades básicas.",romantic:"Para una experiencia romántica, la Habitación 16 con columpio erótico por $35.000 es ideal, amor.",premium:"La Habitación UCI por $47.000 es nuestra suite más exclusiva, perfecta para ocasiones especiales."},promotions:["¡Aprovecha! Tenemos hasta 40% de descuento reservando online. Los mejores precios están aquí.","Las promociones nocturnas son increíbles, mi amor. Reserva ahora y ahorra en grande.","¿Sabías que reservando por aquí tienes precios especiales? ¡No te pierdas estas ofertas!"],assistance:["Claro que sí, mi cielo. Te ayudo con todo lo que necesites para que tu experiencia sea perfecta.","¡Por supuesto! Estoy aquí para hacer todo más fácil para ti.","¡Con mucho gusto! Dime qué necesitas y te ayudo al toque."]},w=Ke.useCallback(B=>{d(!0),a(""),setTimeout(()=>{a(B),d(!1)},500)},[]),T=B=>{const se=v[B];return se[Math.floor(Math.random()*se.length)]};Ke.useEffect(()=>{if(t){const B=T("greeting");w(B),_("main")}else a("")},[t,w]);const O=()=>{r(!t)},z=(B,se)=>{switch(B){case"promotions":_("promotions"),w(T("promotions"));break;case"assistance":_("assistance"),w(T("assistance"));break;case"rooms":_("rooms"),w(v.rooms.prompt);break;case"room_detail":se&&se in v.rooms&&w(v.rooms[se]);break;case"back":_("main"),w(T("greeting"));break}},W=()=>{switch(p){case"rooms":return H.jsxs(H.Fragment,{children:[H.jsx("button",{onClick:()=>z("room_detail","luxury"),className:"bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20",children:"Lujo"}),H.jsx("button",{onClick:()=>z("room_detail","budget"),className:"bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20",children:"Económica"}),H.jsx("button",{onClick:()=>z("room_detail","romantic"),className:"bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20",children:"Romántica"}),H.jsx("button",{onClick:()=>z("room_detail","premium"),className:"bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20",children:"Premium"}),H.jsx("button",{onClick:()=>z("back"),className:"bg-pink-600/50 text-white text-xs px-3 py-1 rounded-full hover:bg-pink-600/80",children:"‹ Volver"})]});case"promotions":case"assistance":return H.jsx("button",{onClick:()=>z("back"),className:"bg-pink-600/50 text-white text-xs px-3 py-1 rounded-full hover:bg-pink-600/80",children:"‹ Volver"});default:return H.jsxs(H.Fragment,{children:[H.jsx("button",{onClick:()=>z("promotions"),className:"bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20",children:"Promociones"}),H.jsx("button",{onClick:()=>z("rooms"),className:"bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20",children:"Habitaciones"}),H.jsx("button",{onClick:()=>z("assistance"),className:"bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20",children:"Necesito ayuda"})]})}};return H.jsxs("div",{className:"fixed bottom-5 right-5 z-[100]",children:[t&&H.jsxs("div",{className:"bg-gradient-to-br from-zinc-800 to-purple-900 border border-white/20 p-5 rounded-2xl shadow-2xl w-80 mb-4 relative animate-slideInUp",children:[H.jsxs("div",{className:"flex items-start gap-3",children:[H.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0",children:"M"}),H.jsxs("div",{className:"flex-1 min-h-[48px]",children:[H.jsx("p",{className:"font-bold text-white",children:"MEGA"}),H.jsx("div",{className:"text-white/90 mt-1 text-sm leading-relaxed",children:u?H.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[H.jsx("span",{className:"h-2 w-2 bg-pink-400 rounded-full animate-pulse"}),H.jsx("span",{className:"h-2 w-2 bg-pink-400 rounded-full animate-pulse [animation-delay:0.2s]"}),H.jsx("span",{className:"h-2 w-2 bg-pink-400 rounded-full animate-pulse [animation-delay:0.4s]"})]}):o})]})]}),H.jsx("div",{className:"mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-2",children:W()})]}),H.jsx("button",{onClick:O,className:"w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition-transform",children:t?"✕":"M"})]})};function lO({show:n,onClose:e,reservations:t,rooms:r}){const o=u=>r.find(d=>d.id===u),a=u=>{switch(u){case"pending":return{text:"Pendiente",color:"text-yellow-400"};case"confirmed":return{text:"Confirmada",color:"text-green-400"};case"checked_in":return{text:"Ingresada",color:"text-blue-400"};case"cancelled":return{text:"Cancelada",color:"text-red-500"};default:return{text:u,color:"text-white"}}};return n?H.jsx("div",{className:"fixed inset-0 z-[99] bg-black/70 flex items-center justify-center backdrop-blur-sm",children:H.jsxs("div",{className:`
                bg-gradient-to-br from-zinc-900/90 to-purple-900/90
                border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md w-[90vw] animate-fadeIn
                relative`,children:[H.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-white/70 hover:bg-pink-600 rounded-full p-2 text-lg",children:"✕"}),H.jsx("h2",{className:"text-2xl font-bold mb-6 text-white",children:"Mis Reservas"}),t.length>0?H.jsx("ul",{className:"space-y-4 max-h-[60vh] overflow-y-auto pr-4 text-sm",children:t.map(u=>{const d=a(u.status),p=o(u.roomId);return H.jsxs("li",{className:"bg-white/10 p-4 rounded-lg border border-white/20 text-white flex items-center gap-4",children:[p&&H.jsx("img",{src:p.img,alt:p.name,className:"w-20 h-20 rounded-md object-cover"}),H.jsxs("div",{children:[H.jsx("p",{className:"font-bold text-lg text-pink-300 mb-2",children:p?p.name:`Habitación ${u.roomId}`}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/70 font-semibold",children:"Fecha:"})," ",new Date(u.startTime).toLocaleDateString("es-CO")]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/70 font-semibold",children:"Hora:"})," ",new Date(u.startTime).toLocaleTimeString("es-CO")]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/70 font-semibold",children:"Estado:"})," ",H.jsx("span",{className:`${d.color} font-bold`,children:d.text})]})]})]},u.id)})}):H.jsx("p",{className:"text-white/70",children:"No tienes reservas activas."})]})}):null}const s0=({onClick:n,disabled:e})=>H.jsx("button",{onClick:n,disabled:e,className:"bg-green-500 text-black font-bold py-2 px-4 rounded w-full transition hover:bg-green-600 disabled:bg-gray-500",children:"Disponible"}),uO=({onClick:n,disabled:e})=>H.jsx("button",{onClick:n,disabled:e,className:"bg-yellow-500 text-black font-bold py-2 px-4 rounded w-full transition hover:bg-yellow-600 disabled:bg-gray-500",children:"Pendiente"}),o0=({onClick:n,disabled:e})=>H.jsx("button",{onClick:n,disabled:e,className:"bg-purple-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-purple-600 disabled:bg-gray-500",children:"Reservada"}),a0=({onClick:n,disabled:e})=>H.jsx("button",{onClick:n,disabled:e,className:"bg-blue-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-blue-600 disabled:bg-gray-500",children:"Ingresada"}),l0=({onClick:n,disabled:e})=>H.jsx("button",{onClick:n,disabled:e,className:"bg-gray-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-gray-600 disabled:bg-gray-500",children:"Eliminada"}),cO=({onClick:n,disabled:e})=>H.jsx("button",{onClick:n,disabled:e,className:"bg-orange-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-orange-600 disabled:bg-gray-500",children:"Mantenimiento"}),hO={pending:{text:"Pendiente",color:"bg-purple-600",button:uO},confirmed:{text:"Reservada",color:"bg-red-600",button:o0},checked_in:{text:"Ingresada",color:"bg-orange-500",button:a0},cancelled:{text:"Eliminada",color:"bg-gray-600",button:l0},maintenance:{text:"Mantenimiento",color:"bg-blue-600",button:cO},available:{text:"Disponible",color:"bg-green-500",button:s0}};function dO({show:n,onClose:e,roomId:t,rooms:r}){const[o,a]=Ke.useState([]),[u,d]=Ke.useState("");Ke.useEffect(()=>{if(!n||!t){a([]);return}const _=r.find(T=>T.id===t);d(_?_.name:`Habitación ${t}`);const v=Zr(Gc,`roomReservations/${t}`),w=qT(v,async T=>{if(T.exists()){const O=Object.keys(T.val()),z=O.map(se=>Fl(Zr(Gc,`reservations/${se}`))),B=(await Promise.all(z)).filter(se=>se.exists()).map((se,he)=>({id:O[he],...se.val()})).sort((se,he)=>he.startTime-se.startTime);a(B)}else a([])});return()=>w()},[n,t,r]);const p=async(_,v)=>{const w=Zr(Gc,`reservations/${_.id}`);try{if(v==="confirmed"){const T=Zr(Gc,`reservas-admin/${_.id}`);await Bv(T,{..._,status:v,updatedBy:"admin"})}await Bv(w,{status:v}),console.log(`Estado de la reserva ${_.id} cambiado a ${v}`)}catch(T){console.error("Error al cambiar el estado de la reserva:",T),alert("Hubo un error al actualizar la reserva. Revisa la consola para más detalles.")}};return n?H.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center backdrop-blur-md",children:H.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900/70 border border-white/20 rounded-2xl shadow-2xl p-6 max-w-2xl w-[95vw] animate-fadeIn relative max-h-[80vh] flex flex-col",children:[H.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-white/70 hover:bg-red-600 rounded-full p-2 text-xl z-10",children:"✕"}),H.jsx("h2",{className:"text-2xl font-bold mb-4 text-white",children:"Historial de Reservas"}),H.jsx("h3",{className:"text-lg font-semibold mb-6 text-pink-300",children:u}),H.jsx("div",{className:"overflow-y-auto pr-4 flex-grow",children:o.length>0?H.jsx("ul",{className:"space-y-4 text-sm",children:o.map(_=>{const v=hO[_.status]||{text:_.status,color:"bg-gray-500"},w=new Date(_.startTime);return H.jsxs("li",{className:"bg-black/40 p-4 rounded-lg border border-white/10 text-white flex flex-col md:flex-row md:items-center justify-between gap-4",children:[H.jsxs("div",{className:"flex-1",children:[H.jsx("p",{className:"font-bold text-base",children:w.toLocaleDateString("es-CO",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),H.jsx("p",{className:"text-white/70",children:w.toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"})}),H.jsx("span",{className:`mt-2 inline-block px-3 py-1 text-xs font-bold rounded-full ${v.color}`,children:v.text})]}),H.jsxs("div",{className:"flex flex-wrap items-center gap-2 justify-start md:justify-end",children:[_.status==="pending"&&H.jsx(o0,{onClick:()=>p(_,"confirmed")}),_.status==="confirmed"&&H.jsx(a0,{onClick:()=>p(_,"checked_in")}),_.status!=="cancelled"&&H.jsx(l0,{onClick:()=>p(_,"cancelled")})]})]},_.id)})}):H.jsx("p",{className:"text-center text-white/70 py-8",children:"No hay historial de reservas para esta habitación."})})]})}):null}const fO=n=>(n==null?void 0:n.email)==="admin@iamoteles.com",pO=n=>{if(n){const e=Ko(),t=Zr(e,"users/"+n.uid);Fl(t).then(r=>{if(!r.exists()||!r.val().role){const o={displayName:n.displayName,email:n.email,role:fO(n)?"admin":"customer"};fN(t,o)}})}};function u0({children:n,show:e,onClose:t}){return e?H.jsx("div",{className:"fixed inset-0 z-[99] bg-black/70 flex items-center justify-center backdrop-blur-sm",children:H.jsxs("div",{className:"bg-gradient-to-br from-zinc-900/90 to-purple-900/90 border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md w-[90vw] animate-fadeIn relative",children:[H.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-white/70 hover:bg-pink-600 rounded-full p-2 text-lg",children:"✕"}),n]})}):null}function mO({user:n,onLogin:e,onLogout:t,isAdmin:r,onMyReservationsClick:o,onAllReservationsClick:a}){return H.jsxs("header",{className:"px-6 py-4 flex justify-between items-center bg-black/70 backdrop-blur text-white sticky top-0 z-50",children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("span",{className:"text-2xl font-black tracking-tight",children:"IAMOTELES"}),H.jsx("span",{className:"text-sm bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text font-bold",children:"Motel La Luna"})]}),H.jsxs("div",{className:"flex items-center gap-4",children:[H.jsx("span",{className:"hidden md:block text-sm text-white/70",children:"20 habitaciones • Desde $20.000"}),r&&H.jsx("button",{onClick:a,className:"p-2",title:"Ver todas las reservas",children:H.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white/70 hover:text-pink-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),n&&!r&&H.jsx("button",{onClick:o,className:"font-bold text-sm",children:"Mis Reservas"}),n?H.jsx("button",{onClick:t,className:"bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold text-sm",children:"Logout"}):H.jsx("button",{onClick:e,className:"bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold",children:"Login"})]})]})}function gO({room:n,onReserve:e,onAdminOpen:t,onMyReservationsClick:r,isOccupied:o,isAdmin:a}){return H.jsxs("div",{className:"bg-white/10 rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:scale-105 transition w-full max-w-xs flex flex-col",children:[H.jsxs("div",{className:"aspect-video bg-black relative",children:[H.jsx("img",{src:n.img,alt:n.name,className:"w-full h-full object-cover object-center",style:{minHeight:"180px"}}),H.jsxs("span",{className:"absolute top-3 right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md",children:["$",new Intl.NumberFormat().format(n.price)]}),H.jsx("span",{className:"absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium",children:n.desc.includes("2 Horas")?"2 horas":"1 hora"})]}),H.jsxs("div",{className:"flex-1 flex flex-col gap-3 px-5 py-4",children:[H.jsxs("div",{className:"flex justify-between items-center",children:[H.jsx("h3",{className:"font-bold text-lg text-white drop-shadow-sm",children:n.name}),H.jsx("button",{onClick:()=>a?t(n.id):r(),className:"p-2",title:a?"Ver historial de reservas":"Ver mis reservas",children:H.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white/70 hover:text-pink-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})})]}),H.jsx("p",{className:"text-white/70 text-sm flex-1",children:n.desc}),H.jsx(s0,{onClick:()=>e(n),disabled:o})]})]})}function _O({show:n,onClose:e,onGoogleLogin:t}){return H.jsxs(u0,{show:n,onClose:e,children:[H.jsx("h2",{className:"text-2xl font-bold mb-6 text-white",children:"Iniciar sesión"}),H.jsxs("button",{onClick:t,className:"mb-3 w-full bg-white text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2",children:[H.jsx("span",{children:"🔐"})," Continuar con Google"]}),H.jsxs("button",{className:"mb-3 w-full bg-gray-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2",children:[H.jsx("span",{children:"✉️"})," Continuar con Email"]}),H.jsxs("button",{className:"w-full bg-black/90 border border-white/30 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2",children:[H.jsx("span",{children:"📷"})," Reconocimiento facial (beta)"]})]})}function yO({show:n,onClose:e,room:t,onPayment:r}){const[o,a]=Ke.useState(""),[u,d]=Ke.useState(!1),[p,_]=Ke.useState("");return H.jsx(u0,{show:n,onClose:e,children:H.jsxs("h2",{className:"text-xl font-bold mb-3 text-white",children:["Reservar ",t==null?void 0:t.name]})})}function vO(){const[n,e]=Ke.useState(null),[t,r]=Ke.useState(!1),[o,a]=Ke.useState([]),[u,d]=Ke.useState(!1),[p,_]=Ke.useState(!1),[v,w]=Ke.useState(null),[T,O]=Ke.useState(!1),[z,W]=Ke.useState(null),[B,se]=Ke.useState(!1),[he,de]=Ke.useState(!1),[me,ze]=Ke.useState(null),[Re,P]=Ke.useState([]),[C,A]=Ke.useState(new Set);Ke.useEffect(()=>{(async()=>{const Y=yb(oO,"rooms"),b=(await Pb(Y)).docs.map($=>({id:$.id,...$.data()})).sort(($,ye)=>parseInt($.id,10)-parseInt(ye.id,10));a(b)})()},[]),Ke.useEffect(()=>{const we=YR(fp,async Y=>{if(e(Y),Y){pO(Y);const le=Zr(Ko(),`users/${Y.uid}`),te=await Fl(le),b=te.exists()&&te.val().role==="admin";r(b)}else r(!1)});return()=>we()},[]),Ke.useEffect(()=>{const we=Ko(),Y=Zr(we,"reservations"),le=qT(Y,te=>{const b=te.val()||{},$=Date.now(),ye=new Set,Te=1800*1e3;for(const ke in b){const Ae=b[ke];Ae.status!=="cancelled"&&$>=Ae.startTime-Te&&$<Ae.endTime&&ye.add(Ae.roomId)}A(ye)});return()=>le()},[]);const D=()=>{const we=new Qr;_1(fp,we).then(()=>d(!1)).catch(console.error)},N=()=>XR(fp),L=we=>{W(we),O(!0)},R=we=>{if(!n){d(!0);return}w(we),_(!0)},Ge=we=>{ze(we),_(!1),se(!0)},yt=async()=>{const we=Ko(),Y=Zr(we,"reservations"),te=(await Fl(Y)).val()||{},b=Object.values(te);P(b),de(!0)},Ct=async()=>{if(!n){d(!0);return}const we=Ko(),Y=Zr(we,"reservations"),te=(await Fl(Y)).val()||{},b=Object.values(te).filter($=>$.userId===n.uid);P(b),de(!0)};return H.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-zinc-900 via-black to-fuchsia-950",children:[H.jsx(mO,{user:n,onLogin:()=>d(!0),onLogout:N,isAdmin:t,onMyReservationsClick:Ct,onAllReservationsClick:yt}),H.jsx("main",{className:"mx-auto py-10 px-4 max-w-7xl",children:H.jsx("section",{className:"w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center",children:o.map(we=>H.jsx(gO,{room:we,isOccupied:C.has(we.id),onAdminOpen:L,onMyReservationsClick:Ct,onReserve:R,isAdmin:t},we.id))})}),H.jsxs("footer",{className:"py-6 flex flex-col items-center justify-center text-zinc-200 bg-black/30 mt-8",children:[H.jsx("span",{className:"mb-2 font-bold",children:"IAMOTELES © 2025"}),H.jsx("span",{className:"text-xs",children:"Sistema Inteligente • Potenciado por MICELIO.DIGITAL"})]}),H.jsx(_O,{show:u,onClose:()=>d(!1),onGoogleLogin:D}),H.jsx(yO,{show:p,onClose:()=>_(!1),room:v,onPayment:Ge}),H.jsx(lO,{show:he,onClose:()=>de(!1),reservations:Re,rooms:o}),H.jsx(dO,{show:T,onClose:()=>O(!1),roomId:z,rooms:o}),H.jsx(aO,{rooms:o,onReserve:we=>{}})]})}const c0=document.getElementById("root");if(!c0)throw new Error("Failed to find root element");CS.createRoot(c0).render(H.jsx(vO,{}));
