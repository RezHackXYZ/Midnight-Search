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
	#root {
		height: 100%;
		width: 100%;
		background-color: black;
		color: white;
	}
</style>
