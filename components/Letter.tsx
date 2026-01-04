
import React, { useEffect, useState, useRef } from 'react';

interface LetterProps {
  onFinish: () => void;
}

export const Letter: React.FC<LetterProps> = ({ onFinish }) => {
  const [visibleText, setVisibleText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fullText = `Dear PurBasha,

Happy 24th Birthday to my sweetest and most beautiful sister! 🖤 Just like your favourite black colour, you have an elegant and confident charm. Your love for sweet foods totally matches your sweet and caring nature, and your smile could make anyone’s day brighter.

I still remember our fun times in Weelife — your hilarious nickname “Cat Fun Time” always makes me smile even now. You’ve always been that one person who turns every moment into laughter and joy. And of course, how can I forget cat from Mumbai? She’s part of our little story too, adding her own spark to our fun and memories.

And honestly, the way you call your mom “maneyeeeeee” is still one of the funniest and cutest things ever! Every time you say it, I can’t help but laugh — it’s just so you.

You’re more than just my sister — you’re my best friend, my gaming buddy, and my favorite person to share everything with. I wish you a very happy 24th birthday, a long and joyful life, and a future filled with everything you love. May you always stay this cute, kind, and full of laughter.

With all my love,  
MUHAMMED JANIS A V`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
      // Auto-scroll to bottom as text types
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-[40px] p-6 md:p-10 border-8 border-kawaii-pink plush-shadow relative h-[80vh] flex flex-col overflow-hidden">
        {/* Decorative elements behind text */}
        <div className="absolute top-4 right-4 text-4xl animate-bounce-slow opacity-10 pointer-events-none">🖤</div>
        <div className="absolute bottom-20 left-4 text-4xl animate-float opacity-10 pointer-events-none">💖</div>

        {/* Scrollable Letter Body */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto pr-2 custom-letter-scrollbar mb-4"
        >
          <div className="font-script font-bold text-2xl md:text-3xl text-gray-800 leading-[1.6] whitespace-pre-wrap py-4">
            {visibleText}
          </div>
        </div>

        {/* Footer/Button Area */}
        <div className={`transition-all duration-700 transform ${isDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <div className="text-center py-2">
            <button 
              onClick={onFinish}
              className="bg-kawaii-blush text-white px-10 py-3 rounded-full font-kawaii text-xl hover:scale-110 active:scale-95 transition-all plush-shadow border-4 border-white"
            >
              See the Trio! 🐾
            </button>
          </div>
        </div>

        {/* Decorative Tape effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-kawaii-pink/40 backdrop-blur-sm -rotate-1 border-dashed border-2 border-white z-20"></div>

        <style>{`
          .custom-letter-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-letter-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 182, 193, 0.1);
            border-radius: 10px;
          }
          .custom-letter-scrollbar::-webkit-scrollbar-thumb {
            background: #FFB6C1;
            border-radius: 10px;
            border: 2px solid white;
          }
          .custom-letter-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #FFB6C1 rgba(255, 182, 193, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
};
