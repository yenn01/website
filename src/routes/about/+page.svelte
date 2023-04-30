<script>
import { onMount } from "svelte";
import { NameSection, SkillsSection } from "$lib/components";

import {store_showHeader,store_showHeaderLogo} from '$lib/stores/showHeader.js'
	
export let data
onMount(() => {
    $store_showHeader = 9999;
    $store_showHeaderLogo = true;
    console.log($store_showHeader)
})



</script>

<style>
    .cont-about {
        display:flex;
        margin-top: 10%;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
    }


    .top-displacer {
        height:10vh;
    }




</style>

<div class="cont-about">
    <div class="top-displacer"></div>
    <NameSection></NameSection>
    <SkillsSection skillLevelData={data.body}></SkillsSection>
    <div class="cont-philosophy"></div>
</div>
