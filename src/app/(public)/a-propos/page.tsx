import Image from "next/image";

const bureau = [
  { nom: "[Nom Prénom]", role: "Président·e" },
  { nom: "[Nom Prénom]", role: "Vice-président·e" },
  { nom: "[Nom Prénom]", role: "Secrétaire général·e" },
  { nom: "[Nom Prénom]", role: "Trésorier·e" },
];

const valeurs = [
  { t: "Teranga", d: "L'hospitalité sénégalaise : on accueille, on n'arrive jamais seul." },
  { t: "Entraide", d: "Les anciens aident les nouveaux ; le savoir se transmet d'une promo à l'autre." },
  { t: "Communauté", d: "Un lien vivant autour des études, de la culture et du pays." },
];

export default function APropos() {
  return (
    <>
      <section className="wrap page-head">
        <Image src="/images/logo.png" alt="Logo de l'AESS" width={116} height={116} priority />
        <h1>L&apos;association</h1>
        <p className="sub">Association des Étudiants Sénégalais de Sorbonne</p>
        <p className="tag">[Votre tagline — ex. « Votre communauté sénégalaise à la Sorbonne »]</p>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Notre mission</h2>
          <p className="lead">
            [Présentation en 3-4 phrases : qui vous accompagnez et comment —
            études, démarches, accueil des nouveaux arrivants, vie culturelle et
            entraide. Texte à remplir avec vos mots.]
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Nos valeurs</h2>
          <div className="values">
            {valeurs.map((v) => (
              <div key={v.t}>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Le bureau</h2>
          <div className="bureau">
            {bureau.map((m, i) => (
              <div className="member" key={i}>
                <div className="avatar">photo</div>
                <div className="nm">{m.nom}</div>
                <div className="ro">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
