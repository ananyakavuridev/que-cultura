
import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/collections/Marquee";
import { popProfiles } from "@/data/pop-culture";
import { useI18n } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/pop-culture")({
  head: () => ({
    meta: [
      { title: "Cultura Pop — ¡Qué Cultura!" },
      {
        name: "description",
        content:
          "Música, televisión y figuras de la cultura pop hispana.",
      },
      { property: "og:title", content: "Cultura Pop — ¡Qué Cultura!" },
      {
        property: "og:description",
        content:
          "Música, tradiciones, fiestas y expresiones de la cultura popular hispana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PopCulturePage,
});

function PopCulturePage() {
  const { t, l } = useI18n();

  return (
    <main>
      {/* HERO */}
      <section className="page-shell flex min-h-[680px] flex-col justify-center py-20 md:min-h-[760px] md:py-28">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="eyebrow mb-8">
            {l({
              es: "Música · Tradiciones · Vida cotidiana",
              en: "Music · Traditions · Everyday life",
            })}
          </p>

          <h1 className="display-xl text-7xl leading-none md:text-8xl lg:text-9xl">
            {l({
              es: "Cultura Pop.",
              en: "Pop Culture.",
            })}
          </h1>

          <p className="lede mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
            {l({
              es: "Una cultura que se escucha, se baila, se comparte y evoluciona.",
              en: "A culture that is heard, danced, shared and always evolving.",
            })}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 opacity-75 md:text-base">
            {l({
              es: "De la música y las fiestas a la televisión y las costumbres cotidianas, descubre las expresiones que conectan a las comunidades hispanohablantes y dan vida a sus identidades.",
              en: "From music and festivals to television and everyday customs, discover the expressions that connect Spanish-speaking communities and bring their identities to life.",
            })}
          </p>

          <a
            href="#pop-collection"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("pop-collection")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="mt-8 inline-flex rounded-full border border-current px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#14251c] hover:text-[#f3e9d7]"
          >
            {l({
              es: "Explorar la colección ↓",
              en: "Explore the collection ↓",
            })}
          </a>

          <div className="mx-auto mt-12 max-w-3xl border-t border-current/20 pt-5">
            <p className="eyebrow">
              {l({
                es: "Personas · Ritmos · Tradiciones",
                en: "People · Rhythms · Traditions",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="page-shell section-y">
        <div className="mx-auto max-w-4xl">
          <div className="rule-double" />

          <p className="eyebrow mt-6">
            {l({
              es: "Una cultura viva",
              en: "A living culture",
            })}
          </p>

          <h2 className="display-l mt-4 max-w-3xl">
            {l({
              es: "Mucho más que entretenimiento.",
              en: "Much more than entertainment.",
            })}
          </h2>

          <p className="lede mt-6 max-w-3xl">
            {l({
              es: "La cultura popular hispana es rica y diversa. Incluye la música, el baile, la comida, las fiestas, las series de televisión y el cine. Cada país tiene sus propias tradiciones y formas de expresión.",
              en: "Hispanic popular culture is rich and diverse. It includes music, dance, food, festivals, television series and cinema. Each country has its own traditions and forms of expression.",
            })}
          </p>

          <p className="mt-5 max-w-2xl leading-8 opacity-80">
            {l({
              es: "España, México, Argentina y Colombia tienen tradiciones culturales diferentes, pero el idioma español crea conexiones entre muchas de sus comunidades. La cultura popular permite compartir historias, expresar identidades y conservar recuerdos.",
              en: "Spain, Mexico, Argentina and Colombia have different cultural traditions, but the Spanish language creates connections between many of their communities. Popular culture allows people to share stories, express identities and preserve memories.",
            })}
          </p>
        </div>
      </section>

      {/* CULTURAL THEMES */}
      <section className="page-shell pb-20 md:pb-28">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">
            {l({
              es: "Un mosaico de expresiones",
              en: "A mosaic of expressions",
            })}
          </p>

          <h2 className="display-l mt-4">
            {l({
              es: "Formas de vivir la cultura.",
              en: "Ways of experiencing culture.",
            })}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="border border-current/20 p-6 md:p-8">
            <span className="script-accent text-3xl">01</span>

            <h3 className="h3-editorial mt-4">
              {l({
                es: "Música y baile",
                en: "Music and dance",
              })}
            </h3>

            <p className="mt-4 leading-7 opacity-80">
              {l({
                es: "La música y el baile son formas de expresión que acompañan celebraciones y la vida cotidiana. A través de los ritmos, las personas comparten emociones y mantienen vivas sus tradiciones.",
                en: "Music and dance are forms of expression that accompany celebrations and everyday life. Through rhythms, people share emotions and keep traditions alive.",
              })}
            </p>
          </article>

          <article className="border border-current/20 p-6 md:p-8">
            <span className="script-accent text-3xl">02</span>

            <h3 className="h3-editorial mt-4">
              {l({
                es: "Comida y fiestas",
                en: "Food and festivals",
              })}
            </h3>

            <p className="mt-4 leading-7 opacity-80">
              {l({
                es: "La gastronomía y las fiestas reúnen a familias y comunidades. Las recetas, las reuniones y las celebraciones ayudan a transmitir costumbres entre generaciones.",
                en: "Food and festivals bring families and communities together. Recipes, gatherings and celebrations help pass customs from one generation to the next.",
              })}
            </p>
          </article>

          <article className="border border-current/20 p-6 md:p-8">
            <span className="script-accent text-3xl">03</span>

            <h3 className="h3-editorial mt-4">
              {l({
                es: "Televisión e historias",
                en: "Television and stories",
              })}
            </h3>

            <p className="mt-4 leading-7 opacity-80">
              {l({
                es: "Las series de televisión y el cine cuentan historias sobre la familia, el amor, la amistad y la sociedad. Sus personajes y relatos pueden convertirse en referencias culturales compartidas.",
                en: "Television series and cinema tell stories about family, love, friendship and society. Their characters and narratives can become shared cultural references.",
              })}
            </p>
          </article>
        </div>
      </section>

      {/* EXISTING POP CULTURE MARQUEE */}
      <div id="pop-collection" className="scroll-mt-0">
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
      </div>

      {/* CLOSING SECTION */}
      <section className="page-shell section-y">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rule-double" />

          <p className="eyebrow mt-6">
            {l({
              es: "Lo que compartimos",
              en: "What we share",
            })}
          </p>

          <h2 className="display-l mt-4">
            {l({
              es: "Tradiciones que siguen contando historias.",
              en: "Traditions that keep telling stories.",
            })}
          </h2>

          <p className="lede mt-6">
            {l({
              es: "La cultura popular no solo entretiene: también conserva tradiciones, expresa identidades y crea recuerdos compartidos. Conecta a las personas a través de historias, costumbres y experiencias.",
              en: "Popular culture does more than entertain: it preserves traditions, expresses identities and creates shared memories. It connects people through stories, customs and experiences.",
            })}
          </p>
        </div>
      </section>
    </main>
  );
}
