<script>
  import { formatDuration } from '$lib/utils';

  import Author from '$lib/components/resource/Author.svelte';
  import ContentType from '$lib/components/resource/ContentType.svelte';
  import LearningType from '$lib/components/resource/LearningType.svelte';
  import Goal from '$lib/components/resource/Goal.svelte';
  import Tag from '$lib/components/resource/Tag.svelte';
  export let resource;


  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  function toggleCompleted() {
    console.log('toggled completed', resource.completed)
    resource.completed = !resource.completed;
    dispatch('toggleCompleted')
  }
</script>

<style>

  details {
    border: 1px solid var(--card-border-color);
    border-radius: 4px;
    padding:0;
  }
  
  summary {
    display:flex;
    align-items:center;
    justify-content: space-between;
  }

  .card {
    padding: 0.9rem 0.6rem 0.9rem 0.9rem;
  }

  .content {
    padding: 0.9rem 1.5rem;
  }
  
  
  .name {
    font-weight:bold;
    display:block;
    line-height: 1;
  }
  
  .duration, .description {
    font-weight: 300;
    font-size:0.8rem;

  }

  .info {
    padding-right: 20px;
    text-align: left;
    flex-grow: 1;
  }

  .check {
    margin-right: 10px;
  }

  .completed {
    color:var(--accordion-open-summary-color);
    text-decoration:line-through;
  }
  
  h3 {
    margin-bottom:10px;
    line-height: 1;
  }

  .duration {
    white-space: nowrap;
    margin-right: 0.4rem;
  }
</style>

<details class="mb-1 lh-1">

  <!-- Preview -->
  <summary class="card" class:completed={resource.completed}>
    <div class="check">
      <input type="checkbox" on:change={toggleCompleted} checked={resource.completed}>
    </div>
    <div class="info">
      <span class="name">
        {resource.name}
      </span>
    </div>

    <code class="duration"><small>{formatDuration(resource.duration)}</small></code>

  </summary>

  <!-- Main Content -->
  <div class="content">
    <h3>{resource.name}</h3>
    <p class="m-0 description">{resource.description}<br/><Author>{resource.author}</Author> </p>
    <p class="m-0 mt-1 flex-inline">{#each resource.tags as tag}<Tag>{tag}</Tag>{/each}</p>
    <Goal>{resource.goal}</Goal>
    <div class="tags">
  
    </div>


    <!-- ACTIONS -->
    <div class="flex">
      {#if !resource.completed}
      <a role="button" class="outline contrast me-1" target="_blank" href="{resource.src}">Start</a>
      {/if}
      <a role="button" href="/" 
        class="{resource.completed ? "" : "outline" }" 
        on:click|preventDefault={() => toggleCompleted()}>
          {resource.completed ? "Completed!" : "Mark as Complete"}
      </a>
    </div>
  </div>
</details>

<!--
  <div class="card mb-1 lh-1" class:active on:click={ () => showModal = true}>
    <input type="checkbox">
    <div>
      <span class="name">
        {resource.name}
      </span>
      <span class="description">
        {resource.description}
      </span>
    </div>
  </div>
  
  {#if showModal}
  <ResourceModal {resource} bind:showModal />
  {/if}
  
-->
