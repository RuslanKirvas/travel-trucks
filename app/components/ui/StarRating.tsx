import { StarIcon } from "@/app/components/icons/StarIcon";

interface StarRatingProps {
  rating: number; // Оцінка (наприклад, 4.5)
  maxStars?: number; // Максимум зірок (зазвичай 5)
}

export default function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  // Округлюємо до найближчого 0.5
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  // Створюємо масив зірок
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    let starColor = "#DADDE1"; // Сірий (за замовчуванням)

    if (i < fullStars) {
      starColor = "#FFC531"; // Жовтий (повна зірка)
    } else if (i === fullStars && hasHalfStar) {
      starColor = "#FFC531"; // Жовтий (половинна зірка)
    }

    stars.push(
      <StarIcon
        key={i}
        size={16}
        className="flex-shrink-0"
        style={{ color: starColor }}
      />,
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
}
