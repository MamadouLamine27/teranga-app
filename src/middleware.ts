import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jetonValide, COOKIE_ADMIN } from "@/lib/adminAuth";

export async function middleware(req: NextRequest) {
  const jeton = req.cookies.get(COOKIE_ADMIN)?.value;
  if (!(await jetonValide(jeton))) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/cartes/:path*", "/admin/membres/:path*"],
};
