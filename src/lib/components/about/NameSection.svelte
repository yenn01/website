<script>
import { onMount } from "svelte";
import { Appear } from "$lib/components"
// import { chart } from "svelte-apexcharts";

  let g_options = {
    chart: {
      type: "radar",
      height: 500,
      toolbar: {
        show:false,
      }
    },
    fill: {
        opacity:0.50,
        colors:['#a6dcef']
    },
    stroke: {
        colors:['#b3b8ff']
    },
    markers: {
        colors:['#fa8686']
    },
    series: [
      {
        name: "Skill",
        data: [8,8,8,6,7],
      },
    ],
    xaxis: {
      categories: ['Data Science','Web Dev','Writing','Graphic Designing','Blockchain'],
      labels: {
        style: {
            fontSize: "18px",
            fontWeight: 800,
            colors:['#5A5A5A','#5A5A5A','#5A5A5A','#5A5A5A','#5A5A5A'],
            opacity:1
        }
      }
    },
    yaxis: {
        tickAmount: 5,
        min:0,
        max:10,        
    }
  };

  onMount(async () => {
    const ApexCharts = (await import('apexcharts')).default
    const chart = new ApexCharts(container, g_options)
    chart.render()
    })

    let container
</script>


<Appear 
stylings="display:flex;
          "
                        >
    <div class="graph-holder">
        <!-- <div use:chart={g_options}/> -->
        <div bind:this = {container}></div>
    </div>
    <div class="name-holder">
        <h1 style="margin-bot:0;">Yenn Miing</h1>
        <h2 style="margin-top:0;">Ooi</h2>
        <p>Hi there, I am a data scientist 👨‍💻 with experience in web development &#40;mostly Svelte&#41;.
            I ❤️ learning and have picked up a versatile skillset including graphic designing, basic video editing, CAD and writing.            
        </p>
        <p>Passionate about <i>Blockchain</i>, <i>Artificial Intelligence</i>, <i>Machine Learning</i>, <i>Fintech</i>, <i>Coffee</i> ☕, <i>Food</i> 🍜 and <i>Mechanical Keyboards</i> ⌨️.</p>
    </div>
</Appear>



<style>



    .name-holder {
        flex-grow:1;

    }

    .graph-holder {
        flex-grow: 3;
        flex-shrink: 0;
        flex-basis:600px;
    }

    p {
        
        text-align: justify;
    }

    h1 {
        font-size: 6rem;
        font-family: 'Inter';
        /* text-transform: uppercase; */
        text-align: right;
        margin-bottom: 0;
    }

    h2 {
        font-size: 4rem;
        font-family: 'Inter';
        /* text-transform: uppercase; */
        text-align: right;
        color:grey;
        margin-bottom:0.6rem;
    }


</style>