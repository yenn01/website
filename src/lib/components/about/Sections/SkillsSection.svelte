<script>
	import SkillsContainer from '../SkillsContainer.svelte';
	import TitleDividerComp from '../TitleDividerComp.svelte';
	export let skillLevelData;

	//console.log(skillLevelData.body.ds)
</script>

<TitleDividerComp num={'03'} text={'Stack'} />

<div class="skillsection">
	<SkillsContainer
		elementTitle={'Data Science'}
		elementData={skillLevelData.ds}
		fillColour={'#0CCE6B '}
	/>
	<SkillsContainer
		elementTitle={'Programming Languages'}
		elementData={skillLevelData.pl}
		fillColour={'#39a0ed'}
	/>
	<SkillsContainer
		elementTitle={'Frameworks / Libraries'}
		elementData={skillLevelData.fwl}
		fillColour={'#FA8686'}
	/>
	<SkillsContainer
		elementTitle={'Softwares'}
		elementData={skillLevelData.soft}
		fillColour={'#e89005'}
	/>
</div>

<style>
	.skillsection {
		display: flex;
		flex-direction: row;
		width: 100%;
		flex-wrap: wrap;
		gap: 15px;
		margin-bottom: 2rem;
	}
</style>
