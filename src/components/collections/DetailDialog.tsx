import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Profile } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { ProfilePortrait } from "./ProfilePortrait";
import { useI18n } from "@/i18n/LanguageContext";

type Props = {
  profiles: Profile[];
  index: number | null;
  collectionLabel: string;
  onIndexChange: (i: number | null) => void;
  onRestoreFocus?: () => void;
};

export function DetailDialog({
  profiles,
  index,
  collectionLabel,
  onIndexChange,
  onRestoreFocus,
}: Props) {
  const { t, l } = useI18n();
  const p = index !== null ? (profiles[index] ?? null) : null;
  const total = profiles.length;
  const go = (d: number) => index !== null && onIndexChange((index + d + total) % total);

  return (
    <Dialog.Root open={p !== null} onOpenChange={(o) => !o && onIndexChange(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-cinema-950/72 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        {p && (
          <Dialog.Content
            onCloseAutoFocus={(e) => {
              if (onRestoreFocus) {
                e.preventDefault();
                onRestoreFocus();
              }
            }}
            className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92vh] flex-col overflow-hidden rounded-t-3xl print-frame bg-paper-50 text-ink-900 shadow-soft data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-8 md:inset-auto md:left-1/2 md:top-1/2 md:max-h-[88vh] md:w-[min(960px,calc(100vw-48px))] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md"
          >
            <div className="flex items-center justify-between gap-2 border-b-[1.5px] border-ink-900 px-4 py-2 md:px-6">
              <p className="eyebrow text-ink-700">
                {collectionLabel} · {l(p.discipline)}
              </p>
              <div className="flex items-center gap-1">
                <p className="sr-only" aria-live="polite">
                  {t.dialog.of((index ?? 0) + 1, total)}
                </p>
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t.dialog.prev}
                  className="grid size-11 place-items-center rounded-full hover:bg-paper-200"
                >
                  <ChevronLeft aria-hidden className="size-5" />
                </Button>
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t.dialog.next}
                  className="grid size-11 place-items-center rounded-full hover:bg-paper-200"
                >
                  <ChevronRight aria-hidden className="size-5" />
                </Button>
                <Dialog.Close
                  aria-label={t.dialog.close}
                  className="grid size-11 place-items-center rounded-full hover:bg-paper-200"
                >
                  <X aria-hidden className="size-5" />
                </Dialog.Close>
              </div>
            </div>
            <div className="grid gap-8 overflow-y-auto p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:p-10">
              <figure>
                <ProfilePortrait profile={p} className="bg-sage-200 text-forest-800" />
              </figure>
              <div>
                <Dialog.Title className="display-l mt-3" tabIndex={-1}>
                  {l(p.name)}
                </Dialog.Title>
                <p className="mt-2 font-sans text-sm text-ink-700">
                  {p.country ? l(p.country) : t.dialog.pending}
                  {p.activeYears ? ` · ${p.activeYears}` : ""}
                </p>
                <div className="rule-double mt-5 text-ink-900" />
                <Dialog.Description className="lede mt-6">{l(p.bio)}</Dialog.Description>
                {p.interpretive && (
                  <p className="mt-5 text-sm text-ink-500">{t.collection.interpretationNote}</p>
                )}
                {l(p.significance) && (
                  <>
                    <h3 className="eyebrow mt-8">
                      {p.interpretive ? t.collection.interpretation : t.dialog.why}
                    </h3>
                    <p className="mt-2">{l(p.significance)}</p>
                  </>
                )}
                {p.keywords && (
                  <>
                    <h3 className="eyebrow mt-6">{t.collection.keywords}</h3>
                    <p className="mt-2 text-terra-700">{p.keywords.map(l).join(" · ")}</p>
                  </>
                )}
                <h3 className="eyebrow mt-8">{t.dialog.essentials}</h3>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
                  <dt className="font-sans font-semibold">{t.dialog.discipline}</dt>
                  <dd>{l(p.discipline)}</dd>
                  <dt className="font-sans font-semibold">{t.dialog.country}</dt>
                  <dd>{p.country ? l(p.country) : t.dialog.pending}</dd>
                  {p.activeYears && (
                    <>
                      <dt className="font-sans font-semibold">{t.dialog.years}</dt>
                      <dd>{p.activeYears}</dd>
                    </>
                  )}
                </dl>
                {p.works.length > 0 && (
                  <>
                    <h3 className="eyebrow mt-8">{t.dialog.works}</h3>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 italic">
                      {p.works.map((w, i) => (
                        <li key={i}>{l(w)}</li>
                      ))}
                    </ol>
                  </>
                )}
                <Link
                  to="/quiz"
                  className="mt-8 inline-flex min-h-11 items-center rounded-md border-[1.5px] border-ink-900 bg-paper-100 px-5 font-sans text-[15px] font-semibold text-ink-900 shadow-[4px_4px_0_var(--ink-900)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink-900)]"
                >
                  {t.dialog.quiz}
                </Link>
              </div>
            </div>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
