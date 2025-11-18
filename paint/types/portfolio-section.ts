export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface PortfolioSectionProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  categories?: string[];
  columns?: 3 | 4 | 5;
}
