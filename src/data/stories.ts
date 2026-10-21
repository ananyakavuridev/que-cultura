import type { L10n } from "@/i18n/dictionaries";
import storyImg from "@/assets/story-cinema.jpg";

export type Story = {
  id: string;
  isSample: boolean;
  section: L10n;
  headline: L10n;
  deck: L10n;
  body: L10n[];
  byline: L10n;
  minutes: number;
  image: { src: string; width: number; height: number; alt: L10n; credit: L10n };
};

export const featuredStory: Story = {
  id: "story-sample-01",
  isSample: true,
  section: { es: "Cine", en: "Cinema" },
  headline: {
    es: "Las salas de barrio y la memoria de una butaca",
    en: "Neighbourhood cinemas and the memory of a seat",
  },
  deck: {
    es: "Un reportaje de muestra sobre cómo los cines de barrio moldearon la experiencia colectiva de ver películas. El texto final se redactará con fuentes verificadas.",
    en: "A sample feature on how neighbourhood cinemas shaped the shared experience of watching films. The final text will be written from verified sources.",
  },
  body: [
    {
      es: "Este es un texto de muestra. Aquí comenzará el reportaje, con una entrada que sitúe al lector en una sala concreta, en un momento concreto, y con fuentes citadas.",
      en: "This is sample text. The feature will begin here, placing the reader in a specific hall at a specific moment, with cited sources.",
    },
    {
      es: "Los párrafos siguientes desarrollarán el tema con entrevistas, archivo y contexto. Ninguna afirmación de este borrador debe leerse como un hecho.",
      en: "The following paragraphs will develop the topic through interviews, archives and context. Nothing in this draft should be read as fact.",
    },
  ],
  byline: { es: "Redacción de ¡Qué Cultura!", en: "¡Qué Cultura! editorial team" },
  minutes: 6,
  image: {
    src: storyImg,
    width: 1344,
    height: 896,
    alt: {
      es: "Sala de cine antigua y vacía, con butacas de terciopelo, un arco ornamentado y el haz cálido de un proyector.",
      en: "An old, empty cinema hall with velvet seats, an ornate arch and a warm projector beam.",
    },
    credit: {
      es: "",
      en: "",
    },
  },
};
