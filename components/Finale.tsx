
import React, { useEffect, useState } from 'react';

interface FinaleProps {
  onReset: () => void;
}

export const Finale: React.FC<FinaleProps> = ({ onReset }) => {
  const [showFireworks, setShowFireworks] = useState(true);

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 relative overflow-hidden bg-kawaii-cream/20">
      {/* Pink & Gold Fireworks Burst Layer */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute animate-firework rounded-full"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
                backgroundColor: i % 2 === 0 ? '#FF69B4' : '#FFD700',
                animationDelay: `${Math.random() * 3}s`,
                width: '4px',
                height: '4px'
              }}
            />
          ))}
        </div>
      )}

      <div className="z-10 text-center mb-6">
        <h1 className="font-kawaii text-3xl md:text-5xl text-kawaii-blush drop-shadow-md animate-bounce">
          Our Kawaii Trio Playing! 🐾✨
        </h1>
        <p className="font-kawaii text-kawaii-pink text-sm mt-2">Purbasha + Cat + Janis = Besties 4ever! 🐼</p>
      </div>

      {/* PLAYGROUND AREA */}
      <div className="relative w-full max-w-[350px] aspect-square flex items-center justify-center z-10 mb-8">
        {/* Soft Playground Circle */}
        <div className="absolute inset-0 bg-white/40 rounded-full border-4 border-dashed border-kawaii-pink/30 animate-spin-slow" style={{ animationDuration: '20s' }}></div>

        {/* Purbasha Panda (Center Top) */}
        <div className="absolute top-0 flex flex-col items-center animate-play-hop" style={{ animationDelay: '0s' }}>
          <div className="relative w-28 h-28 bg-white rounded-full plush-shadow border-4 border-kawaii-blush flex items-center justify-center overflow-visible group">
            <span className="text-6xl">🐼</span>
            <div className="absolute -top-4 -right-2 text-3xl animate-pulse">🎀</div>
            <div className="absolute -bottom-2 bg-kawaii-blush text-white text-[10px] px-2 rounded-full font-kawaii whitespace-nowrap">Purbasha 💖</div>
          </div>
        </div>

        {/* Janis Panda (Bottom Left) */}
        <div className="absolute bottom-4 left-0 flex flex-col items-center animate-play-hop" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-24 h-24 bg-white rounded-full plush-shadow border-4 border-blue-300 flex items-center justify-center group">
            <span className="text-5xl grayscale-[0.2]">🐼</span>
            <div className="absolute -top-2 -left-2 text-2xl animate-bounce-slow">💙</div>
            <div className="absolute -bottom-2 bg-blue-400 text-white text-[10px] px-2 rounded-full font-kawaii whitespace-nowrap">Janis 🧢</div>
          </div>
        </div>

        {/* Cat Panda (Bottom Right) */}
        <div className="absolute bottom-4 right-0 flex flex-col items-center animate-play-hop" style={{ animationDelay: '0.6s' }}>
          <div className="relative w-24 h-24 bg-white rounded-full plush-shadow border-4 border-kawaii-gold flex items-center justify-center group">
            <span className="text-5xl grayscale-[0.3]">🐼</span>
            <div className="absolute -top-2 -right-2 text-2xl animate-float">🐾</div>
            <div className="absolute -bottom-2 bg-kawaii-gold text-white text-[10px] px-2 rounded-full font-kawaii whitespace-nowrap">Cat 🐱</div>
          </div>
        </div>

        {/* Traveling Hearts Animation (The "Playing") */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute animate-pass-1 text-3xl">💖</div>
          <div className="absolute animate-pass-2 text-3xl">🖤</div>
          <div className="absolute animate-pass-3 text-3xl">💙</div>
          <div className="absolute animate-pass-4 text-3xl">✨</div>
        </div>
      </div>

      <div className="z-20 flex flex-col gap-4 items-center">
        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-3xl border-2 border-kawaii-pink text-center max-w-[280px]">
          <p className="font-body font-bold text-kawaii-blush text-sm italic">
            "Late night gaming, silly fights, and the best memories! We love you Didi! 🎂"
          </p>
        </div>

        <button 
          onClick={onReset}
          className="bg-kawaii-blush text-white px-10 py-4 rounded-full font-kawaii text-xl hover:scale-110 active:scale-90 transition-all plush-shadow border-4 border-white"
        >
          Replay Magic! 🌸
        </button>
      </div>

      <style>{`
        @keyframes firework {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(30); opacity: 0; }
        }
        .animate-firework {
          animation: firework 2.5s infinite ease-out;
        }

        @keyframes play-hop {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        .animate-play-hop {
          animation: play-hop 2s infinite ease-in-out;
        }

        /* Heart Passing Animations */
        @keyframes pass-1 {
          0% { top: 10%; left: 50%; opacity: 0; }
          10% { opacity: 1; }
          40% { top: 70%; left: 20%; }
          50% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pass-2 {
          0% { opacity: 0; }
          30% { top: 70%; left: 20%; opacity: 0; }
          40% { opacity: 1; }
          70% { top: 70%; left: 80%; }
          80% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pass-3 {
          0% { opacity: 0; }
          60% { top: 70%; left: 80%; opacity: 0; }
          70% { opacity: 1; }
          90% { top: 10%; left: 50%; }
          100% { opacity: 0; }
        }
        @keyframes pass-4 {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.5); opacity: 0; }
        }

        .animate-pass-1 { animation: pass-1 4s infinite linear; }
        .animate-pass-2 { animation: pass-2 4s infinite linear; }
        .animate-pass-3 { animation: pass-3 4s infinite linear; }
        .animate-pass-4 { 
          animation: pass-4 3s infinite ease-in-out;
          top: 45%; left: 45%;
        }
      `}</style>
    </div>
  );
};
