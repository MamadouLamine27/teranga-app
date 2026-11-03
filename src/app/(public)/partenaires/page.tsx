export default function Partenaires() {
  return (
    <main className="wrap" style={{ paddingBlock: 48, maxWidth: 980 }}>
      <h1 style={{ fontSize: "2.2rem" }}>Nos partenaires</h1>
      <p className="lead" style={{ marginBottom: 30 }}>
        Ils soutiennent l&apos;association et la communauté étudiante sénégalaise.
      </p>
      <div className="parts">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div className="part" key={n}>Logo partenaire {n}</div>
        ))}
      </div>
      <p className="note">Les partenaires seront ajoutés au fur et à mesure.</p>
      <style>{`
        .parts{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .part{aspect-ratio:3/2;background:#fff;border:1px dashed var(--line);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.9rem}
        .note{color:var(--muted);font-size:.9rem;margin-top:16px}
        @media(max-width:640px){.parts{grid-template-columns:repeat(2,1fr)}}
      `}</style>
    </main>
  );
}
