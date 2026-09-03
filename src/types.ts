export interface BeerVariant {
  id: string;
  name: string;
  subname: string;
  volume: string;
  abv: string;
  ibu: number;
  temp: string;
  colorCode: string;
  accentColor: string;
  bottleLabelColor: string;
  tagline: string;
  description: string;
  aroma: string;
  boca: string;
  maridaje: string[];
  oakTime?: string;
  servingGlass: string;
  image?: string;
  awards?: string;
}

export interface RitualStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  icon: string;
  progressRange: [number, number];
}

export interface MonasticPillar {
  title: string;
  desc: string;
  icon: string;
  tag: string;
}

export interface B2BRequest {
  businessName: string;
  taxId: string;
  city: string;
  phone: string;
  businessType: 'restaurante' | 'hotel' | 'bar_selecto' | 'tienda_gourmet';
  volume: string;
  notes?: string;
}
