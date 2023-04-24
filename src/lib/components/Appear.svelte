<script>
import { inview } from 'svelte-inview'
import anime from 'animejs'
import { onMount } from 'svelte';

let animNameEnter
let animNameExit

onMount(()=> {
    animNameEnter = anime({
        targets: '.holder',
        opacity: 1,

        duration: 50,            
        autoplay:false,
        easing:"easeInOutCubic",
    })

    animNameExit = anime({
        targets: '.holder',
        opacity: 0,
        duration: 50,            
        autoplay:false,
        easing:"easeInOutCubic",
    })
})

let flipped = false
export let stylings = ""

const options = {
    rootMargin:"-50%",

};

</script>

<div class="holder" use:inview={options}    
    on:inview_enter={(event) =>  { 
        if (flipped) {
            animNameEnter.reverse()
            flipped = false
        }
        animNameEnter.play()
        
        console.log(event.detail.inView)

    }}
    on:inview_leave={(event) => {

            animNameEnter.reverse()
            animNameEnter.play()
            flipped = true
        console.log(event.detail.inView)
    }}
    style="{stylings}"
>


<slot></slot>
</div>


<style>
    .holder {
        opacity: 0;
    }

</style>