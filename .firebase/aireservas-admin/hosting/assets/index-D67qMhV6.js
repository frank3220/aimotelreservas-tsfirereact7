(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const AS="0.3.28",tw=`bippy-${AS}`,Oy=Object.defineProperty,kS=Object.prototype.hasOwnProperty,Pl=()=>{},nw=n=>{try{Function.prototype.toString.call(n).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},PS=(n=lm())=>"getFiberRoots"in n;let rw=!1,Uc;const Ly=(n=lm())=>rw?!0:(typeof n.inject=="function"&&(Uc=n.inject.toString()),!!(Uc!=null&&Uc.includes("(injected)"))),yp=new Set,vp=new Set,NS=n=>{const e=new Map;let t=0,r={checkDCE:nw,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:e,onCommitFiberRoot:Pl,onCommitFiberUnmount:Pl,onPostCommitFiberRoot:Pl,on:Pl,inject(o){const a=++t;return e.set(a,o),vp.add(o),r._instrumentationIsActive||(r._instrumentationIsActive=!0,yp.forEach(u=>u())),a},_instrumentationSource:tw,_instrumentationIsActive:!1};try{Oy(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return r},set(u){if(u&&typeof u=="object"){const d=r.renderers;r=u,d.size>0&&(d.forEach((p,_)=>{vp.add(p),u.renderers.set(_,p)}),Ep(n))}},configurable:!0,enumerable:!0});const o=window.hasOwnProperty;let a=!1;Oy(window,"hasOwnProperty",{value:function(){try{if(!a&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,a=!0,-0}catch{}return o.apply(this,arguments)},configurable:!0,writable:!0})}catch{Ep(n)}return r},Ep=n=>{try{const e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!e)return;if(!e._instrumentationSource){if(e.checkDCE=nw,e.supportsFiber=!0,e.supportsFlight=!0,e.hasUnsupportedRendererAttached=!1,e._instrumentationSource=tw,e._instrumentationIsActive=!1,e.on=Pl,e.renderers.size){e._instrumentationIsActive=!0,yp.forEach(r=>r());return}const t=e.inject;Ly(e)&&!PS()&&(rw=!0,e.inject({scheduleRefresh(){}})&&(e._instrumentationIsActive=!0)),e.inject=r=>{const o=t(r);return vp.add(r),e._instrumentationIsActive=!0,yp.forEach(a=>a()),o}}(e.renderers.size||e._instrumentationIsActive||Ly())&&(n==null||n())}catch{}},xS=()=>kS.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),lm=n=>xS()?(Ep(n),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):NS(n),DS=()=>{var n,e;return!!(typeof window<"u"&&((n=window.document)!=null&&n.createElement||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))},bS=()=>{try{DS()&&lm()}catch{}};bS();var Wf={exports:{}},Il={},qf={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function OS(){if(My)return Ae;My=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=w&&L[w]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,H={};function B(L,q,Se){this.props=L,this.context=q,this.refs=H,this.updater=Se||b}B.prototype.isReactComponent={},B.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},B.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function oe(){}oe.prototype=B.prototype;function ue(L,q,Se){this.props=L,this.context=q,this.refs=H,this.updater=Se||b}var ce=ue.prototype=new oe;ce.constructor=ue,$(ce,B.prototype),ce.isPureReactComponent=!0;var fe=Array.isArray,Me=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(L,q,Se){var Ce,De={},be=null,qe=null;if(q!=null)for(Ce in q.ref!==void 0&&(qe=q.ref),q.key!==void 0&&(be=""+q.key),q)Me.call(q,Ce)&&!x.hasOwnProperty(Ce)&&(De[Ce]=q[Ce]);var Ue=arguments.length-2;if(Ue===1)De.children=Se;else if(1<Ue){for(var Xe=Array(Ue),tn=0;tn<Ue;tn++)Xe[tn]=arguments[tn+2];De.children=Xe}if(L&&L.defaultProps)for(Ce in Ue=L.defaultProps,Ue)De[Ce]===void 0&&(De[Ce]=Ue[Ce]);return{$$typeof:n,type:L,key:be,ref:qe,props:De,_owner:Te.current}}function R(L,q){return{$$typeof:n,type:L.type,key:q,ref:L.ref,props:L.props,_owner:L._owner}}function P(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function k(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Se){return q[Se]})}var O=/\/+/g;function A(L,q){return typeof L=="object"&&L!==null&&L.key!=null?k(""+L.key):q.toString(36)}function Re(L,q,Se,Ce,De){var be=typeof L;(be==="undefined"||be==="boolean")&&(L=null);var qe=!1;if(L===null)qe=!0;else switch(be){case"string":case"number":qe=!0;break;case"object":switch(L.$$typeof){case n:case e:qe=!0}}if(qe)return qe=L,De=De(qe),L=Ce===""?"."+A(qe,0):Ce,fe(De)?(Se="",L!=null&&(Se=L.replace(O,"$&/")+"/"),Re(De,q,Se,"",function(tn){return tn})):De!=null&&(P(De)&&(De=R(De,Se+(!De.key||qe&&qe.key===De.key?"":(""+De.key).replace(O,"$&/")+"/")+L)),q.push(De)),1;if(qe=0,Ce=Ce===""?".":Ce+":",fe(L))for(var Ue=0;Ue<L.length;Ue++){be=L[Ue];var Xe=Ce+A(be,Ue);qe+=Re(be,q,Se,Xe,De)}else if(Xe=I(L),typeof Xe=="function")for(L=Xe.call(L),Ue=0;!(be=L.next()).done;)be=be.value,Xe=Ce+A(be,Ue++),qe+=Re(be,q,Se,Xe,De);else if(be==="object")throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return qe}function Ze(L,q,Se){if(L==null)return L;var Ce=[],De=0;return Re(L,Ce,"","",function(be){return q.call(Se,be,De++)}),Ce}function Ke(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(Se){(L._status===0||L._status===-1)&&(L._status=1,L._result=Se)},function(Se){(L._status===0||L._status===-1)&&(L._status=2,L._result=Se)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var He={current:null},ee={transition:null},he={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Te};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Ze,forEach:function(L,q,Se){Ze(L,function(){q.apply(this,arguments)},Se)},count:function(L){var q=0;return Ze(L,function(){q++}),q},toArray:function(L){return Ze(L,function(q){return q})||[]},only:function(L){if(!P(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ue,Ae.StrictMode=r,Ae.Suspense=p,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Ae.act=te,Ae.cloneElement=function(L,q,Se){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ce=$({},L.props),De=L.key,be=L.ref,qe=L._owner;if(q!=null){if(q.ref!==void 0&&(be=q.ref,qe=Te.current),q.key!==void 0&&(De=""+q.key),L.type&&L.type.defaultProps)var Ue=L.type.defaultProps;for(Xe in q)Me.call(q,Xe)&&!x.hasOwnProperty(Xe)&&(Ce[Xe]=q[Xe]===void 0&&Ue!==void 0?Ue[Xe]:q[Xe])}var Xe=arguments.length-2;if(Xe===1)Ce.children=Se;else if(1<Xe){Ue=Array(Xe);for(var tn=0;tn<Xe;tn++)Ue[tn]=arguments[tn+2];Ce.children=Ue}return{$$typeof:n,type:L.type,key:De,ref:be,props:Ce,_owner:qe}},Ae.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},Ae.createElement=C,Ae.createFactory=function(L){var q=C.bind(null,L);return q.type=L,q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(L){return{$$typeof:d,render:L}},Ae.isValidElement=P,Ae.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Ke}},Ae.memo=function(L,q){return{$$typeof:_,type:L,compare:q===void 0?null:q}},Ae.startTransition=function(L){var q=ee.transition;ee.transition={};try{L()}finally{ee.transition=q}},Ae.unstable_act=te,Ae.useCallback=function(L,q){return He.current.useCallback(L,q)},Ae.useContext=function(L){return He.current.useContext(L)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(L){return He.current.useDeferredValue(L)},Ae.useEffect=function(L,q){return He.current.useEffect(L,q)},Ae.useId=function(){return He.current.useId()},Ae.useImperativeHandle=function(L,q,Se){return He.current.useImperativeHandle(L,q,Se)},Ae.useInsertionEffect=function(L,q){return He.current.useInsertionEffect(L,q)},Ae.useLayoutEffect=function(L,q){return He.current.useLayoutEffect(L,q)},Ae.useMemo=function(L,q){return He.current.useMemo(L,q)},Ae.useReducer=function(L,q,Se){return He.current.useReducer(L,q,Se)},Ae.useRef=function(L){return He.current.useRef(L)},Ae.useState=function(L){return He.current.useState(L)},Ae.useSyncExternalStore=function(L,q,Se){return He.current.useSyncExternalStore(L,q,Se)},Ae.useTransition=function(){return He.current.useTransition()},Ae.version="18.3.1",Ae}var Vy;function um(){return Vy||(Vy=1,qf.exports=OS()),qf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function LS(){if(Fy)return Il;Fy=1;var n=um(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,_){var v,w={},I=null,b=null;_!==void 0&&(I=""+_),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(b=p.ref);for(v in p)r.call(p,v)&&!a.hasOwnProperty(v)&&(w[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)w[v]===void 0&&(w[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:b,props:w,_owner:o.current}}return Il.Fragment=t,Il.jsx=u,Il.jsxs=u,Il}var Uy;function MS(){return Uy||(Uy=1,Wf.exports=LS()),Wf.exports}var U=MS(),jc={},Gf={exports:{}},fn={},Kf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function VS(){return jy||(jy=1,(function(n){function e(ee,he){var te=ee.length;ee.push(he);e:for(;0<te;){var L=te-1>>>1,q=ee[L];if(0<o(q,he))ee[L]=he,ee[te]=q,te=L;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var he=ee[0],te=ee.pop();if(te!==he){ee[0]=te;e:for(var L=0,q=ee.length,Se=q>>>1;L<Se;){var Ce=2*(L+1)-1,De=ee[Ce],be=Ce+1,qe=ee[be];if(0>o(De,te))be<q&&0>o(qe,De)?(ee[L]=qe,ee[be]=te,L=be):(ee[L]=De,ee[Ce]=te,L=Ce);else if(be<q&&0>o(qe,te))ee[L]=qe,ee[be]=te,L=be;else break e}}return he}function o(ee,he){var te=ee.sortIndex-he.sortIndex;return te!==0?te:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],_=[],v=1,w=null,I=3,b=!1,$=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ce(ee){for(var he=t(_);he!==null;){if(he.callback===null)r(_);else if(he.startTime<=ee)r(_),he.sortIndex=he.expirationTime,e(p,he);else break;he=t(_)}}function fe(ee){if(H=!1,ce(ee),!$)if(t(p)!==null)$=!0,Ke(Me);else{var he=t(_);he!==null&&He(fe,he.startTime-ee)}}function Me(ee,he){$=!1,H&&(H=!1,oe(C),C=-1),b=!0;var te=I;try{for(ce(he),w=t(p);w!==null&&(!(w.expirationTime>he)||ee&&!k());){var L=w.callback;if(typeof L=="function"){w.callback=null,I=w.priorityLevel;var q=L(w.expirationTime<=he);he=n.unstable_now(),typeof q=="function"?w.callback=q:w===t(p)&&r(p),ce(he)}else r(p);w=t(p)}if(w!==null)var Se=!0;else{var Ce=t(_);Ce!==null&&He(fe,Ce.startTime-he),Se=!1}return Se}finally{w=null,I=te,b=!1}}var Te=!1,x=null,C=-1,R=5,P=-1;function k(){return!(n.unstable_now()-P<R)}function O(){if(x!==null){var ee=n.unstable_now();P=ee;var he=!0;try{he=x(!0,ee)}finally{he?A():(Te=!1,x=null)}}else Te=!1}var A;if(typeof ue=="function")A=function(){ue(O)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Ze=Re.port2;Re.port1.onmessage=O,A=function(){Ze.postMessage(null)}}else A=function(){B(O,0)};function Ke(ee){x=ee,Te||(Te=!0,A())}function He(ee,he){C=B(function(){ee(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){$||b||($=!0,Ke(Me))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var he=3;break;default:he=I}var te=I;I=he;try{return ee()}finally{I=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var te=I;I=ee;try{return he()}finally{I=te}},n.unstable_scheduleCallback=function(ee,he,te){var L=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?L+te:L):te=L,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=te+q,ee={id:v++,callback:he,priorityLevel:ee,startTime:te,expirationTime:q,sortIndex:-1},te>L?(ee.sortIndex=te,e(_,ee),t(p)===null&&ee===t(_)&&(H?(oe(C),C=-1):H=!0,He(fe,te-L))):(ee.sortIndex=q,e(p,ee),$||b||($=!0,Ke(Me))),ee},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(ee){var he=I;return function(){var te=I;I=he;try{return ee.apply(this,arguments)}finally{I=te}}}})(Qf)),Qf}var zy;function FS(){return zy||(zy=1,Kf.exports=VS()),Kf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By;function US(){if(By)return fn;By=1;var n=um(),e=FS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function I(i){return p.call(w,i)?!0:p.call(v,i)?!1:_.test(i)?w[i]=!0:(v[i]=!0,!1)}function b(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function $(i,s,l,h){if(s===null||typeof s>"u"||b(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(i,s,l,h,f,m,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=m,this.removeEmptyString=E}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new H(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];B[s]=new H(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new H(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new H(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new H(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new H(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new H(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new H(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new H(i,5,!1,i.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function ue(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(oe,ue);B[s]=new H(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(oe,ue);B[s]=new H(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(oe,ue);B[s]=new H(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new H(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new H(i,1,!1,i.toLowerCase(),null,!0,!0)});function ce(i,s,l,h){var f=B.hasOwnProperty(s)?B[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,l,f,h)&&(l=null),h||f===null?I(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):f.mustUseProperty?i[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?i.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var fe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),k=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ee=Symbol.iterator;function he(i){return i===null||typeof i!="object"?null:(i=ee&&i[ee]||i["@@iterator"],typeof i=="function"?i:null)}var te=Object.assign,L;function q(i){if(L===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+i}var Se=!1;function Ce(i,s){if(!i||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var h=j}Reflect.construct(i,[],s)}else{try{s.call()}catch(j){h=j}i.call(s.prototype)}else{try{throw Error()}catch(j){h=j}i()}}catch(j){if(j&&h&&typeof j.stack=="string"){for(var f=j.stack.split(`
`),m=h.stack.split(`
`),E=f.length-1,S=m.length-1;1<=E&&0<=S&&f[E]!==m[S];)S--;for(;1<=E&&0<=S;E--,S--)if(f[E]!==m[S]){if(E!==1||S!==1)do if(E--,S--,0>S||f[E]!==m[S]){var N=`
`+f[E].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=E&&0<=S);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function De(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function be(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case Te:return"Portal";case R:return"Profiler";case C:return"StrictMode";case A:return"Suspense";case Re:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case P:return(i._context.displayName||"Context")+".Provider";case O:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Ze:return s=i.displayName||null,s!==null?s:be(i.type)||"Memo";case Ke:s=i._payload,i=i._init;try{return be(i(s))}catch{}}return null}function qe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Xe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tn(i){var s=Xe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){h=""+E,m.call(this,E)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function eo(i){i._valueTracker||(i._valueTracker=tn(i))}function Pa(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Xe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function ai(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function to(i,s){var l=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Su(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Ue(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function no(i,s){s=s.checked,s!=null&&ce(i,"checked",s,!1)}function hs(i,s){no(i,s);var l=Ue(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Et(i,s.type,l):s.hasOwnProperty("defaultValue")&&Et(i,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Na(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Et(i,s,l){(s!=="number"||ai(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var mt=Array.isArray;function Fn(i,s,l,h){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ue(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,h&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function xa(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Da(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(mt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ue(l)}}function Cu(i,s){var l=Ue(s.value),h=Ue(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function li(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function ba(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?ba(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ui,Ru=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,f)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ui.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ds(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Au=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(i){Au.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),ci[s]=ci[i]})});function hi(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ci.hasOwnProperty(i)&&ci[i]?(""+s).trim():s+"px"}function io(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=hi(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,f):i[l]=f}}var Oa=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Un(i,s){if(s){if(Oa[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function so(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function oo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var xr=null,Dr=null,ht=null;function La(i){if(i=ll(i)){if(typeof xr!="function")throw Error(t(280));var s=i.stateNode;s&&(s=ec(s),xr(i.stateNode,i.type,s))}}function fi(i){Dr?ht?ht.push(i):ht=[i]:Dr=i}function pi(){if(Dr){var i=Dr,s=ht;if(ht=Dr=null,La(i),s)for(i=0;i<s.length;i++)La(s[i])}}function ku(i,s){return i(s)}function Pu(){}var er=!1;function Nu(i,s,l){if(er)return i(s,l);er=!0;try{return ku(i,s,l)}finally{er=!1,(Dr!==null||ht!==null)&&(Pu(),pi())}}function fs(i,s){var l=i.stateNode;if(l===null)return null;var h=ec(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var mi=!1;if(d)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){mi=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{mi=!1}function xu(i,s,l,h,f,m,E,S,N){var j=Array.prototype.slice.call(arguments,3);try{s.apply(l,j)}catch(K){this.onError(K)}}var br=!1,tr=null,ao=!1,Rn=null,Du={onError:function(i){br=!0,tr=i}};function bu(i,s,l,h,f,m,E,S,N){br=!1,tr=null,xu.apply(Du,arguments)}function Ma(i,s,l,h,f,m,E,S,N){if(bu.apply(this,arguments),br){if(br){var j=tr;br=!1,tr=null}else throw Error(t(198));ao||(ao=!0,Rn=j)}}function jn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Va(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ou(i){if(jn(i)!==i)throw Error(t(188))}function Lu(i){var s=i.alternate;if(!s){if(s=jn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var f=l.return;if(f===null)break;var m=f.alternate;if(m===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===l)return Ou(f),i;if(m===h)return Ou(f),s;m=m.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=m;else{for(var E=!1,S=f.child;S;){if(S===l){E=!0,l=f,h=m;break}if(S===h){E=!0,h=f,l=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===l){E=!0,l=m,h=f;break}if(S===h){E=!0,h=m,l=f;break}S=S.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Mu(i){return i=Lu(i),i!==null?ps(i):null}function ps(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ps(i);if(s!==null)return s;i=i.sibling}return null}var Fa=e.unstable_scheduleCallback,lo=e.unstable_cancelCallback,ms=e.unstable_shouldYield,Or=e.unstable_requestPaint,rt=e.unstable_now,wd=e.unstable_getCurrentPriorityLevel,uo=e.unstable_ImmediatePriority,Ua=e.unstable_UserBlockingPriority,gs=e.unstable_NormalPriority,ja=e.unstable_LowPriority,co=e.unstable_IdlePriority,_s=null,mn=null;function Vu(i){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(_s,i,void 0,(i.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:ys,nr=Math.log,An=Math.LN2;function ys(i){return i>>>=0,i===0?32:31-(nr(i)/An|0)|0}var rr=64,_i=4194304;function We(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Lr(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,f=i.suspendedLanes,m=i.pingedLanes,E=l&268435455;if(E!==0){var S=E&~f;S!==0?h=We(S):(m&=E,m!==0&&(h=We(m)))}else E=l&~f,E!==0?h=We(E):m!==0&&(h=We(m));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,m=s&-s,f>=m||f===16&&(m&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-gn(s),f=1<<l,h|=i[l],s&=~f;return h}function vs(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Es(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes;0<m;){var E=31-gn(m),S=1<<E,N=f[E];N===-1?((S&l)===0||(S&h)!==0)&&(f[E]=vs(S,s)):N<=s&&(i.expiredLanes|=S),m&=~S}}function za(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ba(){var i=rr;return rr<<=1,(rr&4194240)===0&&(rr=64),i}function $a(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function ws(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-gn(s),i[s]=l}function Td(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var f=31-gn(l),m=1<<f;s[f]=0,h[f]=-1,i[f]=-1,l&=~m}}function Ha(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-gn(l),f=1<<h;f&s|i[h]&s&&(i[h]|=s),l&=~f}}var Oe=0;function ir(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Wa,ho,qa,Ga,Ka,sr=!1,fo=[],or=null,ar=null,Vt=null,Ts=new Map,Mr=new Map,_n=[],Fu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yi(i,s){switch(i){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Ts.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(s.pointerId)}}function zn(i,s,l,h,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:m,targetContainers:[f]},s!==null&&(s=ll(s),s!==null&&ho(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function Uu(i,s,l,h,f){switch(s){case"focusin":return or=zn(or,i,s,l,h,f),!0;case"dragenter":return ar=zn(ar,i,s,l,h,f),!0;case"mouseover":return Vt=zn(Vt,i,s,l,h,f),!0;case"pointerover":var m=f.pointerId;return Ts.set(m,zn(Ts.get(m)||null,i,s,l,h,f)),!0;case"gotpointercapture":return m=f.pointerId,Mr.set(m,zn(Mr.get(m)||null,i,s,l,h,f)),!0}return!1}function po(i){var s=Rs(i.target);if(s!==null){var l=jn(s);if(l!==null){if(s=l.tag,s===13){if(s=Va(l),s!==null){i.blockedOn=s,Ka(i.priority,function(){qa(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Je(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=mo(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);di=h,l.target.dispatchEvent(h),di=null}else return s=ll(l),s!==null&&ho(s),i.blockedOn=l,!1;s.shift()}return!0}function ju(i,s,l){Je(i)&&l.delete(s)}function Id(){sr=!1,or!==null&&Je(or)&&(or=null),ar!==null&&Je(ar)&&(ar=null),Vt!==null&&Je(Vt)&&(Vt=null),Ts.forEach(ju),Mr.forEach(ju)}function vi(i,s){i.blockedOn===s&&(i.blockedOn=null,sr||(sr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Id)))}function Ei(i){function s(f){return vi(f,i)}if(0<fo.length){vi(fo[0],i);for(var l=1;l<fo.length;l++){var h=fo[l];h.blockedOn===i&&(h.blockedOn=null)}}for(or!==null&&vi(or,i),ar!==null&&vi(ar,i),Vt!==null&&vi(Vt,i),Ts.forEach(s),Mr.forEach(s),l=0;l<_n.length;l++)h=_n[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<_n.length&&(l=_n[0],l.blockedOn===null);)po(l),l.blockedOn===null&&_n.shift()}var Vr=fe.ReactCurrentBatchConfig,Fr=!0;function lr(i,s,l,h){var f=Oe,m=Vr.transition;Vr.transition=null;try{Oe=1,Qa(i,s,l,h)}finally{Oe=f,Vr.transition=m}}function zu(i,s,l,h){var f=Oe,m=Vr.transition;Vr.transition=null;try{Oe=4,Qa(i,s,l,h)}finally{Oe=f,Vr.transition=m}}function Qa(i,s,l,h){if(Fr){var f=mo(i,s,l,h);if(f===null)Od(i,s,h,ur,l),yi(i,h);else if(Uu(f,i,s,l,h))h.stopPropagation();else if(yi(i,h),s&4&&-1<Fu.indexOf(i)){for(;f!==null;){var m=ll(f);if(m!==null&&Wa(m),m=mo(i,s,l,h),m===null&&Od(i,s,h,ur,l),m===f)break;f=m}f!==null&&h.stopPropagation()}else Od(i,s,h,null,l)}}var ur=null;function mo(i,s,l,h){if(ur=null,i=oo(h),i=Rs(i),i!==null)if(s=jn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Va(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ur=i,null}function go(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wd()){case uo:return 1;case Ua:return 4;case gs:case ja:return 16;case co:return 536870912;default:return 16}default:return 16}}var yn=null,_o=null,Ur=null;function Bu(){if(Ur)return Ur;var i,s=_o,l=s.length,h,f="value"in yn?yn.value:yn.textContent,m=f.length;for(i=0;i<l&&s[i]===f[i];i++);var E=l-i;for(h=1;h<=E&&s[l-h]===f[m-h];h++);return Ur=f.slice(i,1<h?1-h:void 0)}function Is(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cr(){return!0}function Ya(){return!1}function qt(i){function s(l,h,f,m,E){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(l=i[S],this[S]=l?l(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?cr:Ya,this.isPropagationStopped=Ya,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),s}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=qt(hr),wi=te({},hr,{view:0,detail:0}),yo=qt(wi),vo,Eo,vn,Cs=te({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==vn&&(vn&&i.type==="mousemove"?(vo=i.screenX-vn.screenX,Eo=i.screenY-vn.screenY):Eo=vo=0,vn=i),vo)},movementY:function(i){return"movementY"in i?i.movementY:Eo}}),Xa=qt(Cs),$u=te({},Cs,{dataTransfer:0}),Hu=qt($u),wo=te({},wi,{relatedTarget:0}),Ft=qt(wo),Wu=te({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),qu=qt(Wu),Ti=te({},hr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),c=qt(Ti),g=te({},hr,{data:0}),y=qt(g),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=z[i])?!!s[i]:!1}function Ee(){return J}var gt=te({},wi,{key:function(i){if(i.key){var s=T[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Is(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?V[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(i){return i.type==="keypress"?Is(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Is(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Ge=qt(gt),wt=te({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),En=qt(wt),jr=te({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),dr=qt(jr),fr=te({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),To=qt(fr),Ja=te({},Cs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=qt(Ja),T0=[9,13,27,32],Sd=d&&"CompositionEvent"in window,Za=null;d&&"documentMode"in document&&(Za=document.documentMode);var I0=d&&"TextEvent"in window&&!Za,Rg=d&&(!Sd||Za&&8<Za&&11>=Za),Ag=" ",kg=!1;function Pg(i,s){switch(i){case"keyup":return T0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ng(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Io=!1;function S0(i,s){switch(i){case"compositionend":return Ng(s);case"keypress":return s.which!==32?null:(kg=!0,Ag);case"textInput":return i=s.data,i===Ag&&kg?null:i;default:return null}}function C0(i,s){if(Io)return i==="compositionend"||!Sd&&Pg(i,s)?(i=Bu(),Ur=_o=yn=null,Io=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Rg&&s.locale!=="ko"?null:s.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!R0[i.type]:s==="textarea"}function Dg(i,s,l,h){fi(h),s=Xu(s,"onChange"),0<s.length&&(l=new Ss("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var el=null,tl=null;function A0(i){Yg(i,0)}function Gu(i){var s=ko(i);if(Pa(s))return i}function k0(i,s){if(i==="change")return s}var bg=!1;if(d){var Cd;if(d){var Rd="oninput"in document;if(!Rd){var Og=document.createElement("div");Og.setAttribute("oninput","return;"),Rd=typeof Og.oninput=="function"}Cd=Rd}else Cd=!1;bg=Cd&&(!document.documentMode||9<document.documentMode)}function Lg(){el&&(el.detachEvent("onpropertychange",Mg),tl=el=null)}function Mg(i){if(i.propertyName==="value"&&Gu(tl)){var s=[];Dg(s,tl,i,oo(i)),Nu(A0,s)}}function P0(i,s,l){i==="focusin"?(Lg(),el=s,tl=l,el.attachEvent("onpropertychange",Mg)):i==="focusout"&&Lg()}function N0(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Gu(tl)}function x0(i,s){if(i==="click")return Gu(s)}function D0(i,s){if(i==="input"||i==="change")return Gu(s)}function b0(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Bn=typeof Object.is=="function"?Object.is:b0;function nl(i,s){if(Bn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!Bn(i[f],s[f]))return!1}return!0}function Vg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Fg(i,s){var l=Vg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Vg(l)}}function Ug(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Ug(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function jg(){for(var i=window,s=ai();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ai(i.document)}return s}function Ad(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function O0(i){var s=jg(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Ug(l.ownerDocument.documentElement,l)){if(h!==null&&Ad(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var f=l.textContent.length,m=Math.min(h.start,f);h=h.end===void 0?m:Math.min(h.end,f),!i.extend&&m>h&&(f=h,h=m,m=f),f=Fg(l,m);var E=Fg(l,h);f&&E&&(i.rangeCount!==1||i.anchorNode!==f.node||i.anchorOffset!==f.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),i.removeAllRanges(),m>h?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var L0=d&&"documentMode"in document&&11>=document.documentMode,So=null,kd=null,rl=null,Pd=!1;function zg(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Pd||So==null||So!==ai(h)||(h=So,"selectionStart"in h&&Ad(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),rl&&nl(rl,h)||(rl=h,h=Xu(kd,"onSelect"),0<h.length&&(s=new Ss("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=So)))}function Ku(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Co={animationend:Ku("Animation","AnimationEnd"),animationiteration:Ku("Animation","AnimationIteration"),animationstart:Ku("Animation","AnimationStart"),transitionend:Ku("Transition","TransitionEnd")},Nd={},Bg={};d&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Qu(i){if(Nd[i])return Nd[i];if(!Co[i])return i;var s=Co[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Bg)return Nd[i]=s[l];return i}var $g=Qu("animationend"),Hg=Qu("animationiteration"),Wg=Qu("animationstart"),qg=Qu("transitionend"),Gg=new Map,Kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(i,s){Gg.set(i,s),a(s,[i])}for(var xd=0;xd<Kg.length;xd++){var Dd=Kg[xd],M0=Dd.toLowerCase(),V0=Dd[0].toUpperCase()+Dd.slice(1);Ii(M0,"on"+V0)}Ii($g,"onAnimationEnd"),Ii(Hg,"onAnimationIteration"),Ii(Wg,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(qg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function Qg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,Ma(h,s,void 0,i),i.currentTarget=null}function Yg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],f=h.event;h=h.listeners;e:{var m=void 0;if(s)for(var E=h.length-1;0<=E;E--){var S=h[E],N=S.instance,j=S.currentTarget;if(S=S.listener,N!==m&&f.isPropagationStopped())break e;Qg(f,S,j),m=N}else for(E=0;E<h.length;E++){if(S=h[E],N=S.instance,j=S.currentTarget,S=S.listener,N!==m&&f.isPropagationStopped())break e;Qg(f,S,j),m=N}}}if(ao)throw i=Rn,ao=!1,Rn=null,i}function it(i,s){var l=s[jd];l===void 0&&(l=s[jd]=new Set);var h=i+"__bubble";l.has(h)||(Xg(s,i,2,!1),l.add(h))}function bd(i,s,l){var h=0;s&&(h|=4),Xg(l,i,h,s)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function sl(i){if(!i[Yu]){i[Yu]=!0,r.forEach(function(l){l!=="selectionchange"&&(F0.has(l)||bd(l,!1,i),bd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Yu]||(s[Yu]=!0,bd("selectionchange",!1,s))}}function Xg(i,s,l,h){switch(go(s)){case 1:var f=lr;break;case 4:f=zu;break;default:f=Qa}l=f.bind(null,s,l,i),f=void 0,!mi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function Od(i,s,l,h,f){var m=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var S=h.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(E===4)for(E=h.return;E!==null;){var N=E.tag;if((N===3||N===4)&&(N=E.stateNode.containerInfo,N===f||N.nodeType===8&&N.parentNode===f))return;E=E.return}for(;S!==null;){if(E=Rs(S),E===null)return;if(N=E.tag,N===5||N===6){h=m=E;continue e}S=S.parentNode}}h=h.return}Nu(function(){var j=m,K=oo(l),Q=[];e:{var G=Gg.get(i);if(G!==void 0){var ne=Ss,se=i;switch(i){case"keypress":if(Is(l)===0)break e;case"keydown":case"keyup":ne=Ge;break;case"focusin":se="focus",ne=Ft;break;case"focusout":se="blur",ne=Ft;break;case"beforeblur":case"afterblur":ne=Ft;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Hu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=dr;break;case $g:case Hg:case Wg:ne=qu;break;case qg:ne=To;break;case"scroll":ne=yo;break;case"wheel":ne=w0;break;case"copy":case"cut":case"paste":ne=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=En}var ae=(s&4)!==0,_t=!ae&&i==="scroll",M=ae?G!==null?G+"Capture":null:G;ae=[];for(var D=j,F;D!==null;){F=D;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=fs(D,M),Y!=null&&ae.push(ol(D,Y,F)))),_t)break;D=D.return}0<ae.length&&(G=new ne(G,se,null,l,K),Q.push({event:G,listeners:ae}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",ne=i==="mouseout"||i==="pointerout",G&&l!==di&&(se=l.relatedTarget||l.fromElement)&&(Rs(se)||se[zr]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(se=l.relatedTarget||l.toElement,ne=j,se=se?Rs(se):null,se!==null&&(_t=jn(se),se!==_t||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=j),ne!==se)){if(ae=Xa,Y="onMouseLeave",M="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(ae=En,Y="onPointerLeave",M="onPointerEnter",D="pointer"),_t=ne==null?G:ko(ne),F=se==null?G:ko(se),G=new ae(Y,D+"leave",ne,l,K),G.target=_t,G.relatedTarget=F,Y=null,Rs(K)===j&&(ae=new ae(M,D+"enter",se,l,K),ae.target=F,ae.relatedTarget=_t,Y=ae),_t=Y,ne&&se)t:{for(ae=ne,M=se,D=0,F=ae;F;F=Ro(F))D++;for(F=0,Y=M;Y;Y=Ro(Y))F++;for(;0<D-F;)ae=Ro(ae),D--;for(;0<F-D;)M=Ro(M),F--;for(;D--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Ro(ae),M=Ro(M)}ae=null}else ae=null;ne!==null&&Jg(Q,G,ne,ae,!1),se!==null&&_t!==null&&Jg(Q,_t,se,ae,!0)}}e:{if(G=j?ko(j):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var le=k0;else if(xg(G))if(bg)le=D0;else{le=N0;var pe=P0}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=x0);if(le&&(le=le(i,j))){Dg(Q,le,l,K);break e}pe&&pe(i,G,j),i==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&Et(G,"number",G.value)}switch(pe=j?ko(j):window,i){case"focusin":(xg(pe)||pe.contentEditable==="true")&&(So=pe,kd=j,rl=null);break;case"focusout":rl=kd=So=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,zg(Q,l,K);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":zg(Q,l,K)}var me;if(Sd)e:{switch(i){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Io?Pg(i,l)&&(ye="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ye="onCompositionStart");ye&&(Rg&&l.locale!=="ko"&&(Io||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Io&&(me=Bu()):(yn=K,_o="value"in yn?yn.value:yn.textContent,Io=!0)),pe=Xu(j,ye),0<pe.length&&(ye=new y(ye,i,null,l,K),Q.push({event:ye,listeners:pe}),me?ye.data=me:(me=Ng(l),me!==null&&(ye.data=me)))),(me=I0?S0(i,l):C0(i,l))&&(j=Xu(j,"onBeforeInput"),0<j.length&&(K=new y("onBeforeInput","beforeinput",null,l,K),Q.push({event:K,listeners:j}),K.data=me))}Yg(Q,s)})}function ol(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Xu(i,s){for(var l=s+"Capture",h=[];i!==null;){var f=i,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=fs(i,l),m!=null&&h.unshift(ol(i,m,f)),m=fs(i,s),m!=null&&h.push(ol(i,m,f))),i=i.return}return h}function Ro(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Jg(i,s,l,h,f){for(var m=s._reactName,E=[];l!==null&&l!==h;){var S=l,N=S.alternate,j=S.stateNode;if(N!==null&&N===h)break;S.tag===5&&j!==null&&(S=j,f?(N=fs(l,m),N!=null&&E.unshift(ol(l,N,S))):f||(N=fs(l,m),N!=null&&E.push(ol(l,N,S)))),l=l.return}E.length!==0&&i.push({event:s,listeners:E})}var U0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Zg(i){return(typeof i=="string"?i:""+i).replace(U0,`
`).replace(j0,"")}function Ju(i,s,l){if(s=Zg(s),Zg(i)!==s&&l)throw Error(t(425))}function Zu(){}var Ld=null,Md=null;function Vd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(i){return e_.resolve(null).then(i).catch($0)}:Fd;function $0(i){setTimeout(function(){throw i})}function Ud(i,s){var l=s,h=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){i.removeChild(f),Ei(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);Ei(s)}function Si(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function t_(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),pr="__reactFiber$"+Ao,al="__reactProps$"+Ao,zr="__reactContainer$"+Ao,jd="__reactEvents$"+Ao,H0="__reactListeners$"+Ao,W0="__reactHandles$"+Ao;function Rs(i){var s=i[pr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[zr]||l[pr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=t_(i);i!==null;){if(l=i[pr])return l;i=t_(i)}return s}i=l,l=i.parentNode}return null}function ll(i){return i=i[pr]||i[zr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ko(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function ec(i){return i[al]||null}var zd=[],Po=-1;function Ci(i){return{current:i}}function st(i){0>Po||(i.current=zd[Po],zd[Po]=null,Po--)}function et(i,s){Po++,zd[Po]=i.current,i.current=s}var Ri={},Gt=Ci(Ri),ln=Ci(!1),As=Ri;function No(i,s){var l=i.type.contextTypes;if(!l)return Ri;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in l)f[m]=s[m];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=f),f}function un(i){return i=i.childContextTypes,i!=null}function tc(){st(ln),st(Gt)}function n_(i,s,l){if(Gt.current!==Ri)throw Error(t(168));et(Gt,s),et(ln,l)}function r_(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,qe(i)||"Unknown",f));return te({},l,h)}function nc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ri,As=Gt.current,et(Gt,i),et(ln,ln.current),!0}function i_(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=r_(i,s,As),h.__reactInternalMemoizedMergedChildContext=i,st(ln),st(Gt),et(Gt,i)):st(ln),et(ln,l)}var Br=null,rc=!1,Bd=!1;function s_(i){Br===null?Br=[i]:Br.push(i)}function q0(i){rc=!0,s_(i)}function Ai(){if(!Bd&&Br!==null){Bd=!0;var i=0,s=Oe;try{var l=Br;for(Oe=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Br=null,rc=!1}catch(f){throw Br!==null&&(Br=Br.slice(i+1)),Fa(uo,Ai),f}finally{Oe=s,Bd=!1}}return null}var xo=[],Do=0,ic=null,sc=0,kn=[],Pn=0,ks=null,$r=1,Hr="";function Ps(i,s){xo[Do++]=sc,xo[Do++]=ic,ic=i,sc=s}function o_(i,s,l){kn[Pn++]=$r,kn[Pn++]=Hr,kn[Pn++]=ks,ks=i;var h=$r;i=Hr;var f=32-gn(h)-1;h&=~(1<<f),l+=1;var m=32-gn(s)+f;if(30<m){var E=f-f%5;m=(h&(1<<E)-1).toString(32),h>>=E,f-=E,$r=1<<32-gn(s)+f|l<<f|h,Hr=m+i}else $r=1<<m|l<<f|h,Hr=i}function $d(i){i.return!==null&&(Ps(i,1),o_(i,1,0))}function Hd(i){for(;i===ic;)ic=xo[--Do],xo[Do]=null,sc=xo[--Do],xo[Do]=null;for(;i===ks;)ks=kn[--Pn],kn[Pn]=null,Hr=kn[--Pn],kn[Pn]=null,$r=kn[--Pn],kn[Pn]=null}var wn=null,Tn=null,ot=!1,$n=null;function a_(i,s){var l=bn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function l_(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,wn=i,Tn=Si(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,wn=i,Tn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ks!==null?{id:$r,overflow:Hr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=bn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,wn=i,Tn=null,!0):!1;default:return!1}}function Wd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function qd(i){if(ot){var s=Tn;if(s){var l=s;if(!l_(i,s)){if(Wd(i))throw Error(t(418));s=Si(l.nextSibling);var h=wn;s&&l_(i,s)?a_(h,l):(i.flags=i.flags&-4097|2,ot=!1,wn=i)}}else{if(Wd(i))throw Error(t(418));i.flags=i.flags&-4097|2,ot=!1,wn=i}}}function u_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;wn=i}function oc(i){if(i!==wn)return!1;if(!ot)return u_(i),ot=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Vd(i.type,i.memoizedProps)),s&&(s=Tn)){if(Wd(i))throw c_(),Error(t(418));for(;s;)a_(i,s),s=Si(s.nextSibling)}if(u_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Tn=Si(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Tn=null}}else Tn=wn?Si(i.stateNode.nextSibling):null;return!0}function c_(){for(var i=Tn;i;)i=Si(i.nextSibling)}function bo(){Tn=wn=null,ot=!1}function Gd(i){$n===null?$n=[i]:$n.push(i)}var G0=fe.ReactCurrentBatchConfig;function ul(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var f=h,m=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(E){var S=f.refs;E===null?delete S[m]:S[m]=E},s._stringRef=m,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function ac(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function h_(i){var s=i._init;return s(i._payload)}function d_(i){function s(M,D){if(i){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function l(M,D){if(!i)return null;for(;D!==null;)s(M,D),D=D.sibling;return null}function h(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function f(M,D){return M=Li(M,D),M.index=0,M.sibling=null,M}function m(M,D,F){return M.index=F,i?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function E(M){return i&&M.alternate===null&&(M.flags|=2),M}function S(M,D,F,Y){return D===null||D.tag!==6?(D=Uf(F,M.mode,Y),D.return=M,D):(D=f(D,F),D.return=M,D)}function N(M,D,F,Y){var le=F.type;return le===x?K(M,D,F.props.children,Y,F.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ke&&h_(le)===D.type)?(Y=f(D,F.props),Y.ref=ul(M,D,F),Y.return=M,Y):(Y=xc(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ul(M,D,F),Y.return=M,Y)}function j(M,D,F,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=jf(F,M.mode,Y),D.return=M,D):(D=f(D,F.children||[]),D.return=M,D)}function K(M,D,F,Y,le){return D===null||D.tag!==7?(D=Vs(F,M.mode,Y,le),D.return=M,D):(D=f(D,F),D.return=M,D)}function Q(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Uf(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Me:return F=xc(D.type,D.key,D.props,null,M.mode,F),F.ref=ul(M,null,D),F.return=M,F;case Te:return D=jf(D,M.mode,F),D.return=M,D;case Ke:var Y=D._init;return Q(M,Y(D._payload),F)}if(mt(D)||he(D))return D=Vs(D,M.mode,F,null),D.return=M,D;ac(M,D)}return null}function G(M,D,F,Y){var le=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:S(M,D,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:return F.key===le?N(M,D,F,Y):null;case Te:return F.key===le?j(M,D,F,Y):null;case Ke:return le=F._init,G(M,D,le(F._payload),Y)}if(mt(F)||he(F))return le!==null?null:K(M,D,F,Y,null);ac(M,F)}return null}function ne(M,D,F,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,S(D,M,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Me:return M=M.get(Y.key===null?F:Y.key)||null,N(D,M,Y,le);case Te:return M=M.get(Y.key===null?F:Y.key)||null,j(D,M,Y,le);case Ke:var pe=Y._init;return ne(M,D,F,pe(Y._payload),le)}if(mt(Y)||he(Y))return M=M.get(F)||null,K(D,M,Y,le,null);ac(D,Y)}return null}function se(M,D,F,Y){for(var le=null,pe=null,me=D,ye=D=0,Ot=null;me!==null&&ye<F.length;ye++){me.index>ye?(Ot=me,me=null):Ot=me.sibling;var Be=G(M,me,F[ye],Y);if(Be===null){me===null&&(me=Ot);break}i&&me&&Be.alternate===null&&s(M,me),D=m(Be,D,ye),pe===null?le=Be:pe.sibling=Be,pe=Be,me=Ot}if(ye===F.length)return l(M,me),ot&&Ps(M,ye),le;if(me===null){for(;ye<F.length;ye++)me=Q(M,F[ye],Y),me!==null&&(D=m(me,D,ye),pe===null?le=me:pe.sibling=me,pe=me);return ot&&Ps(M,ye),le}for(me=h(M,me);ye<F.length;ye++)Ot=ne(me,M,ye,F[ye],Y),Ot!==null&&(i&&Ot.alternate!==null&&me.delete(Ot.key===null?ye:Ot.key),D=m(Ot,D,ye),pe===null?le=Ot:pe.sibling=Ot,pe=Ot);return i&&me.forEach(function(Mi){return s(M,Mi)}),ot&&Ps(M,ye),le}function ae(M,D,F,Y){var le=he(F);if(typeof le!="function")throw Error(t(150));if(F=le.call(F),F==null)throw Error(t(151));for(var pe=le=null,me=D,ye=D=0,Ot=null,Be=F.next();me!==null&&!Be.done;ye++,Be=F.next()){me.index>ye?(Ot=me,me=null):Ot=me.sibling;var Mi=G(M,me,Be.value,Y);if(Mi===null){me===null&&(me=Ot);break}i&&me&&Mi.alternate===null&&s(M,me),D=m(Mi,D,ye),pe===null?le=Mi:pe.sibling=Mi,pe=Mi,me=Ot}if(Be.done)return l(M,me),ot&&Ps(M,ye),le;if(me===null){for(;!Be.done;ye++,Be=F.next())Be=Q(M,Be.value,Y),Be!==null&&(D=m(Be,D,ye),pe===null?le=Be:pe.sibling=Be,pe=Be);return ot&&Ps(M,ye),le}for(me=h(M,me);!Be.done;ye++,Be=F.next())Be=ne(me,M,ye,Be.value,Y),Be!==null&&(i&&Be.alternate!==null&&me.delete(Be.key===null?ye:Be.key),D=m(Be,D,ye),pe===null?le=Be:pe.sibling=Be,pe=Be);return i&&me.forEach(function(RS){return s(M,RS)}),ot&&Ps(M,ye),le}function _t(M,D,F,Y){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:e:{for(var le=F.key,pe=D;pe!==null;){if(pe.key===le){if(le=F.type,le===x){if(pe.tag===7){l(M,pe.sibling),D=f(pe,F.props.children),D.return=M,M=D;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ke&&h_(le)===pe.type){l(M,pe.sibling),D=f(pe,F.props),D.ref=ul(M,pe,F),D.return=M,M=D;break e}l(M,pe);break}else s(M,pe);pe=pe.sibling}F.type===x?(D=Vs(F.props.children,M.mode,Y,F.key),D.return=M,M=D):(Y=xc(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ul(M,D,F),Y.return=M,M=Y)}return E(M);case Te:e:{for(pe=F.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){l(M,D.sibling),D=f(D,F.children||[]),D.return=M,M=D;break e}else{l(M,D);break}else s(M,D);D=D.sibling}D=jf(F,M.mode,Y),D.return=M,M=D}return E(M);case Ke:return pe=F._init,_t(M,D,pe(F._payload),Y)}if(mt(F))return se(M,D,F,Y);if(he(F))return ae(M,D,F,Y);ac(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(l(M,D.sibling),D=f(D,F),D.return=M,M=D):(l(M,D),D=Uf(F,M.mode,Y),D.return=M,M=D),E(M)):l(M,D)}return _t}var Oo=d_(!0),f_=d_(!1),lc=Ci(null),uc=null,Lo=null,Kd=null;function Qd(){Kd=Lo=uc=null}function Yd(i){var s=lc.current;st(lc),i._currentValue=s}function Xd(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Mo(i,s){uc=i,Kd=Lo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(cn=!0),i.firstContext=null)}function Nn(i){var s=i._currentValue;if(Kd!==i)if(i={context:i,memoizedValue:s,next:null},Lo===null){if(uc===null)throw Error(t(308));Lo=i,uc.dependencies={lanes:0,firstContext:i}}else Lo=Lo.next=i;return s}var Ns=null;function Jd(i){Ns===null?Ns=[i]:Ns.push(i)}function p_(i,s,l,h){var f=s.interleaved;return f===null?(l.next=l,Jd(s)):(l.next=f.next,f.next=l),s.interleaved=l,Wr(i,h)}function Wr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var ki=!1;function Zd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function qr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Pi(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(je&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Wr(i,l)}return f=h.interleaved,f===null?(s.next=s,Jd(h)):(s.next=f.next,f.next=s),h.interleaved=s,Wr(i,l)}function cc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Ha(i,l)}}function g_(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,m=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};m===null?f=m=E:m=m.next=E,l=l.next}while(l!==null);m===null?f=m=s:m=m.next=s}else f=m=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function hc(i,s,l,h){var f=i.updateQueue;ki=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var N=S,j=N.next;N.next=null,E===null?m=j:E.next=j,E=N;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=j:S.next=j,K.lastBaseUpdate=N))}if(m!==null){var Q=f.baseState;E=0,K=j=N=null,S=m;do{var G=S.lane,ne=S.eventTime;if((h&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var se=i,ae=S;switch(G=s,ne=l,ae.tag){case 1:if(se=ae.payload,typeof se=="function"){Q=se.call(ne,Q,G);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ae.payload,G=typeof se=="function"?se.call(ne,Q,G):se,G==null)break e;Q=te({},Q,G);break e;case 2:ki=!0}}S.callback!==null&&S.lane!==0&&(i.flags|=64,G=f.effects,G===null?f.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(j=K=ne,N=Q):K=K.next=ne,E|=G;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;G=S,S=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);if(K===null&&(N=Q),f.baseState=N,f.firstBaseUpdate=j,f.lastBaseUpdate=K,s=f.shared.interleaved,s!==null){f=s;do E|=f.lane,f=f.next;while(f!==s)}else m===null&&(f.shared.lanes=0);bs|=E,i.lanes=E,i.memoizedState=Q}}function __(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var cl={},mr=Ci(cl),hl=Ci(cl),dl=Ci(cl);function xs(i){if(i===cl)throw Error(t(174));return i}function ef(i,s){switch(et(dl,s),et(hl,i),et(mr,cl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ro(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ro(s,i)}st(mr),et(mr,s)}function Vo(){st(mr),st(hl),st(dl)}function y_(i){xs(dl.current);var s=xs(mr.current),l=ro(s,i.type);s!==l&&(et(hl,i),et(mr,l))}function tf(i){hl.current===i&&(st(mr),st(hl))}var at=Ci(0);function dc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var nf=[];function rf(){for(var i=0;i<nf.length;i++)nf[i]._workInProgressVersionPrimary=null;nf.length=0}var fc=fe.ReactCurrentDispatcher,sf=fe.ReactCurrentBatchConfig,Ds=0,lt=null,Rt=null,Dt=null,pc=!1,fl=!1,pl=0,K0=0;function Kt(){throw Error(t(321))}function of(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Bn(i[l],s[l]))return!1;return!0}function af(i,s,l,h,f,m){if(Ds=m,lt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,fc.current=i===null||i.memoizedState===null?J0:Z0,i=l(h,f),fl){m=0;do{if(fl=!1,pl=0,25<=m)throw Error(t(301));m+=1,Dt=Rt=null,s.updateQueue=null,fc.current=eS,i=l(h,f)}while(fl)}if(fc.current=_c,s=Rt!==null&&Rt.next!==null,Ds=0,Dt=Rt=lt=null,pc=!1,s)throw Error(t(300));return i}function lf(){var i=pl!==0;return pl=0,i}function gr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?lt.memoizedState=Dt=i:Dt=Dt.next=i,Dt}function xn(){if(Rt===null){var i=lt.alternate;i=i!==null?i.memoizedState:null}else i=Rt.next;var s=Dt===null?lt.memoizedState:Dt.next;if(s!==null)Dt=s,Rt=i;else{if(i===null)throw Error(t(310));Rt=i,i={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Dt===null?lt.memoizedState=Dt=i:Dt=Dt.next=i}return Dt}function ml(i,s){return typeof s=="function"?s(i):s}function uf(i){var s=xn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Rt,f=h.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}h.baseQueue=f=m,l.pending=null}if(f!==null){m=f.next,h=h.baseState;var S=E=null,N=null,j=m;do{var K=j.lane;if((Ds&K)===K)N!==null&&(N=N.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),h=j.hasEagerState?j.eagerState:i(h,j.action);else{var Q={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};N===null?(S=N=Q,E=h):N=N.next=Q,lt.lanes|=K,bs|=K}j=j.next}while(j!==null&&j!==m);N===null?E=h:N.next=S,Bn(h,s.memoizedState)||(cn=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){f=i;do m=f.lane,lt.lanes|=m,bs|=m,f=f.next;while(f!==i)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function cf(i){var s=xn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,f=l.pending,m=s.memoizedState;if(f!==null){l.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Bn(m,s.memoizedState)||(cn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),l.lastRenderedState=m}return[m,h]}function v_(){}function E_(i,s){var l=lt,h=xn(),f=s(),m=!Bn(h.memoizedState,f);if(m&&(h.memoizedState=f,cn=!0),h=h.queue,hf(I_.bind(null,l,h,i),[i]),h.getSnapshot!==s||m||Dt!==null&&Dt.memoizedState.tag&1){if(l.flags|=2048,gl(9,T_.bind(null,l,h,f,s),void 0,null),bt===null)throw Error(t(349));(Ds&30)!==0||w_(l,s,f)}return f}function w_(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=lt.updateQueue,s===null?(s={lastEffect:null,stores:null},lt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function T_(i,s,l,h){s.value=l,s.getSnapshot=h,S_(s)&&C_(i)}function I_(i,s,l){return l(function(){S_(s)&&C_(i)})}function S_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Bn(i,l)}catch{return!0}}function C_(i){var s=Wr(i,1);s!==null&&Gn(s,i,1,-1)}function R_(i){var s=gr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:i},s.queue=i,i=i.dispatch=X0.bind(null,lt,i),[s.memoizedState,i]}function gl(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=lt.updateQueue,s===null?(s={lastEffect:null,stores:null},lt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function A_(){return xn().memoizedState}function mc(i,s,l,h){var f=gr();lt.flags|=i,f.memoizedState=gl(1|s,l,void 0,h===void 0?null:h)}function gc(i,s,l,h){var f=xn();h=h===void 0?null:h;var m=void 0;if(Rt!==null){var E=Rt.memoizedState;if(m=E.destroy,h!==null&&of(h,E.deps)){f.memoizedState=gl(s,l,m,h);return}}lt.flags|=i,f.memoizedState=gl(1|s,l,m,h)}function k_(i,s){return mc(8390656,8,i,s)}function hf(i,s){return gc(2048,8,i,s)}function P_(i,s){return gc(4,2,i,s)}function N_(i,s){return gc(4,4,i,s)}function x_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function D_(i,s,l){return l=l!=null?l.concat([i]):null,gc(4,4,x_.bind(null,s,i),l)}function df(){}function b_(i,s){var l=xn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&of(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function O_(i,s){var l=xn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&of(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function L_(i,s,l){return(Ds&21)===0?(i.baseState&&(i.baseState=!1,cn=!0),i.memoizedState=l):(Bn(l,s)||(l=Ba(),lt.lanes|=l,bs|=l,i.baseState=!0),s)}function Q0(i,s){var l=Oe;Oe=l!==0&&4>l?l:4,i(!0);var h=sf.transition;sf.transition={};try{i(!1),s()}finally{Oe=l,sf.transition=h}}function M_(){return xn().memoizedState}function Y0(i,s,l){var h=bi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},V_(i))F_(s,l);else if(l=p_(i,s,l,h),l!==null){var f=rn();Gn(l,i,h,f),U_(l,s,h)}}function X0(i,s,l){var h=bi(i),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(V_(i))F_(s,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var E=s.lastRenderedState,S=m(E,l);if(f.hasEagerState=!0,f.eagerState=S,Bn(S,E)){var N=s.interleaved;N===null?(f.next=f,Jd(s)):(f.next=N.next,N.next=f),s.interleaved=f;return}}catch{}finally{}l=p_(i,s,f,h),l!==null&&(f=rn(),Gn(l,i,h,f),U_(l,s,h))}}function V_(i){var s=i.alternate;return i===lt||s!==null&&s===lt}function F_(i,s){fl=pc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function U_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Ha(i,l)}}var _c={readContext:Nn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},J0={readContext:Nn,useCallback:function(i,s){return gr().memoizedState=[i,s===void 0?null:s],i},useContext:Nn,useEffect:k_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,mc(4194308,4,x_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return mc(4194308,4,i,s)},useInsertionEffect:function(i,s){return mc(4,2,i,s)},useMemo:function(i,s){var l=gr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=gr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=Y0.bind(null,lt,i),[h.memoizedState,i]},useRef:function(i){var s=gr();return i={current:i},s.memoizedState=i},useState:R_,useDebugValue:df,useDeferredValue:function(i){return gr().memoizedState=i},useTransition:function(){var i=R_(!1),s=i[0];return i=Q0.bind(null,i[1]),gr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=lt,f=gr();if(ot){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),bt===null)throw Error(t(349));(Ds&30)!==0||w_(h,s,l)}f.memoizedState=l;var m={value:l,getSnapshot:s};return f.queue=m,k_(I_.bind(null,h,m,i),[i]),h.flags|=2048,gl(9,T_.bind(null,h,m,l,s),void 0,null),l},useId:function(){var i=gr(),s=bt.identifierPrefix;if(ot){var l=Hr,h=$r;l=(h&~(1<<32-gn(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=pl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=K0++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},Z0={readContext:Nn,useCallback:b_,useContext:Nn,useEffect:hf,useImperativeHandle:D_,useInsertionEffect:P_,useLayoutEffect:N_,useMemo:O_,useReducer:uf,useRef:A_,useState:function(){return uf(ml)},useDebugValue:df,useDeferredValue:function(i){var s=xn();return L_(s,Rt.memoizedState,i)},useTransition:function(){var i=uf(ml)[0],s=xn().memoizedState;return[i,s]},useMutableSource:v_,useSyncExternalStore:E_,useId:M_,unstable_isNewReconciler:!1},eS={readContext:Nn,useCallback:b_,useContext:Nn,useEffect:hf,useImperativeHandle:D_,useInsertionEffect:P_,useLayoutEffect:N_,useMemo:O_,useReducer:cf,useRef:A_,useState:function(){return cf(ml)},useDebugValue:df,useDeferredValue:function(i){var s=xn();return Rt===null?s.memoizedState=i:L_(s,Rt.memoizedState,i)},useTransition:function(){var i=cf(ml)[0],s=xn().memoizedState;return[i,s]},useMutableSource:v_,useSyncExternalStore:E_,useId:M_,unstable_isNewReconciler:!1};function Hn(i,s){if(i&&i.defaultProps){s=te({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function ff(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:te({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var yc={isMounted:function(i){return(i=i._reactInternals)?jn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=rn(),f=bi(i),m=qr(h,f);m.payload=s,l!=null&&(m.callback=l),s=Pi(i,m,f),s!==null&&(Gn(s,i,f,h),cc(s,i,f))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=rn(),f=bi(i),m=qr(h,f);m.tag=1,m.payload=s,l!=null&&(m.callback=l),s=Pi(i,m,f),s!==null&&(Gn(s,i,f,h),cc(s,i,f))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=rn(),h=bi(i),f=qr(l,h);f.tag=2,s!=null&&(f.callback=s),s=Pi(i,f,h),s!==null&&(Gn(s,i,h,l),cc(s,i,h))}};function j_(i,s,l,h,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,m,E):s.prototype&&s.prototype.isPureReactComponent?!nl(l,h)||!nl(f,m):!0}function z_(i,s,l){var h=!1,f=Ri,m=s.contextType;return typeof m=="object"&&m!==null?m=Nn(m):(f=un(s)?As:Gt.current,h=s.contextTypes,m=(h=h!=null)?No(i,f):Ri),s=new s(l,m),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=f,i.__reactInternalMemoizedMaskedChildContext=m),s}function B_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&yc.enqueueReplaceState(s,s.state,null)}function pf(i,s,l,h){var f=i.stateNode;f.props=l,f.state=i.memoizedState,f.refs={},Zd(i);var m=s.contextType;typeof m=="object"&&m!==null?f.context=Nn(m):(m=un(s)?As:Gt.current,f.context=No(i,m)),f.state=i.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(ff(i,s,m,l),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&yc.enqueueReplaceState(f,f.state,null),hc(i,l,f,h),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308)}function Fo(i,s){try{var l="",h=s;do l+=De(h),h=h.return;while(h);var f=l}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:i,source:s,stack:f,digest:null}}function mf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function gf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function $_(i,s,l){l=qr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Cc||(Cc=!0,xf=h),gf(i,s)},l}function H_(i,s,l){l=qr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){gf(i,s)}}var m=i.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(l.callback=function(){gf(i,s),typeof h!="function"&&(xi===null?xi=new Set([this]):xi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function W_(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new tS;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),i=mS.bind(null,i,s,l),s.then(i,i))}function q_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function G_(i,s,l,h,f){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=qr(-1,1),s.tag=2,Pi(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=f,i)}var nS=fe.ReactCurrentOwner,cn=!1;function nn(i,s,l,h){s.child=i===null?f_(s,null,l,h):Oo(s,i.child,l,h)}function K_(i,s,l,h,f){l=l.render;var m=s.ref;return Mo(s,f),h=af(i,s,l,h,m,f),l=lf(),i!==null&&!cn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,Gr(i,s,f)):(ot&&l&&$d(s),s.flags|=1,nn(i,s,h,f),s.child)}function Q_(i,s,l,h,f){if(i===null){var m=l.type;return typeof m=="function"&&!Ff(m)&&m.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=m,Y_(i,s,m,h,f)):(i=xc(l.type,null,h,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(m=i.child,(i.lanes&f)===0){var E=m.memoizedProps;if(l=l.compare,l=l!==null?l:nl,l(E,h)&&i.ref===s.ref)return Gr(i,s,f)}return s.flags|=1,i=Li(m,h),i.ref=s.ref,i.return=s,s.child=i}function Y_(i,s,l,h,f){if(i!==null){var m=i.memoizedProps;if(nl(m,h)&&i.ref===s.ref)if(cn=!1,s.pendingProps=h=m,(i.lanes&f)!==0)(i.flags&131072)!==0&&(cn=!0);else return s.lanes=i.lanes,Gr(i,s,f)}return _f(i,s,l,h,f)}function X_(i,s,l){var h=s.pendingProps,f=h.children,m=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(jo,In),In|=l;else{if((l&1073741824)===0)return i=m!==null?m.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,et(jo,In),In|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=m!==null?m.baseLanes:l,et(jo,In),In|=h}else m!==null?(h=m.baseLanes|l,s.memoizedState=null):h=l,et(jo,In),In|=h;return nn(i,s,f,l),s.child}function J_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function _f(i,s,l,h,f){var m=un(l)?As:Gt.current;return m=No(s,m),Mo(s,f),l=af(i,s,l,h,m,f),h=lf(),i!==null&&!cn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,Gr(i,s,f)):(ot&&h&&$d(s),s.flags|=1,nn(i,s,l,f),s.child)}function Z_(i,s,l,h,f){if(un(l)){var m=!0;nc(s)}else m=!1;if(Mo(s,f),s.stateNode===null)Ec(i,s),z_(s,l,h),pf(s,l,h,f),h=!0;else if(i===null){var E=s.stateNode,S=s.memoizedProps;E.props=S;var N=E.context,j=l.contextType;typeof j=="object"&&j!==null?j=Nn(j):(j=un(l)?As:Gt.current,j=No(s,j));var K=l.getDerivedStateFromProps,Q=typeof K=="function"||typeof E.getSnapshotBeforeUpdate=="function";Q||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==h||N!==j)&&B_(s,E,h,j),ki=!1;var G=s.memoizedState;E.state=G,hc(s,h,E,f),N=s.memoizedState,S!==h||G!==N||ln.current||ki?(typeof K=="function"&&(ff(s,l,K,h),N=s.memoizedState),(S=ki||j_(s,l,S,h,G,N,j))?(Q||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=N),E.props=h,E.state=N,E.context=j,h=S):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,m_(i,s),S=s.memoizedProps,j=s.type===s.elementType?S:Hn(s.type,S),E.props=j,Q=s.pendingProps,G=E.context,N=l.contextType,typeof N=="object"&&N!==null?N=Nn(N):(N=un(l)?As:Gt.current,N=No(s,N));var ne=l.getDerivedStateFromProps;(K=typeof ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==Q||G!==N)&&B_(s,E,h,N),ki=!1,G=s.memoizedState,E.state=G,hc(s,h,E,f);var se=s.memoizedState;S!==Q||G!==se||ln.current||ki?(typeof ne=="function"&&(ff(s,l,ne,h),se=s.memoizedState),(j=ki||j_(s,l,j,h,G,se,N)||!1)?(K||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,se,N),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,se,N)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=se),E.props=h,E.state=se,E.context=N,h=j):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),h=!1)}return yf(i,s,l,h,m,f)}function yf(i,s,l,h,f,m){J_(i,s);var E=(s.flags&128)!==0;if(!h&&!E)return f&&i_(s,l,!1),Gr(i,s,m);h=s.stateNode,nS.current=s;var S=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&E?(s.child=Oo(s,i.child,null,m),s.child=Oo(s,null,S,m)):nn(i,s,S,m),s.memoizedState=h.state,f&&i_(s,l,!0),s.child}function ey(i){var s=i.stateNode;s.pendingContext?n_(i,s.pendingContext,s.pendingContext!==s.context):s.context&&n_(i,s.context,!1),ef(i,s.containerInfo)}function ty(i,s,l,h,f){return bo(),Gd(f),s.flags|=256,nn(i,s,l,h),s.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function Ef(i){return{baseLanes:i,cachePool:null,transitions:null}}function ny(i,s,l){var h=s.pendingProps,f=at.current,m=!1,E=(s.flags&128)!==0,S;if((S=E)||(S=i!==null&&i.memoizedState===null?!1:(f&2)!==0),S?(m=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(f|=1),et(at,f&1),i===null)return qd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,i=h.fallback,m?(h=s.mode,m=s.child,E={mode:"hidden",children:E},(h&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Dc(E,h,0,null),i=Vs(i,h,l,null),m.return=s,i.return=s,m.sibling=i,s.child=m,s.child.memoizedState=Ef(l),s.memoizedState=vf,i):wf(s,E));if(f=i.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return rS(i,s,E,h,S,f,l);if(m){m=h.fallback,E=s.mode,f=i.child,S=f.sibling;var N={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=N,s.deletions=null):(h=Li(f,N),h.subtreeFlags=f.subtreeFlags&14680064),S!==null?m=Li(S,m):(m=Vs(m,E,l,null),m.flags|=2),m.return=s,h.return=s,h.sibling=m,s.child=h,h=m,m=s.child,E=i.child.memoizedState,E=E===null?Ef(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=i.childLanes&~l,s.memoizedState=vf,h}return m=i.child,i=m.sibling,h=Li(m,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function wf(i,s){return s=Dc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function vc(i,s,l,h){return h!==null&&Gd(h),Oo(s,i.child,null,l),i=wf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function rS(i,s,l,h,f,m,E){if(l)return s.flags&256?(s.flags&=-257,h=mf(Error(t(422))),vc(i,s,E,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(m=h.fallback,f=s.mode,h=Dc({mode:"visible",children:h.children},f,0,null),m=Vs(m,f,E,null),m.flags|=2,h.return=s,m.return=s,h.sibling=m,s.child=h,(s.mode&1)!==0&&Oo(s,i.child,null,E),s.child.memoizedState=Ef(E),s.memoizedState=vf,m);if((s.mode&1)===0)return vc(i,s,E,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var S=h.dgst;return h=S,m=Error(t(419)),h=mf(m,h,void 0),vc(i,s,E,h)}if(S=(E&i.childLanes)!==0,cn||S){if(h=bt,h!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Wr(i,f),Gn(h,i,f,-1))}return Vf(),h=mf(Error(t(421))),vc(i,s,E,h)}return f.data==="$?"?(s.flags|=128,s.child=i.child,s=gS.bind(null,i),f._reactRetry=s,null):(i=m.treeContext,Tn=Si(f.nextSibling),wn=s,ot=!0,$n=null,i!==null&&(kn[Pn++]=$r,kn[Pn++]=Hr,kn[Pn++]=ks,$r=i.id,Hr=i.overflow,ks=s),s=wf(s,h.children),s.flags|=4096,s)}function ry(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),Xd(i.return,s,l)}function Tf(i,s,l,h,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=h,m.tail=l,m.tailMode=f)}function iy(i,s,l){var h=s.pendingProps,f=h.revealOrder,m=h.tail;if(nn(i,s,h.children,l),h=at.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&ry(i,l,s);else if(i.tag===19)ry(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(et(at,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&dc(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Tf(s,!1,f,l,m);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&dc(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}Tf(s,!0,l,null,m);break;case"together":Tf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ec(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Gr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),bs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Li(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Li(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function iS(i,s,l){switch(s.tag){case 3:ey(s),bo();break;case 5:y_(s);break;case 1:un(s.type)&&nc(s);break;case 4:ef(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;et(lc,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(et(at,at.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?ny(i,s,l):(et(at,at.current&1),i=Gr(i,s,l),i!==null?i.sibling:null);et(at,at.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return iy(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),et(at,at.current),h)break;return null;case 22:case 23:return s.lanes=0,X_(i,s,l)}return Gr(i,s,l)}var sy,If,oy,ay;sy=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},If=function(){},oy=function(i,s,l,h){var f=i.memoizedProps;if(f!==h){i=s.stateNode,xs(mr.current);var m=null;switch(l){case"input":f=to(i,f),h=to(i,h),m=[];break;case"select":f=te({},f,{value:void 0}),h=te({},h,{value:void 0}),m=[];break;case"textarea":f=xa(i,f),h=xa(i,h),m=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Zu)}Un(l,h);var E;l=null;for(j in f)if(!h.hasOwnProperty(j)&&f.hasOwnProperty(j)&&f[j]!=null)if(j==="style"){var S=f[j];for(E in S)S.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in h){var N=h[j];if(S=f!=null?f[j]:void 0,h.hasOwnProperty(j)&&N!==S&&(N!=null||S!=null))if(j==="style")if(S){for(E in S)!S.hasOwnProperty(E)||N&&N.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in N)N.hasOwnProperty(E)&&S[E]!==N[E]&&(l||(l={}),l[E]=N[E])}else l||(m||(m=[]),m.push(j,l)),l=N;else j==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,S=S?S.__html:void 0,N!=null&&S!==N&&(m=m||[]).push(j,N)):j==="children"?typeof N!="string"&&typeof N!="number"||(m=m||[]).push(j,""+N):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(N!=null&&j==="onScroll"&&it("scroll",i),m||S===N||(m=[])):(m=m||[]).push(j,N))}l&&(m=m||[]).push("style",l);var j=m;(s.updateQueue=j)&&(s.flags|=4)}},ay=function(i,s,l,h){l!==h&&(s.flags|=4)};function _l(i,s){if(!ot)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Qt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function sS(i,s,l){var h=s.pendingProps;switch(Hd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(s),null;case 1:return un(s.type)&&tc(),Qt(s),null;case 3:return h=s.stateNode,Vo(),st(ln),st(Gt),rf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(oc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,$n!==null&&(Of($n),$n=null))),If(i,s),Qt(s),null;case 5:tf(s);var f=xs(dl.current);if(l=s.type,i!==null&&s.stateNode!=null)oy(i,s,l,h,f),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Qt(s),null}if(i=xs(mr.current),oc(s)){h=s.stateNode,l=s.type;var m=s.memoizedProps;switch(h[pr]=s,h[al]=m,i=(s.mode&1)!==0,l){case"dialog":it("cancel",h),it("close",h);break;case"iframe":case"object":case"embed":it("load",h);break;case"video":case"audio":for(f=0;f<il.length;f++)it(il[f],h);break;case"source":it("error",h);break;case"img":case"image":case"link":it("error",h),it("load",h);break;case"details":it("toggle",h);break;case"input":Su(h,m),it("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!m.multiple},it("invalid",h);break;case"textarea":Da(h,m),it("invalid",h)}Un(l,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var S=m[E];E==="children"?typeof S=="string"?h.textContent!==S&&(m.suppressHydrationWarning!==!0&&Ju(h.textContent,S,i),f=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Ju(h.textContent,S,i),f=["children",""+S]):o.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&it("scroll",h)}switch(l){case"input":eo(h),Na(h,m,!0);break;case"textarea":eo(h),li(h);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(h.onclick=Zu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=ba(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[pr]=s,i[al]=h,sy(i,s,!1,!1),s.stateNode=i;e:{switch(E=so(l,h),l){case"dialog":it("cancel",i),it("close",i),f=h;break;case"iframe":case"object":case"embed":it("load",i),f=h;break;case"video":case"audio":for(f=0;f<il.length;f++)it(il[f],i);f=h;break;case"source":it("error",i),f=h;break;case"img":case"image":case"link":it("error",i),it("load",i),f=h;break;case"details":it("toggle",i),f=h;break;case"input":Su(i,h),f=to(i,h),it("invalid",i);break;case"option":f=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},f=te({},h,{value:void 0}),it("invalid",i);break;case"textarea":Da(i,h),f=xa(i,h),it("invalid",i);break;default:f=h}Un(l,f),S=f;for(m in S)if(S.hasOwnProperty(m)){var N=S[m];m==="style"?io(i,N):m==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ru(i,N)):m==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&ds(i,N):typeof N=="number"&&ds(i,""+N):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?N!=null&&m==="onScroll"&&it("scroll",i):N!=null&&ce(i,m,N,E))}switch(l){case"input":eo(i),Na(i,h,!1);break;case"textarea":eo(i),li(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ue(h.value));break;case"select":i.multiple=!!h.multiple,m=h.value,m!=null?Fn(i,!!h.multiple,m,!1):h.defaultValue!=null&&Fn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(i.onclick=Zu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Qt(s),null;case 6:if(i&&s.stateNode!=null)ay(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=xs(dl.current),xs(mr.current),oc(s)){if(h=s.stateNode,l=s.memoizedProps,h[pr]=s,(m=h.nodeValue!==l)&&(i=wn,i!==null))switch(i.tag){case 3:Ju(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ju(h.nodeValue,l,(i.mode&1)!==0)}m&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[pr]=s,s.stateNode=h}return Qt(s),null;case 13:if(st(at),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ot&&Tn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)c_(),bo(),s.flags|=98560,m=!1;else if(m=oc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[pr]=s}else bo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Qt(s),m=!1}else $n!==null&&(Of($n),$n=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(at.current&1)!==0?At===0&&(At=3):Vf())),s.updateQueue!==null&&(s.flags|=4),Qt(s),null);case 4:return Vo(),If(i,s),i===null&&sl(s.stateNode.containerInfo),Qt(s),null;case 10:return Yd(s.type._context),Qt(s),null;case 17:return un(s.type)&&tc(),Qt(s),null;case 19:if(st(at),m=s.memoizedState,m===null)return Qt(s),null;if(h=(s.flags&128)!==0,E=m.rendering,E===null)if(h)_l(m,!1);else{if(At!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=dc(i),E!==null){for(s.flags|=128,_l(m,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)m=l,i=h,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=i,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,i=E.dependencies,m.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return et(at,at.current&1|2),s.child}i=i.sibling}m.tail!==null&&rt()>zo&&(s.flags|=128,h=!0,_l(m,!1),s.lanes=4194304)}else{if(!h)if(i=dc(E),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),_l(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!ot)return Qt(s),null}else 2*rt()-m.renderingStartTime>zo&&l!==1073741824&&(s.flags|=128,h=!0,_l(m,!1),s.lanes=4194304);m.isBackwards?(E.sibling=s.child,s.child=E):(l=m.last,l!==null?l.sibling=E:s.child=E,m.last=E)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=rt(),s.sibling=null,l=at.current,et(at,h?l&1|2:l&1),s):(Qt(s),null);case 22:case 23:return Mf(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(In&1073741824)!==0&&(Qt(s),s.subtreeFlags&6&&(s.flags|=8192)):Qt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function oS(i,s){switch(Hd(s),s.tag){case 1:return un(s.type)&&tc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Vo(),st(ln),st(Gt),rf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return tf(s),null;case 13:if(st(at),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));bo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return st(at),null;case 4:return Vo(),null;case 10:return Yd(s.type._context),null;case 22:case 23:return Mf(),null;case 24:return null;default:return null}}var wc=!1,Yt=!1,aS=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Uo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){dt(i,s,h)}else l.current=null}function Sf(i,s,l){try{l()}catch(h){dt(i,s,h)}}var ly=!1;function lS(i,s){if(Ld=Fr,i=jg(),Ad(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,m=h.focusNode;h=h.focusOffset;try{l.nodeType,m.nodeType}catch{l=null;break e}var E=0,S=-1,N=-1,j=0,K=0,Q=i,G=null;t:for(;;){for(var ne;Q!==l||f!==0&&Q.nodeType!==3||(S=E+f),Q!==m||h!==0&&Q.nodeType!==3||(N=E+h),Q.nodeType===3&&(E+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)G=Q,Q=ne;for(;;){if(Q===i)break t;if(G===l&&++j===f&&(S=E),G===m&&++K===h&&(N=E),(ne=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=ne}l=S===-1||N===-1?null:{start:S,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(Md={focusedElem:i,selectionRange:l},Fr=!1,ie=s;ie!==null;)if(s=ie,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ie=i;else for(;ie!==null;){s=ie;try{var se=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ae=se.memoizedProps,_t=se.memoizedState,M=s.stateNode,D=M.getSnapshotBeforeUpdate(s.elementType===s.type?ae:Hn(s.type,ae),_t);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){dt(s,s.return,Y)}if(i=s.sibling,i!==null){i.return=s.return,ie=i;break}ie=s.return}return se=ly,ly=!1,se}function yl(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&i)===i){var m=f.destroy;f.destroy=void 0,m!==void 0&&Sf(s,l,m)}f=f.next}while(f!==h)}}function Tc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Cf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function uy(i){var s=i.alternate;s!==null&&(i.alternate=null,uy(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[pr],delete s[al],delete s[jd],delete s[H0],delete s[W0])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function cy(i){return i.tag===5||i.tag===3||i.tag===4}function hy(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||cy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Rf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Zu));else if(h!==4&&(i=i.child,i!==null))for(Rf(i,s,l),i=i.sibling;i!==null;)Rf(i,s,l),i=i.sibling}function Af(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Af(i,s,l),i=i.sibling;i!==null;)Af(i,s,l),i=i.sibling}var Ut=null,Wn=!1;function Ni(i,s,l){for(l=l.child;l!==null;)dy(i,s,l),l=l.sibling}function dy(i,s,l){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(_s,l)}catch{}switch(l.tag){case 5:Yt||Uo(l,s);case 6:var h=Ut,f=Wn;Ut=null,Ni(i,s,l),Ut=h,Wn=f,Ut!==null&&(Wn?(i=Ut,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ut.removeChild(l.stateNode));break;case 18:Ut!==null&&(Wn?(i=Ut,l=l.stateNode,i.nodeType===8?Ud(i.parentNode,l):i.nodeType===1&&Ud(i,l),Ei(i)):Ud(Ut,l.stateNode));break;case 4:h=Ut,f=Wn,Ut=l.stateNode.containerInfo,Wn=!0,Ni(i,s,l),Ut=h,Wn=f;break;case 0:case 11:case 14:case 15:if(!Yt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Sf(l,s,E),f=f.next}while(f!==h)}Ni(i,s,l);break;case 1:if(!Yt&&(Uo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(S){dt(l,s,S)}Ni(i,s,l);break;case 21:Ni(i,s,l);break;case 22:l.mode&1?(Yt=(h=Yt)||l.memoizedState!==null,Ni(i,s,l),Yt=h):Ni(i,s,l);break;default:Ni(i,s,l)}}function fy(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new aS),s.forEach(function(h){var f=_S.bind(null,i,h);l.has(h)||(l.add(h),h.then(f,f))})}}function qn(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var m=i,E=s,S=E;e:for(;S!==null;){switch(S.tag){case 5:Ut=S.stateNode,Wn=!1;break e;case 3:Ut=S.stateNode.containerInfo,Wn=!0;break e;case 4:Ut=S.stateNode.containerInfo,Wn=!0;break e}S=S.return}if(Ut===null)throw Error(t(160));dy(m,E,f),Ut=null,Wn=!1;var N=f.alternate;N!==null&&(N.return=null),f.return=null}catch(j){dt(f,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)py(s,i),s=s.sibling}function py(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(qn(s,i),_r(i),h&4){try{yl(3,i,i.return),Tc(3,i)}catch(ae){dt(i,i.return,ae)}try{yl(5,i,i.return)}catch(ae){dt(i,i.return,ae)}}break;case 1:qn(s,i),_r(i),h&512&&l!==null&&Uo(l,l.return);break;case 5:if(qn(s,i),_r(i),h&512&&l!==null&&Uo(l,l.return),i.flags&32){var f=i.stateNode;try{ds(f,"")}catch(ae){dt(i,i.return,ae)}}if(h&4&&(f=i.stateNode,f!=null)){var m=i.memoizedProps,E=l!==null?l.memoizedProps:m,S=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&no(f,m),so(S,E);var j=so(S,m);for(E=0;E<N.length;E+=2){var K=N[E],Q=N[E+1];K==="style"?io(f,Q):K==="dangerouslySetInnerHTML"?Ru(f,Q):K==="children"?ds(f,Q):ce(f,K,Q,j)}switch(S){case"input":hs(f,m);break;case"textarea":Cu(f,m);break;case"select":var G=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?Fn(f,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?Fn(f,!!m.multiple,m.defaultValue,!0):Fn(f,!!m.multiple,m.multiple?[]:"",!1))}f[al]=m}catch(ae){dt(i,i.return,ae)}}break;case 6:if(qn(s,i),_r(i),h&4){if(i.stateNode===null)throw Error(t(162));f=i.stateNode,m=i.memoizedProps;try{f.nodeValue=m}catch(ae){dt(i,i.return,ae)}}break;case 3:if(qn(s,i),_r(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Ei(s.containerInfo)}catch(ae){dt(i,i.return,ae)}break;case 4:qn(s,i),_r(i);break;case 13:qn(s,i),_r(i),f=i.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Nf=rt())),h&4&&fy(i);break;case 22:if(K=l!==null&&l.memoizedState!==null,i.mode&1?(Yt=(j=Yt)||K,qn(s,i),Yt=j):qn(s,i),_r(i),h&8192){if(j=i.memoizedState!==null,(i.stateNode.isHidden=j)&&!K&&(i.mode&1)!==0)for(ie=i,K=i.child;K!==null;){for(Q=ie=K;ie!==null;){switch(G=ie,ne=G.child,G.tag){case 0:case 11:case 14:case 15:yl(4,G,G.return);break;case 1:Uo(G,G.return);var se=G.stateNode;if(typeof se.componentWillUnmount=="function"){h=G,l=G.return;try{s=h,se.props=s.memoizedProps,se.state=s.memoizedState,se.componentWillUnmount()}catch(ae){dt(h,l,ae)}}break;case 5:Uo(G,G.return);break;case 22:if(G.memoizedState!==null){_y(Q);continue}}ne!==null?(ne.return=G,ie=ne):_y(Q)}K=K.sibling}e:for(K=null,Q=i;;){if(Q.tag===5){if(K===null){K=Q;try{f=Q.stateNode,j?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Q.stateNode,N=Q.memoizedProps.style,E=N!=null&&N.hasOwnProperty("display")?N.display:null,S.style.display=hi("display",E))}catch(ae){dt(i,i.return,ae)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=j?"":Q.memoizedProps}catch(ae){dt(i,i.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===i)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===i)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===i)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:qn(s,i),_r(i),h&4&&fy(i);break;case 21:break;default:qn(s,i),_r(i)}}function _r(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(cy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(ds(f,""),h.flags&=-33);var m=hy(i);Af(i,m,f);break;case 3:case 4:var E=h.stateNode.containerInfo,S=hy(i);Rf(i,S,E);break;default:throw Error(t(161))}}catch(N){dt(i,i.return,N)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function uS(i,s,l){ie=i,my(i)}function my(i,s,l){for(var h=(i.mode&1)!==0;ie!==null;){var f=ie,m=f.child;if(f.tag===22&&h){var E=f.memoizedState!==null||wc;if(!E){var S=f.alternate,N=S!==null&&S.memoizedState!==null||Yt;S=wc;var j=Yt;if(wc=E,(Yt=N)&&!j)for(ie=f;ie!==null;)E=ie,N=E.child,E.tag===22&&E.memoizedState!==null?yy(f):N!==null?(N.return=E,ie=N):yy(f);for(;m!==null;)ie=m,my(m),m=m.sibling;ie=f,wc=S,Yt=j}gy(i)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,ie=m):gy(i)}}function gy(i){for(;ie!==null;){var s=ie;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Yt||Tc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Yt)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:Hn(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&__(s,m,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}__(s,E,l)}break;case 5:var S=s.stateNode;if(l===null&&s.flags&4){l=S;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Ei(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yt||s.flags&512&&Cf(s)}catch(G){dt(s,s.return,G)}}if(s===i){ie=null;break}if(l=s.sibling,l!==null){l.return=s.return,ie=l;break}ie=s.return}}function _y(i){for(;ie!==null;){var s=ie;if(s===i){ie=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ie=l;break}ie=s.return}}function yy(i){for(;ie!==null;){var s=ie;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Tc(4,s)}catch(N){dt(s,l,N)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(N){dt(s,f,N)}}var m=s.return;try{Cf(s)}catch(N){dt(s,m,N)}break;case 5:var E=s.return;try{Cf(s)}catch(N){dt(s,E,N)}}}catch(N){dt(s,s.return,N)}if(s===i){ie=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ie=S;break}ie=s.return}}var cS=Math.ceil,Ic=fe.ReactCurrentDispatcher,kf=fe.ReactCurrentOwner,Dn=fe.ReactCurrentBatchConfig,je=0,bt=null,Tt=null,jt=0,In=0,jo=Ci(0),At=0,vl=null,bs=0,Sc=0,Pf=0,El=null,hn=null,Nf=0,zo=1/0,Kr=null,Cc=!1,xf=null,xi=null,Rc=!1,Di=null,Ac=0,wl=0,Df=null,kc=-1,Pc=0;function rn(){return(je&6)!==0?rt():kc!==-1?kc:kc=rt()}function bi(i){return(i.mode&1)===0?1:(je&2)!==0&&jt!==0?jt&-jt:G0.transition!==null?(Pc===0&&(Pc=Ba()),Pc):(i=Oe,i!==0||(i=window.event,i=i===void 0?16:go(i.type)),i)}function Gn(i,s,l,h){if(50<wl)throw wl=0,Df=null,Error(t(185));ws(i,l,h),((je&2)===0||i!==bt)&&(i===bt&&((je&2)===0&&(Sc|=l),At===4&&Oi(i,jt)),dn(i,h),l===1&&je===0&&(s.mode&1)===0&&(zo=rt()+500,rc&&Ai()))}function dn(i,s){var l=i.callbackNode;Es(i,s);var h=Lr(i,i===bt?jt:0);if(h===0)l!==null&&lo(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&lo(l),s===1)i.tag===0?q0(Ey.bind(null,i)):s_(Ey.bind(null,i)),B0(function(){(je&6)===0&&Ai()}),l=null;else{switch(ir(h)){case 1:l=uo;break;case 4:l=Ua;break;case 16:l=gs;break;case 536870912:l=co;break;default:l=gs}l=ky(l,vy.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function vy(i,s){if(kc=-1,Pc=0,(je&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Bo()&&i.callbackNode!==l)return null;var h=Lr(i,i===bt?jt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=Nc(i,h);else{s=h;var f=je;je|=2;var m=Ty();(bt!==i||jt!==s)&&(Kr=null,zo=rt()+500,Ls(i,s));do try{fS();break}catch(S){wy(i,S)}while(!0);Qd(),Ic.current=m,je=f,Tt!==null?s=0:(bt=null,jt=0,s=At)}if(s!==0){if(s===2&&(f=za(i),f!==0&&(h=f,s=bf(i,f))),s===1)throw l=vl,Ls(i,0),Oi(i,h),dn(i,rt()),l;if(s===6)Oi(i,h);else{if(f=i.current.alternate,(h&30)===0&&!hS(f)&&(s=Nc(i,h),s===2&&(m=za(i),m!==0&&(h=m,s=bf(i,m))),s===1))throw l=vl,Ls(i,0),Oi(i,h),dn(i,rt()),l;switch(i.finishedWork=f,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ms(i,hn,Kr);break;case 3:if(Oi(i,h),(h&130023424)===h&&(s=Nf+500-rt(),10<s)){if(Lr(i,0)!==0)break;if(f=i.suspendedLanes,(f&h)!==h){rn(),i.pingedLanes|=i.suspendedLanes&f;break}i.timeoutHandle=Fd(Ms.bind(null,i,hn,Kr),s);break}Ms(i,hn,Kr);break;case 4:if(Oi(i,h),(h&4194240)===h)break;for(s=i.eventTimes,f=-1;0<h;){var E=31-gn(h);m=1<<E,E=s[E],E>f&&(f=E),h&=~m}if(h=f,h=rt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*cS(h/1960))-h,10<h){i.timeoutHandle=Fd(Ms.bind(null,i,hn,Kr),h);break}Ms(i,hn,Kr);break;case 5:Ms(i,hn,Kr);break;default:throw Error(t(329))}}}return dn(i,rt()),i.callbackNode===l?vy.bind(null,i):null}function bf(i,s){var l=El;return i.current.memoizedState.isDehydrated&&(Ls(i,s).flags|=256),i=Nc(i,s),i!==2&&(s=hn,hn=l,s!==null&&Of(s)),i}function Of(i){hn===null?hn=i:hn.push.apply(hn,i)}function hS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],m=f.getSnapshot;f=f.value;try{if(!Bn(m(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Oi(i,s){for(s&=~Pf,s&=~Sc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-gn(s),h=1<<l;i[l]=-1,s&=~h}}function Ey(i){if((je&6)!==0)throw Error(t(327));Bo();var s=Lr(i,0);if((s&1)===0)return dn(i,rt()),null;var l=Nc(i,s);if(i.tag!==0&&l===2){var h=za(i);h!==0&&(s=h,l=bf(i,h))}if(l===1)throw l=vl,Ls(i,0),Oi(i,s),dn(i,rt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ms(i,hn,Kr),dn(i,rt()),null}function Lf(i,s){var l=je;je|=1;try{return i(s)}finally{je=l,je===0&&(zo=rt()+500,rc&&Ai())}}function Os(i){Di!==null&&Di.tag===0&&(je&6)===0&&Bo();var s=je;je|=1;var l=Dn.transition,h=Oe;try{if(Dn.transition=null,Oe=1,i)return i()}finally{Oe=h,Dn.transition=l,je=s,(je&6)===0&&Ai()}}function Mf(){In=jo.current,st(jo)}function Ls(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,z0(l)),Tt!==null)for(l=Tt.return;l!==null;){var h=l;switch(Hd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&tc();break;case 3:Vo(),st(ln),st(Gt),rf();break;case 5:tf(h);break;case 4:Vo();break;case 13:st(at);break;case 19:st(at);break;case 10:Yd(h.type._context);break;case 22:case 23:Mf()}l=l.return}if(bt=i,Tt=i=Li(i.current,null),jt=In=s,At=0,vl=null,Pf=Sc=bs=0,hn=El=null,Ns!==null){for(s=0;s<Ns.length;s++)if(l=Ns[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,m=l.pending;if(m!==null){var E=m.next;m.next=f,h.next=E}l.pending=h}Ns=null}return i}function wy(i,s){do{var l=Tt;try{if(Qd(),fc.current=_c,pc){for(var h=lt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}pc=!1}if(Ds=0,Dt=Rt=lt=null,fl=!1,pl=0,kf.current=null,l===null||l.return===null){At=1,vl=s,Tt=null;break}e:{var m=i,E=l.return,S=l,N=s;if(s=jt,S.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var j=N,K=S,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=q_(E);if(ne!==null){ne.flags&=-257,G_(ne,E,S,m,s),ne.mode&1&&W_(m,j,s),s=ne,N=j;var se=s.updateQueue;if(se===null){var ae=new Set;ae.add(N),s.updateQueue=ae}else se.add(N);break e}else{if((s&1)===0){W_(m,j,s),Vf();break e}N=Error(t(426))}}else if(ot&&S.mode&1){var _t=q_(E);if(_t!==null){(_t.flags&65536)===0&&(_t.flags|=256),G_(_t,E,S,m,s),Gd(Fo(N,S));break e}}m=N=Fo(N,S),At!==4&&(At=2),El===null?El=[m]:El.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var M=$_(m,N,s);g_(m,M);break e;case 1:S=N;var D=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(xi===null||!xi.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var Y=H_(m,S,s);g_(m,Y);break e}}m=m.return}while(m!==null)}Sy(l)}catch(le){s=le,Tt===l&&l!==null&&(Tt=l=l.return);continue}break}while(!0)}function Ty(){var i=Ic.current;return Ic.current=_c,i===null?_c:i}function Vf(){(At===0||At===3||At===2)&&(At=4),bt===null||(bs&268435455)===0&&(Sc&268435455)===0||Oi(bt,jt)}function Nc(i,s){var l=je;je|=2;var h=Ty();(bt!==i||jt!==s)&&(Kr=null,Ls(i,s));do try{dS();break}catch(f){wy(i,f)}while(!0);if(Qd(),je=l,Ic.current=h,Tt!==null)throw Error(t(261));return bt=null,jt=0,At}function dS(){for(;Tt!==null;)Iy(Tt)}function fS(){for(;Tt!==null&&!ms();)Iy(Tt)}function Iy(i){var s=Ay(i.alternate,i,In);i.memoizedProps=i.pendingProps,s===null?Sy(i):Tt=s,kf.current=null}function Sy(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=sS(l,s,In),l!==null){Tt=l;return}}else{if(l=oS(l,s),l!==null){l.flags&=32767,Tt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{At=6,Tt=null;return}}if(s=s.sibling,s!==null){Tt=s;return}Tt=s=i}while(s!==null);At===0&&(At=5)}function Ms(i,s,l){var h=Oe,f=Dn.transition;try{Dn.transition=null,Oe=1,pS(i,s,l,h)}finally{Dn.transition=f,Oe=h}return null}function pS(i,s,l,h){do Bo();while(Di!==null);if((je&6)!==0)throw Error(t(327));l=i.finishedWork;var f=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var m=l.lanes|l.childLanes;if(Td(i,m),i===bt&&(Tt=bt=null,jt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Rc||(Rc=!0,ky(gs,function(){return Bo(),null})),m=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||m){m=Dn.transition,Dn.transition=null;var E=Oe;Oe=1;var S=je;je|=4,kf.current=null,lS(i,l),py(l,i),O0(Md),Fr=!!Ld,Md=Ld=null,i.current=l,uS(l),Or(),je=S,Oe=E,Dn.transition=m}else i.current=l;if(Rc&&(Rc=!1,Di=i,Ac=f),m=i.pendingLanes,m===0&&(xi=null),Vu(l.stateNode),dn(i,rt()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(Cc)throw Cc=!1,i=xf,xf=null,i;return(Ac&1)!==0&&i.tag!==0&&Bo(),m=i.pendingLanes,(m&1)!==0?i===Df?wl++:(wl=0,Df=i):wl=0,Ai(),null}function Bo(){if(Di!==null){var i=ir(Ac),s=Dn.transition,l=Oe;try{if(Dn.transition=null,Oe=16>i?16:i,Di===null)var h=!1;else{if(i=Di,Di=null,Ac=0,(je&6)!==0)throw Error(t(331));var f=je;for(je|=4,ie=i.current;ie!==null;){var m=ie,E=m.child;if((ie.flags&16)!==0){var S=m.deletions;if(S!==null){for(var N=0;N<S.length;N++){var j=S[N];for(ie=j;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:yl(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var G=K.sibling,ne=K.return;if(uy(K),K===j){ie=null;break}if(G!==null){G.return=ne,ie=G;break}ie=ne}}}var se=m.alternate;if(se!==null){var ae=se.child;if(ae!==null){se.child=null;do{var _t=ae.sibling;ae.sibling=null,ae=_t}while(ae!==null)}}ie=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,ie=E;else e:for(;ie!==null;){if(m=ie,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:yl(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ie=M;break e}ie=m.return}}var D=i.current;for(ie=D;ie!==null;){E=ie;var F=E.child;if((E.subtreeFlags&2064)!==0&&F!==null)F.return=E,ie=F;else e:for(E=D;ie!==null;){if(S=ie,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Tc(9,S)}}catch(le){dt(S,S.return,le)}if(S===E){ie=null;break e}var Y=S.sibling;if(Y!==null){Y.return=S.return,ie=Y;break e}ie=S.return}}if(je=f,Ai(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(_s,i)}catch{}h=!0}return h}finally{Oe=l,Dn.transition=s}}return!1}function Cy(i,s,l){s=Fo(l,s),s=$_(i,s,1),i=Pi(i,s,1),s=rn(),i!==null&&(ws(i,1,s),dn(i,s))}function dt(i,s,l){if(i.tag===3)Cy(i,i,l);else for(;s!==null;){if(s.tag===3){Cy(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(xi===null||!xi.has(h))){i=Fo(l,i),i=H_(s,i,1),s=Pi(s,i,1),i=rn(),s!==null&&(ws(s,1,i),dn(s,i));break}}s=s.return}}function mS(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=rn(),i.pingedLanes|=i.suspendedLanes&l,bt===i&&(jt&l)===l&&(At===4||At===3&&(jt&130023424)===jt&&500>rt()-Nf?Ls(i,0):Pf|=l),dn(i,s)}function Ry(i,s){s===0&&((i.mode&1)===0?s=1:(s=_i,_i<<=1,(_i&130023424)===0&&(_i=4194304)));var l=rn();i=Wr(i,s),i!==null&&(ws(i,s,l),dn(i,l))}function gS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Ry(i,l)}function _S(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Ry(i,l)}var Ay;Ay=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||ln.current)cn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return cn=!1,iS(i,s,l);cn=(i.flags&131072)!==0}else cn=!1,ot&&(s.flags&1048576)!==0&&o_(s,sc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Ec(i,s),i=s.pendingProps;var f=No(s,Gt.current);Mo(s,l),f=af(null,s,h,i,f,l);var m=lf();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,un(h)?(m=!0,nc(s)):m=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Zd(s),f.updater=yc,s.stateNode=f,f._reactInternals=s,pf(s,h,i,l),s=yf(null,s,h,!0,m,l)):(s.tag=0,ot&&m&&$d(s),nn(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Ec(i,s),i=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=vS(h),i=Hn(h,i),f){case 0:s=_f(null,s,h,i,l);break e;case 1:s=Z_(null,s,h,i,l);break e;case 11:s=K_(null,s,h,i,l);break e;case 14:s=Q_(null,s,h,Hn(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),_f(i,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),Z_(i,s,h,f,l);case 3:e:{if(ey(s),i===null)throw Error(t(387));h=s.pendingProps,m=s.memoizedState,f=m.element,m_(i,s),hc(s,h,null,l);var E=s.memoizedState;if(h=E.element,m.isDehydrated)if(m={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){f=Fo(Error(t(423)),s),s=ty(i,s,h,l,f);break e}else if(h!==f){f=Fo(Error(t(424)),s),s=ty(i,s,h,l,f);break e}else for(Tn=Si(s.stateNode.containerInfo.firstChild),wn=s,ot=!0,$n=null,l=f_(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(bo(),h===f){s=Gr(i,s,l);break e}nn(i,s,h,l)}s=s.child}return s;case 5:return y_(s),i===null&&qd(s),h=s.type,f=s.pendingProps,m=i!==null?i.memoizedProps:null,E=f.children,Vd(h,f)?E=null:m!==null&&Vd(h,m)&&(s.flags|=32),J_(i,s),nn(i,s,E,l),s.child;case 6:return i===null&&qd(s),null;case 13:return ny(i,s,l);case 4:return ef(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=Oo(s,null,h,l):nn(i,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),K_(i,s,h,f,l);case 7:return nn(i,s,s.pendingProps,l),s.child;case 8:return nn(i,s,s.pendingProps.children,l),s.child;case 12:return nn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,m=s.memoizedProps,E=f.value,et(lc,h._currentValue),h._currentValue=E,m!==null)if(Bn(m.value,E)){if(m.children===f.children&&!ln.current){s=Gr(i,s,l);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){E=m.child;for(var N=S.firstContext;N!==null;){if(N.context===h){if(m.tag===1){N=qr(-1,l&-l),N.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?N.next=N:(N.next=K.next,K.next=N),j.pending=N}}m.lanes|=l,N=m.alternate,N!==null&&(N.lanes|=l),Xd(m.return,l,s),S.lanes|=l;break}N=N.next}}else if(m.tag===10)E=m.type===s.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=l,S=E.alternate,S!==null&&(S.lanes|=l),Xd(E,l,s),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===s){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}nn(i,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Mo(s,l),f=Nn(f),h=h(f),s.flags|=1,nn(i,s,h,l),s.child;case 14:return h=s.type,f=Hn(h,s.pendingProps),f=Hn(h.type,f),Q_(i,s,h,f,l);case 15:return Y_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),Ec(i,s),s.tag=1,un(h)?(i=!0,nc(s)):i=!1,Mo(s,l),z_(s,h,f),pf(s,h,f,l),yf(null,s,h,!0,i,l);case 19:return iy(i,s,l);case 22:return X_(i,s,l)}throw Error(t(156,s.tag))};function ky(i,s){return Fa(i,s)}function yS(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(i,s,l,h){return new yS(i,s,l,h)}function Ff(i){return i=i.prototype,!(!i||!i.isReactComponent)}function vS(i){if(typeof i=="function")return Ff(i)?1:0;if(i!=null){if(i=i.$$typeof,i===O)return 11;if(i===Ze)return 14}return 2}function Li(i,s){var l=i.alternate;return l===null?(l=bn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function xc(i,s,l,h,f,m){var E=2;if(h=i,typeof i=="function")Ff(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case x:return Vs(l.children,f,m,s);case C:E=8,f|=8;break;case R:return i=bn(12,l,s,f|2),i.elementType=R,i.lanes=m,i;case A:return i=bn(13,l,s,f),i.elementType=A,i.lanes=m,i;case Re:return i=bn(19,l,s,f),i.elementType=Re,i.lanes=m,i;case He:return Dc(l,f,m,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case P:E=10;break e;case k:E=9;break e;case O:E=11;break e;case Ze:E=14;break e;case Ke:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=bn(E,l,s,f),s.elementType=i,s.type=h,s.lanes=m,s}function Vs(i,s,l,h){return i=bn(7,i,h,s),i.lanes=l,i}function Dc(i,s,l,h){return i=bn(22,i,h,s),i.elementType=He,i.lanes=l,i.stateNode={isHidden:!1},i}function Uf(i,s,l){return i=bn(6,i,null,s),i.lanes=l,i}function jf(i,s,l){return s=bn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function ES(i,s,l,h,f){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function zf(i,s,l,h,f,m,E,S,N){return i=new ES(i,s,l,S,N),s===1?(s=1,m===!0&&(s|=8)):s=0,m=bn(3,null,null,s),i.current=m,m.stateNode=i,m.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zd(m),i}function wS(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function Py(i){if(!i)return Ri;i=i._reactInternals;e:{if(jn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(un(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(un(l))return r_(i,l,s)}return s}function Ny(i,s,l,h,f,m,E,S,N){return i=zf(l,h,!0,i,f,m,E,S,N),i.context=Py(null),l=i.current,h=rn(),f=bi(l),m=qr(h,f),m.callback=s??null,Pi(l,m,f),i.current.lanes=f,ws(i,f,h),dn(i,h),i}function bc(i,s,l,h){var f=s.current,m=rn(),E=bi(f);return l=Py(l),s.context===null?s.context=l:s.pendingContext=l,s=qr(m,E),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Pi(f,s,E),i!==null&&(Gn(i,f,E,m),cc(i,f,E)),E}function Oc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function xy(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Bf(i,s){xy(i,s),(i=i.alternate)&&xy(i,s)}function TS(){return null}var Dy=typeof reportError=="function"?reportError:function(i){console.error(i)};function $f(i){this._internalRoot=i}Lc.prototype.render=$f.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));bc(i,s,null,null)},Lc.prototype.unmount=$f.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Os(function(){bc(null,i,null,null)}),s[zr]=null}};function Lc(i){this._internalRoot=i}Lc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ga();i={blockedOn:null,target:i,priority:s};for(var l=0;l<_n.length&&s!==0&&s<_n[l].priority;l++);_n.splice(l,0,i),l===0&&po(i)}};function Hf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Mc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function by(){}function IS(i,s,l,h,f){if(f){if(typeof h=="function"){var m=h;h=function(){var j=Oc(E);m.call(j)}}var E=Ny(s,h,i,0,null,!1,!1,"",by);return i._reactRootContainer=E,i[zr]=E.current,sl(i.nodeType===8?i.parentNode:i),Os(),E}for(;f=i.lastChild;)i.removeChild(f);if(typeof h=="function"){var S=h;h=function(){var j=Oc(N);S.call(j)}}var N=zf(i,0,!1,null,null,!1,!1,"",by);return i._reactRootContainer=N,i[zr]=N.current,sl(i.nodeType===8?i.parentNode:i),Os(function(){bc(s,N,l,h)}),N}function Vc(i,s,l,h,f){var m=l._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var S=f;f=function(){var N=Oc(E);S.call(N)}}bc(s,E,i,f)}else E=IS(l,s,i,f,h);return Oc(E)}Wa=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=We(s.pendingLanes);l!==0&&(Ha(s,l|1),dn(s,rt()),(je&6)===0&&(zo=rt()+500,Ai()))}break;case 13:Os(function(){var h=Wr(i,1);if(h!==null){var f=rn();Gn(h,i,1,f)}}),Bf(i,1)}},ho=function(i){if(i.tag===13){var s=Wr(i,134217728);if(s!==null){var l=rn();Gn(s,i,134217728,l)}Bf(i,134217728)}},qa=function(i){if(i.tag===13){var s=bi(i),l=Wr(i,s);if(l!==null){var h=rn();Gn(l,i,s,h)}Bf(i,s)}},Ga=function(){return Oe},Ka=function(i,s){var l=Oe;try{return Oe=i,s()}finally{Oe=l}},xr=function(i,s,l){switch(s){case"input":if(hs(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var f=ec(h);if(!f)throw Error(t(90));Pa(h),hs(h,f)}}}break;case"textarea":Cu(i,l);break;case"select":s=l.value,s!=null&&Fn(i,!!l.multiple,s,!1)}},ku=Lf,Pu=Os;var SS={usingClientEntryPoint:!1,Events:[ll,ko,ec,fi,pi,Lf]},Tl={findFiberByHostInstance:Rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CS={bundleType:Tl.bundleType,version:Tl.version,rendererPackageName:Tl.rendererPackageName,rendererConfig:Tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Mu(i),i===null?null:i.stateNode},findFiberByHostInstance:Tl.findFiberByHostInstance||TS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{_s=Fc.inject(CS),mn=Fc}catch{}}return fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS,fn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(s))throw Error(t(200));return wS(i,s,null,l)},fn.createRoot=function(i,s){if(!Hf(i))throw Error(t(299));var l=!1,h="",f=Dy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=zf(i,1,!1,null,null,l,!1,h,f),i[zr]=s.current,sl(i.nodeType===8?i.parentNode:i),new $f(s)},fn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Mu(s),i=i===null?null:i.stateNode,i},fn.flushSync=function(i){return Os(i)},fn.hydrate=function(i,s,l){if(!Mc(s))throw Error(t(200));return Vc(null,i,s,!0,l)},fn.hydrateRoot=function(i,s,l){if(!Hf(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,m="",E=Dy;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=Ny(s,null,i,1,l??null,f,!1,m,E),i[zr]=s.current,sl(i),h)for(i=0;i<h.length;i++)l=h[i],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new Lc(s)},fn.render=function(i,s,l){if(!Mc(s))throw Error(t(200));return Vc(null,i,s,!1,l)},fn.unmountComponentAtNode=function(i){if(!Mc(i))throw Error(t(40));return i._reactRootContainer?(Os(function(){Vc(null,null,i,!1,function(){i._reactRootContainer=null,i[zr]=null})}),!0):!1},fn.unstable_batchedUpdates=Lf,fn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!Mc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Vc(i,s,l,!1,h)},fn.version="18.3.1-next-f1338f8080-20240426",fn}var $y;function jS(){if($y)return Gf.exports;$y=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Gf.exports=US(),Gf.exports}var Hy;function zS(){if(Hy)return jc;Hy=1;var n=jS();return jc.createRoot=n.createRoot,jc.hydrateRoot=n.hydrateRoot,jc}var BS=zS(),Qe=um();const $S=()=>{};var Wy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(n,e){if(!n)throw Ea(e)},Ea=function(n){return new Error("Firebase Database ("+iw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},HS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,p=o+2<n.length,_=p?n[o+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let I=(d&15)<<2|_>>6,b=_&63;p||(b=64,u||(I=64)),r.push(t[v],t[w],t[I],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):HS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||_==null||w==null)throw new WS;const I=a<<2|d>>4;if(r.push(I),_!==64){const b=d<<4&240|_>>2;if(r.push(b),w!==64){const $=_<<6&192|w;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class WS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ow=function(n){const e=sw(n);return cm.encodeByteArray(e,!0)},lh=function(n){return ow(n).replace(/\./g,"")},uh=function(n){try{return cm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(n){return aw(void 0,n)}function aw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!GS(t)||(n[t]=aw(n[t],e[t]));return n}function GS(n){return n!=="__proto__"}/**
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
 */function KS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QS=()=>KS().__FIREBASE_DEFAULTS__,YS=()=>{if(typeof process>"u"||typeof Wy>"u")return;const n=Wy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},XS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&uh(n[1]);return e&&JSON.parse(e)},zh=()=>{try{return $S()||QS()||YS()||XS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lw=n=>{var e,t;return(t=(e=zh())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},hm=n=>{const e=lw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},uw=()=>{var n;return(n=zh())==null?void 0:n.config},cw=n=>{var e;return(e=zh())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function si(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function dm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[lh(JSON.stringify(t)),lh(JSON.stringify(u)),""].join(".")}const Ol={};function JS(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ol))Ol[e]?n.emulator.push(e):n.prod.push(e);return n}function ZS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let qy=!1;function $h(n,e){if(typeof window>"u"||typeof document>"u"||!si(window.location.host)||Ol[n]===e||Ol[n]||qy)return;Ol[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=JS().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,b){I.setAttribute("width","24"),I.setAttribute("id",b),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{qy=!0,u()},I}function v(I,b){I.setAttribute("id",b),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=ZS(r),b=t("text"),$=document.getElementById(b)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),oe=t("preprendIcon"),ue=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ce=I.element;d(ce),v(B,H);const fe=_();p(ue,oe),ce.append(ue,$,B,fe),document.body.appendChild(ce)}a?($.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function eC(){var e;const n=(e=zh())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rC(){const n=en();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function iC(){return iw.NODE_ADMIN===!0}function sC(){return!eC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oC(){try{return typeof indexedDB=="object"}catch{return!1}}function aC(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="FirebaseError";class kr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lC,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lu.prototype.create)}}class lu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?uC(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new kr(o,d,r)}}function uC(n,e){return n.replace(cC,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const cC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){return JSON.parse(n)}function Pt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=function(n){let e={},t={},r={},o="";try{const a=n.split(".");e=Wl(uh(a[0])||""),t=Wl(uh(a[1])||""),o=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:o}},hC=function(n){const e=dw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},dC=function(n){const e=dw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function oa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function wp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ch(n,e,t){const r={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=e.call(t,n[o],o,n));return r}function Zi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Gy(a)&&Gy(u)){if(!Zi(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Gy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],p=this.chain_[4],_,v;for(let w=0;w<80;w++){w<40?w<20?(_=d^a&(u^d),v=1518500249):(_=a^u^d,v=1859775393):w<60?(_=a&u|d&(a|u),v=2400959708):(_=a^u^d,v=3395469782);const I=(o<<5|o>>>27)+_+p+v+r[w]&4294967295;p=d,d=u,u=(a<<30|a>>>2)&4294967295,a=o,o=I}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let o=0;const a=this.buf_;let u=this.inbuf_;for(;o<t;){if(u===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}else for(;o<t;)if(a[u]=e[o],++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[o]>>a&255,++r;return e}}function pC(n,e){const t=new mC(n,e);return t.subscribe.bind(t)}class mC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Yf),o.error===void 0&&(o.error=Yf),o.complete===void 0&&(o.complete=Yf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yf(){}function Hh(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>=55296&&o<=56319){const a=o-55296;r++,X(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;o=65536+(a<<10)+u}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Wh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Wt(n){return n&&n._delegate?n._delegate:n}class ei{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fs="[DEFAULT]";/**
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
 */class yC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new au;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EC(e))try{this.getOrInitializeService({instanceIdentifier:Fs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=Fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fs){return this.instances.has(e)}getOptions(e=Fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fs){return this.component?this.component.multipleInstances?e:Fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vC(n){return n===Fs?void 0:n}function EC(n){return n.instantiationMode==="EAGER"}/**
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
 */class wC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const TC={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},IC=Ne.INFO,SC={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},CC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=SC[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qh{constructor(e){this.name=e,this._logLevel=IC,this._logHandler=CC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const RC=(n,e)=>e.some(t=>n instanceof t);let Ky,Qy;function AC(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kC(){return Qy||(Qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fw=new WeakMap,Tp=new WeakMap,pw=new WeakMap,Xf=new WeakMap,pm=new WeakMap;function PC(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(qi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&fw.set(t,n)}).catch(()=>{}),pm.set(e,n),e}function NC(n){if(Tp.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Tp.set(n,e)}let Ip={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xC(n){Ip=n(Ip)}function DC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Jf(this),e,...t);return pw.set(r,e.sort?e.sort():[e]),qi(r)}:kC().includes(n)?function(...e){return n.apply(Jf(this),e),qi(fw.get(this))}:function(...e){return qi(n.apply(Jf(this),e))}}function bC(n){return typeof n=="function"?DC(n):(n instanceof IDBTransaction&&NC(n),RC(n,AC())?new Proxy(n,Ip):n)}function qi(n){if(n instanceof IDBRequest)return PC(n);if(Xf.has(n))return Xf.get(n);const e=bC(n);return e!==n&&(Xf.set(n,e),pm.set(e,n)),e}const Jf=n=>pm.get(n);function OC(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=qi(u);return r&&u.addEventListener("upgradeneeded",p=>{r(qi(u.result),p.oldVersion,p.newVersion,qi(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const LC=["get","getKey","getAll","getAllKeys","count"],MC=["put","add","delete","clear"],Zf=new Map;function Yy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zf.get(e))return Zf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=MC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||LC.includes(t)))return;const a=async function(u,...d){const p=this.transaction(u,o?"readwrite":"readonly");let _=p.store;return r&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&p.done]))[0]};return Zf.set(e,a),a}xC(n=>({...n,get:(e,t,r)=>Yy(e,t)||n.get(e,t,r),has:(e,t)=>!!Yy(e,t)||n.has(e,t)}));/**
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
 */class VC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function FC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sp="@firebase/app",Xy="0.14.4";/**
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
 */const ti=new qh("@firebase/app"),UC="@firebase/app-compat",jC="@firebase/analytics-compat",zC="@firebase/analytics",BC="@firebase/app-check-compat",$C="@firebase/app-check",HC="@firebase/auth",WC="@firebase/auth-compat",qC="@firebase/database",GC="@firebase/data-connect",KC="@firebase/database-compat",QC="@firebase/functions",YC="@firebase/functions-compat",XC="@firebase/installations",JC="@firebase/installations-compat",ZC="@firebase/messaging",eR="@firebase/messaging-compat",tR="@firebase/performance",nR="@firebase/performance-compat",rR="@firebase/remote-config",iR="@firebase/remote-config-compat",sR="@firebase/storage",oR="@firebase/storage-compat",aR="@firebase/firestore",lR="@firebase/ai",uR="@firebase/firestore-compat",cR="firebase",hR="12.4.0";/**
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
 */const Cp="[DEFAULT]",dR={[Sp]:"fire-core",[UC]:"fire-core-compat",[zC]:"fire-analytics",[jC]:"fire-analytics-compat",[$C]:"fire-app-check",[BC]:"fire-app-check-compat",[HC]:"fire-auth",[WC]:"fire-auth-compat",[qC]:"fire-rtdb",[GC]:"fire-data-connect",[KC]:"fire-rtdb-compat",[QC]:"fire-fn",[YC]:"fire-fn-compat",[XC]:"fire-iid",[JC]:"fire-iid-compat",[ZC]:"fire-fcm",[eR]:"fire-fcm-compat",[tR]:"fire-perf",[nR]:"fire-perf-compat",[rR]:"fire-rc",[iR]:"fire-rc-compat",[sR]:"fire-gcs",[oR]:"fire-gcs-compat",[aR]:"fire-fst",[uR]:"fire-fst-compat",[lR]:"fire-vertex","fire-js":"fire-js",[cR]:"fire-js-all"};/**
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
 */const hh=new Map,fR=new Map,Rp=new Map;function Jy(n,e){try{n.container.addComponent(e)}catch(t){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function es(n){const e=n.name;if(Rp.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;Rp.set(e,n);for(const t of hh.values())Jy(t,n);for(const t of fR.values())Jy(t,n);return!0}function uu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Cn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const pR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gi=new lu("app","Firebase",pR);/**
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
 */class mR{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gi.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=hR;function mw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Cp,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw Gi.create("bad-app-name",{appName:String(o)});if(t||(t=uw()),!t)throw Gi.create("no-options");const a=hh.get(o);if(a){if(Zi(t,a.options)&&Zi(r,a.config))return a;throw Gi.create("duplicate-app",{appName:o})}const u=new wC(o);for(const p of Rp.values())u.addComponent(p);const d=new mR(t,r,u);return hh.set(o,d),d}function Gh(n=Cp){const e=hh.get(n);if(!e&&n===Cp&&uw())return mw();if(!e)throw Gi.create("no-app",{appName:n});return e}function Mn(n,e,t){let r=dR[n]??n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(u.join(" "));return}es(new ei(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const gR="firebase-heartbeat-database",_R=1,ql="firebase-heartbeat-store";let ep=null;function gw(){return ep||(ep=OC(gR,_R,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ql)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gi.create("idb-open",{originalErrorMessage:n.message})})),ep}async function yR(n){try{const t=(await gw()).transaction(ql),r=await t.objectStore(ql).get(_w(n));return await t.done,r}catch(e){if(e instanceof kr)ti.warn(e.message);else{const t=Gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ti.warn(t.message)}}}async function Zy(n,e){try{const r=(await gw()).transaction(ql,"readwrite");await r.objectStore(ql).put(e,_w(n)),await r.done}catch(t){if(t instanceof kr)ti.warn(t.message);else{const r=Gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ti.warn(r.message)}}}function _w(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vR=1024,ER=30;class wR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new IR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ev();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>ER){const u=SR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ti.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ev(),{heartbeatsToSend:r,unsentEntries:o}=TR(this._heartbeatsCache.heartbeats),a=lh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ti.warn(t),""}}}function ev(){return new Date().toISOString().substring(0,10)}function TR(n,e=vR){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),tv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),tv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class IR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oC()?aC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tv(n){return lh(JSON.stringify({version:2,heartbeats:n})).length}function SR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function CR(n){es(new ei("platform-logger",e=>new VC(e),"PRIVATE")),es(new ei("heartbeat",e=>new wR(e),"PRIVATE")),Mn(Sp,Xy,n),Mn(Sp,Xy,"esm2020"),Mn("fire-js","")}CR("");function yw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RR=yw,vw=new lu("auth","Firebase",yw());/**
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
 */const dh=new qh("@firebase/auth");function AR(n,...e){dh.logLevel<=Ne.WARN&&dh.warn(`Auth (${cs}): ${n}`,...e)}function Xc(n,...e){dh.logLevel<=Ne.ERROR&&dh.error(`Auth (${cs}): ${n}`,...e)}/**
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
 */function Sr(n,...e){throw gm(n,...e)}function Jn(n,...e){return gm(n,...e)}function mm(n,e,t){const r={...RR(),[e]:t};return new lu("auth","Firebase",r).create(e,{appName:n.name})}function $s(n){return mm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kR(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sr(n,"argument-error"),mm(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vw.create(n,...e)}function ve(n,e,...t){if(!n)throw gm(e,...t)}function Yr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xc(e),new Error(e)}function ni(n,e){n||Yr(e)}/**
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
 */function Ap(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function PR(){return nv()==="http:"||nv()==="https:"}function nv(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function NR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PR()||nC()||"connection"in navigator)?navigator.onLine:!0}function xR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class cu{constructor(e,t){this.shortDelay=e,this.longDelay=t,ni(t>e,"Short delay should be less than long delay!"),this.isMobile=fm()||hw()}get(){return NR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _m(n,e){ni(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ew{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OR=new cu(3e4,6e4);function ym(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ta(n,e,t,r,o={}){return ww(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=wa({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:p,...a};return tC()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&si(n.emulatorConfig.host)&&(_.credentials="include"),Ew.fetch()(await Tw(n,n.config.apiHost,t,d),_)})}async function ww(n,e,t){n._canInitEmulator=!1;const r={...DR,...e};try{const o=new MR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw zc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[p,_]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw zc(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw zc(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw zc(n,"user-disabled",u);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw mm(n,v,_);Sr(n,v)}}catch(o){if(o instanceof kr)throw o;Sr(n,"network-request-failed",{message:String(o)})}}async function LR(n,e,t,r,o={}){const a=await Ta(n,e,t,r,o);return"mfaPendingCredential"in a&&Sr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Tw(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?_m(n.config,o):`${n.config.apiScheme}://${o}`;return bR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class MR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),OR.get())})}}function zc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Jn(n,e,r);return o.customData._tokenResponse=t,o}/**
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
 */async function VR(n,e){return Ta(n,"POST","/v1/accounts:delete",e)}async function fh(n,e){return Ta(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ll(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FR(n,e=!1){const t=Wt(n),r=await t.getIdToken(e),o=vm(r);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Ll(tp(o.auth_time)),issuedAtTime:Ll(tp(o.iat)),expirationTime:Ll(tp(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function tp(n){return Number(n)*1e3}function vm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Xc("JWT malformed, contained fewer than 3 sections"),null;try{const o=uh(t);return o?JSON.parse(o):(Xc("Failed to decode base64 JWT payload"),null)}catch(o){return Xc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function rv(n){const e=vm(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gl(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kr&&UR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function UR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ll(this.lastLoginAt),this.creationTime=Ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ph(n){var w;const e=n.auth,t=await n.getIdToken(),r=await Gl(n,fh(e,{idToken:t}));ve(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const a=(w=o.providerUserInfo)!=null&&w.length?Iw(o.providerUserInfo):[],u=BR(n.providerData,a),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),_=d?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new kp(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function zR(n){const e=Wt(n);await ph(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BR(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Iw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function $R(n,e){const t=await ww(n,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await Tw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:r};return n.emulatorConfig&&si(n.emulatorConfig.host)&&(p.credentials="include"),Ew.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HR(n,e){return Ta(n,"POST","/v2/accounts:revokeToken",ym(n,e))}/**
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
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=rv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await $R(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new Qo;return r&&(ve(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(ve(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(ve(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return Yr("not implemented")}}/**
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
 */function Vi(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qn{constructor({uid:e,auth:t,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new jR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new kp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Gl(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FR(this,e)}reload(){return zR(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ph(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject($s(this.auth));const e=await this.getIdToken();return await Gl(this,VR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,o=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,_=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:w,emailVerified:I,isAnonymous:b,providerData:$,stsTokenManager:H}=t;ve(w&&H,e,"internal-error");const B=Qo.fromJSON(this.name,H);ve(typeof w=="string",e,"internal-error"),Vi(r,e.name),Vi(o,e.name),ve(typeof I=="boolean",e,"internal-error"),ve(typeof b=="boolean",e,"internal-error"),Vi(a,e.name),Vi(u,e.name),Vi(d,e.name),Vi(p,e.name),Vi(_,e.name),Vi(v,e.name);const oe=new Qn({uid:w,auth:e,email:o,emailVerified:I,displayName:r,isAnonymous:b,photoURL:u,phoneNumber:a,tenantId:d,stsTokenManager:B,createdAt:_,lastLoginAt:v});return $&&Array.isArray($)&&(oe.providerData=$.map(ue=>({...ue}))),p&&(oe._redirectEventId=p),oe}static async _fromIdTokenResponse(e,t,r=!1){const o=new Qo;o.updateFromServerResponse(t);const a=new Qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ph(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?Iw(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new Qo;d.updateFromIdToken(r);const p=new Qn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new kp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,_),p}}/**
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
 */const iv=new Map;function Xr(n){ni(n instanceof Function,"Expected a class definition");let e=iv.get(n);return e?(ni(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,iv.set(n,e),e)}/**
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
 */class Sw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sw.type="NONE";const sv=Sw;/**
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
 */function Jc(n,e,t){return`firebase:${n}:${e}:${t}`}class Yo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Jc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Jc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fh(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yo(Xr(sv),e,r);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=o[0]||Xr(sv);const u=Jc(r,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const v=await _._get(u);if(v){let w;if(typeof v=="string"){const I=await fh(e,{idToken:v}).catch(()=>{});if(!I)break;w=await Qn._fromGetAccountInfoResponse(e,I,v)}else w=Qn._fromJSON(e,v);_!==a&&(d=w),a=_;break}}catch{}const p=o.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Yo(a,e,r):(a=p[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new Yo(a,e,r))}}/**
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
 */function ov(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nw(e))return"Blackberry";if(xw(e))return"Webos";if(Rw(e))return"Safari";if((e.includes("chrome/")||Aw(e))&&!e.includes("edge/"))return"Chrome";if(Pw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cw(n=en()){return/firefox\//i.test(n)}function Rw(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Aw(n=en()){return/crios\//i.test(n)}function kw(n=en()){return/iemobile/i.test(n)}function Pw(n=en()){return/android/i.test(n)}function Nw(n=en()){return/blackberry/i.test(n)}function xw(n=en()){return/webos/i.test(n)}function Em(n=en()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function WR(n=en()){var e;return Em(n)&&!!((e=window.navigator)!=null&&e.standalone)}function qR(){return rC()&&document.documentMode===10}function Dw(n=en()){return Em(n)||Pw(n)||xw(n)||Nw(n)||/windows phone/i.test(n)||kw(n)}/**
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
 */function bw(n,e=[]){let t;switch(n){case"Browser":t=ov(en());break;case"Worker":t=`${ov(en())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cs}/${r}`}/**
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
 */class GR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const p=e(a);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function KR(n,e={}){return Ta(n,"GET","/v2/passwordPolicy",ym(n,e))}/**
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
 */const QR=6;class YR{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??QR,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class XR{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new GR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fh(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(Cn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,d=r==null?void 0:r._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(r=p.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ph(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject($s(this));const t=e?Wt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject($s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject($s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KR(this),t=new YR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await HR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[Xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,o);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&AR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Kh(n){return Wt(n)}class av{constructor(e){this.auth=e,this.observer=null,this.addObserver=pC(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JR(n){wm=n}function ZR(n){return wm.loadJS(n)}function eA(){return wm.gapiScript}function tA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nA(n,e){const t=uu(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Zi(a,e??{}))return o;Sr(o,"already-initialized")}return t.initialize({options:e})}function rA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iA(n,e,t){const r=Kh(n);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=Ow(e),{host:u,port:d}=sA(e),p=d===null?"":`:${d}`,_={url:`${a}//${u}${p}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(Zi(_,r.config.emulator)&&Zi(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,si(u)?(Bh(`${a}//${u}${p}`),$h("Auth",!0)):oA()}function Ow(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sA(n){const e=Ow(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:lv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:lv(u)}}}function lv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function oA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Lw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yr("not implemented")}_getIdTokenResponse(e){return Yr("not implemented")}_linkToIdToken(e,t){return Yr("not implemented")}_getReauthenticationResolver(e){return Yr("not implemented")}}/**
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
 */async function Xo(n,e){return LR(n,"POST","/v1/accounts:signInWithIdp",ym(n,e))}/**
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
 */const aA="http://localhost";class qs extends Lw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...a}=t;if(!r||!o)return null;const u=new qs(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Xo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xo(e,t)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wa(t)}return e}}/**
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
 */class Tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hu extends Tm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ui extends hu{constructor(){super("facebook.com")}static credential(e){return qs._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ui.credential(e.oauthAccessToken)}catch{return null}}}Ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ui.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends hu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qs._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qr.credential(t,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class ji extends hu{constructor(){super("github.com")}static credential(e){return qs._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.GITHUB_SIGN_IN_METHOD="github.com";ji.PROVIDER_ID="github.com";/**
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
 */class zi extends hu{constructor(){super("twitter.com")}static credential(e,t){return qs._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zi.credential(t,r)}catch{return null}}}zi.TWITTER_SIGN_IN_METHOD="twitter.com";zi.PROVIDER_ID="twitter.com";/**
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
 */class aa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Qn._fromIdTokenResponse(e,r,o),u=uv(r);return new aa({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=uv(r);return new aa({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function uv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class mh extends kr{constructor(e,t,r,o){super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,mh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new mh(e,t,r,o)}}function Mw(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?mh._fromErrorAndOperation(n,a,e,r):a})}async function lA(n,e,t=!1){const r=await Gl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return aa._forOperation(n,"link",r)}/**
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
 */async function uA(n,e,t=!1){const{auth:r}=n;if(Cn(r.app))return Promise.reject($s(r));const o="reauthenticate";try{const a=await Gl(n,Mw(r,o,e,n),t);ve(a.idToken,r,"internal-error");const u=vm(a.idToken);ve(u,r,"internal-error");const{sub:d}=u;return ve(n.uid===d,r,"user-mismatch"),aa._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Sr(r,"user-mismatch"),a}}/**
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
 */async function cA(n,e,t=!1){if(Cn(n.app))return Promise.reject($s(n));const r="signIn",o=await Mw(n,r,e),a=await aa._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}function hA(n,e,t,r){return Wt(n).onIdTokenChanged(e,t,r)}function dA(n,e,t){return Wt(n).beforeAuthStateChanged(e,t)}function fA(n,e,t,r){return Wt(n).onAuthStateChanged(e,t,r)}function pA(n){return Wt(n).signOut()}const gh="__sak";/**
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
 */class Vw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gh,"1"),this.storage.removeItem(gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mA=1e3,gA=10;class Fw extends Vw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);qR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,gA):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fw.type="LOCAL";const _A=Fw;/**
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
 */class Uw extends Vw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uw.type="SESSION";const jw=Uw;/**
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
 */function yA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Qh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,a)),p=await yA(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qh.receivers=[];/**
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
 */function Im(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,p)=>{const _=Im("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(w){const I=w;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Tr(){return window}function EA(n){Tr().location.href=n}/**
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
 */function zw(){return typeof Tr().WorkerGlobalScope<"u"&&typeof Tr().importScripts=="function"}async function wA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function IA(){return zw()?self:null}/**
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
 */const Bw="firebaseLocalStorageDb",SA=1,_h="firebaseLocalStorage",$w="fbase_key";class du{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yh(n,e){return n.transaction([_h],e?"readwrite":"readonly").objectStore(_h)}function CA(){const n=indexedDB.deleteDatabase(Bw);return new du(n).toPromise()}function Pp(){const n=indexedDB.open(Bw,SA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_h,{keyPath:$w})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_h)?e(r):(r.close(),await CA(),e(await Pp()))})})}async function cv(n,e,t){const r=Yh(n,!0).put({[$w]:e,value:t});return new du(r).toPromise()}async function RA(n,e){const t=Yh(n,!1).get(e),r=await new du(t).toPromise();return r===void 0?null:r.value}function hv(n,e){const t=Yh(n,!0).delete(e);return new du(t).toPromise()}const AA=800,kA=3;class Hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>kA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(IA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await wA(),!this.activeServiceWorker)return;this.sender=new vA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pp();return await cv(e,gh,"1"),await hv(e,gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>RA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Yh(o,!1).getAll();return new du(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hw.type="LOCAL";const PA=Hw;new cu(3e4,6e4);/**
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
 */function Ww(n,e){return e?Xr(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Sm extends Lw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NA(n){return cA(n.auth,new Sm(n),n.bypassAuthState)}function xA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),uA(t,new Sm(n),n.bypassAuthState)}async function DA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),lA(t,new Sm(n),n.bypassAuthState)}/**
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
 */class qw{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NA;case"linkViaPopup":case"linkViaRedirect":return DA;case"reauthViaPopup":case"reauthViaRedirect":return xA;default:Sr(this.auth,"internal-error")}}resolve(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bA=new cu(2e3,1e4);async function OA(n,e,t){if(Cn(n.app))return Promise.reject(Jn(n,"operation-not-supported-in-this-environment"));const r=Kh(n);kR(n,e,Tm);const o=Ww(r,t);return new js(r,"signInViaPopup",e,o).executeNotNull()}class js extends qw{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,js.currentPopupAction&&js.currentPopupAction.cancel(),js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){ni(this.filter.length===1,"Popup operations only handle one event");const e=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bA.get())};e()}}js.currentPopupAction=null;/**
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
 */const LA="pendingRedirect",Zc=new Map;class MA extends qw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Zc.get(this.auth._key());if(!e){try{const r=await VA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Zc.set(this.auth._key(),e)}return this.bypassAuthState||Zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VA(n,e){const t=jA(e),r=UA(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function FA(n,e){Zc.set(n._key(),e)}function UA(n){return Xr(n._redirectPersistence)}function jA(n){return Jc(LA,n.config.apiKey,n.name)}async function zA(n,e,t=!1){if(Cn(n.app))return Promise.reject($s(n));const r=Kh(n),o=Ww(r,e),u=await new MA(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const BA=600*1e3;class $A{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Gw(e)){const o=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BA&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gw(n);default:return!1}}/**
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
 */async function WA(n,e={}){return Ta(n,"GET","/v1/projects",e)}/**
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
 */const qA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GA=/^https?/;async function KA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WA(n);for(const t of e)try{if(QA(t))return}catch{}Sr(n,"unauthorized-domain")}function QA(n){const e=Ap(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!GA.test(t))return!1;if(qA.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const YA=new cu(3e4,6e4);function fv(){const n=Tr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XA(n){return new Promise((e,t)=>{var o,a,u;function r(){fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fv(),t(Jn(n,"network-request-failed"))},timeout:YA.get()})}if((a=(o=Tr().gapi)==null?void 0:o.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((u=Tr().gapi)!=null&&u.load)r();else{const d=tA("iframefcb");return Tr()[d]=()=>{gapi.load?r():t(Jn(n,"network-request-failed"))},ZR(`${eA()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw eh=null,e})}let eh=null;function JA(n){return eh=eh||XA(n),eh}/**
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
 */const ZA=new cu(5e3,15e3),e1="__/auth/iframe",t1="emulator/auth/iframe",n1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i1(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_m(e,t1):`https://${n.config.authDomain}/${e1}`,r={apiKey:e.apiKey,appName:n.name,v:cs},o=r1.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${wa(r).slice(1)}`}async function s1(n){const e=await JA(n),t=Tr().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:i1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n1,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Jn(n,"network-request-failed"),d=Tr().setTimeout(()=>{a(u)},ZA.get());function p(){Tr().clearTimeout(d),o(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
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
 */const o1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a1=500,l1=600,u1="_blank",c1="http://localhost";class pv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h1(n,e,t,r=a1,o=l1){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p={...o1,width:r.toString(),height:o.toString(),top:a,left:u},_=en().toLowerCase();t&&(d=Aw(_)?u1:t),Cw(_)&&(e=e||c1,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[b,$])=>`${I}${b}=${$},`,"");if(WR(_)&&d!=="_self")return d1(e||"",d),new pv(null);const w=window.open(e||"",d,v);ve(w,n,"popup-blocked");try{w.focus()}catch{}return new pv(w)}function d1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const f1="__/auth/handler",p1="emulator/auth/handler",m1=encodeURIComponent("fac");async function mv(n,e,t,r,o,a){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:cs,eventId:o};if(e instanceof Tm){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",wp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof hu){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),_=p?`#${m1}=${encodeURIComponent(p)}`:"";return`${g1(n)}?${wa(d).slice(1)}${_}`}function g1({config:n}){return n.emulator?_m(n,p1):`https://${n.authDomain}/${f1}`}/**
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
 */const np="webStorageSupport";class _1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jw,this._completeRedirectFn=zA,this._overrideRedirectResult=FA}async _openPopup(e,t,r,o){var u;ni((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await mv(e,t,r,Ap(),o);return h1(e,a,Im())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await mv(e,t,r,Ap(),o);return EA(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(ni(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await s1(e),r=new $A(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(np,{type:np},o=>{var u;const a=(u=o==null?void 0:o[0])==null?void 0:u[np];a!==void 0&&t(!!a),Sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dw()||Rw()||Em()}}const y1=_1;var gv="@firebase/auth",_v="1.11.0";/**
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
 */class v1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function E1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w1(n){es(new ei("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;ve(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bw(n)},_=new XR(r,o,a,p);return rA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),es(new ei("auth-internal",e=>{const t=Kh(e.getProvider("auth").getImmediate());return(r=>new v1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(gv,_v,E1(n)),Mn(gv,_v,"esm2020")}/**
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
 */const T1=300,I1=cw("authIdTokenMaxAge")||T1;let yv=null;const S1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>I1)return;const o=t==null?void 0:t.token;yv!==o&&(yv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function C1(n=Gh()){const e=uu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nA(n,{popupRedirectResolver:y1,persistence:[PA,_A,jw]}),r=cw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=S1(a.toString());dA(t,u,()=>u(t.currentUser)),hA(t,d=>u(d))}}const o=lw("auth");return o&&iA(t,`http://${o}`),t}function R1(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}JR({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Jn("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",R1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w1("Browser");var vv={};const Ev="@firebase/database",wv="1.1.0";/**
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
 */let Kw="";function A1(n){Kw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Wl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new k1(e)}}catch{}return new P1},zs=Qw("localStorage"),N1=Qw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new qh("@firebase/database"),x1=(function(){let n=1;return function(){return n++}})(),Yw=function(n){const e=_C(n),t=new fC;t.update(e);const r=t.digest();return cm.encodeByteArray(r)},fu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fu.apply(null,r):typeof r=="object"?e+=Pt(r):e+=r,e+=" "}return e};let Ml=null,Tv=!0;const D1=function(n,e){X(!0,"Can't turn on custom loggers persistently."),Jo.logLevel=Ne.VERBOSE,Ml=Jo.log.bind(Jo)},Bt=function(...n){if(Tv===!0&&(Tv=!1,Ml===null&&N1.get("logging_enabled")===!0&&D1()),Ml){const e=fu.apply(null,n);Ml(e)}},pu=function(n){return function(...e){Bt(n,...e)}},Np=function(...n){const e="FIREBASE INTERNAL ERROR: "+fu(...n);Jo.error(e)},ri=function(...n){const e=`FIREBASE FATAL ERROR: ${fu(...n)}`;throw Jo.error(e),new Error(e)},an=function(...n){const e="FIREBASE WARNING: "+fu(...n);Jo.warn(e)},b1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cm=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},O1=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},la="[MIN_NAME]",Gs="[MAX_NAME]",Xs=function(n,e){if(n===e)return 0;if(n===la||e===Gs)return-1;if(e===la||n===Gs)return 1;{const t=Iv(n),r=Iv(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},L1=function(n,e){return n===e?0:n<e?-1:1},Sl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Pt(e))},Rm=function(n){if(typeof n!="object"||n===null)return Pt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Pt(e[r]),t+=":",t+=Rm(n[e[r]]);return t+="}",t},Xw=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let o=0;o<t;o+=e)o+e>t?r.push(n.substring(o,t)):r.push(n.substring(o,o+e));return r};function $t(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Jw=function(n){X(!Cm(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let o,a,u,d,p;n===0?(a=0,u=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const _=[];for(p=t;p;p-=1)_.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)_.push(a%2?1:0),a=Math.floor(a/2);_.push(o?1:0),_.reverse();const v=_.join("");let w="";for(p=0;p<64;p+=8){let I=parseInt(v.substr(p,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},M1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},V1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function F1(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const U1=new RegExp("^-?(0*)\\d{1,10}$"),j1=-2147483648,z1=2147483647,Iv=function(n){if(U1.test(n)){const e=Number(n);if(e>=j1&&e<=z1)return e}return null},Ia=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw an("Exception was thrown by user callback.",t),e},Math.floor(0))}},B1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vl=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $1{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Cn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(e)}}class th{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}th.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="5",Zw="v",eT="s",tT="r",nT="f",rT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iT="ls",sT="p",xp="ac",oT="websocket",aT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,r,o,a=!1,u="",d=!1,p=!1,_=null){this.secure=t,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function W1(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function uT(n,e,t){X(typeof e=="string","typeof type must == string"),X(typeof t=="object","typeof params must == object");let r;if(e===oT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===aT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W1(n)&&(t.ns=n.namespace);const o=[];return $t(t,(a,u)=>{o.push(a+"="+u)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this.counters_={}}incrementCounter(e,t=1){Pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp={},ip={};function km(n){const e=n.toString();return rp[e]||(rp[e]=new q1),rp[e]}function G1(n,e){const t=n.toString();return ip[t]||(ip[t]=e()),ip[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&Ia(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="start",Q1="close",Y1="pLPCommand",X1="pRTLPCB",cT="id",hT="pw",dT="ser",J1="cb",Z1="seg",ek="ts",tk="d",nk="dframe",fT=1870,pT=30,rk=fT-pT,ik=25e3,sk=3e4;class Ko{constructor(e,t,r,o,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pu(e),this.stats_=km(t),this.urlFn=p=>(this.appCheckToken&&(p[xp]=this.appCheckToken),uT(t,aT,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new K1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sk)),O1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pm((...a)=>{const[u,d,p,_,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Sv)this.id=d,this.password=p;else if(u===Q1)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sv]="t",r[dT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[J1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Zw]=Am,this.transportSessionId&&(r[eT]=this.transportSessionId),this.lastSessionId&&(r[iT]=this.lastSessionId),this.applicationId&&(r[sT]=this.applicationId),this.appCheckToken&&(r[xp]=this.appCheckToken),typeof location<"u"&&location.hostname&&rT.test(location.hostname)&&(r[tT]=nT);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ko.forceAllow_=!0}static forceDisallow(){Ko.forceDisallow_=!0}static isAvailable(){return Ko.forceAllow_?!0:!Ko.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!M1()&&!V1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=ow(t),o=Xw(r,rk);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[nk]="t",r[cT]=e,r[hT]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pm{constructor(e,t,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x1(),window[Y1+this.uniqueCallbackIdentifier]=e,window[X1+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pm.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Bt("frame writing exception"),d.stack&&Bt(d.stack),Bt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cT]=this.myID,e[hT]=this.myPW,e[dT]=this.currentSerial;let t=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pT+r.length<=fT;){const u=this.pendingSegs.shift();r=r+"&"+Z1+o+"="+u.seg+"&"+ek+o+"="+u.ts+"&"+tk+o+"="+u.d,o++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(r,Math.floor(ik)),a=()=>{clearTimeout(o),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=16384,ak=45e3;let yh=null;typeof MozWebSocket<"u"?yh=MozWebSocket:typeof WebSocket<"u"&&(yh=WebSocket);class Kn{constructor(e,t,r,o,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pu(this.connId),this.stats_=km(t),this.connURL=Kn.connectionURL_(t,u,d,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,o,a){const u={};return u[Zw]=Am,typeof location<"u"&&location.hostname&&rT.test(location.hostname)&&(u[tT]=nT),t&&(u[eT]=t),r&&(u[iT]=r),o&&(u[xp]=o),a&&(u[sT]=a),uT(e,oT,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zs.set("previous_websocket_failure",!0);try{let r;iC(),this.mySock=new yh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yh!==null&&!Kn.forceDisallow_}static previouslyFailed(){return zs.isInMemoryStorage||zs.get("previous_websocket_failure")===!0}markConnectionHealthy(){zs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Wl(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Xw(t,ok);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ak))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{static get ALL_TRANSPORTS(){return[Ko,Kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Kn&&Kn.isAvailable();let r=t&&!Kn.previouslyFailed();if(e.webSocketOnly&&(t||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kn];else{const o=this.transports_=[];for(const a of Kl.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);Kl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=6e4,uk=5e3,ck=10*1024,hk=100*1024,sp="t",Cv="d",dk="s",Rv="r",fk="e",Av="o",kv="a",Pv="n",Nv="p",pk="h";class mk{constructor(e,t,r,o,a,u,d,p,_,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=p,this.onKill_=_,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pu("c:"+this.id+":"),this.transportManager_=new Kl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Vl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ck?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sp in e){const t=e[sp];t===kv?this.upgradeIfSecondaryHealthy_():t===Rv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Av&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Sl("t",e),r=Sl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:kv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Sl("t",e),r=Sl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Sl(sp,e);if(Cv in e){const r=e[Cv];if(t===pk){const o={...r};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===Pv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===dk?this.onConnectionShutdown_(r):t===Rv?this.onReset_(r):t===fk?Np("Server Error: "+r):t===Av?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Np("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Am!==r&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Vl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{put(e,t,r,o){}merge(e,t,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const o=this.getInitialEvent(e);o&&t.apply(r,o)}off(e,t,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!r||r===o[a].context)){o.splice(a,1);return}}validateEventType_(e){X(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends gT{static getInstance(){return new vh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=32,Dv=768;class Ye{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $e(){return new Ye("")}function ke(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ts(n){return n.pieces_.length-n.pieceNum_}function nt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ye(n.pieces_,e)}function Nm(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function gk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ql(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function _T(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ye(e,0)}function ft(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&t.push(r[o])}return new Ye(t,0)}function xe(n){return n.pieceNum_>=n.pieces_.length}function on(n,e){const t=ke(n),r=ke(e);if(t===null)return e;if(t===r)return on(nt(n),nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function _k(n,e){const t=Ql(n,0),r=Ql(e,0);for(let o=0;o<t.length&&o<r.length;o++){const a=Xs(t[o],r[o]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function xm(n,e){if(ts(n)!==ts(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function On(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(ts(n)>ts(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class yk{constructor(e,t){this.errorPrefix_=t,this.parts_=Ql(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wh(this.parts_[r]);yT(this)}}function vk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Wh(e),yT(n)}function Ek(n){const e=n.parts_.pop();n.byteLength_-=Wh(e),n.parts_.length>0&&(n.byteLength_-=1)}function yT(n){if(n.byteLength_>Dv)throw new Error(n.errorPrefix_+"has a key path longer than "+Dv+" bytes ("+n.byteLength_+").");if(n.parts_.length>xv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xv+") or object contains a cycle "+Us(n))}function Us(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm extends gT{static getInstance(){return new Dm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=1e3,wk=300*1e3,bv=30*1e3,Tk=1.3,Ik=3e4,Sk="server_kill",Ov=3;class Zr extends mT{constructor(e,t,r,o,a,u,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Zr.nextPersistentConnectionId_++,this.log_=pu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cl,this.maxReconnectDelay_=wk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_(Pt(a)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const t=new au,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,o){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+r+" for "+o);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const p=d.d,_=d.s;Zr.warnOnListenWarnings_(p,t),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",d),_!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(_,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Pr(e,"w")){const r=oa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=hC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,o=>{const a=o.s,u=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,t)}sendUnlisten_(e,t,r,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";o&&(a.q=r,a.t=o),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,o){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,t,r,o){this.putInternal("p",e,t,r,o)}merge(e,t,r,o){this.putInternal("m",e,t,r,o)}putInternal(e,t,r,o,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Np("Unrecognized action received from server: "+Pt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ik&&(this.reconnectDelay_=Cl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Tk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Zr.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const p=function(){d?d.close():(u=!0,r())},_=function(w){X(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:p,sendRequest:_};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?Bt("getToken() completed but was canceled"):(Bt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,d=new mk(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,b=>{an(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sk)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&an(w),p())}}}interrupt(e){Bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wp(this.interruptReasons_)&&(this.reconnectDelay_=Cl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Rm(a)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const r=new Ye(e).toString();let o;if(this.listens.has(r)){const a=this.listens.get(r);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,t){Bt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ov&&(this.reconnectDelay_=bv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Bt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ov&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Kw.replace(/\./g,"-")]=1,fm()?e["framework.cordova"]=1:hw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vh.getInstance().currentlyOnline();return wp(this.interruptReasons_)&&e}}Zr.nextPersistentConnectionId_=0;Zr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Pe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Pe(la,e),o=new Pe(la,t);return this.compare(r,o)!==0}minPost(){return Pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;class vT extends Xh{static get __EMPTY_NODE(){return Bc}static set __EMPTY_NODE(e){Bc=e}compare(e,t){return Xs(e.name,t.name)}isDefinedOn(e){throw Ea("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Gs,Bc)}makePost(e,t){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Bc)}toString(){return".key"}}const Zo=new vT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c=class{constructor(e,t,r,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Sn=class Nl{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Nl.RED,this.left=o??wr.EMPTY_NODE,this.right=a??wr.EMPTY_NODE}copy(e,t,r,o,a){return new Nl(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return wr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,o;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return wr.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Nl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Nl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Sn.RED=!0;Sn.BLACK=!1;class Ck{copy(e,t,r,o,a){return this}insert(e,t,r){return new Sn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let wr=class nh{constructor(e,t=nh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Sn.BLACK,null,null))}remove(e){return new nh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Sn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,o=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $c(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $c(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $c(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $c(this.root_,null,this.comparator_,!0,e)}};wr.EMPTY_NODE=new Ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n,e){return Xs(n.name,e.name)}function bm(n,e){return Xs(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp;function Ak(n){Dp=n}const ET=function(n){return typeof n=="number"?"number:"+Jw(n):"string:"+n},wT=function(n){if(n.isLeafNode()){const e=n.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pr(e,".sv"),"Priority must be a string or number.")}else X(n===Dp||n.isEmpty(),"priority of unexpected type.");X(n===Dp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lv;class Lt{static set __childrenNodeConstructor(e){Lv=e}static get __childrenNodeConstructor(){return Lv}constructor(e,t=Lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:ke(e)===".priority"?this.priorityNode_:Lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=ke(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(X(r!==".priority"||ts(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(nt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ET(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Jw(this.value_):e+=this.value_,this.lazyHash_=Yw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Lt.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,o=Lt.VALUE_TYPE_ORDER.indexOf(t),a=Lt.VALUE_TYPE_ORDER.indexOf(r);return X(o>=0,"Unknown leaf type: "+t),X(a>=0,"Unknown leaf type: "+r),o===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TT,IT;function kk(n){TT=n}function Pk(n){IT=n}class Nk extends Xh{compare(e,t){const r=e.node.getPriority(),o=t.node.getPriority(),a=r.compareTo(o);return a===0?Xs(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Gs,new Lt("[PRIORITY-POST]",IT))}makePost(e,t){const r=TT(e);return new Pe(t,new Lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const pt=new Nk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=Math.log(2);class Dk{constructor(e){const t=a=>parseInt(Math.log(a)/xk,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Eh=function(n,e,t,r){n.sort(e);const o=function(p,_){const v=_-p;let w,I;if(v===0)return null;if(v===1)return w=n[p],I=t?t(w):w,new Sn(I,w.node,Sn.BLACK,null,null);{const b=parseInt(v/2,10)+p,$=o(p,b),H=o(b+1,_);return w=n[b],I=t?t(w):w,new Sn(I,w.node,Sn.BLACK,$,H)}},a=function(p){let _=null,v=null,w=n.length;const I=function($,H){const B=w-$,oe=w;w-=$;const ue=o(B+1,oe),ce=n[B],fe=t?t(ce):ce;b(new Sn(fe,ce.node,H,null,ue))},b=function($){_?(_.left=$,_=$):(v=$,_=$)};for(let $=0;$<p.count;++$){const H=p.nextBitIsOne(),B=Math.pow(2,p.count-($+1));H?I(B,Sn.BLACK):(I(B,Sn.BLACK),I(B,Sn.RED))}return v},u=new Dk(n.length),d=a(u);return new wr(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let op;const $o={};class Jr{static get Default(){return X($o&&pt,"ChildrenNode.ts has not been loaded"),op=op||new Jr({".priority":$o},{".priority":pt}),op}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=oa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wr?t:null}hasIndex(e){return Pr(this.indexSet_,e.toString())}addIndex(e,t){X(e!==Zo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const a=t.getIterator(Pe.Wrap);let u=a.getNext();for(;u;)o=o||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;o?d=Eh(r,e.getCompare()):d=$o;const p=e.toString(),_={...this.indexSet_};_[p]=e;const v={...this.indexes_};return v[p]=d,new Jr(v,_)}addToIndexes(e,t){const r=ch(this.indexes_,(o,a)=>{const u=oa(this.indexSet_,a);if(X(u,"Missing index implementation for "+a),o===$o)if(u.isDefinedOn(e.node)){const d=[],p=t.getIterator(Pe.Wrap);let _=p.getNext();for(;_;)_.name!==e.name&&d.push(_),_=p.getNext();return d.push(e),Eh(d,u.getCompare())}else return $o;else{const d=t.get(e.name);let p=o;return d&&(p=p.remove(new Pe(e.name,d))),p.insert(e,e.node)}});return new Jr(r,this.indexSet_)}removeFromIndexes(e,t){const r=ch(this.indexes_,o=>{if(o===$o)return o;{const a=t.get(e.name);return a?o.remove(new Pe(e.name,a)):o}});return new Jr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class ge{static get EMPTY_NODE(){return Rl||(Rl=new ge(new wr(bm),null,Jr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&wT(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rl}updatePriority(e){return this.children_.isEmpty()?this:new ge(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Rl:t}}getChild(e){const t=ke(e);return t===null?this:this.getImmediateChild(t).getChild(nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(X(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Pe(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=o.isEmpty()?Rl:this.priorityNode_;return new ge(o,u,a)}}updateChild(e,t){const r=ke(e);if(r===null)return t;{X(ke(e)!==".priority"||ts(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(nt(e),t);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,o=0,a=!0;if(this.forEachChild(pt,(u,d)=>{t[u]=d.val(e),r++,a&&ge.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):a=!1}),!e&&a&&o<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ET(this.getPriority().val())+":"),this.forEachChild(pt,(t,r)=>{const o=r.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":Yw(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const o=this.resolveIndex_(r);if(o){const a=o.getPredecessorKey(new Pe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,Pe.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mu?-1:0}withIndex(e){if(e===Zo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ge(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(pt),o=t.getIterator(pt);let a=r.getNext(),u=o.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=o.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Zo?null:this.indexMap_.get(e.toString())}}ge.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bk extends ge{constructor(){super(new wr(bm),ge.EMPTY_NODE,Jr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ge.EMPTY_NODE}isEmpty(){return!1}}const mu=new bk;Object.defineProperties(Pe,{MIN:{value:new Pe(la,ge.EMPTY_NODE)},MAX:{value:new Pe(Gs,mu)}});vT.__EMPTY_NODE=ge.EMPTY_NODE;Lt.__childrenNodeConstructor=ge;Ak(mu);Pk(mu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=!0;function kt(n,e=null){if(n===null)return ge.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Lt(t,kt(e))}if(!(n instanceof Array)&&Ok){const t=[];let r=!1;if($t(n,(u,d)=>{if(u.substring(0,1)!=="."){const p=kt(d);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),t.push(new Pe(u,p)))}}),t.length===0)return ge.EMPTY_NODE;const a=Eh(t,Rk,u=>u.name,bm);if(r){const u=Eh(t,pt.getCompare());return new ge(a,kt(e),new Jr({".priority":u},{".priority":pt}))}else return new ge(a,kt(e),Jr.Default)}else{let t=ge.EMPTY_NODE;return $t(n,(r,o)=>{if(Pr(n,r)&&r.substring(0,1)!=="."){const a=kt(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(kt(e))}}kk(kt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk extends Xh{constructor(e){super(),this.indexPath_=e,X(!xe(e)&&ke(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),o=this.extractChild(t.node),a=r.compareTo(o);return a===0?Xs(e.name,t.name):a}makePost(e,t){const r=kt(e),o=ge.EMPTY_NODE.updateChild(this.indexPath_,r);return new Pe(t,o)}maxPost(){const e=ge.EMPTY_NODE.updateChild(this.indexPath_,mu);return new Pe(Gs,e)}toString(){return Ql(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk extends Xh{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Xs(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,t){const r=kt(e);return new Pe(t,r)}toString(){return".value"}}const Vk=new Mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n){return{type:"value",snapshotNode:n}}function ua(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Yl(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Xl(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Fk(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.index_=e}updateChild(e,t,r,o,a,u){X(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(o).equals(r.getChild(o))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Yl(t,d)):X(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(ua(t,r)):u.trackChildChange(Xl(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(pt,(o,a)=>{t.hasChild(o)||r.trackChildChange(Yl(o,a))}),t.isLeafNode()||t.forEachChild(pt,(o,a)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(a)||r.trackChildChange(Xl(o,a,u))}else r.trackChildChange(ua(o,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ge.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.indexedFilter_=new Om(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jl.getStartPost_(e),this.endPost_=Jl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,o,a,u){return this.matches(new Pe(t,r))||(r=ge.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,o,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ge.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(ge.EMPTY_NODE);const a=this;return t.forEachChild(pt,(u,d)=>{a.matches(new Pe(u,d))||(o=o.updateImmediateChild(u,ge.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Jl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,o,a,u){return this.rangedFilter_.matches(new Pe(t,r))||(r=ge.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,o,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let o;if(t.isLeafNode()||t.isEmpty())o=ge.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=ge.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(ge.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:o=o.updateImmediateChild(d.name,ge.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,o,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(I,b)=>w(b,I)}else u=this.index_.getCompare();const d=e;X(d.numChildren()===this.limit_,"");const p=new Pe(t,r),_=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const w=d.getImmediateChild(t);let I=o.getChildAfterChild(this.index_,_,this.reverse_);for(;I!=null&&(I.name===t||d.hasChild(I.name));)I=o.getChildAfterChild(this.index_,I,this.reverse_);const b=I==null?1:u(I,p);if(v&&!r.isEmpty()&&b>=0)return a!=null&&a.trackChildChange(Xl(t,r,w)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Yl(t,w));const H=d.updateImmediateChild(t,ge.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(a!=null&&a.trackChildChange(ua(I.name,I.node)),H.updateImmediateChild(I.name,I.node)):H}}else return r.isEmpty()?e:v&&u(_,p)>=0?(a!=null&&(a.trackChildChange(Yl(_.name,_.node)),a.trackChildChange(ua(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(_.name,ge.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:la}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new Lm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jk(n){return n.loadsAllData()?new Om(n.getIndex()):n.hasLimit()?new Uk(n):new Jl(n)}function Mv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===pt?t="$priority":n.index_===Vk?t="$value":n.index_===Zo?t="$key":(X(n.index_ instanceof Lk,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Pt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Pt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Pt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Pt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Pt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Vv(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==pt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends mT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=pu("p:rest:"),this.listens_={}}listen(e,t,r,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=wh.getListenId_(e,r),d={};this.listens_[u]=d;const p=Mv(e._queryParams);this.restRequest_(a+".json",p,(_,v)=>{let w=v;if(_===404&&(w=null,_=null),_===null&&this.onDataUpdate_(a,w,!1,r),oa(this.listens_,u)===d){let I;_?_===401?I="permission_denied":I="rest_error:"+_:I="ok",o(I,null)}})}unlisten(e,t){const r=wh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Mv(e._queryParams),r=e._path.toString(),o=new au;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wa(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Wl(d.responseText)}catch{an("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,p)}else d.status!==401&&d.status!==404&&an("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.rootNode_=ge.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return{value:null,children:new Map}}function CT(n,e,t){if(xe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=ke(e);n.children.has(r)||n.children.set(r,Th());const o=n.children.get(r);e=nt(e),CT(o,e,t)}}function bp(n,e,t){n.value!==null?t(e,n.value):Bk(n,(r,o)=>{const a=new Ye(e.toString()+"/"+r);bp(o,a,t)})}function Bk(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&$t(this.last_,(r,o)=>{t[r]=t[r]-o}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=10*1e3,Hk=30*1e3,Wk=300*1e3;class qk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $k(e);const r=Fv+(Hk-Fv)*Math.random();Vl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;$t(e,(o,a)=>{a>0&&Pr(this.statsToReport_,o)&&(t[o]=a,r=!0)}),r&&this.server_.reportStats(t),Vl(this.reportStats_.bind(this),Math.floor(Math.random()*2*Wk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));function Mm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Yn.ACK_USER_WRITE,this.source=Mm()}operationForChild(e){if(xe(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ye(e));return new Ih($e(),t,this.revert)}}else return X(ke(this.path)===e,"operationForChild called for unrelated child."),new Ih(nt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){this.source=e,this.path=t,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return xe(this.path)?new Zl(this.source,$e()):new Zl(this.source,nt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Yn.OVERWRITE}operationForChild(e){return xe(this.path)?new Ks(this.source,$e(),this.snap.getImmediateChild(e)):new Ks(this.source,nt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Yn.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new Ye(e));return t.isEmpty()?null:t.value?new Ks(this.source,$e(),t.value):new ca(this.source,$e(),t)}else return X(ke(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ca(this.source,nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ke(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kk(n,e,t,r){const o=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(Fk(u.childName,u.snapshotNode))}),Al(n,o,"child_removed",e,r,t),Al(n,o,"child_added",e,r,t),Al(n,o,"child_moved",a,r,t),Al(n,o,"child_changed",e,r,t),Al(n,o,"value",e,r,t),o}function Al(n,e,t,r,o,a){const u=r.filter(d=>d.type===t);u.sort((d,p)=>Yk(n,d,p)),u.forEach(d=>{const p=Qk(n,d,a);o.forEach(_=>{_.respondsTo(d.type)&&e.push(_.createEvent(p,n.query_))})})}function Qk(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Yk(n,e,t){if(e.childName==null||t.childName==null)throw Ea("Should only compare child_ events.");const r=new Pe(e.childName,e.snapshotNode),o=new Pe(t.childName,t.snapshotNode);return n.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n,e){return{eventCache:n,serverCache:e}}function Fl(n,e,t,r){return Jh(new ns(e,t,r),n.serverCache)}function RT(n,e,t,r){return Jh(n.eventCache,new ns(e,t,r))}function Sh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Qs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap;const Xk=()=>(ap||(ap=new wr(L1)),ap);class tt{static fromObject(e){let t=new tt(null);return $t(e,(r,o)=>{t=t.set(new Ye(r),o)}),t}constructor(e,t=Xk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$e(),value:this.value};if(xe(e))return null;{const r=ke(e),o=this.children.get(r);if(o!==null){const a=o.findRootMostMatchingPathAndValue(nt(e),t);return a!=null?{path:ft(new Ye(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(xe(e))return this;{const t=ke(e),r=this.children.get(t);return r!==null?r.subtree(nt(e)):new tt(null)}}set(e,t){if(xe(e))return new tt(t,this.children);{const r=ke(e),a=(this.children.get(r)||new tt(null)).set(nt(e),t),u=this.children.insert(r,a);return new tt(this.value,u)}}remove(e){if(xe(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const t=ke(e),r=this.children.get(t);if(r){const o=r.remove(nt(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new tt(null):new tt(this.value,a)}else return this}}get(e){if(xe(e))return this.value;{const t=ke(e),r=this.children.get(t);return r?r.get(nt(e)):null}}setTree(e,t){if(xe(e))return t;{const r=ke(e),a=(this.children.get(r)||new tt(null)).setTree(nt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new tt(this.value,u)}}fold(e){return this.fold_($e(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((o,a)=>{r[o]=a.fold_(ft(e,o),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,$e(),t)}findOnPath_(e,t,r){const o=this.value?r(t,this.value):!1;if(o)return o;if(xe(e))return null;{const a=ke(e),u=this.children.get(a);return u?u.findOnPath_(nt(e),ft(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$e(),t)}foreachOnPath_(e,t,r){if(xe(e))return this;{this.value&&r(t,this.value);const o=ke(e),a=this.children.get(o);return a?a.foreachOnPath_(nt(e),ft(t,o),r):new tt(null)}}foreach(e){this.foreach_($e(),e)}foreach_(e,t){this.children.inorderTraversal((r,o)=>{o.foreach_(ft(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new tt(null))}}function Ul(n,e,t){if(xe(e))return new Zn(new tt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let a=r.value;const u=on(o,e);return a=a.updateChild(u,t),new Zn(n.writeTree_.set(o,a))}else{const o=new tt(t),a=n.writeTree_.setTree(e,o);return new Zn(a)}}}function Op(n,e,t){let r=n;return $t(t,(o,a)=>{r=Ul(r,ft(e,o),a)}),r}function Uv(n,e){if(xe(e))return Zn.empty();{const t=n.writeTree_.setTree(e,new tt(null));return new Zn(t)}}function Lp(n,e){return Js(n,e)!=null}function Js(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(on(t.path,e)):null}function jv(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pt,(r,o)=>{e.push(new Pe(r,o))}):n.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new Pe(r,o.value))}),e}function Ki(n,e){if(xe(e))return n;{const t=Js(n,e);return t!=null?new Zn(new tt(t)):new Zn(n.writeTree_.subtree(e))}}function Mp(n){return n.writeTree_.isEmpty()}function ha(n,e){return AT($e(),n.writeTree_,e)}function AT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(X(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=AT(ft(n,o),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(ft(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n,e){return xT(e,n)}function Jk(n,e,t,r,o){X(r>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:o}),o&&(n.visibleWrites=Ul(n.visibleWrites,e,t)),n.lastWriteId=r}function Zk(n,e,t,r){X(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Op(n.visibleWrites,e,t),n.lastWriteId=r}function eP(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function tP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);X(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let o=r.visible,a=!1,u=n.allWrites.length-1;for(;o&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&nP(d,r.path)?o=!1:On(r.path,d.path)&&(a=!0)),u--}if(o){if(a)return rP(n),!0;if(r.snap)n.visibleWrites=Uv(n.visibleWrites,r.path);else{const d=r.children;$t(d,p=>{n.visibleWrites=Uv(n.visibleWrites,ft(r.path,p))})}return!0}else return!1}function nP(n,e){if(n.snap)return On(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&On(ft(n.path,t),e))return!0;return!1}function rP(n){n.visibleWrites=kT(n.allWrites,iP,$e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function iP(n){return n.visible}function kT(n,e,t){let r=Zn.empty();for(let o=0;o<n.length;++o){const a=n[o];if(e(a)){const u=a.path;let d;if(a.snap)On(t,u)?(d=on(t,u),r=Ul(r,d,a.snap)):On(u,t)&&(d=on(u,t),r=Ul(r,$e(),a.snap.getChild(d)));else if(a.children){if(On(t,u))d=on(t,u),r=Op(r,d,a.children);else if(On(u,t))if(d=on(u,t),xe(d))r=Op(r,$e(),a.children);else{const p=oa(a.children,ke(d));if(p){const _=p.getChild(nt(d));r=Ul(r,$e(),_)}}}else throw Ea("WriteRecord should have .snap or .children")}}return r}function PT(n,e,t,r,o){if(!r&&!o){const a=Js(n.visibleWrites,e);if(a!=null)return a;{const u=Ki(n.visibleWrites,e);if(Mp(u))return t;if(t==null&&!Lp(u,$e()))return null;{const d=t||ge.EMPTY_NODE;return ha(u,d)}}}else{const a=Ki(n.visibleWrites,e);if(!o&&Mp(a))return t;if(!o&&t==null&&!Lp(a,$e()))return null;{const u=function(_){return(_.visible||o)&&(!r||!~r.indexOf(_.writeId))&&(On(_.path,e)||On(e,_.path))},d=kT(n.allWrites,u,e),p=t||ge.EMPTY_NODE;return ha(d,p)}}}function sP(n,e,t){let r=ge.EMPTY_NODE;const o=Js(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(pt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Ki(n.visibleWrites,e);return t.forEachChild(pt,(u,d)=>{const p=ha(Ki(a,new Ye(u)),d);r=r.updateImmediateChild(u,p)}),jv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Ki(n.visibleWrites,e);return jv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function oP(n,e,t,r,o){X(r||o,"Either existingEventSnap or existingServerSnap must exist");const a=ft(e,t);if(Lp(n.visibleWrites,a))return null;{const u=Ki(n.visibleWrites,a);return Mp(u)?o.getChild(t):ha(u,o.getChild(t))}}function aP(n,e,t,r){const o=ft(e,t),a=Js(n.visibleWrites,o);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Ki(n.visibleWrites,o);return ha(u,r.getNode().getImmediateChild(t))}else return null}function lP(n,e){return Js(n.visibleWrites,e)}function uP(n,e,t,r,o,a,u){let d;const p=Ki(n.visibleWrites,e),_=Js(p,$e());if(_!=null)d=_;else if(t!=null)d=ha(p,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],w=u.getCompare(),I=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let b=I.getNext();for(;b&&v.length<o;)w(b,r)!==0&&v.push(b),b=I.getNext();return v}else return[]}function cP(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function Ch(n,e,t,r){return PT(n.writeTree,n.treePath,e,t,r)}function Um(n,e){return sP(n.writeTree,n.treePath,e)}function zv(n,e,t,r){return oP(n.writeTree,n.treePath,e,t,r)}function Rh(n,e){return lP(n.writeTree,ft(n.treePath,e))}function hP(n,e,t,r,o,a){return uP(n.writeTree,n.treePath,e,t,r,o,a)}function jm(n,e,t){return aP(n.writeTree,n.treePath,e,t)}function NT(n,e){return xT(ft(n.treePath,e),n.writeTree)}function xT(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;X(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),X(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Xl(r,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Yl(r,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,ua(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Xl(r,e.snapshotNode,o.oldSnap));else throw Ea("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const DT=new fP;class zm{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ns(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jm(this.writes_,e,r)}}getChildAfterChild(e,t,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qs(this.viewCache_),a=hP(this.writes_,o,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(n){return{filter:n}}function mP(n,e){X(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function gP(n,e,t,r,o){const a=new dP;let u,d;if(t.type===Yn.OVERWRITE){const _=t;_.source.fromUser?u=Vp(n,e,_.path,_.snap,r,o,a):(X(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered()&&!xe(_.path),u=Ah(n,e,_.path,_.snap,r,o,d,a))}else if(t.type===Yn.MERGE){const _=t;_.source.fromUser?u=yP(n,e,_.path,_.children,r,o,a):(X(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered(),u=Fp(n,e,_.path,_.children,r,o,d,a))}else if(t.type===Yn.ACK_USER_WRITE){const _=t;_.revert?u=wP(n,e,_.path,r,o,a):u=vP(n,e,_.path,_.affectedTree,r,o,a)}else if(t.type===Yn.LISTEN_COMPLETE)u=EP(n,e,t.path,r,a);else throw Ea("Unknown operation type: "+t.type);const p=a.getChanges();return _P(e,u,p),{viewCache:u,changes:p}}function _P(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Sh(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(ST(Sh(e)))}}function bT(n,e,t,r,o,a){const u=e.eventCache;if(Rh(r,t)!=null)return e;{let d,p;if(xe(t))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=Qs(e),v=_ instanceof ge?_:ge.EMPTY_NODE,w=Um(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const _=Ch(r,Qs(e));d=n.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const _=ke(t);if(_===".priority"){X(ts(t)===1,"Can't have a priority with additional path components");const v=u.getNode();p=e.serverCache.getNode();const w=zv(r,t,v,p);w!=null?d=n.filter.updatePriority(v,w):d=u.getNode()}else{const v=nt(t);let w;if(u.isCompleteForChild(_)){p=e.serverCache.getNode();const I=zv(r,t,u.getNode(),p);I!=null?w=u.getNode().getImmediateChild(_).updateChild(v,I):w=u.getNode().getImmediateChild(_)}else w=jm(r,_,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),_,w,v,o,a):d=u.getNode()}}return Fl(e,d,u.isFullyInitialized()||xe(t),n.filter.filtersNodes())}}function Ah(n,e,t,r,o,a,u,d){const p=e.serverCache;let _;const v=u?n.filter:n.filter.getIndexedFilter();if(xe(t))_=v.updateFullNode(p.getNode(),r,null);else if(v.filtersNodes()&&!p.isFiltered()){const b=p.getNode().updateChild(t,r);_=v.updateFullNode(p.getNode(),b,null)}else{const b=ke(t);if(!p.isCompleteForPath(t)&&ts(t)>1)return e;const $=nt(t),B=p.getNode().getImmediateChild(b).updateChild($,r);b===".priority"?_=v.updatePriority(p.getNode(),B):_=v.updateChild(p.getNode(),b,B,$,DT,null)}const w=RT(e,_,p.isFullyInitialized()||xe(t),v.filtersNodes()),I=new zm(o,w,a);return bT(n,w,t,o,I,d)}function Vp(n,e,t,r,o,a,u){const d=e.eventCache;let p,_;const v=new zm(o,e,a);if(xe(t))_=n.filter.updateFullNode(e.eventCache.getNode(),r,u),p=Fl(e,_,!0,n.filter.filtersNodes());else{const w=ke(t);if(w===".priority")_=n.filter.updatePriority(e.eventCache.getNode(),r),p=Fl(e,_,d.isFullyInitialized(),d.isFiltered());else{const I=nt(t),b=d.getNode().getImmediateChild(w);let $;if(xe(I))$=r;else{const H=v.getCompleteChild(w);H!=null?Nm(I)===".priority"&&H.getChild(_T(I)).isEmpty()?$=H:$=H.updateChild(I,r):$=ge.EMPTY_NODE}if(b.equals($))p=e;else{const H=n.filter.updateChild(d.getNode(),w,$,I,v,u);p=Fl(e,H,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Bv(n,e){return n.eventCache.isCompleteForChild(e)}function yP(n,e,t,r,o,a,u){let d=e;return r.foreach((p,_)=>{const v=ft(t,p);Bv(e,ke(v))&&(d=Vp(n,d,v,_,o,a,u))}),r.foreach((p,_)=>{const v=ft(t,p);Bv(e,ke(v))||(d=Vp(n,d,v,_,o,a,u))}),d}function $v(n,e,t){return t.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function Fp(n,e,t,r,o,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,_;xe(t)?_=r:_=new tt(null).setTree(t,r);const v=e.serverCache.getNode();return _.children.inorderTraversal((w,I)=>{if(v.hasChild(w)){const b=e.serverCache.getNode().getImmediateChild(w),$=$v(n,b,I);p=Ah(n,p,new Ye(w),$,o,a,u,d)}}),_.children.inorderTraversal((w,I)=>{const b=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!v.hasChild(w)&&!b){const $=e.serverCache.getNode().getImmediateChild(w),H=$v(n,$,I);p=Ah(n,p,new Ye(w),H,o,a,u,d)}}),p}function vP(n,e,t,r,o,a,u){if(Rh(o,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(r.value!=null){if(xe(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Ah(n,e,t,p.getNode().getChild(t),o,a,d,u);if(xe(t)){let _=new tt(null);return p.getNode().forEachChild(Zo,(v,w)=>{_=_.set(new Ye(v),w)}),Fp(n,e,t,_,o,a,d,u)}else return e}else{let _=new tt(null);return r.foreach((v,w)=>{const I=ft(t,v);p.isCompleteForPath(I)&&(_=_.set(v,p.getNode().getChild(I)))}),Fp(n,e,t,_,o,a,d,u)}}function EP(n,e,t,r,o){const a=e.serverCache,u=RT(e,a.getNode(),a.isFullyInitialized()||xe(t),a.isFiltered());return bT(n,u,t,r,DT,o)}function wP(n,e,t,r,o,a){let u;if(Rh(r,t)!=null)return e;{const d=new zm(r,e,o),p=e.eventCache.getNode();let _;if(xe(t)||ke(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Ch(r,Qs(e));else{const w=e.serverCache.getNode();X(w instanceof ge,"serverChildren would be complete if leaf node"),v=Um(r,w)}v=v,_=n.filter.updateFullNode(p,v,a)}else{const v=ke(t);let w=jm(r,v,e.serverCache);w==null&&e.serverCache.isCompleteForChild(v)&&(w=p.getImmediateChild(v)),w!=null?_=n.filter.updateChild(p,v,w,nt(t),d,a):e.eventCache.getNode().hasChild(v)?_=n.filter.updateChild(p,v,ge.EMPTY_NODE,nt(t),d,a):_=p,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Ch(r,Qs(e)),u.isLeafNode()&&(_=n.filter.updateFullNode(_,u,a)))}return u=e.serverCache.isFullyInitialized()||Rh(r,$e())!=null,Fl(e,_,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new Om(r.getIndex()),a=jk(r);this.processor_=pP(a);const u=t.serverCache,d=t.eventCache,p=o.updateFullNode(ge.EMPTY_NODE,u.getNode(),null),_=a.updateFullNode(ge.EMPTY_NODE,d.getNode(),null),v=new ns(p,u.isFullyInitialized(),o.filtersNodes()),w=new ns(_,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=Jh(w,v),this.eventGenerator_=new Gk(this.query_)}get query(){return this.query_}}function IP(n){return n.viewCache_.serverCache.getNode()}function SP(n){return Sh(n.viewCache_)}function CP(n,e){const t=Qs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!xe(e)&&!t.getImmediateChild(ke(e)).isEmpty())?t.getChild(e):null}function Hv(n){return n.eventRegistrations_.length===0}function RP(n,e){n.eventRegistrations_.push(e)}function Wv(n,e,t){const r=[];if(t){X(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,o);u&&r.push(u)})}if(e){let o=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return r}function qv(n,e,t,r){e.type===Yn.MERGE&&e.source.queryId!==null&&(X(Qs(n.viewCache_),"We should always have a full cache before handling merges"),X(Sh(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,a=gP(n.processor_,o,e,t,r);return mP(n.processor_,a.viewCache),X(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,OT(n,a.changes,a.viewCache.eventCache.getNode(),null)}function AP(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(pt,(a,u)=>{r.push(ua(a,u))}),t.isFullyInitialized()&&r.push(ST(t.getNode())),OT(n,r,t.getNode(),e)}function OT(n,e,t,r){const o=r?[r]:n.eventRegistrations_;return Kk(n.eventGenerator_,e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh;class LT{constructor(){this.views=new Map}}function kP(n){X(!kh,"__referenceConstructor has already been defined"),kh=n}function PP(){return X(kh,"Reference.ts has not been loaded"),kh}function NP(n){return n.views.size===0}function Bm(n,e,t,r){const o=e.source.queryId;if(o!==null){const a=n.views.get(o);return X(a!=null,"SyncTree gave us an op for an invalid query."),qv(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(qv(u,e,t,r));return a}}function MT(n,e,t,r,o){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Ch(t,o?r:null),p=!1;d?p=!0:r instanceof ge?(d=Um(t,r),p=!1):(d=ge.EMPTY_NODE,p=!1);const _=Jh(new ns(d,p,!1),new ns(r,o,!1));return new TP(e,_)}return u}function xP(n,e,t,r,o,a){const u=MT(n,e,r,o,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),RP(u,t),AP(u,t)}function DP(n,e,t,r){const o=e._queryIdentifier,a=[];let u=[];const d=rs(n);if(o==="default")for(const[p,_]of n.views.entries())u=u.concat(Wv(_,t,r)),Hv(_)&&(n.views.delete(p),_.query._queryParams.loadsAllData()||a.push(_.query));else{const p=n.views.get(o);p&&(u=u.concat(Wv(p,t,r)),Hv(p)&&(n.views.delete(o),p.query._queryParams.loadsAllData()||a.push(p.query)))}return d&&!rs(n)&&a.push(new(PP())(e._repo,e._path)),{removed:a,events:u}}function VT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Qi(n,e){let t=null;for(const r of n.views.values())t=t||CP(r,e);return t}function FT(n,e){if(e._queryParams.loadsAllData())return ed(n);{const r=e._queryIdentifier;return n.views.get(r)}}function UT(n,e){return FT(n,e)!=null}function rs(n){return ed(n)!=null}function ed(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;function bP(n){X(!Ph,"__referenceConstructor has already been defined"),Ph=n}function OP(){return X(Ph,"Reference.ts has not been loaded"),Ph}let LP=1;class Gv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=cP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jT(n,e,t,r,o){return Jk(n.pendingWriteTree_,e,t,r,o),o?Sa(n,new Ks(Mm(),e,t)):[]}function MP(n,e,t,r){Zk(n.pendingWriteTree_,e,t,r);const o=tt.fromObject(t);return Sa(n,new ca(Mm(),e,o))}function $i(n,e,t=!1){const r=eP(n.pendingWriteTree_,e);if(tP(n.pendingWriteTree_,e)){let a=new tt(null);return r.snap!=null?a=a.set($e(),!0):$t(r.children,u=>{a=a.set(new Ye(u),!0)}),Sa(n,new Ih(r.path,a,t))}else return[]}function gu(n,e,t){return Sa(n,new Ks(Vm(),e,t))}function VP(n,e,t){const r=tt.fromObject(t);return Sa(n,new ca(Vm(),e,r))}function FP(n,e){return Sa(n,new Zl(Vm(),e))}function UP(n,e,t){const r=Hm(n,t);if(r){const o=Wm(r),a=o.path,u=o.queryId,d=on(a,e),p=new Zl(Fm(u),d);return qm(n,a,p)}else return[]}function Nh(n,e,t,r,o=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||UT(u,e))){const p=DP(u,e,t,r);NP(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const _=p.removed;if(d=p.events,!o){const v=_.findIndex(I=>I._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(I,b)=>rs(b));if(v&&!w){const I=n.syncPointTree_.subtree(a);if(!I.isEmpty()){const b=BP(I);for(let $=0;$<b.length;++$){const H=b[$],B=H.query,oe=HT(n,H);n.listenProvider_.startListening(jl(B),eu(n,B),oe.hashFn,oe.onComplete)}}}!w&&_.length>0&&!r&&(v?n.listenProvider_.stopListening(jl(e),null):_.forEach(I=>{const b=n.queryToTagMap.get(td(I));n.listenProvider_.stopListening(jl(I),b)}))}$P(n,_)}return d}function zT(n,e,t,r){const o=Hm(n,r);if(o!=null){const a=Wm(o),u=a.path,d=a.queryId,p=on(u,e),_=new Ks(Fm(d),p,t);return qm(n,u,_)}else return[]}function jP(n,e,t,r){const o=Hm(n,r);if(o){const a=Wm(o),u=a.path,d=a.queryId,p=on(u,e),_=tt.fromObject(t),v=new ca(Fm(d),p,_);return qm(n,u,v)}else return[]}function Up(n,e,t,r=!1){const o=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(o,(I,b)=>{const $=on(I,o);a=a||Qi(b,$),u=u||rs(b)});let d=n.syncPointTree_.get(o);d?(u=u||rs(d),a=a||Qi(d,$e())):(d=new LT,n.syncPointTree_=n.syncPointTree_.set(o,d));let p;a!=null?p=!0:(p=!1,a=ge.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((b,$)=>{const H=Qi($,$e());H&&(a=a.updateImmediateChild(b,H))}));const _=UT(d,e);if(!_&&!e._queryParams.loadsAllData()){const I=td(e);X(!n.queryToTagMap.has(I),"View does not exist, but we have a tag");const b=HP();n.queryToTagMap.set(I,b),n.tagToQueryMap.set(b,I)}const v=Zh(n.pendingWriteTree_,o);let w=xP(d,e,t,v,a,p);if(!_&&!u&&!r){const I=FT(d,e);w=w.concat(WP(n,e,I))}return w}function $m(n,e,t){const o=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const p=on(u,e),_=Qi(d,p);if(_)return _});return PT(o,e,a,t,!0)}function zP(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(_,v)=>{const w=on(_,t);r=r||Qi(v,w)});let o=n.syncPointTree_.get(t);o?r=r||Qi(o,$e()):(o=new LT,n.syncPointTree_=n.syncPointTree_.set(t,o));const a=r!=null,u=a?new ns(r,!0,!1):null,d=Zh(n.pendingWriteTree_,e._path),p=MT(o,e,d,a?u.getNode():ge.EMPTY_NODE,a);return SP(p)}function Sa(n,e){return BT(e,n.syncPointTree_,null,Zh(n.pendingWriteTree_,$e()))}function BT(n,e,t,r){if(xe(n.path))return $T(n,e,t,r);{const o=e.get($e());t==null&&o!=null&&(t=Qi(o,$e()));let a=[];const u=ke(n.path),d=n.operationForChild(u),p=e.children.get(u);if(p&&d){const _=t?t.getImmediateChild(u):null,v=NT(r,u);a=a.concat(BT(d,p,_,v))}return o&&(a=a.concat(Bm(o,n,r,t))),a}}function $T(n,e,t,r){const o=e.get($e());t==null&&o!=null&&(t=Qi(o,$e()));let a=[];return e.children.inorderTraversal((u,d)=>{const p=t?t.getImmediateChild(u):null,_=NT(r,u),v=n.operationForChild(u);v&&(a=a.concat($T(v,d,p,_)))}),o&&(a=a.concat(Bm(o,n,r,t))),a}function HT(n,e){const t=e.query,r=eu(n,t);return{hashFn:()=>(IP(e)||ge.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?UP(n,t._path,r):FP(n,t._path);{const a=F1(o,t);return Nh(n,t,null,a)}}}}function eu(n,e){const t=td(e);return n.queryToTagMap.get(t)}function td(n){return n._path.toString()+"$"+n._queryIdentifier}function Hm(n,e){return n.tagToQueryMap.get(e)}function Wm(n){const e=n.indexOf("$");return X(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ye(n.substr(0,e))}}function qm(n,e,t){const r=n.syncPointTree_.get(e);X(r,"Missing sync point for query tag that we're tracking");const o=Zh(n.pendingWriteTree_,e);return Bm(r,t,o,null)}function BP(n){return n.fold((e,t,r)=>{if(t&&rs(t))return[ed(t)];{let o=[];return t&&(o=VT(t)),$t(r,(a,u)=>{o=o.concat(u)}),o}})}function jl(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(OP())(n._repo,n._path):n}function $P(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const o=td(r),a=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(a)}}}function HP(){return LP++}function WP(n,e,t){const r=e._path,o=eu(n,e),a=HT(n,t),u=n.listenProvider_.startListening(jl(e),o,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(o)X(!rs(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((_,v,w)=>{if(!xe(_)&&v&&rs(v))return[ed(v).query];{let I=[];return v&&(I=I.concat(VT(v).map(b=>b.query))),$t(w,(b,$)=>{I=I.concat($)}),I}});for(let _=0;_<p.length;++_){const v=p[_];n.listenProvider_.stopListening(jl(v),eu(n,v))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Gm(t)}node(){return this.node_}}class Km{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ft(this.path_,e);return new Km(this.syncTree_,t)}node(){return $m(this.syncTree_,this.path_)}}const qP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Kv=function(n,e,t){if(!n||typeof n!="object")return n;if(X(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return GP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return KP(n[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},GP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:X(!1,"Unexpected server value: "+n)}},KP=function(n,e,t){n.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&X(!1,"Unexpected increment value: "+r);const o=e.node();if(X(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const u=o.getValue();return typeof u!="number"?r:u+r},WT=function(n,e,t,r){return Qm(e,new Km(t,n),r)},qT=function(n,e,t){return Qm(n,new Gm(e),t)};function Qm(n,e,t){const r=n.getPriority().val(),o=Kv(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=Kv(u.getValue(),e,t);return d!==u.getValue()||o!==u.getPriority().val()?new Lt(d,kt(o)):n}else{const u=n;return a=u,o!==u.getPriority().val()&&(a=a.updatePriority(new Lt(o))),u.forEachChild(pt,(d,p)=>{const _=Qm(p,e.getImmediateChild(d),t);_!==p&&(a=a.updateImmediateChild(d,_))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Xm(n,e){let t=e instanceof Ye?e:new Ye(e),r=n,o=ke(t);for(;o!==null;){const a=oa(r.node.children,o)||{children:{},childCount:0};r=new Ym(o,r,a),t=nt(t),o=ke(t)}return r}function Ca(n){return n.node.value}function GT(n,e){n.node.value=e,jp(n)}function KT(n){return n.node.childCount>0}function QP(n){return Ca(n)===void 0&&!KT(n)}function nd(n,e){$t(n.node.children,(t,r)=>{e(new Ym(t,n,r))})}function QT(n,e,t,r){t&&e(n),nd(n,o=>{QT(o,e,!0)})}function YP(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _u(n){return new Ye(n.parent===null?n.name:_u(n.parent)+"/"+n.name)}function jp(n){n.parent!==null&&XP(n.parent,n.name,n)}function XP(n,e,t){const r=QP(t),o=Pr(n.node.children,e);r&&o?(delete n.node.children[e],n.node.childCount--,jp(n)):!r&&!o&&(n.node.children[e]=t.node,n.node.childCount++,jp(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=/[\[\].#$\/\u0000-\u001F\u007F]/,ZP=/[\[\].#$\u0000-\u001F\u007F]/,lp=10*1024*1024,Jm=function(n){return typeof n=="string"&&n.length!==0&&!JP.test(n)},YT=function(n){return typeof n=="string"&&n.length!==0&&!ZP.test(n)},eN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),YT(n)},tN=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Cm(n)||n&&typeof n=="object"&&Pr(n,".sv")},XT=function(n,e,t,r){r&&e===void 0||rd(Hh(n,"value"),e,t)},rd=function(n,e,t){const r=t instanceof Ye?new yk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Us(r));if(typeof e=="function")throw new Error(n+"contains a function "+Us(r)+" with contents = "+e.toString());if(Cm(e))throw new Error(n+"contains "+e.toString()+" "+Us(r));if(typeof e=="string"&&e.length>lp/3&&Wh(e)>lp)throw new Error(n+"contains a string greater than "+lp+" utf8 bytes "+Us(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if($t(e,(u,d)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!Jm(u)))throw new Error(n+" contains an invalid key ("+u+") "+Us(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vk(r,u),rd(n,d,r),Ek(r)}),o&&a)throw new Error(n+' contains ".value" child '+Us(r)+" in addition to actual children.")}},nN=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Ql(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!Jm(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_k);let o=null;for(t=0;t<e.length;t++){if(r=e[t],o!==null&&On(o,r))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},rN=function(n,e,t,r){const o=Hh(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const a=[];$t(e,(u,d)=>{const p=new Ye(u);if(rd(o,d,ft(t,p)),Nm(p)===".priority"&&!tN(d))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),nN(o,a)},JT=function(n,e,t,r){if(!YT(t))throw new Error(Hh(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iN=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),JT(n,e,t)},ZT=function(n,e){if(ke(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},sN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!eN(t))throw new Error(Hh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function id(n,e){let t=null;for(let r=0;r<e.length;r++){const o=e[r],a=o.getPath();t!==null&&!xm(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&n.eventLists_.push(t)}function eI(n,e,t){id(n,t),tI(n,r=>xm(r,e))}function Vn(n,e,t){id(n,t),tI(n,r=>On(r,e)||On(e,r))}function tI(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const o=n.eventLists_[r];if(o){const a=o.path;e(a)?(aN(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function aN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Ml&&Bt("event: "+t.toString()),Ia(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="repo_interrupt",uN=25;class cN{constructor(e,t,r,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Th(),this.transactionQueueTree_=new Ym,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hN(n,e,t){if(n.stats_=km(n.repoInfo_),n.forceRestClient_||B1())n.server_=new wh(n.repoInfo_,(r,o,a,u)=>{Qv(n,r,o,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Yv(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Zr(n.repoInfo_,e,(r,o,a,u)=>{Qv(n,r,o,a,u)},r=>{Yv(n,r)},r=>{dN(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=G1(n.repoInfo_,()=>new qk(n.stats_,n.server_)),n.infoData_=new zk,n.infoSyncTree_=new Gv({startListening:(r,o,a,u)=>{let d=[];const p=n.infoData_.getNode(r._path);return p.isEmpty()||(d=gu(n.infoSyncTree_,r._path,p),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),Zm(n,"connected",!1),n.serverSyncTree_=new Gv({startListening:(r,o,a,u)=>(n.server_.listen(r,a,o,(d,p)=>{const _=u(d,p);Vn(n.eventQueue_,r._path,_)}),[]),stopListening:(r,o)=>{n.server_.unlisten(r,o)}})}function nI(n){const t=n.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function sd(n){return qP({timestamp:nI(n)})}function Qv(n,e,t,r,o){n.dataUpdateCount++;const a=new Ye(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(o)if(r){const p=ch(t,_=>kt(_));u=jP(n.serverSyncTree_,a,p,o)}else{const p=kt(t);u=zT(n.serverSyncTree_,a,p,o)}else if(r){const p=ch(t,_=>kt(_));u=VP(n.serverSyncTree_,a,p)}else{const p=kt(t);u=gu(n.serverSyncTree_,a,p)}let d=a;u.length>0&&(d=da(n,a)),Vn(n.eventQueue_,d,u)}function Yv(n,e){Zm(n,"connected",e),e===!1&&gN(n)}function dN(n,e){$t(e,(t,r)=>{Zm(n,t,r)})}function Zm(n,e,t){const r=new Ye("/.info/"+e),o=kt(t);n.infoData_.updateSnapshot(r,o);const a=gu(n.infoSyncTree_,r,o);Vn(n.eventQueue_,r,a)}function eg(n){return n.nextWriteId_++}function fN(n,e,t){const r=zP(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(o=>{const a=kt(o).withIndex(e._queryParams.getIndex());Up(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=gu(n.serverSyncTree_,e._path,a);else{const d=eu(n.serverSyncTree_,e);u=zT(n.serverSyncTree_,e._path,a,d)}return Vn(n.eventQueue_,e._path,u),Nh(n.serverSyncTree_,e,t,null,!0),a},o=>(yu(n,"get for query "+Pt(e)+" failed: "+o),Promise.reject(new Error(o))))}function pN(n,e,t,r,o){yu(n,"set",{path:e.toString(),value:t,priority:r});const a=sd(n),u=kt(t,r),d=$m(n.serverSyncTree_,e),p=qT(u,d,a),_=eg(n),v=jT(n.serverSyncTree_,e,p,_,!0);id(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(I,b)=>{const $=I==="ok";$||an("set at "+e+" failed: "+I);const H=$i(n.serverSyncTree_,_,!$);Vn(n.eventQueue_,e,H),zp(n,o,I,b)});const w=ng(n,e);da(n,w),Vn(n.eventQueue_,w,[])}function mN(n,e,t,r){yu(n,"update",{path:e.toString(),value:t});let o=!0;const a=sd(n),u={};if($t(t,(d,p)=>{o=!1,u[d]=WT(ft(e,d),kt(p),n.serverSyncTree_,a)}),o)Bt("update() called with empty data.  Don't do anything."),zp(n,r,"ok",void 0);else{const d=eg(n),p=MP(n.serverSyncTree_,e,u,d);id(n.eventQueue_,p),n.server_.merge(e.toString(),t,(_,v)=>{const w=_==="ok";w||an("update at "+e+" failed: "+_);const I=$i(n.serverSyncTree_,d,!w),b=I.length>0?da(n,e):e;Vn(n.eventQueue_,b,I),zp(n,r,_,v)}),$t(t,_=>{const v=ng(n,ft(e,_));da(n,v)}),Vn(n.eventQueue_,e,[])}}function gN(n){yu(n,"onDisconnectEvents");const e=sd(n),t=Th();bp(n.onDisconnect_,$e(),(o,a)=>{const u=WT(o,a,n.serverSyncTree_,e);CT(t,o,u)});let r=[];bp(t,$e(),(o,a)=>{r=r.concat(gu(n.serverSyncTree_,o,a));const u=ng(n,o);da(n,u)}),n.onDisconnect_=Th(),Vn(n.eventQueue_,$e(),r)}function _N(n,e,t){let r;ke(e._path)===".info"?r=Up(n.infoSyncTree_,e,t):r=Up(n.serverSyncTree_,e,t),eI(n.eventQueue_,e._path,r)}function yN(n,e,t){let r;ke(e._path)===".info"?r=Nh(n.infoSyncTree_,e,t):r=Nh(n.serverSyncTree_,e,t),eI(n.eventQueue_,e._path,r)}function vN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(lN)}function yu(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Bt(t,...e)}function zp(n,e,t,r){e&&Ia(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let a=o;r&&(a+=": "+r);const u=new Error(a);u.code=o,e(u)}})}function rI(n,e,t){return $m(n.serverSyncTree_,e,t)||ge.EMPTY_NODE}function tg(n,e=n.transactionQueueTree_){if(e||od(n,e),Ca(e)){const t=sI(n,e);X(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&EN(n,_u(e),t)}else KT(e)&&nd(e,t=>{tg(n,t)})}function EN(n,e,t){const r=t.map(_=>_.currentWriteId),o=rI(n,e,r);let a=o;const u=o.hash();for(let _=0;_<t.length;_++){const v=t[_];X(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const w=on(e,v.path);a=a.updateChild(w,v.currentOutputSnapshotRaw)}const d=a.val(!0),p=e;n.server_.put(p.toString(),d,_=>{yu(n,"transaction put response",{path:p.toString(),status:_});let v=[];if(_==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,v=v.concat($i(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();od(n,Xm(n.transactionQueueTree_,e)),tg(n,n.transactionQueueTree_),Vn(n.eventQueue_,e,v);for(let I=0;I<w.length;I++)Ia(w[I])}else{if(_==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{an("transaction at "+p.toString()+" failed: "+_);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=_}da(n,e)}},u)}function da(n,e){const t=iI(n,e),r=_u(t),o=sI(n,t);return wN(n,o,r),r}function wN(n,e,t){if(e.length===0)return;const r=[];let o=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],_=on(t,p.path);let v=!1,w;if(X(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,w=p.abortReason,o=o.concat($i(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=uN)v=!0,w="maxretry",o=o.concat($i(n.serverSyncTree_,p.currentWriteId,!0));else{const I=rI(n,p.path,u);p.currentInputSnapshot=I;const b=e[d].update(I.val());if(b!==void 0){rd("transaction failed: Data returned ",b,p.path);let $=kt(b);typeof b=="object"&&b!=null&&Pr(b,".priority")||($=$.updatePriority(I.getPriority()));const B=p.currentWriteId,oe=sd(n),ue=qT($,I,oe);p.currentOutputSnapshotRaw=$,p.currentOutputSnapshotResolved=ue,p.currentWriteId=eg(n),u.splice(u.indexOf(B),1),o=o.concat(jT(n.serverSyncTree_,p.path,ue,p.currentWriteId,p.applyLocally)),o=o.concat($i(n.serverSyncTree_,B,!0))}else v=!0,w="nodata",o=o.concat($i(n.serverSyncTree_,p.currentWriteId,!0))}Vn(n.eventQueue_,t,o),o=[],v&&(e[d].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}od(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Ia(r[d]);tg(n,n.transactionQueueTree_)}function iI(n,e){let t,r=n.transactionQueueTree_;for(t=ke(e);t!==null&&Ca(r)===void 0;)r=Xm(r,t),e=nt(e),t=ke(e);return r}function sI(n,e){const t=[];return oI(n,e,t),t.sort((r,o)=>r.order-o.order),t}function oI(n,e,t){const r=Ca(e);if(r)for(let o=0;o<r.length;o++)t.push(r[o]);nd(e,o=>{oI(n,o,t)})}function od(n,e){const t=Ca(e);if(t){let r=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[r]=t[o],r++);t.length=r,GT(e,t.length>0?t:void 0)}nd(e,r=>{od(n,r)})}function ng(n,e){const t=_u(iI(n,e)),r=Xm(n.transactionQueueTree_,e);return YP(r,o=>{up(n,o)}),up(n,r),QT(r,o=>{up(n,o)}),t}function up(n,e){const t=Ca(e);if(t){const r=[];let o=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(X(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(X(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),o=o.concat($i(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?GT(e,void 0):t.length=a+1,Vn(n.eventQueue_,_u(e),o);for(let u=0;u<r.length;u++)Ia(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let o=t[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function IN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):an(`Invalid query segment '${t}' in query '${n}'`)}return e}const Xv=function(n,e){const t=SN(n),r=t.namespace;t.domain==="firebase.com"&&ri(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ri("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||b1();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lT(t.host,t.secure,r,o,e,"",r!==t.subdomain),path:new Ye(t.pathString)}},SN=function(n){let e="",t="",r="",o="",a="",u=!0,d="https",p=443;if(typeof n=="string"){let _=n.indexOf("//");_>=0&&(d=n.substring(0,_-1),n=n.substring(_+2));let v=n.indexOf("/");v===-1&&(v=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(v,w)),v<w&&(o=TN(n.substring(v,w)));const I=IN(n.substring(Math.min(n.length,w)));_=e.indexOf(":"),_>=0?(u=d==="https"||d==="wss",p=parseInt(e.substring(_+1),10)):_=e.length;const b=e.slice(0,_);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const $=e.indexOf(".");r=e.substring(0,$).toLowerCase(),t=e.substring($+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:p,domain:t,subdomain:r,secure:u,scheme:d,pathString:o,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",CN=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let o;const a=new Array(8);for(o=7;o>=0;o--)a[o]=Jv.charAt(t%64),t=Math.floor(t/64);X(t===0,"Cannot push at time == 0");let u=a.join("");if(r){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=Jv.charAt(e[o]);return X(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,t,r,o){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pt(this.snapshot.exportVal())}}class AN{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return X(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class rg{constructor(e,t,r,o){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=o}get key(){return xe(this._path)?null:Nm(this._path)}get ref(){return new oi(this._repo,this._path)}get _queryIdentifier(){const e=Vv(this._queryParams),t=Rm(e);return t==="{}"?"default":t}get _queryObject(){return Vv(this._queryParams)}isEqual(e){if(e=Wt(e),!(e instanceof rg))return!1;const t=this._repo===e._repo,r=xm(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+gk(this._path)}}class oi extends rg{constructor(e,t){super(e,t,new Lm,!1)}get parent(){const e=_T(this._path);return e===null?null:new oi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class tu{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ye(e),r=nu(this.ref,e);return new tu(this._node.getChild(t),r,pt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>e(new tu(o,nu(this.ref,r),pt)))}hasChild(e){const t=new Ye(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bi(n,e){return n=Wt(n),n._checkNotDeleted("ref"),e!==void 0?nu(n._root,e):n._root}function nu(n,e){return n=Wt(n),ke(n._path)===null?iN("child","path",e):JT("child","path",e),new oi(n._repo,ft(n._path,e))}function kN(n,e){n=Wt(n),ZT("push",n._path),XT("push",e,n._path,!0);const t=nI(n._repo),r=CN(t),o=nu(n,r),a=nu(n,r);let u;return u=Promise.resolve(a),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function PN(n,e){n=Wt(n),ZT("set",n._path),XT("set",e,n._path,!1);const t=new au;return pN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function NN(n,e){rN("update",e,n._path);const t=new au;return mN(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function xh(n){n=Wt(n);const e=new aI(()=>{}),t=new ad(e);return fN(n._repo,n,t).then(r=>new tu(r,new oi(n._repo,n._path),n._queryParams.getIndex()))}class ad{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new RN("value",this,new tu(e.snapshotNode,new oi(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new AN(this,e,t):null}matches(e){return e instanceof ad?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function xN(n,e,t,r,o){const a=new aI(t,void 0),u=new ad(a);return _N(n._repo,n,u),()=>yN(n._repo,n,u)}function DN(n,e,t,r){return xN(n,"value",e)}kP(oi);bP(oi);/**
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
 */const bN="FIREBASE_DATABASE_EMULATOR_HOST",Bp={};let ON=!1;function LN(n,e,t,r){const o=e.lastIndexOf(":"),a=e.substring(0,o),u=si(a);n.repoInfo_=new lT(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function MN(n,e,t,r,o){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ri("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=Xv(a,o),d=u.repoInfo,p;typeof process<"u"&&vv&&(p=vv[bN]),p?(a=`http://${p}?ns=${d.namespace}`,u=Xv(a,o),d=u.repoInfo):u.repoInfo.secure;const _=new H1(n.name,n.options,e);sN("Invalid Firebase Database URL",u),xe(u.path)||ri("Database URL must point to the root of a Firebase Database (not including a child path).");const v=FN(d,n,_,new $1(n,t));return new UN(v,n)}function VN(n,e){const t=Bp[e];(!t||t[n.key]!==n)&&ri(`Database ${e}(${n.repoInfo_}) has already been deleted.`),vN(n),delete t[n.key]}function FN(n,e,t,r){let o=Bp[e.name];o||(o={},Bp[e.name]=o);let a=o[n.toURLString()];return a&&ri("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new cN(n,ON,t,r),o[n.toURLString()]=a,a}class UN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new oi(this._repo,$e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(VN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ri("Cannot call "+e+" on a deleted database.")}}function ea(n=Gh(),e){const t=uu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=hm("database");r&&jN(t,...r)}return t}function jN(n,e,t,r={}){n=Wt(n),n._checkNotDeleted("useEmulator");const o=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(o===n._repoInternal.repoInfo_.host&&Zi(r,a.repoInfo_.emulatorOptions))return;ri("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ri('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new th(th.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:dm(r.mockUserToken,n.app.options.projectId);u=new th(d)}si(e)&&(Bh(e),$h("Database",!0)),LN(a,o,r,u)}/**
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
 */function zN(n){A1(cs),es(new ei("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return MN(r,o,a,t)},"PUBLIC").setMultipleInstances(!0)),Mn(Ev,wv,n),Mn(Ev,wv,"esm2020")}Zr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Zr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};zN();var BN="firebase",$N="12.4.0";/**
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
 */Mn(BN,$N,"app");var Zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yi,lI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,C){function R(){}R.prototype=C.prototype,x.F=C.prototype,x.prototype=new R,x.prototype.constructor=x,x.D=function(P,k,O){for(var A=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)A[Re-2]=arguments[Re];return C.prototype[k].apply(P,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,C,R){R||(R=0);const P=Array(16);if(typeof C=="string")for(var k=0;k<16;++k)P[k]=C.charCodeAt(R++)|C.charCodeAt(R++)<<8|C.charCodeAt(R++)<<16|C.charCodeAt(R++)<<24;else for(k=0;k<16;++k)P[k]=C[R++]|C[R++]<<8|C[R++]<<16|C[R++]<<24;C=x.g[0],R=x.g[1],k=x.g[2];let O=x.g[3],A;A=C+(O^R&(k^O))+P[0]+3614090360&4294967295,C=R+(A<<7&4294967295|A>>>25),A=O+(k^C&(R^k))+P[1]+3905402710&4294967295,O=C+(A<<12&4294967295|A>>>20),A=k+(R^O&(C^R))+P[2]+606105819&4294967295,k=O+(A<<17&4294967295|A>>>15),A=R+(C^k&(O^C))+P[3]+3250441966&4294967295,R=k+(A<<22&4294967295|A>>>10),A=C+(O^R&(k^O))+P[4]+4118548399&4294967295,C=R+(A<<7&4294967295|A>>>25),A=O+(k^C&(R^k))+P[5]+1200080426&4294967295,O=C+(A<<12&4294967295|A>>>20),A=k+(R^O&(C^R))+P[6]+2821735955&4294967295,k=O+(A<<17&4294967295|A>>>15),A=R+(C^k&(O^C))+P[7]+4249261313&4294967295,R=k+(A<<22&4294967295|A>>>10),A=C+(O^R&(k^O))+P[8]+1770035416&4294967295,C=R+(A<<7&4294967295|A>>>25),A=O+(k^C&(R^k))+P[9]+2336552879&4294967295,O=C+(A<<12&4294967295|A>>>20),A=k+(R^O&(C^R))+P[10]+4294925233&4294967295,k=O+(A<<17&4294967295|A>>>15),A=R+(C^k&(O^C))+P[11]+2304563134&4294967295,R=k+(A<<22&4294967295|A>>>10),A=C+(O^R&(k^O))+P[12]+1804603682&4294967295,C=R+(A<<7&4294967295|A>>>25),A=O+(k^C&(R^k))+P[13]+4254626195&4294967295,O=C+(A<<12&4294967295|A>>>20),A=k+(R^O&(C^R))+P[14]+2792965006&4294967295,k=O+(A<<17&4294967295|A>>>15),A=R+(C^k&(O^C))+P[15]+1236535329&4294967295,R=k+(A<<22&4294967295|A>>>10),A=C+(k^O&(R^k))+P[1]+4129170786&4294967295,C=R+(A<<5&4294967295|A>>>27),A=O+(R^k&(C^R))+P[6]+3225465664&4294967295,O=C+(A<<9&4294967295|A>>>23),A=k+(C^R&(O^C))+P[11]+643717713&4294967295,k=O+(A<<14&4294967295|A>>>18),A=R+(O^C&(k^O))+P[0]+3921069994&4294967295,R=k+(A<<20&4294967295|A>>>12),A=C+(k^O&(R^k))+P[5]+3593408605&4294967295,C=R+(A<<5&4294967295|A>>>27),A=O+(R^k&(C^R))+P[10]+38016083&4294967295,O=C+(A<<9&4294967295|A>>>23),A=k+(C^R&(O^C))+P[15]+3634488961&4294967295,k=O+(A<<14&4294967295|A>>>18),A=R+(O^C&(k^O))+P[4]+3889429448&4294967295,R=k+(A<<20&4294967295|A>>>12),A=C+(k^O&(R^k))+P[9]+568446438&4294967295,C=R+(A<<5&4294967295|A>>>27),A=O+(R^k&(C^R))+P[14]+3275163606&4294967295,O=C+(A<<9&4294967295|A>>>23),A=k+(C^R&(O^C))+P[3]+4107603335&4294967295,k=O+(A<<14&4294967295|A>>>18),A=R+(O^C&(k^O))+P[8]+1163531501&4294967295,R=k+(A<<20&4294967295|A>>>12),A=C+(k^O&(R^k))+P[13]+2850285829&4294967295,C=R+(A<<5&4294967295|A>>>27),A=O+(R^k&(C^R))+P[2]+4243563512&4294967295,O=C+(A<<9&4294967295|A>>>23),A=k+(C^R&(O^C))+P[7]+1735328473&4294967295,k=O+(A<<14&4294967295|A>>>18),A=R+(O^C&(k^O))+P[12]+2368359562&4294967295,R=k+(A<<20&4294967295|A>>>12),A=C+(R^k^O)+P[5]+4294588738&4294967295,C=R+(A<<4&4294967295|A>>>28),A=O+(C^R^k)+P[8]+2272392833&4294967295,O=C+(A<<11&4294967295|A>>>21),A=k+(O^C^R)+P[11]+1839030562&4294967295,k=O+(A<<16&4294967295|A>>>16),A=R+(k^O^C)+P[14]+4259657740&4294967295,R=k+(A<<23&4294967295|A>>>9),A=C+(R^k^O)+P[1]+2763975236&4294967295,C=R+(A<<4&4294967295|A>>>28),A=O+(C^R^k)+P[4]+1272893353&4294967295,O=C+(A<<11&4294967295|A>>>21),A=k+(O^C^R)+P[7]+4139469664&4294967295,k=O+(A<<16&4294967295|A>>>16),A=R+(k^O^C)+P[10]+3200236656&4294967295,R=k+(A<<23&4294967295|A>>>9),A=C+(R^k^O)+P[13]+681279174&4294967295,C=R+(A<<4&4294967295|A>>>28),A=O+(C^R^k)+P[0]+3936430074&4294967295,O=C+(A<<11&4294967295|A>>>21),A=k+(O^C^R)+P[3]+3572445317&4294967295,k=O+(A<<16&4294967295|A>>>16),A=R+(k^O^C)+P[6]+76029189&4294967295,R=k+(A<<23&4294967295|A>>>9),A=C+(R^k^O)+P[9]+3654602809&4294967295,C=R+(A<<4&4294967295|A>>>28),A=O+(C^R^k)+P[12]+3873151461&4294967295,O=C+(A<<11&4294967295|A>>>21),A=k+(O^C^R)+P[15]+530742520&4294967295,k=O+(A<<16&4294967295|A>>>16),A=R+(k^O^C)+P[2]+3299628645&4294967295,R=k+(A<<23&4294967295|A>>>9),A=C+(k^(R|~O))+P[0]+4096336452&4294967295,C=R+(A<<6&4294967295|A>>>26),A=O+(R^(C|~k))+P[7]+1126891415&4294967295,O=C+(A<<10&4294967295|A>>>22),A=k+(C^(O|~R))+P[14]+2878612391&4294967295,k=O+(A<<15&4294967295|A>>>17),A=R+(O^(k|~C))+P[5]+4237533241&4294967295,R=k+(A<<21&4294967295|A>>>11),A=C+(k^(R|~O))+P[12]+1700485571&4294967295,C=R+(A<<6&4294967295|A>>>26),A=O+(R^(C|~k))+P[3]+2399980690&4294967295,O=C+(A<<10&4294967295|A>>>22),A=k+(C^(O|~R))+P[10]+4293915773&4294967295,k=O+(A<<15&4294967295|A>>>17),A=R+(O^(k|~C))+P[1]+2240044497&4294967295,R=k+(A<<21&4294967295|A>>>11),A=C+(k^(R|~O))+P[8]+1873313359&4294967295,C=R+(A<<6&4294967295|A>>>26),A=O+(R^(C|~k))+P[15]+4264355552&4294967295,O=C+(A<<10&4294967295|A>>>22),A=k+(C^(O|~R))+P[6]+2734768916&4294967295,k=O+(A<<15&4294967295|A>>>17),A=R+(O^(k|~C))+P[13]+1309151649&4294967295,R=k+(A<<21&4294967295|A>>>11),A=C+(k^(R|~O))+P[4]+4149444226&4294967295,C=R+(A<<6&4294967295|A>>>26),A=O+(R^(C|~k))+P[11]+3174756917&4294967295,O=C+(A<<10&4294967295|A>>>22),A=k+(C^(O|~R))+P[2]+718787259&4294967295,k=O+(A<<15&4294967295|A>>>17),A=R+(O^(k|~C))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+C&4294967295,x.g[1]=x.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+O&4294967295}r.prototype.v=function(x,C){C===void 0&&(C=x.length);const R=C-this.blockSize,P=this.C;let k=this.h,O=0;for(;O<C;){if(k==0)for(;O<=R;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<C;)if(P[k++]=x.charCodeAt(O++),k==this.blockSize){o(this,P),k=0;break}}else for(;O<C;)if(P[k++]=x[O++],k==this.blockSize){o(this,P),k=0;break}}this.h=k,this.o+=C},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var C=1;C<x.length-8;++C)x[C]=0;C=this.o*8;for(var R=x.length-8;R<x.length;++R)x[R]=C&255,C/=256;for(this.v(x),x=Array(16),C=0,R=0;R<4;++R)for(let P=0;P<32;P+=8)x[C++]=this.g[R]>>>P&255;return x};function a(x,C){var R=d;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=C(x)}function u(x,C){this.h=C;const R=[];let P=!0;for(let k=x.length-1;k>=0;k--){const O=x[k]|0;P&&O==C||(R[k]=O,P=!1)}this.g=R}var d={};function p(x){return-128<=x&&x<128?a(x,function(C){return new u([C|0],C<0?-1:0)}):new u([x|0],x<0?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return w;if(x<0)return B(_(-x));const C=[];let R=1;for(let P=0;x>=R;P++)C[P]=x/R|0,R*=4294967296;return new u(C,0)}function v(x,C){if(x.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(x.charAt(0)=="-")return B(v(x.substring(1),C));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(C,8));let P=w;for(let O=0;O<x.length;O+=8){var k=Math.min(8,x.length-O);const A=parseInt(x.substring(O,O+k),C);k<8?(k=_(Math.pow(C,k)),P=P.j(k).add(_(A))):(P=P.j(R),P=P.add(_(A)))}return P}var w=p(0),I=p(1),b=p(16777216);n=u.prototype,n.m=function(){if(H(this))return-B(this).m();let x=0,C=1;for(let R=0;R<this.g.length;R++){const P=this.i(R);x+=(P>=0?P:4294967296+P)*C,C*=4294967296}return x},n.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if($(this))return"0";if(H(this))return"-"+B(this).toString(x);const C=_(Math.pow(x,6));var R=this;let P="";for(;;){const k=fe(R,C).g;R=oe(R,k.j(C));let O=((R.g.length>0?R.g[0]:R.h)>>>0).toString(x);if(R=k,$(R))return O+P;for(;O.length<6;)O="0"+O;P=O+P}},n.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function $(x){if(x.h!=0)return!1;for(let C=0;C<x.g.length;C++)if(x.g[C]!=0)return!1;return!0}function H(x){return x.h==-1}n.l=function(x){return x=oe(this,x),H(x)?-1:$(x)?0:1};function B(x){const C=x.g.length,R=[];for(let P=0;P<C;P++)R[P]=~x.g[P];return new u(R,~x.h).add(I)}n.abs=function(){return H(this)?B(this):this},n.add=function(x){const C=Math.max(this.g.length,x.g.length),R=[];let P=0;for(let k=0;k<=C;k++){let O=P+(this.i(k)&65535)+(x.i(k)&65535),A=(O>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);P=A>>>16,O&=65535,A&=65535,R[k]=A<<16|O}return new u(R,R[R.length-1]&-2147483648?-1:0)};function oe(x,C){return x.add(B(C))}n.j=function(x){if($(this)||$(x))return w;if(H(this))return H(x)?B(this).j(B(x)):B(B(this).j(x));if(H(x))return B(this.j(B(x)));if(this.l(b)<0&&x.l(b)<0)return _(this.m()*x.m());const C=this.g.length+x.g.length,R=[];for(var P=0;P<2*C;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(let k=0;k<x.g.length;k++){const O=this.i(P)>>>16,A=this.i(P)&65535,Re=x.i(k)>>>16,Ze=x.i(k)&65535;R[2*P+2*k]+=A*Ze,ue(R,2*P+2*k),R[2*P+2*k+1]+=O*Ze,ue(R,2*P+2*k+1),R[2*P+2*k+1]+=A*Re,ue(R,2*P+2*k+1),R[2*P+2*k+2]+=O*Re,ue(R,2*P+2*k+2)}for(x=0;x<C;x++)R[x]=R[2*x+1]<<16|R[2*x];for(x=C;x<2*C;x++)R[x]=0;return new u(R,0)};function ue(x,C){for(;(x[C]&65535)!=x[C];)x[C+1]+=x[C]>>>16,x[C]&=65535,C++}function ce(x,C){this.g=x,this.h=C}function fe(x,C){if($(C))throw Error("division by zero");if($(x))return new ce(w,w);if(H(x))return C=fe(B(x),C),new ce(B(C.g),B(C.h));if(H(C))return C=fe(x,B(C)),new ce(B(C.g),C.h);if(x.g.length>30){if(H(x)||H(C))throw Error("slowDivide_ only works with positive integers.");for(var R=I,P=C;P.l(x)<=0;)R=Me(R),P=Me(P);var k=Te(R,1),O=Te(P,1);for(P=Te(P,2),R=Te(R,2);!$(P);){var A=O.add(P);A.l(x)<=0&&(k=k.add(R),O=A),P=Te(P,1),R=Te(R,1)}return C=oe(x,k.j(C)),new ce(k,C)}for(k=w;x.l(C)>=0;){for(R=Math.max(1,Math.floor(x.m()/C.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),O=_(R),A=O.j(C);H(A)||A.l(x)>0;)R-=P,O=_(R),A=O.j(C);$(O)&&(O=I),k=k.add(O),x=oe(x,A)}return new ce(k,x)}n.B=function(x){return fe(this,x).h},n.and=function(x){const C=Math.max(this.g.length,x.g.length),R=[];for(let P=0;P<C;P++)R[P]=this.i(P)&x.i(P);return new u(R,this.h&x.h)},n.or=function(x){const C=Math.max(this.g.length,x.g.length),R=[];for(let P=0;P<C;P++)R[P]=this.i(P)|x.i(P);return new u(R,this.h|x.h)},n.xor=function(x){const C=Math.max(this.g.length,x.g.length),R=[];for(let P=0;P<C;P++)R[P]=this.i(P)^x.i(P);return new u(R,this.h^x.h)};function Me(x){const C=x.g.length+1,R=[];for(let P=0;P<C;P++)R[P]=x.i(P)<<1|x.i(P-1)>>>31;return new u(R,x.h)}function Te(x,C){const R=C>>5;C%=32;const P=x.g.length-R,k=[];for(let O=0;O<P;O++)k[O]=C>0?x.i(O+R)>>>C|x.i(O+R+1)<<32-C:x.i(O+R);return new u(k,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,lI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=v,Yi=u}).apply(typeof Zv<"u"?Zv:typeof self<"u"?self:typeof window<"u"?window:{});var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uI,xl,cI,rh,$p,hI,dI,fI;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hc=="object"&&Hc];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,g){if(g)e:{var y=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var V=c[T];if(!(V in y))break e;y=y[V]}c=c[c.length-1],T=y[c],g=g(T),g!=T&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var y=[],T;for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&y.push([T,g[T]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function d(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,y){return c.call.apply(c.bind,arguments)}function _(c,g,y){return _=p,_.apply(null,arguments)}function v(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,g){function y(){}y.prototype=g.prototype,c.Z=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Ob=function(T,V,z){for(var J=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)J[Ee-2]=arguments[Ee];return g.prototype[V].apply(T,J)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function b(c){const g=c.length;if(g>0){const y=Array(g);for(let T=0;T<g;T++)y[T]=c[T];return y}return[]}function $(c,g){for(let T=1;T<arguments.length;T++){const V=arguments[T];var y=typeof V;if(y=y!="object"?y:V?Array.isArray(V)?"array":y:"null",y=="array"||y=="object"&&typeof V.length=="number"){y=c.length||0;const z=V.length||0;c.length=y+z;for(let J=0;J<z;J++)c[y+J]=V[J]}else c.push(V)}}class H{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function B(c){u.setTimeout(()=>{throw c},0)}function oe(){var c=x;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ue{constructor(){this.h=this.g=null}add(g,y){const T=ce.get();T.set(g,y),this.h?this.h.next=T:this.g=T,this.h=T}}var ce=new H(()=>new fe,c=>c.reset());class fe{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,Te=!1,x=new ue,C=()=>{const c=Promise.resolve(void 0);Me=()=>{c.then(R)}};function R(){for(var c;c=oe();){try{c.h.call(c.g)}catch(y){B(y)}var g=ce;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}Te=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};u.addEventListener("test",y,g),u.removeEventListener("test",y,g)}catch{}return c})();function A(c){return/^[\s\xa0]*$/.test(c)}function Re(c,g){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}w(Re,k),Re.prototype.init=function(c,g){const y=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ze="closure_listenable_"+(Math.random()*1e6|0),Ke=0;function He(c,g,y,T,V){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!T,this.ha=V,this.key=++Ke,this.da=this.fa=!1}function ee(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function he(c,g,y){for(const T in c)g.call(y,c[T],T,c)}function te(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function L(c){const g={};for(const y in c)g[y]=c[y];return g}const q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(c,g){let y,T;for(let V=1;V<arguments.length;V++){T=arguments[V];for(y in T)c[y]=T[y];for(let z=0;z<q.length;z++)y=q[z],Object.prototype.hasOwnProperty.call(T,y)&&(c[y]=T[y])}}function Ce(c){this.src=c,this.g={},this.h=0}Ce.prototype.add=function(c,g,y,T,V){const z=c.toString();c=this.g[z],c||(c=this.g[z]=[],this.h++);const J=be(c,g,T,V);return J>-1?(g=c[J],y||(g.fa=!1)):(g=new He(g,this.src,z,!!T,V),g.fa=y,c.push(g)),g};function De(c,g){const y=g.type;if(y in c.g){var T=c.g[y],V=Array.prototype.indexOf.call(T,g,void 0),z;(z=V>=0)&&Array.prototype.splice.call(T,V,1),z&&(ee(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function be(c,g,y,T){for(let V=0;V<c.length;++V){const z=c[V];if(!z.da&&z.listener==g&&z.capture==!!y&&z.ha==T)return V}return-1}var qe="closure_lm_"+(Math.random()*1e6|0),Ue={};function Xe(c,g,y,T,V){if(Array.isArray(g)){for(let z=0;z<g.length;z++)Xe(c,g[z],y,T,V);return null}return y=Na(y),c&&c[Ze]?c.J(g,y,d(T)?!!T.capture:!1,V):tn(c,g,y,!1,T,V)}function tn(c,g,y,T,V,z){if(!g)throw Error("Invalid event type");const J=d(V)?!!V.capture:!!V;let Ee=no(c);if(Ee||(c[qe]=Ee=new Ce(c)),y=Ee.add(g,y,T,J,z),y.proxy)return y;if(T=eo(),y.proxy=T,T.src=c,T.listener=y,c.addEventListener)O||(V=J),V===void 0&&(V=!1),c.addEventListener(g.toString(),T,V);else if(c.attachEvent)c.attachEvent(to(g.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function eo(){function c(y){return g.call(c.src,c.listener,y)}const g=Su;return c}function Pa(c,g,y,T,V){if(Array.isArray(g))for(var z=0;z<g.length;z++)Pa(c,g[z],y,T,V);else T=d(T)?!!T.capture:!!T,y=Na(y),c&&c[Ze]?(c=c.i,z=String(g).toString(),z in c.g&&(g=c.g[z],y=be(g,y,T,V),y>-1&&(ee(g[y]),Array.prototype.splice.call(g,y,1),g.length==0&&(delete c.g[z],c.h--)))):c&&(c=no(c))&&(g=c.g[g.toString()],c=-1,g&&(c=be(g,y,T,V)),(y=c>-1?g[c]:null)&&ai(y))}function ai(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Ze])De(g.i,c);else{var y=c.type,T=c.proxy;g.removeEventListener?g.removeEventListener(y,T,c.capture):g.detachEvent?g.detachEvent(to(y),T):g.addListener&&g.removeListener&&g.removeListener(T),(y=no(g))?(De(y,c),y.h==0&&(y.src=null,g[qe]=null)):ee(c)}}}function to(c){return c in Ue?Ue[c]:Ue[c]="on"+c}function Su(c,g){if(c.da)c=!0;else{g=new Re(g,this);const y=c.listener,T=c.ha||c.src;c.fa&&ai(c),c=y.call(T,g)}return c}function no(c){return c=c[qe],c instanceof Ce?c:null}var hs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Na(c){return typeof c=="function"?c:(c[hs]||(c[hs]=function(g){return c.handleEvent(g)}),c[hs])}function Et(){P.call(this),this.i=new Ce(this),this.M=this,this.G=null}w(Et,P),Et.prototype[Ze]=!0,Et.prototype.removeEventListener=function(c,g,y,T){Pa(this,c,g,y,T)};function mt(c,g){var y,T=c.G;if(T)for(y=[];T;T=T.G)y.push(T);if(c=c.M,T=g.type||g,typeof g=="string")g=new k(g,c);else if(g instanceof k)g.target=g.target||c;else{var V=g;g=new k(T,c),Se(g,V)}V=!0;let z,J;if(y)for(J=y.length-1;J>=0;J--)z=g.g=y[J],V=Fn(z,T,!0,g)&&V;if(z=g.g=c,V=Fn(z,T,!0,g)&&V,V=Fn(z,T,!1,g)&&V,y)for(J=0;J<y.length;J++)z=g.g=y[J],V=Fn(z,T,!1,g)&&V}Et.prototype.N=function(){if(Et.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const y=c.g[g];for(let T=0;T<y.length;T++)ee(y[T]);delete c.g[g],c.h--}}this.G=null},Et.prototype.J=function(c,g,y,T){return this.i.add(String(c),g,!1,y,T)},Et.prototype.K=function(c,g,y,T){return this.i.add(String(c),g,!0,y,T)};function Fn(c,g,y,T){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let V=!0;for(let z=0;z<g.length;++z){const J=g[z];if(J&&!J.da&&J.capture==y){const Ee=J.listener,gt=J.ha||J.src;J.fa&&De(c.i,J),V=Ee.call(gt,T)!==!1&&V}}return V&&!T.defaultPrevented}function xa(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:u.setTimeout(c,g||0)}function Da(c){c.g=xa(()=>{c.g=null,c.i&&(c.i=!1,Da(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Cu extends P{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Da(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(c){P.call(this),this.h=c,this.g={}}w(li,P);var ba=[];function ro(c){he(c.g,function(g,y){this.g.hasOwnProperty(y)&&ai(g)},c),c.g={}}li.prototype.N=function(){li.Z.N.call(this),ro(this)},li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ui=u.JSON.stringify,Ru=u.JSON.parse,ds=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function ci(){}function Au(){}var hi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function io(){k.call(this,"d")}w(io,k);function Oa(){k.call(this,"c")}w(Oa,k);var Un={},so=null;function di(){return so=so||new Et}Un.Ia="serverreachability";function oo(c){k.call(this,Un.Ia,c)}w(oo,k);function xr(c){const g=di();mt(g,new oo(g))}Un.STAT_EVENT="statevent";function Dr(c,g){k.call(this,Un.STAT_EVENT,c),this.stat=g}w(Dr,k);function ht(c){const g=di();mt(g,new Dr(g,c))}Un.Ja="timingevent";function La(c,g){k.call(this,Un.Ja,c),this.size=g}w(La,k);function fi(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},g)}function pi(){this.g=!0}pi.prototype.ua=function(){this.g=!1};function ku(c,g,y,T,V,z){c.info(function(){if(c.g)if(z){var J="",Ee=z.split("&");for(let Ge=0;Ge<Ee.length;Ge++){var gt=Ee[Ge].split("=");if(gt.length>1){const wt=gt[0];gt=gt[1];const En=wt.split("_");J=En.length>=2&&En[1]=="type"?J+(wt+"="+gt+"&"):J+(wt+"=redacted&")}}}else J=null;else J=z;return"XMLHTTP REQ ("+T+") [attempt "+V+"]: "+g+`
`+y+`
`+J})}function Pu(c,g,y,T,V,z,J){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+V+"]: "+g+`
`+y+`
`+z+" "+J})}function er(c,g,y,T){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+fs(c,y)+(T?" "+T:"")})}function Nu(c,g){c.info(function(){return"TIMEOUT: "+g})}pi.prototype.info=function(){};function fs(c,g){if(!c.g)return g;if(!g)return null;try{const z=JSON.parse(g);if(z){for(c=0;c<z.length;c++)if(Array.isArray(z[c])){var y=z[c];if(!(y.length<2)){var T=y[1];if(Array.isArray(T)&&!(T.length<1)){var V=T[0];if(V!="noop"&&V!="stop"&&V!="close")for(let J=1;J<T.length;J++)T[J]=""}}}}return ui(z)}catch{return g}}var mi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},gi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xu;function br(){}w(br,ci),br.prototype.g=function(){return new XMLHttpRequest},xu=new br;function tr(c){return encodeURIComponent(String(c))}function ao(c){var g=1;c=c.split(":");const y=[];for(;g>0&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function Rn(c,g,y,T){this.j=c,this.i=g,this.l=y,this.S=T||1,this.V=new li(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Du}function Du(){this.i=null,this.g="",this.h=!1}var bu={},Ma={};function jn(c,g,y){c.M=1,c.A=Lr(An(g)),c.u=y,c.R=!0,Va(c,null)}function Va(c,g){c.F=Date.now(),ps(c),c.B=An(c.A);var y=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Ga(y.i,"t",T),c.C=0,y=c.j.L,c.h=new Du,c.g=$u(c.j,y?g:null,!c.u),c.P>0&&(c.O=new Cu(_(c.Y,c,c.g),c.P)),g=c.V,y=c.g,T=c.ba;var V="readystatechange";Array.isArray(V)||(V&&(ba[0]=V.toString()),V=ba);for(let z=0;z<V.length;z++){const J=Xe(y,V[z],T||g.handleEvent,!1,g.h||g);if(!J)break;g.g[J.key]=J}g=c.J?L(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),xr(),ku(c.i,c.v,c.B,c.l,c.S,c.u)}Rn.prototype.ba=function(c){c=c.target;const g=this.O;g&&lr(c)==3?g.j():this.Y(c)},Rn.prototype.Y=function(c){try{if(c==this.g)e:{const Ee=lr(this.g),gt=this.g.ya(),Ge=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||zu(this.g)))){this.K||Ee!=4||gt==7||(gt==8||Ge<=0?xr(3):xr(2)),lo(this);var g=this.g.ca();this.X=g;var y=Ou(this);if(this.o=g==200,Pu(this.i,this.v,this.B,this.l,this.S,Ee,g),this.o){if(this.U&&!this.L){t:{if(this.g){var T,V=this.g;if((T=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var z=T;break t}}z=null}if(c=z)er(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rt(this,c);else{this.o=!1,this.m=3,ht(12),Or(this),ms(this);break e}}if(this.R){c=!0;let wt;for(;!this.K&&this.C<y.length;)if(wt=Mu(this,y),wt==Ma){Ee==4&&(this.m=4,ht(14),c=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==bu){this.m=4,ht(15),er(this.i,this.l,y,"[Invalid Chunk]"),c=!1;break}else er(this.i,this.l,wt,null),rt(this,wt);if(Lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||y.length!=0||this.h.h||(this.m=1,ht(16),c=!1),this.o=this.o&&c,!c)er(this.i,this.l,y,"[Invalid Chunked Response]"),Or(this),ms(this);else if(y.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Ss(J),J.P=!0,ht(11))}}else er(this.i,this.l,y,null),rt(this,y);Ee==4&&Or(this),this.o&&!this.K&&(Ee==4?vo(this.j,this):(this.o=!1,ps(this)))}else Qa(this.g),g==400&&y.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),Or(this),ms(this)}}}catch{}finally{}};function Ou(c){if(!Lu(c))return c.g.la();const g=zu(c.g);if(g==="")return"";let y="";const T=g.length,V=lr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Or(c),ms(c),"";c.h.i=new u.TextDecoder}for(let z=0;z<T;z++)c.h.h=!0,y+=c.h.i.decode(g[z],{stream:!(V&&z==T-1)});return g.length=0,c.h.g+=y,c.C=0,c.h.g}function Lu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Mu(c,g){var y=c.C,T=g.indexOf(`
`,y);return T==-1?Ma:(y=Number(g.substring(y,T)),isNaN(y)?bu:(T+=1,T+y>g.length?Ma:(g=g.slice(T,T+y),c.C=T+y,g)))}Rn.prototype.cancel=function(){this.K=!0,Or(this)};function ps(c){c.T=Date.now()+c.H,Fa(c,c.H)}function Fa(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=fi(_(c.aa,c),g)}function lo(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Rn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Nu(this.i,this.B),this.M!=2&&(xr(),ht(17)),Or(this),this.m=2,ms(this)):Fa(this,this.T-c)};function ms(c){c.j.I==0||c.K||vo(c.j,c)}function Or(c){lo(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,ro(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function rt(c,g){try{var y=c.j;if(y.I!=0&&(y.g==c||ja(y.h,c))){if(!c.L&&ja(y.h,c)&&y.I==3){try{var T=y.Ba.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var V=T;if(V[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<c.F)yo(y),yn(y);else break e;hr(y),ht(18)}}else y.xa=V[1],0<y.xa-y.K&&V[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=fi(_(y.Va,y),6e3));gs(y.h)<=1&&y.ta&&(y.ta=void 0)}else vn(y,11)}else if((c.L||y.g==c)&&yo(y),!A(g))for(V=y.Ba.g.parse(g),g=0;g<V.length;g++){let Ge=V[g];const wt=Ge[0];if(!(wt<=y.K))if(y.K=wt,Ge=Ge[1],y.I==2)if(Ge[0]=="c"){y.M=Ge[1],y.ba=Ge[2];const En=Ge[3];En!=null&&(y.ka=En,y.j.info("VER="+y.ka));const jr=Ge[4];jr!=null&&(y.za=jr,y.j.info("SVER="+y.za));const dr=Ge[5];dr!=null&&typeof dr=="number"&&dr>0&&(T=1.5*dr,y.O=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const fr=c.g;if(fr){const To=fr.g?fr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(To){var z=T.h;z.g||To.indexOf("spdy")==-1&&To.indexOf("quic")==-1&&To.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(co(z,z.h),z.h=null))}if(T.G){const Ja=fr.g?fr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ja&&(T.wa=Ja,We(T.J,T.G,Ja))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-c.F,y.j.info("Handshake RTT: "+y.T+"ms")),T=y;var J=c;if(T.na=Xa(T,T.L?T.ba:null,T.W),J.L){_s(T.h,J);var Ee=J,gt=T.O;gt&&(Ee.H=gt),Ee.D&&(lo(Ee),ps(Ee)),T.g=J}else qt(T);y.i.length>0&&Ur(y)}else Ge[0]!="stop"&&Ge[0]!="close"||vn(y,7);else y.I==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?vn(y,7):go(y):Ge[0]!="noop"&&y.l&&y.l.qa(Ge),y.A=0)}}xr(4)}catch{}}var wd=class{constructor(c,g){this.g=c,this.map=g}};function uo(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ua(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function gs(c){return c.h?1:c.g?c.g.size:0}function ja(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function co(c,g){c.g?c.g.add(g):c.h=g}function _s(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}uo.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function mn(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.G);return g}return b(c.i)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gn(c,g){if(c){c=c.split("&");for(let y=0;y<c.length;y++){const T=c[y].indexOf("=");let V,z=null;T>=0?(V=c[y].substring(0,T),z=c[y].substring(T+1)):V=c[y],g(V,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function nr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof nr?(this.l=c.l,ys(this,c.j),this.o=c.o,this.g=c.g,rr(this,c.u),this.h=c.h,_i(this,Ka(c.i)),this.m=c.m):c&&(g=String(c).match(Vu))?(this.l=!1,ys(this,g[1]||"",!0),this.o=vs(g[2]||""),this.g=vs(g[3]||"",!0),rr(this,g[4]),this.h=vs(g[5]||"",!0),_i(this,g[6]||"",!0),this.m=vs(g[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}nr.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Es(g,Ba,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Es(g,Ba,!0),"@"),c.push(tr(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&c.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Es(y,y.charAt(0)=="/"?ws:$a,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Es(y,Ha)),c.join("")},nr.prototype.resolve=function(c){const g=An(this);let y=!!c.j;y?ys(g,c.j):y=!!c.o,y?g.o=c.o:y=!!c.g,y?g.g=c.g:y=c.u!=null;var T=c.h;if(y)rr(g,c.u);else if(y=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var V=g.h.lastIndexOf("/");V!=-1&&(T=g.h.slice(0,V+1)+T)}if(V=T,V==".."||V==".")T="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){T=V.lastIndexOf("/",0)==0,V=V.split("/");const z=[];for(let J=0;J<V.length;){const Ee=V[J++];Ee=="."?T&&J==V.length&&z.push(""):Ee==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),T&&J==V.length&&z.push("")):(z.push(Ee),T=!0)}T=z.join("/")}else T=V}return y?g.h=T:y=c.i.toString()!=="",y?_i(g,Ka(c.i)):y=!!c.m,y&&(g.m=c.m),g};function An(c){return new nr(c)}function ys(c,g,y){c.j=y?vs(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function rr(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function _i(c,g,y){g instanceof Oe?(c.i=g,fo(c.i,c.l)):(y||(g=Es(g,Td)),c.i=new Oe(g,c.l))}function We(c,g,y){c.i.set(g,y)}function Lr(c){return We(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function vs(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Es(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,za),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function za(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ba=/[#\/\?@]/g,$a=/[#\?:]/g,ws=/[#\?]/g,Td=/[#\?@]/g,Ha=/#/g;function Oe(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function ir(c){c.g||(c.g=new Map,c.h=0,c.i&&gn(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=Oe.prototype,n.add=function(c,g){ir(this),this.i=null,c=sr(this,c);let y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Wa(c,g){ir(c),g=sr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function ho(c,g){return ir(c),g=sr(c,g),c.g.has(g)}n.forEach=function(c,g){ir(this),this.g.forEach(function(y,T){y.forEach(function(V){c.call(g,V,T,this)},this)},this)};function qa(c,g){ir(c);let y=[];if(typeof g=="string")ho(c,g)&&(y=y.concat(c.g.get(sr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)y=y.concat(c[g]);return y}n.set=function(c,g){return ir(this),this.i=null,c=sr(this,c),ho(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=qa(this,c),c.length>0?String(c[0]):g):g};function Ga(c,g,y){Wa(c,g),y.length>0&&(c.i=null,c.g.set(sr(c,g),b(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let T=0;T<g.length;T++){var y=g[T];const V=tr(y);y=qa(this,y);for(let z=0;z<y.length;z++){let J=V;y[z]!==""&&(J+="="+tr(y[z])),c.push(J)}}return this.i=c.join("&")};function Ka(c){const g=new Oe;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function sr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function fo(c,g){g&&!c.j&&(ir(c),c.i=null,c.g.forEach(function(y,T){const V=T.toLowerCase();T!=V&&(Wa(this,T),Ga(this,V,y))},c)),c.j=g}function or(c,g){const y=new pi;if(u.Image){const T=new Image;T.onload=v(Vt,y,"TestLoadImage: loaded",!0,g,T),T.onerror=v(Vt,y,"TestLoadImage: error",!1,g,T),T.onabort=v(Vt,y,"TestLoadImage: abort",!1,g,T),T.ontimeout=v(Vt,y,"TestLoadImage: timeout",!1,g,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else g(!1)}function ar(c,g){const y=new pi,T=new AbortController,V=setTimeout(()=>{T.abort(),Vt(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:T.signal}).then(z=>{clearTimeout(V),z.ok?Vt(y,"TestPingServer: ok",!0,g):Vt(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(V),Vt(y,"TestPingServer: error",!1,g)})}function Vt(c,g,y,T,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),T(y)}catch{}}function Ts(){this.g=new ds}function Mr(c){this.i=c.Sb||null,this.h=c.ab||!1}w(Mr,ci),Mr.prototype.g=function(){return new _n(this.i,this.h)};function _n(c,g){Et.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(_n,Et),n=_n.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,zn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||u).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fu(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fu(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?yi(this):zn(this),this.readyState==3&&Fu(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,yi(this))},n.Na=function(c){this.g&&(this.response=c,yi(this))},n.ga=function(){this.g&&yi(this)};function yi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,zn(c)}n.setRequestHeader=function(c,g){this.A.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Uu(c){let g="";return he(c,function(y,T){g+=T,g+=":",g+=y,g+=`\r
`}),g}function po(c,g,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=Uu(y),typeof c=="string"?y!=null&&tr(y):We(c,g,y))}function Je(c){Et.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Je,Et);var ju=/^https?$/i,Id=["POST","PUT"];n=Je.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,g,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xu.g(),this.g.onreadystatechange=I(_(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(z){vi(this,z);return}if(c=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var V in T)y.set(V,T[V]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())y.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),V=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(Id,g,void 0)>=0)||T||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of y)this.g.setRequestHeader(z,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(z){vi(this,z)}};function vi(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,Ei(c),Fr(c)}function Ei(c){c.A||(c.A=!0,mt(c,"complete"),mt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,mt(this,"complete"),mt(this,"abort"),Fr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fr(this,!0)),Je.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vr(this):this.Xa())},n.Xa=function(){Vr(this)};function Vr(c){if(c.h&&typeof a<"u"){if(c.v&&lr(c)==4)setTimeout(c.Ca.bind(c),0);else if(mt(c,"readystatechange"),lr(c)==4){c.h=!1;try{const z=c.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var T;if(T=z===0){let J=String(c.D).match(Vu)[1]||null;!J&&u.self&&u.self.location&&(J=u.self.location.protocol.slice(0,-1)),T=!ju.test(J?J.toLowerCase():"")}y=T}if(y)mt(c,"complete"),mt(c,"success");else{c.o=6;try{var V=lr(c)>2?c.g.statusText:""}catch{V=""}c.l=V+" ["+c.ca()+"]",Ei(c)}}finally{Fr(c)}}}}function Fr(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const y=c.g;c.g=null,g||mt(c,"ready");try{y.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function lr(c){return c.g?c.g.readyState:0}n.ca=function(){try{return lr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Ru(g)}};function zu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Qa(c){const g={};c=(c.g&&lr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(A(c[T]))continue;var y=ao(c[T]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=g[V]||[];g[V]=z,z.push(y)}te(g,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function mo(c){this.za=0,this.i=[],this.j=new pi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ur("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ur("baseRetryDelayMs",5e3,c),this.Za=ur("retryDelaySeedMs",1e4,c),this.Ta=ur("forwardChannelMaxRetries",2,c),this.va=ur("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new uo(c&&c.concurrentRequestLimit),this.Ba=new Ts,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=mo.prototype,n.ka=8,n.I=1,n.connect=function(c,g,y,T){ht(0),this.W=c,this.H=g||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.J=Xa(this,null,this.W),Ur(this)};function go(c){if(_o(c),c.I==3){var g=c.V++,y=An(c.J);if(We(y,"SID",c.M),We(y,"RID",g),We(y,"TYPE","terminate"),cr(c,y),g=new Rn(c,c.j,g),g.M=2,g.A=Lr(An(y)),y=!1,u.navigator&&u.navigator.sendBeacon)try{y=u.navigator.sendBeacon(g.A.toString(),"")}catch{}!y&&u.Image&&(new Image().src=g.A,y=!0),y||(g.g=$u(g.j,null),g.g.ea(g.A)),g.F=Date.now(),ps(g)}Cs(c)}function yn(c){c.g&&(Ss(c),c.g.cancel(),c.g=null)}function _o(c){yn(c),c.v&&(u.clearTimeout(c.v),c.v=null),yo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Ur(c){if(!Ua(c.h)&&!c.m){c.m=!0;var g=c.Ea;Me||C(),Te||(Me(),Te=!0),x.add(g,c),c.D=0}}function Bu(c,g){return gs(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=fi(_(c.Ea,c,g),Eo(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const V=new Rn(this,this.j,c);let z=this.o;if(this.U&&(z?(z=L(z),Se(z,this.U)):z=this.U),this.u!==null||this.R||(V.J=z,z=null),this.S)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,g>4096){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Ya(this,V,g),y=An(this.J),We(y,"RID",c),We(y,"CVER",22),this.G&&We(y,"X-HTTP-Session-Id",this.G),cr(this,y),z&&(this.R?g="headers="+tr(Uu(z))+"&"+g:this.u&&po(y,this.u,z)),co(this.h,V),this.Ra&&We(y,"TYPE","init"),this.S?(We(y,"$req",g),We(y,"SID","null"),V.U=!0,jn(V,y,null)):jn(V,y,g),this.I=2}}else this.I==3&&(c?Is(this,c):this.i.length==0||Ua(this.h)||Is(this))};function Is(c,g){var y;g?y=g.l:y=c.V++;const T=An(c.J);We(T,"SID",c.M),We(T,"RID",y),We(T,"AID",c.K),cr(c,T),c.u&&c.o&&po(T,c.u,c.o),y=new Rn(c,c.j,y,c.D+1),c.u===null&&(y.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Ya(c,y,1e3),y.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),co(c.h,y),jn(y,T,g)}function cr(c,g){c.H&&he(c.H,function(y,T){We(g,T,y)}),c.l&&he({},function(y,T){We(g,T,y)})}function Ya(c,g,y){y=Math.min(c.i.length,y);const T=c.l?_(c.l.Ka,c.l,c):null;e:{var V=c.i;let Ee=-1;for(;;){const gt=["count="+y];Ee==-1?y>0?(Ee=V[0].g,gt.push("ofs="+Ee)):Ee=0:gt.push("ofs="+Ee);let Ge=!0;for(let wt=0;wt<y;wt++){var z=V[wt].g;const En=V[wt].map;if(z-=Ee,z<0)Ee=Math.max(0,V[wt].g-100),Ge=!1;else try{z="req"+z+"_"||"";try{var J=En instanceof Map?En:Object.entries(En);for(const[jr,dr]of J){let fr=dr;d(dr)&&(fr=ui(dr)),gt.push(z+jr+"="+encodeURIComponent(fr))}}catch(jr){throw gt.push(z+"type="+encodeURIComponent("_badmap")),jr}}catch{T&&T(En)}}if(Ge){J=gt.join("&");break e}}J=void 0}return c=c.i.splice(0,y),g.G=c,J}function qt(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;Me||C(),Te||(Me(),Te=!0),x.add(g,c),c.A=0}}function hr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=fi(_(c.Da,c),Eo(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,wi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=fi(_(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),yn(this),wi(this))};function Ss(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function wi(c){c.g=new Rn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=An(c.na);We(g,"RID","rpc"),We(g,"SID",c.M),We(g,"AID",c.K),We(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&We(g,"TO",c.ia),We(g,"TYPE","xmlhttp"),cr(c,g),c.u&&c.o&&po(g,c.u,c.o),c.O&&(c.g.H=c.O);var y=c.g;c=c.ba,y.M=1,y.A=Lr(An(g)),y.u=null,y.R=!0,Va(y,c)}n.Va=function(){this.C!=null&&(this.C=null,yn(this),hr(this),ht(19))};function yo(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function vo(c,g){var y=null;if(c.g==g){yo(c),Ss(c),c.g=null;var T=2}else if(ja(c.h,g))y=g.G,_s(c.h,g),T=1;else return;if(c.I!=0){if(g.o)if(T==1){y=g.u?g.u.length:0,g=Date.now()-g.F;var V=c.D;T=di(),mt(T,new La(T,y)),Ur(c)}else qt(c);else if(V=g.m,V==3||V==0&&g.X>0||!(T==1&&Bu(c,g)||T==2&&hr(c)))switch(y&&y.length>0&&(g=c.h,g.i=g.i.concat(y)),V){case 1:vn(c,5);break;case 4:vn(c,10);break;case 3:vn(c,6);break;default:vn(c,2)}}}function Eo(c,g){let y=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(y*=2),y*g}function vn(c,g){if(c.j.info("Error code "+g),g==2){var y=_(c.bb,c),T=c.Ua;const V=!T;T=new nr(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ys(T,"https"),Lr(T),V?or(T.toString(),y):ar(T.toString(),y)}else ht(2);c.I=0,c.l&&c.l.pa(g),Cs(c),_o(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Cs(c){if(c.I=0,c.ja=[],c.l){const g=mn(c.h);(g.length!=0||c.i.length!=0)&&($(c.ja,g),$(c.ja,c.i),c.h.i.length=0,b(c.i),c.i.length=0),c.l.oa()}}function Xa(c,g,y){var T=y instanceof nr?An(y):new nr(y);if(T.g!="")g&&(T.g=g+"."+T.g),rr(T,T.u);else{var V=u.location;T=V.protocol,g=g?g+"."+V.hostname:V.hostname,V=+V.port;const z=new nr(null);T&&ys(z,T),g&&(z.g=g),V&&rr(z,V),y&&(z.h=y),T=z}return y=c.G,g=c.wa,y&&g&&We(T,y,g),We(T,"VER",c.ka),cr(c,T),T}function $u(c,g,y){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new Je(new Mr({ab:y})):new Je(c.ma),g.Fa(c.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hu(){}n=Hu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function wo(){}wo.prototype.g=function(c,g){return new Ft(c,g)};function Ft(c,g){Et.call(this),this.g=new mo(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!A(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!A(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Ti(this)}w(Ft,Et),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){go(this.g)},Ft.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.v&&(y={},y.__data__=ui(c),c=y);g.i.push(new wd(g.Ya++,c)),g.I==3&&Ur(g)},Ft.prototype.N=function(){this.g.l=null,delete this.j,go(this.g),delete this.g,Ft.Z.N.call(this)};function Wu(c){io.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}w(Wu,io);function qu(){Oa.call(this),this.status=1}w(qu,Oa);function Ti(c){this.g=c}w(Ti,Hu),Ti.prototype.ra=function(){mt(this.g,"a")},Ti.prototype.qa=function(c){mt(this.g,new Wu(c))},Ti.prototype.pa=function(c){mt(this.g,new qu)},Ti.prototype.oa=function(){mt(this.g,"b")},wo.prototype.createWebChannel=wo.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,fI=function(){return new wo},dI=function(){return di()},hI=Un,$p={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,rh=mi,gi.COMPLETE="complete",cI=gi,Au.EventType=hi,hi.OPEN="a",hi.CLOSE="b",hi.ERROR="c",hi.MESSAGE="d",Et.prototype.listen=Et.prototype.J,xl=Au,Je.prototype.listenOnce=Je.prototype.K,Je.prototype.getLastError=Je.prototype.Ha,Je.prototype.getLastErrorCode=Je.prototype.ya,Je.prototype.getStatus=Je.prototype.ca,Je.prototype.getResponseJson=Je.prototype.La,Je.prototype.getResponseText=Je.prototype.la,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Fa,uI=Je}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});const eE="@firebase/firestore",tE="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new qh("@firebase/firestore");function Ho(){return Ys.logLevel}function re(n,...e){if(Ys.logLevel<=Ne.DEBUG){const t=e.map(ig);Ys.debug(`Firestore (${Ra}): ${n}`,...t)}}function ii(n,...e){if(Ys.logLevel<=Ne.ERROR){const t=e.map(ig);Ys.error(`Firestore (${Ra}): ${n}`,...t)}}function fa(n,...e){if(Ys.logLevel<=Ne.WARN){const t=e.map(ig);Ys.warn(`Firestore (${Ra}): ${n}`,...t)}}function ig(n){if(typeof n=="string")return n;try{/**
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
 */function Ie(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,pI(n,r,t)}function pI(n,e,t){let r=`FIRESTORE (${Ra}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ii(r),new Error(r)}function ct(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||pI(e,o,r)}function Fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Jt.UNAUTHENTICATED)))}shutdown(){}}class WN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qN{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ct(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new Hs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Hs,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Hs)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ct(typeof r.accessToken=="string",31837,{l:r}),new mI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ct(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class GN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new GN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class nE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ct(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new nE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ct(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function YN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=YN(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Le(n,e){return n<e?-1:n>e?1:0}function Hp(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const o=n.charAt(r),a=e.charAt(r);if(o!==a)return cp(o)===cp(a)?Le(o,a):cp(o)?1:-1}return Le(n.length,e.length)}const XN=55296,JN=57343;function cp(n){const e=n.charCodeAt(0);return e>=XN&&e<=JN}function pa(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="__name__";class yr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=yr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Le(e.length,t.length)}static compareSegments(e,t){const r=yr.isNumericId(e),o=yr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?yr.extractNumericId(e).compare(yr.extractNumericId(t)):Hp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yi.fromString(e.substring(4,e.length-2))}}class ut extends yr{construct(e,t,r){return new ut(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new de(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new ut(t)}static emptyPath(){return new ut([])}}const ZN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends yr{construct(e,t,r){return new sn(e,t,r)}static isValidIdentifier(e){return ZN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rE}static keyField(){return new sn([rE])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new de(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new de(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new de(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ut.fromString(e))}static fromName(e){return new _e(ut.fromString(e).popFirst(5))}static empty(){return new _e(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ut(e.slice()))}}function ex(n,e,t,r){if(e===!0&&r===!0)throw new de(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iE(n){if(_e.isDocumentKey(n))throw new de(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function tx(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function nx(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie(12329,{type:typeof n})}function Wp(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new de(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nx(n);throw new de(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ct(n,e){const t={typeString:n};return e&&(t.value=e),t}function vu(n,e){if(!tx(n))throw new de(Z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new de(Z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=-62135596800,oE=1e6;class St{static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*oE);return new St(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<sE)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/oE}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:St._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vu(e,St._jsonSchema))return new St(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-sE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}St._jsonSchemaVersion="firestore/timestamp/1.0",St._jsonSchema={type:Ct("string",St._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new St(0,0))}static max(){return new we(new St(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ru=-1;function rx(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(r===1e9?new St(t+1,0):new St(t,r));return new is(o,_e.empty(),e)}function ix(n){return new is(n.readTime,n.key,ru)}class is{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new is(we.min(),_e.empty(),ru)}static max(){return new is(we.max(),_e.empty(),ru)}}function sx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
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
 */const ox="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ax{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(n){if(n.code!==Z.FAILED_PRECONDITION||n.message!==ox)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,r)=>{t(e)}))}static reject(e){return new W(((t,r)=>{r(e)}))}static waitFor(e){return new W(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(p=>r(p)))})),u=!0,a===o&&t()}))}static or(e){let t=W.resolve(!1);for(const r of e)t=t.next((o=>o?W.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new W(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let p=0;p<a;p++){const _=p;t(e[_]).next((v=>{u[_]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new W(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}function lx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Aa(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ud.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=-1;function cd(n){return n==null}function qp(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="";function cx(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=aE(e)),e=hx(n.get(t),e);return aE(e)}function hx(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case _I:t+="";break;default:t+=a}}return t}function aE(n){return n+_I+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Eu(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new vt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wc(this.root,e,this.comparator,!0)}}class Wc{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??zt.RED,this.left=o??zt.EMPTY,this.right=a??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new zt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return zt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uE(this.data.getIterator())}getIteratorFrom(e){return new uE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class uE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hi{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new Hi([])}unionWith(e){let t=new xt(sn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Hi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class yI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new yI("Invalid base64 string: "+a):a}})(e);return new Ht(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new Ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const fx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(n){if(ct(!!n,39018),typeof n=="string"){let e=0;const t=fx.exec(n);if(ct(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function os(n){return typeof n=="string"?Ht.fromBase64String(n):Ht.fromUint8Array(n)}/**
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
 */const vI="server_timestamp",EI="__type__",wI="__previous_value__",TI="__local_write_time__";function sg(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[EI])==null?void 0:r.stringValue)===vI}function hd(n){const e=n.mapValue.fields[wI];return sg(e)?hd(e):e}function iu(n){const e=ss(n.mapValue.fields[TI].timestampValue);return new St(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t,r,o,a,u,d,p,_,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=_,this.isUsingEmulator=v}}const Dh="(default)";class su{constructor(e,t){this.projectId=e,this.database=t||Dh}static empty(){return new su("","")}get isDefaultDatabase(){return this.database===Dh}isEqual(e){return e instanceof su&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mx="__type__",gx="__max__",qc={mapValue:{}},_x="__vector__",Gp="value";function as(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sg(n)?4:vx(n)?9007199254740991:yx(n)?10:11:Ie(28295,{value:n})}function Cr(n,e){if(n===e)return!0;const t=as(n);if(t!==as(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return iu(n).isEqual(iu(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=ss(o.timestampValue),d=ss(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return os(o.bytesValue).isEqual(os(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return yt(o.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return yt(o.integerValue)===yt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=yt(o.doubleValue),d=yt(a.doubleValue);return u===d?qp(u)===qp(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return pa(n.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(lE(u)!==lE(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!Cr(u[p],d[p])))return!1;return!0})(n,e);default:return Ie(52216,{left:n})}}function ou(n,e){return(n.values||[]).find((t=>Cr(t,e)))!==void 0}function ma(n,e){if(n===e)return 0;const t=as(n),r=as(e);if(t!==r)return Le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=yt(a.integerValue||a.doubleValue),p=yt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return cE(n.timestampValue,e.timestampValue);case 4:return cE(iu(n),iu(e));case 5:return Hp(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=os(a),p=os(u);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),p=u.split("/");for(let _=0;_<d.length&&_<p.length;_++){const v=Le(d[_],p[_]);if(v!==0)return v}return Le(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Le(yt(a.latitude),yt(u.latitude));return d!==0?d:Le(yt(a.longitude),yt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return hE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var I,b,$,H;const d=a.fields||{},p=u.fields||{},_=(I=d[Gp])==null?void 0:I.arrayValue,v=(b=p[Gp])==null?void 0:b.arrayValue,w=Le((($=_==null?void 0:_.values)==null?void 0:$.length)||0,((H=v==null?void 0:v.values)==null?void 0:H.length)||0);return w!==0?w:hE(_,v)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===qc.mapValue&&u===qc.mapValue)return 0;if(a===qc.mapValue)return 1;if(u===qc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),_=u.fields||{},v=Object.keys(_);p.sort(),v.sort();for(let w=0;w<p.length&&w<v.length;++w){const I=Hp(p[w],v[w]);if(I!==0)return I;const b=ma(d[p[w]],_[v[w]]);if(b!==0)return b}return Le(p.length,v.length)})(n.mapValue,e.mapValue);default:throw Ie(23264,{he:t})}}function cE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=ss(n),r=ss(e),o=Le(t.seconds,r.seconds);return o!==0?o:Le(t.nanos,r.nanos)}function hE(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=ma(t[o],r[o]);if(a)return a}return Le(t.length,r.length)}function ga(n){return Kp(n)}function Kp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ss(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return os(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=Kp(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${Kp(t.fields[u])}`;return o+"}"})(n.mapValue):Ie(61005,{value:n})}function ih(n){switch(as(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hd(n);return e?16+ih(e):16;case 5:return 2*n.stringValue.length;case 6:return os(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+ih(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return Eu(r.fields,((a,u)=>{o+=a.length+ih(u)})),o})(n.mapValue);default:throw Ie(13486,{value:n})}}function Qp(n){return!!n&&"integerValue"in n}function og(n){return!!n&&"arrayValue"in n}function dE(n){return!!n&&"nullValue"in n}function fE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hp(n){return!!n&&"mapValue"in n}function yx(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mx])==null?void 0:r.stringValue)===_x}function zl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Eu(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=zl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zl(n.arrayValue.values[t]);return e}return{...n}}function vx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===gx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.value=e}static empty(){return new vr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zl(t)}setAll(e){let t=sn.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=zl(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());hp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];hp(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Eu(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new vr(zl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Zt(e,0,we.min(),we.min(),we.min(),vr.empty(),0)}static newFoundDocument(e,t,r,o){return new Zt(e,1,t,we.min(),r,o,0)}static newNoDocument(e,t){return new Zt(e,2,t,we.min(),we.min(),vr.empty(),0)}static newUnknownDocument(e,t){return new Zt(e,3,t,we.min(),we.min(),vr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bh{constructor(e,t){this.position=e,this.inclusive=t}}function pE(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=ma(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function mE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Cr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Oh{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ex(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class II{}class Nt extends II{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Tx(e,t,r):t==="array-contains"?new Cx(e,r):t==="in"?new Rx(e,r):t==="not-in"?new Ax(e,r):t==="array-contains-any"?new kx(e,r):new Nt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ix(e,r):new Sx(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ma(t,this.value)):t!==null&&as(this.value)===as(t)&&this.matchesComparison(ma(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rr extends II{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Rr(e,t)}matches(e){return SI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function SI(n){return n.op==="and"}function CI(n){return wx(n)&&SI(n)}function wx(n){for(const e of n.filters)if(e instanceof Rr)return!1;return!0}function Yp(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+ga(n.value);if(CI(n))return n.filters.map((e=>Yp(e))).join(",");{const e=n.filters.map((t=>Yp(t))).join(",");return`${n.op}(${e})`}}function RI(n,e){return n instanceof Nt?(function(r,o){return o instanceof Nt&&r.op===o.op&&r.field.isEqual(o.field)&&Cr(r.value,o.value)})(n,e):n instanceof Rr?(function(r,o){return o instanceof Rr&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&RI(u,o.filters[d])),!0):!1})(n,e):void Ie(19439)}function AI(n){return n instanceof Nt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ga(t.value)}`})(n):n instanceof Rr?(function(t){return t.op.toString()+" {"+t.getFilters().map(AI).join(" ,")+"}"})(n):"Filter"}class Tx extends Nt{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ix extends Nt{constructor(e,t){super(e,"in",t),this.keys=kI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Sx extends Nt{constructor(e,t){super(e,"not-in",t),this.keys=kI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function kI(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class Cx extends Nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return og(t)&&ou(t.arrayValue,this.value)}}class Rx extends Nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ou(this.value.arrayValue,t)}}class Ax extends Nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ou(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ou(this.value.arrayValue,t)}}class kx extends Nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!og(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ou(this.value.arrayValue,r)))}}/**
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
 */class Px{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Te=null}}function gE(n,e=null,t=[],r=[],o=null,a=null,u=null){return new Px(n,e,t,r,o,a,u)}function ag(n){const e=Fe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Yp(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),cd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ga(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ga(r))).join(",")),e.Te=t}return e.Te}function lg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ex(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!RI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mE(n.startAt,e.startAt)&&mE(n.endAt,e.endAt)}function Xp(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Nx(n,e,t,r,o,a,u,d){return new dd(n,e,t,r,o,a,u,d)}function PI(n){return new dd(n)}function _E(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xx(n){return n.collectionGroup!==null}function Bl(n){const e=Fe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new xt(sn.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((_=>{_.isInequality()&&(d=d.add(_.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Oh(a,r))})),t.has(sn.keyField().canonicalString())||e.Ie.push(new Oh(sn.keyField(),r))}return e.Ie}function Ir(n){const e=Fe(n);return e.Ee||(e.Ee=Dx(e,Bl(n))),e.Ee}function Dx(n,e){if(n.limitType==="F")return gE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Oh(o.field,a)}));const t=n.endAt?new bh(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new bh(n.startAt.position,n.startAt.inclusive):null;return gE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jp(n,e,t){return new dd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fd(n,e){return lg(Ir(n),Ir(e))&&n.limitType===e.limitType}function NI(n){return`${ag(Ir(n))}|lt:${n.limitType}`}function Wo(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>AI(o))).join(", ")}]`),cd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>ga(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>ga(o))).join(",")),`Target(${r})`})(Ir(n))}; limitType=${n.limitType})`}function pd(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of Bl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,p){const _=pE(u,d,p);return u.inclusive?_<=0:_<0})(r.startAt,Bl(r),o)||r.endAt&&!(function(u,d,p){const _=pE(u,d,p);return u.inclusive?_>=0:_>0})(r.endAt,Bl(r),o))})(n,e)}function bx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xI(n){return(e,t)=>{let r=!1;for(const o of Bl(n)){const a=Ox(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Ox(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,u,d){const p=u.data.field(a),_=d.data.field(a);return p!==null&&_!==null?ma(p,_):Ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ie(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Eu(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return dx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=new vt(_e.comparator);function ls(){return Lx}const DI=new vt(_e.comparator);function Dl(...n){let e=DI;for(const t of n)e=e.insert(t.key,t);return e}function Mx(n){let e=DI;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Bs(){return $l()}function bI(){return $l()}function $l(){return new Zs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Vx=new xt(_e.comparator);function ze(...n){let e=Vx;for(const t of n)e=e.add(t);return e}const Fx=new xt(Le);function Ux(){return Fx}/**
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
 */function jx(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qp(e)?"-0":e}}function zx(n){return{integerValue:""+n}}/**
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
 */class md{constructor(){this._=void 0}}function Bx(n,e,t){return n instanceof Zp?(function(o,a){const u={fields:{[EI]:{stringValue:vI},[TI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&sg(a)&&(a=hd(a)),a&&(u.fields[wI]=a),{mapValue:u}})(t,e):n instanceof Lh?OI(n,e):n instanceof Mh?LI(n,e):(function(o,a){const u=Hx(o,a),d=yE(u)+yE(o.Ae);return Qp(u)&&Qp(o.Ae)?zx(d):jx(o.serializer,d)})(n,e)}function $x(n,e,t){return n instanceof Lh?OI(n,e):n instanceof Mh?LI(n,e):t}function Hx(n,e){return n instanceof em?(function(r){return Qp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Zp extends md{}class Lh extends md{constructor(e){super(),this.elements=e}}function OI(n,e){const t=MI(e);for(const r of n.elements)t.some((o=>Cr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Mh extends md{constructor(e){super(),this.elements=e}}function LI(n,e){let t=MI(e);for(const r of n.elements)t=t.filter((o=>!Cr(o,r)));return{arrayValue:{values:t}}}class em extends md{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function yE(n){return yt(n.integerValue||n.doubleValue)}function MI(n){return og(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Wx(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Lh&&o instanceof Lh||r instanceof Mh&&o instanceof Mh?pa(r.elements,o.elements,Cr):r instanceof em&&o instanceof em?Cr(r.Ae,o.Ae):r instanceof Zp&&o instanceof Zp})(n.transform,e.transform)}class Ws{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ws}static exists(e){return new Ws(void 0,e)}static updateTime(e){return new Ws(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ug{}function VI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Gx(n.key,Ws.none()):new cg(n.key,n.data,Ws.none());{const t=n.data,r=vr.empty();let o=new xt(sn.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new gd(n.key,r,new Hi(o.toArray()),Ws.none())}}function qx(n,e,t){n instanceof cg?(function(o,a,u){const d=o.value.clone(),p=EE(o.fieldTransforms,a,u.transformResults);d.setAll(p),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof gd?(function(o,a,u){if(!sh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=EE(o.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(FI(o)),p.setAll(d),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Hl(n,e,t,r){return n instanceof cg?(function(a,u,d,p){if(!sh(a.precondition,u))return d;const _=a.value.clone(),v=wE(a.fieldTransforms,p,u);return _.setAll(v),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null})(n,e,t,r):n instanceof gd?(function(a,u,d,p){if(!sh(a.precondition,u))return d;const _=wE(a.fieldTransforms,p,u),v=u.data;return v.setAll(FI(a)),v.setAll(_),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return sh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function vE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&pa(r,o,((a,u)=>Wx(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cg extends ug{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gd extends ug{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function FI(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function EE(n,e,t){const r=new Map;ct(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,$x(u,d,t[o]))}return r}function wE(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,Bx(a,u,e))}return r}class Gx extends ug{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&qx(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Hl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Hl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bI();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const p=VI(u,d);p!==null&&r.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(we.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ze())}isEqual(e){return this.batchId===e.batchId&&pa(this.mutations,e.mutations,((t,r)=>vE(t,r)))&&pa(this.baseMutations,e.baseMutations,((t,r)=>vE(t,r)))}}/**
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
 */class Qx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Yx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,Ve;function UI(n){if(n===void 0)return ii("GRPC error has no .code"),Z.UNKNOWN;switch(n){case It.OK:return Z.OK;case It.CANCELLED:return Z.CANCELLED;case It.UNKNOWN:return Z.UNKNOWN;case It.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case It.INTERNAL:return Z.INTERNAL;case It.UNAVAILABLE:return Z.UNAVAILABLE;case It.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case It.NOT_FOUND:return Z.NOT_FOUND;case It.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case It.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case It.ABORTED:return Z.ABORTED;case It.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case It.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case It.DATA_LOSS:return Z.DATA_LOSS;default:return Ie(39323,{code:n})}}(Ve=It||(It={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xx(){return new TextEncoder}/**
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
 */const Jx=new Yi([4294967295,4294967295],0);function TE(n){const e=Xx().encode(n),t=new lI;return t.update(e),new Uint8Array(t.digest())}function IE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Yi([t,r],0),new Yi([o,a],0)]}class hg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new bl(`Invalid padding: ${t}`);if(r<0)throw new bl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new bl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Yi.fromNumber(this.ge)}ye(e,t,r){let o=e.add(t.multiply(Yi.fromNumber(r)));return o.compare(Jx)===1&&(o=new Yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=TE(e),[r,o]=IE(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new hg(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=TE(e),[r,o]=IE(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class bl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,wu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _d(we.min(),o,new vt(Le),ls(),ze())}}class wu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new wu(r,t,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,r,o){this.be=e,this.removedTargetIds=t,this.key=r,this.De=o}}class jI{constructor(e,t){this.targetId=e,this.Ce=t}}class zI{constructor(e,t,r=Ht.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class SE{constructor(){this.ve=0,this.Fe=CE(),this.Me=Ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ze(),t=ze(),r=ze();return this.Fe.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:Ie(38017,{changeType:a})}})),new wu(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=CE()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ct(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Zx{constructor(e){this.Ge=e,this.ze=new Map,this.je=ls(),this.Je=Gc(),this.He=Gc(),this.Ye=new vt(Le)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,r=e.Ce.count,o=this.ot(t);if(o){const a=o.target;if(Xp(a))if(r===0){const u=new _e(a.path);this.et(t,u,Zt.newNoDocument(u,we.min()))}else ct(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const d=this.ut(e),p=d?this.ct(d,e,u):1;if(p!==0){this.it(t);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=os(r).toUint8Array()}catch(p){if(p instanceof yI)return fa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new hg(u,o,a)}catch(p){return fa(p instanceof bl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.et(t,a,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const d=this.ot(u);if(d){if(a.current&&Xp(d.target)){const p=new _e(d.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,Zt.newNoDocument(p,e))}a.Be&&(t.set(u,a.ke()),a.qe())}}));let r=ze();this.He.forEach(((a,u)=>{let d=!0;u.forEachWhile((p=>{const _=this.ot(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const o=new _d(e,t,this.Ye,this.je,r);return this.je=ls(),this.Je=Gc(),this.He=Gc(),this.Ye=new vt(Le),o}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new SE,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new xt(Le),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new xt(Le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new SE),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Gc(){return new vt(_e.comparator)}function CE(){return new vt(_e.comparator)}const eD={asc:"ASCENDING",desc:"DESCENDING"},tD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nD={and:"AND",or:"OR"};class rD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tm(n,e){return n.useProto3Json||cd(e)?e:{value:e}}function iD(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sD(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ta(n){return ct(!!n,49232),we.fromTimestamp((function(t){const r=ss(t);return new St(r.seconds,r.nanos)})(n))}function oD(n,e){return nm(n,e).canonicalString()}function nm(n,e){const t=(function(o){return new ut(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function BI(n){const e=ut.fromString(n);return ct(GI(e),10190,{key:e.toString()}),e}function dp(n,e){const t=BI(e);if(t.get(1)!==n.databaseId.projectId)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(HI(t))}function $I(n,e){return oD(n.databaseId,e)}function aD(n){const e=BI(n);return e.length===4?ut.emptyPath():HI(e)}function RE(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function HI(n){return ct(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lD(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ie(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(_,v){return _.useProto3Json?(ct(v===void 0||typeof v=="string",58123),Ht.fromBase64String(v||"")):(ct(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ht.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(_){const v=_.code===void 0?Z.UNKNOWN:UI(_.code);return new de(v,_.message||"")})(u);t=new zI(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=dp(n,r.document.name),a=ta(r.document.updateTime),u=r.document.createTime?ta(r.document.createTime):we.min(),d=new vr({mapValue:{fields:r.document.fields}}),p=Zt.newFoundDocument(o,a,u,d),_=r.targetIds||[],v=r.removedTargetIds||[];t=new oh(_,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=dp(n,r.document),a=r.readTime?ta(r.readTime):we.min(),u=Zt.newNoDocument(o,a),d=r.removedTargetIds||[];t=new oh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=dp(n,r.document),a=r.removedTargetIds||[];t=new oh([],a,o,null)}else{if(!("filter"in e))return Ie(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new Yx(o,a),d=r.targetId;t=new jI(d,u)}}return t}function uD(n,e){return{documents:[$I(n,e.path)]}}function cD(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$I(n,o);const a=(function(_){if(_.length!==0)return qI(Rr.create(_,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(_){if(_.length!==0)return _.map((v=>(function(I){return{field:qo(I.field),direction:fD(I.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=tm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function hD(n){let e=aD(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){ct(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const I=WI(w);return I instanceof Rr&&CI(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((I=>(function($){return new Oh(Go($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let I;return I=typeof w=="object"?w.value:w,cd(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(w){const I=!!w.before,b=w.values||[];return new bh(b,I)})(t.startAt));let _=null;return t.endAt&&(_=(function(w){const I=!w.before,b=w.values||[];return new bh(b,I)})(t.endAt)),Nx(e,o,u,a,d,"F",p,_)}function dD(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function WI(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Go(t.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Go(t.unaryFilter.field);return Nt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Go(t.unaryFilter.field);return Nt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Go(t.unaryFilter.field);return Nt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Nt.create(Go(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Rr.create(t.compositeFilter.filters.map((r=>WI(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}})(t.compositeFilter.op))})(n):Ie(30097,{filter:n})}function fD(n){return eD[n]}function pD(n){return tD[n]}function mD(n){return nD[n]}function qo(n){return{fieldPath:n.canonicalString()}}function Go(n){return sn.fromServerFormat(n.fieldPath)}function qI(n){return n instanceof Nt?(function(t){if(t.op==="=="){if(fE(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NAN"}};if(dE(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fE(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NOT_NAN"}};if(dE(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qo(t.field),op:pD(t.op),value:t.value}}})(n):n instanceof Rr?(function(t){const r=t.getFilters().map((o=>qI(o)));return r.length===1?r[0]:{compositeFilter:{op:mD(t.op),filters:r}}})(n):Ie(54877,{filter:n})}function GI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,o,a=we.min(),u=we.min(),d=Ht.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.yt=e}}function _D(n){const e=hD({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jp(e,e.limit,"L"):e}/**
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
 */class yD{constructor(){this.Cn=new vD}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(is.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(is.min())}updateCollectionGroup(e,t,r){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class vD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new xt(ut.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new xt(ut.comparator)).toArray()}}/**
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
 */const AE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},KI=41943040;class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(KI,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new _a(0)}static cr(){return new _a(-1)}}/**
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
 */const kE="LruGarbageCollector",ED=1048576;function PE([n,e],[t,r]){const o=Le(n,t);return o===0?Le(e,r):o}class wD{constructor(e){this.Ir=e,this.buffer=new xt(PE),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();PE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(kE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Aa(t)?re(kE,"Ignoring IndexedDB error during garbage collection: ",t):await ld(t)}await this.Vr(3e5)}))}}class ID{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(ud.ce);const r=new wD(t);return this.mr.forEachTarget(e,(o=>r.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>r.Ar(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(AE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),AE):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,o,a,u,d,p,_;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,u=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(_=Date.now(),Ho()<=Ne.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(_-p)+`ms
Total Duration: ${_-v}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function SD(n,e){return new ID(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.changes=new Zs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?W.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Hl(r.mutation,o,Hi.empty(),St.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ze()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ze()){const o=Bs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=Dl();return a.forEach(((d,p)=>{u=u.insert(d,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Bs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ze())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=ls();const u=$l(),d=(function(){return $l()})();return t.forEach(((p,_)=>{const v=r.get(_.key);o.has(_.key)&&(v===void 0||v.mutation instanceof gd)?a=a.insert(_.key,_):v!==void 0?(u.set(_.key,v.mutation.getFieldMask()),Hl(v.mutation,_,v.mutation.getFieldMask(),St.now())):u.set(_.key,Hi.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((_,v)=>u.set(_,v))),t.forEach(((_,v)=>d.set(_,new RD(v,u.get(_)??null)))),d)))}recalculateAndSaveOverlays(e,t){const r=$l();let o=new vt(((u,d)=>u-d)),a=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((p=>{const _=t.get(p);if(_===null)return;let v=r.get(p)||Hi.empty();v=d.applyToLocalView(_,v),r.set(p,v);const w=(o.get(d.batchId)||ze()).add(p);o=o.insert(d.batchId,w)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),_=p.key,v=p.value,w=bI();v.forEach((I=>{if(!a.has(I)){const b=VI(t.get(I),r.get(I));b!==null&&w.set(I,b),a=a.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,_,w))}return W.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xx(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):W.resolve(Bs());let d=ru,p=a;return u.next((_=>W.forEach(_,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?W.resolve():this.remoteDocumentCache.getEntry(e,v).next((I=>{p=p.insert(v,I)}))))).next((()=>this.populateOverlays(e,_,a))).next((()=>this.computeViews(e,p,_,ze()))).next((v=>({batchId:d,changes:Mx(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((r=>{let o=Dl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=Dl();return this.indexManager.getCollectionParents(e,a).next((d=>W.forEach(d,(p=>{const _=(function(w,I){return new dd(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,_,r,o).next((v=>{v.forEach(((w,I)=>{u=u.insert(w,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((p,_)=>{const v=_.getKey();u.get(v)===null&&(u=u.insert(v,Zt.newInvalidDocument(v)))}));let d=Dl();return u.forEach(((p,_)=>{const v=a.get(p);v!==void 0&&Hl(v.mutation,_,Hi.empty(),St.now()),pd(t,_)&&(d=d.insert(p,_))})),d}))}}/**
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
 */class kD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ta(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:_D(o.bundledQuery),readTime:ta(o.readTime)}})(t)),W.resolve()}}/**
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
 */class PD{constructor(){this.overlays=new vt(_e.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Bs();return W.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.St(e,t,a)})),W.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.qr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),W.resolve()}getOverlaysForCollection(e,t,r){const o=Bs(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,_=p.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===a&&p.largestBatchId>r&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new vt(((_,v)=>_-v));const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>r){let v=a.get(_.largestBatchId);v===null&&(v=Bs(),a=a.insert(_.largestBatchId,v)),v.set(_.getKey(),_)}}const d=Bs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((_,v)=>d.set(_,v))),!(d.size()>=o)););return W.resolve(d)}St(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.qr.get(o.largestBatchId).delete(r.key);this.qr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Qx(t,r));let a=this.qr.get(t);a===void 0&&(a=ze(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
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
 */class ND{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.Qr=new xt(Mt.$r),this.Ur=new xt(Mt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Mt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Mt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new _e(new ut([])),r=new Mt(t,e),o=new Mt(t,e+1),a=[];return this.Ur.forEachInRange([r,o],(u=>{this.Gr(u),a.push(u.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new ut([])),r=new Mt(t,e),o=new Mt(t,e+1);let a=ze();return this.Ur.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Mt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Mt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||Le(e.Yr,t.Yr)}static Kr(e,t){return Le(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new xt(Mt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Kx(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Zr=this.Zr.add(new Mt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return W.resolve(u)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.ei(r),a=o<0?0:o;return W.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?ux:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Mt(t,0),o=new Mt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,o],(u=>{const d=this.Xr(u.Yr);a.push(d)})),W.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xt(Le);return t.forEach((o=>{const a=new Mt(o,0),u=new Mt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],(d=>{r=r.add(d.Yr)}))})),W.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new Mt(new _e(a),0);let d=new xt(Le);return this.Zr.forEachWhile((p=>{const _=p.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(d=d.add(p.Yr)),!0)}),u),W.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((r=>{const o=this.Xr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ct(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return W.forEach(t.mutations,(o=>{const a=new Mt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Mt(t,0),o=this.Zr.firstAfterOrEqual(r);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.ri=e,this.docs=(function(){return new vt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return W.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(t))}getEntries(e,t){let r=ls();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():Zt.newInvalidDocument(o))})),W.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=ls();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:_,value:{document:v}}=p.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||sx(ix(v),r)<=0||(o.has(v.key)||pd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return W.resolve(a)}getAllFromCollectionGroup(e,t,r,o){Ie(9500)}ii(e,t){return W.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new bD(this)}getSize(e){return W.resolve(this.size)}}class bD extends CD{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(r)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.persistence=e,this.si=new Zs((t=>ag(t)),lg),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.oi=0,this._i=new dg,this.targetCount=0,this.ai=_a.ur()}forEachTarget(e,t){return this.si.forEach(((r,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new _a(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.si.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),W.waitFor(a).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return W.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),W.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),W.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return W.resolve(r)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t){this.ui={},this.overlays={},this.ci=new ud(0),this.li=!1,this.li=!0,this.hi=new ND,this.referenceDelegate=e(this),this.Pi=new OD(this),this.indexManager=new yD,this.remoteDocumentCache=(function(o){return new DD(o)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new gD(t),this.Ii=new kD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new PD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new xD(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const o=new LD(this.ci.next());return this.referenceDelegate.Ei(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ai(e,t){return W.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class LD extends ax{constructor(e){super(),this.currentSequenceNumber=e}}class fg{constructor(e){this.persistence=e,this.Ri=new dg,this.Vi=null}static mi(e){return new fg(e)}get fi(){if(this.Vi)return this.Vi;throw Ie(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),W.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(r=>{const o=_e.fromPath(r);return this.gi(e,o).next((a=>{a||t.removeEntry(o,we.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Vh{constructor(e,t){this.persistence=e,this.pi=new Zs((r=>cx(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=SD(this,t)}static mi(e,t){return new Vh(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((r,o)=>this.br(e,r,o).next((a=>a?W.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ii(e,(u=>this.br(e,u,t).next((d=>{d||(r++,a.removeEntry(u,we.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ih(e.data.value)),t}br(e,t,r){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return W.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=o}static As(e,t){let r=ze(),o=ze();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new pg(e,t.fromCache,r,o)}}/**
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
 */class MD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return sC()?8:lx(en())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ys(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ws(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new MD;return this.Ss(e,t,u).next((d=>{if(a.result=d,this.Vs)return this.bs(e,t,u,d.size)}))})).next((()=>a.result))}bs(e,t,r,o){return r.documentReadCount<this.fs?(Ho()<=Ne.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(Ho()<=Ne.DEBUG&&re("QueryEngine","Query:",Wo(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.gs*o?(Ho()<=Ne.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ir(t))):W.resolve())}ys(e,t){if(_E(t))return W.resolve(null);let r=Ir(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Jp(t,null,"F"),r=Ir(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=ze(...a);return this.ps.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((p=>{const _=this.Ds(t,d);return this.Cs(t,_,u,p.readTime)?this.ys(e,Jp(t,null,"F")):this.vs(e,_,t,p)}))))})))))}ws(e,t,r,o){return _E(t)||o.isEqual(we.min())?W.resolve(null):this.ps.getDocuments(e,r).next((a=>{const u=this.Ds(t,a);return this.Cs(t,u,r,o)?W.resolve(null):(Ho()<=Ne.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Wo(t)),this.vs(e,u,t,rx(o,ru)).next((d=>d)))}))}Ds(e,t){let r=new xt(xI(e));return t.forEach(((o,a)=>{pd(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Ss(e,t,r){return Ho()<=Ne.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Wo(t)),this.ps.getDocumentsMatchingQuery(e,t,is.min(),r)}vs(e,t,r,o){return this.ps.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const mg="LocalStore",FD=3e8;class UD{constructor(e,t,r,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new vt(Le),this.xs=new Zs((a=>ag(a)),lg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function jD(n,e,t,r){return new UD(n,e,t,r)}async function YI(n,e){const t=Fe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let p=ze();for(const _ of o){u.push(_.batchId);for(const v of _.mutations)p=p.add(v.key)}for(const _ of a){d.push(_.batchId);for(const v of _.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(r,p).next((_=>({Ls:_,removedBatchIds:u,addedBatchIds:d})))}))}))}function XI(n){const e=Fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function zD(n,e){const t=Fe(n),r=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach(((v,w)=>{const I=o.get(w);if(!I)return;d.push(t.Pi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.Pi.addMatchingKeys(a,v.addedDocuments,w))));let b=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?b=b.withResumeToken(Ht.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):v.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(v.resumeToken,r)),o=o.insert(w,b),(function(H,B,oe){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=FD?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(I,b,v)&&d.push(t.Pi.updateTargetData(a,b))}));let p=ls(),_=ze();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(BD(a,u,e.documentUpdates).next((v=>{p=v.ks,_=v.qs}))),!r.isEqual(we.min())){const v=t.Pi.getLastRemoteSnapshotVersion(a).next((w=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return W.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,_))).next((()=>p))})).then((a=>(t.Ms=o,a)))}function BD(n,e,t){let r=ze(),o=ze();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=ls();return t.forEach(((d,p)=>{const _=a.get(d);p.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(mg,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",p.version)})),{ks:u,qs:o}}))}function $D(n,e){const t=Fe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.Pi.getTargetData(r,e).next((a=>a?(o=a,W.resolve(o)):t.Pi.allocateTargetId(r).next((u=>(o=new Wi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Ms.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function rm(n,e,t){const r=Fe(n),o=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Aa(u))throw u;re(mg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ms=r.Ms.remove(e),r.xs.delete(o.target)}function NE(n,e,t){const r=Fe(n);let o=we.min(),a=ze();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,_,v){const w=Fe(p),I=w.xs.get(v);return I!==void 0?W.resolve(w.Ms.get(I)):w.Pi.getTargetData(_,v)})(r,u,Ir(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,d.targetId).next((p=>{a=p}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,e,t?o:we.min(),t?a:ze()))).next((d=>(HD(r,bx(e),d),{documents:d,Qs:a})))))}function HD(n,e,t){let r=n.Os.get(e)||we.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class xE{constructor(){this.activeTargetIds=Ux()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WD{constructor(){this.Mo=new xE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qD{Oo(e){}shutdown(){}}/**
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
 */const DE="ConnectivityMonitor";class bE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(DE,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(DE,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kc=null;function im(){return Kc===null?Kc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Kc++,"0x"+Kc.toString(16)}/**
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
 */const fp="RestConnection",GD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class KD{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${o}`,this.Wo=this.databaseId.database===Dh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Go(e,t,r,o,a){const u=im(),d=this.zo(e,t.toUriEncodedString());re(fp,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,a);const{host:_}=new URL(d),v=si(_);return this.Jo(e,d,p,r,v).then((w=>(re(fp,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw fa(fp,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Ho(e,t,r,o,a,u){return this.Go(e,t,r,o,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ra})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}zo(e,t){const r=GD[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class YD extends KD{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,o,a){const u=im();return new Promise(((d,p)=>{const _=new uI;_.setWithCredentials(!0),_.listenOnce(cI.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case rh.NO_ERROR:const w=_.getResponseJson();re(Xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case rh.TIMEOUT:re(Xt,`RPC '${e}' ${u} timed out`),p(new de(Z.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const I=_.getStatus();if(re(Xt,`RPC '${e}' ${u} failed with status:`,I,"response text:",_.getResponseText()),I>0){let b=_.getResponseJson();Array.isArray(b)&&(b=b[0]);const $=b==null?void 0:b.error;if($&&$.status&&$.message){const H=(function(oe){const ue=oe.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ue)>=0?ue:Z.UNKNOWN})($.status);p(new de(H,$.message))}else p(new de(Z.UNKNOWN,"Server responded with status "+_.getStatus()))}else p(new de(Z.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{l_:e,streamId:u,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Xt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);re(Xt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",v,r,15)}))}T_(e,t,r){const o=im(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=fI(),d=dI(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const v=a.join("");re(Xt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const w=u.createWebChannel(v,p);this.I_(w);let I=!1,b=!1;const $=new QD({Yo:B=>{b?re(Xt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(I||(re(Xt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),I=!0),re(Xt,`RPC '${e}' stream ${o} sending:`,B),w.send(B))},Zo:()=>w.close()}),H=(B,oe,ue)=>{B.listen(oe,(ce=>{try{ue(ce)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return H(w,xl.EventType.OPEN,(()=>{b||(re(Xt,`RPC '${e}' stream ${o} transport opened.`),$.o_())})),H(w,xl.EventType.CLOSE,(()=>{b||(b=!0,re(Xt,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(w))})),H(w,xl.EventType.ERROR,(B=>{b||(b=!0,fa(Xt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.a_(new de(Z.UNAVAILABLE,"The operation could not be completed")))})),H(w,xl.EventType.MESSAGE,(B=>{var oe;if(!b){const ue=B.data[0];ct(!!ue,16349);const ce=ue,fe=(ce==null?void 0:ce.error)||((oe=ce[0])==null?void 0:oe.error);if(fe){re(Xt,`RPC '${e}' stream ${o} received error:`,fe);const Me=fe.status;let Te=(function(R){const P=It[R];if(P!==void 0)return UI(P)})(Me),x=fe.message;Te===void 0&&(Te=Z.INTERNAL,x="Unknown error status: "+Me+" with message "+fe.message),b=!0,$.a_(new de(Te,x)),w.close()}else re(Xt,`RPC '${e}' stream ${o} received:`,ue),$.u_(ue)}})),H(d,hI.STAT_EVENT,(B=>{B.stat===$p.PROXY?re(Xt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===$p.NOPROXY&&re(Xt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function pp(){return typeof document<"u"?document:null}/**
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
 */function JI(n){return new rD(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=o,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="PersistentStream";class XD{constructor(e,t,r,o,a,u,d,p){this.Mi=e,this.S_=r,this.b_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ZI(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(ii(t.toString()),ii("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===t&&this.G_(r,o)}),(r=>{e((()=>{const o=new de(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(OE,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(OE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class JD extends XD{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=lD(this.serializer,e),r=(function(a){if(!("targetChange"in a))return we.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?we.min():u.readTime?ta(u.readTime):we.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=RE(this.serializer),t.addTarget=(function(a,u){let d;const p=u.target;if(d=Xp(p)?{documents:uD(a,p)}:{query:cD(a,p).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=sD(a,u.resumeToken);const _=tm(a,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(we.min())>0){d.readTime=iD(a,u.snapshotVersion.toTimestamp());const _=tm(a,u.expectedCount);_!==null&&(d.expectedCount=_)}return d})(this.serializer,e);const r=dD(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=RE(this.serializer),t.removeTarget=e,this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{}class eb extends ZD{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Go(e,nm(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(Z.UNKNOWN,a.toString())}))}Ho(e,t,r,o,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Ho(e,nm(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(Z.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class tb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ii(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="RemoteStore";class nb{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{Iu(this)&&(re(ya,"Restarting streams for network reachability change."),await(async function(p){const _=Fe(p);_.Ea.add(4),await Tu(_),_.Ra.set("Unknown"),_.Ea.delete(4),await yd(_)})(this))}))})),this.Ra=new tb(r,o)}}async function yd(n){if(Iu(n))for(const e of n.da)await e(!0)}async function Tu(n){for(const e of n.da)await e(!1)}function e0(n,e){const t=Fe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),vg(t)?yg(t):ka(t).O_()&&_g(t,e))}function gg(n,e){const t=Fe(n),r=ka(t);t.Ia.delete(e),r.O_()&&t0(t,e),t.Ia.size===0&&(r.O_()?r.L_():Iu(t)&&t.Ra.set("Unknown"))}function _g(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ka(n).Y_(e)}function t0(n,e){n.Va.Ue(e),ka(n).Z_(e)}function yg(n){n.Va=new Zx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ka(n).start(),n.Ra.ua()}function vg(n){return Iu(n)&&!ka(n).x_()&&n.Ia.size>0}function Iu(n){return Fe(n).Ea.size===0}function n0(n){n.Va=void 0}async function rb(n){n.Ra.set("Online")}async function ib(n){n.Ia.forEach(((e,t)=>{_g(n,e)}))}async function sb(n,e){n0(n),vg(n)?(n.Ra.ha(e),yg(n)):n.Ra.set("Unknown")}async function ob(n,e,t){if(n.Ra.set("Online"),e instanceof zI&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ia.delete(d),o.Va.removeTarget(d))})(n,e)}catch(r){re(ya,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await LE(n,r)}else if(e instanceof oh?n.Va.Ze(e):e instanceof jI?n.Va.st(e):n.Va.tt(e),!t.isEqual(we.min()))try{const r=await XI(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Va.Tt(u);return d.targetChanges.forEach(((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.Ia.get(_);v&&a.Ia.set(_,v.withResumeToken(p.resumeToken,u))}})),d.targetMismatches.forEach(((p,_)=>{const v=a.Ia.get(p);if(!v)return;a.Ia.set(p,v.withResumeToken(Ht.EMPTY_BYTE_STRING,v.snapshotVersion)),t0(a,p);const w=new Wi(v.target,p,_,v.sequenceNumber);_g(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){re(ya,"Failed to raise snapshot:",r),await LE(n,r)}}async function LE(n,e,t){if(!Aa(e))throw e;n.Ea.add(1),await Tu(n),n.Ra.set("Offline"),t||(t=()=>XI(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(ya,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await yd(n)}))}async function ME(n,e){const t=Fe(n);t.asyncQueue.verifyOperationInProgress(),re(ya,"RemoteStore received new credentials");const r=Iu(t);t.Ea.add(3),await Tu(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await yd(t)}async function ab(n,e){const t=Fe(n);e?(t.Ea.delete(2),await yd(t)):e||(t.Ea.add(2),await Tu(t),t.Ra.set("Unknown"))}function ka(n){return n.ma||(n.ma=(function(t,r,o){const a=Fe(t);return a.sa(),new JD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Xo:rb.bind(null,n),t_:ib.bind(null,n),r_:sb.bind(null,n),H_:ob.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),vg(n)?yg(n):n.Ra.set("Unknown")):(await n.ma.stop(),n0(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new Eg(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r0(n,e){if(ii("AsyncQueue",`${e}: ${n}`),Aa(n))return new de(Z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{static emptySet(e){return new na(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=Dl(),this.sortedSet=new vt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof na)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new na;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.ga=new vt(_e.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ie(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class va{constructor(e,t,r,o,a,u,d,p,_){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new va(e,t,na.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class ub{constructor(){this.queries=FE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const o=Fe(t),a=o.queries;o.queries=FE(),a.forEach(((u,d)=>{for(const p of d.Sa)p.onError(r)}))})(this,new de(Z.ABORTED,"Firestore shutting down"))}}function FE(){return new Zs((n=>NI(n)),fd)}async function cb(n,e){const t=Fe(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.ba()&&e.Da()&&(r=2):(a=new lb,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(o,!0);break;case 1:a.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=r0(u,`Initialization of query '${Wo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&wg(t)}async function hb(n,e){const t=Fe(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.Sa.indexOf(e);u>=0&&(a.Sa.splice(u,1),a.Sa.length===0?o=e.Da()?0:1:!a.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function db(n,e){const t=Fe(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.Sa)d.Fa(o)&&(r=!0);u.wa=o}}r&&wg(t)}function fb(n,e,t){const r=Fe(n),o=r.queries.get(e);if(o)for(const a of o.Sa)a.onError(t);r.queries.delete(e)}function wg(n){n.Ca.forEach((e=>{e.next()}))}var sm,UE;(UE=sm||(sm={})).Ma="default",UE.Cache="cache";class pb{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new va(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.key=e}}class s0{constructor(e){this.key=e}}class mb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ze(),this.mutatedKeys=ze(),this.eu=xI(e),this.tu=new na(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new VE,o=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,w)=>{const I=o.get(v),b=pd(this.query,w)?w:null,$=!!I&&this.mutatedKeys.has(I.key),H=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let B=!1;I&&b?I.data.isEqual(b.data)?$!==H&&(r.track({type:3,doc:b}),B=!0):this.su(I,b)||(r.track({type:2,doc:b}),B=!0,(p&&this.eu(b,p)>0||_&&this.eu(b,_)<0)&&(d=!0)):!I&&b?(r.track({type:0,doc:b}),B=!0):I&&!b&&(r.track({type:1,doc:I}),B=!0,(p||_)&&(d=!0)),B&&(b?(u=u.add(b),a=H?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{tu:u,iu:r,Cs:d,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((v,w)=>(function(b,$){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Rt:B})}};return H(b)-H($)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(r),o=o??!1;const d=t&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,_=p!==this.Za;return this.Za=p,u.length!==0||_?{snapshot:new va(this.query,e.tu,a,u,e.mutatedKeys,p===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new VE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ze(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new s0(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new i0(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=ze();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return va.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Tg="SyncEngine";class gb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _b{constructor(e){this.key=e,this.hu=!1}}class yb{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Zs((d=>NI(d)),fd),this.Iu=new Map,this.Eu=new Set,this.du=new vt(_e.comparator),this.Au=new Map,this.Ru=new dg,this.Vu={},this.mu=new Map,this.fu=_a.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vb(n,e,t=!0){const r=c0(n);let o;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.lu()):o=await o0(r,e,t,!0),o}async function Eb(n,e){const t=c0(n);await o0(t,e,!0,!1)}async function o0(n,e,t,r){const o=await $D(n.localStore,Ir(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await wb(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&e0(n.remoteStore,o),d}async function wb(n,e,t,r,o){n.pu=(w,I,b)=>(async function(H,B,oe,ue){let ce=B.view.ru(oe);ce.Cs&&(ce=await NE(H.localStore,B.query,!1).then((({documents:x})=>B.view.ru(x,ce))));const fe=ue&&ue.targetChanges.get(B.targetId),Me=ue&&ue.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(ce,H.isPrimaryClient,fe,Me);return zE(H,B.targetId,Te.au),Te.snapshot})(n,w,I,b);const a=await NE(n.localStore,e,!0),u=new mb(e,a.Qs),d=u.ru(a.documents),p=wu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,p);zE(n,t,_.au);const v=new gb(e,t,u);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),_.snapshot}async function Tb(n,e,t){const r=Fe(n),o=r.Tu.get(e),a=r.Iu.get(o.targetId);if(a.length>1)return r.Iu.set(o.targetId,a.filter((u=>!fd(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await rm(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&gg(r.remoteStore,o.targetId),om(r,o.targetId)})).catch(ld)):(om(r,o.targetId),await rm(r.localStore,o.targetId,!0))}async function Ib(n,e){const t=Fe(n),r=t.Tu.get(e),o=t.Iu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gg(t.remoteStore,r.targetId))}async function a0(n,e){const t=Fe(n);try{const r=await zD(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Au.get(a);u&&(ct(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.hu=!0:o.modifiedDocuments.size>0?ct(u.hu,14607):o.removedDocuments.size>0&&(ct(u.hu,42227),u.hu=!1))})),await u0(t,r,e)}catch(r){await ld(r)}}function jE(n,e,t){const r=Fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Tu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const p=Fe(u);p.onlineState=d;let _=!1;p.queries.forEach(((v,w)=>{for(const I of w.Sa)I.va(d)&&(_=!0)})),_&&wg(p)})(r.eventManager,e),o.length&&r.Pu.H_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sb(n,e,t){const r=Fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Au.get(e),a=o&&o.key;if(a){let u=new vt(_e.comparator);u=u.insert(a,Zt.newNoDocument(a,we.min()));const d=ze().add(a),p=new _d(we.min(),new Map,new vt(Le),u,d);await a0(r,p),r.du=r.du.remove(a),r.Au.delete(e),Ig(r)}else await rm(r.localStore,e,!1).then((()=>om(r,e,t))).catch(ld)}function om(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||l0(n,r)}))}function l0(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(gg(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ig(n))}function zE(n,e,t){for(const r of t)r instanceof i0?(n.Ru.addReference(r.key,e),Cb(n,r)):r instanceof s0?(re(Tg,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||l0(n,r.key)):Ie(19791,{wu:r})}function Cb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(Tg,"New document in limbo: "+t),n.Eu.add(r),Ig(n))}function Ig(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new _e(ut.fromString(e)),r=n.fu.next();n.Au.set(r,new _b(t)),n.du=n.du.insert(t,r),e0(n.remoteStore,new Wi(Ir(PI(t.path)),r,"TargetPurposeLimboResolution",ud.ce))}}async function u0(n,e,t){const r=Fe(n),o=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((d,p)=>{u.push(r.pu(p,e,t).then((_=>{var v;if((_||t)&&r.isPrimaryClient){const w=_?!_.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:v.current;r.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(_){o.push(_);const w=pg.As(p.targetId,_);a.push(w)}})))})),await Promise.all(u),r.Pu.H_(o),await(async function(p,_){const v=Fe(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>W.forEach(_,(I=>W.forEach(I.Es,(b=>v.persistence.referenceDelegate.addReference(w,I.targetId,b))).next((()=>W.forEach(I.ds,(b=>v.persistence.referenceDelegate.removeReference(w,I.targetId,b)))))))))}catch(w){if(!Aa(w))throw w;re(mg,"Failed to update sequence numbers: "+w)}for(const w of _){const I=w.targetId;if(!w.fromCache){const b=v.Ms.get(I),$=b.snapshotVersion,H=b.withLastLimboFreeSnapshotVersion($);v.Ms=v.Ms.insert(I,H)}}})(r.localStore,a))}async function Rb(n,e){const t=Fe(n);if(!t.currentUser.isEqual(e)){re(Tg,"User change. New user:",e.toKey());const r=await YI(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((d=>{d.forEach((p=>{p.reject(new de(Z.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await u0(t,r.Ls)}}function Ab(n,e){const t=Fe(n),r=t.Au.get(e);if(r&&r.hu)return ze().add(r.key);{let o=ze();const a=t.Iu.get(e);if(!a)return o;for(const u of a){const d=t.Tu.get(u);o=o.unionWith(d.view.nu)}return o}}function c0(n){const e=Fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=a0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sb.bind(null,e),e.Pu.H_=db.bind(null,e.eventManager),e.Pu.yu=fb.bind(null,e.eventManager),e}class Fh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=JI(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return jD(this.persistence,new VD,e.initialUser,this.serializer)}Cu(e){return new QI(fg.mi,this.serializer)}Du(e){return new WD}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fh.provider={build:()=>new Fh};class kb extends Fh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ct(this.persistence.referenceDelegate instanceof Vh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new TD(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new QI((r=>Vh.mi(r,t)),this.serializer)}}class am{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rb.bind(null,this.syncEngine),await ab(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ub})()}createDatastore(e){const t=JI(e.databaseInfo.databaseId),r=(function(a){return new YD(a)})(e.databaseInfo);return(function(a,u,d,p){return new eb(a,u,d,p)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new nb(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>jE(this.syncEngine,t,0)),(function(){return bE.v()?new bE:new qD})())}createSyncEngine(e,t){return(function(o,a,u,d,p,_,v){const w=new yb(o,a,u,d,p,_);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Fe(o);re(ya,"RemoteStore shutting down."),a.Ea.add(5),await Tu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}am.provider={build:()=>new am};/**
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
 */class Pb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ii("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="FirestoreClient";class Nb{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Jt.UNAUTHENTICATED,this.clientId=gI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{re(us,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(re(us,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=r0(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function mp(n,e){n.asyncQueue.verifyOperationInProgress(),re(us,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await YI(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function BE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xb(n);re(us,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ME(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>ME(e.remoteStore,o))),n._onlineComponents=e}async function xb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(us,"Using user provided OfflineComponentProvider");try{await mp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;fa("Error using user provided cache. Falling back to memory cache: "+t),await mp(n,new Fh)}}else re(us,"Using default OfflineComponentProvider"),await mp(n,new kb(void 0));return n._offlineComponents}async function Db(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(us,"Using user provided OnlineComponentProvider"),await BE(n,n._uninitializedComponentsProvider._online)):(re(us,"Using default OnlineComponentProvider"),await BE(n,new am))),n._onlineComponents}async function bb(n){const e=await Db(n),t=e.eventManager;return t.onListen=vb.bind(null,e.syncEngine),t.onUnlisten=Tb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Eb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ib.bind(null,e.syncEngine),t}function Ob(n,e,t={}){const r=new Hs;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,p,_){const v=new Pb({next:I=>{v.Nu(),u.enqueueAndForget((()=>hb(a,w))),I.fromCache&&p.source==="server"?_.reject(new de(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(I)},error:I=>_.reject(I)}),w=new pb(d,v,{includeMetadataChanges:!0,qa:!0});return cb(a,w)})(await bb(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function h0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const $E=new Map;/**
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
 */const d0="firestore.googleapis.com",HE=!0;class WE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=d0,this.ssl=HE}else this.host=e.host,this.ssl=e.ssl??HE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=KI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ED)throw new de(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ex("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=h0(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sg{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new WE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new WE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new HN;switch(r.type){case"firstParty":return new KN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new de(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=$E.get(t);r&&(re("ComponentProvider","Removing Datastore"),$E.delete(t),r.terminate())})(this),Promise.resolve()}}function Lb(n,e,t,r={}){var _;n=Wp(n,Sg);const o=si(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&(Bh(`https://${d}`),$h("Firestore",!0)),a.host!==d0&&a.host!==d&&fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...a,host:d,ssl:o,emulatorOptions:r};if(!Zi(p,u)&&(n._setSettings(p),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=Jt.MOCK_USER;else{v=dm(r.mockUserToken,(_=n._app)==null?void 0:_.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new de(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Jt(I)}n._authCredentials=new WN(new mI(v,w))}}/**
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
 */class vd{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vd(this.firestore,e,this._query)}}class Ln{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ln(this.firestore,e,this._key)}toJSON(){return{type:Ln._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vu(t,Ln._jsonSchema))return new Ln(e,r||null,new _e(ut.fromString(t.referencePath)))}}Ln._jsonSchemaVersion="firestore/documentReference/1.0",Ln._jsonSchema={type:Ct("string",Ln._jsonSchemaVersion),referencePath:Ct("string")};class ra extends vd{constructor(e,t,r){super(e,t,PI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ln(this.firestore,null,new _e(e))}withConverter(e){return new ra(this.firestore,e,this._path)}}function Mb(n,e,...t){if(n=Wt(n),n instanceof Sg){const r=ut.fromString(e,...t);return iE(r),new ra(n,null,r)}{if(!(n instanceof Ln||n instanceof ra))throw new de(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return iE(r),new ra(n.firestore,null,r)}}/**
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
 */const qE="AsyncQueue";class GE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ZI(this,"async_queue_retry"),this._c=()=>{const r=pp();r&&re(qE,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=pp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Hs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Aa(e))throw e;re(qE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ii("INTERNAL UNHANDLED ERROR: ",KE(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Eg.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(o),o}uc(){this.nc&&Ie(47125,{Pc:KE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function KE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class f0 extends Sg{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new GE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new GE(e),this._firestoreClient=void 0,await e}}}function Vb(n,e){const t=typeof n=="object"?n:Gh(),r=typeof n=="string"?n:Dh,o=uu(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=hm("firestore");a&&Lb(o,...a)}return o}function Fb(n){if(n._terminated)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ub(n),n._firestoreClient}function Ub(n){var r,o,a;const e=n._freezeSettings(),t=(function(d,p,_,v){return new px(d,p,_,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,h0(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Nb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(Ht.fromBase64String(e))}catch(t){throw new de(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Er(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vu(e,Er._jsonSchema))return Er.fromBase64String(e.bytes)}}Er._jsonSchemaVersion="firestore/bytes/1.0",Er._jsonSchema={type:Ct("string",Er._jsonSchemaVersion),bytes:Ct("string")};/**
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
 */class p0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xi._jsonSchemaVersion}}static fromJSON(e){if(vu(e,Xi._jsonSchema))return new Xi(e.latitude,e.longitude)}}Xi._jsonSchemaVersion="firestore/geoPoint/1.0",Xi._jsonSchema={type:Ct("string",Xi._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
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
 */class Ji{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ji._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vu(e,Ji._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ji(e.vectorValues);throw new de(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ji._jsonSchemaVersion="firestore/vectorValue/1.0",Ji._jsonSchema={type:Ct("string",Ji._jsonSchemaVersion),vectorValues:Ct("object")};const jb=new RegExp("[~\\*/\\[\\]]");function zb(n,e,t){if(e.search(jb)>=0)throw QE(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new p0(...e.split("."))._internalPath}catch{throw QE(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function QE(n,e,t,r,o){let a=`Function ${e}() called with invalid data`;a+=". ";let u="";return new de(Z.INVALID_ARGUMENT,a+n+u)}/**
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
 */class m0{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(g0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Bb extends m0{data(){return super.data()}}function g0(n,e){return typeof e=="string"?zb(n,e):e instanceof p0?e._internalPath:e._delegate._internalPath}/**
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
 */function $b(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new de(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hb{convertValue(e,t="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Eu(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var r,o,a;const t=(a=(o=(r=e.fields)==null?void 0:r[Gp].arrayValue)==null?void 0:o.values)==null?void 0:a.map((u=>yt(u.doubleValue)));return new Ji(t)}convertGeoPoint(e){return new Xi(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(iu(e));default:return null}}convertTimestamp(e){const t=ss(e);return new St(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ut.fromString(e);ct(GI(r),9688,{name:e});const o=new su(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return o.isEqual(t)||ii(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class Qc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ia extends m0{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ah(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(g0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ia._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ia._jsonSchemaVersion="firestore/documentSnapshot/1.0",ia._jsonSchema={type:Ct("string",ia._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class ah extends ia{data(e={}){return super.data(e)}}class sa{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Qc(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ah(this._firestore,this._userDataWriter,r.key,r,new Qc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const p=new ah(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Qc(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const p=new ah(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Qc(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,v=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:Wb(d.type),doc:p,oldIndex:_,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=sa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Wb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:n})}}sa._jsonSchemaVersion="firestore/querySnapshot/1.0",sa._jsonSchema={type:Ct("string",sa._jsonSchemaVersion),bundleSource:Ct("string","QuerySnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class qb extends Hb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ln(this.firestore,null,t)}}function Gb(n){n=Wp(n,vd);const e=Wp(n.firestore,f0),t=Fb(e),r=new qb(e);return $b(n._query),Ob(t,n._query).then((o=>new sa(e,r,n,o)))}(function(e,t=!0){(function(o){Ra=o})(cs),es(new ei("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new f0(new qN(r.getProvider("auth-internal")),new QN(u,r.getProvider("app-check-internal")),(function(_,v){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new de(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new su(_.options.projectId,v)})(u,o),u);return a={useFetchStreams:t,...a},d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Mn(eE,tE,e),Mn(eE,tE,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="firebasestorage.googleapis.com",Kb="storageBucket",Qb=120*1e3,Yb=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends kr{constructor(e,t,r=0){super(gp(e),`Firebase Storage: ${t} (${gp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ar;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ar||(Ar={}));function gp(n){return"storage/"+n}function Xb(){const n="An unknown error occurred, please check the error payload for server response.";return new Nr(Ar.UNKNOWN,n)}function Jb(){return new Nr(Ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zb(){return new Nr(Ar.CANCELED,"User canceled the upload/download.")}function eO(n){return new Nr(Ar.INVALID_URL,"Invalid URL '"+n+"'.")}function tO(n){return new Nr(Ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function YE(n){return new Nr(Ar.INVALID_ARGUMENT,n)}function y0(){return new Nr(Ar.APP_DELETED,"The Firebase app was deleted.")}function nO(n){return new Nr(Ar.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Xn.makeFromUrl(e,t)}catch{return new Xn(e,"")}if(r.path==="")return r;throw tO(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(fe){fe.path.charAt(fe.path.length-1)==="/"&&(fe.path_=fe.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),p={bucket:1,path:3};function _(fe){fe.path_=decodeURIComponent(fe.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",b=new RegExp(`^https?://${w}/${v}/b/${o}/o${I}`,"i"),$={bucket:1,path:3},H=t===_0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",oe=new RegExp(`^https?://${H}/${o}/${B}`,"i"),ce=[{regex:d,indices:p,postModify:a},{regex:b,indices:$,postModify:_},{regex:oe,indices:{bucket:1,path:2},postModify:_}];for(let fe=0;fe<ce.length;fe++){const Me=ce[fe],Te=Me.regex.exec(e);if(Te){const x=Te[Me.indices.bucket];let C=Te[Me.indices.path];C||(C=""),r=new Xn(x,C),Me.postModify(r);break}}if(r==null)throw eO(e);return r}}class rO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function p(){return d===2}let _=!1;function v(...B){_||(_=!0,e.apply(null,B))}function w(B){o=setTimeout(()=>{o=null,n(b,p())},B)}function I(){a&&clearTimeout(a)}function b(B,...oe){if(_){I();return}if(B){I(),v.call(null,B,...oe);return}if(p()||u){I(),v.call(null,B,...oe);return}r<64&&(r*=2);let ce;d===1?(d=2,ce=0):ce=(r+Math.random())*1e3,w(ce)}let $=!1;function H(B){$||($=!0,I(),!_&&(o!==null?(B||(d=2),clearTimeout(o),w(0)):B||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,H(!0)},t),H}function sO(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(n){return n!==void 0}function XE(n,e,t,r){if(r<e)throw YE(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw YE(`Invalid value for '${n}'. Expected ${t} or less.`)}function aO(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var Uh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Uh||(Uh={}));/**
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
 */function lO(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,t,r,o,a,u,d,p,_,v,w,I=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=p,this.timeout_=_,this.progressCallback_=v,this.connectionFactory_=w,this.retry=I,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,H)=>{this.resolve_=$,this.reject_=H,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new Yc(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const p=d.loaded,_=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,_)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Uh.NO_ERROR,p=a.getStatus();if(!d||lO(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Uh.ABORT;r(!1,new Yc(!1,null,v));return}const _=this.successCodes_.indexOf(p)!==-1;r(!0,new Yc(_,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());oO(p)?a(p):a()}catch(p){u(p)}else if(d!==null){const p=Xb();p.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,p)):u(p)}else if(o.canceled){const p=this.appDelete_?y0():Zb();u(p)}else{const p=Jb();u(p)}};this.canceled_?t(!1,new Yc(!1,null,!0)):this.backoffId_=iO(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yc{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function cO(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function hO(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dO(n,e){e&&(n["X-Firebase-GMPID"]=e)}function fO(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function pO(n,e,t,r,o,a,u=!0,d=!1){const p=aO(n.urlParams),_=n.url+p,v=Object.assign({},n.headers);return dO(v,e),cO(v,t),hO(v,a),fO(v,r),new uO(_,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function gO(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class jh{constructor(e,t){this._service=e,t instanceof Xn?this._location=t:this._location=Xn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new jh(e,t)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gO(this._location.path)}get storage(){return this._service}get parent(){const e=mO(this._location.path);if(e===null)return null;const t=new Xn(this._location.bucket,e);return new jh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw nO(e)}}function JE(n,e){const t=e==null?void 0:e[Kb];return t==null?null:Xn.makeFromBucketSpec(t,n)}function _O(n,e,t,r={}){n.host=`${e}:${t}`;const o=si(e);o&&(Bh(`https://${n.host}/b`),$h("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:dm(a,n.app.options.projectId))}class yO{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=_0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qb,this._maxUploadRetryTime=Yb,this._requests=new Set,o!=null?this._bucket=Xn.makeFromBucketSpec(o,this._host):this._bucket=JE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=JE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){XE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){XE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jh(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new rO(y0());{const u=pO(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const ZE="@firebase/storage",ew="0.14.0";/**
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
 */const v0="storage";function vO(n=Gh(),e){n=Wt(n);const r=uu(n,v0).getImmediate({identifier:e}),o=hm("storage");return o&&EO(r,...o),r}function EO(n,e,t,r={}){_O(n,e,t,r)}function wO(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new yO(t,r,o,e,cs)}function TO(){es(new ei(v0,wO,"PUBLIC").setMultipleInstances(!0)),Mn(ZE,ew,""),Mn(ZE,ew,"esm2020")}TO();const IO={apiKey:"AIzaSyCLF_BclwdmavNPMk0gJtR2M22fhvNRK-s",authDomain:"aireservas-admin.firebaseapp.com",databaseURL:"https://aireservas-admin-default-rtdb.firebaseio.com",projectId:"aireservas-admin",storageBucket:"aireservas-admin.firebasestorage.app",messagingSenderId:"900812322152",appId:"1:900812322152:web:e8d8fe6c763c252c82d2dd",measurementId:"G-DL6SBEEE2X"},Ed=mw(IO),_p=C1(Ed),SO=Vb(Ed);ea(Ed);vO(Ed);const Fi={greeting:["¡Hola! Soy MEGA, tu asistente. Te ayudo a reservar, pagar, conocer promociones o resolver cualquier duda, de manera rápida y segura. ¿En qué puedo ayudarte hoy para hacer tu experiencia inolvidable?","¡Qué rico verte por acá! Soy MEGA y estoy aquí para ayudarte con todo lo que necesites. ¿Buscas una habitación especial?","¡Bienvenido a IAMOTELES! Soy MEGA, tu guía personal. Te ayudo a encontrar la habitación perfecta para tu momento especial."],rooms:{luxury:"Te recomiendo la Habitación 11 con jacuzzi, barra de pole dance y 3 espacios diferentes por $40.000, ¡perfecta para una experiencia única!",budget:"Para algo más económico, tengo habitaciones desde $20.000 por hora con todas las comodidades básicas.",romantic:"Para una experiencia romántica, la Habitación 16 con columpio erótico por $35.000 es ideal, amor."},promotions:["¡Aprovecha! Tenemos hasta 40% de descuento reservando online. Los mejores precios están aquí.","Las promociones nocturnas son increíbles, mi amor. Reserva ahora y ahorra en grande.","¿Sabías que reservando por aquí tienes precios especiales? ¡No te pierdas estas ofertas!"],assistance:["Claro que sí, mi cielo. Te ayudo con todo lo que necesites para que tu experiencia sea perfecta.","¡Por supuesto! Estoy aquí para hacer todo más fácil para ti.","¡Con mucho gusto! Dime qué necesitas y te ayudo al toque."]},kl={luxury:["lujo","premium","especial","jacuzzi","pole"],budget:["económico","barato","precio bajo","ahorro"],romantic:["romántico","pareja","columpio","íntimo"],rooms:["habitación","cuarto","suite","disponible"],promotions:["descuento","promoción","oferta","precio","ahorro"]};function CO({onReserve:n,onClose:e,rooms:t=[]}){const[r,o]=Qe.useState(!1),[a,u]=Qe.useState([]),[d,p]=Qe.useState(""),[_,v]=Qe.useState(!1);Qe.useEffect(()=>{r&&a.length===0&&setTimeout(()=>{w(Fi.greeting[0])},500)},[r]);const w=H=>{v(!0),setTimeout(()=>{u(B=>[...B,{text:H,sender:"mega"}]),v(!1)},1e3)},I=H=>{const B=H.toLowerCase();return kl.luxury.some(oe=>B.includes(oe))?Fi.rooms.luxury:kl.budget.some(oe=>B.includes(oe))?Fi.rooms.budget:kl.romantic.some(oe=>B.includes(oe))?Fi.rooms.romantic:kl.promotions.some(oe=>B.includes(oe))?Fi.promotions[Math.floor(Math.random()*Fi.promotions.length)]:kl.rooms.some(oe=>B.includes(oe))?"Tenemos 20 habitaciones disponibles desde $20.000. ¿Te interesa algo en particular? ¿Romántico, con jacuzzi, o algo más económico?":Fi.assistance[Math.floor(Math.random()*Fi.assistance.length)]},b=()=>{if(!d.trim())return;u(B=>[...B,{text:d,sender:"user"}]);const H=I(d);p(""),setTimeout(()=>w(H),500)},$=H=>{let B="";switch(H){case"promociones":B="¡Las mejores promociones están aquí! Hasta 40% de descuento reservando online. ¿Te muestro las habitaciones disponibles?";break;case"habitaciones":B="Tenemos 20 habitaciones increíbles. Desde $20.000 hasta $47.000. ¿Buscas algo romántico, con jacuzzi, o prefieres ver todas las opciones?";break;case"reservar":B="¡Perfecto! Te voy a mostrar nuestras habitaciones disponibles. Solo haz click en 'Reservar' en la que más te guste.";break;case"precios":B="Nuestros precios van desde $20.000 por hora hasta $47.000 para la suite UCI. ¡Y con descuentos online ahorras hasta 40%!";break}w(B)};return r?U.jsxs("div",{className:"fixed bottom-6 right-6 z-50 w-80 md:w-96 h-96 bg-gradient-to-br from-zinc-900/95 to-purple-900/95 backdrop-blur-xl border border-pink-500/30 rounded-2xl shadow-2xl overflow-hidden",children:[U.jsxs("div",{className:"bg-gradient-to-r from-pink-600 to-purple-600 p-4 flex items-center justify-between",children:[U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx("div",{className:"w-8 h-8 bg-white/20 rounded-full flex items-center justify-center",children:U.jsx("span",{className:"text-sm",children:"🤖"})}),U.jsxs("div",{children:[U.jsx("h3",{className:"font-bold text-white",children:"MEGA Agent"}),U.jsx("p",{className:"text-xs text-white/80",children:"Asistente IAMOTELES"})]})]}),U.jsx("button",{onClick:()=>{o(!1),e==null||e()},className:"text-white/80 hover:text-white text-xl",children:"✕"})]}),U.jsxs("div",{className:"flex-1 p-4 h-64 overflow-y-auto space-y-3",children:[a.map((H,B)=>U.jsx("div",{className:`flex ${H.sender==="user"?"justify-end":"justify-start"}`,children:U.jsx("div",{className:`max-w-[80%] p-3 rounded-xl text-sm ${H.sender==="user"?"bg-pink-600 text-white":"bg-white/10 text-white border border-white/20"}`,children:H.text})},B)),_&&U.jsx("div",{className:"flex justify-start",children:U.jsx("div",{className:"bg-white/10 text-white border border-white/20 p-3 rounded-xl",children:U.jsxs("div",{className:"flex space-x-1",children:[U.jsx("div",{className:"w-2 h-2 bg-pink-500 rounded-full animate-bounce"}),U.jsx("div",{className:"w-2 h-2 bg-pink-500 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),U.jsx("div",{className:"w-2 h-2 bg-pink-500 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})})]}),U.jsx("div",{className:"p-2 border-t border-white/10",children:U.jsx("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[{text:"💎 Promociones",action:"promociones"},{text:"🏨 Habitaciones",action:"habitaciones"},{text:"💰 Precios",action:"precios"},{text:"📅 Reservar",action:"reservar"}].map((H,B)=>U.jsx("button",{onClick:()=>$(H.action),className:"text-xs bg-white/5 hover:bg-white/10 text-white p-2 rounded-lg border border-white/20 transition-all",children:H.text},B))})}),U.jsx("div",{className:"p-4 border-t border-white/10",children:U.jsxs("div",{className:"flex gap-2",children:[U.jsx("input",{type:"text",value:d,onChange:H=>p(H.target.value),onKeyPress:H=>H.key==="Enter"&&b(),placeholder:"Escribe tu pregunta...",className:"flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 text-sm focus:outline-none focus:border-pink-500"}),U.jsx("button",{onClick:b,className:"bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors",children:"📤"})]})})]}):U.jsx("div",{className:"fixed bottom-6 right-6 z-50",children:U.jsx("button",{onClick:()=>o(!0),className:"bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl animate-bounce hover:animate-none transition-all duration-300",children:U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("span",{className:"text-2xl",children:"🤖"}),U.jsx("span",{className:"hidden md:block font-bold",children:"MEGA"})]})})})}const RO="0035215698",AO=({amountToPay:n,reservationDetails:e,onConfirm:t})=>{const[r,o]=Qe.useState(!1),[a,u]=Qe.useState(!1),d=async()=>{u(!0),await new Promise(p=>setTimeout(p,1e3)),t(),o(!0),u(!1)};return r?U.jsxs("div",{className:"text-center p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg",children:[U.jsx("h3",{className:"text-lg font-bold mb-2",children:"¡Gracias! Hemos recibido tu confirmación."}),U.jsx("p",{children:"Tu reserva está siendo verificada y recibirás una notificación."})]}):U.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg",children:[U.jsx("h2",{className:"text-xl font-bold text-purple-800 mb-3 text-center",children:"Paga con Nequi en 2 Pasos"}),U.jsxs("div",{className:"space-y-4 text-gray-700",children:[U.jsxs("div",{className:"flex items-start space-x-3",children:[U.jsx("div",{className:"flex-shrink-0 h-8 w-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold",children:"1"}),U.jsx("div",{children:U.jsx("p",{className:"font-semibold",children:'Abre tu app Nequi y elige "Envía".'})})]}),U.jsxs("div",{className:"flex items-start space-x-3",children:[U.jsx("div",{className:"flex-shrink-0 h-8 w-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold",children:"2"}),U.jsxs("div",{children:[U.jsx("p",{className:"font-semibold",children:"Envía el dinero al número.🔑 Llave Bre-be:"}),U.jsxs("div",{className:"mt-1 p-2 bg-purple-100 border-l-4 border-purple-500 rounded-r-lg",children:[U.jsx("p",{className:"font-mono text-lg font-bold tracking-wider",children:RO}),U.jsxs("p",{className:"text-sm",children:["Monto: ",U.jsxs("span",{className:"font-bold text-lg",children:["$",n.toLocaleString("es-CO")]})]})]})]})]})]}),U.jsx("div",{className:"mt-6",children:U.jsx("button",{onClick:d,disabled:a,className:"w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-700 disabled:bg-gray-400 transition-colors relative",children:U.jsx("span",{className:"relative",children:a?"Confirmando...":"Ya Pagué, Confirmar Reserva"})})})]})};function kO({show:n,onClose:e,reservations:t,rooms:r}){const o=u=>{const d=r.find(p=>p.id===u);return d?d.name:`Habitación ${u}`},a=u=>{switch(u){case"pending":return{text:"Pendiente",color:"text-yellow-400"};case"confirmed":return{text:"Confirmada",color:"text-green-400"};case"checked_in":return{text:"Ingresada",color:"text-blue-400"};case"cancelled":return{text:"Cancelada",color:"text-red-500"};default:return{text:u,color:"text-white"}}};return n?U.jsx("div",{className:"fixed inset-0 z-[99] bg-black/70 flex items-center justify-center backdrop-blur-sm",children:U.jsxs("div",{className:`
                bg-gradient-to-br from-zinc-900/90 to-purple-900/90
                border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md w-[90vw] animate-fadeIn
                relative`,children:[U.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-white/70 hover:bg-pink-600 rounded-full p-2 text-lg",children:"✕"}),U.jsx("h2",{className:"text-2xl font-bold mb-6 text-white",children:"Mis Reservas"}),t.length>0?U.jsx("ul",{className:"space-y-4 max-h-[60vh] overflow-y-auto pr-4 text-sm",children:t.map(u=>{const d=a(u.status);return U.jsxs("li",{className:"bg-white/10 p-4 rounded-lg border border-white/20 text-white",children:[U.jsx("p",{className:"font-bold text-lg text-pink-300 mb-2",children:o(u.roomId)}),U.jsxs("p",{children:[U.jsx("span",{className:"text-white/70 font-semibold",children:"Fecha:"})," ",new Date(u.startTime).toLocaleDateString("es-CO")]}),U.jsxs("p",{children:[U.jsx("span",{className:"text-white/70 font-semibold",children:"Hora:"})," ",new Date(u.startTime).toLocaleTimeString("es-CO")]}),U.jsxs("p",{children:[U.jsx("span",{className:"text-white/70 font-semibold",children:"Estado:"})," ",U.jsx("span",{className:`${d.color} font-bold`,children:d.text})]})]},u.id)})}):U.jsx("p",{className:"text-white/70",children:"No tienes reservas activas."})]})}):null}const PO=n=>{if(n){const e=ea(),t=Bi(e,"users/"+n.uid),r={displayName:n.displayName,email:n.email,role:"customer"};PN(t,r)}};function Cg({children:n,show:e,onClose:t}){return e?U.jsx("div",{className:"fixed inset-0 z-[99] bg-black/70 flex items-center justify-center backdrop-blur-sm",children:U.jsxs("div",{className:`
                bg-gradient-to-br from-zinc-900/90 to-purple-900/90
                border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md w-[90vw] animate-fadeIn
                relative`,children:[U.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-white/70 hover:bg-pink-600 rounded-full p-2 text-lg",children:"✕"}),n]})}):null}function NO({user:n,onLogin:e,onLogout:t,onShowReservations:r}){return U.jsxs("header",{className:"px-6 py-4 flex justify-between items-center bg-black/70 backdrop-blur text-white sticky top-0 z-50",children:[U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx("span",{className:"text-2xl font-black tracking-tight",children:"IAMOTELES"}),U.jsx("span",{className:"text-sm bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text font-bold",children:"Motel La Luna"})]}),U.jsxs("div",{className:"flex items-center gap-4",children:[U.jsx("span",{className:"hidden md:block text-sm text-white/70",children:"20 habitaciones • Desde $20.000"}),n?U.jsxs(U.Fragment,{children:[U.jsx("button",{onClick:r,className:"bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold text-sm",children:"Mis Reservas"}),U.jsx("button",{onClick:t,className:"bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold text-sm",children:"Logout"})]}):U.jsx("button",{onClick:e,className:"bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold",children:"Login"})]})]})}function xO({room:n,onReserve:e,isOccupied:t}){return U.jsxs("div",{className:"bg-white/10 rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:scale-105 transition w-full max-w-xs flex flex-col",children:[U.jsxs("div",{className:"aspect-video bg-black relative",children:[U.jsx("img",{src:n.img,alt:n.name,className:"w-full h-full object-cover object-center",style:{minHeight:"180px"}}),U.jsxs("span",{className:"absolute top-3 right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md",children:["$",new Intl.NumberFormat().format(n.price)]}),U.jsx("span",{className:"absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium",children:n.desc.includes("2 Horas")?"2 horas":"1 hora"})]}),U.jsxs("div",{className:"flex-1 flex flex-col gap-1 px-5 py-4",children:[U.jsx("h3",{className:"font-bold text-lg text-white drop-shadow-sm mb-2",children:n.name}),U.jsx("p",{className:"text-white/70 text-sm flex-1",children:n.desc}),U.jsx("button",{className:`mt-2 w-full font-semibold py-2 rounded-xl shadow-md transition ${t?"bg-gray-500 cursor-not-allowed":"bg-pink-600 hover:bg-pink-700"}`,onClick:()=>!t&&e(n),disabled:t,children:t?"Ocupada":"Reservar"})]})]})}function DO({show:n,onClose:e,onGoogleLogin:t}){return U.jsxs(Cg,{show:n,onClose:e,children:[U.jsx("h2",{className:"text-2xl font-bold mb-6 text-white",children:"Iniciar sesión"}),U.jsxs("button",{onClick:t,className:"mb-3 w-full bg-white text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2",children:[U.jsx("span",{children:"🔐"})," Continuar con Google"]}),U.jsxs("button",{className:"mb-3 w-full bg-gray-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2",children:[U.jsx("span",{children:"✉️"})," Continuar con Email"]}),U.jsxs("button",{className:"w-full bg-black/90 border border-white/30 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2",children:[U.jsx("span",{children:"📷"})," Reconocimiento facial (beta)"]})]})}function bO({show:n,onClose:e,room:t,onPayment:r}){const[o,a]=Qe.useState(""),[u,d]=Qe.useState("Efectivo"),[p,_]=Qe.useState(!1),[v,w]=Qe.useState(!1),[I,b]=Qe.useState(""),[$,H]=Qe.useState(!1);Qe.useEffect(()=>{n||(a(""),w(!1),b(""),H(!1))},[n]),Qe.useEffect(()=>{o?new Date(o)<new Date?(H(!0),w(!1),b("No puedes reservar en una fecha u hora pasada.")):(H(!1),t&&B()):(w(!1),H(!1))},[o,t]);const B=async()=>{if(!t||!o)return;_(!0),w(!1),b("");const ue=ea(),ce=new Date(o).getTime(),fe=t.desc.includes("2 Horas")?2:1,Me=ce+fe*60*60*1e3,Te=Bi(ue,`roomReservations/${t.id}`),x=await xh(Te);if(x.exists()){const R=Object.keys(x.val()).map(k=>xh(Bi(ue,`reservations/${k}`))),P=await Promise.all(R);for(const k of P)if(k.exists()){const O=k.val();if(O.status!=="cancelled"&&ce<O.endTime&&Me>O.startTime){w(!0),b("Lo sentimos, esta hora ya está reservada.");break}}}_(!1)},oe=()=>{if(!o){alert("Por favor, selecciona una fecha y hora.");return}r({room:t,dateTime:o,paymentMethod:u,amount:parseFloat(t.price)/2})};return t?U.jsxs(Cg,{show:n,onClose:e,children:[U.jsxs("h2",{className:"text-xl font-bold mb-3 text-white",children:["Reservar ",t.name]}),U.jsx("img",{src:t.img,alt:t.name,className:"rounded-xl mb-4 w-full aspect-video object-cover object-center"}),U.jsxs("div",{className:"bg-white/10 text-white/90 p-3 rounded-xl mb-2",children:["Precio: ",U.jsxs("b",{children:["$",new Intl.NumberFormat().format(t.price)]})," por ",U.jsx("b",{children:t.desc.includes("2 Horas")?"2 horas":"1 hora"})]}),U.jsxs("div",{className:"mb-4",children:[U.jsx("h4",{className:"text-white/70 text-sm mb-2",children:"Amenidades incluidas:"}),U.jsx("div",{className:"flex flex-wrap gap-1",children:t.desc.split(",").map((ue,ce)=>U.jsx("span",{className:"bg-pink-600/20 text-pink-200 text-xs px-2 py-1 rounded-full",children:ue.trim()},ce))})]}),U.jsxs("div",{className:"mb-5",children:[U.jsx("label",{className:"block text-white/70 text-sm mb-2",children:"Fecha y hora"}),U.jsx("input",{type:"datetime-local",className:"w-full rounded-lg border bg-black/40 text-white border-white/20 px-2 py-1",value:o,onChange:ue=>a(ue.target.value)}),p&&U.jsx("p",{className:"text-white/70 text-sm mt-2",children:"Verificando disponibilidad..."}),!p&&o&&U.jsx("p",{className:`text-sm mt-2 ${v||$?"text-red-500":"text-green-500"}`,children:v||$?I:"¡Hora disponible!"})]}),U.jsxs("div",{className:"mb-5",children:[U.jsx("label",{className:"block text-white/70 text-sm mb-2",children:"Método de pago (50% anticipo)"}),U.jsxs("select",{className:"w-full rounded-lg border bg-black/40 text-white border-white/20 px-2 py-1",value:u,onChange:ue=>d(ue.target.value),children:[U.jsx("option",{children:"Efectivo"}),U.jsx("option",{children:"Nequi"})]})]}),U.jsx("button",{className:`w-full py-2 rounded-xl font-bold transition shadow-xl ${v||p||!o||$?"bg-gray-500 cursor-not-allowed":"bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700"}`,onClick:oe,disabled:v||p||!o||$,children:v||$?$?"Fecha inválida":"Reservada":`Proceder al pago ($${new Intl.NumberFormat().format(parseFloat(t.price)/2)})`})]}):null}function OO({show:n,onClose:e,reservationDetails:t,onConfirm:r,onNequiConfirm:o}){if(!t)return null;const a=t.paymentMethod==="Nequi";return U.jsxs(Cg,{show:n,onClose:e,children:[U.jsx("h2",{className:"text-xl font-bold mb-3 text-white",children:"Pagar Reserva"}),U.jsxs("div",{className:"mb-4 text-white",children:["Reservando ",U.jsx("b",{children:t.room.name})," por ",U.jsxs("b",{children:["$",new Intl.NumberFormat().format(t.room.price)]})," (",t.room.desc.includes("2 Horas")?"2 horas":"1 hora",")"]}),a?U.jsx(AO,{amountToPay:t.amount,onConfirm:o,reservationDetails:{roomId:t.room.id}}):U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"bg-white/10 text-white/90 p-3 rounded-xl mb-2",children:["Fecha y hora: ",new Date(t.dateTime).toLocaleString(),U.jsx("br",{}),"Método de pago: ",t.paymentMethod,U.jsx("br",{}),"Monto a pagar: $",new Intl.NumberFormat().format(t.amount)]}),U.jsx("button",{className:"w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-xl font-extrabold text-white text-lg mt-3 transition shadow-lg",onClick:r,children:"Pagar ahora (demo)"})]})]})}function LO(){const[n,e]=Qe.useState(!1),[t,r]=Qe.useState(!1),[o,a]=Qe.useState(!1),[u,d]=Qe.useState(!1),[p,_]=Qe.useState(null),[v,w]=Qe.useState(null),[I,b]=Qe.useState(null),[$,H]=Qe.useState([]),[B,oe]=Qe.useState(new Set),[ue,ce]=Qe.useState([]);Qe.useEffect(()=>{const R=ea(),P=Bi(R,"reservations"),k=DN(P,O=>{const A=O.val()||{},Re=()=>{const Ke=Date.now(),He=new Set,ee=1800*1e3;for(const he in A){const te=A[he];if(te.status!=="cancelled"){const L=te.startTime-ee;Ke>=L&&Ke<te.endTime&&He.add(te.roomId)}}oe(He)};Re();const Ze=setInterval(Re,6e4);return()=>clearInterval(Ze)});return()=>k()},[]),Qe.useEffect(()=>{(async()=>{const P=Mb(SO,"rooms"),A=(await Gb(P)).docs.map(Re=>({id:Re.id,...Re.data()})).sort((Re,Ze)=>parseInt(Re.id,10)-parseInt(Ze.id,10));H(A)})()},[]),Qe.useEffect(()=>{const R=fA(_p,P=>{b(P),P&&PO(P)});return()=>R()},[]);const fe=()=>{const R=new Qr;OA(_p,R).then(P=>{e(!1)}).catch(P=>{console.error("Error logging in:",P)})},Me=()=>{pA(_p)},Te=R=>{w(R),r(!1),a(!0)},x=async()=>{if(!I)return;const R=ea(),P=Bi(R,`userReservations/${I.uid}`);try{const k=await xh(P);if(k.exists()){const O=Object.keys(k.val()),A=O.map(Ke=>xh(Bi(R,`reservations/${Ke}`))),Ze=(await Promise.all(A)).map((Ke,He)=>({id:O[He],...Ke.val()}));ce(Ze)}else ce([])}catch(k){console.error("Error fetching user reservations:",k),ce([])}d(!0)},C=async()=>{if(!I||!v)return;const R=ea(),P=new Date(v.dateTime),k=v.room.desc.includes("2 Horas")?2:1,O=new Date(P.getTime()+k*60*60*1e3),Re=kN(Bi(R,"reservations")).key;if(!Re){console.error("Failed to create reservation ID");return}const Ze={userId:I.uid,roomId:v.room.id,startTime:P.getTime(),endTime:O.getTime(),status:"pending",payment:{method:v.paymentMethod,totalAmount:v.room.price,paidAmount:v.room.price/2},createdAt:Date.now()},Ke={};Ke[`/reservations/${Re}`]=Ze,Ke[`/userReservations/${I.uid}/${Re}`]=!0,Ke[`/roomReservations/${v.room.id}/${Re}`]=!0;try{await NN(Bi(R),Ke),console.log("Reservation created successfully with pending status!"),a(!1)}catch(He){console.error("Error creating reservation:",He)}};return U.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-zinc-900 via-black to-fuchsia-950",children:[U.jsx(NO,{user:I,onLogin:()=>e(!0),onLogout:Me,onShowReservations:x}),U.jsxs("main",{className:"mx-auto py-10 px-4 max-w-7xl flex flex-col items-center gap-7",children:[U.jsxs("div",{className:"w-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white text-center py-4 px-6 rounded-2xl shadow-xl mb-4 animate-pulse",children:[U.jsx("h2",{className:"text-xl md:text-2xl font-bold",children:"¡Reserva online y ahorra hasta 40% en tu próxima experiencia!"}),U.jsx("p",{className:"text-sm md:text-base opacity-90 mt-1",children:"Promociones especiales disponibles • Disponible 24/7"})]}),U.jsx("h1",{className:"w-full text-center mb-6 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text",children:"Motel La Luna - 20 Habitaciones Premium Disponibles"}),U.jsxs("div",{className:"w-full text-center mb-8",children:[U.jsx("p",{className:"text-white/80 text-lg mb-2",children:'Desde $20.000 por hora • Todas con TV 32", A/C, Mini Bar'}),U.jsxs("div",{className:"flex flex-wrap justify-center gap-3 text-sm text-pink-200",children:[U.jsx("span",{className:"bg-pink-600/20 px-3 py-1 rounded-full",children:"🛏️ Jacuzzi disponible"}),U.jsx("span",{className:"bg-purple-600/20 px-3 py-1 rounded-full",children:"🪑 Silla erótica"}),U.jsx("span",{className:"bg-fuchsia-600/20 px-3 py-1 rounded-full",children:"🚗 Parqueadero privado"}),U.jsx("span",{className:"bg-violet-600/20 px-3 py-1 rounded-full",children:"⭐ Servicio premium 24/7"})]})]}),U.jsx("section",{className:"w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center",children:$.map(R=>U.jsx(xO,{room:R,isOccupied:B.has(R.id),onReserve:P=>{if(!I){e(!0);return}_(P),r(!0)}},R.id))})]}),U.jsxs("footer",{className:"py-6 flex flex-col items-center justify-center text-zinc-200 bg-black/30 mt-8",children:[U.jsx("span",{className:"mb-2 font-bold",children:"IAMOTELES © 2025"}),U.jsx("span",{className:"text-xs",children:"Sistema Inteligente • Potenciado por MICELIO.DIGITAL"})]}),U.jsx(DO,{show:n,onClose:()=>e(!1),onGoogleLogin:fe}),U.jsx(bO,{show:t,onClose:()=>r(!1),room:p,onPayment:Te}),U.jsx(OO,{show:o,onClose:()=>a(!1),reservationDetails:v,onConfirm:C,onNequiConfirm:C}),U.jsx(kO,{show:u,onClose:()=>d(!1),reservations:ue,rooms:$}),U.jsx(CO,{rooms:$,onReserve:R=>{const P=$.find(k=>k.id===R);if(P){if(!I){e(!0);return}_(P),r(!0)}}})]})}const E0=document.getElementById("root");if(!E0)throw new Error("Failed to find root element");BS.createRoot(E0).render(U.jsx(LO,{}));
