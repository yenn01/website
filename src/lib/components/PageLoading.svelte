<script>
</script>

<div class="parent-loading">
	<div class="loading">Loading</div>
</div>

<style>
	.parent-loading {
		margin-top: 10vh;
	}

	.loading {
		font-size: 1.5rem;
		width: 10rem;
		justify-self: center;
		flex-grow: 0;
		margin-left: auto;
		margin-right: auto;
		font-family: var(--font-mono);
	}

	.loading:after {
		display: inline-block;
		animation: dotty steps(1, end) 1s infinite;
		content: '';
	}

	@keyframes dotty {
		0% {
			content: '';
		}
		25% {
			content: '.';
		}
		50% {
			content: '..';
		}
		75% {
			content: '...';
		}
		100% {
			content: '';
		}
	}
</style>
