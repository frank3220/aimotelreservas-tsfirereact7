
import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, User } from "firebase/auth";
import { getDatabase, ref, set, push, get, onValue, query, orderByChild, equalTo, update } from "firebase/database";
import { auth, firestore } from "./firebase";
import { collection, getDocs } from "firebase/firestore"; 
import MegaAgent from "./components/MegaAgent";
import NequiPaymentFlow from "./components/NequiPaymentFlow";
import MisReservas from "./components/MisReservas";
import DisponibleButton from "./components/botonestados/DisponibleButton";
import PendienteButton from "./components/botonestados/PendienteButton";
import ReservadaButton from "./components/botonestados/ReservadaButton";
import IngresadaButton from "./components/botonestados/IngresadaButton";
import EliminadaButton from "./components/botonestados/EliminadaButton";
import MantenimientoButton from "./components/botonestados/MantenimientoButton";

// Función para actualizar la UI y guardar en la base de datos
const updateUI = (user: User | null) => {
    if (user) {
        const db = getDatabase();
        const userRef = ref(db, 'users/' + user.uid)
        const userData = {
            displayName: user.displayName,
            email: user.email,
            role: "customer"
        };
        set(userRef, userData);
    }
};

function Modal({ children, show, onClose }: { children: React.ReactNode, show: boolean, onClose: () => void }) {
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
                >✕</button>
                {children}
            </div>
        </div>
    );
}

function Header({ user, onLogin, onLogout, onShowReservations }: { user: User | null, onLogin: () => void, onLogout: () => void, onShowReservations: () => void }) {
    return (
        <header className="px-6 py-4 flex justify-between items-center bg-black/70 backdrop-blur text-white sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <span className="text-2xl font-black tracking-tight">IAMOTELES</span>
                <span className="text-sm bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text font-bold">Motel La Luna</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="hidden md:block text-sm text-white/70">20 habitaciones • Desde $20.000</span>
                {user ? (
                    <>
                        <button onClick={onShowReservations} className="bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold text-sm">
                            Mis Reservas
                        </button>
                        <button onClick={onLogout} className="bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold text-sm">
                            Logout
                        </button>
                    </>
                ) : (
                    <button onClick={onLogin} className="bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold">
                        Login
                    </button>
                )}
            </div>
        </header>
    );
}

function RoomCard({ room, onReserve, isOccupied }: { room: any, onReserve: (room: any) => void, isOccupied: boolean }) {
    return (
        <div className="bg-white/10 rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:scale-105 transition w-full max-w-xs flex flex-col">
            <div className="aspect-video bg-black relative">
                <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: '180px' }}
                />
                <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md">${new Intl.NumberFormat().format(room.price)}</span>
                <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {room.desc.includes("2 Horas") ? "2 horas" : "1 hora"}
                </span>
            </div>
            <div className="flex-1 flex flex-col gap-1 px-5 py-4">
                <h3 className="font-bold text-lg text-white drop-shadow-sm mb-2">{room.name}</h3>
                <p className="text-white/70 text-sm flex-1">{room.desc}</p>
                <DisponibleButton onClick={() => onReserve(room)} disabled={isOccupied} />
            </div>
        </div>
    );
}

function LoginModal({ show, onClose, onGoogleLogin }: { show: boolean, onClose: () => void, onGoogleLogin: () => void }) {
    return (
        <Modal show={show} onClose={onClose}>
            <h2 className="text-2xl font-bold mb-6 text-white">Iniciar sesión</h2>
            <button onClick={onGoogleLogin} className="mb-3 w-full bg-white text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                <span>🔐</span> Continuar con Google
            </button>
            <button className="mb-3 w-full bg-gray-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                <span>✉️</span> Continuar con Email
            </button>
            <button className="w-full bg-black/90 border border-white/30 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                <span>📷</span> Reconocimiento facial (beta)
            </button>
        </Modal>
    );
}

