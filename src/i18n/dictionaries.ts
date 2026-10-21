export type Lang = "es" | "en";
export const LANGS: Lang[] = ["es", "en"];

/** Localised string helper used by data modules. */
export type L10n = Record<Lang, string>;

const es = {
  skip: "Saltar al contenido principal",
  brand: "¡Qué Cultura!",
  nav: { label: "Principal", home: "Inicio", cinema: "Cine", pop: "Cultura Pop", quiz: "Quiz" },
  lang: { label: "Idioma", switchTo: "Cambiar a inglés", es: "ES", en: "EN" },
  hero: {
    overline: "Cine y cultura popular hispana",
    title: "Historias en español, contadas en voz alta.",
    lede: "Una revista independiente sobre el cine, la música y los rostros que dan forma a la cultura hispana: leída con calma, mirada de cerca y compartida en dos idiomas.",
    ctaCinema: "Explorar el cine",
    ctaQuiz: "Hacer el quiz",
    caption: "",
    credit: "",
    imgAlt:
      "Grabado botánico de un agave y flores de cempasúchil bajo una campana de cristal, con un carrete de película antiguo.",
  },
  intro: {
    overline: "Sobre esta revista",
    body: "¡Qué Cultura! explora las películas, la música, el arte y las figuras que dan forma a la cultura del mundo hispanohablante, con una mirada curiosa y editorial.",
  },
  cinema: { overline: "Cine hispano", title: "La sala de cine", label: "Figuras del cine" },
  pop: { overline: "Cine hispanoI", title: "Cultura pop", label: "Figuras de la cultura pop" },
  marquee: {
    pause: "Pausar",
    play: "Reproducir",
    prev: "Anterior",
    next: "Siguiente",
    pauseLabel: "Pausar carrusel",
    playLabel: "Reproducir carrusel",
  },
  card: { opens: "Abre el perfil." },
  dialog: {
    close: "Cerrar",
    prev: "Perfil anterior",
    next: "Perfil siguiente",
    of: (a: number, b: number) => `Perfil ${a} de ${b}`,
    why: "Por qué importa",
    essentials: "Datos esenciales",
    country: "País",
    discipline: "Disciplina",
    years: "Años de actividad",
    works: "Obras clave",
    pending: "Pendiente de verificación",
    quiz: "Hacer el quiz",
  },
  sample: "Muestra",
  sampleNote: "Contenido de muestra — se sustituirá por información verificada.",
  story: {
    overline: "Reportaje destacado",
    read: "Leer el reportaje",
    minutes: (n: number) => `${n} min de lectura`,
    close: "Cerrar lectura",
  },
  quiz: {
    overline: "El cuestionario",
    title: "¿Quién es tu gemelo famoso?",
    body: "Diez preguntas, ninguna respuesta incorrecta. Descubre con qué figura del cine hispano compartes afinidades.",
    cta: "Empezar el quiz",
    script: "¡anímate!",
  },
  footer: {
    about: "Un proyecto cultural universitario: cine y cultura pop hispana, en dos idiomas.",
    terminology:
      "Usamos «hispano» para hablar de la cultura de habla hispana en todas sus geografías y diásporas.",
    explore: "Explorar",
    credits: "Créditos y licencias",
    disclaimer: "Sin afiliación ni respaldo de ninguna persona o marca mencionada.",
    creditsTitle: "Créditos y licencias",
    creditsImages: "Imágenes",
    creditsFonts: "Tipografías",
    creditsFontsBody:
      "Fraunces, Source Serif 4, Instrument Sans y Caveat — Google Fonts, licencia SIL Open Font License.",
    creditsIcons: "Iconos: Lucide (licencia ISC).",
  },
  collection: {
    cinemaIntro:
      "Ocho figuras, ocho maneras de mirar el cine. Descubre las voces, las ideas y la creatividad que han marcado la pantalla.",
    popIntro:
      "Música, pantallas, arte y celebraciones: un recorrido por las expresiones más fascinantes de la cultura hispana.",
    all: "Todas",
    music: "Música",
    screen: "Cine y televisión",
    art: "Arte e iconos culturales",
    traditions: "Tradiciones y celebraciones",
    browse: "Explorar la colección",
    empty: "No hay entradas en esta categoría.",
    placeholder: "Imagen pendiente",
    verification: "Investigación aportada · pendiente de verificación",
    interpretation: "Interpretación de personalidad",
    interpretationNote:
      "Estas descripciones son interpretaciones culturales para el quiz, no afirmaciones sobre la vida privada ni diagnósticos psicológicos.",
    source: "Documento de referencia",
    keywords: "Palabras clave",
  },
  assessment: {
    instructions:
      "Responde 10 preguntas y descubre qué famoso hispano es como tú. Elige una respuesta por pregunta.",
    note: "Una afinidad cultural divertida, no un diagnóstico ni una afirmación sobre la personalidad privada de nadie.",
    start: "Empezar",
    next: "Siguiente pregunta",
    back: "Pregunta anterior",
    finish: "Ver resultado",
    progress: (n: number, total: number) => `Pregunta ${n} de ${total}`,
    result: "Tu gemelo famoso es…",
    also: "También te pareces a",
    retry: "Otra vez",
    scoreNote:
      "Los porcentajes representan la proporción de los 30 puntos repartidos entre las ocho figuras, no una probabilidad.",
    resultLabel: "Resultado del quiz",
  },
  soon: {
    overline: "En preparación",
    body: "Esta sección está en construcción. Mientras tanto, vuelve a la portada para explorar las colecciones.",
    back: "Volver al inicio",
  },
  notFound: { title: "Página no encontrada", back: "Volver al inicio" },
};

