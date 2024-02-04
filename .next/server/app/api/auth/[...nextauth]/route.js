"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yanyu_Downloads_nextauthtesting_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/yanyu/Downloads/nextauthtesting/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_yanyu_Downloads_nextauthtesting_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnlhbnl1JTJGRG93bmxvYWRzJTJGbmV4dGF1dGh0ZXN0aW5nJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnlhbnl1JTJGRG93bmxvYWRzJTJGbmV4dGF1dGh0ZXN0aW5nJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLz80NWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy95YW55dS9Eb3dubG9hZHMvbmV4dGF1dGh0ZXN0aW5nL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy95YW55dS9Eb3dubG9hZHMvbmV4dGF1dGh0ZXN0aW5nL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../server/db/client */ \"(rsc)/./server/db/client.js\");\n\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    session: {\n        strategy: \"jwt\"\n    },\n    debug: true,\n    secret: process.env.NEXTAUTH_SECRET,\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_server_db_client__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ]\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n // import NextAuth from \"next-auth\"\n // import { PrismaAdapter } from \"@next-auth/prisma-adapter\"\n // import { PrismaClient } from \"@prisma/client\"\n // import GoogleProvider from \"next-auth/providers/google\";\n // import CredentialsProvider from \"next-auth/providers/credentials\";\n // import GithubProvider from \"next-auth/providers/github\";\n // const prisma = new PrismaClient()\n // export const authOptions = {\n //   providers: [\n // GithubProvider({\n //   clientId: process.env.GITHUB_ID,\n //   clientSecret: process.env.GITHUB_SECRET,\n // }),\n // GoogleProvider({\n //   clientId: process.env.GOOGLE_CLIENT_ID,\n //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n // }),\n // CredentialsProvider({\n //   name: 'credentials',\n //   credentials: {\n //     username: { label: 'username', type: 'text' },\n //     password: { label: 'password', type: 'password' },\n //   },\n //   async authorize(credentials) {\n //     if (!credentials) {\n //       throw new Error('Invalid credentials');\n //     }\n //     try {\n //       const { username, password } = credentials;\n //       const user = await sql`SELECT * FROM users WHERE username = ${username}`;\n //       if (user.rows.length > 0) {\n //         const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);\n //         if (validPassword) {\n //           return { id: user.rows[0].id, username: user.rows[0].username };\n //         } else {\n //           return null;\n //         }\n //       }\n //     } catch (error) {\n //       console.error(error);\n //       throw new Error('Login failed');\n //     }\n //   },\n // }),\n //   ],\n //   adapter: PrismaAdapter(prisma),\n // }\n // const handler = NextAuth(authOptions);\n // export { handler as GET, handler as POST };\n // export default NextAuth({\n //   adapter: PrismaPg (prisma),\n //   providers: [\n //     GoogleProvider({\n //       clientId: process.env.GOOGLE_CLIENT_ID,\n //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n //     }),\n //   ],\n // })\n // import NextAuth, { NextAuthOptions } from \"next-auth\";\n // import GoogleProvider from \"next-auth/providers/google\";\n // import CredentialsProvider from \"next-auth/providers/credentials\";\n // import GithubProvider from \"next-auth/providers/github\";\n // import { Pool } from 'pg';\n // import bcrypt from 'bcrypt';\n // import { Pool } from 'pg'\n // import { PrismaPg } from '@prisma/adapter-pg'\n // import { PrismaClient } from '@prisma/client'\n // const connectionString = `${process.env.DATABASE_URL}`\n // const pool = new Pool({ connectionString })\n // const adapter = new PrismaPg(pool)\n // const prisma = new PrismaClient({ adapter })\n // const pool = new Pool({\n //   connectionString: process.env.POSTGRES_URL + \"?sslmode=require\",\n // });\n // const authOptions = {\n //   providers: [\n // GithubProvider({\n //   clientId: process.env.GITHUB_ID,\n //   clientSecret: process.env.GITHUB_SECRET,\n // }),\n // GoogleProvider({\n //   clientId: process.env.GOOGLE_CLIENT_ID,\n //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n // }),\n // CredentialsProvider({\n //   name: 'credentials',\n //   credentials: {\n //     username: { label: 'username', type: 'text' },\n //     password: { label: 'password', type: 'password' },\n //   },\n //   async authorize(credentials) {\n //     if (!credentials) {\n //       throw new Error('Invalid credentials');\n //     }\n //     try {\n //       const { username, password } = credentials;\n //       const user = await sql`SELECT * FROM users WHERE username = ${username}`;\n //       if (user.rows.length > 0) {\n //         const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);\n //         if (validPassword) {\n //           return { id: user.rows[0].id, username: user.rows[0].username };\n //         } else {\n //           return null;\n //         }\n //       }\n //     } catch (error) {\n //       console.error(error);\n //       throw new Error('Login failed');\n //     }\n //   },\n // }),\n //   ]\n // };\n // const handler = NextAuth(authOptions);\n // export { handler as GET, handler as POST };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDQztBQUNDO0FBQ0w7QUFFN0MsTUFBTUssY0FBYztJQUN6QixpREFBaUQ7SUFDakRDLFNBQVM7UUFBQ0MsVUFBVTtJQUFLO0lBQ3pCQyxPQUFPO0lBQ1BDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsU0FBU1Ysd0VBQWFBLENBQUNDLHFEQUFNQTtJQUM3QlUsV0FBVztRQUNUWixzRUFBY0EsQ0FBQztZQUNiYSxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLGdCQUFnQjtZQUN0Q0MsY0FBY1AsUUFBUUMsR0FBRyxDQUFDTyxvQkFBb0I7UUFDaEQ7S0FFRDtBQUNILEVBQUM7QUFFRCxNQUFNQyxVQUFVbkIsZ0RBQVFBLENBQUNLO0FBQ2tCLENBRTNDLG1DQUFtQztDQUNuQyw0REFBNEQ7Q0FDNUQsZ0RBQWdEO0NBQ2hELDJEQUEyRDtDQUMzRCxxRUFBcUU7Q0FDckUsMkRBQTJEO0NBRTNELG9DQUFvQztDQUVwQywrQkFBK0I7Q0FDL0IsaUJBQWlCO0NBQ2IsbUJBQW1CO0NBQ25CLHFDQUFxQztDQUNyQyw2Q0FBNkM7Q0FDN0MsTUFBTTtDQUNOLG1CQUFtQjtDQUNuQiw0Q0FBNEM7Q0FDNUMsb0RBQW9EO0NBQ3BELE1BQU07Q0FDTix3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixxREFBcUQ7Q0FDckQseURBQXlEO0NBQ3pELE9BQU87Q0FDUCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0NBQzFCLGdEQUFnRDtDQUNoRCxRQUFRO0NBQ1IsWUFBWTtDQUNaLG9EQUFvRDtDQUNwRCxrRkFBa0Y7Q0FFbEYsb0NBQW9DO0NBQ3BDLDRGQUE0RjtDQUM1RiwrQkFBK0I7Q0FDL0IsNkVBQTZFO0NBQzdFLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsOEJBQThCO0NBQzlCLHlDQUF5QztDQUN6QyxRQUFRO0NBQ1IsT0FBTztDQUNQLE1BQU07Q0FDVixPQUFPO0NBQ1Asb0NBQW9DO0NBQ3BDLElBQUk7Q0FFSix5Q0FBeUM7Q0FDekMsOENBQThDO0NBSTlDLDRCQUE0QjtDQUM1QixnQ0FBZ0M7Q0FDaEMsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixnREFBZ0Q7Q0FDaEQsd0RBQXdEO0NBQ3hELFVBQVU7Q0FDVixPQUFPO0NBQ1AsS0FBSztDQUdMLHlEQUF5RDtDQUN6RCwyREFBMkQ7Q0FDM0QscUVBQXFFO0NBQ3JFLDJEQUEyRDtDQUMzRCw2QkFBNkI7Q0FDN0IsK0JBQStCO0NBRS9CLDRCQUE0QjtDQUM1QixnREFBZ0Q7Q0FDaEQsZ0RBQWdEO0NBRWhELHlEQUF5RDtDQUV6RCw4Q0FBOEM7Q0FDOUMscUNBQXFDO0NBQ3JDLCtDQUErQztDQUkvQywwQkFBMEI7Q0FDMUIscUVBQXFFO0NBQ3JFLE1BQU07Q0FFTix3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2IsbUJBQW1CO0NBQ25CLHFDQUFxQztDQUNyQyw2Q0FBNkM7Q0FDN0MsTUFBTTtDQUNOLG1CQUFtQjtDQUNuQiw0Q0FBNEM7Q0FDNUMsb0RBQW9EO0NBQ3BELE1BQU07Q0FDTix3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixxREFBcUQ7Q0FDckQseURBQXlEO0NBQ3pELE9BQU87Q0FDUCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0NBQzFCLGdEQUFnRDtDQUNoRCxRQUFRO0NBQ1IsWUFBWTtDQUNaLG9EQUFvRDtDQUNwRCxrRkFBa0Y7Q0FFbEYsb0NBQW9DO0NBQ3BDLDRGQUE0RjtDQUM1RiwrQkFBK0I7Q0FDL0IsNkVBQTZFO0NBQzdFLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsOEJBQThCO0NBQzlCLHlDQUF5QztDQUN6QyxRQUFRO0NBQ1IsT0FBTztDQUNQLE1BQU07Q0FDVixNQUFNO0NBQ04sS0FBSztDQUVMLHlDQUF5QztDQUN6Qyw4Q0FBOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz9kYTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IHByaXNtYSB9ZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZlci9kYi9jbGllbnRcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgc2Vzc2lvbjoge3N0cmF0ZWd5OiBcImp3dFwifSxcbiAgZGVidWc6IHRydWUsXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICBdLFxufVxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuXG4vLyBpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG4vLyBpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbi8vIGltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbi8vIGltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG4vLyBpbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5cbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG4vLyBleHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4vLyAgIHByb3ZpZGVyczogW1xuICAgIC8vIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgLy8gfSksXG4gICAgLy8gR29vZ2xlUHJvdmlkZXIoe1xuICAgIC8vICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIC8vIH0pLFxuICAgIC8vIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgIC8vICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAvLyAgIGNyZWRlbnRpYWxzOiB7XG4gICAgLy8gICAgIHVzZXJuYW1lOiB7IGxhYmVsOiAndXNlcm5hbWUnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAvLyAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdwYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAvLyAgICAgaWYgKCFjcmVkZW50aWFscykge1xuICAgIC8vICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuICAgIC8vICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzcWxgU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICR7dXNlcm5hbWV9YDtcblxuICAgIC8vICAgICAgIGlmICh1c2VyLnJvd3MubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgICAgY29uc3QgdmFsaWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnJvd3NbMF0ucGFzc3dvcmRfaGFzaCk7XG4gICAgLy8gICAgICAgICBpZiAodmFsaWRQYXNzd29yZCkge1xuICAgIC8vICAgICAgICAgICByZXR1cm4geyBpZDogdXNlci5yb3dzWzBdLmlkLCB1c2VybmFtZTogdXNlci5yb3dzWzBdLnVzZXJuYW1lIH07XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBmYWlsZWQnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSxcbiAgICAvLyB9KSxcbi8vICAgXSxcbi8vICAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuLy8gfVxuXG4vLyBjb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuLy8gZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuLy8gICBhZGFwdGVyOiBQcmlzbWFQZyAocHJpc21hKSxcbi8vICAgcHJvdmlkZXJzOiBbXG4vLyAgICAgR29vZ2xlUHJvdmlkZXIoe1xuLy8gICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4vLyAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuLy8gICAgIH0pLFxuLy8gICBdLFxuLy8gfSlcblxuXG4vLyBpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuLy8gaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuLy8gaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbi8vIGltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbi8vIGltcG9ydCB7IFBvb2wgfSBmcm9tICdwZyc7XG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5cbi8vIGltcG9ydCB7IFBvb2wgfSBmcm9tICdwZydcbi8vIGltcG9ydCB7IFByaXNtYVBnIH0gZnJvbSAnQHByaXNtYS9hZGFwdGVyLXBnJ1xuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbi8vIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgJHtwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkx9YFxuXG4vLyBjb25zdCBwb29sID0gbmV3IFBvb2woeyBjb25uZWN0aW9uU3RyaW5nIH0pXG4vLyBjb25zdCBhZGFwdGVyID0gbmV3IFByaXNtYVBnKHBvb2wpXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgYWRhcHRlciB9KVxuXG5cblxuLy8gY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbi8vICAgY29ubmVjdGlvblN0cmluZzogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVJMICsgXCI/c3NsbW9kZT1yZXF1aXJlXCIsXG4vLyB9KTtcblxuLy8gY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4vLyAgIHByb3ZpZGVyczogW1xuICAgIC8vIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgLy8gfSksXG4gICAgLy8gR29vZ2xlUHJvdmlkZXIoe1xuICAgIC8vICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIC8vIH0pLFxuICAgIC8vIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgIC8vICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAvLyAgIGNyZWRlbnRpYWxzOiB7XG4gICAgLy8gICAgIHVzZXJuYW1lOiB7IGxhYmVsOiAndXNlcm5hbWUnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAvLyAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdwYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAvLyAgICAgaWYgKCFjcmVkZW50aWFscykge1xuICAgIC8vICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuICAgIC8vICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzcWxgU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICR7dXNlcm5hbWV9YDtcblxuICAgIC8vICAgICAgIGlmICh1c2VyLnJvd3MubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgICAgY29uc3QgdmFsaWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnJvd3NbMF0ucGFzc3dvcmRfaGFzaCk7XG4gICAgLy8gICAgICAgICBpZiAodmFsaWRQYXNzd29yZCkge1xuICAgIC8vICAgICAgICAgICByZXR1cm4geyBpZDogdXNlci5yb3dzWzBdLmlkLCB1c2VybmFtZTogdXNlci5yb3dzWzBdLnVzZXJuYW1lIH07XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBmYWlsZWQnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSxcbiAgICAvLyB9KSxcbi8vICAgXVxuLy8gfTtcblxuLy8gY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbi8vIGV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiZGVidWciLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./server/db/client.js":
/*!*****************************!*\
  !*** ./server/db/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2ZXIvZGIvY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUV0QyxNQUFNQyxTQUNYQyxPQUFPRCxNQUFNLElBQ2IsSUFBSUQsd0RBQVlBLENBQUM7SUFDZkcsS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRTtBQUVKLElBQUlDLElBQXlCLEVBQWNGLE9BQU9ELE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9zZXJ2ZXIvZGIvY2xpZW50LmpzPzczYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWwucHJpc21hIHx8XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogWydxdWVyeSddLFxuICB9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./server/db/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanyu%2FDownloads%2Fnextauthtesting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();