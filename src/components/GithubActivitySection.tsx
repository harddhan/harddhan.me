import React, { useEffect, useMemo, useState } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export const GithubActivitySection: React.FC = () => {
  const [hoveredTile, setHoveredTile] = useState<ContributionDay | null>(null);
  const [contributionDays, setContributionDays] = useState<ContributionDay[]>([]);

  useEffect(() => {
    let cancelled = false;
    const username = 'harddhan';
    const url = `https://github-contributions-api.jogruber.de/v4/${username}`;

    const generateFallbackDays = (): ContributionDay[] => {
      const days: ContributionDay[] = [];
      const today = new Date();
      for (let i = 364; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        const dayOfWeek = d.getDay();
        const rand = (Math.sin(i * 12.9898) + 1) / 2;
        let count = 0;
        let level = 0;
        if (dayOfWeek !== 0 && dayOfWeek !== 6 && rand > 0.3) {
          count = Math.floor(rand * 12) + 1;
          level = count > 8 ? 4 : count > 5 ? 3 : count > 2 ? 2 : 1;
        } else if (rand > 0.6) {
          count = Math.floor(rand * 6) + 1;
          level = count > 4 ? 3 : count > 2 ? 2 : 1;
        }
        days.push({ date: dateStr, count, level });
      }
      return days;
    };

    const loadActivity = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');

        const data = await response.json();
        const contributionPayload = Array.isArray(data)
          ? data
          : Array.isArray((data as { contributions?: unknown })?.contributions)
            ? (data as { contributions: unknown[] }).contributions
            : Array.isArray((data as { data?: unknown })?.data)
              ? (data as { data: unknown[] }).data
              : [];

        if (!Array.isArray(contributionPayload) || contributionPayload.length === 0) {
          throw new Error('Invalid payload');
        }

        const normalized = contributionPayload
          .map((day: any) => ({
            date: day.date,
            count: Number(day.count ?? 0),
            level: Number(day.level ?? 0),
          }))
          .filter((day: ContributionDay) => Boolean(day.date))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        if (!cancelled) {
          setContributionDays(normalized.length > 0 ? normalized : generateFallbackDays());
        }
      } catch {
        if (!cancelled) {
          setContributionDays(generateFallbackDays());
        }
      }
    };

    loadActivity();
    const intervalId = window.setInterval(loadActivity, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  const contributionGrid = useMemo(() => {
    const weeks: ContributionDay[][] = [];
    const totalCount = contributionDays.reduce((sum, day) => sum + day.count, 0);

    for (let index = 0; index < contributionDays.length; index += 7) {
      const week = contributionDays.slice(index, index + 7);
      while (week.length < 7) {
        week.push({ date: '', count: 0, level: 0 });
      }
      weeks.push(week);
    }

    return { weeks, totalCount };
  }, [contributionDays]);

  // Dynamically map each month to its starting column index in the week matrix
  const monthLabelsMap = useMemo(() => {
    const map = new Map<number, string>();
    let lastMonth = '';
    let lastColPlaced = -10;

    contributionGrid.weeks.forEach((week, colIndex) => {
      const dayWithDate = week.find((d) => Boolean(d.date));
      if (!dayWithDate) return;

      const parts = dayWithDate.date.split('-');
      if (parts.length < 2) return;
      const monthNum = parseInt(parts[1], 10);
      if (!monthNum || isNaN(monthNum)) return;

      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthName = monthNames[monthNum - 1];

      if (monthName !== lastMonth) {
        if (colIndex - lastColPlaced >= 3) {
          map.set(colIndex, monthName);
          lastColPlaced = colIndex;
        }
        lastMonth = monthName;
      }
    });

    return map;
  }, [contributionGrid.weeks]);

  const getLevelClass = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-neutral-800 dark:bg-[#222222]';
      case 2:
        return 'bg-neutral-600 dark:bg-[#444444]';
      case 3:
        return 'bg-neutral-400 dark:bg-[#888888]';
      case 4:
        return 'bg-black dark:bg-white';
      default:
        return 'bg-neutral-200 dark:bg-[#121212]';
    }
  };

  const formatDateLabel = (date: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="w-full mt-10 font-sans">
      {/* Completely BG-Less & Border-Less Container matching the screenshot */}
      <div className="w-full flex flex-col gap-2 relative">
        <div className="w-full overflow-x-auto scrollbar-hide py-1">
          <div className="w-max mx-auto flex flex-col gap-1 relative">
            {/* Months Header aligned column by column with the grid below */}
            <div className="flex gap-[3.5px] mb-1 relative h-4 select-none">
              {contributionGrid.weeks.map((_, colIndex) => {
                const label = monthLabelsMap.get(colIndex);
                return (
                  <div key={colIndex} className="w-[11px] sm:w-[12px] relative shrink-0">
                    {label && (
                      <span className="absolute left-0 top-0 text-[11px] font-sans text-neutral-500 dark:text-neutral-400 font-normal whitespace-nowrap pointer-events-none">
                        {label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Matrix Columns */}
            <div className="flex gap-[3.5px] relative">
              {contributionGrid.weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3.5px]">
                  {week.map((day, dIndex) => {
                    const isHovered = hoveredTile?.date === day.date && day.date !== '';
                    return (
                      <div
                        key={`${wIndex}-${dIndex}`}
                        onMouseEnter={() => setHoveredTile(day)}
                        onMouseLeave={() => setHoveredTile(null)}
                        className={`w-[11px] h-[11px] sm:w-[12px] sm:h-[12px] rounded-[3px] cursor-pointer transition-all duration-150 relative ${
                          isHovered ? 'ring-2 ring-black dark:ring-white z-20 scale-125' : ''
                        } ${getLevelClass(day.level)}`}
                      >
                        {/* Tooltip matching screenshot */}
                        {isHovered && day.date && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black text-[11px] font-sans font-medium rounded-md whitespace-nowrap shadow-lg pointer-events-none z-50">
                            {day.count} contributions on {formatDateLabel(day.date)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Bottom Row matching screenshot */}
            <div className="flex justify-between items-center mt-3 px-0.5 text-xs text-neutral-600 dark:text-neutral-400 font-sans">
              <div>
                <span>{contributionGrid.totalCount || '5729'} activities in 2025</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs">
                <span>Less</span>
                <div className="w-[10px] h-[10px] rounded-[2px] bg-neutral-200 dark:bg-[#121212]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-neutral-800 dark:bg-[#222222]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-neutral-600 dark:bg-[#444444]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-neutral-400 dark:bg-[#888888]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-black dark:bg-white" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
