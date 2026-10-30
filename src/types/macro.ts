/**
 * Type definitions for Macroeconomics Study Suite (Chapters 7, 8, 10)
 */

export type ChapterNumber = 7 | 8 | 10;

export interface MacroTerm {
  id: string;
  term: string;
  chapter: ChapterNumber;
  definition: string;
  formula?: string;
  keyNote?: string;
}

export interface MacroPracticeQuestion {
  id: string;
  chapter: ChapterNumber;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  calculationType?: 'gdp' | 'cpi' | 'unemployment' | 'loanable_funds' | 'fisher';
}

export interface MacroChapterSummary {
  chapter: ChapterNumber;
  title: string;
  subtitle: string;
  keyTopics: {
    title: string;
    points: string[];
    formula?: string;
  }[];
}
