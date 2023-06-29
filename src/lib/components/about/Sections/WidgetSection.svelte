<script>
	import TitleDividerComp from '../TitleDividerComp.svelte';
	import WidgetHolder from '../WidgetHolder.svelte';
	import FavouriteBooks from '../widgets/FavouriteBooks.svelte';
	import NowInterested from '../widgets/NowInterested.svelte';
	import NowLearning from '../widgets/NowLearning.svelte';
	import NowReading from '../widgets/NowReading.svelte';
	export let nowReadingData;
	export let favouriteBooksData;
	export let nowInterestedData;
	export let nowLearningData;
</script>

<TitleDividerComp num={'04'} text={'Widgets'} />
<WidgetHolder>
	<NowReading {nowReadingData} />
	<FavouriteBooks {favouriteBooksData} />
	<NowInterested {nowInterestedData} flexBasis="'25%'" />
	<NowLearning {nowLearningData} flexBasis="'25%'" />
</WidgetHolder>

<style>
</style>
