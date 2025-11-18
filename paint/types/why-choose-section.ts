export interface WhyChooseItem {
  id: number;
  title: string;
  icon?: string;
}

export interface WhyChooseSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  items: WhyChooseItem[];
}
