import React from 'react';

  const Input = ({ ...props }) => {
    return (
      <input type="text" {...props} className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
    );
  };

  export default Input;
