import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, X } from "lucide-react";
import { useI18n } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

import { featuredStory } from "@/data/stories";
import heroPlate from "@/assets/hero-plate.jpg";
import popPlate from "@/assets/pop-plate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "¡Qué Cultura! — Cine y cultura pop hispana" },
      {
        name: "description",
        content:
          "Revista editorial independiente sobre cine y cultura pop hispana, en español e inglés.",
      },
      { property: "og:title", content: "¡Qué Cultura! — Cine y cultura pop hispana" },
      {
        property: "og:description",
        content: "Perfiles, películas y fenómenos pop del mundo hispanohablante.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <>
      <Hero />
      <section className="page-shell py-16 md:py-24">
        <div className="mx-auto max-w-[680px]">
          <div className="rule-double" />
          <p className="eyebrow mt-6 text-terra-700">{t.intro.overline}</p>
          <p className="lede mt-4">{t.intro.body}</p>
          <p className="mt-6 flex flex-wrap gap-x-3 font-sans text-sm font-semibold">
            <Link to="/cinema" className="text-terra-700 underline underline-offset-4">
              {t.nav.cinema}
            </Link>
            <span aria-hidden>·</span>
            <Link to="/pop-culture" className="text-terra-700 underline underline-offset-4">
              {t.nav.pop}
            </Link>
            <span aria-hidden>·</span>
            <Link to="/quiz" className="text-terra-700 underline underline-offset-4">
              {t.nav.quiz}
            </Link>
          </p>
        </div>
      </section>
      <section className="bg-forest-900 text-paper-100">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-2">
          <div>
            <p className="eyebrow text-ochre-400">{t.cinema.overline}</p>
            <h2 className="h2-editorial mt-3">{t.cinema.title}</h2>
            <p className="mt-4">{t.collection.cinemaIntro}</p>
            <Button asChild variant="link" className="mt-5 px-0 text-paper-100">
              <Link to="/cinema">
                {t.collection.browse}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="border-t border-paper-100/30 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="eyebrow text-rosa-300">{t.pop.overline}</p>
            <h2 className="h2-editorial mt-3">{t.pop.title}</h2>
            <p className="mt-4">{t.collection.popIntro}</p>
            <Button asChild variant="link" className="mt-5 px-0 text-paper-100">
              <Link to="/pop-culture">
                {t.collection.browse}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <FeaturedStory />
      <QuizInvite />
    </>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="page-shell relative pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="relative z-10 lg:col-span-8 animate-rise">
          <p className="eyebrow text-terra-700">{t.hero.overline}</p>
          <h1 className="display-xl mt-6 max-w-[11ch]">{t.hero.title}</h1>
          <p className="lede mt-8 max-w-[34ch] text-ink-700">{t.hero.lede}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/cinema"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border-[1.5px] border-ink-900 bg-paper-100 px-6 font-sans text-[15px] font-semibold text-ink-900 shadow-[4px_4px_0_var(--ink-900)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink-900)]"
            >
              {t.hero.ctaCinema} <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex min-h-12 items-center rounded-md border-[1.5px] border-ink-900 bg-paper-100 px-6 font-sans text-[15px] font-semibold text-ink-900 shadow-[4px_4px_0_var(--ink-900)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink-900)]"
            >
              {t.hero.ctaQuiz}
            </Link>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-[420px] lg:col-span-4 lg:-ml-16 lg:max-w-none">
          <div className="arch overflow-hidden border-[1.5px] border-ink-900 bg-paper-50 p-2">
            <img
              src={heroPlate}
              alt={t.hero.imgAlt}
              width={896}
              height={1120}
              className="arch aspect-[4/5] w-full object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

function FeaturedStory() {
  const { t, l } = useI18n();
  const s = featuredStory;
  const [open, setOpen] = useState(false);
  return (
    <section className="page-shell section-y" aria-labelledby="story-h">
      <div className="grid gap-8 md:grid-cols-12 md:items-center">
        <figure className="md:col-span-7">
          <img
            src={s.image.src}
            alt={l(s.image.alt)}
            width={s.image.width}
            height={s.image.height}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-md border-[1.5px] border-ink-900 object-cover"
          />
        </figure>
        <div className="md:col-span-5 md:-ml-16 md:rounded-md md:border-[1.5px] md:border-ink-900 md:bg-paper-50 md:p-10 md:shadow-print">
          <p className="eyebrow text-terra-700">
            {t.story.overline} · {l(s.section)}
          </p>
          {s.isSample && <p className="eyebrow mt-2 text-ink-500">{t.sampleNote}</p>}
          <h2 id="story-h" className="h2-editorial mt-4">
            {l(s.headline)}
          </h2>
          <p className="mt-4 text-ink-700">{l(s.deck)}</p>
          <p className="mt-4 font-sans text-sm text-ink-500">
            {l(s.byline)} · {t.story.minutes(s.minutes)}
          </p>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-ink-900 px-6 font-sans text-[15px] font-semibold text-paper-50 hover:shadow-print">
              {t.story.read} <ArrowRight aria-hidden className="size-4" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-cinema-950/72" />
              <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 max-h-[92vh] overflow-y-auto rounded-t-3xl print-frame bg-paper-50 text-ink-900 shadow-soft md:inset-auto md:left-1/2 md:top-1/2 md:max-h-[88vh] md:w-[min(760px,calc(100vw-48px))] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md">
                <img src={s.image.src} alt="" className="aspect-[2.39/1] w-full object-cover" />
                <div className="mx-auto max-w-[680px] p-6 md:p-10">
                  <p className="eyebrow text-terra-700">
                    {l(s.section)} · {t.sampleNote}
                  </p>
                  <Dialog.Title className="display-l mt-3">{l(s.headline)}</Dialog.Title>
                  <Dialog.Description className="lede mt-4 text-ink-700">
                    {l(s.deck)}
                  </Dialog.Description>
                  {s.body.map((p, i) => (
                    <p
                      key={i}
                      className={`mt-6 text-lg ${i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-terra-700" : ""}`}
                    >
                      {l(p)}
                    </p>
                  ))}
                  <p className="caption mt-8 text-ink-500">{l(s.byline)}</p>
                </div>
                <Dialog.Close
                  aria-label={t.story.close}
                  className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-paper-50 print-frame"
                >
                  <X aria-hidden className="size-5" />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </section>
  );
}

function QuizInvite() {
  const { t } = useI18n();
  return (
    <section className="bg-sage-300 section-y overflow-hidden" aria-labelledby="quiz-h">
      <div className="page-shell grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-forest-800">{t.quiz.overline}</p>
          <h2 id="quiz-h" className="display-l mt-3 text-forest-900">
            {t.quiz.title}
          </h2>
          <p className="lede mt-6 max-w-[40ch] text-ink-700">{t.quiz.body}</p>
          <div className="mt-8 flex items-center gap-5">
            <Link
              to="/quiz"
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 font-sans text-[15px] font-semibold text-primary-foreground hover:shadow-print"
            >
              {t.quiz.cta} <ArrowRight aria-hidden className="size-4" />
            </Link>
            <span aria-hidden className="script-accent -rotate-6 text-terra-700">
              {t.quiz.script}
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[360px] md:col-span-5">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-md border-[1.5px] border-ink-900 bg-paper-50"
          />
          <img
            src={popPlate}
            alt=""
            width={1024}
            height={1024}
            loading="lazy"
            className="relative aspect-square w-full -rotate-2 rounded-md border-[1.5px] border-ink-900 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
