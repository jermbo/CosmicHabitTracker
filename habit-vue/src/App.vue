<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Welcome</RouterLink>
				<RouterLink to="/habit">Habit</RouterLink>
			</nav>
		</div>
	</header>

	<main>
		<RouterView />
	</main>
</template>

<script setup lang="ts"></script>

<style scoped>
.main {
	display: grid;
}
</style>
