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
        className="mt-8 inline-flex min-h-11 items-center rounded-md border-[1.5px] border-ink-900 px-5 font-sans text-[15px] font-semibold hover:shadow-print"
      >
        {t.soon.back}
      </Link>
    </section>
  );
}
