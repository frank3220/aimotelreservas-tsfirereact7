
import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, User } from "firebase/auth";
import { getDatabase, ref, set, push, get, onValue, update } from "firebase/database";
import { auth, firestore } from "./firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import MegaAgent from "./components/MegaAgent";
import NequiPaymentFlow from "./components/NequiPaymentFlow";
import MisReservas from "./components/MisReservas";
import HistorialReservasModal from "./components/HistorialReservasModal";
import DisponibleButton from "./components/botonestados/DisponibleButton";

const checkAdminRole = (user: User | null) => {
    return user?.email === "admin@iamoteles.com"; 
};

const updateUserRoleInDB = (user: User | null) => {
    if (user) {
        const db = getDatabase();
        const userRef = ref(db, 'users/' + user.uid);
        
        get(userRef).then((snapshot) => {
            if (!snapshot.exists() || !snapshot.val().role) {
                const userData = {
                    displayName: user.displayName,
                    email: user.email,
                    role: checkAdminRole(user) ? "admin" : "customer"
                };
                set(userRef, userData);
            }
        });
    }
};

function Modal({ children, show, onClose }: { children: React.ReactNode, show: boolean, onClose: () => void }) {
    if (!show) return null;
    return (
        <div className="fixed inset-0 z-[99] bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-gradient-to-br from-zinc-900/90 to-purple-900/90 border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md w-[90vw] animate-fadeIn relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:bg-pink-600 rounded-full p-2 text-lg">✕</button>
                {children}
            </div>
        </div>
    );
}

function Header({ user, onLogin, onLogout }: { user: User | null, onLogin: () => void, onLogout: () => void }) {
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
                        <button onClick={onLogout} className="bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold text-sm">Logout</button>
                    </>
                ) : (
                    <button onClick={onLogin} className="bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-700 px-5 py-2 rounded-xl font-bold">Login</button>
                )}
            </div>
        </header>
    );
}

function RoomCard({ room, onReserve, onAdminOpen, isOccupied }: { room: any, onReserve: (room: any) => void, onAdminOpen: (roomId: string) => void, isOccupied: boolean }) {
    return (
        <div className="bg-white/10 rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:scale-105 transition w-full max-w-xs flex flex-col">
            <div className="aspect-video bg-black relative">
                <img src={room.img} alt={room.name} className="w-full h-full object-cover object-center" style={{ minHeight: '180px' }} />
                <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md">${new Intl.NumberFormat().format(room.price)}</span>
                <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium">{room.desc.includes("2 Horas") ? "2 horas" : "1 hora"}</span>
            </div>
            <div className="flex-1 flex flex-col gap-3 px-5 py-4">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-white drop-shadow-sm">{room.name}</h3>
                    <button onClick={() => onAdminOpen(room.id)} className="p-2" title="Ver historial de reservas">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70 hover:text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </button>
                </div>
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
            <button onClick={onGoogleLogin} className="mb-3 w-full bg-white text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2"><span>🔐</span> Continuar con Google</button>
            <button className="mb-3 w-full bg-gray-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"><span>✉️</span> Continuar con Email</button>
            <button className="w-full bg-black/90 border border-white/30 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"><span>📷</span> Reconocimiento facial (beta)</button>
        </Modal>
    );
}

function ReservationModal({ show, onClose, room, onPayment }: { show: boolean, onClose: () => void, room: any, onPayment: (details: any) => void }) {
    const [dateTime, setDateTime] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockMessage, setBlockMessage] = useState('');

    return (
        <Modal show={show} onClose={onClose}>
             <h2 className="text-xl font-bold mb-3 text-white">Reservar {room?.name}</h2>
        </Modal>
    );
}

