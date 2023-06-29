<script>
	import BasicWidget from './BasicWidget.svelte';
	export let nowLearningData;
</script>

<BasicWidget widgetTitle={'Now Learning'} widgetEmoji={'🧠'} flexBasis={'25%'}>
	{#if nowLearningData.link === undefined}
		<h3>{nowLearningData.topic}</h3>
	{:else}
		<h3><a href={nowLearningData.link} target="_blank">{nowLearningData.topic}</a></h3>
	{/if}

	<blockquote>{nowLearningData.description}</blockquote>
</BasicWidget>

<style>
	h3 {
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		text-align: left;
		color: var(--color-theme-1);
	}

	dd {
		text-align: right;
	}

	blockquote {
		margin: 0;
		text-align: justify;
	}
</style>
