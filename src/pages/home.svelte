<div id="root">
	<div id="search">
		<img
			src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fbc262eba4225e96054abd34bc8fde3ff8e3c937_group_2.svg"
			alt="logo"
			id="logo"
		/>
		<!-- svelte-ignore a11y_autofocus -->
		<input autofocus autocomplete="off" id="input" />
	</div>
</div>

<style>
	#root {
		display: grid;
		place-items: center;
		height: 100%;
	}
	#search {
		display: flex;
		border-radius: 10px;
		justify-content: center;
		align-items: center;
		border: 1px solid white;
		padding: 5px;
		width: 60%;
	}
	#logo {
		width: 55px;
		margin-right: 10px;
		margin-left: 5px;
	}
	#input {
		background-color: black;
		border: none;
		padding: 5px;
		font-size: 40px;
		color: white;
		width: 100%;
	}

	#input:focus {
		outline: none;
	}
</style>
