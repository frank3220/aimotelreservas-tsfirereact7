
import React, { useState, useEffect } from 'react';
import { ref, onValue, update } from "firebase/database";
import { dbUsers } from '../firebase_usuarios';

interface HistorialReservasModalProps {
  show: boolean;
  onClose: () => void;
  roomId: string | null;
  rooms: any[];
}

interface Reservation {
  id: string;
  userId: string;
  roomId: string;
  status: 'pending' | 'reservada' | 'ingresada' | 'finalizada' | 'liberada';
  startTime: number;
  paymentMethod?: string;
  amount?: number;
  [key: string]: any;
}

const statusConfig = {
    pending: { label: 'Pendiente', color: 'text-yellow-400 border-yellow-400', buttonClass: 'bg-pink-600' },
    reservada: { label: 'Reservada', color: 'text-pink-400 border-pink-400', buttonClass: 'bg-green-600' },
    ingresada: { label: 'Ingresada', color: 'text-green-400 border-green-400', buttonClass: 'bg-blue-600' },
    finalizada: { label: 'Finalizada', color: 'text-blue-400 border-blue-400', buttonClass: 'bg-gray-500' },
    liberada: { label: 'Liberada', color: 'text-gray-400 border-gray-400', buttonClass: '' },
};

const HistorialReservasModal: React.FC<HistorialReservasModalProps> = ({ show, onClose, roomId, rooms }) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [roomName, setRoomName] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (show && roomId) {
      setError(null);
      const currentRoom = rooms.find(r => r.id === roomId);
      setRoomName(currentRoom ? currentRoom.name : `Habitación ${roomId}`);

      const reservationsRef = ref(dbUsers, 'reservations');
      
      const unsubscribe = onValue(reservationsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const allReservations: Reservation[] = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          const filteredReservations = allReservations.filter(res => res.roomId === roomId).sort((a, b) => b.startTime - a.startTime);
          setReservations(filteredReservations);
        } else {
          setReservations([]);
        }
      }, (err) => {
        console.error("Error al leer datos de Firebase: ", err);
        setError("No se pudo acceder a los datos.");
        setReservations([]);
      });

      return () => unsubscribe();
    } else {
      setReservations([]);
    }
  }, [show, roomId, rooms]);

  const handleStatusChange = async (reservationId: string, newStatus: string) => {
    const reservationRef = ref(dbUsers, `reservations/${reservationId}`);
    try {
      await update(reservationRef, { status: newStatus });
    } catch (error) {
      console.error("Error al actualizar estado: ", error);
      setError("No se pudo actualizar la reserva.");
    }
  };

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center backdrop-blur-md" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-900 to-purple-900/70 border border-white/20 rounded-2xl shadow-2xl p-6 max-w-4xl w-[95vw] animate-fadeIn relative max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-red-600 rounded-full p-2 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-2xl font-bold mb-2 text-white">Historial de Reservas</h2>
        <h3 className="text-lg font-semibold mb-6 text-pink-300">{roomName}</h3>

        <div className="overflow-y-auto pr-2 -mr-4 flex-grow custom-scrollbar">
        {error ? (
             <div className="flex flex-col items-center justify-center h-full text-center bg-red-900/50 p-4 rounded-lg">
                <p className="text-white/80 text-lg font-semibold">Error</p>
                <p className="text-white/60 text-sm mt-1">{error}</p>
            </div>
          ) : reservations.length > 0 ? (
            <ul className="space-y-3">
              {reservations.map((res) => {
                const date = new Date(res.startTime);
                const formattedDate = date.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
                const formattedTime = date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: true });
                const currentStatus = statusConfig[res.status] || { label: res.status, color: 'text-gray-400 border-gray-400' };

                return (
                  <li key={res.id} className="bg-black/30 rounded-xl border border-white/10 overflow-hidden transition-all duration-300">
                    <div className="grid grid-cols-[1fr,auto,auto] items-center gap-x-4 p-4">
                      
                      <div className="text-xs text-white/70">
                        <p className="font-semibold text-white text-sm">Fecha y Hora</p>
                        <p>{formattedDate} - {formattedTime}</p>
                      </div>

                      <div className="text-center">
                          <p className="text-xs text-white/70 mb-1">Cambiar Estado</p>
                          <div className="flex items-center gap-1 bg-black/30 p-1 rounded-md border border-white/10 shadow-inner">
                            <button onClick={() => handleStatusChange(res.id, 'reservada')} className={`px-2 py-1 text-xs rounded transition-colors ${res.status === 'pending' ? 'bg-pink-600 hover:bg-pink-500 text-white' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`} disabled={res.status !== 'pending'}>Reservar</button>
                            <button onClick={() => handleStatusChange(res.id, 'ingresada')} className={`px-2 py-1 text-xs rounded transition-colors ${res.status === 'reservada' ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`} disabled={res.status !== 'reservada'}>Ingresar</button>
                            <button onClick={() => handleStatusChange(res.id, 'finalizada')} className={`px-2 py-1 text-xs rounded transition-colors ${res.status === 'ingresada' ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`} disabled={res.status !== 'ingresada'}>Finalizar</button>
                            <button onClick={() => handleStatusChange(res.id, 'liberada')} className={`px-2 py-1 text-xs rounded transition-colors ${res.status === 'finalizada' ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`} disabled={res.status !== 'finalizada'}>Liberar</button>
                          </div>
                      </div>

                      <button onClick={() => toggleExpand(res.id)} className={`flex items-center gap-4 text-center p-2 border-l border-white/10 ml-2 pl-6`}>
                        <span className={`px-3 py-2 text-sm font-bold rounded-lg border-2 whitespace-nowrap ${currentStatus.color}`}>{currentStatus.label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-purple-400 transition-transform duration-300 ${expanded === res.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </div>
                    
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded === res.id ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="bg-black/20 p-4 border-t border-purple-800/30 text-sm text-white/80">
                          <p><strong className="text-white/90">Firma de pago:</strong> {res.paymentMethod || 'No especificado'}</p>
                          <p><strong className="text-white/90">Valor:</strong> {res.amount ? `$${res.amount.toLocaleString('es-CO')}` : 'No especificado'}</p>
                          <p className="mt-2"><strong className="text-white/90">ID Usuario:</strong> {res.userId}</p>
                          <p><strong className="text-white/90">ID Reserva:</strong> {res.id}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : !error && (
            <div className="flex flex-col items-center justify-center h-full text-center">
                 <svg className="w-16 h-16 text-purple-400/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <p className="text-white/70 text-lg">No hay historial de reservas</p>
                <p className="text-white/50">Aún no se han creado reservas para esta habitación.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistorialReservasModal;
