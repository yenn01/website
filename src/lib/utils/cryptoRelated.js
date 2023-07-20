function encodeMsg(_msg) {
	let enc = new TextEncoder();
	return enc.encode(_msg);
}

export async function verifyPost(_publicKey, _signature, _toVerify) {
	const encoded = encodeMsg(_toVerify);
	const cryptoKey = await crypto.subtle.importKey(
		'jwk',
		JSON.parse(_publicKey),
		{
			name: 'ECDSA',
			namedCurve: 'P-384'
		},
		true,
		['verify']
	);
	console.log(cryptoKey);

	return await crypto.subtle
		.verify(
			{
				name: 'ECDSA',
				hash: { name: 'SHA-1' }
			},
			cryptoKey,
			_signature,
			encoded
		)
		.then((sig) => {
			console.log(_publicKey);
			console.log(_toVerify);
			console.log(_signature);
			console.log(sig);
			return sig;
		});
}

export async function digestMessage(message) {
	const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
	const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
	const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
	return hashHex;
}
