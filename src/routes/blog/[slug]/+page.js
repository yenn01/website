import { error } from '@sveltejs/kit';
export const prerender = 'auto';

export async function load({ params }) {
	try {
		//console.log(params.slug);
		const publicKey = await import(`../../../secrets/public.jwk?raw`);
		const post = await import(`../../../posts/${params.slug}.md`);
		const postRaw = await import(`../../../posts/${params.slug}.md?raw`);
		const fixCarriageReturn = postRaw.default.replace(/\r\n/g, '\n');

		return {
			post: {
				content: post.default,
				meta: post.metadata
			},
			postRaw: fixCarriageReturn,
			key: publicKey.default,
			fileName: params.slug
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
