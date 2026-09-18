import { BeerVariant, RitualStep, MonasticPillar } from '../types';
import lagerBottleImg from '../assets/images/regenerated_image_1788995261339.png';
import vainillaBottleImg from '../assets/images/regenerated_image_1788997672030.png';
import robleBottleImg from '../assets/images/regenerated_image_1788997663314.png';
import hydrateBottleImg from '../assets/images/regenerated_image_1788997684079.png';

export const OFFICIAL_BOTTLE_IMAGE_URL = lagerBottleImg;

export const BEER_VARIANTS: BeerVariant[] = [
  {
    id: 'lager',
    name: 'Kloster Lager',
    subname: 'Cerveza Cobriza Malteada · 300 ml',
    volume: '300 ml',
    abv: '5 %',
    ibu: 15,
    temp: '3–5 °C',
    colorCode: '#D1A85A',
    accentColor: '#344A2B',
    bottleLabelColor: '#F2E5CE',
    image: lagerBottleImg,
    tagline: 'Cobriza · Carácter Malteado · Equilibrada',
    description: 'Cerveza cobriza, moderadamente fuerte y de carácter malteado, con ésteres que evocan frutas secas. Presenta una ligera nota alcohólica integrada con la malta y una terminación seca.',
    apariencia: 'Color ámbar a cobre, con espuma blanca y cremosa, abundante, densa y duradera.',
    aroma: 'Aroma malteado con notas intensas de vainilla y caramelo, acompañado de una presencia alcohólica suave y perfumada.',
    sabor: 'Sabor maltoso, con caramelo y notas de roble. Amargor medio-bajo y equilibrado, con un final moderadamente seco y un retrogusto malteado que acentúa los ésteres y fenoles de la levadura.',
    boca: 'Textura suave, cuerpo medio y carácter complejo, con carbonatación media-alta.',
    maridaje: [
      'Carnes braseadas al fuego lento',
      'Quesos maduros',
      'Charcutería artesanal de campo',
      'Comidas picantes'
    ],
    oakTime: 'Guarda y maduración lenta',
    servingGlass: 'Cáliz de cristal tallado con aro dorado',
    awards: 'Sello de Pureza Monástica · Santa Cruz 2026'
  },
  {
    id: 'vainilla',
    name: 'Kloster Vainilla',
    subname: 'Cerveza con Vainilla y Caramelo · 300 ml',
    volume: '300 ml',
    abv: '5 %',
    ibu: 15,
    temp: '3–5 °C',
    colorCode: '#D1A85A',
    accentColor: '#68733A',
    bottleLabelColor: '#F2E5CE',
    image: vainillaBottleImg,
    tagline: 'Vainilla y Caramelo · Cobriza · Compleja',
    description: 'Cerveza cobriza, moderadamente fuerte y de carácter malteado, con ésteres que evocan frutas secas. Presenta una ligera nota alcohólica integrada con la malta y una terminación seca.',
    apariencia: 'Color cobrizo, con espuma blanca y cremosa, abundante, densa y duradera.',
    aroma: 'Aromas de vainilla y caramelo, acompañados de una presencia alcohólica suave y perfumada.',
    sabor: 'Sabor a vainilla y caramelo, con notas de roble. Amargor medio-bajo y equilibrado, con un final moderadamente seco y un retrogusto malteado que acentúa los ésteres y fenoles de la levadura.',
    boca: 'Textura suave, cuerpo medio y carácter complejo, con carbonatación media-alta.',
    maridaje: [
      'Tarta rústica caliente de manzana o peras',
      'Crème brûlée tradicional y postres cremosos',
      'Quesos brie y camembert artesanal con frutos secos',
      'Aves asadas con salsa agridulce',
      'Frituras, como pollo frito'
    ],
    oakTime: 'Maduración lenta con vainilla',
    servingGlass: 'Cáliz tallado frío'
  },
  {
    id: 'roble',
    name: 'Kloster Roble',
    subname: 'Cerveza con Roble y Caramelo · 300 ml',
    volume: '300 ml',
    abv: '5 %',
    ibu: 15,
    temp: '3–5 °C',
    colorCode: '#5A3A24',
    accentColor: '#B66A3A',
    bottleLabelColor: '#5A3A24',
    image: robleBottleImg,
    tagline: 'Roble y Caramelo · Bronce · Compleja',
    description: 'Cerveza cobriza, moderadamente fuerte y de carácter malteado, con ésteres que evocan frutas secas. Presenta una ligera nota alcohólica integrada con la malta y una terminación seca.',
    apariencia: 'Color bronce, con espuma blanca y cremosa, abundante, densa y duradera.',
    aroma: 'Aromas de roble y caramelo, acompañados de una presencia alcohólica suave y perfumada.',
    sabor: 'Sabor a roble y caramelo, con notas de vainilla. Amargor medio-bajo y equilibrado, con un final moderadamente seco y un retrogusto malteado que acentúa los ésteres y fenoles de la levadura.',
    boca: 'Textura suave, cuerpo medio y carácter complejo, con carbonatación media-alta.',
    maridaje: [
      'Cortes de carne madurados al fuego de leña',
      'Embutidos ahumados y cecinas curadas',
      'Pates rústicos y tablas de quesos semicurados',
      'Guisos tradicionales en cazuela de hierro',
      'Platos tradicionales jugosos'
    ],
    oakTime: 'Contacto y maduración en roble',
    servingGlass: 'Cáliz ceremonial Kloster'
  },
  {
    id: 'hydrate',
    name: 'Kloster Hydrate',
    subname: 'Cerveza con Limonada · 300 ml',
    volume: '300 ml',
    abv: '0,25 %',
    ibu: 7,
    temp: '3–5 °C',
    colorCode: '#2E6F56',
    accentColor: '#D1A85A',
    bottleLabelColor: '#E8F1EB',
    image: hydrateBottleImg,
    tagline: 'Cerveza y Limonada · Ácida y Equilibrada',
    description: 'Mezcla de 50 % de cerveza filtrada con 0,5 % de alcohol y 50 % de limonada. Un matrimonio armonioso entre fruta y cerveza, de carácter ácido y equilibrado.',
    apariencia: 'Tono claro y aspecto ligeramente turbio.',
    aroma: 'Aromas cítricos de pomelo, limonada y limón, de carácter ácido y refrescante.',
    sabor: 'Sabor cítrico a limón, con notas de caramelo y malta. Final seco y refrescante.',
    boca: 'Ligera, limpia y refrescante, con carbonatación alta y final seco.',
    maridaje: [
      'Ensaladas frescas y platos mediterráneos',
      'Almuerzos de trabajo y ocasiones de día',
      'Recuperación e hidratación deportiva',
      'Ceviches, carpaccios y tablas ligeras',
      'Sushi rolls'
    ],
    oakTime: 'Mezcla 50% cerveza 0.5% y 50% limonada',
    servingGlass: 'Cáliz o copa fría de abadía',
    awards: 'Mezcla Cerveza y Limonada (0,25 % ABV)'
  }
];

