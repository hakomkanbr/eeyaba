import ICategoryType from './category-type';

interface IContentTypeGlobal {
  id?: number;
  title?: string;
  slug?: string;
  date?: string;
  published?: boolean;
  categoryId?: number;
  category?: ICategoryType;
  inputs: {
    [key: string]: any;
  };
  seo: {
    seo_title: null;
    seo_bookmarks: null;
    seo_description: null;
    seo_keywords: null;
  };
}

export default IContentTypeGlobal;
