<script>
	import { fade } from 'svelte/transition';
	import TitleDividerComp from './TitleDividerComp.svelte';

	let email = 'yennmiing.ooi@protonmail.com';
	$: copied = false;

	function copy() {
		navigator.clipboard.writeText(email).then(
			() => {
				copied = true;
				setTimeout(() => {
					copied = false;
				}, 3000);
			},
			(e) => {}
		);
	}
</script>

<TitleDividerComp num={'05'} text={'Contact'} />
<div class="contactHolder">
	<small>Click to copy</small>

	<button on:click={copy}>
		{email}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-clipboard"
			viewBox="0 0 16 16"
		>
			<path
				d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
			/>
			<path
				d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
			/>
		</svg>
	</button>

	{#if copied}
		<small class="copied">Copied!</small>
	{:else}
		<small class="copied">&nbsp;</small>
	{/if}
</div>

<style>
	.contactHolder {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-items: center;
	}

	button {
		font-size: 1.5rem;
		font-weight: 500;
		color: white;
		border: none;
		background-color: transparent;
	}

	button:hover {
		color: var(--color-theme-1);
		transition: 0.2s;
		cursor: pointer;
	}
</style>
