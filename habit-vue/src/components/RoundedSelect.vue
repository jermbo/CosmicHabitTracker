<template>
	<div class="switch-wrapper">
		<input
			type="checkbox"
			id="round"
			name="round"
			v-model="isRounded"
			@change="onRoundedSelected"
		/>
		<label for="round" class="switch-label">Toggle Round</label>
		<div class="switch">
			<span>Squared</span>
			<div class="thumb"></div>
			<span>Rounded</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { THEME_KEYS } from '@utils/constants';

// Define reactive data
const isRounded = ref(false);

// Define methods
function onRoundedSelected() {
	localStorage.setItem(THEME_KEYS.CORNERS, isRounded.value.toString());
	document.body.setAttribute('data-round', isRounded.value.toString());
}

// Retrieve data from local storage on component mount
onMounted(() => {
	const storedRounded = localStorage.getItem(THEME_KEYS.CORNERS);
	if (storedRounded) {
		isRounded.value = storedRounded === 'true';
	}
});
</script>

<style scoped></style>
