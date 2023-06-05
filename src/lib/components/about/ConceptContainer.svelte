<script>
	export let title;
	export let description;
	export let subtitle = '';
</script>

<div class="conceptContainer">
	<div class="conceptTop">
		<div class="conceptSvg">
			<slot />
		</div>
		<div class="conceptTitleSection">
			<h2 class="conceptTitle">{title}</h2>
			{#if subtitle !== ''}
				<h4>{subtitle}</h4>
			{/if}
		</div>
	</div>

	<div class="conceptDescription">
		{description}
	</div>
</div>

<style>
	.conceptTop {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	.conceptContainer {
		display: flex;
		flex-direction: column;
		margin: 1rem;
	}

	.conceptDescription {
		text-align: justify;
	}

	.conceptSvg {
		margin-right: 2rem;
	}

	.conceptTitleSection {
		display: flex;
		flex-direction: column;
	}

	h2 {
		font-size: 2rem;
		letter-spacing: 0.2rem;
		font-weight: 600;
		margin: 0;
	}

	h4 {
		margin: 0;
		color: var(--color-theme-5);
		letter-spacing: 0.2rem;
	}
</style>
