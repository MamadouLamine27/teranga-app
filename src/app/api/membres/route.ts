import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("cartes")
    .select("numero, prenom, nom, email, universite, validite, cree_le")
    .order("cree_le", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Erreur de lecture." }, { status: 500 });
  }
  return NextResponse.json({ cartes: data });
}
