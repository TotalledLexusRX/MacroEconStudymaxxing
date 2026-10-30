import React, { useState, useEffect } from 'react';
import { mcqBank, quiz1Questions, quiz2Questions, inClassWritingPrompts, longEssayPrompts, bonusQuestions } from '../data/quizBank';
import { MCQQuestion, ShortAnswerQuestion, EssayPrompt } from '../types';
import { ExamTimer } from './ExamTimer';
import { FileText, Book, Award, CheckCircle2, XCircle, AlertTriangle, HelpCircle, ArrowRight, ArrowLeft, RefreshCw, Sparkles, Check, ChevronRight } from 'lucide-react';

interface MockExamProps {
  onGoToSection?: (section: string) => void;
}

// 10 Short Answers: 6 from Quiz 1 & 2 (2/3 rule), 4 key lecture review concepts
const examShortAnswerQuestions: ShortAnswerQuestion[] = [
  quiz1Questions[1], // System Justification Theory
  quiz1Questions[2], // Epistemology in history
  quiz1Questions[7], // 2 things kinship governs
  quiz2Questions[0], // 1649 mourning wars
  quiz2Questions[1], // English vs Spanish justification
  quiz2Questions[2], // The Great Dying
  quiz2Questions[3], // Middle Ground diplomacy & irony
  quiz2Questions[6], // Settler livestock conflicts
  {
    id: 'sa-amherst',
    source: 'Lecture Review',
    question: 'How did British General Jeffrey Amherst alter diplomatic relations with Indigenous nations after 1760, and what was the consequence?',
    modelAnswer:
      'Amherst abolished the protocol of gift giving (calling gifts "bribes"), raised trade prices, cut off gunpowder, and refused condolence ceremonies. This treatment of sovereign allies as conquered subjects alienated Indigenous nations and directly provoked Pontiac’s Resistance of 1763.',
    keyPoints: [
      'Abolished gift diplomacy / called gifts bribes',
      'Cut off ammunition and blacksmiths',
      'Directly caused Pontiac’s Resistance (1763)'
    ],
    lengthGuide: '1-3 full sentences',
    commonPitfalls: 'Mention Amherst by name and connect his anti-gift policy directly to Pontiac’s Resistance.'
  },
  {
    id: 'sa-proclamation',
    source: 'Lecture Review',
    question: 'What was the core restriction of the Royal Proclamation of 1763 regarding Indigenous lands?',
    modelAnswer:
      'The Royal Proclamation reserved all western lands beyond the Appalachian divide as Indigenous hunting grounds under Crown protection and strictly prohibited private individuals and colonies from purchasing Indigenous land, vesting sole purchase authority in the British Crown through public treaties.',
    keyPoints: [
      'Reserved land west of Appalachian divide as hunting grounds',
      'Prohibited private settler/colonial purchases',
      'Vested exclusive purchase power in the Crown through public treaties'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Remember to state that only the Crown was permitted to purchase Indigenous title.'
  }
];

// 10 MCQs
const examMCQs = mcqBank.slice(0, 10);

// 2 Short Essays (drawn from in-class writings)
const examShortEssays: EssayPrompt[] = [
  inClassWritingPrompts[2], // Gift Exchange vs Market Exchange
  inClassWritingPrompts[5]  // Donnakoh-noh and the French
];

// 1 Long Essay
const examLongEssay: EssayPrompt = longEssayPrompts[0]; // British-Indigenous Relations 1754-1783

// 2 Bonus Questions
const examBonus = bonusQuestions.slice(0, 2);

const STORAGE_KEY_EXAM = 'indg1220_mock_exam_state';

const loadSavedExamState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_EXAM);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse saved exam state', e);
    return null;
  }
};

