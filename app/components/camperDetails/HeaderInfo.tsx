import { Camper } from "@/app/types/camper";
import styles from "./HeaderInfo.module.css";
import { StarIcons, LocationIcon } from "@/app/components/icons/index";

interface HeaderInfoProps {
  camper: Camper;
}

export default function HeaderInfo({ camper }: HeaderInfoProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles.name}>{camper.name}</h1>

      <div className={styles.meta}>
        <span className={styles.rating}>
          <StarIcons size={15} className={styles.starIcon} />
          {camper.rating}
        </span>
        <span className={styles.rewiews}>({camper.totalReviews} Reviews)</span>

        <span className={styles.location}>
          <LocationIcon className={styles.locationicon} size={16} />
          {camper.location}
        </span>
      </div>
      <p className={styles.price}>€ {camper.price}</p>
      <p className={styles.description}>{camper.description}</p>
    </div>
  );
}
