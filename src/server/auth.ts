import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { DefaultSession } from "next-auth";
import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

import { db } from "./db";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Discord],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
});
