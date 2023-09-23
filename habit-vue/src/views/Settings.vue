<template>
	<div class="settings">
		<h1>Settings</h1>
		<form>
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
			<label for="email">Email:</label>
			<input type="email" id="email" v-model="email" />
			<button type="submit">Save</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Settings',
	data() {
		return {
			name: '',
			email: ''
		};
	}
};
</script>

<style scoped>
.settings {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
}
label {
	display: block;
	margin-bottom: 10px;
}
input {
	width: 100%;
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 4px;
}
button {
	background-color: #007bff;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
button:hover {
	background-color: #0069d9;
}
</style>
