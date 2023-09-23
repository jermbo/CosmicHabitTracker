<template>
	<h1 class="logo-wrapper">
		<router-link class="logo" :to="{ name: 'welcome' }">
			<span>Cosmic</span>
			<span>Habit Tracker</span>
		</router-link>
	</h1>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo-wrapper {
	position: relative;
	margin: 0;
	font-size: var(--fs-2xl);
	container: logo/inline-size;
}

.logo {
	color: var(--text);
	border-radius: var(--round-md);
	text-decoration: none;
	padding-block-start: 1rem;
	padding-inline: 0.5rem;

	&:focus-visible,
	&:hover {
		& span {
			&:nth-child(1) {
				color: var(--text);
			}
			&:nth-child(2) {
				color: var(--customColor);
			}
		}
	}

	& span {
		transition: color 0.25s ease;
		background-color: var(--bkg);
		-webkit-text-stroke: 0.15em transparent;
		-webkit-background-clip: text;
		background-clip: text;

		&:nth-child(1) {
			position: absolute;
			color: var(--customColor);
			font-family: 'Caveat', serif;
			font-size: 0.75em;
			translate: 35% -10%;
			rotate: -5deg;
		}

		&:nth-child(2) {
			position: relative;
			padding-block-start: 0.8rem;
			padding-inline-end: 0.5rem;
			display: inline-block;
			letter-spacing: -2px;
		}
	}
}

@container logo (width <= 190px) {
	.logo {
		padding-block-start: 1rem;
		padding-inline: 0;

		& span {
			background-color: var(--bkg);
			-webkit-text-stroke: 0.15em transparent;
			-webkit-background-clip: text;
			background-clip: text;

			&:nth-child(1) {
				translate: 30% 90%;
				z-index: 1;
			}
			&:nth-child(2) {
				padding-block-start: 0;
			}
		}
	}
}
</style>
