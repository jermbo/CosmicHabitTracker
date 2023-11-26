<template>
	<section class="daily-checkin-wrapper">
		<p class="section-title">Daily check-in</p>
		<div class="habits" style="--habits: 10">
			<article class="habit" v-if="activeHabit">
				<header class="habit-header">
					<i class="habit-icon">💧</i>
					<p>Water</p>
				</header>
				<div class="habit-data">
					<p>{{ activeHabit.glassesOfWater }} of 10</p>
				</div>
				<footer class="habit-actions">
					<button class="sub">-</button>
					<button class="add">+</button>
				</footer>
			</article>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useHabitsStore } from '@/stores/HabitsStore';
import { toRefs } from 'vue';

const { activeHabit } = toRefs(useHabitsStore());
</script>

<style scoped>
.daily-checkin-wrapper {
	display: flex;
	flex-direction: column;
	gap: var(--space-sm);
}

.habits {
	display: grid;
	grid-template-columns: repeat(var(--habits, 5), 150px);
	gap: var(--space-sm);
	width: 100%;
	overflow-y: auto;
}

.habit {
	border-radius: var(--round-md);
	background: var(--bkg);
	padding: var(--space-md);
	display: grid;
	gap: 0;
	grid-template-rows: 1fr 130px 25px;
}

.habit-header {
	display: flex;
	justify-content: center;
	align-items: center;
	text-wrap: balance;
	gap: var(--space-sm);
}

.habit-chart-wrapper {
	width: 100%;
}

.circle-chart {
}

.circle-complete {
	animation: circle-chart-fill 2s reverse;
	transform: rotate(-90deg);
	transform-origin: center;
}

.chart-number {
	fill: var(--text);
	font-size: 8px;
}

.chart-unit {
	fill: var(--text);
	font-size: 4px;
}

.habit-actions {
	display: flex;
	margin-inline: auto;
}

button {
	background: var(--bkg-alt);
	display: inline-block;
	padding-inline: var(--space-md);
	transition: var(--transition);
	outline: 1px solid transparent;

	&:hover {
		background: var(--bkg);
		outline-color: var(--customColor);
	}
}

.sub {
	border-radius: var(--round-full) 0 0 var(--round-full);
}
.add {
	border-radius: 0 var(--round-full) var(--round-full) 0;
}
</style>
