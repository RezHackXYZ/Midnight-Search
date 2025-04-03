<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/home.svelte";
	import a from "./pages/a.svelte";
	import b from "./pages/b.svelte";
	import c from "./pages/c.svelte";
	let routes = {
		"/": Home,
		"/a": a,
		"/b": b,
		"/c": c,
	};

	import Nav from "./nav.svelte";
</script>

<Nav />
<Router {routes} />
