"use client";

import { useCampers } from "@/app/hooks/useCampers";
import CamperCard from "@/app/components/catalog/CamperCard";
import FilterPanel from "@/app/components/catalog/FilterPanel";
import styles from "./page.module.css";

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

  if (isLoading) return <div className={styles.loader}>Loading...</div>;
  if (isError) return <div className={styles.error}>Error loading data</div>;

  return (
    <div className="container">
      <div className={styles.catalogContainer}>
        <aside className={styles.sidebar}>
          <FilterPanel />
        </aside>

        <main className={styles.content}>
          <div className={styles.cards}>
            {allCampers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>

          {/* ===== КНОПКА "LOAD MORE" ===== */}
          {hasNextPage && (
            <div className={styles.loadMoreWrapper}>
              <button
                className={styles.loadMoreButton}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? (
                  <span className={styles.spinner}></span>
                ) : (
                  "Load More"
                )}

                {/* {isFetchingNextPage ? "Loading..." : "Load More"} */}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
