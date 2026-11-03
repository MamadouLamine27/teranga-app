import Image from "next/image";

function Silhouette() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4z" />
    </svg>
  );
}

const executif = [
  { nom: "Mouhammad GAYE", role: "Président" },
  { nom: "Diado LY", role: "Vice-présidente" },
  { nom: "Bille KEBE", role: "Secrétaire général" },
  { nom: "Anta DIENG", role: "Adjointe secrétaire" },
  { nom: "Palla GUEYE", role: "Trésorière — Suivi budgétaire" },
  { nom: "Ngone GASSAMA", role: "Trésorière — Gestion financière" },
];

const valeurs = [
  { t: "Teranga", d: "L'hospitalité sénégalaise : on accueille, on n'arrive jamais seul." },
  { t: "Solidarité", d: "L'entraide entre étudiants, des anciens vers les nouveaux." },
  { t: "Excellence", d: "Encourager la réussite académique et l'engagement de chacun." },
];

const poles = [
  { nom: "Événementiel & Culture", mission: "Organisation des événements culturels et des activités sociales.",
    membres: [
      { nom: "Moussa Ba", role: "Manager" }, { nom: "Awa Diop", role: "Manager" },
      { nom: "Ndeye Aissatou Dieng", role: "Adjointe" }, { nom: "Aissatou Ndiaye", role: "Membre" },
      { nom: "Mouhamed Diouf", role: "Membre" }, { nom: "Léo Diallo", role: "Membre" },
    ] },
  { nom: "Communication & Média", mission: "Réseaux sociaux, supports visuels, couverture et production de contenus.",
    membres: [
      { nom: "Aissatou Sow", role: "Manager communication" }, { nom: "Fatou Pouye", role: "Adjointe" },
      { nom: "Kadia Touré", role: "Chargée design & visuels" }, { nom: "Mbarka Seck", role: "Responsable média" },
    ] },
  { nom: "Partenariats & Carrière", mission: "Développement de partenariats et mise en relation avec des acteurs externes.",
    membres: [
      { nom: "Junior Ndiaye", role: "Manager partenariats" }, { nom: "Mareme Seye", role: "Adjointe" },
      { nom: "Souleymane Kane", role: "Chargé relations extérieures" }, { nom: "Mouhameth Doukoure", role: "Membre" },
    ] },
  { nom: "Social & Vie étudiante", mission: "Accueil, intégration des étudiants et actions solidaires.",
    membres: [
      { nom: "Saer Ndiaye", role: "Responsable" }, { nom: "Mah Ndiaye", role: "Adjointe" },
      { nom: "Fatou Dieng", role: "Chargé accompagnement" },
    ] },
  { nom: "Sport & Bien-être", mission: "Activités sportives, tournois et cohésion entre étudiants.",
    membres: [
      { nom: "Celestin Diatta", role: "Manager" }, { nom: "Abdou Thiam", role: "Adjoint" },
      { nom: "Serigne Chouaibou Konate", role: "Chargé bien-être & activités" }, { nom: "Kalidou Sy", role: "Membre" },
    ] },
  { nom: "Académique & Réussite", mission: "Tutorat, ressources et accompagnement académique.",
    membres: [
      { nom: "Aliou Sow", role: "Manager académique" }, { nom: "Hawa Touré", role: "Adjointe" },
      { nom: "Sékou Tandia", role: "Chargé tutorat" }, { nom: "Sérigne Fall", role: "Chargée ressources" },
    ] },
  { nom: "Digital & Innovation", mission: "Outils numériques et modernisation de l'association.",
    membres: [
      { nom: "Mamadou Lamine Kebe", role: "Manager digital" }, { nom: "Maimouna Ka", role: "Adjointe" },
      { nom: "Mariama Leye", role: "Chargé développement" },
    ] },
  { nom: "Organisation & Logistique", mission: "Logistique, coordination et organisation matérielle des activités.",
    membres: [
      { nom: "Kiné Kebe", role: "Chargée organisation" }, { nom: "Yoro Sow", role: "Adjoint" },
      { nom: "Racky Traore", role: "Manager logistique" }, { nom: "Mor Talla Diop", role: "Chargé matériel" },
      { nom: "Dame Diagne", role: "Membre" }, { nom: "Lamine Sarr", role: "Membre" },
      { nom: "Abou Hamidou Diop", role: "Membre" },
    ] },
  { nom: "Cellule Féminine", mission: "Promotion de la participation des étudiantes et initiatives dédiées.",
    membres: [
      { nom: "Awa Diaw", role: "Responsable" }, { nom: "Ramatoulaye Senghor", role: "Adjointe" },
      { nom: "Maimouna Soumare", role: "Responsable intégration" }, { nom: "Ndeye Lala Ndour", role: "Membre" },
      { nom: "Ndeye Amy Ndongo", role: "Membre" }, { nom: "Rokhaya Mbengue", role: "Membre" },
    ] },
  { nom: "Commissaires aux comptes", mission: "Transparence et contrôle de la gestion financière.",
    membres: [
      { nom: "Cheikh Yakhoub Sow", role: "Responsable" }, { nom: "Ousmane Kebe", role: "Adjoint" },
    ] },
];

