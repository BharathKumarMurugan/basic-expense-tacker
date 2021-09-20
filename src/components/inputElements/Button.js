import React from "react";

function Button({ name, type, className, value, onClick }) {
  return (
    <>
      <button
        name={name}
        type={type}
        className={className}
        value={value}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
}

export default Button;
