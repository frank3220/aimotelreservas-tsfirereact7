
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, get, update } from 'firebase/database';
import DisponibleButton from './botonestados/DisponibleButton';
import PendienteButton from './botonestados/PendienteButton';
import ReservadaButton from './botonestados/ReservadaButton';
import IngresadaButton from './botonestados/IngresadaButton';
import EliminadaButton from './botonestados/EliminadaButton';
import MantenimientoButton from './botonestados/MantenimientoButton';

// Definimos una interfaz para el objeto de reserva para mayor claridad
interface Reservation {
    id: string;
    startTime: number;
    endTime: number;
    status: 'pending' | 'confirmed' | 'checked_in' | 'cancelled' | 'maintenance';
    [key: string]: any; // Para otras propiedades
}

// Mapeo de estados a información de UI (texto y color)
const statusConfig = {
    pending: { text: 'Pendiente', color: 'bg-purple-600', button: PendienteButton },
    confirmed: { text: 'Reservada', color: 'bg-red-600', button: ReservadaButton },
    checked_in: { text: 'Ingresada', color: 'bg-orange-500', button: IngresadaButton },
    cancelled: { text: 'Eliminada', color: 'bg-gray-600', button: EliminadaButton },
    maintenance: { text: 'Mantenimiento', color: 'bg-blue-600', button: MantenimientoButton },
    available: { text: 'Disponible', color: 'bg-green-500', button: DisponibleButton },
};


function HistorialReservasModal({ show, onClose, roomId, rooms }: { show: boolean, onClose: () => void, roomId: string | null, rooms: any[] }) {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (!show || !roomId) {
            setReservations([]);
            return;
        }

        // Obtener el nombre de la habitación
        const room = rooms.find(r => r.id === roomId);
        setRoomName(room ? room.name : `Habitación ${roomId}`);

        const db = getDatabase();
        const roomReservationsRef = ref(db, `roomReservations/${roomId}`);

        // Escuchar cambios en las reservas de la habitación
        const unsubscribe = onValue(roomReservationsRef, async (snapshot) => {
            if (snapshot.exists()) {
                const reservationIds = Object.keys(snapshot.val());
                const reservationPromises = reservationIds.map(id => get(ref(db, `reservations/${id}`)));
                const reservationSnapshots = await Promise.all(reservationPromises);

                const reservationsData = reservationSnapshots
                    .map((snap, index) => ({ id: reservationIds[index], ...snap.val() } as Reservation))
                    .sort((a, b) => b.startTime - a.startTime); // Ordenar por fecha, más recientes primero
                
                setReservations(reservationsData);
            } else {
                setReservations([]);
            }
        });

        return () => unsubscribe();

    }, [show, roomId, rooms]);

    const handleChangeState = async (reservation: Reservation, newState: Reservation['status']) => {
        const db = getDatabase();
        const reservationRef = ref(db, `reservations/${reservation.id}`);

        try {
            // 1. Copiar a reservas-admin antes de actualizar
            if (newState === 'confirmed') {
                const adminCopyRef = ref(db, `reservas-admin/${reservation.id}`);
                await update(adminCopyRef, { ...reservation, status: newState, updatedBy: 'admin' });
            }
            
            // 2. Actualizar el estado de la reserva original
            await update(reservationRef, { status: newState });

            console.log(`Estado de la reserva ${reservation.id} cambiado a ${newState}`);
            // La UI se actualizará automáticamente gracias al listener en tiempo real (onValue)

        } catch (error) {
            console.error("Error al cambiar el estado de la reserva:", error);
            alert("Hubo un error al actualizar la reserva. Revisa la consola para más detalles.");
        }
    };
    
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center backdrop-blur-md">
            <div className="bg-gradient-to-br from-gray-900 to-purple-900/70 border border-white/20 rounded-2xl shadow-2xl p-6 max-w-2xl w-[95vw] animate-fadeIn relative max-h-[80vh] flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:bg-red-600 rounded-full p-2 text-xl z-10"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-4 text-white">Historial de Reservas</h2>
                <h3 className="text-lg font-semibold mb-6 text-pink-300">{roomName}</h3>

                <div className="overflow-y-auto pr-4 flex-grow">
                    {reservations.length > 0 ? (
                        <ul className="space-y-4 text-sm">
                            {reservations.map((res) => {
                                const statusInfo = statusConfig[res.status] || { text: res.status, color: 'bg-gray-500' };
                                const date = new Date(res.startTime);

                                return (
                                    <li key={res.id} className="bg-black/40 p-4 rounded-lg border border-white/10 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className='flex-1'>
                                            <p className="font-bold text-base">
                                                {date.toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                            <p className='text-white/70'>
                                                {date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                            <span className={`mt-2 inline-block px-3 py-1 text-xs font-bold rounded-full ${statusInfo.color}`}>
                                                {statusInfo.text}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2 justify-start md:justify-end">
                                            {/* Lógica para mostrar botones según el estado actual */}
                                            {res.status === 'pending' && (
                                                <ReservadaButton onClick={() => handleChangeState(res, 'confirmed')} />
                                            )}
                                            {res.status === 'confirmed' && (
                                                <IngresadaButton onClick={() => handleChangeState(res, 'checked_in')} />
                                            )}
                                             {res.status !== 'cancelled' && (
                                                <EliminadaButton onClick={() => handleChangeState(res, 'cancelled')} />
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p className="text-center text-white/70 py-8">No hay historial de reservas para esta habitación.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HistorialReservasModal;
