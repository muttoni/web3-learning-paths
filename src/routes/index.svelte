<script context="module">
  export const prerender = true;
</script>

<script>
  import { selectedLearningImportance } from '$lib/stores';
  import ResourcesContainer from '$lib/components/ResourcesContainer.svelte';

</script>

<svelte:head>
<title>Intro to Web3</title>
</svelte:head>

<style>
  .mega {
    font-size: 2.5em;
    text-align:center;
    line-height: 1;
  }

  .jumbo {
    padding: 1rem 0rem;
  }
</style>

<div class="mb-2">
  <!-- <hgroup>
    <h1>Your Web3 Learning Roadmap</h1>
    <h2>Select how much time you have, and cross off things as you complete them (no account required)</h2>
  </hgroup> -->
  
  <h1 class="mb-1 mega">Your Web3 Learning Roadmap</h1>

  <div class="grid flex">
    <button on:click={() => $selectedLearningImportance = 0} class="jumbo { $selectedLearningImportance === 0 ? "primary" : "outline"}">Essential <span>~1 hour</span></button>
    <button on:click={() => $selectedLearningImportance = 1} class="jumbo { $selectedLearningImportance === 1 ? "primary" : "outline"}">Recommended <span>~1 day</span></button>
    <button on:click={() => $selectedLearningImportance = 2} class="jumbo { $selectedLearningImportance === 2 ? "primary" : "outline"}">Complete <span>~1 week</span></button>
  </div>  
  
</div>

<ResourcesContainer />
