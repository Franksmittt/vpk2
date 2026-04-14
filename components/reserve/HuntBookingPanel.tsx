"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Clock, Send, Users, UserPlus } from "lucide-react";
import CalendarRangePicker, { parseISODate, toISODate } from "./CalendarRangePicker";

function tomorrowISO(): string {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  t.setHours(0, 0, 0, 0);
  return toISODate(t);
}

function nightsBetween(start: string, end: string): number {
  const a = parseISODate(start).getTime();
  const b = parseISODate(end).getTime();
  return Math.max(0, Math.round((b - a) / (24 * 60 * 60 * 1000)));
}

const ARRIVAL_TIMES = [
  { id: "morning", label: "Morning (before 10:00)" },
  { id: "midday", label: "Midday" },
  { id: "afternoon", label: "Afternoon" },
  { id: "flexible", label: "Flexible / we will discuss" },
] as const;

const HUNT_FOCUS = [
  { id: "undecided", label: "Not sure yet" },
  { id: "plains", label: "Plains game focus" },
  { id: "mixed", label: "Mixed species" },
  { id: "dangerous", label: "Dangerous game (where legal and available)" },
] as const;

/** Native selects: dark scheme + dark option bg so the open list is not white-on-white on Windows. */
const SELECT_CLASS =
  "focus-ring w-full appearance-none rounded-xl border border-white/[0.18] bg-zinc-900 px-4 py-3 pr-10 font-sans text-sm text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] [color-scheme:dark] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23a1a1aa%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M6 9l6 6 6-6%22/%3E%3C/svg%3E')] bg-[length:1.1rem] bg-[right_0.65rem_center] bg-no-repeat";

const OPTION_CLASS = "bg-zinc-900 text-zinc-100";

function HuntBookingSideNotes() {
  return (
    <aside
      className="flex min-h-[12rem] flex-1 flex-col rounded-xl border border-white/[0.08] bg-black/30 p-5 md:min-h-0 md:p-6"
      aria-label="What happens after you enquire"
    >
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-burnished-copper/85">Field notes</p>
      <h3 className="mt-3 font-sans text-base font-semibold leading-snug text-white/90">Dates are a request, not a lock</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-white/48">
        We run on census, weather, and what the veld can carry. Your arrival window tells us where to start the conversation. Final dates and species availability only firm up once we reply.
      </p>
      <p className="mt-4 font-sans text-sm leading-relaxed text-white/48">
        If you are flexible, say so. Sometimes the better week is the one with a cold front and fewer vehicles on the roads, not the one you first circled on the kitchen calendar.
      </p>
      <p className="mt-4 border-t border-white/[0.06] pt-4 font-sans text-xs leading-relaxed text-white/38">
        Reply time varies with season. Include species and experience level in the notes so the PH desk can answer with substance, not a template.
      </p>
    </aside>
  );
}

