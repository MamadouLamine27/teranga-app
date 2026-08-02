export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="flex gap-1" aria-hidden>
        <span className="h-8 w-6 bg-[#00853F]" />
        <span className="h-8 w-6 bg-[#FDEF42]" />
        <span className="h-8 w-6 bg-[#E31B23]" />
      </div>
      <h1 className="text-3xl font-bold">Teranga App</h1>
      <p className="max-w-md text-gray-600">
        Le site de l'Association des Étudiants Sénégalais de la Sorbonne.
        Bientôt : guides, événements, espace membre et parrainage Teranga.
      </p>
    </main>
  );
}
