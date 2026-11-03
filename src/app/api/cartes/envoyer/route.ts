import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// ====== LIENS RÉSEAUX DE L'AESS — à remplir quand vous les avez ======
// Laisser "" masque le bouton correspondant dans le mail.
const RESEAUX = {
  instagram: "",
  linkedin: "",
  tiktok: "",
};
// ====================================================================

export async function POST(req: Request) {
  const { numero, imageBase64 } = await req.json();

  const { data: carte } = await supabaseAdmin
    .from("cartes")
    .select("prenom, nom, email, numero")
    .eq("numero", numero)
    .maybeSingle();

  if (!carte) {
    return NextResponse.json({ error: "Carte introuvable." }, { status: 404 });
  }
  if (!imageBase64) {
    return NextResponse.json({ error: "Image manquante." }, { status: 400 });
  }

  const base64 = imageBase64.split(",")[1];
  const resend = new Resend(process.env.RESEND_API_KEY);

  const boutons = Object.entries(RESEAUX)
    .filter(([, url]) => url)
    .map(
      ([nom, url]) =>
        `<a href="${url}" style="display:inline-block;margin:0 6px;padding:9px 16px;background:#0E5C2F;color:#fff;border-radius:999px;text-decoration:none;font-size:13px;font-weight:600;text-transform:capitalize">${nom}</a>`
    )
    .join("");

  const blocReseaux = boutons
    ? `<p style="margin:22px 0 6px;color:#6B6256;font-size:14px">Retrouve-nous sur nos réseaux :</p>
       <div style="text-align:center;margin:8px 0">${boutons}</div>`
    : "";

  try {
    await resend.emails.send({
      from: "AESS <onboarding@resend.dev>",
      to: carte.email,
      subject: "🌍 Bienvenue dans la famille AESS !",
      html: `
        <div style="font-family:'Segoe UI',Helvetica,Arial,sans-serif;color:#241E17;max-width:560px;margin:auto">
          <div style="background:linear-gradient(135deg,#09421F,#0E5C2F);color:#fff;padding:28px 28px 22px;border-radius:16px 16px 0 0;text-align:center">
            <div style="font-size:12px;letter-spacing:1px;color:#E9E0CB">ASSOCIATION DES ÉTUDIANTS SÉNÉGALAIS DE LA SORBONNE</div>
            <h1 style="margin:10px 0 0;font-size:26px">Bienvenue, ${carte.prenom} ! 🎉</h1>
          </div>
          <div style="background:#FAF6EE;padding:26px 28px;border-radius:0 0 16px 16px">
            <p style="font-size:15px;line-height:1.6;margin-top:0">
              Tu fais désormais partie de la communauté AESS. On est ravis de
              t'accueillir — ensemble, on va plus loin. 💚💛❤️
            </p>
            <p style="font-size:15px;line-height:1.6">
              Voici ta <b>carte de membre</b> officielle. Tu la trouves ci-dessous
              et en pièce jointe : garde-la précieusement !
            </p>
            <div style="text-align:center;margin:18px 0">
              <img src="cid:carte" alt="Carte de membre AESS" style="width:100%;max-width:440px;border-radius:18px" />
            </div>
            <p style="font-size:15px;line-height:1.6">
              Besoin d'un coup de main pour tes démarches, ton logement ou juste
              envie de rencontrer du monde ? On est là pour ça. N'hésite jamais à
              nous écrire. 😊
            </p>
            ${blocReseaux}
            <p style="margin-top:24px;color:#0E5C2F;font-weight:700;text-align:center">
              Ensemble, plus loin. — l'équipe AESS
            </p>
          </div>
        </div>`,
      attachments: [
        {
          filename: `carte-aess-${carte.numero}.png`,
          content: base64,
          contentId: "carte",
        },
      ],
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 });
  }
}
