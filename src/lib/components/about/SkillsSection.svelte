<script>
    import SkillsContainer from "./SkillsContainer.svelte";
    export let skillLevelData

    //console.log(skillLevelData.body.ds)
</script>

<div class="skillsection">
    <SkillsContainer elementTitle={"Data Science"} elementData={skillLevelData.ds} fillColour={"#0CCE6B "}></SkillsContainer>
    <SkillsContainer elementTitle={"Programming Languages"} elementData={skillLevelData.pl} fillColour={"#39a0ed"}></SkillsContainer>
    <SkillsContainer elementTitle={"Frameworks / Libraries"} elementData={skillLevelData.soft} fillColour={"#FA8686"}></SkillsContainer>
    <SkillsContainer elementTitle={"Softwares"} elementData={skillLevelData.soft} fillColour={"#e89005"}></SkillsContainer>
</div>

<style>
    .skillsection {
        display:flex;
        flex-direction: row;
        width:100%;
        flex-wrap: wrap;
        gap:15px;
    }


</style>