"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./BookingForm.module.css";

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  comment?: string;
}

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    console.log("📝 Дані з форми:", data);
    setIsSubmitting(true);

    try {
      // Тут буде запит до бекенду
      console.log("📝 Дані бронювання:", { ...data, camperId });

      // Імітація відправки на сервер
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("🎉 Бронювання успішне! Дякуємо!");
      reset();
    } catch (error) {
      toast.error("❌ Щось пішло не так. Спробуйте ще раз.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.bookingForm}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Ім'я */}
        <div className={styles.field}>
          <input
            type="text"
            placeholder="Name*"
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email*"
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <input
            type="date"
            className={`${styles.input} ${errors.date ? styles.inputError : ""}`}
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && <p className={styles.error}>{errors.date.message}</p>}
        </div>

        {/* Коментар (опціонально) */}
        {/* <div className={styles.field}>
          <textarea
            placeholder="Comment (optional)"
            className={styles.textarea}
            {...register("comment")}
          />
        </div>  */}

        {/* Кнопка відправки */}
        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