export const MockExam: React.FC<MockExamProps> = () => {
  const savedInitial = loadSavedExamState();

  // Exam metadata & flow
  const [examStarted, setExamStarted] = useState<boolean>(savedInitial?.examStarted ?? false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(savedInitial?.examSubmitted ?? false);
  const [studentName, setStudentName] = useState<string>(savedInitial?.studentName ?? '');
  const [currentSection, setCurrentSection] = useState<'instructions' | 'mcq' | 'shortAnswer' | 'shortEssay' | 'longEssay' | 'bonus' | 'review'>(
    savedInitial?.currentSection ?? 'instructions'
  );

  // Timer: 75 minutes = 4500 seconds
  const [secondsLeft, setSecondsLeft] = useState<number>(savedInitial?.secondsLeft ?? 4500);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(
    savedInitial?.examStarted && !savedInitial?.examSubmitted ? true : false
  );

  // User responses
  const [mcqAnswers, setMcqAnswers] = useState<{ [id: string]: number }>(savedInitial?.mcqAnswers ?? {});
  const [shortAnswers, setShortAnswers] = useState<{ [id: string]: string }>(savedInitial?.shortAnswers ?? {});
  const [shortEssayAnswers, setShortEssayAnswers] = useState<{ [id: string]: string }>(savedInitial?.shortEssayAnswers ?? {});
  const [longEssayAnswer, setLongEssayAnswer] = useState<string>(savedInitial?.longEssayAnswer ?? '');
  const [bonusAnswers, setBonusAnswers] = useState<{ [id: string]: string }>(savedInitial?.bonusAnswers ?? {});

  // Self-grading rubric marks after submission
  const [shortAnswerSelfScores, setShortAnswerSelfScores] = useState<{ [id: string]: number }>(savedInitial?.shortAnswerSelfScores ?? {});
  const [shortEssaySelfScores, setShortEssaySelfScores] = useState<{ [id: string]: number }>(savedInitial?.shortEssaySelfScores ?? {});
  const [longEssaySelfScore, setLongEssaySelfScore] = useState<number>(savedInitial?.longEssaySelfScore ?? 20);
  const [bonusSelfScores, setBonusSelfScores] = useState<{ [id: string]: number }>(savedInitial?.bonusSelfScores ?? {});

  // Last saved time indicator
  const [lastSavedStr, setLastSavedStr] = useState<string>(savedInitial?.lastSaved ?? '');
  const [hasRestoredSession, setHasRestoredSession] = useState<boolean>(Boolean(savedInitial?.examStarted));

  // Autosave effect: triggers whenever any response, score, or status changes
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
        shortAnswers,
        shortEssayAnswers,
        longEssayAnswer,
        bonusAnswers,
        shortAnswerSelfScores,
        shortEssaySelfScores,
        longEssaySelfScore,
        bonusSelfScores,
        lastSaved: timeStr
      };
      localStorage.setItem(STORAGE_KEY_EXAM, JSON.stringify(stateToSave));
      setLastSavedStr(timeStr);
    } catch (e) {
      console.error('Failed to autosave exam state', e);
    }
  }, [
    examStarted,
    examSubmitted,
    studentName,
    currentSection,
    secondsLeft,
    mcqAnswers,
    shortAnswers,
    shortEssayAnswers,
    longEssayAnswer,
    bonusAnswers,
    shortAnswerSelfScores,
    shortEssaySelfScores,
    longEssaySelfScore,
    bonusSelfScores
  ]);

  // Start exam handler
  const handleStartExam = () => {
    setExamStarted(true);
    setIsTimerRunning(true);
    setCurrentSection('mcq');
    setHasRestoredSession(false);
  };

  // Submit exam handler
  const handleSubmitExam = () => {
    setIsTimerRunning(false);
    setExamSubmitted(true);
    setCurrentSection('review');
  };

  // Reset exam & clear autosave
  const handleRetakeExam = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_EXAM);
    } catch (e) {
      console.error(e);
    }
    setExamStarted(false);
    setExamSubmitted(false);
    setSecondsLeft(4500);
    setIsTimerRunning(false);
    setMcqAnswers({});
    setShortAnswers({});
    setShortEssayAnswers({});
    setLongEssayAnswer('');
    setBonusAnswers({});
    setShortAnswerSelfScores({});
    setShortEssaySelfScores({});
    setLongEssaySelfScore(20);
    setBonusSelfScores({});
    setLastSavedStr('');
    setHasRestoredSession(false);
    setCurrentSection('instructions');
  };

  // MCQ Calculations
  let mcqCorrectCount = 0;
  examMCQs.forEach((q) => {
    if (mcqAnswers[q.id] === q.correctIndex) {
      mcqCorrectCount++;
    }
  });

  // Score calculations
  const totalShortAnswerScore = Object.values(shortAnswerSelfScores).reduce((a, b) => a + b, 0);
  const totalShortEssayScore = Object.values(shortEssaySelfScores).reduce((a, b) => a + b, 0);
  const totalBonusScore = Object.values(bonusSelfScores).reduce((a, b) => a + b, 0);

  // Total out of 75 (10 MCQ + 20 SA + 20 Short Essay + 25 Long Essay = 75 pts + up to 4 bonus)
  const totalScore = mcqCorrectCount + totalShortAnswerScore + totalShortEssayScore + longEssaySelfScore + totalBonusScore;
  const percentage = Math.min(100, Math.round((totalScore / 75) * 100));

  // Name check helper for Dr. Miller's explicit rule
  const isNameAbbreviated = studentName.trim() && (
    studentName.includes('.') ||
    studentName.trim().split(/\s+/).length < 2 ||
    studentName.length < 5
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Bar with Timer, Status & Autosave Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-stone-200">
        <div>
          <span className="text-xs font-bold text-amber-900 tracking-wider uppercase block">
            INDG 1220 A03 · Indigenous Peoples in Canada I
          </span>
          <div className="flex items-center gap-3 mt-0.5">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Official Midterm Examination Simulation
            </h1>
            {lastSavedStr && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium" title="Progress saved in your browser">
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
                onTimeExpired={handleSubmitExam}
              />
              <button
                onClick={handleSubmitExam}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer"
              >
                Finish & Submit
              </button>
            </>
          )}

          {examStarted && (
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to reset this exam and clear your saved progress?')) {
                  handleRetakeExam();
                }
              }}
              className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors"
              title="Clear saved responses and restart"
            >
              Reset Exam
            </button>
          )}
        </div>
      </div>

      {/* Screen 1: Instructions & Student Verification */}
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
              Midterm Examination Information
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Thursday 10:00 AM – 11:15 AM · 75 Minutes Duration
            </p>
          </div>

          {/* Name entry field with Dr. Miller rule */}
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
              Student Full Name (Slide 5: "Write full name, first and last. Ex: Cara Ginter not C. Ginter")
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="e.g. Cara Ginter"
              className="w-full p-3 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800 font-medium"
            />
            {isNameAbbreviated && (
              <p className="text-xs text-amber-800 flex items-center gap-1 font-medium mt-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Please write full first and last name without single-letter abbreviations.
              </p>
            )}
          </div>

          {/* Exam Structure Breakdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
              Exact Midterm Structure (Slide 7 Breakdown):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase">Printed Exam Paper</div>
                <div className="text-sm font-bold text-stone-900">10 Multiple Choice Questions (10 pts)</div>
                <p className="text-xs text-stone-600">From any lecture or reading up to Oct 22.</p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase">Printed Exam Paper</div>
                <div className="text-sm font-bold text-stone-900">10 Short Answer Questions (20 pts)</div>
                <p className="text-xs text-stone-600">~2/3 taken directly from Quizzes 1 & 2! 1-3 full sentences.</p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase">Exam Booklet</div>
                <div className="text-sm font-bold text-stone-900">2 Short Essay Questions (20 pts)</div>
                <p className="text-xs text-stone-600">~2/3 drawn from in-class writings! 1 or more paragraphs.</p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase">Exam Booklet</div>
                <div className="text-sm font-bold text-stone-900">1 Long Essay Question (25 pts)</div>
                <p className="text-xs text-stone-600">Multiple paragraphs synthesizing lectures. "Why, not just what."</p>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-1 sm:col-span-2">
                <div className="text-xs font-bold text-amber-950 uppercase">Bonus Section (Exam Booklet)</div>
                <div className="text-sm font-bold text-stone-900">2 Bonus Questions (Up to 4 Bonus Pts)</div>
                <p className="text-xs text-stone-700">Specific historical terms from lectures (e.g. Qallunaat, Shanawdithit, Hochelaga).</p>
              </div>
            </div>
          </div>

          {/* Exam Rules & Advice */}
          <div className="p-4 rounded-xl bg-stone-100 text-stone-700 text-xs leading-relaxed space-y-2">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <Book className="w-4 h-4 text-amber-900" /> Key Advice from Midterm Review Slides:
            </div>
            <ul className="space-y-1">
              <li>• <span className="font-semibold text-stone-900">Slide 6:</span> "Read the whole exam first to pace yourself. Answer questions you know first, then tackle the rest."</li>
              <li>• <span className="font-semibold text-stone-900">Slide 13:</span> "Do not rely on Google for your definitions; use Dr. Miller’s slide definitions."</li>
              <li>• <span className="font-semibold text-stone-900">Slide 10:</span> "Focus on the why, not just the what. E.g., '_________ happened because _________.'"</li>
            </ul>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleStartExam}
              className="px-8 py-3.5 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer hover:shadow-md"
            >
              Start 75-Minute Timed Simulation →
            </button>
          </div>
        </div>
      )}

      {/* Screen 2: Active Exam Mode */}
      {examStarted && !examSubmitted && (
        <div className="space-y-6">
          {/* Section Navigation Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200 text-xs font-semibold">
            <button
              onClick={() => setCurrentSection('mcq')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'mcq'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 1: 10 MCQs ({Object.keys(mcqAnswers).length}/10)
            </button>
            <button
              onClick={() => setCurrentSection('shortAnswer')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'shortAnswer'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 2: 10 Short Answers ({Object.values(shortAnswers).filter((t) => t.trim().length > 5).length}/10)
            </button>
            <button
              onClick={() => setCurrentSection('shortEssay')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'shortEssay'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 3: 2 Short Essays ({Object.values(shortEssayAnswers).filter((t) => t.trim().length > 10).length}/2)
            </button>
            <button
              onClick={() => setCurrentSection('longEssay')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'longEssay'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 4: 1 Long Essay ({longEssayAnswer.trim().length > 20 ? 'Drafted' : 'Pending'})
            </button>
            <button
              onClick={() => setCurrentSection('bonus')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentSection === 'bonus'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              Part 5: 2 Bonus ({Object.values(bonusAnswers).filter((t) => t.trim().length > 0).length}/2)
            </button>
          </div>

          {/* Section: Part 1 - 10 Multiple Choice Questions */}
          {currentSection === 'mcq' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    Part 1: Multiple Choice Questions (Printed Exam Sheet)
                  </h3>
                  <p className="text-xs text-stone-600">
                    10 Questions · 1 Mark Each · Answer all questions.
                  </p>
                </div>
                <span className="text-xs font-bold text-stone-700">
                  {Object.keys(mcqAnswers).length} of 10 answered
                </span>
              </div>

              <div className="space-y-6">
                {examMCQs.map((q, idx) => (
                  <div key={q.id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900 uppercase">
                        Question {idx + 1}
                      </span>
                      <span className="text-[11px] text-stone-600">{q.lecture}</span>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-stone-900">
                      {q.question}
                    </p>

                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isChosen = mcqAnswers[q.id] === oIdx;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => setMcqAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                              isChosen
                                ? 'border-amber-800 bg-amber-50 text-amber-950 font-medium ring-1 ring-amber-800'
                                : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
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
                  onClick={() => setCurrentSection('shortAnswer')}
                  className="px-6 py-2.5 bg-amber-900 text-white rounded-xl text-xs font-semibold hover:bg-amber-950 flex items-center gap-1.5 shadow-xs"
                >
                  Proceed to Part 2: Short Answers →
                </button>
              </div>
            </div>
          )}

          {/* Section: Part 2 - 10 Short Answer Questions */}
          {currentSection === 'shortAnswer' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    Part 2: Short Answer Questions (Printed Exam Sheet)
                  </h3>
                  <p className="text-xs text-stone-600">
                    10 Questions · 2 Marks Each · Aim for 1-3 full sentences.
                  </p>
                </div>
                <span className="text-xs font-bold text-stone-700">
                  {Object.values(shortAnswers).filter((t) => t.trim().length > 5).length} of 10 answered
                </span>
              </div>

              <div className="space-y-6">
                {examShortAnswerQuestions.map((q, idx) => (
                  <div key={q.id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900 uppercase">
                        Question {idx + 1} · {q.lengthGuide}
                      </span>
                      <span className="text-[11px] text-stone-600">Source: {q.source}</span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-stone-900">
                      {q.question}
                    </h4>

                    <textarea
                      rows={3}
                      value={shortAnswers[q.id] || ''}
                      onChange={(e) => setShortAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                      placeholder="Write your 1-3 sentence response on the printed exam..."
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:bg-white"
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
                  onClick={() => setCurrentSection('shortEssay')}
                  className="px-6 py-2.5 bg-amber-900 text-white rounded-xl text-xs font-semibold hover:bg-amber-950 flex items-center gap-1.5 shadow-xs"
                >
                  Proceed to Part 3: Short Essays →
                </button>
              </div>
            </div>
          )}

          {/* Section: Part 3 - 2 Short Essays */}
          {currentSection === 'shortEssay' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    Part 3: Short Essay Questions (Exam Booklet)
                  </h3>
                  <p className="text-xs text-stone-600">
                    2 Questions · 10 Marks Each · Write in the exam booklet (1 or more paragraphs).
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {examShortEssays.map((essay, idx) => (
                  <div key={essay.id} className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900 uppercase">
                        Short Essay {idx + 1} · {essay.recommendedLength}
                      </span>
                      <span className="text-[11px] text-stone-600">Source: {essay.source}</span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-stone-900">
                      {essay.prompt}
                    </h4>

                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700">
                      <span className="font-bold text-stone-900">Remember:</span> Focus on the "why, not just the what." Provide specific details from lectures.
                    </div>

                    <textarea
                      rows={8}
                      value={shortEssayAnswers[essay.id] || ''}
                      onChange={(e) => setShortEssayAnswers((prev) => ({ ...prev, [essay.id]: e.target.value }))}
                      placeholder="Write your short essay here (1-2 paragraphs minimum)..."
                      className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:bg-white leading-relaxed font-sans"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentSection('shortAnswer')}
                  className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50"
                >
                  ← Back to Short Answers
                </button>
                <button
                  onClick={() => setCurrentSection('longEssay')}
                  className="px-6 py-2.5 bg-amber-900 text-white rounded-xl text-xs font-semibold hover:bg-amber-950 flex items-center gap-1.5 shadow-xs"
                >
                  Proceed to Part 4: Long Essay →
                </button>
              </div>
            </div>
          )}

          {/* Section: Part 4 - 1 Long Essay */}
          {currentSection === 'longEssay' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200">
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Part 4: Long Essay Question (Exam Booklet)
                </h3>
                <p className="text-xs text-stone-600">
                  1 Synthesis Question · 25 Marks · Multiple paragraphs (1-2 pages in booklet).
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 uppercase">
                    Major Synthesis Essay
                  </span>
                  <span className="text-xs text-stone-600">
                    Recommended: Multiple Paragraphs
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  {examLongEssay.prompt}
                </h4>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1">
                  <span className="font-bold block">Organization Checklist (Slide 10):</span>
                  <p>1. Introduction with argument (Thesis statement: "[______] happened because [______]")</p>
                  <p>2. Body paragraphs with specific historical details, dates, and nations</p>
                  <p>3. Conclusion synthesizing broader theme. Citations are not required.</p>
                </div>

                <textarea
                  rows={14}
                  value={longEssayAnswer}
                  onChange={(e) => setLongEssayAnswer(e.target.value)}
                  placeholder="Draft your long essay here in the exam booklet..."
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:bg-white leading-relaxed font-sans"
                />

                <div className="text-xs text-stone-600 flex justify-between">
                  <span>{longEssayAnswer.trim() ? longEssayAnswer.trim().split(/\s+/).length : 0} words</span>
                  <span>{longEssayAnswer.trim() ? longEssayAnswer.split(/\n\s*\n/).filter(Boolean).length : 0} paragraphs</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentSection('shortEssay')}
                  className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50"
                >
                  ← Back to Short Essays
                </button>
                <button
                  onClick={() => setCurrentSection('bonus')}
                  className="px-6 py-2.5 bg-amber-900 text-white rounded-xl text-xs font-semibold hover:bg-amber-950 flex items-center gap-1.5 shadow-xs"
                >
                  Proceed to Bonus Questions →
                </button>
              </div>
            </div>
          )}

          {/* Section: Part 5 - 2 Bonus Questions */}
          {currentSection === 'bonus' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h3 className="font-serif font-bold text-base text-amber-950">
                  Part 5: Bonus Questions (Exam Booklet)
                </h3>
                <p className="text-xs text-amber-900">
                  2 Questions · Up to 4 Bonus Points · Could come from any lecture.
                </p>
              </div>

              <div className="space-y-6">
                {examBonus.map((b, idx) => (
                  <div key={b.id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-amber-900 uppercase">
                      Bonus Question {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900">{b.question}</h4>
                    <input
                      type="text"
                      value={bonusAnswers[b.id] || ''}
                      onChange={(e) => setBonusAnswers((prev) => ({ ...prev, [b.id]: e.target.value }))}
                      placeholder="Your answer..."
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h4 className="font-serif text-lg font-bold">Ready to complete your examination?</h4>
                  <p className="text-stone-300 text-xs">
                    Double check your name ({studentName || 'Not entered!'}) and verify your answers.
                  </p>
                </div>
                <button
                  onClick={handleSubmitExam}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-sm font-bold shadow-xs cursor-pointer transition-colors"
                >
                  Submit & Grade Exam Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Screen 3: Post-Exam Review & Grading Rubric */}
      {examSubmitted && (
        <div className="space-y-8">
          {/* Score Header Card */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                  Examination Report & Rubric
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {studentName ? studentName : 'Student'}’s Midterm Results
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Time elapsed: {Math.floor((4500 - secondsLeft) / 60)} minutes
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-serif text-3xl font-bold text-stone-900">
                    {totalScore} / 75
                  </div>
                  <div className="text-xs font-semibold text-stone-600">
                    Estimated Grade: {percentage}% ({percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D'})
                  </div>
                </div>
              </div>
            </div>

            {/* Score Breakdown Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 text-center text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-600 block">MCQ (Auto)</span>
                <span className="font-bold text-base text-stone-900">{mcqCorrectCount} / 10</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-600 block">Short Answers</span>
                <span className="font-bold text-base text-stone-900">{totalShortAnswerScore} / 20</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-600 block">Short Essays</span>
                <span className="font-bold text-base text-stone-900">{totalShortEssayScore} / 20</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-600 block">Long Essay</span>
                <span className="font-bold text-base text-stone-900">{longEssaySelfScore} / 25</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 col-span-2 sm:col-span-1">
                <span className="text-amber-900 block">Bonus Points</span>
                <span className="font-bold text-base text-amber-950">+{totalBonusScore}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-stone-100">
              <button
                onClick={handleRetakeExam}
                className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 flex items-center gap-1.5 shadow-2xs"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Retake Fresh Simulation
              </button>
            </div>
          </div>

          {/* Section 1 Review: MCQs */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-200 pb-3">
              Part 1: Multiple Choice Grading ({mcqCorrectCount} / 10)
            </h3>
            <div className="space-y-4">
              {examMCQs.map((q, idx) => {
                const userChoice = mcqAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div key={q.id} className="p-4 rounded-xl border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-900">Q{idx + 1}. {q.lecture}</span>
                      {isCorrect ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Correct (+1)
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Incorrect (0/1)
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-stone-800">{q.question}</p>

                    <div className="text-xs space-y-1">
                      <p className={isCorrect ? 'text-emerald-800' : 'text-rose-800'}>
                        <span className="font-semibold">Your selection: </span>
                        {userChoice !== undefined ? `${String.fromCharCode(65 + userChoice)}. ${q.options[userChoice]}` : 'Unanswered'}
                      </p>
                      {!isCorrect && (
                        <p className="text-emerald-800">
                          <span className="font-semibold">Correct Answer: </span>
                          {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                        </p>
                      )}
                    </div>

                    <div className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-200/80">
                      <span className="font-bold">Explanation: </span>
                      {q.explanation} {q.slideRef && `(Reference: ${q.slideRef})`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2 Review: Short Answers Rubric Checklist */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-200 pb-3">
              Part 2: Short Answers Rubric & Model Answers
            </h3>
            <p className="text-xs text-stone-600">
              Grade your answers (0 to 2 points each) by comparing with Dr. Miller's required key points and slide definitions.
            </p>

            <div className="space-y-6">
              {examShortAnswerQuestions.map((q, idx) => {
                const userText = shortAnswers[q.id] || '';
                const currentScore = shortAnswerSelfScores[q.id] || 0;

                return (
                  <div key={q.id} className="p-5 rounded-xl border border-stone-200 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-xs font-bold text-amber-900">
                        Q{idx + 1}. {q.question}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-stone-600 font-semibold">Award Score:</span>
                        {[0, 1, 2].map((pts) => (
                          <button
                            key={pts}
                            onClick={() => setShortAnswerSelfScores((prev) => ({ ...prev, [q.id]: pts }))}
                            className={`w-7 h-7 rounded-md text-xs font-bold border transition-colors ${
                              currentScore === pts
                                ? 'bg-amber-900 text-white border-amber-900'
                                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                            }`}
                          >
                            {pts}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-800">
                      <span className="font-semibold block text-stone-900 mb-1">Your Written Answer:</span>
                      {userText ? userText : <span className="italic text-stone-600">No answer provided.</span>}
                    </div>

                    <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs space-y-1">
                      <span className="font-bold text-amber-950 block">Dr. Miller’s Model Answer:</span>
                      <p className="text-stone-900 leading-relaxed font-medium">{q.modelAnswer}</p>
                    </div>

                    <div className="text-xs text-stone-700">
                      <span className="font-semibold block mb-1">Key Points Required for Full Marks:</span>
                      <ul className="space-y-1">
                        {q.keyPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3 Review: Short Essays */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-200 pb-3">
              Part 3: Short Essays Evaluation
            </h3>
            <div className="space-y-6">
              {examShortEssays.map((essay, idx) => {
                const userText = shortEssayAnswers[essay.id] || '';
                const currentScore = shortEssaySelfScores[essay.id] || 0;

                return (
                  <div key={essay.id} className="p-5 rounded-xl border border-stone-200 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-xs font-bold text-amber-900">
                        Short Essay {idx + 1}: {essay.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-stone-600 font-semibold">Award Score (out of 10):</span>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={currentScore}
                          onChange={(e) => setShortEssaySelfScores((prev) => ({ ...prev, [essay.id]: Number(e.target.value) }))}
                          className="w-14 p-1 text-center border border-stone-300 rounded text-xs font-bold"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-800">
                      <span className="font-semibold block text-stone-900 mb-1">Your Written Answer:</span>
                      {userText ? userText : <span className="italic text-stone-600">No answer provided.</span>}
                    </div>

                    <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs space-y-2">
                      <span className="font-bold text-amber-950 block">Model Essay Key Elements:</span>
                      <p className="text-stone-900 italic font-serif leading-relaxed">{essay.thesisFormula}</p>
                      <div className="prose text-xs text-stone-800 max-h-48 overflow-y-auto pr-2">
                        {essay.modelResponse}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4 Review: Long Essay */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-200 pb-3">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Part 4: Long Essay Evaluation
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-600 font-semibold">Award Score (out of 25):</span>
                <input
                  type="number"
                  min="0"
                  max="25"
                  value={longEssaySelfScore}
                  onChange={(e) => setLongEssaySelfScore(Number(e.target.value))}
                  className="w-16 p-1 text-center border border-stone-300 rounded text-xs font-bold"
                />
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl text-xs text-stone-800 space-y-1">
              <span className="font-semibold block text-stone-900">Your Long Essay Submission:</span>
              <p className="whitespace-pre-line leading-relaxed">
                {longEssayAnswer ? longEssayAnswer : <span className="italic text-stone-600">No answer provided.</span>}
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs space-y-2">
              <span className="font-bold text-amber-950 block">Exemplary Long Essay Answer (Dr. Miller Focus):</span>
              <div className="prose text-xs text-stone-900 max-h-64 overflow-y-auto leading-relaxed">
                {examLongEssay.modelResponse}
              </div>
            </div>
          </div>

          {/* Section 5 Review: Bonus Questions */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-950 border-b border-stone-200 pb-3">
              Part 5: Bonus Questions Review
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examBonus.map((b) => (
                <div key={b.id} className="p-4 rounded-xl border border-stone-200 space-y-2 text-xs">
                  <span className="font-bold text-stone-900">{b.question}</span>
                  <p className="text-stone-700">
                    <span className="font-semibold">Your Answer: </span>
                    {bonusAnswers[b.id] || '<blank>'}
                  </p>
                  <p className="text-emerald-800 font-bold">
                    Official Answer: {b.answer}
                  </p>
                  <p className="text-stone-600 text-[11px]">{b.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
