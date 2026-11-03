"use client";

import { useEffect, useMemo, useState } from "react";

type Carte = {
  numero: string; prenom: string; nom: string; email: string;
  universite: string; validite: string; cree_le: string;
};

export default function AdminMembres() {
  const [cartes, setCartes] = useState<Carte[]>([]);
  const [q, setQ] = useState("");
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    fetch("/api/membres")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setErreur(d.error);
        else setCartes(d.cartes || []);
      })
      .catch(() => setErreur("Impossible de charger la liste."))
      .finally(() => setChargement(false));
  }, []);

  const filtrees = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return cartes;
    return cartes.filter((c) =>
      `${c.prenom} ${c.nom} ${c.email} ${c.universite} ${c.numero}`
        .toLowerCase()
        .includes(t)
    );
  }, [q, cartes]);

  return (
    <main className="wrap" style={{ paddingBlock: 48, maxWidth: 980 }}>
      <h1 style={{ fontSize: "2rem" }}>Membres</h1>
      <p className="lead" style={{ marginBottom: 24 }}>
        Réservé au bureau. {cartes.length} carte{cartes.length > 1 ? "s" : ""} émise
        {cartes.length > 1 ? "s" : ""}.
      </p>

      <input
        className="search"
        placeholder="Rechercher un nom, email, université, numéro…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {chargement && <p style={{ color: "var(--muted)" }}>Chargement…</p>}
      {erreur && <p className="err">{erreur}</p>}

      {!chargement && !erreur && (
        <div className="tablewrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Nom</th><th>Université</th><th>Numéro</th>
                <th>Validité</th><th>Vérifier</th>
              </tr>
            </thead>
            <tbody>
              {filtrees.map((c) => (
                <tr key={c.numero}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{c.prenom} {c.nom}</div>
                    <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>{c.email}</div>
                  </td>
                  <td>{c.universite}</td>
                  <td style={{ fontFamily: "monospace" }}>{c.numero}</td>
                  <td>{c.validite}</td>
                  <td>
                    <a className="lien" href={`/verifier/${c.numero}`} target="_blank">Ouvrir</a>
                  </td>
                </tr>
              ))}
              {filtrees.length === 0 && (
                <tr><td colSpan={5} style={{ color: "var(--muted)", padding: 20 }}>
                  Aucun résultat.
                </td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <style>{`
        .search{width:100%;max-width:460px;padding:12px 14px;border:1px solid var(--line);border-radius:10px;font-size:1rem;font-family:inherit;margin-bottom:22px;background:#fff}
        .search:focus{outline:none;border-color:var(--green)}
        .err{color:var(--clay)}
        .tablewrap{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}
        .tbl{width:100%;border-collapse:collapse;font-size:.95rem}
        .tbl th{text-align:left;background:var(--green);color:#fff;padding:12px 14px;font-weight:600;font-size:.88rem}
        .tbl td{padding:12px 14px;border-top:1px solid var(--line);vertical-align:top}
        .tbl tbody tr:hover td{background:#faf8f3}
        .lien{color:var(--green);font-weight:600}
      `}</style>
    </main>
  );
}
