import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.collection': 'Nuestra Colección',
    'nav.about': 'Quiénes Somos',
    'nav.ritual': 'El Ritual',
    'nav.contact': 'Contacto',
    'nav.brandSubtitle': 'Cerveza Artesanal',

    // Hero Section
    'hero.subtitle': 'Tradición Monástica • Santa Cruz, Bolivia',
    'hero.title1': 'El Espíritu de la Abadía,',
    'hero.title2': 'En tu Copa.',
    'hero.desc': 'Cerveza artesanal elaborada en lotes de guarda lenta con ingredientes 100% nobles. Cuatro estilos únicos creados para disfrutar sin prisas.',
    'hero.ctaCollection': 'Descubrir la Colección',
    'hero.ctaContact': 'Contacto',
    'hero.relicHeader': 'RELIQUIA DE ABADÍA',
    'hero.archCaptionTitle': 'Kloster® Cervecería Artesanal',
    'hero.archCaptionSub': 'Botella 300 ml · Colección de 4 Variedades',
    'hero.statAbv': 'Vol. Alcohol',
    'hero.statMalts': 'Maltas Nobles',
    'hero.statTemp': 'Servir a 4°-6°C',
    'hero.statGlass': 'En Copa o Cáliz',
    'hero.scrollDown': 'Ver Productos',

    // Product Catalog
    'catalog.badge': 'Elaboración Artesanal & Guarda Lenta',
    'catalog.title': 'Nuestra Colección',
    'catalog.subtitle': 'Cuatro variedades de 300 ml concebidas para la mesa gastronómica y el disfrute pausado.',
    'catalog.filterAll': 'Todas las Variedades',
    'catalog.filterAlcohol': 'Con Alcohol (5.0%)',
    'catalog.filterZero': '0.0% Sin Alcohol',
    'catalog.flagship': 'Edición Insignia',
    'catalog.zeroBadge': '0.0% Sin Alcohol',
    'catalog.tastingBtn': 'Ficha de Cata',
    'catalog.orderBtn': 'Pedir por WhatsApp',
    'catalog.notesBadge': 'Notas de Cata',
    'catalog.pairingBadge': 'Maridaje',

    // Beers details
    'beer.lager.name': 'Kloster® Lager',
    'beer.lager.sub': 'Cerveza Artesanal Lager · 300 ml',
    'beer.lager.tag': 'Base · Fresca · Equilibrada',
    'beer.lager.desc': 'Cerveza dorada brillante de cuerpo equilibrado y espuma cremosa, elaborada con maltas nobles y lúpulos continentales bajo reposo en frío.',
    'beer.lager.aroma': 'Cereales malteados tostados, corteza fresca de pan rústico, con un sutil destello floral de lúpulo noble.',
    'beer.lager.boca': 'Entrada suave y untuosa, cuerpo medio con carbonatación fina. Final limpio, refrescante y persistente.',
    'beer.lager.p1': 'Carnes braseadas al fuego lento',
    'beer.lager.p2': 'Quesos curados (Gouda, Parmigiano)',
    'beer.lager.p3': 'Charcutería artesanal de campo',

    'beer.vainilla.name': 'Kloster® Vainilla',
    'beer.vainilla.sub': 'Cerveza Artesanal Vainilla · 300 ml',
    'beer.vainilla.tag': 'Aromática · Suave · Sublime',
    'beer.vainilla.desc': 'Fusión delicada de malta dorada y vainas enteras de vainilla seleccionadas, maceradas en frío para un perfil aromático sedoso y envolvente.',
    'beer.vainilla.aroma': 'Vainilla natural balsámica, crema inglesa, galleta horneada y miel de flores silvestres.',
    'beer.vainilla.boca': 'Entrada sedosa y untuosa con equilibrio perfecto entre el dulzor aromático de la vainilla y el amargor floral sutil.',
    'beer.vainilla.p1': 'Tarta rústica caliente de manzana',
    'beer.vainilla.p2': 'Crème brûlée tradicional y postres',
    'beer.vainilla.p3': 'Quesos brie y camembert artesanal',

    'beer.roble.name': 'Kloster® Roble',
    'beer.roble.sub': 'Cerveza Artesanal en Roble · 300 ml',
    'beer.roble.tag': 'Robusta · Envejecida · Noble',
    'beer.roble.desc': 'Madurada en contacto con duelas de roble tostado medio. Complejidad amaderada, notas a caramelo oscuro y taninos aterciopelados.',
    'beer.roble.aroma': 'Madera de roble tostado, toffee, frutos secos confitados y matices de cacao amargo.',
    'beer.roble.boca': 'Cuerpo estructurado, taninos suaves de madera y retrogusto prolongado de malta caramelo.',
    'beer.roble.p1': 'Cortes de res madurados a la brasa',
    'beer.roble.p2': 'Guisos de caza y carnes ahumadas',
    'beer.roble.p3': 'Chocolate negro con más del 70% de cacao',

    'beer.hydrate.name': 'Kloster® Hydrate',
    'beer.hydrate.sub': 'Cerveza Artesanal 0.0% Sin Alcohol · 300 ml',
    'beer.hydrate.tag': '0.0% Alcohol · Isotónica · Pura',
    'beer.hydrate.desc': 'Toda la nobleza del grano malteado y lúpulo aromático en una receta 0.0% alcohol, rica en electrolitos naturales y de trago ultra refrescante.',
    'beer.hydrate.aroma': 'Malta fresca de cebada dulce, notas herbales cítricas y brisa de cereales limpios.',
    'beer.hydrate.boca': 'Ligera, burbuja vivaz chispeante, extraordinariamente hidratante sin rastros de alcohol.',
    'beer.hydrate.p1': 'Ensaladas frescas mediterráneas',
    'beer.hydrate.p2': 'Tapas ligeras, ceviches y mariscos',
    'beer.hydrate.p3': 'Post-entrenamiento o hidratación diurna',

    // Manifesto / Quiénes Somos
    'manifesto.badge': 'Cervecería Kloster®',
    'manifesto.title': 'Quiénes Somos',
    'manifesto.sub': 'Paciencia, Silencio y Tiempo',
    'manifesto.lead': 'Una cervecería artesanal boliviana inspirada en la solemnidad monástica, donde cada receta se elabora sin prisas ni atajos.',
    'manifesto.r1badge': 'La Filosofía del Reposo',
    'manifesto.r1title': 'El Arte de Esperar el Momento Exacto',
    'manifesto.r1p1': 'En un entorno saturado de inmediatez y producción a escala masiva, Kloster® defiende el silencio de la maduración pausada. Creemos que la cerveza no se fuerza: se acompaña.',
    'manifesto.r1p2': 'Nuestras recetas descansan a bajas temperaturas hasta que las notas de malta y levadura logran un balance suave, redondo y sin asperezas, respetando la pureza de cada ingrediente noble.',
    'manifesto.tagFerment': 'Fermentación controlada',
    'manifesto.tagNoChem': 'Sin aceleradores químicos',
    'manifesto.tagNobleMalts': 'Maltas nobles seleccionadas',
    'manifesto.r2badge': 'Oficio y Origen Boliviano',
    'manifesto.r2title': 'Maestría Cervecera de Bolivian Brew Company',
    'manifesto.r2p1': 'Elaborada y envasada en Santa Cruz con registro oficial SENASAG, Kloster® combina la herencia conventual europea con la pujanza y calidez de nuestra tierra.',
    'manifesto.r2p2': 'Diseñada para la mesa gastronómica, cada botella de 300 ml está concebida para maridar con cortes de carne, quesos madurados y sobremesas compartidas en copas de pie alto.',
    'manifesto.quote': '"No hay prisa en el rezo, ni en la buena cerveza."',
    'manifesto.quoteAuthor': 'Kloster® Cerveza Artesanal',

    // Pour Ritual
    'ritual.badge': 'El Cáliz de la Abadía',
    'ritual.title': 'El Ritual del Servicio',
    'ritual.sub': 'La Cerveza no se Bebe: se Oficia',
    'ritual.step1title': '1. Temperatura de la Cripta',
    'ritual.step1desc': 'Enfría la botella entre 4° y 6°C para despertar los aromas maltosos sin entumecer el paladar.',
    'ritual.step2title': '2. La Inclinación a 45°',
    'ritual.step2desc': 'Vierte lentamente sobre la pared interior del cáliz para liberar la carbonatación natural.',
    'ritual.step3title': '3. La Corona Sagrada',
    'ritual.step3desc': 'Enderaza la copa al final para coronar dos dedos de espuma densa y protectora.',
    'ritual.interactiveTip': 'Mantén presionado o pulsa el botón para inclinar la botella y servir en el cáliz.',
    'ritual.pourBtn': 'Servir Cerveza',
    'ritual.resetBtn': 'Reiniciar',
    'ritual.audioMuted': 'Audio Silenciado',
    'ritual.audioActive': 'Audio Activado',

    // Contact
    'contact.badge': 'Atención Directa al Cliente y Hostelería',
    'contact.title': 'Contacto',
    'contact.desc': 'Ponte en contacto con nuestro equipo cervecero y comercial. Atendemos pedidos directos para establecimientos, eventos o consumo personal en todo el país.',
    'contact.pillar1title': 'Trato Directo de Fábrica',
    'contact.pillar1desc': 'Sin intermediarios. Acceso a tarifas preferenciales por volumen y lotes frescos.',
    'contact.pillar2title': 'Cálices Oficiales & Servicio',
    'contact.pillar2desc': 'Dotación de cristalería de pie alto Kloster® y asesoramiento en maridaje.',
    'contact.pillar3title': 'Envíos a Nivel Nacional',
    'contact.pillar3desc': 'Despacho a Santa Cruz, La Paz, Cochabamba, Sucre, Tarija y toda Bolivia.',
    'contact.phoneLabel': 'Línea Telefónica Directa',
    'contact.phoneHours': 'Lunes a Sábado · Santa Cruz, Bolivia',
    'contact.chatBtn': 'Chat',
    'contact.formBadge': 'Respuesta Inmediata',
    'contact.formTitle': 'Escríbenos en un Clic',
    'contact.reasonLabel': 'Selecciona tu Motivo',
    'contact.reasonDistribute': 'Quiero Distribuir',
    'contact.reasonEvent': 'Evento',
    'contact.reasonInquiry': 'Duda',
    'contact.nameLabel': 'Nombre o Establecimiento',
    'contact.namePlaceholder': 'Ej. Carlos / Restaurante El Roble',
    'contact.cityLabel': 'Ciudad',
    'contact.cityPlaceholder': 'Santa Cruz, La Paz, etc.',
    'contact.notesLabel': 'Detalle del Pedido o Consulta (Opcional)',
    'contact.notesPlaceholder': 'Indícanos si tienes preferencia por Lager, Vainilla, Roble o Hydrate...',
    'contact.submitBtn': 'Contactar por WhatsApp (+591 76502714)',
    'contact.footerNote': 'Derivación instantánea y confidencial · Bolivian Brew Company S.R.L.',

    // Tasting Modal
    'modal.factSheet': 'Ficha Técnica de Cervecería',
    'modal.alcohol': 'Alcohol',
    'modal.bitterness': 'Amargor',
    'modal.service': 'Servicio',
    'modal.profileTitle': 'Perfil de Cata & Notas Nobles',
    'modal.aromaTitle': 'Aroma & Bouquet',
    'modal.palateTitle': 'Sensación en Boca',
    'modal.pairingTitle': 'Maridaje Recomendado',
    'modal.close': 'Cerrar',
    'modal.assignVenue': 'Asignar Establecimiento',
    'modal.orderBeer': 'Pedir',

    // Age Gate
    'age.title': 'Cerveza Artesanal · Santa Cruz, Bolivia',
    'age.text': 'Para ingresar al claustro digital y acceder al catálogo de guarda, debes confirmar que eres mayor de edad para consumir bebidas alcohólicas según la ley de tu territorio (18+ años).',
    'age.enter': 'Soy Mayor de 18 Años · Ingresar',
    'age.exit': 'Soy menor de edad',
    'age.law': 'Ley 259 de Control y Regulación de Bebidas Alcohólicas.',

    // Footer
    'footer.brandTagline': 'Custodia del Oficio y la Guarda en Roble',
    'footer.col1Title': 'Quiénes Somos',
    'footer.col1Desc': 'Inspirada en el silencio y la devoción de los claustros medievales, elaborada en Santa Cruz con agua prístina y maltas nobles.',
    'footer.col2Title': 'Nuestra Colección',
    'footer.col3Title': 'Atención & Ventas',
    'footer.col4Title': 'Cervecería Oficial',
    'footer.linkDirectContact': 'Contacto Directo de Cervecería',
    'footer.linkChalice': 'Protocolo del Cáliz',
    'footer.linkDist': 'Solicitud de Distribución',
    'footer.linkHeritage': 'Nuestra Herencia',
    'footer.legalNotice': 'EL CONSUMO EXCESIVO DE ALCOHOL ES DAÑINO PARA LA SALUD. VENTA PROHIBIDA A MENORES DE 18 AÑOS. LEY 259.',
    'footer.heritage': 'Quiénes Somos',
    'footer.heritageText': 'Inspirada en el silencio y la devoción de los claustros medievales, elaborada en Santa Cruz con agua prístina y maltas nobles.',
    'footer.collection': 'Nuestra Colección',
    'footer.contact': 'Atención & Ventas',
    'footer.directContact': 'Contacto Directo de Cervecería',
    'footer.chaliceProtocol': 'Protocolo del Cáliz',
    'footer.distRequest': 'Solicitud de Distribución',
    'footer.heritageLink': 'Nuestra Herencia',
    'footer.legalTitle': 'Registro & Legalidad',
    'footer.warning': 'El consumo excesivo de alcohol es perjudicial para la salud. Venta prohibida a menores de 18 años.',
  },

  en: {
    // Navigation
    'nav.collection': 'Our Collection',
    'nav.about': 'About Us',
    'nav.ritual': 'The Ritual',
    'nav.contact': 'Contact',
    'nav.brandSubtitle': 'Craft Beer',

    // Hero Section
    'hero.subtitle': 'Monastic Tradition • Santa Cruz, Bolivia',
    'hero.title1': 'The Spirit of the Abbey,',
    'hero.title2': 'In Your Glass.',
    'hero.desc': 'Craft beer brewed in slow-aged batches with 100% noble ingredients. Four unique styles crafted to be savored without haste.',
    'hero.ctaCollection': 'Discover the Collection',
    'hero.ctaContact': 'Contact',
    'hero.relicHeader': 'ABBEY RELIC',
    'hero.archCaptionTitle': 'Kloster® Craft Brewery',
    'hero.archCaptionSub': '300 ml Bottle · 4 Variety Collection',
    'hero.statAbv': 'ABV Alcohol',
    'hero.statMalts': 'Noble Malts',
    'hero.statTemp': 'Serve at 4°-6°C',
    'hero.statGlass': 'In Goblet or Chalice',
    'hero.scrollDown': 'View Beers',

    // Product Catalog
    'catalog.badge': 'Craft Brewing & Slow Cellar Aging',
    'catalog.title': 'Our Collection',
    'catalog.subtitle': 'Four 300 ml varieties crafted for fine dining and unhurried enjoyment.',
    'catalog.filterAll': 'All Varieties',
    'catalog.filterAlcohol': 'With Alcohol (5.0%)',
    'catalog.filterZero': '0.0% Non-Alcoholic',
    'catalog.flagship': 'Flagship Edition',
    'catalog.zeroBadge': '0.0% Non-Alcoholic',
    'catalog.tastingBtn': 'Tasting Notes',
    'catalog.orderBtn': 'Order on WhatsApp',
    'catalog.notesBadge': 'Tasting Profile',
    'catalog.pairingBadge': 'Pairing',

    // Beers details
    'beer.lager.name': 'Kloster® Lager',
    'beer.lager.sub': 'Craft Lager Beer · 300 ml',
    'beer.lager.tag': 'Core · Fresh · Balanced',
    'beer.lager.desc': 'Bright golden beer with a balanced body and creamy head, brewed with noble malts and continental hops under cold maturation.',
    'beer.lager.aroma': 'Toasted malt grains, fresh rustic bread crust, with a delicate floral hint of noble hops.',
    'beer.lager.boca': 'Smooth and velvety entry, medium body with fine effervescence. Crisp, refreshing and lingering finish.',
    'beer.lager.p1': 'Slow fire braised meats',
    'beer.lager.p2': 'Aged cheeses (Gouda, Parmigiano)',
    'beer.lager.p3': 'Artisanal country charcuterie',

    'beer.vainilla.name': 'Kloster® Vanilla',
    'beer.vainilla.sub': 'Craft Vanilla Beer · 300 ml',
    'beer.vainilla.tag': 'Aromatic · Velvety · Sublime',
    'beer.vainilla.desc': 'Delicate fusion of golden malt and whole selected vanilla beans, cold-macerated for a silky, enveloping aromatic profile.',
    'beer.vainilla.aroma': 'Natural balsamic vanilla, custard notes, baked biscuit, and wild valley flower honey.',
    'beer.vainilla.boca': 'Silky mouthfeel balancing delicate vanilla sweetness with subtle floral hop bitterness.',
    'beer.vainilla.p1': 'Warm rustic apple pie',
    'beer.vainilla.p2': 'Traditional crème brûlée and custard desserts',
    'beer.vainilla.p3': 'Artisanal brie and camembert cheese',

    'beer.roble.name': 'Kloster® Oak',
    'beer.roble.sub': 'Oak-Aged Craft Beer · 300 ml',
    'beer.roble.tag': 'Robust · Cellar-Aged · Noble',
    'beer.roble.desc': 'Aged in contact with medium-toasted oak staves. Woody complexity, deep caramel notes, and velvety tannins.',
    'beer.roble.aroma': 'Toasted oak wood, toffee, candied nuts, and hints of dark cocoa.',
    'beer.roble.boca': 'Structured body, soft wood tannins, and a long caramelized malt aftertaste.',
    'beer.roble.p1': 'Dry-aged wood-grilled beef steaks',
    'beer.roble.p2': 'Game stews and smoked meats',
    'beer.roble.p3': '70%+ dark artisanal chocolate',

    'beer.hydrate.name': 'Kloster® Hydrate',
    'beer.hydrate.sub': '0.0% Non-Alcoholic Craft Beer · 300 ml',
    'beer.hydrate.tag': '0.0% Alcohol · Isotonic · Pure',
    'beer.hydrate.desc': 'All the richness of malted grain and aromatic hops in a 0.0% alcohol recipe, rich in natural electrolytes and intensely refreshing.',
    'beer.hydrate.aroma': 'Sweet fresh barley malt, citrus herbal notes, and a clean cereal breeze.',
    'beer.hydrate.boca': 'Crisp and light, sparkling lively bubbles, remarkably hydrating with zero alcohol traces.',
    'beer.hydrate.p1': 'Fresh Mediterranean salads',
    'beer.hydrate.p2': 'Light tapas, ceviches, and seafood',
    'beer.hydrate.p3': 'Post-workout or daytime refreshment',

    // Manifesto / Quiénes Somos
    'manifesto.badge': 'Kloster® Brewery',
    'manifesto.title': 'About Us',
    'manifesto.sub': 'Patience, Silence, and Time',
    'manifesto.lead': 'A Bolivian craft brewery inspired by monastic solemnity, where each recipe is crafted without haste or shortcuts.',
    'manifesto.r1badge': 'The Philosophy of Rest',
    'manifesto.r1title': 'The Art of Waiting for the Exact Moment',
    'manifesto.r1p1': 'In an environment saturated with rush and mass industrial output, Kloster® stands for the silence of unhurried maturation. We believe beer is not rushed: it is accompanied.',
    'manifesto.r1p2': 'Our recipes rest at cold cellar temperatures until malt and yeast harmonize into a smooth, rounded balance without harshness, honoring pure noble ingredients.',
    'manifesto.tagFerment': 'Controlled fermentation',
    'manifesto.tagNoChem': 'No chemical accelerators',
    'manifesto.tagNobleMalts': 'Selected noble malts',
    'manifesto.r2badge': 'Bolivian Craft & Heritage',
    'manifesto.r2title': 'Brewing Mastery by Bolivian Brew Company',
    'manifesto.r2p1': 'Brewed and packaged in Santa Cruz under official SENASAG certification, Kloster® blends European convent heritage with the energy and warmth of our land.',
    'manifesto.r2p2': 'Designed for the culinary table, every 300 ml bottle is made to pair with choice cuts of meat, aged cheeses, and memorable evenings in high-stem goblets.',
    'manifesto.quote': '"There is no haste in prayer, nor in good beer."',
    'manifesto.quoteAuthor': 'Kloster® Craft Beer',

    // Pour Ritual
    'ritual.badge': 'The Abbey Chalice',
    'ritual.title': 'The Pouring Ritual',
    'ritual.sub': 'Beer is not simply drunk: it is officiated',
    'ritual.step1title': '1. Cellar Temperature',
    'ritual.step1desc': 'Chill the bottle between 4° and 6°C to awaken rich malt aromas without numbing the palate.',
    'ritual.step2title': '2. The 45° Angle Pour',
    'ritual.step2desc': 'Gently pour down the inside wall of the chalice to liberate natural micro-carbonation.',
    'ritual.step3title': '3. The Sacred Crown',
    'ritual.step3desc': 'Straighten the glass at the finish to crown two fingers of dense, aromatic foam.',
    'ritual.interactiveTip': 'Press and hold or tap the button to tilt the bottle and pour into the chalice.',
    'ritual.pourBtn': 'Pour Beer',
    'ritual.resetBtn': 'Reset',
    'ritual.audioMuted': 'Muted Audio',
    'ritual.audioActive': 'Audio Enabled',

    // Contact
    'contact.badge': 'Direct Client & Hospitality Inquiries',
    'contact.title': 'Contact',
    'contact.desc': 'Reach out to our master brewers and commercial team. We handle direct orders for venues, events, or private tasting across Bolivia.',
    'contact.pillar1title': 'Direct Brewery Pricing',
    'contact.pillar1desc': 'No middlemen. Access preferential wholesale pricing and fresh cellar batches.',
    'contact.pillar2title': 'Official Chalices & Service',
    'contact.pillar2desc': 'Kloster® high-stem glassware supply and staff sommelier pairing training.',
    'contact.pillar3title': 'Nationwide Delivery',
    'contact.pillar3desc': 'Careful dispatch to Santa Cruz, La Paz, Cochabamba, Sucre, Tarija and beyond.',
    'contact.phoneLabel': 'Direct Telephone Line',
    'contact.phoneHours': 'Monday to Saturday · Santa Cruz, Bolivia',
    'contact.chatBtn': 'Chat',
    'contact.formBadge': 'Prompt Response',
    'contact.formTitle': 'Message Us in One Click',
    'contact.reasonLabel': 'Select Your Purpose',
    'contact.reasonDistribute': 'Distribution / Bar',
    'contact.reasonEvent': 'Special Event',
    'contact.reasonInquiry': 'Inquiry',
    'contact.nameLabel': 'Name or Venue',
    'contact.namePlaceholder': 'e.g. Carlos / The Oak Bistro',
    'contact.cityLabel': 'City',
    'contact.cityPlaceholder': 'Santa Cruz, La Paz, etc.',
    'contact.notesLabel': 'Order Details or Note (Optional)',
    'contact.notesPlaceholder': 'Tell us if you have interest in Lager, Vanilla, Oak or Hydrate...',
    'contact.submitBtn': 'Contact on WhatsApp (+591 76502714)',
    'contact.footerNote': 'Instant and confidential reply · Bolivian Brew Company S.R.L.',

    // Tasting Modal
    'modal.factSheet': 'Brewery Technical Sheet',
    'modal.alcohol': 'Alcohol',
    'modal.bitterness': 'Bitterness',
    'modal.service': 'Service',
    'modal.profileTitle': 'Tasting Profile & Noble Notes',
    'modal.aromaTitle': 'Aroma & Bouquet',
    'modal.palateTitle': 'Mouthfeel & Palate',
    'modal.pairingTitle': 'Recommended Pairing',
    'modal.close': 'Close',
    'modal.assignVenue': 'Venue Allocation',
    'modal.orderBeer': 'Order',

    // Age Gate
    'age.title': 'Craft Beer · Santa Cruz, Bolivia',
    'age.text': 'To enter our digital cloister and view the collection, you must confirm you are of legal drinking age in your country (18+ years old).',
    'age.enter': 'I am 18+ Years Old · Enter',
    'age.exit': 'I am underage',
    'age.law': 'Law 259 on Control and Regulation of Alcoholic Beverages.',

    // Footer
    'footer.brandTagline': 'Guardianship of Craft and Oak Maturation',
    'footer.col1Title': 'About Us',
    'footer.col1Desc': 'Inspired by the silence and devotion of medieval cloisters, brewed in Santa Cruz with pristine water and noble malts.',
    'footer.col2Title': 'Our Collection',
    'footer.col3Title': 'Sales & Inquiries',
    'footer.col4Title': 'Official Brewery',
    'footer.linkDirectContact': 'Direct Brewery Contact',
    'footer.linkChalice': 'Chalice Ritual Protocol',
    'footer.linkDist': 'Distribution Request',
    'footer.linkHeritage': 'Our Heritage',
    'footer.legalNotice': 'EXCESSIVE CONSUMPTION OF ALCOHOL IS HARMFUL TO HEALTH. SALE PROHIBITED TO MINORS UNDER 18 YEARS OF AGE. LAW 259.',
    'footer.heritage': 'About Us',
    'footer.heritageText': 'Inspired by the silence and devotion of medieval cloisters, brewed in Santa Cruz with pristine water and noble malts.',
    'footer.collection': 'Our Collection',
    'footer.contact': 'Sales & Inquiries',
    'footer.directContact': 'Direct Brewery Contact',
    'footer.chaliceProtocol': 'Chalice Ritual Protocol',
    'footer.distRequest': 'Distribution Request',
    'footer.heritageLink': 'Our Heritage',
    'footer.legalTitle': 'Registration & Compliance',
    'footer.warning': 'Excessive consumption of alcohol is harmful to health. Sale prohibited to minors under 18 years of age.',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('kloster_lang');
    return saved === 'en' ? 'en' : 'es';
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('kloster_lang', lang);
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['es'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
