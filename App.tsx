
import React, { useState } from 'react';
import { Hero } from './components/Hero.tsx';
import { Quiz } from './components/Quiz.tsx';
import { Letter } from './components/Letter.tsx';
import { Finale } from './components/Finale.tsx';
import { BackgroundEffects } from './components/BackgroundEffects.tsx';
import { SparkleCursor } from './components/SparkleCursor.tsx';

enum Page {
  HERO = 'hero',
  QUIZ = 'quiz',
  LETTER = 'letter',
  FINALE = 'finale'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HERO);

  const goToQuiz = () => {
    setCurrentPage(Page.QUIZ);
  };

  const goToLetter = () => {
    setCurrentPage(Page.LETTER);
  };

  const goToFinale = () => {
    setCurrentPage(Page.FINALE);
  };

  const reset = () => {
    setCurrentPage(Page.HERO);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-body bg-kawaii-cream">
      <BackgroundEffects />
      <SparkleCursor />

      <main className="relative z-10 w-full h-screen">
        {currentPage === Page.HERO && <Hero onStart={goToQuiz} />}
        {currentPage === Page.QUIZ && <Quiz onComplete={goToLetter} />}
        {currentPage === Page.LETTER && <Letter onFinish={goToFinale} />}
        {currentPage === Page.FINALE && <Finale onReset={reset} />}
      </main>

      {/* Persistent global footer */}
      <footer className="fixed bottom-4 left-0 right-0 text-center pointer-events-none z-50">
        <p className="text-kawaii-blush font-kawaii text-[10px] md:text-xs drop-shadow-sm opacity-60">
          Made w/ pink love by Janis AV 💖 Purbasha's 24th
        </p>
      </footer>
    </div>
  );
};

export default App;
