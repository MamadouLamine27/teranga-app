"use client";

import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image";

type Infos = {
  prenom: string; nom: string; email: string;
  universite: string; telephone: string; validite: string;
};
const vide: Infos = { prenom: "", nom: "", email: "", universite: "", telephone: "", validite: "2026-2027" };

function numFR(tel: string): string | null {
  let d = tel.replace(/[^\d+]/g, "");
  if (d.startsWith("+33")) d = "0" + d.slice(3);
  else if (d.startsWith("0033")) d = "0" + d.slice(4);
  d = d.replace(/\D/g, "");
  return /^0[1-9]\d{8}$/.test(d) ? d : null;
}
function formatFR(d: string) { return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim(); }

function valider(f: Infos): Partial<Record<keyof Infos, string>> {
  const e: Partial<Record<keyof Infos, string>> = {};
  if (!f.prenom.trim()) e.prenom = "Le prénom est obligatoire.";
  if (!f.nom.trim()) e.nom = "Le nom est obligatoire.";
  if (!f.universite.trim()) e.universite = "L'université est obligatoire.";
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Email invalide.";
  if (!/^\d{4}-\d{4}$/.test(f.validite)) e.validite = "Format attendu : AAAA-AAAA.";
  if (f.telephone.trim() && !numFR(f.telephone)) e.telephone = "Numéro français invalide.";
  return e;
}

