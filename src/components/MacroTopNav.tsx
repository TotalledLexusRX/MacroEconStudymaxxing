import React from 'react';
import { BookOpen, Calculator, Award, Layers, FileText } from 'lucide-react';

interface MacroTopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartExam: () => void;
  isExamActive: boolean;
}

export const MacroTopNav: React.FC<MacroTopNavProps> = ({
  activeTab,
  setActiveTab,
  onStartExam,
  isExamActive
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('exam')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors whitespace-nowrap">
                Macroeconomics
              </span>
              <span className="hidden sm:inline text-xs text-stone-500 ml-2">
                · Chapters 7, 8 & 10 Suite
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              onClick={() => setActiveTab('exam')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'exam'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Mock Midterm Exam
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'practice'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Practice Problem Sets
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'calculator'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Macro Calculator Lab
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'flashcards'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Key Terms & Formulas
            </button>
            <button
              onClick={() => setActiveTab('summaries')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'summaries'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Chapter Guides
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onStartExam}
              className="px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-amber-700 focus:outline-none whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isExamActive ? 'Resume Midterm' : 'Start Midterm Simulation'}
            </button>
          </div>
        </div>

        {/* Mobile secondary nav */}
        <div className="flex md:hidden overflow-x-auto gap-4 py-2 text-xs font-medium text-stone-600 border-t border-stone-200">
          <button
            onClick={() => setActiveTab('exam')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'exam' ? 'text-amber-900 font-bold' : ''}`}
          >
            Midterm Exam
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'practice' ? 'text-amber-900 font-bold' : ''}`}
          >
            Practice Sets
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'calculator' ? 'text-amber-900 font-bold' : ''}`}
          >
            Calc Lab
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'flashcards' ? 'text-amber-900 font-bold' : ''}`}
          >
            Terms & Formulas
          </button>
          <button
            onClick={() => setActiveTab('summaries')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'summaries' ? 'text-amber-900 font-bold' : ''}`}
          >
            Chapter Guides
          </button>
        </div>
      </div>
    </header>
  );
};
