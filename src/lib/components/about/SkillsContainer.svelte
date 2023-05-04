<script>
    import SkillLevelComp from "./SkillLevelComp.svelte";
    export let elementData
    export let elementTitle = "Title"
    export let fillColour

    function loadED() {
        for (var key of Object.keys(elementData)) {
            console.log(key + " -> " + elementData[key]["skills"])
        }
    }

    $: elementData, loadED()
    
</script>

<div class="comp-skills">
    <h4>{elementTitle}</h4>
    <SkillLevelComp filled={3} captions={elementData["3"]["skills"]} {fillColour}></SkillLevelComp>
    <SkillLevelComp filled={2} captions={elementData["2"]["skills"]} {fillColour}></SkillLevelComp>
    <SkillLevelComp captions={elementData["1"]["skills"]} {fillColour}></SkillLevelComp>

</div>


<style>
    .comp-skills {
        display: flex;
        padding:1rem;
        flex-direction: column;
        flex: 1 0 500px;
        
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        border-radius: 0 0 4% 0;
        
    }

    h4 {
        font-size: 1.5rem;
        margin-bottom: 0.7rem;
        border-bottom: 1px solid gray;
    }
</style>

