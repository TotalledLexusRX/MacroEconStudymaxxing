import React, { useState, useMemo, useEffect } from 'react';
import { macroTerms } from '../data/macroTerms';
import { MacroTerm } from '../types/macro';
import { Search, RotateCw, CheckCircle, List, Layers, AlertTriangle } from 'lucide-react';

export const MacroFlashcards: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('macro_mastered_terms');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('macro_mastered_terms', JSON.stringify(masteredIds));
    } catch (e) {
      console.error(e);
    }
  }, [masteredIds]);

  const filteredTerms = useMemo(() => {
    return macroTerms.filter((t) => {
      const matchesChapter = selectedChapter === 'all' || t.chapter === selectedChapter;
      const matchesSearch =
        t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.formula && t.formula.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesChapter && matchesSearch;
    });
  }, [selectedChapter, searchQuery]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedChapter, searchQuery]);

  const currentTerm: MacroTerm | undefined = filteredTerms[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1 < filteredTerms.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredTerms.length - 1));
  };

  const toggleMastered = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isCurrentMastered = currentTerm ? masteredIds.includes(currentTerm.id) : false;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Key Terms & Formulas Glossary
            </h1>
            <p className="text-stone-600 text-sm mt-1">
              Master essential definitions and formulas across Chapters 7, 8, and 10.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'card' ? 'list' : 'card')}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 transition-colors shadow-xs"
            >
              {viewMode === 'card' ? (
                <>
                  <List className="w-4 h-4" /> Switch to List View
                </>
              ) : (
                <>
                  <Layers className="w-4 h-4" /> Switch to Flashcard View
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms, formulas, definitions..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs text-stone-500 font-medium">
            <span>Showing {filteredTerms.length} terms</span>
            <span aria-hidden="true">·</span>
            <span>{masteredIds.length} Mastered</span>
          </div>
        </div>

        {/* Chapter Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedChapter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
              selectedChapter === 'all' ? 'bg-stone-900 text-white shadow-xs' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            All Chapters
          </button>
          <button
            onClick={() => setSelectedChapter(7)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
              selectedChapter === 7 ? 'bg-stone-900 text-white shadow-xs' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Chapter 7 (GDP & CPI)
          </button>
          <button
            onClick={() => setSelectedChapter(8)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
              selectedChapter === 8 ? 'bg-stone-900 text-white shadow-xs' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Chapter 8 (Unemployment & Inflation)
          </button>
          <button
            onClick={() => setSelectedChapter(10)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
              selectedChapter === 10 ? 'bg-stone-900 text-white shadow-xs' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Chapter 10 (Loanable Funds)
          </button>
        </div>
      </div>

      {/* Card View */}
      {viewMode === 'card' ? (
        filteredTerms.length > 0 && currentTerm ? (
          <div className="flex flex-col items-center">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full max-w-2xl min-h-[360px] bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer p-6 sm:p-8 flex flex-col justify-between relative select-none"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-stone-500 font-medium">
                  Chapter {currentTerm.chapter} Glossary
                </span>

                <button
                  onClick={(e) => toggleMastered(currentTerm.id, e)}
                  className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
                    isCurrentMastered
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">{isCurrentMastered ? 'Mastered' : 'Mark Mastered'}</span>
                </button>
              </div>

              <div className="my-auto py-6">
                {!isFlipped ? (
                  <div className="text-center">
                    <span className="text-xs uppercase tracking-wider text-amber-800 font-bold block mb-2">
                      Key Macro Term
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                      {currentTerm.term}
                    </h2>
                    <p className="text-xs text-stone-500 mt-4 flex items-center justify-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5" /> Click card to flip for definition & formula
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                        Definition
                      </span>
                      <p className="text-stone-900 text-base sm:text-lg font-medium leading-relaxed">
                        {currentTerm.definition}
                      </p>
                    </div>

                    {currentTerm.formula && (
                      <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs font-mono font-bold text-amber-950">
                        Formula: {currentTerm.formula}
                      </div>
                    )}

                    {currentTerm.keyNote && (
                      <div className="text-xs text-stone-600 border-t border-stone-100 pt-3">
                        <span className="font-semibold text-stone-700">Exam Note: </span>
                        {currentTerm.keyNote}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-4 border-t border-stone-100">
                <span>Card {currentIndex + 1} of {filteredTerms.length}</span>
                <span className="flex items-center gap-1">
                  <RotateCw className="w-3 h-3" /> {isFlipped ? 'Showing Definition' : 'Showing Term'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-white border border-stone-300 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 shadow-2xs"
              >
                ← Previous
              </button>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-5 py-2 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-stone-800 shadow-2xs"
              >
                Flip Card
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-white border border-stone-300 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 shadow-2xs"
              >
                Next →
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-500 text-sm">No terms found matching your query.</p>
          </div>
        )
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredTerms.map((t, idx) => {
            const isMastered = masteredIds.includes(t.id);
            return (
              <div
                key={t.id}
                className={`p-5 rounded-xl border bg-white transition-all ${
                  isMastered ? 'border-emerald-200 bg-emerald-50/20' : 'border-stone-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs text-stone-500 font-medium">
                      {idx + 1}. Chapter {t.chapter}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-900 mt-0.5">
                      {t.term}
                    </h3>
                  </div>

                  <button
                    onClick={() => toggleMastered(t.id)}
                    className={`self-start px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 ${
                      isMastered ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    {isMastered ? 'Mastered' : 'Mark Mastered'}
                  </button>
                </div>

                <p className="text-stone-800 text-sm leading-relaxed mt-1">
                  {t.definition}
                </p>

                {t.formula && (
                  <div className="mt-2 p-2.5 rounded-lg bg-amber-50 text-xs font-mono font-bold text-amber-950 border border-amber-200">
                    Formula: {t.formula}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
