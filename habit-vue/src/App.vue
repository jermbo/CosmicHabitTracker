<template>
	<div class="primary-header">
		<Header />
		<Nav />
	</div>
	<main class="main">
		<RouterView />
	</main>
</template>

<script setup lang="ts">
import Header from '@components/Header.vue';
import Nav from '@components/Nav.vue';
</script>

<style>
.primary-header {
	padding: var(--space-md);
	container: header/inline-size;
}

.page-title {
	margin: 0;
	font-size: var(--fs-xl);
}

.section-title {
	margin: 0;
	font-size: var(--fs-lg);
}
</style>
