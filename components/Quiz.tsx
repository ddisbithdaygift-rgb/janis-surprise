
import React, { useState } from 'react';

interface QuizProps {
  onComplete: () => void;
}

const QUESTIONS = [
  {
    q: "How does Purbasha call mom? 🥰",
    options: ["Maneeeyyeee", "Mummy", "Ma", "Amma"],
    correct: 0
  },
  {
    q: "Purbasha's home state? 🌿",
    options: ["Assam", "Kerala", "Bengal", "Mumbai"],
    correct: 0
  },
  {
    q: "Purbasha turns __!",
    options: ["24", "23", "25", "26"],
    correct: 0
  },
  {
    q: "Purbasha's favorite colour is",
    options: ["red", "blue", "black", "green"],
    correct: 2
  },
  {
    q: "Our gaming trio: Purbasha + Cat + ?",
    options: ["Janis", "surajith", "vansh", "lipu"],
    correct: 0
  }
];

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<null | 'correct' | 'wrong'>(null);
  const [blackHearts, setBlackHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleAnswer = (idx: number) => {
    if (feedback) return;

    if (idx === QUESTIONS[currentIdx].correct) {
      setScore(score + 1);
      setFeedback('correct');
      // Burst black hearts! (Favorite color)
      const newHearts = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      }));
      setBlackHearts(newHearts);
      setTimeout(() => setBlackHearts([]), 1500);
    } else {
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIdx < QUESTIONS.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        onComplete();
      }
    }, 1500);
  };

  const progressPercent = ((currentIdx + 1) / QUESTIONS.length) * 100;

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-kawaii-cream/30">
      {/* Progress Bar */}
      <div className="w-full max-w-md bg-white h-6 rounded-full border-4 border-kawaii-pink mb-12 overflow-hidden plush-shadow relative">
        <div 
          className="h-full bg-kawaii-blush transition-all duration-500 flex items-center justify-end px-2"
          style={{ width: `${progressPercent}%` }}
        >
          <span className="text-white text-[10px] font-kawaii">💖</span>
        </div>
      </div>

      <div className="w-full max-w-xl bg-white rounded-[40px] p-8 border-8 border-kawaii-pink plush-shadow relative overflow-hidden">
        {/* Black Heart Explosion Container */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {blackHearts.map(h => (
            <div 
              key={h.id} 
              className="absolute text-4xl animate-burst"
              style={{
                '--tx': `${h.x}px`,
                '--ty': `${h.y}px`,
              } as any}
            >
              🖤
            </div>
          ))}
        </div>

        <h2 className="font-kawaii text-2xl text-center text-kawaii-blush mb-8 leading-snug">
          {QUESTIONS[currentIdx].q}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QUESTIONS[currentIdx].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={!!feedback}
              className={`
                p-4 rounded-3xl font-kawaii text-lg transition-all duration-300 transform active:scale-95 border-b-8
                ${feedback === null ? 'bg-kawaii-pink text-white border-pink-400 hover:scale-105 hover:-translate-y-1' : ''}
                ${feedback === 'correct' && i === QUESTIONS[currentIdx].correct ? 'bg-kawaii-blush text-white border-pink-600 scale-105' : ''}
                ${feedback === 'wrong' && i === QUESTIONS[currentIdx].correct ? 'bg-kawaii-blush text-white border-pink-600' : ''}
                ${feedback !== null && i !== QUESTIONS[currentIdx].correct ? 'opacity-50 grayscale bg-gray-200 border-gray-300' : ''}
              `}
            >
              {opt}
            </button>
          ))}
        </div>

        {feedback === 'correct' && (
          <div className="absolute top-0 left-0 w-full h-full bg-kawaii-blush/10 flex items-center justify-center pointer-events-none animate-pulse">
            <span className="font-kawaii text-5xl text-kawaii-blush drop-shadow-md">Yay! 🌸</span>
          </div>
        )}
      </div>

      <p className="mt-8 font-kawaii text-kawaii-blush animate-bounce">
        {currentIdx + 1} / {QUESTIONS.length}
      </p>

      <style>{`
        @keyframes burst {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1.5); opacity: 0; }
        }
        .animate-burst {
          animation: burst 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
