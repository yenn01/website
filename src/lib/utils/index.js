export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = '/blog/' + path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export function stripHashAndDigest(_raw) {
	const signedRe = /signed:\s+(?<signed>.+)\r?\n/g;
	const digestRe = /digest:\s+(?<digest>.+)\r?\n/g;
	let signature = undefined;
	let digest = undefined;
	try {
		signature = signedRe.exec(_raw).groups.signed;
	} catch (err) {
		console.error(err);
	}
	try {
		digest = digestRe.exec(_raw).groups.digest;
	} catch (err) {
		console.error(err);
	}
	const cleanSigned = _raw.replace(signedRe, '');
	const cleanBoth = cleanSigned.replace(digestRe, '');
	return {
		cleanedRaw: cleanBoth,
		signature,
		digest
	};
}
