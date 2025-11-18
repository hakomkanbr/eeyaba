import ICategoryType from '@/types/category-type';
import FooterComponent from './footer';

export default async function CFooter({
  categories,
}: {
  categories: ICategoryType[];
}) {
  return <FooterComponent categories={categories} />;
}
