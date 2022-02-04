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

  {#if $completedEssential}
    <Trophy type="essential" />
  {/if}

  {#if $completedRecommended}
  <Trophy type="recommended" />
  {/if}

  {#if $resourcesProgress >= 1}
  <Trophy type="all" name="Finisher"/>
  {/if}

  <footer>
    {#if $resourcesProgress >= 1}
    <a href="/">Congrats! Click here to claim your exclusive Web3 NFT!</a>
    {:else}
    Complete 100% of the learning path to qualify for an exclusive NFT!
    {/if}
  
  </footer>
</article>