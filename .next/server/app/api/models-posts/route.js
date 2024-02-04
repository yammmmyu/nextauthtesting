"use strict";(()=>{var e={};e.id=514,e.ids=[514],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},59796:e=>{e.exports=require("zlib")},10003:(e,E,t)=>{t.r(E),t.d(E,{headerHooks:()=>R,originalPathname:()=>A,patchFetch:()=>d,requestAsyncStorage:()=>u,routeModule:()=>i,serverHooks:()=>n,staticGenerationAsyncStorage:()=>a,staticGenerationBailout:()=>p});var s=t(95419),r=t(69108),o=t(99678),T=t(67221);let i=new s.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/models-posts/route",pathname:"/api/models-posts",filename:"route",bundlePath:"app/api/models-posts/route"},resolvedPagePath:"/Users/yanyu/Downloads/nextauthtesting/app/api/models-posts/route.js",nextConfigOutput:"",userland:T}),{requestAsyncStorage:u,staticGenerationAsyncStorage:a,serverHooks:n,headerHooks:R,staticGenerationBailout:p}=i,A="/api/models-posts/route";function d(){return(0,o.patchFetch)({serverHooks:n,staticGenerationAsyncStorage:a})}},67221:(e,E,t)=>{let{sql:s}=t(3878),{NextResponse:r}=t(80406);async function o(e){try{let e=await s`
    CREATE TABLE questions(
        question_id SERIAL PRIMARY KEY,
        question TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE answers(
        ans_id SERIAL PRIMARY KEY,
        question_id INTEGER REFERENCES questions(question_id) ON DELETE CASCADE,
        author_id INTEGER REFERENCES users(user_id),
        ans_content TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        last_updateds TIMESTAMP WITH TIME ZONE,
        likes_count INTEGER DEFAULT 0,
        views_count INTEGER DEFAULT 0
    );

    CREATE TABLE posts(
        post_id serial PRIMARY KEY,
        author_id INTEGER REFERENCES users(user_id),
        title VARCHAR(255) NOT NULL,
        post_content TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE,
        likes_count INTEGER DEFAULT 0,
        view_count INTEGER DEFAULT 0s
    );

    CREATE TABLE comments(
        comment_id SERIAL PRIMARY KEY,
        post_id INTEGER REFERENCES Posts(post_id) ON DELETE CASCADE,
        author_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
        comment_content JSONB NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE
    );

    CREATE TABLE likes (
        like_id SERIAL PRIMARY KEY,
        ans_id INTEGER REFERENCES answers(ans_id) ON DELETE CASCADE,
        post_id INTEGER REFERENCES posts(post_id) ON DELETE CASCADE,
        user_id INTEGER NOT NULL REFERENCES Users(user_id)
    );

    `;return r.json({result:e},{status:200})}catch(e){return r.json({error:e},{status:500})}}e.exports={GET:o}}};var E=require("../../../webpack-runtime.js");E.C(e);var t=e=>E(E.s=e),s=E.X(0,[638,750,48],()=>t(10003));module.exports=s})();