function ReservationModal({ show, onClose, room, onPayment }: { show: boolean, onClose: () => void, room: any, onPayment: (details: any) => void }) {
    const [dateTime, setDateTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Efectivo');
    const [isChecking, setIsChecking] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockMessage, setBlockMessage] = useState('');
    const [isDateTimeInvalid, setIsDateTimeInvalid] = useState(false);

    useEffect(() => {
        if (!show) {
            setDateTime('');
            setIsBlocked(false);
            setBlockMessage('');
            setIsDateTimeInvalid(false);
        }
    }, [show]);

    useEffect(() => {
        if (dateTime) {
            const selectedDate = new Date(dateTime);
            const now = new Date();
            if (selectedDate < now) {
                setIsDateTimeInvalid(true);
                setIsBlocked(false); 
                setBlockMessage("No puedes reservar en una fecha u hora pasada.");
            } else {
                setIsDateTimeInvalid(false);
                if(room) checkAvailability();
            }
        } else {
            setIsBlocked(false);
            setIsDateTimeInvalid(false);
        }
    }, [dateTime, room]);

    const checkAvailability = async () => {
        if (!room || !dateTime) return;
        setIsChecking(true);
        setIsBlocked(false);
        setBlockMessage('');

        const db = getDatabase();
        const selectedStartTime = new Date(dateTime).getTime();
        const duration = room.desc.includes("2 Horas") ? 2 : 1;
        const selectedEndTime = selectedStartTime + duration * 60 * 60 * 1000;

        const roomReservationsRef = ref(db, `roomReservations/${room.id}`);
        const snapshot = await get(roomReservationsRef);
        
        if (snapshot.exists()) {
            const reservationIds = Object.keys(snapshot.val());
            const reservationPromises = reservationIds.map(id => get(ref(db, `reservations/${id}`)));
            const reservationSnapshots = await Promise.all(reservationPromises);

            for (const resSnap of reservationSnapshots) {
                if (resSnap.exists()) {
                    const res = resSnap.val();
                    if (res.status !== 'cancelled' && selectedStartTime < res.endTime && selectedEndTime > res.startTime) {
                        setIsBlocked(true);
                        setBlockMessage('Lo sentimos, esta hora ya está reservada.');
                        break;
                    }
                }
            }
        }

        setIsChecking(false);
    };

    const handlePayment = () => {
        if (!dateTime) {
            alert("Por favor, selecciona una fecha y hora.");
            return;
        }
        onPayment({
            room,
            dateTime,
            paymentMethod,
            amount: parseFloat(room.price) / 2
        });
    };

    if (!room) return null;

    return (
        <Modal show={show} onClose={onClose}>
            <h2 className="text-xl font-bold mb-3 text-white">Reservar {room.name}</h2>
            <img src={room.img} alt={room.name} className="rounded-xl mb-4 w-full aspect-video object-cover object-center" />
            <div className="bg-white/10 text-white/90 p-3 rounded-xl mb-2">Precio: <b>${new Intl.NumberFormat().format(room.price)}</b> por <b>{room.desc.includes("2 Horas") ? "2 horas" : "1 hora"}</b></div>
            <div className="mb-4">
                <h4 className="text-white/70 text-sm mb-2">Amenidades incluidas:</h4>
                <div className="flex flex-wrap gap-1">
                    {room.desc.split(",").map((amenity: string, index: number) => (
                        <span key={index} className="bg-pink-600/20 text-pink-200 text-xs px-2 py-1 rounded-full">{amenity.trim()}</span>
                    ))}
                </div>
            </div>
            <div className="mb-5">
                <label className="block text-white/70 text-sm mb-2">Fecha y hora</label>
                <input type="datetime-local" className="w-full rounded-lg border bg-black/40 text-white border-white/20 px-2 py-1" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                {isChecking && <p className="text-white/70 text-sm mt-2">Verificando disponibilidad...</p>}
                {!isChecking && dateTime && (
                    <p className={`text-sm mt-2 ${isBlocked || isDateTimeInvalid ? 'text-red-500' : 'text-green-500'}`}>
                        {isBlocked || isDateTimeInvalid ? blockMessage : '¡Hora disponible!'}
                    </p>
                )}
            </div>
            <div className="mb-5">
                <label className="block text-white/70 text-sm mb-2">Método de pago (50% anticipo)</label>
                <select className="w-full rounded-lg border bg-black/40 text-white border-white/20 px-2 py-1" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option>Efectivo</option>
                    <option>Nequi</option>
                </select>
            </div>
            <button
                className={`w-full py-2 rounded-xl font-bold transition shadow-xl ${isBlocked || isChecking || !dateTime || isDateTimeInvalid ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700'}`}
                onClick={handlePayment}
                disabled={isBlocked || isChecking || !dateTime || isDateTimeInvalid}
            >
                {isBlocked || isDateTimeInvalid ? (isDateTimeInvalid ? "Fecha inválida" : "Reservada") : `Proceder al pago ($${new Intl.NumberFormat().format(parseFloat(room.price) / 2)})`}
            </button>
        </Modal>
    );
}

