"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Input from "@/app/components/ui/Input";
import Checkbox from "@/app/components/ui/Checkbox";
import styles from "./FilterPanel.module.css";
import { CloseIcon, LocationIcon } from "@/app/components/icons";

export default function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const location = searchParams.get("location") || "";
  const selectedEngine = searchParams.get("engine") || "";
  const selectedTransmission = searchParams.get("transmission") || "";
  const selectedForm = searchParams.get("form") || "";

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/catalog?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push("/catalog");
  };

  return (
    <div className={styles.panel}>
      {/* ===== ЛОКАЦІЯ ===== */}
      <label htmlFor="location" className={styles.label}>
        Location
      </label>
      <div className={styles.input}>
        <Input
          id="location"
          placeholder="Kyiv, Ukraine"
          value={location}
          onChange={(e) => updateFilter("location", e.target.value)}
          icon={<LocationIcon size={16} className={styles.inputIcon} />}
        />
      </div>

      <h3 className={styles.title}>Filters</h3>

      {/* ===== ГРУПА 1: CAMPER FORM ===== */}
      <div className={styles.field}>
        <h4 className={styles.subtitle}>Camper form</h4>
        <div className={styles.checkboxGroup}>
          {["alcove", "Panel Van", "integrated", "semi integrated"].map(
            (form) => (
              <Checkbox
                key={form}
                label={
                  form === "alcove"
                    ? "Alcove"
                    : form === "Panel Van"
                      ? "Panel Van"
                      : form === "semi integrated"
                        ? "Semi Integrated"
                        : "Integrated"
                }
                checked={selectedForm === form}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFilter("form", form);
                  } else {
                    updateFilter("form", "");
                  }
                }}
              />
            ),
          )}
        </div>
      </div>

      {/* ===== ГРУПА 2: ENGINE ===== */}
      <div className={styles.field}>
        <h4 className={styles.subtitle}>Engine</h4>
        <div className={styles.checkboxGroup}>
          {[
            { value: "diesel", label: "Diesel" },
            { value: "petrol", label: "Petrol" },
            { value: "hybrid", label: "Hybrid" },
            { value: "electric", label: "Electric" },
          ].map(({ value, label }) => (
            <Checkbox
              key={value}
              label={label}
              checked={selectedEngine === value}
              onChange={(e) => {
                if (e.target.checked) {
                  updateFilter("engine", value);
                } else {
                  updateFilter("engine", "");
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== ГРУПА 3: TRANSMISSION ===== */}
      <div className={`${styles.field} ${styles.fieldLast}`}>
        <h4 className={styles.subtitle}>Transmission</h4>
        <div className={styles.checkboxGroup}>
          {[
            { value: "automatic", label: "Automatic" },
            { value: "manual", label: "Manual" },
          ].map(({ value, label }) => (
            <Checkbox
              key={value}
              label={label}
              checked={selectedTransmission === value}
              onChange={(e) => {
                if (e.target.checked) {
                  updateFilter("transmission", value);
                } else {
                  updateFilter("transmission", "");
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== КНОПКИ ===== */}
      <div className={styles.buttonGroup}>
        <button
          className={styles.searchButton}
          onClick={() => {
            if (location.trim()) {
              updateFilter("location", location);
            }
          }}
        >
          Search
        </button>
        <button className={styles.clearButton} onClick={clearFilters}>
          <span className={styles.closeicon}>
            <CloseIcon size={12} />
          </span>
          Clear Filters
        </button>
      </div>
    </div>
  );
}
