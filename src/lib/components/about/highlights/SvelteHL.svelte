<script>
	import DefaultHighlight from '../DefaultHighlight.svelte';
</script>

<DefaultHighlight>
	<h2>
		<em>1</em>
		<br /><small>year experience in</small>
		<br /><a class="language" href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
	</h2>
	<h2>
		<em>2</em>
		<br /> <small>years experience in</small>
		<br /> <a class="language" href="https://svelte.dev/" target="_blank">Svelte</a>
	</h2>

	<div class="logoContainer">
		<svg
			width="2.5rem"
			height="6rem"
			version="1.1"
			viewBox="0 0 147.63 177.41"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<style>
					.a {
						fill: #ff3e00;
					}
					.b {
						fill: #fff;
					}
					.c {
						fill: #1273ff;
					}
					.d {
						fill: #ffd815;
					}
				</style>
				<symbol id="a" viewBox="0 0 93.224 112">
					<path
						class="a"
						d="m87.269 14.819c-10.4-14.885-30.941-19.297-45.792-9.835l-26.077 16.624a29.921 29.921 0 0 0-13.524 20.043 31.514 31.514 0 0 0 3.108 20.231 30.006 30.006 0 0 0-4.477 11.183 31.892 31.892 0 0 0 5.448 24.116c10.4 14.887 30.942 19.3 45.791 9.835l26.083-16.624a29.915 29.915 0 0 0 13.518-20.043 31.522 31.522 0 0 0-3.1-20.232 30.019 30.019 0 0 0 4.474-11.182 31.878 31.878 0 0 0-5.447-24.116"
					/>
					<path
						class="b"
						d="m38.929 98.582a20.72 20.72 0 0 1-22.237-8.243 19.176 19.176 0 0 1-3.276-14.5 18.143 18.143 0 0 1 0.623-2.435l0.491-1.5 1.337 0.981a33.633 33.633 0 0 0 10.2 5.1l0.969 0.294-0.089 0.968a5.844 5.844 0 0 0 1.053 3.875 6.24 6.24 0 0 0 6.7 2.485 5.748 5.748 0 0 0 1.6-0.7l26.082-16.626a5.43 5.43 0 0 0 2.451-3.631 5.794 5.794 0 0 0-0.988-4.371 6.244 6.244 0 0 0-6.7-2.487 5.755 5.755 0 0 0-1.6 0.7l-9.953 6.345a19.06 19.06 0 0 1-5.3 2.326 20.719 20.719 0 0 1-22.237-8.243 19.171 19.171 0 0 1-3.277-14.5 17.992 17.992 0 0 1 8.137-12.05l26.085-16.623a19.03 19.03 0 0 1 5.3-2.329 20.72 20.72 0 0 1 22.237 8.243 19.176 19.176 0 0 1 3.277 14.5 18.453 18.453 0 0 1-0.624 2.435l-0.491 1.5-1.336-0.979a33.616 33.616 0 0 0-10.2-5.1l-0.97-0.294 0.09-0.968a5.859 5.859 0 0 0-1.052-3.878 6.241 6.241 0 0 0-6.7-2.485 5.748 5.748 0 0 0-1.6 0.7l-26.089 16.627a5.421 5.421 0 0 0-2.449 3.63 5.79 5.79 0 0 0 0.986 4.372 6.245 6.245 0 0 0 6.7 2.487 5.773 5.773 0 0 0 1.6-0.7l9.952-6.342a18.978 18.978 0 0 1 5.3-2.328 20.718 20.718 0 0 1 22.236 8.243 19.171 19.171 0 0 1 3.277 14.5 18 18 0 0 1-8.13 12.054l-26.085 16.618a19.017 19.017 0 0 1-5.3 2.329"
					/>
				</symbol>
			</defs>
			<use
				transform="matrix(1.584 0 0 1.584 -.023887 -.00020679)"
				width="93.223999"
				height="112"
				xlink:href="#a"
			/>
		</svg>
	</div>
	<small class="smaller">Psst! This website was coded in SvelteKit :D</small>
</DefaultHighlight>

<style>
	h2 {
		margin-bottom: 1rem;
		margin-top: 0;
		text-align: center;
	}

	small {
		color: var(--color-text-dark-lg);
		text-align: center;
	}

	.smaller {
		font-size: 0.6rem;
	}

	em {
		font-style: normal;
		font-size: 3rem;
		font-weight: 500;
	}

	.language {
		font-size: 1.7rem;
		font-weight: 500;
		font-family: var(--font-mono);
		color: #ff3e00;
		text-decoration: underline;
	}

	.logoContainer {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
