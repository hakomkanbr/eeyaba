import ICategoryType from '@/types/category-type';
import IDtResponse from '@/types/table-res';

export const dDeCategories: IDtResponse<ICategoryType> = {
  data: [
    {
      name: 'Über uns',
      slug: '#about-us',
    },
    {
      name: 'Unsere Dienstleistungen',
      slug: '#services',
    },
    {
      name: 'Ausstellung',
      slug: '#gallary',
    },
    {
      name: 'Aktuelle Nachrichten',
      slug: '#blog',
    },
    {
      name: 'Contact',
      slug: '#contact',
    },
  ],
  total: 0,
};
