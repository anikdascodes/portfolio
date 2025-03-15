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
        author: z.string().default('Dejan Vi.'),
        tags: z.array(z.string()).optional()
    })
});

export const collections = {
    about,
    blogs
};
