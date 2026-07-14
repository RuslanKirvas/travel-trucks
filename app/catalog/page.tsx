// app/catalog/page.tsx
"use client";

import { useCampers } from "@/app/hooks/useCampers";
import FilterPanel from "@/app/components/catalog/FilterPanel";
import CamperCard from "@/app/components/catalog/CamperCard";
// import LoadMoreButton from "@/app/components/catalog/LoadMoreButton";
import styles from "./page.module.css"; // ← стилі для сторінки

export default function CatalogPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useCampers();

  const allCampers = data?.pages.flatMap((page) => page.campers) || [];

  if (isLoading) return <div>Завантаження...</div>;
  if (isError) return <div>Помилка завантаження даних</div>;

  return (
    <div className={styles.catalogContainer}>
      {/* Ліва частина: фільтри */}
      <aside className={styles.sidebar}>
        <FilterPanel />
      </aside>

      {/* Права частина: картки */}
      <main className={styles.content}>
        <div className={styles.cards}>
          {allCampers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>
        {/* <LoadMoreButton
          onClick={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetchingNextPage}
        /> */}
      </main>
    </div>
  );
}
