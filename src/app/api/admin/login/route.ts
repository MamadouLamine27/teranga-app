import { NextResponse } from "next/server";
import { creerJeton, COOKIE_ADMIN } from "@/lib/adminAuth";

export async function POST(req: Request) {
  const { motdepasse } = await req.json();

  if (!process.env.ADMIN_PASSWORD || motdepasse !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_ADMIN, await creerJeton(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 3600,
  });
  return res;
}
