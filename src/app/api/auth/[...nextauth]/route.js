
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
                let user = { name: credentials.Full_name, refresh: credentials.refresh, access: credentials.access, role: credentials.roleId }
                return user
            }
        })
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async jwt({ token, user, account, profile, isNewUser }) {

            if (user) {
                token.access_token = user.access
                token.refresh_token = user.refresh
                token.name = user.name
                token.role = user.role
            }
            return token


        },
        async session({ session, token, user }) {
            console.log("session")
            console.log(token)
            return session
        },
        async redirect({ url, baseUrl }) {
            return "/profile"
        },


    }




}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }