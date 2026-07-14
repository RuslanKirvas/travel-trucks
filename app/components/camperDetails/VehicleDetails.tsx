// components/camperDetails/VehicleDetails.tsx
"use client";

import { Camper } from "@/app/types/camper";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: Camper;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  // Список характеристик для таблиці
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
      {/* Зручності (amenities) */}
      <div className={styles.amenities}>
        <div className={styles.tags}>
          {camper.amenities?.map((item) => (
            <span key={item} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Таблиця характеристик */}
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
