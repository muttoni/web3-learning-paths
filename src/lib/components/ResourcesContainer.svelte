<script>

  import { slide } from 'svelte/transition';
  import { resources, selectedLearningImportance } from '$lib/stores';
  import Resource from '$lib/components/Resource.svelte';


  let filterText = "";

  function filter(resource) {
    if(!filterText) return true;
    let search = filterText?.toLowerCase();
    return resource.name?.toLowerCase().includes(search)
    || resource.description?.toLowerCase().includes(search)
    || resource.tags?.join("")?.toLowerCase().includes(search)
    || resource.author?.toLowerCase().includes(search)

  }
</script>

<input type="search" id="search" name="search" placeholder="Search" bind:value={filterText}>

{#each $resources as resource, index}
  {#if resource?.importance <= $selectedLearningImportance && filter(resource, filterText)}
  <div in:slide|local out:slide|local>
    <!-- <Resource {resource} active={resource.importance <= $selectedLearningImportance} /> -->
    <Resource bind:resource={resource} />
  </div>
  {/if}
{/each}