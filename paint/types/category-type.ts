import IContentTypeGlobal from './content-type';

interface ICategoryType {
  id?: number;
  slug: string;
  name: string;
  image?: string;
  itemCount?: number;
  description?: string;
  moduleSlug?: string;
  contents?: IContentTypeGlobal[];
}

export interface ISocialMedia {
  id?: number;
  name: string;
  url: string;
}

export default ICategoryType;
