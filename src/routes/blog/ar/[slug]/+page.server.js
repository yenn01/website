import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const response = await fetch('/api/post?tx_info=7I3pWreCTEBm1FCKqdoSKNSdMRXuBl33o80eoM5_toE');
		const post = await response.json();

		return post;
	} catch (e) {
		throw error(404, `Could not find post ${params.slug}`);
	}
}
