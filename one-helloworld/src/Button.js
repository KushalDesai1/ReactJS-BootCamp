import React from "react";

const Button = ({ title = "default" }) => {
  return (
    <div>
      <button className="button">{title}</button>
    </div>
  );
};

export default Button;
