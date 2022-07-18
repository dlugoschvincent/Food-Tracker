import { sveltekit } from "@sveltejs/kit/vite";
import { extractorSvelte } from "@unocss/core";
import UnocssIcons from "@unocss/preset-icons";
import { presetUno } from "unocss";
import Unocss from "unocss/vite";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirective from "@unocss/transformer-directives"
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    Unocss({
      extractors: [extractorSvelte],
      presets: [UnocssIcons(), presetUno()],
      shortcuts: [
        {
          "disable-anchor": "opacity-30 pointer-events-none touch-none",
          "input-text":
            "rounded-md border-2 border-orange-200 focus:border-orange-300 p-2 dark:border-orange-400 dark:focus:border-orange-500 dark:bg-slate-700 focus:outline-none",
        },
      ],
      transformers: [transformerDirective(), transformerVariantGroup()],
    }),
  ],
};

export default config;
