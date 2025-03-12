import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
    seoTitle: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
		coverImage: image()
      .refine((img) => img.width >= 960, {
        message: 'Cover image must be at least 960 pixels wide!'
      })
      .optional()
	}),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    projects: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      demoLink: z.string(),
      demoLinkRel: z.string().optional(),
      postLink: z.string().optional(),
      tags: z.array(z.string()).optional(),
      stargazers_count: z.number().optional(),
      forks_count: z.number().optional(),
      html_url: z.string().optional()
    }))
  })
});

export const collections = { blog, projects };
