<script>
	import TitleDividerComp from './TitleDividerComp.svelte';
	import WidgetHolder from './WidgetHolder.svelte';
	import FavouriteBooks from './widgets/FavouriteBooks.svelte';
	import NowReading from './widgets/NowReading.svelte';
	export let nowReadingData;
	export let favouriteBooksData;
</script>

<TitleDividerComp text={'03 Widgets'} />
<WidgetHolder>
	<NowReading {nowReadingData} />
	<FavouriteBooks {favouriteBooksData} />
</WidgetHolder>

<style>
</style>
