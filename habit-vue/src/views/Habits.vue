<template>
	<div class="habits-wrapper">
		<DatePicker />
		<button @click="addHabit">Add Habit</button>
	</div>
</template>

<script setup lang="ts">
import DatePicker from '@components/DatePicker/DatePicker.vue';
import { useHabitsStore } from '@stores/Habits';

const { habits, addHabit } = useHabitsStore();
console.log(habits);
</script>

<style scoped></style>