export const RITUAL_STEPS: RitualStep[] = [
  {
    number: 'I',
    title: 'El Temple Adecuado',
    subtitle: 'Vidrio frío y reposo absoluto',
    description: 'Enfriar el cáliz con agua pura a 4°C. Jamás congelar el cristal para no alterar la liberación de aromas esenciales ni opacar los reflejos de oro líquido.',
    detail: 'La temperatura templada del cristal de abadía preserva los ésteres frutales y el bouquet maltoso sin adormecer los sentidos.',
    icon: 'ThermometerSnowflake',
    progressRange: [0, 0.35]
  },
  {
    number: 'II',
    title: 'La Inclinación a 45 Grados',
    subtitle: 'El fluir del oro líquido',
    description: 'Verter con lentitud sobre las paredes talladas del cáliz permitiendo que la cerveza respire sin agitación violenta, despertando la carbonatación natural.',
    detail: 'El chorro continuo desciende acariciando el relieve facetado, liberando los aromas de malta noble y lúpulo continental en suspensión.',
    icon: 'Compass',
    progressRange: [0.35, 0.72]
  },
  {
    number: 'III',
    title: 'La Corona del Monje',
    subtitle: 'Dos dedos de espuma sagrada',
    description: 'Enderezar el cáliz al final del servicio para generar una corona de espuma compacta, aterciopelada y protectora de exactamente dos dedos de espesor.',
    detail: 'Esta cúpula densa sella la cerveza contra el oxígeno exterior, manteniendo el alma y el gas intactos hasta el último trago.',
    icon: 'Crown',
    progressRange: [0.72, 1.0]
  }
];

export const MONASTIC_PILLARS: MonasticPillar[] = [
  {
    title: 'Agua Pura Tratada',
    desc: 'Equilibrada con exactitud mineral para emular las vertientes de los valles monásticos europeos, base prístina de la suavidad del mosto cervecero.',
    icon: 'Droplets',
    tag: 'Pureza Prístina'
  },
  {
    title: 'Malta de Cebada Noble',
    desc: 'Granos de cebada cuidadosamente seleccionados y tostados a fuego lento que confieren un tono dorado radiante y aroma a corteza de pan rústico.',
    icon: 'Wheat',
    tag: 'Grano Seleccionado'
  },
  {
    title: 'Lúpulos Aromáticos',
    desc: 'Flores de lúpulo continental añadidas en momentos litúrgicos de la cocción, aportando amargor noble, sedoso y herbal sin asperezas.',
    icon: 'Flower',
    tag: 'Aroma Continental'
  },
  {
    title: 'Guarda en Frío',
    desc: 'Maduración prolongada a bajas temperaturas en bodegas subterráneas que decanta naturalmente la cerveza sin aditivos químicos artificiales.',
    icon: 'Hourglass',
    tag: 'Sin Apuro'
  }
];

export const BRAND_MATERIALITY = [
  { name: 'Piedra Abacial', code: '#17130F', desc: 'Solidez arquitectónica, criptas y muros de abadía.' },
  { name: 'Madera de Roble', code: '#5A3A24', desc: 'Crianza en barrica añeja, paciencia y tiempo.' },
  { name: 'Foil Oro Líquido', code: '#D1A85A', desc: 'Sello de valor, luz de vela y divinidad en la copa.' },
  { name: 'Verde Abadía', code: '#344A2B', desc: 'Color estructural, claustro botánico y pertenencia.' },
  { name: 'Pergamino Mate', code: '#F2E5CE', desc: 'Textura de códice antiguo, silencio visual y contraste.' },
  { name: 'Vidrio Ámbar Frío', code: '#B66A3A', desc: 'Protección lumínica tradicional y condensación helada.' }
];

export const BRAND_MANIFESTO_QUOTES = [
  'No hay prisa en el rezo, ni en la buena cerveza.',
  'Menos elementos, más significado.',
  'La marca debe reconocerse antes de leerse.',
  'Una cerveza para beber sin apuro.'
];
