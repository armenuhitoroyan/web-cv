import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className, color }) => (
  <button
    style={{ color: color, borderColor: color, padding: "10px" }}
    className={className}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
