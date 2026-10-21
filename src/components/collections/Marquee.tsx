import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import type { Profile } from "@/data/profiles";
import { useI18n } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { PersonCard, type CardTone } from "./PersonCard";
import { DetailDialog } from "./DetailDialog";

type Props = {
  items: Profile[];
  overline: string;
  title: string;
  label: string;
  persistenceKey: string;
  tone?: CardTone;
  direction?: "left" | "right";
  speed?: number;
  intro?: string;
};
const bands: Record<CardTone, string> = {
  light: "bg-paper-100 text-ink-900",
  dark: "bg-forest-900 text-paper-100",
  rosa: "bg-rosa-200 text-berry-700",
};

export function Marquee({
  items,
  overline,
  title,
  label,
  persistenceKey,
  tone = "light",
  direction = "left",
  speed = 46,
  intro,
}: Props) {
  const { t } = useI18n();
  const headingId = useId();
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [loop, setLoop] = useState(false);
  const [spotlight, setSpotlight] = useState<string | null>(null);
  const state = useRef({
    hover: false,
    focus: false,
    touch: false,
    manual: false,
    reduced: false,
    intersecting: false,
    hidden: false,
    dialog: false,
    until: 0,
  });
  const loopRef = useRef(false);
  const config = useRef({ speed, direction });
  useEffect(() => {
    config.current = { speed, direction };
  }, [speed, direction]);
  useEffect(() => {
    try {
      const current = sessionStorage.getItem(`marquee-paused-${persistenceKey}`);
      const legacyLabels =
        persistenceKey === "cinema"
          ? ["Figuras del cine", "Cinema figures"]
          : ["Figuras de la cultura pop", "Pop culture figures"];
      const saved =
        current === "1" ||
        (current === null &&
          legacyLabels.some((key) => sessionStorage.getItem(`marquee-paused-${key}`) === "1"));
      state.current.manual = saved;
      setPaused(saved);
    } catch {
      /* storage can be disabled */
    }
  }, [persistenceKey]);

  // One animation lifecycle: hover, language, focus and dialogs change pause flags, never restart the clock.
  useEffect(() => {
    const v = viewport.current,
      tr = track.current;
    if (!v || !tr) return;
    let raf = 0,
      last = 0,
      distance = 0,
      position = v.scrollLeft,
      expected = position,
      initialized = false;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      state.current.reduced = motion.matches;
      setReduced(motion.matches);
      measure();
    };
    const measure = () => {
      distance = tr.getBoundingClientRect().width;
      const cardWidth = tr.firstElementChild?.getBoundingClientRect().width ?? 260;
      const canLoop = !motion.matches && distance > v.clientWidth + cardWidth + 24;
      loopRef.current = canLoop;
      setLoop(canLoop);
      if (!initialized && distance > 0) {
        initialized = true;
        position = 0;
      }
      // Keep the same pixel offset on resize. Only a full cycle can be removed.
      if (canLoop && position >= distance) position %= distance;
      if (!canLoop) position = Math.min(position, Math.max(0, distance - v.clientWidth));
      v.scrollLeft = position;
      expected = v.scrollLeft;
    };
    const resize = new ResizeObserver(measure);
    resize.observe(v);
    resize.observe(tr);
    const io = new IntersectionObserver(([entry]) => {
      state.current.intersecting = Boolean(entry?.isIntersecting);
    });
    io.observe(v);
    const visibility = () => {
      state.current.hidden = document.hidden;
    };
    visibility();
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", updateMotion);
    updateMotion();
    const step = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      const s = state.current;
      // Native wheel, touch and focus scrolling become the new physical offset.
      if (Math.abs(v.scrollLeft - expected) > 1) position = v.scrollLeft;
      if (
        loopRef.current &&
        distance > 0 &&
        !s.hover &&
        !s.focus &&
        !s.touch &&
        !s.manual &&
        !s.reduced &&
        s.intersecting &&
        !s.hidden &&
        !s.dialog &&
        now > s.until
      ) {
        position +=
          (config.current.direction === "left" ? 1 : -1) *
          config.current.speed *
          (v.clientWidth < 768 ? 0.75 : 1) *
          dt;
        position = ((position % distance) + distance) % distance;
        v.scrollLeft = position;
      }
      expected = v.scrollLeft;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      io.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  const toggle = () => {
    const next = !state.current.manual;
    state.current.manual = next;
    setPaused(next);
    try {
      sessionStorage.setItem(`marquee-paused-${persistenceKey}`, next ? "1" : "0");
    } catch {
      /* no storage */
    }
  };
  const move = (d: number) => {
    const v = viewport.current;
    if (!v) return;
    state.current.until = performance.now() + 1000;
    v.scrollBy({ left: d * ((trWidth() ?? 220) + 24), behavior: reduced ? "auto" : "smooth" });
  };
  const trWidth = () => track.current?.firstElementChild?.getBoundingClientRect().width;
  const select = (i: number, button: HTMLButtonElement) => {
    opener.current = button;
    state.current.dialog = true;
    setOpen(i);
  };
  const changeIndex = (i: number | null) => {
    state.current.dialog = i !== null;
    setOpen(i);
  };
  const restore = () => {
    opener.current?.focus({ preventScroll: true });
  };
  const renderTrack = (copy: number) => (
    <ul
      ref={copy === 0 ? track : undefined}
      aria-hidden={copy > 0 ? true : undefined}
      className="marquee-track"
    >
      {items.map((p, i) => (
        <li
          key={p.id}
          data-spotlight={
            spotlight === `${copy}-${p.id}` ? "active" : spotlight ? "muted" : undefined
          }
          className="marquee-item"
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") {
              state.current.hover = true;
              setSpotlight(`${copy}-${p.id}`);
            }
          }}
          onFocus={() => setSpotlight(`${copy}-${p.id}`)}
        >
          <PersonCard
            profile={p}
            tone={tone}
            onOpen={(button) => select(i, button)}
            tabbable={copy === 0}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-labelledby={headingId} className={`${bands[tone]} section-y overflow-clip`}>
      <header className="page-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="rule-double mb-5 w-24" />
          <p className="eyebrow opacity-80">{overline}</p>
          <h2 id={headingId} className="display-l mt-2">
            {title}
          </h2>
          {intro && <p className="mt-4">{intro}</p>}
        </div>
        <div className="flex gap-2">
          {!reduced && (
            <Button
              variant="secondary"
              size="icon"
              onClick={toggle}
              aria-pressed={paused}
              title={paused ? t.marquee.playLabel : t.marquee.pauseLabel}
              aria-label={paused ? t.marquee.playLabel : t.marquee.pauseLabel}
              className="size-11 rounded-full"
            >
              {paused ? <Play aria-hidden /> : <Pause aria-hidden />}
            </Button>
          )}
          <Button
            variant="secondary"
            size="icon"
            onClick={() => move(-1)}
            title={t.marquee.prev}
            aria-label={t.marquee.prev}
            className="size-11 rounded-full"
          >
            <ChevronLeft aria-hidden />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => move(1)}
            title={t.marquee.next}
            aria-label={t.marquee.next}
            className="size-11 rounded-full"
          >
            <ChevronRight aria-hidden />
          </Button>
        </div>
      </header>
      <div
        ref={viewport}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        className="marquee-viewport no-scrollbar mt-5"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") state.current.hover = true;
        }}
        onPointerLeave={() => {
          state.current.hover = false;
          if (!state.current.focus) setSpotlight(null);
        }}
        onFocus={() => {
          state.current.focus = true;
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            state.current.focus = false;
            if (!state.current.hover) setSpotlight(null);
          }
        }}
        onPointerDown={(e) => {
          if (e.pointerType === "touch") state.current.touch = true;
        }}
        onPointerUp={() => {
          state.current.touch = false;
          state.current.until = performance.now() + 3000;
        }}
        onPointerCancel={() => {
          state.current.touch = false;
          state.current.until = performance.now() + 3000;
        }}
        onWheel={() => {
          state.current.until = performance.now() + 1500;
        }}
      >
        {renderTrack(0)}
        {loop && renderTrack(1)}
      </div>
      {items.length === 0 && <p className="page-shell">{t.collection.empty}</p>}
      <DetailDialog
        profiles={items}
        index={open}
        collectionLabel={title}
        onIndexChange={changeIndex}
        onRestoreFocus={restore}
      />
    </section>
  );
}
