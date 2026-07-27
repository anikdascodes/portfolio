import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featured: z.boolean().default(true),
    imageUrl: z.string(),
    demoUrl: z.string(),
    githubUrl: z.string(),
    techStack: z.array(z.string()),
    impactMetric: z.string().optional(),
    order: z.number().default(1),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['frontend', 'backend', 'database', 'tools']),
    iconName: z.string(),
    proficiency: z.string(),
    order: z.number().default(1),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    fieldOfStudy: z.string(),
    period: z.string(),
    logoUrl: z.string(),
    description: z.string(),
    order: z.number().default(1),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    period: z.string(),
    isCurrent: z.boolean().default(false),
    logoUrl: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    order: z.number().default(1),
  }),
});

export const collections = { projects, skills, education, experience };
