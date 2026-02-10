// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare",
  }),
});
