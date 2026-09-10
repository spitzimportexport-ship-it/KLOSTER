import { BeerVariant, RitualStep, MonasticPillar } from '../types';
import lagerBottleImg from '../assets/images/regenerated_image_1788995261339.png';
import vainillaBottleImg from '../assets/images/regenerated_image_1788997672030.png';
import robleBottleImg from '../assets/images/regenerated_image_1788997663314.png';
import hydrateBottleImg from '../assets/images/regenerated_image_1788997684079.png';

export const OFFICIAL_BOTTLE_IMAGE_URL = lagerBottleImg;

export const BEER_VARIANTS: BeerVariant[] = [
  {
    id: 'lager',
    name: 'Kloster® Lager',
    subname: 'Cerveza Artesanal Lager · 300 ml',
    volume: '300 ml',
    abv: '5.0%',
    ibu: 18,
    temp: '4° - 6° C',
    colorCode: '#D1A85A',
    accentColor: '#344A2B',
    bottleLabelColor: '#F2E5CE',
    image: lagerBottleImg,
    tagline: 'Base · Fresca · Equilibrada',
    description: 'Cerveza dorada brillante de cuerpo equilibrado y espuma cremosa, elaborada con maltas nobles y lúpulos continentales bajo reposo en frío.',
    aroma: 'Cereales malteados tostados, corteza fresca de pan rústico, con un sutil destello floral de lúpulo continental noble.',
    boca: 'Entrada suave y untuosa, cuerpo medio con carbonatación fina y cremosa. Final limpio, refrescante y persistente sin astringencia.',
    maridaje: [
      'Carnes braseadas al fuego lento',
      'Quesos de pasta dura curados (Gouda, Parmigiano)',
      'Charcutería artesanal de campo',
      'Pescados de río y platos de cocina selecta'
    ],
    oakTime: 'Guarda en frío prolongada',
    servingGlass: 'Cáliz de cristal tallado con aro dorado',
    awards: 'Sello de Pureza Monástica · Santa Cruz 2026'
  },
  {
    id: 'vainilla',
    name: 'Kloster® Vainilla',
    subname: 'Cerveza Artesanal Vainilla · 300 ml',
    volume: '300 ml',
    abv: '5.0%',
    ibu: 16,
    temp: '5° - 7° C',
    colorCode: '#D1A85A',
    accentColor: '#68733A',
    bottleLabelColor: '#F2E5CE',
    image: vainillaBottleImg,
    tagline: 'Aromática · Suave · Sublime',
    description: 'Fusión delicada de malta dorada y vainas enteras de vainilla seleccionadas, maceradas en frío para un perfil aromático sedoso y envolvente.',
    aroma: 'Vainilla natural balsámica, crema inglesa, galleta horneada y miel de flores silvestres de los valles.',
    boca: 'Entrada sedosa y untuosa con equilibrio perfecto entre el dulzor aromático de la vainilla y el amargor floral sutil del lúpulo.',
    maridaje: [
      'Tarta rústica caliente de manzana o peras',
      'Crème brûlée tradicional y postres cremosos',
      'Quesos brie y camembert artesanal con frutos secos',
      'Aves asadas con salsa agridulce'
    ],
    oakTime: '45 días de guarda y maceración en frío',
    servingGlass: 'Cáliz tallado frío'
  },
  {
    id: 'roble',
    name: 'Kloster® Roble',
    subname: 'Cerveza Artesanal en Roble · 300 ml',
    volume: '300 ml',
    abv: '5.0%',
    ibu: 22,
    temp: '6° - 8° C',
    colorCode: '#5A3A24',
    accentColor: '#B66A3A',
    bottleLabelColor: '#5A3A24',
    image: robleBottleImg,
    tagline: 'Compleja · Maderosa · Nobleza Pura',
    description: 'Madurada pacientemente con duelas de roble tostado que aportan taninos sedosos, recuerdos de madera noble, caramelo y sutil calidez.',
    aroma: 'Madera de roble tostado, toffee artesanal, vainilla amaderada y notas balsámicas suaves.',
    boca: 'Textura aterciopelada y estructurada. La madera noble se integra armoniosamente con las maltas en un final redondo y prolongado.',
    maridaje: [
      'Cortes de carne madurados al fuego de leña',
      'Embutidos ahumados y cecinas curadas',
      'Pates rústicos y tablas de quesos semicurados',
      'Guisos tradicionales en cazuela de hierro'
    ],
    oakTime: '60 días de contacto y maduración en roble',
    servingGlass: 'Cáliz ceremonial Kloster®'
  },
  {
    id: 'hydrate',
    name: 'Kloster® Hydrate',
    subname: 'Cerveza Sin Alcohol · 0.0% · 300 ml',
    volume: '300 ml',
    abv: '0.0%',
    ibu: 14,
    temp: '3° - 5° C',
    colorCode: '#2E6F56',
    accentColor: '#D1A85A',
    bottleLabelColor: '#E8F1EB',
    image: hydrateBottleImg,
    tagline: '0.0% Alcohol · Pura · Isotónica',
    description: 'Toda la nobleza y frescura del mosto cervecero sin alcohol. Una alternativa pura e isotónica con espuma densa y sabor a cereal fresco.',
    aroma: 'Cereales tiernos, notas frescas de lúpulo aromático y suave toque herbal refrescante.',
    boca: 'Extremadamente refrescante, vivaz y ligera. Limpia el paladar con suavidad conservando la cremosidad de la malta.',
    maridaje: [
      'Ensaladas frescas y platos mediterráneos',
      'Almuerzos de trabajo y ocasiones de día',
      'Recuperación e hidratación deportiva',
      'Ceviches, carpaccios y tablas ligeras'
    ],
    oakTime: 'Fermentación en frío controlada 0.0%',
    servingGlass: 'Cáliz o copa fría de abadía',
    awards: 'Edición Sin Alcohol 0.0% · Santa Cruz 2026'
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
