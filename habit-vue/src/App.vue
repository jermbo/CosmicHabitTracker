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
import { onMounted } from 'vue';
import Header from '@components/Header.vue';
import Nav from '@components/Nav.vue';
import { THEME_KEYS } from '@utils/constants';

onMounted(() => {
	const storedRounded = localStorage.getItem(THEME_KEYS.CORNERS);
	if (storedRounded) {
		document.body.setAttribute('data-round', storedRounded);
	}

	const storedTheme = localStorage.getItem(THEME_KEYS.COLOR);
	if (storedTheme) {
		document.body.setAttribute('data-theme', storedTheme);
	}

	const storedAccent = localStorage.getItem(THEME_KEYS.ACCENT);
	if (storedAccent) {
		document.body.style.setProperty('--customColor', `var(--${storedAccent})`);
	}
});
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
