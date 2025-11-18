'use client';

import ICategoryType from '@/types/category-type';
import { Input } from '@material-tailwind/react';
import Link from 'next/link';
import { MdEmail, MdMap, MdPhone } from 'react-icons/md';

interface FooterProps {
  categories: ICategoryType[];
  lang?: string;
}

export default function FooterComponent({ categories, lang = 'de' }: FooterProps) {
  const companyName = 'Bary';

  return (
    <footer className="relative w-full text-white bg-[#0A1425]">
      <div className="container mx-auto py-12 flex flex-wrap justify-between gap-8">
        <div className="w-full md:w-[300px]">
          <h2 className="text-xl font-bold mb-4">Über {companyName}</h2>
          <p className="text-white/80 text-sm">
            {companyName} ist Ihr professionelles Maler- und Bauunternehmen in Deutschland. Wir bieten hochwertige Dienstleistungen in den Bereichen: Maler, Gips, Überborden, Fliesen, Mosaik, Platten, Oberboden, Trockenbau.
          </p>
        </div>

        <div className="w-full md:w-[200px]">
          <h2 className="text-xl font-bold mb-4">Seiten</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href={`/${lang}`}>Startseite</Link>
            </li>
            {categories.map(({ name, slug }, key) => (
              <li key={key}>
                <Link href={`/${slug}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[200px]">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="#">Termin vereinbaren</Link>
            </li>
            <li>
              <Link href="#">Kundendienst</Link>
            </li>
            <li>
              <Link href="#">Abteilung Services</Link>
            </li>
            <li>
              <Link href="#">Über uns</Link>
            </li>
            <li>
              <Link href="#">Unsere Projekte</Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[250px]">
          <h2 className="text-xl font-bold mb-4">Kontakt</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-corigin" size={18} /> info@bary.de
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-corigin" size={18} /> +49 123 456789
            </li>
            <li className="flex items-center gap-2">
              <MdMap className="text-corigin" size={18} /> Deutschland, Berlin
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#212d42] text-center py-3 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <span>&copy; {new Date().getFullYear()} {companyName}. Alle Rechte vorbehalten.</span>
          <div className="flex gap-3">
            <Link href={`/${lang}/contact`}>Kontakt</Link>
            <span>|</span>
            <Link href={`/${lang}/about-us`}>Über uns</Link>
            <span>|</span>
            <Link href={`/${lang}/our-policy`}>Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
