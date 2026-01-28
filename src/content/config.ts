import { defineCollection, z } from 'astro:content';

const about = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
});

const blogs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
        description: z.string().optional(),
        author: z.string().default('Anik Das'),
        tags: z.array(z.string()).optional(),
        featuredImage: z.string().optional(),
        canonicalURL: z.string().optional(),
        draft: z.boolean().default(false)
    })
});

export const collections = {
    about,
    blogs
};
