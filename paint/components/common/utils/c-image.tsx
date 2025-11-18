'use client';
import Image from 'next/image';

export const imgLoader = ({ src, width, quality }: any) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/bremix/content/${src}`;
  return `${src}`;
  return `http://localhost:5000/13/content/241003_224154_503823.webp`;
};

export default function CustomImage({
  width,
  height,
  src,
  alt,
  style,
  loader,
  objectFit,
  fill = false,
  objectPosition,
  className,
  placeholder = 'blur',
}: any) {
  // src = "/images/default_image.png"
  return (
    <>
      {fill ? (
        <div className="relative w-full h-full">
          {/* {loadingImg && <Skeleton.Image active={true} />} */}
          <Image
            // loader={loader}
            style={style}
            src={src}
            alt={alt ?? 'Bremix'}
            width={width}
            fill
            className={className}
            height={height}
            loader={loader && imgLoader}
          />
        </div>
      ) : (
        <div>
          <Image
            className={className}
            src={src}
            style={style}
            alt={alt ?? 'Bremix'}
            width={width}
            height={height}
            loader={loader && imgLoader}
          />
        </div>
      )}
    </>
  );
}
