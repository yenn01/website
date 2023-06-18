<script>
	import ConceptContainer from '../ConceptContainer.svelte';
	import TitleDividerComp from '../TitleDividerComp.svelte';
</script>

<TitleDividerComp num={'05'} text={'Philosophies / Concepts'} />
<div class="conceptSection">
	<ConceptContainer
		title={'Festina Lente'}
		subtitle={'speûde bradéōs'}
		description={'A classical oxymoron of Greek origin adopted as a motto by emperor Augustus that translates to “make haste slowly”, a conflicting term that reminds one of the importance of balance between doing something well and doing something quickly.'}
	>
		<svg
			width="10rem"
			height="10rem"
			version="1.1"
			style="stroke:#ffffff;"
			viewBox="0 0 16.32 15.677"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				transform="translate(-55.592 -115.41)"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width=".419"
			>
				<path
					d="m57.15 124.88h1.0583l2.9104-3.175v3.175l5.2917-6.6146v6.6146l3.9688-3.9688v3.9688h1.3229"
				/>
				<path d="m57.15 126.21h14.552l-2.6458 2.6458" />
			</g>
		</svg>
	</ConceptContainer>
	<ConceptContainer
		title={'Kaizen'}
		subtitle={'改善'}
		description={'A Japanese business philosophy meaning continous improvement and changing for the better that is made famous by “The Toyota Way”. It’s a reminder to never be content and always work toward improving oneself and one’s surroundings.'}
	>
		<!-- Created with Inkscape (http://www.inkscape.org/) -->
		<svg
			width="10rem"
			height="10rem"
			version="1.1"
			style="fill:#ffffff;"
			viewBox="0 0 83.039 76.876"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform="translate(-58.33 -66.31)">
				<g transform="matrix(.96805 0 0 .96805 3.1904 .79634)">
					<g>
						<path
							transform="scale(.26458)"
							d="m377.38 255.78c-89.343 0-162.1 72.766-162.1 162.11 0 46.597 19.942 88.499 51.574 118.12 7.175-5.7875 14.76-11.082 22.791-15.707-28.843-24.713-47.18-61.337-47.18-102.41 0-74.645 60.271-134.92 134.92-134.92 74.645 1e-5 134.92 60.279 134.92 134.92 0 41.076-18.34 77.7-47.186 102.41 8.0308 4.6246 15.616 9.92 22.791 15.707 31.635-29.62 51.578-71.522 51.578-118.12 0-89.344-72.764-162.11-162.11-162.11z"
							color="#000000"
							style="-inkscape-stroke:none;paint-order:stroke markers fill"
						/>
					</g>
					<path
						d="m135.15 144.4-14.062 2.6936-2.6936-14.062z"
						stroke-width="0"
						style="paint-order:stroke markers fill"
					/>
				</g>
				<path
					d="m99.686 83.744-5.7859 5.7674 0.01855 0.01849-15.898 15.95 5.7854 5.7669 15.88-15.931 15.88 15.931 5.7859-5.7669-15.899-15.95 0.0185-0.01849z"
					stroke-width="0"
					style="paint-order:stroke markers fill"
				/>
				<path
					d="m99.849 104.75-5.0272 5.0112 0.01608 0.016-13.814 13.859 5.0268 5.0108 13.798-13.842 13.798 13.842 5.0272-5.0108-13.814-13.859 0.016-0.016z"
					stroke-width="0"
					style="paint-order:stroke markers fill;fill:#b1b8bb"
				/>
			</g>
		</svg>
	</ConceptContainer>
</div>

<style>
	.conceptSection {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
