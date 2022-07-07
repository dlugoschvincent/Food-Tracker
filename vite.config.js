import { sveltekit } from '@sveltejs/kit/vite';
import UnocssIcons from '@unocss/preset-icons';
import { presetUno } from 'unocss';
import Unocss from 'unocss/vite';
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    Unocss({
      presets: [
        UnocssIcons({
          extraProperties: {
            display: 'inline-block'
          }
        }),
        presetUno()
      ],
      shortcuts: [{ 'disable-anchor': '!bg-gray-400 !pointer-events-none !touch-none' }]
    })
  ]
};

export default config;
