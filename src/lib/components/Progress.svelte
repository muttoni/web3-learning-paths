<script>
  import { resourcesProgress } from '$lib/stores';
</script>

<progress value="{$resourcesProgress * 100}" max="100"></progress>