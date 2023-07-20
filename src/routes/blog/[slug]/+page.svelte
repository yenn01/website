<script>
	import base64js from 'base64-js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { store_showHeader, store_showHeaderLogo } from '$lib/stores/showHeader.js';
	import Error from '../../+error.svelte';
	import { verifyPost, digestMessage } from '$lib/utils/cryptoRelated';
	import { stripHashAndDigest } from '$lib/utils';

	export let data;

	let verified = false;
	let sameDigest = false;
	$: readingMinutes = 0;
	let checkSignature;

	const { cleanedRaw, signature, digest } = stripHashAndDigest(data.postRaw);

	function readingTime(_text) {
		const wpm = 225;
		const words = _text.trim().split(/\s+/).length;
		const time = Math.ceil(words / wpm);
		return time;
	}

	onMount(async () => {
		$store_showHeader = 9999;
		$store_showHeaderLogo = true;
		if (signature !== undefined) {
			const signatureBytes = base64js.toByteArray(signature).buffer;
			verified = await verifyPost(data.key, signatureBytes, cleanedRaw);
		}
		if (digest !== undefined) {
			digestMessage(cleanedRaw).then((digestHex) => {
				sameDigest = digestHex == digest;
			});
		}
		if (cleanedRaw !== undefined) {
			readingMinutes = readingTime(cleanedRaw);
		}
	});
</script>

<svelte:head>
	<title>{data.post.meta.title}</title>
	<meta property="og:type" content="article" />
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-okaidia.min.css"
		rel="stylesheet"
	/>
	<meta property="og:title" content={data.post.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.post.meta.title}</h1>
		<p>Published on {data.post.meta.date}</p>
		<div class="tags">
			{#each data.post.meta.categories as category}
				<span>&num;{category}</span>
			{/each}
		</div>
		<p class="time">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-stopwatch"
				viewBox="0 0 16 16"
			>
				<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
				<path
					d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"
				/>
			</svg>
			{readingMinutes} minute{#if readingMinutes !== 1}s{/if} read
		</p>
	</hgroup>

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
		margin-top: 14%;
		min-height: 65vh;
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

	hgroup {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.time {
		color: var(--color-text-dark-lg);
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

		hgroup {
			margin-bottom: 4rem;
		}

		article {
			margin-top: 9%;
		}
	}
</style>
