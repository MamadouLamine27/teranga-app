export default function Parrainage() {
  return (
    <main className="wrap" style={{ paddingBlock: 48, maxWidth: 760 }}>
      <h1 style={{ fontSize: "2.2rem" }}>Parrainage Teranga</h1>
      <p className="lead" style={{ marginBottom: 20 }}>
        Tu arrives, ou tu es déjà là ? On te met en relation avec un étudiant de
        la communauté. On n&apos;arrive jamais seul — c&apos;est la Teranga.
      </p>

      <div className="roles">
        <div className="role">
          <h3>Je cherche un parrain / une marraine</h3>
          <p>Un ancien qui connaît le parcours m&apos;accompagne pour mes démarches, mon installation et mes premiers pas.</p>
          <span className="role-cta">Formulaire filleul (bientôt)</span>
        </div>
        <div className="role">
          <h3>Je veux parrainer</h3>
          <p>J&apos;accompagne un nouvel arrivant et je transmets ce que j&apos;ai appris. Le filleul d&apos;hier devient le parrain de demain.</p>
          <span className="role-cta">Devenir parrain (bientôt)</span>
        </div>
      </div>

      <p className="note">Réservé aux membres : le formulaire sera accessible avec la carte membre.</p>

      <style>{`
        .roles{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:10px}
        .role{border:1px solid var(--line);border-radius:14px;padding:24px;background:#fff}
        .role h3{font-size:1.2rem;color:var(--green)}
        .role p{color:var(--muted);margin-top:8px}
        .role-cta{display:inline-block;margin-top:14px;color:var(--gold);font-weight:700;font-size:.92rem}
        .note{color:var(--muted);font-size:.9rem;margin-top:20px}
        @media(max-width:640px){.roles{grid-template-columns:1fr}}
      `}</style>
    </main>
  );
}
