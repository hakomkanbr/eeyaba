'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

import CustomImage from '@/components/utils/c-image';
import { AnimationFadeDown } from '@/components/animations/fade-down';
import { AnimationFadeIn } from '@/components/animations/fade-in';

interface BannerItem {
  title: string;
  image?: string;
  description?: string;
  url: string;
}

interface BannerProps {
  data: BannerItem[];
}

export default function BannerComponent({ data }: BannerProps) {
  if (!data || data.length === 0) return null;

  return (
    <header className="relative h-[70vh] md:h-[90vh] overflow-hidden">
      <Swiper
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative w-full h-full">
                {/* الصورة */}
                <CustomImage
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loader={item?.image != null}
                  src={item?.image ?? '/images/default_image.png'}
                  alt={item.title}
                  fill
                />
                {/* Overlay لتوضيح النصوص */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* النصوص فوق الصورة */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
                  <AnimationFadeDown isActive={isActive}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-6">
                      {item?.description}
                    </p>
                  </AnimationFadeDown>
                  <AnimationFadeIn isActive={isActive}>
                    <Link
                      href={"#contact"}
                      className="inline-block bg-corigin text-white font-semibold py-3 px-6 rounded-lg text-base md:text-lg hover:bg-[#ffbb00] transition-colors"
                    >
                      Kontaktieren Sie uns
                    </Link>
                  </AnimationFadeIn>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
