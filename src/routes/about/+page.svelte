<script>
	import { onMount } from 'svelte';
	import { NameSection, SkillsSection } from '$lib/components';

	import { store_showHeader, store_showHeaderLogo } from '$lib/stores/showHeader.js';
	import WidgetSection from '$lib/components/about/Sections/WidgetSection.svelte';
	import ConceptsSection from '$lib/components/about/Sections/ConceptsSection.svelte';
	import ContactSection from '$lib/components/about/Sections/ContactSection.svelte';
	import HighlightsSection from '$lib/components/about/Sections/HighlightsSection.svelte';

	export let data;
	onMount(() => {
		$store_showHeader = 9999;
		$store_showHeaderLogo = true;

		//console.log($store_showHeader);
	});
	// console.log(data);
</script>

<svelte:head>
	<title>YennM</title>
	<meta name="description" content="Yenn Miing's place for creativity, discovery and design." />
</svelte:head>
<div class="cont-about">
	<div class="top-displacer" />
	<NameSection />
	<HighlightsSection />
	<SkillsSection skillLevelData={data.sl.skillLevelBody} />
	<WidgetSection
		favouriteBooksData={data.a_widgets.aboutWidgetBody.fbd}
		nowInterestedData={data.a_widgets.aboutWidgetBody.ni}
		nowLearningData={data.a_widgets.aboutWidgetBody.nl}
	/>
	<ConceptsSection />
	<ContactSection />
</div>

<style>
	.cont-about {
		display: flex;
		margin-top: 10%;
		flex-direction: column;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 5rem;
	}

	.top-displacer {
		height: 2vh;
	}
</style>
