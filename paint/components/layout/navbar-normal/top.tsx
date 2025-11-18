'use client';

import Container from '@/components/common/container';
import { Typography } from '@material-tailwind/react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Topbar() {
  const socialMedia = [
    { icon: <FaFacebookF />, url: 'https://facebook.com/bary' },
    { icon: <FaInstagram />, url: 'https://instagram.com/bary' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/bary' },
    { icon: <FaTwitter />, url: 'https://twitter.com/bary' },
  ];

  return (
    <div className="bg-white">
      <Container>
        <div className="grid grid-cols-6 md:grid-cols-12 px-1 min-h-[40px]">
          <div className="col-span-6 flex gap-3 justify-center my-1 lg:my-0 md:justify-start items-center">
            <Typography as="span" variant="small" className="font-extralight text-sm text-corigin">
              <Link href="/contact">Kontakt</Link>
            </Typography>
            <Typography as="span" variant="small" className="font-extralight text-sm text-corigin">
              <Link href="/about-us">Über uns</Link>
            </Typography>
            <Typography as="span" variant="small" className="font-extralight text-sm text-corigin">
              <Link href="/our-policy">Datenschutz</Link>
            </Typography>
          </div>

          <div className="col-span-6 flex gap-4 md:my-0 my-1 lg:my-0 justify-center items-center md:justify-end text-cblack">
            {socialMedia.map((item, index) => (
              <Link key={index} href={item.url} target="_blank" className="hover:text-corigin transition-colors">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
