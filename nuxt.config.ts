import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "shadcn-nuxt", "@pinia/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  eslint: {
    config: { standalone: false },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    prefix: "",
  },
});
