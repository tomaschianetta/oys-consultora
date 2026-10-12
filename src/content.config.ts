import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Notas de la sección Recursos. Para publicar una nota nueva, copiá un .md
// de src/content/recursos/, cambiá el contenido y la fecha.
const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { recursos };
