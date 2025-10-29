import React from 'react';

const MantenimientoButton: React.FC<{ onClick?: () => void; disabled?: boolean; }> = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="bg-orange-500 text-white font-bold py-2 px-4 rounded w-full transition hover:bg-orange-600 disabled:bg-gray-500"
    >
      Mantenimiento
    </button>
  );
};

export default MantenimientoButton;
