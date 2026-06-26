import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './src/sanity/schemas';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'unconfigured',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool()],
  schema: { types: schemas },
});
