<script>
  export let type;
  export let name;
  export let active;
</script>

<style>
  .trophy {
    display:inline-block;
    border: 1px solid var(--card-border-color);
    padding: 1rem;
    text-align: center;
    border-radius:20px;
    opacity:0.2;
    filter: grayscale(1);
    margin: 0 0.2rem 0.4rem 0;
    
  }

  trophy.active {
    opacity: 1;
    filter: grayscale(0);
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

<div class="trophy" class:active>
<img src="/{type}-trophy.png" alt="{type} trophy" />
<h3 class="m-0">{name || type}</h3>
<span>{active ? "Completed" : "Earn by completing"} {type} modules!</span>
</div>