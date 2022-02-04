<script>
  // contentType: [""], // article, code, video, docs

  export let type;

  import Article from '$lib/components/icons/Article.svelte';
  import Code from '$lib/components/icons/Code.svelte';
  import Docs from '$lib/components/icons/Docs.svelte';
  import Video from '$lib/components/icons/Video.svelte';

  let icons = {
    article : Article,
    code : Code,
    docs : Docs,
    video : Video
  }
</script>

<style>
.icon {
  margin-right: 0.1rem;
}

.text {
  font-size: 0.8rem;
}
</style>

{#each type as t}
<span class="icon">
  <svelte:component this={icons[t]}></svelte:component>
</span>
{/each}

