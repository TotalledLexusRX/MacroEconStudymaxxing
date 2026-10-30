import React, { useState, useEffect } from 'react';
import { quiz1Questions, quiz2Questions, mcqBank } from '../data/quizBank';
import { ShortAnswerQuestion, MCQQuestion } from '../types';
import { CheckCircle2, XCircle, HelpCircle, Eye, EyeOff, RotateCcw, Award, Check, Trash2 } from 'lucide-react';

const STORAGE_KEY_QUIZ = 'indg1220_quiz_state';

const loadSavedQuizState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_QUIZ);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse quiz state', e);
    return null;
  }
};

export const QuizMode: React.FC = () => {
  const saved = loadSavedQuizState();

  const [activeSubTab, setActiveSubTab] = useState<'mcq' | 'quiz1' | 'quiz2'>(saved?.activeSubTab ?? 'mcq');

  // MCQ state
  const [currentMcqIdx, setCurrentMcqIdx] = useState<number>(saved?.currentMcqIdx ?? 0);
  const [selectedOption, setSelectedOption] = useState<number | null>(saved?.selectedOption ?? null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(saved?.isAnswerSubmitted ?? false);
  const [mcqScore, setMcqScore] = useState<number>(saved?.mcqScore ?? 0);
  const [mcqHistory, setMcqHistory] = useState<{ [id: string]: boolean }>(saved?.mcqHistory ?? {});

  // Short Answer state (Quiz 1 and Quiz 2)
  const [userAnswers, setUserAnswers] = useState<{ [id: string]: string }>(saved?.userAnswers ?? {});
  const [revealedAnswers, setRevealedAnswers] = useState<{ [id: string]: boolean }>(saved?.revealedAnswers ?? {});
  const [lastSavedStr, setLastSavedStr] = useState<string>(saved?.lastSaved ?? '');

  // Autosave effect
  useEffect(() => {
    try {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const stateToSave = {
        activeSubTab,
        currentMcqIdx,
        selectedOption,
        isAnswerSubmitted,
        mcqScore,
        mcqHistory,
        userAnswers,
        revealedAnswers,
        lastSaved: timeStr
      };
      localStorage.setItem(STORAGE_KEY_QUIZ, JSON.stringify(stateToSave));
      setLastSavedStr(timeStr);
    } catch (e) {
      console.error('Failed to autosave quiz state', e);
    }
  }, [
    activeSubTab,
    currentMcqIdx,
    selectedOption,
    isAnswerSubmitted,
    mcqScore,
    mcqHistory,
    userAnswers,
    revealedAnswers
  ]);

  const currentMcq = mcqBank[currentMcqIdx] || mcqBank[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleMcqSubmit = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentMcq.correctIndex;
    if (isCorrect) {
      setMcqScore((prev) => prev + 1);
    }
    setMcqHistory((prev) => ({ ...prev, [currentMcq.id]: isCorrect }));
  };

  const handleNextMcq = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    if (currentMcqIdx + 1 < mcqBank.length) {
      setCurrentMcqIdx((prev) => prev + 1);
    } else {
      setCurrentMcqIdx(0);
    }
  };

  const handleResetMcqs = () => {
    setCurrentMcqIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setMcqScore(0);
    setMcqHistory({});
  };

  const handleClearShortAnswers = () => {
    if (window.confirm('Clear all your drafted answers for Quiz 1 & Quiz 2?')) {
      setUserAnswers({});
      setRevealedAnswers({});
    }
  };

  const toggleReveal = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleUserAnswerChange = (id: string, text: string) => {
    setUserAnswers((prev) => ({ ...prev, [id]: text }));
  };

  const activeQuizList = activeSubTab === 'quiz1' ? quiz1Questions : quiz2Questions;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Official Quizzes & Practice MCQs
            </h1>
            <p className="text-stone-600 text-sm mt-1">
              Review authentic Quiz 1 & Quiz 2 questions (which make up ~2/3 of the midterm short answers) and test your knowledge with lecture multiple choice questions.
            </p>
          </div>

          {lastSavedStr && (
            <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium">
              <Check className="w-3 h-3 text-emerald-600" /> Auto-saved ({lastSavedStr})
            </span>
          )}
        </div>

        {/* Tab switch and action row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5">
          <div className="flex items-center gap-2 p-1 bg-stone-200/60 rounded-xl w-fit">
            <button
              onClick={() => setActiveSubTab('mcq')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeSubTab === 'mcq'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Lecture MCQs ({mcqBank.length} Questions)
            </button>
            <button
              onClick={() => setActiveSubTab('quiz1')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeSubTab === 'quiz1'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Official Quiz 1 (Fall 2026)
            </button>
            <button
              onClick={() => setActiveSubTab('quiz2')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeSubTab === 'quiz2'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Official Quiz 2 (Fall 2026)
            </button>
          </div>

          {(activeSubTab === 'quiz1' || activeSubTab === 'quiz2') && Object.keys(userAnswers).length > 0 && (
            <button
              onClick={handleClearShortAnswers}
              className="px-3 py-1.5 text-xs text-stone-600 hover:text-rose-700 hover:bg-rose-50 border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto"
              title="Clear all saved quiz answers"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Quiz Drafts
            </button>
          )}
        </div>
      </div>

      {/* MCQs Section */}
      {activeSubTab === 'mcq' && (
        <div className="max-w-3xl mx-auto">
          {/* Progress Strip */}
          <div className="flex items-center justify-between text-xs text-stone-600 mb-3 font-medium">
            <span>
              Question {currentMcqIdx + 1} of {mcqBank.length} · {currentMcq.lecture}
            </span>
            <div className="flex items-center gap-3">
              <span>Score: {mcqScore} / {Object.keys(mcqHistory).length}</span>
              <button
                onClick={handleResetMcqs}
                className="text-stone-600 hover:text-stone-900 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
          </div>

          <div className="w-full bg-stone-200 h-1.5 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-amber-800 h-full transition-all duration-300"
              style={{ width: `${((currentMcqIdx + 1) / mcqBank.length) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <span className="text-xs font-bold text-amber-900 tracking-wider uppercase block mb-2">
              Multiple Choice
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug mb-6">
              {currentMcq.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentMcq.options.map((opt, idx) => {
                let optionStyle = 'border-stone-200 hover:border-stone-400 bg-stone-50/50';

                if (selectedOption === idx) {
                  optionStyle = 'border-amber-800 bg-amber-50 text-amber-950 font-medium ring-1 ring-amber-800';
                }

                if (isAnswerSubmitted) {
                  if (idx === currentMcq.correctIndex) {
                    optionStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-600';
                  } else if (selectedOption === idx) {
                    optionStyle = 'border-rose-500 bg-rose-50 text-rose-950';
                  } else {
                    optionStyle = 'border-stone-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-semibold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 mt-0.5">{opt}</span>
                    {isAnswerSubmitted && idx === currentMcq.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && selectedOption === idx && idx !== currentMcq.correctIndex && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            {isAnswerSubmitted && (
              <div className="mt-6 p-4 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 text-sm space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-stone-900">
                  <HelpCircle className="w-4 h-4 text-amber-800" /> Explanation & Lecture Citation
                </div>
                <p>{currentMcq.explanation}</p>
                {currentMcq.slideRef && (
                  <p className="text-xs text-stone-600 font-medium pt-1">
                    Reference: {currentMcq.slideRef}
                  </p>
                )}
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-stone-100">
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleMcqSubmit}
                  className="px-5 py-2.5 bg-amber-900 hover:bg-amber-950 disabled:bg-stone-300 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer disabled:cursor-not-allowed shadow-xs"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextMcq}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-xs"
                >
                  {currentMcqIdx + 1 < mcqBank.length ? 'Next Question →' : 'Start Over ↺'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Official Quizzes (Quiz 1 or Quiz 2) */}
      {(activeSubTab === 'quiz1' || activeSubTab === 'quiz2') && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 text-xs sm:text-sm">
            <span className="font-bold">Official Exam Pattern Notice:</span> The Midterm Review PowerPoint (Slide 7 & 8) states:{' '}
            <span className="font-bold">"Approximately 2/3 of the 10 short-answer questions are drawn directly from past quizzes! Aim for 1-3 full sentences."</span> Practice typing your answers below, then reveal Dr. Miller’s key criteria and model answers.
          </div>

          <div className="space-y-6">
            {activeQuizList.map((q, idx) => {
              const isRevealed = revealedAnswers[q.id];
              const userText = userAnswers[q.id] || '';

              return (
                <div key={q.id} className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                      Question {idx + 1} of 9 · {q.lengthGuide}
                    </span>
                    <span className="text-xs text-stone-600">
                      Source: {q.source} (Original Course Exam)
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-3 leading-snug">
                    {q.question}
                  </h3>

                  {/* Practice Draft Textbox */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Your Draft Answer (Aim for {q.lengthGuide}):
                    </label>
                    <textarea
                      rows={3}
                      value={userText}
                      onChange={(e) => handleUserAnswerChange(q.id, e.target.value)}
                      placeholder="Type your 1-3 sentence practice answer here..."
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Reveal button */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleReveal(q.id)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" /> Hide Model Answer & Key Points
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" /> Show Model Answer & Key Points
                        </>
                      )}
                    </button>

                    {userText.trim().length > 15 && (
                      <span className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                        <Check className="w-3.5 h-3.5" /> Drafted
                      </span>
                    )}
                  </div>

                  {/* Revealed Criteria & Model Answer */}
                  {isRevealed && (
                    <div className="mt-4 pt-4 border-t border-stone-100 space-y-4">
                      {/* Model Answer */}
                      <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
                        <span className="text-xs uppercase tracking-wider text-amber-950 font-bold block mb-1">
                          Professor Model Answer ({q.lengthGuide})
                        </span>
                        <p className="text-sm font-medium text-stone-900 leading-relaxed">
                          {q.modelAnswer}
                        </p>
                      </div>

                      {/* Required Key Points Checklist */}
                      <div>
                        <span className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-2">
                          Must-Include Grading Points:
                        </span>
                        <ul className="space-y-1.5 text-xs text-stone-700">
                          {q.keyPoints.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Common Pitfalls Warning */}
                      {q.commonPitfalls && (
                        <div className="p-3 rounded-lg bg-rose-50 text-rose-900 text-xs border border-rose-200/70">
                          <span className="font-bold">⚠️ Avoid this common student error: </span>
                          {q.commonPitfalls}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
