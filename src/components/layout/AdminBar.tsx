"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminBar() {
  const router = useRouter();

  const seDeconnecter = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="adminbar">
      <div className="wrap adminbar-inner">
        <div className="adminbar-links">
          <span className="adminbar-tag">Espace bureau</span>
          <Link href="/admin/cartes">Émettre une carte</Link>
          <Link href="/admin/membres">Membres</Link>
        </div>
        <button className="adminbar-out" onClick={seDeconnecter}>Se déconnecter</button>
      </div>
      <style>{`
        .adminbar{background:#09421F;color:#E9E0CB}
        .adminbar-inner{display:flex;align-items:center;justify-content:space-between;height:52px}
        .adminbar-links{display:flex;align-items:center;gap:22px;font-size:.95rem}
        .adminbar-tag{font-weight:700;color:#fff}
        .adminbar-links a{color:#E9E0CB}
        .adminbar-links a:hover{color:#fff}
        .adminbar-out{background:transparent;border:1px solid rgba(255,255,255,.4);color:#fff;border-radius:999px;padding:6px 14px;font-size:.88rem;cursor:pointer;font-family:inherit}
        .adminbar-out:hover{background:rgba(255,255,255,.1)}
      `}</style>
    </div>
  );
}
