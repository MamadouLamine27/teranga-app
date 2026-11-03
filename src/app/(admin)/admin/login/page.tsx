"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [motdepasse, setMot] = useState("");
  const [visible, setVisible] = useState(false);
  const [erreur, setErreur] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const router = useRouter();

  const entrer = async () => {
    setEnvoi(true); setErreur("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ motdepasse }),
      });
      if (res.ok) router.push("/admin/membres");
      else setErreur("Mot de passe incorrect.");
    } catch {
      setErreur("Erreur de connexion.");
    } finally { setEnvoi(false); }
  };

  return (
    <main className="wrap" style={{ paddingBlock: 80, maxWidth: 420 }}>
      <h1 style={{ fontSize: "1.8rem" }}>Espace bureau</h1>
      <p className="lead" style={{ marginBottom: 22 }}>
        Accès réservé aux membres du bureau de l&apos;AESS.
      </p>

      <div className="pwd">
        <input
          className="fld"
          type={visible ? "text" : "password"}
          placeholder="Mot de passe"
          value={motdepasse}
          onChange={(e) => setMot(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && entrer()}
        />
        <button
          type="button"
          className="eye"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
        >
          {visible ? (
            // œil ouvert
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            // œil barré
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.9 4.24A9.1 9.1 0 0 1 12 4c6.5 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68" />
              <path d="M6.6 6.6A13.3 13.3 0 0 0 2 11s3.5 7 10 7a9 9 0 0 0 5.4-1.6" />
              <line x1="2" y1="2" x2="22" y2="22" />
            </svg>
          )}
        </button>
      </div>

      {erreur && <div className="err">{erreur}</div>}
      <button className="btn btn-green" onClick={entrer} disabled={envoi}
        style={{ marginTop: 16, opacity: envoi ? 0.6 : 1 }}>
        {envoi ? "Connexion…" : "Entrer"}
      </button>

      <style>{`
        .pwd{position:relative}
        .fld{width:100%;padding:12px 44px 12px 14px;border:1px solid var(--line);border-radius:10px;font-size:1rem;font-family:inherit;background:#fff}
        .fld:focus{outline:none;border-color:var(--green)}
        .eye{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:transparent;border:0;color:var(--muted);cursor:pointer;padding:6px;display:flex;align-items:center}
        .eye:hover{color:var(--green)}
        .err{color:var(--clay);margin-top:10px;font-size:.9rem}
      `}</style>
    </main>
  );
}
