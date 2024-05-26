import { NextRequest } from "next/server";
import getSession from "./utils/session";

export async function middleware(request: NextRequest) {
  const cookie = await getSession();

  if (request.nextUrl.pathname === "/" && cookie.id === undefined) {
    return Response.redirect(new URL("/sign-in", request.url));
  }

  if (request.nextUrl.pathname === "/sign-in" && cookie.id !== undefined) {
    return Response.redirect(new URL("/", request.url));
  }
}
