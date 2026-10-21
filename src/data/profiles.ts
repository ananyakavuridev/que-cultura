import type { L10n } from "@/i18n/dictionaries";
export type Profile = {
  id: string;
  isSample: boolean;
  needsVerification?: boolean;
  name: L10n;
  discipline: L10n;
  hook: L10n;
  country: L10n | null;
  activeYears: string | null;
  bio: L10n;
  significance: L10n;
  works: L10n[];
  keywords?: L10n[];
  source?: L10n;
  sourceUrl?: string;
  interpretive?: boolean;
  category?: string;
  imageKey?: string;
  image?: { src: string; alt: L10n; credit: string };
  monogram: string;
};
export const cinemaProfiles: Profile[] = [
  {
    id: "penelope-cruz",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Penélope Cruz",
      en: "Penélope Cruz",
    },
    discipline: {
      es: "Actriz",
      en: "Actress",
    },
    hook: {
      es: "apasionada, disciplinada, cálida.",
      en: "passionate, disciplined, warm.",
    },
    country: {
      es: "España",
      en: "Spain",
    },
    activeYears: null,
    bio: {
      es: "Penélope es una persona apasionada y muy disciplinada. Trabaja mucho y no tiene miedo de hacer papeles difíciles. Es cálida y leal con la gente que quiere, y prefiere una vida privada.",
      en: "Penélope is passionate and very disciplined. She works hard and is not afraid of difficult roles. She is warm and loyal to the people she loves and prefers a private life.",
    },
    significance: {
      es: "Penélope Cruz es apasionada y disciplinada. Nueve años de formación en ballet clásico antes de actuar marcaron su ética de trabajo; sigue aceptando papeles exigentes y emotivos. Es cálida y leal con los directores en quienes confía, especialmente Pedro Almodóvar, con quien ha trabajado muchas veces. A pesar de su fama, ella y su marido Javier Bardem son conocidos por mantener un perfil discreto. Afinidad con personas motivadas, expresivas y centradas en la familia.",
      en: "Penélope Cruz is passionate and disciplined. Nine years of classical ballet training before acting shaped a strong work ethic, and she keeps taking on demanding, emotional roles. She is warm and loyal to the directors she trusts, especially Pedro Almodóvar, with whom she has worked many times. Despite her fame, she and her husband Javier Bardem are known for keeping a low profile. Best match for people who are driven, expressive, and family-centered.",
    },
    works: [],
    keywords: [
      {
        es: "apasionada",
        en: "passionate",
      },
      {
        es: "disciplinada",
        en: "disciplined",
      },
      {
        es: "cálida",
        en: "warm",
      },
      {
        es: "valiente",
        en: "brave",
      },
      {
        es: "leal",
        en: "loyal",
      },
      {
        es: "reservada",
        en: "reserved",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    monogram: "PC",
    imageKey: "penelope-cruz",
  },
  {
    id: "javier-bardem",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Javier Bardem",
      en: "Javier Bardem",
    },
    discipline: {
      es: "Actor",
      en: "Actor",
    },
    hook: {
      es: "intenso, reflexivo, serio.",
      en: "intense, reflective, serious.",
    },
    country: {
      es: "España",
      en: "Spain",
    },
    activeYears: null,
    bio: {
      es: "Javier es un hombre intenso que piensa mucho. Se toma su trabajo muy en serio, pero también sabe reírse de sí mismo. Quiere mucho a su familia y a su país.",
      en: "Javier is an intense man who thinks a lot. He takes his work very seriously, but also knows how to laugh at himself. He loves his family and his country.",
    },
    significance: {
      es: "Javier Bardem es intenso, reflexivo y serio con su oficio, aunque tiene un humor autocrítico. Bromeó sobre el «terrible corte de pelo» de su papel ganador del Óscar. Creció en una familia de actores y cineastas y dedicó su Óscar a su madre, sus abuelos y España, mostrando lealtad a sus raíces. Quiso ser pintor, lo que sugiere un lado artístico y reflexivo. Afinidad con personas que piensan profundamente, sienten con intensidad y permanecen cerca de su familia.",
      en: 'Javier Bardem is intense, thoughtful, and serious about his craft, yet he has a self-deprecating sense of humor. He joked about the "terrible haircut" his Oscar-winning role gave him. He grew up in a family of actors and filmmakers, and he dedicated his Oscar to his mother, grandparents, and Spain, which shows deep loyalty to his roots. He once wanted to be a painter, which hints at an artistic, reflective side. Best match for people who think deeply, feel strongly, and stay close to family.',
    },
    works: [],
    keywords: [
      {
        es: "intenso",
        en: "intense",
      },
      {
        es: "reflexivo",
        en: "reflective",
      },
      {
        es: "serio",
        en: "serious",
      },
      {
        es: "artístico",
        en: "artistic",
      },
      {
        es: "leal",
        en: "loyal",
      },
      {
        es: "humilde",
        en: "humble",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    monogram: "JB",
    imageKey: "javier-bardem",
  },
  {
    id: "salma-hayek",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Salma Hayek",
      en: "Salma Hayek",
    },
    discipline: {
      es: "Actriz y productora",
      en: "Actress and producer",
    },
    hook: {
      es: "ambiciosa, decidida, perseverante.",
      en: "ambitious, determined, persevering.",
    },
    country: {
      es: "México",
      en: "Mexico",
    },
    activeYears: null,
    bio: {
      es: "Salma es una mujer decidida y muy ambiciosa. Cuando algo es difícil, no se rinde: crea sus propias oportunidades. Está orgullosa de ser mexicana y cuenta historias de mujeres fuertes.",
      en: "Salma is determined and very ambitious. When something is difficult, she does not give up: she creates her own opportunities. She is proud to be Mexican and tells stories about strong women.",
    },
    significance: {
      es: "Salma Hayek es ambiciosa, decidida y emprendedora. Tras un comienzo difícil en Hollywood, creó su propia productora e hizo Frida, un proyecto soñado que protagonizó y produjo. Está orgullosa de sus raíces mexicanas y elige historias sobre mujeres fuertes y apasionadas. Lidera en vez de esperar oportunidades. Afinidad con personas que se fijan grandes metas y hacen que las cosas sucedan.",
      en: "Salma Hayek is ambitious, determined, and entrepreneurial. After a hard start in Hollywood, she created her own production company and made Frida, a dream project that she both starred in and produced. She is proud of her Mexican roots and chooses stories about strong, passionate women. She leads rather than waits for opportunities. Best match for people who set big goals and make things happen themselves.",
    },
    works: [
      {
        es: "Frida",
        en: "Frida",
      },
    ],
    keywords: [
      {
        es: "ambiciosa",
        en: "ambitious",
      },
      {
        es: "decidida",
        en: "determined",
      },
      {
        es: "perseverante",
        en: "persevering",
      },
      {
        es: "líder",
        en: "leader",
      },
      {
        es: "apasionada",
        en: "passionate",
      },
      {
        es: "orgullosa de sus raíces",
        en: "proud of her roots",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    monogram: "SH",
    imageKey: "salma-hayek",
  },
  {
    id: "gael-garcia-bernal",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Gael García Bernal",
      en: "Gael García Bernal",
    },
    discipline: {
      es: "Actor y productor",
      en: "Actor and producer",
    },
    hook: {
      es: "curioso, aventurero, rebelde.",
      en: "curious, adventurous, rebellious.",
    },
    country: {
      es: "México",
      en: "Mexico",
    },
    activeYears: null,
    bio: {
      es: "Gael es un hombre curioso que busca aventuras. Le gustan los papeles diferentes y arriesgados. Trabaja con sus amigos y le importan los temas sociales.",
      en: "Gael is a curious man who seeks adventures. He likes different and risky roles. He works with his friends and cares about social issues.",
    },
    significance: {
      es: "Gael García Bernal es curioso, aventurero y socialmente consciente. Dejó México a los 17 años para estudiar interpretación en Londres y suele elegir papeles arriesgados y poco habituales. Valora la amistad y la colaboración, como muestra la productora que fundó con su amigo Diego Luna. Sus papeles, desde un joven Che Guevara hasta una voz en Coco, muestran una trayectoria amplia y abierta. Afinidad con exploradores, rebeldes creativos y personas comprometidas con causas.",
      en: "Gael García Bernal is curious, adventurous, and socially aware. He left Mexico at 17 to study acting in London and often picks risky, unusual roles instead of safe, commercial ones. He values friendship and collaboration, as shown by the production company he founded with his close friend Diego Luna. His roles, from a young Che Guevara to a voice in Coco, show a wide, open-minded range. Best match for explorers, creative rebels, and people who care about causes.",
    },
    works: [
      {
        es: "Coco",
        en: "Coco",
      },
    ],
    keywords: [
      {
        es: "curioso",
        en: "curious",
      },
      {
        es: "aventurero",
        en: "adventurous",
      },
      {
        es: "rebelde",
        en: "rebellious",
      },
      {
        es: "comprometido",
        en: "committed",
      },
      {
        es: "creativo",
        en: "creative",
      },
      {
        es: "buen amigo",
        en: "good friend",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    monogram: "GG",
    imageKey: "gael-garcia-bernal",
  },
  {
    id: "pedro-pascal",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Pedro Pascal",
      en: "Pedro Pascal",
    },
    discipline: {
      es: "Actor",
      en: "Actor",
    },
    hook: {
      es: "cálido, leal, paciente.",
      en: "warm, loyal, patient.",
    },
    country: {
      es: "Chile / Estados Unidos",
      en: "Chile / United States",
    },
    activeYears: null,
    bio: {
      es: "Pedro es una persona cálida y leal. Trabajó muchos años en papeles pequeños y nunca se rindió. En sus películas cuida a otros personajes, y en la vida real apoya a mucha gente.",
      en: "Pedro is warm and loyal. He worked for many years in small roles and never gave up. In his films he looks after other characters, and in real life he supports many people.",
    },
    significance: {
      es: "Pedro Pascal es cálido, leal y paciente. Pasó casi dos décadas en papeles pequeños antes de convertirse en una estrella, mostrando perseverancia. Conserva amistades de muchos años, como la que mantiene con Oscar Isaac desde 2005. En pantalla suele interpretar figuras protectoras y paternales; fuera de ella es conocido por apoyar a otros y defender los derechos LGBTQ. Afinidad con personas afectuosas y constantes que protegen a sus seres queridos.",
      en: "Pedro Pascal is warm, loyal, and patient. He spent nearly two decades in small roles before becoming a star, which shows real perseverance. He has kept close friendships for years, such as his friendship with Oscar Isaac since 2005. On screen he is often cast as a protective, fatherly figure, and off screen he is known as a supportive person and an ally of LGBTQ rights. Best match for caring, steady people who protect the ones they love.",
    },
    works: [],
    keywords: [
      {
        es: "cálido",
        en: "warm",
      },
      {
        es: "leal",
        en: "loyal",
      },
      {
        es: "paciente",
        en: "patient",
      },
      {
        es: "trabajador",
        en: "hard-working",
      },
      {
        es: "protector",
        en: "protective",
      },
      {
        es: "solidario",
        en: "supportive",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    monogram: "PP",
    imageKey: "pedro-pascal",
  },
  {
    id: "cantinflas",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Cantinflas",
      en: "Cantinflas",
    },
    discipline: {
      es: "Cómico y actor",
      en: "Comedian and actor",
    },
    hook: {
      es: "gracioso, ingenioso, generoso.",
      en: "funny, witty, generous.",
    },
    country: {
      es: "México",
      en: "Mexico",
    },
    activeYears: null,
    bio: {
      es: "Cantinflas era un hombre muy gracioso e inteligente. Hablaba mucho y de manera confusa, y así hacía reír a todos. Era humilde y ayudaba a niños y a personas pobres.",
      en: "Cantinflas was very funny and intelligent. He spoke a lot and in a confusing way, making everyone laugh. He was humble and helped children and poor people.",
    },
    significance: {
      es: "Cantinflas era ingenioso, optimista y generoso. Su personaje era un hombre humilde que hablaba deprisa y confundía a todos con palabras enredadas, pero siempre conquistaba al público. Procedía de una familia numerosa y modesta y después utilizó su riqueza para ayudar a niños y personas necesitadas. Charlie Chaplin admiraba su comedia. Afinidad con personas divertidas y ágiles de mente que mantienen la humildad y ayudan a otros.",
      en: "Cantinflas was witty, optimistic, and generous. His character was a humble, fast-talking man who confused everyone with clever, tangled words and still always won the audience's heart. He came from a large family of modest means and later used his wealth to help children and people in need. Charlie Chaplin admired his comedy. Best match for funny, quick-minded people who stay humble and help others.",
    },
    works: [],
    keywords: [
      {
        es: "gracioso",
        en: "funny",
      },
      {
        es: "ingenioso",
        en: "witty",
      },
      {
        es: "generoso",
        en: "generous",
      },
      {
        es: "humilde",
        en: "humble",
      },
      {
        es: "optimista",
        en: "optimistic",
      },
      {
        es: "hablador",
        en: "talkative",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    monogram: "C",
    imageKey: "cantinflas",
  },
  {
    id: "guillermo-del-toro",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Guillermo del Toro",
      en: "Guillermo del Toro",
    },
    discipline: {
      es: "Director",
      en: "Director",
    },
    hook: {
      es: "imaginativo, curioso, soñador.",
      en: "imaginative, curious, dreamer.",
    },
    country: {
      es: "México",
      en: "Mexico",
    },
    activeYears: null,
    bio: {
      es: "Guillermo es un hombre con mucha imaginación. De niño le gustaban los monstruos y las historias de miedo. En sus películas, los monstruos también pueden ser tiernos y bonitos.",
      en: "Guillermo is a man with a great imagination. As a child he liked monsters and scary stories. In his films, monsters can also be tender and beautiful.",
    },
    significance: {
      es: "Guillermo del Toro es imaginativo, curioso y un soñador de toda la vida. De niño en Guadalajara le fascinaban los monstruos, el terror y los insectos; siguen poblando sus películas. Llena historias oscuras de ternura, y la elección y la desobediencia recorren El laberinto del fauno. Guarda ideas en cuadernos durante años, mostrando paciencia y pasión. Afinidad con personas de gran imaginación que ven belleza en lo extraño.",
      en: "Guillermo del Toro is imaginative, curious, and a lifelong dreamer. As a child in Guadalajara he was fascinated by monsters, horror, and insects, and he still fills his films with them. He fills dark stories with tenderness, and the theme of choice and disobedience runs through Pan's Labyrinth. He keeps ideas in notebooks for years, which shows patience and passion. Best match for people with big imaginations who see beauty in strange things.",
    },
    works: [
      {
        es: "El laberinto del fauno",
        en: "El laberinto del fauno",
      },
    ],
    keywords: [
      {
        es: "imaginativo",
        en: "imaginative",
      },
      {
        es: "curioso",
        en: "curious",
      },
      {
        es: "soñador",
        en: "dreamer",
      },
      {
        es: "apasionado",
        en: "passionate",
      },
      {
        es: "rebelde",
        en: "rebellious",
      },
      {
        es: "creativo",
        en: "creative",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    monogram: "Gd",
    imageKey: "guillermo-del-toro",
  },
  {
    id: "pedro-almodovar",
    isSample: false,
    needsVerification: true,
    name: {
      es: "Pedro Almodóvar",
      en: "Pedro Almodóvar",
    },
    discipline: {
      es: "Director",
      en: "Director",
    },
    hook: {
      es: "atrevido, emocional, original.",
      en: "bold, emotional, original.",
    },
    country: {
      es: "España",
      en: "Spain",
    },
    activeYears: null,
    bio: {
      es: "Pedro es un director atrevido y muy emocional. Le gustan los colores fuertes y las historias de mujeres fuertes. Es leal con sus amigos y quiere mucho a su madre.",
      en: "Pedro is a bold and very emotional director. He likes strong colors and stories about strong women. He is loyal to his friends and loves his mother.",
    },
    significance: {
      es: "Pedro Almodóvar es atrevido, emocional y original. Formó parte de la movida creativa madrileña y sus películas usan colores vivos, grandes emociones e historias de mujeres fuertes. Es leal a sus colaboradores habituales, como Penélope Cruz, y está profundamente unido a su madre, a quien dedicó Todo sobre mi madre. Afinidad con personas expresivas y coloridas que viven sus emociones abiertamente.",
      en: 'Pedro Almodóvar is bold, emotional, and original. He became part of Madrid\'s creative "movida" scene early on, and his films use bright colors, big feelings, and stories about strong women. He is loyal to his favorite collaborators, such as Penélope Cruz, and deeply attached to his mother, to whom he dedicated Todo sobre mi madre. Best match for expressive, colorful people who live their feelings openly.',
    },
    works: [
      {
        es: "Todo sobre mi madre",
        en: "Todo sobre mi madre",
      },
    ],
    keywords: [
      {
        es: "atrevido",
        en: "bold",
      },
      {
        es: "emocional",
        en: "emotional",
      },
      {
        es: "original",
        en: "original",
      },
      {
        es: "colorido",
        en: "colorful",
      },
      {
        es: "leal",
        en: "loyal",
      },
      {
        es: "rebelde",
        en: "rebellious",
      },
    ],
    source: {
      es: "Documento aportado: Perfiles de personalidad",
      en: "Supplied document: Celebrity Personality Profiles",
    },
    interpretive: true,
    
    monogram: "PA",
    imageKey: "pedro-almodovar",
  },
  {
    id: "pedro-infante",
    isSample: false,
    needsVerification: true,
    name: { es: "Pedro Infante", en: "Pedro Infante" },
    discipline: { es: "Actor y cantante", en: "Actor and singer" },
    hook: {
      es: "carismático, cálido, expresivo.",
      en: "charismatic, warm, expressive.",
    },
    country: { es: "México", en: "Mexico" },
    activeYears: "1939–1957",
    bio: {
      es: "Pedro Infante fue un actor y cantante mexicano y una de las figuras más queridas de la Época de Oro del cine mexicano. Se hizo famoso por sus personajes cercanos al público y por combinar la actuación con la música ranchera.",
      en: "Pedro Infante was a Mexican actor and singer and one of the most beloved figures of the Golden Age of Mexican cinema. He became famous for relatable characters and for combining acting with ranchera music.",
    },
    significance: {
      es: "Sus películas y canciones siguen formando parte de la memoria cultural mexicana. Su trabajo conecta el cine clásico, la música ranchera y las historias de la vida cotidiana.",
      en: "His films and songs remain part of Mexican cultural memory. His work connects classic cinema, ranchera music and stories of everyday life.",
    },
    works: [
      { es: "Nosotros los pobres", en: "Nosotros los pobres" },
      { es: "Tizoc", en: "Tizoc" },
      { es: "Los tres García", en: "Los tres García" },
    ],
    keywords: [
      { es: "carismático", en: "charismatic" },
      { es: "cálido", en: "warm" },
      { es: "expresivo", en: "expressive" },
    ],
    source: {
      es: "Perfil editorial; verificar con fuentes fiables.",
      en: "Editorial profile; verify against reliable sources.",
    },
    interpretive: true,
    category: "cinema",
    imageKey: "pedro-infante",
    monogram: "PI",
  },
  {
    id: "maria-felix",
    isSample: false,
    needsVerification: true,
    name: { es: "María Félix", en: "María Félix" },
    discipline: { es: "Actriz", en: "Actress" },
    hook: {
      es: "independiente, elegante, decidida.",
      en: "independent, elegant, determined.",
    },
    country: { es: "México", en: "Mexico" },
    activeYears: "1942–1970",
    bio: {
      es: "María Félix fue una actriz mexicana y una de las grandes estrellas de la Época de Oro del cine mexicano. Conocida como La Doña, destacó por interpretar personajes fuertes, independientes y decididos.",
      en: "María Félix was a Mexican actress and one of the great stars of the Golden Age of Mexican cinema. Known as La Doña, she stood out for portraying strong, independent and determined characters.",
    },
    significance: {
      es: "Su presencia en pantalla, sus papeles de mujeres con carácter y su estilo personal la convirtieron en un icono del cine mexicano. Su legado sigue influyendo en la cultura popular y en la representación de mujeres poderosas.",
      en: "Her screen presence, roles portraying strong-willed women and personal style made her an icon of Mexican cinema. Her legacy continues to influence popular culture and portrayals of powerful women.",
    },
    works: [
      { es: "Doña Bárbara", en: "Doña Bárbara" },
      { es: "Enamorada", en: "Enamorada" },
      { es: "Río Escondido", en: "Río Escondido" },
    ],
    keywords: [
      { es: "independiente", en: "independent" },
      { es: "elegante", en: "elegant" },
      { es: "decidida", en: "determined" },
    ],
    source: {
      es: "Perfil editorial; verificar con fuentes fiables.",
      en: "Editorial profile; verify against reliable sources.",
    },
    interpretive: true,
    category: "cinema",
    imageKey: "maria-felix",
    monogram: "MF",
  },
];

