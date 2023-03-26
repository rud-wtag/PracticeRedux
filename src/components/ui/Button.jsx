import React from "react";

function Button({ variant, children, className }) {
  const type = variant ? `btn-${variant}` : "";
  return (
    <button className={`btn ${type} ${className}`}>{children}</button>
  );
}

export default Button;
