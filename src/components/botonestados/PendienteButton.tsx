import React from 'react';

const PendienteButton: React.FC<{ onClick?: () => void; disabled?: boolean; }> = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="bg-yellow-500 text-black font-bold py-2 px-4 rounded w-full transition hover:bg-yellow-600 disabled:bg-gray-500"
    >
      Pendiente
    </button>
  );
};

export default PendienteButton;
