'use client';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about-us" className="overflow-hidden bg-white dark:bg-dark py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* صورة */}
          <div className="w-full md:w-6/12 px-4">
            <Image
              src={'/images/about-us.jpg'}
              className="rounded-2xl object-cover"
              width={700}
              height={700}
              alt="Bary Company"
            />
          </div>

          {/* النص */}
          <div className="w-full md:w-6/12 px-4">
            <h2 className="text-3xl font-bold text-corigin mb-4">Über Bary</h2>
            <p className="mb-4 text-gray-700">
              Bary ist ein führendes deutsches Unternehmen im Bereich Malerarbeiten, Gips, Fliesen, Mosaik, Platten, Oberboden und Trockenbau.
            </p>
            <p className="mb-4 text-gray-700">
              Seit vielen Jahren liefern wir qualitativ hochwertige Dienstleistungen für Privat- und Geschäftskunden und garantieren stets Zufriedenheit und Präzision.
            </p>
            <p className="mb-6 text-gray-700">
              Unser Team besteht aus erfahrenen Fachleuten, die Ihre Projekte termingerecht und mit höchster Sorgfalt umsetzen.
            </p>

            <a
              href="/about-us"
              className="inline-block bg-corigin text-white font-medium py-3 px-8 rounded-lg hover:bg-[#273666] transition-colors"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
