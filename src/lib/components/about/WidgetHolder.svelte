<script>
</script>

<div class="widgetHolder">
	<slot />
	<!-- <div id="hiddenFlexItem" /> -->
</div>

<style>
	.widgetHolder {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		width: 100%;
	}

	.widgetHolder > div {
		flex: 1 1 auto;
		position: relative;
	}

	#hiddenFlexItem {
		content: '';
		flex: 1 0 20%;
		padding: 5px;
		margin-top: 10px;
		margin-right: 5px;
		visibility: hidden;
	}
</style>