export default function AdminCartes() {
  const [f, setF] = useState<Infos>(vide);
  const [carte, setCarte] = useState<(Infos & { numero: string }) | null>(null);
  const [erreurs, setErreurs] = useState<Partial<Record<keyof Infos, string>>>({});
  const [envoi, setEnvoi] = useState(false);
  const [erreurServeur, setErreurServeur] = useState("");
  const carteRef = useRef<HTMLDivElement>(null);
  const [mail, setMail] = useState<string>("");

  const set = (k: keyof Infos) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const generer = async () => {
    const e = valider(f);
    setErreurs(e); setErreurServeur(""); setCarte(null);
    if (Object.keys(e).length > 0) return;
    setEnvoi(true);
    try {
      const res = await fetch("/api/cartes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      const data = await res.json();
      if (!res.ok) setErreurServeur(data.error || "Erreur.");
      else setCarte({ ...f, numero: data.numero });
    } catch {
      setErreurServeur("Impossible de contacter le serveur.");
    } finally { setEnvoi(false); }
  };

  const telecharger = async () => {
    if (!carteRef.current || !carte) return;
    const dataUrl = await toPng(carteRef.current, { pixelRatio: 3, cacheBust: true });
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `carte-aess-${carte.nom}-${carte.numero}.png`;
    a.click();
  };

  const envoyerMail = async () => {
    if (!carte || !carteRef.current) return;
    setMail("Envoi…");
    try {
      const imageBase64 = await toPng(carteRef.current, { pixelRatio: 3, cacheBust: true });
      const res = await fetch("/api/cartes/envoyer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numero: carte.numero, imageBase64 }),
      });
      setMail(res.ok ? "Carte envoyée par email \u2714" : "Échec de l'envoi.");
    } catch {
      setMail("Échec de l'envoi.");
    }
  };

  const telCarte = carte ? numFR(carte.telephone) : null;
  const lienVerif =
    carte && typeof window !== "undefined"
      ? `${window.location.origin}/verifier/${carte.numero}`
      : "";

  return (
    <main className="wrap" style={{ paddingBlock: 48, maxWidth: 760 }}>
      <h1 style={{ fontSize: "2rem" }}>Émettre une carte membre</h1>
      <p className="lead" style={{ marginBottom: 28 }}>
        Réservé au bureau. Saisis les informations ; la carte est enregistrée,
        s&apos;affiche avec son numéro et son QR, et peut être téléchargée. Les
        champs marqués d&apos;un astérisque (*) sont obligatoires.
      </p>

      <div style={{ display: "grid", gap: 16 }}>
        <div><label className="lbl">Prénom <span className="req">*</span></label>
          <input className="fld" value={f.prenom} onChange={set("prenom")} />
          {erreurs.prenom && <div className="err">{erreurs.prenom}</div>}</div>
        <div><label className="lbl">Nom <span className="req">*</span></label>
          <input className="fld" value={f.nom} onChange={set("nom")} />
          {erreurs.nom && <div className="err">{erreurs.nom}</div>}</div>
        <div><label className="lbl">Email <span className="req">*</span></label>
          <input className="fld" type="email" value={f.email} onChange={set("email")} />
          {erreurs.email && <div className="err">{erreurs.email}</div>}</div>
        <div><label className="lbl">Université <span className="req">*</span></label>
          <input className="fld" value={f.universite} onChange={set("universite")} />
          {erreurs.universite && <div className="err">{erreurs.universite}</div>}</div>
        <div><label className="lbl">Téléphone (facultatif)</label>
          <input className="fld" type="tel" value={f.telephone} onChange={set("telephone")} placeholder="06 12 34 56 78" />
          {erreurs.telephone && <div className="err">{erreurs.telephone}</div>}</div>
        <div><label className="lbl">Année de validité <span className="req">*</span></label>
          <input className="fld" value={f.validite} onChange={set("validite")} placeholder="2026-2027" />
          {erreurs.validite && <div className="err">{erreurs.validite}</div>}</div>
        <button className="btn btn-green" onClick={generer} disabled={envoi} style={{ justifySelf: "start", opacity: envoi ? 0.6 : 1 }}>
          {envoi ? "Enregistrement…" : "Générer la carte"}
        </button>
        {erreurServeur && <div className="err">{erreurServeur}</div>}
      </div>

      {carte && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: 12 }}>Carte enregistrée</h2>
          <div className="membercard" ref={carteRef}>
            <div className="membercard-top">
              <span className="membercard-asso">AESS · Sorbonne</span>
              <span className="membercard-year">{carte.validite}</span>
            </div>
            <div className="membercard-name">{carte.prenom} {carte.nom}</div>
            <div className="membercard-row">
              <div className="membercard-grid">
                <div><div className="membercard-label">Université</div>
                  <div className="membercard-val">{carte.universite}</div></div>
                {telCarte && (<div><div className="membercard-label">Téléphone</div>
                  <div className="membercard-val">{formatFR(telCarte)}</div></div>)}
              </div>
              <div className="membercard-qr">
                <QRCodeCanvas value={lienVerif} size={74} bgColor="#ffffff" fgColor="#09421F" />
              </div>
            </div>
            <div className="membercard-foot">N° {carte.numero} · {carte.email}</div>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button className="btn btn-gold" onClick={telecharger}>Télécharger la carte (PNG)</button>
            <button className="btn btn-green" onClick={envoyerMail}>Envoyer par email</button>
            {mail && <span style={{ color: "var(--muted)" }}>{mail}</span>}
          </div>
        </div>
      )}

      <style>{`
        .req{color:var(--clay);font-weight:700}
        .lbl{display:block;font-size:.85rem;color:var(--muted);margin-bottom:5px;font-weight:600}
        .fld{width:100%;padding:12px 14px;border:1px solid var(--line);border-radius:10px;font-size:1rem;font-family:inherit;background:#fff;color:var(--ink)}
        .fld:focus{outline:none;border-color:var(--green)}
        .err{color:var(--clay);font-size:.82rem;margin-top:5px}
        .membercard{max-width:440px;border-radius:18px;padding:24px;color:#F6EFDF;background:linear-gradient(135deg,var(--green-deep),var(--green));box-shadow:0 10px 30px rgba(9,66,31,.25)}
        .membercard-top{display:flex;justify-content:space-between;align-items:center;font-size:.85rem;color:#E9E0CB}
        .membercard-asso{font-weight:700}
        .membercard-year{background:var(--gold);color:#3A2A05;font-weight:700;padding:3px 10px;border-radius:999px;font-size:.78rem}
        .membercard-name{font-family:var(--font-display);font-weight:800;font-size:1.7rem;margin-top:26px;color:#fff}
        .membercard-row{display:flex;justify-content:space-between;align-items:flex-end;margin-top:20px;gap:20px}
        .membercard-grid{display:flex;gap:30px;flex-wrap:wrap}
        .membercard-label{font-size:.72rem;color:#CFE3D4;text-transform:uppercase;letter-spacing:.5px}
        .membercard-val{font-weight:600;margin-top:2px}
        .membercard-qr{background:#fff;padding:6px;border-radius:8px;line-height:0}
        .membercard-foot{margin-top:22px;font-size:.78rem;color:#D8CBB0;border-top:1px solid rgba(255,255,255,.2);padding-top:12px}
      `}</style>
    </main>
  );
}
