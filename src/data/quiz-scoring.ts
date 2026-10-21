import { quizQuestions, quizResults } from "./quiz";

/** Scores are derived from answers, so back/retry never accumulates old points. */
export function scoreQuiz(answers: readonly (number | null)[]) {
  const scores = quizResults.map(() => 0);
  answers.forEach((answer, i) => {
    const option = answer === null ? undefined : quizQuestions[i]?.options[answer];
    if (!option) return;
    scores[option.primary] = (scores[option.primary] ?? 0) + 2;
    scores[option.secondary] = (scores[option.secondary] ?? 0) + 1;
  });
  const total = scores.reduce((a, b) => a + b, 0);
  return scores
    .map((score, index) => ({
      index,
      score,
      percentage: total === 0 ? 0 : Math.round((score / total) * 100),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
}
