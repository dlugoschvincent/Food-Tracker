import { sveltekit } from '@sveltejs/kit/vite';
import { extractorSvelte } from '@unocss/core';
import UnocssIcons from '@unocss/preset-icons';
import { presetUno } from 'unocss';
import Unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    Unocss({
      extractors: [extractorSvelte],
      presets: [
        UnocssIcons({
          extraProperties: {
            display: 'inline-block'
          }
        }),
        presetUno()
      ],
      shortcuts: [{ 'disable-anchor': '!bg-gray-400 !pointer-events-none !touch-none' }]
    }),
    sveltekit()
  ]
};

export default config;
