import React from "react";

interface InputProps {
  inputId: string;
  inputNamePlaceHolder: string;
  onChange: (value: string) => void;
}

const Input = ({ inputId, inputNamePlaceHolder, onChange }: InputProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        id={inputId}
        className="w-full bg-transparent border border-borderColor rounded p-3 pt-5 pb-2 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] peer"
        required
        onChange={(e) => onChange(e.target.value)}
      />
      <label
        htmlFor={inputId}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-focus:top-3 peer-valid:top-3  peer-focus:text-xs peer-valid:text-xs peer-focus:text-[#1d9bf0] peer-valid:text-[#65686d]"
      >
        {inputNamePlaceHolder}
      </label>
    </div>
  );
};

export default Input;
