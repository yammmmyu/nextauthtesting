(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},75402:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>f,pages:()=>l,routeModule:()=>d,tree:()=>c});var n=r(50482),i=r(69108),o=r(62563),a=r.n(o),s=r(68300),u={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>s[e]);r.d(t,u);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,70751)),"/Users/yanyu/Downloads/nextauthtesting/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1267)),"/Users/yanyu/Downloads/nextauthtesting/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/yanyu/Downloads/nextauthtesting/app/page.tsx"],f="/page",p={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},56827:(e,t,r)=>{Promise.resolve().then(r.bind(r,80316)),Promise.resolve().then(r.bind(r,2324))},74180:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},35303:()=>{},80316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(95344),i=r(56506),o=r(47674),a=r(8428);let s="py-1 px-2 text-gray-300 bg-gray-700",u="py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";function c(){let{data:e}=(0,o.useSession)();return e?(0,n.jsxs)(n.Fragment,{children:[e?.user?.name," ",n.jsx("br",{}),n.jsx("button",{onClick:()=>(0,o.signOut)(),children:"Sign out"})]}):(0,n.jsxs)(n.Fragment,{children:["Not signed in ",n.jsx("br",{}),n.jsx("button",{onClick:()=>(0,o.signIn)(),children:"Sign in"})]})}function l(){let e=(0,a.usePathname)();return(0,n.jsxs)("div",{children:[n.jsx(c,{}),n.jsx("hr",{className:"my-4"}),(0,n.jsxs)("ul",{children:[n.jsx(i.default,{href:"/",children:n.jsx("li",{className:"/"===e?s:u,children:"Home"})}),n.jsx(i.default,{href:"/protected",children:n.jsx("li",{className:"/protected"===e?s:u,children:"Protected Route"})}),n.jsx(i.default,{href:"/serverAction",children:n.jsx("li",{className:"/serverAction"===e?s:u,children:"Server Action"})}),n.jsx(i.default,{href:"/apiFromClient",children:n.jsx("li",{className:"/apiFromClient"===e?s:u,children:"API From Client"})}),n.jsx(i.default,{href:"/apiFromServer",children:n.jsx("li",{className:"/apiFromServer"===e?s:u,children:"API From Server"})})]})]})}},2324:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=r(47674).SessionProvider},1267:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>g});var n=r(25036),i=r(8592),o=r.n(i);r(67272);var a=r(86843);let s=(0,a.createProxy)(String.raw`/Users/yanyu/Downloads/nextauthtesting/app/api/components/NavMenu.js`),{__esModule:u,$$typeof:c}=s,l=s.default;var f=r(81355);let p=(0,a.createProxy)(String.raw`/Users/yanyu/Downloads/nextauthtesting/app/api/components/SessionProvider.js`),{__esModule:d,$$typeof:m}=p,h=p.default,g={title:"Create Next App",description:"Generated by create next app"};async function y({children:e}){let t=await (0,f.getServerSession)();return n.jsx("html",{lang:"en",children:n.jsx("body",{className:o().className,children:n.jsx(h,{session:t,children:(0,n.jsxs)("main",{className:"mx-auto max-w-5xl text-2xl flex gap-2 text-white",children:[n.jsx(l,{}),e]})})})})}},70751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(25036),i=r(81355);async function o(){let e=await (0,i.getServerSession)();return(0,n.jsxs)(n.Fragment,{children:["getServerSession Result",e?.user?.name?n.jsx("div",{children:e?.user?.name}):n.jsx("div",{children:"Not logged in"})]})}},14409:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RSC_HEADER:function(){return r},ACTION:function(){return n},NEXT_ROUTER_STATE_TREE:function(){return i},NEXT_ROUTER_PREFETCH_HEADER:function(){return o},NEXT_URL:function(){return a},RSC_CONTENT_TYPE_HEADER:function(){return s},RSC_VARY_HEADER:function(){return u},FLIGHT_PARAMETERS:function(){return c},NEXT_RSC_UNION_QUERY:function(){return l},NEXT_DID_POSTPONE_HEADER:function(){return f}});let r="RSC",n="Next-Action",i="Next-Router-State-Tree",o="Next-Router-Prefetch",a="Next-Url",s="text/x-component",u=r+", "+i+", "+o+", "+a,c=[[r],[i],[o]],l="_rsc",f="x-nextjs-postponed";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37363:e=>{"use strict";(()=>{"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},o=t.split(n),a=(r||{}).decode||e,s=0;s<o.length;s++){var u=o[s],c=u.indexOf("=");if(!(c<0)){var l=u.substr(0,c).trim(),f=u.substr(++c,u.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==i[l]&&(i[l]=function(e,t){try{return t(e)}catch(t){return e}}(f,a))}}return i},t.serialize=function(e,t,n){var o=n||{},a=o.encode||r;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=a(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var u=e+"="+s;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(o.domain){if(!i.test(o.domain))throw TypeError("option domain is invalid");u+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw TypeError("option path is invalid");u+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");u+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(u+="; HttpOnly"),o.secure&&(u+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},76358:(e,t)=>{"use strict";function r(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",o=r+1;o<e.length;){var a=e.charCodeAt(o);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a){i+=e[o++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=o;continue}if("("===n){var s=1,u="",o=r+1;if("?"===e[o])throw TypeError('Pattern cannot start with "?" at '+o);for(;o<e.length;){if("\\"===e[o]){u+=e[o++]+e[o++];continue}if(")"===e[o]){if(0==--s){o++;break}}else if("("===e[o]&&(s++,"?"!==e[o+1]))throw TypeError("Capturing groups are not allowed at "+o);u+=e[o++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!u)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:u}),r=o;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,a="[^"+o(t.delimiter||"/#?")+"]+?",s=[],u=0,c=0,l="",f=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[c];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var m=f("CHAR"),h=f("NAME"),g=f("PATTERN");if(h||g){var y=m||"";-1===i.indexOf(y)&&(l+=y,y=""),l&&(s.push(l),l=""),s.push({name:h||u++,prefix:y,suffix:"",pattern:g||a,modifier:f("MODIFIER")||""});continue}var x=m||f("ESCAPED_CHAR");if(x){l+=x;continue}if(l&&(s.push(l),l=""),f("OPEN")){var y=d(),v=f("NAME")||"",E=f("PATTERN")||"",_=d();p("CLOSE"),s.push({name:v||(E?u++:""),pattern:v&&!E?a:E,prefix:y,suffix:_,modifier:f("MODIFIER")||""});continue}p("END")}return s}function n(e,t){void 0===t&&(t={});var r=a(t),n=t.encode,i=void 0===n?function(e){return e}:n,o=t.validate,s=void 0===o||o,u=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var o=e[n];if("string"==typeof o){r+=o;continue}var a=t?t[o.name]:void 0,c="?"===o.modifier||"*"===o.modifier,l="*"===o.modifier||"+"===o.modifier;if(Array.isArray(a)){if(!l)throw TypeError('Expected "'+o.name+'" to not repeat, but got an array');if(0===a.length){if(c)continue;throw TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<a.length;f++){var p=i(a[f],o);if(s&&!u[n].test(p))throw TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but got "'+p+'"');r+=o.prefix+p+o.suffix}continue}if("string"==typeof a||"number"==typeof a){var p=i(String(a),o);if(s&&!u[n].test(p))throw TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+p+'"');r+=o.prefix+p+o.suffix;continue}if(!c){var d=l?"an array":"a string";throw TypeError('Expected "'+o.name+'" to be '+d)}}return r}}function i(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var o=n[0],a=n.index,s=Object.create(null),u=1;u<n.length;u++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(u);return{path:o,index:a,params:s}}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function a(e){return e&&e.sensitive?"":"i"}function s(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,s=r.start,u=r.end,c=r.encode,l=void 0===c?function(e){return e}:c,f="["+o(r.endsWith||"")+"]|$",p="["+o(r.delimiter||"/#?")+"]",d=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)d+=o(l(h));else{var g=o(l(h.prefix)),y=o(l(h.suffix));if(h.pattern){if(t&&t.push(h),g||y){if("+"===h.modifier||"*"===h.modifier){var x="*"===h.modifier?"?":"";d+="(?:"+g+"((?:"+h.pattern+")(?:"+y+g+"(?:"+h.pattern+"))*)"+y+")"+x}else d+="(?:"+g+"("+h.pattern+")"+y+")"+h.modifier}else d+="("+h.pattern+")"+h.modifier}else d+="(?:"+g+y+")"+h.modifier}}if(void 0===u||u)i||(d+=p+"?"),d+=r.endsWith?"(?="+f+")":"$";else{var v=e[e.length-1],E="string"==typeof v?p.indexOf(v[v.length-1])>-1:void 0===v;i||(d+="(?:"+p+"(?="+f+"))?"),E||(d+="(?="+p+"|"+f+")")}return new RegExp(d,a(r))}function u(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?RegExp("(?:"+e.map(function(e){return u(e,t,n).source}).join("|")+")",a(n)):s(r(e,n),t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=function(e,t){return n(r(e,t),t)},t.tokensToFunction=n,t.match=function(e,t){var r=[];return i(u(e,r,t),r,t)},t.regexpToFunction=i,t.tokensToRegexp=s,t.pathToRegexp=u},70337:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataRoute:function(){return p}});let n=r(48488),i=function(e){return e&&e.__esModule?e:{default:e}}(r(24084)),o=r(99017),a=r(4654),s=r(16325),u=r(29393),c=r(69716);function l(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function f(e,t,r){let n=(0,u.normalizeAppPath)(e),s=(0,a.getNamedRouteRegex)(n,!1),f=(0,o.interpolateDynamicPath)(n,t,s),p=l(e),d=p?`-${p}`:"",{name:m,ext:h}=i.default.parse(r);return(0,c.normalizePathSep)(i.default.join(f,`${m}${d}${h}`))}function p(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":e.endsWith("/sitemap")?t+=".xml":r=l(e.slice(0,-(i.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:o,name:a,ext:s}=i.default.parse(t),u=(0,n.isStaticMetadataRoute)(e);t=i.default.posix.join(o,`${a}${r?`-${r}`:""}${s}`,u?"":"[[...__metadata_id__]]","route")}return t}},48488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},isMetadataRouteFile:function(){return s},isStaticMetadataRouteFile:function(){return u},isStaticMetadataRoute:function(){return c},isMetadataRoute:function(){return l}});let n=r(69716),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},o=["js","jsx","ts","tsx"],a=e=>`(?:${e.join("|")})`;function s(e,t,r){let o=[RegExp(`^[\\\\/]robots${r?`\\.${a(t.concat("txt"))}$`:""}`),RegExp(`^[\\\\/]manifest${r?`\\.${a(t.concat("webmanifest","json"))}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`\\.${a(t.concat("xml"))}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`\\.${a(t.concat(i.icon.extensions))}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`\\.${a(t.concat(i.apple.extensions))}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`\\.${a(t.concat(i.openGraph.extensions))}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`\\.${a(t.concat(i.twitter.extensions))}$`:""}`)],s=(0,n.normalizePathSep)(e);return o.some(e=>e.test(s))}function u(e){return s(e,[],!0)}function c(e){return"/robots"===e||"/manifest"===e||u(e)}function l(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,o,!1)}},10892:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(37363);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},68988:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},isInterceptionRouteAppPath:function(){return o},extractInterceptionRouteInformation:function(){return a}});let n=r(29393),i=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function a(e){let t,r,o;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,o]=e.split(r,2);break}if(!t||!r||!o)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":let a=t.split("/");if(a.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=a.slice(0,-2).concat(o).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},99017:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeVercelUrl:function(){return p},interpolateDynamicPath:function(){return d},normalizeDynamicRouteParams:function(){return m},getUtils:function(){return h}});let n=r(57310),i=r(73935),o=r(48237),a=r(4654),s=r(87158),u=r(62762),c=r(5545),l=r(29393),f=r(82740);function p(e,t,r,i,o){if(i&&t&&o){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query)))(e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)||(r||Object.keys(o.groups)).includes(e))&&delete t.query[e];e.url=(0,n.format)(t)}}function d(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let{optional:i,repeat:o}=r.groups[n],a=`[${o?"...":""}${n}]`;i&&(a=`[${a}]`);let s=e.indexOf(a);if(s>-1){let r;let i=t[n];r=Array.isArray(i)?i.map(e=>e&&encodeURIComponent(e)).join("/"):i?encodeURIComponent(i):"",e=e.slice(0,s)+r+e.slice(s+a.length)}}return e}function m(e,t,r,n){let i=!0;return r?{params:e=Object.keys(r.groups).reduce((o,a)=>{let s=e[a];"string"==typeof s&&(s=(0,l.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,l.normalizeRscURL)(e)),e)));let u=n[a],c=r.groups[a].optional;return((Array.isArray(u)?u.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(u))||void 0===s&&!(c&&t))&&(i=!1),c&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${a}]]`))&&(s=void 0,delete e[a]),s&&"string"==typeof s&&r.groups[a].repeat&&(s=s.split("/")),s&&(o[a]=s),o},{}),hasValidParams:i}:{params:e,hasValidParams:!1}}function h({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:l,trailingSlash:h,caseSensitive:g}){let y,x,v;return l&&(y=(0,a.getNamedRouteRegex)(e,!1),v=(x=(0,s.getRouteMatcher)(y))(e)),{handleRewrites:function(a,s){let f={},p=s.pathname,d=n=>{let c=(0,o.getPathMatch)(n.source+(h?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g})(s.pathname);if((n.has||n.missing)&&c){let e=(0,u.matchHas)(a,s.query,n.has,n.missing);e?Object.assign(c,e):c=!1}if(c){let{parsedDestination:o,destQuery:a}=(0,u.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:c,query:s.query});if(o.protocol)return!0;if(Object.assign(f,a,c),Object.assign(s.query,o.query),delete o.query,Object.assign(s,o),p=s.pathname,r&&(p=p.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(p,t.locales);p=e.pathname,s.query.nextInternalLocale=e.detectedLocale||c.nextInternalLocale}if(p===e)return!0;if(l&&x){let e=x(p);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])d(e);if(p!==e){let t=!1;for(let e of n.afterFiles||[])if(t=d(e))break;if(!t&&!(()=>{let t=(0,c.removeTrailingSlash)(p||"");return t===(0,c.removeTrailingSlash)(e)||(null==x?void 0:x(t))})()){for(let e of n.fallback||[])if(t=d(e))break}}return f},defaultRouteRegex:y,dynamicRouteMatcher:x,defaultRouteMatches:v,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=y;return{re:{exec:o=>{let a=Object.fromEntries(new URLSearchParams(o)),s=t&&n&&a["1"]===n;for(let e of Object.keys(a)){let t=a[e];e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)&&(a[e.substring(f.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete a[e])}let u=Object.keys(i||{}),c=e=>{if(t){let i=Array.isArray(e),o=i?e[0]:e;if("string"==typeof o&&t.locales.some(e=>e.toLowerCase()===o.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return u.every(e=>a[e])?u.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!c(a[r])&&(t[e[n].pos]=a[r]),t},{}):Object.keys(a).reduce((e,t)=>{if(!c(a[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:a[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>m(e,t,y,v),normalizeVercelUrl:(e,t,r)=>p(e,t,r,l,y),interpolateDynamicPath:(e,t)=>d(e,t,y)}}},7436:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},16325:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&4294967295;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},73935:(e,t)=>{"use strict";function r(e,t){let r;let n=e.split("/");return(t||[]).some(t=>!!n[1]&&n[1].toLowerCase()===t.toLowerCase()&&(r=t,n.splice(1,1),e=n.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},24084:(e,t,r)=>{"use strict";let n;n=r(71017),e.exports=n},75940:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},69716:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},29393:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return o},normalizeRscURL:function(){return a}});let n=r(75940),i=r(65458);function o(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function a(e){return e.replace(/\.rsc($|\?)/,"$1")}},60713:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(22881);let n=r(61662);function i(e,t){let r=new URL("http://n"),i=t?new URL(t,r):e.startsWith(".")?new URL("http://n"):r,{pathname:o,searchParams:a,search:s,hash:u,href:c,origin:l}=new URL(e,i);if(l!==r.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:o,query:(0,n.searchParamsToUrlQuery)(a),search:s,hash:u,href:c.slice(r.origin.length)}}},48223:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return o}});let n=r(61662),i=r(60713);function o(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},48237:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(76358);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),o=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=o(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},62762:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{matchHas:function(){return l},compileNonPath:function(){return f},prepareDestination:function(){return p}});let n=r(76358),i=r(7436),o=r(48223),a=r(68988),s=r(14409),u=r(10892);function c(e){return e.replace(/__ESC_COLON_/gi,":")}function l(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},o=r=>{let n;let o=r.key;switch(r.type){case"header":o=o.toLowerCase(),n=e.headers[o];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,u.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[o];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(o)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1};return!!r.every(e=>o(e))&&!n.some(e=>o(e))&&i}function f(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function p(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let u=e.destination;for(let t of Object.keys({...e.params,...r}))u=u.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t);let l=(0,o.parseUrl)(u),p=l.query,d=c(""+l.pathname+(l.hash||"")),m=c(l.hostname||""),h=[],g=[];(0,n.pathToRegexp)(d,h),(0,n.pathToRegexp)(m,g);let y=[];h.forEach(e=>y.push(e.name)),g.forEach(e=>y.push(e.name));let x=(0,n.compile)(d,{validate:!1}),v=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(p))Array.isArray(r)?p[t]=r.map(t=>f(c(t),e.params)):"string"==typeof r&&(p[t]=f(c(r),e.params));let E=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!E.some(e=>y.includes(e)))for(let t of E)t in p||(p[t]=e.params[t]);if((0,a.isInterceptionRouteAppPath)(d))for(let t of d.split("/")){let r=a.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){e.params["0"]=r;break}}try{let[r,n]=(t=x(e.params)).split("#",2);l.hostname=v(e.params),l.pathname=r,l.hash=(n?"#":"")+(n||""),delete l.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return l.query={...r,...l.query},{newUrl:t,destQuery:p,parsedDestination:l}}},61662:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i},assign:function(){return o}})},5545:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},87158:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(22881);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let o=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>o(e)):t.repeat?[o(n)]:o(n))}),a}}},4654:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return u},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return p}});let n=r(68988),i=r(7436),o=r(5545);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){let{key:e,optional:n,repeat:u}=a(o[1]);return r[e]={pos:s++,repeat:u,optional:n},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,i.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=a(o[1]);return r[e]={pos:s++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function u(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:o,keyPrefix:s}=e,{key:u,optional:c,repeat:l}=a(n),f=u.replace(/\W/g,"");s&&(f=""+s+f);let p=!1;(0===f.length||f.length>30)&&(p=!0),isNaN(parseInt(f.slice(0,1)))||(p=!0),p&&(f=r()),s?o[f]=""+s+u:o[f]=u;let d=t?(0,i.escapeStringRegexp)(t):"";return l?c?"(?:/"+d+"(?<"+f+">.+?))?":"/"+d+"(?<"+f+">.+?)":"/"+d+"(?<"+f+">[^/]+?)"}function l(e,t){let r;let a=(0,o.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:a.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return c({getSafeRouteKey:s,interceptionMarker:r,segment:o[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return o?c({getSafeRouteKey:s,segment:o[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let r=l(e,t);return{...u(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function p(e,t){let{parameterizedRoute:r}=s(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=l(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},65458:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return n},DEFAULT_SEGMENT_KEY:function(){return i}});let n="__PAGE__",i="__DEFAULT__"},22881:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return o},getLocationOrigin:function(){return a},getURL:function(){return s},getDisplayName:function(){return u},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return l},loadGetInitialProps:function(){return f},SP:function(){return p},ST:function(){return d},DecodeError:function(){return m},NormalizeError:function(){return h},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return x},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>i.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function l(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(70337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,355,500],()=>r(75402));module.exports=n})();