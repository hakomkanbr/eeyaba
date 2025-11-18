import { ISocialMedia } from '@/types/category-type';
import ICategoryType from '@/types/category-type';
import FooterComponent from './footer';

export default async function CFooter({
  socialMeida,
  categories,
}: {
  socialMeida: ISocialMedia[];
  categories: ICategoryType[];
}) {
  return <FooterComponent categories={categories} socialMeida={socialMeida} />;
}
