"use client";

import { Camper } from "@/app/types/camper";
import styles from "./Reviews.module.css";

interface ReviewsProps {
  reviews: Camper["reviews"];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={styles.reviewsWrapper}>
      <h3 className={styles.title}>Reviews</h3>

      {!reviews || reviews.length === 0 ? (
        <p className={styles.empty}>No reviews yet</p>
      ) : (
        <div className={styles.list}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewItem}>
              <div className={styles.reviewer}>
                <span className={styles.avatar}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </span>
                {/* ===== НОВИЙ КОНТЕЙНЕР ДЛЯ ІМЕНІ ТА ЗІРОК ===== */}
                <div className={styles.reviewerInfo}>
                  <span className={styles.name}>{review.reviewer_name}</span>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < review.reviewer_rating
                            ? styles.starFilled
                            : styles.starEmpty
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.comment}>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
