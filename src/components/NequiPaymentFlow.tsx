import React, { useState } from 'react';

interface NequiPaymentFlowProps {
  amountToPay: number;
  reservationDetails: {
    roomId: string;
  };
  onConfirm: () => void;
}

// REEMPLAZA ESTE NÚMERO CON TU LLAVE BREVE DE NEQUI
const NEQUI_PHONE_NUMBER = '0035215698';

const NequiPaymentFlow: React.FC<NequiPaymentFlowProps> = ({ amountToPay, reservationDetails, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmPayment = async () => {
    setIsLoading(true);
    // Simula una pequeña espera para dar feedback al usuario
    await new Promise(resolve => setTimeout(resolve, 1000));
    onConfirm();
    setIsConfirmed(true);
    setIsLoading(false);
  };

  if (isConfirmed) {
    return (
      <div className="text-center p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <h3 className="text-lg font-bold mb-2">¡Gracias! Hemos recibido tu confirmación.</h3>
        <p>Tu reserva está siendo verificada y recibirás una notificación.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-purple-50 rounded-lg">
      <h2 className="text-xl font-bold text-purple-800 mb-3 text-center">Paga con Nequi en 2 Pasos</h2>
      
      <div className="space-y-4 text-gray-700">
        {/* Pasos 1 y 2 */}
        <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">1</div>
            <div><p className="font-semibold">Abre tu app Nequi y elige "Envía".</p></div>
        </div>
        <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">2</div>
            <div>
                <p className="font-semibold">Envía el dinero al número.🔑 Llave Bre-be:</p>
                <div className="mt-1 p-2 bg-purple-100 border-l-4 border-purple-500 rounded-r-lg">
                    <p className="font-mono text-lg font-bold tracking-wider">{NEQUI_PHONE_NUMBER}</p>
                    <p className="text-sm">Monto: <span className="font-bold text-lg">${amountToPay.toLocaleString('es-CO')}</span></p>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-6">
        <button onClick={handleConfirmPayment} disabled={isLoading} className="w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-700 disabled:bg-gray-400 transition-colors relative">
          <span className="relative"> 
            {isLoading ? 'Confirmando...' : 'Ya Pagué, Confirmar Reserva'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default NequiPaymentFlow;
