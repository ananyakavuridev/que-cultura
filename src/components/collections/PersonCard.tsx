import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ProfilePortrait } from "./ProfilePortrait";
import type { Profile } from "@/data/profiles";
import { useI18n } from "@/i18n/LanguageContext";

export type CardTone = "light" | "dark" | "rosa";

const portraitBg: Record<CardTone, string> = {
  light: "bg-sage-200 text-forest-800",
  dark: "bg-forest-800 text-ochre-400",
  rosa: "bg-rosa-300 text-berry-700",
};

export const PersonCard = forwardRef<
  HTMLButtonElement,
  {
    profile: Profile;
    tone: CardTone;
    onOpen: (button: HTMLButtonElement) => void;
    tabbable?: boolean;
  }
>(function PersonCard({ profile, tone, onOpen, tabbable = true }, ref) {
  const { l, t } = useI18n();
  const name = l(profile.name);
  const disc = l(profile.discipline);
  const surface =
    tone === "dark"
      ? "bg-paper-50 text-ink-900 border-paper-50"
      : "bg-paper-50 text-ink-900 border-ink-900";
  return (
    <Button
      variant="ghost"
      ref={ref}
      type="button"
      tabIndex={tabbable ? 0 : -1}
      onClick={(e) => onOpen(e.currentTarget)}
      aria-label={`${name}, ${disc}. ${t.card.opens}`}
      className={`group block h-[430px] w-[220px] shrink-0 whitespace-normal hover:bg-paper-50 hover:text-ink-900 rounded-md border-[1.5px] ${surface} p-3 text-left focus-visible:shadow-soft md:h-[470px] md:w-[260px]`}
    >
      <ProfilePortrait profile={profile} className={portraitBg[tone]} />
      {profile.isSample && <p className="eyebrow mt-2 text-terra-700">{t.sample}</p>}
      <p className="eyebrow mt-3 line-clamp-2 text-ink-500">{disc}</p>
      <p className="h3-editorial mt-1 line-clamp-2">{name}</p>
      <p className="mt-1 line-clamp-2 text-sm text-ink-700">{l(profile.hook)}</p>
    </Button>
  );
});
