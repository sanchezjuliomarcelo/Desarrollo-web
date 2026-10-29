// Galería de creaciones. Las imágenes se importan como assets para que Astro
// genere versiones responsive optimizadas (webp).
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
import marquise from "../assets/gallery/marquise.jpg";
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
import bombonesClasicos from "../assets/gallery/bombones-clasicos.jpg";
import bombonesColor from "../assets/gallery/bombones-color.jpg";
import bombonesMaridaje from "../assets/gallery/bombones-maridaje.jpg";
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

export const creations = [
  // ---- Tortas ----
  { img: selvaNegra, cat: "tortas", title: "Selva Negra", desc: "Tres bizcochos de chocolate embebidos en almíbar con kirsch, crema y cerezas al marrasquino." },
  { img: selvaNegraCorte, cat: "tortas", title: "Selva Negra · al corte", desc: "El interno: mousse de chocolate, crema y cerezas entre capas de bizcocho." },
  { img: balcarce, cat: "tortas", title: "Balcarce", desc: "Merengue, dulce de leche, castañas en almíbar y bizcocho humedecido. Un clásico que se respeta." },
  { img: rogel, cat: "tortas", title: "Rogel", desc: "Capas crocantes con mucho dulce de leche, coronadas con un merengue flameado." },
  { img: rogelCorte, cat: "tortas", title: "Rogel · al corte", desc: "Las láminas finas y el dulce de leche que definen a la torta argentina por excelencia." },
  { img: arcoiris, cat: "tortas", title: "Arcoíris", desc: "Finos bizcochos de colores con creamcheese, decorada con macarons y galletitas bañadas." },
  { img: arcoirisCorte, cat: "tortas", title: "Arcoíris · al corte", desc: "El degradé completo, capa por capa." },
  { img: bananaSplit, cat: "tortas", title: "Banana Split", desc: "Base sablée, crema, rodajas de banana y dulce de leche con twist de chocolate belga." },
  { img: bananaSplitCorte, cat: "tortas", title: "Banana Split · al corte", desc: "Capas de banana, crema y cacao en un postre de aire retro." },
  { img: brownie, cat: "tortas", title: "Brownie con crema", desc: "Brownie 60% cacao, medio kilo de dulce de leche, chantilly y nueces." },
  { img: travelCake, cat: "tortas", title: "Travel Cake", desc: "Budín húmedo de cacao y frutos secos con baño crocante de chocolate y maní." },

  // ---- Tartas & postres ----
  { img: tartaHigos, cat: "tartas", title: "Tarta de chocolate, higos y pistacho", desc: "Sablée de cacao, crema de chocolate blanco y dulce de leche, confitura de higos y pistacho." },
  { img: tartaHigosCorte, cat: "tartas", title: "Higos y pistacho · al corte", desc: "El juego de texturas: crujiente, cremoso y la crocancia del pistacho." },
  { img: lemonPie, cat: "tartas", title: "Lemon Pie", desc: "Sablée de chocolate semiamargo, curd de limón y merengue." },
  { img: keyLime, cat: "tartas", title: "Key Lime Pie", desc: "Base sablée de vainilla, relleno de lima ácida y una cubierta con ralladura en efecto 3D." },
  { img: cheesecake, cat: "tartas", title: "New York Cheesecake", desc: "Base crocante, queso cocido cremoso y salsa artesanal de maracuyá o frutos rojos." },
  { img: ganache, cat: "tartas", title: "Tarta de ganache y frutos rojos", desc: "Mermelada casera de frutos rojos y ganache de chocolate blanco sobre masa sablée." },
  { img: bavaroise, cat: "tartas", title: "Bavaroise de frutilla", desc: "Bizcocho húmedo, crema de vainilla y frutilla, cobertura de chocolate blanco con efecto terciopelo." },
  { img: bavaroiseCorte, cat: "tartas", title: "Bavaroise · al corte", desc: "Las capas de crema y el terciopelo rosado que la distinguen." },
  { img: tiramisu, cat: "tartas", title: "Tiramisú terciopelo", desc: "Biscuit al café, crema de mascarpone y cobertura 54% con efecto terciopelo." },
  { img: marquise, cat: "tartas", title: "Marquise de chocolate", desc: "Chocolate intenso, ganache de pistacho, mousse y cobertura 70% cacao." },
  { img: orangePie, cat: "tartas", title: "Orange Pie", desc: "Curd cítrico y merengue sobre una base crujiente." },
  { img: tartaArandanos, cat: "tartas", title: "Tarta de arándanos", desc: "Mermelada casera de arándanos frescos, ganache de chocolate blanco y picos de merengue." },
  { img: tartaInvierno, cat: "tartas", title: "Tarta de invierno", desc: "Glaseado profundo y copos de merengue: una edición de temporada." },
  { img: pastafrola, cat: "tartas", title: "Pastafrola", desc: "La masa quebrada y el dulce de siempre, en versión floreada." },

  // ---- Chocolatería ----
  { img: trufasPlato, cat: "chocolateria", title: "Trufas de chocolate", desc: "Trufas emplatadas sobre cacao amargo: el bocado final de una buena cena." },
  { img: trufasCafe, cat: "chocolateria", title: "Trufas de café", desc: "Rellenas de ganache al café, apoyadas sobre granos tostados." },
  { img: bombonesColor, cat: "chocolateria", title: "Bombones pintados", desc: "Bombones rellenos con manteca de cacao coloreada a mano, uno distinto del otro." },
  { img: bombonesClasicos, cat: "chocolateria", title: "Bombones clásicos", desc: "Rellenos tradicionales en estuche, para regalar o regalarse." },
  { img: bombonesMaridaje, cat: "chocolateria", title: "Caja de maridaje", desc: "Bombones y trufas pensados para acompañar un licor o un buen café." },
  { img: tabletaGeo, cat: "chocolateria", title: "Tableta belga 70%", desc: "Chocolate belga puro moldeado en relieve geométrico." },
  { img: tabletaNaranja, cat: "chocolateria", title: "Tableta 54% + naranja", desc: "Chocolate con leche belga y cáscara de naranja confitada." },
  { img: pistachos, cat: "chocolateria", title: "Chocolate con pistachos", desc: "Cobertura intensa sembrada de pistachos enteros." },
  { img: huevoPascua, cat: "chocolateria", title: "Huevo de pascua pintado", desc: "Cáscara de chocolate con salpicaduras de color, pintada a mano." },
  { img: huevoOrange, cat: "chocolateria", title: "Huevo de autor", desc: "Formas y colores que se salen del molde tradicional de pascua." },

  // ---- Macarons ----
  { img: macaronsBox, cat: "macarons", title: "Box surtido", desc: "Frutos rojos, limón, pistacho, vainilla de Madagascar, marroc, café y más." },
  { img: macaronsColor, cat: "macarons", title: "Mega box x30", desc: "Treinta conchas de colores, sabores surtidos según disponibilidad." },
  { img: macaronsPistacho, cat: "macarons", title: "Macarons de pistacho", desc: "Ganache de pistacho entre conchas de almendra." },
  { img: macaronsCafe, cat: "macarons", title: "Macarons de café", desc: "Para la merienda o el cierre, con una taza de café." },
];
