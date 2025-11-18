'use client';
import Image from 'next/image';

export const imgLoader = ({ src }: { src: string }) => {
  return `${src}`;
};

export default function CustomImage({
  width,
  height,
  src,
  alt,
  style,
  loader,
  fill = false,
  className,
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
