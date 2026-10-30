import React, { useState, useMemo, useEffect } from 'react';
import { termsData } from '../data/termsData';
import { TermDefinition } from '../types';
import { Search, RotateCw, CheckCircle, AlertTriangle, ArrowLeft, ArrowRight, Shuffle, List, Layers, Bookmark } from 'lucide-react';

export const TermsFlashcards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('indg1220_mastered_terms');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('indg1220_mastered_terms', JSON.stringify(masteredIds));
    } catch (e) {
      console.error(e);
    }
  }, [masteredIds]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(termsData.map((t) => t.category)));
    return ['All', ...cats];
  }, []);

  const filteredTerms = useMemo(() => {
    return termsData.filter((t) => {
      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const matchesSearch =
        t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.courseDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.significance.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle index safety when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedCategory, searchQuery]);

  const currentTerm: TermDefinition | undefined = filteredTerms[currentIndex];

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
      {/* Header with Dr. Miller warning */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Master Terms & Slide Definitions
            </h1>
            <p className="text-stone-600 text-sm mt-1">
              Course glossary from Dr. Miller's lectures and official Midterm Terms List.
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

        {/* Warning Callout Box - directly based on slide 13 */}
        <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold">CRITICAL EXAM INSTRUCTION (Review Slide 13):</span> "To make sure you’re getting the correct definitions, refer to the slides that Dr. Miller has posted and the notes that you took in class.{' '}
            <span className="font-bold underline">Do not rely on Google for your definitions</span>." The cards below feature Dr. Miller’s explicit course definitions.
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 115+ terms, definitions, concepts..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-900 placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
            >
            </input>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs text-stone-600 font-medium">
            <span>
              Showing {filteredTerms.length} of {termsData.length} terms
            </span>
            <span aria-hidden="true">·</span>
            <span>{masteredIds.length} Mastered</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Card Mode View */}
      {viewMode === 'card' ? (
        filteredTerms.length > 0 && currentTerm ? (
          <div className="flex flex-col items-center">
            {/* Flashcard container */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full max-w-2xl min-h-[360px] bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer p-6 sm:p-8 flex flex-col justify-between relative select-none"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-600 font-medium">
                  <span>{currentTerm.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentTerm.lectureRef}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleMastered(currentTerm.id, e)}
                    className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
                      isCurrentMastered
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                    }`}
                    title={isCurrentMastered ? 'Marked as Mastered' : 'Mark as Mastered'}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {isCurrentMastered ? 'Mastered' : 'Mark Mastered'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Card Center Content */}
              <div className="my-auto py-6">
                {!isFlipped ? (
                  <div className="text-center">
                    <span className="text-xs uppercase tracking-wider text-amber-800 font-bold block mb-2">
                      Term
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                      {currentTerm.term}
                    </h2>
                    <p className="text-xs text-stone-600 mt-4 flex items-center justify-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5" /> Click anywhere to flip card for Dr. Miller's definition
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1">
                        Course Definition (Dr. Miller)
                      </span>
                      <p className="text-stone-900 text-base sm:text-lg font-medium leading-relaxed">
                        {currentTerm.courseDefinition}
                      </p>
                    </div>

                    {currentTerm.googleWarning && (
                      <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900">
                        <span className="font-bold block mb-0.5">⚠️ Exam Definition Note:</span>
                        {currentTerm.googleWarning}
                      </div>
                    )}

                    <div className="text-xs text-stone-600 border-t border-stone-100 pt-3">
                      <span className="font-semibold text-stone-700">Course Significance: </span>
                      {currentTerm.significance}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Indicator */}
              <div className="flex items-center justify-between text-xs text-stone-600 pt-4 border-t border-stone-100">
                <span>
                  Card {currentIndex + 1} of {filteredTerms.length}
                </span>
                <span className="flex items-center gap-1 text-stone-600">
                  <RotateCw className="w-3 h-3" /> {isFlipped ? 'Showing Definition' : 'Showing Term'}
                </span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-white border border-stone-300 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>

              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-5 py-2 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-stone-800 flex items-center gap-1.5 shadow-2xs"
              >
                <RotateCw className="w-4 h-4" /> Flip
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-white border border-stone-300 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 shadow-2xs"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-600 text-sm">No terms found matching your query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-50 rounded-lg hover:bg-amber-100"
            >
              Reset Filters
            </button>
          </div>
        )
      ) : (
        /* List Mode View */
        <div className="space-y-4">
          {filteredTerms.map((t, idx) => {
            const isMastered = masteredIds.includes(t.id);
            return (
              <div
                key={t.id}
                className={`p-5 rounded-xl border bg-white transition-all ${
                  isMastered ? 'border-emerald-200/80 bg-emerald-50/20' : 'border-stone-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs text-stone-600 font-medium">
                      {idx + 1}. {t.category} · {t.lectureRef}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-900 mt-0.5">
                      {t.term}
                    </h3>
                  </div>

                  <button
                    onClick={() => toggleMastered(t.id)}
                    className={`self-start px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 ${
                      isMastered
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    {isMastered ? 'Mastered' : 'Mark Mastered'}
                  </button>
                </div>

                <div className="mt-2 text-stone-800 text-sm leading-relaxed">
                  <span className="font-semibold text-stone-900">Dr. Miller’s Definition: </span>
                  {t.courseDefinition}
                </div>

                {t.googleWarning && (
                  <div className="mt-2.5 p-2.5 rounded-lg bg-amber-50 text-xs text-amber-900 border border-amber-200/70">
                    <span className="font-bold">⚠️ Note: </span>
                    {t.googleWarning}
                  </div>
                )}

                <div className="mt-2 text-xs text-stone-600">
                  <span className="font-semibold text-stone-600">Exam Context: </span>
                  {t.significance}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
