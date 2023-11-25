<template>
	<div class="days-wrapper">
		<template v-for="date in datesInMonth" :key="date.day">
			<div class="day">
				<input
					type="radio"
					name="day"
					@input="setDate(date)"
					:id="`${date.day}`"
					:checked="activeDate === date.day"
				/>
				<label :for="`${date.day}`" :class="`${activeDate === date.day ? 'active' : ''}`">
					<span class="date">
						<span>{{ date.weekday }}</span>
						<span>{{ date.day }}</span>
					</span>
					<span class="mood">😐</span>
				</label>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import { scrollToActiveDate } from '@/utils/scrollToActiveDate';
import { useDateStore } from '@stores/DateStore';
import { onMounted, toRefs } from 'vue';

const { datesInMonth, activeDate, setDate } = toRefs(useDateStore());

onMounted(() => {
	scrollToActiveDate();
});
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
	position: relative;
}

input[type='radio'] {
	position: absolute;
	z-index: 0;
	top: 50%;
	left: 50%;

	&:focus-visible + label {
		box-shadow: var(--outline);
	}
}

label {
	border-radius: var(--round-md);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-md);
	border: 0;
	padding: 0;
	transition: var(--transition);
	z-index: 10;
	position: relative;
}

label:hover,
.active {
	scale: 1.1;

	.date {
		filter: invert(1);
		opacity: 0.75;
	}
}

.date {
	border-radius: var(--round-md);
	padding: var(--space-md);
	background: var(--bkg);
	display: flex;
	flex-direction: column;
	min-width: 60px;
	text-align: center;

	& span:nth-child(2) {
		font-weight: bold;
		font-size: 1.75em;
	}
}
</style>
