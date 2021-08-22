import { ScullyConfig } from '@scullyio/scully';
const {
  getFlashPreventionPlugin,
} = require('@scullyio/scully-plugin-flash-prevention');

const defaultPostRenderers = [
  getFlashPreventionPlugin({ appRootSelector: 'desn-root' }),
];

export const config: ScullyConfig = {
  projectName: 'portfolio',
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {},
};
