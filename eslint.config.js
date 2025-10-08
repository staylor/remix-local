import config from '@wonderboymusic/eslint-config';
import { defineConfig } from 'eslint/config';

import ignores from './lint/ignores.js';

export default defineConfig([
  {
    ignores,
  },
  {
    extends: [config],
  },
]);
