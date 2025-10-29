import React from 'react';

const EliminadaButton: React.FC<{ onClick?: () => void; disabled?: boolean; }> = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="bg-gray-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-gray-600 disabled:bg-gray-500"
    >
      Eliminada
    </button>
  );
};

export default EliminadaButton;
