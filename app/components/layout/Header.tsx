"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { LogoIcon } from "../icons";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link href="/" className={styles.logo}>
          <LogoIcon size={136} />
        </Link>

        {/* Навігація */}
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`${styles.navLink} ${pathname === "/catalog" ? styles.active : ""}`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
