"use strict";(()=>{var e={};e.id=740,e.ids=[740],e.modules={67096:e=>{e.exports=require("bcrypt")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},59796:e=>{e.exports=require("zlib")},30545:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>h,originalPathname:()=>w,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>g,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>q});var o={};t.r(o),t.d(o,{POST:()=>l});var s=t(95419),i=t(69108),a=t(99678),n=t(62865),u=t(78070);let p=t(67096);async function l(e){try{let{username:r,password:t}=await e.json(),o=await n.i6`SELECT * FROM users WHERE username = ${r}`;if(console.log(o),!(o.rows.length>0))return u.Z.json({error:"User does not exist"},{status:400});if(console.log("test",o),await p.compare(t,o.rows[0].password_hash))return console.log("password correct"),u.Z.json("password correct");return console.log("password incorrect"),u.Z.json("password incorrect")}catch(e){return u.Z.json({error:e},{status:500})}}let c=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/login/route",pathname:"/api/login",filename:"route",bundlePath:"app/api/login/route"},resolvedPagePath:"/Users/yanyu/Downloads/nextauthtesting/app/api/login/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:d,staticGenerationAsyncStorage:x,serverHooks:g,headerHooks:h,staticGenerationBailout:q}=c,w="/api/login/route";function m(){return(0,a.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:x})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[638,750,865],()=>t(30545));module.exports=o})();