<template>
	<aside>
		<div class="settings-wrapper">
			<h2 class="h3">Custom Site Settings</h2>
			<div class="settings">
				<div class="stack">
					<div class="switch-wrapper">
						<input type="checkbox" id="motion" name="motion" />
						<label for="motion" class="switch-label">Toggle Motion</label>
						<div class="switch">
							<span>Motion Off</span>
							<div class="thumb"></div>
							<span>Motion On</span>
						</div>
					</div>
					<div class="switch-wrapper">
						<input type="checkbox" id="round" name="round" />
						<label for="round" class="switch-label">Toggle Round</label>
						<div class="switch">
							<span>Squared</span>
							<div class="thumb"></div>
							<span>Rounded</span>
						</div>
					</div>
				</div>
				<div class="stack">
					<ThemeSelect />
					<AccentSelect />
				</div>
			</div>
		</div>
	</aside>
</template>

<script setup lang="ts">
import ThemeSelect from '@components/ThemeSelect.vue';
import AccentSelect from '@components/AccentSelect.vue';
</script>

<style>
.settings-wrapper {
	display: grid;
	gap: var(--space-sm);
	max-width: 1050px;
	margin-inline: auto;
}

.settings-wrapper h2 {
	color: var(--customColor);
}

.settings {
	display: flex;
	align-items: flex-start;
	gap: var(--space-lg) var(--space-md);
	flex-wrap: wrap;
	font-size: var(--fs-sm);
}

.stack {
	display: grid;
	gap: var(--space-sm);
	width: 100%;
}

.switch-wrapper {
	position: relative;
}

[type='checkbox'],
.switch-label {
	position: absolute;
	inset: 0;
	opacity: 0;
	cursor: pointer;
}

.switch {
	display: flex;
	gap: var(--space-xs);
	align-items: center;
	justify-content: space-evenly;
	padding: var(--space-md);
	border: 1px solid var(--customColor);
	border-radius: var(--round-md);
	pointer-events: none;
	background-color: var(--bkg);
}

.switch .thumb {
	--size: 3rem;
	flex-shrink: 0;
	position: relative;
	width: var(--size);
	height: calc(var(--size) / 2);
	background-color: var(--customColor);
	border-radius: var(--round-full);
	transition: box-shadow 0.2s var(--ease-elastic);
}

.switch .thumb::before {
	content: '';
	position: absolute;
	top: 50%;
	left: calc(var(--size) / 12);
	transform: translate(0, -50%);
	width: calc(var(--size) / 3);
	height: calc(var(--size) / 3);
	background-color: var(--bkg);
	border-radius: var(--round-full);
	transition: transform 0.2s var(--ease-elastic);
}

[type='checkbox']:focus-visible ~ .switch .thumb {
	box-shadow: var(--outline);
}

[type='checkbox']:checked ~ .switch .thumb::before {
	transform: translate(calc(var(--size) - var(--size) / 2), -50%);
}

legend {
	padding-inline: var(--space-md);
	border: 1px solid var(--customColor);
	border-radius: var(--round-md);
	background-color: var(--bkg);
}

.radio-wrapper {
	padding: var(--space-md);
	border: 1px solid var(--customColor);
	border-radius: var(--round-md);
	background-color: var(--bkg);
	display: flex;
	gap: var(--space-sm);
	flex-wrap: wrap;
}

.radio {
	--size: 1.5rem;
	display: flex;
	gap: var(--space-xs);
	position: relative;
	align-items: center;
}

[type='radio'] {
	position: absolute;
	inset: 0;
	opacity: 0;
	cursor: pointer;
}

.check {
	border: 1px solid var(--customColor);
	border-radius: var(--round-full);
	width: var(--size);
	height: var(--size);
	background-color: var(--bkg);
	transition: background-color 0.2s ease-in-out;
}

[type='radio']:checked ~ .check {
	background-color: var(--customColor);
}

[type='radio']:focus-visible ~ .check {
	box-shadow: var(--outline);
}

@media screen and (width <= 465px) {
	.radio-wrapper,
	.stack {
		max-width: fit-content;
	}

	.stack {
		flex: 1 1 40%;
	}
}
</style>
