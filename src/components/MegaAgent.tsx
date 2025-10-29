import React, { useState, useEffect } from 'react';

interface MegaAgentProps {
  onReserve?: (roomId: number) => void;
  onClose?: () => void;
  rooms?: any[];
}

const MEGA_RESPONSES = {
  greeting: [
    "¡Hola! Soy MEGA, tu asistente. Te ayudo a reservar, pagar, conocer promociones o resolver cualquier duda, de manera rápida y segura. ¿En qué puedo ayudarte hoy para hacer tu experiencia inolvidable?",
    "¡Qué rico verte por acá! Soy MEGA y estoy aquí para ayudarte con todo lo que necesites. ¿Buscas una habitación especial?",
    "¡Bienvenido a IAMOTELES! Soy MEGA, tu guía personal. Te ayudo a encontrar la habitación perfecta para tu momento especial."
  ],
  rooms: {
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

const KEYWORDS = {
  luxury: ['lujo', 'premium', 'especial', 'jacuzzi', 'pole'],
  budget: ['económico', 'barato', 'precio bajo', 'ahorro'],
  romantic: ['romántico', 'pareja', 'columpio', 'íntimo'],
  rooms: ['habitación', 'cuarto', 'suite', 'disponible'],
  promotions: ['descuento', 'promoción', 'oferta', 'precio', 'ahorro'],
  help: ['ayuda', 'ayudar', 'información', 'duda']
};

export default function MegaAgent({ onReserve, onClose, rooms = [] }: MegaAgentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'mega'}>>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMegaMessage(MEGA_RESPONSES.greeting[0]);
      }, 500);
    }
  }, [isOpen]);

  const addMegaMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text, sender: 'mega' }]);
      setIsTyping(false);
    }, 1000);
  };

  const detectIntent = (text: string): string => {
    const lowerText = text.toLowerCase();

    if (KEYWORDS.luxury.some(word => lowerText.includes(word))) {
      return MEGA_RESPONSES.rooms.luxury;
    }
    if (KEYWORDS.budget.some(word => lowerText.includes(word))) {
      return MEGA_RESPONSES.rooms.budget;
    }
    if (KEYWORDS.romantic.some(word => lowerText.includes(word))) {
      return MEGA_RESPONSES.rooms.romantic;
    }
    if (KEYWORDS.promotions.some(word => lowerText.includes(word))) {
      return MEGA_RESPONSES.promotions[Math.floor(Math.random() * MEGA_RESPONSES.promotions.length)];
    }
    if (KEYWORDS.rooms.some(word => lowerText.includes(word))) {
      return "Tenemos 20 habitaciones disponibles desde $20.000. ¿Te interesa algo en particular? ¿Romántico, con jacuzzi, o algo más económico?";
    }

    return MEGA_RESPONSES.assistance[Math.floor(Math.random() * MEGA_RESPONSES.assistance.length)];
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { text: inputText, sender: 'user' }]);
    const response = detectIntent(inputText);
    setInputText('');

    setTimeout(() => addMegaMessage(response), 500);
  };

  const handleQuickAction = (action: string) => {
    let response = '';
    switch (action) {
      case 'promociones':
        response = "¡Las mejores promociones están aquí! Hasta 40% de descuento reservando online. ¿Te muestro las habitaciones disponibles?";
        break;
      case 'habitaciones':
        response = "Tenemos 20 habitaciones increíbles. Desde $20.000 hasta $47.000. ¿Buscas algo romántico, con jacuzzi, o prefieres ver todas las opciones?";
        break;
      case 'reservar':
        response = "¡Perfecto! Te voy a mostrar nuestras habitaciones disponibles. Solo haz click en 'Reservar' en la que más te guste.";
        break;
      case 'precios':
        response = "Nuestros precios van desde $20.000 por hora hasta $47.000 para la suite UCI. ¡Y con descuentos online ahorras hasta 40%!";
        break;
    }
    addMegaMessage(response);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl animate-bounce hover:animate-none transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="hidden md:block font-bold">MEGA</span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-96 bg-gradient-to-br from-zinc-900/95 to-purple-900/95 backdrop-blur-xl border border-pink-500/30 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm">🤖</span>
          </div>
          <div>
            <h3 className="font-bold text-white">MEGA Agent</h3>
            <p className="text-xs text-white/80">Asistente IAMOTELES</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            onClose?.();
          }}
          className="text-white/80 hover:text-white text-xl"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl text-sm ${
                message.sender === 'user'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white/10 text-white border border-white/20'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-white border border-white/20 p-3 rounded-xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="p-2 border-t border-white/10">
        <div className="grid grid-cols-2 gap-2 mb-2">
          {[
            { text: '💎 Promociones', action: 'promociones' },
            { text: '🏨 Habitaciones', action: 'habitaciones' },
            { text: '💰 Precios', action: 'precios' },
            { text: '📅 Reservar', action: 'reservar' }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(item.action)}
              className="text-xs bg-white/5 hover:bg-white/10 text-white p-2 rounded-lg border border-white/20 transition-all"
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe tu pregunta..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 text-sm focus:outline-none focus:border-pink-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            📤
          </button>
        </div>
      </div>
    </div>
  );
}
