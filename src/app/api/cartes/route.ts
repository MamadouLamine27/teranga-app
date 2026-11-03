import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// Génère un numéro type AESS-2025-7F3A9
function genNumero(validite: string) {
  const annee = (validite.match(/^\d{4}/) || ["0000"])[0];
  const alea = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `AESS-${annee}-${alea}`;
}

export async function POST(req: Request) {
  const d = await req.json();

  // Re-validation côté serveur (on ne fait jamais confiance au navigateur)
  if (!d.prenom?.trim() || !d.nom?.trim() || !d.universite?.trim()) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(d.email || "")) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!/^\d{4}-\d{4}$/.test(d.validite || "")) {
    return NextResponse.json({ error: "Validité invalide." }, { status: 400 });
  }

  const numero = genNumero(d.validite);

  const { error } = await supabaseAdmin.from("cartes").insert({
    numero,
    prenom: d.prenom.trim(),
    nom: d.nom.trim(),
    email: d.email.trim(),
    universite: d.universite.trim(),
    telephone: d.telephone?.trim() || null,
    validite: d.validite,
  });

  if (error) {
    return NextResponse.json({ error: "Erreur d'enregistrement." }, { status: 500 });
  }
  return NextResponse.json({ numero });
}
