import CustomImage from '@/components/utils/c-image';

const images = [
  '/images/gallray/portfolio-1.jpg',
  '/images/gallray/portfolio-2.jpg',
  '/images/gallray/portfolio-3.jpg',
  '/images/gallray/portfolio-4.jpg',
  '/images/gallray/portfolio-5.jpg',
  '/images/gallray/portfolio-1.jpg',
  '/images/gallray/portfolio-2.jpg',
  '/images/gallray/portfolio-3.jpg',
];

export default function Gallery() {
  return (
    <section id='gallary' className="container my-16 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 relative before:absolute before:content-[''] before:left-1/2 before:bottom-[-10px] before:w-20 before:h-1 before:bg-corigin before:-translate-x-1/2">
          Unsere Projekte
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-xl leading-7 text-gray-500">
          Hier sehen Sie einige unserer abgeschlossenen Projekte in den Bereichen Maler, Gips, Fliesen, Mosaik und Trockenbau.
        </p>
      </div>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-lg group">
            <CustomImage fill src={src} alt={`Projekt ${index + 1}`} className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
