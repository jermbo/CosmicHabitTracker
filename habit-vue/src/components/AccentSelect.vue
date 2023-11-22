<template>
	<fieldset class="radio-wrapper">
		<legend>Custom Accent</legend>
		<div class="radio">
			<input
				type="radio"
				v-model="selectedAccent"
				name="customColor"
				id="primary"
				value="primary"
				@change="onAccentSelected('primary')"
			/>
			<div class="check"></div>
			<label for="primary">Primary</label>
		</div>
		<div class="radio">
			<input
				type="radio"
				v-model="selectedAccent"
				name="customColor"
				id="accent1"
				value="accent1"
				@change="onAccentSelected('accent1')"
			/>
			<div class="check"></div>
			<label for="accent1">Accent 1</label>
		</div>
		<div class="radio">
			<input
				type="radio"
				v-model="selectedAccent"
				name="customColor"
				id="accent2"
				value="accent2"
				@change="onAccentSelected('accent2')"
			/>
			<div class="check"></div>
			<label for="accent2">Accent 2</label>
		</div>
	</fieldset>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { THEME_KEYS } from '@utils/constants';

// Define reactive data
const selectedAccent = ref('primary');

// Define methods
function onAccentSelected(accent: string) {
	selectedAccent.value = accent;
	localStorage.setItem(THEME_KEYS.ACCENT, accent);
	document.body.style.setProperty('--customColor', `var(--${accent})`);
}

// Retrieve data from local storage on component mount
onMounted(() => {
	const storedAccent = localStorage.getItem(THEME_KEYS.ACCENT);
	if (storedAccent) {
		selectedAccent.value = storedAccent;
	}
});
</script>

<style scoped></style>
