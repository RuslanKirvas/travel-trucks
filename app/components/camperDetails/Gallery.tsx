"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import styles from "./Gallery.module.css";

interface GalleryProps {
  images: {
    id: string;
    camperId: string;
    thumb: string;
    original: string;

    order: number;
  }[];
  name: string;
}

export default function Gallery({ images, name }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // Фільтруємо — беремо поле original
  const validImages = images
    .map((item) => item.original)
    .filter((src) => src && typeof src === "string" && src.trim() !== "");

  if (!validImages || validImages.length === 0) {
    return (
      <div className={styles.placeholder}>
        <p>Зображення відсутні</p>
      </div>
    );
  }

  return (
    <div className={styles.galleryWrapper}>
      {/* Головний слайдер */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
        spaceBetween={10}
        slidesPerView={1}
      >
        {validImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideImage}>
              <Image
                src={src}
                alt={`${name} - фото ${index + 1}`}
                width={800}
                height={400}
                loading="eager"
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Мініатюри */}
      {validImages.length > 1 && (
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          className={styles.thumbsSwiper}
          spaceBetween={32}
          slidesPerView={4}
        >
          {validImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className={styles.thumbImage}>
                <Image
                  src={src}
                  alt={`Мініатюра ${index + 1}`}
                  width={120}
                  height={80}
                  className={styles.thumb}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
