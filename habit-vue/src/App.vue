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
import { ACCENT_KEY, ROUNDED_KEY, THEME_KEY } from '@utils/constants';

onMounted(() => {
	const storedRounded = localStorage.getItem(ROUNDED_KEY);
	if (storedRounded) {
		document.body.setAttribute('data-round', storedRounded);
	}

	const storedTheme = localStorage.getItem(THEME_KEY);
	if (storedTheme) {
		document.body.setAttribute('data-theme', storedTheme);
	}

	const storedAccent = localStorage.getItem(ACCENT_KEY);
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
