// Portfolio de creaciones. Modelo: 1 creación = 1 item con varias imágenes.
// Las vistas "al corte"/detalle son imágenes de la misma creación, no items aparte.
// `recipeSlug` enlaza a la receta cuando existe y está publicada.
import arcoiris from "../assets/gallery/arcoiris.jpg";
import arcoirisCorte from "../assets/gallery/arcoiris-corte.jpg";
import balcarce from "../assets/gallery/balcarce.jpg";
import bananaSplit from "../assets/gallery/banana-split.jpg";
import bananaSplitCorte from "../assets/gallery/banana-split-corte.jpg";
import bavaroise from "../assets/gallery/bavaroise-frutilla.jpg";
import bavaroiseCorte from "../assets/gallery/bavaroise-frutilla-corte.jpg";
import brownie from "../assets/gallery/brownie-torta.jpg";
import cheesecake from "../assets/gallery/cheesecake-maracuya.jpg";
import ganache from "../assets/gallery/ganache-frutos-rojos.jpg";
import keyLime from "../assets/gallery/key-lime.jpg";
import lemonPie from "../assets/gallery/lemon-pie.jpg";
import orangePie from "../assets/gallery/orange-pie.jpg";
import pastafrola from "../assets/gallery/pastafrola.jpg";
import rogel from "../assets/gallery/rogel.jpg";
import rogelCorte from "../assets/gallery/rogel-corte.jpg";
import selvaNegra from "../assets/gallery/selva-negra.jpg";
import selvaNegraCorte from "../assets/gallery/selva-negra-corte.jpg";
import tartaHigos from "../assets/gallery/tarta-higos.jpg";
import tartaHigosCorte from "../assets/gallery/tarta-higos-corte.jpg";
import tartaArandanos from "../assets/gallery/tarta-arandanos.jpg";
import tartaInvierno from "../assets/gallery/tarta-invierno.jpg";
import tiramisu from "../assets/gallery/tiramisu.jpg";
import travelCake from "../assets/gallery/travel-cake.jpg";
import travelCakeCorte from "../assets/gallery/travel-cake-corte.jpg";
import carrotCake from "../assets/gallery/carrot-cake.jpg";
import carrotCakeCorte from "../assets/gallery/carrot-cake-corte.jpg";
import marquisePistacho from "../assets/gallery/marquise-pistacho.jpg";
import marquisePistachoCorte from "../assets/gallery/marquise-pistacho-corte.jpg";
import redVelvet from "../assets/gallery/red-velvet.jpg";
import redVelvetTop from "../assets/gallery/red-velvet-top.jpg";
import moka from "../assets/gallery/moka.jpg";
import mokaCorte from "../assets/gallery/moka-corte.jpg";
import postreFrambuesa from "../assets/gallery/postre-frambuesa.jpg";
import postreFrambuesaCorte from "../assets/gallery/postre-frambuesa-corte.jpg";
import bombonesClasicos from "../assets/gallery/bombones-clasicos.jpg";
import bombonesColor from "../assets/gallery/bombones-color.jpg";
import bombonesMaridaje from "../assets/gallery/bombones-maridaje.jpg";
import bombonesGalaxia from "../assets/gallery/bombones-galaxia.jpg";
import trufasPlato from "../assets/gallery/trufas-plato.jpg";
import trufasCafe from "../assets/gallery/trufas-cafe.jpg";
import tabletaGeo from "../assets/gallery/tableta-geo.jpg";
import tabletaNaranja from "../assets/gallery/tableta-naranja.jpg";
import pistachos from "../assets/gallery/pistachos.jpg";
import huevoPascua from "../assets/gallery/huevo-pascua.jpg";
import huevoOrange from "../assets/gallery/huevo-orange.jpg";
import macaronsBox from "../assets/gallery/macarons-box.jpg";
import macaronsColor from "../assets/gallery/macarons-color.jpg";
import macaronsPistacho from "../assets/gallery/macarons-pistacho.jpg";
import macaronsCafe from "../assets/gallery/macarons-cafe.jpg";
import macaronsRose from "../assets/gallery/macarons-rose.jpg";

