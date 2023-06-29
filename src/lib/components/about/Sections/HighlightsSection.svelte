<script>
	import DefaultHighlight from '../DefaultHighlight.svelte';
	import TitleDividerComp from '../TitleDividerComp.svelte';
	import SvelteHL from '../highlights/SvelteHL.svelte';
	import PythonHL from '../highlights/PythonHL.svelte';
</script>

<TitleDividerComp num={'02'} text={'Highlights'} />
<div class="highlightsSection">
	<SvelteHL />
	<PythonHL />

	<!-- <div id="hiddenFlexItem" /> -->
</div>

<style>
	.highlightsSection {
		display: flex;
		flex-direction: row;
		width: 100%;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	#hiddenFlexItem {
		content: '';
		flex: 1 0 30%;
		padding: 0.3rem;
		margin: 0.7rem;
		visibility: hidden;
	}
</style>
