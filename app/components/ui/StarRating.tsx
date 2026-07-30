import { StarIcons } from '@/app/components/icons/StarIcon';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export default function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  // Округлюємо до найближчого 0.5
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  // Створюємо масив зірок
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    let starColor = '#DADDE1'; // Сірий (за замовчуванням)

    if (i < fullStars) {
      starColor = '#FFC531'; // Жовтий (повна зірка)
    } else if (i === fullStars && hasHalfStar) {
      starColor = '#FFC531'; // Жовтий (половинна зірка)
    }

    // stars.push(
    //   <StarIcons key={i} size={16} className="flex-shrink-0" style={{ color: starColor }} />
    // );
    stars.push(
      <StarIcons
        key={i}
        size={16}
        className={`flex-shrink-0 ${starColor === '#FFC531' ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
}
