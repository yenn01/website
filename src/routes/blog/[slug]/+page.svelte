<script>
	import base64js from 'base64-js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { store_showHeader, store_showHeaderLogo } from '$lib/stores/showHeader.js';
	import Error from '../../+error.svelte';
	export let data;

	let verified = false;
	let sameDigest = false;
	let checkSignature;

	const { cleanedRaw, signature, digest } = stripHashAndDigest(data.postRaw);

	function stripHashAndDigest(_raw) {
		const signedRe = /signed:\s+(?<signed>.+)\r?\n/g;
		const digestRe = /digest:\s+(?<digest>.+)\r?\n/g;
		let signature = undefined;
		let digest = undefined;
		try {
			signature = signedRe.exec(_raw).groups.signed;
		} catch (err) {}
		try {
			digest = digestRe.exec(_raw).groups.digest;
		} catch (err) {}
		const cleanSigned = _raw.replace(signedRe, '');
		const cleanBoth = cleanSigned.replace(digestRe, '');
		return {
			cleanedRaw: cleanBoth,
			signature,
			digest
		};
	}

	function encodeMsg(_msg) {
		let enc = new TextEncoder();
		return enc.encode(_msg);
	}

	async function verifyPost(_publicKey, _signature, _toVerify) {
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
				console.log(sig);
				verified = sig;
				return sig;
			});
	}

	async function digestMessage(message) {
		const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
		const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
		const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
		return hashHex;
	}

	onMount(() => {
		$store_showHeader = 9999;
		$store_showHeaderLogo = true;
		if (signature !== undefined) {
			const signatureBytes = base64js.toByteArray(signature).buffer;
			verifyPost(data.key, signatureBytes, cleanedRaw);
		}
		if (digest !== undefined) {
			digestMessage(cleanedRaw).then((digestHex) => {
				sameDigest = digestHex == digest;
			});
		}
	});
</script>

<svelte:head>
	<title>{data.post.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.post.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.post.meta.title}</h1>
		<p>Published on {data.post.meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each data.post.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="post-content">
		<svelte:component this={data.post.content} />
	</div>
</article>

<section class="container_cryptoStatus">
	<h6>Cryptographic Information</h6>

	<caption transition:fade>
		Signed -
		{#if verified}
			<span class="verified">Verified ✓</span>
		{:else}
			<span class="unverified">Unverified ✗</span>
		{/if}
	</caption>
	<p>{signature}</p>

	<caption
		>Checksum -
		{#if sameDigest}
			<span class="verified">Matching ✓</span>
		{:else}
			<span class="unverified">Unmatching ✗</span>
		{/if}
	</caption>
	<p>{digest}</p>
	<h4>{data.fileName}.md</h4>
	<h6 />
</section>

<style>
	.unverified {
		color: var(--color-theme-1);
	}

	.verified {
		color: var(--color-theme-2);
	}

	h6 {
		margin: 0;
		border-top: 1px solid white;
		padding-top: 0.4rem;
		text-align: right;
		font-size: 0.8rem;
		font-family: 'Roboto Mono', monospace;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
	}
	.container_cryptoStatus {
		display: flex;
		flex-direction: column;
		word-wrap: break-word;

		/* border-radius: 1rem; */
		text-align: right;
		align-self: end;
		margin-top: 3rem;
		width: 100%;
	}

	.container_cryptoStatus p {
		margin-top: 0;
		word-wrap: break-word;
		font-size: 0.8rem;
		font-family: 'Roboto Mono', monospace;
		color: var(--color-text-dark-lg);
	}

	caption {
		margin-top: 0.33rem;
		font-family: 'Roboto Mono', monospace;
		font-size: 0.7rem;
		text-align: left;
	}

	article {
		margin-inline: auto;
		margin-top: 10%;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: 1rem;
		color: var(--color-text-dark);
		text-align: center;
		margin-bottom: 0.2rem;
	}

	.tags {
		display: flex;
		gap: 0.3rem;
		justify-content: center;
		color: var(--color-theme-1);
	}

	@media (min-width: 768px) {
		.container_cryptoStatus {
			width: 40%;
		}
	}
</style>
