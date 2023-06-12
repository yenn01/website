<script>
</script>

<footer>
	<div class="WIPHolder">
		<p>Work in Progress</p>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-wrench"
			viewBox="0 0 16 16"
		>
			<path
				d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"
			/>
		</svg>
		<!-- Wrench icon from Bootstrap Icons -->
	</div>
	<p class="copy">Yenn Miing &#xa9; 2023</p>
	<!-- <div class="cornerHolder"> -->
	<p class="chi">彦<br />铭</p>
	<!-- </div> -->
</footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		font-size: 0.6rem;
		/* background-color: var(--color-theme-dark-1); */
		background-color: #333333;
		width: 100%;
		overflow-x: hidden;
		position: relative;
		color: white;
	}

	.copy {
		position: absolute;
		left: 0;
		right: 0;
		text-align: center;
	}

	.WIPHolder {
		display: flex;
		padding: 0.1rem;
		border-radius: 10px;
		margin: 0.3rem;
		background-color: var(--color-theme-dark-1);
		color: black;
		align-items: center;
	}

	.WIPHolder > p {
		margin: 0.5rem 0.4rem;
		font-weight: 500;
		font-size: 0.9rem;
	}

	.cornerHolder {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.chi {
		font-family: 'Microsoft YaHei New', 'Microsoft Yahei', '微软雅黑', 宋体, SimSun, STXihei,
			'华文细黑', serif;
		padding-right: 1rem;
	}
</style>
