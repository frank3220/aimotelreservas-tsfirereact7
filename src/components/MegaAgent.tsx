import React, { useState, useEffect, useCallback } from 'react';

const MegaAgent = ({ rooms, onReserve }: { rooms: any[], onReserve: (roomId: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isResponding, setIsResponding] = useState(false);
    const [view, setView] = useState('main'); // main, rooms, promotions, assistance

    const MEGA_RESPONSES = {
        greeting: [
            "¡Hola! Soy MEGA, tu asistente. Te ayudo a reservar, pagar, conocer promociones o resolver cualquier duda, de manera rápida y segura. ¿En qué puedo ayudarte hoy para hacer tu experiencia inolvidable?",
            "¡Qué rico verte por acá! Soy MEGA y estoy aquí para ayudarte con todo lo que necesites. ¿Buscas una habitación especial?",
            "¡Bienvenido a IAMOTELES! Soy MEGA, tu guía personal. Te ayudo a encontrar la habitación perfecta para tu momento especial."
        ],
        rooms: {
            prompt: "¡Claro! Tenemos varias opciones para que tu momento sea inolvidable. ¿Qué tipo de habitación buscas?",
            luxury: "Te recomiendo la Habitación 11 con jacuzzi, barra de pole dance y 3 espacios diferentes por $40.000, ¡perfecta para una experiencia única!",
            budget: "Para algo más económico, tengo habitaciones desde $20.000 por hora con todas las comodidades básicas.",
            romantic: "Para una experiencia romántica, la Habitación 16 con columpio erótico por $35.000 es ideal, amor.",
            premium: "La Habitación UCI por $47.000 es nuestra suite más exclusiva, perfecta para ocasiones especiales."
        },
        promotions: [
            "¡Aprovecha! Tenemos hasta 40% de descuento reservando online. Los mejores precios están aquí.",
            "Las promociones nocturnas son increíbles, mi amor. Reserva ahora y ahorra en grande.",
            "¿Sabías que reservando por aquí tienes precios especiales? ¡No te pierdas estas ofertas!"
        ],
        assistance: [
            "Claro que sí, mi cielo. Te ayudo con todo lo que necesites para que tu experiencia sea perfecta.",
            "¡Por supuesto! Estoy aquí para hacer todo más fácil para ti.",
            "¡Con mucho gusto! Dime qué necesitas y te ayudo al toque."
        ]
    };

    const displayMessage = useCallback((msg: string) => {
        setIsResponding(true);
        setMessage('');
        setTimeout(() => {
            setMessage(msg);
            setIsResponding(false);
        }, 500);
    }, []);

    const getRandomResponse = (category: 'greeting' | 'promotions' | 'assistance') => {
        const responses = MEGA_RESPONSES[category];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    useEffect(() => {
        if (isOpen) {
            const greeting = getRandomResponse('greeting');
            displayMessage(greeting);
            setView('main');
        } else {
            setMessage('');
        }
    }, [isOpen, displayMessage]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleAction = (action: string, detail?: string) => {
        switch (action) {
            case 'promotions':
                setView('promotions');
                displayMessage(getRandomResponse('promotions'));
                break;
            case 'assistance':
                setView('assistance');
                displayMessage(getRandomResponse('assistance'));
                break;
            case 'rooms':
                setView('rooms');
                displayMessage(MEGA_RESPONSES.rooms.prompt);
                break;
            case 'room_detail':
                if (detail && detail in MEGA_RESPONSES.rooms) {
                    type RoomKey = keyof typeof MEGA_RESPONSES.rooms;
                    displayMessage(MEGA_RESPONSES.rooms[detail as RoomKey]);
                }
                break;
            case 'back':
                setView('main');
                displayMessage(getRandomResponse('greeting'));
                break;
        }
    };
    
    const renderButtons = () => {
        switch (view) {
            case 'rooms':
                return (
                    <>
                        <button onClick={() => handleAction('room_detail', 'luxury')} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20">Lujo</button>
                        <button onClick={() => handleAction('room_detail', 'budget')} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20">Económica</button>
                        <button onClick={() => handleAction('room_detail', 'romantic')} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20">Romántica</button>
                        <button onClick={() => handleAction('room_detail', 'premium')} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20">Premium</button>
                        <button onClick={() => handleAction('back')} className="bg-pink-600/50 text-white text-xs px-3 py-1 rounded-full hover:bg-pink-600/80">‹ Volver</button>
                    </>
                );
            case 'promotions':
            case 'assistance':
                 return <button onClick={() => handleAction('back')} className="bg-pink-600/50 text-white text-xs px-3 py-1 rounded-full hover:bg-pink-600/80">‹ Volver</button>;
            default: // main
                return (
                    <>
                        <button onClick={() => handleAction('promotions')} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20">Promociones</button>
                        <button onClick={() => handleAction('rooms')} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20">Habitaciones</button>
                        <button onClick={() => handleAction('assistance')} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full hover:bg-white/20">Necesito ayuda</button>
                    </>
                );
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-[100]">
            {isOpen && (
                <div className="bg-gradient-to-br from-zinc-800 to-purple-900 border border-white/20 p-5 rounded-2xl shadow-2xl w-80 mb-4 relative animate-slideInUp">
                    <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0">M</div>
                        <div className="flex-1 min-h-[48px]">
                            <p className="font-bold text-white">MEGA</p>
                            <div className="text-white/90 mt-1 text-sm leading-relaxed">
                                {isResponding ? (
                                    <div className="flex items-center gap-2 pt-2">
                                        <span className="h-2 w-2 bg-pink-400 rounded-full animate-pulse"></span>
                                        <span className="h-2 w-2 bg-pink-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                                        <span className="h-2 w-2 bg-pink-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                                    </div>
                                ) : (
                                    message
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                        {renderButtons()}
                    </div>
                </div>
            )}
            <button 
                onClick={handleToggle}
                className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition-transform"
            >
                {isOpen ? '✕' : 'M'}
            </button>
        </div>
    );
}

export default MegaAgent;
