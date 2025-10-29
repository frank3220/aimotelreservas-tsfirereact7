import React from 'react';

const IngresadaButton: React.FC<{ onClick?: () => void; disabled?: boolean; }> = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-blue-600 disabled:bg-gray-500"
    >
      Ingresada
    </button>
  );
};

export default IngresadaButton;
