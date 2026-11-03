// Compatible edge runtime (middleware) ET node : on utilise Web Crypto.
const SECRET = process.env.ADMIN_SECRET || "dev-secret-change-me";
export const COOKIE_ADMIN = "aess_admin";

const enc = new TextEncoder();

async function signer(valeur: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuf = await crypto.subtle.sign("HMAC", key, enc.encode(valeur));
  return Array.from(new Uint8Array(sigBuf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function creerJeton(): Promise<string> {
  const valeur = `admin.${Date.now()}`;
  const sig = await signer(valeur);
  return `${valeur}.${sig}`;
}

export async function jetonValide(jeton?: string): Promise<boolean> {
  if (!jeton) return false;
  const i = jeton.lastIndexOf(".");
  if (i < 0) return false;
  const valeur = jeton.slice(0, i);
  const sig = jeton.slice(i + 1);
  const attendu = await signer(valeur);
  if (sig.length !== attendu.length) return false;
  // Comparaison constante simple
  let diff = 0;
  for (let k = 0; k < sig.length; k++) diff |= sig.charCodeAt(k) ^ attendu.charCodeAt(k);
  if (diff !== 0) return false;
  const ts = Number(valeur.split(".")[1]);
  return Date.now() - ts < 7 * 24 * 3600 * 1000;
}
