
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, X } from "lucide-react";
import { useI18n } from "@/i18n/LanguageContext";

import { featuredStory } from "@/data/stories";
import heroPlate from "@/assets/hero-plate.jpg";
import popPlate from "@/assets/pop-plate.jpg";

const editorialButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-[1.5px] border-ink-900 bg-paper-100 px-6 font-sans text-[15px] font-semibold text-ink-900 shadow-[4px_4px_0_var(--ink-900)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink-900)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "¡Qué Cultura! — Cine y cultura pop hispana" },
      {
        name: "description",
        content:
          "Revista editorial independiente sobre cine y cultura pop hispana, en español e inglés.",
      },
      {
        property: "og:title",
        content: "¡Qué Cultura! — Cine y cultura pop hispana",
      },
      {
        property: "og:description",
        content:
          "Perfiles, películas y fenómenos pop del mundo hispanohablante.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, l } = useI18n();

  return (
    <>
      <Hero />

      <section className="page-shell py-16 md:py-24">
        <div className="mx-auto max-w-[720px]">
          <div className="rule-double" />

          <p className="eyebrow mt-6 text-terra-700">
            {t.intro.overline}
          </p>

          <p className="lede mt-4">{t.intro.body}</p>

          <p className="mt-6 leading-8 text-ink-700">
            {l({
              es: "La cultura popular hispana reúne música, baile, gastronomía, festivales, televisión y cine. España, México, Argentina y Colombia tienen tradiciones propias, pero la lengua española crea conexiones entre sus historias y sus comunidades.",
              en: "Hispanic popular culture brings together music, dance, food, festivals, television and cinema. Spain, Mexico, Argentina and Colombia have their own traditions, yet the Spanish language connects their stories and communities.",
            })}
          </p>

          <p className="mt-4 leading-8 text-ink-700">
            {l({
              es: "Desde una canción hasta una película, estas expresiones nos ayudan a comprender cómo viven las personas, qué valoran y cómo comparten sus recuerdos.",
              en: "From a song to a film, these forms of expression help us understand how people live, what they value and how they share their memories.",
            })}
          </p>

          <p className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-sans text-sm font-semibold">
            <Link
              to="/cinema"
              className="text-terra-700 underline underline-offset-4"
            >
              {t.nav.cinema}
            </Link>
            <span aria-hidden>·</span>
            <Link
              to="/pop-culture"
              className="text-terra-700 underline underline-offset-4"
            >
              {t.nav.pop}
            </Link>
            <span aria-hidden>·</span>
            <Link
              to="/quiz"
              className="text-terra-700 underline underline-offset-4"
            >
              {t.nav.quiz}
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-forest-900 text-paper-100">
        <div className="page-shell grid gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow text-ochre-400">
              {t.cinema.overline}
            </p>

            <h2 className="h2-editorial mt-3">{t.cinema.title}</h2>

            <p className="mt-4 leading-7">
              {t.collection.cinemaIntro}
            </p>

            <p className="mt-4 leading-7 text-paper-100/80">
              {l({
                es: "Las películas cuentan historias de familia, amor, amistad y sociedad. También reflejan las tradiciones y los valores de las comunidades que las crean.",
                en: "Films tell stories of family, love, friendship and society. They also reflect the traditions and values of the communities that create them.",
              })}
            </p>

            <Link
              to="/cinema"
              className={`${editorialButton} mt-6`}
            >
              {t.collection.browse}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>

          <div className="border-t border-paper-100/30 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="eyebrow text-rosa-300">
              {t.pop.overline}
            </p>

            <h2 className="h2-editorial mt-3">{t.pop.title}</h2>

            <p className="mt-4 leading-7">
              {t.collection.popIntro}
            </p>

            <p className="mt-4 leading-7 text-paper-100/80">
              {l({
                es: "La música, la danza, la gastronomía y las celebraciones populares mantienen vivas las tradiciones y ofrecen formas de expresar una identidad compartida.",
                en: "Music, dance, food and popular celebrations keep traditions alive and offer ways to express a shared identity.",
              })}
            </p>

            <Link
              to="/pop-culture"
              className={`${editorialButton} mt-6`}
            >
              {t.collection.browse}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedStory />
      <QuizInvite />
    </>
  );
}

