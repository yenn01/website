<script>
	import BasicWidget from './BasicWidget.svelte';
	export let nowReadingData;
	console.log(nowReadingData);
</script>

<BasicWidget widgetTitle={'Now Reading'} widgetEmoji={'📖'}>
	{#each nowReadingData.books as book}
		<h4><a href={book.link} target="_blank">"{book.title}"</a></h4>
		<dd>by <i>{book.author}</i></dd>
	{/each}
</BasicWidget>

<style>
	h4 {
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		text-align: left;
	}

	dd {
		text-align: right;
	}
</style>
