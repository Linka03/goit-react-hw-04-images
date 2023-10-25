// Button.jsx
import React from 'react';

const Button = ({ onClick, disabled, className, children }) => (
  <div className="centerContainer">
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  </div>
);

export default Button;
