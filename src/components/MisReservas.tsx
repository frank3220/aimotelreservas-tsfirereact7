import React from 'react';

function MisReservas({ show, onClose, reservations, rooms }: { show: boolean, onClose: () => void, reservations: any[], rooms: any[] }) {
    
    const getRoomById = (roomId: string) => {
        return rooms.find(r => r.id === roomId);
    };

    const getStatusInfo = (status: string) => {
        switch (status) {
            case 'pending':
                return { text: 'Pendiente', color: 'text-yellow-400' };
            case 'confirmed':
                return { text: 'Confirmada', color: 'text-green-400' };
            case 'checked_in':
                return { text: 'Ingresada', color: 'text-blue-400' };
            case 'cancelled':
                return { text: 'Cancelada', color: 'text-red-500' };
            default:
                return { text: status, color: 'text-white' };
        }
    }

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[99] bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <div className="
                bg-gradient-to-br from-zinc-900/90 to-purple-900/90
                border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md w-[90vw] animate-fadeIn
                relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:bg-pink-600 rounded-full p-2 text-lg"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-6 text-white">Mis Reservas</h2>
                {reservations.length > 0 ? (
                    <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-4 text-sm">
                        {reservations.map((res) => {
                            const statusInfo = getStatusInfo(res.status);
                            const room = getRoomById(res.roomId);
                            return (
                                <li key={res.id} className="bg-white/10 p-4 rounded-lg border border-white/20 text-white flex items-center gap-4">
                                    {room && <img src={room.img} alt={room.name} className="w-20 h-20 rounded-md object-cover"/>}
                                    <div>
                                        <p className="font-bold text-lg text-pink-300 mb-2">{room ? room.name : `Habitación ${res.roomId}`}</p>
                                        <p><span className="text-white/70 font-semibold">Fecha:</span> {new Date(res.startTime).toLocaleDateString('es-CO')}</p>
                                        <p><span className="text-white/70 font-semibold">Hora:</span> {new Date(res.startTime).toLocaleTimeString('es-CO')}</p>
                                        <p><span className="text-white/70 font-semibold">Estado:</span> <span className={`${statusInfo.color} font-bold`}>{statusInfo.text}</span></p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-white/70">No tienes reservas activas.</p>
                )}
            </div>
        </div>
    );
}

export default MisReservas;
