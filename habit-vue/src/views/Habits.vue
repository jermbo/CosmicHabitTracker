<template>
	<div class="habits-wrapper">
		<DatePicker />
		<DailyCheckin />
	</div>
</template>

<script setup lang="ts">
import DatePicker from '@components/DatePicker/DatePicker.vue';
import DailyCheckin from '@/components/DailyCheckin.vue';
</script>

<style scoped></style>
