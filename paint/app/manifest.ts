import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Paint Company',
    short_name: 'Paint Company',
    description: `
Willkommen bei Paint Company, Ihrem professionellen Maler- und Bauunternehmen in Deutschland.
Wir bieten hochwertige Dienstleistungen in den Bereichen Malerarbeiten, Gips, Überborden, Fliesen, Mosaik, Platten, Oberboden und Trockenbau.
Erleben Sie unsere Qualität und Professionalität und kontaktieren Sie uns gerne für Anfragen oder Projekte.
    `,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
