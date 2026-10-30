import React, { useState } from 'react';
import { thematicMindMaps } from '../data/thematicMindMaps';
import { MindMapTopic } from '../types';
import { Network, GitBranch, CheckCircle2, ChevronRight, Info, Layers } from 'lucide-react';

export const MindMapViewer: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(thematicMindMaps[0].id);
  const [activeBranchIdx, setActiveBranchIdx] = useState<number>(0);
  const [viewStyle, setViewStyle] = useState<'diagram' | 'outline'>('diagram');

  const currentTopic = thematicMindMaps.find((t) => t.id === selectedTopicId) || thematicMindMaps[0];
  const activeBranch = currentTopic.branches[activeBranchIdx] || currentTopic.branches[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Interactive Thematic Mind Maps
            </h1>
            <p className="text-stone-600 text-sm mt-1">
              Based on Dr. Miller's exact Midterm Review instructions (Slides 20–22): connecting themes across 14 lectures.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewStyle(viewStyle === 'diagram' ? 'outline' : 'diagram')}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 transition-colors shadow-2xs"
            >
              {viewStyle === 'diagram' ? 'View as Structured Outline' : 'View as Interactive Diagram'}
            </button>
          </div>
        </div>

        {/* Mind Map Selector Buttons */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
          {thematicMindMaps.map((topic) => (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopicId(topic.id);
                setActiveBranchIdx(0);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all ${
                selectedTopicId === topic.id
                  ? 'bg-amber-900 text-white shadow-2xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {topic.title}
            </button>
          ))}
        </div>
      </div>

      {viewStyle === 'diagram' ? (
        <div className="space-y-6">
          {/* Visual Concept Hub */}
          <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
            <div className="relative z-10 max-w-2xl">
              <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400 block mb-1">
                Central Thematic Hub
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-50">
                {currentTopic.centerNode}
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-2">
                {currentTopic.subtitle}
              </p>
            </div>

            {/* Subtle background graphic */}
            <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center pr-8 pointer-events-none">
              <Network className="w-64 h-64 text-white" />
            </div>
          </div>

          {/* Interactive Branch Navigator */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Branch Selection Nodes */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                Related Thematic Nodes (Click to Inspect)
              </span>

              {currentTopic.branches.map((branch, idx) => {
                const isActive = activeBranchIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveBranchIdx(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isActive
                        ? 'border-amber-800 bg-amber-50/70 text-amber-950 font-bold ring-1 ring-amber-800 shadow-xs'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-3 h-3 rounded-full shrink-0 ${
                          branch.color === 'emerald'
                            ? 'bg-emerald-500'
                            : branch.color === 'sky'
                            ? 'bg-sky-500'
                            : branch.color === 'rose'
                            ? 'bg-rose-500'
                            : branch.color === 'amber'
                            ? 'bg-amber-500'
                            : 'bg-indigo-500'
                        }`}
                      />
                      <span className="text-sm">{branch.title}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-amber-900 translate-x-1' : 'text-stone-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Branch Detailed Expansion Panel */}
            <div className="md:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" /> Selected Branch: {activeBranch.title}
                </span>
                <span className="text-xs text-stone-600 font-medium">
                  {activeBranch.items.length} key points
                </span>
              </div>

              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80 text-xs text-stone-700 font-medium italic">
                "{activeBranch.details}"
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                  Point-Form Notes & Lecture Arguments:
                </span>
                <ul className="space-y-2.5">
                  {activeBranch.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-stone-800 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Takeaways Card directly from Slide 22 */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 shadow-xs space-y-3">
            <span className="text-xs font-bold text-amber-950 uppercase tracking-wider block flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-800" /> Key Takeaways (Dr. Miller Slide 22 Synthesis)
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-800 leading-relaxed">
              {currentTopic.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        /* Structured Outline View */
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                {currentTopic.title}
              </h2>
              <p className="text-xs text-stone-600 mt-1">{currentTopic.subtitle}</p>
            </div>

            <div className="space-y-6">
              {currentTopic.branches.map((b, bIdx) => (
                <div key={bIdx} className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-base text-stone-900 mb-1 flex items-center gap-2">
                    <span className="text-xs font-mono text-stone-600">0{bIdx + 1}.</span>
                    {b.title}
                  </h3>
                  <p className="text-xs text-stone-600 italic mb-3">{b.details}</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {b.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-amber-800 font-bold">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-950 mb-2">
                Synthesis Takeaways:
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-800">
                {currentTopic.keyTakeaways.map((k, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
