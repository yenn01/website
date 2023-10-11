// src/routes/api/posts/+server.js

const address = 'VIiWGPtisvWkgI9mdtG8u7DmFZjVUKAlHoSqj9_ghXg';
import { fetchMarkdownPosts, fetchArweavePosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	const gitPosts = await fetchMarkdownPosts();
	const arPosts = await fetchArweavePosts(address);

	// Append gitPosts to arPosts
	const posts = arPosts.concat(gitPosts);

	// Sort posts by date
	posts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(posts);
};
