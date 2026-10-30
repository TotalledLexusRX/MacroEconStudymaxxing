import React, { useState, useEffect } from 'react';
import { macroPracticeQuestions } from '../data/macroPracticeQuestions';
import { MacroPracticeQuestion } from '../types/macro';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Check, Trash2 } from 'lucide-react';

const STORAGE_KEY_MACRO_PRACTICE = 'indg1220_macro_practice_state';

const loadSavedState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MACRO_PRACTICE);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse practice state', e);
    return null;
  }
};

export const MacroPracticeQuiz: React.FC = () => {
  const saved = loadSavedState();

  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>(saved?.selectedChapter ?? 'all');
  const [userSelections, setUserSelections] = useState<{ [id: string]: number }>(saved?.userSelections ?? {});
  const [submittedQuestions, setSubmittedQuestions] = useState<{ [id: string]: boolean }>(saved?.submittedQuestions ?? {});
  const [lastSavedStr, setLastSavedStr] = useState<string>(saved?.lastSaved ?? '');

  // Autosave effect
  useEffect(() => {
    try {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const stateToSave = {
        selectedChapter,
        userSelections,
        submittedQuestions,
        lastSaved: timeStr
      };
      localStorage.setItem(STORAGE_KEY_MACRO_PRACTICE, JSON.stringify(stateToSave));
      setLastSavedStr(timeStr);
    } catch (e) {
      console.error('Failed to autosave practice state', e);
    }
  }, [selectedChapter, userSelections, submittedQuestions]);

  const filteredQuestions = macroPracticeQuestions.filter(
    (q) => selectedChapter === 'all' || q.chapter === selectedChapter
  );

  const handleSelectOption = (qId: string, optionIdx: number) => {
    if (submittedQuestions[qId]) return;
    setUserSelections((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleSubmitQuestion = (qId: string) => {
    if (userSelections[qId] === undefined || submittedQuestions[qId]) return;
    setSubmittedQuestions((prev) => ({ ...prev, [qId]: true }));
  };

  const handleReset = () => {
    if (window.confirm('Reset all practice answers?')) {
      setUserSelections({});
      setSubmittedQuestions({});
      localStorage.removeItem(STORAGE_KEY_MACRO_PRACTICE);
    }
  };

  let correctCount = 0;
  let totalSubmitted = Object.keys(submittedQuestions).length;
  macroPracticeQuestions.forEach((q) => {
    if (submittedQuestions[q.id] && userSelections[q.id] === q.correctIndex) {
      correctCount++;
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Practice Problem Sets (Chapters 7, 8 & 10)
            </h1>
            <p className="text-stone-600 text-sm mt-1">
              Solve official problem set questions covering GDP, CPI, Inflation, Unemployment, Savings-Investment Identity, and the Loanable Funds Market.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {lastSavedStr && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium">
                <Check className="w-3 h-3 text-emerald-600" /> Auto-saved ({lastSavedStr})
              </span>
            )}
            {totalSubmitted > 0 && (
              <button
                onClick={handleReset}
                className="px-3 py-1.5 text-xs text-stone-600 hover:text-rose-700 hover:bg-rose-50 border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" /> Reset Answers
              </button>
            )}
          </div>
        </div>

        {/* Chapter Filter Bar */}
        <div className="flex items-center gap-2 mt-5 p-1 bg-stone-200/60 rounded-xl w-fit">
          <button
            onClick={() => setSelectedChapter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedChapter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Chapters ({macroPracticeQuestions.length})
          </button>
          <button
            onClick={() => setSelectedChapter(7)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedChapter === 7 ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Chapter 7 (GDP & CPI)
          </button>
          <button
            onClick={() => setSelectedChapter(8)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedChapter === 8 ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Chapter 8 (Unemployment & Inflation)
          </button>
          <button
            onClick={() => setSelectedChapter(10)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedChapter === 10 ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Chapter 10 (Loanable Funds)
          </button>
        </div>
      </div>

      {/* Score Summary Bar */}
      {totalSubmitted > 0 && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs sm:text-sm">
          <div className="font-bold text-amber-950 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-800" /> Practice Progress: {correctCount} / {totalSubmitted} Correct ({Math.round((correctCount / totalSubmitted) * 100)}%)
          </div>
          <span className="text-amber-900">Keep practicing to master all problem types!</span>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, idx) => {
          const userChoice = userSelections[q.id];
          const isSubmitted = submittedQuestions[q.id];
          const isCorrect = userChoice === q.correctIndex;

          return (
            <div key={q.id} className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  Question {idx + 1} · Chapter {q.chapter}
                </span>
                {isSubmitted && (
                  isCorrect ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Correct
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-rose-700 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Incorrect
                    </span>
                  )
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((opt, oIdx) => {
                  let optStyle = 'border-stone-200 hover:border-stone-400 bg-stone-50/50 text-stone-800';

                  if (userChoice === oIdx) {
                    optStyle = 'border-amber-800 bg-amber-50 text-amber-950 font-medium ring-1 ring-amber-800';
                  }

                  if (isSubmitted) {
                    if (oIdx === q.correctIndex) {
                      optStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-600';
                    } else if (userChoice === oIdx) {
                      optStyle = 'border-rose-500 bg-rose-50 text-rose-950';
                    } else {
                      optStyle = 'border-stone-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(q.id, oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Submit Button & Explanation */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {!isSubmitted ? (
                  <button
                    disabled={userChoice === undefined}
                    onClick={() => handleSubmitQuestion(q.id)}
                    className="px-5 py-2 bg-amber-900 hover:bg-amber-950 disabled:bg-stone-300 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:cursor-not-allowed shadow-xs self-start"
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="w-full p-4 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 text-xs sm:text-sm space-y-1.5">
                    <div className="font-bold flex items-center gap-1.5 text-stone-900">
                      <HelpCircle className="w-4 h-4 text-amber-800" /> Explanation & Solution Step
                    </div>
                    <p>{q.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
