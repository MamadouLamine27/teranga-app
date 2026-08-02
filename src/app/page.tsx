export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <span className="text-6xl" role="img" aria-label="Drapeau du Sénégal">
        🇸🇳
      </span>

      <h1 className="text-3xl font-bold">Teranga App</h1>
      <p className="max-w-md text-gray-600">
        Le site de l&apos;Association des Étudiants Sénégalais de la Sorbonne.
        Bientôt : guides, événements, espace membre et parrainage Teranga.
      </p>
    </main>
  );
}
