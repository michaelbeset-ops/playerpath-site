import type { ImageMetadata } from "astro";
import type { Kaart } from "../components/CollectibleCard.astro";

// Vier voorbeeldkaarten, één per level, in hetzelfde formaat als de embed van
// het platform. Allemaal verzonnen spelers, geen echte kinderen.
//
// Levels hangen aan XP, niet aan het cijfer: zilver vanaf 150, goud vanaf 400,
// elite vanaf 900. Daarom kan een zilveren kaart een hoger cijfer hebben dan
// een gouden.
//
// Foto's: zet speler-1.jpg t/m speler-4.jpg in src/assets/screens/ en ze
// verschijnen vanzelf op de kaarten. Alleen van eigen spelers, met toestemming.
const fotos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/screens/speler-*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

const foto = (nummer: number) => {
  const hit = Object.entries(fotos).find(([pad]) => /speler-(\d+)\./.exec(pad)?.[1] === String(nummer));
  return hit?.[1].default ?? null;
};

const school = "Voetbalschool PlayerPath";
const seizoen = "2026/27";

export const kaarten: Kaart[] = [
  {
    first_name: "Adam",
    last_name: "Hoekstra",
    position: "field",
    age_category: "O13",
    overall: 72,
    level: "brons",
    xp: 95,
    progress: 63,
    shirt_number: 10,
    season: seizoen,
    school,
    card_number: "#0026",
    categories: [
      ["Techniek", 74, 1],
      ["Inzicht", 70, 0],
      ["Passing", 73, 3],
      ["Afwerking", 71, 0],
      ["Snelheid", 75, 2],
      ["Mentaliteit", 69, -2],
    ],
    badges: [["star", "Op de kaart"]],
    foto: foto(1),
  },
  {
    first_name: "Fenna",
    last_name: "de Vries",
    position: "keeper",
    age_category: "O12",
    overall: 84,
    level: "zilver",
    xp: 260,
    progress: 44,
    season: seizoen,
    school,
    card_number: "#0015",
    categories: [
      ["Reflexen", 86, 2],
      ["Uitkomen", 83, 5],
      ["Voetenwerk", 84, 1],
      ["1-op-1", 85, 0],
      ["Hoge ballen", 82, 3],
      ["Communicatie", 84, 2],
    ],
    badges: [
      ["trending", "In de lift"],
      ["check", "Doel gehaald"],
    ],
    foto: foto(2),
  },
  {
    first_name: "Sem",
    last_name: "de Vries",
    position: "keeper",
    age_category: "O10",
    overall: 79,
    level: "goud",
    xp: 420,
    progress: 4,
    shirt_number: 1,
    season: seizoen,
    school,
    card_number: "#0001",
    categories: [
      ["Reflexen", 81, 3],
      ["Uitkomen", 77, 2],
      ["Voetenwerk", 79, 0],
      ["1-op-1", 80, 4],
      ["Hoge ballen", 78, -1],
      ["Communicatie", 79, 2],
    ],
    badges: [
      ["trophy", "Vaste waarde"],
      ["trending", "In de lift"],
      ["star", "Op de kaart"],
    ],
    foto: foto(3),
  },
  {
    first_name: "Jayden",
    last_name: "Meijer",
    position: "keeper",
    age_category: "O14",
    overall: 88,
    level: "elite",
    xp: 960,
    progress: 100,
    shirt_number: 16,
    season: seizoen,
    school,
    card_number: "#0003",
    categories: [
      ["Reflexen", 90, 2],
      ["Uitkomen", 87, 4],
      ["Voetenwerk", 86, 1],
      ["1-op-1", 89, 3],
      ["Hoge ballen", 88, 0],
      ["Communicatie", 91, 2],
    ],
    badges: [
      ["trophy", "Vaste waarde"],
      ["trending", "In de lift"],
      ["check", "Doel gehaald"],
    ],
    foto: foto(4),
  },
];
