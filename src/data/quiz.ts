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
    country: { es: "España", en: "Spain" },
    keywords: [
      { es: "apasionada", en: "passionate" },
      { es: "disciplinada", en: "disciplined" },
      { es: "cálida", en: "warm" },
      { es: "leal", en: "loyal" },
    ],
    description: {
      es: "Penélope es una persona apasionada y muy disciplinada. Trabaja mucho y no tiene miedo de hacer papeles difíciles. Es cálida y leal con la gente que quiere, y prefiere una vida privada.",
      en: "Penélope is passionate and very disciplined. She works hard and is not afraid of difficult roles. She is warm and loyal to the people she loves and prefers a private life.",
    },
  },
  {
    id: "javier-bardem",
    name: "Javier Bardem",
    country: { es: "España", en: "Spain" },
    keywords: [
      { es: "intenso", en: "intense" },
      { es: "reflexivo", en: "reflective" },
      { es: "artístico", en: "artistic" },
      { es: "humilde", en: "humble" },
    ],
    description: {
      es: "Javier es un hombre intenso que piensa mucho. Se toma su trabajo muy en serio, pero también sabe reírse de sí mismo. Quiere mucho a su familia y a su país.",
      en: "Javier is an intense man who thinks a lot. He takes his work very seriously, but also knows how to laugh at himself. He loves his family and his country.",
    },
  },
  {
    id: "salma-hayek",
    name: "Salma Hayek",
    country: { es: "México", en: "Mexico" },
    keywords: [
      { es: "ambiciosa", en: "ambitious" },
      { es: "decidida", en: "determined" },
      { es: "líder", en: "leader" },
      { es: "perseverante", en: "persevering" },
    ],
    description: {
      es: "Salma es una mujer decidida y muy ambiciosa. Cuando algo es difícil, no se rinde: crea sus propias oportunidades. Está orgullosa de ser mexicana y cuenta historias de mujeres fuertes.",
      en: "Salma is determined and very ambitious. When something is difficult, she does not give up: she creates her own opportunities. She is proud to be Mexican and tells stories about strong women.",
    },
  },
  {
    id: "gael-garcia-bernal",
    name: "Gael García Bernal",
    country: { es: "México", en: "Mexico" },
    keywords: [
      { es: "curioso", en: "curious" },
      { es: "aventurero", en: "adventurous" },
      { es: "rebelde", en: "rebellious" },
      { es: "buen amigo", en: "good friend" },
    ],
    description: {
      es: "Gael es un hombre curioso que busca aventuras. Le gustan los papeles diferentes y arriesgados. Trabaja con sus amigos y le importan los temas sociales.",
      en: "Gael is a curious man who seeks adventures. He likes different and risky roles. He works with his friends and cares about social issues.",
    },
  },
  {
    id: "pedro-pascal",
    name: "Pedro Pascal",
    country: { es: "Chile / Estados Unidos", en: "Chile / United States" },
    keywords: [
      { es: "cálido", en: "warm" },
      { es: "leal", en: "loyal" },
      { es: "paciente", en: "patient" },
      { es: "protector", en: "protective" },
    ],
    description: {
      es: "Pedro es una persona cálida y leal. Trabajó muchos años en papeles pequeños y nunca se rindió. En sus películas cuida a otros personajes, y en la vida real apoya a mucha gente.",
      en: "Pedro is warm and loyal. He worked for many years in small roles and never gave up. In his films he looks after other characters, and in real life he supports many people.",
    },
  },
  {
    id: "cantinflas",
    name: "Cantinflas",
    country: { es: "México", en: "Mexico" },
    keywords: [
      { es: "gracioso", en: "funny" },
      { es: "ingenioso", en: "witty" },
      { es: "generoso", en: "generous" },
      { es: "humilde", en: "humble" },
    ],
    description: {
      es: "Cantinflas era un hombre muy gracioso e inteligente. Hablaba mucho y de manera confusa, y así hacía reír a todos. Era humilde y ayudaba a niños y a personas pobres.",
      en: "Cantinflas was very funny and intelligent. He spoke a lot and in a confusing way, making everyone laugh. He was humble and helped children and people in poverty.",
    },
  },
  {
    id: "guillermo-del-toro",
    name: "Guillermo del Toro",
    country: { es: "México", en: "Mexico" },
    keywords: [
      { es: "imaginativo", en: "imaginative" },
      { es: "soñador", en: "dreamer" },
      { es: "curioso", en: "curious" },
      { es: "creativo", en: "creative" },
    ],
    description: {
      es: "Guillermo es un hombre con mucha imaginación. De niño le gustaban los monstruos y las historias de miedo. En sus películas, los monstruos también pueden ser tiernos y bonitos.",
      en: "Guillermo is a man with a great imagination. As a child he liked monsters and scary stories. In his films, monsters can also be tender and beautiful.",
    },
  },
  {
    id: "pedro-almodovar",
    name: "Pedro Almodóvar",
    country: { es: "España", en: "Spain" },
    keywords: [
      { es: "atrevido", en: "bold" },
      { es: "emocional", en: "emotional" },
      { es: "colorido", en: "colorful" },
      { es: "original", en: "original" },
    ],
    description: {
      es: "Pedro es un director atrevido y muy emocional. Le gustan los colores fuertes y las historias de mujeres fuertes. Es leal con sus amigos y quiere mucho a su madre.",
      en: "Pedro is a bold and very emotional director. He likes strong colors and stories about strong women. He is loyal to his friends and loves his mother.",
    },
  },
  {
    id: "sofia-vergara",
    name: "Sofía Vergara",
    country: { es: "Colombia", en: "Colombia" },
    keywords: [
      { es: "graciosa", en: "funny" },
      { es: "extrovertida", en: "outgoing" },
      { es: "alegre", en: "cheerful" },
      { es: "trabajadora", en: "hardworking" },
    ],
    description: {
      es: "Sofía es una mujer muy graciosa y alegre. Le gusta hablar, reír y estar con gente. También es una empresaria que trabaja mucho.",
      en: "Sofía is a very funny and cheerful woman. She likes talking, laughing, and being around people. She is also a hardworking businesswoman.",
    },
  },
  {
    id: "jennifer-lopez",
    name: "Jennifer Lopez",
    country: {
      es: "Estados Unidos / Puerto Rico",
      en: "United States / Puerto Rico",
    },
    keywords: [
      { es: "trabajadora", en: "hardworking" },
      { es: "elegante", en: "elegant" },
      { es: "líder", en: "leader" },
      { es: "disciplinada", en: "disciplined" },
    ],
    description: {
      es: "Jennifer es una mujer muy trabajadora y elegante. Canta, baila y actúa. Siempre quiere ser mejor y es líder en su trabajo.",
      en: "Jennifer is a very hardworking and elegant woman. She sings, dances, and acts. She always wants to improve and is a leader in her work.",
    },
  },
  {
    id: "shakira",
    name: "Shakira",
    country: { es: "Colombia", en: "Colombia" },
    keywords: [
      { es: "enérgica", en: "energetic" },
      { es: "bailarina", en: "dancer" },
      { es: "generosa", en: "generous" },
      { es: "creativa", en: "creative" },
    ],
    description: {
      es: "Shakira es una persona llena de energía. Baila y canta muy bien desde niña. También ayuda a los niños con su fundación.",
      en: "Shakira is full of energy. She has danced and sung very well since childhood. She also helps children through her foundation.",
    },
  },
  {
    id: "bad-bunny",
    name: "Bad Bunny",
    country: { es: "Puerto Rico", en: "Puerto Rico" },
    keywords: [
      { es: "original", en: "original" },
      { es: "atrevido", en: "bold" },
      { es: "orgulloso", en: "proud" },
      { es: "creativo", en: "creative" },
    ],
    description: {
      es: "Bad Bunny es un artista original y atrevido. Le gusta la moda y la música de su país. Está orgulloso de ser de Puerto Rico.",
      en: "Bad Bunny is an original and bold artist. He likes fashion and the music of his country. He is proud to be from Puerto Rico.",
    },
  },
  {
    id: "selena-gomez",
    name: "Selena Gomez",
    country: {
      es: "Estados Unidos (familia mexicana)",
      en: "United States (Mexican family)",
    },
    keywords: [
      { es: "dulce", en: "sweet" },
      { es: "creativa", en: "creative" },
      { es: "cercana", en: "approachable" },
      { es: "trabajadora", en: "hardworking" },
    ],
    description: {
      es: "Selena es una persona dulce y muy cercana. Es actriz, cantante y empresaria. Le gusta crear cosas nuevas y es muy simpática.",
      en: "Selena is a sweet and approachable person. She is an actress, singer, and businesswoman. She likes creating new things and is very friendly.",
    },
  },
  {
    id: "zoe-saldana",
    name: "Zoe Saldaña",
    country: {
      es: "Estados Unidos (familia dominicana y puertorriqueña)",
      en: "United States (Dominican and Puerto Rican family)",
    },
    keywords: [
      { es: "ambiciosa", en: "ambitious" },
      { es: "aventurera", en: "adventurous" },
      { es: "disciplinada", en: "disciplined" },
      { es: "valiente", en: "brave" },
    ],
    description: {
      es: "Zoe es una mujer ambiciosa y aventurera. Estudió ballet de niña y trabaja mucho. Le gustan los papeles de acción y del espacio.",
      en: "Zoe is an ambitious and adventurous woman. She studied ballet as a child and works hard. She likes action and space roles.",
    },
  },
  {
    id: "ursula-corbero",
    name: "Úrsula Corberó (Tokio)",
    country: { es: "España", en: "Spain" },
    keywords: [
      { es: "rebelde", en: "rebellious" },
      { es: "impulsiva", en: "impulsive" },
      { es: "valiente", en: "brave" },
      { es: "intensa", en: "intense" },
    ],
    description: {
      es: "Úrsula es una mujer valiente y un poco rebelde. Actúa rápido y dice lo que piensa. Su personaje Tokio es fuerte y muy intenso.",
      en: "Úrsula is a brave and somewhat rebellious woman. She acts quickly and says what she thinks. Her character Tokio is strong and very intense.",
    },
  },
  {
    id: "stephanie-beatriz",
    name: "Stephanie Beatriz",
    country: { es: "Argentina / Bolivia", en: "Argentina / Bolivia" },
    keywords: [
      { es: "seria", en: "serious" },
      { es: "irónica", en: "ironic" },
      { es: "leal", en: "loyal" },
      { es: "tierna", en: "tender-hearted" },
    ],
    description: {
      es: "Stephanie parece seria y dura por fuera. Pero por dentro es tierna y muy leal. Su humor es serio y muy divertido.",
      en: "Stephanie seems serious and tough on the outside. But inside, she is tender-hearted and very loyal. Her deadpan humor is very funny.",
    },
  },
  {
    id: "lionel-messi",
    name: "Lionel Messi",
    country: { es: "Argentina", en: "Argentina" },
    keywords: [
      { es: "tranquilo", en: "calm" },
      { es: "concentrado", en: "focused" },
      { es: "humilde", en: "humble" },
      { es: "buen compañero", en: "good teammate" },
    ],
    description: {
      es: "Lionel es un hombre tranquilo y humilde. Habla poco, pero trabaja mucho. Juega en equipo y ayuda a sus compañeros.",
      en: "Lionel is a calm and humble man. He does not talk much, but works hard. He plays as part of a team and helps his teammates.",
    },
  },
  {
    id: "karol-g",
    name: "Karol G",
    country: { es: "Colombia", en: "Colombia" },
    keywords: [
      { es: "segura", en: "confident" },
      { es: "dulce", en: "sweet" },
      { es: "soñadora", en: "dreamer" },
      { es: "trabajadora", en: "hardworking" },
    ],
    description: {
      es: "Karol G es una mujer segura y dulce. Trabajó muchos años para cumplir su sueño. Ahora da conciertos en muchos países.",
      en: "Karol G is a confident and sweet woman. She worked for many years to achieve her dream. Now she performs concerts in many countries.",
    },
  },
];

