import ICategoryType from './category-type';
import IContentTypeGlobal from './content-type';

interface IModule {
  id: number;
  name: string;
  description: string;
  slug: string;
  categories: ICategoryType[];
}

export default IModule;
