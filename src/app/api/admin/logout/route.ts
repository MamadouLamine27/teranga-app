import { NextResponse } from "next/server";
import { COOKIE_ADMIN } from "@/lib/adminAuth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  // On efface le cookie en le vidant et en l'expirant immédiatement
  res.cookies.set(COOKIE_ADMIN, "", { path: "/", maxAge: 0 });
  return res;
}
