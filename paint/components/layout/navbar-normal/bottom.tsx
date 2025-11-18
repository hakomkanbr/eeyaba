'use client';;
import React from 'react';
import {
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import ICategoryType, { ISocialMedia } from '@/types/category-type';
import Link from 'next/link';
import MobileDrawer from './mobile-drawer';
import { twMerge } from 'tailwind-merge';
import { dDeCategories } from '@/data/categories';
import Header from '@/components/home/Header';

function NavListMenu({ category }: { category: ICategoryType }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems =
    (category.contents &&
      category.contents.map(({ slug, title }, key) => (
        <a href="#" key={key}>
          <MenuItem className="flex items-center gap-3 rounded-lg">
            <div>
              <Typography variant="h6" color="blue-gray" className="flex items-center text-sm font-bold">
                <Link href={'/' + slug}>{title}</Link>
              </Typography>
              <Typography variant="paragraph" className="text-xs !font-medium text-blue-gray-500">
                <Link href={'/' + slug}>{'description'}</Link>
              </Typography>
            </div>
          </MenuItem>
        </a>
      ))) ||
    [];

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <Link href={`/${category.slug}`}>
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                {category.name}
              </ListItem>
            </Link>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-rows-1 gap-y-2 outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

export function NavList({ categories, lg = true, lang }: { categories: ICategoryType[]; lg?: boolean; lang?: string }) {
  return (
    <List className={twMerge(lg ? 'flex gap-7 flex-row items-center justify-center' : 'mb-3 gap-4')}>
      <Typography
        as="span"
        variant="paragraph"
        className="font-medium text-cblack lg:text-white  flex items-center justify-center"
      >
        <Link className="whitespace-nowrap" href={`/${lang}`}>
          Home
        </Link>
      </Typography>
      {categories &&
        categories.map((category, index) => {
          if (index > 6) return '';
          if (index == 10)
            return (
              <Typography
                as="div"
                href="javascript:void(0)"
                key={index}
                variant="small"
                className="font-medium text-cblack lg:text-white flex items-center justify-center"
              >
                <Link className="whitespace-nowrap" href={`/${lang}/blog`}>
                  إظهار الكل
                </Link>
              </Typography>
            );
          if (category?.contents && category.contents.length > 0) {
            return <NavListMenu key={index} category={category} />;
          } else {
            return (
              <Typography
                as="div"
                href="javascript:void(0)"
                key={index}
                variant="paragraph"
                className="font-medium text-cblack lg:text-white flex items-center justify-center"
              >
                <Link className="whitespace-nowrap" href={`/${lang}/${category.slug}`}>
                  {category.name}
                </Link>
              </Typography>
            );
          }
        })}
    </List>
  );
}

export default function BottomNav({
  categories = dDeCategories.data,
  socialMeida
}: {
  categories: ICategoryType[];
  socialMeida: ISocialMedia[];
}) {
  const [openNav, setOpenNav] = React.useState(false);
  const toggleDrawer = () => setOpenNav(!openNav);
  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <>
      <Header />
      <MobileDrawer socialMeida={socialMeida} categories={categories} open={openNav} onClose={toggleDrawer} />
    </>
  );
}
