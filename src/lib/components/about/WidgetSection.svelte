<script>
	import TitleDividerComp from './TitleDividerComp.svelte';
	import WidgetHolder from './WidgetHolder.svelte';
	import FavouriteBooks from './widgets/FavouriteBooks.svelte';
	import NowInterested from './widgets/NowInterested.svelte';
	import NowReading from './widgets/NowReading.svelte';
	export let nowReadingData;
	export let favouriteBooksData;
	export let nowInterestedData;
</script>

<TitleDividerComp num={'03'} text={'Widgets'} />
<WidgetHolder>
	<NowReading {nowReadingData} />
	<FavouriteBooks {favouriteBooksData} />
	<NowInterested {nowInterestedData} />
</WidgetHolder>

<style>
</style>
