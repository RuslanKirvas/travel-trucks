"use client";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({
  label,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label className={`${styles.checkbox} ${className || ""}`}>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}
