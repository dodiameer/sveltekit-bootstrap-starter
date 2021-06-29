<script lang="ts">
  import { onMount } from 'svelte';
	import '../app.scss';
	const BRAND_NAME = 'SvelteBootsrap';

  /* Load Bootstrap on mount 
  ? because it relies on "document" being present
  ? Stored in "window.bootsrap" - components rely on this value
  */
	onMount(async () => {
		(window as any).bootstrap = await import('bootstrap');
	});
</script>

<div id="content-wrapper">
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container">
			<a href="/" class="navbar-brand">{BRAND_NAME}</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#mainNavbar"
				aria-controls="mainNavbar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="mainNavbar">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item"><a href="/" class="nav-link">Home</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<main>
		<slot />
	</main>
	<footer class="bg-secondary text-light py-3">
		<div class="container">
			<div class="row">
				<div class="col-lg-8"><p class="h3">Created with love by {BRAND_NAME}!</p></div>
				<div class="col-lg-4">
					<p class="h3">Quick navigation</p>
					<ul class="list-group list-group-flush list-group-secondary">
						<li class="list-group-item list-group-item-action">
							<a href="/">Home</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>

<style lang="scss">
	#content-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		& > main {
			flex: 1;
		}
	}
</style>
