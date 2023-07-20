import { error } from '@sveltejs/kit';
// export const prerender = true;
export async function load({ params }) {
	try {
		//console.log(params.slug);
		const publicKey = await import(`../../../../secrets/public.jwk?raw`);
		const post = await import(`../../../posts/${params.slug}.md`);
		const postRaw = await import(`../../../posts/${params.slug}.md?raw`);
		// console.log(publicKey.default);

		return {
			post: {
				content: post.default,
				meta: post.metadata
			},
			postRaw: postRaw.default,
			key: publicKey.default,
			fileName: params.slug
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
