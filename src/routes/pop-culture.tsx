import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/collections/Marquee";
import { popProfiles } from "@/data/pop-culture";
import { useI18n } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/pop-culture")({
  head: () => ({
    meta: [
      { title: "Cultura Pop — ¡Qué Cultura!" },
      { name: "description", content: "Música, televisión y figuras de la cultura pop hispana." },
      { property: "og:title", content: "Cultura Pop — ¡Qué Cultura!" },
      {
        property: "og:description",
        content: "Música, televisión y figuras de la cultura pop hispana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PopCulturePage,
});

function PopCulturePage() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-shell pt-10">
        <h1 className="display-l">{t.nav.pop}</h1>
        <p className="lede mt-5 max-w-3xl">{t.collection.popIntro}</p>
      </section>
      <Marquee
        items={popProfiles}
        overline={t.pop.overline}
        title={t.pop.title}
        label={t.pop.label}
        persistenceKey="pop"
        tone="rosa"
        direction="right"
        speed={40}
      />
    </>
  );
}
