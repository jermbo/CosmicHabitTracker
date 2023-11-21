<template>
	<section class="date-selection-wrapper">
		<MonthSelect :currentMonth="monthName" :currentYear="currentYear" @prevMonth="previousMonth" />
		<Days />
	</section>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import Days from './Days.vue';
import MonthSelect from './MonthSelect.vue';

const currentDate = new Date();
const currentMonth = toRef(currentDate.getMonth());
const currentYear = toRef(currentDate.getFullYear());

const monthName = computed(() => {
	const tempDate = new Date();
	return currentMonth.value.toLocaleString('default', { month: 'long' });
});

const previousMonth = () => {
	// const currentMonthIndex = new Date(`${currentMonth.value} 1, ${currentYear.value}`).getMonth();
	// console.log({ currentMonthIndex });
	// const previousMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
	// console.log({ previousMonthIndex, test: `${currentYear.value}-${previousMonthIndex + 1}-01` });
	// const previousMonth = new Date(
	// 	`${currentYear.value}-${previousMonthIndex + 1}-01`
	// ).toLocaleString('default', { month: 'long' });
	// currentMonth.value = previousMonth;
	// console.log(currentMonth);
	const prevMonth = currentMonth.value > 0 ? currentMonth.value - 1 : 11;
	const prevYear = prevMonth === 11 ? currentYear.value - 1 : currentYear.value;
	currentMonth.value = prevMonth;
	currentYear.value = prevYear;
};
</script>

<style scoped></style>
