import { describe, expect, it } from "vitest";
import { quizQuestions, quizResults } from "@/data/quiz";
import { scoreQuiz } from "@/data/quiz-scoring";

describe("Original celebrity quiz rules", () => {
  it("retains ten questions and eight original result names", () => {
    expect(quizQuestions).toHaveLength(10);
    expect(quizResults.map((r) => r.name)).toEqual([
      "Penélope Cruz",
      "Javier Bardem",
      "Salma Hayek",
      "Gael García Bernal",
      "Pedro Pascal",
      "Cantinflas",
      "Guillermo del Toro",
      "Pedro Almodóvar",
    ]);
  });
  it("retains every original primary and secondary mapping", () => {
    expect(quizQuestions.map((q) => q.options.map((o) => [o.primary, o.secondary]))).toEqual([
      [
        [0, 2],
        [1, 6],
        [3, 7],
        [4, 5],
      ],
      [
        [0, 4],
        [1, 6],
        [3, 2],
        [7, 5],
      ],
      [
        [3, 5],
        [0, 1],
        [7, 6],
        [2, 4],
      ],
      [
        [7, 6],
        [0, 1],
        [4, 5],
        [3, 2],
      ],
      [
        [4, 1],
        [5, 3],
        [2, 0],
        [6, 7],
      ],
      [
        [7, 0],
        [5, 4],
        [3, 2],
        [6, 1],
      ],
      [
        [2, 3],
        [4, 0],
        [6, 7],
        [5, 1],
      ],
      [
        [0, 7],
        [1, 4],
        [3, 6],
        [5, 2],
      ],
      [
        [2, 0],
        [4, 3],
        [1, 6],
        [5, 7],
      ],
      [
        [7, 2],
        [1, 6],
        [3, 4],
        [5, 0],
      ],
    ]);
  });
  it("awards two points to primary and one to secondary for every answer", () => {
    quizQuestions.forEach((q, i) =>
      q.options.forEach((o, j) => {
        const answers = Array<number | null>(10).fill(null);
        answers[i] = j;
        const ranked = scoreQuiz(answers);
        expect(ranked.find((r) => r.index === o.primary)?.score).toBe(2);
        expect(ranked.find((r) => r.index === o.secondary)?.score).toBe(1);
        expect(ranked.reduce((a, r) => a + r.score, 0)).toBe(3);
      }),
    );
  });
  it("calculates percentages from thirty points and resolves ties in source order", () => {
    const ranked = scoreQuiz(Array(10).fill(0));
    expect(ranked.reduce((a, r) => a + r.score, 0)).toBe(30);
    expect(ranked.slice(0, 3)).toEqual(
      [
        { index: 0, score: 8, percentage: 27 },
        { index: 7, score: 7, percentage: 23 },
        { index: 2, score: 6, percentage: 20 },
      ].sort((a, b) => b.score - a.score || a.index - b.index),
    );
    expect(
      scoreQuiz([0, 1])
        .filter((r) => r.score === 2)
        .map((r) => r.index),
    ).toEqual([0, 1]);
    expect(scoreQuiz([]).map((r) => r.index)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(ranked.every((r) => r.percentage === Math.round((r.score / 30) * 100))).toBe(true);
  });
  it("returns finite zero percentages on retry and recomputes changed answers", () => {
    expect(scoreQuiz(Array(10).fill(null)).every((r) => r.score === 0 && r.percentage === 0)).toBe(
      true,
    );
    const changed = scoreQuiz([1]);
    expect(changed.find((r) => r.index === 0)?.score).toBe(0);
    expect(changed.find((r) => r.index === 1)?.score).toBe(2);
  });
});
