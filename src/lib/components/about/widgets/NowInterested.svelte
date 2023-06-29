<script>
	import BasicWidget from './BasicWidget.svelte';
	export let nowInterestedData;
</script>

<BasicWidget widgetTitle={'Now Interested In'} widgetEmoji={'🔎'} flexBasis={'25%'}>
	<h3>{nowInterestedData.topic}</h3>
	<blockquote>{nowInterestedData.description}</blockquote>
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
