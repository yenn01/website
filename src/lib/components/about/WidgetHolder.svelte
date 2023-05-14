<script>
</script>

<div class="widgetHolder">
	<slot />
</div>

<style>
	.widgetHolder {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.widgetHolder > div {
		flex: 1 1 auto;
		position: relative;
	}
</style>
