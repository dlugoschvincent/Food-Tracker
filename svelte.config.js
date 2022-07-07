import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    methodOverride: {
      allowed: ['PUT', 'PATCH', 'DELETE']
    },
    adapter: adapter()
  }
};

export default config;
