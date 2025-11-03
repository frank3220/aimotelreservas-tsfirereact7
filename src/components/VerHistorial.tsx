import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { dbUsers } from '../firebase_usuarios';

interface VerHistorialProps {
  show: boolean;
  onClose: () => void;
}

interface Reservation {
  id: string;
  userId: string;
  roomId: string;
  status: string;
}

const VerHistorial: React.FC<VerHistorialProps> = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      setError(null); // Resetea el error cada vez que el modal se muestra
      const db = dbUsers;
      const reservationsRef = ref(db, 'reservations');
      
      const unsubscribe = onValue(reservationsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const loadedReservations: Reservation[] = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setReservations(loadedReservations);
        } else {
          setReservations([]);
        }
      }, (error) => {
        console.error("Error al leer datos de Firebase: ", error);
        setError("No se pudo acceder a los datos. Revisa los permisos de la base de datos o la conexión.");
        setReservations([]);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Historial de Reservas</h3>
          <div className="mt-4 px-7 py-3 min-h-[100px]">
            {error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            ) : reservations.length > 0 ? (
              <ul className="space-y-3">
                {reservations.map(reservation => (
                  <li key={reservation.id} className="text-sm text-gray-700 text-left p-2 bg-gray-100 rounded">
                    <b>ID Reserva:</b> {reservation.id}<br/>
                    <b>ID Usuario:</b> {reservation.userId}<br/>
                    <b>Habitación:</b> {reservation.roomId}<br/>
                    <b>Estado:</b> {reservation.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                No hay historial de reservas para mostrar.
              </p>
            )}
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerHistorial;