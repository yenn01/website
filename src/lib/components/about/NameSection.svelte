<script>
	import { onMount } from 'svelte';
	import { Appear } from '$lib/components';
	import TitleDividerComp from './TitleDividerComp.svelte';
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
		series: [
			{
				name: 'Skill',
				data: [8, 8, 8, 6, 7]
			}
		],
		xaxis: {
			categories: ['Data Science', 'Web Dev', 'Writing', 'Graphic', 'Blockchain'],
			labels: {
				style: {
					fontSize: '18px',
					fontWeight: 800,
					colors: ['#5A5A5A', '#5A5A5A', '#5A5A5A', '#5A5A5A', '#5A5A5A'],
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

	let container;
</script>

<!-- <Appear  -->

<TitleDividerComp text={'01 Intro'} />
<div class="cont-name">
	<div class="graph-holder">
		<!-- <div use:chart={g_options}/> -->
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
	.cont-name {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		/*Add media control to change to row reverse when screen small*/
	}

	.name-holder {
		flex-grow: 16;
		flex-shrink: 2;
		flex-basis: 400px;
		margin-bottom: 1rem;
	}

	.graph-holder {
		flex-grow: 8;
		flex-shrink: 0;
		flex-basis: 592px;
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
