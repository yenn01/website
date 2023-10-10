// src/routes/api/posts/+server.js

const address = 'VIiWGPtisvWkgI9mdtG8u7DmFZjVUKAlHoSqj9_ghXg';
/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	// console.log(params);
	// if (!params.address) {
	// 	return new Response(
	// 		JSON.stringify({
	// 			error: 'No address provided'
	// 		}),
	// 		{ status: 400 }
	// 	);
	// }

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
                            owners:["${address}"],
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

	// const transaction = arweave.transactions
	// 	.getData(tx_info, { decode: true, string: true })
	// 	.then((transaction) => {
	// 		console.log(transaction);
	// 		if (typeof transaction === 'string') {
	// 			txData = transaction;
	// 		}
	// 	});
	return response;
};
