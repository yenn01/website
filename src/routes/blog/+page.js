export const prerender = true;
import Arweave from 'arweave';

export const load = async ({ fetch, params }) => {
	// const getPosts = async () => {
	// 	const response = await fetch(`/api/posts/address=VIiWGPtisvWkgI9mdtG8u7DmFZjVUKAlHoSqj9_ghXg`);
	// 	const allPosts = await response.json();
	// 	return allPosts;
	// };
	// console.log(getPosts);
	const { category } = params;
	const response = await fetch(`/api/posts`);
	const allPostIDs = await response.json();
	// const array_ids = allPostIDs.data.transactions.edges.map((edge) => edge.node.id);
	// const tags = data.data.transactions.edges.map((edge) => edge.node.tags);;
	// const tagObject = {};
	// tags.forEach(tag => {
	//   tagObject[tag.name] = tag.value;
	// });
	// const tags = allPostIDs.data.transactions.edges.node.tags;
	const posts = allPostIDs.data.transactions.edges.map((edge) => {
		const tags = edge.node.tags;
		const nodeId = edge.node.id;

		const tagObject = {};

		tags.forEach((tag) => {
			tagObject[tag.name] = tag.value;
		});

		tagObject.id = nodeId;

		return tagObject;
	});
	const arweave = Arweave.init({});
	console.log(allPostIDs);

	console.log(posts);
	// if (category !== undefined) {
	// 	const posts = allPosts.filter((post) => post.meta.categories.includes(category));
	// 	return {
	// 		posts
	// 	};
	// } else {
	// 	return {
	// 		allPosts
	// 	};
	// }
	return { posts };
};
