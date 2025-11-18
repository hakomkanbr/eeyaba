export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface ServiceSectionProps {
  title: string;
  subtitle: string;
  services: ServiceCard[];
  layout?: 'grid' | 'list';
  columns?: 3 | 4;
}
