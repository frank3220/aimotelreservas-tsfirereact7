import React from 'react';

const ReservadaButton: React.FC<{ onClick?: () => void; disabled?: boolean; }> = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="bg-purple-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-purple-600 disabled:bg-gray-500"
    >
      Reservada
    </button>
  );
};

export default ReservadaButton;
