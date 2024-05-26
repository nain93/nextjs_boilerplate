import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NextAuth from "next-auth";
import { createUser } from "@/app/sign-in/actions";
import getSession from "@/utils/session";

const handler = NextAuth({
  events: {
    signOut: async () => {
      const cookie = await getSession();
      cookie.destroy();
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      const cookie = await getSession();

      cookie.id = user.id;
      await cookie.save();
      await createUser({ provider: account?.provider ?? "" });
      return true;
    },
  },

  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
});

export { handler as GET, handler as POST };
