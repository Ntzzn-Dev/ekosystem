(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const pa=()=>{};var Qi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw $e(e)},$e=function(n){return new Error("Firebase Database ("+Cr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ga=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),i.push(t[d],t[h],t[u],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ga(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new ma;const u=r<<2|a>>4;if(i.push(u),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ma extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Er=function(n){const e=vr(n);return hi.encodeByteArray(e,!0)},Dt=function(n){return Er(n).replace(/\./g,"")},jn=function(n){try{return hi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){return wr(void 0,n)}function wr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ca(t)||(n[t]=wr(n[t],e[t]));return n}function Ca(n){return n!=="__proto__"}/**
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
 */function va(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ea=()=>va().__FIREBASE_DEFAULTS__,wa=()=>{if(typeof process>"u"||typeof Qi>"u")return;const n=Qi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ia=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jn(n[1]);return e&&JSON.parse(e)},Ir=()=>{try{return pa()||Ea()||wa()||Ia()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ba=n=>{var e,t;return(t=(e=Ir())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sa=n=>{const e=ba(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},br=()=>{var n;return(n=Ir())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function di(n){return n.endsWith(".cloudworkstations.dev")}async function Ta(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Na(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dt(JSON.stringify(t)),Dt(JSON.stringify(o)),""].join(".")}const nt={};function Ra(){const n={prod:[],emulator:[]};for(const e of Object.keys(nt))nt[e]?n.emulator.push(e):n.prod.push(e);return n}function Aa(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ji=!1;function Sr(n,e){if(typeof window>"u"||typeof document>"u"||!di(window.location.host)||nt[n]===e||nt[n]||Ji)return;nt[n]=e;function t(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=Ra().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Ji=!0,o()},u}function d(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=Aa(i),f=t("text"),_=document.getElementById(f)||document.createElement("span"),g=t("learnmore"),D=document.getElementById(g)||document.createElement("a"),C=t("preprendIcon"),R=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const v=u.element;a(v),d(D,g);const b=c();l(R,C),v.append(R,_,D,b),document.body.appendChild(v)}r?(_.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pa())}function Da(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ka(){return Cr.NODE_ADMIN===!0}function Ma(){try{return typeof indexedDB=="object"}catch{return!1}}function Oa(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="FirebaseError";class Ct extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=xa,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?La(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,a,i)}}function La(n,e){return n.replace(Fa,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Fa=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n){return JSON.parse(n)}function W(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=lt(jn(r[0])||""),t=lt(jn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Ba=function(n){const e=Rr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ua=function(n){const e=Rr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function We(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Xi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Mt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Zi(r)&&Zi(o)){if(!Mt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Zi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):h<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const u=(s<<5|s>>>27)+c+l+d+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function fi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jt=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class ct{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ie="[DEFAULT]";/**
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
 */class qa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Qt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ga(e))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ie){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ie){return this.instances.has(e)}getOptions(e=Ie){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:za(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ie){return this.component?this.component.multipleInstances?e:Ie:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function za(n){return n===Ie?void 0:n}function Ga(n){return n.instantiationMode==="EAGER"}/**
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
 */class $a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const ja={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Ya=F.INFO,Ka={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Qa=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Ka[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ar{constructor(e){this.name=e,this._logLevel=Ya,this._logHandler=Qa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ja[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Ja=(n,e)=>e.some(t=>n instanceof t);let es,ts;function Xa(){return es||(es=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Za(){return ts||(ts=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pr=new WeakMap,Yn=new WeakMap,Dr=new WeakMap,fn=new WeakMap,_i=new WeakMap;function el(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ge(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Pr.set(t,n)}).catch(()=>{}),_i.set(e,n),e}function tl(n){if(Yn.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Yn.set(n,e)}let Kn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Dr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nl(n){Kn=n(Kn)}function il(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(_n(this),e,...t);return Dr.set(i,e.sort?e.sort():[e]),ge(i)}:Za().includes(n)?function(...e){return n.apply(_n(this),e),ge(Pr.get(this))}:function(...e){return ge(n.apply(_n(this),e))}}function sl(n){return typeof n=="function"?il(n):(n instanceof IDBTransaction&&tl(n),Ja(n,Xa())?new Proxy(n,Kn):n)}function ge(n){if(n instanceof IDBRequest)return el(n);if(fn.has(n))return fn.get(n);const e=sl(n);return e!==n&&(fn.set(n,e),_i.set(e,n)),e}const _n=n=>_i.get(n);function rl(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ge(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ge(o.result),l.oldVersion,l.newVersion,ge(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ol=["get","getKey","getAll","getAllKeys","count"],al=["put","add","delete","clear"],pn=new Map;function ns(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pn.get(e))return pn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=al.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ol.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return pn.set(e,r),r}nl(n=>({...n,get:(e,t,i)=>ns(e,t)||n.get(e,t,i),has:(e,t)=>!!ns(e,t)||n.has(e,t)}));/**
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
 */class ll{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function cl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qn="@firebase/app",is="0.12.3";/**
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
 */const ue=new Ar("@firebase/app"),ul="@firebase/app-compat",hl="@firebase/analytics-compat",dl="@firebase/analytics",fl="@firebase/app-check-compat",_l="@firebase/app-check",pl="@firebase/auth",gl="@firebase/auth-compat",ml="@firebase/database",yl="@firebase/data-connect",Cl="@firebase/database-compat",vl="@firebase/functions",El="@firebase/functions-compat",wl="@firebase/installations",Il="@firebase/installations-compat",bl="@firebase/messaging",Sl="@firebase/messaging-compat",Tl="@firebase/performance",Nl="@firebase/performance-compat",Rl="@firebase/remote-config",Al="@firebase/remote-config-compat",Pl="@firebase/storage",Dl="@firebase/storage-compat",kl="@firebase/firestore",Ml="@firebase/vertexai",Ol="@firebase/firestore-compat",xl="firebase",Ll="11.7.3";/**
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
 */const Jn="[DEFAULT]",Fl={[Qn]:"fire-core",[ul]:"fire-core-compat",[dl]:"fire-analytics",[hl]:"fire-analytics-compat",[_l]:"fire-app-check",[fl]:"fire-app-check-compat",[pl]:"fire-auth",[gl]:"fire-auth-compat",[ml]:"fire-rtdb",[yl]:"fire-data-connect",[Cl]:"fire-rtdb-compat",[vl]:"fire-fn",[El]:"fire-fn-compat",[wl]:"fire-iid",[Il]:"fire-iid-compat",[bl]:"fire-fcm",[Sl]:"fire-fcm-compat",[Tl]:"fire-perf",[Nl]:"fire-perf-compat",[Rl]:"fire-rc",[Al]:"fire-rc-compat",[Pl]:"fire-gcs",[Dl]:"fire-gcs-compat",[kl]:"fire-fst",[Ol]:"fire-fst-compat",[Ml]:"fire-vertex","fire-js":"fire-js",[xl]:"fire-js-all"};/**
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
 */const Ot=new Map,Bl=new Map,Xn=new Map;function ss(n,e){try{n.container.addComponent(e)}catch(t){ue.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(Xn.has(e))return ue.debug(`There were multiple attempts to register component ${e}.`),!1;Xn.set(e,n);for(const t of Ot.values())ss(t,n);for(const t of Bl.values())ss(t,n);return!0}function Ul(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Hl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Wl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new Nr("app","Firebase",Wl);/**
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
 */class Vl{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
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
 */const ql=Ll;function kr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Jn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw me.create("bad-app-name",{appName:String(s)});if(t||(t=br()),!t)throw me.create("no-options");const r=Ot.get(s);if(r){if(Mt(t,r.options)&&Mt(i,r.config))return r;throw me.create("duplicate-app",{appName:s})}const o=new $a(s);for(const l of Xn.values())o.addComponent(l);const a=new Vl(t,i,o);return Ot.set(s,a),a}function zl(n=Jn){const e=Ot.get(n);if(!e&&n===Jn&&br())return kr();if(!e)throw me.create("no-app",{appName:n});return e}function Be(n,e,t){var i;let s=(i=Fl[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ue.warn(a.join(" "));return}xt(new ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gl="firebase-heartbeat-database",$l=1,ut="firebase-heartbeat-store";let gn=null;function Mr(){return gn||(gn=rl(Gl,$l,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ut)}catch(t){console.warn(t)}}}}).catch(n=>{throw me.create("idb-open",{originalErrorMessage:n.message})})),gn}async function jl(n){try{const t=(await Mr()).transaction(ut),i=await t.objectStore(ut).get(Or(n));return await t.done,i}catch(e){if(e instanceof Ct)ue.warn(e.message);else{const t=me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ue.warn(t.message)}}}async function rs(n,e){try{const i=(await Mr()).transaction(ut,"readwrite");await i.objectStore(ut).put(e,Or(n)),await i.done}catch(t){if(t instanceof Ct)ue.warn(t.message);else{const i=me.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ue.warn(i.message)}}}function Or(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yl=1024,Kl=30;class Ql{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=os();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Kl){const o=Zl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ue.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=os(),{heartbeatsToSend:i,unsentEntries:s}=Jl(this._heartbeatsCache.heartbeats),r=Dt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ue.warn(t),""}}}function os(){return new Date().toISOString().substring(0,10)}function Jl(n,e=Yl){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),as(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),as(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Xl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ma()?Oa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function as(n){return Dt(JSON.stringify({version:2,heartbeats:n})).length}function Zl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function ec(n){xt(new ct("platform-logger",e=>new ll(e),"PRIVATE")),xt(new ct("heartbeat",e=>new Ql(e),"PRIVATE")),Be(Qn,is,n),Be(Qn,is,"esm2017"),Be("fire-js","")}ec("");var ls={};const cs="@firebase/database",us="1.0.17";/**
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
 */let xr="";function tc(n){xr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:lt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return de(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nc(e)}}catch{}return new ic},Se=Lr("localStorage"),sc=Lr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Ar("@firebase/database"),rc=function(){let n=1;return function(){return n++}}(),Fr=function(n){const e=Va(n),t=new Wa;t.update(e);const i=t.digest();return hi.encodeByteArray(i)},vt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=vt.apply(null,i):typeof i=="object"?e+=W(i):e+=i,e+=" "}return e};let it=null,hs=!0;const oc=function(n,e){p(!0,"Can't turn on custom loggers persistently."),Ue.logLevel=F.VERBOSE,it=Ue.log.bind(Ue)},j=function(...n){if(hs===!0&&(hs=!1,it===null&&sc.get("logging_enabled")===!0&&oc()),it){const e=vt.apply(null,n);it(e)}},Et=function(n){return function(...e){j(n,...e)}},Zn=function(...n){const e="FIREBASE INTERNAL ERROR: "+vt(...n);Ue.error(e)},he=function(...n){const e=`FIREBASE FATAL ERROR: ${vt(...n)}`;throw Ue.error(e),new Error(e)},J=function(...n){const e="FIREBASE WARNING: "+vt(...n);Ue.warn(e)},ac=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Br=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},lc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ve="[MIN_NAME]",Ne="[MAX_NAME]",je=function(n,e){if(n===e)return 0;if(n===Ve||e===Ne)return-1;if(e===Ve||n===Ne)return 1;{const t=ds(n),i=ds(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},cc=function(n,e){return n===e?0:n<e?-1:1},Je=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+W(e))},pi=function(n){if(typeof n!="object"||n===null)return W(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=W(e[i]),t+=":",t+=pi(n[e[i]]);return t+="}",t},Ur=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function X(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Hr=function(n){p(!Br(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},uc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const fc=new RegExp("^-?(0*)\\d{1,10}$"),_c=-2147483648,pc=2147483647,ds=function(n){if(fc.test(n)){const e=Number(n);if(e>=_c&&e<=pc)return e}return null},Ye=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw J("Exception was thrown by user callback.",t),e},Math.floor(0))}},gc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},st=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class mc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Hl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){J(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(j("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(e)}}class Pt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="5",Wr="v",Vr="s",qr="r",zr="f",Gr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$r="ls",jr="p",ei="ac",Yr="websocket",Kr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Se.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Se.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Cc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Jr(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===Yr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Kr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Cc(n)&&(t.ns=n.namespace);const s=[];return X(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.counters_={}}incrementCounter(e,t=1){de(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ya(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={},yn={};function mi(n){const e=n.toString();return mn[e]||(mn[e]=new vc),mn[e]}function Ec(n,e){const t=n.toString();return yn[t]||(yn[t]=e()),yn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ye(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="start",Ic="close",bc="pLPCommand",Sc="pRTLPCB",Xr="id",Zr="pw",eo="ser",Tc="cb",Nc="seg",Rc="ts",Ac="d",Pc="dframe",to=1870,no=30,Dc=to-no,kc=25e3,Mc=3e4;class Fe{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Et(e),this.stats_=mi(t),this.urlFn=l=>(this.appCheckToken&&(l[ei]=this.appCheckToken),Jr(t,Kr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new wc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mc)),lc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yi((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fs)this.id=a,this.password=l;else if(o===Ic)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[fs]="t",i[eo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Tc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Wr]=gi,this.transportSessionId&&(i[Vr]=this.transportSessionId),this.lastSessionId&&(i[$r]=this.lastSessionId),this.applicationId&&(i[jr]=this.applicationId),this.appCheckToken&&(i[ei]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gr.test(location.hostname)&&(i[qr]=zr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return Fe.forceAllow_?!0:!Fe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uc()&&!hc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Er(t),s=Ur(i,Dc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Pc]="t",i[Xr]=e,i[Zr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=W(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class yi{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rc(),window[bc+this.uniqueCallbackIdentifier]=e,window[Sc+this.uniqueCallbackIdentifier]=t,this.myIFrame=yi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){j("frame writing exception"),a.stack&&j(a.stack),j(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||j("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xr]=this.myID,e[Zr]=this.myPW,e[eo]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+no+i.length<=to;){const o=this.pendingSegs.shift();i=i+"&"+Nc+s+"="+o.seg+"&"+Rc+s+"="+o.ts+"&"+Ac+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(kc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{j("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=16384,xc=45e3;let Lt=null;typeof MozWebSocket<"u"?Lt=MozWebSocket:typeof WebSocket<"u"&&(Lt=WebSocket);class ee{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Et(this.connId),this.stats_=mi(t),this.connURL=ee.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Wr]=gi,typeof location<"u"&&location.hostname&&Gr.test(location.hostname)&&(o[qr]=zr),t&&(o[Vr]=t),i&&(o[$r]=i),s&&(o[ei]=s),r&&(o[jr]=r),Jr(e,Yr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Se.set("previous_websocket_failure",!0);try{let i;ka(),this.mySock=new Lt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ee.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Lt!==null&&!ee.forceDisallow_}static previouslyFailed(){return Se.isInMemoryStorage||Se.get("previous_websocket_failure")===!0}markConnectionHealthy(){Se.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=lt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ur(t,Oc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ee.responsesRequiredToBeHealthy=2;ee.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{static get ALL_TRANSPORTS(){return[Fe,ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ee&&ee.isAvailable();let i=t&&!ee.previouslyFailed();if(e.webSocketOnly&&(t||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ee];else{const s=this.transports_=[];for(const r of ht.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ht.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ht.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=6e4,Fc=5e3,Bc=10*1024,Uc=100*1024,Cn="t",_s="d",Hc="s",ps="r",Wc="e",gs="o",ms="a",ys="n",Cs="p",Vc="h";class qc{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Et("c:"+this.id+":"),this.transportManager_=new ht(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=st(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cn in e){const t=e[Cn];t===ms?this.upgradeIfSecondaryHealthy_():t===ps?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===gs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Je("t",e),i=Je("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ms,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ys,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Je("t",e),i=Je("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Je(Cn,e);if(_s in e){const i=e[_s];if(t===Vc){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ys){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Hc?this.onConnectionShutdown_(i):t===ps?this.onReset_(i):t===Wc?Zn("Server Error: "+i):t===gs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gi!==i&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),st(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):st(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Se.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends so{static getInstance(){return new Ft}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=32,Es=768;class L{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new L("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ve(n){return n.pieces_.length-n.pieceNum_}function B(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new L(n.pieces_,e)}function ro(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function oo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ao(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new L(e,0)}function V(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof L)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new L(t,0)}function O(n){return n.pieceNum_>=n.pieces_.length}function K(n,e){const t=k(n),i=k(e);if(t===null)return e;if(t===i)return K(B(n),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ci(n,e){if(ve(n)!==ve(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function te(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ve(n)>ve(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Gc{constructor(e,t){this.errorPrefix_=t,this.parts_=oo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Jt(this.parts_[i]);lo(this)}}function $c(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Jt(e),lo(n)}function jc(n){const e=n.parts_.pop();n.byteLength_-=Jt(e),n.parts_.length>0&&(n.byteLength_-=1)}function lo(n){if(n.byteLength_>Es)throw new Error(n.errorPrefix_+"has a key path longer than "+Es+" bytes ("+n.byteLength_+").");if(n.parts_.length>vs)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vs+") or object contains a cycle "+be(n))}function be(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends so{static getInstance(){return new vi}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=1e3,Yc=60*5*1e3,ws=30*1e3,Kc=1.3,Qc=3e4,Jc="server_kill",Is=3;class ce extends io{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ce.nextPersistentConnectionId_++,this.log_=Et("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xe,this.maxReconnectDelay_=Yc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ft.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(W(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Qt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ce.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&de(e,"w")){const i=We(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();J(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ua(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ws)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ba(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+W(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zn("Unrecognized action received from server: "+W(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qc&&(this.reconnectDelay_=Xe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ce.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?j("getToken() completed but was canceled"):(j("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new qc(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{J(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&J(h),l())}}}interrupt(e){j("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){j("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xi(this.interruptReasons_)&&(this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>pi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new L(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){j("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Is&&(this.reconnectDelay_=ws,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){j("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Is&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+xr.replace(/\./g,"-")]=1,Tr()?e["framework.cordova"]=1:Da()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ft.getInstance().currentlyOnline();return Xi(this.interruptReasons_)&&e}}ce.nextPersistentConnectionId_=0;ce.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new M(Ve,e),s=new M(Ve,t);return this.compare(i,s)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt;class co extends Xt{static get __EMPTY_NODE(){return Nt}static set __EMPTY_NODE(e){Nt=e}compare(e,t){return je(e.name,t.name)}isDefinedOn(e){throw $e("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(Ne,Nt)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Nt)}toString(){return".key"}}const He=new co;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??G.RED,this.left=s??Q.EMPTY_NODE,this.right=r??Q.EMPTY_NODE}copy(e,t,i,s,r){return new G(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Xc{copy(e,t,i,s,r){return this}insert(e,t,i){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,t=Q.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Q(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rt(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new Xc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,e){return je(n.name,e.name)}function Ei(n,e){return je(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;function eu(n){ti=n}const uo=function(n){return typeof n=="number"?"number:"+Hr(n):"string:"+n},ho=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&de(e,".sv"),"Priority must be a string or number.")}else p(n===ti||n.isEmpty(),"priority of unexpected type.");p(n===ti||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs;class z{static set __childrenNodeConstructor(e){bs=e}static get __childrenNodeConstructor(){return bs}constructor(e,t=z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ho(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return O(e)?this:k(e)===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=k(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||ve(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,z.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Hr(this.value_):e+=this.value_,this.lazyHash_=Fr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof z.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=z.VALUE_TYPE_ORDER.indexOf(t),r=z.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo,_o;function tu(n){fo=n}function nu(n){_o=n}class iu extends Xt{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?je(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Ne,new z("[PRIORITY-POST]",_o))}makePost(e,t){const i=fo(e);return new M(t,new z("[PRIORITY-POST]",i))}toString(){return".priority"}}const H=new iu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=Math.log(2);class ru{constructor(e){const t=r=>parseInt(Math.log(r)/su,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bt=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=n[l],u=t?t(h):h,new G(u,h.node,G.BLACK,null,null);{const f=parseInt(d/2,10)+l,_=s(l,f),g=s(f+1,c);return h=n[f],u=t?t(h):h,new G(u,h.node,G.BLACK,_,g)}},r=function(l){let c=null,d=null,h=n.length;const u=function(_,g){const D=h-_,C=h;h-=_;const R=s(D+1,C),v=n[D],b=t?t(v):v;f(new G(b,v.node,g,null,R))},f=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),D=Math.pow(2,l.count-(_+1));g?u(D,G.BLACK):(u(D,G.BLACK),u(D,G.RED))}return d},o=new ru(n.length),a=r(o);return new Q(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;const xe={};class le{static get Default(){return p(xe&&H,"ChildrenNode.ts has not been loaded"),vn=vn||new le({".priority":xe},{".priority":H}),vn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=We(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Q?t:null}hasIndex(e){return de(this.indexSet_,e.toString())}addIndex(e,t){p(e!==He,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(M.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Bt(i,e.getCompare()):a=xe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new le(d,c)}addToIndexes(e,t){const i=kt(this.indexes_,(s,r)=>{const o=We(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===xe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(M.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Bt(a,o.getCompare())}else return xe;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new M(e.name,a))),l.insert(e,e.node)}});return new le(i,this.indexSet_)}removeFromIndexes(e,t){const i=kt(this.indexes_,s=>{if(s===xe)return s;{const r=t.get(e.name);return r?s.remove(new M(e.name,r)):s}});return new le(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze;class I{static get EMPTY_NODE(){return Ze||(Ze=new I(new Q(Ei),null,le.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ho(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ze}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ze:t}}getChild(e){const t=k(e);return t===null?this:this.getImmediateChild(t).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new M(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ze:this.priorityNode_;return new I(s,o,r)}}updateChild(e,t){const i=k(e);if(i===null)return t;{p(k(e)!==".priority"||ve(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(B(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(H,(o,a)=>{t[o]=a.val(e),i++,r&&I.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uo(this.getPriority().val())+":"),this.forEachChild(H,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Fr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new M(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wt?-1:0}withIndex(e){if(e===He||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===He||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(H),s=t.getIterator(H);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===He?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ou extends I{constructor(){super(new Q(Ei),I.EMPTY_NODE,le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const wt=new ou;Object.defineProperties(M,{MIN:{value:new M(Ve,I.EMPTY_NODE)},MAX:{value:new M(Ne,wt)}});co.__EMPTY_NODE=I.EMPTY_NODE;z.__childrenNodeConstructor=I;eu(wt);nu(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=!0;function $(n,e=null){if(n===null)return I.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new z(t,$(e))}if(!(n instanceof Array)&&au){const t=[];let i=!1;if(X(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=$(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new M(o,l)))}}),t.length===0)return I.EMPTY_NODE;const r=Bt(t,Zc,o=>o.name,Ei);if(i){const o=Bt(t,H.getCompare());return new I(r,$(e),new le({".priority":o},{".priority":H}))}else return new I(r,$(e),le.Default)}else{let t=I.EMPTY_NODE;return X(n,(i,s)=>{if(de(n,i)&&i.substring(0,1)!=="."){const r=$(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority($(e))}}tu($);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends Xt{constructor(e){super(),this.indexPath_=e,p(!O(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?je(e.name,t.name):r}makePost(e,t){const i=$(e),s=I.EMPTY_NODE.updateChild(this.indexPath_,i);return new M(t,s)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,wt);return new M(Ne,e)}toString(){return oo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends Xt{compare(e,t){const i=e.node.compareTo(t.node);return i===0?je(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const i=$(e);return new M(t,i)}toString(){return".value"}}const uu=new cu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){return{type:"value",snapshotNode:n}}function qe(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function dt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ft(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function hu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(dt(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qe(t,i)):o.trackChildChange(ft(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(H,(s,r)=>{t.hasChild(s)||i.trackChildChange(dt(s,r))}),t.isLeafNode()||t.forEachChild(H,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(ft(s,r,o))}else i.trackChildChange(qe(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.indexedFilter_=new wi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_t.getStartPost_(e),this.endPost_=_t.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new M(t,i))||(i=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=I.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(I.EMPTY_NODE);const r=this;return t.forEachChild(H,(o,a)=>{r.matches(new M(o,a))||(s=s.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new _t(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new M(t,i))||(i=I.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(I.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,f)=>h(f,u)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new M(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(d&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(ft(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(dt(t,h));const g=a.updateImmediateChild(t,I.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(qe(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(dt(c.name,c.node)),r.trackChildChange(qe(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,I.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=H}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ve}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ne}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===H}copy(){const e=new Ii;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fu(n){return n.loadsAllData()?new wi(n.getIndex()):n.hasLimit()?new du(n):new _t(n)}function Ss(n){const e={};if(n.isDefault())return e;let t;if(n.index_===H?t="$priority":n.index_===uu?t="$value":n.index_===He?t="$key":(p(n.index_ instanceof lu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=W(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=W(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+W(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=W(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+W(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ts(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==H&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends io{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Et("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ut.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ss(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),We(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=Ut.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ss(e._queryParams),i=e._path.toString(),s=new Qt;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ha(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=lt(a.responseText)}catch{J("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&J("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return{value:null,children:new Map}}function go(n,e,t){if(O(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=k(e);n.children.has(i)||n.children.set(i,Ht());const s=n.children.get(i);e=B(e),go(s,e,t)}}function ni(n,e,t){n.value!==null?t(e,n.value):pu(n,(i,s)=>{const r=new L(e.toString()+"/"+i);ni(s,r,t)})}function pu(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&X(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=10*1e3,mu=30*1e3,yu=5*60*1e3;class Cu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gu(e);const i=Ns+(mu-Ns)*Math.random();st(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;X(e,(s,r)=>{r>0&&de(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),st(this.reportStats_.bind(this),Math.floor(Math.random()*2*yu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ne||(ne={}));function mo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Si(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ne.ACK_USER_WRITE,this.source=mo()}operationForChild(e){if(O(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new L(e));return new Wt(x(),t,this.revert)}}else return p(k(this.path)===e,"operationForChild called for unrelated child."),new Wt(B(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.source=e,this.path=t,this.type=ne.LISTEN_COMPLETE}operationForChild(e){return O(this.path)?new pt(this.source,x()):new pt(this.source,B(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ne.OVERWRITE}operationForChild(e){return O(this.path)?new Re(this.source,x(),this.snap.getImmediateChild(e)):new Re(this.source,B(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ne.MERGE}operationForChild(e){if(O(this.path)){const t=this.children.subtree(new L(e));return t.isEmpty()?null:t.value?new Re(this.source,x(),t.value):new gt(this.source,x(),t)}else return p(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(O(e))return this.isFullyInitialized()&&!this.filtered_;const t=k(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Eu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hu(o.childName,o.snapshotNode))}),et(n,s,"child_removed",e,i,t),et(n,s,"child_added",e,i,t),et(n,s,"child_moved",r,i,t),et(n,s,"child_changed",e,i,t),et(n,s,"value",e,i,t),s}function et(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Iu(n,a,l)),o.forEach(a=>{const l=wu(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function wu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Iu(n,e,t){if(e.childName==null||t.childName==null)throw $e("Should only compare child_ events.");const i=new M(e.childName,e.snapshotNode),s=new M(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,e){return{eventCache:n,serverCache:e}}function rt(n,e,t,i){return Zt(new Ee(e,t,i),n.serverCache)}function yo(n,e,t,i){return Zt(n.eventCache,new Ee(e,t,i))}function Vt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ae(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En;const bu=()=>(En||(En=new Q(cc)),En);class U{static fromObject(e){let t=new U(null);return X(e,(i,s)=>{t=t.set(new L(i),s)}),t}constructor(e,t=bu()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(O(e))return null;{const i=k(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(B(e),t);return r!=null?{path:V(new L(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(O(e))return this;{const t=k(e),i=this.children.get(t);return i!==null?i.subtree(B(e)):new U(null)}}set(e,t){if(O(e))return new U(t,this.children);{const i=k(e),r=(this.children.get(i)||new U(null)).set(B(e),t),o=this.children.insert(i,r);return new U(this.value,o)}}remove(e){if(O(e))return this.children.isEmpty()?new U(null):new U(null,this.children);{const t=k(e),i=this.children.get(t);if(i){const s=i.remove(B(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new U(null):new U(this.value,r)}else return this}}get(e){if(O(e))return this.value;{const t=k(e),i=this.children.get(t);return i?i.get(B(e)):null}}setTree(e,t){if(O(e))return t;{const i=k(e),r=(this.children.get(i)||new U(null)).setTree(B(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new U(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(V(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(O(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(B(e),V(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,i){if(O(e))return this;{this.value&&i(t,this.value);const s=k(e),r=this.children.get(s);return r?r.foreachOnPath_(B(e),V(t,s),i):new U(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(V(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.writeTree_=e}static empty(){return new ie(new U(null))}}function ot(n,e,t){if(O(e))return new ie(new U(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=K(s,e);return r=r.updateChild(o,t),new ie(n.writeTree_.set(s,r))}else{const s=new U(t),r=n.writeTree_.setTree(e,s);return new ie(r)}}}function Rs(n,e,t){let i=n;return X(t,(s,r)=>{i=ot(i,V(e,s),r)}),i}function As(n,e){if(O(e))return ie.empty();{const t=n.writeTree_.setTree(e,new U(null));return new ie(t)}}function ii(n,e){return De(n,e)!=null}function De(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(K(t.path,e)):null}function Ps(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(H,(i,s)=>{e.push(new M(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new M(i,s.value))}),e}function ye(n,e){if(O(e))return n;{const t=De(n,e);return t!=null?new ie(new U(t)):new ie(n.writeTree_.subtree(e))}}function si(n){return n.writeTree_.isEmpty()}function ze(n,e){return Co(x(),n.writeTree_,e)}function Co(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Co(V(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(V(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,e){return Io(e,n)}function Su(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ot(n.visibleWrites,e,t)),n.lastWriteId=i}function Tu(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Nu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Ru(a,i.path)?s=!1:te(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Au(n),!0;if(i.snap)n.visibleWrites=As(n.visibleWrites,i.path);else{const a=i.children;X(a,l=>{n.visibleWrites=As(n.visibleWrites,V(i.path,l))})}return!0}else return!1}function Ru(n,e){if(n.snap)return te(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&te(V(n.path,t),e))return!0;return!1}function Au(n){n.visibleWrites=vo(n.allWrites,Pu,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Pu(n){return n.visible}function vo(n,e,t){let i=ie.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)te(t,o)?(a=K(t,o),i=ot(i,a,r.snap)):te(o,t)&&(a=K(o,t),i=ot(i,x(),r.snap.getChild(a)));else if(r.children){if(te(t,o))a=K(t,o),i=Rs(i,a,r.children);else if(te(o,t))if(a=K(o,t),O(a))i=Rs(i,x(),r.children);else{const l=We(r.children,k(a));if(l){const c=l.getChild(B(a));i=ot(i,x(),c)}}}else throw $e("WriteRecord should have .snap or .children")}}return i}function Eo(n,e,t,i,s){if(!i&&!s){const r=De(n.visibleWrites,e);if(r!=null)return r;{const o=ye(n.visibleWrites,e);if(si(o))return t;if(t==null&&!ii(o,x()))return null;{const a=t||I.EMPTY_NODE;return ze(o,a)}}}else{const r=ye(n.visibleWrites,e);if(!s&&si(r))return t;if(!s&&t==null&&!ii(r,x()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(te(c.path,e)||te(e,c.path))},a=vo(n.allWrites,o,e),l=t||I.EMPTY_NODE;return ze(a,l)}}}function Du(n,e,t){let i=I.EMPTY_NODE;const s=De(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(H,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=ye(n.visibleWrites,e);return t.forEachChild(H,(o,a)=>{const l=ze(ye(r,new L(o)),a);i=i.updateImmediateChild(o,l)}),Ps(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ye(n.visibleWrites,e);return Ps(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ku(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=V(e,t);if(ii(n.visibleWrites,r))return null;{const o=ye(n.visibleWrites,r);return si(o)?s.getChild(t):ze(o,s.getChild(t))}}function Mu(n,e,t,i){const s=V(e,t),r=De(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=ye(n.visibleWrites,s);return ze(o,i.getNode().getImmediateChild(t))}else return null}function Ou(n,e){return De(n.visibleWrites,e)}function xu(n,e,t,i,s,r,o){let a;const l=ye(n.visibleWrites,e),c=De(l,x());if(c!=null)a=c;else if(t!=null)a=ze(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=u.getNext();for(;f&&d.length<s;)h(f,i)!==0&&d.push(f),f=u.getNext();return d}else return[]}function Lu(){return{visibleWrites:ie.empty(),allWrites:[],lastWriteId:-1}}function qt(n,e,t,i){return Eo(n.writeTree,n.treePath,e,t,i)}function Ti(n,e){return Du(n.writeTree,n.treePath,e)}function Ds(n,e,t,i){return ku(n.writeTree,n.treePath,e,t,i)}function zt(n,e){return Ou(n.writeTree,V(n.treePath,e))}function Fu(n,e,t,i,s,r){return xu(n.writeTree,n.treePath,e,t,i,s,r)}function Ni(n,e,t){return Mu(n.writeTree,n.treePath,e,t)}function wo(n,e){return Io(V(n.treePath,e),n.writeTree)}function Io(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,ft(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,dt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,qe(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,ft(i,e.snapshotNode,s.oldSnap));else throw $e("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const bo=new Uu;class Ri{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ee(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ni(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ae(this.viewCache_),r=Fu(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){return{filter:n}}function Wu(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Vu(n,e,t,i,s){const r=new Bu;let o,a;if(t.type===ne.OVERWRITE){const c=t;c.source.fromUser?o=ri(n,e,c.path,c.snap,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!O(c.path),o=Gt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ne.MERGE){const c=t;c.source.fromUser?o=zu(n,e,c.path,c.children,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=oi(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ne.ACK_USER_WRITE){const c=t;c.revert?o=ju(n,e,c.path,i,s,r):o=Gu(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ne.LISTEN_COMPLETE)o=$u(n,e,t.path,i,r);else throw $e("Unknown operation type: "+t.type);const l=r.getChanges();return qu(e,o,l),{viewCache:o,changes:l}}function qu(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Vt(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(po(Vt(e)))}}function So(n,e,t,i,s,r){const o=e.eventCache;if(zt(i,t)!=null)return e;{let a,l;if(O(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ae(e),d=c instanceof I?c:I.EMPTY_NODE,h=Ti(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=qt(i,Ae(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(t);if(c===".priority"){p(ve(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=Ds(i,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=B(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Ds(i,t,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=Ni(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,s,r):a=o.getNode()}}return rt(e,a,o.isFullyInitialized()||O(t),n.filter.filtersNodes())}}function Gt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(O(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),f,null)}else{const f=k(t);if(!l.isCompleteForPath(t)&&ve(t)>1)return e;const _=B(t),D=l.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?c=d.updatePriority(l.getNode(),D):c=d.updateChild(l.getNode(),f,D,_,bo,null)}const h=yo(e,c,l.isFullyInitialized()||O(t),d.filtersNodes()),u=new Ri(s,h,r);return So(n,h,t,s,u,a)}function ri(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new Ri(s,e,r);if(O(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=rt(e,c,!0,n.filter.filtersNodes());else{const h=k(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=rt(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=B(t),f=a.getNode().getImmediateChild(h);let _;if(O(u))_=i;else{const g=d.getCompleteChild(h);g!=null?ro(u)===".priority"&&g.getChild(ao(u)).isEmpty()?_=g:_=g.updateChild(u,i):_=I.EMPTY_NODE}if(f.equals(_))l=e;else{const g=n.filter.updateChild(a.getNode(),h,_,u,d,o);l=rt(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ks(n,e){return n.eventCache.isCompleteForChild(e)}function zu(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=V(t,l);ks(e,k(d))&&(a=ri(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=V(t,l);ks(e,k(d))||(a=ri(n,a,d,c,s,r,o))}),a}function Ms(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function oi(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;O(t)?c=i:c=new U(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=Ms(n,f,u);l=Gt(n,l,new L(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,u)=>{const f=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),g=Ms(n,_,u);l=Gt(n,l,new L(h),g,s,r,o,a)}}),l}function Gu(n,e,t,i,s,r,o){if(zt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(O(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Gt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(O(t)){let c=new U(null);return l.getNode().forEachChild(He,(d,h)=>{c=c.set(new L(d),h)}),oi(n,e,t,c,s,r,a,o)}else return e}else{let c=new U(null);return i.foreach((d,h)=>{const u=V(t,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),oi(n,e,t,c,s,r,a,o)}}function $u(n,e,t,i,s){const r=e.serverCache,o=yo(e,r.getNode(),r.isFullyInitialized()||O(t),r.isFiltered());return So(n,o,t,i,bo,s)}function ju(n,e,t,i,s,r){let o;if(zt(i,t)!=null)return e;{const a=new Ri(i,e,s),l=e.eventCache.getNode();let c;if(O(t)||k(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=qt(i,Ae(e));else{const h=e.serverCache.getNode();p(h instanceof I,"serverChildren would be complete if leaf node"),d=Ti(i,h)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=k(t);let h=Ni(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,B(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,I.EMPTY_NODE,B(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qt(i,Ae(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||zt(i,x())!=null,rt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new wi(i.getIndex()),r=fu(i);this.processor_=Hu(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(I.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(I.EMPTY_NODE,a.getNode(),null),d=new Ee(l,o.isFullyInitialized(),s.filtersNodes()),h=new Ee(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zt(h,d),this.eventGenerator_=new vu(this.query_)}get query(){return this.query_}}function Ku(n){return n.viewCache_.serverCache.getNode()}function Qu(n){return Vt(n.viewCache_)}function Ju(n,e){const t=Ae(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!O(e)&&!t.getImmediateChild(k(e)).isEmpty())?t.getChild(e):null}function Os(n){return n.eventRegistrations_.length===0}function Xu(n,e){n.eventRegistrations_.push(e)}function xs(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Ls(n,e,t,i){e.type===ne.MERGE&&e.source.queryId!==null&&(p(Ae(n.viewCache_),"We should always have a full cache before handling merges"),p(Vt(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Vu(n.processor_,s,e,t,i);return Wu(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,To(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Zu(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(H,(r,o)=>{i.push(qe(r,o))}),t.isFullyInitialized()&&i.push(po(t.getNode())),To(n,i,t.getNode(),e)}function To(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Eu(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t;class No{constructor(){this.views=new Map}}function eh(n){p(!$t,"__referenceConstructor has already been defined"),$t=n}function th(){return p($t,"Reference.ts has not been loaded"),$t}function nh(n){return n.views.size===0}function Ai(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),Ls(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Ls(o,e,t,i));return r}}function Ro(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=qt(t,s?i:null),l=!1;a?l=!0:i instanceof I?(a=Ti(t,i),l=!1):(a=I.EMPTY_NODE,l=!1);const c=Zt(new Ee(a,l,!1),new Ee(i,s,!1));return new Yu(e,c)}return o}function ih(n,e,t,i,s,r){const o=Ro(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Xu(o,t),Zu(o,t)}function sh(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=we(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(xs(c,t,i)),Os(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(xs(l,t,i)),Os(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!we(n)&&r.push(new(th())(e._repo,e._path)),{removed:r,events:o}}function Ao(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ce(n,e){let t=null;for(const i of n.views.values())t=t||Ju(i,e);return t}function Po(n,e){if(e._queryParams.loadsAllData())return tn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Do(n,e){return Po(n,e)!=null}function we(n){return tn(n)!=null}function tn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;function rh(n){p(!jt,"__referenceConstructor has already been defined"),jt=n}function oh(){return p(jt,"Reference.ts has not been loaded"),jt}let ah=1;class Fs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new U(null),this.pendingWriteTree_=Lu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ko(n,e,t,i,s){return Su(n.pendingWriteTree_,e,t,i,s),s?bt(n,new Re(mo(),e,t)):[]}function Te(n,e,t=!1){const i=Tu(n.pendingWriteTree_,e);if(Nu(n.pendingWriteTree_,e)){let r=new U(null);return i.snap!=null?r=r.set(x(),!0):X(i.children,o=>{r=r.set(new L(o),!0)}),bt(n,new Wt(i.path,r,t))}else return[]}function It(n,e,t){return bt(n,new Re(bi(),e,t))}function lh(n,e,t){const i=U.fromObject(t);return bt(n,new gt(bi(),e,i))}function ch(n,e){return bt(n,new pt(bi(),e))}function uh(n,e,t){const i=Di(n,t);if(i){const s=ki(i),r=s.path,o=s.queryId,a=K(r,e),l=new pt(Si(o),a);return Mi(n,r,l)}else return[]}function Yt(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Do(o,e))){const l=sh(o,e,t,i);nh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(u,f)=>we(f));if(d&&!h){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=fh(u);for(let _=0;_<f.length;++_){const g=f[_],D=g.query,C=Lo(n,g);n.listenProvider_.startListening(at(D),mt(n,D),C.hashFn,C.onComplete)}}}!h&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(at(e),null):c.forEach(u=>{const f=n.queryToTagMap.get(nn(u));n.listenProvider_.stopListening(at(u),f)}))}_h(n,c)}return a}function Mo(n,e,t,i){const s=Di(n,i);if(s!=null){const r=ki(s),o=r.path,a=r.queryId,l=K(o,e),c=new Re(Si(a),l,t);return Mi(n,o,c)}else return[]}function hh(n,e,t,i){const s=Di(n,i);if(s){const r=ki(s),o=r.path,a=r.queryId,l=K(o,e),c=U.fromObject(t),d=new gt(Si(a),l,c);return Mi(n,o,d)}else return[]}function ai(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,f)=>{const _=K(u,s);r=r||Ce(f,_),o=o||we(f)});let a=n.syncPointTree_.get(s);a?(o=o||we(a),r=r||Ce(a,x())):(a=new No,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=I.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,_)=>{const g=Ce(_,x());g&&(r=r.updateImmediateChild(f,g))}));const c=Do(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=nn(e);p(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=ph();n.queryToTagMap.set(u,f),n.tagToQueryMap.set(f,u)}const d=en(n.pendingWriteTree_,s);let h=ih(a,e,t,d,r,l);if(!c&&!o&&!i){const u=Po(a,e);h=h.concat(gh(n,e,u))}return h}function Pi(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=K(o,e),c=Ce(a,l);if(c)return c});return Eo(s,e,r,t,!0)}function dh(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,d)=>{const h=K(c,t);i=i||Ce(d,h)});let s=n.syncPointTree_.get(t);s?i=i||Ce(s,x()):(s=new No,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Ee(i,!0,!1):null,a=en(n.pendingWriteTree_,e._path),l=Ro(s,e,a,r?o.getNode():I.EMPTY_NODE,r);return Qu(l)}function bt(n,e){return Oo(e,n.syncPointTree_,null,en(n.pendingWriteTree_,x()))}function Oo(n,e,t,i){if(O(n.path))return xo(n,e,t,i);{const s=e.get(x());t==null&&s!=null&&(t=Ce(s,x()));let r=[];const o=k(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=wo(i,o);r=r.concat(Oo(a,l,c,d))}return s&&(r=r.concat(Ai(s,n,i,t))),r}}function xo(n,e,t,i){const s=e.get(x());t==null&&s!=null&&(t=Ce(s,x()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=wo(i,o),d=n.operationForChild(o);d&&(r=r.concat(xo(d,a,l,c)))}),s&&(r=r.concat(Ai(s,n,i,t))),r}function Lo(n,e){const t=e.query,i=mt(n,t);return{hashFn:()=>(Ku(e)||I.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?uh(n,t._path,i):ch(n,t._path);{const r=dc(s,t);return Yt(n,t,null,r)}}}}function mt(n,e){const t=nn(e);return n.queryToTagMap.get(t)}function nn(n){return n._path.toString()+"$"+n._queryIdentifier}function Di(n,e){return n.tagToQueryMap.get(e)}function ki(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new L(n.substr(0,e))}}function Mi(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=en(n.pendingWriteTree_,e);return Ai(i,t,s,null)}function fh(n){return n.fold((e,t,i)=>{if(t&&we(t))return[tn(t)];{let s=[];return t&&(s=Ao(t)),X(i,(r,o)=>{s=s.concat(o)}),s}})}function at(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(oh())(n._repo,n._path):n}function _h(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=nn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function ph(){return ah++}function gh(n,e,t){const i=e._path,s=mt(n,e),r=Lo(n,t),o=n.listenProvider_.startListening(at(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!we(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!O(c)&&d&&we(d))return[tn(d).query];{let u=[];return d&&(u=u.concat(Ao(d).map(f=>f.query))),X(h,(f,_)=>{u=u.concat(_)}),u}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(at(d),mt(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Oi(t)}node(){return this.node_}}class xi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=V(this.path_,e);return new xi(this.syncTree_,t)}node(){return Pi(this.syncTree_,this.path_)}}const mh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Bs=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return yh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Ch(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},yh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Ch=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},vh=function(n,e,t,i){return Li(e,new xi(t,n),i)},Fo=function(n,e,t){return Li(n,new Oi(e),t)};function Li(n,e,t){const i=n.getPriority().val(),s=Bs(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Bs(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new z(a,$(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new z(s))),o.forEachChild(H,(a,l)=>{const c=Li(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Bi(n,e){let t=e instanceof L?e:new L(e),i=n,s=k(t);for(;s!==null;){const r=We(i.node.children,s)||{children:{},childCount:0};i=new Fi(s,i,r),t=B(t),s=k(t)}return i}function Ke(n){return n.node.value}function Bo(n,e){n.node.value=e,li(n)}function Uo(n){return n.node.childCount>0}function Eh(n){return Ke(n)===void 0&&!Uo(n)}function sn(n,e){X(n.node.children,(t,i)=>{e(new Fi(t,n,i))})}function Ho(n,e,t,i){t&&e(n),sn(n,s=>{Ho(s,e,!0)})}function wh(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function St(n){return new L(n.parent===null?n.name:St(n.parent)+"/"+n.name)}function li(n){n.parent!==null&&Ih(n.parent,n.name,n)}function Ih(n,e,t){const i=Eh(t),s=de(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,li(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,li(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=/[\[\].#$\/\u0000-\u001F\u007F]/,Sh=/[\[\].#$\u0000-\u001F\u007F]/,wn=10*1024*1024,Wo=function(n){return typeof n=="string"&&n.length!==0&&!bh.test(n)},Vo=function(n){return typeof n=="string"&&n.length!==0&&!Sh.test(n)},Th=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vo(n)},qo=function(n,e,t,i){i&&e===void 0||Ui(fi(n,"value"),e,t)},Ui=function(n,e,t){const i=t instanceof L?new Gc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+be(i));if(typeof e=="function")throw new Error(n+"contains a function "+be(i)+" with contents = "+e.toString());if(Br(e))throw new Error(n+"contains "+e.toString()+" "+be(i));if(typeof e=="string"&&e.length>wn/3&&Jt(e)>wn)throw new Error(n+"contains a string greater than "+wn+" utf8 bytes "+be(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(X(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wo(o)))throw new Error(n+" contains an invalid key ("+o+") "+be(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$c(i,o),Ui(n,a,i),jc(i)}),s&&r)throw new Error(n+' contains ".value" child '+be(i)+" in addition to actual children.")}},zo=function(n,e,t,i){if(!Vo(t))throw new Error(fi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zo(n,e,t)},Go=function(n,e){if(k(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Rh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Th(t))throw new Error(fi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Ci(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function $o(n,e,t){Hi(n,t),jo(n,i=>Ci(i,e))}function re(n,e,t){Hi(n,t),jo(n,i=>te(i,e)||te(e,i))}function jo(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Ph(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ph(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();it&&j("event: "+t.toString()),Ye(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="repo_interrupt",kh=25;class Mh{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ah,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ht(),this.transactionQueueTree_=new Fi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Oh(n,e,t){if(n.stats_=mi(n.repoInfo_),n.forceRestClient_||gc())n.server_=new Ut(n.repoInfo_,(i,s,r,o)=>{Us(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Hs(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ce(n.repoInfo_,e,(i,s,r,o)=>{Us(n,i,s,r,o)},i=>{Hs(n,i)},i=>{xh(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Ec(n.repoInfo_,()=>new Cu(n.stats_,n.server_)),n.infoData_=new _u,n.infoSyncTree_=new Fs({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=It(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vi(n,"connected",!1),n.serverSyncTree_=new Fs({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);re(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Yo(n){const t=n.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Wi(n){return mh({timestamp:Yo(n)})}function Us(n,e,t,i,s){n.dataUpdateCount++;const r=new L(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=kt(t,c=>$(c));o=hh(n.serverSyncTree_,r,l,s)}else{const l=$(t);o=Mo(n.serverSyncTree_,r,l,s)}else if(i){const l=kt(t,c=>$(c));o=lh(n.serverSyncTree_,r,l)}else{const l=$(t);o=It(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=on(n,r)),re(n.eventQueue_,a,o)}function Hs(n,e){Vi(n,"connected",e),e===!1&&Bh(n)}function xh(n,e){X(e,(t,i)=>{Vi(n,t,i)})}function Vi(n,e,t){const i=new L("/.info/"+e),s=$(t);n.infoData_.updateSnapshot(i,s);const r=It(n.infoSyncTree_,i,s);re(n.eventQueue_,i,r)}function Ko(n){return n.nextWriteId_++}function Lh(n,e,t){const i=dh(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=$(s).withIndex(e._queryParams.getIndex());ai(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=It(n.serverSyncTree_,e._path,r);else{const a=mt(n.serverSyncTree_,e);o=Mo(n.serverSyncTree_,e._path,r,a)}return re(n.eventQueue_,e._path,o),Yt(n.serverSyncTree_,e,t,null,!0),r},s=>(rn(n,"get for query "+W(e)+" failed: "+s),Promise.reject(new Error(s))))}function Fh(n,e,t,i,s){rn(n,"set",{path:e.toString(),value:t,priority:i});const r=Wi(n),o=$(t,i),a=Pi(n.serverSyncTree_,e),l=Fo(o,a,r),c=Ko(n),d=ko(n.serverSyncTree_,e,l,c,!0);Hi(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,f)=>{const _=u==="ok";_||J("set at "+e+" failed: "+u);const g=Te(n.serverSyncTree_,c,!_);re(n.eventQueue_,e,g),Vh(n,s,u,f)});const h=ea(n,e);on(n,h),re(n.eventQueue_,h,[])}function Bh(n){rn(n,"onDisconnectEvents");const e=Wi(n),t=Ht();ni(n.onDisconnect_,x(),(s,r)=>{const o=vh(s,r,n.serverSyncTree_,e);go(t,s,o)});let i=[];ni(t,x(),(s,r)=>{i=i.concat(It(n.serverSyncTree_,s,r));const o=ea(n,s);on(n,o)}),n.onDisconnect_=Ht(),re(n.eventQueue_,x(),i)}function Uh(n,e,t){let i;k(e._path)===".info"?i=ai(n.infoSyncTree_,e,t):i=ai(n.serverSyncTree_,e,t),$o(n.eventQueue_,e._path,i)}function Hh(n,e,t){let i;k(e._path)===".info"?i=Yt(n.infoSyncTree_,e,t):i=Yt(n.serverSyncTree_,e,t),$o(n.eventQueue_,e._path,i)}function Wh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Dh)}function rn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),j(t,...e)}function Vh(n,e,t,i){e&&Ye(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Qo(n,e,t){return Pi(n.serverSyncTree_,e,t)||I.EMPTY_NODE}function qi(n,e=n.transactionQueueTree_){if(e||an(n,e),Ke(e)){const t=Xo(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&qh(n,St(e),t)}else Uo(e)&&sn(e,t=>{qi(n,t)})}function qh(n,e,t){const i=t.map(c=>c.currentWriteId),s=Qo(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];p(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=K(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{rn(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(Te(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();an(n,Bi(n.transactionQueueTree_,e)),qi(n,n.transactionQueueTree_),re(n.eventQueue_,e,d);for(let u=0;u<h.length;u++)Ye(h[u])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{J("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}on(n,e)}},o)}function on(n,e){const t=Jo(n,e),i=St(t),s=Xo(n,t);return zh(n,s,i),i}function zh(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=K(t,l.path);let d=!1,h;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(Te(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kh)d=!0,h="maxretry",s=s.concat(Te(n.serverSyncTree_,l.currentWriteId,!0));else{const u=Qo(n,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){Ui("transaction failed: Data returned ",f,l.path);let _=$(f);typeof f=="object"&&f!=null&&de(f,".priority")||(_=_.updatePriority(u.getPriority()));const D=l.currentWriteId,C=Wi(n),R=Fo(_,u,C);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=R,l.currentWriteId=Ko(n),o.splice(o.indexOf(D),1),s=s.concat(ko(n.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),s=s.concat(Te(n.serverSyncTree_,D,!0))}else d=!0,h="nodata",s=s.concat(Te(n.serverSyncTree_,l.currentWriteId,!0))}re(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}an(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ye(i[a]);qi(n,n.transactionQueueTree_)}function Jo(n,e){let t,i=n.transactionQueueTree_;for(t=k(e);t!==null&&Ke(i)===void 0;)i=Bi(i,t),e=B(e),t=k(e);return i}function Xo(n,e){const t=[];return Zo(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Zo(n,e,t){const i=Ke(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);sn(e,s=>{Zo(n,s,t)})}function an(n,e){const t=Ke(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Bo(e,t.length>0?t:void 0)}sn(e,i=>{an(n,i)})}function ea(n,e){const t=St(Jo(n,e)),i=Bi(n.transactionQueueTree_,e);return wh(i,s=>{In(n,s)}),In(n,i),Ho(i,s=>{In(n,s)}),t}function In(n,e){const t=Ke(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Te(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bo(e,void 0):t.length=r+1,re(n.eventQueue_,St(e),s);for(let o=0;o<i.length;o++)Ye(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function $h(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):J(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ws=function(n,e){const t=jh(n),i=t.namespace;t.domain==="firebase.com"&&he(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&he("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ac();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qr(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new L(t.pathString)}},jh=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(s=Gh(n.substring(d,h)));const u=$h(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Yh=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Vs.charAt(t%64),t=Math.floor(t/64);p(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Vs.charAt(e[s]);return p(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())}}class Qh{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return O(this._path)?null:ro(this._path)}get ref(){return new fe(this._repo,this._path)}get _queryIdentifier(){const e=Ts(this._queryParams),t=pi(e);return t==="{}"?"default":t}get _queryObject(){return Ts(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof zi))return!1;const t=this._repo===e._repo,i=Ci(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+zc(this._path)}}class fe extends zi{constructor(e,t){super(e,t,new Ii,!1)}get parent(){const e=ao(this._path);return e===null?null:new fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new L(e),i=Z(this.ref,e);return new yt(this._node.getChild(t),i,H)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new yt(s,Z(this.ref,i),H)))}hasChild(e){const t=new L(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function na(n,e){return n=Pe(n),n._checkNotDeleted("ref"),e!==void 0?Z(n._root,e):n._root}function Z(n,e){return n=Pe(n),k(n._path)===null?Nh("child","path",e):zo("child","path",e),new fe(n._repo,V(n._path,e))}function ia(n,e){n=Pe(n),Go("push",n._path),qo("push",e,n._path,!0);const t=Yo(n._repo),i=Yh(t),s=Z(n,i),r=Z(n,i);let o;return e!=null?o=Gi(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Gi(n,e){n=Pe(n),Go("set",n._path),qo("set",e,n._path,!1);const t=new Qt;return Fh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Jh(n){n=Pe(n);const e=new ta(()=>{}),t=new ln(e);return Lh(n._repo,n,t).then(i=>new yt(i,new fe(n._repo,n._path),n._queryParams.getIndex()))}class ln{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Kh("value",this,new yt(e.snapshotNode,new fe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Qh(this,e,t):null}matches(e){return e instanceof ln?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Xh(n,e,t,i,s){const r=new ta(t,void 0),o=new ln(r);return Uh(n._repo,n,o),()=>Hh(n._repo,n,o)}function ci(n,e,t,i){return Xh(n,"value",e)}eh(fe);rh(fe);/**
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
 */const Zh="FIREBASE_DATABASE_EMULATOR_HOST",ui={};let ed=!1;function td(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=di(r);n.repoInfo_=new Qr(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function nd(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||he("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),j("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ws(r,s),a=o.repoInfo,l;typeof process<"u"&&ls&&(l=ls[Zh]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ws(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new yc(n.name,n.options,e);Rh("Invalid Firebase Database URL",o),O(o.path)||he("Database URL must point to the root of a Firebase Database (not including a child path).");const d=sd(a,n,c,new mc(n,t));return new rd(d,n)}function id(n,e){const t=ui[e];(!t||t[n.key]!==n)&&he(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Wh(n),delete t[n.key]}function sd(n,e,t,i){let s=ui[e.name];s||(s={},ui[e.name]=s);let r=s[n.toURLString()];return r&&he("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mh(n,ed,t,i),s[n.toURLString()]=r,r}class rd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Oh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,Sr("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fe(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(id(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&he("Cannot call "+e+" on a deleted database.")}}function od(n=zl(),e){const t=Ul(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Sa("database");i&&ad(t,...i)}return t}function ad(n,e,t,i={}){n=Pe(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Mt(i,r.repoInfo_.emulatorOptions))return;he("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&he('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Pt(Pt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Na(i.mockUserToken,n.app.options.projectId);o=new Pt(a)}di(e)&&(Ta(e),Sr("Database",!0)),td(r,s,i,o)}/**
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
 */function ld(n){tc(ql),xt(new ct("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return nd(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Be(cs,us,n),Be(cs,us,"esm2017")}ce.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ce.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ld();var cd="firebase",ud="11.7.3";/**
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
 */Be(cd,ud,"app");const hd={apiKey:"AIzaSyDJlny8st3P-fJj3m7pr1cnmV67uyYHhLA",authDomain:"webrtc-app-66724.firebaseapp.com",databaseURL:"https://webrtc-app-66724-default-rtdb.firebaseio.com",projectId:"webrtc-app-66724",storageBucket:"webrtc-app-66724.appspot.com",messagingSenderId:"984510450066",appId:"1:984510450066:web:550a3b2ac5804f4fc8594b"},dd=kr(hd),sa=od(dd);function fd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Le={},bn,qs;function _d(){return qs||(qs=1,bn=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),bn}var Sn={},pe={},zs;function ke(){if(zs)return pe;zs=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return pe.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},pe.getSymbolTotalCodewords=function(i){return e[i]},pe.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},pe.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},pe.isKanjiModeEnabled=function(){return typeof n<"u"},pe.toSJIS=function(i){return n(i)},pe}var Tn={},Gs;function $i(){return Gs||(Gs=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,s){if(n.isValid(i))return i;try{return e(i)}catch{return s}}}(Tn)),Tn}var Nn,$s;function pd(){if($s)return Nn;$s=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Nn=n,Nn}var Rn,js;function gd(){if(js)return Rn;js=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,s){const r=e*this.size+t;this.data[r]=i,s&&(this.reservedBit[r]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Rn=n,Rn}var An={},Ys;function md(){return Ys||(Ys=1,function(n){const e=ke().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const s=Math.floor(i/7)+2,r=e(i),o=r===145?26:Math.ceil((r-13)/(2*s-2))*2,a=[r-7];for(let l=1;l<s-1;l++)a[l]=a[l-1]-o;return a.push(6),a.reverse()},n.getPositions=function(i){const s=[],r=n.getRowColCoords(i),o=r.length;for(let a=0;a<o;a++)for(let l=0;l<o;l++)a===0&&l===0||a===0&&l===o-1||a===o-1&&l===0||s.push([r[a],r[l]]);return s}}(An)),An}var Pn={},Ks;function yd(){if(Ks)return Pn;Ks=1;const n=ke().getSymbolSize,e=7;return Pn.getPositions=function(i){const s=n(i);return[[0,0],[s-e,0],[0,s-e]]},Pn}var Dn={},Qs;function Cd(){return Qs||(Qs=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(s){return s!=null&&s!==""&&!isNaN(s)&&s>=0&&s<=7},n.from=function(s){return n.isValid(s)?parseInt(s,10):void 0},n.getPenaltyN1=function(s){const r=s.size;let o=0,a=0,l=0,c=null,d=null;for(let h=0;h<r;h++){a=l=0,c=d=null;for(let u=0;u<r;u++){let f=s.get(h,u);f===c?a++:(a>=5&&(o+=e.N1+(a-5)),c=f,a=1),f=s.get(u,h),f===d?l++:(l>=5&&(o+=e.N1+(l-5)),d=f,l=1)}a>=5&&(o+=e.N1+(a-5)),l>=5&&(o+=e.N1+(l-5))}return o},n.getPenaltyN2=function(s){const r=s.size;let o=0;for(let a=0;a<r-1;a++)for(let l=0;l<r-1;l++){const c=s.get(a,l)+s.get(a,l+1)+s.get(a+1,l)+s.get(a+1,l+1);(c===4||c===0)&&o++}return o*e.N2},n.getPenaltyN3=function(s){const r=s.size;let o=0,a=0,l=0;for(let c=0;c<r;c++){a=l=0;for(let d=0;d<r;d++)a=a<<1&2047|s.get(c,d),d>=10&&(a===1488||a===93)&&o++,l=l<<1&2047|s.get(d,c),d>=10&&(l===1488||l===93)&&o++}return o*e.N3},n.getPenaltyN4=function(s){let r=0;const o=s.data.length;for(let l=0;l<o;l++)r+=s.data[l];return Math.abs(Math.ceil(r*100/o/5)-10)*e.N4};function t(i,s,r){switch(i){case n.Patterns.PATTERN000:return(s+r)%2===0;case n.Patterns.PATTERN001:return s%2===0;case n.Patterns.PATTERN010:return r%3===0;case n.Patterns.PATTERN011:return(s+r)%3===0;case n.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(r/3))%2===0;case n.Patterns.PATTERN101:return s*r%2+s*r%3===0;case n.Patterns.PATTERN110:return(s*r%2+s*r%3)%2===0;case n.Patterns.PATTERN111:return(s*r%3+(s+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(s,r){const o=r.size;for(let a=0;a<o;a++)for(let l=0;l<o;l++)r.isReserved(l,a)||r.xor(l,a,t(s,l,a))},n.getBestMask=function(s,r){const o=Object.keys(n.Patterns).length;let a=0,l=1/0;for(let c=0;c<o;c++){r(c),n.applyMask(c,s);const d=n.getPenaltyN1(s)+n.getPenaltyN2(s)+n.getPenaltyN3(s)+n.getPenaltyN4(s);n.applyMask(c,s),d<l&&(l=d,a=c)}return a}}(Dn)),Dn}var At={},Js;function ra(){if(Js)return At;Js=1;const n=$i(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return At.getBlocksCount=function(s,r){switch(r){case n.L:return e[(s-1)*4+0];case n.M:return e[(s-1)*4+1];case n.Q:return e[(s-1)*4+2];case n.H:return e[(s-1)*4+3];default:return}},At.getTotalCodewordsCount=function(s,r){switch(r){case n.L:return t[(s-1)*4+0];case n.M:return t[(s-1)*4+1];case n.Q:return t[(s-1)*4+2];case n.H:return t[(s-1)*4+3];default:return}},At}var kn={},tt={},Xs;function vd(){if(Xs)return tt;Xs=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let s=0;s<255;s++)n[s]=i,e[i]=s,i<<=1,i&256&&(i^=285);for(let s=255;s<512;s++)n[s]=n[s-255]}(),tt.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},tt.exp=function(i){return n[i]},tt.mul=function(i,s){return i===0||s===0?0:n[e[i]+e[s]]},tt}var Zs;function Ed(){return Zs||(Zs=1,function(n){const e=vd();n.mul=function(i,s){const r=new Uint8Array(i.length+s.length-1);for(let o=0;o<i.length;o++)for(let a=0;a<s.length;a++)r[o+a]^=e.mul(i[o],s[a]);return r},n.mod=function(i,s){let r=new Uint8Array(i);for(;r.length-s.length>=0;){const o=r[0];for(let l=0;l<s.length;l++)r[l]^=e.mul(s[l],o);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},n.generateECPolynomial=function(i){let s=new Uint8Array([1]);for(let r=0;r<i;r++)s=n.mul(s,new Uint8Array([1,e.exp(r)]));return s}}(kn)),kn}var Mn,er;function wd(){if(er)return Mn;er=1;const n=Ed();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const s=new Uint8Array(i.length+this.degree);s.set(i);const r=n.mod(s,this.genPoly),o=this.degree-r.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(r,o),a}return r},Mn=e,Mn}var On={},xn={},Ln={},tr;function oa(){return tr||(tr=1,Ln.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ln}var se={},nr;function aa(){if(nr)return se;nr=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;se.KANJI=new RegExp(t,"g"),se.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),se.BYTE=new RegExp(i,"g"),se.NUMERIC=new RegExp(n,"g"),se.ALPHANUMERIC=new RegExp(e,"g");const s=new RegExp("^"+t+"$"),r=new RegExp("^"+n+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return se.testKanji=function(l){return s.test(l)},se.testNumeric=function(l){return r.test(l)},se.testAlphanumeric=function(l){return o.test(l)},se}var ir;function Me(){return ir||(ir=1,function(n){const e=oa(),t=aa();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(r,o){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?r.ccBits[0]:o<27?r.ccBits[1]:r.ccBits[2]},n.getBestModeForData=function(r){return t.testNumeric(r)?n.NUMERIC:t.testAlphanumeric(r)?n.ALPHANUMERIC:t.testKanji(r)?n.KANJI:n.BYTE},n.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},n.isValid=function(r){return r&&r.bit&&r.ccBits};function i(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+s)}}n.from=function(r,o){if(n.isValid(r))return r;try{return i(r)}catch{return o}}}(xn)),xn}var sr;function Id(){return sr||(sr=1,function(n){const e=ke(),t=ra(),i=$i(),s=Me(),r=oa(),o=7973,a=e.getBCHDigit(o);function l(u,f,_){for(let g=1;g<=40;g++)if(f<=n.getCapacity(g,_,u))return g}function c(u,f){return s.getCharCountIndicator(u,f)+4}function d(u,f){let _=0;return u.forEach(function(g){const D=c(g.mode,f);_+=D+g.getBitsLength()}),_}function h(u,f){for(let _=1;_<=40;_++)if(d(u,_)<=n.getCapacity(_,f,s.MIXED))return _}n.from=function(f,_){return r.isValid(f)?parseInt(f,10):_},n.getCapacity=function(f,_,g){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof g>"u"&&(g=s.BYTE);const D=e.getSymbolTotalCodewords(f),C=t.getTotalCodewordsCount(f,_),R=(D-C)*8;if(g===s.MIXED)return R;const v=R-c(g,f);switch(g){case s.NUMERIC:return Math.floor(v/10*3);case s.ALPHANUMERIC:return Math.floor(v/11*2);case s.KANJI:return Math.floor(v/13);case s.BYTE:default:return Math.floor(v/8)}},n.getBestVersionForData=function(f,_){let g;const D=i.from(_,i.M);if(Array.isArray(f)){if(f.length>1)return h(f,D);if(f.length===0)return 1;g=f[0]}else g=f;return l(g.mode,g.getLength(),D)},n.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let _=f<<12;for(;e.getBCHDigit(_)-a>=0;)_^=o<<e.getBCHDigit(_)-a;return f<<12|_}}(On)),On}var Fn={},rr;function bd(){if(rr)return Fn;rr=1;const n=ke(),e=1335,t=21522,i=n.getBCHDigit(e);return Fn.getEncodedBits=function(r,o){const a=r.bit<<3|o;let l=a<<10;for(;n.getBCHDigit(l)-i>=0;)l^=e<<n.getBCHDigit(l)-i;return(a<<10|l)^t},Fn}var Bn={},Un,or;function Sd(){if(or)return Un;or=1;const n=Me();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let s,r,o;for(s=0;s+3<=this.data.length;s+=3)r=this.data.substr(s,3),o=parseInt(r,10),i.put(o,10);const a=this.data.length-s;a>0&&(r=this.data.substr(s),o=parseInt(r,10),i.put(o,a*3+1))},Un=e,Un}var Hn,ar;function Td(){if(ar)return Hn;ar=1;const n=Me(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(s){return 11*Math.floor(s/2)+6*(s%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(s){let r;for(r=0;r+2<=this.data.length;r+=2){let o=e.indexOf(this.data[r])*45;o+=e.indexOf(this.data[r+1]),s.put(o,11)}this.data.length%2&&s.put(e.indexOf(this.data[r]),6)},Hn=t,Hn}var Wn,lr;function Nd(){if(lr)return Wn;lr=1;const n=Me();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,s=this.data.length;i<s;i++)t.put(this.data[i],8)},Wn=e,Wn}var Vn,cr;function Rd(){if(cr)return Vn;cr=1;const n=Me(),e=ke();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(s){return s*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s<this.data.length;s++){let r=e.toSJIS(this.data[s]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[s]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),i.put(r,13)}},Vn=t,Vn}var qn={exports:{}},ur;function Ad(){return ur||(ur=1,function(n){var e={single_source_shortest_paths:function(t,i,s){var r={},o={};o[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var l,c,d,h,u,f,_,g,D;!a.empty();){l=a.pop(),c=l.value,h=l.cost,u=t[c]||{};for(d in u)u.hasOwnProperty(d)&&(f=u[d],_=h+f,g=o[d],D=typeof o[d]>"u",(D||g>_)&&(o[d]=_,a.push(d,_),r[d]=c))}if(typeof s<"u"&&typeof o[s]>"u"){var C=["Could not find a path from ",i," to ",s,"."].join("");throw new Error(C)}return r},extract_shortest_path_from_predecessor_list:function(t,i){for(var s=[],r=i;r;)s.push(r),t[r],r=t[r];return s.reverse(),s},find_path:function(t,i,s){var r=e.single_source_shortest_paths(t,i,s);return e.extract_shortest_path_from_predecessor_list(r,s)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,s={},r;t=t||{};for(r in i)i.hasOwnProperty(r)&&(s[r]=i[r]);return s.queue=[],s.sorter=t.sorter||i.default_sorter,s},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var s={value:t,cost:i};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(qn)),qn.exports}var hr;function Pd(){return hr||(hr=1,function(n){const e=Me(),t=Sd(),i=Td(),s=Nd(),r=Rd(),o=aa(),a=ke(),l=Ad();function c(C){return unescape(encodeURIComponent(C)).length}function d(C,R,v){const b=[];let q;for(;(q=C.exec(v))!==null;)b.push({data:q[0],index:q.index,mode:R,length:q[0].length});return b}function h(C){const R=d(o.NUMERIC,e.NUMERIC,C),v=d(o.ALPHANUMERIC,e.ALPHANUMERIC,C);let b,q;return a.isKanjiModeEnabled()?(b=d(o.BYTE,e.BYTE,C),q=d(o.KANJI,e.KANJI,C)):(b=d(o.BYTE_KANJI,e.BYTE,C),q=[]),R.concat(v,b,q).sort(function(T,S){return T.index-S.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function u(C,R){switch(R){case e.NUMERIC:return t.getBitsLength(C);case e.ALPHANUMERIC:return i.getBitsLength(C);case e.KANJI:return r.getBitsLength(C);case e.BYTE:return s.getBitsLength(C)}}function f(C){return C.reduce(function(R,v){const b=R.length-1>=0?R[R.length-1]:null;return b&&b.mode===v.mode?(R[R.length-1].data+=v.data,R):(R.push(v),R)},[])}function _(C){const R=[];for(let v=0;v<C.length;v++){const b=C[v];switch(b.mode){case e.NUMERIC:R.push([b,{data:b.data,mode:e.ALPHANUMERIC,length:b.length},{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.ALPHANUMERIC:R.push([b,{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.KANJI:R.push([b,{data:b.data,mode:e.BYTE,length:c(b.data)}]);break;case e.BYTE:R.push([{data:b.data,mode:e.BYTE,length:c(b.data)}])}}return R}function g(C,R){const v={},b={start:{}};let q=["start"];for(let y=0;y<C.length;y++){const T=C[y],S=[];for(let m=0;m<T.length;m++){const A=T[m],E=""+y+m;S.push(E),v[E]={node:A,lastCount:0},b[E]={};for(let N=0;N<q.length;N++){const w=q[N];v[w]&&v[w].node.mode===A.mode?(b[w][E]=u(v[w].lastCount+A.length,A.mode)-u(v[w].lastCount,A.mode),v[w].lastCount+=A.length):(v[w]&&(v[w].lastCount=A.length),b[w][E]=u(A.length,A.mode)+4+e.getCharCountIndicator(A.mode,R))}}q=S}for(let y=0;y<q.length;y++)b[q[y]].end=0;return{map:b,table:v}}function D(C,R){let v;const b=e.getBestModeForData(C);if(v=e.from(R,b),v!==e.BYTE&&v.bit<b.bit)throw new Error('"'+C+'" cannot be encoded with mode '+e.toString(v)+`.
 Suggested mode is: `+e.toString(b));switch(v===e.KANJI&&!a.isKanjiModeEnabled()&&(v=e.BYTE),v){case e.NUMERIC:return new t(C);case e.ALPHANUMERIC:return new i(C);case e.KANJI:return new r(C);case e.BYTE:return new s(C)}}n.fromArray=function(R){return R.reduce(function(v,b){return typeof b=="string"?v.push(D(b,null)):b.data&&v.push(D(b.data,b.mode)),v},[])},n.fromString=function(R,v){const b=h(R,a.isKanjiModeEnabled()),q=_(b),y=g(q,v),T=l.find_path(y.map,"start","end"),S=[];for(let m=1;m<T.length-1;m++)S.push(y.table[T[m]].node);return n.fromArray(f(S))},n.rawSplit=function(R){return n.fromArray(h(R,a.isKanjiModeEnabled()))}}(Bn)),Bn}var dr;function Dd(){if(dr)return Sn;dr=1;const n=ke(),e=$i(),t=pd(),i=gd(),s=md(),r=yd(),o=Cd(),a=ra(),l=wd(),c=Id(),d=bd(),h=Me(),u=Pd();function f(y,T){const S=y.size,m=r.getPositions(T);for(let A=0;A<m.length;A++){const E=m[A][0],N=m[A][1];for(let w=-1;w<=7;w++)if(!(E+w<=-1||S<=E+w))for(let P=-1;P<=7;P++)N+P<=-1||S<=N+P||(w>=0&&w<=6&&(P===0||P===6)||P>=0&&P<=6&&(w===0||w===6)||w>=2&&w<=4&&P>=2&&P<=4?y.set(E+w,N+P,!0,!0):y.set(E+w,N+P,!1,!0))}}function _(y){const T=y.size;for(let S=8;S<T-8;S++){const m=S%2===0;y.set(S,6,m,!0),y.set(6,S,m,!0)}}function g(y,T){const S=s.getPositions(T);for(let m=0;m<S.length;m++){const A=S[m][0],E=S[m][1];for(let N=-2;N<=2;N++)for(let w=-2;w<=2;w++)N===-2||N===2||w===-2||w===2||N===0&&w===0?y.set(A+N,E+w,!0,!0):y.set(A+N,E+w,!1,!0)}}function D(y,T){const S=y.size,m=c.getEncodedBits(T);let A,E,N;for(let w=0;w<18;w++)A=Math.floor(w/3),E=w%3+S-8-3,N=(m>>w&1)===1,y.set(A,E,N,!0),y.set(E,A,N,!0)}function C(y,T,S){const m=y.size,A=d.getEncodedBits(T,S);let E,N;for(E=0;E<15;E++)N=(A>>E&1)===1,E<6?y.set(E,8,N,!0):E<8?y.set(E+1,8,N,!0):y.set(m-15+E,8,N,!0),E<8?y.set(8,m-E-1,N,!0):E<9?y.set(8,15-E-1+1,N,!0):y.set(8,15-E-1,N,!0);y.set(m-8,8,1,!0)}function R(y,T){const S=y.size;let m=-1,A=S-1,E=7,N=0;for(let w=S-1;w>0;w-=2)for(w===6&&w--;;){for(let P=0;P<2;P++)if(!y.isReserved(A,w-P)){let _e=!1;N<T.length&&(_e=(T[N]>>>E&1)===1),y.set(A,w-P,_e),E--,E===-1&&(N++,E=7)}if(A+=m,A<0||S<=A){A-=m,m=-m;break}}}function v(y,T,S){const m=new t;S.forEach(function(P){m.put(P.mode.bit,4),m.put(P.getLength(),h.getCharCountIndicator(P.mode,y)),P.write(m)});const A=n.getSymbolTotalCodewords(y),E=a.getTotalCodewordsCount(y,T),N=(A-E)*8;for(m.getLengthInBits()+4<=N&&m.put(0,4);m.getLengthInBits()%8!==0;)m.putBit(0);const w=(N-m.getLengthInBits())/8;for(let P=0;P<w;P++)m.put(P%2?17:236,8);return b(m,y,T)}function b(y,T,S){const m=n.getSymbolTotalCodewords(T),A=a.getTotalCodewordsCount(T,S),E=m-A,N=a.getBlocksCount(T,S),w=m%N,P=N-w,_e=Math.floor(m/N),Qe=Math.floor(E/N),da=Qe+1,ji=_e-Qe,fa=new l(ji);let cn=0;const Tt=new Array(N),Yi=new Array(N);let un=0;const _a=new Uint8Array(y.buffer);for(let Oe=0;Oe<N;Oe++){const dn=Oe<P?Qe:da;Tt[Oe]=_a.slice(cn,cn+dn),Yi[Oe]=fa.encode(Tt[Oe]),cn+=dn,un=Math.max(un,dn)}const hn=new Uint8Array(m);let Ki=0,oe,ae;for(oe=0;oe<un;oe++)for(ae=0;ae<N;ae++)oe<Tt[ae].length&&(hn[Ki++]=Tt[ae][oe]);for(oe=0;oe<ji;oe++)for(ae=0;ae<N;ae++)hn[Ki++]=Yi[ae][oe];return hn}function q(y,T,S,m){let A;if(Array.isArray(y))A=u.fromArray(y);else if(typeof y=="string"){let _e=T;if(!_e){const Qe=u.rawSplit(y);_e=c.getBestVersionForData(Qe,S)}A=u.fromString(y,_e||40)}else throw new Error("Invalid data");const E=c.getBestVersionForData(A,S);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=E;else if(T<E)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+E+`.
`);const N=v(T,S,A),w=n.getSymbolSize(T),P=new i(w);return f(P,T),_(P),g(P,T),C(P,S,0),T>=7&&D(P,T),R(P,N),isNaN(m)&&(m=o.getBestMask(P,C.bind(null,P,S))),o.applyMask(m,P),C(P,S,m),{modules:P,version:T,errorCorrectionLevel:S,maskPattern:m,segments:A}}return Sn.create=function(T,S){if(typeof T>"u"||T==="")throw new Error("No input text");let m=e.M,A,E;return typeof S<"u"&&(m=e.from(S.errorCorrectionLevel,e.M),A=c.from(S.version),E=o.from(S.maskPattern),S.toSJISFunc&&n.setToSJISFunction(S.toSJISFunc)),q(T,A,m,E)},Sn}var zn={},Gn={},fr;function la(){return fr||(fr=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const s=parseInt(i.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const s=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,o=i.scale||4;return{width:r,scale:r?4:o,margin:s,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,s){return s.width&&s.width>=i+s.margin*2?s.width/(i+s.margin*2):s.scale},n.getImageWidth=function(i,s){const r=n.getScale(i,s);return Math.floor((i+s.margin*2)*r)},n.qrToImageData=function(i,s,r){const o=s.modules.size,a=s.modules.data,l=n.getScale(o,r),c=Math.floor((o+r.margin*2)*l),d=r.margin*l,h=[r.color.light,r.color.dark];for(let u=0;u<c;u++)for(let f=0;f<c;f++){let _=(u*c+f)*4,g=r.color.light;if(u>=d&&f>=d&&u<c-d&&f<c-d){const D=Math.floor((u-d)/l),C=Math.floor((f-d)/l);g=h[a[D*o+C]?1:0]}i[_++]=g.r,i[_++]=g.g,i[_++]=g.b,i[_]=g.a}}}(Gn)),Gn}var _r;function kd(){return _r||(_r=1,function(n){const e=la();function t(s,r,o){s.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=o,r.width=o,r.style.height=o+"px",r.style.width=o+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(r,o,a){let l=a,c=o;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),o||(c=i()),l=e.getOptions(l);const d=e.getImageWidth(r.modules.size,l),h=c.getContext("2d"),u=h.createImageData(d,d);return e.qrToImageData(u.data,r,l),t(h,c,d),h.putImageData(u,0,0),c},n.renderToDataURL=function(r,o,a){let l=a;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),l||(l={});const c=n.render(r,o,l),d=l.type||"image/png",h=l.rendererOpts||{};return c.toDataURL(d,h.quality)}}(zn)),zn}var $n={},pr;function Md(){if(pr)return $n;pr=1;const n=la();function e(s,r){const o=s.a/255,a=r+'="'+s.hex+'"';return o<1?a+" "+r+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(s,r,o){let a=s+r;return typeof o<"u"&&(a+=" "+o),a}function i(s,r,o){let a="",l=0,c=!1,d=0;for(let h=0;h<s.length;h++){const u=Math.floor(h%r),f=Math.floor(h/r);!u&&!c&&(c=!0),s[h]?(d++,h>0&&u>0&&s[h-1]||(a+=c?t("M",u+o,.5+f+o):t("m",l,0),l=0,c=!1),u+1<r&&s[h+1]||(a+=t("h",d),d=0)):l++}return a}return $n.render=function(r,o,a){const l=n.getOptions(o),c=r.modules.size,d=r.modules.data,h=c+l.margin*2,u=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",f="<path "+e(l.color.dark,"stroke")+' d="'+i(d,c,l.margin)+'"/>',_='viewBox="0 0 '+h+" "+h+'"',D='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+_+' shape-rendering="crispEdges">'+u+f+`</svg>
`;return typeof a=="function"&&a(null,D),D},$n}var gr;function Od(){if(gr)return Le;gr=1;const n=_d(),e=Dd(),t=kd(),i=Md();function s(r,o,a,l,c){const d=[].slice.call(arguments,1),h=d.length,u=typeof d[h-1]=="function";if(!u&&!n())throw new Error("Callback required as last argument");if(u){if(h<2)throw new Error("Too few arguments provided");h===2?(c=a,a=o,o=l=void 0):h===3&&(o.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=a,a=o,o=void 0))}else{if(h<1)throw new Error("Too few arguments provided");return h===1?(a=o,o=l=void 0):h===2&&!o.getContext&&(l=a,a=o,o=void 0),new Promise(function(f,_){try{const g=e.create(a,l);f(r(g,o,l))}catch(g){_(g)}})}try{const f=e.create(a,l);c(null,r(f,o,l))}catch(f){c(f)}}return Le.create=e.create,Le.toCanvas=s.bind(null,t.render),Le.toDataURL=s.bind(null,t.renderToDataURL),Le.toString=s.bind(null,function(r,o,a){return i.render(r,a)}),Le}var xd=Od();const Ld=fd(xd);let Y,Ge,Kt=document.getElementById("room-id"),mr=document.getElementById("file-input"),yr;function Fd(n=8){const e=new Uint8Array(6);crypto.getRandomValues(e);let t="";return e.forEach(i=>t+=String.fromCharCode(i)),btoa(t)}document.getElementById("scan-btn").onclick=()=>{const n=document.getElementById("reader");n.style.display="block";const e=new Html5Qrcode("reader");e.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:250}},(t,i)=>{yr=t,Kt.value=yr,ca(),e.stop(),n.style.display="none"},t=>{}).catch(t=>{console.error("Erro ao acessar câmera: ",t)})};document.getElementById("create-btn").onclick=async()=>{document.getElementById("entrada").style.display="none";const n=Fd(),e=n;Ld.toDataURL(n,function(s,r){if(s){console.error(s);return}const o=document.createElement("img");o.src=r,document.getElementById("qrcode").appendChild(o),document.getElementById("qrcode").style.display="flex"}),Kt.value=n,Kt.disabled=!0;const t=na(sa,"rooms/"+e);Y=new RTCPeerConnection,Ge=Y.createDataChannel("chat"),ua(Ge),Y.onicecandidate=s=>{s.candidate&&ia(Z(t,"callerCandidates"),JSON.stringify(s.candidate))};const i=await Y.createOffer();await Y.setLocalDescription(i),await Gi(Z(t,"offer"),JSON.stringify(i)),ci(Z(t,"answer"),async s=>{const r=s.val();if(r&&!Y.currentRemoteDescription){const o=new RTCSessionDescription(JSON.parse(r));await Y.setRemoteDescription(o)}}),ci(Z(t,"calleeCandidates"),s=>{s.forEach(r=>{const o=new RTCIceCandidate(JSON.parse(r.val()));Y.addIceCandidate(o)})})};document.getElementById("join-btn").onclick=()=>ca();async function ca(){const n=Kt.value,e=na(sa,"rooms/"+n);Y=new RTCPeerConnection,Y.ondatachannel=i=>{Ge=i.channel,ua(Ge)},Y.onicecandidate=i=>{i.candidate&&ia(Z(e,"calleeCandidates"),JSON.stringify(i.candidate))};const t=await Jh(Z(e,"offer"));if(t.exists()){const i=new RTCSessionDescription(JSON.parse(t.val()));await Y.setRemoteDescription(i);const s=await Y.createAnswer();await Y.setLocalDescription(s),await Gi(Z(e,"answer"),JSON.stringify(s))}ci(Z(e,"callerCandidates"),i=>{i.forEach(s=>{const r=new RTCIceCandidate(JSON.parse(s.val()));Y.addIceCandidate(r)})})}mr.onchange=()=>{const n=mr.files[0];if(!n)return;const e=n.name,t=URL.createObjectURL(n);Ge.send(JSON.stringify({type:"file-info",name:e}));const i=new FileReader;i.onload=()=>{Ge.send(i.result)},i.readAsArrayBuffer(n),ha(e,"Interno",t)};function ua(n){let e="arquivo_recebido";n.onopen=()=>{console.log("Canal aberto."),document.getElementById("actions").style.display="none",document.getElementById("chat").style.display="flex"},n.onmessage=t=>{if(console.log("Tipo recebido:",typeof t.data,t.data),typeof t.data=="string")try{const r=JSON.parse(t.data);if(r.type==="file-info"&&r.name){e=r.name;return}}catch{}const i=new Blob([t.data]),s=URL.createObjectURL(i);ha(e,"Externo",s),document.createElement("a")}}function ha(n,e,t){const i=document.createElement("div");i.classList.add("arq");const s=document.createElement("p");s.classList.add("name-file"),s.textContent=n,i.appendChild(s);const r=document.createElement("section");r.classList.add("arq-col");const o=document.createElement("p");o.classList.add("user-file"),o.textContent=e,r.appendChild(o);const a=document.createElement("a");a.classList.add("download-file"),a.href=t,a.download=n,a.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"
         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M7 10l5 5m0 0l5-5m-5 5V4"/>
    </svg>
  `,r.appendChild(a),i.appendChild(r),document.getElementById("arqs").appendChild(i)}
