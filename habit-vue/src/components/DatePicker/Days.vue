<template>
	<div class="days-wrapper">
		<template v-for="date in datesInMonth" :key="date.day">
			<button class="day">
				<span class="date">
					<span>{{ date.weekday }}</span>
					<span>{{ date.day }}</span>
				</span>
				<span class="mood">😐</span>
			</button>
		</template>
	</div>
</template>

<script setup lang="ts">
import { useDateStore } from '@stores/Date';
import { toRefs } from 'vue';

const { datesInMonth } = toRefs(useDateStore());
</script>

<style scoped>
.days-wrapper {
	display: flex;
	gap: var(--space-md);
	overscroll-behavior: contain;
	scroll-behavior: smooth;
	overflow: auto;
	padding: var(--space-md);
}

.day {
	border-radius: var(--round-md);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-md);
	border: 0;
	padding: 0;
	transition: var(--transition);

	&:focus-visible,
	&:hover {
		box-shadow: var(--outline);
	}
}

.current {
	box-shadow: var(--outline);
}

.date {
	border-radius: var(--round-md);
	display: inline-block;
	padding: var(--space-md);
	background: var(--bkg);
	display: flex;
	flex-direction: column;

	& span:nth-child(2) {
		font-weight: bold;
		font-size: 1.75em;
	}
}
</style>
