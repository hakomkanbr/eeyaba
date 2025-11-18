import BottomNav from './bottom';
import ICategoryType from '@/types/category-type';
import { ISocialMedia } from '@/types/category-type';

export default async function Navbar({
  socialMeida,
  categories,
}: {
  socialMeida: ISocialMedia[];
  categories: ICategoryType[];
}) {
  return (
    <>
      <div className="bg-[#37506e]">
        <BottomNav socialMeida={socialMeida} categories={categories} />
      </div>
    </>
  );
}
