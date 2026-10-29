// Modelo de recetas data-driven.
// status: "published" → visible en índice, sitemap y schema.
//         "draft"     → estructura lista, requiere que Flor valide fórmula/foto.
// Las cantidades son una versión de casa fiel a la composición documentada de
// cada creación. No se inventan gramajes "de autor": donde la fórmula exacta
// no está validada, la receta queda en borrador.
import lemon from "../assets/recetas/lemon.jpg";
import rogel from "../assets/recetas/rogel.jpg";
import cheesecake from "../assets/recetas/cheesecake.jpg";
import cheesecakeFr from "../assets/recetas/cheesecake-fr.jpg";
import chocotorta from "../assets/recetas/chocotorta.jpg";
import brownie from "../assets/recetas/brownie.jpg";
import bananaSplit from "../assets/recetas/banana-split.jpg";
import selvaNegra from "../assets/recetas/selva-negra.jpg";
import arcoiris from "../assets/recetas/arcoiris.jpg";
import keyLime from "../assets/recetas/key-lime.jpg";
import frutosRojos from "../assets/recetas/frutos-rojos.jpg";
import balcarce from "../assets/recetas/balcarce.jpg";
import higos from "../assets/recetas/higos.jpg";
import bavaroiseFrutilla from "../assets/recetas/bavaroise-frutilla.jpg";
import tiramisu from "../assets/gallery/tiramisu.jpg";
import arandanos from "../assets/gallery/tarta-arandanos.jpg";
import macaronsImg from "../assets/gallery/macarons-box.jpg";
import bavaroiseChoc from "../assets/recetas/bavaroise-choc.jpg";

