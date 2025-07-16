// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    define: {
      "process.env.NEXT_PUBLIC_SUPABASE_URL": JSON.stringify(
        process.env.NEXT_PUBLIC_SUPABASE_URL
      ),
      "process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY": JSON.stringify(
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ),
    },
  },
});