function Membre({ nom, role }: { nom: string; role: string }) {
  return (
    <div className="m">
      <div className="ph"><Silhouette /></div>
      <div className="b"><div className="nm">{nom}</div><div className="ro">{role}</div></div>
    </div>
  );
}

export default function APropos() {
  return (
    <>
      <header className="ahead">
        <div className="in">
          <h1>L&apos;association</h1>
          <p className="sub">Association des Étudiants Sénégalais de la Sorbonne</p>
          <div className="rule" />
          <p className="tag">Nouveau statut, nouveaux défis.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="mission2">
            <Image src="/images/logo.png" alt="Logo de l'AESS" width={170} height={170} className="mlogo" priority />
            <div>
              <h2>Notre mission</h2>
              <p className="lead">
                L&apos;AESS accompagne les étudiants sénégalais des différents
                établissements de la Sorbonne tout au long de leur parcours :
                accueil des nouveaux arrivants, aide aux démarches, réussite
                académique, insertion professionnelle et valorisation de la culture
                sénégalaise. Bien plus qu&apos;une association d&apos;événements,
                nous voulons être un cadre de solidarité, d&apos;épanouissement et
                de représentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Nos valeurs</h2>
          <div className="values">
            {valeurs.map((v) => (<div key={v.t}><h3>{v.t}</h3><p>{v.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Le bureau exécutif</h2>
          <p className="lead" style={{ marginBottom: 22 }}>Mandat 2026 — 2027.</p>
          <div className="team exec">{executif.map((m, i) => <Membre key={i} {...m} />)}</div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 style={{ marginBottom: 4 }}>Les pôles</h2>
          {poles.map((p, i) => (
            <div className="pole" key={i}>
              <div className="pole-head"><span className="bar" /><h3>{p.nom}</h3></div>
              <p className="ms">{p.mission}</p>
              <div className="team">{p.membres.map((m, j) => <Membre key={j} {...m} />)}</div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .ahead{background:var(--green-deep);color:#F6EFDF;text-align:center;position:relative;overflow:hidden}
        .ahead::after{content:"";position:absolute;right:-120px;top:-120px;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(227,165,26,.18),transparent 70%)}
        .ahead .in{position:relative;z-index:1;padding:44px 24px 46px;max-width:720px;margin:auto}
        .ahead h1{font-size:2.7rem;color:#FFFDF7;font-family:var(--font-display),sans-serif}
        .ahead .sub{color:#E9E0CB;margin-top:10px;font-size:1.05rem}
        .ahead .rule{width:54px;height:3px;background:var(--gold);border-radius:2px;margin:18px auto 0}
        .ahead .tag{color:var(--gold);font-weight:600;margin-top:14px;font-size:.98rem}
        .mission2{display:flex;gap:40px;align-items:center}
        .mission2 .mlogo{width:170px;height:170px;flex:0 0 auto;object-fit:contain}
        @media(max-width:700px){.mission2{flex-direction:column;text-align:center;gap:20px}}
        .team{display:grid;grid-template-columns:repeat(auto-fill,minmax(158px,1fr));gap:18px}
        .m{background:var(--paper);border:1px solid var(--line);border-radius:16px;overflow:hidden}
        .m .ph{height:188px;background:linear-gradient(160deg,#f4efe4,#ece5d5);display:flex;align-items:center;justify-content:center}
        .m .ph svg{width:54px;height:54px;color:#cdc2ad}
        .m .b{padding:13px 14px 16px}
        .m .nm{font-weight:700;font-size:1rem;letter-spacing:-.01em;line-height:1.15;min-height:2.3em;font-family:var(--font-display),sans-serif}
        .m .ro{color:var(--muted);font-size:.82rem;margin-top:4px;line-height:1.3}
        .exec .m{border-top:3px solid var(--green)}
        .exec .m .ph{height:210px;background:linear-gradient(160deg,#eaf0ea,#dfe9df)}
        .exec .m .ph svg{color:#b7c6ba}
        .pole{margin-top:44px}
        .pole-head{display:flex;align-items:center;gap:12px;margin-bottom:4px}
        .pole-head .bar{width:5px;height:26px;background:var(--gold);border-radius:3px;flex:0 0 auto}
        .pole-head h3{font-size:1.45rem;color:var(--ink)}
        .pole .ms{color:var(--muted);font-size:.95rem;margin:0 0 20px 17px}
      `}</style>
    </>
  );
}
