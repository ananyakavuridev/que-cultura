
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="page-shell flex min-h-14 flex-wrap items-center justify-between gap-4 py-3 md:min-h-[72px]">
      <Link
        to="/"
        className="font-display text-xl font-bold md:text-2xl"
      >
        {t.brand}
      </Link>

      <nav
        aria-label={t.nav.label}
        className="order-3 flex w-full flex-wrap justify-center gap-x-6 gap-y-2 border-t border-ink-900/20 pt-3 font-sans text-sm font-semibold md:order-none md:w-auto md:border-0 md:pt-0"
      >
        <Link
          to="/"
          activeProps={{
            className: "text-terra-700 underline underline-offset-4",
          }}
          activeOptions={{ exact: true }}
        >
          {t.nav.home}
        </Link>

        <Link
          to="/cinema"
          activeProps={{
            className: "text-terra-700 underline underline-offset-4",
          }}
        >
          {t.nav.cinema}
        </Link>

        <Link
          to="/pop-culture"
          activeProps={{
            className: "text-terra-700 underline underline-offset-4",
          }}
        >
          {t.nav.pop}
        </Link>

        <Link
          to="/quiz"
          activeProps={{
            className: "text-terra-700 underline underline-offset-4",
          }}
        >
          {t.nav.quiz}
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <LanguageToggle />
      </div>
    </header>
  );
}
