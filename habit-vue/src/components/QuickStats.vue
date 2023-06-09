<template>
	<div class="stat-list">
		<div class="stat-wrapper">
			<p class="item-status">
				<span class="status-number">7</span>
				<span class="status-type">Day Workout Streak</span>
			</p>
		</div>
		<div class="stat-wrapper">
			<p class="item-status">
				<span class="status-number">19</span>
				<span class="status-type">Longest Meditation</span>
			</p>
		</div>
		<div class="stat-wrapper">
			<p class="item-status">
				<span class="status-number">29</span>
				<span class="status-type">Day Water Streak</span>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.stat-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
}
.stat {
	container-type: inline-size;
}
.item-status {
	display: flex;
	border: 1px solid var(--main-color);
}

.status-number {
	font-size: 2rem;
}

.status-type {
	display: table-caption;
}
</style>
