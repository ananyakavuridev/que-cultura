
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
  id: "story-neighbourhood-cinemas",
  isSample: false,
  section: { es: "Cine", en: "Cinema" },
  headline: {
    es: "Mucho más que una película: la magia de los cines de barrio",
    en: "More Than a Movie: The Magic of Neighbourhood Cinemas",
  },
  deck: {
    es: "Antes de que las películas llegaran a nuestras pantallas personales, el cine era una experiencia compartida. Las salas reunían a familias, amigos y comunidades para reír, emocionarse y crear recuerdos que iban mucho más allá de la pantalla.",
    en: "Before films arrived on our personal screens, cinema was a shared experience. Theatres brought families, friends and communities together to laugh, feel and create memories that extended far beyond the screen.",
  },
  body: [
    {
      es: "Hay algo especial en ver una película junto a otras personas. Una escena divertida provoca risas por toda la sala; un momento triste se comparte en silencio. Durante generaciones, los cines fueron lugares donde las personas no solo veían historias, sino que también compartían emociones. La experiencia de ir al cine podía convertirse en una tradición familiar, una salida con amigos o una ocasión para descubrir algo nuevo juntos.",
      en: "There is something special about watching a film alongside other people. A funny scene sets off laughter throughout the theatre; a sad moment is shared in silence. For generations, cinemas have been places where people do more than watch stories: they share emotions. Going to the cinema can become a family tradition, an outing with friends or an opportunity to discover something new together.",
    },
    {
      es: "Los cines de barrio también formaban parte de la vida cotidiana. Eran espacios de encuentro donde personas de distintas edades y experiencias podían reunirse alrededor de una misma historia. Las películas ofrecían temas para conversar después de la función, mientras que las visitas repetidas creaban recuerdos ligados a lugares, personas y momentos concretos. Así, el cine contribuía a fortalecer los vínculos entre las personas y su comunidad.",
      en: "Neighbourhood cinemas were also part of everyday life. They were meeting places where people of different ages and backgrounds could gather around the same story. Films offered something to talk about after the screening, while repeated visits created memories connected to particular places, people and moments. In this way, cinema helped strengthen relationships between people and their communities.",
    },
    {
      es: "En el mundo hispano, el cine también ha sido una forma de expresar identidades y conservar tradiciones. Las películas pueden reflejar las lenguas, las costumbres, los estilos de vida, la historia y los valores sociales de una comunidad. Desde los musicales mexicanos hasta los dramas españoles y argentinos, las historias cinematográficas muestran distintas realidades culturales y permiten que el público se acerque a experiencias diferentes de la suya.",
      en: "Across the Hispanic world, cinema has also been a way to express identities and preserve traditions. Films can reflect a community's languages, customs, lifestyles, history and social values. From Mexican musical films to Spanish and Argentine dramas, cinema portrays different cultural realities and allows audiences to encounter experiences beyond their own.",
    },
    {
      es: "La historia del cine mexicano demuestra cómo las películas pueden viajar mucho más allá de su lugar de origen. Durante la Edad de Oro del cine mexicano, en las décadas de 1940 y 1950, figuras como Pedro Infante y María Félix se hicieron conocidas a través de películas que exploraban el amor, la familia, la música, las tradiciones y las diferencias sociales. Estas historias llegaron a públicos de otras partes de América Latina y se convirtieron en una parte importante de la cultura popular.",
      en: "The history of Mexican cinema shows how films can travel far beyond where they were made. During the Golden Age of Mexican cinema in the 1940s and 1950s, figures such as Pedro Infante and María Félix became widely known through films exploring love, family, music, traditions and social differences. These stories reached audiences across Latin America and became an important part of popular culture.",
    },
    {
      es: "El cine español, por su parte, sigue explorando la complejidad de las relaciones humanas. El director Pedro Almodóvar es conocido por sus historias sobre la familia, la identidad, el amor y las emociones, así como por su estilo visual lleno de color. Sus películas parten de experiencias y personajes concretos, pero abordan sentimientos que pueden resultar familiares para espectadores de muchos lugares. Una historia local puede, de esta manera, conectar con una audiencia global.",
      en: "Spanish cinema continues to explore the complexity of human relationships. Director Pedro Almodóvar is known for stories about family, identity, love and emotion, as well as for his colourful visual style. His films begin with particular experiences and characters but explore feelings that audiences in many places can recognise. A local story can, in this way, connect with a global audience.",
    },
    {
      es: "Los festivales también mantienen vivo este intercambio cultural. El Festival Internacional de Cine de San Sebastián, fundado en 1953, reúne a cineastas, intérpretes, críticos y amantes del cine. Estos encuentros permiten descubrir películas, compartir ideas y celebrar distintas formas de contar historias. De manera similar, el Día del Cine Español, celebrado el 6 de octubre desde 2021, promueve el cine mediante proyecciones, debates, exposiciones y actividades educativas.",
      en: "Film festivals also keep this cultural exchange alive. The San Sebastián International Film Festival, founded in 1953, brings together filmmakers, performers, critics and cinema lovers. These gatherings offer opportunities to discover films, exchange ideas and celebrate different ways of telling stories. Similarly, Spanish Cinema Day, celebrated on 6 October since 2021, promotes cinema through screenings, discussions, exhibitions and educational activities.",
    },
    {
      es: "Hoy, las plataformas digitales permiten ver películas desde casa y descubrir historias de cualquier parte del mundo. Sin embargo, la comodidad del streaming no elimina el valor de una experiencia compartida en una sala. Sentarse entre desconocidos, reaccionar juntos a una escena y conversar al salir son pequeñas experiencias que convierten una película en un recuerdo colectivo. La pantalla puede ser la misma, pero el modo de vivir la historia cambia.",
      en: "Today, digital platforms make it possible to watch films at home and discover stories from anywhere in the world. Yet the convenience of streaming does not erase the value of a shared cinema experience. Sitting among strangers, reacting together to a scene and talking afterwards are small moments that turn a film into a collective memory. The screen may be the same, but the way we experience the story changes.",
    },
    {
      es: "Quizá por eso los cines de barrio significan tanto: no son únicamente lugares donde se proyectan películas. Son espacios donde la cultura se comparte, las tradiciones encuentran nuevas formas de continuar y las personas construyen recuerdos en común. Mucho después de que terminen los créditos, lo que vivimos juntos puede seguir formando parte de nuestra historia.",
      en: "Perhaps that is why neighbourhood cinemas matter so much: they are not simply places where films are screened. They are spaces where culture is shared, traditions find new ways to continue and people build memories together. Long after the credits roll, what we experienced together can remain part of our story.",
    },
  ],
  byline: {
    es: "Redacción de ¡Qué Cultura!",
    en: "¡Qué Cultura! editorial team",
  },
  minutes: 6,
  image: {
    src: storyImg,
    width: 1344,
    height: 896,
    alt: {
      es: "Sala de cine antigua con butacas de terciopelo y la luz cálida de un proyector.",
      en: "An old cinema hall with velvet seats and the warm light of a projector.",
    },
    credit: {
      es: "",
      en: "",
    },
  },
};
