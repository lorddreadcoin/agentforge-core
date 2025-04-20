import React from "react";

interface InputEraserProps {
  onSubmit: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const InputEraser: React.FC<InputEraserProps> = ({ onSubmit, disabled = false, className = "" }) => {
  const [value, setValue] = React.useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() && !disabled) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className={`w-2/3 p-4 text-lg rounded shadow bg-neutral-900 text-white outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 ${className}`}
      placeholder="Type anything..."
      autoFocus
      disabled={disabled}
    />
  );
};

export default InputEraser;
