import CustomImage from '@/components/utils/c-image';
import dayjs from 'dayjs';
import Link from 'next/link';

interface BlogItemProps {
  data: {
    title: string;
    slug: string;
    id?: number;
    category?: string;
    image?: string;
    description?: string;
    date: string;
  };
}

export default function BlogItem({ data }: BlogItemProps) {
  return (
    <figure className="rounded-lg shadow-lg overflow-hidden card-img-top overlay overlay-1 hover-scale group">
      <figure className="card-img-top h-[220px] overflow-hidden overlay relative overlay-1 hover-scale group">
        <Link href={`/blog/${data.slug}`}>
          <CustomImage
            className="w-full !transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
            fill
            src={data.image ?? '/images/default_image.png'}
            alt={data.title}
          />
          <span className="bg"></span>
        </Link>
        <figcaption className="group-hover:opacity-100 flex bg-[#39383880] absolute w-full h-full opacity-0 text-center inset-0 z-[5] pointer-events-none">
          <h5 className="!mb-0 absolute w-full translate-y-[-50%] left-0 top-2/4 text-white">
            Mehr erfahren
          </h5>
        </figcaption>
      </figure>

      <div className="p-4 min-h-[130px] relative">
        <div className="py-1 flex gap-1 justify-start flex-col relative">
          <span className="font-bold">{data.title}</span>
        </div>
        {data.description && (
          <p className="line-clamp-3 min-h-[76px] font-light text-cblackopacity">
            {data.description}
          </p>
        )}
      </div>

      <hr />

      <div className="py-5 px-4 flex items-center justify-between text-xs text-cblackopacity font-bold">
        <span>{dayjs(data.date).format('DD/MM/YYYY')}</span>
        <span>{data.category}</span>
      </div>
    </figure>
  );
}
