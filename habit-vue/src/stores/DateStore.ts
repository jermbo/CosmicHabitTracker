import { DateInfo } from '@utils/interfaces';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { scrollToActiveDate } from '@/utils/scrollToActiveDate';

export const useDateStore = defineStore('habit-date', () => {
	// Properties
	const now = new Date();
	const activeMonth = ref(now.getMonth() + 1);
	const activeYear = ref(now.getFullYear());
	const activeDate = ref(now.getDate());

	const activeMonthName = computed(() =>
		new Date(activeYear.value, activeMonth.value - 1).toLocaleString('default', {
			month: 'long'
		})
	);

	const activeDateStamp = computed(() => {
		return `${activeYear.value}-${activeMonth.value}-${activeDate.value}`;
	});

	const datesInMonth = computed<DateInfo[]>(() => {
		const dates: DateInfo[] = [];
		const monthStart = new Date(activeYear.value, activeMonth.value, 1);
		const monthEnd = new Date(activeYear.value, activeMonth.value + 1, 0);

		for (let start = monthStart; start <= monthEnd; start.setDate(start.getDate() + 1)) {
			const dayNum = start.getDate();
			const dateStamp = new Date(activeYear.value, activeMonth.value, dayNum);
			const weekday = dateStamp.toLocaleString('default', { weekday: 'short' });
			const day = +dateStamp.toLocaleString('default', { day: '2-digit' });

			dates.push({
				weekday,
				day
			});
		}

		return dates;
	});

	// Methods
	const prevMonth = () => {
		activeMonth.value = activeMonth.value === 0 ? 12 : activeMonth.value - 1;
		activeYear.value -= activeMonth.value === 12 ? 1 : 0;
		activeDate.value = 1;
		scrollToActiveDate();
	};

	const nextMonth = () => {
		activeMonth.value = activeMonth.value === 12 ? 0 : activeMonth.value + 1;
		activeYear.value += activeMonth.value === 0 ? 1 : 0;
	};

	const setDate = (date: DateInfo) => {
		activeDate.value = date.day;
		scrollToActiveDate();
	};

	return {
		now,
		activeMonthName,
		activeYear,
		activeDate,
		datesInMonth,
		activeDateStamp,
		prevMonth,
		nextMonth,
		setDate
	};
});
