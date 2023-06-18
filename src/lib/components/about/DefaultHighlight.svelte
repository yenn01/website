<script>
	export let flexBasis = '30%';
</script>

<div class="defaultHighlight" style="flex-basis: {flexBasis};">
	<slot />
</div>

<style>
	.defaultHighlight {
		background-color: var(--color-bg-dark-2);
		display: flex;
		justify-items: center;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 0.5rem;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		padding-top: 0.5rem;
		padding-bottom: 0.3rem;
		margin: 0.7rem;

		flex-grow: 1;
		/*Credits to https://shadows.brumm.af/ for the smooth shadow generator*/
		box-shadow: 0.3px 0.5px 0.7px rgba(177, 184, 187, 0.024),
			0.8px 1.6px 2px -0.8px rgba(177, 184, 187, 0.035),
			2.1px 4.1px 5.2px -1.7px rgba(177, 184, 187, 0.046),
			5px 10px 12.6px -2.5px rgba(177, 184, 187, 0.07);
	}

	/* @media (min-width: 768px) {
		.defaultHighlight {
			flex-grow: 1;
		}
	} */
</style>
