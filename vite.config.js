import { sveltekit } from '@sveltejs/kit/vite';
import UnocssIcons from '@unocss/preset-icons';
import { presetUno } from 'unocss';
import Unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    Unocss({
      presets: [UnocssIcons(), presetUno()],
      shortcuts: [
        {
          'disable-anchor': '!bg-gray-400 !pointer-events-none !touch-none',
          'input-text':
            'rounded-md border-2 border-orange-200 focus:border-orange-300 p-2 dark:border-orange-400 dark:focus:border-orange-500 dark:bg-slate-700 focus:outline-none'
        }
      ]
    })
  ]
};

export default config;
