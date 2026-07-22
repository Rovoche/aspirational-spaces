// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
// - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//   nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//   React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Registered explicitly here (rather than letting `wrangler deploy` auto-inject it) because
  // Wrangler's TanStack Start setup wizard statically parses vite.config.ts for a literal
  // `plugins: [...]` array to patch — since @lovable.dev/vite-tanstack-config builds that array
  // internally, Wrangler can't find one to modify and the auto-setup fails. Declaring the plugin
  // through this documented `vite` passthrough avoids relying on that codemod entirely.
  vite: {
    plugins: [cloudflare()],
  },
});
