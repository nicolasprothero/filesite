import React, { MouseEvent } from 'react';
import './Button.css';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, id, label }) => {
  return (
    <button className="my-button" id={id} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;