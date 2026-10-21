import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageContext";
export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="bg-forest-800 text-paper-100 dock-pad">
      <div className="page-shell flex flex-col justify-between gap-6 pt-10 md:flex-row md:items-center">
        <div>
          <p className="font-display text-3xl font-bold">{t.brand}</p>
          <p className="mt-2 max-w-md text-sm">{t.footer.about}</p>
        </div>
        <nav
          aria-label={t.footer.explore}
          className="flex flex-wrap gap-x-5 gap-y-3 font-sans text-sm"
        >
          <Link to="/" className="hover:underline">
            {t.nav.home}
          </Link>
          <Link to="/cinema" className="hover:underline">
            {t.nav.cinema}
          </Link>
          <Link to="/pop-culture" className="hover:underline">
            {t.nav.pop}
          </Link>
          <Link to="/quiz" className="hover:underline">
            {t.nav.quiz}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
