export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image?: string;
}

export interface HeroSectionProps {
  slides?: HeroSlide[];
  autoplay?: boolean;
  loop?: boolean;
}
