import React, { useState, useEffect } from 'react';
import { inClassWritingPrompts, longEssayPrompts } from '../data/quizBank';
import { EssayPrompt } from '../types';
import { FileText, CheckCircle2, Lightbulb, BookOpen, PenTool, Sparkles, ChevronRight, Check } from 'lucide-react';

const STORAGE_KEY_ESSAYS = 'indg1220_essay_drafts';

const loadSavedEssayState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ESSAYS);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse saved essays', e);
    return null;
  }
};

export const EssayWorkshop: React.FC = () => {
  const allPrompts = [...inClassWritingPrompts, ...longEssayPrompts];
  const saved = loadSavedEssayState();

  const [selectedPromptId, setSelectedPromptId] = useState<string>(saved?.selectedPromptId ?? allPrompts[0].id);
  const [activeTab, setActiveTab] = useState<'prompt' | 'thesisBuilder' | 'modelEssay'>(saved?.activeTab ?? 'prompt');
  
  // Thesis builder state
  const [thesisSubject, setThesisSubject] = useState<string>(saved?.thesisSubject ?? '');
  const [thesisCause, setThesisCause] = useState<string>(saved?.thesisCause ?? '');
  const [thesisSignificance, setThesisSignificance] = useState<string>(saved?.thesisSignificance ?? '');

  // Practice writing draft state
  const [userDrafts, setUserDrafts] = useState<{ [id: string]: string }>(saved?.userDrafts ?? {});
  const [lastSavedStr, setLastSavedStr] = useState<string>(saved?.lastSaved ?? '');

  // Autosave effect
  useEffect(() => {
    try {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const stateToSave = {
        selectedPromptId,
        activeTab,
        thesisSubject,
        thesisCause,
        thesisSignificance,
        userDrafts,
        lastSaved: timeStr
      };
      localStorage.setItem(STORAGE_KEY_ESSAYS, JSON.stringify(stateToSave));
      setLastSavedStr(timeStr);
    } catch (e) {
      console.error('Failed to autosave essays', e);
    }
  }, [selectedPromptId, activeTab, thesisSubject, thesisCause, thesisSignificance, userDrafts]);

  const currentPrompt = allPrompts.find((p) => p.id === selectedPromptId) || allPrompts[0];
  const currentDraft = userDrafts[currentPrompt.id] || '';

  const wordCount = currentDraft.trim() ? currentDraft.trim().split(/\s+/).length : 0;
  const paragraphCount = currentDraft.trim() ? currentDraft.split(/\n\s*\n/).filter(Boolean).length : 0;

  const handleDraftChange = (text: string) => {
    setUserDrafts((prev) => ({ ...prev, [currentPrompt.id]: text }));
  };

  const generatedThesis = thesisSubject && thesisCause
    ? `${thesisSubject} occurred because ${thesisCause}${thesisSignificance ? `, ultimately demonstrating that ${thesisSignificance}` : ''}.`
    : '';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Title & Midterm Instructions */}
      <div className="mb-6 pb-4 border-b border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Essay Workshop: Short & Long Answers
            </h1>
            <p className="text-stone-600 text-sm mt-1">
              Master the in-class writing questions (which form ~2/3 of the midterm Short Essays) and prepare for the comprehensive Long Essay.
            </p>
          </div>

          {lastSavedStr && (
            <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium">
              <Check className="w-3 h-3 text-emerald-600" /> Drafts auto-saved ({lastSavedStr})
            </span>
          )}
        </div>

        {/* Exam Guidance Callout directly from Slide 10 */}
        <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-800 text-xs sm:text-sm space-y-1">
          <div className="font-bold text-amber-950 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-800" /> Dr. Miller's Long Essay Golden Rule (Review Slide 10):
          </div>
          <p className="text-stone-700">
            <span className="font-semibold text-amber-950">"Focus on the why, not just the what."</span> Use the formula:{' '}
            <span className="font-mono bg-white px-2 py-0.5 rounded-sm border border-amber-300 text-amber-950 font-semibold">
              "[___________] happened because [_________]."
            </span>{' '}
            Structure your essay with an Introduction with an argument, Body paragraphs with specific lecture details, and a Conclusion. Citations are not required.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Prompts List */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
            Select Writing Prompt
          </span>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-amber-900 block pt-1">
              Short Essay (from In-Class Writings)
            </span>
            {inClassWritingPrompts.map((p) => {
              const isSelected = p.id === selectedPromptId;
              const hasDraft = (userDrafts[p.id] || '').length > 20;

              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPromptId(p.id);
                    setActiveTab('prompt');
                  }}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'border-amber-800 bg-amber-50/80 font-semibold text-amber-950 ring-1 ring-amber-800 shadow-xs'
                      : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-[11px] text-stone-600 block mb-0.5">
                      {p.source}
                    </span>
                    <span className="line-clamp-2">{p.title}</span>
                  </div>
                  {hasDraft && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" title="Draft in progress" />
                  )}
                </button>
              );
            })}

            <span className="text-xs font-semibold text-amber-900 block pt-3">
              Long Essay (Multi-Paragraph Synthesis)
            </span>
            {longEssayPrompts.map((p) => {
              const isSelected = p.id === selectedPromptId;
              const hasDraft = (userDrafts[p.id] || '').length > 20;

              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPromptId(p.id);
                    setActiveTab('prompt');
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'border-amber-800 bg-amber-50/80 font-semibold text-amber-950 ring-1 ring-amber-800 shadow-xs'
                      : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-[11px] text-amber-900 font-bold block mb-0.5">
                      ★ Long Essay Synthesis
                    </span>
                    <span className="line-clamp-2">{p.title}</span>
                  </div>
                  {hasDraft && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" title="Draft in progress" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Prompt Workspace */}
        <div className="lg:col-span-8">
          {/* Sub Navigation */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('prompt')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'prompt'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 bg-stone-100'
                }`}
              >
                1. Prompt & Practice Drafting
              </button>
              <button
                onClick={() => setActiveTab('thesisBuilder')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'thesisBuilder'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 bg-stone-100'
                }`}
              >
                2. "Why vs What" Thesis Builder
              </button>
              <button
                onClick={() => setActiveTab('modelEssay')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'modelEssay'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 bg-stone-100'
                }`}
              >
                3. Full Model Essay & Rubric
              </button>
            </div>

            <span className="text-xs text-stone-600 font-medium hidden sm:inline">
              Target: {currentPrompt.recommendedLength}
            </span>
          </div>

          {/* Tab 1: Prompt & Drafting Box */}
          {activeTab === 'prompt' && (
            <div className="space-y-6">
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    {currentPrompt.source} · {currentPrompt.type === 'long' ? 'Long Essay (Multiple Paragraphs)' : 'Short Essay (1+ Paragraph)'}
                  </span>
                  <span className="text-xs text-stone-600 font-medium">
                    Recommended: {currentPrompt.recommendedLength}
                  </span>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  {currentPrompt.prompt}
                </h2>

                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700">
                  <span className="font-bold text-stone-900">Recommended Thesis Formula: </span>
                  <span className="italic">{currentPrompt.thesisFormula}</span>
                </div>
              </div>

              {/* Step-by-Step Structural Outline */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
                  Recommended Outline & Key Evidence to Cite
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPrompt.outline.map((sec, oIdx) => (
                    <div key={oIdx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                      <h4 className="text-xs font-bold text-stone-900 mb-2">{sec.section}</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-amber-800 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice Writing Draft Box */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <PenTool className="w-3.5 h-3.5 text-amber-800" /> Practice Drafting Your Essay
                  </span>
                  <div className="text-xs text-stone-600 flex items-center gap-3">
                    <span>{wordCount} words</span>
                    <span aria-hidden="true">·</span>
                    <span>{paragraphCount} paragraphs</span>
                  </div>
                </div>

                <textarea
                  rows={10}
                  value={currentDraft}
                  onChange={(e) => handleDraftChange(e.target.value)}
                  placeholder="Draft your essay here. Lead with a clear argument answering 'why, not just what', support with specific lecture details, and conclude cleanly..."
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:bg-white leading-relaxed font-sans"
                />

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-stone-600">
                    Draft automatically saves in browser memory.
                  </span>
                  <button
                    onClick={() => setActiveTab('modelEssay')}
                    className="px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition-all shadow-xs"
                  >
                    Compare with Model Essay →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Thesis Builder */}
          {activeTab === 'thesisBuilder' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-1">
                  Dr. Miller's Essay Formula Tool
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  "Focus on the why, not just the what: [_____] happened because [_____]."
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  In university history, summarizing historical events earns only average marks. Explaining the systemic, ideological, or political CAUSE ("why") is what secures top marks.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    1. The Event or Historical Shift ("What happened?"):
                  </label>
                  <input
                    type="text"
                    value={thesisSubject}
                    onChange={(e) => setThesisSubject(e.target.value)}
                    placeholder="e.g. British-Indigenous relations deteriorated rapidly after 1760"
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    2. The Underlying Cause ("Because...?"):
                  </label>
                  <input
                    type="text"
                    value={thesisCause}
                    onChange={(e) => setThesisCause(e.target.value)}
                    placeholder="e.g. British imperial victory eliminated the French counterweight, leading General Amherst to abolish gift diplomacy and treat sovereign nations as conquered subjects"
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    3. The Consequence or Broader Significance ("Ultimately demonstrating...?"):
                  </label>
                  <input
                    type="text"
                    value={thesisSignificance}
                    onChange={(e) => setThesisSignificance(e.target.value)}
                    placeholder="e.g. Indigenous confederacies under Pontiac were capable of mounting formidable military resistance to enforce sovereign rights"
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>
              </div>

              {/* Generated Result */}
              {generatedThesis && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="text-xs uppercase tracking-wider text-amber-950 font-bold block mb-1">
                    Your Synthesized Thesis Statement:
                  </span>
                  <p className="text-sm font-semibold text-stone-900 leading-relaxed font-serif">
                    "{generatedThesis}"
                  </p>
                </div>
              )}

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-xs uppercase tracking-wider text-stone-600 font-bold block mb-1">
                  Professor's Target Thesis for this Prompt:
                </span>
                <p className="text-xs sm:text-sm text-stone-800 italic">
                  "{currentPrompt.thesisFormula}"
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Model Essay & Grading Criteria */}
          {activeTab === 'modelEssay' && (
            <div className="space-y-6">
              {/* Grading Criteria */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
                  Midterm Grading Rubric Checklist
                </span>
                <div className="space-y-2">
                  {currentPrompt.gradingCriteria.map((crit, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Model Essay Prose */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Full Exemplary Model Response
                  </span>
                  <span className="text-xs text-stone-600">
                    Format: {currentPrompt.recommendedLength}
                  </span>
                </div>

                <div className="prose max-w-none text-stone-800 text-sm leading-relaxed space-y-4 font-sans">
                  {currentPrompt.modelResponse.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
