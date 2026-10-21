import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageContext";

export function ComingSoon({ title }: { title: string }) {
  const { t } = useI18n();
  return (
    <section className="page-shell section-y">
      <div className="rule-double w-24" />
      <p className="eyebrow mt-5 text-terra-700">{t.soon.overline}</p>
      <h1 className="display-xl mt-3">{title}</h1>
      <p className="lede mt-6 max-w-xl text-ink-700">{t.soon.body}</p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md border-[1.5px] border-ink-900 bg-paper-100 px-6 font-sans text-[15px] font-semibold text-ink-900 shadow-[4px_4px_0_var(--ink-900)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink-900)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
      >
        {t.soon.back}
      </Link>
    </section>
  );
}
