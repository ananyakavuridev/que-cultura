import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizQuestions, quizResults } from "@/data/quiz";
import { scoreQuiz } from "@/data/quiz-scoring";
import { cinemaProfiles } from "@/data/profiles";
import { ProfilePortrait } from "@/components/collections/ProfilePortrait";
import { useI18n } from "@/i18n/LanguageContext";

export function PersonalityQuiz() {
  const { t, l } = useI18n();
  const [stage, setStage] = useState<"intro" | "questions" | "result">("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null));
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (stage !== "intro") heading.current?.focus();
  }, [stage, index]);
  const start = () => {
    setAnswers(Array(10).fill(null));
    setIndex(0);
    setStage("questions");
  };
  const question = quizQuestions[index];
  const ranked = scoreQuiz(answers);
  const winner = ranked[0];
  const result = winner ? quizResults[winner.index] : undefined;
  const profile = result ? cinemaProfiles.find((p) => p.id === result.id) : undefined;
  return (
    <section className="page-shell py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-terra-700">{t.quiz.overline}</p>
        <h1 className="display-l mt-4">{t.quiz.title}</h1>
        {stage === "intro" && (
          <div className="mt-10 border-t border-ink-900 pt-8 animate-rise">
            <p className="lede max-w-xl">{t.assessment.instructions}</p>
            <p className="mt-5 max-w-xl text-sm text-ink-700">{t.assessment.note}</p>
            <Button onClick={start} className="mt-8 h-12 px-7">
              {t.assessment.start}
              <ArrowRight aria-hidden />
            </Button>
          </div>
        )}
        {stage === "questions" && question && (
          <div className="mt-10">
            <progress
              className="quiz-progress w-full"
              aria-label={t.assessment.progress(index + 1, 10)}
              value={answers.filter((a) => a !== null).length}
              max={10}
            />
            <p className="eyebrow mt-4 text-ink-500">{t.assessment.progress(index + 1, 10)}</p>
            <div key={question.id} className="quiz-step">
              <h2 ref={heading} tabIndex={-1} className="h2-editorial mt-5 outline-none">
                {l(question.text)}
              </h2>
              <fieldset className="mt-7 grid gap-3">
                <legend className="sr-only">{l(question.text)}</legend>
                {question.options.map((option, i) => (
                  <label
                    key={i}
                    className={`quiz-answer flex cursor-pointer items-center gap-4 rounded-md border-[1.5px] px-5 py-4 ${answers[index] === i ? "border-terra-700 bg-paper-50 shadow-soft" : "border-ink-900/30 hover:border-terra-700"}`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={i}
                      checked={answers[index] === i}
                      onChange={() =>
                        setAnswers((prev) => prev.map((a, j) => (j === index ? i : a)))
                      }
                      className="size-4 shrink-0 accent-primary"
                    />
                    <span>{l(option.text)}</span>
                  </label>
                ))}
              </fieldset>
            </div>
            <div className="mt-8 flex flex-wrap justify-between gap-3">
              <Button
                variant="secondary"
                disabled={index === 0}
                onClick={() => setIndex((i) => i - 1)}
                className="h-auto min-h-12 whitespace-normal"
              >
                <ArrowLeft aria-hidden />
                {t.assessment.back}
              </Button>
              <Button
                disabled={answers[index] === null}
                onClick={() => (index === 9 ? setStage("result") : setIndex((i) => i + 1))}
                className="h-auto min-h-12 whitespace-normal"
              >
                {index === 9 ? t.assessment.finish : t.assessment.next}
                <ArrowRight aria-hidden />
              </Button>
            </div>
          </div>
        )}
        {stage === "result" && result && winner && (
          <div
            className="mt-10 border-t border-ink-900 pt-8 animate-rise"
            aria-label={t.assessment.resultLabel}
          >
            <p className="eyebrow text-terra-700">{t.assessment.result}</p>
            <div className="mt-5 grid gap-7 sm:grid-cols-[180px_1fr]">
              {profile && (
                <ProfilePortrait profile={profile} className="bg-sage-200 text-forest-800" />
              )}
              <div>
                <h2 ref={heading} tabIndex={-1} className="h2-editorial outline-none">
                  {result.name}
                </h2>
                <p className="mt-2 font-sans text-sm">
                  {l(result.country)} · {winner.percentage}%
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm font-semibold text-terra-700">
                  {result.keywords.map((k, i) => (
                    <li key={i}>{l(k)}</li>
                  ))}
                </ul>
                <p className="mt-5">{l(result.description)}</p>
              </div>
            </div>
            <p className="mt-7 text-sm text-ink-500">{t.assessment.note}</p>
            <h3 className="eyebrow mt-9">{t.assessment.also}</h3>
            {ranked.slice(1, 3).map((match) => (
              <div key={match.index} className="mt-5">
                <p className="mb-2 flex justify-between gap-4 font-sans text-sm">
                  <span>{quizResults[match.index]?.name}</span>
                  <span>{match.percentage}%</span>
                </p>
                <progress
                  className="quiz-progress w-full"
                  max={100}
                  value={match.percentage}
                  aria-label={quizResults[match.index]?.name}
                />
              </div>
            ))}
            <p className="mt-5 text-xs text-ink-500">{t.assessment.scoreNote}</p>
            <Button onClick={start} className="mt-8 h-12">
              <RotateCcw aria-hidden />
              {t.assessment.retry}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
