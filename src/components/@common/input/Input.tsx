import React from 'react';

interface InputProps {
  id: string;
  type?: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <div className="mb-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="placeholder:{color:black400} body04M w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
