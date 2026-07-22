"use client";

import { Camper } from "@/app/types/camper";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: Camper;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  // 1️⃣ Мапа відповідності
  const amenityMap: Record<string, string> = {
    automatic: "Automatic",
    ac: "AC",
    petrol: "Petrol",
    kitchen: "Kitchen",
    radio: "Radio",
    alcove: "Alcove",
  };

  // 2️⃣ Порядок (як на макеті)
  const order = ["automatic", "ac", "petrol", "kitchen", "radio", "alcove"];

  // 3️⃣ Формуємо список (двигун + трансмісія + аменітіс)
  const baseAmenities = [
    "alcove",
    "petrol",
    camper.engine, // "diesel", "petrol", "hybrid", "electric"
    camper.transmission, // "automatic", "manual"
  ];

  const allAmenities = [...baseAmenities, ...camper.amenities];

  // 4️⃣ Сортуємо за порядком з макету
  const sortedAmenities: string[] = [];
  for (const key of order) {
    const found = allAmenities.some(
      (item) => item.toLowerCase() === key.toLowerCase(),
    );
    if (found) {
      sortedAmenities.push(amenityMap[key]);
    }
  }

  // 5️⃣ Додаємо ті, що не ввійшли в порядок (якщо є)
  for (const item of allAmenities) {
    const isInOrder = order.some(
      (key) => key.toLowerCase() === item.toLowerCase(),
    );
    if (!isInOrder) {
      const label = amenityMap[item.toLowerCase()];
      if (label && !sortedAmenities.includes(label)) {
        sortedAmenities.push(label);
      }
    }
  }

  const details = [
    { label: "Form", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <div className={styles.vehicleDetails}>
      <h3 className={styles.title}>Vehicle details</h3>

      <div className={styles.amenities}>
        <div className={styles.tags}>
          {sortedAmenities.map((item) => (
            <span key={item} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <hr className={styles.border} />

      <div className={styles.detailsGrid}>
        {details.map(({ label, value }) => (
          <div key={label} className={styles.detailRow}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
