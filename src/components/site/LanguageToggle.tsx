import { useI18n } from "@/i18n/LanguageContext";
import { LANGS } from "@/i18n/dictionaries";

export function LanguageToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang, t } = useI18n();
  const border = tone === "dark" ? "border-paper-100" : "border-ink-900";
  return (
    <div
      role="group"
      aria-label={t.lang.label}
      className={`inline-flex rounded-full border-[1.5px] ${border} p-0.5 font-sans text-xs font-semibold`}
    >
      {LANGS.map((l) => {
        const on = l === lang;
        const onCls = tone === "dark" ? "bg-paper-100 text-forest-900" : "bg-ink-900 text-paper-50";
        return (
          <button
            key={l}
            type="button"
            lang={l}
            aria-pressed={on}
            onClick={() => setLang(l)}
            className={`min-h-[36px] min-w-[44px] rounded-full px-3 tracking-[0.1em] transition-colors ${on ? onCls : "hover:opacity-70"}`}
          >
            {t.lang[l]}
          </button>
        );
      })}
    </div>
  );
}
