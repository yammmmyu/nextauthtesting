// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import PostgresAdapter from "@auth/pg-adapter";
// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   adapter: PostgresAdapter(pool),
// });
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import PostgresAdapter from "@auth/pg-adapter";
// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   adapter: PostgresAdapter(pool),
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session(session, token) {
//       session.user.id = token.id;
//       session.user.email = token.email;
//       return session;
//     },
//   },
// });

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import PostgresAdapter from "@auth/pg-adapter";

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const user = await getUser(credentials.email);
          if (user && user.password === credentials.password) {
            return { id: user.id, email: user.email };
          } else {
            throw new Error("Invalid email or password");
          }
        },
      }),
    ],
    adapter: PostgresAdapter(pool),
    session: {
      jwt: true,
    },
    callbacks: {
      async jwt(token, user) {
        if (user) {
          token.id = user.id;
          token.email = user.email;
        }
        return token;
      },
      async session(session, token) {
        session.user.id = token.id;
        session.user.email = token.email;
        return session;
      },
    },
  });
  
  async function getUser(email) {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }





// async function getUser(username) {
//     const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
//     return result.rows[0];
//   }

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   adapter: PostgresAdapter(pool),
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//   async signIn(user, account, profile) {
//     const dbUser = await getUser(user.email);
//     if (dbUser) {
//       return true;
//     } else {
//       // If the user doesn't exist in the database, you can create a new user here.
//       // For example:
//       // await pool.query('INSERT INTO users (email, name) VALUES ($1, $2)', [user.email, user.name]);
//       return false;
//     }
//   },
//   async redirect(url, baseUrl) {
//     return baseUrl;
//   },
//   async session(session, token) {
//     const user = await getUser(token.email);
//     if (user) {
//       session.user.id = user.id;
//       session.user.email = user.email;
//       session.user.name = user.name;
//     }
//     return session;
//   },
//   async jwt(token, user) {
//     if (user) {
//       token.id = user.id;
//       token.email = user.email;
//       token.name = user.name;
//     }
//     return token;
//   },
// },
// };

// export const GET = NextAuth(authOptions);
// export const POST = NextAuth(authOptions);