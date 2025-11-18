import CustomImage from '../utils/c-image';

function DefaultGallery({ images }: { images: string[] }) {
  console.info(images);
  return (
    <>
      <h1 className="text-lg">Gallary</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images?.map((src, index) => (
          <div key={index} className="h-36">
            <CustomImage fill className="rounded-lg" src={src} loader />
          </div>
        ))}
      </div>
    </>
  );
}

export default DefaultGallery;
