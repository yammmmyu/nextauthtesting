"use strict";(()=>{var e={};e.id=569,e.ids=[569],e.modules={67096:e=>{e.exports=require("bcrypt")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},59796:e=>{e.exports=require("zlib")},1168:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>q,originalPathname:()=>m,patchFetch:()=>v,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>h,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>g});var s={};t.r(s),t.d(s,{POST:()=>l});var o=t(95419),a=t(69108),i=t(99678),u=t(62865),n=t(78070);let p=t(67096);async function l(e){try{let{username:r,password:t,email:s,grade_level:o,firstname:a,lastname_initial:i,school_code:n}=await e.json();console.log(r);let l=await p.hash(t,10),c=await u.i6`
            INSERT INTO users 
            (username, firstname, lastname_initial, email, password_hash, grade_level, school_code) 
            VALUES (${r}, ${a}, ${i}, ${s}, ${l}, ${o}, ${n})
            RETURNING *;
        `;console.log("test",c)}catch(e){return n.Z.json({error:e},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/register/route",pathname:"/api/register",filename:"route",bundlePath:"app/api/register/route"},resolvedPagePath:"/Users/yanyu/Downloads/nextauthtesting/app/api/register/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:x,serverHooks:h,headerHooks:q,staticGenerationBailout:g}=c,m="/api/register/route";function v(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:x})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,750,865],()=>t(1168));module.exports=s})();