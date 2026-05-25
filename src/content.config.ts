import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const about = defineCollection({
    loader: glob({
        base: './src/content/about',
        pattern: 'about.md'
    }),
    schema: z.object({
        title: z.string()
    })
});

const blogs = defineCollection({
    loader: glob({
        base: './src/content/blogs',
        pattern: ['**/index.md', '!_TEMPLATE/**']
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        publishDate: z.date(),
        description: z.string().optional(),
        author: z.string().default('Anik Das'),
        tags: z.array(z.string()).optional(),
        featuredImage: image().optional(),
        canonicalURL: z.string().optional(),
        draft: z.boolean().default(false)
    })
});

export const collections = {
    about,
    blogs
};
