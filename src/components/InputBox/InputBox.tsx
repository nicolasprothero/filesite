import React, { ChangeEvent } from 'react';
import './InputBox.css';

interface InputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputProps> = ({ value, id, placeholder, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(onChange) {
      onChange(event);
    }
  }

  return (
    <input className="inputBox" value={value} id={id} placeholder={placeholder} onChange={handleChange}>
    </input>
  );
};

export default InputBox;