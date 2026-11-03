import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function Verifier({
  params,
}: {
  params: Promise<{ numero: string }>;
}) {
  const { numero } = await params;

  const { data: carte } = await supabaseAdmin
    .from("cartes")
    .select("prenom, nom, universite, validite, numero")
    .eq("numero", numero)
    .maybeSingle();

  return (
    <main className="wrap" style={{ paddingBlock: 64, maxWidth: 560 }}>
      {carte ? (
        <div className="verif ok">
          <div className="verif-badge">✓ Carte valide</div>
          <div className="verif-name">{carte.prenom} {carte.nom}</div>
          <div className="verif-row"><span>Université</span><b>{carte.universite}</b></div>
          <div className="verif-row"><span>Validité</span><b>{carte.validite}</b></div>
          <div className="verif-row"><span>Numéro</span><b>{carte.numero}</b></div>
          <p className="verif-note">
            Carte authentique émise par l&apos;Association des Étudiants Sénégalais
            de la Sorbonne.
          </p>
        </div>
      ) : (
        <div className="verif ko">
          <div className="verif-badge">✕ Carte inconnue</div>
          <p className="verif-note">
            Aucune carte ne correspond au numéro <b>{numero}</b>. Cette carte
            n&apos;a pas été émise par l&apos;AESS, ou le numéro est erroné.
          </p>
        </div>
      )}

      <style>{`
        .verif{border-radius:18px;padding:32px;border:1px solid var(--line);background:#fff}
        .verif.ok{border-top:6px solid var(--green)}
        .verif.ko{border-top:6px solid var(--clay)}
        .verif-badge{font-family:var(--font-display);font-weight:800;font-size:1.5rem}
        .verif.ok .verif-badge{color:var(--green)}
        .verif.ko .verif-badge{color:var(--clay)}
        .verif-name{font-family:var(--font-display);font-weight:800;font-size:1.9rem;margin-top:14px;color:var(--ink)}
        .verif-row{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);font-size:.98rem}
        .verif-row span{color:var(--muted)}
        .verif-note{margin-top:18px;color:var(--muted);font-size:.9rem;line-height:1.5}
      `}</style>
    </main>
  );
}
