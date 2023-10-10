import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	// try {
	// 	//console.log(params.slug);
	// 	const publicKey = await import(`../../../secrets/public.jwk?raw`);
	// 	const post = await import(`../../../posts/${params.slug}.md`);
	// 	const postRaw = await import(`../../../posts/${params.slug}.md?raw`);
	// 	const fixCarriageReturn = postRaw.default.replace(/\r\n/g, '\n');

	// 	return {
	// 		post: {
	// 			content: post.default,
	// 			meta: post.metadata
	// 		},
	// 		postRaw: fixCarriageReturn,
	// 		key: publicKey.default,
	// 		fileName: params.slug
	// 	};
	// } catch (e) {
	// 	throw error(404, `Could not find ${params.slug}`);
	// }
	// try {
	// console.log(params.slug);
	console.log('Ran');
	// const response = await fetch('/api/post/' + params.slug);
	const response = await fetch('/api/post?tx_info=7I3pWreCTEBm1FCKqdoSKNSdMRXuBl33o80eoM5_toE');
	const post = await response.json();

	console.log(post);
	console.log('=====================================');
	return post;
	// } catch (e) {
	// 	throw error(404, `Could not find ${params.slug}`);
	// }
}
