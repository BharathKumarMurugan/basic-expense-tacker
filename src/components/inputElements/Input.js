import React from "react";

function Input({
  name,
  type,
  className,
  placeholder,
  value,
  onChange,
  min,
  max,
  step,
  required,
  disabled,
}) {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        required={required}
        disabled={disabled}
      />
    </>
  );
}

export default Input;
