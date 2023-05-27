<script>
	export let title;
	export let description;
</script>

<div class="conceptContainer">
	<div class="conceptTop">
		<div class="conceptSvg">
			<slot />
		</div>
		<h2 class="conceptTitle">{title}</h2>
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

	h2 {
		font-size: 2rem;
		letter-spacing: 0.2rem;
		font-weight: 600;
	}
</style>