const option = (
  es: string,
  en: string,
  primary: number,
  secondary: number,
) => ({
  text: { es, en },
  primary,
  secondary,
});

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    text: { es: "¿Cómo eres?", en: "What are you like?" },
    options: [
      option("Soy apasionado/a y trabajo mucho.", "I am passionate and work hard.", 0, 7),
      option("Quiero ser líder de un grupo.", "I want to be a group leader.", 2, 9),
      option("Soy gracioso/a y humilde.", "I am funny and humble.", 5, 4),
      option("Soy ruidoso/a y me gustan las fiestas.", "I am loud and like parties.", 8, 10),
      option("Soy valiente y hago las cosas rápido.", "I am brave and act quickly.", 14, 3),
      option("Soy tranquilo/a y juego en equipo.", "I am calm and a team player.", 16, 15),
    ],
  },
  {
    id: "q2",
    text: { es: "Es sábado. ¿Qué quieres hacer?", en: "It is Saturday. What do you want to do?" },
    options: [
      option("Pintar o leer en casa.", "Paint or read at home.", 1, 6),
      option("Viajar a una ciudad nueva.", "Travel to a new city.", 3, 13),
      option("Ir a una fiesta con ropa de colores.", "Go to a party wearing colorful clothes.", 7, 11),
      option("Bailar con música muy alta.", "Dance to very loud music.", 10, 8),
      option("Hacer algo creativo con amigos.", "Do something creative with friends.", 12, 17),
      option("Ver una serie con mi mejor amigo/a.", "Watch a show with my best friend.", 15, 16),
    ],
  },
  {
    id: "q3",
    text: { es: "¿Qué comida te gusta?", en: "What food do you like?" },
    options: [
      option("Una comida caliente en familia.", "A warm meal with family.", 4, 15),
      option("Una comida rara, pero interesante.", "Food that is unusual but interesting.", 6, 1),
      option("Una comida elegante en un restaurante.", "An elegant meal at a restaurant.", 9, 2),
      option("Arroz con pollo y mucha música.", "Rice with chicken and lots of music.", 11, 10),
      option("Comida de muchos países.", "Food from many countries.", 13, 11),
      option("Dulces, chocolate y helado.", "Sweets, chocolate, and ice cream.", 17, 12),
    ],
  },
  {
    id: "q4",
    text: { es: "¿Cómo es tu casa?", en: "What is your home like?" },
    options: [
      option("Es tranquila y ordenada.", "It is peaceful and tidy.", 0, 11),
      option("Es pequeña, pero siempre hay amigos.", "It is small, but friends are always there.", 5, 12),
      option("Es grande, con mucha música.", "It is big, with lots of music.", 8, 10),
      option("Tiene un espacio para bailar.", "It has a space for dancing.", 10, 5),
      option("Es simple y cómoda.", "It is simple and comfortable.", 15, 16),
      option("Tiene plantas, luz y mis sueños.", "It has plants, light, and my dreams.", 17, 6),
    ],
  },
  {
    id: "q5",
    text: { es: "Tu amigo/a tiene un problema. ¿Qué haces?", en: "Your friend has a problem. What do you do?" },
    options: [
      option("Pienso mucho y doy un buen consejo.", "I think carefully and give good advice.", 1, 0),
      option("Hago un plan y trabajamos juntos.", "I make a plan and we work together.", 2, 9),
      option("Lo/la escucho con paciencia.", "I listen patiently.", 4, 16),
      option("Le doy un abrazo y le hablo con cariño.", "I give them a hug and speak kindly.", 12, 17),
      option("Actúo rápido y lo/la ayudo ahora.", "I act quickly and help them right away.", 14, 2),
      option("Estoy con él/ella y no hablo mucho.", "I stay with them without saying much.", 16, 15),
    ],
  },
  {
    id: "q6",
    text: { es: "¿Cuál es tu película favorita?", en: "What is your favorite movie?" },
    options: [
      option("Una película de aventuras.", "An adventure movie.", 3, 13),
      option("Una película de fantasía o de miedo.", "A fantasy or horror movie.", 6, 1),
      option("Un drama con mucha emoción.", "A drama full of emotion.", 7, 0),
      option("Una película de baile y música.", "A movie about dance and music.", 9, 10),
      option("Una película con mucho estilo.", "A movie with lots of style.", 11, 14),
      option("Una película del espacio.", "A movie about space.", 13, 3),
    ],
  },
  {
    id: "q7",
    text: { es: "¿Qué quieres en el futuro?", en: "What do you want in the future?" },
    options: [
      option("Tener una familia grande.", "To have a big family.", 0, 4),
      option("Cuidar a la gente que quiero.", "To take care of the people I love.", 4, 0),
      option("Tener mi propia empresa.", "To have my own company.", 9, 5),
      option("Hacer mi propio estilo, diferente.", "To create my own, different style.", 11, 7),
      option("Vivir sin miedo.", "To live without fear.", 14, 8),
      option("Trabajar mucho y ser feliz.", "To work hard and be happy.", 17, 12),
    ],
  },
  {
    id: "q8",
    text: { es: "¿Cómo eres con tus amigos?", en: "What are you like with your friends?" },
    options: [
      option("Soy serio/a, pero muy leal.", "I am serious but very loyal.", 1, 4),
      option("Soy generoso/a.", "I am generous.", 5, 14),
      option("Soy divertido/a y hablo mucho.", "I am fun and talk a lot.", 8, 5),
      option("Soy dulce y cercano/a.", "I am sweet and approachable.", 12, 17),
      option("Soy aventurero/a y siempre quiero hacer algo.", "I am adventurous and always want to do something.", 13, 3),
      option("Soy callado/a, pero siempre ayudo.", "I am quiet but always help.", 16, 15),
    ],
  },
  {
    id: "q9",
    text: { es: "¿Qué color te gusta?", en: "What color do you like?" },
    options: [
      option("Rojo, un color de líder.", "Red, a leader's color.", 2, 9),
      option("Verde, como la naturaleza.", "Green, like nature.", 3, 13),
      option("Negro o morado, colores misteriosos.", "Black or purple, mysterious colors.", 6, 14),
      option("Colores fuertes y brillantes.", "Strong and bright colors.", 7, 11),
      option("Amarillo, un color con energía.", "Yellow, an energetic color.", 10, 8),
      option("Gris o azul oscuro.", "Gray or dark blue.", 15, 6),
    ],
  },
  {
    id: "q10",
    text: { es: "¿Qué música te gusta?", en: "What music do you like?" },
    options: [
      option("Música romántica y emocional.", "Romantic and emotional music.", 0, 7),
      option("Música de muchos países.", "Music from many countries.", 3, 13),
      option("Música para una fiesta.", "Music for a party.", 8, 14),
      option("Reguetón con un estilo único.", "Reggaeton with a unique style.", 11, 7),
      option("Música suave y bonita.", "Soft and beautiful music.", 12, 17),
      option("Música tranquila para pensar.", "Calm music for thinking.", 16, 1),
    ],
  },
  {
    id: "q11",
    text: { es: "¿Qué haces en la escuela o en el trabajo?", en: "What do you do at school or work?" },
    options: [
      option("Pienso mucho antes de hablar.", "I think carefully before speaking.", 1, 6),
      option("Ayudo a mis compañeros.", "I help my classmates or coworkers.", 4, 16),
      option("Trabajo mucho y quiero ser el/la mejor.", "I work hard and want to be the best.", 9, 2),
      option("Tengo mucha energía todo el día.", "I have lots of energy all day.", 10, 8),
      option("Digo lo que pienso.", "I say what I think.", 14, 2),
      option("Hago bromas con cara seria.", "I make jokes with a straight face.", 15, 5),
    ],
  },
  {
    id: "q12",
    text: { es: "¿Cuál es tu gran sueño?", en: "What is your biggest dream?" },
    options: [
      option("Crear mi propio negocio.", "To create my own business.", 2, 9),
      option("Hacer reír y ayudar a la gente.", "To make people laugh and help them.", 5, 4),
      option("Crear mundos de fantasía.", "To create fantasy worlds.", 6, 1),
      option("Hacer arte con colores y emociones.", "To make art with colors and emotions.", 7, 0),
      option("Explorar el espacio y el mundo.", "To explore space and the world.", 13, 3),
      option("Dar conciertos y cumplir mis sueños.", "To perform concerts and fulfill my dreams.", 17, 12),
    ],
  },
];