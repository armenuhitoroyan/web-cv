import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  color?: string;
  width?: string;
  height?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  color,
  width,
  height,
}) => (
  <button
    style={{ color, borderColor: color, padding: "10px", width, height }}
    className={className}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
