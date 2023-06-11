<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import { fade, draw, fly } from 'svelte/transition';
	import { store_showHeader, store_showHeaderLogo } from '$lib/stores/showHeader.js';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';

	/**
	 * @type {{ seek?: any; duration?: any; }}
	 */
	let animHeader;
	let y = 0;
	let ch = 0;
	let justifyClass = '';
	onMount(() => {
		animHeader = anime({
			targets: '#contHeader',
			opacity: 1,
			duration: 10000,
			autoplay: false,
			easing: 'easeInOutCubic'
		});
	});

	function toggleHeader() {
		if (animHeader != undefined) {
			console.log('Trieds');
			animHeader.seek(($store_showHeader / ch) * animHeader.duration);
		}
		if ($store_showHeaderLogo === true) {
			justifyClass = 'showLogo';
			animHeader.seek(9999);
		} else if ($store_showHeaderLogo === false) {
			justifyClass = 'hideLogo';
			// if (animHeader != undefined) {
			// animHeader.seek(0);
			// }
		}
	}

	function toggleLogo() {}

	$: $store_showHeaderLogo, toggleLogo();
	$: $store_showHeader, toggleHeader();
</script>

<svelte:window bind:innerHeight={ch} />

<header id="contHeader" class={justifyClass} transition:fade={{ duration: 100 }}>
	{#if $store_showHeaderLogo == true}
		<svg
			id="headerLogo"
			version="1.1"
			viewBox="0 0 108.78 190.52"
			xmlns="http://www.w3.org/2000/svg"
			transition:fade
		>
			<g transform="translate(-51.078 -54.024)">
				<path
					d="m52.228 56.739v32.437l36.162 35.036-36.162 35.036v32.436l52.902 51.254 52.902-51.254v-32.436l-52.902 51.254-9.4868-9.1912 63.07-61.104v-32.437l-52.902 51.254-26.907 26.068-9.9363-9.6268 89.065-86.29v-32.437l-52.902 51.254z"
					fill="none"
					stroke="#000"
					stroke-width="2.6"
				/>
			</g>
		</svg>
	{/if}
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/about'}>
				<a
					href="/about"
					style=" {$page.url.pathname === '/about' ? 'border-bottom: 2px solid #b1b8bb;' : ''}"
					>about</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	#contHeader {
		opacity: 0;
	}

	#headerLogo {
		top: 1vh;
		left: 1rem;
		width: 2rem;
		height: 2.5rem;
		position: absolute;
	}

	.showLogo {
		justify-content: space-between;
	}

	.hideLogo {
		justify-content: flex-end;
	}

	header {
		display: flex;
		height: 32px;
		width: 100%;
		position: fixed;
		top: 0;
		padding-top: 3vh;
		font-family: 'Montserrat';
		font-size: 1.3rem;
		background-color: #fb8f67;
		z-index: 100;
		filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));
	}

	.header-choice {
		border-bottom: 2px solid transparent;
		transition: 0.2s;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: flex-end;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 4vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		color: var(--color-text);
		/* left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1); */
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1.2rem;
		text-transform: lowercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		white-space: nowrap;
		transition: color 0.2s linear;
	}

	a:hover {
		color: black;
	}
</style>
