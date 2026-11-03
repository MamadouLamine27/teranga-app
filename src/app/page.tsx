import Link from "next/link";

const offres = [
  { t: "Accueil & démarches", d: "Une checklist claire pour tes 90 premiers jours : titre de séjour, sécu, CAF, banque." },
  { t: "Logement & vie pratique", d: "Trouver un logement sans se faire avoir, et les bons plans du quotidien à Paris." },
  { t: "Parrainage Teranga", d: "Un ancien qui t'accompagne dès l'arrivée. On n'arrive jamais seul." },
  { t: "Culture & communauté", d: "Les événements, la vie de l'asso, et le lien avec le Sénégal." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="rule" />
          <h1>Bienvenue dans ta communauté à la Sorbonne.</h1>
          <p>
            Guides, entraide et parrainage pour les étudiants sénégalais et
            africains qui arrivent en France — portés par la Teranga.
          </p>
          <div className="cta">
            <Link href="/ressources" className="btn btn-gold">Découvrir les guides</Link>
            <Link href="/a-propos" className="btn btn-outline">Qui sommes-nous</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Ce que tu trouves ici</h2>
          <p className="lead">
            Un seul endroit, pensé par des étudiants passés par là, pour s'y
            retrouver dès le premier jour.
          </p>
          <div className="offer">
            {offres.map((o) => (
              <div key={o.t}>
                <div className="k" />
                <h3>{o.t}</h3>
                <p>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
