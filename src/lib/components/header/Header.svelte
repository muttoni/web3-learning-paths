<script>
	import { page } from '$app/stores';
	import logo from './flow-logo.svg';
  import { resourcesProgress } from '$lib/stores';
  import { formatPercent } from '$lib/utils'

</script>

<div class="hero" data-theme="dark">
  <nav class="container-fluid">
    <ul>
      <li>
        <a href="/">
          <img src={logo} alt="Flow" />
        </a>
      </li>
    </ul>
    <ul>
      <li class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>

      <li class="highlight" class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/progress"><strong>{formatPercent($resourcesProgress)}%</strong> Progress</a>
      </li>
    </ul>
  </nav>

</div><!-- ./ Hero -->


<style>

	img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

  .highlight {
    border: 1px solid var(--primary);
    border-radius: var(--border-radius);
    padding: 0.3rem 0.75rem;
  }

  li:first-child {
    margin-right: 20px;
  }

</style>
