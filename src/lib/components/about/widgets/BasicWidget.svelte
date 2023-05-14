<script>
	export let widgetTitle = '';
	export let widgetEmoji = '';
</script>

<div class="defaultWidgetContainer">
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
		margin-left: 1rem;
		margin-right: 1rem;
		display: flex;
		flex-direction: column;
		position: relative;
		width: 250px;
	}

	.defaultWidgetBody {
		padding: 1rem;
		padding-bottom: 1.2rem;
	}

	h4 {
		text-transform: uppercase;
		border-bottom: 1.5px solid black;
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
