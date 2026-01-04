
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 relative">
      {/* GLITTERY 3D TEXT - Enhanced shadow for better readability */}
      <h1 className="font-kawaii text-4xl md:text-6xl text-center mb-8 drop-shadow-[0_8px_20px_rgba(255,105,180,0.6)] animate-bounce-slow z-30">
        <span className="bg-gradient-to-r from-kawaii-blush via-kawaii-gold to-kawaii-pink bg-clip-text text-transparent filter saturate-150">
          Happy 24th Birthday<br/>Purbasha!
        </span>
        <span className="inline-block mt-2 filter drop-shadow-md">💖✨🥰</span>
      </h1>

      {/* Maneeeyyeee! bubble - increased z-index and shadow */}
      <div className="relative mb-12 z-30 transform hover:scale-110 transition-transform duration-300">
        <div className="animate-float bg-white px-6 py-3 rounded-full border-4 border-kawaii-pink plush-shadow flex items-center justify-center">
          <span className="font-kawaii text-2xl text-kawaii-blush drop-shadow-sm">Maneeeyyeee! 🥺💕</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-white border-b-4 border-r-4 border-kawaii-pink transform rotate-45 -translate-x-1/2"></div>
      </div>

      {/* Cake Container */}
      <div className="relative group cursor-pointer mb-12 z-20">
        <div className="w-48 h-48 bg-kawaii-cream rounded-full plush-shadow flex items-center justify-center border-8 border-kawaii-pink overflow-visible relative">
           <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6 z-10 filter drop-shadow-lg">
             🎂
           </div>
           {/* 24 Floating Bouncy Trail */}
           <div className="absolute -top-10 -right-5 font-kawaii text-6xl text-kawaii-blush drop-shadow-[0_4px_8px_rgba(255,105,180,0.5)] animate-pulse z-20">24</div>
        </div>
        {/* Pink Sparkles Backdrop */}
        <div className="absolute -inset-6 bg-pink-100 opacity-30 rounded-full blur-2xl group-hover:opacity-50 transition-opacity"></div>
      </div>

      {/* Start Button */}
      <button 
        onClick={onStart}
        className="group relative flex items-center justify-center z-40"
      >
        <div className="absolute -inset-6 bg-kawaii-pink opacity-0 group-hover:opacity-40 rounded-full blur-xl transition-all duration-500"></div>
        <div className="w-32 h-32 bg-kawaii-blush hover:bg-kawaii-pink rounded-full flex flex-col items-center justify-center border-4 border-white text-white plush-shadow transform hover:scale-110 hover:rotate-6 active:scale-95 transition-all duration-300 shadow-[0_10px_25px_rgba(255,105,180,0.5)]">
          <span className="font-kawaii text-xl text-center leading-tight drop-shadow-md">Start<br/>Magic!</span>
          <span className="text-3xl filter drop-shadow-sm">💖</span>
        </div>
      </button>

      {/* Decorative Floating items - added drop-shadow and ensured high contrast */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce-slow z-10 drop-shadow-[0_5px_10px_rgba(0,0,0,0.1)]" style={{ animationDelay: '0.5s' }}>🎀</div>
      <div className="absolute bottom-20 right-10 text-6xl animate-bounce-slow z-10 drop-shadow-[0_5px_10px_rgba(0,0,0,0.1)]" style={{ animationDelay: '1s' }}>🧸</div>
      <div className="absolute top-1/2 left-10 text-5xl animate-float z-10 drop-shadow-[0_5px_10px_rgba(0,0,0,0.1)]" style={{ animationDelay: '1.5s' }}>🍭</div>
      <div className="absolute bottom-10 left-20 text-5xl animate-float z-10 drop-shadow-[0_5px_10px_rgba(0,0,0,0.1)]" style={{ animationDelay: '0.2s' }}>🌸</div>
      
      {/* Extra sparkles for high-end feel */}
      <div className="absolute top-1/4 right-1/4 text-2xl animate-pulse text-kawaii-gold z-10">✨</div>
      <div className="absolute bottom-1/4 left-1/3 text-3xl animate-pulse text-kawaii-gold z-10 delay-700">✨</div>
    </div>
  );
};
