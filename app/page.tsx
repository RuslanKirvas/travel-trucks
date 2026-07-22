"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog" className={styles.button}>
          View Now
        </Link>
      </div>
    </div>
  );
}