function PaymentModal({ show, onClose, reservationDetails, onConfirm, onNequiConfirm }: { show: boolean, onClose: () => void, reservationDetails: any, onConfirm: () => void, onNequiConfirm: () => void }) {
    if (!reservationDetails) return null;

    const isNequiPayment = reservationDetails.paymentMethod === 'Nequi';

    return (
        <Modal show={show} onClose={onClose}>
            <h2 className="text-xl font-bold mb-3 text-white">Pagar Reserva</h2>
            <div className="mb-4 text-white">Reservando <b>{reservationDetails.room.name}</b> por <b>${new Intl.NumberFormat().format(reservationDetails.room.price)}</b> ({reservationDetails.room.desc.includes("2 Horas") ? "2 horas" : "1 hora"})</div>
            
            {isNequiPayment ? (
                <NequiPaymentFlow 
                    amountToPay={reservationDetails.amount} 
                    onConfirm={onNequiConfirm}
                    reservationDetails={{ roomId: reservationDetails.room.id }}
                />
            ) : (
                <>
                    <div className="bg-white/10 text-white/90 p-3 rounded-xl mb-2">
                        Fecha y hora: {new Date(reservationDetails.dateTime).toLocaleString()}<br />
                        Método de pago: {reservationDetails.paymentMethod}<br />
                        Monto a pagar: ${new Intl.NumberFormat().format(reservationDetails.amount)}
                    </div>
                    <button className="w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-xl font-extrabold text-white text-lg mt-3 transition shadow-lg" onClick={onConfirm}>
                        Pagar ahora (demo)
                    </button>
                </>
            )}
        </Modal>
    );
}

