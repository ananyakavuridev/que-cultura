// The project build preset configures TanStack Start, React, Tailwind and path aliases.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    // Pre-bundle up front so a mid-session re-optimisation can't load two React copies.
    optimizeDeps: { include: ["@radix-ui/react-dialog", "lucide-react"] },
  },
});
