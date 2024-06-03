import React, {useId} from 'react';

const AuthInput = ({
    name,
    type,
    placeholder,
    value,
    onChange,
    error = false,
    autoComplete="on"
}) => {
    const id = useId();


  return (
    <div className="my-8 content-center text-dark_text_1 space-y-1">
      <label htmlFor={name} className="text-sm font-bold tracking-wide">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        className="w-full bg-dark_bg_3 text-base py-2 px-4 rounded-lg outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default AuthInput;
