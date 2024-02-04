"use strict";(()=>{var e={};e.id=142,e.ids=[142],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},59796:e=>{e.exports=require("zlib")},39496:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>d,originalPathname:()=>A,patchFetch:()=>R,requestAsyncStorage:()=>n,routeModule:()=>u,serverHooks:()=>p,staticGenerationAsyncStorage:()=>T,staticGenerationBailout:()=>E});var s=r(95419),i=r(69108),o=r(99678),a=r(10991);let u=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/models-auth/route",pathname:"/api/models-auth",filename:"route",bundlePath:"app/api/models-auth/route"},resolvedPagePath:"/Users/yanyu/Downloads/nextauthtesting/app/api/models-auth/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:n,staticGenerationAsyncStorage:T,serverHooks:p,headerHooks:d,staticGenerationBailout:E}=u,A="/api/models-auth/route";function R(){return(0,o.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:T})}},10991:(e,t,r)=>{let{sql:s}=r(3878),{NextResponse:i}=r(80406);async function o(e){try{let e=await s`
    CREATE TABLE verification_token
    (
      identifier TEXT NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      token TEXT NOT NULL,
    
      PRIMARY KEY (identifier, token)
    );
    
    CREATE TABLE accounts
    (
      id SERIAL,
      "userId" INTEGER NOT NULL,
      type VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      "providerAccountId" VARCHAR(255) NOT NULL,
      refresh_token TEXT,
      access_token TEXT,
      expires_at BIGINT,
      id_token TEXT,
      scope TEXT,
      session_state TEXT,
      token_type TEXT,
    
      PRIMARY KEY (id)
    );
    
    CREATE TABLE sessions
    (
      id SERIAL,
      "userId" INTEGER NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      "sessionToken" VARCHAR(255) NOT NULL,
    
      PRIMARY KEY (id)
    );
    
    CREATE TABLE users
    (
      id SERIAL,
      name VARCHAR(255),
      email VARCHAR(255),
      "emailVerified" TIMESTAMPTZ,
      image TEXT,
    
      PRIMARY KEY (id)
    );
    `;return i.json({result:e},{status:200})}catch(e){return i.json({error:e},{status:500})}}e.exports={GET:o}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,750,48],()=>r(39496));module.exports=s})();