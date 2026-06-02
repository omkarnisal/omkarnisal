'use client';

import { useState } from 'react';

// Generates simulated contribution grid (53 weeks * 7 days)
export default function GithubGraph() {
  const weeks = 40; // Render 40 weeks to fit layout elegantly
  const daysOfWeek = 7;
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  // Generate deterministic contribution counts
  const getContributionLevel = (weekIndex: number, dayIndex: number) => {
    const seed = (weekIndex * 7 + dayIndex) % 29;
    if (seed % 7 === 0) return 0; // None
    if (seed % 11 === 0) return 3; // High
    if (seed % 5 === 0) return 2; // Medium
    return 1; // Low
  };

  const getContributionColor = (level: number) => {
    switch (level) {
      case 3:
        return 'bg-emerald-600 dark:bg-emerald-500';
      case 2:
        return 'bg-emerald-500/60 dark:bg-emerald-600/60';
      case 1:
        return 'bg-emerald-500/20 dark:bg-emerald-800/40';
      default:
        return 'bg-neutral-200 dark:bg-neutral-800/60';
    }
  };

  return (
    <div className="glass-panel p-5 rounded-2xl border border-[var(--card-border)] relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight">Engineering Activity</span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">Simulated local & remote telemetry</span>
        </div>
        <div className="text-xs font-mono bg-neutral-100 dark:bg-neutral-900 border border-[var(--card-border)] px-2 py-0.5 rounded text-neutral-500">
          STATUS: ONLINE
        </div>
      </div>

      <div className="flex gap-[3px] overflow-x-auto pb-2 scrollbar-none select-none">
        {Array.from({ length: weeks }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-[3px] shrink-0">
            {Array.from({ length: daysOfWeek }).map((_, dayIdx) => {
              const level = getContributionLevel(weekIdx, dayIdx);
              const colorClass = getContributionColor(level);
              const count = level === 3 ? 8 : level === 2 ? 4 : level === 1 ? 1 : 0;
              const dateStr = `Day ${weekIdx * 7 + dayIdx + 1} of cycles`;

              return (
                <div
                  key={dayIdx}
                  className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-150 cursor-pointer ${colorClass} hover:scale-125 hover:shadow-[0_0_8px_rgba(16,185,129,0.5)]`}
                  onMouseEnter={() => setHoveredDay({ count, date: dateStr })}
                  onMouseLeave={() => setHoveredDay(null)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3 text-[11px] text-neutral-400 dark:text-neutral-500">
        <div>
          {hoveredDay ? (
            <span className="font-mono">
              {hoveredDay.count} commits / telemetry pulses on {hoveredDay.date}
            </span>
          ) : (
            <span>Hover tiles to view telemetry</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-[1px] bg-neutral-200 dark:bg-neutral-800" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/20 dark:bg-emerald-800/40" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/60 dark:bg-emerald-600/60" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-600 dark:bg-emerald-500" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
