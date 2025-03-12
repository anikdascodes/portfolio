import { getCollection } from 'astro:content';

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

// This function is provided for backward compatibility
// New code should use getCollection('projects') directly
export const getProjects = async (): Promise<Project[]> => {
  const projectCollection = await getCollection('projects');
  return projectCollection[0].data.projects;
};

// For backward compatibility
export const projects = await getProjects();
