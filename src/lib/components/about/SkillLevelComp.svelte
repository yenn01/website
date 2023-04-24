<script>
    export let filled = 1;
</script>
<div class="sl-comp">
    {#each Array(filled) as _, i}
        <p>SVH</p>
    {/each}
</div>




<style>
    .sl-comp {
        display:flex;
        flex-direction: column;
    }

</style>