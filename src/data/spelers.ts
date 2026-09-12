import type { ImageMetadata } from "astro";

// De vier voorbeeldkaarten, één per level. Namen komen uit de voorbeeldschool
// van het platform; levelgrenzen uit RatingSettings (zilver 150, goud 400,
// elite 900 XP) en badges uit PlayerBadges.
//
// Foto's: zet speler-1.jpg t/m speler-4.jpg in src/assets/screens/ en ze
// verschijnen vanzelf op de kaarten. Alleen met toestemming van de ouders.
const fotos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/screens/speler-*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

const foto = (nummer: number) => {
  const hit = Object.entries(fotos).find(([pad]) => /speler-(\d+)\./.exec(pad)?.[1] === String(nummer));
  return hit?.[1].default ?? null;
};

const categorieen = ["Reflexen", "Uitkomen", "Voetenwerk", "1-op-1", "Hoge ballen", "Communicatie"];
const cijfers = (waarden: number[]) =>
  waarden.map((waarde, i) => ({ label: categorieen[i], waarde }));

export const kaarten = [
  {
    tier: "brons" as const,
    voornaam: "Liam",
    achternaam: "Bakker",
    overall: 64,
    categorie: "O11",
    cijfers: cijfers([66, 61, 63, 65, 60, 69]),
    xp: 90,
    voortgang: 60,
    upgrade: "Nog 60 punten tot je volgende upgrade",
    badges: [{ label: "Altijd op tijd", icoon: "kalender" as const }],
    foto: foto(1),
    school: "Keepersschool Rob",
  },
  {
    tier: "zilver" as const,
    voornaam: "Sam",
    achternaam: "de Boer",
    overall: 72,
    categorie: "O12",
    cijfers: cijfers([74, 70, 71, 73, 69, 75]),
    xp: 260,
    voortgang: 44,
    upgrade: "Nog 140 punten tot je volgende upgrade",
    badges: [
      { label: "Vaste waarde", icoon: "ster" as const },
      { label: "Altijd op tijd", icoon: "kalender" as const },
    ],
    foto: foto(2),
    school: "Keepersschool Rob",
  },
  {
    tier: "goud" as const,
    voornaam: "Youssef",
    achternaam: "El Amrani",
    overall: 81,
    categorie: "O13",
    cijfers: cijfers([79, 80, 84, 78, 80, 85]),
    xp: 620,
    voortgang: 44,
    upgrade: "Nog 280 punten tot je volgende upgrade",
    badges: [
      { label: "Uitblinker", icoon: "trofee" as const },
      { label: "Vaste waarde", icoon: "ster" as const },
      { label: "Onmisbaar", icoon: "medaille" as const },
    ],
    foto: foto(3),
    school: "Keepersschool Rob",
  },
  {
    tier: "elite" as const,
    voornaam: "Noor",
    achternaam: "Visser",
    overall: 88,
    categorie: "O14",
    cijfers: cijfers([90, 86, 87, 89, 85, 91]),
    xp: 1140,
    voortgang: 100,
    upgrade: "Het hoogste level bereikt",
    badges: [
      { label: "Uitblinker", icoon: "trofee" as const },
      { label: "Compleet", icoon: "medaille" as const },
      { label: "Onmisbaar", icoon: "kalender" as const },
    ],
    foto: foto(4),
    school: "Keepersschool Rob",
  },
];
