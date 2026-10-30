/**
 * Type definitions for INDG 1220 Midterm Exam Study Suite
 */

export type ExamSection = 'mcq' | 'shortAnswer' | 'shortEssay' | 'longEssay' | 'bonus';

export interface MCQQuestion {
  id: string;
  lecture: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  slideRef?: string;
}

export interface ShortAnswerQuestion {
  id: string;
  source: 'Quiz 1' | 'Quiz 2' | 'Lecture Review';
  question: string;
  modelAnswer: string;
  keyPoints: string[];
  lengthGuide: string; // "1-3 full sentences"
  commonPitfalls: string;
}

export interface EssayPrompt {
  id: string;
  source: 'In-Class Writing 1' | 'In-Class Writing 2' | 'Long Essay Synthesis';
  type: 'short' | 'long';
  title: string;
  prompt: string;
  recommendedLength: string; // e.g. "1-2 paragraphs (~half page)" or "Multiple paragraphs (1-2 pages)"
  thesisFormula: string;
  outline: {
    section: string;
    points: string[];
  }[];
  modelResponse: string;
  gradingCriteria: string[];
}

export interface TermDefinition {
  id: string;
  term: string;
  category: 'Framework & Theory' | 'Indigenous Governance & Culture' | 'Colonial Justifications' | 'Treaties & Diplomacy' | 'Conflicts & Wars' | 'Key Figures' | 'Technologies & Economy';
  courseDefinition: string;
  googleWarning?: string; // Explicit difference from generic Google definition
  lectureRef: string;
  significance: string;
}

export interface MindMapTopic {
  id: string;
  title: string;
  subtitle: string;
  centerNode: string;
  branches: {
    title: string;
    color: string;
    items: string[];
    details: string;
  }[];
  keyTakeaways: string[];
}
