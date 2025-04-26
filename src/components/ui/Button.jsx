import React from 'react';
import './style.css';

function Button({ children, className, variant = 'primary', ...props }) {
  return (
    <button className={`btn ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
