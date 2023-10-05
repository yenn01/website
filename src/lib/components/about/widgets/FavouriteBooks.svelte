<script>
	import BasicWidget from './BasicWidget.svelte';
	export let favouriteBooksData;
	// console.log(favouriteBooksData);
</script>

<BasicWidget widgetTitle={'Favourite Books'} widgetEmoji={'📚'}>
	{#each favouriteBooksData.books as book}
		<h4><a href={book.link} target="_blank">"{book.title}"</a></h4>
		<dd>by <i>{book.author}</i></dd>
	{/each}
	<a href="https://www.goodreads.com/review/list/170470008" target="_blank"
		><h5>
			My List of Books on GoodReads <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-box-arrow-up-right"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
				/>
				<path
					fill-rule="evenodd"
					d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
				/>
			</svg>
		</h5></a
	>
</BasicWidget>

<style>
	h4 {
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		text-align: left;
	}

	h5 {
		text-align: center;
	}

	dd {
		text-align: right;
	}
</style>
