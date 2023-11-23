<template>
	<div class="month-selector">
		<button title="Go to previous month" class="month-btn month-prev" @click="prevMonth">
			<span class="sr-only">Previous Month</span>
		</button>
		<p class="month-wrapper">
			<span class="month">{{ activeMonthName }}</span>
			<span class="year">{{ activeYear }}</span>
		</p>
		<button title="Go to next month" class="month-btn month-next" @click="nextMonth">
			<span class="sr-only">Next Month</span>
		</button>
	</div>
</template>

<script setup lang="ts">
import { useDateStore } from '@stores/DateStore';
import { toRefs } from 'vue';

const { activeMonthName, activeYear, prevMonth, nextMonth } = toRefs(useDateStore());
</script>

<style scoped>
.month-selector {
	display: flex;
	align-items: center;
	justify-content: center;
}

.month-wrapper {
	padding-inline: var(--space-sm);
	display: flex;
	flex-direction: column;
	margin: 0;
	gap: 0;
	text-align: center;
	font-size: var(--fs-lg);
	width: 125px;
}

.year {
	font-size: 0.75em;
	font-weight: 700;
	color: var(--customColor);
}

.month-btn {
	display: block;
	transition: var(--transition);
	border-radius: var(--round-md);

	&:focus-visible,
	&:hover {
		background-color: var(--customColor);
	}

	&::before {
		content: '<';
		font-weight: 700;
	}
}

.month-next {
	&::before {
		content: '>';
	}
}
</style>
