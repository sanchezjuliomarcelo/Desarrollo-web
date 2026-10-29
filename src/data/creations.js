// Galería de creaciones. Las imágenes se importan como assets para que Astro
// genere versiones responsive optimizadas (webp).
// `story` (opcional) es el texto largo que se muestra al ampliar la imagen.
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
import bombonesGalaxia from "../assets/gallery/bombones-galaxia.jpg";
import macaronsRose from "../assets/gallery/macarons-rose.jpg";

export const creations = [
  // ---- Tortas ----
  { img: selvaNegra, cat: "tortas", title: "Selva Negra", desc: "Tres bizcochos de chocolate embebidos en almíbar con kirsch, crema y cerezas al marrasquino.",
    story: "Una tarta típica de la región de Baden y uno de los dulces más característicos de Alemania. Tres bizcochos de chocolate embebidos en almíbar con licor de kirsch, relleno de crema de leche, cerezas al marrasquino y mousse de chocolate. Decorada con virutas de chocolate semiamargo y más cerezas." },
  { img: selvaNegraCorte, cat: "tortas", title: "Selva Negra · al corte", desc: "El interno: mousse de chocolate, crema y cerezas entre capas de bizcocho." },
  { img: balcarce, cat: "tortas", title: "Balcarce", desc: "Merengue, dulce de leche, castañas en almíbar y bizcocho humedecido. Un clásico que se respeta.",
    story: "Un clásico que se respeta. Incluye merengue, dulce de leche, castañas en almíbar y un bizcocho humedecido con un delicado y exquisito almíbar." },
  { img: rogel, cat: "tortas", title: "Rogel", desc: "Capas crocantes con mucho dulce de leche, coronadas con un merengue flameado.",
    story: "La clásica torta Rogel de Argentina en todo su esplendor: capas finas y crocantes con mucho dulce de leche, cubiertas con un riquísimo merengue flameado." },
  { img: rogelCorte, cat: "tortas", title: "Rogel · al corte", desc: "Las láminas finas y el dulce de leche que definen a la torta argentina por excelencia." },
  { img: arcoirisCorte, cat: "tortas", title: "Arcoíris", desc: "Finos bizcochos de colores con creamcheese, decorada con macarons y galletitas bañadas.",
    story: "Torta arcoíris, pastel de colores o Rainbow Cake según dónde se la pida: un clásico alegre para disfrutar en todo momento. Finos y húmedos bizcochos de colores llamativos rellenos de un suave creamcheese, decorada con galletitas bañadas en chocolate cobertura y macarons." },
  { img: arcoiris, cat: "tortas", title: "Arcoíris · al corte", desc: "El degradé completo, capa por capa." },
  { img: bananaSplitCorte, cat: "tortas", title: "Banana Split", desc: "Base sablée, crema, rodajas de banana y dulce de leche con twist de chocolate belga.",
    story: "Base sablée, crema de leche, rodajas de banana y una generosa cubierta de dulce de leche. Decorada con un twist de chocolate belga." },
  { img: bananaSplit, cat: "tortas", title: "Banana Split · al corte", desc: "Capas de banana, crema y cacao en un postre de aire retro." },
  { img: brownie, cat: "tortas", title: "Brownie con crema", desc: "Brownie 60% cacao, medio kilo de dulce de leche, chantilly y nueces.",
    story: "Buscás una torta rica de sabores que no fallan? Como base tiene un brownie súper húmedo de intenso sabor a chocolate 60% cacao, acompañado de medio kilo de dulce de leche, cubierto con crema chantilly y decorado con nueces y twist de chocolate. El sabor perfecto para degustar con un café o un vino dulce." },
  { img: travelCake, cat: "tortas", title: "Travel Cake", desc: "Budín húmedo de cacao y frutos secos con baño crocante de chocolate y maní.",
    story: "Un budín húmedo de cacao, chocolate cobertura semiamargo y harina de frutos secos. Cubierto con un baño crocante de chocolate con maní, relleno y decorado con ganache de chocolate blanco, chocolate y cerezas." },

  // ---- Tartas & postres ----
  { img: tartaHigos, cat: "tartas", title: "Tarta de chocolate, higos y pistacho", desc: "Sablée de cacao, crema de chocolate blanco y dulce de leche, confitura de higos y pistacho.",
    story: "Si buscás una tarta golosa y diferente, esta es la opción. Base crujiente de masa sablée con intenso sabor a cacao; en su interior, una crema de chocolate blanco y dulce de leche con un delgado biscuit húmedo, cubierto con ganache 70%. La cubierta redondea los sabores: una delicada confitura de higos, ralladura de naranja, la crocancia de las esferas de cereal y el particular sabor del pistacho. Ideal para el té con familia y amigos." },
  { img: tartaHigosCorte, cat: "tartas", title: "Higos y pistacho · al corte", desc: "El juego de texturas: crujiente, cremoso y la crocancia del pistacho." },
  { img: lemonPie, cat: "tartas", title: "Lemon Pie", desc: "Sablée de chocolate semiamargo, curd de limón y merengue.",
    story: "Una base sablée de chocolate semiamargo, rellena con curd de limón y cubierta con merengue flameado." },
  { img: keyLime, cat: "tartas", title: "Key Lime Pie", desc: "Base sablée de vainilla, relleno de lima ácida y una cubierta con ralladura en efecto 3D.",
    story: "Su nombre viene de las limas de los Cayos de Florida, ácidas y aromáticas, que se usaban originariamente. Es una tarta de base sablée de vainilla, con un relleno de leche condensada y yemas y un toque ligeramente ácido de las limas, una capa de crema chantilly y una cubierta de sablée con ralladura de lima en efecto 3D." },
  { img: cheesecake, cat: "tartas", title: "New York Cheesecake", desc: "Base crocante, queso cocido cremoso y salsa artesanal de maracuyá o frutos rojos.",
    story: "Una tarta con raíces en la gran manzana que se convirtió en uno de los postres favoritos de medio mundo. Una base crocante, la cremosidad del queso cocido y la acidez y el dulce de la salsa artesanal —de maracuyá o de frutos rojos— crean una perfecta sintonía al paladar." },
  { img: ganache, cat: "tartas", title: "Tarta de ganache y frutos rojos", desc: "Mermelada casera de frutos rojos y ganache de chocolate blanco sobre masa sablée.",
    story: "Un postre delicado como la seda. Mermelada casera de frutos rojos que aporta color y acidez, ganache de crema de leche y chocolate blanco, sobre una masa sablée y decorada con picos de crema batida y un twist de chocolate." },
  { img: bavaroiseCorte, cat: "tartas", title: "Bavaroise de frutilla", desc: "Bizcocho húmedo, crema de vainilla y frutilla, cobertura de chocolate blanco con efecto terciopelo.",
    story: "Preparada con una base de bizcochuelo húmedo, una capa de crema de vainilla, una capa de crema de frutillas, cobertura de chocolate blanco y efecto terciopelo." },
  { img: bavaroise, cat: "tartas", title: "Bavaroise · al corte", desc: "Las capas de crema y el terciopelo rosado que la distinguen." },
  { img: tiramisu, cat: "tartas", title: "Tiramisú terciopelo", desc: "Biscuit al café, crema de mascarpone y cobertura 54% con efecto terciopelo.",
    story: "Su origen se remonta al Véneto, en los años '50. En su esencia lleva un biscuit remojado en café intercalado con una delicada crema de huevos y mascarpone, espolvoreado con cacao amargo. Mi propuesta respeta esos sabores clásicos con una presentación moderna: cubierta con chocolate cobertura 54% y un delicado efecto terciopelo." },
  { img: orangePie, cat: "tartas", title: "Orange Pie", desc: "Curd cítrico y merengue sobre una base crujiente." },
  { img: tartaArandanos, cat: "tartas", title: "Tarta de arándanos", desc: "Mermelada casera de arándanos frescos, ganache de chocolate blanco y picos de merengue.",
    story: "Un postre delicado como la seda, a partir de una mermelada casera de arándanos frescos que aportan color y acidez, con ganache de crema de leche y chocolate blanco, sobre masa sablée y decorada con picos de merengue y cristales de azúcar." },
  { img: tartaInvierno, cat: "tartas", title: "Tarta de invierno", desc: "Glaseado profundo y copos de merengue: una edición de temporada." },
  { img: pastafrola, cat: "tartas", title: "Pastafrola", desc: "La masa quebrada y el dulce de siempre, en versión floreada." },

  // ---- Chocolatería ----
  { img: bombonesGalaxia, cat: "chocolateria", title: "Bombones galaxia", desc: "Rellenos pintados a mano con manteca de cacao: cada uno, un cosmos distinto.",
    story: "Bombones de autor pintados a mano con manteca de cacao coloreada, en una paleta de nebulosas y galaxias. Pensados para acompañar un buen whisky: cada pieza es única e irrepetible." },
  { img: trufasPlato, cat: "chocolateria", title: "Trufas de chocolate", desc: "Trufas emplatadas sobre cacao amargo: el bocado final de una buena cena." },
  { img: trufasCafe, cat: "chocolateria", title: "Trufas de café", desc: "Rellenas de ganache al café, apoyadas sobre granos tostados." },
  { img: bombonesColor, cat: "chocolateria", title: "Bombones pintados", desc: "Bombones rellenos con manteca de cacao coloreada a mano, uno distinto del otro." },
  { img: bombonesClasicos, cat: "chocolateria", title: "Bombones clásicos", desc: "Rellenos tradicionales de chocolatería fina." },
  { img: bombonesMaridaje, cat: "chocolateria", title: "Maridaje", desc: "Bombones y trufas pensados para acompañar un licor o un buen café." },
  { img: tabletaGeo, cat: "chocolateria", title: "Tableta belga 70%", desc: "Chocolate belga puro moldeado en relieve geométrico." },
  { img: tabletaNaranja, cat: "chocolateria", title: "Tableta 54% + naranja", desc: "Chocolate con leche belga y cáscara de naranja confitada." },
  { img: pistachos, cat: "chocolateria", title: "Chocolate con pistachos", desc: "Cobertura intensa sembrada de pistachos enteros." },
  { img: huevoPascua, cat: "chocolateria", title: "Huevo de pascua pintado", desc: "Cáscara de chocolate con salpicaduras de color, pintada a mano." },
  { img: huevoOrange, cat: "chocolateria", title: "Huevo de autor", desc: "Formas y colores que se salen del molde tradicional de pascua." },

  // ---- Macarons ----
  { img: macaronsRose, cat: "macarons", title: "Macarons & rosé", desc: "Conchas de frutos rojos y vainilla, servidas con una copa de espumante.",
    story: "Macarons de frutos rojos y vainilla en una mesa pensada para compartir, con una copa de rosé. El bocado perfecto para la merienda o el cierre de una cena." },
  { img: macaronsBox, cat: "macarons", title: "Box surtido", desc: "Frutos rojos, limón, pistacho, vainilla de Madagascar, marroc, café y más.",
    story: "El macaron es un bocado perfecto: corteza crujiente, húmedo por dentro y relleno de delicadas ganaches. Su origen se remonta al siglo XV en Italia, como rústicas galletas de almendras molidas, que luego fueron llevadas a Francia y perfeccionadas hasta lo que hoy conocemos. Una selección de sabores: frutos rojos, limón, pistacho, vainilla de Madagascar, marroc, vauquita, chocolate, café, nougat y mandarina, según disponibilidad." },
  { img: macaronsColor, cat: "macarons", title: "Mega box", desc: "Conchas de almendra de colores, sabores surtidos." },
  { img: macaronsPistacho, cat: "macarons", title: "Macarons de pistacho", desc: "Ganache de pistacho entre conchas de almendra." },
  { img: macaronsCafe, cat: "macarons", title: "Macarons de café", desc: "Para la merienda o el cierre, con una taza de café." },
];
