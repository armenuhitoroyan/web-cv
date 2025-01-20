import React from "react";

type Option = {
  value: string;
  label: string;
};

type SelecOptiontProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Option[];
  className?: string;
  backgroundColor?: string;
};

const SelectOption: React.FC<SelecOptiontProps> = ({
  name,
  value,
  onChange,
  options = [],
  className,
  backgroundColor,
}) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className={`${className} col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
    style={{ backgroundImage: backgroundColor }}
  >
    {options.map((option) => (
      <option
        key={option.value}
        value={option.value}
        className="r-option border-gray-300"
      >
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectOption;
