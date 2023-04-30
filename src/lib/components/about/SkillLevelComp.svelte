<script>
    import { onMount } from 'svelte';
    export let filled = 1;
    /** @type {import('./$types').PageData}*/
    export let captions;
    export let fillColour 

    onMount(() => {
       
    })
    
</script>
<div class="sl-comp">
    {#each Array(filled) as _, i}
    <svg width="29.816mm" height="29.816mm" version="1.1" viewBox="0 0 29.816 29.816" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-38.717 -39.695)">
         <circle cx="53.625" cy="54.603" r="13.608" style="fill:{fillColour}"/>
        </g>
    </svg>
       <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg> -->
       
        <!-- <svg width="64.391mm" height="91.815mm" version="1.1" viewBox="0 0 64.391 91.815" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-24.511 -77.587)">
             <rect transform="matrix(1 0 -.37932 .92526 0 0)" x="94.706" y="84.935" width="25.258" height="97.069" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1624" style="paint-order:stroke markers fill"/>
            </g>
        </svg> -->
           
    {/each}
</div>
<div class="captions">{captions}</div>




<style>
    .sl-comp {
        display:flex;
        flex-direction: row;

    }

    

    svg {
        margin-right:1rem;
        height:2rem;
        width:2rem;
    }

    .captions {
        margin: 0.5rem 0;
        
        font-size: 1.2rem;
    }



</style>