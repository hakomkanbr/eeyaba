import Link from 'next/link';
import { AnimationFadeDown } from '@/components/animations/fade-down';
import { LuArrowRight } from 'react-icons/lu';
import ICategoryType from '@/types/category-type';
import CustomImage from '@/components/utils/c-image';

const imageNames = [
  '/images/services/fea-1.png',
  '/images/services/fea-2.png',
  '/images/services/fea-3.png',
  '/images/services/fea-1.png',
  '/images/services/fea-2.png',
  '/images/services/fea-3.png',
  '/images/services/fea-1.png',
  '/images/services/fea-2.png',
];

export default function Item({
  data,
  index,
}: {
  data: ICategoryType & { description?: string };
  index?: number;
}) {
  return (
    <AnimationFadeDown
      enableScroll
      isActive={true}
      className="grid bg-white shadow-md w-[284px] min-h-[350px] gap-1 cursor-pointer p-5 pb-3 rounded-md"
    >
      <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full bg-[#EAF5F8] p-4 mb-3">
        <CustomImage
          src={imageNames[index ?? 0]}
          alt={data.name}
          width={40}
          height={40}
        />
      </div>
      <h3 className="text-2xl mt-1 font-bold">{data.name}</h3>
      {data.description && (
        <p className="mt-0 text-cblackopacity">{data.description}</p>
      )}
      <Link
        href={`/services/${data.slug}`}
        className="w-[150px] text-center text-corigin py-3 rounded-lg mt-4 flex gap-2 items-center"
      >
        Mehr erfahren <LuArrowRight className="inline" />
      </Link>
    </AnimationFadeDown>
  );
}
