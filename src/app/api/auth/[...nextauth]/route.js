
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
                const user = { id: 1, name: "vishal", password: "kumar", role: "admin", email: "vishal@gmail.com" };
                return user
            }
        })
    ],

    callbacks: {
        async signIn({ credentials }) {
            return true
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log("jwt user", user)
            console.log(token)
            return token
        },

        async redirect({ url, baseUrl }) {
            return "/profile"
        },
        async session({ session, token, user }) {

            //console.log("session ", session)
            return session
        },

    }




}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }