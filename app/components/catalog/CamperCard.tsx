"use client";

import Link from "next/link";
import { Camper } from "@/app/types/camper";
import styles from "./CamperCard.module.css";

import {
  AutoIcons,
  EngineIcon,
  StarIcons,
  TransmissionIcons,
  LocationIcon,
} from "@/app/components/icons/index";
// Описуємо пропси (вхідні дані)
interface CamperCardProps {
  camper: Camper; // Отримуємо один об'єкт кемпера
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <div className={styles.card}>
      {/* Ліва частина: фото */}
      <div className={styles.imageWrapper}>
        <img
          src={camper.coverImage}
          alt={camper.name}
          className={styles.image}
        />
      </div>

      {/* Права частина: інформація */}
      <div className={styles.content}>
        {/* Верхній рядок: назва + ціна */}
        <div className={styles.header}>
          <h2 className={styles.name}>{camper.name}</h2>
          <p className={styles.price}>€ {camper.price}</p>
        </div>

        {/* Рейтинг + відгуки + локація */}
        <div className={styles.meta}>
          <span className={styles.rating}>
            {" "}
            <StarIcons size={15} className={styles.adjustIcon} />{" "}
            {camper.rating}
          </span>
          <span>({camper.totalReviews} Reviews)</span>
          <span className={styles.location}>
            <LocationIcon size={16} />
            {camper.location}
          </span>
        </div>

        {/* Опис */}
        <p className={styles.description}>{camper.description}</p>

        {/* Характеристики (теги) */}
        <div className={styles.tags}>
          <span className={styles.tag}>
            <EngineIcon size={20} />
            {camper.engine}
          </span>

          <span className={styles.tag}>
            <TransmissionIcons size={15} className={styles.adjustIcon} />
            {camper.transmission}
          </span>

          <span className={styles.tag}>
            <AutoIcons size={15} className={styles.adjustIcon} />
            {camper.form}
          </span>
        </div>

        {/* Кнопка "Show more" */}
        <div className={styles.showMore}>
          <Link
            href={`/catalog/${camper.id}`}
            target="_blank"
            className={styles.showMoreButton}
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}
