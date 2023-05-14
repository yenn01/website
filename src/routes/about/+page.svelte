<script>
	import { onMount } from 'svelte';
	import { NameSection, SkillsSection } from '$lib/components';

	import { store_showHeader, store_showHeaderLogo } from '$lib/stores/showHeader.js';
	import WidgetSection from '$lib/components/about/WidgetSection.svelte';

	export let data;
	onMount(() => {
		$store_showHeader = 9999;
		$store_showHeaderLogo = true;

		//console.log($store_showHeader);
	});
	console.log(data);
</script>

<div class="cont-about">
	<div class="top-displacer" />
	<NameSection />
	<SkillsSection skillLevelData={data.sl.skillLevelBody} />
	<WidgetSection
		nowReadingData={data.a_widgets.aboutWidgetBody.nrd}
		favouriteBooksData={data.a_widgets.aboutWidgetBody.fbd}
	/>
	<div class="cont-philosophy" />
</div>

<style>
	.cont-about {
		display: flex;
		margin-top: 10%;
		flex-direction: column;
		justify-content: center;
		flex-wrap: wrap;
	}

	.top-displacer {
		height: 2vh;
	}
</style>
