<template>
	<nav class="primary-nav-wrapper">
		<ul class="primary-nav">
			<li class="primary-nav-item">
				<router-link to="/habits"><span>🏠</span> Habits</router-link>
			</li>
			<li class="primary-nav-item">
				<router-link to="/dashboard"><span>📊</span> Dashboard</router-link>
			</li>
			<li class="primary-nav-item">
				<router-link to="/settings" aria-current="page"><span>⚙️</span> Settings</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.primary-nav {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}

.primary-nav-item {
	& a {
		display: block;
		padding-inline: var(--space-sm);
		padding-block: var(--space-md);
		border-radius: var(--round-md);
		transition: var(--transition);
		color: var(--text);
		text-decoration: none;

		&:focus-visible,
		&[aria-current='page'],
		&:hover {
			background-color: var(--bkg-alt);
		}
	}
}
</style>
