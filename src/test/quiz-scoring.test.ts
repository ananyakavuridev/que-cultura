
import { describe, expect, it } from "vitest";
import { quizQuestions, quizResults } from "@/data/quiz";
import { scoreQuiz } from "@/data/quiz-scoring";

describe("Updated celebrity quiz rules", () => {
  it("contains 12 questions, 18 results, and six options per question", () => {
    expect(quizQuestions).toHaveLength(12);
    expect(quizResults).toHaveLength(18);

    quizQuestions.forEach((question) => {
      expect(question.options).toHaveLength(6);

      question.options.forEach((option) => {
        expect(option.primary).toBeGreaterThanOrEqual(0);
        expect(option.primary).toBeLessThan(quizResults.length);
        expect(option.secondary).toBeGreaterThanOrEqual(0);
        expect(option.secondary).toBeLessThan(quizResults.length);
      });
    });
  });

  it("awards three points to primary and one to secondary", () => {
    quizQuestions.forEach((question, questionIndex) => {
      question.options.forEach((option, optionIndex) => {
        const answers: Array<number | null> = Array(
          quizQuestions.length,
        ).fill(null);

        answers[questionIndex] = optionIndex;

        const ranked = scoreQuiz(answers);
        const primary = ranked.find(
          (result) => result.index === option.primary,
        );
        const secondary = ranked.find(
          (result) => result.index === option.secondary,
        );

        expect(primary?.score).toBe(3);
        expect(secondary?.score).toBe(1);
        expect(ranked.reduce((sum, result) => sum + result.score, 0)).toBe(4);
      });
    });
  });

  it("scores all 12 answers and calculates percentages from total points", () => {
    const answers = Array(quizQuestions.length).fill(0);
    const ranked = scoreQuiz(answers);

    expect(ranked.reduce((sum, result) => sum + result.score, 0)).toBe(48);

    expect(
      ranked.every(
        (result) =>
          result.percentage ===
          Math.round(
            (result.score /
              ranked.reduce((sum, item) => sum + item.score, 0)) *
              100,
          ),
      ),
    ).toBe(true);
  });

  it("returns every result and resolves ties in source order", () => {
    const ranked = scoreQuiz([0, 1]);

    expect(ranked).toHaveLength(quizResults.length);

    expect(ranked.map((result) => result.score)).toEqual(
      [...ranked.map((result) => result.score)].sort((a, b) => b - a),
    );

    for (let i = 1; i < ranked.length; i++) {
      if (ranked[i - 1].score === ranked[i].score) {
        expect(ranked[i - 1].index).toBeLessThan(ranked[i].index);
      }
    }

    expect(scoreQuiz([]).map((result) => result.index).sort((a, b) => a - b))
      .toEqual(quizResults.map((_, index) => index));
  });

  it("returns zero percentages for unanswered questions and recomputes on retry", () => {
    const emptyAnswers = Array<number | null>(
      quizQuestions.length,
    ).fill(null);

    expect(
      scoreQuiz(emptyAnswers).every(
        (result) => result.score === 0 && result.percentage === 0,
      ),
    ).toBe(true);

    const firstOption = quizQuestions[0].options[0];
    const firstAttempt = scoreQuiz([0]);
    const retry = scoreQuiz([1]);

    expect(
      firstAttempt.find((result) => result.index === firstOption.primary)?.score,
    ).toBe(3);

    expect(
      firstAttempt.find((result) => result.index === firstOption.secondary)?.score,
    ).toBe(1);

    expect(retry).toEqual(scoreQuiz([1]));
  });
});
