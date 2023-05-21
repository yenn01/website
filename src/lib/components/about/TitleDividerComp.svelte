<script>
	export let text;
	export let num;
</script>

<div class="skillTitle">
	<h6><span class="num">{num}</span> {text}</h6>
</div>

<style>
	h6 {
		text-align: left;
		font-size: 1.8rem;
		margin: 0;
		/* text-transform: uppercase; */
	}

	.num {
		color: darkgray;
		font-size: 1.1rem;
	}

	.skillTitle {
		border-bottom: 3px solid black;
		margin-bottom: 3rem;
		margin-left: 1rem;
		margin-top: 2rem;
	}
</style>