export default function HuntBookingPanel() {
  const minDate = useMemo(() => tomorrowISO(), []);
  const [viewMonth, setViewMonth] = useState(() => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  const [flexibleDates, setFlexibleDates] = useState(false);
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);
  const [flexWindow, setFlexWindow] = useState("");

  const [hunters, setHunters] = useState(2);
  const [nonHunters, setNonHunters] = useState(0);
  const [arrivalTime, setArrivalTime] = useState<(typeof ARRIVAL_TIMES)[number]["id"]>("flexible");
  const [huntFocus, setHuntFocus] = useState<(typeof HUNT_FOCUS)[number]["id"]>("undecided");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nights = start && end ? nightsBetween(start, end) : null;
  const dateError =
    !flexibleDates && start && end && start >= end ? "Departure must be after arrival." : null;
  const sameDayError = !flexibleDates && start && end && start === end ? "Add at least one night, or use flexible dates." : null;

  function handleRangeChange(a: string | null, b: string | null) {
    setStart(a);
    setEnd(b);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!flexibleDates && (!start || !end)) {
      return;
    }
    if (dateError || sameDayError) {
      return;
    }
    if (flexibleDates && !flexWindow.trim() && !notes.trim()) {
      return;
    }

    const lines: string[] = [
      "VAALPENSKRAAL HUNT ENQUIRY",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "(not given)"}`,
      "",
      "--- Trip",
    ];

    if (flexibleDates) {
      lines.push("Dates: flexible / to be agreed");
      if (flexWindow.trim()) lines.push(`Preferred window: ${flexWindow.trim()}`);
    } else if (start && end) {
      lines.push(`Arrival: ${start}`);
      lines.push(`Departure: ${end}`);
      lines.push(`Nights on estate (indicative): ${nights ?? "n/a"}`);
    }

    lines.push(`Hunters: ${hunters}`);
    lines.push(`Non-hunters (guests): ${nonHunters}`);
    lines.push(`Preferred arrival time: ${ARRIVAL_TIMES.find((x) => x.id === arrivalTime)?.label}`);
    lines.push(`Hunt focus: ${HUNT_FOCUS.find((x) => x.id === huntFocus)?.label}`);
    lines.push("");
    lines.push("--- Notes");
    lines.push(notes.trim() || "(none)");

    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(`Hunt enquiry: ${name || "guest"}${start ? ` (${start})` : ""}`);
    window.location.href = `mailto:info@vaalpenskraal.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const canSubmit =
    name.trim() &&
    email.trim() &&
    (flexibleDates ? flexWindow.trim() || notes.trim() : start && end && !dateError && !sameDayError);

  return (
    <form
      id="book-hunt-form"
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-transparent p-6 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] md:p-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.08] pb-8">
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-burnished-copper/90">Book your hunt</p>
          <h2 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-white md:text-3xl">Plan dates and your party</h2>
          <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-white/45">
            Nothing is confirmed until we reply. Pick a window, tell us who is travelling, and send the form. We answer with quota, realism, and next steps.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 font-sans text-[11px] text-white/50">
          <CalendarDays className="h-4 w-4 text-burnished-copper/80" aria-hidden />
          Enquiry only, not payment
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
        {/* Left: calendar + balanced field notes */}
        <div className="flex min-h-0 w-full flex-1 flex-col lg:h-full">
          <label className="flex shrink-0 cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3 transition-colors hover:border-white/[0.12]">
            <input
              type="checkbox"
              checked={flexibleDates}
              onChange={(e) => {
                setFlexibleDates(e.target.checked);
                if (e.target.checked) {
                  setStart(null);
                  setEnd(null);
                }
              }}
              className="focus-ring-invert h-4 w-4 rounded border-white/30 bg-black/50 text-burnished-copper"
            />
            <span className="font-sans text-sm text-white/75">My dates are flexible (season or month only)</span>
          </label>

          {flexibleDates ? (
            <div className="mt-6 flex min-h-0 flex-1 flex-col gap-6">
              <label className="block shrink-0">
                <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                  Preferred window
                </span>
                <textarea
                  value={flexWindow}
                  onChange={(e) => setFlexWindow(e.target.value)}
                  rows={4}
                  placeholder="Example: May 2026, or any two weeks in winter, or after the Easter weekend…"
                  className="focus-ring w-full resize-y rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white placeholder:text-white/25"
                />
              </label>
              <HuntBookingSideNotes />
            </div>
          ) : (
            <div className="mt-6 flex min-h-0 flex-1 flex-col gap-6">
              <div className="shrink-0">
                <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Arrival and departure</p>
                <CalendarRangePicker
                  month={viewMonth}
                  onMonthChange={setViewMonth}
                  start={start}
                  end={end}
                  onRangeChange={handleRangeChange}
                  minDate={minDate}
                />
              </div>
              {(start || end) && (
                <div className="shrink-0 rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 font-sans text-sm text-white/70">
                  {start && (
                    <p>
                      <span className="text-white/40">Arrival:</span> {start}
                    </p>
                  )}
                  {end && (
                    <p className="mt-1">
                      <span className="text-white/40">Departure:</span> {end}
                    </p>
                  )}
                  {nights !== null && end && start && end > start && (
                    <p className="mt-2 text-burnished-copper/95">
                      About <strong className="font-semibold">{nights}</strong> night{nights === 1 ? "" : "s"} on the estate (indicative).
                    </p>
                  )}
                </div>
              )}
              {(dateError || sameDayError) && (
                <p className="shrink-0 font-sans text-sm text-red-300/90">{dateError || sameDayError}</p>
              )}
              <HuntBookingSideNotes />
            </div>
          )}
        </div>

        {/* Right: party + times + contact */}
        <div className="flex min-h-0 flex-col space-y-8 lg:h-full">
          <div>
            <p className="mb-4 flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              <Users className="h-4 w-4 text-burnished-copper/75" aria-hidden />
              Party size
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-sans text-xs text-white/55">Hunters</span>
                <select
                  value={hunters}
                  onChange={(e) => setHunters(Number(e.target.value))}
                  className={SELECT_CLASS}
                >
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} className={OPTION_CLASS}>
                      {n} hunter{n === 1 ? "" : "s"}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-1.5 font-sans text-xs text-white/55">
                  <UserPlus className="h-3.5 w-3.5 opacity-60" aria-hidden />
                  Non-hunters
                </span>
                <select
                  value={nonHunters}
                  onChange={(e) => setNonHunters(Number(e.target.value))}
                  className={SELECT_CLASS}
                >
                  {Array.from({ length: 13 }, (_, i) => i).map((n) => (
                    <option key={n} value={n} className={OPTION_CLASS}>
                      {n} guest{n === 1 ? "" : "s"}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div>
            <p className="mb-3 flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              <Clock className="h-4 w-4 text-burnished-copper/75" aria-hidden />
              Preferred arrival time
            </p>
            <select
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value as typeof arrivalTime)}
              className={SELECT_CLASS}
            >
              {ARRIVAL_TIMES.map((t) => (
                <option key={t.id} value={t.id} className={OPTION_CLASS}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Hunt focus (rough)</p>
            <select
              value={huntFocus}
              onChange={(e) => setHuntFocus(e.target.value as typeof huntFocus)}
              className={SELECT_CLASS}
            >
              {HUNT_FOCUS.map((t) => (
                <option key={t.id} value={t.id} className={OPTION_CLASS}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Full name</span>
              <input
                required
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus-ring w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white placeholder:text-white/25"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Email</span>
              <input
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-ring w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white placeholder:text-white/25"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Phone (optional)</span>
              <input
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="focus-ring w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm text-white placeholder:text-white/25"
                placeholder="+27 …"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              Species, experience, questions
            </span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="focus-ring w-full resize-y rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-sans text-sm leading-relaxed text-white placeholder:text-white/25"
              placeholder="Wish list, first hunt or seasoned, rifle plans, mobility or diet…"
            />
          </label>

          <div className="rounded-xl border border-white/[0.06] bg-black/35 px-4 py-3 font-sans text-xs leading-relaxed text-white/38">
            Submitting opens your email with this enquiry. We reply from camp when we have checked the calendar and census. No payment on this page.
          </div>

          <button
            type="submit"
            disabled={!canSubmit || submitted}
            className="focus-ring-invert inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-sans text-sm font-semibold text-black transition-transform hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-10"
          >
            {submitted ? (
              "Email opened"
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden />
                Send hunt enquiry
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
