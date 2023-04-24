<script>
	import Header from './Header.svelte';
    import { fade} from 'svelte/transition';
	import './styles.css';


    export let data



</script>

<div class="app">
    <Header></Header>

    {#key data.path}
        <main transition:fade>
            <slot />
        </main>
    {/key}

	<footer>
		<p>Yenn Miing &copy; 2023 </p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 200vh;
        align-items: center;
        justify-content: center;

	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
        height: 100%;
		max-width: 80rem;
		/* margin: 0 auto; */
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding: 12px;
        font-size: 0.6rem;
        padding: 1rem;
	}


	@media (min-width: 480px) {
		footer {
			padding: 12px 1rem;
		}

        
	}

</style>
