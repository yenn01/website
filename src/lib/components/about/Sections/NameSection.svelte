<script>
	import { onMount } from 'svelte';
	import { Appear } from '$lib/components';
	import TitleDividerComp from '../TitleDividerComp.svelte';
	import { Circle } from 'svelte-loading-spinners';
	import Page from '../../../../routes/+page.svelte';
	// import { chart } from "svelte-apexcharts";

	let g_options = {
		chart: {
			type: 'radar',
			height: 500,
			toolbar: {
				show: false
			}
		},
		fill: {
			opacity: 0.5,
			colors: ['#a6dcef']
		},
		stroke: {
			colors: ['#b3b8ff']
		},

		markers: {
			colors: ['#fa8686']
		},
		tooltip: {
			theme: 'dark'
		},

		series: [
			{
				name: 'Skill',
				data: [8, 8, 8, 7, 6]
			}
		],
		xaxis: {
			categories: ['Data Science', 'Writing', 'Web Dev', 'Blockchain', 'Graphic'],
			labels: {
				style: {
					colors: '#b1b8b3b',
					fontSize: '1rem',
					fontWeight: 800,
					opacity: 1
				}
			}
		},
		yaxis: {
			tickAmount: 5,
			min: 0,
			max: 10,
			labels: {
				style: {
					colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494']
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		const chart = new ApexCharts(container, g_options);
		chart.render();
	});

	let container = null;
</script>

<!-- <Appear  -->

<TitleDividerComp num={'01'} text={'Intro'} />
<div class="cont-name">
	<div class="graph-holder">
		<!-- <div use:chart={g_options}/> -->
		{#if container === null}
			<div class="loadingContainer">
				<Circle size="5" color="#fb8f67" unit="rem" duration="1s" />
			</div>
		{/if}
		<div bind:this={container} />
	</div>
	<div class="name-holder">
		<h1 style="margin-bot:0;">Yenn Miing</h1>
		<h2 style="margin-top:0;">Ooi</h2>
		<p>
			Hi there, I am a data scientist 👨‍💻 with experience in web development &#40;mostly Svelte&#41;.
			I enjoy learning and have picked up a versatile skillset including graphic designing, basic
			video editing, CAD and writing.
		</p>
		<p>
			Passionate about <i>Blockchain</i>, <i>Artificial Intelligence</i>, <i>Machine Learning</i>,
			<i>Smart Contracts</i>, <i>Fintech</i>, <i>Coffee</i> ☕, <i>Food</i> 🍜 and
			<i>Mechanical Keyboards</i> ⌨️.
		</p>
	</div>
	<!-- </Appear> -->
</div>

<style>
	.loadingContainer {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		margin-top: auto;
		margin-bottom: auto;
		align-items: center;
	}

	.chart-wrapper {
		width: 100%;
		height: 100%;
		display: block;
		overflow: hidden;
	}

	.cont-name {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: column-reverse;
	}
	@media (min-width: 768px) {
		.cont-name {
			flex-direction: row;
		}
	}

	.name-holder {
		flex-grow: 2;
		flex-shrink: 1;
		flex-basis: 45%;
		margin-bottom: 1rem;
	}

	.graph-holder {
		flex-grow: 3;
		flex-shrink: 1;
		flex-basis: 55%;
		height: 100%;
		width: 100%;
		min-height: 515px;
		overflow: hidden;
	}

	p {
		text-align: justify;
	}

	h1 {
		font-size: 5.5rem;
		font-family: 'Inter';
		/* text-transform: uppercase; */
		text-align: right;
		margin-bottom: 0;
		margin-top: 0;
	}

	h2 {
		font-size: 4rem;
		font-family: 'Inter';
		/* text-transform: uppercase; */
		text-align: right;
		color: grey;
		margin-bottom: 0.6rem;
	}
</style>
