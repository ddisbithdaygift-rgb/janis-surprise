
import React, { useState } from 'react';

interface Memory {
  id: number;
  label: string;
  rotation: string;
  sticker: string;
  caption: string;
  isBW: boolean;
  imgSrc: string;
  fallbackSrc: string;
}

interface MemoriesProps {
  onNext: () => void;
}

export const Memories: React.FC<MemoriesProps> = ({ onNext }) => {
  const memories: Memory[] = [
    { 
      id: 1, 
      label: "Maneeeyyeee Fun 💖", 
      rotation: "-rotate-2",
      sticker: "💖",
      caption: "So Maneeeyyeee! 🥺",
      isBW: false,
      imgSrc: "picture/purbasha1.jpg",
      fallbackSrc: "https://images.unsplash.com/photo-1518837697464-af0af3b2d3fa?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      id: 2, 
      label: "Pretty Pink 🌸", 
      rotation: "rotate-1",
      sticker: "✨",
      caption: "Assam Princess 🌿",
      isBW: false,
      imgSrc: "picture/purbasha2.jpg",
      fallbackSrc: "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      id: 3, 
      label: "Black & White 🖤", 
      rotation: "-rotate-1",
      sticker: "🖤",
      caption: "Fave Color: Black! ✨",
      isBW: true,
      imgSrc: "picture/purbasha3.jpg",
      fallbackSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-start p-6 bg-kawaii-cream/40 overflow-y-auto custom-scrollbar pt-20 pb-32">
      <div className="text-center mb-10">
        <h2 className="font-kawaii text-3xl md:text-5xl text-kawaii-blush drop-shadow-sm animate-bounce">
          Precious Memories 💖
        </h2>
        <p className="font-body font-bold text-kawaii-pink mt-2 italic">Looking so pretty in every frame! ✨</p>
      </div>

      <div className="flex flex-col gap-16 w-full max-w-md mb-12">
        {memories.map((mem) => {
          const [imgSrc, setImgSrc] = useState(mem.imgSrc);
          const [isFallback, setIsFallback] = useState(false);

          const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            if (!isFallback) {
              setImgSrc(mem.fallbackSrc);
              setIsFallback(true);
              // Suppress log unless needed for debugging
            }
          };

          return (
            <div 
              key={mem.id}
              className={`flex flex-col items-center transform ${mem.rotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-500 cursor-pointer group w-full`}
            >
              <div className="bg-white p-4 pb-20 rounded shadow-2xl plush-shadow border-2 border-gray-100 relative w-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-10 bg-white/70 backdrop-blur-sm rotate-1 border-dashed border-2 border-kawaii-pink/20 z-20"></div>
                
                <div className={`w-full aspect-[3/4] overflow-hidden rounded-sm relative bg-gray-100 flex items-center justify-center ${mem.isBW ? 'grayscale brightness-110 contrast-110' : ''}`}>
                  <img 
                    src={imgSrc} 
                    alt={mem.label} 
                    className="w-full h-full object-cover block"
                    onError={handleError}
                  />
                  
                  {isFallback && (
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-full text-[8px] font-kawaii text-kawaii-blush pointer-events-none">
                      Awaiting Photo... 🧸
                    </div>
                  )}
                  
                  <div className="absolute inset-0 pointer-events-none p-4 overflow-hidden">
                    <div className="flex justify-around">
                      <span className="text-3xl animate-pulse delay-75">💕</span>
                      <span className="text-2xl animate-bounce">💗</span>
                      <span className="text-3xl animate-pulse delay-150">💕</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="font-script text-4xl text-gray-800 drop-shadow-sm">{mem.caption}</span>
                </div>

                <div className="absolute -top-6 -right-6 text-6xl animate-bounce-slow drop-shadow-md z-30">{mem.sticker}</div>
                <div className="absolute -bottom-6 -left-6 text-5xl animate-float z-30">🎀</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-20 text-center mt-8">
        <button 
          onClick={onNext}
          className="bg-kawaii-blush text-white px-14 py-5 rounded-full font-kawaii text-2xl hover:scale-110 active:scale-95 transition-all plush-shadow border-4 border-white flex items-center gap-4 group"
        >
          <span>Magic Quiz! 🎀</span>
          <span className="group-hover:translate-x-2 transition-transform">➡️</span>
        </button>
      </div>
    </div>
  );
};
