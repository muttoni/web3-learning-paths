<script>
  export let type;
  export let name;
</script>

<style>
  .trophy {
    display:inline-block;
    border: 1px solid var(--card-border-color);
    padding: 1rem;
    text-align: center;
    border-radius:20px;
    
  }

  h3 {
    text-transform: capitalize;
    font-size: 1.2rem;
  }

  span {
    font-size: 0.7rem;
    line-height: 1;
  }
  img {
    width: 3rem;
  }

</style>

<div class="trophy">
<img src="/{type}-trophy.png" alt="{type} trophy" />
<h3 class="m-0">{name || type}</h3>
<span>Completed {type} modules!</span>
</div>