import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/collections/Marquee";
import { cinemaProfiles } from "@/data/profiles";
import { useI18n } from "@/i18n/LanguageContext";
import type { L10n } from "@/i18n/dictionaries";

export const Route = createFileRoute("/cinema")({
  head: () => ({
    meta: [
      { title: "Cine — ¡Qué Cultura!" },
      { name: "description", content: "Directores, intérpretes y películas del cine hispano." },
      { property: "og:title", content: "Cine — ¡Qué Cultura!" },
      {
        property: "og:description",
        content: "Directores, intérpretes y películas del cine hispano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CinemaPage,
});


const cinemaSections: {
  number: string;
  eyebrow: L10n;
  title: L10n;
  paragraphs: L10n[];
}[] = [
  {
    number: "01",
    eyebrow: {
      es: "España · 6 de octubre",
      en: "Spain · 6 October",
    },
    title: {
      es: "Día del Cine Español",
      en: "Spanish Cinema Day",
    },
    paragraphs: [
      {
        es: "España celebra el Día del Cine Español cada año el 6 de octubre. Esta celebración comenzó en 2021 para reconocer la industria cinematográfica española y su patrimonio cultural.",
        en: "Spain celebrates Spanish Cinema Day every year on 6 October. The celebration began in 2021 to recognise the Spanish film industry and its cultural heritage.",
      },
      {
        es: "Las proyecciones, los debates, las exposiciones y las actividades educativas recuerdan que las películas también forman parte de la identidad cultural de un país.",
        en: "Screenings, discussions, exhibitions and educational activities highlight how films are also part of a country's cultural identity.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: {
      es: "México · Años 1940 y 1950",
      en: "Mexico · The 1940s and 1950s",
    },
    title: {
      es: "La Época de Oro del cine mexicano",
      en: "The Golden Age of Mexican Cinema",
    },
    paragraphs: [
      {
        es: "Durante las décadas de 1940 y 1950, el cine mexicano vivió un importante período de crecimiento. Actores como Pedro Infante y María Félix se convirtieron en grandes figuras culturales.",
        en: "During the 1940s and 1950s, Mexican cinema experienced a significant period of growth. Actors such as Pedro Infante and María Félix became major cultural figures.",
      },
      {
        es: "Las películas exploraban la familia, el amor, la música, las diferencias sociales y las tradiciones mexicanas. Su difusión por América Latina ayudó a crear referencias culturales compartidas.",
        en: "Films explored family, love, music, social differences and Mexican traditions. Their reach across Latin America helped create shared cultural references.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: {
      es: "España · Dirección",
      en: "Spain · Film direction",
    },
    title: {
      es: "Pedro Almodóvar",
      en: "Pedro Almodóvar",
    },
    paragraphs: [
      {
        es: "Pedro Almodóvar es uno de los directores españoles más reconocidos internacionalmente. Sus películas suelen explorar las relaciones familiares, la identidad, el amor y las emociones humanas.",
        en: "Pedro Almodóvar is one of Spain's most internationally recognised directors. His films often explore family relationships, identity, love and human emotions.",
      },
      {
        es: "Su estilo visual colorido muestra cómo las historias y las experiencias locales pueden conectar con espectadores de todo el mundo.",
        en: "His colourful visual style shows how local stories and experiences can connect with audiences around the world.",
      },
    ],
  },
  {
    number: "04",
    eyebrow: {
      es: "San Sebastián · Desde 1953",
      en: "San Sebastián · Since 1953",
    },
    title: {
      es: "Un encuentro entre culturas",
      en: "A meeting of cultures",
    },
    paragraphs: [
      {
        es: "Fundado en 1953, el Festival Internacional de Cine de San Sebastián reúne a directores, actores, críticos y amantes del cine.",
        en: "Founded in 1953, the San Sebastián International Film Festival brings together directors, actors, critics and cinema lovers.",
      },
      {
        es: "Los festivales permiten descubrir nuevas películas, intercambiar ideas y celebrar diferentes culturas. También convierten el cine en una oportunidad para el diálogo y la amistad.",
        en: "Festivals offer opportunities to discover films, exchange ideas and celebrate different cultures. They also make cinema an opportunity for dialogue and friendship.",
      },
    ],
  },
  {
    number: "05",
    eyebrow: {
      es: "Comunidad · Recuerdos compartidos",
      en: "Community · Shared memories",
    },
    title: {
      es: "Los cines de barrio",
      en: "Neighbourhood cinemas",
    },
    paragraphs: [
      {
        es: "Antes de que las plataformas digitales fueran habituales, los cines de barrio eran lugares de encuentro. Familias, amigos y vecinos se reunían para ver películas y conversar después de la proyección.",
        en: "Before digital platforms became commonplace, neighbourhood cinemas were gathering places. Families, friends and neighbours met to watch films and talk afterwards.",
      },
      {
        es: "Estas salas creaban emociones compartidas, relaciones comunitarias, tradiciones familiares e intercambios culturales. Aunque hoy podemos ver películas en casa, disfrutar de una película juntos en una sala sigue siendo una experiencia especial.",
        en: "These cinemas fostered shared emotions, community relationships, family traditions and cultural exchange. Although we can watch films at home today, enjoying one together in a cinema remains a special experience.",
      },
    ],
  },
];


function CinemaPage() {
  const { t, lang} = useI18n();
  const text = <T extends L10n>(value: T) => value[lang];
  return (
    <>
      <section className="page-shell flex min-h-[680px] flex-col justify-center py-20 md:min-h-[760px] md:py-28">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="eyebrow mb-8">
            {t.cinema.overline}
          </p>

          <h1 className="display-xl text-7xl leading-none md:text-8xl lg:text-9xl">
            {t.nav.cinema}.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
            {t.collection.cinemaIntro}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 opacity-75 md:text-base">
            {lang === 'es'
              ? "Del cine de oro mexicano a las miradas contemporáneas, descubre las historias, las tradiciones y las voces que han dado forma al cine hispano."
              : "From the Golden Age of Mexican cinema to contemporary visions, discover the stories, traditions and voices that have shaped Hispanic cinema."
            }
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
                href="#cinema-collection"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("cinema-collection")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="rounded-full border border-current px-6 py-3 text-sm transition-all duration-300 hover:bg-[#14251c] hover:text-[#f3e9d7] hover:-translate-y-1"
              >
                {lang === "es"
                  ? "Explorar la colección ↓"
                  : "Explore the collection ↓"}
              </a>
          </div>

          <div className="mx-auto mt-12 max-w-3xl border-t border-current/20 pt-5">
            <p className="eyebrow">
              {lang === 'es'
                ? "Personajes · Películas · Historias"
                : "People · Films · Stories"
              }
            </p>
          </div>
        </div>
      </section>

      <div id="cinema-collection" className="scroll-mt-0">
      <Marquee
        items={cinemaProfiles}
        overline={t.cinema.overline}
        title={t.cinema.title}
        label={t.cinema.label}
        persistenceKey="cinema"
        tone="dark"
        direction="left"
        speed={46}
      />
    </div>
      
      <section className="page-shell section-y">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow text-terra-700">
            {t.nav.cinema}
          </p>
          <h2 className="display-l mt-4">
            {t.lang.es === "ES" // Do not use this condition; see correction below
              ? "Mucho más que una película"
              : "More than a film"}
          </h2>
        </header>

        <div className="mx-auto max-w-5xl">
          {cinemaSections.map((section) => (
            <article
              key={section.number}
              className="grid gap-5 border-t border-ink-900/25 py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="md:col-span-4">
                <p className="font-display text-4xl text-terra-700">
                  {section.number}
                </p>
                <p className="eyebrow mt-4 text-ink-500">
                  {text(section.eyebrow)}
                </p>
                <h3 className="h2-editorial mt-3">
                  {text(section.title)}
                </h3>
              </div>

              <div className="space-y-5 md:col-span-7 md:col-start-6">
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-ink-700"
                  >
                    {text(paragraph)}
                  </p>
                ))}
              </div>
            </article>
          ))}
          <div className="rule-double mt-4" />
        </div>
      </section>

    </>
  );
}
