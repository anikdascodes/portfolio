import { loadEnv } from 'vite';

const { GITHUB_PERSONAL_ACCESS_TOKEN } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export const slugify = (input: string) => {
	if (!input) return '';

	// make lower case and trim
	var slug = input.toLowerCase().trim();

	// remove accents from charaters
	slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	// replace invalid chars with spaces
	slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

	// replace multiple spaces or hyphens with a single hyphen
	slug = slug.replace(/[\s-]+/g, '-');

	return slug;
};

export const unslugify = (slug: string) =>
	slug.replace(/\-/g, ' ').replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

export const kFormatter = (num: number) => {
	return Math.abs(num) > 999 ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
};

export const getRepositoryDetails = async (repositoryFullname: string) => {
	try {
		// Prepare headers based on whether token is available
		const headers: Record<string, string> = {
			'X-GitHub-Api-Version': '2022-11-28'
		};
		
		// Only add Authorization header if token exists
		if (GITHUB_PERSONAL_ACCESS_TOKEN) {
			headers.Authorization = `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`;
		}
		
		const repoDetails = await fetch('https://api.github.com/repos/' + repositoryFullname, {
			method: 'GET',
			headers
		});
		
		if (!repoDetails.ok) {
			console.warn(`Failed to fetch repo details for ${repositoryFullname}: ${repoDetails.statusText}`);
			return {}; // Return empty object on failure
		}
		
		const response = await repoDetails.json();
		return response;
	} catch (error) {
		console.error(`Error fetching repository details for ${repositoryFullname}:`, error);
		return {}; // Return empty object on error
	}
};
