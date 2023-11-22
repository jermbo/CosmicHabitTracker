<template>
	<section class="date-selection-wrapper">
		<MonthSelect />
		<Days />
	</section>
</template>

<script setup lang="ts">
import Days from './Days.vue';
import MonthSelect from './MonthSelect.vue';
</script>

<style scoped></style>
