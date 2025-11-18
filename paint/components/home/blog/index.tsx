import Link from 'next/link';
import BlogItem from './item';

const blogPosts = [
  {
    title: 'Neues Projekt in München abgeschlossen',
    slug: 'projekt-muenchen',
    category: 'Projekte',
    image: '/images/blog/blog-01.png',
    date: '2025-11-01',
    excerpt: 'Bary hat erfolgreich ein Maler- und Trockenbauprojekt in München abgeschlossen.'
  },
  {
    title: 'Tipps für hochwertige Malerarbeiten',
    slug: 'tipps-malerarbeiten',
    category: 'Tipps',
    image: '/images/blog/blog-02.png',
    date: '2025-10-15',
    excerpt: 'Erfahren Sie die besten Tipps für professionelle Malerarbeiten in Deutschland.'
  },
  {
    title: 'Fliesen- und Mosaikprojekte 2025',
    slug: 'fliesen-mosaik-2025',
    category: 'Projekte',
    image: '/images/blog/blog-03.png',
    date: '2025-09-30',
    excerpt: 'Eine Übersicht unserer erfolgreich abgeschlossenen Fliesen- und Mosaikprojekte.'
  },
  {
    title: 'Trockenbau-Lösungen für Ihr Zuhause',
    slug: 'trockenbau-haus',
    category: 'Tipps',
    image: '/images/blog/blog-04.png',
    date: '2025-08-20',
    excerpt: 'Entdecken Sie moderne Trockenbau-Lösungen für private und gewerbliche Projekte.'
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold relative inline-block before:absolute before:content-[''] before:w-20 before:h-1 before:bg-corigin before:left-1/2 before:-bottom-2 before:-translate-x-1/2">
            Aktuelle Nachrichten
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-xl leading-7 text-gray-500">
            Hier finden Sie die neuesten Nachrichten und Tipps rund um unsere Dienstleistungen bei Bary.
          </p>
        </div>

        <div className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <BlogItem key={index} data={post} />
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <Link href="/blog" className="bg-corigin text-white py-2 px-5 rounded-lg">
            Alle Beiträge
          </Link>
        </div>
      </div>
    </section>
  );
}
