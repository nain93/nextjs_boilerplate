"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

export interface SessionContent {
  token: string;
}

export default async function getSession() {
  return await getIronSession<SessionContent>(cookies(), {
    cookieName: "sessionToken",
    password: process.env.COOKIE_PASSWORD || "",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  });
}
