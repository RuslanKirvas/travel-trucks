"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCamperById } from "@/app/services/campers";
import { Camper } from "@/app/types/camper";
import styles from "./page.module.css";
import HeaderInfo from "@/app/components/camperDetails/HeaderInfo";
import Gallery from "@/app/components/camperDetails/Gallery";
import VehicleDetails from "@/app/components/camperDetails/VehicleDetails";
import Reviews from "@/app/components/camperDetails/Reviews";
import BookingForm from "@/app/components/camperDetails/BookingForm";
import FilterPanel from "@/app/components/catalog/FilterPanel";

export default function CamperDetailsPage() {
  const params = useParams();
  const camperId = params.camperId as string;

  const [camper, setCamper] = useState<Camper | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCamper() {
      try {
        setLoading(true);
        const data = await fetchCamperById(camperId);

        setCamper(data);

        const testReviews = [
          {
            reviewer_name: "Alice",
            reviewer_rating: 5,
            comment:
              "The Mavericks panel truck was a perfect choice for my solo road trip.",
          },
          {
            reviewer_name: "Bob",
            reviewer_rating: 4,
            comment:
              "A decent option for solo travel. The Mavericks provided a comfortable stay.",
          },
        ];

        // Тимчасово підміняємо дані
        setCamper({ ...data, reviews: testReviews });
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (camperId) {
      loadCamper();
    }
  }, [camperId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!camper) return <div>Camper is not a found</div>;

  return (
    <div className="container">
      <div className={styles.grid}>
        {" "}
        {/* ← ОСНОВНА СІТКА (2 КОЛОНКИ) */}
        {/* ===== ЛІВА КОЛОНКА ===== */}
        <div className={styles.leftColumn}>
          <div className={styles.galleryWrapper}>
            <Gallery images={camper.gallery} name={camper.name} />
          </div>
          <div className={styles.reviewsWrapper}>
            <Reviews reviews={camper.reviews} />
          </div>
        </div>
        {/* ===== ПРАВА КОЛОНКА ===== */}
        <div className={styles.rightColumn}>
          <div className={styles.headerInfoWrapper}>
            <HeaderInfo camper={camper} />
          </div>
          <div className={styles.vehicleDetailsWrapper}>
            <VehicleDetails camper={camper} />
          </div>
          <div className={styles.bookingFormWrapper}>
            <BookingForm camperId={camper.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
