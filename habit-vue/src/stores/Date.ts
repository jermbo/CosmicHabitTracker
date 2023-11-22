import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useDateStore = defineStore('habit-date', () => {
	// Properties
	const now = new Date();
	const activeMonth = ref(now.getMonth());
	const activeYear = ref(now.getFullYear());

	const activeMonthName = computed(() =>
		new Date(activeYear.value, activeMonth.value).toLocaleString('default', {
			month: 'long'
		})
	);

	const datesInMonth = computed(() => {
		const dates = [];
		const monthStart = new Date(activeYear.value, activeMonth.value, 1);
		const monthEnd = new Date(activeYear.value, activeMonth.value + 1, 0);

		for (let start = monthStart; start <= monthEnd; start.setDate(start.getDate() + 1)) {
			const dayNum = start.getDate();
			const dateStamp = new Date(activeYear.value, activeMonth.value, dayNum);
			const weekday = dateStamp.toLocaleString('default', { weekday: 'short' });
			const day = dateStamp.toLocaleString('default', { day: '2-digit' });

			dates.push({
				weekday,
				day
			});
		}

		return dates;
	});

	// Methods
	const prevMonth = () => {
		activeMonth.value = activeMonth.value === 0 ? 11 : activeMonth.value - 1;
		activeYear.value -= activeMonth.value === 11 ? 1 : 0;
	};

	const nextMonth = () => {
		activeMonth.value = activeMonth.value === 11 ? 0 : activeMonth.value + 1;
		activeYear.value += activeMonth.value === 0 ? 1 : 0;
	};

	return { now, activeMonthName, activeYear, datesInMonth, prevMonth, nextMonth };
});
