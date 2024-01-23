import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma"

export const config: NextAuthOptions = {
    pages: {
        signIn:'/login'
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        
    ]
}