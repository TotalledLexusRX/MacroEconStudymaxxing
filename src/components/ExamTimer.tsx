import React, { useEffect } from 'react';
import { Clock, Pause, Play, AlertCircle } from 'lucide-react';

interface ExamTimerProps {
  secondsLeft: number;
  setSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: (running: boolean) => void;
  onTimeExpired: () => void;
}

export const ExamTimer: React.FC<ExamTimerProps> = ({
  secondsLeft,
  setSecondsLeft,
  isRunning,
  setIsRunning,
  onTimeExpired
}) => {
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            if (interval) clearInterval(interval);
            onTimeExpired();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft, setSecondsLeft, onTimeExpired]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const isLowTime = secondsLeft < 600; // less than 10 minutes
  const isUrgent = secondsLeft < 300; // less than 5 minutes

  return (
    <div
      className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border font-mono text-xs sm:text-sm font-semibold transition-colors ${
        isUrgent
          ? 'bg-rose-50 text-rose-800 border-rose-300 animate-pulse'
          : isLowTime
          ? 'bg-amber-50 text-amber-900 border-amber-300'
          : 'bg-stone-100 text-stone-800 border-stone-200'
      }`}
    >
      <Clock className="w-4 h-4 shrink-0" />
      <span className="tabular-nums font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="p-1 rounded hover:bg-stone-200/60 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors"
        title={isRunning ? 'Pause Timer' : 'Resume Timer'}
      >
        {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
