<script>
	export let widgetTitle = '';
	export let widgetEmoji = '';
	export let flexBasis = '20%';
</script>

<div class="defaultWidgetContainer" style="flex-basis:{flexBasis}">
	<h4>{widgetTitle}</h4>
	<div class="defaultWidgetBody">
		<slot />
	</div>
	{#if widgetEmoji !== ''}
		<div class="emoji">{widgetEmoji}</div>
	{/if}
</div>

<style>
	.defaultWidgetContainer {
		border-radius: 5px;
		border: 0.5px solid rgb(121, 121, 121);
		padding-bottom: 1rem;
		padding-top: 0.4rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		display: flex;
		flex-direction: column;
		position: relative;

		flex-grow: 1;
		/*Credits to https://shadows.brumm.af/ for the smooth shadow generator*/
		box-shadow: 0.3px 0.5px 0.7px rgba(177, 184, 187, 0.024),
			0.8px 1.6px 2px -0.8px rgba(177, 184, 187, 0.035),
			2.1px 4.1px 5.2px -1.7px rgba(177, 184, 187, 0.046),
			5px 10px 12.6px -2.5px rgba(177, 184, 187, 0.07);
	}

	@media (min-width: 768px) {
		.defaultWidgetContainer {
			flex-grow: 0;
		}
	}

	.defaultWidgetBody {
		padding: 1rem;
		padding-bottom: 1.2rem;
	}

	h4 {
		text-transform: uppercase;
		border-bottom: 1.5px solid var(--color-text-dark);
		padding-left: 1rem;
		padding-right: 1rem;
		margin: 0;
		text-align: center;
		padding-bottom: 0.4rem;
		letter-spacing: 0.1rem;
	}

	.emoji {
		position: absolute;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		bottom: 0.1rem;
		font-size: 1.3rem;
	}
</style>
