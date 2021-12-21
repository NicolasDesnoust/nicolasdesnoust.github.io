import { RouteTypes, ScullyConfig } from '@scullyio/scully';
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
  routes: {
    '/home/projects/:projectId': {
      type: RouteTypes.contentFolder,
      postRenderers: [...defaultPostRenderers],
      projectId: {
        folder: './src/assets/content/projects',
      },
      manualIdleCheck: true,
    },
    '/projects/:projectId': {
      type: RouteTypes.contentFolder,
      postRenderers: [...defaultPostRenderers],
      projectId: {
        folder: './src/assets/content/projects',
      },
      manualIdleCheck: true,
    },
    '/home/puzzles/:puzzleId': {
      type: RouteTypes.contentFolder,
      postRenderers: [...defaultPostRenderers],
      puzzleId: {
        folder: './src/assets/content/puzzles',
      },
      manualIdleCheck: true,
    },
    '/codingame/puzzles/:puzzleId': {
      type: RouteTypes.contentFolder,
      postRenderers: [...defaultPostRenderers],
      puzzleId: {
        folder: './src/assets/content/puzzles',
      },
      manualIdleCheck: true,
    },
  },
};
