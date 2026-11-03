import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="brand">Teranga</Link>
        <nav className="nav">
          <Link href="/">Accueil</Link>
          <Link href="/ressources">Ressources</Link>
          <Link href="/evenements">Événements</Link>
          <Link href="/parrainage">Parrainage</Link>
          <Link href="/a-propos">L&apos;association</Link>
          <Link href="#" className="btn btn-green" style={{ padding: "9px 18px" }}>Adhérer</Link>
        </nav>
      </div>
    </header>
  );
}
