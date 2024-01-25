import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth";
//import prisma from "@/lib/prisma"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google";


const prisma = new PrismaClient();

export const config:NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({session, token}) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
                session.user.username = token.username;
            }

            return session;
        },
        async jwt({token, user}) {
            const prismaUser = await prisma.user.findFirst({
                where: {
                    email: token.email
                }
            })

            if (!prismaUser) {
                token.id = user.id;
                return token;
            }

            if (!prismaUser.username) {
                
            }
        }
    }
}