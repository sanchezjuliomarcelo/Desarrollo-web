import data from "./recetas.json";
// Fotos correctas de cada receta (recuperadas del sitio original de Momentus).
import babaroise from "../assets/recetas/bavaroise-choc.jpg";
import balcarce from "../assets/recetas/balcarce.jpg";
import bananaSplit from "../assets/recetas/banana-split.jpg";
import bavaroiseFrutilla from "../assets/recetas/bavaroise-frutilla.jpg";
import brownie from "../assets/recetas/brownie.jpg";
import cheesecake from "../assets/recetas/cheesecake.jpg";
import chocotorta from "../assets/recetas/chocotorta.jpg";
import keyLime from "../assets/recetas/key-lime.jpg";
import lemon from "../assets/recetas/lemon.jpg";
import rogel from "../assets/recetas/rogel.jpg";
import frutosRojos from "../assets/recetas/frutos-rojos.jpg";
import higos from "../assets/recetas/higos.jpg";
import arcoiris from "../assets/recetas/arcoiris.jpg";
import selvaNegra from "../assets/recetas/selva-negra.jpg";
import cheesecakeFr from "../assets/recetas/cheesecake-fr.jpg";

const slug = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Metadatos por receta: intro propia de Flor, categoría, imagen y tiempo.
const meta = {
  "Torta Babaroise": { cat: "Postres", img: babaroise, intro: "Un postre de textura aterciopelada y sabor equilibrado, de los que se disfrutan en cualquier momento del día.", tiempo: "4 h de frío" },
  "Postre Balcarce": { cat: "Clásicos argentinos", img: balcarce, intro: "Merengue, dulce de leche y bizcocho húmedo enrollados en pionono: el espíritu de Balcarce en casa.", tiempo: "1 h de frío" },
  "Tarta Banana Split": { cat: "Tartas", img: bananaSplit, intro: "El postre de heladería de siempre, servido sobre una base de tarta y con un hilo de chocolate.", tiempo: "30 min" },
  "Babaroise de Frutilla": { cat: "Postres", img: bavaroiseFrutilla, intro: "Puré de frutillas frescas y crema montada en picos suaves, cuajados apenas con gelatina.", tiempo: "3 h de frío" },
  "Torta Brownie": { cat: "Tortas", img: brownie, intro: "Un brownie denso de chocolate semiamargo que es base, relleno y excusa para el dulce de leche.", tiempo: "1 h" },
  "Cheesecake de Maracuya": { cat: "Tartas", img: cheesecake, intro: "La cremosidad del queso cocido contra la acidez del maracuyá: una sintonía perfecta al paladar.", tiempo: "4 h de frío" },
  "Chocotorta": { cat: "Clásicos argentinos", img: chocotorta, intro: "Dulce de leche, queso crema y chocolinas: el clásico de los años '80 que divide y enamora.", tiempo: "4 h de frío" },
  "Key Lime Pie": { cat: "Tartas", img: keyLime, intro: "Una tarta de lima ácida y aromática, con base sablée de vainilla y cubierta de chantilly.", tiempo: "3 h de frío" },
  "Lemon Pie": { cat: "Tartas", img: lemon, intro: "Curd de limón sobre sablée de chocolate semiamargo, cubierto con merengue flameado.", tiempo: "2 h" },
  "Torta Rogel": { cat: "Clásicos argentinos", img: rogel, intro: "Capas finas y crocantes, mucho dulce de leche y un merengue que corona la torta argentina por excelencia.", tiempo: "1 h 30" },
  "Tarta de Frutos Rojos": { cat: "Tartas", img: frutosRojos, intro: "Mermelada casera de frutos rojos y ganache de chocolate blanco sobre masa sablée.", tiempo: "2 h" },
  "Tarta de Higos": { cat: "Tartas", img: higos, intro: "Chocolate, dulce de leche, higos y pistacho: una tarta golosa y distinta, ideal para el té.", tiempo: "2 h" },
  "Torta Arcoiris": { cat: "Tortas", img: arcoiris, intro: "Bizcochos de colores con creamcheese: un clásico alegre para celebrar en cualquier momento.", tiempo: "2 h" },
  "Torta Selva Negra": { cat: "Tortas", img: selvaNegra, intro: "Bizcochos de chocolate con kirsch, crema y cerezas: el dulce más característico de Alemania.", tiempo: "2 h" },
  "cheesecake de frutos rojos": { cat: "Tartas", img: cheesecakeFr, intro: "La versión con frutos rojos del cheesecake: base crocante, queso cremoso y salsa artesanal.", tiempo: "4 h de frío" },
};

export const recipes = Object.entries(data).map(([title, body]) => {
  const m = meta[title] || {};
  const cleanTitle = title.replace(/^./, (c) => c.toUpperCase());
  return {
    slug: slug(title),
    title: cleanTitle,
    cat: m.cat || "Recetas",
    img: m.img,
    intro: m.intro || "",
    tiempo: m.tiempo || null,
    ingredientes: body.ingredientes,
    preparacion: body.preparacion,
  };
});

export const recipeCategories = [...new Set(recipes.map((r) => r.cat))];
