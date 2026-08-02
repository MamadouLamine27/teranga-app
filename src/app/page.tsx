import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <Image
        src="/images/logo.png"
        alt="Logo de l'Association des Étudiants Sénégalais de Sorbonne (AESS)"
        width={180}
        height={180}
        priority
      />

      <h1 className="text-3xl font-bold">Teranga App</h1>
      <p className="max-w-md text-gray-600">
        Le site de l&apos;Association des Étudiants Sénégalais de Sorbonne.
        Bientôt : guides, événements, espace membre et parrainage Teranga.
      </p>
    </main>
  );
}
