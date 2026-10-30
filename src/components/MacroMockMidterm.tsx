import React, { useState, useEffect } from 'react';
import { macroPracticeQuestions } from '../data/macroPracticeQuestions';
import { MacroPracticeQuestion } from '../types/macro';
import { ExamTimer } from './ExamTimer';
import { FileText, Book, Award, CheckCircle2, XCircle, AlertTriangle, HelpCircle, RefreshCw, Check } from 'lucide-react';

const STORAGE_KEY_MACRO_MIDTERM = 'indg1220_macro_midterm_state';

const loadSavedExamState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MACRO_MIDTERM);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse saved macro exam state', e);
    return null;
  }
};

export const MacroMockMidterm: React.FC = () => {
  const savedInitial = loadSavedExamState();

  const [examStarted, setExamStarted] = useState<boolean>(savedInitial?.examStarted ?? false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(savedInitial?.examSubmitted ?? false);
  const [studentName, setStudentName] = useState<string>(savedInitial?.studentName ?? '');
  const [currentSection, setCurrentSection] = useState<'instructions' | 'mcq' | 'calc' | 'essay' | 'review'>(
    savedInitial?.currentSection ?? 'instructions'
  );

  const [secondsLeft, setSecondsLeft] = useState<number>(savedInitial?.secondsLeft ?? 4500); // 75 mins
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(
    savedInitial?.examStarted && !savedInitial?.examSubmitted ? true : false
  );

  // Answers
  const [mcqAnswers, setMcqAnswers] = useState<{ [id: string]: number }>(savedInitial?.mcqAnswers ?? {});
  const [calcAnswers, setCalcAnswers] = useState<{ [id: string]: string }>(savedInitial?.calcAnswers ?? {});
  const [essayAnswer, setEssayAnswer] = useState<string>(savedInitial?.essayAnswer ?? '');

  // Self scores
  const [calcSelfScores, setCalcSelfScores] = useState<{ [id: string]: number }>(savedInitial?.calcSelfScores ?? {});
  const [essaySelfScore, setEssaySelfScore] = useState<number>(savedInitial?.essaySelfScore ?? 15);

  const [lastSavedStr, setLastSavedStr] = useState<string>(savedInitial?.lastSaved ?? '');
  const [hasRestoredSession, setHasRestoredSession] = useState<boolean>(Boolean(savedInitial?.examStarted));

  // Autosave effect
  useEffect(() => {
    try {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const stateToSave = {
        examStarted,
        examSubmitted,
        studentName,
        currentSection,
        secondsLeft,
        mcqAnswers,
        calcAnswers,
        essayAnswer,
        calcSelfScores,
        essaySelfScore,
        lastSaved: timeStr
      };
      localStorage.setItem(STORAGE_KEY_MACRO_MIDTERM, JSON.stringify(stateToSave));
      setLastSavedStr(timeStr);
    } catch (e) {
      console.error('Failed to autosave macro exam', e);
    }
  }, [
    examStarted,
    examSubmitted,
    studentName,
    currentSection,
    secondsLeft,
    mcqAnswers,
    calcAnswers,
    essayAnswer,
    calcSelfScores,
    essaySelfScore
  ]);

  const examMCQs = macroPracticeQuestions.slice(0, 10);
  const calcQuestions = macroPracticeQuestions.slice(10, 16);

  let mcqCorrect = 0;
  examMCQs.forEach((q) => {
    if (mcqAnswers[q.id] === q.correctIndex) {
      mcqCorrect++;
    }
  });

  const totalCalcScore = Object.values(calcSelfScores).reduce((a, b) => a + b, 0);
  const totalScore = mcqCorrect + totalCalcScore + essaySelfScore;
  const percentage = Math.min(100, Math.round((totalScore / 50) * 100));

  const handleStart = () => {
    setExamStarted(true);
    setIsTimerRunning(true);
    setCurrentSection('mcq');
    setHasRestoredSession(false);
  };

  const handleSubmit = () => {
    setIsTimerRunning(false);
    setExamSubmitted(true);
    setCurrentSection('review');
  };

  const handleReset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_MACRO_MIDTERM);
    } catch (e) {
      console.error(e);
    }
    setExamStarted(false);
    setExamSubmitted(false);
    setSecondsLeft(4500);
    setIsTimerRunning(false);
    setMcqAnswers({});
    setCalcAnswers({});
    setEssayAnswer('');
    setCalcSelfScores({});
    setEssaySelfScore(15);
    setLastSavedStr('');
    setHasRestoredSession(false);
    setCurrentSection('instructions');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-stone-200">
        <div>
          <span className="text-xs font-bold text-amber-900 tracking-wider uppercase block">
            Macroeconomics Midterm Examination Simulation
          </span>
          <div className="flex items-center gap-3 mt-0.5">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Chapters 7, 8 & 10 Mock Exam
            </h1>
            {lastSavedStr && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium">
                <Check className="w-3 h-3 text-emerald-600" /> Auto-saved ({lastSavedStr})
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {examStarted && !examSubmitted && (
            <>
              <ExamTimer
                secondsLeft={secondsLeft}
                setSecondsLeft={setSecondsLeft}
                isRunning={isTimerRunning}
                setIsRunning={setIsTimerRunning}
                onTimeExpired={handleSubmit}
              />
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer"
              >
                Finish & Submit
              </button>
            </>
          )}

          {examStarted && (
            <button
              onClick={() => {
                if (window.confirm('Reset this exam and clear saved progress?')) {
                  handleReset();
                }
              }}
              className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Reset Exam
            </button>
          )}
        </div>
      </div>

      {/* Instructions Screen */}
      {!examStarted && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-8 max-w-4xl mx-auto">
          {hasRestoredSession && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 flex items-center justify-between text-xs">
              <span>You have a saved exam session on this device. Click below to resume where you left off.</span>
              <button
                onClick={() => {
                  setExamStarted(true);
                  setIsTimerRunning(true);
                }}
                className="px-3 py-1.5 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-950"
              >
                Resume Saved Exam
              </button>
            </div>
          )}

          <div className="border-b border-stone-200 pb-6 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Macroeconomics Midterm Exam Instructions
            </h2>
            <p className="text-stone-600 text-sm mt-1">75 Minutes Duration · Chapters 7, 8, & 10</p>
          </div>

          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
              Student Full Name (First and Last):
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="e.g. Jordan Smith"
              className="w-full p-3 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800 font-medium"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">Exam Format (Total: 50 Marks):</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase">Part 1</div>
                <div className="text-sm font-bold text-stone-900">10 Multiple Choice Questions (20 pts)</div>
                <p className="text-xs text-stone-600">Covering GDP, CPI, unemployment, and loanable funds.</p>
              </div>
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase">Part 2</div>
                <div className="text-sm font-bold text-stone-900">6 Calculation & Graph Problems (15 pts)</div>
                <p className="text-xs text-stone-600">Solving circular flow, savings identity, and PV.</p>
              </div>
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase">Part 3</div>
                <div className="text-sm font-bold text-stone-900">1 Comprehensive Essay (15 pts)</div>
                <p className="text-xs text-stone-600">Analyzing government budget deficits and crowding out.</p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleStart}
              className="px-8 py-3.5 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer"
            >
              Start 75-Minute Timed Simulation →
            </button>
          </div>
        </div>
      )}

      {/* Active Exam Mode */}
      {examStarted && !examSubmitted && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200 text-xs font-semibold">
            <button
              onClick={() => setCurrentSection('mcq')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'mcq' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 1: Multiple Choice ({Object.keys(mcqAnswers).length}/10)
            </button>
            <button
              onClick={() => setCurrentSection('calc')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'calc' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 2: Calculation Problems ({Object.values(calcAnswers).filter((t) => t.trim().length > 0).length}/6)
            </button>
            <button
              onClick={() => setCurrentSection('essay')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'essay' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 3: Essay Question ({essayAnswer.trim().length > 20 ? 'Drafted' : 'Pending'})
            </button>
          </div>

          {/* Part 1: MCQ */}
          {currentSection === 'mcq' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">Part 1: Multiple Choice Questions</h3>
                  <p className="text-xs text-stone-600">10 Questions · 2 Marks Each</p>
                </div>
                <span className="text-xs font-bold text-stone-700">{Object.keys(mcqAnswers).length} / 10 answered</span>
              </div>

              <div className="space-y-6">
                {examMCQs.map((q, idx) => (
                  <div key={q.id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-amber-900 uppercase">Question {idx + 1} · Chapter {q.chapter}</span>
                    <p className="text-sm sm:text-base font-semibold text-stone-900">{q.question}</p>
                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isChosen = mcqAnswers[q.id] === oIdx;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => setMcqAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                              isChosen ? 'border-amber-800 bg-amber-50 text-amber-950 font-medium ring-1 ring-amber-800' : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold">{String.fromCharCode(65 + oIdx)}</span>
                            <span className="flex-1 mt-0.5">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentSection('calc')}
                  className="px-6 py-2.5 bg-amber-900 text-white rounded-xl text-xs font-semibold hover:bg-amber-950 flex items-center gap-1.5 shadow-xs"
                >
                  Proceed to Part 2: Calculations →
                </button>
              </div>
            </div>
          )}

          {/* Part 2: Calculations */}
          {currentSection === 'calc' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">Part 2: Calculation Problems</h3>
                  <p className="text-xs text-stone-600">6 Problems · 15 Marks Total</p>
                </div>
                <span className="text-xs font-bold text-stone-700">{Object.values(calcAnswers).filter((t) => t.trim().length > 0).length} / 6 answered</span>
              </div>

              <div className="space-y-6">
                {calcQuestions.map((q, idx) => (
                  <div key={q.id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-amber-900 uppercase">Problem {idx + 1} · Chapter {q.chapter}</span>
                    <h4 className="text-sm sm:text-base font-bold text-stone-900">{q.question}</h4>
                    <textarea
                      rows={3}
                      value={calcAnswers[q.id] || ''}
                      onChange={(e) => setCalcAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                      placeholder="Show your calculations and write your final answer..."
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentSection('mcq')}
                  className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50"
                >
                  ← Back to MCQs
                </button>
                <button
                  onClick={() => setCurrentSection('essay')}
                  className="px-6 py-2.5 bg-amber-900 text-white rounded-xl text-xs font-semibold hover:bg-amber-950 flex items-center gap-1.5 shadow-xs"
                >
                  Proceed to Part 3: Essay →
                </button>
              </div>
            </div>
          )}

          {/* Part 3: Essay */}
          {currentSection === 'essay' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200">
                <h3 className="font-serif font-bold text-base text-stone-900">Part 3: Comprehensive Essay Question</h3>
                <p className="text-xs text-stone-600">1 Question · 15 Marks · Analyze government budget deficits and crowding out.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
                <span className="text-xs font-bold text-amber-900 uppercase">Analytical Essay Prompt</span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  Analyze the impact of a sustained government budget deficit on the Market for Loanable Funds. Explain how government borrowing shifts demand, alters equilibrium interest rates, and causes "crowding out" of private investment spending. Support your analysis with loanable funds market graphs and the savings-investment identity.
                </h4>

                <textarea
                  rows={12}
                  value={essayAnswer}
                  onChange={(e) => setEssayAnswer(e.target.value)}
                  placeholder="Draft your essay here..."
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800 leading-relaxed font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentSection('calc')}
                  className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50"
                >
                  ← Back to Calculations
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-bold shadow-xs cursor-pointer"
                >
                  Submit & Grade Exam Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Review Screen */}
      {examSubmitted && (
        <div className="space-y-8">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">Examination Report</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">{studentName || 'Student'}’s Midterm Results</h2>
                <p className="text-xs text-stone-600 mt-1">Time elapsed: {Math.floor((4500 - secondsLeft) / 60)} minutes</p>
              </div>

              <div className="text-right">
                <div className="font-serif text-3xl font-bold text-stone-900">{totalScore} / 50</div>
                <div className="text-xs font-semibold text-stone-600">
                  Grade: {percentage}% ({percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D'})
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 text-center text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-500 block">MCQ (Auto)</span>
                <span className="font-bold text-base text-stone-900">{mcqCorrect} / 20</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-500 block">Calculations (Self)</span>
                <span className="font-bold text-base text-stone-900">{totalCalcScore} / 15</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-500 block">Essay (Self)</span>
                <span className="font-bold text-base text-stone-900">{essaySelfScore} / 15</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-stone-100">
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 flex items-center gap-1.5 shadow-2xs"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Retake Fresh Simulation
              </button>
            </div>
          </div>

          {/* MCQ Review */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-200 pb-3">
              Part 1: Multiple Choice Review ({mcqCorrect} / 10 correct)
            </h3>
            <div className="space-y-4">
              {examMCQs.map((q, idx) => {
                const userChoice = mcqAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div key={q.id} className="p-4 rounded-xl border border-stone-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-bold">
                      <span>Q{idx + 1}. Chapter {q.chapter}</span>
                      {isCorrect ? <span className="text-emerald-700">Correct (+2)</span> : <span className="text-rose-700">Incorrect (0/2)</span>}
                    </div>
                    <p className="text-sm font-semibold text-stone-800">{q.question}</p>
                    <p className={isCorrect ? 'text-emerald-800' : 'text-rose-800'}>
                      Your answer: {userChoice !== undefined ? q.options[userChoice] : 'Unanswered'}
                    </p>
                    {!isCorrect && <p className="text-emerald-800 font-semibold">Correct answer: {q.options[q.correctIndex]}</p>}
                    <p className="text-stone-600 bg-stone-50 p-2 rounded border border-stone-200">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
