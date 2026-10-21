## Architecture rules
- UI strings live in `src/i18n/dictionaries.ts` (Spanish default, English mirror) and are read via `useI18n()`; data modules use `L10n` objects.
- Editorial content (profiles, stories, asset metadata) lives in `src/data/*` with stable ids and an `isSample` flag where applicable.
- Design tokens and typography utilities live in `src/styles.css`; avoid Tailwind built-in utility names for custom utilities.
- Marquee motion uses one requestAnimationFrame lifecycle with mutable pause flags and measured loop tracks.
- Quiz scoring is a pure derivation of answer indices in `src/data/quiz-scoring.ts`; source-order ties are deterministic.
- Portrait replacements are centralized in `src/data/profile-images.ts`; cards and dialogs share the missing-image fallback.
