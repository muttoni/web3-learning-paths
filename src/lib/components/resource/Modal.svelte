<script>
  let modal;

  export let showModal;
  export let resource = {
    name: "Flow Technical Primer",
    description: "Get a foundational understand of how Flow works",
    author: "Flow Core Contributors",
    goal: "Understand Flow",
    learningType: "foundational",
    contentType: ["article"],
    tags: ["foundational", "why flow"],
    duration: 15,
    importance: 0,
    src: "https://www.onflow.org/primer"
  };
</script>
<dialog open bind:this={modal}>
  <article>
    <header>
      <button on:click={() => showModal = false} aria-label="Close" class="close"></button>
      {resource.name}
    </header>
    <a role="button" href="{resource.src}">Visit resource</a>
  </article>
</dialog>