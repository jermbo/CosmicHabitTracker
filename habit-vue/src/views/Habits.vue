<template>
	<div class="habits">
		<h1>Habits</h1>
		<ul>
			<li v-for="habit in habits" :key="habit.id">{{ habit.name }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Habits',
	data() {
		return {
			habits: [
				{ id: 1, name: 'Exercise' },
				{ id: 2, name: 'Read' },
				{ id: 3, name: 'Meditate' }
			]
		};
	}
};
</script>

<style scoped>
.habits {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
}
ul {
	list-style: none;
	padding: 0;
}
li {
	margin-bottom: 10px;
}
</style>
