<template>
	<div>
		<fieldset class="radio-wrapper">
			<legend>Select a theme:</legend>
			<div class="radio">
				<input
					type="radio"
					name="theme"
					id="system"
					v-model="selectedTheme"
					value="system"
					@change="onThemeSelected('system')"
				/>
				<div class="check"></div>
				<label for="system">System</label>
			</div>
			<div class="radio">
				<input
					type="radio"
					name="theme"
					id="light"
					v-model="selectedTheme"
					value="light"
					@change="onThemeSelected('light')"
				/>
				<div class="check"></div>
				<label for="light">Light</label>
			</div>
			<div class="radio">
				<input
					type="radio"
					name="theme"
					id="dark"
					v-model="selectedTheme"
					value="dark"
					@change="onThemeSelected('dark')"
				/>
				<div class="check"></div>
				<label for="dark">Dark</label>
			</div>
			<div class="radio">
				<input
					type="radio"
					name="theme"
					id="dracula"
					v-model="selectedTheme"
					value="dracula"
					@change="onThemeSelected('dracula')"
				/>
				<div class="check"></div>
				<label for="dracula">Dracula</label>
			</div>
			<div class="radio">
				<input
					type="radio"
					name="theme"
					id="material"
					v-model="selectedTheme"
					value="material"
					@change="onThemeSelected('material')"
				/>
				<div class="check"></div>
				<label for="material">Material</label>
			</div>
		</fieldset>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { THEME_KEYS } from '@utils/constants';

// Define reactive data
const selectedTheme = ref('system');

// Define methods
function onThemeSelected(theme: string) {
	selectedTheme.value = theme;
	localStorage.setItem(THEME_KEYS.COLOR, theme);
	document.body.setAttribute('data-theme', theme);
}

// Retrieve data from local storage on component mount
onMounted(() => {
	const storedTheme = localStorage.getItem(THEME_KEYS.COLOR);
	if (storedTheme) {
		selectedTheme.value = storedTheme;
	}
});
</script>

<style>
/* Your component's styles go here */
</style>
