import SectionTitle from '../section-title';
import Link from 'next/link';
import Item from './item';
import ICategoryType from '@/types/category-type';

export default function Services() {
  const services: ICategoryType[] = [
    { name: 'Maler', slug: 'maler' },
    { name: 'Gips', slug: 'gips' },
    { name: 'Überborden', slug: 'uberborden' },
    { name: 'Fliesen', slug: 'fliesen' },
    { name: 'Mosaik', slug: 'mosaik' },
    { name: 'Platten', slug: 'platten' },
    { name: 'Oberboden', slug: 'oberboden' },
    { name: 'Trockenbau', slug: 'trockenbau' },
  ];

  return (
    <section id="services" className="overflow-hidden bg-[#0b2941d9] mt-28 dark:bg-dark py-[50px]">
      <SectionTitle
        title="Unsere Dienstleistungen"
        description="Wir bieten hochwertige Dienstleistungen in den Bereichen Maler, Gips, Überborden, Fliesen, Mosaik, Platten, Oberboden und Trockenbau."
      />

      <p className="text-center max-w-[600px] font-semibold text-white m-auto text-lg">
        Wir bieten professionelle Lösungen für alle Ihre Bau- und Malerprojekte.
      </p>

      <Link
        href="/services"
        className="m-auto w-[140px] block bg-corigin text-white text-center px-3 py-3 rounded-lg mt-4"
      >
        Alle Services
      </Link>

      <div className="container mt-10 flex flex-wrap mx-auto gap-12 justify-center md:justify-around">
        {services.map((item, index) => (
          <Item key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  );
}
