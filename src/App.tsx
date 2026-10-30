import React, { useState } from 'react';
import { MacroTopNav } from './components/MacroTopNav';
import { MacroMockMidterm } from './components/MacroMockMidterm';
import { MacroPracticeQuiz } from './components/MacroPracticeQuiz';
import { MacroCalculatorLab } from './components/MacroCalculatorLab';
import { MacroFlashcards } from './components/MacroFlashcards';
import { MacroSummaries } from './components/MacroSummaries';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('exam');
  const [isExamActive, setIsExamActive] = useState<boolean>(false);

  const handleStartExamFromNav = () => {
    setActiveTab('exam');
    setIsExamActive(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation */}
      <MacroTopNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onStartExam={handleStartExamFromNav}
        isExamActive={isExamActive}
      />

      {/* Main Content Stage */}
      <main className="flex-1">
        {activeTab === 'exam' && <MacroMockMidterm />}
        {activeTab === 'practice' && <MacroPracticeQuiz />}
        {activeTab === 'calculator' && <MacroCalculatorLab />}
        {activeTab === 'flashcards' && <MacroFlashcards />}
        {activeTab === 'summaries' && <MacroSummaries />}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 mt-12 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-900 font-serif">Macroeconomics Study Suite</span>
            <span aria-hidden="true">·</span>
            <span>Krugman, Wells, Au, Parkinson (3rd Canadian Edition)</span>
            <span aria-hidden="true">·</span>
            <span>Chapters 7, 8 & 10</span>
          </div>

          <div className="text-stone-400">
            Interactive problem sets, formula calculators, and exam simulation with browser autosaving.
          </div>
        </div>
      </footer>
    </div>
  );
}
