"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Home() {
  const images = [
    "/cv/mavi.png",
    "/cv/kirmizi.PNG",
    "/cv/standart.PNG",
    "/cv/yesil.PNG",
  ];

  return (
    <main className="w-full flex justify-center mt-20">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="max-w-4xl w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-64 rounded-2xl overflow-hidden bg-gray-100 "
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={440}
              height={500}
              className="object-contain ml-60 "
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
