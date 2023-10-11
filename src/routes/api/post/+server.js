// src/routes/api/posts/+server.js
import Arweave from 'arweave';

const address = 'VIiWGPtisvWkgI9mdtG8u7DmFZjVUKAlHoSqj9_ghXg';
/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const arweave = Arweave.init({
		host: 'arweave.net',
		port: 443,
		protocol: 'https'
	});
	console.log('API RAN');
	const tx_info = url.searchParams.get('tx_info');
	const bodyData = await getArData(arweave, tx_info);
	const tagsData = await getArTags(arweave, tx_info);
	console.log(tagsData);
	return new Response(
		JSON.stringify({
			body: {
				tx_id: tx_info,
				data: bodyData,
				tags: tagsData
			},
			status: 200
		})
	);
};
// console.log(params);
// if (!params.address) {
// 	return new Response(
// 		JSON.stringify({
// 			error: 'No address provided'
// 		}),
// 		{ status: 400 }
// 	);
// }

// const transaction = arweave.transactions
// 	.getData(tx_info, { decode: true, string: true })
// 	.then((transaction) => {
// 		console.log(transaction);
// 		if (typeof transaction === 'string') {
// 			txData = transaction;
// 		}
// 	});

/**
 * Function used to retrieve post data from the Arweave Blockchain based on the transaction id
 * @param {Arweave} arweave - An initialised Arweave-js instance
 * @param {string} tx_info - The transaction id to be retrieved
 */
async function getArData(arweave, tx_info) {
	const transaction = arweave.transactions
		.getData(tx_info, { decode: true, string: true })
		.then((transaction) => {
			if (typeof transaction !== 'string') {
				throw 'Wrong data type returned';
			}
			return transaction;
		});

	return transaction;
}

/**
 * Function used to retrive post tags from the Arweave Blockchain based on the transaction id
 * @param {Arweave} arweave - An initialised Arweave-js instance
 * @param {string} tx_info - The transaction id to be retrieved
 */
async function getArTags(arweave, tx_info) {
	let txTags = {};
	const transactionTags = arweave.transactions.get(tx_info).then((transaction) => {
		transaction['tags'].forEach((tag) => {
			let key = tag.get('name', { decode: true, string: true });
			let value = tag.get('value', { decode: true, string: true });
			if (key === 'ymooi_categories') {
				value = value.split(',');
			}
			console.log(`${key} : ${value}`);
			// let tempPush = { [key]: value };
			// txTags.push(tempPush);
			txTags[key] = value;
		});
		return txTags;
	});
	return transactionTags;
}
