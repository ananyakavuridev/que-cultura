import type { L10n } from "@/i18n/dictionaries";
export type QuizResult = {
  id: string;
  name: string;
  country: L10n;
  keywords: L10n[];
  description: L10n;
};
export type QuizQuestion = {
  id: string;
  text: L10n;
  options: { text: L10n; primary: number; secondary: number }[];
};
export const quizResults: QuizResult[] = [
  {
    id: "penelope-cruz",
    name: "Penélope Cruz",
    country: {
      es: "España",
      en: "Spain",
    },
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
        es: "leal",
        en: "loyal",
      },
    ],
    description: {
      es: "Penélope es una persona apasionada y muy disciplinada. Trabaja mucho y no tiene miedo de hacer papeles difíciles. Es cálida y leal con la gente que quiere, y prefiere una vida privada.",
      en: "Penélope is passionate and very disciplined. She works hard and is not afraid of difficult roles. She is warm and loyal to the people she loves and prefers a private life.",
    },
  },
  {
    id: "javier-bardem",
    name: "Javier Bardem",
    country: {
      es: "España",
      en: "Spain",
    },
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
        es: "artístico",
        en: "artistic",
      },
      {
        es: "humilde",
        en: "humble",
      },
    ],
    description: {
      es: "Javier es un hombre intenso que piensa mucho. Se toma su trabajo muy en serio, pero también sabe reírse de sí mismo. Quiere mucho a su familia y a su país.",
      en: "Javier is an intense man who thinks a lot. He takes his work very seriously, but also knows how to laugh at himself. He loves his family and his country.",
    },
  },
  {
    id: "salma-hayek",
    name: "Salma Hayek",
    country: {
      es: "México",
      en: "Mexico",
    },
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
        es: "líder",
        en: "leader",
      },
      {
        es: "perseverante",
        en: "persevering",
      },
    ],
    description: {
      es: "Salma es una mujer decidida y muy ambiciosa. Cuando algo es difícil, no se rinde: crea sus propias oportunidades. Está orgullosa de ser mexicana y cuenta historias de mujeres fuertes.",
      en: "Salma is determined and very ambitious. When something is difficult, she does not give up: she creates her own opportunities. She is proud to be Mexican and tells stories about strong women.",
    },
  },
  {
    id: "gael-garcia-bernal",
    name: "Gael García Bernal",
    country: {
      es: "México",
      en: "Mexico",
    },
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
        es: "buen amigo",
        en: "good friend",
      },
    ],
    description: {
      es: "Gael es un hombre curioso que busca aventuras. Le gustan los papeles diferentes y arriesgados. Trabaja con sus amigos y le importan los temas sociales.",
      en: "Gael is a curious man who seeks adventures. He likes different and risky roles. He works with his friends and cares about social issues.",
    },
  },
  {
    id: "pedro-pascal",
    name: "Pedro Pascal",
    country: {
      es: "Chile / Estados Unidos",
      en: "Chile / United States",
    },
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
        es: "protector",
        en: "protective",
      },
    ],
    description: {
      es: "Pedro es una persona cálida y leal. Trabajó muchos años en papeles pequeños y nunca se rindió. En sus películas cuida a otros personajes, y en la vida real apoya a mucha gente.",
      en: "Pedro is warm and loyal. He worked for many years in small roles and never gave up. In his films he looks after other characters, and in real life he supports many people.",
    },
  },
  {
    id: "cantinflas",
    name: "Cantinflas",
    country: {
      es: "México",
      en: "Mexico",
    },
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
    ],
    description: {
      es: "Cantinflas era un hombre muy gracioso e inteligente. Hablaba mucho y de manera confusa, y así hacía reír a todos. Era humilde y ayudaba a niños y a personas pobres.",
      en: "Cantinflas was very funny and intelligent. He spoke a lot and in a confusing way, making everyone laugh. He was humble and helped children and poor people.",
    },
  },
  {
    id: "guillermo-del-toro",
    name: "Guillermo del Toro",
    country: {
      es: "México",
      en: "Mexico",
    },
    keywords: [
      {
        es: "imaginativo",
        en: "imaginative",
      },
      {
        es: "soñador",
        en: "dreamer",
      },
      {
        es: "curioso",
        en: "curious",
      },
      {
        es: "creativo",
        en: "creative",
      },
    ],
    description: {
      es: "Guillermo es un hombre con mucha imaginación. De niño le gustaban los monstruos y las historias de miedo. En sus películas, los monstruos también pueden ser tiernos y bonitos.",
      en: "Guillermo is a man with a great imagination. As a child he liked monsters and scary stories. In his films, monsters can also be tender and beautiful.",
    },
  },
  {
    id: "pedro-almodovar",
    name: "Pedro Almodóvar",
    country: {
      es: "España",
      en: "Spain",
    },
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
        es: "colorido",
        en: "colorful",
      },
      {
        es: "original",
        en: "original",
      },
    ],
    description: {
      es: "Pedro es un director atrevido y muy emocional. Le gustan los colores fuertes y las historias de mujeres fuertes. Es leal con sus amigos y quiere mucho a su madre.",
      en: "Pedro is a bold and very emotional director. He likes strong colors and stories about strong women. He is loyal to his friends and loves his mother.",
    },
  },
];
export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    text: {
      es: "¿Cómo eres?",
      en: "What are you like?",
    },
    options: [
      {
        text: {
          es: "Soy apasionado/a y trabajo mucho.",
          en: "I am passionate and work hard.",
        },
        primary: 0,
        secondary: 2,
      },
      {
        text: {
          es: "Soy serio/a y pienso mucho.",
          en: "I am serious and think a lot.",
        },
        primary: 1,
        secondary: 6,
      },
      {
        text: {
          es: "Soy curioso/a y me gustan las aventuras.",
          en: "I am curious and like adventures.",
        },
        primary: 3,
        secondary: 7,
      },
      {
        text: {
          es: "Soy cálido/a y gracioso/a.",
          en: "I am warm and funny.",
        },
        primary: 4,
        secondary: 5,
      },
    ],
  },
  {
    id: "q2",
    text: {
      es: "Es sábado. ¿Qué quieres hacer?",
      en: "It is Saturday. What do you want to do?",
    },
    options: [
      {
        text: {
          es: "Ir al cine con mi familia.",
          en: "Go to the cinema with my family.",
        },
        primary: 0,
        secondary: 4,
      },
      {
        text: {
          es: "Pintar o leer en casa.",
          en: "Paint or read at home.",
        },
        primary: 1,
        secondary: 6,
      },
      {
        text: {
          es: "Viajar a una ciudad nueva.",
          en: "Travel to a new city.",
        },
        primary: 3,
        secondary: 2,
      },
      {
        text: {
          es: "Ir a una fiesta con música y colores.",
          en: "Go to a party with music and colors.",
        },
        primary: 7,
        secondary: 5,
      },
    ],
  },
  {
    id: "q3",
    text: {
      es: "¿Qué comida te gusta?",
      en: "What food do you like?",
    },
    options: [
      {
        text: {
          es: "Tacos con mis amigos.",
          en: "Tacos with my friends.",
        },
        primary: 3,
        secondary: 5,
      },
      {
        text: {
          es: "Paella con mi familia.",
          en: "Paella with my family.",
        },
        primary: 0,
        secondary: 1,
      },
      {
        text: {
          es: "Churros con chocolate.",
          en: "Churros with chocolate.",
        },
        primary: 7,
        secondary: 6,
      },
      {
        text: {
          es: "Tamales para una fiesta.",
          en: "Tamales for a party.",
        },
        primary: 2,
        secondary: 4,
      },
    ],
  },
  {
    id: "q4",
    text: {
      es: "¿Cómo es tu casa?",
      en: "What is your home like?",
    },
    options: [
      {
        text: {
          es: "Es colorida y muy original.",
          en: "It is colorful and very original.",
        },
        primary: 7,
        secondary: 6,
      },
      {
        text: {
          es: "Es tranquila y ordenada.",
          en: "It is calm and tidy.",
        },
        primary: 0,
        secondary: 1,
      },
      {
        text: {
          es: "Es grande, con muchos amigos.",
          en: "It is big, with lots of friends.",
        },
        primary: 4,
        secondary: 5,
      },
      {
        text: {
          es: "Tiene libros y mapas.",
          en: "It has books and maps.",
        },
        primary: 3,
        secondary: 2,
      },
    ],
  },
  {
    id: "q5",
    text: {
      es: "Tu amigo tiene un problema. ¿Qué haces?",
      en: "Your friend has a problem. What do you do?",
    },
    options: [
      {
        text: {
          es: "Lo escucho con paciencia.",
          en: "Listen patiently.",
        },
        primary: 4,
        secondary: 1,
      },
      {
        text: {
          es: "Lo hago reír.",
          en: "Make them laugh.",
        },
        primary: 5,
        secondary: 3,
      },
      {
        text: {
          es: "Hago un plan y trabajamos juntos.",
          en: "Make a plan and work together.",
        },
        primary: 2,
        secondary: 0,
      },
      {
        text: {
          es: "Le cuento una historia fantástica.",
          en: "Tell them a fantastic story.",
        },
        primary: 6,
        secondary: 7,
      },
    ],
  },
  {
    id: "q6",
    text: {
      es: "¿Cuál es tu película favorita?",
      en: "What is your favorite film?",
    },
    options: [
      {
        text: {
          es: "Un drama con mucha emoción.",
          en: "A drama with lots of emotion.",
        },
        primary: 7,
        secondary: 0,
      },
      {
        text: {
          es: "Una comedia.",
          en: "A comedy.",
        },
        primary: 5,
        secondary: 4,
      },
      {
        text: {
          es: "Una película de aventuras.",
          en: "An adventure film.",
        },
        primary: 3,
        secondary: 2,
      },
      {
        text: {
          es: "Una película de fantasía o de miedo.",
          en: "A fantasy or horror film.",
        },
        primary: 6,
        secondary: 1,
      },
    ],
  },
  {
    id: "q7",
    text: {
      es: "¿Qué quieres en el futuro?",
      en: "What do you want in the future?",
    },
    options: [
      {
        text: {
          es: "Tener mi propia empresa.",
          en: "To have my own company.",
        },
        primary: 2,
        secondary: 3,
      },
      {
        text: {
          es: "Tener una familia grande.",
          en: "To have a big family.",
        },
        primary: 4,
        secondary: 0,
      },
      {
        text: {
          es: "Crear arte o películas.",
          en: "To create art or films.",
        },
        primary: 6,
        secondary: 7,
      },
      {
        text: {
          es: "Ayudar a mucha gente.",
          en: "To help lots of people.",
        },
        primary: 5,
        secondary: 1,
      },
    ],
  },
  {
    id: "q8",
    text: {
      es: "¿Qué música te gusta?",
      en: "What music do you like?",
    },
    options: [
      {
        text: {
          es: "Música romántica y emocional.",
          en: "Romantic and emotional music.",
        },
        primary: 0,
        secondary: 7,
      },
      {
        text: {
          es: "Música tranquila y suave.",
          en: "Calm and gentle music.",
        },
        primary: 1,
        secondary: 4,
      },
      {
        text: {
          es: "Música de muchos países.",
          en: "Music from many countries.",
        },
        primary: 3,
        secondary: 6,
      },
      {
        text: {
          es: "Música alegre para bailar.",
          en: "Cheerful music to dance to.",
        },
        primary: 5,
        secondary: 2,
      },
    ],
  },
  {
    id: "q9",
    text: {
      es: "¿Cómo es tu día perfecto?",
      en: "What is your perfect day like?",
    },
    options: [
      {
        text: {
          es: "Trabajar en mi proyecto favorito.",
          en: "Working on my favorite project.",
        },
        primary: 2,
        secondary: 0,
      },
      {
        text: {
          es: "Estar con mis amigos.",
          en: "Being with my friends.",
        },
        primary: 4,
        secondary: 3,
      },
      {
        text: {
          es: "Caminar y pensar solo/a.",
          en: "Walking and thinking alone.",
        },
        primary: 1,
        secondary: 6,
      },
      {
        text: {
          es: "Reír mucho con todos.",
          en: "Laughing a lot with everyone.",
        },
        primary: 5,
        secondary: 7,
      },
    ],
  },
  {
    id: "q10",
    text: {
      es: "¿Qué color te gusta?",
      en: "What color do you like?",
    },
    options: [
      {
        text: {
          es: "Rojo, un color fuerte.",
          en: "Red, a strong color.",
        },
        primary: 7,
        secondary: 2,
      },
      {
        text: {
          es: "Azul o negro.",
          en: "Blue or black.",
        },
        primary: 1,
        secondary: 6,
      },
      {
        text: {
          es: "Verde, como la naturaleza.",
          en: "Green, like nature.",
        },
        primary: 3,
        secondary: 4,
      },
      {
        text: {
          es: "Amarillo, un color alegre.",
          en: "Yellow, a cheerful color.",
        },
        primary: 5,
        secondary: 0,
      },
    ],
  },
];
