
import React, { useEffect, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const [items, setItems] = useState<{ id: number; left: string; size: string; delay: string; type: 'heart' | 'star' | 'petal' | 'cloud' }[]>([]);

  useEffect(() => {
    const newItems = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 10}px`,
      delay: `${Math.random() * 15}s`,
      type: (['heart', 'star', 'petal', 'cloud'] as const)[Math.floor(Math.random() * 4)],
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute top-[-50px] animate-fall"
          style={{
            left: item.left,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: item.delay,
            fontSize: item.size,
          }}
        >
          {item.type === 'heart' && <span className="text-pink-300 opacity-60">💖</span>}
          {item.type === 'star' && <span className="text-kawaii-gold opacity-60">✨</span>}
          {item.type === 'petal' && <span className="text-pink-100 opacity-60">🌸</span>}
          {item.type === 'cloud' && <span className="text-white text-4xl opacity-40">☁️</span>}
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};
