<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<article>
  <header><h1>About this resource</h1></header>

  <p>
		This resource outlines a roadmap to get up and running with Web3. Resources are categorized so as to cater to different time investments developers curious about Flow/Web3 may have at their disposal: 1 hour, 1 day, 1 week. The goal of these learning paths is to provide the maximum amount of value for the minimum amount of time, to get you building on testnet as quickly as possible, without sacrificing basic foundational knowledge. 
	</p>

  <footer>
    Want to contribute? <a href="https://github.com/muttoni/web3-learning-paths">Make a PR on Github!</a>
  </footer>
</article>