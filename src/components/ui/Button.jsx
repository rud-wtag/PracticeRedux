import React from "react";

function Button({ variant, children, className, onClick }) {
  const type = variant ? `btn-${variant}` : "";
  return (
    <button onClick={onClick} className={`btn ${type} ${className}`}>{children}</button>
  );
}

export default Button;