export default function App() {
    const [user, setUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [rooms, setRooms] = useState<any[]>([]);
    const [showLogin, setShowLogin] = useState(false);
    const [showReserve, setShowReserve] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<any | null>(null);
    const [showAdminModal, setShowAdminModal] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
    const [showPayment, setShowPayment] = useState(false);
    const [showUserReservations, setShowUserReservations] = useState(false);
    const [reservationDetails, setReservationDetails] = useState<any | null>(null);
    const [userReservations, setUserReservations] = useState<any[]>([]);
    const [occupiedRooms, setOccupiedRooms] = useState(new Set());

    useEffect(() => {
        const fetchRoomsAndImage = async () => {
            const roomsCollection = collection(firestore, "rooms");
            const roomsSnapshot = await getDocs(roomsCollection);
            const roomsList = roomsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const sortedRooms = roomsList.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
            setRooms(sortedRooms);
        };
        fetchRoomsAndImage();
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                updateUserRoleInDB(currentUser);
                const userRef = ref(getDatabase(), `users/${currentUser.uid}`);
                const snapshot = await get(userRef);
                const isAdminUser = snapshot.exists() && snapshot.val().role === 'admin';
                setIsAdmin(isAdminUser);
            } else {
                setIsAdmin(false);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const db = getDatabase();
        const reservationsRef = ref(db, 'reservations');
        const unsubscribe = onValue(reservationsRef, (snapshot) => {
            const allReservations = snapshot.val() || {};
            const now = Date.now();
            const currentlyOccupied = new Set();
            const thirtyMinutes = 30 * 60 * 1000;
            for (const reservationId in allReservations) {
                const r = allReservations[reservationId];
                if (r.status !== 'cancelled' && now >= (r.startTime - thirtyMinutes) && now < r.endTime) {
                    currentlyOccupied.add(r.roomId);
                }
            }
            setOccupiedRooms(currentlyOccupied);
        });
        return () => unsubscribe();
    }, []);

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(() => setShowLogin(false)).catch(console.error);
    };

    const handleLogout = () => signOut(auth);

    const handleAdminOpen = (roomId: string) => {
        setSelectedRoomId(roomId);
        setShowAdminModal(true);
    };

    const handleOpenReserveModal = (room: any) => {
        if (!user) {
            setShowLogin(true);
            return;
        }
        setSelectedRoom(room);
        setShowReserve(true);
    };

    const handleReservation = (details: any) => {
        setReservationDetails(details);
        setShowReserve(false);
        setShowPayment(true);
    };

    const createReservation = async () => {};
    const handleShowUserReservations = async () => {
    if (!user) {
        setShowLogin(true);
        return;
    }

    const db = getDatabase();
    const reservationsRef = ref(db, 'reservations');
    const snapshot = await get(reservationsRef);
    const allReservations = snapshot.val() || {};
    
    const currentUserReservations = Object.values(allReservations).filter((res: any) => res.userId === user.uid);
    
    setUserReservations(currentUserReservations as any[]);
    setShowUserReservations(true);
};

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-fuchsia-950">
            <Header user={user} onLogin={() => setShowLogin(true)} onLogout={handleLogout} />

            <main className="mx-auto py-10 px-4 max-w-7xl">
                <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            room={room}
                            isOccupied={occupiedRooms.has(room.id)}
                            onAdminOpen={handleAdminOpen}
                            onReserve={handleOpenReserveModal}
                        />
                    ))}
                </section>
            </main>

            <footer className="py-6 flex flex-col items-center justify-center text-zinc-200 bg-black/30 mt-8">
                <span className="mb-2 font-bold">IAMOTELES © 2025</span>
                <span className="text-xs">Sistema Inteligente • Potenciado por MICELIO.DIGITAL</span>
            </footer>

            <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onGoogleLogin={handleGoogleSignIn} />
            <ReservationModal show={showReserve} onClose={() => setShowReserve(false)} room={selectedRoom} onPayment={handleReservation} />
            <MisReservas show={showUserReservations} onClose={() => setShowUserReservations(false)} reservations={userReservations} rooms={rooms} />
            <HistorialReservasModal show={showAdminModal} onClose={() => setShowAdminModal(false)} roomId={selectedRoomId} rooms={rooms} />
            <MegaAgent rooms={rooms} onReserve={(roomId) => {}}/>
        </div>
    );
}
