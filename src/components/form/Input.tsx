import React from "react";

type InputProps = {
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) => (
  <input // w-full flex-col flex justify-center md:flex-row
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-2 rounded-full border ${
      error ? "border-red-500" : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
  />
);

export default Input;
