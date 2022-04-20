<script>
  import Progress from '$lib/components/Progress.svelte';
  import Trophy from '$lib/components/Trophy.svelte';
  import { resourcesProgress, resourcesCompleted, resourcesTotal, completedEssential, completedRecommended } from '$lib/stores';
  import { formatPercent } from '$lib/utils';
  import confetti from 'canvas-confetti';
  import { onMount } from 'svelte';
  
  onMount(() => {
    if($resourcesProgress >= 1) {
      confetti();
    }
  })
  
</script>
<article>
  <header><h1>Your Progress is {formatPercent($resourcesProgress)}%</h1></header>
  
  <Progress />
  <small>
    You completed <strong>{$resourcesCompleted}</strong> out of the <strong>{$resourcesTotal}</strong> resources available.
  </small>
  
  <h2 class="mt-1">Achievements</h2>
  
  
  <Trophy type="essential" active={$completedEssential} />
  <Trophy type="recommended" active={$completedRecommended}/>
  <Trophy type="all" name="Finisher" active={$resourcesProgress >= 1} />
    
    <footer style="text-align:center;">
      {#if $resourcesProgress >= 1}
      <a href="https://floats.city/andrea.find/event/198642442">
        <img src="/qrcode.png" style="width:200px; height:auto;" /><br/><br/>
        Congrats! Click here to claim your exclusive NFT!
      </a>
      {:else}
      Complete the roadmap to get your exclusive proof-of-participation NFT!
      {/if}
    </footer>
  </article>