type Dict = typeof es;

const en: Dict = {
  skip: "Skip to main content",
  brand: "¡Qué Cultura!",
  nav: { label: "Primary", home: "Home", cinema: "Cinema", pop: "Pop Culture", quiz: "Quiz" },
  lang: { label: "Language", switchTo: "Switch to Spanish", es: "ES", en: "EN" },
  hero: {
    overline: "Hispanic cinema & popular culture",
    title: "Stories in Spanish, told out loud.",
    lede: "An independent magazine about the films, music and faces shaping Hispanic culture: read slowly, looked at closely and shared in two languages.",
    ctaCinema: "Explore cinema",
    ctaQuiz: "Take the quiz",
    caption: "Engraved plate: agave and marigolds under a cloche.",
    credit: "",
    imgAlt:
      "Botanical engraving of an agave and marigold flowers under a glass cloche, with an antique film reel.",
  },
  intro: {
    overline: "About this magazine",
    body: "¡Qué Cultura! explores the films, music, art and figures shaping the Spanish-speaking world, through a curious and editorial lens.",
  },
  cinema: { overline: "Hispanic cinema", title: "The picture house", label: "Cinema figures" },
  pop: { overline: "Hispanic cinemaI", title: "Pop culture", label: "Pop culture figures" },
  marquee: {
    pause: "Pause",
    play: "Play",
    prev: "Previous",
    next: "Next",
    pauseLabel: "Pause carousel",
    playLabel: "Play carousel",
  },
  card: { opens: "Opens profile." },
  dialog: {
    close: "Close",
    prev: "Previous profile",
    next: "Next profile",
    of: (a: number, b: number) => `Profile ${a} of ${b}`,
    why: "Why they matter",
    essentials: "Essentials",
    country: "Country",
    discipline: "Discipline",
    years: "Active years",
    works: "Key works",
    pending: "Pending verification",
    quiz: "Take the quiz",
  },
  sample: "Sample",
  sampleNote: "Sample content — to be replaced with verified information.",
  story: {
    overline: "Featured story",
    read: "Read the story",
    minutes: (n: number) => `${n} min read`,
    close: "Close reading",
  },
  quiz: {
    overline: "The questionnaire",
    title: "Who is your celebrity twin?",
    body: "Twelve questions, no wrong answers. Find out which Hispanic cinema figure shares your affinities.",
    cta: "Start the quiz",
    script: "go on!",
  },
  footer: {
    about: "A university cultural project: Hispanic cinema and pop culture, in two languages.",
    terminology:
      "We use “Hispanic” to describe Spanish-speaking culture across all its geographies and diasporas.",
    explore: "Explore",
    credits: "Credits & licences",
    disclaimer: "Not affiliated with or endorsed by any person or brand featured.",
    creditsTitle: "Credits & licences",
    creditsImages: "Images",
    creditsFonts: "Typefaces",
    creditsFontsBody:
      "Fraunces, Source Serif 4, Instrument Sans and Caveat — Google Fonts, SIL Open Font License.",
    creditsIcons: "Icons: Lucide (ISC licence).",
  },
  collection: {
    cinemaIntro:
      "Eight figures, eight ways of looking at cinema. Discover the voices, ideas and creativity that have shaped the screen.",
    popIntro:
      "Music, screens, art and celebrations: a journey through some of the most fascinating expressions of Hispanic culture.",
    all: "All",
    music: "Music",
    screen: "Film and television",
    art: "Art and cultural icons",
    traditions: "Traditions and celebrations",
    browse: "Explore the collection",
    empty: "There are no entries in this category.",
    placeholder: "Image pending",
    verification: "Supplied research · awaiting verification",
    interpretation: "Personality interpretation",
    interpretationNote:
      "These descriptions are cultural interpretations for the quiz, not claims about private lives or psychological diagnoses.",
    source: "Reference document",
    keywords: "Keywords",
  },
  assessment: {
    instructions:
      "Answer 12 questions and discover which Hispanic celebrity is like you. Choose one answer per question.",
    note: "A playful cultural affinity, not a diagnosis or a claim about anyone’s private personality.",
    start: "Start",
    next: "Next question",
    back: "Previous question",
    finish: "See result",
    progress: (n: number, total: number) => `Question ${n} of ${total}`,
    result: "Your celebrity twin is…",
    also: "You also resemble",
    retry: "Try again",
    scoreNote:
      "Percentages represent shares of the 30 points distributed among the eight figures, not probabilities.",
    resultLabel: "Quiz result",
  },
  soon: {
    overline: "In preparation",
    body: "This section is under construction. Meanwhile, head back to the front page to explore the collections.",
    back: "Back to home",
  },
  notFound: { title: "Page not found", back: "Back to home" },
};

export const dictionaries: Record<Lang, Dict> = { es, en };
export type Dictionary = Dict;
