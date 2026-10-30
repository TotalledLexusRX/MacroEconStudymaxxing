import React from 'react';
import { BookOpen, Award, Sparkles } from 'lucide-react';

interface TopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartExam: () => void;
  isExamActive: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  setActiveTab,
  onStartExam,
  isExamActive
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element Brand wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('exam')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors whitespace-nowrap">
                INDG 1220
              </span>
              <span className="hidden sm:inline text-xs text-stone-600 ml-2">
                · Indigenous Peoples in Canada I
              </span>
            </button>
          </div>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              onClick={() => setActiveTab('exam')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'exam'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Mock Midterm
            </button>
            <button
              onClick={() => setActiveTab('quizzes')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'quizzes'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Official Quizzes
            </button>
            <button
              onClick={() => setActiveTab('essays')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'essays'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Essay Workshop
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'flashcards'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Master Terms
            </button>
            <button
              onClick={() => setActiveTab('mindmaps')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'mindmaps'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Thematic Mind Maps
            </button>
            <button
              onClick={() => setActiveTab('lectures')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'lectures'
                  ? 'text-stone-950 font-semibold border-b-2 border-amber-800'
                  : ''
              }`}
            >
              Lecture Guides
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onStartExam}
              className="px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-amber-700 focus:outline-none whitespace-nowrap shrink-0"
            >
              {isExamActive ? 'Resume 75m Midterm' : 'Start Midterm Simulation'}
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <div className="flex md:hidden overflow-x-auto gap-4 py-2 text-xs font-medium text-stone-600 border-t border-stone-200">
          <button
            onClick={() => setActiveTab('exam')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'exam' ? 'text-amber-900 font-bold' : ''}`}
          >
            Midterm Exam
          </button>
          <button
            onClick={() => setActiveTab('quizzes')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'quizzes' ? 'text-amber-900 font-bold' : ''}`}
          >
            Quizzes & MCQs
          </button>
          <button
            onClick={() => setActiveTab('essays')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'essays' ? 'text-amber-900 font-bold' : ''}`}
          >
            Essay Lab
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'flashcards' ? 'text-amber-900 font-bold' : ''}`}
          >
            Terms & Dr. Miller
          </button>
          <button
            onClick={() => setActiveTab('mindmaps')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'mindmaps' ? 'text-amber-900 font-bold' : ''}`}
          >
            Mind Maps
          </button>
          <button
            onClick={() => setActiveTab('lectures')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'lectures' ? 'text-amber-900 font-bold' : ''}`}
          >
            Lectures
          </button>
        </div>
      </div>
    </header>
  );
};
