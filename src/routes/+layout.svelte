<script>
	import '../app.postcss';
	import '../postStyles.css';
	import Header from './Header.svelte';
	import { fade } from 'svelte/transition';
	import './styles.css';
	import Footer from './Footer.svelte';
	import { page } from '$app/stores';

	export let data;
</script>

{#if $page.error}
	<div class="app">
		<div class="errorHeader">Website a work in progress.</div>
		<slot />
	</div>
{:else}
	<div class="app">
		<Header />

		{#key data.path}
			<main in:fade={{ duration: 300, delay: 200 }}>
				<slot />
			</main>
		{/key}

		<Footer />
	</div>
{/if}

<style>
	.errorHeader {
		width: 100%;
		background-color: var(--color-theme-dark-1);
		color: black;
		text-align: center;
	}

	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: 100%;
		max-width: 80rem;
		/* margin: 0 auto; */
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding: 12px;
		font-size: 0.6rem;
		padding: 1rem;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 1rem;
		}
	}
</style>
