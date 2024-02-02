import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import PostgresAdapter from "../../../lib/adapter";

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIETN_SECRET,
    }),
  ],
  adapter: PostgresAdapter(pool),
});