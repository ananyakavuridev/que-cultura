import { createFileRoute } from "@tanstack/react-router";
import { PersonalityQuiz } from "@/components/quiz/PersonalityQuiz";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — ¡Qué Cultura!" },
      {
        name: "description",
        content: "Descubre qué figura del cine y la cultura pop hispana llevas dentro.",
      },
      { property: "og:title", content: "Quiz — ¡Qué Cultura!" },
      {
        property: "og:description",
        content: "Un cuestionario de personalidad sobre cine y cultura pop hispana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PersonalityQuiz,
});
