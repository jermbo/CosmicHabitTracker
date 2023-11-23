<template>
	<div class="habits-wrapper">
		<DatePicker />
		<button @click="addHabit">Add Habit</button>

		<template v-if="habits?.length > 0">
			<div v-for="habit in habits" :key="habit.timestamp">
				{{ habit.energy }} - {{ habit.timestamp }} - {{ habit.mood }}
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import DatePicker from '@components/DatePicker/DatePicker.vue';
import { useHabitsStore } from '@stores/HabitsStore';

const { habits, addHabit } = useHabitsStore();
</script>

<style scoped></style>
