import prisma from "@/db";
import { defaultAuthRedirUrl } from "@/constants/urls";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Login",
            credentials: {
                email: { type: "email", label: "Email", placeholder: "Email" },
                password: { type: "password", label: "password", placeholder: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.User.findUnique({
                    where: {
                        email: credentials.email,
                    }, select: {
                        email: true, password: true, id: true, fullname: true
                    }
                });

                if (!user) {
                    return null;
                }

                const isPasswordValid = await compare(
                    credentials.password, user.password
                );

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.fullname,
                }
            }
        })
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url !== baseUrl) {
                return url;
            }
            return new URL(defaultAuthRedirUrl, baseUrl).toString();
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user;
                return {
                    ...token,
                    id: u.id,
                    username: u.username,
                };
            }
            return token;
        },
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                },
            };
        },
    },
    pages: {
        signIn: "/signin",
    },
}