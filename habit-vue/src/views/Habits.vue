<template>
	<div class="habits-wrapper">
		<DatePicker />
		<button @click="addHabit">Add Habit</button>
		<button @click="seedIndexedDB">Seed Habits</button>

		<template v-if="habits?.length > 0">
			<div v-for="habit in habits" :key="habit.timestamp">
				{{ habit.energy }} - {{ habit.timestamp }} - {{ habit.mood }}
			</div>
		</template>
		<DailyCheckin />
	</div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import DatePicker from '@components/DatePicker/DatePicker.vue';
import { useHabitsStore } from '@stores/HabitsStore';
import DailyCheckin from '@/components/DailyCheckin.vue';

const { habits, addHabit, seedIndexedDB } = toRefs(useHabitsStore());
</script>

<style scoped></style>
