<script>
import { onMount } from "svelte";
import { NameSection, SkillsSection } from "$lib/components";

import {store_showHeader,store_showHeaderLogo} from '$lib/stores/showHeader.js'

onMount(() => {
    $store_showHeader = 9999;
    $store_showHeaderLogo = true;
})



</script>

<style>
    .cont-about {
        display:flex;
        margin-top: 10%;
        flex-direction: column;
        justify-content: center;
    }


    .top-displacer {
        height:10vh;
    }




</style>

<div class="cont-about">
    <div class="top-displacer"></div>
    <NameSection></NameSection>
    <SkillsSection></SkillsSection>
    <div class="cont-philosophy"></div>
</div>
