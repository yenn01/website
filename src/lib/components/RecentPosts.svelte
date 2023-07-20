<script>
	export let posts;
</script>

<!-- ...Post HTML here -->
<section class="content">
	<div class="content_title">
		<small>Title</small>
	</div>
	<div class="content_descrp">
		<small>Description</small>
	</div>
	<div class="content_rp">
		<h2 class="rp">Recent Posts</h2>
	</div>
</section>
<aside>
	{#each posts as post}
		<div class="post-holder">
			<div class="post-title-holder">
				<a href=".{post.path}" class="post-title">
					{post.meta.title}
				</a>
			</div>
			<div class="post-description-holder">
				<caption>{post.meta.date} </caption>
				<p>{post.meta.description}</p>

				<div class="post-description-bottom">
					{#each post.meta.categories as category}
						<span class="tags">&num;{category}&nbsp;</span>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</aside>

<style>
	.post-description-top {
		display: flex;
		flex-direction: row;
	}

	caption {
		font-size: 0.2rem;
		margin-bottom: 0.3rem;
	}

	.tags {
		font-size: 0.8rem;
		/* padding-left: 0.33rem; */
		color: var(--color-theme-dark-1);
	}

	.post-holder {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-column-gap: 0.3rem;
		grid-row-gap: 0px;
		min-height: 5rem;
		margin-bottom: 1rem;
	}

	.post-holder a {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 500;
		font-family: var(--font-header);
		letter-spacing: 0.05rem;
		text-align: right;
	}

	.post-title-holder {
		display: flex;
		flex-direction: column;
		grid-column: 1/3;
	}

	.post-description-holder caption {
		color: var(--color-text-dark-lg);
		font-size: 0.9rem;
		text-align: right;
	}

	.post-description-holder {
		display: flex;
		grid-column: 3 / 6;
		align-items: flex-start;
		flex-direction: column;
	}

	.post-description-holder p {
		text-align: left;
		margin: 0;
		font-size: 0.8rem;
	}

	.post-title {
		grid-column: 1 / 3;
	}

	.post-info {
	}

	aside {
		margin-top: 3rem;
	}

	.content {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		/* grid-template-rows: 0.2fr, 0.3fr, 1fr, 1fr, 1fr, 1fr; */
		grid-column-gap: 0.3rem;
		grid-row-gap: 0px;
		margin-top: 10vh;
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
		grid-area: 2 / 3 / 3 / 6;
		text-transform: uppercase;
		text-align: left;
	}

	.rp {
		font-weight: 900;

		letter-spacing: 0.15rem;
		font-size: 1.2rem;
	}

	@media (min-width: 768px) {
		.content {
			grid-column-gap: 2rem;
		}

		.post-holder {
			grid-column-gap: 2rem;
		}
		.post-holder a {
			font-size: 1.5rem;
		}

		.post-description-holder p {
			font-size: 1.2rem;
		}

		.post-description-top caption {
			font-size: 1rem;
		}

		.rp {
			font-weight: 900;

			letter-spacing: 0.15rem;
			font-size: 1.5rem;
		}
	}
</style>
