import SocialMediaRender from '@/components/common/social-media';
import ICategoryType, { ISocialMedia } from '@/types/category-type';
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { NavList } from './bottom';

export default function MobileDrawer({
  open,
  onClose,
  categories,
  socialMeida,
}: {
  open: boolean;
  onClose: () => void;
  categories: ICategoryType[];
  socialMeida: ISocialMedia[];
}) {
  return (
    <Drawer
      open={open}
      style={{
        zIndex: 99,
      }}
      onClose={() => {
        onClose();
      }}
    >
      <header className="p-2">
        <button onClick={onClose}>
          <IoMdClose size={33} />
        </button>
      </header>
      <NavList lg={false} categories={categories} />
      <div className="flex gap-4 justify-center items-center">
        <SocialMediaRender color="black" data={socialMeida} />
      </div>
    </Drawer>
  );
}
