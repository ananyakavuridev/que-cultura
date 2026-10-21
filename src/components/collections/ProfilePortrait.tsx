import { useState } from "react";
import type { Profile } from "@/data/profiles";
import { profileImages } from "@/data/profile-images";
import { useI18n } from "@/i18n/LanguageContext";

export function ProfilePortrait({
  profile,
  className = "",
}: {
  profile: Profile;
  className?: string;
}) {
  const { t, l } = useI18n();
  const src = profile.image?.src ?? profileImages[profile.imageKey ?? profile.id];
  const [failedSrc, setFailedSrc] = useState<string>();
  return (
    <div
      className={`arch relative grid aspect-[4/5] place-items-center overflow-hidden border-[1.5px] border-ink-900 ${className}`}
    >
      {src && failedSrc !== src ? (
        <img
          src={src}
          alt={profile.image ? l(profile.image.alt) : l(profile.name)}
          className="size-full object-cover"
          loading="lazy"
          onError={() => setFailedSrc(src)}
        />
      ) : (
        <>
          <span aria-hidden className="font-display text-7xl font-bold italic opacity-80">
            {profile.monogram}
          </span>
          <span className="absolute bottom-4 px-2 text-center font-sans text-xs">
            {t.collection.placeholder}
          </span>
        </>
      )}
    </div>
  );
}
