<template>
	<AppHeader />
	<div class="app-content">
		<NavBar />
		<main class="projects-section">
			<div class="projects-section-header">
				<h2>Welcome User!</h2>
				<p class="time">{{ theDate }}</p>
			</div>

			<section class="projects-section-line">
				<QuickStats />
				<DisplayOptions />
			</section>

			<div class="project-boxes">
				<div class="project-box-wrapper"></div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import NavBar from '@/components/NavBar.vue';
import QuickStats from '@/components/QuickStats.vue';
import DisplayOptions from '@/components/DisplayOptions.vue';

const today = new Date();
const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
const theDate = today.toLocaleDateString('en-US', options);
</script>

<style scoped></style>
