<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { fix_and_destroy_block } from 'svelte/internal';
	import { store_showHeader, store_showHeaderLogo } from '$lib/stores/showHeader.js';

	/**
	 * @type {{ seek?: any; duration?: any; restart?: any; }}
	 */
	let animLogo;
	/**
	 * @type {{ seek?: any; duration?:any;}}
	 */
	let resizeLogo;

	function initAnim() {
		anime.set('#moving', {
			translateX: '-50%',
			translateY: '-50%',
			top: '50vh',
			left: '50vw'
		});
		animLogo = anime({
			targets: '#moving',
			top: 0,
			left: 0,
			translateX: '-24%',
			translateY: '-24%',
			duration: 10000,
			autoplay: false,
			color: '#000000',
			stroke: '#000000',
			easing: 'easeInOutCubic'
		});
		resizeLogo = anime({
			targets: '#cont_logo',
			scale: 0.35,
			duration: 10000,
			autoplay: false,
			easing: 'easeInOutCubic'
		});
	}

	onMount(() => {
		//window.scrollTo(0, 0);
		$store_showHeader = 0;
		initAnim();
		$store_showHeaderLogo = false;
	});

	let y = 0.0;
	let ch = 0;
	$: dur = 0;
	let ran = false;

	function move() {
		animLogo.seek((y / ch) * animLogo.duration);
		resizeLogo.seek((y / ch) * resizeLogo.duration);
		$store_showHeader = y;
	}

	function resize() {
		console.log('Restarting');
		//initAnim()
	}

	function beforeUnload() {
		y = 0;
	}
</script>

<svelte:head>
	<title>YennM</title>
	<meta name="description" content="Yenn Miing's place for creativity, discovery and design." />
</svelte:head>
<svelte:window
	bind:scrollY={y}
	on:scroll={move}
	bind:innerHeight={ch}
	on:resize={resize}
	on:beforeunload={beforeUnload}
/>
<div class="homeContainer">
	<section id="moving">
		<div id="cont_logo">
			<svg id="logo" version="1.1" viewBox="0 0 108.78 190.52" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(-51.078 -54.024)">
					<path
						id="pathcolor"
						d="m52.228 56.739v32.437l36.162 35.036-36.162 35.036v32.436l52.902 51.254 52.902-51.254v-32.436l-52.902 51.254-9.4868-9.1912 63.07-61.104v-32.437l-52.902 51.254-26.907 26.068-9.9363-9.6268 89.065-86.29v-32.437l-52.902 51.254z"
						fill="none"
						stroke-width="2.6"
					/>
				</g>
			</svg>
			<h1 id="logoText">Yenn Miing</h1>
		</div>
	</section>
	<!-- <button on:click={()=> {y=0}}>Click me try animate</button> -->
	<div class="placementGap" />
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
</div>

<style>
	.homeContainer {
		min-height: 200vh;
	}

	#moving {
		position: fixed;
		top: 50vh;
		left: 50vw;
		transform: translate(-50%, -50%);
		z-index: 2000;
		stroke: white;
	}

	#cont_logo {
		display: flex;
		flex-direction: row;
		flex: 1;
	}

	section h1 {
		padding-left: 1.3rem;
		font-weight: 500;
		white-space: nowrap;
		font-size: 2.3rem;
	}

	#logo {
		height: 8rem;
	}

	/* .placementGap {
		height: 114vh;
	} */

	.content {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 0.2fr, 0.3fr, 1fr, 1fr, 1fr, 1fr;
		grid-column-gap: 50px;
		grid-row-gap: 0px;
		padding-top: 114vh;
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

	small {
		font-family: 'Montserrat', sans-serif;
		color: gray;
	}
</style>
