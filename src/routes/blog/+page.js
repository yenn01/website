export const prerender = true;

import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/posts`);
		const allPostIDs = await response.json();

		return { posts: allPostIDs };
	} catch (e) {
		throw error(404, `Could not find post ${params.slug}`);
	}
};
