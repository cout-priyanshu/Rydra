import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import connectDb from "./lib/db"
import User from "./models/user.model"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    type: "email",
                    label: "Email",
                    placeholder: "johndoe@gmail.com",
                },
                password: {
                    type: "password",
                    label: "Password",
                    placeholder: "******",
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing credentials")
                }

                await connectDb()
                const email = credentials.email as string
                const password = credentials.password as string

                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error("User does not exist")
                }

                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    throw new Error("Incorrect Password")
                }

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            },
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                await connectDb()
                let dbUser = await User.findOne({ email: user.email })
                
                if (!dbUser) {
                    dbUser = await User.create({
                        name: user.name,
                        email: user.email,
                    })
                }

                user.id = dbUser._id.toString()
                ;(user as any).role = dbUser.role
            }
            return true
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.role = (user as any).role
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.name = token.name as string
                session.user.email = token.email as string
                ;(session.user as any).role = token.role as string
            }
            return session
        },
    },
    pages: {
        signIn: "/signin",
        error: "/signin",
    },
    session: {
        strategy: "jwt",
        maxAge: 15 * 24 * 60 * 60, // 15 days in seconds
    },
    secret: process.env.AUTH_SECRET,
})