"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseISODate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/** Monday = 0 … Sunday = 6 for a given calendar day */
function mondayIndex(year: number, month: number, day: number): number {
  const js = new Date(year, month, day).getDay();
  return js === 0 ? 6 : js - 1;
}

type Props = {
  month: Date;
  onMonthChange: (d: Date) => void;
  start: string | null;
  end: string | null;
  onRangeChange: (start: string | null, end: string | null) => void;
  minDate: string;
};

export default function CalendarRangePicker({ month, onMonthChange, start, end, onRangeChange, minDate }: Props) {
  const min = parseISODate(minDate);
  const y = month.getFullYear();
  const m = month.getMonth();
  const totalDays = daysInMonth(y, m);
  const firstMondaySlot = mondayIndex(y, m, 1);

  const cells = useMemo(() => {
    const out: ({ day: number; iso: string } | null)[] = [];
    for (let i = 0; i < firstMondaySlot; i++) {
      out.push(null);
    }
    for (let d = 1; d <= totalDays; d++) {
      out.push({ day: d, iso: toISODate(new Date(y, m, d)) });
    }
    while (out.length % 7 !== 0) {
      out.push(null);
    }
    return out;
  }, [y, m, totalDays, firstMondaySlot]);

  const inRange = (iso: string | null) => {
    if (!iso || !start || !end) return false;
    return iso >= start && iso <= end;
  };

  const handleDayClick = (iso: string | null) => {
    if (!iso) return;
    if (parseISODate(iso) < min) return;

    if (!start || (start && end)) {
      onRangeChange(iso, null);
      return;
    }
    if (!end) {
      if (iso < start) {
        onRangeChange(iso, start);
        return;
      }
      onRangeChange(start, iso);
    }
  };

  const label = month.toLocaleDateString("en-ZA", { month: "long", year: "numeric" });

  return (
    <div className="rounded-xl border border-white/[0.1] bg-black/30 p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onMonthChange(new Date(y, m - 1, 1))}
          className="focus-ring-invert rounded-lg p-2 text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <p className="font-sans text-sm font-semibold tabular-nums text-white/90">{label}</p>
        <button
          type="button"
          onClick={() => onMonthChange(new Date(y, m + 1, 1))}
          className="focus-ring-invert rounded-lg p-2 text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((w) => (
          <div key={w} className="pb-2 font-sans text-[10px] font-medium uppercase tracking-wider text-white/65">
            {w}
          </div>
        ))}
        {cells.map((cell, i) => {
          if (!cell) {
            return <div key={`pad-${i}`} className="aspect-square min-h-[36px]" />;
          }
          const disabled = parseISODate(cell.iso) < min;
          const isStart = start === cell.iso;
          const isEnd = end === cell.iso;
          const range = inRange(cell.iso);
          return (
            <button
              key={cell.iso}
              type="button"
              disabled={disabled}
              onClick={() => handleDayClick(cell.iso)}
              aria-label={`${cell.iso}${isStart ? ", arrival" : ""}${isEnd ? ", departure" : ""}`}
              className={[
                "focus-ring-invert relative aspect-square min-h-[36px] rounded-lg font-sans text-sm tabular-nums transition-colors",
                disabled ? "cursor-not-allowed text-white/20" : "text-white/85 hover:bg-white/[0.08]",
                range && !isStart && !isEnd ? "bg-burnished-copper/15" : "",
                isStart || isEnd ? "bg-burnished-copper/90 font-semibold text-black hover:bg-burnished-copper" : "",
              ].join(" ")}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
      <p className="mt-4 font-sans text-[11px] leading-relaxed text-white/70">
        Tap arrival, then departure. We will confirm nights and availability by email.
      </p>
    </div>
  );
}

export { toISODate, parseISODate };
