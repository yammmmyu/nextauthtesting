"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth";
exports.ids = ["vendor-chunks/@auth"];
exports.modules = {

/***/ "(rsc)/./node_modules/@auth/pg-adapter/index.js":
/*!************************************************!*\
  !*** ./node_modules/@auth/pg-adapter/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostgresAdapter),\n/* harmony export */   mapExpiresAt: () => (/* binding */ mapExpiresAt)\n/* harmony export */ });\n/**\n * <div style={{display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\", padding: 16}}>\n *  <p style={{fontWeight: \"normal\"}}>An official <a href=\"https://www.postgresql.org/\">PostgreSQL</a> adapter for Auth.js / NextAuth.js.</p>\n *  <a href=\"https://www.postgresql.org/\">\n *   <img style={{display: \"block\"}} src=\"/img/adapters/pg.png\" width=\"48\" />\n *  </a>\n * </div>\n *\n * ## Installation\n *\n * ```bash npm2yarn\n * npm install next-auth @auth/pg-adapter pg\n * ```\n *\n * @module @auth/pg-adapter\n */ function mapExpiresAt(account) {\n    const expires_at = parseInt(account.expires_at);\n    return {\n        ...account,\n        expires_at\n    };\n}\n/**\n * ## Setup\n *\n * The SQL schema for the tables used by this adapter is as follows. Learn more about the models at our doc page on [Database Models](https://authjs.dev/getting-started/adapters#models).\n *\n * ```sql\n * CREATE TABLE verification_token\n * (\n *   identifier TEXT NOT NULL,\n *   expires TIMESTAMPTZ NOT NULL,\n *   token TEXT NOT NULL,\n *\n *   PRIMARY KEY (identifier, token)\n * );\n *\n * CREATE TABLE accounts\n * (\n *   id SERIAL,\n *   \"userId\" INTEGER NOT NULL,\n *   type VARCHAR(255) NOT NULL,\n *   provider VARCHAR(255) NOT NULL,\n *   \"providerAccountId\" VARCHAR(255) NOT NULL,\n *   refresh_token TEXT,\n *   access_token TEXT,\n *   expires_at BIGINT,\n *   id_token TEXT,\n *   scope TEXT,\n *   session_state TEXT,\n *   token_type TEXT,\n *\n *   PRIMARY KEY (id)\n * );\n *\n * CREATE TABLE sessions\n * (\n *   id SERIAL,\n *   \"userId\" INTEGER NOT NULL,\n *   expires TIMESTAMPTZ NOT NULL,\n *   \"sessionToken\" VARCHAR(255) NOT NULL,\n *\n *   PRIMARY KEY (id)\n * );\n *\n * CREATE TABLE users\n * (\n *   id SERIAL,\n *   name VARCHAR(255),\n *   email VARCHAR(255),\n *   \"emailVerified\" TIMESTAMPTZ,\n *   image TEXT,\n *\n *   PRIMARY KEY (id)\n * );\n *\n * ```\n *\n * ```typescript title=\"auth.ts\"\n * import NextAuth from \"next-auth\"\n * import GoogleProvider from \"next-auth/providers/google\"\n * import PostgresAdapter from \"@auth/pg-adapter\"\n * import { Pool } from 'pg'\n *\n * const pool = new Pool({\n *   host: 'localhost',\n *   user: 'database-user',\n *   max: 20,\n *   idleTimeoutMillis: 30000,\n *   connectionTimeoutMillis: 2000,\n * })\n *\n * export default NextAuth({\n *   adapter: PostgresAdapter(pool),\n *   providers: [\n *     GoogleProvider({\n *       clientId: process.env.GOOGLE_CLIENT_ID,\n *       clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n *     }),\n *   ],\n * })\n * ```\n *\n */ function PostgresAdapter(client) {\n    return {\n        async createVerificationToken (verificationToken) {\n            const { identifier, expires, token } = verificationToken;\n            const sql = `\n        INSERT INTO verification_token ( identifier, expires, token ) \n        VALUES ($1, $2, $3)\n        `;\n            await client.query(sql, [\n                identifier,\n                expires,\n                token\n            ]);\n            return verificationToken;\n        },\n        async useVerificationToken ({ identifier, token }) {\n            const sql = `delete from verification_token\n      where identifier = $1 and token = $2\n      RETURNING identifier, expires, token `;\n            const result = await client.query(sql, [\n                identifier,\n                token\n            ]);\n            return result.rowCount !== 0 ? result.rows[0] : null;\n        },\n        async createUser (user) {\n            const { name, email, emailVerified, image } = user;\n            const sql = `\n        INSERT INTO users (name, email, \"emailVerified\", image) \n        VALUES ($1, $2, $3, $4) \n        RETURNING id, name, email, \"emailVerified\", image`;\n            const result = await client.query(sql, [\n                name,\n                email,\n                emailVerified,\n                image\n            ]);\n            return result.rows[0];\n        },\n        async getUser (id) {\n            const sql = `select * from users where id = $1`;\n            try {\n                const result = await client.query(sql, [\n                    id\n                ]);\n                return result.rowCount === 0 ? null : result.rows[0];\n            } catch (e) {\n                return null;\n            }\n        },\n        async getUserByEmail (email) {\n            const sql = `select * from users where email = $1`;\n            const result = await client.query(sql, [\n                email\n            ]);\n            return result.rowCount !== 0 ? result.rows[0] : null;\n        },\n        async getUserByAccount ({ providerAccountId, provider }) {\n            const sql = `\n          select u.* from users u join accounts a on u.id = a.\"userId\"\n          where \n          a.provider = $1 \n          and \n          a.\"providerAccountId\" = $2`;\n            const result = await client.query(sql, [\n                provider,\n                providerAccountId\n            ]);\n            return result.rowCount !== 0 ? result.rows[0] : null;\n        },\n        async updateUser (user) {\n            const fetchSql = `select * from users where id = $1`;\n            const query1 = await client.query(fetchSql, [\n                user.id\n            ]);\n            const oldUser = query1.rows[0];\n            const newUser = {\n                ...oldUser,\n                ...user\n            };\n            const { id, name, email, emailVerified, image } = newUser;\n            const updateSql = `\n        UPDATE users set\n        name = $2, email = $3, \"emailVerified\" = $4, image = $5\n        where id = $1\n        RETURNING name, id, email, \"emailVerified\", image\n      `;\n            const query2 = await client.query(updateSql, [\n                id,\n                name,\n                email,\n                emailVerified,\n                image\n            ]);\n            return query2.rows[0];\n        },\n        async linkAccount (account) {\n            const sql = `\n      insert into accounts \n      (\n        \"userId\", \n        provider, \n        type, \n        \"providerAccountId\", \n        access_token,\n        expires_at,\n        refresh_token,\n        id_token,\n        scope,\n        session_state,\n        token_type\n      )\n      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)\n      returning\n        id,\n        \"userId\", \n        provider, \n        type, \n        \"providerAccountId\", \n        access_token,\n        expires_at,\n        refresh_token,\n        id_token,\n        scope,\n        session_state,\n        token_type\n      `;\n            const params = [\n                account.userId,\n                account.provider,\n                account.type,\n                account.providerAccountId,\n                account.access_token,\n                account.expires_at,\n                account.refresh_token,\n                account.id_token,\n                account.scope,\n                account.session_state,\n                account.token_type\n            ];\n            const result = await client.query(sql, params);\n            return mapExpiresAt(result.rows[0]);\n        },\n        async createSession ({ sessionToken, userId, expires }) {\n            if (userId === undefined) {\n                throw Error(`userId is undef in createSession`);\n            }\n            const sql = `insert into sessions (\"userId\", expires, \"sessionToken\")\n      values ($1, $2, $3)\n      RETURNING id, \"sessionToken\", \"userId\", expires`;\n            const result = await client.query(sql, [\n                userId,\n                expires,\n                sessionToken\n            ]);\n            return result.rows[0];\n        },\n        async getSessionAndUser (sessionToken) {\n            if (sessionToken === undefined) {\n                return null;\n            }\n            const result1 = await client.query(`select * from sessions where \"sessionToken\" = $1`, [\n                sessionToken\n            ]);\n            if (result1.rowCount === 0) {\n                return null;\n            }\n            let session = result1.rows[0];\n            const result2 = await client.query(\"select * from users where id = $1\", [\n                session.userId\n            ]);\n            if (result2.rowCount === 0) {\n                return null;\n            }\n            const user = result2.rows[0];\n            return {\n                session,\n                user\n            };\n        },\n        async updateSession (session) {\n            const { sessionToken } = session;\n            const result1 = await client.query(`select * from sessions where \"sessionToken\" = $1`, [\n                sessionToken\n            ]);\n            if (result1.rowCount === 0) {\n                return null;\n            }\n            const originalSession = result1.rows[0];\n            const newSession = {\n                ...originalSession,\n                ...session\n            };\n            const sql = `\n        UPDATE sessions set\n        expires = $2\n        where \"sessionToken\" = $1\n        `;\n            const result = await client.query(sql, [\n                newSession.sessionToken,\n                newSession.expires\n            ]);\n            return result.rows[0];\n        },\n        async deleteSession (sessionToken) {\n            const sql = `delete from sessions where \"sessionToken\" = $1`;\n            await client.query(sql, [\n                sessionToken\n            ]);\n        },\n        async unlinkAccount (partialAccount) {\n            const { provider, providerAccountId } = partialAccount;\n            const sql = `delete from accounts where \"providerAccountId\" = $1 and provider = $2`;\n            await client.query(sql, [\n                providerAccountId,\n                provider\n            ]);\n        },\n        async deleteUser (userId) {\n            await client.query(`delete from users where id = $1`, [\n                userId\n            ]);\n            await client.query(`delete from sessions where \"userId\" = $1`, [\n                userId\n            ]);\n            await client.query(`delete from accounts where \"userId\" = $1`, [\n                userId\n            ]);\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGF1dGgvcGctYWRhcHRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQyxHQUNNLFNBQVNBLGFBQWFDLE9BQU87SUFDaEMsTUFBTUMsYUFBYUMsU0FBU0YsUUFBUUMsVUFBVTtJQUM5QyxPQUFPO1FBQ0gsR0FBR0QsT0FBTztRQUNWQztJQUNKO0FBQ0o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUZDLEdBQ2MsU0FBU0UsZ0JBQWdCQyxNQUFNO0lBQzFDLE9BQU87UUFDSCxNQUFNQyx5QkFBd0JDLGlCQUFpQjtZQUMzQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUUsR0FBR0g7WUFDdkMsTUFBTUksTUFBTSxDQUFDOzs7UUFHakIsQ0FBQztZQUNHLE1BQU1OLE9BQU9PLEtBQUssQ0FBQ0QsS0FBSztnQkFBQ0g7Z0JBQVlDO2dCQUFTQzthQUFNO1lBQ3BELE9BQU9IO1FBQ1g7UUFDQSxNQUFNTSxzQkFBcUIsRUFBRUwsVUFBVSxFQUFFRSxLQUFLLEVBQUc7WUFDN0MsTUFBTUMsTUFBTSxDQUFDOzsyQ0FFa0IsQ0FBQztZQUNoQyxNQUFNRyxTQUFTLE1BQU1ULE9BQU9PLEtBQUssQ0FBQ0QsS0FBSztnQkFBQ0g7Z0JBQVlFO2FBQU07WUFDMUQsT0FBT0ksT0FBT0MsUUFBUSxLQUFLLElBQUlELE9BQU9FLElBQUksQ0FBQyxFQUFFLEdBQUc7UUFDcEQ7UUFDQSxNQUFNQyxZQUFXQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsS0FBSyxFQUFFLEdBQUdKO1lBQzlDLE1BQU1QLE1BQU0sQ0FBQzs7O3lEQUdnQyxDQUFDO1lBQzlDLE1BQU1HLFNBQVMsTUFBTVQsT0FBT08sS0FBSyxDQUFD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YUFDckI7WUFDRCxPQUFPSyxPQUFPRSxJQUFJLENBQUMsRUFBRTtRQUN6QjtRQUNBLE1BQU0wQyxlQUFjVixZQUFZO1lBQzVCLE1BQU1yQyxNQUFNLENBQUMsOENBQThDLENBQUM7WUFDNUQsTUFBTU4sT0FBT08sS0FBSyxDQUFDRCxLQUFLO2dCQUFDcUM7YUFBYTtRQUMxQztRQUNBLE1BQU1XLGVBQWNDLGNBQWM7WUFDOUIsTUFBTSxFQUFFL0IsUUFBUSxFQUFFRCxpQkFBaUIsRUFBRSxHQUFHZ0M7WUFDeEMsTUFBTWpELE1BQU0sQ0FBQyxxRUFBcUUsQ0FBQztZQUNuRixNQUFNTixPQUFPTyxLQUFLLENBQUNELEtBQUs7Z0JBQUNpQjtnQkFBbUJDO2FBQVM7UUFDekQ7UUFDQSxNQUFNZ0MsWUFBV3RCLE1BQU07WUFDbkIsTUFBTWxDLE9BQU9PLEtBQUssQ0FBQyxDQUFDLCtCQUErQixDQUFDLEVBQUU7Z0JBQUMyQjthQUFPO1lBQzlELE1BQU1sQyxPQUFPTyxLQUFLLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxFQUFFO2dCQUFDMkI7YUFBTztZQUN2RSxNQUFNbEMsT0FBT08sS0FBSyxDQUFDLENBQUMsd0NBQXdDLENBQUMsRUFBRTtnQkFBQzJCO2FBQU87UUFDM0U7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BhdXRoL3BnLWFkYXB0ZXIvaW5kZXguanM/MjljZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwYWRkaW5nOiAxNn19PlxuICogIDxwIHN0eWxlPXt7Zm9udFdlaWdodDogXCJub3JtYWxcIn19PkFuIG9mZmljaWFsIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb3N0Z3Jlc3FsLm9yZy9cIj5Qb3N0Z3JlU1FMPC9hPiBhZGFwdGVyIGZvciBBdXRoLmpzIC8gTmV4dEF1dGguanMuPC9wPlxuICogIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb3N0Z3Jlc3FsLm9yZy9cIj5cbiAqICAgPGltZyBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19IHNyYz1cIi9pbWcvYWRhcHRlcnMvcGcucG5nXCIgd2lkdGg9XCI0OFwiIC8+XG4gKiAgPC9hPlxuICogPC9kaXY+XG4gKlxuICogIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogYGBgYmFzaCBucG0yeWFyblxuICogbnBtIGluc3RhbGwgbmV4dC1hdXRoIEBhdXRoL3BnLWFkYXB0ZXIgcGdcbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgQGF1dGgvcGctYWRhcHRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwRXhwaXJlc0F0KGFjY291bnQpIHtcbiAgICBjb25zdCBleHBpcmVzX2F0ID0gcGFyc2VJbnQoYWNjb3VudC5leHBpcmVzX2F0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2NvdW50LFxuICAgICAgICBleHBpcmVzX2F0LFxuICAgIH07XG59XG4vKipcbiAqICMjIFNldHVwXG4gKlxuICogVGhlIFNRTCBzY2hlbWEgZm9yIHRoZSB0YWJsZXMgdXNlZCBieSB0aGlzIGFkYXB0ZXIgaXMgYXMgZm9sbG93cy4gTGVhcm4gbW9yZSBhYm91dCB0aGUgbW9kZWxzIGF0IG91ciBkb2MgcGFnZSBvbiBbRGF0YWJhc2UgTW9kZWxzXShodHRwczovL2F1dGhqcy5kZXYvZ2V0dGluZy1zdGFydGVkL2FkYXB0ZXJzI21vZGVscykuXG4gKlxuICogYGBgc3FsXG4gKiBDUkVBVEUgVEFCTEUgdmVyaWZpY2F0aW9uX3Rva2VuXG4gKiAoXG4gKiAgIGlkZW50aWZpZXIgVEVYVCBOT1QgTlVMTCxcbiAqICAgZXhwaXJlcyBUSU1FU1RBTVBUWiBOT1QgTlVMTCxcbiAqICAgdG9rZW4gVEVYVCBOT1QgTlVMTCxcbiAqXG4gKiAgIFBSSU1BUlkgS0VZIChpZGVudGlmaWVyLCB0b2tlbilcbiAqICk7XG4gKlxuICogQ1JFQVRFIFRBQkxFIGFjY291bnRzXG4gKiAoXG4gKiAgIGlkIFNFUklBTCxcbiAqICAgXCJ1c2VySWRcIiBJTlRFR0VSIE5PVCBOVUxMLFxuICogICB0eXBlIFZBUkNIQVIoMjU1KSBOT1QgTlVMTCxcbiAqICAgcHJvdmlkZXIgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICogICBcInByb3ZpZGVyQWNjb3VudElkXCIgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICogICByZWZyZXNoX3Rva2VuIFRFWFQsXG4gKiAgIGFjY2Vzc190b2tlbiBURVhULFxuICogICBleHBpcmVzX2F0IEJJR0lOVCxcbiAqICAgaWRfdG9rZW4gVEVYVCxcbiAqICAgc2NvcGUgVEVYVCxcbiAqICAgc2Vzc2lvbl9zdGF0ZSBURVhULFxuICogICB0b2tlbl90eXBlIFRFWFQsXG4gKlxuICogICBQUklNQVJZIEtFWSAoaWQpXG4gKiApO1xuICpcbiAqIENSRUFURSBUQUJMRSBzZXNzaW9uc1xuICogKFxuICogICBpZCBTRVJJQUwsXG4gKiAgIFwidXNlcklkXCIgSU5URUdFUiBOT1QgTlVMTCxcbiAqICAgZXhwaXJlcyBUSU1FU1RBTVBUWiBOT1QgTlVMTCxcbiAqICAgXCJzZXNzaW9uVG9rZW5cIiBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gKlxuICogICBQUklNQVJZIEtFWSAoaWQpXG4gKiApO1xuICpcbiAqIENSRUFURSBUQUJMRSB1c2Vyc1xuICogKFxuICogICBpZCBTRVJJQUwsXG4gKiAgIG5hbWUgVkFSQ0hBUigyNTUpLFxuICogICBlbWFpbCBWQVJDSEFSKDI1NSksXG4gKiAgIFwiZW1haWxWZXJpZmllZFwiIFRJTUVTVEFNUFRaLFxuICogICBpbWFnZSBURVhULFxuICpcbiAqICAgUFJJTUFSWSBLRVkgKGlkKVxuICogKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBgYGB0eXBlc2NyaXB0IHRpdGxlPVwiYXV0aC50c1wiXG4gKiBpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG4gKiBpbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbiAqIGltcG9ydCBQb3N0Z3Jlc0FkYXB0ZXIgZnJvbSBcIkBhdXRoL3BnLWFkYXB0ZXJcIlxuICogaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJ1xuICpcbiAqIGNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XG4gKiAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICogICB1c2VyOiAnZGF0YWJhc2UtdXNlcicsXG4gKiAgIG1heDogMjAsXG4gKiAgIGlkbGVUaW1lb3V0TWlsbGlzOiAzMDAwMCxcbiAqICAgY29ubmVjdGlvblRpbWVvdXRNaWxsaXM6IDIwMDAsXG4gKiB9KVxuICpcbiAqIGV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAqICAgYWRhcHRlcjogUG9zdGdyZXNBZGFwdGVyKHBvb2wpLFxuICogICBwcm92aWRlcnM6IFtcbiAqICAgICBHb29nbGVQcm92aWRlcih7XG4gKiAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAqICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gKiAgICAgfSksXG4gKiAgIF0sXG4gKiB9KVxuICogYGBgXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Z3Jlc0FkYXB0ZXIoY2xpZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXN5bmMgY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4odmVyaWZpY2F0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWRlbnRpZmllciwgZXhwaXJlcywgdG9rZW4gfSA9IHZlcmlmaWNhdGlvblRva2VuO1xuICAgICAgICAgICAgY29uc3Qgc3FsID0gYFxuICAgICAgICBJTlNFUlQgSU5UTyB2ZXJpZmljYXRpb25fdG9rZW4gKCBpZGVudGlmaWVyLCBleHBpcmVzLCB0b2tlbiApIFxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMpXG4gICAgICAgIGA7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQucXVlcnkoc3FsLCBbaWRlbnRpZmllciwgZXhwaXJlcywgdG9rZW5dKTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXNlVmVyaWZpY2F0aW9uVG9rZW4oeyBpZGVudGlmaWVyLCB0b2tlbiwgfSkge1xuICAgICAgICAgICAgY29uc3Qgc3FsID0gYGRlbGV0ZSBmcm9tIHZlcmlmaWNhdGlvbl90b2tlblxuICAgICAgd2hlcmUgaWRlbnRpZmllciA9ICQxIGFuZCB0b2tlbiA9ICQyXG4gICAgICBSRVRVUk5JTkcgaWRlbnRpZmllciwgZXhwaXJlcywgdG9rZW4gYDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShzcWwsIFtpZGVudGlmaWVyLCB0b2tlbl0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dDb3VudCAhPT0gMCA/IHJlc3VsdC5yb3dzWzBdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlVXNlcih1c2VyKSB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBlbWFpbFZlcmlmaWVkLCBpbWFnZSB9ID0gdXNlcjtcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgSU5TRVJUIElOVE8gdXNlcnMgKG5hbWUsIGVtYWlsLCBcImVtYWlsVmVyaWZpZWRcIiwgaW1hZ2UpIFxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0KSBcbiAgICAgICAgUkVUVVJOSU5HIGlkLCBuYW1lLCBlbWFpbCwgXCJlbWFpbFZlcmlmaWVkXCIsIGltYWdlYDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShzcWwsIFtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucm93c1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0VXNlcihpZCkge1xuICAgICAgICAgICAgY29uc3Qgc3FsID0gYHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgaWQgPSAkMWA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShzcWwsIFtpZF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucm93Q291bnQgPT09IDAgPyBudWxsIDogcmVzdWx0LnJvd3NbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRVc2VyQnlFbWFpbChlbWFpbCkge1xuICAgICAgICAgICAgY29uc3Qgc3FsID0gYHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgZW1haWwgPSAkMWA7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkoc3FsLCBbZW1haWxdKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucm93Q291bnQgIT09IDAgPyByZXN1bHQucm93c1swXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldFVzZXJCeUFjY291bnQoeyBwcm92aWRlckFjY291bnRJZCwgcHJvdmlkZXIsIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgICBzZWxlY3QgdS4qIGZyb20gdXNlcnMgdSBqb2luIGFjY291bnRzIGEgb24gdS5pZCA9IGEuXCJ1c2VySWRcIlxuICAgICAgICAgIHdoZXJlIFxuICAgICAgICAgIGEucHJvdmlkZXIgPSAkMSBcbiAgICAgICAgICBhbmQgXG4gICAgICAgICAgYS5cInByb3ZpZGVyQWNjb3VudElkXCIgPSAkMmA7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkoc3FsLCBbcHJvdmlkZXIsIHByb3ZpZGVyQWNjb3VudElkXSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJvd0NvdW50ICE9PSAwID8gcmVzdWx0LnJvd3NbMF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1cGRhdGVVc2VyKHVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZldGNoU3FsID0gYHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgaWQgPSAkMWA7XG4gICAgICAgICAgICBjb25zdCBxdWVyeTEgPSBhd2FpdCBjbGllbnQucXVlcnkoZmV0Y2hTcWwsIFt1c2VyLmlkXSk7XG4gICAgICAgICAgICBjb25zdCBvbGRVc2VyID0gcXVlcnkxLnJvd3NbMF07XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0ge1xuICAgICAgICAgICAgICAgIC4uLm9sZFVzZXIsXG4gICAgICAgICAgICAgICAgLi4udXNlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCwgZW1haWxWZXJpZmllZCwgaW1hZ2UgfSA9IG5ld1VzZXI7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVTcWwgPSBgXG4gICAgICAgIFVQREFURSB1c2VycyBzZXRcbiAgICAgICAgbmFtZSA9ICQyLCBlbWFpbCA9ICQzLCBcImVtYWlsVmVyaWZpZWRcIiA9ICQ0LCBpbWFnZSA9ICQ1XG4gICAgICAgIHdoZXJlIGlkID0gJDFcbiAgICAgICAgUkVUVVJOSU5HIG5hbWUsIGlkLCBlbWFpbCwgXCJlbWFpbFZlcmlmaWVkXCIsIGltYWdlXG4gICAgICBgO1xuICAgICAgICAgICAgY29uc3QgcXVlcnkyID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHVwZGF0ZVNxbCwgW1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZCxcbiAgICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Mi5yb3dzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBsaW5rQWNjb3VudChhY2NvdW50KSB7XG4gICAgICAgICAgICBjb25zdCBzcWwgPSBgXG4gICAgICBpbnNlcnQgaW50byBhY2NvdW50cyBcbiAgICAgIChcbiAgICAgICAgXCJ1c2VySWRcIiwgXG4gICAgICAgIHByb3ZpZGVyLCBcbiAgICAgICAgdHlwZSwgXG4gICAgICAgIFwicHJvdmlkZXJBY2NvdW50SWRcIiwgXG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgZXhwaXJlc19hdCxcbiAgICAgICAgcmVmcmVzaF90b2tlbixcbiAgICAgICAgaWRfdG9rZW4sXG4gICAgICAgIHNjb3BlLFxuICAgICAgICBzZXNzaW9uX3N0YXRlLFxuICAgICAgICB0b2tlbl90eXBlXG4gICAgICApXG4gICAgICB2YWx1ZXMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCwgJDksICQxMCwgJDExKVxuICAgICAgcmV0dXJuaW5nXG4gICAgICAgIGlkLFxuICAgICAgICBcInVzZXJJZFwiLCBcbiAgICAgICAgcHJvdmlkZXIsIFxuICAgICAgICB0eXBlLCBcbiAgICAgICAgXCJwcm92aWRlckFjY291bnRJZFwiLCBcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBleHBpcmVzX2F0LFxuICAgICAgICByZWZyZXNoX3Rva2VuLFxuICAgICAgICBpZF90b2tlbixcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIHNlc3Npb25fc3RhdGUsXG4gICAgICAgIHRva2VuX3R5cGVcbiAgICAgIGA7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICAgICAgICAgYWNjb3VudC51c2VySWQsXG4gICAgICAgICAgICAgICAgYWNjb3VudC5wcm92aWRlcixcbiAgICAgICAgICAgICAgICBhY2NvdW50LnR5cGUsXG4gICAgICAgICAgICAgICAgYWNjb3VudC5wcm92aWRlckFjY291bnRJZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50LmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICBhY2NvdW50LmV4cGlyZXNfYXQsXG4gICAgICAgICAgICAgICAgYWNjb3VudC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgICAgICAgIGFjY291bnQuaWRfdG9rZW4sXG4gICAgICAgICAgICAgICAgYWNjb3VudC5zY29wZSxcbiAgICAgICAgICAgICAgICBhY2NvdW50LnNlc3Npb25fc3RhdGUsXG4gICAgICAgICAgICAgICAgYWNjb3VudC50b2tlbl90eXBlLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShzcWwsIHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gbWFwRXhwaXJlc0F0KHJlc3VsdC5yb3dzWzBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlU2Vzc2lvbih7IHNlc3Npb25Ub2tlbiwgdXNlcklkLCBleHBpcmVzIH0pIHtcbiAgICAgICAgICAgIGlmICh1c2VySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGB1c2VySWQgaXMgdW5kZWYgaW4gY3JlYXRlU2Vzc2lvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3FsID0gYGluc2VydCBpbnRvIHNlc3Npb25zIChcInVzZXJJZFwiLCBleHBpcmVzLCBcInNlc3Npb25Ub2tlblwiKVxuICAgICAgdmFsdWVzICgkMSwgJDIsICQzKVxuICAgICAgUkVUVVJOSU5HIGlkLCBcInNlc3Npb25Ub2tlblwiLCBcInVzZXJJZFwiLCBleHBpcmVzYDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShzcWwsIFt1c2VySWQsIGV4cGlyZXMsIHNlc3Npb25Ub2tlbl0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRTZXNzaW9uQW5kVXNlcihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgIGlmIChzZXNzaW9uVG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IGNsaWVudC5xdWVyeShgc2VsZWN0ICogZnJvbSBzZXNzaW9ucyB3aGVyZSBcInNlc3Npb25Ub2tlblwiID0gJDFgLCBbc2Vzc2lvblRva2VuXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0MS5yb3dDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNlc3Npb24gPSByZXN1bHQxLnJvd3NbMF07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQyID0gYXdhaXQgY2xpZW50LnF1ZXJ5KFwic2VsZWN0ICogZnJvbSB1c2VycyB3aGVyZSBpZCA9ICQxXCIsIFtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXJJZCxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdDIucm93Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSByZXN1bHQyLnJvd3NbMF07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlc3Npb24sXG4gICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVwZGF0ZVNlc3Npb24oc2Vzc2lvbikge1xuICAgICAgICAgICAgY29uc3QgeyBzZXNzaW9uVG9rZW4gfSA9IHNlc3Npb247XG4gICAgICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGBzZWxlY3QgKiBmcm9tIHNlc3Npb25zIHdoZXJlIFwic2Vzc2lvblRva2VuXCIgPSAkMWAsIFtzZXNzaW9uVG9rZW5dKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQxLnJvd0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlc3Npb24gPSByZXN1bHQxLnJvd3NbMF07XG4gICAgICAgICAgICBjb25zdCBuZXdTZXNzaW9uID0ge1xuICAgICAgICAgICAgICAgIC4uLm9yaWdpbmFsU2Vzc2lvbixcbiAgICAgICAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgVVBEQVRFIHNlc3Npb25zIHNldFxuICAgICAgICBleHBpcmVzID0gJDJcbiAgICAgICAgd2hlcmUgXCJzZXNzaW9uVG9rZW5cIiA9ICQxXG4gICAgICAgIGA7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkoc3FsLCBbXG4gICAgICAgICAgICAgICAgbmV3U2Vzc2lvbi5zZXNzaW9uVG9rZW4sXG4gICAgICAgICAgICAgICAgbmV3U2Vzc2lvbi5leHBpcmVzLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF07XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGRlbGV0ZVNlc3Npb24oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBzcWwgPSBgZGVsZXRlIGZyb20gc2Vzc2lvbnMgd2hlcmUgXCJzZXNzaW9uVG9rZW5cIiA9ICQxYDtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5xdWVyeShzcWwsIFtzZXNzaW9uVG9rZW5dKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdW5saW5rQWNjb3VudChwYXJ0aWFsQWNjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgeyBwcm92aWRlciwgcHJvdmlkZXJBY2NvdW50SWQgfSA9IHBhcnRpYWxBY2NvdW50O1xuICAgICAgICAgICAgY29uc3Qgc3FsID0gYGRlbGV0ZSBmcm9tIGFjY291bnRzIHdoZXJlIFwicHJvdmlkZXJBY2NvdW50SWRcIiA9ICQxIGFuZCBwcm92aWRlciA9ICQyYDtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5xdWVyeShzcWwsIFtwcm92aWRlckFjY291bnRJZCwgcHJvdmlkZXJdKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZGVsZXRlVXNlcih1c2VySWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5xdWVyeShgZGVsZXRlIGZyb20gdXNlcnMgd2hlcmUgaWQgPSAkMWAsIFt1c2VySWRdKTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5xdWVyeShgZGVsZXRlIGZyb20gc2Vzc2lvbnMgd2hlcmUgXCJ1c2VySWRcIiA9ICQxYCwgW3VzZXJJZF0pO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LnF1ZXJ5KGBkZWxldGUgZnJvbSBhY2NvdW50cyB3aGVyZSBcInVzZXJJZFwiID0gJDFgLCBbdXNlcklkXSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJtYXBFeHBpcmVzQXQiLCJhY2NvdW50IiwiZXhwaXJlc19hdCIsInBhcnNlSW50IiwiUG9zdGdyZXNBZGFwdGVyIiwiY2xpZW50IiwiY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4iLCJ2ZXJpZmljYXRpb25Ub2tlbiIsImlkZW50aWZpZXIiLCJleHBpcmVzIiwidG9rZW4iLCJzcWwiLCJxdWVyeSIsInVzZVZlcmlmaWNhdGlvblRva2VuIiwicmVzdWx0Iiwicm93Q291bnQiLCJyb3dzIiwiY3JlYXRlVXNlciIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJlbWFpbFZlcmlmaWVkIiwiaW1hZ2UiLCJnZXRVc2VyIiwiaWQiLCJlIiwiZ2V0VXNlckJ5RW1haWwiLCJnZXRVc2VyQnlBY2NvdW50IiwicHJvdmlkZXJBY2NvdW50SWQiLCJwcm92aWRlciIsInVwZGF0ZVVzZXIiLCJmZXRjaFNxbCIsInF1ZXJ5MSIsIm9sZFVzZXIiLCJuZXdVc2VyIiwidXBkYXRlU3FsIiwicXVlcnkyIiwibGlua0FjY291bnQiLCJwYXJhbXMiLCJ1c2VySWQiLCJ0eXBlIiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaF90b2tlbiIsImlkX3Rva2VuIiwic2NvcGUiLCJzZXNzaW9uX3N0YXRlIiwidG9rZW5fdHlwZSIsImNyZWF0ZVNlc3Npb24iLCJzZXNzaW9uVG9rZW4iLCJ1bmRlZmluZWQiLCJFcnJvciIsImdldFNlc3Npb25BbmRVc2VyIiwicmVzdWx0MSIsInNlc3Npb24iLCJyZXN1bHQyIiwidXBkYXRlU2Vzc2lvbiIsIm9yaWdpbmFsU2Vzc2lvbiIsIm5ld1Nlc3Npb24iLCJkZWxldGVTZXNzaW9uIiwidW5saW5rQWNjb3VudCIsInBhcnRpYWxBY2NvdW50IiwiZGVsZXRlVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@auth/pg-adapter/index.js\n");

/***/ })

};
;