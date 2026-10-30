import React, { useState } from 'react';
import { lectureSummaries } from '../data/lectureSummaries';
import { Clock, CheckSquare, Calendar, BookOpen, AlertCircle, FileText, Compass, ChevronDown, ChevronUp } from 'lucide-react';

export const LectureReview: React.FC = () => {
  const [expandedLectures, setExpandedLectures] = useState<{ [num: number]: boolean }>({
    1: true,
    2: true,
    13: true,
    14: true
  });

  const toggleExpand = (num: number) => {
    setExpandedLectures((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const expandAll = () => {
    const all: { [num: number]: boolean } = {};
    lectureSummaries.forEach((l) => (all[l.lectureNum] = true));
    setExpandedLectures(all);
  };

  const collapseAll = () => {
    setExpandedLectures({});
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-stone-200">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Lecture Summaries & Time Crunch Strategy
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          High-yield breakdowns across all 14 lectures covered on the midterm exam up to October 22nd.
        </p>
      </div>

      {/* Studying on a Time Crunch (Slides 5, 6, 14, 15) */}
      <div className="mb-10 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
          <Clock className="w-4 h-4" /> Official Midterm Exam Logistics & Strategy
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-800" /> Exam Schedule & Format
            </h3>
            <ul className="text-xs text-stone-700 space-y-1.5 leading-relaxed">
              <li>• <span className="font-semibold text-stone-900">Time:</span> 10:00am – 11:15am (75 minutes).</li>
              <li>• <span className="font-semibold text-stone-900">No Makeups:</span> Be on time!</li>
              <li>• <span className="font-semibold text-stone-900">Two Components:</span> Printed Exam Sheet (MCQ & Short Answer) + Exam Booklet (Short Essay & Long Essay).</li>
              <li>• <span className="font-semibold text-stone-900">No Electronics:</span> Phones, smart watches, laptops put away.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-stone-700" /> Writing Strategy (Slide 6)
            </h3>
            <ul className="text-xs text-stone-700 space-y-1.5 leading-relaxed">
              <li>• <span className="font-semibold text-stone-900">Write Full Name:</span> First and last name (e.g. Cara Ginter, not C. Ginter).</li>
              <li>• <span className="font-semibold text-stone-900">Read Whole Exam:</span> Skim all sections before writing to allocate your time.</li>
              <li>• <span className="font-semibold text-stone-900">Answer Knowns First:</span> Build momentum with questions you know well.</li>
              <li>• <span className="font-semibold text-stone-900">Save Time for Essay:</span> Don’t spend 40 mins on MCQs!</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-stone-700" /> Time Crunch Priority (Slide 15)
            </h3>
            <ul className="text-xs text-stone-700 space-y-1.5 leading-relaxed">
              <li>• <span className="font-semibold text-stone-900">1. Master Quizzes & Writings:</span> ~2/3 of short answers & short essays come from them!</li>
              <li>• <span className="font-semibold text-stone-900">2. Review Slide Definitions:</span> Do not use Google definitions.</li>
              <li>• <span className="font-semibold text-stone-900">3. Contact, Conflict, Collaboration:</span> Understand the ideological frameworks of Spain, France, Britain vs Indigenous nations.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 14-Lecture Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
            All 14 Course Lectures Breakdown
          </span>
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
            <button onClick={expandAll} className="hover:text-stone-900">
              Expand All
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={collapseAll} className="hover:text-stone-900">
              Collapse All
            </button>
          </div>
        </div>

        {lectureSummaries.map((lec) => {
          const isExpanded = !!expandedLectures[lec.lectureNum];

          return (
            <div
              key={lec.lectureNum}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => toggleExpand(lec.lectureNum)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center shrink-0">
                    L{lec.lectureNum}
                  </span>
                  <div>
                    <span className="text-xs text-stone-600 font-medium block">
                      {lec.dateStr}
                    </span>
                    <h3 className="font-serif text-base font-bold text-stone-900">
                      {lec.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline text-xs text-amber-900 font-medium">
                    {lec.examSignificance}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-stone-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-600" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="p-5 pt-0 border-t border-stone-100 bg-stone-50/50 space-y-4 text-xs sm:text-sm">
                  {/* Core Themes */}
                  <div className="pt-3">
                    <span className="font-bold text-stone-900 block mb-1">
                      Key Themes Explored:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {lec.coreThemes.map((th, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-stone-700 text-xs"
                        >
                          {th}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Crucial Facts */}
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">
                      Crucial Facts & Lecture Arguments:
                    </span>
                    <ul className="space-y-1 text-stone-700">
                      {lec.crucialFacts.map((fact, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-amber-800 font-bold">•</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exam Significance */}
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-950 border border-amber-200/60 text-xs">
                    <span className="font-bold">Exam Tie-in: </span>
                    {lec.examSignificance}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