export const creations = [
  // ---- Tortas ----
  {
    slug: "selva-negra", cat: "tortas", title: "Selva Negra", recipeSlug: "selva-negra",
    desc: "Tres bizcochos de chocolate con almíbar al kirsch, crema, cerezas al marrasquino y mousse de chocolate.",
    images: [
      { src: selvaNegra, alt: "Torta Selva Negra con crema, virutas de chocolate y cerezas" },
      { src: selvaNegraCorte, alt: "Selva Negra al corte: capas de bizcocho de chocolate, crema y cerezas", label: "El corte" },
    ],
  },
  {
    slug: "balcarce", cat: "tortas", title: "Postre Balcarce", recipeSlug: "postre-balcarce-tradicional",
    desc: "Merengue, dulce de leche, castañas en almíbar y bizcocho humedecido con almíbar.",
    images: [{ src: balcarce, alt: "Postre Balcarce con merengue y dulce de leche" }],
  },
  {
    slug: "rogel", cat: "tortas", title: "Rogel", recipeSlug: "rogel",
    desc: "Capas finas y crocantes con dulce de leche, coronadas con merengue flameado.",
    images: [
      { src: rogel, alt: "Rogel con merengue flameado" },
      { src: rogelCorte, alt: "Rogel al corte: láminas finas y dulce de leche", label: "El corte" },
    ],
  },
  {
    slug: "arcoiris", cat: "tortas", title: "Torta Arcoíris", recipeSlug: "torta-arcoiris",
    desc: "Bizcochos de colores con crema de queso, galletas bañadas en chocolate y macarons.",
    images: [
      { src: arcoirisCorte, alt: "Torta Arcoíris decorada con frutillas, crema y macarons" },
      { src: arcoiris, alt: "Torta Arcoíris al corte: capas de bizcocho de colores", label: "El corte" },
    ],
  },
  {
    slug: "banana-split", cat: "tortas", title: "Tarta Banana Split", recipeSlug: "tarta-banana-split",
    desc: "Base sablée, crema, banana en rodajas y dulce de leche con chocolate belga.",
    images: [
      { src: bananaSplitCorte, alt: "Tarta Banana Split con dulce de leche" },
      { src: bananaSplit, alt: "Tarta Banana Split al corte: banana, crema y dulce de leche", label: "El corte" },
    ],
  },
  {
    slug: "brownie", cat: "tortas", title: "Torta Brownie con dulce de leche",
    desc: "Brownie 60 % cacao con dulce de leche, crema chantilly y nueces.",
    images: [{ src: brownie, alt: "Torta brownie con crema, dulce de leche y nueces" }],
  },
  {
    slug: "travel-cake", cat: "tortas", title: "Travel Cake",
    desc: "Budín de cacao y frutos secos con baño crocante de chocolate y maní, relleno de ganache blanca, crema y cerezas.",
    images: [
      { src: travelCake, alt: "Travel Cake: budín de chocolate con crema, cerezas y rulo de chocolate" },
      { src: travelCakeCorte, alt: "Travel Cake al corte: budín de cacao con relleno de ganache blanca", label: "El corte" },
    ],
  },
  {
    slug: "carrot-cake", cat: "tortas", title: "Carrot Cake",
    desc: "Bizcocho húmedo de zanahoria con nueces y especias, relleno y cobertura de crema de queso.",
    images: [
      { src: carrotCake, alt: "Carrot Cake con cobertura de crema de queso y nueces" },
      { src: carrotCakeCorte, alt: "Carrot Cake al corte: bizcocho de zanahoria con nueces y crema de queso", label: "El corte" },
    ],
  },
  {
    slug: "marquise-pistacho", cat: "tortas", title: "Marquise de chocolate y pistacho",
    desc: "Base de brownie, capa de pistacho, mousse de chocolate con leche y cobertura de chocolate con pistachos.",
    images: [
      { src: marquisePistacho, alt: "Marquise de chocolate y pistacho con cobertura de chocolate y pistachos" },
      { src: marquisePistachoCorte, alt: "Marquise al corte: brownie, capa de pistacho y mousse de chocolate", label: "El corte" },
    ],
  },
  {
    slug: "red-velvet", cat: "tortas", title: "Red Velvet",
    desc: "Bizcocho rojo húmedo de vainilla y cacao, relleno y decoración de crema de queso.",
    images: [
      { src: redVelvet, alt: "Torta Red Velvet con capas rojas y crema de queso, coronada con un macaron" },
      { src: redVelvetTop, alt: "Red Velvet vista desde arriba: rosetas de crema de queso y roja", label: "La terminación" },
    ],
  },
  {
    slug: "moka", cat: "tortas", title: "Torta Moka",
    desc: "Budín de chocolate y café, con glaseado al café y rosetas de crema de manteca al café.",
    images: [
      { src: moka, alt: "Torta Moka con glaseado al café y rosetas de crema de manteca" },
      { src: mokaCorte, alt: "Torta Moka al corte: capas de budín de chocolate y crema al café", label: "El corte" },
    ],
  },

  // ---- Tartas & postres ----
  {
    slug: "postre-frambuesa", cat: "tartas", title: "Postre de frambuesa y chocolate blanco",
    desc: "Biscuit con almíbar, crema de frambuesa y frutos rojos, cobertura de chocolate blanco con efecto terciopelo.",
    images: [
      { src: postreFrambuesa, alt: "Postre de frambuesa con terciopelo rosado en degradé" },
      { src: postreFrambuesaCorte, alt: "Postre de frambuesa al corte: crema de frambuesa, frutos rojos y biscuit", label: "El corte" },
    ],
  },
  {
    slug: "higos-pistacho", cat: "tartas", title: "Tarta de chocolate, higos y pistacho", recipeSlug: "tarta-chocolate-higos-pistacho",
    desc: "Sablée de cacao, crema de chocolate blanco y dulce de leche, ganache 70 %, confitura de higos y pistacho.",
    images: [
      { src: tartaHigos, alt: "Tarta de chocolate, higos y pistacho" },
      { src: tartaHigosCorte, alt: "Tarta de higos al corte: sablée de cacao, crema y ganache", label: "El corte" },
    ],
  },
  {
    slug: "lemon-pie", cat: "tartas", title: "Lemon Pie", recipeSlug: "lemon-pie",
    desc: "Sablée de chocolate semiamargo, curd de limón y merengue flameado.",
    images: [{ src: lemonPie, alt: "Lemon Pie con merengue sobre sablée de chocolate" }],
  },
  {
    slug: "key-lime-pie", cat: "tartas", title: "Key Lime Pie", recipeSlug: "key-lime-pie",
    desc: "Sablée de vainilla, relleno de lima, crema chantilly y ralladura de lima.",
    images: [{ src: keyLime, alt: "Key Lime Pie con crema y ralladura de lima" }],
  },
  {
    slug: "cheesecake-maracuya", cat: "tartas", title: "New York Cheesecake", recipeSlug: "cheesecake-maracuya",
    desc: "Base crocante, relleno de queso horneado y salsa artesanal de maracuyá o frutos rojos.",
    images: [{ src: cheesecake, alt: "New York Cheesecake con salsa de maracuyá" }],
  },
  {
    slug: "tarta-ganache-frutos-rojos", cat: "tartas", title: "Tarta de ganache y frutos rojos", recipeSlug: "tarta-ganache-frutos-rojos",
    desc: "Sablée, confitura casera de frutos rojos, ganache de chocolate blanco y crema.",
    images: [{ src: ganache, alt: "Tarta de ganache de chocolate blanco y frutos rojos" }],
  },
  {
    slug: "bavaroise-frutillas", cat: "tartas", title: "Bavaroise de frutillas", recipeSlug: "bavaroise-de-frutillas",
    desc: "Bizcocho húmedo, crema de vainilla, crema de frutillas, cobertura de chocolate blanco y efecto terciopelo.",
    images: [
      { src: bavaroiseCorte, alt: "Bavaroise de frutillas con terciopelo rosado" },
      { src: bavaroise, alt: "Bavaroise de frutillas al corte: capas de crema", label: "El corte" },
    ],
  },
  {
    slug: "tiramisu", cat: "tartas", title: "Tiramisú con efecto terciopelo", recipeSlug: "tiramisu",
    desc: "Biscuit al café, crema de mascarpone, cacao y cobertura 54 % con efecto terciopelo.",
    images: [{ src: tiramisu, alt: "Tiramisú con cobertura de chocolate y efecto terciopelo" }],
  },
  {
    slug: "orange-pie", cat: "tartas", title: "Orange Pie",
    desc: "Curd cítrico de naranja y merengue sobre una base crocante.",
    images: [{ src: orangePie, alt: "Orange Pie con merengue" }],
  },
  {
    slug: "tarta-arandanos", cat: "tartas", title: "Tarta de ganache y arándanos", recipeSlug: "tarta-ganache-arandanos",
    desc: "Confitura casera de arándanos, ganache de chocolate blanco y picos de merengue sobre sablée.",
    images: [{ src: tartaArandanos, alt: "Tarta de ganache de chocolate blanco y arándanos" }],
  },
  {
    slug: "pastafrola", cat: "tartas", title: "Pastafrola",
    desc: "Masa quebrada y dulce (membrillo o batata), con el enrejado clásico.",
    images: [{ src: pastafrola, alt: "Pastafrola con enrejado de masa" }],
  },

  // ---- Chocolatería ----
  {
    slug: "bombones-galaxia", cat: "chocolateria", title: "Bombones galaxia",
    desc: "Rellenos pintados a mano con manteca de cacao coloreada, en una paleta de nebulosas.",
    images: [{ src: bombonesGalaxia, alt: "Bombones pintados a mano con motivos de galaxia" }],
  },
  {
    slug: "trufas-chocolate", cat: "chocolateria", title: "Trufas de chocolate",
    desc: "Trufas emplatadas sobre cacao amargo.",
    images: [{ src: trufasPlato, alt: "Trufas de chocolate sobre cacao amargo" }],
  },
  {
    slug: "trufas-cafe", cat: "chocolateria", title: "Trufas de café",
    desc: "Ganache al café, apoyadas sobre granos tostados.",
    images: [{ src: trufasCafe, alt: "Trufas de café sobre granos de café" }],
  },
  {
    slug: "bombones-pintados", cat: "chocolateria", title: "Bombones pintados",
    desc: "Rellenos variados con terminación de manteca de cacao coloreada.",
    images: [{ src: bombonesColor, alt: "Bombones pintados a mano, de colores" }],
  },
  {
    slug: "bombones-clasicos", cat: "chocolateria", title: "Bombones clásicos",
    desc: "Rellenos tradicionales en estuche.",
    images: [{ src: bombonesClasicos, alt: "Estuche de bombones clásicos" }],
  },
  {
    slug: "maridaje", cat: "chocolateria", title: "Caja de maridaje",
    desc: "Bombones y trufas pensados para acompañar un licor o un café.",
    images: [{ src: bombonesMaridaje, alt: "Caja de bombones para maridaje con licor" }],
  },
  {
    slug: "tableta-70", cat: "chocolateria", title: "Tableta belga 70 %",
    desc: "Chocolate belga puro moldeado en relieve geométrico.",
    images: [{ src: tabletaGeo, alt: "Tableta de chocolate belga 70 % con relieve geométrico" }],
  },
  {
    slug: "tableta-naranja", cat: "chocolateria", title: "Tableta 54 % con naranja",
    desc: "Chocolate con leche belga y cáscara de naranja confitada.",
    images: [{ src: tabletaNaranja, alt: "Tableta de chocolate 54 % con naranja confitada" }],
  },
  {
    slug: "chocolate-pistachos", cat: "chocolateria", title: "Chocolate con pistachos",
    desc: "Cobertura con pistachos enteros.",
    images: [{ src: pistachos, alt: "Chocolate con pistachos enteros" }],
  },
  {
    slug: "huevos-pascua", cat: "chocolateria", title: "Huevos de pascua pintados",
    desc: "Cáscara de chocolate pintada a mano, en distintos diseños.",
    images: [
      { src: huevoPascua, alt: "Huevo de pascua multicolor pintado a mano" },
      { src: huevoOrange, alt: "Huevo de pascua naranja de autor", label: "Otro diseño" },
    ],
  },

  // ---- Macarons ----
  {
    slug: "macarons-rose", cat: "macarons", title: "Macarons & rosé",
    desc: "Tapas de frutos rojos y vainilla, para compartir con una copa.",
    images: [{ src: macaronsRose, alt: "Macarons de frutos rojos y vainilla con una copa de rosé" }],
  },
  {
    slug: "macarons-box", cat: "macarons", title: "Box surtido", recipeSlug: "macarons",
    desc: "Frutos rojos, limón, pistacho, vainilla de Madagascar, Marroc, café y más, según disponibilidad.",
    images: [{ src: macaronsBox, alt: "Box de macarons surtidos" }],
  },
  {
    slug: "macarons-mega", cat: "macarons", title: "Mega box",
    desc: "Treinta tapas de almendra de colores, sabores surtidos.",
    images: [{ src: macaronsColor, alt: "Caja grande de macarons de colores" }],
  },
  {
    slug: "macarons-pistacho", cat: "macarons", title: "Macarons de pistacho",
    desc: "Ganache de pistacho entre tapas de almendra.",
    images: [{ src: macaronsPistacho, alt: "Macarons de pistacho" }],
  },
  {
    slug: "macarons-cafe", cat: "macarons", title: "Macarons de café",
    desc: "Ganache de café, para la merienda o el cierre.",
    images: [{ src: macaronsCafe, alt: "Macarons de café" }],
  },
];
