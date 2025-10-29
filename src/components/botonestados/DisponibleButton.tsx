import React from 'react';

const DisponibleButton: React.FC<{ onClick?: () => void; disabled?: boolean; }> = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="bg-green-500 text-black font-bold py-2 px-4 rounded w-full transition hover:bg-green-600 disabled:bg-gray-500"
    >
      Disponible
    </button>
  );
};

export default DisponibleButton;
