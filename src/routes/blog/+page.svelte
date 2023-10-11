<script>
	import RecentPosts from '$lib/components/RecentPosts.svelte';

	export let data;
</script>

<svelte:head>
	<title>YennM - Blog</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Blog" />
</svelte:head>
<!-- ...Post HTML here -->
<RecentPosts posts={data.posts} />

<style>
	aside {
	}

	.content {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 0.2fr, 0.3fr, 1fr, 1fr, 1fr, 1fr;
		grid-column-gap: 50px;
		grid-row-gap: 0px;
		margin-top: 8%;
	}

	.content_title {
		grid-area: 1 / 1 / 2 / 3;
		border-bottom: 1px solid gray;
	}
	.content_descrp {
		grid-area: 1 / 3 / 2 / 6;
		text-align: right;
		border-bottom: 0.5px solid gray;
	}
	.content_rp {
		grid-area: 2 / 1 / 3 / 6;
		text-transform: uppercase;
		text-align: right;
	}

	.rp {
		font-weight: 900;

		letter-spacing: 2px;
		font-size: 1.5rem;
	}
</style>