function Hero() {
  const { t, l } = useI18n();

  return (
    <section className="page-shell relative pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="relative z-10 animate-rise lg:col-span-8">
          <p className="eyebrow text-terra-700">
            {l({
              es: "Una revista de cultura hispana",
              en: "A magazine of Hispanic culture",
            })}
          </p>

          <h1 className="display-xl mt-6 max-w-[11ch]">
            {t.hero.title}
          </h1>

          <p className="lede mt-8 max-w-[34ch] text-ink-700">
            {t.hero.lede}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/cinema" className={editorialButton}>
              {t.hero.ctaCinema}
              <ArrowRight aria-hidden className="size-4" />
            </Link>

            <Link to="/quiz" className={editorialButton}>
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
    <section
      className="page-shell section-y"
      aria-labelledby="story-h"
    >
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

          {s.isSample && (
            <p className="eyebrow mt-2 text-ink-500">
              {t.sampleNote}
            </p>
          )}

          <h2 id="story-h" className="h2-editorial mt-4">
            {l(s.headline)}
          </h2>

          <p className="mt-4 text-ink-700">{l(s.deck)}</p>

          <p className="mt-4 font-sans text-sm text-ink-500">
            {l(s.byline)} · {t.story.minutes(s.minutes)}
          </p>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className={`${editorialButton} mt-6`}>
              {t.story.read}
              <ArrowRight aria-hidden className="size-4" />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-cinema-950/72" />

              <Dialog.Content className="print-frame fixed inset-x-0 bottom-0 z-50 max-h-[92vh] overflow-y-auto rounded-t-3xl bg-paper-50 text-ink-900 shadow-soft md:inset-auto md:left-1/2 md:top-1/2 md:max-h-[88vh] md:w-[min(760px,calc(100vw-48px))] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md">
                <img
                  src={s.image.src}
                  alt=""
                  className="aspect-[2.39/1] w-full object-cover"
                />

                <div className="mx-auto max-w-[680px] p-6 md:p-10">
                  <p className="eyebrow text-terra-700">
                    {l(s.section)}
                  </p>

                  <Dialog.Title className="display-l mt-3">
                    {l(s.headline)}
                  </Dialog.Title>

                  <Dialog.Description className="lede mt-4 text-ink-700">
                    {l(s.deck)}
                  </Dialog.Description>

                  {s.body.map((p, i) => (
                    <p
                      key={i}
                      className={`mt-6 text-lg ${
                        i === 0
                          ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-terra-700"
                          : ""
                      }`}
                    >
                      {l(p)}
                    </p>
                  ))}

                  <p className="caption mt-8 text-ink-500">
                    {l(s.byline)}
                  </p>
                </div>

                <Dialog.Close
                  aria-label={t.story.close}
                  className="print-frame absolute right-3 top-3 grid size-11 place-items-center rounded-full border-[1.5px] border-ink-900 bg-paper-50 shadow-[2px_2px_0_var(--ink-900)]"
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
  const { t, l } = useI18n();

  return (
    <section
      className="section-y overflow-hidden bg-sage-300"
      aria-labelledby="quiz-h"
    >
      <div className="page-shell grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-forest-800">
            {t.quiz.overline}
          </p>

          <h2 id="quiz-h" className="display-l mt-3 text-forest-900">
            {t.quiz.title}
          </h2>

          <p className="lede mt-6 max-w-[40ch] text-ink-700">
            {t.quiz.body}
          </p>

          <p className="mt-4 max-w-[44ch] leading-7 text-ink-700">
            {l({
              es: "Descubre qué figura de la cultura hispana conecta con tus gustos y explora las historias, las películas y las tradiciones que hacen tan diversa esta cultura.",
              en: "Discover which figure from Hispanic culture matches your interests, and explore the stories, films and traditions that make this culture so diverse.",
            })}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/quiz" className={editorialButton}>
              {t.quiz.cta}
              <ArrowRight aria-hidden className="size-4" />
            </Link>

            <span
              aria-hidden
              className="script-accent -rotate-6 text-terra-700"
            >
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
