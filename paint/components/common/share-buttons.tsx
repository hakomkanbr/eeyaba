'use client';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';
import { useEffect, useState } from 'react';

export default function ShareIcons() {
  const [href, setHref] = useState<string>('');
  useEffect(() => {
    setHref(decodeURI(window.location.href));
  }, []);
  return (
    <div className="flex gap-2 mt-9 items-center">
      <p className="text-xl">Share :</p>
      <FacebookShareButton url={href}>
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <WhatsappShareButton separator=":" blankTarget url={href}>
        <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <TwitterShareButton url={href}>
        <TwitterIcon size={32} />
      </TwitterShareButton>
    </div>
  );
}
