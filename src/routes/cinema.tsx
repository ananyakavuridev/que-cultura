import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/collections/Marquee";
import { cinemaProfiles } from "@/data/profiles";
import { useI18n } from "@/i18n/LanguageContext";

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

function CinemaPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-shell pt-10">
        <h1 className="display-l">{t.nav.cinema}</h1>
        <p className="lede mt-5 max-w-3xl">{t.collection.cinemaIntro}</p>
      </section>
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
    </>
  );
}