export const recipes = [
  // ───────────────────────── PUBLICADAS ─────────────────────────
  {
    slug: "lemon-pie", status: "published", cat: "Tartas", cuisine: null, img: lemon,
    title: "Lemon Pie", subtitle: "Sablée de chocolate, curd de limón y merengue",
    imageAlt: "Lemon Pie con merengue flameado sobre una base de sablée de chocolate",
    servings: "8 porciones", moldSize: "Molde de 22–24 cm", difficulty: "Media",
    times: { prep: "45 min", cook: "25 min", chill: "2 h" },
    intro: "La base no es la clásica de pionono ni de galletita: es una sablée de chocolate semiamargo que corta el dulzor del curd. Encima, un curd de limón bien ácido y un merengue flameado.",
    ingredientGroups: [
      { heading: "Para la sablée de chocolate", items: ["200 g de harina", "30 g de cacao amargo", "100 g de manteca fría", "80 g de azúcar impalpable", "1 huevo", "1 pizca de sal"] },
      { heading: "Para el curd de limón", items: ["Jugo de 4 limones (unos 120 ml)", "Ralladura de 2 limones", "150 g de azúcar", "3 huevos", "2 yemas", "100 g de manteca"] },
      { heading: "Para el merengue", items: ["3 claras", "150 g de azúcar", "1 pizca de sal"] },
    ],
    methodStages: [
      { heading: "Prepará la sablée", steps: ["Arenás la harina, el cacao, el azúcar impalpable y la sal con la manteca fría hasta tener un granulado. Agregá el huevo y uní sin amasar de más. Formá un disco, envolvé y llevá a la heladera 30 min."] },
      { heading: "Horneá la base", steps: ["Estirá de 3–4 mm, forrá el molde y pinchá el fondo. Horneá en blanco a 170 °C unos 15–18 min, hasta que esté seca. Dejá enfriar."] },
      { heading: "Hacé el curd", steps: ["Batí los huevos, las yemas, el azúcar, el jugo y la ralladura. Cociná a fuego bajo (o a baño maría) revolviendo sin parar hasta que espese y nape la cuchara. Fuera del fuego, integrá la manteca en cubos. Volcá sobre la base y llevá a la heladera 2 h."] },
      { heading: "Terminá con el merengue", steps: ["Hacé un merengue (claras + azúcar en forma de merengue italiano o francés bien batido). Cubrí la tarta y flameá la superficie con soplete."] },
    ],
    florTip: "Colá el curd apenas sale del fuego: sacás cualquier hilo de huevo cuajado y te queda liso como seda.",
    doneness: "El curd está listo cuando nape la cuchara y, al pasar el dedo, el surco queda marcado. No tiene que hervir.",
    commonMistakes: ["Cocinar el curd a fuego fuerte: la yema se corta.", "Rellenar sobre la base todavía tibia: la sablée se humedece y pierde lo crocante."],
    storage: "En heladera, bien tapada, hasta 3 días. El merengue se flamea idealmente el mismo día.",
    related: ["key-lime-pie", "tarta-ganache-frutos-rojos"],
  },
  {
    slug: "rogel", status: "published", cat: "Clásicos argentinos", cuisine: "Argentina", img: rogel,
    title: "Rogel", subtitle: "Discos finos y crocantes, dulce de leche y merengue",
    imageAlt: "Rogel con capas finas, dulce de leche y merengue flameado",
    servings: "10 porciones", moldSize: "Discos de 22 cm", difficulty: "Media",
    times: { prep: "1 h", cook: "40 min", rest: "30 min" },
    intro: "Nada de hojaldre ni masa filo: el Rogel lleva una masa propia, fina y quebradiza, que se arma en varios discos. El dulce de leche repostero se ocupa del resto.",
    ingredientGroups: [
      { heading: "Para los discos", items: ["3 yemas", "1 huevo", "30 g de manteca blanda", "20 ml de cognac o agua", "250 g de harina aprox.", "1 pizca de sal"] },
      { heading: "Para el relleno", items: ["500 g de dulce de leche repostero"] },
      { heading: "Para el merengue", items: ["3 claras", "180 g de azúcar", "unas gotas de jugo de limón"] },
    ],
    methodStages: [
      { heading: "Armá la masa", steps: ["Mezclá las yemas, el huevo, la manteca, el cognac y la sal. Agregá la harina de a poco hasta tener una masa lisa que no se pegue. Envolvé y dejá descansar 30 min."] },
      { heading: "Estirá y horneá los discos", steps: ["Dividí en 6–7 bollos. Estirá cada uno bien fino (2 mm), cortá un disco de 22 cm y pinchalo con tenedor. Horneá a 180 °C unos 6–8 min cada uno, hasta que estén secos y apenas dorados."] },
      { heading: "Armá el Rogel", steps: ["Intercalá disco y una capa generosa de dulce de leche. Terminá con dulce de leche arriba."] },
      { heading: "Cubrí con merengue", steps: ["Hacé el merengue con las claras, el azúcar y el limón. Cubrí la torta y flameá con soplete."] },
    ],
    florTip: "Estirá cada disco bien fino y pinchalo antes de hornear. Tiene que quedar seco y crocante: después el dulce de leche le devuelve humedad.",
    doneness: "Los discos están listos cuando se ven secos y mates, sin partes brillantes de masa cruda.",
    commonMistakes: ["Discos gruesos: quedan duros en vez de quebradizos.", "Armar y comer enseguida: conviene dejar que el dulce de leche ablande apenas los discos un par de horas."],
    storage: "En heladera hasta 3 días. Gana textura después de unas horas de armada.",
    related: ["chocotorta", "postre-balcarce-tradicional"],
  },
  {
    slug: "cheesecake-maracuya", status: "published", cat: "Tartas", cuisine: null, img: cheesecake,
    title: "New York Cheesecake con maracuyá", subtitle: "Base crocante, queso horneado y salsa de maracuyá",
    imageAlt: "New York Cheesecake horneado con salsa de maracuyá por encima",
    servings: "10–12 porciones", moldSize: "Molde desmontable de 22 cm", difficulty: "Media",
    times: { prep: "30 min", cook: "1 h", chill: "6 h" },
    intro: "Un cheesecake horneado, cremoso y parejo, con una salsa de maracuyá que se suma al final. La acidez del maracuyá corta la untuosidad del queso; no va en la masa, va arriba.",
    ingredientGroups: [
      { heading: "Para la base", items: ["200 g de galletitas de vainilla", "90 g de manteca derretida"] },
      { heading: "Para el relleno", items: ["600 g de queso crema", "150 g de azúcar", "3 huevos", "200 g de crema", "1 cdita de esencia de vainilla", "1 cda de almidón de maíz"] },
      { heading: "Para la salsa de maracuyá", items: ["Pulpa de 4–5 maracuyás", "60 g de azúcar", "1 cdita de almidón de maíz (opcional)"] },
    ],
    methodStages: [
      { heading: "Armá la base", steps: ["Mezclá la galletita molida con la manteca y presioná en el fondo del molde. Llevá al freezer mientras preparás el relleno."] },
      { heading: "Hacé el relleno", steps: ["Batí el queso con el azúcar sin incorporar aire de más. Sumá los huevos de a uno, la crema, la vainilla y el almidón. Volcá sobre la base."] },
      { heading: "Horneá a baja temperatura", steps: ["Horneá a 150–160 °C unos 55–65 min. El borde tiene que estar firme y el centro apenas tembloroso. Apagá y dejá enfriar dentro del horno con la puerta entreabierta."] },
      { heading: "Salsa y frío", steps: ["Cociná la pulpa con el azúcar (y el almidón si querés más cuerpo) hasta que espese. Enfriá. Llevá el cheesecake a la heladera mínimo 6 h y serví con la salsa por encima."] },
    ],
    florTip: "No esperes que el centro salga firme del horno. Tiene que temblar apenas: termina de asentarse mientras enfría.",
    doneness: "Listo cuando el borde está firme y el centro, al mover el molde, tiembla como un flan blando.",
    commonMistakes: ["Hornear fuerte: se infla, se agrieta y se seca.", "Batir de más el relleno: el exceso de aire también lo agrieta."],
    storage: "En heladera hasta 4 días. La salsa, aparte, hasta 1 semana.",
    related: ["cheesecake-frutos-rojos", "key-lime-pie"],
  },
  {
    slug: "cheesecake-frutos-rojos", status: "published", cat: "Tartas", cuisine: null, img: cheesecakeFr,
    title: "New York Cheesecake con frutos rojos", subtitle: "Base crocante, queso horneado y confitura de frutos rojos",
    imageAlt: "New York Cheesecake con una confitura de frutos rojos por encima",
    servings: "10–12 porciones", moldSize: "Molde desmontable de 22 cm", difficulty: "Media",
    times: { prep: "30 min", cook: "1 h", chill: "6 h" },
    intro: "El mismo cheesecake horneado y cremoso, esta vez con una confitura casera de frutos rojos. La confitura es una preparación aparte, con su punto, no fruta suelta por encima.",
    ingredientGroups: [
      { heading: "Para la base", items: ["200 g de galletitas de vainilla", "90 g de manteca derretida"] },
      { heading: "Para el relleno", items: ["600 g de queso crema", "150 g de azúcar", "3 huevos", "200 g de crema", "1 cdita de esencia de vainilla", "1 cda de almidón de maíz"] },
      { heading: "Para la confitura de frutos rojos", items: ["300 g de frutos rojos (frescos o congelados)", "80 g de azúcar", "1 chorrito de jugo de limón"] },
    ],
    methodStages: [
      { heading: "Base y relleno", steps: ["Armá la base con galletita y manteca y llevala al freezer. Batí el queso con el azúcar sin airear de más, sumá los huevos de a uno, la crema, la vainilla y el almidón, y volcá sobre la base."] },
      { heading: "Horneá", steps: ["Horneá a 150–160 °C unos 55–65 min: borde firme, centro tembloroso. Enfriá dentro del horno apagado."] },
      { heading: "Confitura", steps: ["Cociná los frutos rojos con el azúcar y el limón hasta que tome cuerpo de mermelada liviana. Enfriá."] },
      { heading: "Frío y armado", steps: ["Heladera mínimo 6 h. Cubrí con la confitura al momento de servir."] },
    ],
    florTip: "Dejá la confitura un punto menos espesa de lo que creés: en frío sobre el cheesecake se asienta y queda perfecta para cortar.",
    doneness: "El cheesecake, con el centro tembloroso; la confitura, cuando al pasar la cuchara por la olla ves el fondo un segundo.",
    commonMistakes: ["Poner la fruta cruda sin cocinar: suelta agua y aguada el queso.", "Hornear a temperatura alta: se agrieta."],
    storage: "En heladera hasta 4 días.",
    related: ["cheesecake-maracuya", "tarta-ganache-frutos-rojos"],
  },
  {
    slug: "chocotorta", status: "published", cat: "Clásicos argentinos", cuisine: "Argentina", img: chocotorta,
    title: "Chocotorta con chocolate y efecto terciopelo", subtitle: "Chocolinas, dulce de leche y queso crema, con baño y terciopelo",
    imageAlt: "Chocotorta cuadrada con terciopelo de chocolate con leche",
    servings: "10–12 porciones", moldSize: "Molde de 20 × 20 cm", difficulty: "Fácil",
    times: { prep: "30 min", chill: "4 h" },
    intro: "La chocotorta de siempre, un poco más arriba: galletitas Chocolinas humedecidas en leche chocolatada, crema de dulce de leche y queso, un baño de chocolate 54 % y una terminación de terciopelo de chocolate con leche.",
    ingredientGroups: [
      { heading: "Para la crema", items: ["400 g de dulce de leche", "400 g de queso crema"] },
      { heading: "Para el armado", items: ["2 paquetes de Chocolinas (o galletitas de chocolate)", "300 ml de leche chocolatada para humedecer"] },
      { heading: "Para el baño y el terciopelo", items: ["150 g de chocolate cobertura 54 %", "100 g de chocolate con leche", "80 g de manteca de cacao (para el terciopelo)"] },
    ],
    methodStages: [
      { heading: "Hacé la crema", steps: ["Batí el dulce de leche con el queso crema hasta integrar en una crema lisa."] },
      { heading: "Armá por capas", steps: ["Pasá cada galletita por la leche chocolatada un segundo (que no se deshaga) y armá capas alternando galletita y crema en el molde. Terminá con crema."] },
      { heading: "Enfriá y bañá", steps: ["Llevá a la heladera 3–4 h. Desmoldá y cubrí con el chocolate 54 % fundido y templado."] },
      { heading: "Terciopelo", steps: ["Derretí el chocolate con leche con la manteca de cacao, llevá a unos 40 °C y aplicá con soplete-pistola sobre la torta bien fría para lograr el efecto terciopelo."] },
    ],
    florTip: "Pasá la galletita por la leche apenas un segundo. Si se empapa, la torta se vuelve un budín y pierde las capas.",
    doneness: "Está lista cuando, al cortar, se ven las capas definidas y la crema quedó firme por el frío.",
    commonMistakes: ["Empapar las galletitas: se deshacen.", "Aplicar el terciopelo sobre una torta tibia: no se fija."],
    storage: "En heladera hasta 3 días.",
    related: ["rogel", "torta-brownie-dulce-de-leche"],
  },
  {
    slug: "torta-brownie-dulce-de-leche", status: "published", cat: "Tortas", cuisine: null, img: brownie,
    title: "Torta Brownie con dulce de leche y merengue", subtitle: "Brownie húmedo, dulce de leche y merengue",
    imageAlt: "Torta brownie con dulce de leche y merengue",
    servings: "10 porciones", moldSize: "Molde de 22 cm", difficulty: "Fácil",
    times: { prep: "25 min", cook: "30 min" },
    intro: "La base es un brownie húmedo de cobertura semiamarga; no es solo el brownie, es la torta terminada: brownie, una capa generosa de dulce de leche y merengue por encima.",
    ingredientGroups: [
      { heading: "Para el brownie", items: ["200 g de chocolate cobertura semiamargo", "150 g de manteca", "200 g de azúcar", "3 huevos", "100 g de harina", "1 pizca de sal"] },
      { heading: "Para terminar", items: ["400 g de dulce de leche repostero", "3 claras", "180 g de azúcar (para el merengue)"] },
    ],
    methodStages: [
      { heading: "Hacé el brownie", steps: ["Derretí el chocolate con la manteca. Integrá el azúcar y los huevos, y por último la harina con la sal. Volcá en el molde."] },
      { heading: "Horneá justo", steps: ["Horneá a 170 °C unos 25–30 min. Tiene que quedar húmedo: el palillo sale con migas, no limpio. Dejá enfriar."] },
      { heading: "Armá", steps: ["Cubrí el brownie con el dulce de leche. Hacé el merengue con las claras y el azúcar, repartí por encima y flameá."] },
    ],
    florTip: "Una vez que incorporás la harina, mezclá solo hasta integrarla. Si seguís batiendo, perdés parte de la textura húmeda.",
    doneness: "Listo cuando el centro todavía se ve apenas húmedo y los bordes empiezan a despegarse del molde.",
    commonMistakes: ["Sobrehornear: se seca y deja de ser brownie.", "Batir la masa de más después de la harina."],
    storage: "En heladera hasta 4 días; sacalo un rato antes de servir.",
    related: ["chocotorta", "selva-negra"],
  },
  {
    slug: "tarta-banana-split", status: "published", cat: "Tartas", cuisine: null, img: bananaSplit,
    title: "Tarta Banana Split", subtitle: "Sablée, crema, banana y dulce de leche",
    imageAlt: "Tarta Banana Split con dulce de leche y chocolate",
    servings: "8 porciones", moldSize: "Molde de 22 cm", difficulty: "Fácil",
    times: { prep: "40 min", cook: "18 min", chill: "1 h" },
    intro: "El postre de heladería llevado a una tarta. La clave que no puede faltar es el dulce de leche: sin él no es banana split.",
    ingredientGroups: [
      { heading: "Para la sablée", items: ["200 g de harina", "100 g de manteca fría", "80 g de azúcar impalpable", "1 huevo", "1 pizca de sal"] },
      { heading: "Para el armado", items: ["250 ml de crema para batir", "2 cdas de azúcar", "3 bananas maduras", "300 g de dulce de leche", "50 g de chocolate belga para decorar"] },
    ],
    methodStages: [
      { heading: "Base", steps: ["Arenás harina, azúcar, sal y manteca, uní con el huevo sin amasar de más, dejá descansar 30 min, forrá el molde y horneá en blanco a 170 °C 15–18 min. Enfriá."] },
      { heading: "Armado", steps: ["Batí la crema con el azúcar a picos suaves. Sobre la base poné una capa de dulce de leche, las bananas en rodajas y la crema."] },
      { heading: "Terminación", steps: ["Terminá con más dulce de leche y un hilo de chocolate belga derretido. Llevá a la heladera 1 h."] },
    ],
    florTip: "Pintá las rodajas de banana con un poco de jugo de limón: frenás que se oxiden y la tarta se ve fresca más tiempo.",
    doneness: "La base, cuando está dorada pareja y seca; la crema, a picos suaves, no firme.",
    commonMistakes: ["Olvidar el dulce de leche o ponerlo de menos.", "Armar con la base tibia: se ablanda."],
    storage: "En heladera, se disfruta el mismo día o al día siguiente.",
    related: ["rogel", "torta-brownie-dulce-de-leche"],
  },
  {
    slug: "selva-negra", status: "published", cat: "Tortas", cuisine: "Alemania", img: selvaNegra,
    title: "Selva Negra", subtitle: "Bizcocho de chocolate, kirsch, crema y cerezas",
    imageAlt: "Torta Selva Negra con crema, virutas de chocolate y cerezas",
    servings: "12 porciones", moldSize: "Molde de 22 cm", difficulty: "Media",
    times: { prep: "1 h", cook: "35 min", chill: "2 h" },
    intro: "Uno de los clásicos alemanes: tres capas de bizcocho de chocolate embebidas en almíbar con kirsch, crema, cerezas y mousse de chocolate. Terminada con chocolate semiamargo y cerezas.",
    ingredientGroups: [
      { heading: "Para el bizcocho de chocolate", items: ["6 huevos", "180 g de azúcar", "120 g de harina", "40 g de cacao amargo", "1 cdita de polvo de hornear"] },
      { heading: "Para el almíbar", items: ["100 ml de agua", "80 g de azúcar", "30 ml de kirsch"] },
      { heading: "Para el relleno y la terminación", items: ["500 ml de crema para batir", "40 g de azúcar", "1 frasco de cerezas al marrasquino", "150 g de chocolate semiamargo (mousse y virutas)"] },
    ],
    methodStages: [
      { heading: "Bizcocho", steps: ["Batí huevos y azúcar a punto letra. Integrá en forma envolvente la harina, el cacao y el polvo de hornear tamizados. Horneá a 180 °C 30–35 min. Enfriá y cortá en 3 capas."] },
      { heading: "Almíbar", steps: ["Herví agua y azúcar, retirá y sumá el kirsch."] },
      { heading: "Mousse y crema", steps: ["Hacé una mousse simple fundiendo el chocolate e integrándolo a parte de la crema batida. Batí el resto de la crema con el azúcar."] },
      { heading: "Armá", steps: ["Embebé cada capa con almíbar. Alterná crema, cerezas y mousse entre capas. Cubrí con crema, virutas de chocolate semiamargo y cerezas."] },
    ],
    florTip: "Embebé las capas sin miedo pero sin encharcar: el bizcocho de chocolate pide almíbar, pero si pasás se desarma al cortar.",
    doneness: "El bizcocho está listo cuando vuelve al tacto y el palillo sale limpio. La torta, cuando tomó frío y las capas quedaron firmes.",
    commonMistakes: ["Bajar la batida al integrar la harina: pierde aire y queda apelmazado.", "Poca cereza o sin kirsch: se va el carácter de la Selva Negra."],
    storage: "En heladera hasta 3 días.",
    related: ["torta-brownie-dulce-de-leche", "tiramisu"],
  },
  {
    slug: "torta-arcoiris", status: "published", cat: "Tortas", cuisine: null, img: arcoiris,
    title: "Torta Arcoíris con crema de queso", subtitle: "Bizcochos de colores y crema de queso",
    imageAlt: "Torta Arcoíris con capas de bizcocho de colores y crema",
    servings: "12 porciones", moldSize: "Moldes de 18–20 cm", difficulty: "Media",
    times: { prep: "1 h", cook: "15 min", chill: "1 h" },
    intro: "Lo llamativo son las capas de colores, pero lo que la hace rica es el relleno: una crema de queso suave entre bizcochos finos y húmedos. Se decora con galletitas bañadas y macarons.",
    ingredientGroups: [
      { heading: "Para los bizcochos", items: ["200 g de manteca blanda", "200 g de azúcar", "4 huevos", "250 g de harina", "1 cdita de polvo de hornear", "80 ml de leche", "colorantes en gel (4–6 colores)"] },
      { heading: "Para la crema de queso", items: ["400 g de queso crema", "150 g de azúcar impalpable", "150 g de crema para batir"] },
    ],
    methodStages: [
      { heading: "Bizcochos de colores", steps: ["Cremá manteca y azúcar, sumá los huevos, y luego la harina con el polvo de hornear alternando con la leche. Dividí la masa y teñí cada parte. Horneá capas finas a 180 °C 10–12 min."] },
      { heading: "Crema de queso", steps: ["Batí el queso con el azúcar impalpable. Aparte batí la crema y uní en forma envolvente."] },
      { heading: "Armá", steps: ["Apilá los bizcochos del color que quieras con crema entre capas. Cubrí con crema y decorá con galletitas bañadas en chocolate y macarons."] },
    ],
    florTip: "Usá colorante en gel, no líquido: conseguís colores vivos sin aguar la masa.",
    doneness: "Cada capa está lista cuando vuelve al tacto; conviene hornearlas finas para que queden húmedas.",
    commonMistakes: ["Colorante líquido: apaga el color y cambia la textura.", "Capas gruesas y secas."],
    storage: "En heladera hasta 3 días.",
    related: ["selva-negra", "macarons"],
  },
  {
    slug: "key-lime-pie", status: "published", cat: "Tartas", cuisine: null, img: keyLime,
    title: "Key Lime Pie con sablée de vainilla", subtitle: "Sablée de vainilla, relleno de lima y chantilly",
    imageAlt: "Key Lime Pie con crema y ralladura de lima",
    servings: "8 porciones", moldSize: "Molde de 22 cm", difficulty: "Media",
    times: { prep: "40 min", cook: "25 min", chill: "3 h" },
    intro: "Una tarta de lima ácida y aromática sobre una sablée de vainilla. El relleno se arma con leche condensada, yemas y lima, y se corona con crema chantilly.",
    ingredientGroups: [
      { heading: "Para la sablée de vainilla", items: ["200 g de harina", "100 g de manteca fría", "80 g de azúcar impalpable", "1 huevo", "1 cdita de esencia de vainilla", "1 pizca de sal"] },
      { heading: "Para el relleno", items: ["1 lata de leche condensada (395 g)", "4 yemas", "Jugo de 4–5 limas (unos 120 ml)", "Ralladura de 2 limas"] },
      { heading: "Para terminar", items: ["250 ml de crema para batir", "2 cdas de azúcar", "ralladura de lima"] },
    ],
    methodStages: [
      { heading: "Sablée", steps: ["Arenás los secos con la manteca, uní con el huevo y la vainilla, descansá 30 min, forrá el molde y horneá en blanco a 170 °C 15 min."] },
      { heading: "Relleno", steps: ["Batí la leche condensada con las yemas, el jugo y la ralladura. Volcá sobre la base pre-horneada."] },
      { heading: "Cocción y frío", steps: ["Horneá a 160 °C 12–15 min, hasta que el relleno esté apenas cuajado y tiemble en el centro. Enfriá y llevá a la heladera 3 h."] },
      { heading: "Terminación", steps: ["Batí la crema con el azúcar y repartí sobre la tarta. Terminá con ralladura de lima."] },
    ],
    florTip: "El jugo de lima cuaja el relleno en frío: no hace falta cocinarlo de más. Apenas tiemble en el centro, sacalo.",
    doneness: "El relleno está listo cuando los bordes cuajaron y el centro tiembla; termina de firmar en la heladera.",
    commonMistakes: ["Pasar de cocción: el relleno se agrieta y pierde cremosidad.", "Usar jugo de limón común en exceso en lugar de lima: cambia el aroma."],
    storage: "En heladera hasta 3 días.",
    related: ["lemon-pie", "cheesecake-maracuya"],
  },
  {
    slug: "tarta-ganache-frutos-rojos", status: "published", cat: "Tartas", cuisine: null, img: frutosRojos,
    title: "Tarta de ganache de chocolate blanco y frutos rojos", subtitle: "Sablée, confitura y ganache de chocolate blanco",
    imageAlt: "Tarta de ganache de chocolate blanco con frutos rojos",
    servings: "8 porciones", moldSize: "Molde de 22 cm", difficulty: "Media",
    times: { prep: "40 min", cook: "18 min", chill: "3 h" },
    intro: "Una sablée, una confitura casera de frutos rojos que aporta color y acidez, y una ganache de chocolate blanco cremosa. Se termina con crema y chocolate.",
    ingredientGroups: [
      { heading: "Para la sablée", items: ["200 g de harina", "100 g de manteca fría", "80 g de azúcar impalpable", "1 huevo", "1 pizca de sal"] },
      { heading: "Para la confitura de frutos rojos", items: ["250 g de frutos rojos", "70 g de azúcar", "1 chorrito de jugo de limón"] },
      { heading: "Para la ganache de chocolate blanco", items: ["300 g de chocolate blanco", "150 ml de crema"] },
    ],
    methodStages: [
      { heading: "Base", steps: ["Arenás, uní con el huevo, descansá 30 min, forrá el molde y horneá en blanco a 170 °C 15–18 min."] },
      { heading: "Confitura", steps: ["Cociná los frutos rojos con el azúcar y el limón hasta una mermelada liviana. Enfriá y repartí sobre la base."] },
      { heading: "Ganache", steps: ["Calentá la crema, volcá sobre el chocolate blanco picado y emulsioná. Dejá entibiar y cubrí la confitura. Llevá a la heladera 3 h."] },
      { heading: "Terminación", steps: ["Decorá con crema batida y un twist de chocolate."] },
    ],
    florTip: "Dejá que la ganache de chocolate blanco baje a temperatura ambiente antes de volcarla: si va caliente, derrite la confitura y se mezclan.",
    doneness: "La ganache firma en frío hasta quedar cremosa pero cortable.",
    commonMistakes: ["Confitura demasiado líquida: traspasa la base.", "Sobrecalentar el chocolate blanco: se corta."],
    storage: "En heladera hasta 3 días.",
    related: ["tarta-ganache-arandanos", "cheesecake-frutos-rojos"],
  },
  {
    slug: "tarta-ganache-arandanos", status: "published", cat: "Tartas", cuisine: null, img: arandanos,
    title: "Tarta de ganache de chocolate blanco y arándanos", subtitle: "Sablée, confitura de arándanos, ganache blanca y merengue",
    imageAlt: "Tarta de ganache de chocolate blanco y arándanos con picos de merengue",
    servings: "8 porciones", moldSize: "Molde de 22 cm", difficulty: "Media",
    times: { prep: "40 min", cook: "18 min", chill: "3 h" },
    intro: "La hermana de la de frutos rojos: una confitura casera de arándanos frescos, ganache de chocolate blanco y picos de merengue sobre una sablée.",
    ingredientGroups: [
      { heading: "Para la sablée", items: ["200 g de harina", "100 g de manteca fría", "80 g de azúcar impalpable", "1 huevo", "1 pizca de sal"] },
      { heading: "Para la confitura de arándanos", items: ["250 g de arándanos", "70 g de azúcar", "1 chorrito de jugo de limón"] },
      { heading: "Para la ganache y la terminación", items: ["300 g de chocolate blanco", "150 ml de crema", "2 claras y 120 g de azúcar para el merengue"] },
    ],
    methodStages: [
      { heading: "Base", steps: ["Arenás, uní con el huevo, descansá 30 min, forrá el molde y horneá en blanco a 170 °C 15–18 min."] },
      { heading: "Confitura", steps: ["Cociná los arándanos con el azúcar y el limón hasta mermelada liviana. Enfriá y repartí sobre la base."] },
      { heading: "Ganache y merengue", steps: ["Emulsioná la crema caliente con el chocolate blanco, entibiá y volcá. Hacé el merengue y decorá con picos; flameá si querés. Heladera 3 h."] },
    ],
    florTip: "Un toque de limón en la confitura levanta el sabor del arándano, que solo puede quedar plano.",
    doneness: "La ganache, cremosa y cortable en frío; el merengue, con picos firmes y brillantes.",
    commonMistakes: ["Confitura aguada.", "Sobrecalentar el chocolate blanco."],
    storage: "En heladera hasta 3 días.",
    related: ["tarta-ganache-frutos-rojos", "lemon-pie"],
  },
  {
    slug: "tiramisu", status: "published", cat: "Pastelería francesa", cuisine: "Italia", img: tiramisu,
    title: "Tiramisú con efecto terciopelo", subtitle: "Biscuit al café, crema de mascarpone y cobertura de chocolate",
    imageAlt: "Tiramisú con cobertura de chocolate y efecto terciopelo",
    servings: "6–8 porciones", moldSize: "Molde de 20 cm", difficulty: "Media",
    times: { prep: "40 min", chill: "4 h" },
    intro: "El tiramisú clásico, con una terminación moderna: biscuit embebido en café, crema de huevo y mascarpone, cacao y una cobertura de chocolate 54 % con efecto terciopelo.",
    ingredientGroups: [
      { heading: "Para la crema", items: ["4 yemas", "100 g de azúcar", "500 g de mascarpone", "200 ml de crema para batir"] },
      { heading: "Para el armado", items: ["1 paquete de vainillas o biscuit", "250 ml de café fuerte, frío", "cacao amargo para espolvorear"] },
      { heading: "Para la terminación", items: ["150 g de chocolate cobertura 54 %", "80 g de manteca de cacao (para el terciopelo)"] },
    ],
    methodStages: [
      { heading: "Crema de mascarpone", steps: ["Batí las yemas con el azúcar a baño maría hasta espumar (sabayón). Integrá el mascarpone y, por último, la crema batida en forma envolvente."] },
      { heading: "Armado", steps: ["Mojá el biscuit en el café (sin empaparlo) y armá capas alternando biscuit, crema y cacao. Terminá con crema."] },
      { heading: "Frío y terciopelo", steps: ["Heladera 4 h. Para la versión terciopelo, bañá con el chocolate 54 % y aplicá el chocolate con manteca de cacao a ~40 °C con pistola sobre el postre bien frío."] },
    ],
    florTip: "El café tiene que estar bien frío y el biscuit se moja un segundo. Caliente o empapado, el tiramisú se vuelve pesado.",
    doneness: "Listo cuando tomó frío y la crema quedó firme para cortar.",
    commonMistakes: ["Empapar el biscuit.", "Batir el mascarpone de más: se corta y se vuelve granuloso."],
    storage: "En heladera hasta 3 días.",
    related: ["selva-negra", "chocotorta"],
  },
  {
    slug: "postre-balcarce-tradicional", status: "published", cat: "Clásicos argentinos", cuisine: "Argentina", img: balcarce,
    title: "Postre Balcarce tradicional", subtitle: "Bizcocho, almíbar, dulce de leche, crema, merengue y castañas",
    imageAlt: "Postre Balcarce con merengue, dulce de leche y crema",
    servings: "10 porciones", moldSize: "Molde de 22 cm", difficulty: "Media",
    times: { prep: "1 h", cook: "30 min", chill: "2 h" },
    intro: "Un postre por capas, no un arrollado: bizcocho humedecido con almíbar, dulce de leche, crema, merengue seco y castañas en almíbar.",
    ingredientGroups: [
      { heading: "Para el bizcocho", items: ["4 huevos", "120 g de azúcar", "120 g de harina"] },
      { heading: "Para el almíbar", items: ["100 ml de agua", "80 g de azúcar", "esencia de vainilla"] },
      { heading: "Para el armado", items: ["300 g de dulce de leche", "400 ml de crema para batir", "merenguitos secos", "castañas en almíbar", "azúcar impalpable"] },
    ],
    methodStages: [
      { heading: "Bizcocho", steps: ["Batí huevos y azúcar a punto letra, integrá la harina en forma envolvente y horneá a 180 °C 25–30 min. Enfriá y cortá en capas."] },
      { heading: "Almíbar", steps: ["Herví agua y azúcar, perfumá con vainilla y dejá entibiar."] },
      { heading: "Armá por capas", steps: ["Humedecé cada capa con almíbar. Alterná dulce de leche, crema batida y trozos de merenguito y castañas. Repetí y cubrí con crema."] },
      { heading: "Terminación", steps: ["Decorá con más merenguitos, castañas y azúcar impalpable. Llevá a la heladera 2 h."] },
    ],
    florTip: "Sumá los merenguitos al armar, no antes: si quedan mucho tiempo en contacto con la crema pierden lo crocante.",
    doneness: "El bizcocho, esponjoso y que vuelve al tacto; el postre, firme después del frío.",
    commonMistakes: ["Armarlo como arrollado: el Balcarce va por capas.", "Mojar de más el bizcocho."],
    storage: "En heladera hasta 3 días.",
    related: ["rogel", "chocotorta"],
  },
  {
    slug: "macarons", status: "published", cat: "Técnicas", cuisine: "Francia", img: macaronsImg,
    title: "Macarons: tapas y ganache", subtitle: "La técnica base para tapas lisas y una ganache para rellenar",
    imageAlt: "Macarons de colores en caja",
    servings: "unos 24 macarons", moldSize: "Placa con silicona o papel", difficulty: "Alta",
    times: { prep: "1 h", cook: "14 min", rest: "30 min" },
    intro: "El macaron no vive del relleno sino de las tapas: merengue, harina de almendras y un buen macaronage. Esta es la base; después cambiás el color y la ganache según el sabor.",
    ingredientGroups: [
      { heading: "Para las tapas", items: ["100 g de harina de almendras", "100 g de azúcar impalpable", "80 g de claras (añejadas, a temperatura ambiente)", "100 g de azúcar", "colorante en gel"] },
      { heading: "Para una ganache base", items: ["150 g de chocolate (negro, con leche o blanco según el sabor)", "100 ml de crema", "saborizante: pasta de pistacho, café, ralladura, frutos rojos, etc."] },
    ],
    methodStages: [
      { heading: "Tant pour tant", steps: ["Procesá y tamizá la harina de almendras con el azúcar impalpable."] },
      { heading: "Merengue y macaronage", steps: ["Hacé un merengue (francés o italiano) con las claras y el azúcar. Integrá el tant pour tant y el color haciendo macaronage: mezclá justo hasta que la masa caiga en cinta y se reabsorba en segundos."] },
      { heading: "Formá y secá", steps: ["Formá discos con manga sobre la placa. Golpeá la placa para sacar el aire. Dejá secar 30 min, hasta que al tocar no se peguen (forman piel)."] },
      { heading: "Horneá", steps: ["Horneá a 145–150 °C 12–14 min. Tienen que levantar el pie y no despegarse. Enfriá antes de despegar."] },
      { heading: "Rellená y madurá", steps: ["Hacé la ganache (crema caliente sobre el chocolate, emulsionar, saborizar) y rellená de a pares. Guardá en heladera 24 h: la maduración integra sabores y textura."] },
    ],
    florTip: "No te saltees la maduración. Un macaron recién armado está seco; 24 h en frío lo vuelven húmedo por dentro y crocante por fuera.",
    doneness: "La tapa está lista cuando levantó el pie, la superficie está firme y se despega limpia del papel ya fría.",
    commonMistakes: ["Macaronage de menos (tapas rugosas) o de más (se chatan).", "Saltear el secado: se agrietan en el horno.", "Pretender que todos los sabores usan la misma ganache."],
    storage: "En heladera hasta 4 días, en recipiente cerrado. Mejoran al segundo día.",
    related: ["torta-arcoiris", "tiramisu"],
  },

  // ───────────────────────── BORRADORES (requieren validación de Flor) ─────────────────────────
  {
    slug: "tarta-chocolate-higos-pistacho", status: "draft", cat: "Tartas", cuisine: null, img: higos,
    title: "Tarta de chocolate, higos y pistacho",
    subtitle: "Sablée de cacao, crema de chocolate blanco y dulce de leche, ganache 70 %, confitura de higos y pistacho",
    imageAlt: "Tarta de chocolate, higos y pistacho",
    intro: "Base crujiente de sablée de cacao, una crema de chocolate blanco y dulce de leche con un biscuit húmedo, ganache 70 %, confitura de higos, ralladura de naranja y pistacho. La gracia está en el contraste: la acidez del higo y la naranja contra el chocolate y el dulce de leche.",
    note: "Composición confirmada; falta validar con Flor el gramaje exacto de cada componente antes de publicar.",
    related: ["tarta-ganache-frutos-rojos", "marquise-pistacho"],
  },
  {
    slug: "bavaroise-de-frutillas", status: "draft", cat: "Postres", cuisine: null, img: bavaroiseFrutilla,
    title: "Bavaroise de frutillas",
    subtitle: "Bizcocho húmedo, crema de vainilla, crema de frutillas, cobertura de chocolate blanco y terciopelo",
    imageAlt: "Bavaroise de frutillas con efecto terciopelo",
    intro: "No es una mousse simple: es un postre por capas —bizcocho húmedo, crema de vainilla, crema de frutillas— con cobertura de chocolate blanco y efecto terciopelo. Formato aproximado de 16 cm, 6 a 8 porciones.",
    note: "Requiere validar con Flor las proporciones de cada crema y el método de la cobertura de terciopelo.",
    related: ["tarta-ganache-frutos-rojos"],
  },
  {
    slug: "bavaroise-chocolate-nutella", status: "draft", cat: "Postres", cuisine: null, img: bavaroiseChoc,
    title: "Bavaroise de chocolate con leche y Nutella",
    subtitle: "Bavaroise de chocolate con leche y ganache de Nutella",
    imageAlt: "Bavaroise de chocolate con leche",
    intro: "Una bavaroise de chocolate con leche con ganache de Nutella, de textura aterciopelada.",
    note: "Requiere validar con Flor la fórmula completa antes de publicar.",
    related: ["tiramisu"],
  },
];

export const publishedRecipes = recipes.filter((r) => r.status === "published");
export const draftRecipes = recipes.filter((r) => r.status === "draft");
export const publishedSlugs = publishedRecipes.map((r) => r.slug);
export const recipeCategories = [...new Set(publishedRecipes.map((r) => r.cat))];
