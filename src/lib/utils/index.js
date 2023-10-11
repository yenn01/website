/**
 * Type representing a Git post.
 * @typedef {Object} Post
 * @property {{ date: int, categories: Array<String>, description: String, title: String }} meta - Metadata of the post.
 * @property {string} path - Path of the post.
 * @property {string} type - Type of the post.
 */

/**
 * Function used to retrieve all markdown posts from the /src/posts directory.
 * @returns {Promise<Array<Post>>} - Returns an array of objects containing the metadata and path of each post.
 */
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = '/blog/git/' + path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath,
				type: 'git'
			};
		})
	);

	return allPosts;
};

/**
 * Function used to retrieve all Arweave posts from a given wallet address.
 * @param {string} address - Address of the Arweave wallet to retrieve posts from.
 * @returns {Promise<Array<Post>>} - Returns an array of objects containing the metadata and path of each post.
 */
export const fetchArweavePosts = async (_address) => {
	let response = await fetch('https://arweave.net/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			//GraphQL query
			query: `
            query {
                transactions(
                            owners:["${_address}"],
                    tags: [
                        {
                            name: "Content-Type",
                            values: ["text/markdown"]
                        }
                    ],
                    first: 8,
                    sort: HEIGHT_DESC
                ) {
                    edges {
                        cursor
                        node {
                            id
                            tags{
                                name
                                value
                            }
                        }
                    }
                }
            }              
            `
		})
	});
	const allPostIDs = await response.json();
	const arPosts = allPostIDs.data.transactions.edges.map((edge) => {
		const tags = edge.node.tags;
		const nodeId = edge.node.id;

		const tagHolder = {};
		const tagObject = {};

		tags.forEach((tag) => {
			let tempKey = tag.name.replace('ymooi_', '');
			if (tempKey === 'categories') {
				tag.value = tag.value.split(',');
			}
			if (tempKey === 'date') {
				//Convert to int
				tag.value = parseInt(tag.value);
			}
			tagHolder[tempKey] = tag.value;
		});

		tagObject.path = '/blog/ar/' + nodeId;
		tagObject.meta = tagHolder;
		tagObject.type = 'arweave';

		return tagObject;
	});
	return arPosts;
};

/**
 * Function used to strip hash and digest from a given string.
 * @param {string} _raw - The string to strip hash and digest from.
 * @returns {Object} - Returns an object containing the cleaned raw string, signature and digest.
 */
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
	console.log(cleanBoth);
	console.log(signature);
	console.log(digest);
	return {
		cleanedRaw: cleanBoth,
		signature,
		digest
	};
}

/**
 * Function used to convert an epoch time to a human readable date.
 * @param {int} epoch - Epoch time to convert.
 * @returns {string} - Returns a human readable date.
 */
export function convertEpochToDisplayDate(_epoch) {
	var utcSeconds = _epoch / 1000;
	let epochTime = new Date(0);
	let dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
	epochTime.setUTCSeconds(utcSeconds);
	return epochTime.toLocaleDateString('en-US', dateOptions);
}

/**
 * Calculates the estimated reading time for a given text.
 * @param {string} _text - The text to calculate the reading time for.
 * @returns {number} - The estimated reading time in minutes.
 */
export function readingTime(_text) {
	const wpm = 225;
	const words = _text.trim().split(/\s+/).length;
	const time = Math.ceil(words / wpm);
	return time;
}
