export const prerender = true;
export const load = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();
	if (category !== undefined) {
		const posts = allPosts.filter((post) => post.meta.categories.includes(category));
		return {
			posts
		};
	} else {
		return {
			allPosts
		};
	}
};
