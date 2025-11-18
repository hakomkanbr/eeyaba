import BannerComponent from './banner';

export default async function Banner() {
  const defaultData = [
    {
      title: 'Maler',
      image: '/images/banners/slider-1.jpg',
      description: 'Professionelle Malerarbeiten für Innen- und Außenbereiche.',
      url: '/services/maler',
    },
    {
      title: 'Gips',
      image: '/images/banners/slider-2.jpg',
      description: 'Hochwertige Gipsarbeiten für Wände und Decken.',
      url: '/services/gips',
    },
    {
      title: 'Überborden',
      image: '/images/banners/slider-3.jpg',
      description: 'Saubere Überbordarbeiten für ein perfektes Finish.',
      url: '/services/uberborden',
    }
  ];

  return <BannerComponent data={defaultData} />;
}
