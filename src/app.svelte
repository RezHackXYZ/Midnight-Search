<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/home.svelte";
	import config from "./pages/config.svelte";
	let routes = {
		"/": Home,
		"/config": config,
	};

	import Nav from "./nav.svelte";
</script>

<div id="root">
	<Nav />
	<Router {routes} />
</div>

<style>
	:root {
		background-color: black;
		color: white;
	}

	#root {
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 0;
	}
</style>
