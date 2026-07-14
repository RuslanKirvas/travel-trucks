"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCamperById } from "@/app/services/campers";
import { Camper } from "@/app/types/camper";
import styles from "./page.module.css";
import HeaderInfo from "@/app/components/camperDetails/HeaderInfo";
import Gallery from "@/app/components/camperDetails/Gallery";
import VehicleDetails from "@/app/components/camperDetails/VehicleDetails";

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
    <div className={styles.container}>
      <Gallery images={camper.gallery} name={camper.name} />
      <HeaderInfo camper={camper} />
      <VehicleDetails camper={camper} />
    </div>
  );
}
