import React, { useState } from 'react';
import { macroChapterSummaries } from '../data/macroChapterSummaries';
import { BookOpen, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const MacroSummaries: React.FC = () => {
  const [expandedChapters, setExpandedChapters] = useState<{ [ch: number]: boolean }>({
    7: true,
    8: true,
    10: true
  });

  const toggleExpand = (ch: number) => {
    setExpandedChapters((prev) => ({ ...prev, [ch]: !prev[ch] }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-stone-200">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Chapter Study Guides (Krugman, Wells, Au, Parkinson)
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Comprehensive core concepts, formulas, and diagrams for Chapters 7, 8, and 10.
        </p>
      </div>

      <div className="space-y-6">
        {macroChapterSummaries.map((summary) => {
          const isExpanded = !!expandedChapters[summary.chapter];

          return (
            <div key={summary.chapter} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
              <button
                onClick={() => toggleExpand(summary.chapter)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
                    Chapter {summary.chapter} Study Guide
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    {summary.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">{summary.subtitle}</p>
                </div>

                {isExpanded ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
              </button>

              {isExpanded && (
                <div className="p-6 pt-0 border-t border-stone-100 bg-stone-50/50 space-y-6">
                  {summary.keyTopics.map((topic, tIdx) => (
                    <div key={tIdx} className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                        {topic.title}
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                        {topic.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-amber-800 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      {topic.formula && (
                        <div className="mt-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200 font-mono text-xs font-bold text-amber-950">
                          Key Formula / Identity: {topic.formula}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