export default function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showReserve, setShowReserve] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [showUserReservations, setShowUserReservations] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<any | null>(null);
    const [reservationDetails, setReservationDetails] = useState<any | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [rooms, setRooms] = useState<any[]>([]);
    const [occupiedRooms, setOccupiedRooms] = useState(new Set());
    const [userReservations, setUserReservations] = useState<any[]>([]);

    useEffect(() => {
        const db = getDatabase();
        const reservationsRef = ref(db, 'reservations');

        const unsubscribe = onValue(reservationsRef, (snapshot) => {
            const allReservations: { [key: string]: any } = snapshot.val() || {};
            
            const checkOccupancy = () => {
                const now = Date.now();
                const currentlyOccupied = new Set();
                const thirtyMinutes = 30 * 60 * 1000;

                for (const reservationId in allReservations) {
                    const reservation = allReservations[reservationId];
                    if (reservation.status !== 'cancelled') {
                        const startTimeWithBuffer = reservation.startTime - thirtyMinutes;

                        if (now >= startTimeWithBuffer && now < reservation.endTime) {
                            currentlyOccupied.add(reservation.roomId);
                        }
                    }
                }
                setOccupiedRooms(currentlyOccupied);
            };

            checkOccupancy(); 
            const intervalId = setInterval(checkOccupancy, 60000); 

            return () => clearInterval(intervalId);
        });

        return () => unsubscribe();
    }, []);


    useEffect(() => {
        const fetchRooms = async () => {
            const roomsCollection = collection(firestore, "rooms");
            const roomsSnapshot = await getDocs(roomsCollection);

            const roomsList = roomsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const sortedRooms = roomsList.sort((a, b) => {
                return parseInt(a.id, 10) - parseInt(b.id, 10);
            });

            setRooms(sortedRooms);
        };

        fetchRooms();
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                updateUI(currentUser);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setShowLogin(false);
            })
            .catch((error) => {
                console.error("Error logging in:", error);
            });
    };

    const handleLogout = () => {
        signOut(auth);
    };

    const handleReservation = (details: any) => {
        setReservationDetails(details);
        setShowReserve(false);
        setShowPayment(true);
    };

    const handleShowUserReservations = async () => {
        if (!user) return;
        const db = getDatabase();
        const userReservationsRef = ref(db, `userReservations/${user.uid}`);

        try {
            const snapshot = await get(userReservationsRef);
            if (snapshot.exists()) {
                const reservationIds = Object.keys(snapshot.val());
                const reservationPromises = reservationIds.map(id => get(ref(db, `reservations/${id}`)));
                const reservationSnapshots = await Promise.all(reservationPromises);
                
                const reservationsData = reservationSnapshots.map((snap, index) => ({ 
                    id: reservationIds[index], 
                    ...snap.val() 
                }));
                
                setUserReservations(reservationsData);
            } else {
                setUserReservations([]);
            }
        } catch (error) {
            console.error("Error fetching user reservations:", error);
            setUserReservations([]);
        }
        setShowUserReservations(true);
    };

    const handleNequiPaymentConfirmation = () => {
        console.log("Nequi confirmation received.");
        setShowPayment(false); 
    };

    const createReservation = async () => {
        if (!user || !reservationDetails) return;
        
        const db = getDatabase();
        const entryDate = new Date(reservationDetails.dateTime);
        const duration = reservationDetails.room.desc.includes("2 Horas") ? 2 : 1;
        const exitDate = new Date(entryDate.getTime() + duration * 60 * 60 * 1000);
    
        const newReservationRef = push(ref(db, 'reservations'));
        const reservationId = newReservationRef.key;

        if (!reservationId) {
            console.error("Failed to create reservation ID");
            return;
        }

        const reservationData = {
            userId: user.uid,
            roomId: reservationDetails.room.id,
            startTime: entryDate.getTime(),
            endTime: exitDate.getTime(),
            status: 'pending',
            payment: {
                method: reservationDetails.paymentMethod,
                totalAmount: reservationDetails.room.price,
                paidAmount: reservationDetails.room.price / 2,
            },
            createdAt: Date.now()
        };

        const updates: { [key: string]: any } = {};
        updates[`/reservations/${reservationId}`] = reservationData;
        updates[`/userReservations/${user.uid}/${reservationId}`] = true;
        updates[`/roomReservations/${reservationDetails.room.id}/${reservationId}`] = true;

        try {
            await update(ref(db), updates);
            console.log("Reservation created successfully with pending status!");
            setShowPayment(false); // Close payment modal after creating the reservation

        } catch (error) {
            console.error("Error creating reservation:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-fuchsia-950">
            <Header user={user} onLogin={() => setShowLogin(true)} onLogout={handleLogout} onShowReservations={handleShowUserReservations} />

            <main className="mx-auto py-10 px-4 max-w-7xl flex flex-col items-center gap-7">
                <div className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white text-center py-4 px-6 rounded-2xl shadow-xl mb-4 animate-pulse">
                    <h2 className="text-xl md:text-2xl font-bold">
                        ¡Reserva online y ahorra hasta 40% en tu próxima experiencia!
                    </h2>
                    <p className="text-sm md:text-base opacity-90 mt-1">
                        Promociones especiales disponibles • Disponible 24/7
                    </p>
                </div>

                <h1 className="w-full text-center mb-6 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
                    Motel La Luna - 20 Habitaciones Premium Disponibles
                </h1>
                <div className="w-full text-center mb-8">
                    <p className="text-white/80 text-lg mb-2">Desde $20.000 por hora • Todas con TV 32", A/C, Mini Bar</p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm text-pink-200">
                        <span className="bg-pink-600/20 px-3 py-1 rounded-full">🛏️ Jacuzzi disponible</span>
                        <span className="bg-purple-600/20 px-3 py-1 rounded-full">🪑 Silla erótica</span>
                        <span className="bg-fuchsia-600/20 px-3 py-1 rounded-full">🚗 Parqueadero privado</span>
                        <span className="bg-violet-600/20 px-3 py-1 rounded-full">⭐ Servicio premium 24/7</span>
                    </div>
                </div>
                <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            room={room}
                            isOccupied={occupiedRooms.has(room.id)}
                            onReserve={(r) => {
                                if (!user) {
                                    setShowLogin(true);
                                    return;
                                }
                                setSelectedRoom(r);
                                setShowReserve(true);
                            }}
                        />
                    ))
                    }
                </section>
            </main>

            <footer className="py-6 flex flex-col items-center justify-center text-zinc-200 bg-black/30 mt-8">
                <span className="mb-2 font-bold">IAMOTELES © 2025</span>
                <span className="text-xs">Sistema Inteligente • Potenciado por MICELIO.DIGITAL</span>
            </footer>

            {/* Modals */}
            <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onGoogleLogin={handleGoogleSignIn} />
            <ReservationModal show={showReserve} onClose={() => setShowReserve(false)} room={selectedRoom} onPayment={handleReservation} />
            <PaymentModal 
                show={showPayment} 
                onClose={() => setShowPayment(false)} 
                reservationDetails={reservationDetails}
                onConfirm={createReservation} // Directly call createReservation for cash
                onNequiConfirm={createReservation} // Also call createReservation for Nequi
            />
            <MisReservas 
                show={showUserReservations} 
                onClose={() => setShowUserReservations(false)} 
                reservations={userReservations} 
                rooms={rooms} 
            />

            {/* MEGA Agent */}
            <MegaAgent
                rooms={rooms}
                onReserve={(roomId) => {
                    const room = rooms.find(r => r.id === roomId);
                    if (room) {
                        if (!user) {
                            setShowLogin(true);
                            return;
                        }
                        setSelectedRoom(room);
                        setShowReserve(true);
                    }
                }}
            />
        </div>
    );
}