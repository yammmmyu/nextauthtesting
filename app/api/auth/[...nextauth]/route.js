import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma }from "../../../../server/db/client"
import bcrypt from "bcrypt"

 const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text"},
        password: { label: "Password", type: "password"}
      },
      async authorize(credentials) {
        if(!credentials.username || !credentials.password){
          return null
        }
        const user = await prisma.user.findUnique({
          where: {name: credentials.username}
        })

        if(!user){return null}

        const match = await bcrypt.compare(credentials.password, user.password_hash)

        if(!match){return null}
        return user;
      }
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma)
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
