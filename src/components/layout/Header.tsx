import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-bold"
          style={{ color: "var(--teranga-vert)" }}
        >
          Teranga App
        </Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/">Accueil</Link>
          <Link href="/evenements">Événements</Link>
          <Link href="/a-propos">L'asso</Link>
        </nav>
      </div>
    </header>
  );
}
